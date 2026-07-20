# PROMPT MAÎTRE — Refonte complète PROGESTI V3
## « Propreté premium · Conversion maximale · Identité métier forte »

> **Usage :** coller ce document entier (ou un sprint à la fois) dans une session Cursor Agent.  
> **Règle d’or :** ne jamais écraser les archives. **V1** reste sur `/v1`. **V2** devient archive sur `/v2`. Toute refonte V3 se fait sur les routes live (`/`, `/fonctionnalites`, etc.).  
> **Stack actuelle :** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript · contenu marketing dans `src/lib/site.ts` · blog (in-memory ou MDX selon sprint).  
> **Workspace :** `c:\Users\Simon\Desktop\Progesti\web`

---

## 0. Diagnostic — pourquoi la V2 ne suffit pas

### Ce que l’utilisateur ressent aujourd’hui (feedback critique)
- **« Site blanc sans rien »** — trop de fonds `fog` / `air`, sections aérées mais **vides visuellement**
- **Peu d’âme métier** malgré le copy — on lit « nettoyage » mais on ne **voit** pas assez le métier
- **Charte graphique insatisfaisante** — V2 = amélioration technique de V1, pas une **vraie identité visuelle**
- **Bleu insuffisant** — l’utilisateur veut **plus de bleu** (confiance, sérieux, bureaux, syndics)
- **Conversion pas assez agressive** — essai / démo / contact doivent être **omniprésents sans être cheap**
- **Blog trop mince** pour le SEO malgré la structure V2

### Ce que la V3 doit corriger (non négociable)
1. **Densité visuelle maîtrisée** — chaque section a une **ancre visuelle** (photo, illustration métier, mockup produit, motif, bande colorée). Zéro section « titre + paragraphe sur fond blanc » seule.
2. **Identité reconnaissable en 2 secondes** — PROGESTI + propreté + bleu/vert métier, pas un template SaaS interchangeable.
3. **Conversion first** — chaque page money a un **objectif unique** (essai, démo, contact) avec **friction minimale**.
4. **Atmosphère ménage pro** — bureaux, halls, chantiers, agents, chariots, tablettes — vocabulaire ET visuels.
5. **Blog = moteur SEO** — 40+ articles seed, clusters, maillage, schema, calendrier éditorial.

### Ce qui fonctionne déjà (à conserver)
- Segmentation : bureaux · syndics · professionnels · fin de chantier
- Offre commerciale (prix, essai 2 mois sans CB)
- Stack technique, `/api/lead`, GTM, CTAs `cta.ts`
- Archive V1 sur `/v1` (noindex)
- Direction copy V2 (vouvoiement, vocabulaire métier)
- Mega-nav Solutions, piliers SEO existants

---

## 1. Contexte produit (ne pas inventer)

### Qui nous sommes
**PROGESTI** — **logiciel SaaS de gestion pour entreprises de nettoyage / propreté professionnelles** (France).  
Tagline : *GÉREZ. OPTIMISEZ. PERFORMEZ.*  
Société : **MSNE SAS** — Tournefeuille (31) — `contact@progesti.fr` — `https://progesti.fr`

### Parcours métier (1 outil = Excel + WhatsApp + papier remplacés)
1. **Planifier** — agents, sites, fréquences, titulaires, backups  
2. **Pointer** — mobile terrain, bons d’intervention, preuves  
3. **Facturer** — à partir du réalisé, sans ressaisie  
4. **Piloter** — RH, contrats, stock, prépaie, tableaux de bord, géoloc, qualité  

**11 modules** dans `src/lib/site.ts` : planification, gestion-rh, facturation, contrats, stock, prépaie, tableaux-de-bord, géolocalisation, pointage, bon-intervention, supervision.

### Offre commerciale (ne pas changer sans validation explicite)
| Offre | Utilisateurs | Prix |
|-------|--------------|------|
| Starter | 1 admin | **29,99 € HT/mois** |
| Pro (mise en avant) | 5 users | **49,99 € HT/mois** |
| Premium | 20 users | **99,99 € HT/mois** |

- Tous les modules inclus dans chaque offre  
- Essai **2 mois sans carte bancaire**  
- Cloud + Android & iOS  
- Sans engagement long / résiliable à tout moment  
- Mise en place offerte  

### 4 univers clients (cœur marketing V3)
| Segment | Douleur principale | Promesse PROGESTI |
|---------|-------------------|-------------------|
| **Bureaux / tertiaire** | Multi-sites, horaires contraints, turnover agents | Planning clair + pointage + facturation récurrente |
| **Syndics / copropriétés** | Parties communes, accès, reporting syndic | Contrats multi-sites, preuves, suivi qualité |
| **Professionnels / commerces** | Ouverture/fermeture, hygiène, ponctualité | Checklists, bons, facturation fiable |
| **Fin de chantier / remise en état** | Planning serré, photos avant/après, facture rapide | Missions ponctuelles, preuves terrain, facturation express |

+ **Auto-entrepreneurs & petites équipes** (héritage V1, entrée secondaire)

### Positionnement
- Concurrent cité : **Propret**  
- Angle PROGESTI : essai 2 mois, tarifs publics, simplicité, tout inclus dès 29,99 €  
- Pages à préserver : `/alternative-propret`, LPs ads `/lp/ads/*`

### Inventaire routes existantes
**Live marketing :** `/`, `/fonctionnalites` (+ 11 slugs), `/tarifs`, `/demo`, `/essai`, `/faq`, `/contact`, `/a-propos`, `/rendez-vous`  
**Solutions :** `/solutions/bureaux`, `/solutions/syndics`, `/solutions/professionnels`, `/solutions/fin-de-chantier`, `/solutions/auto-entrepreneurs`  
**SEO piliers :** `/logiciel-entreprise-nettoyage`, `/logiciel-planning-nettoyage`, `/logiciel-facturation-proprete`  
**Blog :** `/blog`, `/blog/[slug]`, `/blog/categorie/[slug]`  
**Ressources :** `/ressources`, guides, comparatifs, témoignages, cas clients  
**LPs :** `/lp/*`, `/lp/ads/v1/*`, `/lp/ads/v2/*`  
**Archives :** `/v1` (noindex), **`/v2` (à créer — noindex)**  
**App produit :** `/app/*`, login, signup — **hors scope refonte marketing** (chrome léger OK)

---

## 2. Mission globale V3

Refondre **100 % du site marketing** pour qu’il soit :

### A. Visuellement premium et métier
- **Anti « site blanc vide »** : alternance de surfaces (bleu profond, blanc lumineux, vert propreté, photos full-bleed)
- **Identité V3** distincte de V1 (navy/emerald startup) ET V2 (fog trop plat)
- Photos / visuels **crédibles propreté** à chaque scroll
- Typographie **expressive et mémorable** (pas Inter, pas Roboto, pas « template Tailwind »)
- Motion **intentionnelle** (3–5 moments par page clé max)

### B. Orienté conversion (priorité #1 business)
Objectif : **visiteur → essai / démo / contact en < 30 secondes** si l’intention est là.

**Hiérarchie CTA globale :**
1. **Primaire** — « Essai gratuit 2 mois » (sans CB) → `cta.trialApp`  
2. **Secondaire** — « Voir la démo » / « Demander une démo » → `cta.demo`  
3. **Tertiaire** — « Nous contacter » / formulaire lead → `cta.contact` / `/api/lead`  

**Règles conversion :**
- Hero : **2 CTA max** (essai + démo), jamais 3 boutons égaux
- **Sticky mobile** : essai + démo (déjà `MobileCtaBar` — à renforcer visuellement V3)
- **CTA répétés** : hero → milieu page → fin page → sidebar blog (soft)
- **Formulaires courts** : nom, email, téléphone, entreprise — pas de mur de champs
- **Trust inline** : « 2 mois sans CB », « résiliable », « mise en place offerte », « MSNE SAS depuis… »
- **Urgence honnête** : pas de faux compteurs ; oui à « Essai gratuit — activation en 5 min »
- **Tracking** : events GTM `cta: "v3_..."` pour A/B post-launch

### C. SEO & blog industriel
- Hub blog éditorial **beau** (pas une liste grise)
- **40 articles seed minimum** (800–1500 mots utiles chacun)
- Clusters + piliers + solutions + maillage interne systématique
- Schema JSON-LD complet
- Catégories segment (bureaux, syndics, fin de chantier…)

### D. Technique & garde-fous
- Ne pas casser : `/api/lead`, signup, login, app produit, GTM, CookieConsent  
- `/v1` et `/v2` intacts, noindex, bannière « archive »  
- Core Web Vitals verts malgré richesse visuelle (webp, lazy, sizes)  
- Accessibilité : contraste, focus, alt textes métier, landmarks  
- **Ne pas committer** sauf demande explicite utilisateur  

---

## 3. Direction artistique V3 — nouvelle charte graphique

> **Objectif :** quitter définitivement l’esthétique « SaaS blanc gris vert generic ».  
> **Mot-clé direction :** **« Propreté lumineuse · Confiance bleue · Efficacité terrain »**

### 3.1 Principes de composition (obligatoires)

| Principe | V2 (problème) | V3 (exigence) |
|----------|---------------|---------------|
| Fond de page | `--fog` partout, sections fades | **Alternance** : bandes bleues, photos, dégradés, blanc pur ponctuel |
| Hero | Mockup seul + overlay sombre | **Split ou full-bleed photo métier** + mockup produit intégré + halo bleu |
| Sections | Texte centré sur fond clair | **Layout éditorial** : asymétrie, images latérales, chiffres, icônes métier |
| Cards | Réduites mais présentes | **Encore moins** — préférer listes typographiques, bandeaux, tableaux comparatifs |
| Brand | PROGESTI en eyebrow vert | **Logo + wordmark hero** + signature couleur bleu/vert |
| Densité | Trop de whitespace « vide » | Whitespace **utile** — jamais une zone sans rôle visuel |
| Bleu | `petrol` discret | **Bleu = couleur héroïque** (60 % identité), vert = action/conversion |

### 3.2 Palette V3 — « Bleu confiance · Vert action »

Coder dans `globals.css` via `:root` + `@theme inline`. **Remplacer** les tokens V2 sur le site live ; V2 archive garde ses propres styles ou snapshot CSS.

#### Couleurs principales
| Token | Hex proposé | Rôle |
|-------|-------------|------|
| `--blue-deep` | `#0B3D6E` | Hero, footer, sections autorité |
| `--blue-royal` | `#1565A8` | Titres sur fond clair, liens, nav active |
| `--blue-sky` | `#E8F2FA` | Surfaces aérées **avec teinte bleue visible** (pas gris) |
| `--blue-mist` | `#C5DCF0` | Bordures, séparateurs, badges discrets |
| `--green-action` | `#1FA86B` | CTA primaire, succès, « propreté » |
| `--green-deep` | `#157A4E` | Hover CTA, accents secondaires |
| `--white-pure` | `#FFFFFF` | Zones de respiration, texte sur bleu |
| `--ink` | `#0F2438` | Corps de texte (bleu-noir, pas gris) |
| `--slate` | `#4A6178` | Texte secondaire |
| `--warm-light` | `#F7FAFC` | Fond alternatif (légèrement bleuté) |
| `--accent-gold` | `#D4A017` | Rare : highlight chiffres, étoiles, archive banners |
| `--danger` | `#C53D32` | Erreurs formulaire |

#### Règles d’usage couleur
- **Minimum 40 % de pixels « colorés »** (bleu ou vert ou photo) sur home above the fold  
- **Jamais** 3 sections consécutives sur fond `#F4F7F9` identique sans variation  
- CTA primaire : **vert action** sur fond clair, **blanc** sur fond bleu profond  
- Liens : bleu royal souligné au hover, pas vert partout  
- Footer : **bleu deep** plein, pas navy terne  

#### Dégradés & atmosphère (classes utilitaires à créer)
```css
/* Exemples direction — à affiner au Sprint 1 */
.gradient-hero-progesti {
  background: linear-gradient(135deg, #0B3D6E 0%, #1565A8 45%, #1FA86B 100%);
}
.gradient-section-blue {
  background: linear-gradient(180deg, var(--blue-sky) 0%, var(--white-pure) 100%);
}
.pattern-clean-subtle {
  /* Motif géométrique discret : lignes / grille / « flux d’air » — SVG inline ou CSS */
}
```

### 3.3 Typographie V3

**Abandonner** si trop « template » : Bricolage Grotesque + Source Sans 3 (V2).

**Direction recommandée (choisir au Sprint 1, une paire) :**

| Option | Display (titres) | Body (texte) | Personnalité |
|--------|------------------|--------------|--------------|
| **A — Recommandée** | **Outfit** ou **Plus Jakarta Sans** (700–800) | **DM Sans** ou **Manrope** | Moderne pro, lisible, pas startup cliché |
| B | **Sora** | **Inter Tight** | Tech propre, géométrique |
| C | **Lexend** | **Nunito Sans** | Accessible, friendly B2B |

**Règles typo :**
- H1 home : **clamp(2.5rem, 5vw, 4rem)**, weight 800, letter-spacing -0.02em  
- PROGESTI en display : **toujours visible** hero (pas seulement logo nav 32px)  
- Scale : ratio ~1.25, hiérarchie nette H1 → H2 → lead → body  
- Pas de capitales excessives sauf eyebrow segment (ex. « NETTOYAGE DE BUREAUX »)

### 3.4 Iconographie & illustration

- **Set cohérent** : Lucide ou Phosphor (stroke 1.5–2), teintés bleu ou vert  
- **Icônes métier custom** (Sprint 15) : chariot, immeuble, chantier, pointage, facture — style ligne simple  
- **Interdits** : emojis, clipart éponge cartoon, illustrations 3D glossy IA, personnages stock souriants avec plumeau  

### 3.5 Photographie & visuels

#### Banque visuelle minimum (à sourcer — voir §12)
| ID | Sujet | Usage |
|----|-------|-------|
| P01 | Open space bureaux tôt matin, lumière naturelle | Hero bureaux |
| P02 | Agent pro avec chariot dans hall immeuble | Hero syndics / home |
| P03 | Chantier presque livré, nettoyage finition | Hero fin de chantier |
| P04 | Commerçant / cabinet, local pro propre | Hero professionnels |
| P05 | Main avec tablette, pointage appli | Sections produit |
| P06 | Équipe 2–3 agents, uniformes discrets | Trust / à propos |
| P07 | Dashboard PROGESTI (capture réelle ou mockup amélioré) | Preuve produit |

**En attendant photos réelles :**
- Unsplash/Pexels **filtrés** (mots-clés : commercial cleaning, office cleaning, building maintenance)  
- Traitement unifié : légère teinte bleue, contraste cohérent  
- **Ne pas** réutiliser seul `/hero-mockup-opt.webp` — compléter par vraies photos métier  

#### Mockups produit
- Garder `/dashboard-mockup-opt.webp`, `/hero-mockup-opt.webp` en transition  
- Sprint 16 : remplacer par **captures écran réelles** encadrées device minimal (pas iPhone générique flottant)

### 3.6 Motion & micro-interactions

| Moment | Comportement | Max |
|--------|--------------|-----|
| Hero | Fade-up stagger titre → sous-titre → CTA (400ms) | 1 |
| Scroll | Reveal sections (Intersection Observer, 1x) | 2–3/page |
| CTA hover | Légère élévation + glow vert subtil | global |
| Nav | Indicateur slide sous lien actif | 1 |
| Demo | Option : autoplay léger vidéo 15s muted (Sprint 18) | opt |

**Toujours** respecter `prefers-reduced-motion: reduce`.

### 3.7 Anti-patterns (interdits V3)

- ❌ Site « blanc sur blanc » — 3+ sections sans couleur ni image  
- ❌ Purple gradient IA, dark mode forcé, néon glow  
- ❌ Pills `rounded-full` partout  
- ❌ Cards avec triple ombre empilée  
- ❌ Hero avec 6 stats + 4 badges flottants  
- ❌ Stock photo femme plumeau souriante  
- ❌ « Révolutionnez » / « Powered by AI » / jargon Silicon Valley  
- ❌ Faux avis clients  
- ❌ Pop-up agressif avant 10s (bannière cookie OK)  

---

## 4. Architecture conversion (UX)

### 4.1 Entonnoirs par intention

```
Découverte (SEO / Ads)
    → Article blog / Pilier / Solution verticale
        → CTA soft : « Voir si PROGESTI vous convient » → Essai
        → CTA medium : « Demander une démo » → /demo
        → CTA hard : Lead form inline (3 champs)

Comparaison
    → /alternative-propret, /tarifs, comparatifs blog
        → Tableau + FAQ + Essai

Décision
    → /essai (landing dédiée, formulaire minimal)
    → /demo (vidéo + calendrier ou formulaire)
    → /contact (lead complet)

Mobile
    → Sticky bar Essai + Démo (toujours visible)
```

### 4.2 Pages conversion — wireframes détaillés

#### `/essai` — Landing essai (priorité max)
1. **Hero compact bleu** — « 2 mois gratuits, sans carte bancaire »  
2. **Formulaire above the fold** (desktop : split form + bénéfices ; mobile : form first)  
3. **3 bullets trust** : tous modules · cloud · résiliable  
4. **Logos / badges** (MSNE SAS, hébergement France si applicable)  
5. **FAQ essai** (4 questions)  
6. **Pas de distraction nav** — header minimal OK  

#### `/demo` — Landing démo
1. Hero : « Voyez PROGESTI sur votre cas » (bureaux / syndic / chantier — sélecteur optionnel)  
2. **Vidéo embed** ou carousel 3 captures (planning, pointage, facture)  
3. Formulaire démo **5 champs max**  
4. Preuve : « Réponse sous 24h ouvrées »  
5. CTA secondaire vers essai  

#### `/contact` — Lead B2B
1. Formulaire + coordonnées MSNE SAS  
2. Carte ou mention Tournefeuille (31)  
3. Choix motif : essai · démo · question commerciale · support  
4. RGPD checkbox explicite  

#### Composant réutilisable : `<ConversionBlock variant="essai|demo|contact" />`
- Bandeau bleu en fin de chaque page money  
- Titre action + 1 phrase + bouton + micro trust  

### 4.3 Homepage V3 — structure section par section

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER — fond blanc/bleu léger, logo fort, nav, CTA essai  │
├─────────────────────────────────────────────────────────────┤
│ HERO — 60% viewport min                                     │
│  • Fond : photo métier full-bleed + overlay bleu deep       │
│  • Gauche : PROGESTI display + H1 + lead + [Essai][Démo]    │
│  • Droite : mockup produit incliné + reflet subtil          │
│  • Bandeau trust : « 2 mois sans CB · Dès 29,99€ · Cloud »  │
├─────────────────────────────────────────────────────────────┤
│ SEGMENTS — fond blue-sky, 4 colonnes visuelles              │
│  • Chaque univers : icône + photo crop + titre + lien       │
│  • Hover : lift + bordure bleu royal                        │
├─────────────────────────────────────────────────────────────┤
│ PARCOURS — fond blanc, timeline horizontale 3 étapes        │
│  • Planifier → Pointer → Facturer (icônes + mini capture)   │
├─────────────────────────────────────────────────────────────┤
│ PRODUIT — fond bleu deep (section sombre)                   │
│  • Dashboard mockup grand format                            │
│  • 6 modules phares en liste (pas grille cards)             │
├─────────────────────────────────────────────────────────────┤
│ AVANT / APRÈS — split visuel                                │
│  • Gauche : chaos Excel/WhatsApp (stylisé, pas moche)       │
│  • Droite : PROGESTI ordonné                                │
├─────────────────────────────────────────────────────────────┤
│ PREUVES — fond warm-light                                   │
│  • Chiffres clés (sites gérés, heures pointées — réels ou   │
│    « conçu avec des entreprises de propreté » si pas de KPI)│
│  • Témoignages : placeholders honnêtes OU vrais avis        │
├─────────────────────────────────────────────────────────────┤
│ TARIFS TEASER — 3 colonnes, Pro mis en avant vert           │
│  • Lien → /tarifs                                           │
├─────────────────────────────────────────────────────────────┤
│ BLOG — 3 derniers articles, visuel éditorial avec images    │
├─────────────────────────────────────────────────────────────┤
│ FAQ — 5 questions top, accordion                            │
├─────────────────────────────────────────────────────────────┤
│ CTA FINAL — gradient bleu→vert, formulaire email rapide     │
│  ou double bouton Essai + Démo                              │
├─────────────────────────────────────────────────────────────┤
│ FOOTER — blue deep, colonnes, CTA essai répété              │
└─────────────────────────────────────────────────────────────┘
MOBILE : sticky bar Essai + Démo
```

### 4.4 Navigation V3

**Primaire :** Solutions ▾ · Fonctionnalités · Tarifs · Blog · **Essai gratuit** (bouton vert)  
**Secondaire header :** Démo · Contact · Connexion  

**Mega menu Solutions :**
- Colonne 1 : Bureaux & tertiaire (+ miniature photo)  
- Colonne 2 : Syndics & copropriétés  
- Colonne 3 : Professionnels & commerces  
- Colonne 4 : Fin de chantier  
- Bandeau bas : « Pas sûr ? → Demandez une démo »  

**Footer :** reprendre segments + piliers SEO + liens conversion (essai, démo, contact)

---

## 5. Architecture SEO & blog

### 5.1 Structure technique blog (exigence V3)

**Migrer vers MDX** si pas déjà fait : `content/blog/*.mdx`

Chaque article **doit** avoir :
```typescript
{
  title: string;
  slug: string;
  category: BlogCategory;
  excerpt: string;
  publishedAt: ISO date;
  updatedAt?: ISO date;
  readingTime: number; // minutes
  cover: { src: string; alt: string }; // OBLIGATOIRE — pas d'article sans visuel
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  relatedSlugs: string[];
  ctaVariant: "essai" | "demo" | "pillar";
  body: MDX;
}
```

**Routes :**
- `/blog` — hub avec hero SEO, filtres catégories, grille éditoriale **avec images cover**  
- `/blog/[slug]` — article : breadcrumb, TOC (si >3 H2), related ×3, ConversionBlock bas  
- `/blog/categorie/[slug]` — archive catégorie  
- `/blog/rss.xml` — flux RSS (Sprint 13)  

**Schema :** BlogPosting + BreadcrumbList + FAQPage (si FAQ en fin d’article)

### 5.2 Catégories blog
1. Guides opérationnels  
2. Conseils métier propreté  
3. Comparatifs & alternatives  
4. Études de cas  
5. Nouveautés produit  
6. **Bureaux & tertiaire**  
7. **Syndics & immobilier**  
8. **Fin de chantier & remise en état**  
9. **Facturation & administratif**  
10. **Réglementation & bonnes pratiques** (disclaimer juridique)  

### 5.3 Clusters SEO & calendrier éditorial (40 sujets seed)

#### Cluster 1 — Logiciel / intention achat (8)
1. Logiciel entreprise de nettoyage : guide complet 2026  
2. Comment choisir un logiciel de propreté (checklist 15 critères)  
3. PROGESTI vs Propret : comparatif honnête  
4. Excel vs logiciel nettoyage : quand migrer  
5. Logiciel nettoyage pas cher : ce qu’il faut vérifier  
6. Essai gratuit logiciel propreté : comment en profiter  
7. ROI d’un logiciel de gestion pour entreprise de ménage  
8. Sécurité des données : hébergement, RGPD, accès agents  

#### Cluster 2 — Planning & terrain (8)
9. Organiser le planning multi-sites (méthode)  
10. Fréquences ménage bureaux : hebdo, bi-mensuel, mensuel  
11. Remplacer WhatsApp pour les absences agents  
12. Agent backup : éviter les sites orphelins  
13. Pointage mobile nettoyage : réduire les litiges  
14. Bons d’intervention et preuves photos  
15. Géolocalisation agents : cadre légal et bonnes pratiques  
16. Planning fin de chantier vs entretien récurrent  

#### Cluster 3 — Facturation & admin (8)
17. Du pointage à la facture sans Excel  
18. Facturer une fin de chantier sans oublis  
19. Contrats multi-sites et renouvellements  
20. Prépaie variables propreté : méthode simple  
21. Gestion stock consommables multi-sites  
22. Tableaux de bord rentabilité par contrat  
23. Starter vs Pro vs Premium : quel plan choisir  
24. Devis nettoyage professionnel : structurer pour facturer vite  

#### Cluster 4 — Segments verticaux (8)
25. Logiciel nettoyage bureaux : 7 critères décisifs  
26. Nettoyage parties communes : travailler avec un syndic  
27. Reporting syndic : ce qu’il faut fournir  
28. Ménage cabinet médical : hygiène et plannings  
29. Nettoyage commerce : ouverture et fermeture  
30. Remise en état après travaux : process commercial  
31. Entreprise fin de chantier : organiser les missions ponctuelles  
32. Auto-entrepreneur propreté : démarrer sans usine à gaz  

#### Cluster 5 — Longue traîne & confiance (8)
33. Checklist contrôle qualité parties communes  
34. Erreurs fréquentes migration Excel → logiciel  
35. Former les agents au pointage mobile  
36. Modèle de cahier des charges nettoyage bureaux  
37. Indemnités kilométriques agents propreté (info, disclaimer)  
38. Logiciel planning nettoyage : lexique des termes  
39. Supervision qualité à distance  
40. FAQ décideur : résiliation, export données, support  

**Spec rédaction par article :**
- 800–1500 mots français, vouvoiement  
- H1 unique, meta description 150–160 car.  
- 2–4 liens internes (pilier, solution, fonctionnalité, essai)  
- 1 CTA milieu (soft) + ConversionBlock fin  
- Image cover unique (photo métier ou abstract bleu/vert on-brand)  
- Pas de filler IA évident  

### 5.4 Maillage interne (schéma)

```
                    ┌─────────────┐
                    │    HOME     │
                    └──────┬──────┘
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
    ┌────────────┐  ┌────────────┐  ┌────────────┐
    │ Solutions  │  │  Piliers   │  │   Blog     │
    │ (4 vert.)  │  │   SEO      │  │  clusters  │
    └─────┬──────┘  └─────┬──────┘  └─────┬──────┘
          │               │               │
          └───────────────┼───────────────┘
                          ▼
              ┌───────────────────────┐
              │ Essai · Démo · Contact│
              └───────────────────────┘
```

---

## 6. Pages Solutions V3 — template enrichi

Chaque `/solutions/[slug]` :

1. **Hero segment** — photo dédiée + H1 segment + douleur + [Essai segment][Démo]  
2. **Problèmes** — 4 pains en liste iconifiée (fond blue-sky)  
3. **Réponse PROGESTI** — modules liés avec captures  
4. **Journée type** — timeline narrative (« 6h — agent arrive… »)  
5. **Chiffres / scénario** — cas d’usage chiffré (exemple)  
6. **FAQ segment** — 5 Q&R  
7. **ConversionBlock** — variante essai  
8. **Liens** — 2 articles blog segment + pilier SEO  

**Tracking CTAs :** `v3_solution_bureaux_hero`, `v3_solution_syndics_hero`, etc.

---

## 7. Technique & implémentation

### 7.1 Do
- Next.js App Router, Server Components par défaut  
- Tokens V3 dans `globals.css` — **préfixe ou namespace** `v3-` si coexistence temporaire avec archive  
- Réutiliser : `ButtonLink`, `LeadForm`, `lib/tracking.ts`, `lib/cta.ts`  
- Images `next/image`, webp/avif, `sizes` corrects, `priority` hero only  
- Metadata + OG images **par template** (générer OG bleu PROGESTI — Sprint 14)  
- Français `lang="fr"`  
- Events GTM : `cta: "v3_..."`  

### 7.2 Don't
- Supprimer `/v1` ou `/v2`  
- Casser `/api/lead`, auth, app produit  
- Lib UI lourde (MUI, Chakra) sans justification  
- Hardcoder secrets  
- Faux témoignages  
- Commit sans demande  

### 7.3 Archive V2 — procédure (Sprint 0)

1. Copier `src/app/page.tsx` → `src/app/v2/page.tsx` (+ layout si besoin)  
2. Copier styles/composants V2 si nécessaire dans `src/components/v2-archive/` OU snapshot git tag  
3. `robots.ts` : disallow ou noindex `/v2`  
4. Bannière visible « Archive design V2 — juillet 2026 »  
5. Documenter dans `docs/V2-ARCHIVE.md`  

**Routes archives :**
| Archive | URL | robots |
|---------|-----|--------|
| V1 | `/v1` | noindex |
| V2 | `/v2` | noindex |
| V3 live | `/` | index |

### 7.4 Fichiers clés
| Rôle | Chemin |
|------|--------|
| Home live V3 | `src/app/page.tsx` |
| Archive V1 | `src/app/v1/page.tsx` |
| Archive V2 | `src/app/v2/page.tsx` (à créer) |
| Contenu | `src/lib/site.ts` |
| Blog MDX | `content/blog/*.mdx` |
| Tokens V3 | `src/app/globals.css` |
| Fonts | `src/app/layout.tsx` |
| Layout chrome | `src/components/layout/*` |
| Conversion | `src/components/conversion/*` (à créer) |
| Design system doc | `docs/DESIGN-SYSTEM-V3.md` |
| Ce prompt | `docs/PROMPT-REFONTE-V3.md` |

---

## 8. Plan de sprints V3 (25 sprints + récurrent)

> **Definition of Done commune :** `npm run build` OK · mobile OK · CTAs essai/démo/contact fonctionnels · `/v1` + `/v2` intacts · pas de section « blanc vide » sur les pages livrées · tracking `v3_*` sur nouveaux CTAs.

---

### SPRINT 0 — Kickoff, archive V2, audit (1 j)
**But :** sécuriser avant de casser.  
**Tâches :**
- [ ] Snapshot V2 → `/v2` + `docs/V2-ARCHIVE.md`  
- [ ] Audit screenshot home + 5 pages (noter sections « vides »)  
- [ ] Valider palette V3 (§3.2) avec utilisateur — **bleu dominant OK ?**  
- [ ] Lister assets manquants (photos)  
- [ ] Créer branche ou tag git `v2-frozen` (sans commit forcé)  
**DoD :** `/v2` accessible noindex ; liste gaps visuels.

---

### SPRINT 1 — Design system V3 fondations (2 j)
**But :** nouvelle charte codée.  
**Tâches :**
- [ ] Tokens V3 `globals.css` (bleu dominant)  
- [ ] Nouvelles fonts (paire validée §3.3)  
- [ ] Primitives : `Section`, `SectionBlue`, `SectionDark`, `ConversionBlock`, `TrustStrip`  
- [ ] Gradients + pattern subtil  
- [ ] Restyle `ButtonLink` (primary vert, secondary bleu outline, ghost)  
- [ ] `docs/DESIGN-SYSTEM-V3.md`  
**DoD :** Storyboard tokens en page `/design-system` interne ou section doc ; contraste WCAG AA.

---

### SPRINT 2 — Header, Footer, MobileCtaBar V3 (1 j)
**But :** chrome conversion-first.  
**Tâches :**
- [ ] Header fond blanc, logo plus grand, CTA essai vert proéminent  
- [ ] Mega menu Solutions avec thumbnails  
- [ ] Footer blue deep, CTA répété, colonnes SEO  
- [ ] Mobile sticky bar plus visible (ombre, contraste)  
**DoD :** navigation cohérente site-wide.

---

### SPRINT 3 — Homepage hero + segments (2 j)
**But :** first impression « wow métier ».  
**Tâches :**
- [ ] Hero split/full-bleed photo + mockup  
- [ ] Trust strip sous hero  
- [ ] Section 4 univers visuelle (photos + icônes)  
- [ ] Metadata / OG home V3  
**DoD :** above the fold **non blanc** ; brand + métier < 3 sec.

---

### SPRINT 4 — Homepage suite (2 j)
**But :** reste home dense et convertissante.  
**Tâches :**
- [ ] Parcours 3 étapes avec captures  
- [ ] Section produit fond bleu deep  
- [ ] Avant/après Excel vs PROGESTI  
- [ ] FAQ + CTA final gradient  
**DoD :** home complète shippable.

---

### SPRINT 5 — Landing `/essai` conversion max (1–2 j)
**But :** page #1 conversion.  
**Tâches :**
- [ ] Layout split form/bénéfices  
- [ ] Formulaire minimal branché signup/lead  
- [ ] FAQ essai, trust badges  
- [ ] A/B ready structure (hero court vs long)  
**DoD :** parcours essai mesurable GTM `v3_trial_*`.

---

### SPRINT 6 — Landing `/demo` + `/contact` (1–2 j)
**But :** secondaires conversion.  
**Tâches :**
- [ ] `/demo` vidéo + form 5 champs  
- [ ] `/contact` enrichi, motifs, RGPD  
- [ ] `ConversionBlock` réutilisable  
**DoD :** 3 tunnels conversion live.

---

### SPRINT 7 — Pages Solutions ×4 (3 j)
**But :** verticales métier riches.  
**Tâches :**
- [ ] Template `SolutionPageV3`  
- [ ] 4 pages contenu FR + photos segment  
- [ ] CTAs segment trackés  
- [ ] Maillage blog (placeholders liens futurs OK)  
**DoD :** 4 URLs indexables, visuellement distinctes.

---

### SPRINT 8 — Tarifs + PricingTable V3 (1 j)
**But :** clarté prix → essai.  
**Tâches :**
- [ ] Restyle pricing (Pro highlight vert)  
- [ ] FAQ tarifs inline  
- [ ] CTA essai sous chaque plan  
**DoD :** `/tarifs` conversion-ready.

---

### SPRINT 9 — Fonctionnalités hub + 11 modules (2 j)
**But :** cohérence visuelle modules.  
**Tâches :**
- [ ] Hub `/fonctionnalites` éditorial  
- [ ] Pages module : hero + capture + CTA  
- [ ] Liens vers solutions + blog  
**DoD :** 12 pages restylées.

---

### SPRINT 10 — Piliers SEO ×3 + alternative Propret (2 j)
**But :** pages acquisition organique.  
**Tâches :**
- [ ] `/logiciel-entreprise-nettoyage` refonte V3  
- [ ] `/logiciel-planning-nettoyage`  
- [ ] `/logiciel-facturation-proprete`  
- [ ] `/alternative-propret` comparatif visuel  
**DoD :** piliers avec ConversionBlock + schema.

---

### SPRINT 11 — Blog infrastructure MDX (2 j)
**But :** usine à contenu.  
**Tâches :**
- [ ] Setup MDX + frontmatter typé  
- [ ] Hub `/blog` redesign (grille avec covers)  
- [ ] Template article : TOC, related, schema, CTA  
- [ ] `/blog/categorie/[slug]`  
- [ ] Migrer 8 articles existants + covers  
- [ ] `sitemap.ts` blog  
**DoD :** 0 régression slugs ; articles ont tous une image.

---

### SPRINT 12 — Blog batch A (8 articles, cluster achat + planning) (3 j)
**Sujets :** §5.3 #1–8  
**DoD :** 8 articles live, maillage, metas.

---

### SPRINT 13 — Blog batch B (8 articles, terrain + facturation) (3 j)
**Sujets :** §5.3 #9–16 + #17–20  
**DoD :** 16 nouveaux cumulés (24 total).

---

### SPRINT 14 — Blog batch C (8 articles, segments) (3 j)
**Sujets :** §5.3 #25–32  
**DoD :** 32 articles cumulés.

---

### SPRINT 15 — Blog batch D (8 articles, longue traîne) + RSS (2 j)
**Sujets :** §5.3 #33–40  
**Tâches :** flux RSS, hub ressources mis à jour  
**DoD :** ≥40 articles ; RSS validé.

---

### SPRINT 16 — Ressources, guides, comparatifs hub (1–2 j)
**But :** `/ressources` central SEO.  
**Tâches :** liens piliers, blog clusters, outils téléchargeables (checklists PDF — option)  
**DoD :** hub utile, pas page liste vide.

---

### SPRINT 17 — Témoignages & cas clients (1 j)
**But :** preuve sociale honnête.  
**Tâches :** structure cas clients ; placeholders « Exemple » si pas de vrais ; formulaire collecte avis futur  
**DoD :** zéro faux avis présenté comme réel.

---

### SPRINT 18 — FAQ globale + pages annexes (1 j)
**But :** `/faq` searchable, `/a-propos` humain.  
**Tâches :** accordion V3, équipe MSNE SAS, photo bureau si dispo  
**DoD :** confiance renforcée.

---

### SPRINT 19 — LPs marketing `/lp/*` V3 (2 j)
**But :** campagnes non-ads alignées.  
**Tâches :** `LandingTemplate` V3, essai-2-mois, simplifier, alternative  
**DoD :** tracking conservé.

---

### SPRINT 20 — Ads LPs `/lp/ads/*` V3 (2 j)
**But :** ads convertissantes + belles.  
**Tâches :** `AdsCaptureLanding`, `AdsSalesLanding`, forms, noindex, tokens V3  
**DoD :** pas de régression campagnes.

---

### SPRINT 21 — SEO technique & schema (2 j)
**Tâches :**
- [ ] JSON-LD Organization, SoftwareApplication, FAQPage, BlogPosting  
- [ ] OG images templates bleu PROGESTI  
- [ ] Canonicals, audit H1  
- [ ] `robots.ts` : exclure `/v1`, `/v2`, `/lp/ads`  
**DoD :** Search Console ready.

---

### SPRINT 22 — Performance & images (1–2 j)
**Tâches :** Lighthouse mobile home + article ; lazy ; font subset ; LCP hero  
**DoD :** CWV verts cible.

---

### SPRINT 23 — Motion & polish premium (1–2 j)
**Tâches :** reveals, nav indicator, CTA hover, optional demo video  
**DoD :** `prefers-reduced-motion` OK.

---

### SPRINT 24 — Pages légales style V3 (0.5 j)
**Tâches :** mentions, CGV, confidentialité — chrome V3  
**DoD :** footer cohérent.

---

### SPRINT 25 — QA globale & release V3.0 (1–2 j)
**Checklist :**
- [ ] Toutes routes §1 inventaire  
- [ ] `/v1` + `/v2` archives OK  
- [ ] Essai, démo, contact, lead API  
- [ ] 40 articles, pas de cover manquante  
- [ ] Mobile sticky CTAs  
- [ ] Compare `/` vs `/v2` — différence visuelle **flagrante**  
- [ ] `docs/RELEASE-V3.md`  
**DoD :** V3.0 déclarée.

---

### SPRINT 26+ — Récurrent post-launch
| Cadence | Action |
|---------|--------|
| 2×/semaine | Nouvel article blog + maillage |
| Mensuel | Review conversion GTM, hypothèses CTA |
| Trimestriel | Refresh photos, témoignages réels |
| Continu | `docs/BLOG-OPS.md` process |

---

## 9. Prompt session agent (copier-coller)

```text
Tu travailles sur PROGESTI (web Next.js, dossier web/).

Lis et suis intégralement : docs/PROMPT-REFONTE-V3.md

Contexte critique :
- Logiciel pro nettoyage : bureaux, syndics, professionnels, fin de chantier.
- L'utilisateur n'aime PAS la V2 (trop blanc, vide, pas assez esthétique).
- V3 = identité bleue forte, visuels métier denses, conversion max (essai 2 mois / démo / contact).
- Archives INTOUCHABLES : /v1 et /v2 (noindex). Refonte sur routes live uniquement.
- Offre : dès 29,99€ HT/mois, essai 2 mois sans CB, tous modules inclus.
- Stack : App Router, Tailwind 4, site.ts, blog MDX.
- Tracking CTAs : cta: "v3_..."

Pour CETTE session, exécute UNIQUEMENT le SPRINT [NUMÉRO] du document.
Interdit : sections blanches sans ancre visuelle ; site générique SaaS ; supprimer archives.
Ne commit pas sauf demande explicite.
À la fin : résume fichiers touchés, captures à vérifier, prochain sprint recommandé.
```

Remplace `[NUMÉRO]` par `0` à `25`.

---

## 10. Critères d'acceptation globaux V3.0

- [ ] `/v1` et `/v2` intacts, noindex, bannières archive  
- [ ] Home V3 : **bleu + métier + conversion** visible en 1er viewport — **pas un site blanc**  
- [ ] Palette bleu dominante validée et documentée  
- [ ] 4 Solutions + 3 piliers + tarifs + essai + démo + contact restylés  
- [ ] `ConversionBlock` sur toutes pages money  
- [ ] Blog MDX + **≥40 articles** avec covers  
- [ ] Maillage interne article → pilier → solution → essai  
- [ ] Mobile sticky essai + démo  
- [ ] GTM events `v3_*`  
- [ ] Ads LPs non cassées  
- [ ] CWV mobile OK  
- [ ] Différence visuelle V2 → V3 **immédiate** côte à côte  

---

## 11. Hors scope

- Refonte app authentifiée `/app/*`  
- CMS headless (sauf demande)  
- App native iOS/Android  
- Changement prix/offre  
- Faux avis  
- Pop-ups agressifs type exit-intent  

---

## 12. Aide nécessaire de l'utilisateur (à fournir quand possible)

Pour passer de « bon » à « exceptionnel », j'ai besoin de :

| Besoin | Priorité | Impact |
|--------|----------|--------|
| **Photos réelles** équipes / chantiers / bureaux clients | Haute | Authenticité métier |
| **Captures écran** app PROGESTI (planning, pointage, facture) | Haute | Preuve produit |
| **Témoignages clients** nom + entreprise + citation (même 2–3) | Haute | Conversion |
| **Logo** fichiers SVG/PNG haute résolution | Moyenne | Brand |
| **Vidéo démo** 60–90s (même screen recording) | Moyenne | Page /demo |
| **Chiffres** : nb clients, sites gérés, années MSNE SAS | Moyenne | Trust |
| **Validation palette** bleu §3.2 (OK / ajuster hex) | Sprint 0 | Direction |
| **Accès Google Search Console** (optionnel) | Basse | SEO post-launch |

**Sans ces éléments :** on avance quand même avec Unsplash filtré + placeholders honnêtes + mockups existants — mais le site sera limité en crédibilité jusqu'à fourniture.

---

## 13. Comparaison V1 → V2 → V3 (vision)

| Dimension | V1 | V2 | V3 cible |
|-----------|----|----|----------|
| Identité | Navy/emerald SaaS | Fog clair, typo moderne | **Bleu confiance + vert action** |
| Densité visuelle | Cards partout | Trop vide | **Éditorial riche, photos** |
| Métier visible | Faible | Copy OK, visuel moyen | **Photos + vocabulaire + icônes** |
| Conversion | CTAs basiques | CTAs présents | **Tunnels dédiés, répétition intelligente** |
| Blog SEO | 8 articles | Structure amorcée | **40+ articles MDX, clusters** |
| Archives | `/v1` | — | `/v1` + **`/v2`** |

---

*Document vivant — mettre à jour après chaque sprint (DoD, décisions palette, assets reçus).*

**Prochaine action recommandée :** lancer **SPRINT 0** (archiver V2 sur `/v2`) puis **SPRINT 1** (tokens bleu V3).
