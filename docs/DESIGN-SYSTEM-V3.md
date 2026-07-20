# Design system PROGESTI V3

Direction : **Bleu confiance · Vert action · Propreté premium**.

## Typographie

| Rôle | Font | Variable CSS |
|------|------|--------------|
| Display / titres | Plus Jakarta Sans | `--font-display-family` |
| Corps | DM Sans | `--font-body-family` |

## Couleurs (`globals.css` `:root`)

| Token | Hex | Usage |
|-------|-----|--------|
| `--blue-deep` | `#0B3D6E` | Hero, footer, sections autorité |
| `--blue-royal` | `#1565A8` | Liens, nav, accents |
| `--blue-sky` | `#E8F2FA` | Surfaces aérées teintées bleu |
| `--blue-mist` | `#C5DCF0` | Bordures, séparateurs |
| `--green-action` | `#1FA86B` | CTA primaire |
| `--green-deep` | `#157A4E` | Hover CTA |
| `--warm-light` | `#F7FAFC` | Fond page |
| `--ink` | `#0F2438` | Texte principal |

Compatibilité : `--emerald` → `--green-action`, `--navy` → `--blue-deep`, `--fog` → `--blue-sky`.

## Surfaces

- `.surface-atmosphere` — dégradé bleu/vert léger
- `.surface-blue` — section produit sombre bleue
- `.surface-dark` — CTA / footer alternatif
- `.gradient-cta` — bandeau conversion
- `.pattern-grid` — motif grille discret

## Primitives

- `Section` — props : `atmosphere`, `blue`, `dark`, `pattern`
- `ConversionBlock` — `variant="essai|demo|contact"`
- `TrustStrip` — bandeau garanties sous hero

## CTAs tracking

Préférer `cta: "v3_..."`.

## Archives

- V1 : `/v1` — tokens V1
- V2 : `/v2` — `[data-design="v2"]` dans `globals.css`
