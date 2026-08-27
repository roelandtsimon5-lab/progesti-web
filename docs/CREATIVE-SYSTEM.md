# Système créatif PROGESTI (Jobber-aligned)

## Tokens

| Token | Valeur | Usage |
|-------|--------|-------|
| Navy | `#012939` | Hero, titres, footer |
| Chrome | `#011B25` | 1 bande sombre / page max |
| Lime | `#A8E300` | CTA essai, underline actif, accents |
| Paper | `#FAFAFA` | Sections alternées |
| Line | `#E4E8EB` | Bordures |
| Radius | `2px` | Partout |

## 3 recettes mock (FeatureMock)

### A — UI Stack
Cartes offset ±1°, toast bas-gauche.  
Modules : facturation, devis, clients, rentabilité, CRM, impayés.

### B — UI + contexte
Liste/calendrier + élément contexte (route, LIVE, géoloc).  
Modules : planning, pointage.

### C — Photo + overlay
Photo métier + gradient navy + toasts.  
Home hero (`hero-owners.jpg`). Fallback : recette A si pas de photo.

## Source unique assets

```typescript
import { getModuleCreativeAssets, homeCreative } from "@/lib/creative-assets";
```

## DoD créatif

- [x] `creative-assets.ts` — 9 modules mappés
- [x] FeatureMock tokens brand
- [x] Home photo métier
- [x] Showcase stack home
- [x] Preuve sociale honnête
- [x] IndustryHelpRail charte navy
- [ ] 9 screenshots produit uniques (shoot app)
- [ ] OG dynamique par module (PNG 1200×630)
- [ ] Vidéo hero 30s
