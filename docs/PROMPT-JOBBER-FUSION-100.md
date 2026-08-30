# PROMPT MAÎTRE FUSION — Jobber 100 % → PROGESTI honnête

> **Sources vidéo (obligatoires à regarder / comparer frame par frame)**  
> - `C:\Users\Simon\Desktop\JOBBER.mp4` — **126 s** · landing *Commercial Cleaning* (craft persuasion)  
> - `C:\Users\Simon\Desktop\JOBBER 2.mp4` — **96 s** · **site entier** (mega-menus, pricing, métiers dupliqués)  
>
> **Frames extraites**  
> - `docs/jobber-frames/v1-cleaning/` (t_000s … t_125s)  
> - `docs/jobber-frames/v2-site/` (t_000s … t_095s)  
> - `docs/jobber2-frames/` (captures détaillées)  
>
> **Docs complémentaires**  
> - `docs/ANALYSE-JOBBER-ET-PROMPT-SIMILAIRE.md` — teardown landing v3 + matrice copy FR §C  
> - `docs/PROMPT-JOBBER2-SITE-MULTI-METIERS.md` — architecture multi-métiers + sprints  
>
> **État PROGESTI (déjà en place — ne pas refaire from scratch)**  
> - `IndustryLanding` config-driven sur `/`, `/logiciel-entreprise-nettoyage`, `/solutions/[slug]`  
> - `IndustryProductExplorer` 4×4 · `FeatureMock` · `lib/industry/*`  
> - Mega-menus `navigation.ts` + `MegaMenu.tsx` + `Header.tsx`  
> - Hub `/fonctionnalites` + pages `[slug]` enrichies · `/tarifs` Jobber-like (149 € unique)  
> - Build OK (~157 pages)

---

## 0. Comment utiliser ce document

| Phase | Action |
|-------|--------|
| **A — Comprendre** | Lire §1 (fusion des 2 vidéos) + §2 (DoD 10/10) |
| **B — Planifier** | §4 (écarts restants) + §6 (ordre d'exécution) |
| **C — Builder** | Coller **§7 PROMPT AGENT** dans une session Cursor |
| **D — Valider** | §2 checklist + comparaison côte à côte avec les 2 MP4 |

**Règle d'or :** viser **100 % de l'architecture persuasion Jobber**, **0 % de leurs mensonges produit** (AI, bookings, 400k users, G2, −40 %, chat Jeanine, multi-tier fake).

---

## 1. Teardown fusionné (JOBBER.mp4 + JOBBER 2.mp4)

### 1.1 Les 3 systèmes Jobber (à internaliser)

```
┌─────────────────────────────────────────────────────────────────┐
│  NAV GLOBALE : Product │ Industries │ Resources │ Pricing       │
│       ↓ mega-menus full-width · sticky · CTA trial permanent    │
└─────────────────────────────────────────────────────────────────┘
         │                    │                    │
         ▼                    ▼                    ▼
  /features/[slug]    /industries/[slug]      /pricing
  (module produit)    (1 TEMPLATE × N métiers) (conversion UX)
         │                    │
         └──────────┬─────────┘
                    ▼
         Product Explorer = cœur persuasion
         État (pilier × feature) → mock + H2 + ¶ synchronisés
```

**JOBBER.mp4** = zoom sur le **template industry** (cleaning).  
**JOBBER 2.mp4** = preuve que ce template est **dupliqué** (landscaping, painting) + le **reste du site** autour.

---

### 1.2 JOBBER.mp4 — Beat par beat (landing cleaning)

| t (s) | Section | Pattern Jobber | Spec PROGESTI 100 % |
|------:|---------|----------------|---------------------|
| 0–4 | **Hero dark** | H1 étroit (~26rem) · sub · **1 seul CTA** trial · droite = vidéo/photo + **claim overlay** (« We 6x'd revenue ») · play → modal | Hero navy gradient `.industry-hero-bg` · claim PROGESTI factuel · lien `/demo` · `hero-owners.jpg` · **pas** de 2e bouton hero |
| 0–4 | Trust / promo bar | Bandeau promo −40 % (haut) | **Ne pas copier** — trust bar factuelle : essai 7 j · sans CB · 149 € · 5 users · tel FR |
| 4–8 | **Empathie** | H2 centré large (~1032px) · ¶ 3 douleurs → 3 promesses | Copy §C ANALYSE · centrage · typo display |
| 8–28 | **Product Explorer** | 4 piliers accordion navy · 4 features/pilier · **underline lime hand-drawn** sur feature active · droite = **mock composition** (pas PNG plat) · **H2 + ¶ sous le mock** changent à chaque clic | `IndustryProductExplorer` · crossfade 150–200ms · 3 recettes mock §1.4 · matrice §C obligatoire |
| 8–14 | Explorer P1 Work Smarter | Recette **UI + map** : liste RDV + carte route + pins | `planning-map` · overlap cards · pastilles sites |
| 14–18 | Explorer P2 Boost Profits | Recette **UI stack** : bar chart + donut + funnel | `factures-stack` + `dashboard-stack` · ombres · décalage z-index |
| 18–22 | Explorer P3 Win Jobs | Recette **UI stack** : devis / quote card | `hub` + overlay « Devis accepté » |
| 22–28 | Explorer P4 Get Noticed | Recette **photo + overlays** : agent métier · bords torn · toasts flottants | Photo `hero-owners.jpg` + toasts CSS · **pas** fake avis 5★ |
| 28–35 | **Témoignages** | 3 cartes · citation longue · **bold phrase émotion** | Si pas de vrais clients → section « Conçu avec le métier » (3 preuves factuelles) |
| 35–42 | **Grille dark 6** | Fond `#0c1a28` + grain · 6 icônes lime · H3 + ¶ + « See Feature → » | 6 modules réels · liens `/fonctionnalites/...` · fond navy PROGESTI |
| 42–50 | Intégrations / Awards | Logos partenaires · badges G2/App Store | **Omettre** ou section « Intégrations » seulement si routes réelles |
| 50–70 | Resources + **FAQ** | Accordion · ≥8 questions SEO | `IndustryFaq` + JSON-LD · min 8 Q |
| 70–126 | **Sign-up trial** | Email/password · no CC · CTA répété | `/essai-gratuit` · `ConversionBlock` · `MobileCtaBar` |

**CTA unique saturé :** « Start Free Trial » → PROGESTI : « Essai 7 jours gratuit » (`site.trialDays`).

---

### 1.3 JOBBER 2.mp4 — Beat par beat (site entier)

| t (s) | URL / écran | Pattern Jobber | Spec PROGESTI 100 % |
|------:|-------------|----------------|---------------------|
| 0–2 | `/features/field-service-management/` | Breadcrumb · hero SEO long · mock map+mobile empilés | `/fonctionnalites/[slug]` · `Breadcrumb` · hero navy |
| 2–8 | Mega-menu **Product** | 5×3 grille · icône+label · hover lime/10 · footer (Plus, Integrations, See all) | `navigation.ts` · 3 colonnes Organiser/Facturer/Équipe · footer honnête |
| 8–16 | Mega-menu **Industries** | 6 colonnes ~18 métiers · « See all » | 5 solutions PROGESTI + `/solutions` |
| 16–24 | `/pricing/` | Toggle Monthly/Annual · team size · 3–4 tiers · Recommended badge | **149 € unique** · toggle annuel **1490 € si réel** · pas de tiers fake |
| 24–40 | Pricing suite | Compare all · plan wizard · chat « Help me choose » | Grille modules ✓ · **pas** wizard · **pas** chat clone |
| 40–56 | Team size | Select recalcule tier | **Fixe 5 users** — texte clair, pas de select trompeur |
| 56–64 | Industries sur pricing | Mega-menu par-dessus pricing | Preuve navigation cohérente |
| 64–72 | `/industries/landscaping/` | **Même Explorer** que cleaning · copy métier · calendrier drag | `/solutions/[slug]` = `IndustryLanding(getIndustryConfig(slug))` |
| 72–80 | Landscaping suite | Feature « Automations » · mock animé | CSS motion légère · `prefers-reduced-motion` |
| 80–92 | `/industries/painting/` | Hero dark identique · vidéo témoignage · trust « 400k+ » | Template hero · trust **factuel** PROGESTI |
| 92–96 | Nav sticky | Pricing hover · chat persistant | Header unifié · tel visible · pas Jeanine |

---

### 1.4 Les 3 recettes mock (critique pour 10/10)

Jobber **ne met jamais** un screenshot seul dans une card. Trois compositions :

| Recette | Quand | Composition | Fichiers PROGESTI |
|---------|-------|-------------|-------------------|
| **UI stack** | Insights, facturation, dashboard | 2–3 cards overlap · ombre · légère rotation | `screen-factures`, `dashboard-mockup` |
| **UI + contexte** | Planning, terrain | Liste RDV + carte stylisée + pins + route | `hero-planning`, `screen-telegestion` |
| **Photo + overlays** | Qualité, terrain, émotion | Photo métier · bords torn/deckled · toasts CSS | `hero-owners.jpg`, `screen-passages` |

**Échec si :** le mock ne change pas visuellement entre 2 features adjacentes du même pilier.

---

### 1.5 Tokens craft (référence vs PROGESTI)

| Élément | Jobber mesuré | PROGESTI (garder) |
|---------|---------------|-------------------|
| Navy hero | `#012939` / `#0c1a28` + grain | `blue-deep` + `.industry-hero-bg` gradient |
| CTA trial | `#A8E300` · radius 2px · 18/700 | `#B8F000` · radius ≤6px |
| Display H1/H2 | JobberPro 50px/900 | Police display existante · ~50px/900 sur landings |
| Pilier accordion | 383×64 · pad-left 64 (icon) | Même proportions · `blue-deep` |
| Feature underline | Lime hand-drawn SVG | Accent `#B8F000` · SVG underline |
| Grain | 26 nodes noise | **Optionnel** — PROGESTI a choisi gradient sans grain ; acceptable si densité mock+explorer OK |
| Page height | ~9039px · 5–6 écrans | Viser même **densité** (pas forcément même hauteur) |

---

### 1.6 Formules copy (reverse-engineered — ne pas réinventer)

| Slot | Formule | Exemple PROGESTI |
|------|---------|------------------|
| H1 | `{Keyword métier} pour {verbe1} et {verbe2} votre {objet}` | Logiciel entreprise de nettoyage pour simplifier et faire grandir votre activité |
| Sub hero | `{job}, {job}, et {job} — tout centralisé` | Planning, pointage terrain et facturation… |
| H2 empathie | `{Aspiration métier}` | Faites tourner une entreprise de propreté exigeante |
| ¶ empathie | `{Douleur1}, {douleur2}, {douleur3}. {Produit} réunit {A}, {B}, {C}.` | Voir §C ANALYSE |
| Pilier | 2–3 mots ambition | Travailler mieux · Protéger la marge · … |
| Feature | 2–4 mots bénéfice | Planning multi-sites · Pointage & télégestion |
| H2 panneau | Bénéfice OU keyword SEO | Un planning qui suit vos sites, pas l'inverse |
| ¶ panneau | Promesse concrète + 2 mécanismes + outcome | ~350–550 caractères |

**Matrice FR complète :** `docs/ANALYSE-JOBBER-ET-PROMPT-SIMILAIRE.md` §C — **coller tel quel**, adapter exemples par métier §4 ci-dessous.

---

## 2. Definition of Done — 10/10 (checklist reviewer)

Cocher **tout** avant de déclarer « parity Jobber » :

### Global site
- [ ] Header sticky · mega-menus Product + Solutions + Ressources · CTA essai visible desktop + mobile
- [ ] Mega-menu : grille icône+label · hover subtil · footer liens · Tab/Escape/aria-expanded
- [ ] `MobileCtaBar` sur landings industry
- [ ] Breadcrumbs sur `/fonctionnalites/[slug]` et landings solutions
- [ ] `npm run build` OK · pas de 404 mega-menu
- [ ] `prefers-reduced-motion` sur explorer, menus, crossfades

### Landing industry (chaque `/solutions/[slug]` + SEO cleaning)
- [ ] Hero : **1 seul** CTA primaire · claim overlay · trust bar factuelle
- [ ] Empathie : H2 + ¶ §C ou variante métier unique
- [ ] Explorer 4×4 : **chaque** feature change mock + H2 + ¶ (test manuel 16 clics)
- [ ] Mocks : au moins 2 recettes différentes par page (stack + map ou photo)
- [ ] Showcase section (mock produit + badges)
- [ ] Preuve : témoignages réels **OU** « Conçu avec le métier » (jamais faux noms)
- [ ] Grille dark 6 modules avec liens
- [ ] Bloc tarif 149 € · FAQ ≥8 · JSON-LD FAQ
- [ ] Metadata title/description/canonical par métier
- [ ] Comparaison vidéo : même **rythme** de découverte (hero → explorer long → preuve → grille → FAQ → CTA)

### Pages fonctionnalités
- [ ] Hub `/fonctionnalites` : grille visuelle type mega-menu
- [ ] Détail : breadcrumb · hero · 3 bénéfices · workflow 4 étapes · FAQ module · liens croisés
- [ ] Mini-explorer ou onglets use-cases (syndic / bureaux / fin de chantier) — **manque pour 100 %**

### Tarifs
- [ ] Layout Jobber (hero · carte · compare modules)
- [ ] Toggle mensuel/annuel **seulement si** prix annuel réel (`1490 €`)
- [ ] **5 utilisateurs inclus** visible · pas de team-size select
- [ ] Un seul plan · pas de tier Core/Connect/Grow

### Interdit (bloquant merge)
- [ ] Aucun claim 400k / G2 / −40 % / AI / bookings / marketing tools
- [ ] Aucun chat widget « Jeanine »
- [ ] Aucun prix ≠ 149 € HT / 1490 € annuel
- [ ] Aucune feature hors `src/lib/site.ts` → `modules`

---

## 3. Architecture repo (cible = actuelle, à compléter)

```
src/
├── lib/
│   ├── site.ts
│   ├── navigation.ts          ✅ mega-menus
│   ├── modules-content.ts     ✅ pages modules
│   └── industry/
│       ├── types.ts             ✅
│       ├── default.ts           ✅ landing nettoyage SEO
│       ├── solutions.ts         ✅ configs 5 métiers
│       ├── pillars-overrides.ts ✅ différenciation copy
│       ├── mock-context.ts      ⚠️ enrichir TOUS les kinds
│       └── index.ts             ✅ getIndustryConfig()
├── components/
│   ├── navigation/ MegaMenu, Breadcrumb  ✅
│   ├── industry/   IndustryLanding, Explorer, FeatureMock, Faq  ✅
│   └── pricing/    ProgestiPricing  ✅
└── app/
    ├── page.tsx                              ✅
    ├── logiciel-entreprise-nettoyage/        ✅
    ├── solutions/[slug]/                     ✅
    ├── fonctionnalites/ + [slug]/            ✅ (mini-explorer manquant)
    └── tarifs/                               ✅
```

---

## 4. Matrice contenu par métier (100 % = copy unique × 5)

Pour **chaque** slug, `IndustryPageConfig` doit différencier **hero + empathie + au moins 8 panneaux explorer** (exemples concrets métier).

| Slug | Douleur #1 | Exemple site fictif | Mot-clé SEO |
|------|------------|---------------------|-------------|
| `bureaux` | Créneaux avant/après ouverture | « Tour Montparnasse — étages 12-18 » | logiciel nettoyage bureaux |
| `syndics` | Preuves parties communes | « Résidence Wilson — cage B » | logiciel nettoyage syndic |
| `professionnels` | Accès sensibles, horaires serrés | « Cabinet Pasteur — stérilisation » | logiciel nettoyage commerces |
| `fin-de-chantier` | Ponctuel, photos, facturation rapide | « Chantier Lyon Part-Dieu » | logiciel remise en état |
| `auto-entrepreneurs` | Excel/WhatsApp, petit budget | « Solo · 8 sites hebdo » | logiciel nettoyage TPE |

**Test 100 % :** coller les 5 ¶ empathie côte à côte — **aucune phrase identique** sauf structure.

---

## 5. Écarts restants vs ~100 % Jobber

| Zone | Actuel ~% | Manque exact pour 100 % |
|------|--------:|-------------------------|
| Hero + claim overlay | 85 % | Motion play · claim plus percutant · strip produit animé |
| Product Explorer | 80 % | Underline hand-drawn · crossfade plus net · 16/16 mocks distincts |
| FeatureMock density | 70 % | Toutes recettes pour tous `kind` · context par slug dans `mock-context.ts` |
| Mega-menus | 75 % | Ressources plus riche · animation entrée · focus ring polish |
| 5 landings métiers | 75 % | Copy explorer 100 % unique par slug (pas seulement hero) |
| Pages modules | 60 % | Mini-explorer use-cases · mocks par module |
| Grille dark 6 | 80 % | Grain optionnel · icônes uniformes |
| Témoignages | 0 % réel | Preuves factuelles OK — ajouter vrais clients quand dispo |
| Motion / polish | 65 % | Scroll reveal léger · torn paper SVG entre dark/light |
| SEO | 85 % | OG par métier · maillage footer |

---

## 6. Ordre d'exécution (agent — minimiser scope par session)

### Session 1 — Explorer 10/10 (priorité #1)
1. Enrichir `FeatureMock.tsx` : 6 recettes complètes · props `context` par slug
2. Compléter `mock-context.ts` pour **chaque** `(pillar, feature, slug)`
3. Underline SVG feature active · crossfade 180ms
4. Test : 16 clics sur `/` — aucun mock identique entre features d'un même pilier

### Session 2 — 5 métiers copy unique
1. `pillars-overrides.ts` ou fichiers dédiés : 16 panneaux × 5 slugs
2. FAQ ≥6 par métier · schema JSON-LD
3. Breadcrumbs + metadata

### Session 3 — Pages modules
1. Composant `FeatureUseCaseTabs` (3 onglets métier)
2. Intégrer sur `/fonctionnalites/[slug]`
3. Mocks module-specific

### Session 4 — Navigation & tarifs polish
1. Mega-menu animation · a11y audit
2. `/tarifs` compare table · FAQ inline
3. Footer maillage solutions + modules

### Session 5 — Motion & QA
1. `prefers-reduced-motion` audit
2. 375 / 768 / 1440 · Lighthouse
3. Comparaison frame-by-frame avec `docs/jobber-frames/`

---

## 7. PROMPT AGENT (copier-coller intégral)

```text
Tu développes le site marketing PROGESTI (Next.js 16, App Router, Tailwind v4).
Objectif : ~100 % parity CRAFT avec Jobber (architecture persuasion), identité PROGESTI honnête.

## Sources obligatoires
- Vidéos : C:\Users\Simon\Desktop\JOBBER.mp4 (landing cleaning) + JOBBER 2.mp4 (site entier)
- Frames : docs/jobber-frames/v1-cleaning/ + v2-site/ + docs/jobber2-frames/
- Brief : docs/PROMPT-JOBBER-FUSION-100.md (ce fichier)
- Copy FR : docs/ANALYSE-JOBBER-ET-PROMPT-SIMILAIRE.md §C (matrice — ne pas réécrire)
- AGENTS.md : lire node_modules/next/dist/docs/ avant APIs Next.js

## Mission
Atteindre la Definition of Done §2 de PROMPT-JOBBER-FUSION-100.md.
Priorité : Product Explorer (mock+texte sync) → copy unique 5 métiers → modules → polish.

## Contraintes PROGESTI (non négociables)
- Prix : 149 € HT/mois · 1490 €/an si toggle · 5 utilisateurs · tous modules
- Essai : site.trialDays (7 j) · sans CB
- USP : « Fait par des gens du nettoyage »
- Tél : site.phone / site.phoneTel (05 82 95 09 19)
- Tokens : blue-deep, green-action, trial #B8F000 — PAS le lime Jobber #A8E300 comme marque
- Modules : uniquement src/lib/site.ts → modules[9]
- INTERDIT : faux témoignages, 400k users, G2, −40%, AI, bookings, marketing, chat Jeanine, multi-tier pricing, features inventées

## Règle d'or Jobber
Le Product Explorer synchronise (pilier × feature) → composition mock + H2 + ¶.
Si le mock ne change pas entre 2 features, c'est un ÉCHEC.

## État actuel (ne pas refaire from scratch)
- IndustryLanding + IndustryProductExplorer + FeatureMock + lib/industry/*
- MegaMenu + navigation.ts + Header
- Routes : /, /logiciel-entreprise-nettoyage, /solutions/[slug], /fonctionnalites, /tarifs
- Build OK

## Patterns UI à reproduire (Jobber)
- Hero dark : 1 CTA · claim overlay · trust bar factuelle
- Empathie : H2 centré + ¶ 3 douleurs
- Explorer : 4 piliers accordion navy · 4 features · underline accent · mock composition (stack / map / photo+overlay)
- Grille dark 6 · FAQ ≥8 · tarif 149 € · CTA trial répété
- Mega-menus : grille icône+label · footer · keyboard a11y
- Feature pages : breadcrumb · hero · bénéfices · workflow · FAQ
- Industry pages : 1 template × N métiers — copy différente, structure identique

## Patterns à NE PAS reproduire
- Chat widget · plan wizard · team size select · promo −40% · tiers Core/Connect/Grow · Get Noticed SEO/marketing

## Fichiers clés
- src/components/industry/IndustryProductExplorer.tsx
- src/components/industry/FeatureMock.tsx
- src/lib/industry/mock-context.ts
- src/lib/industry/pillars-overrides.ts
- src/lib/industry/solutions.ts
- src/components/navigation/MegaMenu.tsx
- src/lib/navigation.ts
- src/lib/modules-content.ts
- src/components/pricing/ProgestiPricing.tsx

## Recettes mock (FeatureMock)
- planning-map : liste RDV + carte stylisée + pins
- telegestion : mobile pointage + badge géoloc
- factures-stack : cards overlap factures + impayés
- dashboard-stack : KPI + graphiques overlap
- passages : preuves + timeline
- hub : clients/sites + overlay statut
- photo-overlay : hero-owners.jpg + toasts CSS (pas fake reviews)

## Definition of Done (tout doit être vrai)
□ Explorer 4×4 : 16 états distincts mock+copy
□ Hero : 1 seul bouton primaire
□ Aucun claim inventé
□ 5 landings /solutions/[slug] : copy empathie + panneaux uniques
□ FAQ ≥8 + schema · prix 149 € visible
□ Mega-menu : 0 lien 404
□ prefers-reduced-motion respecté
□ npm run build OK
□ Comparé aux MP4 : même densité d'exploration produit

## Style rédactionnel
- Vouvoiement B2B TPE · phrases courtes · verbes métier · pas jargon SaaS anglais
- Utiliser la matrice §C ANALYSE — adapter exemples par métier §4 FUSION

Commence par la session demandée (§6). Scope minimal — une zone à la fois.
```

---

## 8. Micro-prompts (sessions ciblées)

### Explorer only
```text
Exécute PROMPT-JOBBER-FUSION-100.md §6 Session 1 + §7.
Enrichir FeatureMock + mock-context.ts jusqu'à 16 mocks distincts sur /.
DoD §2 landing industry. Ne touche pas aux mega-menus.
```

### Un métier
```text
Exécute §6 Session 2 pour le slug « bureaux » uniquement.
Copy unique §4 FUSION. IndustryLanding via getIndustryConfig('bureaux').
Matrice §C ANALYSE comme base — changer exemples concrets.
```

### Pages modules
```text
Exécute §6 Session 3. FeatureUseCaseTabs sur /fonctionnalites/planification.
3 onglets : syndics, bureaux, fin-de-chantier. Mocks contextualisés.
```

### QA parity
```text
Compare docs/jobber-frames/v1-cleaning/ avec localhost:3000/logiciel-entreprise-nettoyage.
Liste écarts visuels §5 FUSION. Fix top 3 par impact persuasion.
```

---

## 9. Barème qualité

| Note | Signification |
|-----:|---------------|
| 3/10 | Zigzag features + PNG plat (HomeNew legacy) |
| 5/10 | Explorer sans swap mock visible |
| 7/10 | Explorer OK · mocks plats · copy générique |
| 8/10 | Explorer + compositions · 1 landing complète |
| 9/10 | + 5 métiers · mega-menu · tarifs · modules enrichis |
| **10/10** | DoD §2 entière · comparaison MP4 : « même architecture persuasion, identité PROGESTI » |

---

## 10. Assets

| Fichier | Usage |
|---------|--------|
| `public/hero-owners.jpg` | Hero émotion · photo-overlay |
| `public/hero-planning.png` | Planning · strip · map context |
| `public/screen-telegestion.webp` | Pointage · showcase |
| `public/screen-factures.png` | Facturation stack |
| `public/screen-passages.webp` | Preuves |
| `public/dashboard-mockup.png` | Rentabilité |
| `public/hero-mockup.png` | Hub clients |

---

*Document fusion v1 — JOBBER.mp4 + JOBBER 2.mp4 → PROGESTI 100 % craft / 0 % mensonge produit.*
