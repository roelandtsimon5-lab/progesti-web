#!/usr/bin/env python3
"""
Pipeline outbound Progesti — extraction + enrichissement en une commande.

Usage :
    python pipeline.py idf
    python pipeline.py idf --limit 100        # test rapide
    python pipeline.py france --skip-download
    python pipeline.py enrich output/proprete_idf_20260826.csv
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

from lib.common import OUTPUT_DIR, WAVES
from lib.enrichment import enrichment_status, needs_enrichment

SCRIPT_DIR = Path(__file__).resolve().parent


def log(msg: str) -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    print(msg, flush=True)


def latest_enriched(vague: str | None = None) -> Path | None:
    pattern = f"proprete_{vague}_*_enrichi.json" if vague and vague != "france" else "*_enrichi.json"
    files = [f for f in OUTPUT_DIR.glob(pattern) if "_queue" not in f.name]
    return max(files, key=lambda p: p.stat().st_mtime) if files else None


def is_fresh_today(path: Path) -> bool:
    from datetime import datetime

    mtime = datetime.fromtimestamp(path.stat().st_mtime)
    return mtime.date() == datetime.now().date()


def latest_extract(vague: str | None = None) -> Path | None:
    pattern = f"proprete_{vague}_*.csv" if vague else "proprete_*.csv"
    files = [
        f
        for f in OUTPUT_DIR.glob(pattern)
        if "_enrichi" not in f.name and "_top" not in f.name
    ]
    if not files:
        return None
    return max(files, key=lambda p: p.stat().st_mtime)


def run_extract(vague: str | None, *, skip_download: bool, icp_only: bool = True) -> Path:
    cmd = [sys.executable, str(SCRIPT_DIR / "extract_sirene_proprete.py")]
    if icp_only:
        cmd.append("--icp-only")
    if vague and vague != "france":
        cmd.extend(["--vague", vague])
    if skip_download:
        cmd.append("--skip-download")

    log(f">>> {' '.join(cmd)}")
    subprocess.run(cmd, check=True, cwd=SCRIPT_DIR)

    path = latest_extract(vague if vague and vague != "france" else None)
    if not path:
        raise FileNotFoundError("Export introuvable apres extraction")
    return path


def run_rebuild(csv_path: Path) -> Path:
    cmd = [
        sys.executable,
        str(SCRIPT_DIR / "enrich_prospects.py"),
        str(csv_path),
        "--cache-only",
        "--excel",
    ]
    log(f">>> {' '.join(cmd)}")
    subprocess.run(cmd, check=True, cwd=SCRIPT_DIR)
    return csv_path.with_name(csv_path.stem + "_enrichi.csv")


def run_enrich(
    csv_path: Path,
    *,
    limit: int | None,
    resume: bool,
) -> Path:
    cmd = [
        sys.executable,
        str(SCRIPT_DIR / "enrich_prospects.py"),
        str(csv_path),
        "--excel",
    ]
    if limit:
        cmd.extend(["--limit", str(limit)])
    if resume:
        cmd.append("--resume")

    log(f">>> {' '.join(cmd)}")
    subprocess.run(cmd, check=True, cwd=SCRIPT_DIR)
    return csv_path.with_name(csv_path.stem + "_enrichi.csv")


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Pipeline outbound Progesti")
    p.add_argument(
        "action",
        choices=["idf", "metropoles", "france", "enrich", "call"],
        help="Vague a traiter, enrich seul, ou call (smart)",
    )
    p.add_argument("--force", action="store_true", help="Regenerer meme si export du jour existe")
    p.add_argument("--skip-download", action="store_true")
    p.add_argument("--limit", type=int, default=None, help="Limiter enrichissement (test)")
    p.add_argument("--no-enrich", action="store_true", help="Extraction seule")
    p.add_argument("--resume", action="store_true", help="Reprendre enrichissement")
    p.add_argument("--input", type=Path, default=None, help="CSV pour action=enrich")
    return p.parse_args()


def main() -> int:
    args = parse_args()
    log("=== Pipeline outbound Progesti ===\n")

    try:
        if args.action == "call":
            csv_path = latest_extract("idf")
            if not csv_path:
                csv_path = run_extract("idf", skip_download=True)
                log(f"\nExtraction OK : {csv_path}")

            result = run_rebuild(csv_path)
            enriched = latest_enriched("idf")
            if enriched:
                status = enrichment_status(enriched)
                log(
                    f"\n=== Pret a appeler ===\n"
                    f"  {status['with_dirigeant']:,} prospects avec dirigeant "
                    f"({status['pct']:.0f}% de la liste)"
                )
                if needs_enrichment(enriched):
                    log("  Pour completer : python prospects.py enrich")
            log(f"  python serve.py")
            log(f"  Fichier : {result}")
            return 0

        if args.action == "enrich":
            csv_path = args.input or latest_extract()
            if not csv_path or not csv_path.exists():
                log("Aucun CSV trouve. Lancez : python pipeline.py idf")
                return 1
            result = run_enrich(
                csv_path, limit=args.limit, resume=args.resume
            )
        else:
            csv_path = run_extract(args.action, skip_download=args.skip_download)
            log(f"\nExtraction OK : {csv_path}")
            if args.no_enrich:
                return 0
            result = run_enrich(
                csv_path, limit=args.limit, resume=args.resume
            )

        log(f"\n=== Pipeline termine ===")
        log(f"Fichier final : {result}")
        if result.with_suffix(".xlsx").exists():
            log(f"Excel outreach : {result.with_suffix('.xlsx')}")
        top = result.with_name(result.stem + "_top100.csv")
        if top.exists():
            log(f"Top 100 a appeler : {top}")
        log("\nOuvrez le cockpit : python serve.py  (ou .\\run.ps1 dashboard)")
        return 0

    except subprocess.CalledProcessError as exc:
        log(f"\nERREUR pipeline (code {exc.returncode})")
        return exc.returncode or 1
    except FileNotFoundError as exc:
        log(f"\nERREUR : {exc}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
