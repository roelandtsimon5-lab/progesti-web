# PROMPT MAÎTRE — Google Ads PROGESTI · ROI exceptionnel

> **Usage :** coller ce document dans Cursor Agent pour créer, optimiser ou itérer des campagnes Google Ads + landing pages.  
> **Objectif :** maximiser le ROI (Return On Ad Spend) en alignant intention de recherche, message publicitaire et page de destination.  
> **⚠️ Landings V3 = insuffisantes pour du Search agressif** (trop longues, form trop bas).  
> **Prompt conversion concurrent :** → **`docs/PROMPT-LANDINGS-ADS-V4.md`** (form-first, 2 champs, Pattern Jobber/Propret/capture mobile).  
> **Landing pages V3 (retargeting / long-form seulement) :**
> - `/lp/ads/v3/roi` · `/lp/ads/v3/planning` · `/lp/ads/v3/syndic`
> **Cible V4 paid :** `/lp/ads/v4/{acces,essai,excel,prix,propret}` — voir prompt V4  
> **Import Google Ads :** `docs/google-ads/` · **Stack :** Next.js 16 · GTM `GTM-K65MM8Q4`

---

## 0. Contexte offre (ne pas inventer)

| Élément | Valeur |
|---------|--------|
| Produit | PROGESTI — logiciel SaaS gestion entreprises de nettoyage |
| Essai | **2 mois sans carte bancaire** |
| Starter | **29,99 € HT/mois** — 1 admin, tous modules |
| Pro (populaire) | **49,99 € HT/mois** — 5 utilisateurs |
| Premium | **99,99 € HT/mois** — 20 utilisateurs |
| Facturation | Mensuelle HT · Option annuelle = 2 mois offerts |
| Cible | Gérants TPE/PME propreté (5–30 agents typiquement) |
| Concurrent cité | Propret |
| USP clé | Essai long + tarifs publics + tout inclus + spécialisation nettoyage |

### Pourquoi « montrer les mois » est critique pour le ROI

Google Ads sur du B2B SaaS échoue quand la page cache le prix ou l’engagement. Les gérants de nettoyage sont **sceptiques** (déjà brûlés par des démos commerciales).

**La timeline mois par mois convertit parce qu’elle :**
1. **Lève l’objection #1** — « C’est combien ? » → Mois 1–2 : 0 € · Mois 3+ : dès 29,99 €
2. **Lève l’objection #2** — « Ils vont me prélever ? » → Sans CB pendant 2 mois
3. **Crée un micro-commitment** — le prospect se projette sur 3 mois, pas sur « un logiciel »
4. **Améliore le Quality Score** — message ad = message LP = moins de CPC

---

## 1. Architecture campagnes Google Ads (structure ROI)

### Principe : 1 intention = 1 ad group = 1 landing page

Ne jamais envoyer tout le trafic sur la homepage. Google récompense la **message match**.

```
Compte Google Ads PROGESTI
├── Campagne 1 — Search · Intent ROI/Prix
│   ├── Ad group : logiciel nettoyage prix
│   ├── Ad group : essai logiciel propreté
│   └── Ad group : logiciel nettoyage pas cher
│   └── LP finale : /lp/ads/v3/roi
│
├── Campagne 2 — Search · Intent Planning
│   ├── Ad group : logiciel planning nettoyage
│   ├── Ad group : planning agents nettoyage
│   └── Ad group : remplacer excel nettoyage
│   └── LP finale : /lp/ads/v3/planning
│
├── Campagne 3 — Search · Intent Syndic
│   ├── Ad group : logiciel nettoyage syndic
│   ├── Ad group : planning parties communes
│   └── Ad group : logiciel propreté copropriété
│   └── LP finale : /lp/ads/v3/syndic
│
└── Campagne 4 — Performance Max (retargeting uniquement)
    └── Asset groups avec visuels + timeline 2 mois
```

### Fichiers d’import prêts à l’emploi

Voir `docs/google-ads/README-IMPORT.md` :

| Fichier | Usage |
|---------|-------|
| `progesti-google-ads-import.csv` | 3 campagnes · 9 ad groups · mots-clés · 9 RSA |
| `progesti-google-ads-negatifs.csv` | 30 négatifs × 3 campagnes |
| `progesti-google-ads-extensions.csv` | Sitelinks · callouts · snippets · prix |
| `RSA-COPIER-COLLER.md` | Plan B : coller à la main dans Google Ads |

### Budget initial recommandé (TPE France, propreté)

| Phase | Durée | Budget/jour | Objectif |
|-------|-------|-------------|----------|
| Learning | Semaines 1–2 | 30–50 € | Collecter data, identifier mots-clés convertisseurs |
| Optimisation | Semaines 3–6 | 50–80 € | Couper le gras, scaler les ad groups ROI+ |
| Scale | Mois 2+ | 80–150 € | Augmenter uniquement si ROAS > 3× |

**Règle d’or :** ne pas scaler tant que le coût par essai (trial) ou par lead qualifié n’est pas mesuré sur **minimum 30 conversions**.

---

## 2. Mots-clés — matrice intention × landing

### Campagne ROI → `/lp/ads/v3/roi`

| Type | Exemples | Match |
|------|----------|-------|
| Exact | [logiciel nettoyage prix] | Exact |
| Exact | [essai logiciel propreté] | Exact |
| Exact | [logiciel entreprise nettoyage tarif] | Exact |
| Phrase | "logiciel gestion nettoyage pas cher" | Phrase |
| Phrase | "essai gratuit logiciel ménage professionnel" | Phrase |

**Annonces RSA (Responsive Search Ads) — templates :**

```
Headline 1 : Essai 2 Mois Gratuit — Sans CB
Headline 2 : Dès 29,99 € HT/Mois Ensuite
Headline 3 : Logiciel Nettoyage Complet
Headline 4 : Planning + Pointage + Facture
Headline 5 : ROI Visible Dès le Mois 1
Headline 6 : Tous Modules Inclus
Headline 7 : PROGESTI — Propreté Pro
Headline 8 : 2 Mois Offerts Puis 29,99 €
Headline 9 : Résiliable · Sans Engagement
Headline 10 : Alternative à Excel & WhatsApp
Headline 11 : Cloud + Mobile Android iOS
Headline 12 : Mise en Place Offerte
Headline 13 : Spécial Nettoyage · Pas Générique
Headline 14 : Testez Avant de Payer
Headline 15 : Mois 1 et 2 : 0 €

Description 1 : Planning, pointage terrain et facturation dans un seul outil. Essai 2 mois sans carte bancaire. Puis dès 29,99 € HT/mois.
Description 2 : Mois 1–2 gratuits. Mois 3+ : vous choisissez Starter, Pro ou Premium. Tous modules inclus. Créez votre compte en 2 min.
Description 3 : Gérants de nettoyage : arrêtez de brûler 20 h/mois en admin. PROGESTI coûte moins qu’une demi-journée perdue.
Description 4 : Sans engagement. Sans CB pour démarrer. Résiliable à tout moment. Logiciel métier propreté — pas un ERP générique.
```

### Campagne Planning → `/lp/ads/v3/planning`

| Type | Exemples | Match |
|------|----------|-------|
| Exact | [logiciel planning nettoyage] | Exact |
| Exact | [planning agents nettoyage] | Exact |
| Phrase | "logiciel planning entreprise propreté" | Phrase |
| Phrase | "remplacer excel planning nettoyage" | Phrase |

**Headlines clés :**
```
Planning Agents en 15 Min — Pas 3 h Dimanche
Essai 2 Mois · Logiciel Nettoyage
Stop Excel & WhatsApp Planning
```

### Mots-clés négatifs (obligatoires dès J1)

```
-gratuit emploi
-formation
-stage
-alternance
-recrutement
-salaire
-metier
-cv
-offre d'emploi
-ménage à domicile particulier
-particulier
-cours
-diplôme
-cap
-bac pro
-nettoyage voiture
-nettoyage piscine
-jardinage
-erp gratuit
-open source
-cracker
-pirate
-télécharger gratuit
-pdf
-excel template gratuit
```

---

## 3. Anatomie d’une landing page ROI (checklist)

Chaque LP Google Ads PROGESTI doit contenir **dans cet ordre** :

### Above the fold (visible sans scroll)
- [ ] Logo PROGESTI + badge offre (`2 mois gratuits · Sans CB`)
- [ ] **Ancre prix** visible : `Dès 29,99 € HT/mois après l’essai`
- [ ] Headline = mot-clé + bénéfice chiffré
- [ ] Sous-titre = 1 phrase métier (nettoyage, pas SaaS générique)
- [ ] CTA primaire → formulaire sticky (desktop) / sticky bar (mobile)
- [ ] 3 trust bullets : sans CB · tous modules · prix/mois

### Section Timeline mois (DIFFÉRENCIATEUR ROI)
- [ ] **Mois 1** : 0 € — configuration
- [ ] **Mois 2** : 0 € — validation terrain
- [ ] **Mois 3+** : dès 29,99 € HT/mois — décision libre
- [ ] Mention : « Résiliable · Sans prélèvement auto sans votre accord »

### Section Tarifs mensuels
- [ ] 3 cartes : Starter 29,99 € · Pro 49,99 € · Premium 99,99 €
- [ ] Mention **HT / mois** sur chaque carte
- [ ] Option annuelle : 2 mois offerts

### Section ROI chiffrée
- [ ] Coût admin sans outil (~540–960 €/mois)
- [ ] Coût PROGESTI (29,99 ou 49,99 €/mois)
- [ ] Ratio retour (×12 à ×19)

### Sections conversion classiques
- [ ] Douleurs (3 cartes rouges)
- [ ] Avant / Après
- [ ] Démo produit (screenshot dashboard)
- [ ] Témoignages (remplacer par vrais ASAP)
- [ ] FAQ (5 questions incluant mois 3 et CB)
- [ ] CTA final + sticky mobile

### Ce qu’il ne faut PAS mettre sur une LP Ads
- Navigation site complète (header/footer masqués via `lp/ads/layout.tsx`)
- Liens vers blog, tarifs, à-propos (fuite de conversion)
- Bannière cookies visible (masquée sur ads layout — OK)
- Prix cachés ou « contactez-nous »
- Stock photos génériques B2B

---

## 4. Funnel & events GTM — mesurer le ROI réel

### Events à configurer dans GTM

| Event | Déclencheur | Importance ROI |
|-------|-------------|----------------|
| `page_view` | Chaque LP | Baseline |
| `cta_click` payload `v3_hero_primary` | Clic CTA hero | Intention forte |
| `form_submit` payload `campaign: ads_v3_roi` | Formulaire soumis | **Conversion primaire** |
| `trial_start` | Redirection app Railway | **Conversion business** |
| `demo_view` | Arrivée /demo/live | Conversion secondaire planning LP |

### Calcul ROAS (Return On Ad Spend)

```
ROAS = (Revenu attribué aux campagnes) / (Dépense Google Ads)

Exemple :
- Dépense ads mois M : 1 500 €
- Essais créés : 45
- Conversions payantes (mois M+2) : 12 clients Pro à 49,99 €
- MRR nouvelle = 12 × 49,99 = 599,88 €/mois
- LTV 12 mois (rétention 80%) ≈ 12 × 49,99 × 0,8 × 12 ≈ 5 759 €
- ROAS LTV = 5 759 / 1 500 = 3,8× ✅
```

### KPIs cibles par landing

| LP | Conversion primaire | CPA cible | Notes |
|----|---------------------|-----------|-------|
| `/lp/ads/v3/roi` | `trial_start` | < 40 € | Inscription directe = meilleur ROAS long terme |
| `/lp/ads/v3/planning` | `form_submit` → demo | < 25 € | Lead chaud, nurturing court |

---

## 5. Stratégie créative — annonces qui convertissent

### Formule headline gagnante

```
[Bénéfice chiffré] + [Offre mois] + [Spécialisation métier]

Exemples :
✅ "2 Mois Gratuits · Puis 29,99 €/mois · Logiciel Nettoyage"
✅ "Planning 15 Min · Essai 2 Mois Sans CB · Propreté Pro"
❌ "Logiciel de Gestion Innovant" (trop vague)
❌ "Solution Digitale B2B" (pas métier)
```

### Extensions d’annonce (obligatoires)

| Extension | Contenu |
|-----------|---------|
| Sitelinks | Essai 2 mois · Tarifs · Démo · Fonctionnalités |
| Callouts | Sans CB · 2 mois offerts · Dès 29,99 €/mois · Tous modules · Mobile iOS Android |
| Structured snippets | Services: Planning, Pointage, Facturation, RH, Stock |
| Prix | Starter 29,99 € · Pro 49,99 € · Premium 99,99 € |
| Promotion | Essai 2 mois gratuit |

### Règle message match (Quality Score)

```
Mot-clé recherché     →  Headline annonce        →  H1 landing page
─────────────────────────────────────────────────────────────────────
logiciel nettoyage prix → Dès 29,99 € HT/Mois    → 2 mois gratuits. Puis dès 29,99 €...
essai logiciel propreté → Essai 2 Mois Sans CB   → Démarrer mes 2 mois gratuits
planning nettoyage      → Planning 15 Min          → Planning agents & sites en 15 min...
```

Un Quality Score > 7/10 réduit le CPC de 20–40%. C’est du ROI gratuit.

---

## 6. A/B tests prioritaires (ordre ROI décroissant)

### Test 1 — CTA formulaire (semaine 1–2)
- A : « Créer mon essai gratuit → »
- B : « Démarrer mes 2 mois gratuits → »
- Métrique : `form_submit` rate

### Test 2 — Ancre prix hero (semaine 2–3)
- A : Badge `Dès 29,99 € HT/mois après l’essai`
- B : Badge `2 mois gratuits · Sans CB · Puis 29,99 €`
- Métrique : bounce rate + form submit

### Test 3 — ROI chiffré (semaine 3–4)
- A : 960 € admin vs 49,99 € PROGESTI (×19)
- B : 540 € planning vs 29,99 € Starter (×18)
- Métrique : trial_start rate

### Test 4 — Form type (semaine 4+)
- A : Trial direct (comme `/v3/roi`)
- B : Lead → demo (comme `/v3/planning`)
- Métrique : coût par client payant à M+3

**Règle :** 1 test à la fois par LP. Minimum 100 clics par variante avant conclusion.

---

## 7. Optimisation post-launch — boucle hebdomadaire

### Lundi — Audit search terms
1. Exporter search terms report (7 derniers jours)
2. Ajouter négatifs (emploi, particulier, gratuit, formation)
3. Promouvoir termes convertisseurs en exact match

### Mercredi — LP & Quality Score
1. Vérifier Quality Score par mot-clé (cible > 7)
2. Heatmap (Hotjar/Clarity) : scroll depth jusqu’à timeline mois ?
3. Si < 50% voient la timeline → remonter la section

### Vendredi — ROI finance
1. Coût total ads semaine
2. Essais créés (GTM + backend leads)
3. Clients payants mois M-2 (lag essai → conversion)
4. Décision : scaler / maintenir / couper ad group

### Signaux d’alerte

| Signal | Action |
|--------|--------|
| CTR < 3% | Rewriter headlines · tester extensions prix |
| CPC > 4 € sur exact | Vérifier QS · affiner LP · négatifs |
| Bounce > 70% | Message mismatch ad/LP · vitesse page |
| Form submit < 5% | Simplifier formulaire · CTA plus visible |
| Trial → payant < 15% | Problème produit/onboarding, pas ads |

---

## 8. Prompt Cursor — créer une nouvelle LP Google Ads ROI

Coller ce bloc pour générer une LP supplémentaire :

```
Contexte : PROGESTI, logiciel SaaS nettoyage France.
Essai 2 mois sans CB. Starter 29,99€ HT/mois. Pro 49,99€. Premium 99,99€.

Créer une landing page Google Ads noindex sous /lp/ads/v3/[slug] en réutilisant
AdsGoogleLanding (src/components/sections/ads-v3/AdsGoogleLanding.tsx).

Angle campagne : [SYNDIC / FACTURATION / CONCURRENT PROPRET / FIN DE CHANTIER]

Exigences ROI :
1. Hero avec ancre prix mensuelle visible
2. Timeline Mois 1 (0€) · Mois 2 (0€) · Mois 3+ (dès 29,99€)
3. Section tarifs 3 plans avec HT/mois
4. Bloc ROI chiffré (coût sans outil vs coût PROGESTI)
5. formType trial OU lead selon intention
6. campaign = ads_v3_[slug]
7. robots noindex
8. events GTM v3_hero_primary / v3_hero_secondary
9. Copy 100% métier nettoyage — pas SaaS générique
10. FAQ incluant mois 3 et carte bancaire

Ne pas : navigation site, prix cachés, témoignages inventés sans disclaimer.
```

---

## 9. Projections ROI — scénarios 3 mois

### Scénario conservateur

| Mois | Budget ads | Clics | Essais | Clients payants | MRR cumulé |
|------|-----------|-------|--------|-----------------|------------|
| M1 | 1 200 € | 400 | 20 | 0 | 0 € |
| M2 | 1 500 € | 500 | 25 | 8 (de M1) | 400 € |
| M3 | 1 800 € | 600 | 30 | 15 (de M1–M2) | 750 € |
| **Total** | **4 500 €** | **1 500** | **75** | **23** | **~1 150 €/mois** |

CPA essai = 60 € · Taux essai→client = 30% · ROAS LTV 12 mois ≈ 2,5× (acceptable)

### Scénario optimiste (message match + QS élevé)

| Mois | Budget ads | Essais | Clients payants | MRR cumulé |
|------|-----------|--------|-----------------|------------|
| M1 | 1 500 € | 35 | 0 | 0 € |
| M2 | 2 000 € | 45 | 14 | 700 € |
| M3 | 2 500 € | 55 | 28 | 1 400 € |
| **Total** | **6 000 €** | **135** | **42** | **~2 100 €/mois** |

CPA essai = 44 € · Taux essai→client = 31% · ROAS LTV 12 mois ≈ 4,2× ✅

### Point de bascule rentabilité

```
Coût moyen par client payant = CPA essai / taux conversion
Exemple : 45 € / 0,30 = 150 € CAC

MRR Pro = 49,99 € → payback CAC en ~3 mois
LTV 12 mois (churn 20%) = 49,99 × 12 × 0,8 = 479 €
Ratio LTV/CAC = 479 / 150 = 3,2× ✅ (cible SaaS B2B : > 3×)
```

---

## 10. URLs finales & UTM

### Landing pages actives

| URL | Campagne Google | formType | CTA principal |
|-----|-----------------|----------|---------------|
| `https://progesti.fr/lp/ads/v3/roi` | ROI / Prix / Essai | trial | Créer essai 2 mois |
| `https://progesti.fr/lp/ads/v3/planning` | Planning / Excel | lead | Voir planning métier |
| `https://progesti.fr/lp/ads/v3/syndic` | Syndics / Copropriétés | lead | Voir planning multi-sites |

### Template UTM

```
?utm_source=google&utm_medium=cpc&utm_campaign={campaign}&utm_content={adgroup}&utm_term={keyword}
```

Configurer `{campaign}` et `{adgroup}` en ValueTrack Google Ads.

---

## 11. Definition of Done — campagne prête à scaler

- [ ] 2 LP V3 déployées et testées mobile + desktop
- [ ] GTM events `v3_*` visibles en preview
- [ ] Campagnes Search séparées ROI vs Planning
- [ ] Minimum 30 mots-clés négatifs actifs
- [ ] Extensions prix (29,99 / 49,99 / 99,99 €) configurées
- [ ] RSA avec mention « 2 mois » et « 29,99 € » dans headlines
- [ ] Conversion `trial_start` importée dans Google Ads
- [ ] Search terms audit J+7 et J+14
- [ ] Premier A/B test CTA lancé semaine 2
- [ ] Témoignages LP remplacés par avis clients réels dès disponibles

---

## 12. Rappels légaux & confiance

- Toujours afficher **HT / mois** (pas TTC si non mentionné)
- Essai **sans CB** = argument #1 — ne jamais le retirer des ads
- Témoignages : disclaimer « exemples illustratifs » tant que pas d’avis réels
- Page `/confidentialite` accessible depuis footer LP si requis CNIL
- Cookie consent masqué sur LP ads (layout existant) — GTM après consent sur pages site

---

*Document généré pour PROGESTI V3 · MSNE SAS · À iterer après 30 jours de data réelle.*
