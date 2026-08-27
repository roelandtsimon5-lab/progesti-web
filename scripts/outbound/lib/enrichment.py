"""Etat d'avancement de l'enrichissement dirigeants."""

from __future__ import annotations

import json
from pathlib import Path

from lib.common import ENRICH_CACHE_DIR


def enrichment_status(path: Path) -> dict[str, int | float]:
    """Compte les dirigeants dans un export enrichi (JSON ou CSV)."""
    json_path = path if path.suffix == ".json" else path.with_suffix(".json")
    empty = {
        "total": 0,
        "with_dirigeant": 0,
        "pct": 0.0,
        "remaining_pct": 100.0,
        "callable_ab": 0,
        "callable_ab_pct": 0.0,
    }
    if not json_path.exists():
        return empty

    data = json.loads(json_path.read_text(encoding="utf-8"))
    total = len(data)
    with_dir = sum(1 for row in data if (row.get("dirigeant") or "").strip())
    pct = (with_dir * 100 / total) if total else 0.0
    remaining_pct = 100.0 - pct

    callable_ab = 0
    for row in data:
        if not (row.get("dirigeant") or "").strip():
            continue
        p = (row.get("priorite") or "")[:1]
        if p in ("A", "B") and (row.get("statut_outbound") or "a_contacter") == "a_contacter":
            callable_ab += 1
    ab_pct = (callable_ab * 100 / total) if total else 0.0

    return {
        "total": total,
        "with_dirigeant": with_dir,
        "pct": round(pct, 1),
        "remaining_pct": round(remaining_pct, 1),
        "callable_ab": callable_ab,
        "callable_ab_pct": round(ab_pct, 1),
    }


def pct_bar(pct: float, width: int = 24) -> str:
    pct = max(0.0, min(100.0, pct))
    filled = int(round(pct / 100 * width))
    return f"[{'#' * filled}{'.' * (width - filled)}] {pct:.1f}%"


def needs_enrichment(path: Path, *, min_pct: float = 90.0) -> bool:
    status = enrichment_status(path)
    if status["total"] == 0:
        return True
    return status["pct"] < min_pct


def load_prior_enrichment(output_path: Path) -> dict[str, dict[str, str]]:
    """Charge dirigeants deja connus depuis un export enrichi."""
    prior: dict[str, dict[str, str]] = {}
    json_path = output_path.with_suffix(".json")
    if not json_path.exists():
        return prior

    for row in json.loads(json_path.read_text(encoding="utf-8")):
        siren = str(row.get("siren", "")).zfill(9)
        dirigeant = (row.get("dirigeant") or "").strip()
        if not dirigeant:
            continue
        prior[siren] = {
            "dirigeant": dirigeant,
            "qualite_dirigeant": (row.get("qualite_dirigeant") or "").strip(),
        }
    return prior


def read_cache(siren: str) -> dict | None:
    path = ENRICH_CACHE_DIR / f"{siren.zfill(9)}.json"
    if not path.exists():
        return None
    return json.loads(path.read_text(encoding="utf-8"))


def callable_enough(path: Path, *, min_count: int = 200) -> bool:
    return enrichment_status(path)["with_dirigeant"] >= min_count
