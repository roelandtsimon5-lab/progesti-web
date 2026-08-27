# PROMPT — Audit complet des sections « Fonctionnalités » PROGESTI

> **Usage :** coller ce document entier dans Cursor Agent (mode Agent).  
> **Objectif :** analyser **toutes** les surfaces liées aux fonctionnalités/modules — hub, pages détail, données, navigation, SEO, conversion, charte — et produire un **rapport actionnable** classé P0 / P1 / P2.  
> **Workspace :** `c:\Users\Simon\Desktop\Progesti\web`  
> **Ne pas committer** sauf demande explicite.

---

## 0. Rôle de l’agent

Tu es **auditeur senior UX + SEO + conversion B2B SaaS**, spécialisé field service / propreté. Tu as refondu des sites comme Jobber, ServiceTitan ou Housecall Pro pour des éditeurs européens.

Tu ne dis pas « c’est bien » ou « c’est moyen » sans preuve. Chaque constat cite :
- le **fichier** et la **ligne ou section** concernée ;
- l’**impact** (SEO, conversion, crédibilité, cohérence charte) ;
- la **correction** recommandée en une phrase.

Référence visuelle externe : [Jobber — commercial cleaning software](https://www.getjobber.com/industries/commercial-cleaning-software/) et leurs pages features individuelles.

Référence interne charte : `docs/PROMPT-ULTRA-PRO.md`, `src/lib/brand.ts`, `src/app/globals.css`.

---

## 1. Périmètre d’audit (OBLIGATOIRE — ne rien omettre)

### 1.1 Pages publiques

| URL | Fichier source | Rôle |
|-----|----------------|------|
| `/fonctionnalites` | `src/app/fonctionnalites/page.tsx` | Hub — grille des 9 modules |
| `/fonctionnalites/planification` | `src/app/fonctionnalites/[slug]/page.tsx` | Module Planning |
| `/fonctionnalites/pointage` | idem | Pointage & télégestion |
| `/fonctionnalites/clients` | idem | Clients & sites |
| `/fonctionnalites/devis` | idem | Devis |
| `/fonctionnalites/facturation` | idem | Facturation |
| `/fonctionnalites/impayes` | idem | Impayés |
| `/fonctionnalites/gestion-rh` | idem | RH |
| `/fonctionnalites/rentabilite` | idem | Rentabilité / tableaux de bord |
| `/fonctionnalites/crm` | idem | CRM |

### 1.2 Données & contenu

| Fichier | Contenu audité |
|---------|----------------|
| `src/lib/site.ts` | `modules[]` — slug, title, short, pain |
| `src/lib/modules-content.ts` | benefits, workflow, faq, useCases, image par module |
| `src/lib/navigation.ts` | `productMegaMenu` — colonnes Organiser / Facturer / Équipe |
| `src/lib/industry/default.ts` | Liens homepage → modules (Product Explorer) |
| `src/lib/glossary-links.ts` | Liens glossaire ↔ modules (si présents) |

### 1.3 Composants réutilisés

| Composant | Fichier | Usage attendu |
|-----------|---------|---------------|
| Hero module | `[slug]/page.tsx` section `industry-hero-bg` | H1, CTA, image |
| Benefits strip | 3 colonnes | Accroches module |
| Cas d’usage | `FeatureUseCaseTabs.tsx` | Tabs syndics / bureaux / fin de chantier |
| Mock produit | `FeatureMock.tsx` | Visuels par `MockKind` |
| Problème / réponse | 2 colonnes + sidebar métiers | Pain → solution |
| Workflow | 4 étapes numérotées | Parcours bureau → terrain |
| FAQ | `IndustryFaq.tsx` | 3 questions min par module |
| Autres modules | Grille 4 liens | Maillage interne |
| FinalPush + MobileCtaBar | conversion | CTA bas de page |

### 1.4 Surfaces indirectes (à croiser)

- Homepage `/` — section modules / Product Explorer (`IndustryLanding.tsx`, `IndustryProductExplorer.tsx`)
- Mega menu header — entrées Fonctionnalités
- Footer — liens vers `/fonctionnalites/*`
- Pages solutions `/solutions/*` — références `moduleSlug` dans `solutions-content.ts`
- Sitemap / `generateStaticParams` — les 9 slugs sont-ils tous indexables ?

---

## 2. Grille d’audit (score /10 par critère)

Pour **chaque module** ET pour le **hub**, note de 1 à 10 avec justification :

### 2.1 Clarté & proposition de valeur (10 s)
- [ ] En 10 secondes : **quoi** (module), **pour qui** (entreprise propreté), **pourquoi PROGESTI** ?
- [ ] Le H1 contient-il le mot-clé métier (« planning entreprise nettoyage », etc.) ?
- [ ] Le sous-titre (`mod.short`) est-il distinct du H1 ou redondant ?

### 2.2 Densité & spécificité contenu
- [ ] Le module a-t-il du contenu **unique** vs les 8 autres (pas copier-coller workflow identique sans adaptation) ?
- [ ] Les 3 `benefits` sont-ils **concrets** (fréquences, géoloc, multi-sites…) ou génériques ?
- [ ] Les `useCases` (3 tabs) décrivent-ils un **scénario réel** (syndic, bureaux, fin de chantier) ?
- [ ] Longueur totale copy visible : cible **800–1500 mots** par page module (hors nav/footer).

### 2.3 Preuve produit
- [ ] Image hero : fichier pertinent (`/hero-planning.webp`, `/screen-telegestion.webp`, etc.) ou image recyclée ?
- [ ] `FeatureMock` : le `MockKind` correspond-il au module (ex. `planning-map` pour Planning) ?
- [ ] Au moins **2 visuels produit** distincts par page (hero + mock tabs ou workflow) ?

### 2.4 Conversion
- [ ] CTA essai lime présent **hero + milieu + FinalPush** ?
- [ ] Event GTM : `eventPayload.module` renseigné ?
- [ ] Prix **149 € HT/mois** et essai **7 jours sans CB** visibles sans scroll excessif ?
- [ ] Téléphone support mentionné si module = terrain / pointage / RH ?

### 2.5 SEO technique
- [ ] `generateMetadata` : title ≤ 60 car., description 140–160 car.
- [ ] Canonical `/fonctionnalites/{slug}` correct
- [ ] `FaqPageLd` + `SoftwareApplicationLd` présents
- [ ] H2 uniques, pas de H1 multiple
- [ ] Maillage : liens vers solutions + autres modules + tarifs

### 2.6 Charte graphique Jobber-aligned
- [ ] Navy `#012939` / lime `#A8E300` — pas de `#B8F000`, `#F5F8FB`, `blue-mist` en excès
- [ ] Radius **2px** sur boutons et cards (pas `rounded-xl` / `rounded-2xl` sur CTA)
- [ ] Alternance fonds : hero dark → white → paper — pas 3 sections navy
- [ ] Typo : Inter single-family (`layout.tsx`) — pas `font-display` incohérent
- [ ] Ombres : `rgba(1,41,57,*)` pas `rgba(11,61,110,*)`

### 2.7 Accessibilité & mobile
- [ ] Contraste texte sur hero dark (white/80 min)
- [ ] Tabs cas d’usage : `role="tablist"`, focus visible lime
- [ ] Images : `alt` descriptif métier
- [ ] `MobileCtaBar` présent, pas de contenu coupé pb-28

### 2.8 Cohérence inter-pages
- [ ] `mod.pain` hub = même douleur que section « Sur le terrain » page détail ?
- [ ] Titres mega menu = titres pages ?
- [ ] Slug `gestion-rh` vs label « RH » — URLs cohérentes partout ?

---

## 3. Inventaire des 9 modules — fiche d’audit à remplir

Pour **chaque slug**, produire un bloc :

```markdown
### Module : {title} (`/{slug}`)

**Scores :** Clarté _/10 · Contenu _/10 · Produit _/10 · Conversion _/10 · SEO _/10 · Charte _/10 · **Moyenne _/10**

**Forces (max 3)**
-

**Faiblesses P0 (bloquant crédibilité / SEO)**
-

**Faiblesses P1 (polish conversion)**
-

**Faiblesses P2 (nice-to-have)**
-

**Contenu manquant vs Jobber équivalent**
-

**MockKind actuel :** … → **Recommandé :** …

**Image hero actuelle :** … → **Recommandé :** …

**Mots-clés SEO cibles (FR)**
- Principal :
- Secondaires :

**Liens internes à ajouter**
-
```

Slugs obligatoires :
1. `planification` — Planning  
2. `pointage` — Pointage & télégestion  
3. `clients` — Clients  
4. `devis` — Devis  
5. `facturation` — Facturation  
6. `impayes` — Impayés  
7. `gestion-rh` — RH  
8. `rentabilite` — Rentabilité  
9. `crm` — CRM  

---

## 4. Audit du hub `/fonctionnalites`

Analyser spécifiquement :

1. **Hero** — H1 « suite complète » : assez différenciant vs homepage ?
2. **Proof bar** — 4 chiffres : alignés avec `site.ts` (7 jours, 149 €, 9 modules) ?
3. **Grille par colonnes** — Organiser / Facturer / Équipe : cards avec `pain` visible — suffisant pour choisir un module ?
4. **Doublons** — « Tableaux de bord » pointe vers `rentabilite` : confusion avec titre « Rentabilité » ?
5. **SEO** — page cible « logiciel entreprise nettoyage fonctionnalités » ?
6. **CTA** — un seul essai hero ou répétition en bas ?

---

## 5. Audit transversal `modules-content.ts`

| Vérification | Question |
|--------------|----------|
| Workflow | 7/9 modules utilisent `sharedWorkflow` identique — acceptable ou à personnaliser ? |
| FAQ | 3 questions partout — assez pour rich snippets ? |
| useCases | Tous ont syndics + bureaux + fin de chantier — le body est-il **différent** par module ? |
| Images | Combien de modules partagent la même image hero ? Lister les doublons. |
| useCases absents | Un module sans `useCases` ? |

---

## 6. Benchmark Jobber (checklist qualitative)

Comparer mentalement (ou via fetch) une page feature Jobber vs PROGESTI module :

| Élément Jobber | PROGESTI a ? | Gap |
|----------------|--------------|-----|
| Hero avec bénéfice chiffré ou social proof | | |
| Section « How it works » visuelle | workflow 4 étapes | |
| Section métier / industry | useCases tabs | |
| Comparatif avant/après (Excel vs logiciel) | absent sur modules | |
| Témoignage module-spécifique | absent | |
| FAQ riche (5+) | 3 questions | |
| CTA sticky / répété | MobileCtaBar | |
| Screenshots produit réels | mocks SVG | |

---

## 7. Livrables attendus (format strict)

### 7.1 Rapport exécutif (≤ 15 lignes)
- Score global fonctionnalités **_/10**
- Top 3 forces site
- Top 3 P0 à corriger cette semaine
- Estimation effort : **S** (< 2h) / **M** (1 jour) / **L** (refonte contenu)

### 7.2 Tableau synthèse

| Module | Score moyen | P0 count | Image unique ? | Workflow custom ? |
|--------|-------------|----------|----------------|-------------------|
| planification | | | | |
| … | | | | |

### 7.3 Backlog priorisé

```
P0 — {module} — {action} — {fichier} — effort S/M/L
P1 — …
P2 — …
```

### 7.4 Matrice duplication contenu

Lister toutes les phrases **identiques** entre 2+ pages modules (copy-paste detect).

### 7.5 Recommandation stratégique

- Faut-il **un template unique** enrichi (`ModuleLanding.tsx`) ou garder `[slug]/page.tsx` monolithique ?
- Faut-il **étendre** `ModuleContent` dans `modules-content.ts` (intro, comparatif Excel, témoignage, day-in-life) ?
- Ordre de refonte suggéré (module à plus fort trafic SEO potentiel en premier) :

**Ordre SEO suggéré (à valider avec Search Console si dispo) :**
1. planification — « logiciel planning nettoyage »
2. pointage — « pointage agent nettoyage »
3. facturation — « facturation entreprise propreté »
4. devis — « devis nettoyage professionnel logiciel »
5. clients — « gestion clients nettoyage »
6. gestion-rh — « RH entreprise nettoyage »
7. rentabilite — « marge entreprise nettoyage »
8. impayes — « relance facture impayée BTP / services »
9. crm — « CRM entreprise nettoyage »

---

## 8. Prompt d’exécution (coller après ce doc)

```
Tu es l’auditeur décrit dans PROMPT-AUDIT-FONCTIONNALITES.md.

Étapes :
1. Lire site.ts, modules-content.ts, fonctionnalites/page.tsx, fonctionnalites/[slug]/page.tsx, FeatureUseCaseTabs, FeatureMock, navigation productMegaMenu, IndustryProductExplorer (homepage).
2. Pour CHACUN des 9 modules + le hub, remplir la fiche §3 et les scores §2.
3. Détecter copy dupliquée et images recyclées.
4. Vérifier charte vs globals.css / brand.ts (lister classes interdites encore présentes : blue-mist, #F5F8FB, rounded-xl sur CTA).
5. Produire §7.1 à §7.5 sans modifier le code.
6. Si un P0 est trivial (typo metadata, alt manquant), proposer le diff exact mais ne pas committer.

Offre PROGESTI rappel : 149 € HT/mois · 5 users · 9 modules · essai 7 jours sans CB · tel 05 82 95 09 19.

Ne pas toucher /lp/**, /ancien, /v1, /v2.
```

---

## 9. Definition of Done (audit)

- [ ] 9 fiches module + 1 fiche hub complètes
- [ ] Tableau synthèse rempli
- [ ] Backlog P0/P1/P2 ≥ 15 items actionnables
- [ ] Matrice duplication listée
- [ ] Aucune affirmation sans référence fichier
- [ ] Recommandation ordre refonte + extension `ModuleContent` documentée

---

*Document lié : `docs/PROMPT-CREATION-PAGE-FONCTIONNALITE.md` pour exécuter la refonte module par module.*
