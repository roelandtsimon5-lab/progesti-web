# Site PROGESTI V2 — version de référence (approuvée)

> **Date :** 27 août 2026  
> **Statut :** version préférée par rapport à l’ancien site — à conserver comme repère.

## Retrouver cette version en 10 secondes

| Méthode | Commande / lien |
|--------|------------------|
| **Branche Git** | `site-v2-reference` |
| **Tag Git** | `site-v2-approuve-2026-08-27` |
| **GitHub** | branche `site-v2-reference` sur [progesti-web](https://github.com/roelandtsimon5-lab/progesti-web) |

```bash
# Revenir sur cette version en local
git fetch origin
git checkout site-v2-reference

# Ou via le tag
git checkout site-v2-approuve-2026-08-27
```

## Ce que contient cette version

- **Home** type Jobber : hero photo + capture planning, Product Explorer, showcase métier
- **Hub fonctionnalités** `/fonctionnalites` : mosaïque, explorer interactif, flux métier
- **9 pages module** avec hero double visuel, mocks UI produit, OG dynamiques
- **Mega-menus** pleine largeur (Fonctionnalités, Solutions, Ressources)
- **Module RH** : créatives UI dédiées (`RhProductVisual`) — équipes, absences, export paie
- **Charte** navy `#012939` + lime `#A8E300`, typo Inter, radius 2px
- **Tarifs** public 149 € HT/mois · essai 7 j sans CB

## Fichiers clés du système créatif

| Fichier | Rôle |
|---------|------|
| `src/lib/creative-assets.ts` | Hero / showcase / mock par module |
| `src/components/industry/FeatureMock.tsx` | Mocks UI produit |
| `src/components/features/RhProductVisual.tsx` | Créative RH |
| `src/components/layout/Header.tsx` | Navigation + mega-menus |
| `src/lib/modules-content.ts` | Contenu long-form modules |
| `docs/CREATIVE-SYSTEM.md` | Doc du système visuel |

## Pages à revoir en priorité (sanity check)

- http://localhost:3000/
- http://localhost:3000/fonctionnalites
- http://localhost:3000/fonctionnalites/gestion-rh
- http://localhost:3000/tarifs
- http://localhost:3000/logiciel-entreprise-nettoyage

## Note

Cette branche **n’est pas** `master`. Elle fige l’état du site au moment de la validation utilisateur. Pour continuer le dev : partir de `site-v2-reference` ou merger dans `master` quand tu seras prêt à mettre en prod.
