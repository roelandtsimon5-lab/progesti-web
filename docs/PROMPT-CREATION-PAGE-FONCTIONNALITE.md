# PROMPT — Création page fonctionnalité ULTRA PRO (1 module = 1 page parfaite)

> **Usage :** coller ce document dans Cursor Agent **une fois par module**.  
> Remplacer `{SLUG}` par le slug réel avant exécution (ex. `planification`, `pointage`, …).  
> **Prérequis :** avoir lu `docs/PROMPT-AUDIT-FONCTIONNALITES.md` pour le module cible (ou lancer l’audit d’abord).  
> **Workspace :** `c:\Users\Simon\Desktop\Progesti\web`  
> **Ne pas committer** sauf demande explicite.

---

## VARIABLES À RENSEIGNER AVANT EXÉCUTION

```yaml
SLUG: planification                    # slug dans site.ts
MODULE_TITLE: Planning                 # titre affiché
MODULE_SHORT: "…"                      # depuis site.ts
MODULE_PAIN: "…"                       # depuis site.ts
PILIER_MENU: Organiser                 # Organiser | Facturer | Équipe & pilotage
SEO_PRIMARY_KW: "logiciel planning entreprise nettoyage"
SEO_SECONDARY_KW: ["planning agents nettoyage", "planning multi-sites propreté", …]
MOCK_HERO: planning-map                # MockKind pour tabs / visuels
IMAGE_HERO: /hero-planning.webp
IMAGE_ALT: "Planning PROGESTI — vue semaine multi-sites"
```

**Les 9 slugs valides :** `planification` · `pointage` · `clients` · `devis` · `facturation` · `impayes` · `gestion-rh` · `rentabilite` · `crm`

---

## 0. Rôle — tu es le meilleur site maker B2B field service

Tu es **directeur artistique + copywriter senior + lead front Next.js**. Tu as conçu des pages features pour des SaaS à 8 chiffres (Jobber, Stripe, Linear, Notion).

Tu livres une page qui :
- **Convertit** un dirigeant propreté sceptique en essai 7 jours ;
- **Ranke** sur Google FR pour `{SEO_PRIMARY_KW}` ;
- **Ressemble** à la homepage PROGESTI et à la charte Jobber — pas à un template générique ;
- Contient **≥ 1 200 mots** de copy utile (hors header/footer), **100 % spécifique** au module `{MODULE_TITLE}`.

**North star :** « Si je cherchais un logiciel de {MODULE_TITLE} pour mon entreprise de nettoyage, cette page me convainc en 90 secondes. »

---

## 1. Offre & faits immuables (ne jamais inventer)

| Fait | Valeur |
|------|--------|
| Prix | **149 € HT/mois** — tout inclus |
| Utilisateurs | **Jusqu’à 5** inclus |
| Modules | **9 modules** — aucun payant en plus |
| Essai | **7 jours gratuit**, sans carte bancaire |
| Téléphone | **05 82 95 09 19** |
| App | Cloud + **Android & iOS** agents |
| Marque | **PROGESTI** — logiciel entreprises de nettoyage France |
| Funnel CTA | `cta.trial` → `/essai-gratuit` · `cta.demo` → `/demo` |

**Interdit copy :** « révolutionner », « solution innovante », « IA magique », essai 2 mois, prix 29,99 €, faux avis, stats inventées (« +500 clients »).

**Ton :** vouvoiement, phrases courtes, vocabulaire métier : sites, agents, vacations, syndic, open space, fin de chantier, titulaire, backup, pointage, prépaie.

---

## 2. Charte graphique (non négociable)

Source : `src/lib/brand.ts` + `src/app/globals.css` + `docs/PROMPT-ULTRA-PRO.md`

```
Navy brand-navy     #012939   hero, titres, texte principal
Chrome brand-chrome #011B25   FinalPush, bandes sombres uniques
Lime lime-cta       #A8E300   CTA essai, checks, numéros workflow, underline actif
Paper paper         #FAFAFA   sections alternées
Warm warm-light     #F6F8F9   fond page
Line line           #E4E8EB   bordures — remplacer blue-mist / #F5F8FB
Slate slate         #5C6B73   corps texte
Radius              2px       boutons, cards, inputs — PAS rounded-xl sur CTA
Typo                Inter     font-sans weight 400–900 — une seule famille
Ombres              rgba(1,41,57,0.08–0.45) — pas rgba(11,61,110,…)
```

**Rythme vertical (1 page module) :**
1. Hero **dark** (`industry-hero-bg`)  
2. Benefits strip **blanc**  
3. Cas d’usage **paper** (`FeatureUseCaseTabs`)  
4. Problème / réponse **blanc**  
5. Comparatif Excel **paper** (NOUVEAU — à ajouter)  
6. Workflow **paper ou white**  
7. Journée type **blanc** (NOUVEAU — optionnel si pertinent)  
8. Intégrations / modules liés **paper**  
9. FAQ **blanc**  
10. Autres modules **paper**  
11. **FinalPush chrome** — seul autre bloc dark  
12. Footer (global layout)

**Interdit :** 3 sections navy consécutives · `#F5F8FB` · `#B8F5D4` · `rounded-2xl` hero image · `font-display` Fraunces · pills tabs actifs navy plein (préférer underline lime)

---

## 3. Architecture technique — fichiers à lire puis modifier

### 3.1 Lecture obligatoire (ordre)

1. `src/lib/site.ts` — entrée `modules` pour `{SLUG}`  
2. `src/lib/modules-content.ts` — structure `ModuleContent` actuelle  
3. `src/app/fonctionnalites/[slug]/page.tsx` — template page  
4. `src/components/features/FeatureUseCaseTabs.tsx`  
5. `src/components/industry/FeatureMock.tsx` — `MockKind` disponibles  
6. `src/components/industry/IndustryFaq.tsx`  
7. `src/components/conversion/FinalPush.tsx`  
8. `src/components/ui/ButtonLink.tsx` — variants `trial`, `outline-white`, `secondary`  
9. `src/lib/cta.ts` — labels centralisés  
10. Homepage `IndustryProductExplorer.tsx` — cohérence libellés  

### 3.2 Extension du modèle de données

**Étendre** `ModuleContent` dans `modules-content.ts` :

```typescript
export type ModuleContent = {
  // Existants — enrichir, ne pas vider
  benefits: readonly { title: string; text: string }[];
  workflow: readonly { step: string; text: string }[];
  image: string;
  imageAlt: string;
  faq: readonly { q: string; a: string }[];
  useCases?: readonly UseCaseTab[];

  // NOUVEAUX — obligatoires pour page ultra pro
  intro?: string;                    // 2–3 phrases hero SEO sous H1 (optionnel si H1 suffit)
  seoTitle?: string;                 // override metadata si besoin
  seoDescription?: string;           // 150–160 car. unique
  problemBody?: string;              // 120–180 mots — douleur terrain détaillée
  solutionBody?: string;             // 120–180 mots — réponse PROGESTI spécifique
  excelComparison?: readonly {       // 5–7 lignes comparatif
    aspect: string;
    excel: string;
    progesti: string;
  }[];
  dayInLife?: readonly { time: string; text: string }[];  // 4–5 créneaux
  relatedModuleSlugs?: readonly string[];  // 3 slugs maillage
  testimonial?: { quote: string; author: string; role: string }; // maquette OK, pas faux nom célèbre
  stats?: readonly { value: string; label: string }[];  // max 3, crédibles (149€, 7j, 5 users)
};
```

**Workflow :** personnaliser les 4 étapes pour `{SLUG}` — **interdit** de garder le `sharedWorkflow` générique sans adaptation module.

### 3.3 Composant page (option A — recommandé)

Créer `src/components/features/ModuleLandingPage.tsx` qui reçoit `{ mod, content }` et implémente **toutes** les sections §4.  
Faire pointer `[slug]/page.tsx` vers ce composant pour réduire duplication future.

**Option B :** enrichir directement `[slug]/page.tsx` si composant unique trop lourd pour ce sprint.

---

## 4. Blueprint section par section (copy + UI + SEO)

### SECTION A — Hero dark (`industry-hero-bg`)

**Layout :** 2 colonnes lg — texte gauche, image droite, `Breadcrumb` dark.

**Badge :** `Module · {PILIER_MENU} · Inclus à 149 € HT/mois` — `bg-white/10 text-lime-cta rounded-[2px]`

**H1 (formula SEO) :**
```
{MODULE_TITLE} pour entreprises de nettoyage
```
Variante si KW longue traîne :
```
Logiciel de {MODULE_TITLE} pour entreprises de propreté
```

**Sous-titre :** reprendre `MODULE_SHORT` + **1 phrase bénéfice unique** (30–40 mots). Exemple Planning :
> « Affectez agents et sites sans double saisie. Fréquences quotidiennes, hebdo ou mensuelles — titulaire et backup visibles sur une seule semaine multi-sites. »

**CTA :**
- Primaire : `ButtonLink` variant `trial` size `lg` — « Essai 7 jours gratuit »  
  `eventPayload={{ cta: "module_hero_trial", module: "{SLUG}" }}`
- Secondaire : `outline-white` — « Voir la démo »

**Ligne confiance :** `Sans carte bancaire · 5 utilisateurs · tous modules inclus`

**Image :** `{IMAGE_HERO}` — `priority`, `rounded-[2px] border border-white/10`, ombre `rgba(0,0,0,0.45)`

**Metadata :**
```typescript
title: `{SEO_PRIMARY_KW} | PROGESTI`  // ≤ 60 car.
description: content.seoDescription ?? // 150–160 car., inclut KW + essai 7j + 149€
```

---

### SECTION B — Stats strip (4 colonnes, fond blanc, border-y line)

Chiffres **module-adaptés** (pas toujours les mêmes 4) :

| Module | Col 1 | Col 2 | Col 3 | Col 4 |
|--------|-------|-------|-------|-------|
| planification | 7 jours | 149 € | Multi-sites | 0 module + |
| pointage | Temps réel | Géoloc | Mobile | 0 papier |
| facturation | Du réalisé | Moins d’oublis | 1 outil | Export compta |
| … | adapter | | | |

Classes : `font-sans text-2xl font-extrabold text-brand-navy`

---

### SECTION C — 3 bénéfices (benefits)

**Titre section (optionnel eyebrow) :** `Ce que vous gagnez`

3 cartes **sans card lourde** — titre `font-extrabold text-brand-navy` + texte `text-slate` 2–3 lignes.

**Règles copy :**
- Titre bénéfice = **résultat** (« Fréquences qui tiennent » pas « Module planning »)
- Texte = **mécanisme** (comment PROGESTI le fait)
- **Unique** aux 2 autres bénéfices de la page — pas de synonymes d’un autre module

---

### SECTION D — Cas d’usage métier (`FeatureUseCaseTabs`)

**Fond :** `bg-paper` (pas `#F5F8FB`)

**H2 :** `Comment les entreprises de nettoyage utilisent {MODULE_TITLE}`

**3 tabs obligatoires :** Syndics · Bureaux · Fin de chantier

Pour **chaque tab**, rédiger :
- **title** : 8–12 mots, scénario concret  
- **body** : **80–120 mots** — personne, lieu, contrainte, résolution PROGESTI  
- **mock** : `{MOCK_HERO}` ou mock cohérent module  
- **context** : slug métier

**Tab actif UI :** border-bottom lime 3px + text brand-navy — **pas** pill `bg-blue-deep` plein (aligner prompt ultra pro)

**Exemple body Planning / Syndics (référence qualité) :**
> « Votre contrat couvre 12 immeubles de copropriété : halls, cages, locaux vélos. Chaque site a sa fréquence — certains 3×/semaine, d’autres 1×. Dans PROGESTI, vous programmez une fois les récurrences et affectez un titulaire par immeuble. Quand le gardien signale une absence, vous glissez un backup sans reconstruire la semaine dans Excel. En fin de mois, l’historique des passages est exportable pour l’interlocuteur syndic. »

---

### SECTION E — Problème vs réponse (2 colonnes + sidebar)

**Colonne gauche :**

Eyebrow `Le problème`  
H2 `Sur le terrain`  
Paragraphe `problemBody` **120–180 mots** — décrire la douleur `{MODULE_PAIN}` en situation réelle (Excel, WhatsApp, papier, double saisie).

Eyebrow `La réponse PROGESTI`  
H2 `Ce que change {MODULE_TITLE}`  
Liste 4–6 puces avec check lime :
- Bénéfice 1 spécifique module
- Bénéfice 2 spécifique
- « Accessible cloud, Android et iOS »
- « Inclus à 149 € HT/mois — pas de module payant en plus »
- Lien fonctionnel vers module adjacent (ex. Planning → Pointage)

**Sidebar droite :** fond `bg-paper border border-line rounded-[2px] p-7`

H2 `Pour quels métiers ?`  
Liens vers `/solutions/{slug}` — 5 solutions depuis `site.solutions`

CTA essai + lien tarifs

---

### SECTION F — Comparatif Excel vs PROGESTI (NOUVEAU)

**Fond :** `bg-paper section-tight`

**H2 :** `{MODULE_TITLE} : Excel vs PROGESTI`

**Tableau** 5–7 lignes :

| | Excel / WhatsApp | PROGESTI |
|---|------------------|----------|
| … | … | … |

Colonne PROGESTI : fond `bg-lime-cta/10`, texte `font-semibold text-brand-navy`

**Exemples lignes par module :**

**Planning :**
- Mise à jour planning | Manuelle, erreurs | Temps réel, 1 source
- Absences | Appels, oublis | Backup en 2 clics
- Multi-sites | Fichiers séparés | Parc entier, 1 semaine
- Historique | Perdu | Par site, daté
- Coût | Heures admin cachées | 149 € HT/mois tout inclus

**Pointage :**
- Preuve passage | Feuille signée | Horodatage + géoloc
- Remontée bureau | Fin de semaine | Live
- Litiges heures | Fréquents | Trace claire
- etc.

---

### SECTION G — Workflow 4 étapes

**H2 :** `Du bureau au terrain — {MODULE_TITLE} en 4 étapes`

**Étapes personnalisées** — numéro `text-lime-cta font-extrabold text-2xl`

Exemple **Facturation** (pas le sharedWorkflow générique) :
1. Les agents pointent sur site  
2. Les heures remontent automatiquement  
3. Vous validez les vacations de la semaine  
4. La facture reprend le réalisé — sans ressaisie  

Cards : `border border-line bg-white rounded-[2px] p-5`

---

### SECTION H — Journée type (optionnel, recommandé Planning / Pointage / Facturation)

**H2 :** `Une journée avec {MODULE_TITLE}`

4–5 créneaux `{ time, text }` — même pattern que `solutions-content.ts` → `day`

Fond blanc, timeline verticale discrète (border-l line)

---

### SECTION I — Modules liés & maillage

**H2 :** `{MODULE_TITLE} connecté à votre flux PROGESTI`

3 cards vers modules `relatedModuleSlugs` :
- Planning ↔ Pointage ↔ Facturation (exemple chaîne)

Texte : 1 ligne expliquant **l’enchaînement données**

Liens solutions : « Voir aussi : Nettoyage bureaux → »

---

### SECTION J — FAQ (minimum 5 questions)

**H2 :** `FAQ — {MODULE_TITLE}`

5–8 Q/R — **uniques**, ciblant objections réelles :

Templates par type :
- « Inclus dans le tarif ? » → 149 €, pas de supplément  
- « Combien de temps pour démarrer ? » → compte + sites en minutes  
- « Remplace Excel ? » → oui, progressivement  
- Question technique module (géoloc, export compta, récurrences…)  
- « Support ? » → tel 05 82 95 09 19  

`FaqPageLd` avec toutes les questions.

---

### SECTION K — Autres modules (grille 4)

Identique à l’existant mais classes charte : `border-line`, `hover:border-brand-navy-soft`, pas `blue-mist`

---

### SECTION L — FinalPush + MobileCtaBar

Ne pas modifier — déjà global.

---

## 5. Spécificités copy par module (angles obligatoires)

Utiliser cette section pour **ne pas réécrire la même page 9 fois**.

### `planification` — Planning
- **Angle :** fréquences, titulaire/backup, vue agent vs site, multi-sites  
- **KW :** logiciel planning entreprise nettoyage, planning agents propreté  
- **Douleur à creuser :** Excel + WhatsApp, sites orphelins, vacances doublées  
- **Mock :** `planning-map`, `passages`  
- **Modules liés :** pointage, clients, gestion-rh  

### `pointage` — Pointage & télégestion
- **Angle :** preuve terrain, géoloc, litiges heures, remontée live  
- **KW :** pointage agent nettoyage, télégestion propreté  
- **Mock :** `telegestion`, `mobile-app`  
- **Mention légale soft :** géoloc = option, pas surveillance abusive  

### `clients` — Clients
- **Angle :** fiche unique, sites rattachés, codes accès, historique litiges  
- **KW :** gestion clients entreprise nettoyage  
- **Mock :** `clients`, `multi-sites`, `historique-timeline`  

### `devis` — Devis
- **Angle :** devis pro, suivi commercial, conversion devis → planning  
- **KW :** devis nettoyage logiciel, devis entreprise propreté  
- **Mock :** `devis`, `flux-pipeline`  

### `facturation` — Facturation
- **Angle :** réalisé → facture, moins d’oublis, récurrence contrats  
- **KW :** facturation entreprise nettoyage, logiciel facturation propreté  
- **Mock :** `factures-stack`  
- **Lien :** page Intégrations export compta  

### `impayes` — Impayés
- **Angle :** trésorerie, relances, marge protégée  
- **KW :** relance facture impayée, suivi impayés B2B services  
- **Mock :** `impayes`  

### `gestion-rh` — RH
- **Angle :** absences, remplacements planning, variables prépaie  
- **KW :** RH entreprise nettoyage, gestion absences agents  
- **Mock :** `rh`  
- **Précision :** base prépaie, pas logiciel paie complet  

### `rentabilite` — Rentabilité
- **Angle :** marge par client/site, tableaux de bord, décisions chiffrées  
- **KW :** marge entreprise nettoyage, rentabilité contrats propreté  
- **Mock :** `dashboard-stack`  
- **Note :** mega menu dit aussi « Tableaux de bord » — harmoniser titres  

### `crm` — CRM
- **Angle :** pipeline, devis en cours, pas de CRM séparé du ops  
- **KW :** CRM entreprise nettoyage, suivi prospects propreté  
- **Mock :** `flux-pipeline`, `devis`  

---

## 6. SEO on-page (checklist stricte)

- [ ] 1 seul H1 — contient `{MODULE_TITLE}` + « entreprises de nettoyage » ou « propreté »  
- [ ] H2 uniques (≥ 6) incluant variations KW  
- [ ] `{SEO_PRIMARY_KW}` dans les 100 premiers mots  
- [ ] Title tag ≠ H1 (complémentaire)  
- [ ] Meta description : essai + prix + bénéfice module  
- [ ] Canonical `/fonctionnalites/{SLUG}`  
- [ ] Alt images descriptifs avec « PROGESTI » + module  
- [ ] Liens internes : ≥ 3 modules + ≥ 2 solutions + tarifs + essai  
- [ ] Schema FAQ + SoftwareApplication  
- [ ] Pas de keyword stuffing  

---

## 7. Composants & classes Tailwind autorisées

**Utiliser :**
- `text-brand-navy`, `bg-brand-chrome`, `text-lime-cta`, `bg-lime-cta`, `border-line`, `bg-paper`, `text-slate`, `text-muted`
- `industry-hero-bg`, `eyebrow`, `section`, `section-tight`, `container`
- `ButtonLink` variants existants
- `Reveal` pour workflow / FAQ entrée

**Remplacer si trouvé :**
- `text-blue-deep` → `text-brand-navy`
- `border-blue-mist` → `border-line`
- `bg-[#F5F8FB]` → `bg-paper`
- `text-[#B8F5D4]` → `text-lime-cta`
- `font-display` → `font-sans font-extrabold`
- `rounded-xl` / `rounded-2xl` sur CTA → `rounded-[2px]`

---

## 8. Accessibilité

- Tabs : `aria-selected`, focus ring lime  
- Table comparatif : `<th scope="col">`  
- Contraste AA hero  
- Pas de texte essentiel uniquement en couleur  

---

## 9. Performance

- 1 image hero `priority`  
- Mocks `FeatureMock` = SVG/CSS — pas de nouvelles images lourdes sans WebP  
- Pas de `"use client"` sur la page entière — seulement tabs si nécessaire  
- Build statique : `generateStaticParams` inchangé  

---

## 10. Prompt d’exécution (coller tel quel après avoir rempli § VARIABLES)

```
Mission : créer / refondre la page ULTRA PRO pour le module {SLUG} ({MODULE_TITLE}).

Tu es le site maker décrit dans docs/PROMPT-CREATION-PAGE-FONCTIONNALITE.md.

ÉTAPES :

1. Lire site.ts (module {SLUG}), modules-content.ts, [slug]/page.tsx, FeatureUseCaseTabs, FeatureMock, brand.ts, globals.css.

2. Étendre ModuleContent dans modules-content.ts pour {SLUG} avec :
   - problemBody, solutionBody (120–180 mots chacun)
   - excelComparison (5–7 lignes)
   - workflow personnalisé (4 étapes module-spécifiques)
   - useCases 3 tabs (80–120 mots body chacun)
   - faq 5–8 questions
   - dayInLife si pertinent
   - relatedModuleSlugs, seoDescription
   - benefits enrichis

3. Créer ModuleLandingPage.tsx (ou enrichir page.tsx) implémentant sections A→K du blueprint.

4. Appliquer charte Jobber : brand-navy, lime-cta, line, paper, radius 2px, Inter.

5. Ajouter section comparatif Excel vs PROGESTI.

6. Corriger FeatureUseCaseTabs styles : tab actif underline lime, fond paper.

7. Metadata generateMetadata avec seoTitle/seoDescription unique.

8. Vérifier maillage interne (modules + solutions + tarifs).

9. npm run build — 0 erreur, page /fonctionnalites/{SLUG} générée.

10. Ouvrir preview localhost:3000/fonctionnalites/{SLUG} — screenshot mental : hero dark → alternance claire.

11. Livrer résumé :
    - Mots copy ajoutés (~)
    - Sections ajoutées
    - P0 restants humains (screenshot produit réel, témoignage signé)

RAPPELS :
- 149 € HT/mois · 7 jours essai sans CB · 5 users · tel 05 82 95 09 19
- Ne pas toucher /lp/**, /ancien, /v1, /v2
- Ne pas committer
- Copy 100% en français, spécifique {MODULE_TITLE}, ≥ 1200 mots visibles
```

---

## 11. Definition of Done (page module)

- [ ] Score auto-audit ≥ 8/10 sur clarté, contenu, produit, conversion, SEO, charte  
- [ ] Workflow **non générique**  
- [ ] 3 useCases **80+ mots** chacun  
- [ ] Comparatif Excel présent  
- [ ] FAQ ≥ 5  
- [ ] Aucune classe interdite §7  
- [ ] Build OK  
- [ ] CTA essai hero + sidebar + FinalPush  
- [ ] `eventPayload.module` = `{SLUG}`  

---

## 12. Enchaînement recommandé (9 modules)

Exécuter ce prompt **9 fois**, dans cet ordre SEO :

1. `planification`  
2. `pointage`  
3. `facturation`  
4. `devis`  
5. `clients`  
6. `gestion-rh`  
7. `rentabilite`  
8. `impayes`  
9. `crm`  

Après les 9 pages : relancer `PROMPT-AUDIT-FONCTIONNALITES.md` pour valider score global ≥ 8/10.

---

## 13. Annexe — exemple contenu complet `planification` (extrait qualité)

### problemBody (extrait)
> « Chez la plupart des entreprises de propreté de 5 à 30 agents, le planning vit encore dans Excel ou Google Sheets, complété par des groupes WhatsApp pour les absences de dernière minute. Résultat : des sites oubliés un mardi, des vacations en double quand deux personnes modifient le même fichier, et des titulaires flous sur les immeubles syndic. Chaque changement demande 20 minutes de copier-coller — et le bureau ne sait pas toujours ce qui a réellement été fait sur le terrain. »

### excelComparison (extrait)
| Aspect | Excel / WhatsApp | PROGESTI |
|--------|------------------|----------|
| Récurrences | Formules fragiles | Programmées une fois par site |
| Absence agent | Appels + message | Backup affecté en 2 clics |
| Vue multi-sites | Onglets multiples | Une semaine, tout le parc |
| Agent sur mobile | PDF ou photo floue | Planning à jour sur l’app |
| Historique | Fichier archivé | Par site, daté, exportable |
| Coût réel | Heures admin cachées | 149 € HT/mois tout inclus |

### FAQ (extrait)
**Peut-on gérer des fréquences différentes par site ?**  
Oui. Quotidien, hebdomadaire, bi-mensuel ou mensuel — chaque site a sa récurrence, son titulaire et éventuellement un backup.

---

*Document lié : `docs/PROMPT-AUDIT-FONCTIONNALITES.md` · `docs/PROMPT-ULTRA-PRO.md`*
