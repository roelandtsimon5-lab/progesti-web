"""Score ICP Progesti (0-100) pour prioriser les appels."""

from __future__ import annotations

import polars as pl

# Poids par tranche effectif — sweet spot : 6-19 salariés
EFFECTIF_SCORES: dict[str, int] = {
    "03": 30,  # 6-9
    "11": 30,  # 10-19
    "02": 22,  # 3-5
    "12": 18,  # 20-49
    "01": 10,  # 1-2
}

# Formes juridiques structurées (plus susceptibles d'acheter un logiciel)
FORMES_BONUS = {"5499", "5710", "5720", "5498", "5515", "5599", "5800"}


def score_row(
    effectif_code: str | None,
    categorie_entreprise: str | None,
    forme_juridique: str | None,
    date_creation: str | None,
    dirigeant: str | None = None,
) -> int:
    score = 0
    code = str(effectif_code or "").strip()
    score += EFFECTIF_SCORES.get(code, 0)

    if (categorie_entreprise or "").upper() == "PME":
        score += 15

    forme = str(forme_juridique or "").strip()
    if forme in FORMES_BONUS:
        score += 10

    year = None
    if date_creation and len(str(date_creation)) >= 4:
        try:
            year = int(str(date_creation)[:4])
        except ValueError:
            pass

    if year:
        if year >= 2020:
            score += 15
        elif year >= 2015:
            score += 10
        elif year >= 2010:
            score += 5

    if dirigeant and str(dirigeant).strip():
        score += 5  # enrichi = plus actionnable

    return min(score, 100)


def add_icp_score(df: pl.DataFrame) -> pl.DataFrame:
    return df.with_columns(
        pl.struct(
            [
                "effectif_code",
                "categorie_entreprise",
                "forme_juridique",
                "date_creation",
                "dirigeant",
            ]
        )
        .map_elements(
            lambda r: score_row(
                r.get("effectif_code"),
                r.get("categorie_entreprise"),
                r.get("forme_juridique"),
                r.get("date_creation"),
                r.get("dirigeant"),
            ),
            return_dtype=pl.Int32,
        )
        .alias("score_icp")
    ).sort("score_icp", descending=True)


def priority_label(score: int) -> str:
    if score >= 70:
        return "A - Appeler en priorite"
    if score >= 50:
        return "B - Bon potentiel"
    if score >= 30:
        return "C - A contacter"
    return "D - Faible priorite"


def add_priority_label(df: pl.DataFrame) -> pl.DataFrame:
    if "score_icp" not in df.columns:
        df = add_icp_score(df)
    return df.with_columns(
        pl.col("score_icp")
        .map_elements(priority_label, return_dtype=pl.Utf8)
        .alias("priorite")
    )
