"""Export CSV / Excel / HubSpot pour le pipeline outbound."""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

import polars as pl

from lib.common import OUTPUT_DIR, linkedin_dirigeant_url
from lib.scoring import add_priority_label

EXPORT_COLUMNS_ORDER = [
    "priorite",
    "score_icp",
    "raison_sociale",
    "dirigeant",
    "qualite_dirigeant",
    "telephone",
    "email",
    "effectif_libelle",
    "ville",
    "departement",
    "adresse",
    "code_postal",
    "siren",
    "siret",
    "code_naf",
    "activite_libelle",
    "date_creation",
    "categorie_entreprise",
    "site_web",
    "url_google_maps",
    "url_pagesjaunes",
    "url_linkedin",
    "url_pappers",
    "url_annuaire",
    "statut_outbound",
    "notes",
    "script_appel",
    "email_j0",
    "email_j3",
]

HUBSPOT_COLUMNS = {
    "raison_sociale": "Company name",
    "dirigeant": "Contact first name",
    "telephone": "Phone Number",
    "email": "Email",
    "ville": "City",
    "code_postal": "Postal Code",
    "adresse": "Street Address",
    "site_web": "Website URL",
    "siren": "SIREN",
    "statut_outbound": "Lead Status",
    "notes": "Notes",
    "score_icp": "Score ICP",
}


def _add_linkedin_urls(df: pl.DataFrame) -> pl.DataFrame:
    if "dirigeant" not in df.columns:
        return df.with_columns(pl.lit(None).cast(pl.Utf8).alias("url_linkedin"))

    return df.with_columns(
        pl.struct(["dirigeant", "raison_sociale", "ville"])
        .map_elements(
            lambda r: linkedin_dirigeant_url(
                r.get("dirigeant") or "",
                r.get("raison_sociale") or "",
                r.get("ville") or "",
            )
            if r.get("dirigeant")
            else None,
            return_dtype=pl.Utf8,
        )
        .alias("url_linkedin")
    )


def finalize_dataframe(df: pl.DataFrame, *, with_outreach: bool = False) -> pl.DataFrame:
    from lib.outreach import add_outreach_columns

    df = add_priority_label(df)
    df = _add_linkedin_urls(df)
    if with_outreach and "script_appel" not in df.columns:
        df = add_outreach_columns(df)

    cols = [c for c in EXPORT_COLUMNS_ORDER if c in df.columns]
    extra = [c for c in df.columns if c not in cols]
    return df.select(cols + extra)


def write_csv(df: pl.DataFrame, path: Path, *, with_outreach: bool = False) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    finalize_dataframe(df, with_outreach=with_outreach).write_csv(path, separator=";")


def write_json(df: pl.DataFrame, path: Path, *, with_outreach: bool = True) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    final = finalize_dataframe(df, with_outreach=with_outreach)
    path.write_text(
        json.dumps(final.to_dicts(), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def write_queue_today(df: pl.DataFrame, path: Path, n: int = 30) -> None:
    """Top N prospects a appeler aujourd'hui (avec dirigeant, priorite A/B)."""
    path.parent.mkdir(parents=True, exist_ok=True)
    final = finalize_dataframe(df, with_outreach=True)
    if "dirigeant" in final.columns:
        final = final.filter(pl.col("dirigeant").is_not_null() & (pl.col("dirigeant") != ""))
    if "priorite" in final.columns:
        queue = final.filter(
            pl.col("priorite").str.starts_with("A") | pl.col("priorite").str.starts_with("B")
        ).head(n)
        if len(queue) < n:
            queue = final.head(n)
    else:
        queue = final.head(n)
    path.write_text(
        json.dumps(queue.to_dicts(), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def write_excel(df: pl.DataFrame, path: Path, *, with_outreach: bool = False) -> None:
    import xlsxwriter

    path.parent.mkdir(parents=True, exist_ok=True)
    final = finalize_dataframe(df, with_outreach=with_outreach)
    top = final.head(100)

    workbook = xlsxwriter.Workbook(str(path))
    header_fmt = workbook.add_format({"bold": True, "bg_color": "#1e40af", "font_color": "white"})

    for sheet_name, data in (("tous", final), ("top_100", top)):
        ws = workbook.add_worksheet(sheet_name[:31])
        for col_idx, name in enumerate(data.columns):
            ws.write(0, col_idx, name, header_fmt)
        for row_idx, row in enumerate(data.iter_rows(), start=1):
            for col_idx, val in enumerate(row):
                if val is None:
                    continue
                ws.write(row_idx, col_idx, val)
        ws.autofilter(0, 0, len(data), len(data.columns) - 1)
        ws.freeze_panes(1, 0)

    workbook.close()


def write_top_csv(df: pl.DataFrame, path: Path, n: int = 100) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    finalize_dataframe(df).head(n).write_csv(path, separator=";")


def write_hubspot(df: pl.DataFrame, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    final = finalize_dataframe(df)
    cols = [c for c in HUBSPOT_COLUMNS if c in final.columns]
    hubspot = final.select(cols).rename({k: v for k, v in HUBSPOT_COLUMNS.items() if k in cols})
    hubspot.write_csv(path, separator=",")


def write_manifest(
    csv_path: Path,
    xlsx_path: Path | None = None,
    json_path: Path | None = None,
    queue_path: Path | None = None,
    count: int = 0,
) -> Path:
    with_dirigeant = 0
    callable_ab = 0
    if json_path and json_path.exists():
        data = json.loads(json_path.read_text(encoding="utf-8"))
        with_dirigeant = sum(1 for row in data if (row.get("dirigeant") or "").strip())
        for row in data:
            if not (row.get("dirigeant") or "").strip():
                continue
            p = (row.get("priorite") or "")[:1]
            if p in ("A", "B") and (row.get("statut_outbound") or "a_contacter") == "a_contacter":
                callable_ab += 1

    manifest = {
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "csv": csv_path.name,
        "json": json_path.name if json_path and json_path.exists() else None,
        "xlsx": xlsx_path.name if xlsx_path and xlsx_path.exists() else None,
        "queue_today": queue_path.name if queue_path and queue_path.exists() else None,
        "count": count,
        "with_dirigeant": with_dirigeant,
        "callable_ab": callable_ab,
        "enrichment_pct": round(with_dirigeant * 100 / count, 1) if count else 0,
        "dashboard": "/dashboard/",
        "focus_url": "/dashboard/?focus=1",
    }
    path = OUTPUT_DIR / "manifest.json"
    path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    return path
