# Jobber → PROGESTI — Teardown v3 + Brief d’exécution

> Live : https://www.getjobber.com/industries/commercial-cleaning-software/  
> Vidéo : `C:\Users\Simon\Desktop\JOBBER.mp4` (126 s)  
> Mesures : CDP viewport 1920×1080 · page ~9039 px · ~26 layers grain  
> Assets PROGESTI : `hero-planning.png`, `screen-telegestion.png/.webp`, `screen-factures.png/.webp`, `screen-passages.webp`, `dashboard-mockup.png`, `hero-mockup.png`

**v1** = liste de sections. **v2** = architecture. **v3** = brief prêt à builder (copy FR rédigée + recettes mock + DoD visuel).

---

## A. Diagnostic : ce qui fait vraiment Jobber (pas le décor)

### A1. Une idée produit, pas une page marketing

Jobber ne « présente pas des features ». Il vend un **système d’exploitation** de l’entreprise de cleaning via un **Product Explorer** :

```
État = (pilier ∈ 4) × (feature ∈ 4)
À chaque changement d’état → 3 choses bougent ensemble :
  1. Liste gauche (underline lime sur feature active)
  2. Visuel droit (composition UI OU photo + overlays)
  3. Bloc texte sous le visuel (H2 SEO + ¶ 2–4 phrases)
```

Sans ce trio synchronisé, la page redevient un zigzag SaaS banal (= `HomeNew` aujourd’hui).

### A2. Formules copy reverse-engineered

| Slot | Formule Jobber | Exemple |
|------|----------------|---------|
| H1 | `{Keyword industry} software to {verbe1} and {verbe2} your {objet}` | Commercial cleaning software to **simplify and scale** your operation |
| Sub hero | `{job}, {job}, and {job}—all from one central hub` | Manage team, deliver service, protect contracts |
| H2 empathie | `Run a world-class {industry} business` | aspiration, pas feature |
| ¶ empathie | `{Douleur1}, {douleur2}, and {douleur3}. {Produit} brings {A}, {B}, and {C} together so {outcome}.` | |
| Pilier | 2 mots, verbe d’ambition (`Work Smarter`, `Boost Profits`) | pas « Modules » |
| Feature | 2–4 mots bénéfice (`Smart scheduling`, `Quotes that convert`) | pas jargon interne |
| H2 panneau | soit **bénéfice** (`Win more high-value contracts`) soit **SEO keyword** (`Invoicing and payment software for…`) | alterne |
| ¶ panneau | 1) promesse chiffrée ou concrète 2) 2–3 mécanismes 3) outcome métier | ~350–550 chars EN |
| Témoignage | citation longue + **bold sur la phrase émotion** (liberté, plus d’appels, contrôle) | strongs mesurés |

### A3. Tokens mesurés (référence craft)

| Élément | Valeur |
|---------|--------|
| Navy deep | `#012939` `rgb(1,41,57)` |
| Chrome dark | `#011B25` |
| Lime CTA | `#A8E300` · texte navy · radius **2px** · pad `16×20` · 18/700 |
| H1 / H2 display | `JobberPro` 50px / 56 lh / **900** |
| H1 largeur | ~408 px (colonne étroite) |
| H2 empathie largeur | ~1032 px (centré) |
| Pilier | 383×64 · pad `16 24 16 64` (icon à gauche) · radius 3px · fw 900 |
| Sub-feature | ~18px / 700 · hauteur ~50 |
| Body | Inter |
| Grain | présent (26 nodes `noise|grain|data:image`) — **obligatoire** pour le feeling |
| Page | ~9k px desktop ≈ 5–6 écrans |

### A4. Types de mocks (3 recettes — critique)

Jobber **n’utilise pas toujours un screenshot**. Trois recettes :

1. **UI stack** — cards qui se chevauchent + ombre (Insights : bar chart + donut + funnel)
2. **UI + contexte** — liste RDV + carte GPS route + pins
3. **Photo métier + overlays** — agent qui nettoie, bords **torn/deckled**, toasts flottants (« New booking request », avis 5★)

`HomeNew` ne fait que la recette 0 : PNG dans une card border. C’est le principal écart craft.

### A5. Journey vidéo (rythme)

| t (s) | Beat |
|------:|------|
| 0–4 | Hero dark + vidéo claim « 6x’d » |
| 5–8 | Empathie + Explorer Work Smarter (appointments + map) |
| 9–14 | Boost Profits (Insights charts) |
| 15–20 | Win Jobs (quote UI) → Get Noticed (photo + overlays) |
| 20–28 | Témoignages ×3 |
| 28–35 | Grille dark 6 features « every interaction » |
| 35–45 | Intégrations → Awards → Support underline |
| 45–70 | Resources + FAQ |
| 70–126 | Sign-up trial (email/password, no CC) |

CTA unique saturé : **Start Free Trial**. Tél + chat = filet high-touch.

### A6. Ce qu’on NE copie PAS

- Lime `#A8E300` / navy Jobber (identité PROGESTI : `blue-deep` + `green-action`)
- Claims volume/stores/awards inventés
- Features marketing US absentes (website builder, Google reviews auto, ACH, Tap to Pay, Gusto)
- Promo « −40% » si non réelle
- Chat widget « Jeanine » clone

### A7. Armes PROGESTI à garder (Jobber ne les a pas ainsi)

1. Prix public **149 € HT** tout inclus  
2. USP : *Fait par des gens du nettoyage*  
3. Modules FR métier : RH, prépaie, impayés, rentabilité site, syndics  
4. Support FR + téléphone affiché  

---

## B. Mapping modules réels → Explorer 4×4

Source : `src/lib/site.ts` → `modules`.

| Pilier PROGESTI | Features (réelles) | Recette mock | Asset de base |
|-----------------|--------------------|--------------|---------------|
| **Travailler mieux** | Planning multi-sites · Pointage/télégestion · Preuves de passages · Remplacements / RH absences | UI+contexte / mobile | `hero-planning`, `screen-telegestion`, `screen-passages` |
| **Protéger la marge** | Devis · Facturation sans ressaisie · Impayés · Rentabilité | UI stack | `screen-factures`, `dashboard-mockup` |
| **Gagner & garder** | Clients & sites · Historique · Preuves donneurs d’ordre · Devis→contrat→facture | UI stack | `hero-mockup`, factures, passages |
| **Tenir la qualité** | App agents · Vision multi-sites · Support métier FR · Un seul outil (anti Excel/WhatsApp) | Photo+overlay **si** photo dispo, sinon UI stack honest | telegestion + planning |

Pilier 4 ≠ « Get Noticed / SEO / site builder ». C’est la version **honnête** : constance ops + preuves + support.

---

## C. Matrice de contenu FR — prête à coller dans le code

> Agent : utiliser **ce texte**, ne pas réécrire en langue SaaS molle.

### Hero

- **H1 :** Logiciel entreprise de nettoyage pour simplifier et faire grandir votre activité  
- **Sub :** Planning, pointage terrain et facturation — tout centralisé pour protéger vos contrats et vos équipes.  
- **CTA unique :** Essai {trialDays} jours gratuit  
- **Trust bar :** Essai sans CB · 149 € HT/mois · 5 utilisateurs · Support FR · {phone}

### Empathie

- **H2 :** Faites tourner une entreprise de propreté exigeante  
- **¶ :** Absences, multi-sites, exigences clients et équipes qu’on ne voit pas sur le terrain : le quotidien est déjà assez dur. PROGESTI réunit planning, pointage et facturation pour que chaque passage soit fait, prouvé, et facturé — sans Excel ni chaos WhatsApp.

### Pilier 1 — Travailler mieux

| Feature | H2 panneau | ¶ |
|---------|------------|---|
| Planning multi-sites & récurrences | Un planning qui suit vos sites, pas l’inverse | Définissez fréquences et affectations une fois : les passages se répètent sans reconstruire la semaine. Vue par agent ou par site, statuts visibles, changements d’urgence sans perdre le fil. |
| Pointage & télégestion | Le terrain remonte tout seul | Les agents pointent sur mobile (arrivée, départ, géoloc). Moins de feuilles papier, moins d’heures contestées, une vision claire de qui est où. |
| Preuves de passages | Des preuves pour vous — et pour le client | Suivez les passages validés et conservez l’historique. Quand un syndic ou un donneur d’ordre demande des comptes, vous répondez avec des faits. |
| Remplacements & absences | Les trous de planning ne cassent plus la journée | Gérez absences et remplacements au même endroit que le planning. L’équipe reste couverte, les sites ne restent pas à découvert. |

**Mock défaut P1 :** composition `hero-planning` + pastille « Aujourd’hui · N passages » + ligne route/sites (CSS), légère overlap.

### Pilier 2 — Protéger la marge

| Feature | H2 panneau | ¶ |
|---------|------------|---|
| Devis professionnels | Des devis clairs qui partent plus vite | Créez et envoyez des devis structurés, rattachés au client et aux sites. Fini les Word perdus : le commercial et l’ops partagent la même base. |
| Facturation sans ressaisie | Du réalisé à la facture, sans retaper | Ce qui est planifié et pointé alimente la facturation. Moins d’oublis, moins d’écarts, des factures alignées sur le terrain. |
| Suivi des impayés | La trésorerie ne se gère pas au feeling | Voyez ce qui est dû, relancez sans tableur parallèle, gardez le fil des litiges. |
| Rentabilité par client / site | Sachez où vous gagnez — et où vous perdez | Tableaux de bord pour lire marges et activité. Des décisions sur des chiffres, pas sur une impression de fin de mois. |

**Mock défaut P2 :** stack `screen-factures` + mini-carte « Impayés » + extrait `dashboard-mockup`.

### Pilier 3 — Gagner & garder les contrats

| Feature | H2 panneau | ¶ |
|---------|------------|---|
| Clients & sites | Toute la relation au même endroit | Fiches clients, sites rattachés, infos d’accès et historique : l’équipe trouve ce qu’il faut sans fouiller trois outils. |
| Historique interventions | La mémoire de vos contrats | Ce qui a été fait, quand, par qui. Utile en litige, en renouvellement, et pour former les nouveaux. |
| Preuves pour donneurs d’ordre | Montrez que le contrat est tenu | Appuyez-vous sur passages et historique pour rassurer syndics et clients pro — sans dossier papier improvisé. |
| Devis → contrat → facture | Un flux, zéro double saisie | Enchaînez les étapes commerciales et ops dans le même logiciel. Ce qui est vendu devient ce qui est planifié, puis facturé. |

**Mock défaut P3 :** `hero-mockup` / passages + overlay « Devis accepté » (UI CSS, pas fake data client).

### Pilier 4 — Tenir la qualité

| Feature | H2 panneau | ¶ |
|---------|------------|---|
| App mobile agents | L’info sur le terrain, pas au téléphone | Planning, pointage, détails d’intervention dans la poche. Moins d’allers-retours avec le bureau. |
| Vision multi-sites | Une entreprise lisible d’un coup d’œil | Sites, équipes, statuts : pilotez sans être sur chaque chantier. |
| Support métier FR | Des gens qui comprennent la propreté | Accompagnement en français, par une équipe qui parle planning, agents et contrats — pas un ticket anonyme. |
| Un seul outil | Sortir d’Excel et WhatsApp | Centralisez pour réduire les erreurs, les oublis et la charge mentale. Un système, une vérité. |

**Mock défaut P4 :** `screen-telegestion` + badge « Support FR » / téléphone.

### Témoignages

- Si **aucun** témoignage réel en repo → section alternative :  
  **H2** « Conçu avec le métier » · 3 preuves factuelles (prix public, modules inclus, support FR) — **pas de faux noms**.
- Si témoignages réels → bold sur la phrase émotion (modèle Jobber).

### Grille dark (6 cases)

Titres : Planning multi-sites · Pointage mobile · Preuves de passage · Devis & factures · Clients & sites · Support FR  
Chacun : 1 ¶ courte + lien `/fonctionnalites/...` ou page SEO existante.

### FAQ (min. 8)

1. C’est quoi un logiciel pour entreprise de nettoyage ?  
2. PROGESTI gère-t-il le planning multi-sites et les récurrences ?  
3. Le pointage mobile fonctionne comment ?  
4. Peut-on facturer à partir du réalisé terrain ?  
5. Est-ce adapté aux syndics / parties communes ?  
6. Combien ça coûte ? Qu’est-ce qui est inclus ?  
7. Combien dure l’essai ? Faut-il une carte bancaire ?  
8. Comment migrer depuis Excel / WhatsApp ?  
9. Combien d’utilisateurs ?  
10. Le support est-il en France ?

Réponses = faits `site.ts` / tarifs — pas de promesse non tenue.

---

## D. Spec composant `IndustryProductExplorer`

```tsx
type Feature = {
  id: string;
  label: string;
  panelTitle: string;
  panelBody: string;
  mock: "planning-map" | "telegestion" | "factures-stack" | "dashboard-stack" | "passages" | "hub";
  href?: string; // "Voir la fonctionnalité"
};

type Pillar = {
  id: string;
  label: string; // 2–3 mots
  icon: "clipboard" | "margin" | "contracts" | "quality";
  features: [Feature, Feature, Feature, Feature];
};
```

**Comportement**
- `activePillar` + `activeFeature` (index)
- Clic pilier → ouvre (exclusive) + `activeFeature = 0` + crossfade mock 150–200ms
- Clic feature → underline accent + swap mock/texte
- Desktop : colonnes ~38 / 62  
- Mobile : ordre pilier → features → mock → texte  
- `aria-expanded` sur piliers ; roving tabindex sur features  
- `prefers-reduced-motion` : pas de fade

**Visuel pilier**
- Fond `blue-deep`, radius 4px, min-h 64px, icon accent à gauche (pad-left ~64)
- Ouvert : chevron up + underline accent **hand-drawn** (SVG stroke irrégulier, pas `border-bottom` plat)

**Mock compositions (CSS)**
- Conteneur relative, cards absolute avec rotate ±1–2°, shadow `0 16px 50px rgba(11,61,110,.12)`
- Option photo : `clip-path` ou masque bords irréguliers + 1–2 toasts blancs

---

## E. Architecture page (ordre final)

1. Nav existante (CTA essai aligné)  
2. Hero dark + grain + trust bar  
3. Empathie  
4. **Product Explorer**  
5. Preuve (témoignages réels OU preuves factuelles)  
6. Grille dark 6  
7. Tarif 149 € (avantage vs Jobber)  
8. FAQ  
9. CTA final + `MobileCtaBar`

Pas d’intégrations inventées. Pas d’awards inventés.

Route cible : renforcer `/logiciel-entreprise-nettoyage` (SEO déjà aligné) **ou** preview `/preview/jobber-parity` si tu veux valider avant cutover home.

---

## F. PROMPT MAÎTRE v3 (coller tel quel)

```text
Tu builds la landing industry PROGESTI « parity craft Jobber » selon
docs/ANALYSE-JOBBER-ET-PROMPT-SIMILAIRE.md v3.

RÈGLE D’OR
Le Product Explorer doit synchroniser (pilier × feature) → mock composition + H2 + ¶.
Si le mock ne change pas, c’est un échec.

CONTENU
Utilise la matrice FR du §C du doc — ne réécris pas en newspeak SaaS.
Modules uniquement ceux de src/lib/site.ts. Zéro feature inventée.

DESIGN
Tokens PROGESTI (globals.css). Ajoute utility grain/noise. CTA radius ≤6px sur cette page.
Hero : 1 seul bouton primaire. H1 colonne étroite (~26–28rem).
Mocks : compositions overlap (recettes §A4 / §D), assets public/ listés en tête du doc.

IMPLÉMENTATION
1. IndustryProductExplorer.tsx + data matrix typée
2. Page sur /logiciel-entreprise-nettoyage (rewrite) OU /preview/jobber-parity
3. Hero, empathie, preuve, grille dark, tarif, FAQ, CTA
4. Metadata pageMeta SEO
5. Mobile + a11y accordion
6. Lint clean

DoD — TOUT doit être vrai
□ Explorer 4×4, swap mock+copy visible sur chaque feature
□ Aucun 2e CTA bouton dans le hero
□ Aucun claim inventé / pas de lime Jobber
□ Grain sur dark et paper
□ FAQ ≥8 alignée SEO nettoyage
□ Prix 149 € visible
□ Comparé côte à côte avec JOBBER.mp4 : même densité d’exploration
  (pas le même look)

Commence par Explorer, puis le reste.
```

---

## G. Micro-prompt

```text
Exécute docs/ANALYSE-JOBBER-ET-PROMPT-SIMILAIRE.md §F (v3).
Matrice §C obligatoire. DoD §F. Product Explorer d’abord.
```

---

## H. Barème de qualité (pour juger le résultat)

| Note | Signification |
|-----:|---------------|
| 3/10 | Zigzag features + screenshots (≈ HomeNew) |
| 5/10 | Accordion sans swap mock |
| 7/10 | Explorer OK, mocks encore plats, copy moyenne |
| 9/10 | Explorer + compositions + copy matrice + grain + FAQ/tarif |
| 10/10 | + photo métier overlays + motion soignée + preuves réels |

La v1/v2 du prompt peinaient à dépasser 5. **v3 vise 9** en fournissant copy + recettes mock + DoD — plus seulement « inspire-toi de Jobber ».
