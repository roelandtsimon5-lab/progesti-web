# PROMPT — Site ULTRA PRO (niveau Jobber / Stripe / Linear)

> Coller ce prompt dans Cursor Agent pour pousser PROGESTI au niveau des leaders SaaS field service.
> Charte couleurs : `src/lib/brand.ts` + `globals.css` (navy `#012939`, lime `#A8E300`).

---

## Rôle

Tu es **directeur artistique + lead front** qui livre des sites B2B à **6 chiffres/mois** de conversion. Tu ne fais pas du « joli » — tu fais du **crédible, dense, calme, cher**.

Référence absolue : [Jobber commercial cleaning](https://www.getjobber.com/industries/commercial-cleaning-software/).

---

## North star (1 phrase)

**Un visiteur dirigeant propreté doit penser : « C’est le logiciel des pros — pas une startup qui a copié un template WordPress. »**

---

## Grille de qualité (score /10 — viser 9+)

| Critère | 6 (actuel) | 9 (ultra pro) |
|---------|------------|---------------|
| **Typo** | 2 polices, titres OK | 1 famille Inter, hiérarchie stricte, tracking -0.03em display |
| **Couleur** | Navy+l lime OK | Lime **uniquement** sur CTA/actif ; jamais en décoration gratuite |
| **Rythme** | Sections alternées | 1 hero dark → blanc/paper → 1 bande chrome max → blanc |
| **Produit** | Explorer fonctionnel | Mock swap + underline lime + ombre unique par recette |
| **Preuve** | Avis + logos | Logos réels + 1 citation hero + chiffre unique |
| **CTA** | Répétés | Essai lime primaire ; démo outline ; tel visible 3× max |
| **Détails** | radius mixtes | **2px partout** (Jobber) ; grain hero ; ombres rgba(1,41,57) |
| **Perf** | 159 pages OK | LCP hero < 2.5s ; pas de flash layout |

---

## Tokens immuables

```
Navy      #012939   hero, titres, footer
Chrome    #011B25   bandes sombres uniques
Lime      #A8E300   CTA essai, underline active, accent hero
Paper     #FAFAFA   sections alternées
Line      #E4E8EB   bordures — jamais blue-mist
Radius    2px       boutons, cards, inputs
Display   800–900   titres ; body 400–500
```

---

## Architecture homepage (ordre sacré)

1. **Hero dark** — H1 2 lignes max, sub 2 lignes, 2 CTA, 1 ligne confiance, preuve sociale compacte, visuel droite (photo + claim lime)
2. **Trust strip** — 1 ligne, pas de paragraphe
3. **Section nav sticky** — underline lime sur actif (pas pill plein)
4. **Product Explorer** — 4 piliers × 4 features, swap mock, H2 SEO sous visuel
5. **Comparatif Excel** — table épurée, colonne PROGESTI lime/10
6. **Showcase** — 1 screenshot max, ombre douce, pas de halo bleu
7. **Avis** — 4 cartes blanches, logos, pas de stats inventées grosses
8. **Modules** — grille claire (PAS dark band — déjà corrigé)
9. **Support** — paper, pas navy
10. **Tarifs** — chiffre 149 € seul hero typographique
11. **FAQ** — 6–8 questions max visibles
12. **FinalPush chrome** — 1 seul bloc sombre bas de page
13. **Footer chrome** — CTA band + 4 colonnes

**Interdit** : 3+ sections navy consécutives · dégradés bleu roi · `#F5F8FB` · Fraunces serif · radius 8px+ sur CTA

---

## Checklist composant par composant

### Header
- [ ] Sticky blur, border `line`, logo navy / lime on dark pages
- [ ] Mega menu : fond blanc, ombre unique, pas de bordure bleue
- [ ] CTA header : `Essai` lime + `Démo` ghost

### Hero
- [ ] Grain overlay (`.industry-hero-bg::before`)
- [ ] Play button lime 64px, texte navy
- [ ] Overlay photo : `from-brand-chrome` pas blue-deep
- [ ] Badges confiance : max 4, border white/15

### Product Explorer
- [ ] Pilier actif : border-left lime 3px
- [ ] Feature actif : underline SVG lime (HandUnderline)
- [ ] Mock : transition opacity 200ms, pas de jump layout

### Cartes (avis, modules, preuve)
- [ ] Fond blanc, border `line`, hover shadow 8%
- [ ] Pas de border-top lime sauf 1 accent max par page

### Formulaires (/demo, /essai-gratuit)
- [ ] Labels uppercase 11px muted
- [ ] Input border line, focus ring lime
- [ ] Submit lime full width mobile

---

## Copy ultra pro (ton)

- **Phrases courtes.** Verbes d'action. Chiffres concrets.
- **Interdit** : « solution innovante », « plateforme tout-en-un », « révolutionner »
- **OK** : « 149 € HT/mois affiché », « essai 7 jours sans CB », « support au 05… »

---

## Prompt d'exécution (coller tel quel)

```
Mission : pousser le site PROGESTI à 9/10 craft Jobber.

1. Lire : globals.css, brand.ts, IndustryLanding.tsx, IndustryProductExplorer.tsx, Header, Footer, ButtonLink.
2. Appliquer tokens brand (navy/lime/paper/line, radius 2px).
3. Typo : Inter single-family, h1 clamp(2rem,4vw,3.15rem), weight 800.
4. Rythme : max 1 section dark hors hero + FinalPush + footer.
5. Section nav : actif = underline lime, pas pill ink.
6. Footer : bg-brand-chrome, band CTA blanc/5%, liens white/70.
7. Hero : corriger tous les blue-deep restants → brand-navy/chrome.
8. Perf : priority image hero, pas de nouveau JS client.
9. Build 159 pages — 0 erreur.
10. Liste ce qui reste P0 humain (vrais logos, vidéo 45s, screenshot produit à jour).

Ne pas toucher : /lp/**, /ancien, /v1, /v2 (archives).
```

---

## P0 humain (hors code)

1. **3–5 vrais logos clients** PNG/SVG fond transparent
2. **Vidéo produit 45s** ou GIF planning/pointage
3. **Screenshot app** à jour (pas mock stale)
4. **1 témoignage vidéo** ou citation signée dirigeant

---

## Definition of Done

- [ ] Build OK
- [ ] Homepage scroll : alternance blanc/paper visible
- [ ] Lime apparaît ≤ 15% surface viewport moyenne
- [ ] Lighthouse mobile perf ≥ 85
- [ ] Comparaison côte à côte Jobber : même **calme** visuel
