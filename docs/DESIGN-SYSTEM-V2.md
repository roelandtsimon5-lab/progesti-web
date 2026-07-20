# Design system PROGESTI V2

Direction : **Propreté claire / confiance métier**.

## Typographie

| Rôle | Font | Variable CSS |
|------|------|--------------|
| Display / titres | Bricolage Grotesque | `--font-display-family` |
| Corps | Source Sans 3 | `--font-body-family` |

Chargement : `next/font/google` dans `src/app/layout.tsx` (`display: swap`, subset latin).

## Couleurs (`globals.css` `:root`)

| Token | Hex | Usage |
|-------|-----|--------|
| `--fog` / `--air` | `#f4f7f9` / `#fafcfd` | Fonds vivants |
| `--ink` | `#152230` | Encre ardoise |
| `--anthracite` / `--muted` | `#3d4a57` / `#5a6876` | Texte secondaire |
| `--emerald` | `#2f9e6b` | Accent vert propreté mat |
| `--petrol` | `#2a5f6e` | Accent sérieux (bureaux / syndics) |
| `--navy` | `#1a3348` | Surfaces sombres, footer |
| `--amber` | `#c48a2a` | Archive V1 / alertes uniquement |
| `--line` | `#d2dbe4` | Séparateurs |

Compatibilité Tailwind : `bg-emerald`, `text-navy`, `bg-petrol`, `bg-air`, etc. via `@theme inline`.

## Primitives

- `Section`, `Eyebrow`, `Lead`, `SurfaceAtmosphere` — `src/components/ui/Section.tsx`
- Classes utilitaires : `.container`, `.section`, `.eyebrow`, `.lead`, `.surface-atmosphere`, `.surface-dark`, `.prose-v2`

## Règles composition

- Hero home : full-bleed, brand-first, pas de cards / overlays
- Cards : pricing, formulaires, FAQ uniquement
- Motion : `.reveal` / `.anim-rise`, respect `prefers-reduced-motion`
- CTAs tracking : préférer `cta: "v2_..."`

## Composants chrome

- `Header` — mega Solutions
- `Footer` — colonnes Solutions / Ressources / Légal
- `ButtonLink` — primary / secondary / ghost / white
- `MobileCtaBar` — sticky mobile
