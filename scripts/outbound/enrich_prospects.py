#!/usr/bin/env python3
"""
Enrichit un CSV SIRENE : dirigeants (API gouv.fr) + score ICP + messages outreach.

Usage :
    python enrich_prospects.py output/proprete_idf_20260826.csv --resume
    python enrich_prospects.py output/proprete_idf_20260826.csv --cache-only
    python enrich_prospects.py output/proprete_idf_20260826.csv --max
"""

from __future__ import annotations

import argparse
import json
import sys
import time
from pathlib import Path

import polars as pl

from lib.fetch_dirigeant import apply_cache_to_rows, apply_to_row, enrich_from_sirene, fetch_many, needs_fetch, purge_error_cache
from lib.export import (
    write_csv,
    write_excel,
    write_hubspot,
    write_json,
    write_manifest,
    write_queue_today,
    write_top_csv,
)


def log(msg: str) -> None:
    if hasattr(sys.stdout, "reconfigure"):
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass
    print(msg, flush=True)


def fast_checkpoint(rows: list[dict], output_path: Path, json_path: Path) -> None:
    pl.DataFrame(rows).write_csv(output_path, separator=";")
    json_path.write_text(
        json.dumps(rows, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )


def unique_sirens(rows: list[dict]) -> list[str]:
    seen: set[str] = set()
    out: list[str] = []
    for row in rows:
        siren = str(row["siren"]).zfill(9)
        if siren not in seen:
            seen.add(siren)
            out.append(siren)
    return out


def enrich_csv(
    input_path: Path,
    output_path: Path,
    *,
    limit: int | None,
    excel: bool,
    top: int,
    cache_only: bool = False,
    max_run: bool = False,
) -> pl.DataFrame:
    df = pl.read_csv(input_path, separator=";", infer_schema_length=1000, null_values=[""])
    if "siren" not in df.columns:
        raise ValueError("Le CSV doit contenir une colonne 'siren'")

    for col in ("dirigeant", "qualite_dirigeant", "telephone", "email", "site_web", "notes"):
        if col not in df.columns:
            df = df.with_columns(pl.lit(None).cast(pl.Utf8).alias(col))

    rows = df.to_dicts()
    if limit:
        rows = rows[:limit]

    json_path = output_path.with_suffix(".json")

    if max_run and not cache_only:
        purged = purge_error_cache()
        if purged:
            log(f"Cache : {purged:,} erreurs reseau purgees (retentables)")

    from_cache = apply_cache_to_rows(rows)
    if from_cache:
        log(f"Cache : {from_cache:,} dirigeants integres")

    from_sirene = enrich_from_sirene(rows)
    if from_sirene:
        log(f"SIRENE UL : +{from_sirene:,} dirigeants (nom/prenom)")

    sirens = unique_sirens(rows)
    to_fetch = [s for s in sirens if needs_fetch(s)] if not cache_only else []

    if cache_only:
        log("Mode cache-only — pas d'appels API")
    elif not to_fetch:
        log("Tous les SIREN deja resolus")
    else:
        mins = max(1, len(to_fetch) // 360)
        log(f"Enrichissement API : {len(to_fetch):,} SIREN (~{mins} min, 3 workers)…")

    enriched = 0
    started = time.monotonic()
    siren_to_rows: dict[str, list[int]] = {}
    for i, row in enumerate(rows):
        siren = str(row["siren"]).zfill(9)
        siren_to_rows.setdefault(siren, []).append(i)

    batch_size = 30
    workers = 3 if max_run else 2
    for batch_start in range(0, len(to_fetch), batch_size):
        batch = to_fetch[batch_start : batch_start + batch_size]
        results = fetch_many(batch, workers=workers)
        for siren, data in results.items():
            if data.get("dirigeant"):
                for i in siren_to_rows.get(siren, []):
                    if apply_to_row(rows[i], data):
                        enriched += 1

        done = min(batch_start + len(batch), len(to_fetch))
        if done % 30 == 0 or done == len(to_fetch):
            elapsed = time.monotonic() - started
            rate = done / elapsed if elapsed > 0 else 0
            eta = int((len(to_fetch) - done) / rate) if rate > 0 else 0
            total = sum(1 for r in rows if (r.get("dirigeant") or "").strip())
            log(
                f"  [{done:,}/{len(to_fetch):,}] +{enriched} nouveaux | "
                f"total {total:,} | {done * 100 // len(to_fetch)}% | ETA {eta // 60}m{eta % 60:02d}s"
            )
            fast_checkpoint(rows, output_path, json_path)

    out = pl.DataFrame(rows)

    write_csv(out, output_path, with_outreach=True)
    log(f"\nOK CSV enrichi : {output_path}")

    write_json(out, json_path, with_outreach=True)
    log(f"OK JSON (cockpit) : {json_path}")

    if excel:
        xlsx_path = output_path.with_suffix(".xlsx")
        write_excel(out, xlsx_path, with_outreach=True)
        log(f"OK Excel : {xlsx_path}")

    if top > 0:
        top_path = output_path.with_name(output_path.stem + f"_top{top}.csv")
        write_top_csv(out, top_path, n=top)
        log(f"OK Top {top} : {top_path}")

    queue_path = output_path.with_name(output_path.stem + "_queue30.json")
    write_queue_today(out, queue_path, n=30)
    log(f"OK File du jour (30 appels) : {queue_path}")

    hubspot_path = output_path.with_name(output_path.stem + "_hubspot.csv")
    write_hubspot(out, hubspot_path)
    log(f"OK HubSpot : {hubspot_path}")

    xlsx_path = output_path.with_suffix(".xlsx") if excel else None
    write_manifest(output_path, xlsx_path, json_path, queue_path, count=len(out))

    with_dir = sum(1 for r in rows if (r.get("dirigeant") or "").strip())
    pct = with_dir * 100 / len(rows) if rows else 0
    log(f"\n=== RESULTAT : {pct:.1f}% ({with_dir:,} / {len(rows):,} dirigeants) ===")
    return out


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Enrichit prospects : dirigeants + score + outreach")
    p.add_argument("input", type=Path)
    p.add_argument("-o", "--output", type=Path, default=None)
    p.add_argument("--limit", type=int, default=None)
    p.add_argument("--cache-only", action="store_true", help="Reconstruire depuis le cache sans API")
    p.add_argument("--max", action="store_true", help="Enrichir jusqu'au bout (ignore limite erreurs)")
    p.add_argument("--excel", action="store_true", default=True)
    p.add_argument("--no-excel", action="store_false", dest="excel")
    p.add_argument("--top", type=int, default=100)
    return p.parse_args()


def main() -> int:
    args = parse_args()
    if not args.input.exists():
        log(f"Fichier introuvable : {args.input}")
        return 1

    output = args.output or args.input.with_name(args.input.stem + "_enrichi.csv")
    enrich_csv(
        args.input,
        output,
        limit=args.limit,
        excel=args.excel,
        top=args.top,
        cache_only=args.cache_only,
        max_run=args.max,
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
