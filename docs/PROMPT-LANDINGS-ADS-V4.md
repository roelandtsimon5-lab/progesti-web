# PROMPT MAÎTRE V4 — Landings Google Ads niveau concurrent qui convertit

> **Coller ce document entier dans Cursor Agent** pour reconstruire / créer des landings Ads.  
> **Objectif :** battre le CPA des concurrents (Propret, ERP génériques, Jobber-like) sur Google Ads France.  
> **Verdict sur V3 (`/lp/ads/v3/*`) :** insuffisant pour du paid — trop long, formulaire trop bas, trop de sections, friction trop haute.  
> **Référence visuelle interne qui marche :** `public/preview-ads-mobile.png` + composant `AdsCaptureLanding` (prénom + téléphone → accès immédiat).  
> **Workspace :** `web/` · Stack Next.js 16 · noindex · layout ads sans nav site · GTM `GTM-K65MM8Q4`

---

## 0. Diagnostic — pourquoi les landings actuelles ne suffisent pas

| Problème V3 | Impact paid | Ce que font les concurrents qui scalent |
|-------------|-------------|------------------------------------------|
| Formulaire sous le fold / sticky trop bas | Bounce mobile > 70 % | **Formulaire = héros** (1er écran) |
| 8–12 sections (ROI, FAQ, pricing, témoignages…) | Décision diluée, scroll fatigue | **1 job** : convertir en < 10 s |
| Champs email + entreprise + taille | Abandon formulaire | **2 champs max** (prénom + tél) |
| Copy « logiciel SaaS » générique | Pas de différenciation vs Propret | **Urgence métier** + offre asymétrique (2 mois) |
| Mockup dashboard en bas | Produit invisible au clic | **UI produit visible immédiatement** (desktop) |
| Prix / timeline utiles mais trop tôt | Freine avant la preuve | Prix **après** le micro-commit, ou en badge |

**Règle d’or V4 :**  
Une landing Ads n’est **pas** une page marketing. C’est une **machine à micro-conversion** : clic annonce → 1 écran → 1 formulaire → accès produit / essai.

---

## 1. Ce que fait un concurrent « qui fonctionne fort » (pattern à copier)

Inspirations structurelles (Jobber / Propret / SaaS field-service US / capture PROGESTI V1) — **ne pas copier le branding**, copier la mécanique :

### Pattern A — « Accès immédiat » (prioritaire Google Ads mobile)
```
[Logo]                    [Badge offre]
┌─────────────────────────┐
│ ACCÈS IMMÉDIAT          │
│ Voir la plateforme      │
│ Prénom + tél → accès    │
│ [Prénom*]               │
│ [Téléphone*]            │
│ [CTA vert pleine largeur]│
│ Trust micro-ligne       │
└─────────────────────────┘
H1 bénéfice (sous le fold mobile)
Sous-titre 1 phrase
Preuve visuelle produit
```

### Pattern B — « Split desktop » (desktop Search)
```
COLONNE GAUCHE                    COLONNE DROITE (sticky)
H1 = mot-clé + bénéfice           Formulaire 2 champs
Sous-titre                        CTA
3 bullets trust                   Trust
Screenshot / GIF produit          « Sans CB · 2 mois »
```

### Pattern C — « Offre asymétrique » (après capture, page longue OK)
Utiliser timeline Mois 1–2–3 + tarifs **uniquement** sur retargeting / page essai — **pas** sur le 1er clic Search froid.

---

## 2. Avantage PROGESTI à marteler (armes vs concurrents)

Ne jamais diluer. Chaque LP doit pousser **au moins 3** de ces armes :

1. **Essai 2 mois sans CB** (eux : souvent 7–14 jours + CB)
2. **Tarifs publics dès 29,99 € HT/mois** (eux : devis opaque)
3. **Tous modules inclus** (eux : modules payants)
4. **Spécialisé nettoyage France** (eux : field-service US traduit / ERP générique)
5. **Accès immédiat** — pas de « demandez une démo, on vous rappelle sous 48 h »

**Interdit :**
- « Solution innovante », « digitalisez », « pilotez votre performance »
- Cards décoratives, stats inventées, témoignages faux sans disclaimer
- Navigation site, liens blog, multi-CTA
- Formulaire > 3 champs sur traffic Ads froid

---

## 3. Architecture pages V4 à produire

Créer sous `/lp/ads/v4/` (noindex), réutiliser ou étendre un composant unique :

`src/components/sections/ads-v4/AdsKillerLanding.tsx`

### Routes obligatoires

| # | Route | Intention Google | Form | CTA |
|---|-------|------------------|------|-----|
| 01 | `/lp/ads/v4/acces` | Catch-all / volume | prénom+tél | Voir la plateforme → `/demo/live` |
| 02 | `/lp/ads/v4/essai` | essai / gratuit / 2 mois | prénom+tél ou essai direct | Ouvrir mon essai → app |
| 03 | `/lp/ads/v4/excel` | excel / whatsapp / planning | prénom+tél | Voir mon planning → `/demo/live` |
| 04 | `/lp/ads/v4/prix` | prix / tarif / pas cher | prénom+tél | Voir les tarifs + essai |
| 05 | `/lp/ads/v4/propret` | concurrent / alternative | prénom+tél | Comparer maintenant |

**Retirer du trafic Search primaire :** les longues V3 (`roi`, `planning`, `syndic`) → les garder en **retargeting** ou les réécrire en Pattern A.

**Livré :** 5 routes V4 + `AdsKillerLanding` + preview hub n° **15–19** (en tête de liste).

---

## 4. Spécification UI/UX non négociable (DoD design)

### Mobile-first (70 %+ du trafic Ads)
1. **Au-dessus de la ligne de flottaison :** logo + badge + **carte formulaire complète** + CTA
2. Bouton CTA `min-h-14`, pleine largeur, vert action `#1FA86B` (ou token `emerald` / `green-action`)
3. Input focus : bordure verte épaisse + ring
4. Auto-focus sur le 1er champ
5. Sticky CTA bas d’écran **uniquement** si le form n’est plus visible (sinon inutile)
6. Pas de header site, pas de footer, pas de cookie banner (layout ads existant)
7. LCP < 2,5 s — image mockup `priority` ou différée sous le fold

### Desktop
1. Grid 2 colonnes : copy + mockup | **form sticky**
2. Formulaire toujours visible sans scroll
3. Screenshot réel `/dashboard-mockup-opt.webp` (pas d’illustration abstraite)

### Contenu sous le fold (max 4 blocs — pas 12)
Ordre strict :
1. **3 douleurs** en une ligne chacune (pas de cards roses excessives)
2. **Avant / Après** compact (5 vs 5 bullets max)
3. **Preuve produit** (1 screenshot + 3 steps)
4. **FAQ courte** (3 questions max : CB ? Prix ? Et après ?)
5. **CTA final** = même action que le formulaire (pas un 2e objectif)

### Ce qui est INTERDIT sur V4 Ads
- Section pricing 3 colonnes au-dessus du fold
- Timeline 3 mois au-dessus du fold (OK en badge : « 2 mois offerts »)
- Mega FAQ (5+)
- Témoignages inventés sans « exemples illustratifs »
- Liens sortants (blog, tarifs site, à-propos) — **fuite de conversion**
- Deux CTA primaires différents (« Démo » ET « Essai » de même poids)

---

## 5. Formulaire — spécification conversion

### Champs (Pattern A — Ads froid)
| Champ | Requis | Notes |
|-------|--------|-------|
| Prénom | oui | autofocus, placeholder « Ex. Simon » |
| Téléphone | oui | format FR `06 12 34 56 78`, min 8 digits |
| Honeypot `website` | anti-bot | caché |
| Email | **non** | générer placeholder serveur si besoin (`{digits}@lead.progesti.fr`) comme `AdsCaptureLanding` |

### Post-submit
- `track("form_submit", { intent: "ads_v4", campaign })`
- Puis selon LP :
  - **Accès / Excel / Propret / Prix** → `/demo/live` + `demo_view`
  - **Essai** → `trialAppUrl` + `trial_start` / `signup_start`
- Stocker `sessionStorage.progesti_demo` ou `progesti_trial`

### Microcopy sous CTA (obligatoire)
```
Sans carte bancaire · Pas d’engagement · Accès immédiat
```

### Labels CTA (formules gagnantes — choisir 1)
- « Voir la plateforme → »
- « Ouvrir mon essai gratuit → »
- « Voir mon planning métier → »
- « Comparer avec Propret → »
- « Voir le prix et tester → »

**Interdit :** « Envoyer », « Valider », « Demander un devis », « Être rappelé » (sauf LP rappel dédiée)

---

## 6. Copy — formules headline (message match)

Structure H1 :
```
[Résultat concret en langage gérant] + [cadre temps OU sans friction]
```

### Banque H1 par LP

**Accès**
- « Testez le logiciel de nettoyage en 10 secondes »
- « Voyez PROGESTI maintenant — sans rendez-vous »

**Essai**
- « 2 mois gratuits. Sans carte bancaire. Accès immédiat. »
- « Créez votre espace PROGESTI en 2 minutes »

**Excel**
- « Stop Excel & WhatsApp. Un planning qui tient vraiment. »
- « Remplacez le tableur du dimanche soir »

**Prix**
- « Dès 29,99 € HT/mois — après 2 mois offerts »
- « Tarifs publics. Pas de devis opaque. »

**Propret**
- « Vous comparez Propret ? Ouvrez PROGESTI maintenant »
- « Même métier. Essai 2× plus long. Prix affiché. »

### Sous-titres (1 phrase)
Toujours : qui + quoi + offre.
```
Logiciel pour entreprises de nettoyage : planning, pointage, facturation.
Essai 2 mois sans CB — dès 29,99 € HT/mois ensuite.
```

### Badges header
```
Essai 2 mois · Sans CB
```
ou
```
Dès 29,99 € HT/mois
```

---

## 7. Timeline mois — où et comment (version concurrent)

**Sur Pattern A (1er clic) :** badge seulement  
`2 mois offerts · puis dès 29,99 € HT/mois`

**Sous le fold (compact, 1 ligne) :**
```
Mois 1–2 : 0 €  →  Mois 3+ : dès 29,99 € HT  →  Résiliable
```

**Interdit :** grosse grille 3 cards qui repousse le formulaire.

---

## 8. Preuves & confiance (sans bullshit)

Autorisé :
- Screenshot produit réel
- « Conçu pour la propreté » / « Cloud + Android & iOS »
- « Mise en place offerte »
- « Tous modules inclus »
- Tarifs publics Starter / Pro / Premium (sous le fold sur LP prix)

Interdit sans data réelle :
- « +500 entreprises », « 98 % de satisfaction », logos clients inventés
- Témoignages nominatifs inventés (si placeholder : disclaimer visible)

---

## 9. Tracking & Google Ads (obligatoire)

Events :
```
form_submit   { intent: "ads_v4", campaign: "ads_v4_acces" | ... }
demo_view     { source: "ads_v4", campaign }
trial_start   { source: "ads_v4", campaign }
cta_click     { cta: "v4_hero_primary" | "v4_sticky" }
```

Conversion Google Ads primaire = `form_submit` (volume)  
Conversion secondaire = `trial_start` (qualité)

UTM :
```
?utm_source=google&utm_medium=cpc&utm_campaign={campaign}&utm_content={adgroup}&utm_term={keyword}
```

---

## 10. Prompt d’exécution Cursor (à coller tel quel)

```
Tu es un spécialiste conversion Google Ads SaaS B2B France (propreté).

Lis et applique STRICTEMENT : docs/PROMPT-LANDINGS-ADS-V4.md

Mission :
1. Créer le composant AdsKillerLanding (Pattern A mobile form-first + Pattern B desktop split)
   inspiré de AdsCaptureLanding + preview-ads-mobile.png
2. Créer les 5 pages /lp/ads/v4/{acces,essai,excel,prix,propret} noindex
3. Formulaire 2 champs (prénom + téléphone), honeypot, tracking ads_v4
4. Sous le fold : max 4 blocs (douleurs, avant/après, produit, FAQ×3)
5. Zéro nav site, zéro fuite de lien, un seul CTA primaire
6. Ajouter landings 15–19 dans le hub /preview
7. Ne pas casser V1/V2/V3 existantes
8. Respecter offre réelle : essai 2 mois sans CB, dès 29,99€ HT/mois, plans site.ts
9. Design tokens existants (green-action / blue-deep) — pas de purple, pas de look IA générique
10. Mobile impeccable : formulaire visible sans scroll

Après implémentation : lister les URLs + checklist DoD cochée.
```

---

## 11. Definition of Done (une LP V4 est « niveau concurrent »)

- [ ] Sur iPhone SE / 390px : formulaire + CTA visibles **sans scroll**
- [ ] ≤ 2 champs requis
- [ ] Submit → accès produit ou essai en < 2 s perçues
- [ ] H1 = message match avec l’annonce
- [ ] Badge « 2 mois · Sans CB » visible header
- [ ] 1 seul CTA primaire répété
- [ ] Aucun lien vers blog / home / tarifs site
- [ ] Screenshot produit au-dessus ou juste sous le fold
- [ ] Events GTM `ads_v4_*` tirés
- [ ] `robots: noindex`
- [ ] Temps de compréhension « c’est pour mon métier nettoyage » < 5 s
- [ ] Comparé visuellement à `preview-ads-mobile.png` : même densité / même agressivité conversion

### KPI cibles (vs V3)

| Métrique | V3 (insuffisant) | Cible V4 |
|----------|------------------|----------|
| Taux form submit (mobile) | < 5 % typique | **≥ 12–18 %** |
| Bounce | > 70 % | **< 55 %** |
| Temps avant 1er champ focus | > 3 s | **< 0,5 s** |
| Champs requis | 3–5 | **2** |

---

## 12. A/B tests après ship (ordre)

1. CTA copy : « Voir la plateforme » vs « Ouvrir mon essai »
2. Champs : tél requis vs tél optionnel + email
3. Sous le fold : avec / sans avant-après
4. Badge : « 2 mois » vs « Dès 29,99 € »

Un test à la fois · ≥ 100 clics / variante.

---

## 13. Mapping annonces → LP V4

| Intention Search | LP |
|------------------|-----|
| logiciel nettoyage, logiciel propreté | `/lp/ads/v4/acces` |
| essai, gratuit, 2 mois | `/lp/ads/v4/essai` |
| planning, excel, whatsapp | `/lp/ads/v4/excel` |
| prix, tarif, pas cher, abonnement | `/lp/ads/v4/prix` |
| propret, alternative propret | `/lp/ads/v4/propret` |

Mettre à jour `docs/google-ads/*.csv` URL finales vers V4 après ship.

---

*PROGESTI · MSNE SAS · Prompt V4 — landings paid agressives, niveau concurrent qui scale.*
