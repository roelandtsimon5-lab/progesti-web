# Pages à valider — Espaces verts & Sécurité

> Simon valide **chaque** page avant suite (nav mega-menu, ads, merge, etc.).  
> Statuts : `à valider` · `validée` · `à corriger` · `rejetée`  
> **Pas de merge / fusion des verticales** (EV ≠ Sécurité ≠ Propreté).  
> **Pas de commit** tant que non demandé.

## Fichiers source

| Rôle | Chemin |
|------|--------|
| Super prompts v1 (historique) | `docs/prompts-marketing-espace-vert-securite.md` |
| Super prompts v2 EV / Sécu | `docs/prompts-v2-espace-vert.md` · `docs/prompts-v2-securite.md` |
| Prompts v3 (intermédiaire) | `docs/prompts-v3-amelioration.md` |
| **Prompts v4 amélioration (master)** | `docs/prompts-v4-amelioration.md` |
| Script rewrite v3 | `scripts/rewrite-v3-amelioration.mjs` |
| Specs EV (copy + démos) | `src/lib/marketing/ev/specs-part1.ts` … `part5.ts` |
| Générateur enrichissement EV (v2, historique) | `scripts/enrich-ev-v2.mjs` |
| Configs EV (export) | `src/lib/marketing/espace-vert-pages.ts` |
| Configs Sécurité | `src/lib/marketing/securite-pages.ts` + `sec/specs-part1.ts` + `sec/specs-legacy-rest.ts` + `sec/specs-new.ts` |
| Démo UI | `src/components/marketing/MarketingDemoSection.tsx` (EV) · **`MarketingSecuriteDemo.tsx` (Sécurité)** |
| Copy longue | `src/components/marketing/MarketingBodySections.tsx` |
| Rendu commun | `src/components/marketing/MarketingVerticalPage.tsx` |
| Hub EV | `src/app/espace-vert/page.tsx` |
| Filles EV | `src/app/espace-vert/[slug]/page.tsx` |
| Pilier EV | `src/app/logiciel-espace-vert/page.tsx` |
| Hub Sécurité | `src/app/securite/page.tsx` |
| Filles Sécurité | `src/app/securite/[slug]/page.tsx` |
| Pilier Sécurité | `src/app/logiciel-securite-gardiennage/page.tsx` |
| Sitemap | `src/app/sitemap.ts` (verticales ajoutées) |
| Dashboard | `/dashboard-validation` |

## Comment valider

1. `npm install` puis `npm run dev`
2. Ouvrir l’URL ci-dessous (ou le dashboard)
3. Vérifier : H1, meta, ton humain, **démo unique**, CTAs essai/démo, maillage, charte, pas de mélange avec propreté/sécu
4. Mettre à jour **Statut** + note si besoin

---

## Pass v4 appliquée (2026-09-16)

- **Prompts master** : `docs/prompts-v4-amelioration.md`
- **EV** : overlays qualité (`quality-v3.ts`) + fix meta restant
- **Sécu** : FAQ + empathy terrain sur **36 pages** (`scripts/sec-quality-v4.mjs`) — plus de FAQ « Prix ? / Support FR ? »
- Build OK (**241** pages)

## Pass v3 appliquée (2026-09-16)

- **EV** : bodySections + FAQ réécrits (plus de `Persona` / `Pain :` / `Anti-cannibalisation`) — copy client métier
- **Sécu** : claim / badge / CTA / trust différenciés par page + variants démo
- Build OK (234 pages)

## ESPACE VERT (39) — à valider

| ID | URL | Prompt | Statut | Note |
|----|-----|--------|--------|------|
| EV-01 | `/logiciel-espace-vert` | EV-01 | à valider | Pilier money · démo replanif météo |
| EV-02 | `/espace-vert` | EV-02 | à valider | Hub · 39 angles |
| EV-03 | `/espace-vert/entretien-espaces-verts` | EV-03 | à valider | |
| EV-04 | `/espace-vert/paysagisme` | EV-04 | à valider | |
| EV-05 | `/espace-vert/tonte-pelouse` | EV-05 | à valider | |
| EV-06 | `/espace-vert/elagage` | EV-06 | à valider | |
| EV-07 | `/espace-vert/desherbage` | EV-07 | à valider | |
| EV-08 | `/espace-vert/arrosage-irrigation` | EV-08 | à valider | |
| EV-09 | `/espace-vert/collectivites` | EV-09 | à valider | |
| EV-10 | `/espace-vert/syndics-coproprietes` | EV-10 | à valider | ≠ `/solutions/syndics` |
| EV-11 | `/espace-vert/entreprises-sites-prives` | EV-11 | à valider | |
| EV-12 | `/espace-vert/planning-equipes` | EV-12 | à valider | |
| EV-13 | `/espace-vert/pointage-terrain` | EV-13 | à valider | |
| EV-14 | `/espace-vert/devis-facturation` | EV-14 | à valider | |
| EV-15 | `/espace-vert/saison-printemps` | EV-15 | à valider | |
| EV-16 | `/espace-vert/saison-automne-hiver` | EV-16 | à valider | |
| EV-17 | `/espace-vert/multi-sites` | EV-17 | à valider | |
| EV-18 | `/espace-vert/toulouse-occitanie` | EV-18 | à valider | Local |
| EV-19 | `/espace-vert/remplacer-excel` | EV-19 | à valider | |
| EV-20 | `/espace-vert/faq` | EV-20 | à valider | |
| EV-21 | `/espace-vert/guide-organiser-entretien` | EV-21 | à valider | |
| EV-22 | `/espace-vert/preuves-passages` | EV-22 | à valider | |
| EV-23 | `/espace-vert/petites-entreprises` | EV-23 | à valider | |
| EV-24 | `/espace-vert/grands-parcs` | EV-24 | à valider | |
| EV-25 | `/espace-vert/contrats-annuels` | EV-25 | à valider | |
| EV-26 | `/espace-vert/engins-materiel` | EV-26 | à valider | **Nouveau v2** |
| EV-27 | `/espace-vert/photos-avant-apres` | EV-27 | à valider | **Nouveau v2** |
| EV-28 | `/espace-vert/replanification-meteo` | EV-28 | à valider | **Nouveau v2** |
| EV-29 | `/espace-vert/amenageurs-promoteurs` | EV-29 | à valider | **Nouveau v2** |
| EV-30 | `/espace-vert/taille-haies` | EV-30 | à valider | **Nouveau v2** |
| EV-31 | `/espace-vert/absences-remplacements` | EV-31 | à valider | **Nouveau v2** |
| EV-32 | `/espace-vert/cimetieres-voirie` | EV-32 | à valider | **Nouveau v2** |
| EV-33 | `/espace-vert/dechets-verts` | EV-33 | à valider | **Nouveau** déchets verts |
| EV-34 | `/espace-vert/plantations-massifs` | EV-34 | à valider | **Nouveau** plantations |
| EV-35 | `/espace-vert/hopitaux-cliniques` | EV-35 | à valider | **Nouveau** santé |
| EV-36 | `/espace-vert/ecoles-etablissements` | EV-36 | à valider | **Nouveau** scolaire |
| EV-37 | `/espace-vert/zero-phyto-biodiversite` | EV-37 | à valider | **Quality v3** zéro phyto |
| EV-38 | `/espace-vert/marches-publics` | EV-38 | à valider | **Quality v3** marchés publics |
| EV-39 | `/espace-vert/ouverture-saison` | EV-39 | à valider | **Quality v3** ouverture saison |

## SÉCURITÉ (36) — quality MAX / prompts v2 — toutes à valider

> Specs : `src/lib/marketing/sec/specs-part1.ts` (SEC-01→09 radical) + `specs-legacy-rest.ts` (10→32 enrichi) + `specs-new.ts` (33→36)  
> Démo UI : **`MarketingSecuriteDemo`** (variants list/board/timeline/checklist/split · toolbar/alert/meta)  
> **Quality pass** : jargon vacations / main courante / vacation non pourvue · pas de merge EV

| ID | URL | Prompt | Statut | Note |
|----|-----|--------|--------|------|
| SEC-01 | `/logiciel-securite-gardiennage` | SEC-01 | à valider | **Quality MAX** pilier · démo désistement→facture |
| SEC-02 | `/securite` | SEC-02 | à valider | **Quality MAX** hub intent |
| SEC-03 | `/securite/gardiennage` | SEC-03 | à valider | **Quality MAX** poste fixe |
| SEC-04 | `/securite/rondes-surveillance` | SEC-04 | à valider | **Quality MAX** ronde + point manquant |
| SEC-05 | `/securite/agents-securite` | SEC-05 | à valider | **Quality MAX** pool backup |
| SEC-06 | `/securite/surete-sites` | SEC-06 | à valider | **Quality MAX** consignes lues |
| SEC-07 | `/securite/sites-industriels` | SEC-07 | à valider | **Quality MAX** audit usine |
| SEC-08 | `/securite/centres-commerciaux` | SEC-08 | à valider | **Quality MAX** multi-postes pic |
| SEC-09 | `/securite/evenementiel` | SEC-09 | à valider | **Quality MAX** staffing one-shot |
| SEC-10 | `/securite/coproprietes` | SEC-10 | à valider | ≠ EV syndics · démo enrichie |
| SEC-11 | `/securite/planning-agents` | SEC-11 | à valider | démo enrichie couverture |
| SEC-12 | `/securite/pointage-vacations` | SEC-12 | à valider | démo enrichie |
| SEC-13 | `/securite/preuves-intervention` | SEC-13 | à valider | démo enrichie |
| SEC-14 | `/securite/multi-sites` | SEC-14 | à valider | démo enrichie P1 |
| SEC-15 | `/securite/facturation-gardiennage` | SEC-15 | à valider | démo enrichie |
| SEC-16 | `/securite/remplacer-excel` | SEC-16 | à valider | démo enrichie |
| SEC-17 | `/securite/faq` | SEC-17 | à valider | démo enrichie |
| SEC-18 | `/securite/guide-organiser-vacations` | SEC-18 | à valider | démo enrichie |
| SEC-19 | `/securite/toulouse-occitanie` | SEC-19 | à valider | Local |
| SEC-20 | `/securite/astreinte-nuit` | SEC-20 | à valider | démo enrichie |
| SEC-21 | `/securite/pme-entreprises` | SEC-21 | à valider |  |
| SEC-22 | `/securite/grands-comptes` | SEC-22 | à valider | démo enrichie |
| SEC-23 | `/securite/contrats-cadres` | SEC-23 | à valider | démo enrichie |
| SEC-24 | `/securite/petites-societes` | SEC-24 | à valider | démo enrichie |
| SEC-25 | `/securite/controle-acces-consignes` | SEC-25 | à valider | Consignes (pas hardware) · démo enrichie |
| SEC-26 | `/securite/main-courante` | SEC-26 | à valider | **démo enrichie** incident horodaté |
| SEC-27 | `/securite/ssiap` | SEC-27 | à valider | SSIAP orga postes (info) · démo enrichie |
| SEC-28 | `/securite/sites-sensibles` | SEC-28 | à valider | Ops (pas défense) · démo enrichie |
| SEC-29 | `/securite/btp-chantiers` | SEC-29 | à valider | démo enrichie |
| SEC-30 | `/securite/pc-securite` | SEC-30 | à valider | Exploitation (pas télésurveillance) · démo enrichie |
| SEC-31 | `/securite/vacation-non-pourvue` | SEC-31 | à valider | Trou de vacation · démo enrichie |
| SEC-32 | `/securite/remplacement-urgence` | SEC-32 | à valider | Remplacement urgence · démo enrichie |
| SEC-33 | `/securite/reporting-client` | SEC-33 | à valider | **Nouveau** reporting donneur d’ordre |
| SEC-34 | `/securite/week-end-jours-feries` | SEC-34 | à valider | **Nouveau** WE / fériés |
| SEC-35 | `/securite/heures-contestees` | SEC-35 | à valider | **Nouveau** litiges heures |
| SEC-36 | `/securite/chef-exploitation` | SEC-36 | à valider | **Nouveau** persona chef d’exploitation |

## Priorité de review suggérée (EV v2)

1. `/logiciel-espace-vert` (démo replanif)
2. `/espace-vert` (hub)
3. `/espace-vert/entretien-espaces-verts`
4. `/espace-vert/syndics-coproprietes` (preuves)
5. `/espace-vert/replanification-meteo` (nouveau)
6. `/espace-vert/engins-materiel` (nouveau)

## Priorité de review suggérée (Sécurité — quality MAX)

1. `/logiciel-securite-gardiennage` (pilier radical)
2. `/securite` (hub)
3. `/securite/gardiennage` · `/securite/rondes-surveillance` · `/securite/planning-agents`
4. `/securite/vacation-non-pourvue` · `/securite/remplacement-urgence`
5. `/securite/reporting-client` · `/securite/heures-contestees` · `/securite/week-end-jours-feries` (nouveaux)
6. `/securite/main-courante` · `/securite/evenementiel` · `/securite/chef-exploitation`
