# PROMPT MAÎTRE — JOBBER 2.mp4 → Site PROGESTI multi-métiers

> **Vidéo source :** `C:\Users\Simon\Desktop\JOBBER 2.mp4`  
> **Durée :** ~96 s · 1920×1020 · 30 fps  
> **Frames extraites :** `docs/jobber2-frames/` (t_000s … t_095s)  
> **Complète :** `docs/ANALYSE-JOBBER-ET-PROMPT-SIMILAIRE.md` (landing nettoyage v3)  
> **État PROGESTI :** landing industry sur `/` + `/logiciel-entreprise-nettoyage` · solutions basiques · pas de mega-menu · pas de pages feature Jobber-grade

---

## 0. Comment utiliser ce document

1. **Phase A — Analyse** : lire la section 1 (teardown vidéo) + comparer aux frames.
2. **Phase B — Plan** : exécuter la section 5 (roadmap par sprints).
3. **Phase C — Build** : coller la **section 6 (PROMPT AGENT)** dans une nouvelle session Cursor et travailler fichier par fichier.
4. **Toujours** respecter les contraintes PROGESTI (section 7) — ne jamais inventer features, prix ou social proof.

---

## 1. Teardown vidéo JOBBER 2.mp4 (beat par beat)

La vidéo n’est **pas** une seule landing : c’est une **visite du site entier** — navigation, mega-menus, pricing interactif, pages métiers dupliquées. C’est le modèle pour un **site robuste multi-activités**.

| t (s) | URL / écran | Ce que Jobber fait | Pattern à reproduire PROGESTI |
|------:|-------------|-------------------|------------------------------|
| 0–2 | `/features/field-service-management-software/` | Hero **feature hub** : H1 SEO long, breadcrumbs `Home / All Features / …`, mock map + mobile empilés, CTA trial + G2 | Page **hub fonctionnalités** + pages filles par module avec breadcrumbs |
| 2–8 | Mega-menu **Product** ouvert | Grille **5 colonnes × 3 lignes** : icône ligne + label · hover fond lime pâle · footer barre grise : « Jobber Plus » + Integrations · See All Features · New Product Updates | Mega-menu **Fonctionnalités** : 9 modules PROGESTI groupés en 3 colonnes logiques |
| 8–16 | Mega-menu **Industries** | Grille **6 colonnes** : ~18 métiers (HVAC, Plumbing… **Cleaning**, **Commercial Cleaning**…) · hover lime · lien bas « See All Industries » | Mega-menu **Solutions** : 5 verticales PROGESTI + lien `/solutions` |
| 16–24 | `/pricing/` | Hero pricing : toggle **Monthly / Annual** · select **Team size** · bandeau promo · 3 cartes (Core / Connect / Grow) · prix barré + promo · « Recommended » sur Connect | **Ne pas copier** les 4 plans Jobber → garder **149 € unique** mais reprendre **UX** : toggle annuel (si réel), FAQ inline, comparaison modules |
| 24–40 | Pricing (suite) | Listes features par tier · « Compare all Jobber features » · plan wizard · widget chat « Help me choose » | Tableau comparatif **modules inclus** (tous oui) · CTA démo · pas de chat clone |
| 40–56 | Pricing team size | Select « 11–15 people » → cartes **Plus / Grow / Connect** avec « Includes 15 users » · Plus = Contact Sales | PROGESTI : mention **5 users inclus** · CTA essai · pas de tier inventé |
| 56–64 | Industries sur pricing | Mega-menu industries par-dessus pricing — preuve que **chaque métier = landing dédiée** | Chaque `/solutions/[slug]` = variante `IndustryLanding` |
| 64–72 | `/industries/landscaping-software/` | **Même Product Explorer** que cleaning : piliers Win Jobs / Work Smarter / Get Noticed / Boost Profits · mock calendrier drag · H2 sous le visuel | `IndustryLanding` **paramétrable** par métier : copy + mocks + piliers adaptés |
| 72–80 | Suite landscaping | Explorer feature « Automations for repetitive tasks » · calendrier avec cartes déplacées | Animations mock (CSS) · contenu métier dans `content/` par slug |
| 80–92 | `/industries/painting-contractor-software/` | Hero dark **identique** au cleaning : H1 métier · sub · CTA · **vidéo témoignage** client · trust bar « 400k+ pros » + App Store ratings | Template hero métier : photo/vidéo + claim · trust bar **factuelle** PROGESTI (pas 400k) |
| 92–96 | Painting (nav) | Nav sticky · Pricing souligné au hover · widget chat persistant | Header unifié · `MobileCtaBar` · pas de widget chat fake |

### 1.1 Les 4 piliers d’architecture Jobber (à internaliser)

```
                    ┌─────────────────────────────────────┐
                    │  NAV : Product │ Industries │ …    │
                    │         ↓ mega-menus full-width      │
                    └─────────────────────────────────────┘
                                      │
          ┌───────────────────────────┼───────────────────────────┐
          ▼                           ▼                           ▼
   /features/[slug]           /industries/[slug]            /pricing
   (module produit)           (landing métier = copie          (conversion
    breadcrumb + hero           de l’architecture               + compare)
    + sous-sections)            Industry + copy métier)
```

**Insight clé :** Jobber ne maintient pas 18 designs différents. Il maintient **1 template industry** × N métiers + **1 template feature** × M modules + **1 hub navigation**.

### 1.2 Mega-menu Product (inventaire exact vidéo)

| Colonne | Items |
|---------|--------|
| 1 | Quoting · Invoicing · Payments |
| 2 | Online Bookings · Scheduling · Field Documentation |
| 3 | Client Management · Client Hub · Job Management |
| 4 | Sales Pipeline · Team Management · Client Communication |
| 5 | AI Tools · Receptionist · Marketing Tools |
| Footer | Jobber Plus (New) · Integrations · See All Features · New Product Updates |

**Traduction PROGESTI (honnête)** — ne lister que le réel :

| Groupe nav | Items PROGESTI | Route |
|------------|----------------|-------|
| **Organiser** | Planning · Pointage & télégestion · Clients & sites | `/fonctionnalites/planification` etc. |
| **Facturer** | Devis · Facturation · Impayés · Rentabilité | idem |
| **Équipe & croissance** | RH · CRM · Tableaux de bord | idem |
| Footer | Intégrations · Toutes les fonctionnalités · Essai gratuit | `/integrations` · `/fonctionnalites` · `/essai-gratuit` |

**Interdit :** Online Bookings, AI Tools, Receptionist, Marketing Tools, Client Hub, Jobber Plus — absents du produit.

### 1.3 Mega-menu Industries (inventaire vidéo)

Cleaning · Commercial Cleaning · + 16 autres métiers US.

**Traduction PROGESTI** (`src/lib/site.ts` → `solutions`) :

| Slug | Titre | Route |
|------|-------|-------|
| `bureaux` | Nettoyage de bureaux | `/solutions/bureaux` |
| `syndics` | Syndics & copropriétés | `/solutions/syndics` |
| `professionnels` | Professionnels & commerces | `/solutions/professionnels` |
| `fin-de-chantier` | Fin de chantier | `/solutions/fin-de-chantier` |
| `auto-entrepreneurs` | Auto-entrepreneurs & petites équipes | `/solutions/auto-entrepreneurs` |
| — | Logiciel nettoyage (SEO) | `/logiciel-entreprise-nettoyage` |

**Extension future (à imaginer, contenu FR réaliste)** — seulement si Simon valide :

- `parties-communes` (alias SEO syndics)
- `hotellerie` (nettoyage chambres / LOB)
- `industrie` (sites industriels)
- `collectivites` (marchés publics)

Chaque extension = **même template** + matrice contenu §4.

### 1.4 Patterns d’interactivité observés

| Pattern | Comportement Jobber | Spec PROGESTI |
|---------|---------------------|---------------|
| Mega-menu desktop | Hover/click · panneau full-width · focus trap · Escape ferme | `MegaMenu.tsx` · `useMediaQuery` · mobile = accordion dans drawer |
| Mega-menu item | Icône 24px stroke · hover `bg-lime/10` · lien direct | Icônes cohérentes (lucide ou SVG inline) · tokens `blue-deep` / `#B8F000` |
| Product Explorer | Pilier accordion · 4 features · swap mock+texte · underline hand-drawn | ✅ `IndustryProductExplorer` — **étendre** aux pages solutions |
| Pricing toggle | Monthly/Annual recalcule prix | Si annuel réel (`mainPlan.yearly`) → toggle ; sinon **pas de toggle fake** |
| Team size select | Recalcule tier | PROGESTI : fixe 5 users — afficher clairement, pas de select trompeur |
| Breadcrumbs | Feature pages | `Breadcrumb.tsx` : Accueil › Fonctionnalités › Planning |
| Sticky nav + CTA | Trial always visible | Header + `MobileCtaBar` |
| Chat widget | Plan helper | **Ne pas cloner** — optional : lien « Besoin d'aide ? » → `/contact` ou tel |
| Vidéo hero | Play → modal ou `/demo` | Lien `/demo` · pas de faux témoignage |
| Section torn paper | Transition hero → clair | Optionnel : SVG vague entre sections dark/light |

---

## 2. Écart PROGESTI actuel vs cible

| Zone | Aujourd’hui | Cible Jobber-grade |
|------|-------------|-------------------|
| `/` | `IndustryLanding` complet | ✅ Garder · hub nettoyage général |
| Header | Dropdown Solutions basique (mobile seulement partiel) | Mega-menus Product + Solutions desktop |
| `/fonctionnalites` | Index + pages `[slug]` simples | Hub + pages riches (explorer partiel, mocks, FAQ module) |
| `/solutions/[slug]` | `SolutionLanding` legacy (hero + pains + day timeline) | **Migrer vers `IndustrySolutionLanding`** = IndustryLanding paramétré |
| `/tarifs` | `PricingTable` | Reprendre layout pricing Jobber **sans** multi-tier fake |
| Contenu | `solutions-content.ts` (5 métiers) | + `industry-content/[slug].ts` : piliers 4×4, FAQ, hero, mocks |
| Composants | `IndustryProductExplorer`, `FeatureMock` | Réutiliser · extraire config |
| SEO | Routes existantes | Maillage interne mega-menu · breadcrumbs · JSON-LD FAQ |

---

## 3. Architecture cible du repo

```
src/
├── lib/
│   ├── site.ts                    # solutions, modules, nav (étendre navGroups)
│   ├── navigation.ts              # NEW — structure mega-menus
│   ├── industry/
│   │   ├── types.ts               # IndustryPageConfig, Pillar, Feature
│   │   ├── default.ts             # copy landing nettoyage (actuel content.ts)
│   │   ├── bureaux.ts
│   │   ├── syndics.ts
│   │   └── …                      # 1 fichier par métier
│   └── solutions-content.ts       # DEPRECATE progressivement → industry/
├── components/
│   ├── navigation/
│   │   ├── MegaMenu.tsx           # panneau full-width
│   │   ├── MegaMenuColumn.tsx
│   │   ├── NavDropdown.tsx        # accessibilité
│   │   └── Breadcrumb.tsx
│   ├── industry/
│   │   ├── IndustryLanding.tsx    # accepte config prop ou slug
│   │   ├── IndustryProductExplorer.tsx
│   │   ├── IndustryFaq.tsx
│   │   ├── FeatureMock.tsx
│   │   └── IndustryHero.tsx       # extraire hero (photo/claim/strip)
│   └── features/
│       ├── FeatureHubLanding.tsx  # /fonctionnalites index Jobber-like
│       └── FeatureDetailLanding.tsx
└── app/
    ├── page.tsx                   # IndustryLanding(default)
    ├── logiciel-entreprise-nettoyage/page.tsx
    ├── solutions/[slug]/page.tsx  # IndustryLanding(getIndustryConfig(slug))
    └── fonctionnalites/
        ├── page.tsx               # FeatureHubLanding
        └── [slug]/page.tsx        # FeatureDetailLanding
```

---

## 4. Matrice contenu par métier (agent : rédiger ainsi)

Pour **chaque** slug dans `solutions`, produire un objet `IndustryPageConfig` :

```ts
type IndustryPageConfig = {
  slug: string;
  seo: { title: string; description: string; canonical: string };
  hero: {
    h1Lead: string;       // ex. "Logiciel nettoyage de bureaux"
    h1: string;           // suite accroche
    sub: string;
    claimBefore: string;
    claimHighlight: string;
    claimSub: string;
    media: { photo: string; productStrip: string; demoHref: string };
    trust: { label: string; value: string }[];
  };
  empathy: { h2: string; body: string };
  pillars: Pillar[];      // 4 piliers × 4 features (voir ANALYSE v3)
  showcase: { title: string; sub: string; mock: string; badges: string[] };
  proof: { h2: string; quote: string; items: { title: string; text: string }[] };
  universLinks: string[]; // autres solutions
  faq: { q: string; a: string }[];
};
```

### 4.1 Angles métier à différencier (obligatoire)

| Métier | Douleur #1 | Feature hero | Mot-clé SEO |
|--------|------------|--------------|-------------|
| **Bureaux** | Créneaux avant/après ouverture · open spaces | Planning multi-étages | logiciel nettoyage bureaux |
| **Syndics** | Preuves parties communes · multi-immeubles | Preuves de passages | logiciel nettoyage syndic |
| **Professionnels** | Accès sensibles (cabinet médical) · horaires serrés | Pointage + historique | logiciel nettoyage commerces |
| **Fin de chantier** | Prestations ponctuelles · photos · facturation rapide | Devis → facture | logiciel remise en état |
| **Auto-entrepreneurs** | Excel/WhatsApp · petit budget | Prix 149 € tout inclus | logiciel nettoyage TPE |

Ne pas copier-coller le même ¶ entre métiers — changer **exemples concrets** (noms de sites fictifs OK : « Immeuble Wilson », « Cabinet Pasteur »).

### 4.2 Pages fonctionnalités (template FeatureDetail)

Sections ordonnées (comme Jobber feature page) :

1. Breadcrumb  
2. Hero : `{Module} pour entreprises de nettoyage` + mock  
3. **3 bénéfices** (icônes)  
4. **Explorer simplifié** : 3 onglets use-cases (syndic / bureaux / fin de chantier)  
5. **Workflow** : 4 étapes (créer → planifier → pointer → facturer)  
6. FAQ module (4 questions)  
7. Liens : autres modules + essai  
8. `ConversionBlock`

---

## 5. Roadmap d’exécution (sprints)

### Sprint 1 — Navigation & os (2–3 jours agent)
- [ ] `src/lib/navigation.ts` + types
- [ ] `MegaMenu` + intégration `Header.tsx` (desktop hover + focus + mobile drawer)
- [ ] `Breadcrumb` composant
- [ ] Tests clavier : Tab, Escape, aria-expanded

### Sprint 2 — Refactor industry config (2 jours)
- [ ] Extraire `content.ts` → `lib/industry/default.ts`
- [ ] `getIndustryConfig(slug)` avec fallback default
- [ ] `IndustryLanding` accepte `config: IndustryPageConfig`

### Sprint 3 — Solutions métiers (1 métier / session)
- [ ] `bureaux.ts` + migrer `/solutions/bureaux`
- [ ] `syndics.ts`
- [ ] `professionnels.ts`
- [ ] `fin-de-chantier.ts`
- [ ] `auto-entrepreneurs.ts`
- [ ] Chaque page : même craft que `/` (hero, explorer, showcase, FAQ schema)

### Sprint 4 — Hub fonctionnalités (2 jours)
- [ ] `/fonctionnalites` → grille mega-menu visuelle + liens
- [ ] Enrichir `/fonctionnalites/[slug]` (sections §4.2)
- [ ] Mocks par module dans `FeatureMock` (mapping slug → composition)

### Sprint 5 — Tarifs & polish (1–2 jours)
- [ ] `/tarifs` layout comparatif (tous modules ✓) sans faux tiers
- [ ] Transitions sections · reduced-motion
- [ ] Sitemap + maillage footer
- [ ] QA 375 / 768 / 1440

### Sprint 6 — Contenu & SEO (continu)
- [ ] FAQ schema chaque page métier
- [ ] Internal linking depuis blog/glossaire existants
- [ ] OG images par métier (optionnel)

---

## 6. PROMPT AGENT (copier-coller)

```
Tu développes le site marketing PROGESTI (Next.js 16, App Router, Tailwind v4).
Références obligatoires :
- Vidéo Jobber : C:\Users\Simon\Desktop\JOBBER 2.mp4
- Frames : docs/jobber2-frames/
- Teardown landing : docs/ANALYSE-JOBBER-ET-PROMPT-SIMILAIRE.md
- Roadmap : docs/PROMPT-JOBBER2-SITE-MULTI-METIERS.md

## Mission
Transformer PROGESTI en site **multi-métiers robuste** calqué sur l’**architecture** Jobber (mega-menus, pages industry dupliquées, hub features, pricing clair) — pas sur leur identité visuelle US ni leurs features inventées.

## Contraintes PROGESTI (non négociables)
- Prix : 149 € HT/mois · 5 utilisateurs · tous modules · essai site.trialDays (7 j) · sans CB
- USP : « Fait par des gens du nettoyage »
- Téléphone : site.phone / site.phoneTel
- Tokens : blue-deep, green-action, accent trial #B8F000 — pas le lime Jobber #A8E300 comme marque
- Pas de faux témoignages, ratings G2, « 400k users », promos −40%, modules inexistants (AI, bookings, marketing…)
- Pas de multi-tier pricing Jobber — un seul plan mainPlan
- AGENTS.md : lire node_modules/next/dist/docs/ avant APIs Next.js

## État actuel
- IndustryLanding sur / et /logiciel-entreprise-nettoyage (hero navy gradient, Product Explorer 4×4, FAQ)
- Header dark sur home · solutions basiques SolutionLanding legacy
- site.ts : solutions[5], modules[9]

## Architecture cible (exécuter dans l’ordre)
1. navigation.ts + MegaMenu (Product=modules groupés, Industries=solutions)
2. Refactor IndustryLanding → config-driven (lib/industry/*.ts)
3. Migrer chaque /solutions/[slug] vers IndustryLanding paramétré
4. FeatureHub + FeatureDetail enrichies
5. Tarifs : UX Jobber, contenu PROGESTI honnête

## Patterns UI Jobber à reproduire
- Mega-menu : grille icône+label, hover subtil, footer liens secondaires
- Industry page : hero dark + media claim + trust bar + empathie + Product Explorer sync (pilier×feature→mock+texte) + showcase + preuve + grille + support + tarif + FAQ
- Feature page : breadcrumb + hero + bénéfices + workflow
- Interactivité : aria, keyboard, prefers-reduced-motion, mobile drawer

## Patterns à NE PAS reproduire
- Chat widget « Jeanine »
- Team size select si prix fixe
- Annual discount si non défini business
- Features US non produit

## Fichiers clés existants
- src/components/industry/IndustryLanding.tsx
- src/components/industry/IndustryProductExplorer.tsx
- src/components/industry/FeatureMock.tsx
- src/components/industry/content.ts
- src/components/layout/Header.tsx
- src/lib/site.ts
- src/lib/solutions-content.ts

## Definition of Done (par page métier)
- [ ] Config TS dédiée lib/industry/{slug}.ts
- [ ] Hero + explorer avec copy et mocks **spécifiques métier**
- [ ] FAQ ≥ 6 questions + FaqPageLd
- [ ] Metadata + canonical
- [ ] Mega-menu pointe vers la page
- [ ] Mobile CTA bar
- [ ] Lighthouse : pas de régression majeure
- [ ] npm run build OK

## Style rédactionnel FR
- Tutoiement/vouvoiement : **vous** (B2B TPE)
- Phrases courtes · verbes métier · pas jargon SaaS anglais
- Formules : voir ANALYSE §B (H1, empathie, panneaux)

Commence par le sprint demandé. Minimise le scope — un PR conceptuel = mega-menu OU un métier, pas tout d’un coup.
```

---

## 7. Contraintes & garde-fous (checklist reviewer)

Avant merge, vérifier :

- [ ] Aucun prix autre que 149 € / 1490 € annuel (si affiché)
- [ ] Aucun « essai 14 jours » ou « 2 mois » sauf pages ads legacy explicites
- [ ] Aucune feature listée non présente dans `modules` ou le produit réel
- [ ] Liens mega-menu → routes qui existent (pas de 404)
- [ ] Images : assets `public/` existants ou placeholders honest « capture produit »
- [ ] Header cohérent : dark sur landings industry · light sur pages claires si besoin
- [ ] `prefers-reduced-motion` respecté sur explorer et menus

---

## 8. Inventaire assets & mocks

| Asset | Usage |
|-------|--------|
| `hero-owners.jpg` | Hero émotion métier |
| `hero-planning.png` | Planning / strip produit |
| `screen-telegestion.webp` | Pointage / showcase |
| `screen-factures.png/.webp` | Facturation |
| `screen-passages.webp` | Preuves |
| `dashboard-mockup.png` | Rentabilité / stack |
| `hero-mockup.png` | Hub clients |

**Recettes mock** (FeatureMock) : `planning-map` · `telegestion` · `factures-stack` · `dashboard-stack` · `passages` · `hub` — voir ANALYSE §D.

---

## 9. Prochaine action recommandée

**Session 1 :** Sprint 1 (MegaMenu) + refactor config `getIndustryConfig`.  
**Session 2 :** Migrer `/solutions/bureaux` en premier métier pilote — valider avec Simon avant de dupliquer les 4 autres.

---

*Document généré après analyse frame-by-frame de JOBBER 2.mp4 — août 2026.*
