"""Messages d'outreach personnalises pour Progesti."""

from __future__ import annotations

import polars as pl

CALL_TEMPLATE = """Bonjour {prenom_dirigeant}, je suis Simon de Progesti.

Je vois que vous dirigez {raison_sociale} a {ville}. On aide les entreprises de proprete comme la votre a centraliser planning, pointage agents et facturation — sans Excel ni WhatsApp.

Est-ce que c'est un sujet chez vous en ce moment ? Je peux vous montrer ca en 15 minutes."""

EMAIL_J0_TEMPLATE = """Objet : {raison_sociale} — planning et pointage agents

Bonjour {prenom_dirigeant},

Je me permets de vous contacter car {raison_sociale} ({ville}) correspond exactement au type d'entreprise qu'on accompagne chez Progesti.

Concretement, on aide les societes de nettoyage a :
- planifier les equipes multi-sites sans tableur
- faire pointer les agents depuis leur mobile
- facturer plus vite, sans oublis

Seriez-vous disponible pour un echange de 15 minutes cette semaine ?

Bien cordialement,
Simon — Progesti
https://progesti.fr"""

EMAIL_J3_TEMPLATE = """Objet : Re: {raison_sociale} — une question rapide

Bonjour {prenom_dirigeant},

Je reviens vers vous suite a mon message de la semaine derniere.

Une question simple : aujourd'hui, comment gerez-vous le planning et le pointage de vos agents sur le terrain ?

Si Excel ou WhatsApp vous prend trop de temps, je peux vous montrer comment d'autres entreprises de proprete s'organisent avec Progesti.

Dispo pour un appel de 15 min ?

Simon — Progesti"""


def _prenom_from_dirigeant(dirigeant: str | None) -> str:
    if not dirigeant or not str(dirigeant).strip():
        return "Monsieur/Madame"
    parts = str(dirigeant).strip().split()
    if not parts:
        return "Monsieur/Madame"
    # Souvent "PRENOM NOM (USAGE)" — prendre le premier mot
    prenom = parts[0].title()
    if len(prenom) <= 2:
        return "Monsieur/Madame"
    return prenom


def personalize(
    raison_sociale: str,
    ville: str,
    dirigeant: str | None,
    template: str,
) -> str:
    return template.format(
        raison_sociale=raison_sociale or "votre entreprise",
        ville=ville or "",
        prenom_dirigeant=_prenom_from_dirigeant(dirigeant),
    )


def add_outreach_columns(df: pl.DataFrame) -> pl.DataFrame:
    def row_outreach(row: dict) -> dict:
        rs = row.get("raison_sociale") or ""
        ville = row.get("ville") or ""
        dirigeant = row.get("dirigeant")
        return {
            "script_appel": personalize(rs, ville, dirigeant, CALL_TEMPLATE),
            "email_j0": personalize(rs, ville, dirigeant, EMAIL_J0_TEMPLATE),
            "email_j3": personalize(rs, ville, dirigeant, EMAIL_J3_TEMPLATE),
        }

    outreach = pl.DataFrame([row_outreach(r) for r in df.to_dicts()])
    return pl.concat([df, outreach], how="horizontal")
