# Archive V1 — notes de référence

**URL archive :** `/v1` (`src/app/v1/page.tsx`)  
**Statut :** noindex (`robots: { index: false, follow: false }`), bannière archive en tête de page.  
**Ne pas supprimer.**

## Design V1 (snapshot)

- Fonts : Montserrat (display) + Open Sans (body)
- Couleurs : navy `#0f1f33`, emerald `#12b76a`, fog `#f7f9fc`
- Hero : split texte + mockup dashboard (pas full-bleed)
- Messaging dominant : « Stop Excel & WhatsApp »
- Audience : AE / TPE / multi-sites (peu de verticales métier)

## Critiques utilisateur

- Pas assez esthétique / trop SaaS générique
- Pas assez orienté ménage / propreté
- Manque d’ancrage bureaux, syndics, professionnels, fin de chantier
- Blog trop léger pour le SEO

## Inventaire pages live vs LPs (kickoff S0)

### Pages marketing indexables (live)
- `/`, `/fonctionnalites`, `/fonctionnalites/[slug]`, `/tarifs`, `/demo`, `/faq`, `/contact`, `/a-propos`
- `/essai-gratuit`, `/rendez-vous`, `/blog`, `/blog/[slug]`
- Piliers : `/logiciel-entreprise-nettoyage`, `/logiciel-planning-nettoyage`, `/logiciel-facturation-proprete`, `/alternative-propret`
- Hubs : `/ressources`, `/guides`, `/comparatifs`, `/clients`, `/cas-clients`, `/temoignages`, `/integrations`
- Légal : `/mentions-legales`, `/confidentialite`, `/cgv`
- Auth chrome : `/login`, `/signup`, `/mot-de-passe-oublie`, `/app`

### Landing pages marketing (`/lp/*`)
- `/lp/simplifier`, `/lp/essai-2-mois`, `/lp/alternative`, `/lp/integration`

### Ads (noindex cible — campagnes)
- v1 : `/lp/ads/probleme`, `/logiciel`, `/concurrent`, `/essai`
- v2 : `/lp/ads/v2/temps`, `/excel`, `/essai`

### Archive
- `/v1` — noindex, référence visuelle uniquement

## Décision technique blog (S0)

**MDX** dans `content/blog/*.mdx` + loader `src/lib/blog.ts`.  
Raison : calendrier éditorial ≥30 articles ; frontmatter SEO riche ; migration des 8 slugs existants sans 404.

## Suite

Voir `docs/PROMPT-REFONTE-V2.md` et `docs/DESIGN-SYSTEM-V2.md`.
