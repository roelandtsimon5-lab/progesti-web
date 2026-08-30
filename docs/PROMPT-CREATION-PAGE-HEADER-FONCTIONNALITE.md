# PROMPT — Page fonctionnalité ULTRA PRO alignée HEADER (1 module = 1 page parfaite)

> **Usage :** coller dans Cursor Agent **une fois par entrée du mega menu Fonctionnalités**.  
> Remplacer `{SLUG}` et variables **depuis le header** (`navigation.ts` → `productMegaMenu`).  
> **Prérequis :** audit header (`PROMPT-AUDIT-HEADER-SECTIONS.md`) + audit page (`PROMPT-AUDIT-FONCTIONNALITES.md`).  
> **Workspace :** `c:\Users\Simon\Desktop\Progesti\web`  
> **Ne pas committer** sauf demande explicite.

---

## VARIABLES — COPIER DEPUIS LE HEADER

```yaml
# ─── Depuis productMegaMenu (navigation.ts) ───
SLUG: planification
HEADER_LABEL: Planning                    # label exact mega menu
HEADER_HINT: "Affectez agents et sites…"  # hint sous le label (mod.short ou override)
HEADER_COLUMN: Organiser                # Organiser | Facturer | Équipe & pilotage
HEADER_ICON: planning                     # NavIcon : planning|pointage|clients|…
HEADER_HREF: /fonctionnalites/planification

# ─── Depuis site.ts modules[] ───
MODULE_TITLE: Planning
MODULE_SHORT: "…"
MODULE_PAIN: "…"

# ─── SEO ───
SEO_PRIMARY_KW: logiciel planning entreprise nettoyage
SEO_TITLE: Planning nettoyage professionnel    # SANS "| PROGESTI" (template layout l'ajoute)
SEO_DESCRIPTION: "…"                          # 150–160 car.

# ─── Visuel ───
MOCK_HERO: planning-map
IMAGE_HERO: /hero-planning.webp
IMAGE_ALT: "Planning PROGESTI — vue semaine multi-sites"
```

### Table de correspondance header → slug (9 modules + 1 alias)

| Label HEADER (exact) | Colonne | Slug | Icon |
|----------------------|---------|------|------|
| Planning | Organiser | `planification` | planning |
| Pointage & télégestion | Organiser | `pointage` | pointage |
| Clients | Organiser | `clients` | clients |
| Devis | Facturer | `devis` | devis |
| Facturation | Facturer | `facturation` | facturation |
| Impayés | Facturer | `impayes` | impayes |
| Rentabilité | Facturer | `rentabilite` | rentabilite |
| RH | Équipe & pilotage | `gestion-rh` | rh |
| CRM | Équipe & pilotage | `crm` | crm |
| Tableaux de bord ⚠️ | Équipe & pilotage | `rentabilite` | rentabilite |

**Règle alias Tableaux de bord :** si `{HEADER_LABEL}` = « Tableaux de bord », H1 secondaire ou sous-titre « Tableaux de bord & rentabilité » + contenu orienté dashboards/marges.

---

## 0. Rôle — site maker #1, contrainte HEADER first

Tu es **directeur artistique + copywriter + lead front**. Tu livres une page où :

1. L’utilisateur qui a cliqué **« {HEADER_LABEL} »** dans le header se sent **immédiatement au bon endroit** ;
2. Le **hint du mega menu** est visible dans les 200 premiers mots ;
3. La **colonne header** ({HEADER_COLUMN}) apparaît dans le badge hero ;
4. La page respecte la **charte Jobber** et le template `ModuleLandingPage.tsx` ;
5. La page **convertit** vers essai 7 jours sans CB.

**North star :** « Le header m’a promis {HEADER_HINT} — la page le prouve en 60 secondes. »

Référence externe : [Jobber commercial cleaning features](https://www.getjobber.com/industries/commercial-cleaning-software/).

---

## 1. Règle d’or HEADER → PAGE (non négociable)

| Élément HEADER | Doit apparaître sur la page | Où |
|----------------|----------------------------|-----|
| `{HEADER_LABEL}` | Identique ou variation H1 naturelle | H1 : « {HEADER_LABEL} pour entreprises de nettoyage » |
| `{HEADER_HINT}` | Repris ou enrichi | `heroLead` (1–2 phrases max) |
| `{HEADER_COLUMN}` | Mot exact | Badge : `Module · {HEADER_COLUMN} · Inclus à 149 € HT/mois` |
| Icône `{HEADER_ICON}` | Cohérence visuelle | Optionnel : petite icône SVG header column dans hero |
| Footer mega « Essai » | Même promesse | Hero CTA + FinalPush |
| Breadcrumb | Fil d’Ariane cliquable | Accueil → **Fonctionnalités** (lien) → {HEADER_LABEL} |

**Interdit :** H1 « Rentabilité » si header disait « Tableaux de bord » sans mention dashboards.

---

## 2. Faits immuables PROGESTI

| Fait | Valeur |
|------|--------|
| Prix | **149 € HT/mois** tout inclus |
| Users | **5** inclus |
| Modules | **9** — aucun payant en plus |
| Essai | **7 jours**, sans CB |
| Tel | **05 82 95 09 19** |
| App | Cloud + Android/iOS |
| CTA | `cta.trial` · `cta.demo` · labels `ctaLabels` |

**Interdit :** essai 2 mois, 29,99 €, stats inventées (« 847 passages », « +500 clients »), « révolutionner », faux avis.

**Ton :** vouvoiement, vocabulaire propreté (sites, agents, syndic, vacations, titulaire, backup).

---

## 3. Charte graphique (alignée header dark + page)

```
Navy brand-navy     #012939   hero, header dark pages
Chrome brand-chrome #011B25   FinalPush
Lime lime-cta       #A8E300   CTA essai, checks, tab actif underline
Paper paper         #FAFAFA   sections alternées
Line line           #E4E8EB   bordures
Radius              2px       boutons, cards, mega items
Typo                Inter     font-sans 400–900
Header dark page    industry-hero-bg + header sticky brand-navy/95
```

**Header page module :** la page utilise `isIndustryDarkPath` → header **dark** au scroll. Vérifier contraste logo lime + liens white/80.

**Mega menu charte (si tu touches MegaMenu.tsx) :**
- Panel : fond blanc, border `line`, hover `bg-lime-cta/15`
- Titres colonnes : `text-muted` uppercase — miroir badge page
- Remplacer `text-blue-deep` → `text-brand-navy`

---

## 4. Architecture technique

### 4.1 Fichiers à lire (ordre)

1. `src/lib/navigation.ts` — `productMegaMenu`, item `{SLUG}`
2. `src/lib/site.ts` — `modules[]`
3. `src/lib/modules-content.ts` — enrichir entrée `{SLUG}`
4. `src/components/features/ModuleLandingPage.tsx`
5. `src/components/layout/Header.tsx` — vérifier label/href match
6. `src/components/navigation/MegaMenu.tsx`
7. `src/components/navigation/Breadcrumb.tsx`
8. `src/lib/brand.ts` · `globals.css`
9. `docs/PROMPT-ULTRA-PRO.md`

### 4.2 Modèle de données (`ModuleContent`)

Enrichir dans `modules-content.ts` :

```typescript
{
  pillar: "{HEADER_COLUMN}",           // DOIT matcher navigation column title
  heroLead: string,                    // DOIT intégrer HEADER_HINT
  seoTitle: string,                    // SANS suffixe | PROGESTI
  seoDescription: string,
  headerLabel?: string,                // si différent de MODULE_TITLE (ex. RH)
  benefits: [3× { title, text }],
  problemBody: string,                 // max 80 mots — scannable (pas mur de texte)
  solutionBody: string,                // max 80 mots
  solutionBullets: string[4-5],
  excelComparison: [5-6 rows],
  workflow: [4 steps uniques module],
  dayInLife?: [4-5 items],             // pas de chiffres inventés précis
  relatedModuleSlugs: [3 slugs],       // enchaînement flux PROGESTI
  relatedIntro: string,
  stats: [4 tuples],                   // STATS MÉTIER — pas répéter 149€/7j si hero l'a déjà
  useCases: [3 tabs: syndics, bureaux, fin-de-chantier],
  faq: [5-6 Q/R],
  image, imageAlt,
}
```

### 4.3 Composants existants — ne pas réinventer

- `ModuleLandingPage` — template principal
- `FeatureUseCaseTabs` — prop `moduleTitle={HEADER_LABEL}`
- `ModuleExcelComparison`
- `ModuleDayInLife`
- `IndustryFaq` · `FinalPush` · `MobileCtaBar`

### 4.4 Améliorations UX post-test utilisateur (intégrer si absent)

- [ ] **Sticky section nav** sous header : Cas d’usage · Comparatif · FAQ · Essai
- [ ] **CTA band** après comparatif Excel (1 bouton essai)
- [ ] **problemBody / solutionBody** courts (3–4 phrases + bullets)
- [ ] **Stats strip métier** (ex. Pointage : Mobile · Live · 0 papier · Géoloc option)
- [ ] **Mobile hero** : image full-width ou hidden < md
- [ ] **Breadcrumb** : Fonctionnalités = lien cliquable
- [ ] **Metadata** : `title: { absolute: seoTitle }` si doublon PROGESTI

---

## 5. Blueprint sections (ordre + règles HEADER)

### A — Hero dark

```
Badge: Module · {HEADER_COLUMN} · Inclus à 149 € HT/mois
H1: {HEADER_LABEL} pour entreprises de nettoyage
heroLead: reprend HEADER_HINT + 1 bénéfice différenciant (max 35 mots)
CTA: Essai 7 jours | Voir la démo
Confiance: Sans CB · 5 users · tous modules
Image: {IMAGE_HERO} priority
```

**Test 5 secondes :** « J’ai cliqué {HEADER_LABEL} dans {HEADER_COLUMN} — c’est bien ça. »

### B — Stats strip (métier uniquement)

**Ne pas répéter** 149 € / 7 jours si identiques au hero.

Exemples par colonne header :

**Organiser :**
- Planning → Multi-sites · Récurrences · Vue agent/site · 0 Excel
- Pointage → Mobile · Live · Géoloc opt. · 0 papier
- Clients → Illimité · 1 fiche · Accès central · Historique

**Facturer :**
- Devis → Pro · Suivi · → Planning · 0 Word
- Facturation → Réalisé · 0 double saisie · Récurrent · Export
- Impayés → Trésorerie · Relances · Par client · Marge
- Rentabilité → Par site · Marges · Dashboard · Décisions

**Équipe :**
- RH → Absences · Prépaie · Remplacements · 1 outil
- CRM → Pipeline · Devis→contrat · 0 CRM séparé · Relances

### C — Ce que vous gagnez (3 benefits)

Titres = **résultats métier**, pas noms de module.

### D — Cas d’usage tabs

H2 : `Comment les entreprises de nettoyage utilisent {HEADER_LABEL}`

3 tabs avec body **80–100 mots** uniques — le **premier paragraphe** doit echo `{HEADER_HINT}`.

Tab actif : underline lime (pas pill navy plein).

### E — Problème / réponse (COURT)

- `problemBody` : **max 80 mots** — 1 douleur `{MODULE_PAIN}` concrète
- `solutionBody` : **max 80 mots** — réponse PROGESTI
- Bullets : 4–5, dont 1 lien module adjacent du même `{HEADER_COLUMN}`

Sidebar : métiers solutions + CTA essai

### F — Comparatif Excel vs PROGESTI

6 lignes — argument massue pour dirigeant Excel/WhatsApp.

**+ CTA band immédiatement après :**

```tsx
<div className="mt-8 flex justify-center">
  <ButtonLink href={cta.trial} variant="trial" eventPayload={{ cta: "module_excel_trial", module: SLUG }}>
    Essayer {HEADER_LABEL} — 7 jours gratuits
  </ButtonLink>
</div>
```

### G — Workflow 4 étapes (unique module)

H2 : `Du bureau au terrain — {HEADER_LABEL} en 4 étapes`

### H — Journée type (4–5 créneaux)

Pas de stats précises inventées (847, 96 passages…). Personnages OK (Marie, Karim).

### I — Flux PROGESTI (3 modules liés)

Exclure le module courant. Prioriser **même colonne header** + 1 lien colonne adjacente.

| Module | relatedModuleSlugs suggérés |
|--------|----------------------------|
| planification | pointage, clients, gestion-rh |
| pointage | planification, facturation, gestion-rh |
| clients | planification, devis, facturation |
| devis | crm, planification, facturation |
| facturation | pointage, impayes, rentabilite |
| impayes | facturation, rentabilite, crm |
| gestion-rh | planification, pointage, rentabilite |
| rentabilite | facturation, planification, impayes |
| crm | devis, clients, facturation |

### J — FAQ (5–6)

Inclure : tarif inclus ? · démarrage rapide ? · remplace Excel ? · question technique module · support tel

### K — Explorer les modules (remplace « Autres modules » aléatoires)

Lien hub `/fonctionnalites` + 3 modules **non** déjà dans section I.

### L — FinalPush + MobileCtaBar (global)

---

## 6. Spécificités copy par entrée HEADER

### Organiser

**Planning (`planification`)**  
- KW : logiciel planning entreprise nettoyage  
- Hint header → heroLead obligatoire : affectations, double saisie, oubli  
- Angle : récurrences, titulaire/backup, multi-sites  
- Mock : `planning-map`, `passages`

**Pointage (`pointage`)**  
- KW : pointage agent nettoyage, télégestion propreté  
- Hint : géoloc, preuves terrain  
- Précision : géoloc optionnelle, pas surveillance  
- Mock : `telegestion`, `mobile-app`, `preuves-report`

**Clients (`clients`)**  
- KW : gestion clients entreprise nettoyage  
- Hint header override possible : « Sites, fiches, historique »  
- Angle : single source of truth, codes accès, historique litiges  
- Mock : `clients`, `multi-sites`, `historique-timeline`

### Facturer

**Devis (`devis`)** — Word → devis pro → planning  
**Facturation (`facturation`)** — réalisé terrain, lien `/integrations` en FAQ  
**Impayés (`impayes`)** — trésorerie, relances, pas usurier  
**Rentabilité (`rentabilite`)** — si header « Tableaux de bord », H1 ou sous-titre explicite dashboards

### Équipe & pilotage

**RH (`gestion-rh`)** — header dit « RH », H1 peut garder « RH » (pas « Gestion RH »)  
**CRM (`crm`)** — pipeline TPE, intégré ops  
**Tableaux de bord** — variante `rentabilite` : lead orienté « visualisez charge et marges »

---

## 7. SEO on-page

- [ ] H1 contient `{HEADER_LABEL}` + « entreprises de nettoyage »
- [ ] `seoTitle` **sans** « | PROGESTI » (layout template)
- [ ] Meta description : KW + hint + essai 7j + 149€
- [ ] Canonical `/fonctionnalites/{SLUG}`
- [ ] FaqPageLd + SoftwareApplicationLd
- [ ] Maillage : 3 modules + 2 solutions + tarifs

```typescript
// generateMetadata — éviter doublon PROGESTI
return {
  title: { absolute: content.seoTitle ?? `${HEADER_LABEL} — entreprises de nettoyage` },
  description: content.seoDescription,
  alternates: { canonical: `/fonctionnalites/${slug}` },
};
```

---

## 8. Synchronisation header (optionnel même sprint)

Si label/hint/page divergent, **mettre à jour navigation.ts** :

```typescript
moduleItem("planification", "Nouveau hint aligné hero"),
```

Ou enrichir hint dans `moduleItem()` depuis `modules-content.heroLead` (refactor futur).

**Doublon Tableaux de bord :** soit supprimer l’item header, soit `label: "Rentabilité & tableaux de bord"`.

---

## 9. Checklist charte Header + Page

**Header.tsx / MegaMenu.tsx (si scope élargi) :**
- [ ] Dark : `brand-navy`, pas `blue-deep` mobile drawer
- [ ] Light links : `brand-navy` / `slate`, pas `blue-deep`
- [ ] Mega panel : border `line`, shadow rgba(1,41,57)
- [ ] Colonnes mega titres = mêmes strings que `content.pillar`

**Page module :**
- [ ] Pas `#F5F8FB`, `blue-mist`, `font-display`
- [ ] Radius 2px CTA
- [ ] Alternance paper/white
- [ ] Lime ≤ 15% viewport moyen

---

## 10. Accessibilité parcours header

- [ ] Clic header → focus main content (skip link)
- [ ] Breadcrumb clavier OK
- [ ] Tabs cas d’usage : aria tablist
- [ ] Table Excel : th scope
- [ ] Header sticky ne masque pas H1 (scroll-padding-top)

---

## 11. Performance

- 1 image hero priority
- Pas de client JS sur page entière
- Build SSG 159 pages OK

---

## 12. Prompt d’exécution (coller tel quel)

```
Mission : page ULTRA PRO pour l'entrée HEADER « {HEADER_LABEL} » (slug {SLUG}, colonne {HEADER_COLUMN}).

Tu es le site maker de PROMPT-CREATION-PAGE-HEADER-FONCTIONNALITE.md.

ÉTAPES :

1. Lire navigation.ts productMegaMenu item → vérifier HEADER_LABEL, HEADER_HINT, HEADER_COLUMN, href.
2. Lire site.ts module {SLUG} et modules-content.ts — enrichir ou créer contenu complet.
3. Règle HEADER FIRST :
   - badge pillar = HEADER_COLUMN
   - heroLead echo HEADER_HINT
   - H1 = HEADER_LABEL pour entreprises de nettoyage
4. Appliquer sections A→L dans ModuleLandingPage (ou étendre composant).
5. Raccourcir problemBody/solutionBody (≤80 mots chacun).
6. Stats strip 100% métier (pas 149€/7j répétés).
7. Ajouter CTA post-comparatif Excel.
8. Ajouter ModuleSectionNav sticky (Cas d'usage · Excel · Workflow · FAQ).
9. Fix metadata title absolute (pas doublon PROGESTI).
10. Breadcrumb : Fonctionnalités cliquable.
11. Mobile : hero image hidden md:block ou order-first full width.
12. useCases 3× body 80–100 mots, mock cohérent.
13. FAQ 5–6, workflow unique, pas chiffres inventés jour type.
14. Si HEADER_LABEL = Tableaux de bord : adapter H1/sous-titre rentabilité.
15. npm run build — 0 erreur.
16. Vérifier visuel : ouvrir /fonctionnalites/{SLUG} — header dark + clic depuis mega menu simulé.

LIVRABLES :
- Diff fichiers modifiés
- Tableau cohérence header→page (5 lignes)
- Score auto /10
- P0 humains restants (screenshot produit)

RAPPELS : 149€ · 7j sans CB · 5 users · tel 05 82 95 09 19
Ne pas toucher /lp/**, /ancien, /v1, /v2
Ne pas committer
```

---

## 13. Definition of Done

- [ ] Clic simulé header → page : hint reconnu en < 10 s
- [ ] Badge colonne = mega menu column title
- [ ] Build OK
- [ ] Pas doublon titre PROGESTI
- [ ] Page ≤ 6 scrolls desktop (sections fusionnées si besoin)
- [ ] CTA essai : hero + excel + sidebar + FinalPush + mobile sticky
- [ ] eventPayload.module = `{SLUG}` partout

---

## 14. Ordre d’exécution (9 modules header)

1. `planification` — Planning · Organiser  
2. `pointage` — Pointage · Organiser  
3. `clients` — Clients · Organiser  
4. `devis` — Devis · Facturer  
5. `facturation` — Facturation · Facturer  
6. `impayes` — Impayés · Facturer  
7. `rentabilite` — Rentabilité · Facturer (+ variante Tableaux de bord)  
8. `gestion-rh` — RH · Équipe  
9. `crm` — CRM · Équipe  

Puis : audit header (`PROMPT-AUDIT-HEADER-SECTIONS.md`) pour valider cohérence globale.

---

## 15. Annexe — exemple Planning (header → page)

**Header (navigation.ts) :**
- Label : Planning  
- Hint : Affectez agents et sites sans double saisie ni oubli.  
- Colonne : Organiser  

**Hero attendu :**
```
Badge: Module · Organiser · Inclus à 149 € HT/mois
H1: Planning pour entreprises de nettoyage
heroLead: Affectez agents et sites sans double saisie ni oubli — récurrences, titulaires et remplacements sur une semaine multi-sites partagée avec le terrain.
```

**seoTitle :** `Planning nettoyage professionnel` (layout ajoute `| PROGESTI`)

**Stats métier :** Multi-sites · Récurrences auto · Vue agent/site · 0 Excel

**Premier use case (Syndics) — opener lié hint :**
> « Vous affectez agents et sites sans ressaisir : chaque immeuble syndic a son titulaire, sa fréquence et son backup… »

---

## 16. Annexe — anti-patterns détectés en test utilisateur

| Anti-pattern | Fix dans ce prompt |
|--------------|-------------------|
| Titre `… PROGESTI \| PROGESTI` | seoTitle sans suffixe + title absolute |
| Page 9+ scrolls | Section nav + textes courts |
| Stats 149€/7j répétées | Stats métier §B |
| Hint header absent du hero | heroLead obligatoire §1 |
| Tableaux de bord → Rentabilité sans explication | §6 variante alias |
| Mur texte problem/solution | max 80 mots §E |
| Pas CTA milieu page | §F CTA band |
| Chiffres jour type inventés | §H interdit |
| Mega menu bleu legacy | §9 charte |

---

*Documents liés :*  
*`docs/PROMPT-AUDIT-HEADER-SECTIONS.md`*  
*`docs/PROMPT-CREATION-PAGE-FONCTIONNALITE.md`*  
*`docs/PROMPT-ULTRA-PRO.md`*  
*`docs/AUDIT-FONCTIONNALITES-RESULT.md`*
