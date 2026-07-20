# RELEASE V2.0 — PROGESTI marketing

**Date :** 2026-07-20  
**Scope :** site marketing Next.js (`web/`) — hors app produit authentifiée.

## Livré

- Design system V2 (tokens « Propreté claire », Bricolage Grotesque + Source Sans 3)
- Homepage V2 brand-first / full-bleed
- 5 pages Solutions (`/solutions/*` + index) dont AE héritage V1
- Fonctionnalités, piliers SEO, alternative Propret restylés + maillage
- Tarifs / conversion events `v2_*`
- Blog MDX (`content/blog/*.mdx`) — 31 articles, catégories, related, schema
- Hub `/ressources`, glossaire (~28 termes)
- Témoignages / cas-clients honnêtes (placeholders marqués)
- LPs + Ads alignés tokens
- `robots.ts` : disallow `/v1`, `/lp/ads/`
- `sitemap.ts` : solutions, blog, glossaire — sans ads ni `/v1`
- Docs : `DESIGN-SYSTEM-V2.md`, `BLOG-OPS.md`, `CONVERSION-V2.md`

## Intact

- `/v1` noindex + bannière archive
- `/api/lead`
- Prix offres (29,99 / 49,99 / 99,99)
- Tracking GTM + CookieConsent

## QA checklist

- [ ] `/` vs `/v1` comparés
- [ ] Essai (`cta.trialApp`) + démo + mobile CTA
- [ ] Lead form contact
- [ ] 8 anciens slugs blog (pas de 404)
- [ ] `/solutions/bureaux|syndics|professionnels|fin-de-chantier`
- [ ] Build `npm run build` OK
- [ ] Mobile + `prefers-reduced-motion`

## Comment tester

```bash
cd web
npm run dev
# puis : /, /v1, /solutions, /blog, /glossaire, /tarifs, /lp/essai-2-mois, /lp/ads/v2/temps
```
