from __future__ import annotations

import urllib.parse
from pathlib import Path

# Vagues outbound recommandées
WAVES: dict[str, list[str]] = {
    "idf": ["75", "77", "78", "91", "92", "93", "94", "95"],
    "metropoles": ["69", "13", "31", "33", "59", "44", "67", "06", "34", "35", "38", "76"],
    "france": [],  # pas de filtre département
}

SCRIPT_DIR = Path(__file__).resolve().parent.parent
CACHE_DIR = SCRIPT_DIR / ".cache"
OUTPUT_DIR = SCRIPT_DIR / "output"
ENRICH_CACHE_DIR = CACHE_DIR / "enrichissement"


def dept_from_postal(code: str | None) -> str:
    if not code or len(code) < 2:
        return ""
    if code.startswith(("97", "98")):
        return code[:3]
    if code.startswith("20"):
        try:
            return "2A" if int(code[:5]) < 20200 else "2B"
        except ValueError:
            return "20"
    return code[:2]


def google_maps_url(raison_sociale: str, ville: str, code_postal: str) -> str:
    query = ", ".join(p for p in [raison_sociale, code_postal, ville, "France"] if p)
    return "https://www.google.com/maps/search/?api=1&query=" + urllib.parse.quote(query)


def annuaire_url(siren: str) -> str:
    return f"https://annuaire-entreprises.data.gouv.fr/entreprise/{siren}"


def pappers_url(siren: str) -> str:
    return f"https://www.pappers.fr/entreprise/{siren}"


def pagesjaunes_url(raison_sociale: str, ville: str, code_postal: str) -> str:
    query = " ".join(p for p in [raison_sociale, "nettoyage", code_postal, ville] if p)
    return "https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=" + urllib.parse.quote(query)


def linkedin_dirigeant_url(dirigeant: str, raison_sociale: str, ville: str) -> str:
    query = " ".join(p for p in [dirigeant, raison_sociale, ville] if p)
    return "https://www.linkedin.com/search/results/people/?keywords=" + urllib.parse.quote(query)


def format_dirigeant(dirigeants: list[dict]) -> tuple[str, str]:
    """Retourne (nom complet, qualité) du premier dirigeant personne physique."""
    for d in dirigeants or []:
        if d.get("type_dirigeant") != "personne physique":
            continue
        nom = (d.get("nom") or "").strip()
        prenoms = (d.get("prenoms") or "").strip()
        qualite = (d.get("qualite") or "").strip()
        full = f"{prenoms} {nom}".strip() if prenoms else nom
        if full:
            return full, qualite
    return "", ""
