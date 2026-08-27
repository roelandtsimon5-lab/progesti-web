"""Fetch dirigeants : cache local, SIRENE UL, API gouv.fr."""

from __future__ import annotations

import json
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import polars as pl
import requests

from lib.common import CACHE_DIR, ENRICH_CACHE_DIR, format_dirigeant
from lib.enrichment import read_cache
from lib.ratelimit import RateLimiter

API_URL = "https://recherche-entreprises.api.gouv.fr/search"
USER_AGENT = "Progesti-Outbound/1.0 (contact@progesti.fr)"
UL_PARQUET = CACHE_DIR / "StockUniteLegale.parquet"

_rate_limiter = RateLimiter(requests_per_second=4.0)
_cache_lock = threading.Lock()

QUALITE_BY_FORME = {
    "1000": "Entrepreneur individuel",
    "5499": "Gerant",
    "5710": "President",
    "5720": "President",
    "5498": "Gerant",
}


def cache_path(siren: str) -> Path:
    return ENRICH_CACHE_DIR / f"{siren.zfill(9)}.json"


def write_cache(result: dict) -> None:
    ENRICH_CACHE_DIR.mkdir(parents=True, exist_ok=True)
    siren = str(result["siren"]).zfill(9)
    with _cache_lock:
        cache_path(siren).write_text(json.dumps(result, ensure_ascii=False), encoding="utf-8")


def needs_fetch(siren: str) -> bool:
    cached = read_cache(siren)
    if cached is None:
        return True
    if cached.get("dirigeant"):
        return False
    if cached.get("error"):
        return True
    if cached.get("found") is False and not cached.get("error"):
        return False
    return False


def apply_to_row(row: dict, data: dict) -> bool:
    dirigeant = (data.get("dirigeant") or "").strip()
    if not dirigeant:
        return False
    row["dirigeant"] = dirigeant
    row["qualite_dirigeant"] = data.get("qualite_dirigeant") or ""
    return True


def load_sirene_dirigeants(sirens: set[str]) -> dict[str, dict]:
    """Dirigeants depuis nom/prenom Unite Legale (EI, EURL, etc.)."""
    if not UL_PARQUET.exists() or not sirens:
        return {}

    df = (
        pl.scan_parquet(UL_PARQUET)
        .select(
            "siren",
            "nomUniteLegale",
            "prenom1UniteLegale",
            "categorieJuridiqueUniteLegale",
        )
        .filter(pl.col("siren").cast(pl.Utf8).str.zfill(9).is_in(list(sirens)))
        .collect()
    )

    out: dict[str, dict] = {}
    for row in df.iter_rows(named=True):
        siren = str(row["siren"]).zfill(9)
        nom = (row.get("nomUniteLegale") or "").strip()
        prenom = (row.get("prenom1UniteLegale") or "").strip()
        if not nom or not prenom:
            continue
        forme = str(row.get("categorieJuridiqueUniteLegale") or "")
        out[siren] = {
            "siren": siren,
            "found": True,
            "source": "sirene",
            "dirigeant": f"{prenom} {nom}".strip(),
            "qualite_dirigeant": QUALITE_BY_FORME.get(forme, "Dirigeant"),
        }
    return out


def enrich_from_sirene(rows: list[dict]) -> int:
    need = {
        str(r["siren"]).zfill(9)
        for r in rows
        if not (r.get("dirigeant") or "").strip()
    }
    mapping = load_sirene_dirigeants(need)
    added = 0
    for siren, data in mapping.items():
        write_cache(data)
        for row in rows:
            if str(row["siren"]).zfill(9) == siren and apply_to_row(row, data):
                added += 1
    return added


def apply_cache_to_rows(rows: list[dict]) -> int:
    applied = 0
    for row in rows:
        if (row.get("dirigeant") or "").strip():
            continue
        cached = read_cache(str(row["siren"]).zfill(9))
        if cached and apply_to_row(row, cached):
            applied += 1
    return applied


def fetch_company(siren: str) -> dict:
    siren = str(siren).zfill(9)
    cached = read_cache(siren)
    if cached is not None and cached.get("dirigeant"):
        return cached
    if cached is not None and cached.get("found") and not cached.get("error"):
        return cached

    _rate_limiter.wait()

    session = requests.Session()
    session.headers["User-Agent"] = USER_AGENT

    import time

    for attempt in range(3):
        try:
            resp = session.get(
                API_URL,
                params={"q": siren, "per_page": 1},
                timeout=(6, 25),
            )
            if resp.status_code == 429:
                time.sleep(float(resp.headers.get("Retry-After", "4")))
                continue
            resp.raise_for_status()
            break
        except requests.RequestException:
            if attempt == 2:
                return {"siren": siren, "found": False, "error": True, "transient": True}
            time.sleep(1 + attempt)
    else:
        return {"siren": siren, "found": False, "error": True, "transient": True}

    payload = resp.json()
    results = payload.get("results") or []
    if not results:
        result = {"siren": siren, "found": False}
    else:
        r = results[0]
        dirigeant, qualite = format_dirigeant(r.get("dirigeants") or [])
        result = {
            "siren": siren,
            "found": True,
            "source": "api",
            "dirigeant": dirigeant,
            "qualite_dirigeant": qualite,
            "nom_complet": r.get("nom_complet") or "",
        }

    write_cache(result)
    return result


def purge_error_cache() -> int:
    """Supprime les entrees cache erreur reseau (retentables)."""
    removed = 0
    for path in ENRICH_CACHE_DIR.glob("*.json"):
        data = json.loads(path.read_text(encoding="utf-8"))
        if data.get("error"):
            path.unlink()
            removed += 1
    return removed


def fetch_many(sirens: list[str], *, workers: int = 3) -> dict[str, dict]:
    results: dict[str, dict] = {}
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(fetch_company, s): s for s in sirens}
        for future in as_completed(futures):
            siren = futures[future]
            try:
                results[siren] = future.result()
            except Exception:
                results[siren] = {"siren": siren, "found": False, "error": True, "transient": True}
    return results
