# Conversion V2 — hypothèses & events

## Events GTM / tracking

Préférer le préfixe `cta: "v2_..."` pour distinguer la refonte :

| Event payload | Surface |
|---------------|---------|
| `v2_home_hero` / `v2_home_final` | Homepage |
| `v2_header_trial` / `v2_header_demo` | Header |
| `v2_mobile_sticky` | Mobile CTA bar |
| `v2_pricing` | PricingTable |
| `v2_solution_{slug}_*` | Pages solutions |
| `v2_blog_article_cta` | Bas d’article |
| `v2_lp_*` | LandingTemplate |

Events métier inchangés : `trial_start`, `cta_click`, `form_submit`, etc. (`src/lib/tracking.ts`).

## Hypothèses post-launch (S20)

1. Hero métier (segments) convertit mieux que « Stop Excel » seul → A/B copy si heatmaps dispo.
2. Mega Solutions augmente le temps « c’est pour mon métier » < 5 s.
3. CTA essai sticky mobile reste prioritaire vs démo sur mobile.
4. Remplacer placeholders témoignages dès premiers avis réels (ne pas inventer).

## Mesure

- Funnel : vue page → clic `v2_*` → `trial_start` / signup app
- Comparer `/lp/ads/*` (noindex) vs pages organiques
