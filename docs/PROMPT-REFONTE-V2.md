# PROMPT MAÎTRE — Refonte complète PROGESTI V2

> **Usage :** coller ce document (ou un sprint à la fois) dans une session Cursor Agent.  
> **Règle d’or :** ne jamais écraser l’archive V1 (`/v1`). Toute refonte se fait sur les pages “live” (`/`, `/fonctionnalites`, etc.).  
> **Stack actuelle :** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript · contenu marketing dans `src/lib/site.ts` · blog in-memory.  
> **Workspace :** `c:\Users\Simon\Desktop\Progesti\web`

---

## 0. Contexte produit (ne pas inventer)

### Qui nous sommes
**PROGESTI** est un **logiciel SaaS de gestion pour entreprises de nettoyage / propreté professionnelles** (France).  
Tagline historique : *GÉREZ. OPTIMISEZ. PERFORMEZ.*  
Société : MSNE SAS — Tournefeuille (31) — `contact@progesti.fr` — `https://progesti.fr`.

### Ce que fait le produit (parcours métier)
Un seul outil pour remplacer **Excel + WhatsApp + papier** :
1. **Planifier** agents / sites / fréquences  
2. **Pointer** sur le terrain (mobile) + bons d’intervention  
3. **Facturer** à partir du réalisé  
4. **Piloter** RH, contrats, stock, prépaie, tableaux de bord, géoloc, supervision qualité  

**11 modules** déjà définis dans `src/lib/site.ts` : planification, gestion-rh, facturation, contrats, stock, prépaie, tableaux-de-bord, géolocalisation, pointage, bon-intervention, supervision.

### Offre commerciale (ne pas changer sans validation)
| Offre | Utilisateurs | Prix |
|-------|--------------|------|
| Starter | 1 admin | **29,99 € HT/mois** |
| Pro (mise en avant) | 5 users | 49,99 € HT/mois |
| Premium | 20 users | 99,99 € HT/mois |

- Tous les modules inclus dans chaque offre  
- Essai **2 mois sans carte bancaire**  
- Cloud + Android & iOS  
- Pas d’engagement long / résiliable  
- Mise en place offerte  

### Segments cibles V2 (réorientation marketing — critique)
La V1 parlait surtout “AE / TPE / Excel”. La **V2 doit élargir et clarifier** quatre univers métier, sans perdre les indépendants :

1. **Nettoyage de bureaux / tertiaire** — open spaces, immeubles de bureaux, espaces de coworking  
2. **Syndics & gestion locative / parties communes** — immeubles, halls, cages d’escalier, locaux techniques, multi-sites récurrents  
3. **Professionnels & commerces** — cabinets médicaux, commerces, restaurants, locaux pros avec contraintes d’horaires / accès  
4. **Fin de chantier / remise en état** — prestations ponctuelles, planning serré, preuves photos, facturation rapide post-chantier  

Le site doit **sentir le métier du ménage / de la propreté** (atmosphère, vocabulaire, images, preuves terrain) — pas un SaaS générique “productivité navy/vert”.

### Positionnement concurrentiel
- Concurrent cité historiquement : **Propret**  
- Angle PROGESTI : essai long (2 mois), tarifs publics, simplicité, tout inclus dès 29,99 €  
- Pages existantes à préserver / améliorer : `/alternative-propret`, LPs ads `/lp/ads/*`

### Ce qui existe déjà (inventaire à respecter)
- Homepage, fonctionnalités (+ 11 slugs), tarifs, démo, essai, FAQ, contact, à-propos  
- Piliers SEO : `/logiciel-entreprise-nettoyage`, `/logiciel-planning-nettoyage`, `/logiciel-facturation-proprete`  
- Blog `/blog` + `/blog/[slug]` (8 articles courts in-memory)  
- Ressources, guides, comparatifs, témoignages, cas clients  
- Landing pages `/lp/*` et ads v1/v2  
- Design tokens V1 : navy `#0f1f33` + emerald `#12b76a`, Montserrat + Open Sans  
- **Archive V1 homepage :** `/v1` (`src/app/v1/page.tsx`) — **NOINDEX, ne pas supprimer**

### Ce que l’utilisateur n’aime pas (V1)
- Look trop “SaaS générique B2B” (fog gris, cartes partout, peu d’âme métier)  
- Branding faible hors nav (le premier viewport pourrait être n’importe quel outil)  
- Pas assez **orienté ménage / propreté** visuellement  
- Blog trop mince pour le SEO  
- Messaging trop centré “Stop Excel” sans raconter les **univers clients** (bureaux, syndic, pro, fin de chantier)

---

## 1. Mission globale V2

Refondre **tout le site marketing** pour qu’il soit :

1. **Beaucoup plus esthétique** — composition soignée, typographie expressive, atmosphère, motion intentionnelle (2–3 motions max par page clé), images métier réelles ou très crédibles  
2. **Orienté ménage / propreté** — on doit *voir* et *sentir* le métier dès le premier écran  
3. **Orienté segments** — bureaux, syndics, professionnels, fin de chantier (hubs + parcours)  
4. **SEO-first** — blog amplifié, piliers, maillage interne, schema, content calendar  
5. **Conversion-ready** — CTAs clairs (essai 2 mois / démo), trust, preuves, FAQ  
6. **Sans casser** login, signup, API lead, tracking GTM, LPs ads (ou les restyler dans un sprint dédié)  
7. **En gardant V1** accessible sur `/v1` comme référence visuelle

### Objectifs mesurables (à viser)
- Temps de compréhension “c’est pour mon métier” < 5 secondes sur la home  
- Blog : passer de ~8 articles courts à une **usine à contenu** (structure + 25–40 articles seed)  
- Au moins **4 pages verticales** segment (bureau / syndic / pro / fin de chantier)  
- Core Web Vitals verts ; mobile impeccable  
- Accessibilité : focus visible, contraste, landmarks, alt textes métier  

---

## 2. Direction artistique V2 (design system à inventer puis figer)

### Principes durs (obligatoires)
- **Une composition** sur le premier viewport (pas un dashboard marketing)  
- **Brand first** : le nom **PROGESTI** doit être un signal hero-level, pas un logo nav seul  
- **Test marque** : si on enlève la nav, on doit encore savoir que c’est PROGESTI + propreté  
- **Typographie expressive** — éviter Inter / Roboto / Arial / system-ui comme face principale. Remplacer ou compléter Montserrat/Open Sans si trop “template SaaS”  
- **Fond vivant** : pas de fond plat uni ; gradients subtils, textures “propre / clair / air”, lumière, motifs discrets liés à l’ordre / la propreté (pas de stock clipart éponge)  
- **Hero full-bleed** sur home & landings promo : image/atmosphère edge-to-edge, pas une carte média inset  
- **Budget hero** : marque + 1 headline + 1 phrase + groupe CTA + 1 visuel dominant — **pas** de stats, pas de chips flottants, pas de “cette semaine”, pas de cards dans le hero  
- **Pas d’overlays** (badges flottants, stickers promo) sur le média hero  
- **Cards** : par défaut non. Autorisées seulement pour interactions (pricing, formulaires, FAQ). Si retirer bordure/ombre/fond ne casse rien → pas de card  
- **Une job par section** : 1 titre, 1 phrase support  
- **Ancre visuelle réelle** : agents en intervention, bureaux propres, parties communes, fin de chantier, téléphone pointage — pas seulement des gradients abstraits  
- **Motion** : 2–3 intentions (révélation, léger parallax, transition CTA) — pas de bruit  
- **Éviter les clichés IA** : pas de purple-on-white, pas cream+terracotta+serif broadsheet, pas dark mode forcé, pas glow néon, pas pills rounded-full partout, pas multi-ombres empilées, pas d’emojis  

### Direction colorielle proposée (à valider puis coder en CSS variables)
S’éloigner du couple navy/emerald “startup générique” **sans perdre la reconnaissance** :

Option recommandée — **“Propreté claire / confiance métier”** :
- Fond : blanc cassé froid légèrement bleuté + zones “air” (très claire)  
- Encre : bleu ardoise profond (pas noir pur)  
- Accent primaire : **vert propreté** plus mat / moins “fintech neon” (garder une famille verte pour continuité marque)  
- Accent secondaire : bleu pétrole discret (syndics / bureaux / sérieux)  
- Accent ponctuel : ambre doux uniquement pour alertes / archive V1  

Tout doit vivre dans `globals.css` via `:root` + `@theme inline` (Tailwind 4).  
Les LPs ads qui hardcodent `#12B76A` / `#0F1F33` doivent **converger** vers les tokens V2 dans un sprint dédié.

### Direction photo / illustration
- Photos : bureaux au petit matin, agent avec chariot, hall d’immeuble, chantier presque livré, tablette/pointage en main  
- Mockups produit : garder `/dashboard-mockup-opt.webp` et `/hero-mockup-opt.webp` au début, puis remplacer par captures plus “métier”  
- Interdits : stock kitsch (femme avec plumeau cartoon), selfies, overlays texte sur photos sales  

### Voice & tone (FR)
- Tutoiement ou vouvoiement ? → **vouvoiement professionnel** (décideurs d’entreprises de nettoyage, syndics, gérants)  
- Vocabulaire : sites, passages, agents, vacation, contrat multi-sites, fin de chantier, parties communes, cahier des charges, preuve terrain, pointage  
- Éviter : “révolutionnez”, “IA magique”, jargon Silicon Valley  
- Promesse claire : **organiser le ménage pro comme un métier**, pas comme un tableur  

### Copy home V2 (direction — à écrire proprement)
- Headline type : ancré métier + bénéfice temps / contrôle  
  Ex. direction : « Le logiciel qui organise votre nettoyage professionnel — bureaux, syndics, chantiers. »  
- Sous-ligne : planning → terrain → facture, essai 2 mois sans CB  
- Ne plus ouvrir uniquement sur “Stop Excel” (peut rester une section, plus le hero unique)

---

## 3. Architecture de site V2 (IA + SEO)

### Navigation proposée
**Primaire :** Fonctionnalités · Solutions (mega) · Tarifs · Blog · Démo  
**Secondaire :** FAQ · Contact · Connexion · Essai gratuit  

**Mega “Solutions” :**
- Nettoyage de bureaux  
- Syndics & copropriétés  
- Professionnels & commerces  
- Fin de chantier  
- Auto-entrepreneurs & petites équipes (héritage V1)

### Nouvelles routes à créer
| Route | Intent |
|-------|--------|
| `/solutions/bureaux` | Vertical bureaux / tertiaire |
| `/solutions/syndics` | Vertical syndics / parties communes |
| `/solutions/professionnels` | Cabinets, commerces, locaux pros |
| `/solutions/fin-de-chantier` | Remise en état / ponctuel |
| `/blog` (refonte) | Hub SEO éditorial |
| `/blog/categorie/[slug]` | Archives par catégorie |
| `/ressources` (enrichir) | Hub piliers + guides + outils |
| (option) `/glossaire` | Termes métier → SEO longue traîne |

### Routes à conserver et restyler
Toutes les pages existantes listées en §0 — surtout piliers SEO, tarifs, fonctionnalités, essai, LPs.

### Archive
- `/v1` reste noindex  
- Option : `/v1/notes` doc interne (non publique) si besoin  

---

## 4. Blog SEO — cahier des charges détaillé

### Objectif
Faire du blog un **moteur d’acquisition organique** pour requêtes :
- logiciel entreprise nettoyage / propreté  
- planning agents nettoyage  
- facturation propreté  
- pointage agents ménage  
- logiciel syndic nettoyage / parties communes  
- fin de chantier checklist / remise en état  
- alternative Propret / Excel nettoyage  

### Structure technique
- Garder App Router `/blog` + `/blog/[slug]`  
- Enrichir le modèle dans `site.ts` **ou** migrer vers MDX (`content/blog/*.mdx`) si le volume le justifie (recommandé dès Sprint blog)  
- Chaque article : title, slug, category, excerpt, **date**, **updatedAt**, **readingTime**, **cover**, **seoTitle**, **seoDescription**, **keywords**, body riche (H2/H3, listes, CTA interne)  
- Schema `BlogPosting` + breadcrumb  
- Maillage : article → pilier → solution verticale → essai/démo  
- Related posts (3)  
- CTA bas d’article sticky soft (pas agressif)

### Catégories (étendre)
1. Guides opérationnels  
2. Conseils métier propreté  
3. Comparatifs & alternatives  
4. Études de cas (même fictives marquées “exemple” tant que pas de vrais clients)  
5. Nouveautés produit  
6. **Bureaux & tertiaire** (nouvelle)  
7. **Syndics & immobilier** (nouvelle)  
8. **Fin de chantier** (nouvelle)  
9. **Réglementation / bonnes pratiques** (nouvelle — prudence juridique, disclaimer)

### Calendrier éditorial seed (minimum 30 sujets — à produire sur plusieurs sprints)

**Cluster Planning**
1. Organiser le planning d’une équipe multi-sites  
2. Fréquences de ménage bureaux : modèle hebdo / mensuel  
3. Remplacer WhatsApp pour les absences agents  
4. Backup agent : méthode pour éviter les sites orphelins  
5. Planning fin de chantier vs entretien récurrent  

**Cluster Terrain / qualité**
6. Pointage mobile : réduire les litiges d’heures  
7. Bons d’intervention et preuves photos  
8. Contrôle qualité parties communes (syndic)  
9. Checklist ouverture / fermeture locaux pros  
10. Géolocalisation : ce qu’il faut expliquer aux agents  

**Cluster Facturation / admin**
11. Du pointage à la facture sans Excel  
12. Facturer une fin de chantier sans oublis  
13. Contrats multi-sites : renouvellements  
14. Prépaie : préparer les variables sans chaos  
15. Choisir Starter / Pro / Premium  

**Cluster Segments**
16. Logiciel nettoyage de bureaux : critères  
17. Travailler avec un syndic : contraintes d’accès & reporting  
18. Ménage cabinet médical : hygiène & plannings  
19. Remise en état après travaux : process commercial + ops  
20. AE propreté : démarrer sans usine à gaz  

**Cluster Comparatif / switch**
21. PROGESTI vs Propret (mise à jour)  
22. Passer d’Excel à un logiciel sans chaos  
23. Checklist essai gratuit 14 jours (même si essai 2 mois)  
24. Quand rester sur Excel (honnêteté = confiance)  
25. Erreurs fréquentes à la migration  

**Cluster SEO longue traîne**
26. Logiciel planning nettoyage : guide complet  
27. Logiciel facturation propreté  
28. Gestion stock consommables multi-sites  
29. Tableaux de bord rentabilité chantier vs contrat  
30. FAQ décideur : sécurité, hébergement, résiliation  

Chaque article seed : **800–1500 mots** utiles, pas du filler ; H1 unique ; meta description ; 2–4 liens internes ; 1 CTA.

### Interlinking map (principe)
```
Article cluster → Page pilier → Page solution → Fonctionnalité → Essai/Démo
     ↓                ↓
   Blog hub      Ressources
```

---

## 5. Contenu pages clés — wireframes textuels

### Home `/`
1. **Hero full-bleed** — marque PROGESTI dominante, headline métier, 1 phrase, CTA Essai + Démo, visuel propreté edge-to-edge  
2. **Univers** — 4 entrées (bureaux / syndics / pro / fin de chantier) sans cards gadget : liens typographiques + image ancrée  
3. **Parcours produit** — planning → pointage → facture (1 section, 3 temps)  
4. **Preuve / avant-après** — Excel/WhatsApp vs PROGESTI (restyler, moins “tableau Excel SaaS”)  
5. **Modules** — 6 modules phares + lien all  
6. **Tarifs teaser**  
7. **Blog / ressources** (3 derniers articles)  
8. **FAQ courte**  
9. **CTA final atmosphérique**  

### Solutions verticales (template commun)
- Hero métier (photo du segment)  
- Douleurs spécifiques  
- Comment PROGESTI répond (modules liés)  
- Scénario “journée type”  
- FAQ segment  
- CTA essai  

### Blog hub
- Intro SEO courte  
- Filtres catégories  
- Grille éditoriale soignée (pas cards lourdes)  
- Newsletter optionnelle plus tard (ne pas bloquer)

---

## 6. Technique & contraintes d’implémentation

### Do
- Next.js App Router, Server Components par défaut  
- Réutiliser `ButtonLink`, `LeadForm`, tracking `lib/tracking.ts`, `cta.ts`  
- Metadata + OG + sitemap + robots à jour  
- Images `next/image`, formats webp, sizes corrects  
- Français `lang="fr"`  
- Mobile CTA bar cohérente V2  

### Don’t
- Supprimer `/v1`  
- Casser `/api/lead`  
- Introduire une lib UI lourde sans besoin  
- Hardcoder des secrets  
- Réécrire l’app produit (`/app`, ProductShell) sauf restyle marketing chrome  
- Committer sans demande explicite de l’utilisateur  

### Performance
- Pas de JS inutile sur home  
- Fonts `display: swap`, subset latin  
- Lazy sections below fold si pertinent  

### Analytics
- Conserver GTM + CookieConsent  
- Nouveaux eventPayload `cta: "v2_..."` pour distinguer  

---

## 7. Plan de sprints (détaillé)

> Chaque sprint = 1 PR mentale / 1 session agent.  
> Definition of Done commune : build OK, mobile OK, pas de régression CTA essai/démo, `/v1` intact.

---

### SPRINT 0 — Kickoff & garde-fous (0.5–1 j)
**But :** sécuriser l’existant avant refonte.  
**Tâches :**
- Vérifier `/v1` noindex + bannière archive  
- Snapshot notes design V1 dans `docs/V1-ARCHIVE.md` (tokens, fonts, critiques)  
- Lister pages live vs LPs ads  
- Décider : MDX blog ou enrichment `site.ts` (recommandation : MDX si >20 articles)  
**DoD :** doc kickoff + `/v1` accessible.

---

### SPRINT 1 — Design system V2 (fondations) (1–2 j)
**But :** nouvelles variables, typos, utilitaires, composants de base.  
**Tâches :**
- Refondre `globals.css` (tokens V2)  
- Choisir 2 fonts (display + body) expressives, chargées dans `layout.tsx`  
- Restyler `ButtonLink`, Header, Footer (brand signal fort)  
- Créer primitives : `Section`, `Eyebrow`, `Lead`, `SurfaceAtmosphere` (sans cards inutiles)  
- Documenter tokens dans `docs/DESIGN-SYSTEM-V2.md`  
**DoD :** Header/Footer V2 live ; home encore V1-content OK mais chrome V2 ; contraste OK.

---

### SPRINT 2 — Homepage V2 complète (2–3 j)
**But :** nouvelle home esthétique & métier.  
**Tâches :**
- Réécrire `src/app/page.tsx` selon wireframe §5  
- Hero full-bleed propreté + brand  
- Section 4 univers  
- Parcours planning→facture  
- Intégrer mockups existants  
- Motion 2–3  
- Metadata / OG home  
**DoD :** home V2 shippable ; `/v1` compare côté à côté.

---

### SPRINT 3 — Pages Solutions (4 verticales) (2–3 j)
**But :** orienter le site vers bureaux / syndics / pro / fin de chantier.  
**Tâches :**
- Créer template `SolutionLanding`  
- 4 pages contenu FR riche  
- Mega-nav Solutions  
- Maillage depuis home  
**DoD :** 4 URLs indexables + sitemap.

---

### SPRINT 4 — Fonctionnalités & piliers SEO restyle (2 j)
**But :** aligner `/fonctionnalites`, piliers logiciels, alternative-propret sur V2.  
**Tâches :**
- Restyler list + pages modules  
- Enrichir copy piliers avec segments  
- Internal links vers Solutions + Blog  
**DoD :** cohérence visuelle site-wide hors LPs ads.

---

### SPRINT 5 — Tarifs, essai, démo, FAQ, contact (1–2 j)
**But :** tunnels conversion au look V2.  
**Tâches :**
- `PricingTable` V2 (sans cards excessives)  
- Pages essai / démo / FAQ / contact / rendez-vous  
- Trust & garanties  
**DoD :** parcours essai intact (URLs cta).

---

### SPRINT 6 — Blog technique V2 (fondations SEO) (2 j)
**But :** usine à contenu.  
**Tâches :**
- Migrer ou étendre modèle articles (MDX recommandé)  
- Hub `/blog` redesign  
- Template article (TOC optionnel, related, CTA, schema)  
- `/blog/categorie/[slug]`  
- Mettre à jour `sitemap.ts`  
**DoD :** 8 articles existants migrés sans 404 (rediriger slugs si besoin).

---

### SPRINT 7 — Blog contenu batch A (10 articles) (2–3 j)
**But :** volume SEO cluster planning + terrain.  
**Tâches :** rédiger/intégrer sujets 1–10 du calendrier §4  
**DoD :** 10 articles live, maillage, metas.

---

### SPRINT 8 — Blog contenu batch B (10 articles) (2–3 j)
**But :** clusters facturation + segments.  
**Tâches :** sujets 11–20  
**DoD :** idem.

---

### SPRINT 9 — Blog contenu batch C (10 articles) + hub Ressources (2 j)
**But :** comparatifs + longue traîne + `/ressources` utile.  
**Tâches :** sujets 21–30 ; page ressources en véritable hub  
**DoD :** ≥30 articles ; ressources linkées.

---

### SPRINT 10 — Preuves sociales & cas d’usage (1–2 j)
**But :** crédibilité.  
**Tâches :**
- Pages témoignages / cas-clients : structure honnête (placeholders clairement marqués si pas de vrais avis)  
- Mini “journée type” par segment  
**DoD :** pas de faux avis présentés comme réels.

---

### SPRINT 11 — LPs marketing `/lp/*` au design V2 (1–2 j)
**But :** cohérence campagnes non-ads.  
**Tâches :** restyle `LandingTemplate` + pages simplifier / essai-2-mois / alternative / integration  
**DoD :** même design system, tracking conservé.

---

### SPRINT 12 — Ads LPs v1 & v2 restyle (2 j)
**But :** ads plus esthétiques sans tuer la conversion.  
**Tâches :**
- Aligner `AdsCaptureLanding` + `AdsSalesLanding` sur tokens V2  
- Conserver formulaires, campagnes, noindex  
- A/B : garder structure longue forme v2 (pain / before-after / FAQ)  
**DoD :** `/lp/ads/*` conversion + look V2.

---

### SPRINT 13 — SEO technique & schema (1–2 j)
**But :** fondations search.  
**Tâches :**
- JSON-LD Organization / SoftwareApplication / FAQPage / BlogPosting / BreadcrumbList  
- Canonicals, OG images par template  
- Audit titres H1 uniques  
- `robots.ts` / `sitemap.ts` complets (exclure `/v1`, ads)  
**DoD :** rich results prêts ; pas de noindex accidentel sur pages money.

---

### SPRINT 14 — Performance & accessibilité (1 j)
**But :** polish.  
**Tâches :** Lighthouse mobile, alt, focus, contrastes, reduce-motion  
**DoD :** LCP/CLS sains sur home + article type.

---

### SPRINT 15 — Micro-interactions & storytelling produit (1–2 j)
**But :** présence premium.  
**Tâches :** 2–3 motions home, transition sections, hover typographiques, éventuellement scroll doux démo  
**DoD :** motion utile, désactivable `prefers-reduced-motion`.

---

### SPRINT 16 — Contenu légal / confiance / à-propos (0.5–1 j)
**But :** pages annexes au ton V2.  
**Tâches :** à-propos, mentions, CGV, confidentialité (style only + clarifications si besoin)  
**DoD :** footer cohérent.

---

### SPRINT 17 — Glossaire métier (optionnel SEO) (1–2 j)
**But :** longue traîne.  
**Tâches :** 20–40 termes (vacation, parties communes, bon d’intervention…)  
**DoD :** index + pages terme + maillage blog.

---

### SPRINT 18 — QA globale & freeze V2.0 (1 j)
**But :** release.  
**Tâches :**
- Checklist routes  
- Comparer `/` vs `/v1`  
- Tester lead form, essai, démo, mobile CTA  
- Corriger régressions  
**DoD :** V2.0 déclarée ; doc `docs/RELEASE-V2.md`.

---

### SPRINT 19 — Content ops (récurrent)
**But :** rythme éditorial.  
**Cadence :** 2 articles / semaine minimum  
**Tâches :** brief → rédaction → maillage → publish → update sitemap  
**DoD :** process documenté dans `docs/BLOG-OPS.md`.

---

### SPRINT 20 — Optimisation conversion (post-launch)
**But :** améliorer trial starts.  
**Tâches :** heatmaps/hypothèses, variantes CTA, social proof réel dès dispo, retirer placeholders  
**DoD :** itérations mesurées (events GTM).

---

## 8. Prompt “session agent” (à coller tel quel pour démarrer)

```text
Tu travailles sur PROGESTI (web Next.js 16, dossier web/).

Lis et suis intégralement : docs/PROMPT-REFONTE-V2.md

Contexte :
- Logiciel pro nettoyage / propreté (bureaux, syndics, professionnels, fin de chantier).
- L’utilisateur n’aime pas le look V1 (SaaS générique). On refond tout le marketing.
- Archive obligatoire : /v1 (src/app/v1/page.tsx) — NE PAS SUPPRIMER, noindex.
- Offre : dès 29,99€ HT/mois, essai 2 mois sans CB, tous modules inclus.
- Stack : App Router, Tailwind 4, contenu dans src/lib/site.ts, blog existant à amplifier.

Pour CETTE session, exécute uniquement le SPRINT [NUMÉRO] du document.
Respecte les principes design du §2 (brand first, hero full-bleed, pas de cards inutiles, anti-clichés IA).
Ne commit pas sauf si je le demande.
À la fin : résume fichiers touchés + comment tester.
```

Remplace `[NUMÉRO]` par `0`, `1`, `2`, etc.

---

## 9. Critères d’acceptation globaux V2.0

- [ ] `/v1` intact, bannière archive, robots noindex  
- [ ] Home V2 : brand + métier visibles en 1er viewport  
- [ ] 4 pages Solutions live  
- [ ] Design system documenté + tokens CSS  
- [ ] Blog : structure SEO + ≥30 articles seed  
- [ ] Piliers SEO restylés + maillage  
- [ ] Tarifs / essai / démo fonctionnels  
- [ ] Ads LPs non cassées  
- [ ] Sitemap / schema / perf mobile OK  
- [ ] Ton FR professionnel, orienté ménage  

---

## 10. Hors scope (ne pas faire dans cette refonte)

- Refonte complète de l’application métier authentifiée  
- Vrai CMS headless (sauf si demandé plus tard)  
- App mobile native  
- Changement des prix  
- Faux témoignages présentés comme réels  
- Suppression des campagnes ads  

---

## 11. Références fichiers clés

| Rôle | Chemin |
|------|--------|
| Home live | `src/app/page.tsx` |
| Archive V1 | `src/app/v1/page.tsx` |
| Contenu / blog / plans | `src/lib/site.ts` |
| Tokens | `src/app/globals.css` |
| Layout fonts | `src/app/layout.tsx` |
| Header / Footer | `src/components/layout/*` |
| Ads V2 | `src/components/sections/ads-v2/*` |
| CTAs | `src/lib/cta.ts` |
| Ce prompt | `docs/PROMPT-REFONTE-V2.md` |

---

*Document vivant — mettre à jour après chaque sprint (cases DoD + décisions design).*
