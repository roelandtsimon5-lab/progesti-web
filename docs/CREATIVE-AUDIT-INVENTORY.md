# Inventaire créatif PROGESTI — exécution Aug 2026

## Assets statiques (`/public`)

| Fichier | Dimensions | Utilisation |
|---------|------------|-------------|
| `hero-planning.webp` | Produit | Planning, RH, CRM, showcases |
| `screen-telegestion.webp` | Produit | Pointage, rentabilité, impayés showcase |
| `screen-passages.webp` | Produit | Clients hero, showcases |
| `screen-factures.webp` | Produit | Devis, facturation, impayés hero |
| `hero-owners.jpg` | Photo métier | **Home hero** (nouveau) |
| `logo.svg` | Brand | Header |
| `clients/icons/*.svg` | Logos fictifs | Témoignages ×8 |

**Manquants / orphelins :**
- `dashboard-mockup-opt.webp` — référencé LP ads, absent
- Captures dédiées devis / impayés / rentabilité / CRM / mobile app

## FeatureMock — 17 recettes

`planning-map` · `telegestion` · `passages` · `rh` · `devis` · `factures-stack` · `impayes` · `dashboard-stack` · `clients` · `historique-timeline` · `preuves-report` · `flux-pipeline` · `mobile-app` · `multi-sites` · `photo-overlay` · `support` · `hub`

**Post-refonte :** tokens unifiés `brand-navy` / `line` / `lime-cta` (plus `blue-mist`).

## Matrice module → visuels (`src/lib/creative-assets.ts`)

| Module | Hero | Showcase | Mock |
|--------|------|----------|------|
| Planning | hero-planning | passages | planning-map |
| Pointage | telegestion | passages | telegestion |
| Clients | passages | hero-planning | clients |
| Devis | factures | hero-planning | devis |
| Facturation | factures | telegestion | factures-stack |
| Impayés | factures | telegestion | impayes |
| RH | hero-planning | telegestion | rh |
| Rentabilité | telegestion | passages | dashboard-stack |
| CRM | hero-planning | factures | flux-pipeline |

Règle : **hero ≠ showcase** sur les 9 modules.

## Pages clés → créatif principal

| Page | Créatif |
|------|---------|
| `/` | Photo hero-owners + strip planning + Explorer 4×4 + showcase stack |
| `/fonctionnalites` | Mosaïque 4 PNG + cartes creative-assets |
| `/fonctionnalites/[slug]` | Hero unique + mock cas d'usage |
| `/solutions/*` | IndustryLanding + FeatureMock |
| OG global | `opengraph-image.tsx` texte |
| OG module | Screenshot via `creative-assets.og` |

## Preuve sociale (post-exécution)

- ❌ Retiré : « 127+ », « 12 000+ passages/mois »
- ✓ « Entreprises de propreté en France » · 4,8/5 · 9 modules
