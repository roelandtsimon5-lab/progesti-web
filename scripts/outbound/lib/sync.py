"""Synchronise le CRM SQLite vers les exports JSON/CSV."""

from __future__ import annotations

import json
from pathlib import Path

import polars as pl

from lib.crm import get_all_state
from lib.export import write_csv, write_json, write_manifest, write_queue_today


def merge_crm(df: pl.DataFrame) -> pl.DataFrame:
    state = get_all_state()
    if not state:
        return df

    state_rows = [
        {
            "siren": str(siren).zfill(9),
            "statut_outbound_crm": row.get("statut_outbound"),
            "telephone_crm": row.get("telephone"),
            "email_crm": row.get("email"),
            "notes_crm": row.get("notes"),
        }
        for siren, row in state.items()
    ]
    state_df = pl.DataFrame(state_rows)

    merged = df.with_columns(pl.col("siren").cast(pl.Utf8).str.zfill(9)).join(
        state_df, on="siren", how="left"
    )

    for col in ("statut_outbound", "telephone", "email", "notes"):
        crm_col = f"{col}_crm"
        if col in merged.columns:
            merged = merged.with_columns(
                pl.coalesce(pl.col(crm_col), pl.col(col).cast(pl.Utf8)).alias(col)
            ).drop(crm_col)
        else:
            merged = merged.rename({crm_col: col})

    return merged


def sync_exports(enriched_csv: Path) -> dict[str, Path]:
    """Met a jour JSON/CSV enrichis avec l'etat CRM."""
    if not enriched_csv.exists():
        raise FileNotFoundError(enriched_csv)

    df = pl.read_csv(enriched_csv, separator=";", infer_schema_length=1000, null_values=[""])
    merged = merge_crm(df)

    json_path = enriched_csv.with_suffix(".json")
    write_json(merged, json_path, with_outreach=True)
    write_csv(merged, enriched_csv, with_outreach=True)

    queue_path = enriched_csv.with_name(enriched_csv.stem + "_queue30.json")
    write_queue_today(merged, queue_path, n=30)

    xlsx = enriched_csv.with_suffix(".xlsx")
    write_manifest(
        enriched_csv,
        xlsx if xlsx.exists() else None,
        json_path,
        queue_path,
        count=len(merged),
    )

    return {"csv": enriched_csv, "json": json_path, "queue": queue_path}


def latest_enriched_csv(output_dir: Path) -> Path | None:
    files = [
        f
        for f in output_dir.glob("*_enrichi.csv")
        if "_hubspot" not in f.name and "_top" not in f.name
    ]
    return max(files, key=lambda p: p.stat().st_mtime) if files else None
