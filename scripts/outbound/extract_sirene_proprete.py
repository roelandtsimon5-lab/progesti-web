#!/usr/bin/env python3
"""
Extrait les entreprises de nettoyage en France depuis la base SIRENE (INSEE).

Source : https://www.data.gouv.fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/
Les URLs sont resolues dynamiquement via l'API data.gouv.fr (mise a jour mensuelle).

Usage :
    pip install -r requirements.txt
    python extract_sirene_proprete.py --icp-only --skip-download
    python extract_sirene_proprete.py --icp-only --vague idf --skip-download
    python extract_sirene_proprete.py --departement 75,92,93 --skip-download
"""

from __future__ import annotations

import argparse
import json
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

import polars as pl
import requests

from lib.common import (
    CACHE_DIR,
    OUTPUT_DIR,
    WAVES,
    annuaire_url,
    dept_from_postal,
    google_maps_url,
    linkedin_dirigeant_url,
    pagesjaunes_url,
    pappers_url,
)

# ── Configuration ──────────────────────────────────────────────────────────────

DATASET_SLUG = "base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret"
DATASET_API = f"https://www.data.gouv.fr/api/1/datasets/{DATASET_SLUG}/"

NAF_PROPRETE = ["81.21Z", "81.22Z", "81.29A", "81.29B"]

NAF_LABELS = {
    "81.21Z": "Nettoyage courant des batiments",
    "81.22Z": "Nettoyage industriel / fin de chantier",
    "81.29A": "Desinfection, desinsectisation, deratisation",
    "81.29B": "Autres activites de nettoyage",
}

TRANCHE_LABELS = {
    "NN": "Non renseigne",
    "00": "0 salarie",
    "01": "1-2 salaries",
    "02": "3-5 salaries",
    "03": "6-9 salaries",
    "11": "10-19 salaries",
    "12": "20-49 salaries",
    "21": "50-99 salaries",
    "22": "100-199 salaries",
    "31": "200-249 salaries",
    "32": "250-499 salaries",
    "41": "500-999 salaries",
    "42": "1000-1999 salaries",
    "51": "2000-4999 salaries",
    "52": "5000-9999 salaries",
    "53": "10000+ salaries",
}

ICP_TRANCHES_DEFAULT = ["01", "02", "03", "11", "12"]

EXPORT_COLUMNS = [
    "raison_sociale",
    "siren",
    "siret",
    "code_naf",
    "activite_libelle",
    "effectif_code",
    "effectif_libelle",
    "categorie_entreprise",
    "forme_juridique",
    "date_creation",
    "adresse",
    "code_postal",
    "ville",
    "departement",
    "dirigeant",
    "qualite_dirigeant",
    "telephone",
    "email",
    "site_web",
    "url_annuaire",
    "url_pappers",
    "url_google_maps",
    "statut_outbound",
    "notes",
]

# ── Utilitaires ────────────────────────────────────────────────────────────────


def log(msg: str) -> None:
    try:
        print(msg, flush=True)
    except UnicodeEncodeError:
        print(msg.encode("ascii", errors="replace").decode("ascii"), flush=True)


def resolve_parquet_urls() -> tuple[str, str]:
    log("Resolution des URLs SIRENE via data.gouv.fr…")
    with urllib.request.urlopen(DATASET_API, timeout=30) as resp:
        data = json.load(resp)

    etab_url = ul_url = None
    for resource in data.get("resources", []):
        if resource.get("format") != "parquet":
            continue
        title = resource.get("title", "")
        url = resource.get("url", "")
        if "StockEtablissement -" in title and "Historique" not in title and "Liens" not in title:
            etab_url = url
        elif "StockUniteLegale -" in title and "Historique" not in title:
            ul_url = url

    if not etab_url or not ul_url:
        raise RuntimeError("Impossible de trouver les fichiers parquet SIRENE sur data.gouv.fr")

    log(f"  Etablissements : {etab_url}")
    log(f"  Unites legales : {ul_url}")
    return etab_url, ul_url


def download_file(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    log(f"Telechargement -> {dest.name}")

    with requests.get(url, stream=True, timeout=60) as resp:
        resp.raise_for_status()
        total = int(resp.headers.get("content-length", 0))
        downloaded = 0
        chunk_size = 1024 * 1024

        with open(dest, "wb") as f:
            for chunk in resp.iter_content(chunk_size=chunk_size):
                if not chunk:
                    continue
                f.write(chunk)
                downloaded += len(chunk)
                if total:
                    pct = downloaded * 100 // total
                    mb = downloaded / (1024 * 1024)
                    total_mb = total / (1024 * 1024)
                    print(f"\r  {mb:.0f}/{total_mb:.0f} Mo ({pct}%)", end="", flush=True)

    print(flush=True)
    log(f"  OK {dest.name} ({dest.stat().st_size / (1024*1024):.0f} Mo)")


def build_company_name_expr() -> pl.Expr:
    person = (
        pl.col("nomUniteLegale").fill_null("")
        + " "
        + pl.col("prenom1UniteLegale").fill_null("")
    ).str.strip_chars()

    return (
        pl.when(pl.col("denominationUniteLegale").is_not_null() & (pl.col("denominationUniteLegale") != ""))
        .then(pl.col("denominationUniteLegale"))
        .when(person != "")
        .then(person)
        .when(pl.col("enseigne1Etablissement").is_not_null() & (pl.col("enseigne1Etablissement") != ""))
        .then(pl.col("enseigne1Etablissement"))
        .otherwise(pl.col("denominationUsuelleEtablissement"))
        .alias("raison_sociale")
    )


def build_address_expr() -> pl.Expr:
    parts = [
        pl.col("numeroVoieEtablissement").fill_null("").cast(pl.Utf8),
        pl.col("typeVoieEtablissement").fill_null("").cast(pl.Utf8),
        pl.col("libelleVoieEtablissement").fill_null("").cast(pl.Utf8),
    ]
    return pl.concat_str(parts, separator=" ").str.strip_chars().alias("adresse")


def add_outbound_columns(df: pl.DataFrame) -> pl.DataFrame:
    return df.with_columns(
        build_company_name_expr(),
        build_address_expr(),
        pl.col("trancheEffectifsUniteLegale")
        .cast(pl.Utf8)
        .replace(TRANCHE_LABELS)
        .alias("effectif_libelle"),
        pl.col("codePostalEtablissement")
        .map_elements(dept_from_postal, return_dtype=pl.Utf8)
        .alias("departement"),
        pl.col("activitePrincipaleEtablissement")
        .replace(NAF_LABELS)
        .alias("activite_libelle"),
    ).with_columns(
        pl.col("siren")
        .map_elements(lambda s: annuaire_url(str(s).zfill(9)), return_dtype=pl.Utf8)
        .alias("url_annuaire"),
        pl.col("siren")
        .map_elements(lambda s: pappers_url(str(s).zfill(9)), return_dtype=pl.Utf8)
        .alias("url_pappers"),
        pl.struct(["raison_sociale", "libelleCommuneEtablissement", "codePostalEtablissement"])
        .map_elements(
            lambda r: google_maps_url(
                r.get("raison_sociale") or "",
                r.get("libelleCommuneEtablissement") or "",
                str(r.get("codePostalEtablissement") or ""),
            ),
            return_dtype=pl.Utf8,
        )
        .alias("url_google_maps"),
        pl.struct(["raison_sociale", "libelleCommuneEtablissement", "codePostalEtablissement"])
        .map_elements(
            lambda r: pagesjaunes_url(
                r.get("raison_sociale") or "",
                r.get("libelleCommuneEtablissement") or "",
                str(r.get("codePostalEtablissement") or ""),
            ),
            return_dtype=pl.Utf8,
        )
        .alias("url_pagesjaunes"),
    ).select(
        pl.col("raison_sociale"),
        pl.col("siren").cast(pl.Utf8).str.zfill(9),
        pl.col("siret").cast(pl.Utf8).str.zfill(14),
        pl.col("activitePrincipaleEtablissement").alias("code_naf"),
        pl.col("activite_libelle"),
        pl.col("trancheEffectifsUniteLegale").alias("effectif_code"),
        pl.col("effectif_libelle"),
        pl.col("categorieEntreprise").alias("categorie_entreprise"),
        pl.col("categorieJuridiqueUniteLegale").alias("forme_juridique"),
        pl.col("dateCreationUniteLegale").alias("date_creation"),
        pl.col("adresse"),
        pl.col("codePostalEtablissement").alias("code_postal"),
        pl.col("libelleCommuneEtablissement").alias("ville"),
        pl.col("departement"),
        pl.lit(None).cast(pl.Utf8).alias("dirigeant"),
        pl.lit(None).cast(pl.Utf8).alias("qualite_dirigeant"),
        pl.lit(None).cast(pl.Utf8).alias("telephone"),
        pl.lit(None).cast(pl.Utf8).alias("email"),
        pl.lit(None).cast(pl.Utf8).alias("site_web"),
        pl.col("url_annuaire"),
        pl.col("url_pappers"),
        pl.col("url_google_maps"),
        pl.col("url_pagesjaunes"),
        pl.lit(None).cast(pl.Utf8).alias("url_linkedin"),
        pl.lit("a_contacter").alias("statut_outbound"),
        pl.lit(None).cast(pl.Utf8).alias("notes"),
    )


def extract(
    etab_path: Path,
    ul_path: Path,
    *,
    naf_codes: list[str],
    icp_only: bool,
    icp_tranches: list[str],
    departements: list[str] | None,
    exclude_auto: bool,
    min_year: int | None,
) -> pl.DataFrame:
    log("Filtrage et jointure des donnees…")

    etab = (
        pl.scan_parquet(etab_path)
        .filter(
            pl.col("etatAdministratifEtablissement") == "A",
            pl.col("etablissementSiege") == True,  # noqa: E712
            pl.col("activitePrincipaleEtablissement").is_in(naf_codes),
            pl.col("statutDiffusionEtablissement") != "N",
        )
        .select(
            "siren",
            "siret",
            "activitePrincipaleEtablissement",
            "numeroVoieEtablissement",
            "typeVoieEtablissement",
            "libelleVoieEtablissement",
            "codePostalEtablissement",
            "libelleCommuneEtablissement",
            "enseigne1Etablissement",
            "denominationUsuelleEtablissement",
        )
    )

    ul = (
        pl.scan_parquet(ul_path)
        .filter(
            pl.col("etatAdministratifUniteLegale") == "A",
            pl.col("statutDiffusionUniteLegale") != "N",
        )
        .select(
            "siren",
            "denominationUniteLegale",
            "nomUniteLegale",
            "prenom1UniteLegale",
            "trancheEffectifsUniteLegale",
            "dateCreationUniteLegale",
            "categorieJuridiqueUniteLegale",
            "categorieEntreprise",
        )
    )

    df = etab.join(ul, on="siren", how="inner").collect()

    if icp_only:
        df = df.filter(pl.col("trancheEffectifsUniteLegale").is_in(icp_tranches))
        log(f"  Filtre ICP ({', '.join(icp_tranches)}) : {len(df):,} entreprises")

    if exclude_auto:
        before = len(df)
        df = df.filter(pl.col("categorieJuridiqueUniteLegale") != "1000")
        log(f"  Exclusion auto-entrepreneurs : {before - len(df):,} retires -> {len(df):,}")

    if min_year:
        df = df.filter(
            pl.col("dateCreationUniteLegale").str.slice(0, 4).cast(pl.Int32, strict=False) >= min_year
        )

    df = add_outbound_columns(df)

    if departements:
        dept_set = {d.strip().upper() for d in departements}
        df = df.filter(pl.col("departement").is_in(dept_set))
        log(f"  Filtre departements ({len(dept_set)} dept.) : {len(df):,} entreprises")

    return df.sort("departement", "ville", "raison_sociale")


def export_results(df: pl.DataFrame, output_dir: Path, suffix: str = "") -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    ts = datetime.now(timezone.utc).strftime("%Y%m%d")
    tag = f"_{suffix}" if suffix else ""
    master_path = output_dir / f"proprete{tag}_{ts}.csv"

    df.select(EXPORT_COLUMNS).write_csv(master_path, separator=";")
    log(f"\nOK Export principal : {master_path} ({len(df):,} lignes)")

    dept_dir = output_dir / f"par_departement{tag}_{ts}"
    dept_dir.mkdir(exist_ok=True)
    for dept in df["departement"].unique().sort():
        if not dept:
            continue
        df.filter(pl.col("departement") == dept).select(EXPORT_COLUMNS).write_csv(
            dept_dir / f"dept_{dept}.csv", separator=";"
        )

    n_depts = len(list(dept_dir.glob("*.csv")))
    log(f"OK Export par departement : {dept_dir}/ ({n_depts} fichiers)")

    summary = df.group_by("departement").agg(pl.len().alias("nb_entreprises")).sort("departement")
    summary_path = output_dir / f"resume{tag}_{ts}.csv"
    summary.write_csv(summary_path, separator=";")
    log(f"OK Resume : {summary_path}")

    log("\n-- Top 10 departements --")
    for row in summary.sort("nb_entreprises", descending=True).head(10).iter_rows(named=True):
        log(f"  {row['departement']} : {row['nb_entreprises']:,}")

    return master_path


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Extrait les entreprises de nettoyage depuis SIRENE (INSEE / data.gouv.fr)"
    )
    p.add_argument("--icp-only", action="store_true", help="ICP Progesti : 1-49 salaries")
    p.add_argument("--departement", type=str, default=None, help="Departements (ex: 75,92,93)")
    p.add_argument(
        "--vague",
        choices=list(WAVES.keys()),
        default=None,
        help="Vague predefinie : idf, metropoles, france",
    )
    p.add_argument("--naf", type=str, default=",".join(NAF_PROPRETE))
    p.add_argument("--exclude-auto", action="store_true")
    p.add_argument("--min-year", type=int, default=None)
    p.add_argument("--skip-download", action="store_true")
    p.add_argument("--output", type=Path, default=OUTPUT_DIR)
    return p.parse_args()


def resolve_departements(args: argparse.Namespace) -> list[str] | None:
    if args.departement:
        return [d.strip() for d in args.departement.split(",") if d.strip()]
    if args.vague:
        depts = WAVES[args.vague]
        return depts if depts else None
    return None


def main() -> int:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    args = parse_args()
    naf_codes = [c.strip().upper() for c in args.naf.split(",") if c.strip()]
    departements = resolve_departements(args)
    suffix = args.vague or ""

    log("=== Extraction SIRENE - Entreprises de proprete ===\n")
    if args.vague:
        log(f"Vague : {args.vague} ({len(departements or [])} departements)\n")

    etab_cache = CACHE_DIR / "StockEtablissement.parquet"
    ul_cache = CACHE_DIR / "StockUniteLegale.parquet"

    if args.skip_download and etab_cache.exists() and ul_cache.exists():
        log("Cache local trouve, telechargement ignore.")
    else:
        etab_url, ul_url = resolve_parquet_urls()
        download_file(etab_url, etab_cache)
        download_file(ul_url, ul_cache)

    df = extract(
        etab_cache,
        ul_cache,
        naf_codes=naf_codes,
        icp_only=args.icp_only,
        icp_tranches=ICP_TRANCHES_DEFAULT,
        departements=departements,
        exclude_auto=args.exclude_auto,
        min_year=args.min_year,
    )

    if len(df) == 0:
        log("\nATTENTION: Aucune entreprise trouvee avec ces filtres.")
        return 1

    master = export_results(df, args.output, suffix=suffix)

    log(f"\n=== Termine : {len(df):,} entreprises exportees ===")
    log("\nProchaine etape :")
    log(f"  python enrich_prospects.py \"{master}\" --resume")
    return 0


if __name__ == "__main__":
    sys.exit(main())
