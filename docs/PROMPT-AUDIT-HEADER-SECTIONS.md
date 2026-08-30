# PROMPT — Audit complet des sections HEADER (navigation PROGESTI)

> **Usage :** coller ce document entier dans Cursor Agent (mode Agent).  
> **Objectif :** auditer **chaque section visible dans le header** — mega menus, liens top-level, CTA, mobile, dark mode — et vérifier la **cohérence header → page destination**.  
> **Workspace :** `c:\Users\Simon\Desktop\Progesti\web`  
> **Ne pas committer** sauf demande explicite.

---

## 0. Rôle de l’agent

Tu es **auditeur UX navigation B2B SaaS** (réf. Jobber, Stripe, Linear). Tu analyses le **header comme produit** : ce que voit un dirigeant propreté avant de cliquer, et ce qu’il trouve après.

Chaque constat cite :
- **Fichier** (`Header.tsx`, `MegaMenu.tsx`, `navigation.ts`, page destination)
- **Impact** (confusion, conversion, SEO, charte, a11y)
- **Correction** en une phrase actionnable

Références internes : `docs/PROMPT-ULTRA-PRO.md`, `src/lib/brand.ts`, `docs/PROMPT-AUDIT-FONCTIONNALITES.md`

---

## 1. Cartographie HEADER (inventaire obligatoire)

### 1.1 Barre principale (desktop `lg+`)

| Zone | Éléments | Source |
|------|----------|--------|
| Logo | `/` + `logo.svg` + `{site.name}` | `Header.tsx` L65-80 |
| Mega **Fonctionnalités** | 3 colonnes + footer | `productMegaMenu` |
| Mega **Solutions** | 3 colonnes + footer | `solutionsMegaMenu` |
| Lien **Tarifs** | `/tarifs` | `Header.tsx` L86-98 |
| Mega **Ressources** | 3 colonnes + footer | `resourcesMegaMenu` |
| Lien **FAQ** | `/faq` | L101-113 |
| Lien **Contact** | `/contact` | L115-127 |
| Téléphone | `tel:{site.phoneTel}` | L132-140 |
| **Se connecter** | `cta.login` ghost | L142-147 |
| **Demander une démo** | `cta.demo` secondary | L149-156 |
| **Essai 7 jours** | `cta.trial` lime | L158-164 |

### 1.2 Mega menu — Fonctionnalités (`productMegaMenu`)

| Colonne header | Items | URL destination |
|----------------|-------|-----------------|
| **Organiser** | Planning | `/fonctionnalites/planification` |
| | Pointage & télégestion | `/fonctionnalites/pointage` |
| | Clients | `/fonctionnalites/clients` |
| **Facturer** | Devis | `/fonctionnalites/devis` |
| | Facturation | `/fonctionnalites/facturation` |
| | Impayés | `/fonctionnalites/impayes` |
| | Rentabilité | `/fonctionnalites/rentabilite` |
| **Équipe & pilotage** | RH | `/fonctionnalites/gestion-rh` |
| | CRM | `/fonctionnalites/crm` |
| | Tableaux de bord ⚠️ | `/fonctionnalites/rentabilite` (doublon) |
| **Footer panel** | Intégrations | `/integrations` |
| | Toutes les fonctionnalités | `/fonctionnalites` |
| | Essai 7 jours [Gratuit] | `/essai-gratuit` |

### 1.3 Mega menu — Solutions (`solutionsMegaMenu`)

| Colonne | Items | URL |
|---------|-------|-----|
| Col 1 | Bureaux, Syndics, Professionnels | `/solutions/{slug}` |
| Col 2 | Fin de chantier, Auto-entrepreneurs | `/solutions/{slug}` |
| Col 3 SEO | Logiciel entreprise nettoyage | `/logiciel-entreprise-nettoyage` |
| | Logiciel planning nettoyage | `/logiciel-planning-nettoyage` |
| | Logiciel facturation propreté | `/logiciel-facturation-proprete` |
| **Footer** | Toutes les solutions | `/solutions` |
| | Demander une démo | `/demo` |
| | Téléphone | `tel:…` |

### 1.4 Mega menu — Ressources (`resourcesMegaMenu`)

| Colonne | Items | URL |
|---------|-------|-----|
| **Apprendre** | Blog, Guides, Glossaire | `/blog`, `/guides`, `/glossaire` |
| **Décider** | FAQ, Comparatifs, Cas clients | `/faq`, `/comparatifs`, `/cas-clients` |
| **Entreprise** | Tarifs, Contact, À propos | `/tarifs`, `/contact`, `/a-propos` |
| **Footer** | Centre ressources | `/ressources` |
| | Essai gratuit | `/essai-gratuit` |

### 1.5 Mobile (`#mobile-nav`)

Vérifier **parité** avec desktop :
- [ ] Tous les items Fonctionnalités (flatMap columns)
- [ ] Toutes les solutions + logiciel-entreprise-nettoyage
- [ ] Toutes les ressources (flatMap)
- [ ] Tarifs, FAQ, Contact, tel
- [ ] CTA trial / demo / login en bas

### 1.6 Composants liés (hors barre mais header ecosystem)

| Composant | Fichier | Rôle |
|-----------|---------|------|
| `MegaMenuPanel` | `MegaMenu.tsx` | Panel dropdown |
| `MegaMenuTrigger` | idem | Hover + click toggle |
| `isIndustryDarkPath` | `navigation.ts` | Header dark vs light |
| `StickyDesktopCta` | `layout.tsx` | CTA flottant desktop |
| `MobileCtaBar` | pages money | Barre sticky bas |

---

## 2. Grille d’audit par dimension

### 2.1 Cohérence header → page (CRITIQUE)

Pour **chaque item** des 3 mega menus + Tarifs/FAQ/Contact, remplir :

```markdown
#### {Label header} → {URL}

| Critère | OK ? | Détail |
|---------|------|--------|
| Label header = titre page (H1 ou proche) | | |
| Hint mega menu reflété dans hero/subtitle | | |
| Colonne header (Organiser/Facturer/…) = badge page | | |
| Promesse header non contredite sur la page | | |
| CTA header (essai) cohérent avec page (7j, 149€) | | |
| Pas de 404 / redirect surprise | | |
```

**Exemples de mismatch à détecter :**
- Header « Tableaux de bord » → page titre « Rentabilité »
- Hint « Sites, fiches, historique » absent du hero Clients
- « Cas clients (études à venir) » → page vide ou placeholder

### 2.2 UX navigation

- [ ] Hover ouvre mega menu < 200 ms, fermeture au mouseLeave
- [ ] Escape ferme menu mobile + mega
- [ ] Focus trap / focus first link à l’ouverture panel
- [ ] `aria-expanded`, `aria-controls` sur triggers
- [ ] Un seul mega ouvert à la fois
- [ ] Changement de route ferme menus (`useEffect pathname`)
- [ ] Mega menu ne coupe pas le CTA header (z-index)
- [ ] Scroll page : header sticky lisible (blur, border)

### 2.3 Charte graphique header (Jobber-aligned)

| Élément | Attendu | Interdit encore présent ? |
|---------|---------|---------------------------|
| Dark header | `bg-brand-navy/95`, logo lime | `bg-blue-deep` mobile menu |
| Light header | `border-line`, logo navy | `border-blue-mist`, `text-blue-deep` |
| Mega panel fond | blanc, ombre `rgba(1,41,57,*)` | `blue-mist`, `rgba(11,61,110,*)` |
| Hover item menu | `bg-lime-cta/15` | OK si présent |
| Titres colonnes | uppercase muted / navy-soft | `text-blue-royal` legacy |
| Radius liens panel | 2px | `rounded-lg` triggers OK ? |
| CTA Essai header | `lime-cta`, text navy | |
| Footer mega | paper/sky subtle | `bg-blue-sky/40` acceptable ? |

Lister **toutes** les classes legacy dans `Header.tsx` + `MegaMenu.tsx`.

### 2.4 Dark mode paths (`isIndustryDarkPath`)

- [ ] Liste complète des paths dark vs réalité visuelle
- [ ] Module pages `/fonctionnalites/[slug]` → dark ? (oui dans code)
- [ ] `/tarifs` dark mais pas dans `industryDarkPaths` Set initial — cohérent via `if pathname === "/tarifs"` ?
- [ ] Blog article `/blog/[slug]` → light header OK ?
- [ ] Incohérence header dark + section page blanche above fold ?

### 2.5 Conversion header

- [ ] Ordre CTA desktop : Login · Démo · Essai — Essai last = bon (Jobber)
- [ ] Tel visible sans ouvrir menu
- [ ] Essai header = même destination que hero pages (`cta.trial`)
- [ ] Events GTM : `header_trial`, `header_demo`, `header_login`
- [ ] Mobile : essai en bas drawer — visible sans scroll ?
- [ ] Doublon CTA : header + StickyDesktopCta + MobileCtaBar — acceptable ?

### 2.6 SEO & maillage

- [ ] Chaque item mega = page indexable avec canonical
- [ ] Pas de duplicate content (Rentabilité / Tableaux de bord)
- [ ] Footer mega « Essai » vs header « Essai 7 jours » — même URL ?
- [ ] Solutions SEO pages (logiciel-*) linked from header only — orphan check

### 2.7 Accessibilité

- [ ] Contraste dark header : white/80 min sur navy
- [ ] Contraste light : slate on white AA
- [ ] Menu mobile : `aria-expanded` sur hamburger
- [ ] Icônes modules : `aria-hidden` OK, label dans texte
- [ ] Tab order : logo → nav → CTAs → content

---

## 3. Fiches audit — 10 entrées Fonctionnalités (priorité P0)

| # | Label header | Slug | Colonne | Score cohérence /10 |
|---|--------------|------|---------|---------------------|
| 1 | Planning | planification | Organiser | |
| 2 | Pointage & télégestion | pointage | Organiser | |
| 3 | Clients | clients | Organiser | |
| 4 | Devis | devis | Facturer | |
| 5 | Facturation | facturation | Facturer | |
| 6 | Impayés | impayes | Facturer | |
| 7 | Rentabilité | rentabilite | Facturer | |
| 8 | RH | gestion-rh | Équipe | |
| 9 | CRM | crm | Équipe | |
| 10 | Tableaux de bord ⚠️ | rentabilite | Équipe | |

Pour chaque fiche :
- Hint header (`navigation.ts` / `moduleItem`)
- Badge page (`content.pillar` dans `modules-content.ts`)
- Écart label vs H1
- Longueur page (scroll fatigue ?)
- Recommandation header OU page OU les deux

---

## 4. Audit Solutions header (5 + 3 SEO)

| Label | URL | Hint nav | Page existe ? | Qualité /10 |
|-------|-----|----------|---------------|-------------|
| Nettoyage de bureaux | /solutions/bureaux | navHint site.ts | | |
| Syndics & copropriétés | /solutions/syndics | | | |
| … | | | | |
| Logiciel planning nettoyage | /logiciel-planning-nettoyage | | | |

---

## 5. Audit Ressources header (9 items)

| Label | URL | Hint | Risque utilisateur |
|-------|-----|------|-------------------|
| Blog | /blog | | |
| Cas clients | /cas-clients | « études à venir » | Déception contenu |
| … | | | |

---

## 6. Benchmark Jobber header

| Élément Jobber | PROGESTI | Gap |
|----------------|----------|-----|
| Features dropdown colonnes métier | 3 colonnes Organiser/Facturer/Équipe | |
| Hint sous chaque feature | hint dans mega menu | |
| CTA essai visible header | Essai lime | |
| Pricing link top-level | Tarifs | |
| Phone in header | Oui | |
| Mobile drawer sections | 3 sections | |

---

## 7. Livrables (format strict)

### 7.1 Rapport exécutif (≤ 20 lignes)

### 7.2 Tableau synthèse header

| Section header | Items | Cohérence moyenne | P0 count | Charte /10 |
|----------------|-------|-------------------|----------|------------|
| Fonctionnalités | 10 | | | |
| Solutions | 8 | | | |
| Ressources | 9 | | | |
| Top links | 3 | | | |
| CTA bar | 4 | | | |
| Mobile | — | | | |

### 7.3 Backlog priorisé

```
P0 — Header — {item} — {problème} — {fichier} — S/M/L
P1 — …
P2 — …
```

Minimum **20 items** actionnables.

### 7.4 Matrice header hint → hero page

| Header hint | Page hero/subtitle | Match ? |
|-------------|-------------------|---------|
| « Sites, fiches, historique » | clients heroLead | |
| … | | |

### 7.5 Recommandations structurelles

- Supprimer / renommer « Tableaux de bord » ?
- Unifier charte MegaMenu → brand tokens ?
- Ajouter `ModuleSectionNav` sticky sous header sur pages module ?
- Synchroniser `industryDarkPaths` avec charte footer ?

---

## 8. Prompt d’exécution (coller après ce doc)

```
Tu es l’auditeur décrit dans PROMPT-AUDIT-HEADER-SECTIONS.md.

Étapes :
1. Lire Header.tsx, MegaMenu.tsx, navigation.ts, layout.tsx (StickyDesktopCta), isIndustryDarkPath.
2. Lister TOUS les items des 3 mega menus + Tarifs/FAQ/Contact + mobile nav.
3. Pour chaque item Fonctionnalités (10), ouvrir la page destination et remplir fiche §3 (cohérence hint/label/badge/H1).
4. Auditer charte : grep blue-deep, blue-mist, blue-royal, font-display dans Header + MegaMenu.
5. Tester parcours utilisateur simulé : « Je cherche le planning » → header → page → essai (noter frictions).
6. Produire §7.1 à §7.5 sans modifier le code.
7. Proposer diffs P0 triviaux (ex. renommer Tableaux de bord) en snippet sans committer.

Rappels : 149 € HT/mois · 7 jours essai · 05 82 95 09 19 · 9 modules réels.
Ne pas toucher /lp/**, /ancien, /v1, /v2.
```

---

## 9. Definition of Done

- [ ] 10 fiches Fonctionnalités header → page
- [ ] 8 fiches Solutions + 9 Ressources (au moins score + P0)
- [ ] Tableau synthèse §7.2 rempli
- [ ] Backlog ≥ 20 items
- [ ] Matrice hint → hero §7.4
- [ ] Liste classes legacy header/mega menu
- [ ] Aucune affirmation sans fichier source

---

*Lié : `docs/PROMPT-CREATION-PAGE-HEADER-FONCTIONNALITE.md` · `docs/PROMPT-AUDIT-FONCTIONNALITES.md`*
