# PROMPT — Améliorer les pages PROGESTI (post-validation home)

> **Usage :** coller ce document (ou un sprint) dans Cursor Agent.  
> **Référence absolue :** la home validée `src/components/home/HomeValidated.tsx` (`/` et `/v3-valide`).  
> **Workspace :** `c:\Users\Simon\Desktop\Progesti\web`  
> **Ne pas committer** sauf demande explicite.

---

## 0. Verdict utilisateur (juil. 2026) — lire avant tout

| Version | Verdict | Conséquence |
|---------|---------|-------------|
| Home **validée** (`/`) | **Validée — aimer beaucoup** | = **gold standard**. Toute nouvelle page doit **sentir la même famille**. |
| Preview terrain | **Nulle** | Ne pas reproduire |
| Preview ads | **Nulle** | Ne pas reproduire |
| Preview minimal | **Nulle** | Ne pas reproduire |
| V2 (`/v2`) | Trop claire / vide | Archive seulement |

### Pourquoi les previews ont échoué (analyse obligatoire)

**Terrain** — faux “wow photo” : overlay sombre + mockup recyclé en faux plein écran = cheap, pas crédible, peu de contenu utile, pas de parcours conversion structuré.

**Ads** — “agressif” mal compris : rouge, majuscules, checklist marketing, boîte CTA vide de fond = **cheap ads 2018**, pas une landing qui convertit en B2B propreté. L’agressivité utile = **clarté + preuve + essai 2 mois**, pas le cri.

**Minimal** — “premium” mal compris : blanc + noir + phrases courtes = **site vide**, exactement ce que l’utilisateur détestait en V2. Minimal ≠ absence de substance.

### Règle d’or
> **Améliorer = étendre la home validée**, pas inventer un nouveau style à chaque page.  
> Une variante n’est bonne que si elle garde : densité utile, produit visible, prix, essai, contraste lisible, ton pro.

---

## 1. Ce qui marche dans la home validée (à répliquer)

### Structure (ordre mental)
1. Hero clair (fond `#F5F8FB`) + **mockup produit** + headline bénéfice  
2. Micro-trust sous CTA : sans CB · 29,99 € · modules inclus  
3. **Proof bar** chiffrée (2 mois / 29,99 € / 11 modules / 0 € install)  
4. Section problème (3 douleurs métier)  
5. Solution en 4 temps (Planifier → Pointer → Facturer → Piloter) + image produit  
6. Section bleu profond **lisible** (pourquoi nous / différenciation)  
7. Grille modules  
8. Segments (liste typo soignée, pas cards gadget)  
9. Tarifs publics + CTA  
10. 3 étapes démarrage  
11. Blog / FAQ  
12. `ConversionBlock` final  

### Design
- Typo : Plus Jakarta Sans + DM Sans  
- Bleu confiance + vert **action** (CTA)  
- Sur fond `blue-deep` : texte **blanc / `#B8F5D4`**, jamais vert moyen `#1FA86B` illisible  
- Mockups `/dashboard-mockup-opt.webp`, `/hero-mockup-opt.webp`  
- Cards seulement si interaction (pricing, form)  
- Pas de purple, pas de glow, pas de pills partout  

### Conversion
- CTA primaire = **Essai gratuit 2 mois** (`cta.trialApp`)  
- Secondaire = Démo (`cta.demo`)  
- Différenciateur marché : **2 mois vs 14 jours** (Propret) — honnête, pas mensonger  
- Prix public dès **29,99 € HT/mois**, tous modules inclus  
- Tracking `cta: "v3_..."`  

### Copy
- Vouvoiement pro  
- Vocabulaire : sites, agents, vacations, pointage, syndic, fin de chantier  
- Headline = **bénéfice métier**, pas jargon Silicon Valley  
- Interdit : “révolutionnez”, faux avis, compteurs fake  

---

## 2. Comment faire une BONNE page (checklist DoD)

Avant de dire “terminé”, chaque page doit cocher :

- [ ] On comprend **en 5 secondes** : pour qui + quoi + prochain clic  
- [ ] Au moins **1 ancre produit** (mockup / capture) above or just below fold  
- [ ] Prix **ou** promesse essai visible sans scroller 3 écrans  
- [ ] CTA essai **répété** (hero + fin) ; démo en secondaire  
- [ ] Contraste AA : pas de bleu-sur-bleu / vert-sur-bleu sombre  
- [ ] Même famille visuelle que `HomeValidated` (couleurs, boutons, spacing)  
- [ ] Contenu **spécifique** à la page (pas du lorem / pas 3 phrases vides)  
- [ ] Mobile OK + sticky `MobileCtaBar` sur pages money  
- [ ] Pas de section “titre + 2 lignes sur blanc” sans ancre  

### Interdits (rejets automatiques)
- Refaire un style “terrain / ads / minimal” comme les previews rejetées  
- Hero full-bleed sombre avec mockup flou en fond  
- Landing “criarde” rouge / all-caps / faux urgences  
- Page blanche ultra-minimaliste  
- Inventer des témoignages ou KPI non validés  
- Casser `/v1`, `/v2`, `/v3-valide`  
- Changer les prix / durée d’essai sans validation  

---

## 3. Patterns par type de page

### A. Pages Solutions (`/solutions/[slug]`)
**But :** “c’est pour MON métier” → essai.

Structure type (alignée home) :
1. Hero clair : titre segment + lead douleur + Essai / Démo + mockup  
2. Proof strip court (2 mois · 29,99 € · modules)  
3. 3–4 douleurs **spécifiques** au segment  
4. Comment PROGESTI répond (modules liés, liens `/fonctionnalites/...`)  
5. “Journée type” narrative (6–8 étapes courtes)  
6. FAQ segment (4–5 Q)  
7. `ConversionBlock`  

Segments : bureaux · syndics · professionnels · fin de chantier · AE.

### B. Pages Fonctionnalités / modules
1. Hero : nom module + douleur + CTA  
2. 3 bénéfices concrets  
3. Mockup / illustration  
4. Liens solutions concernées  
5. CTA essai  

### C. Piliers SEO (`/logiciel-...`)
Même famille visuelle + contenu long utile (H2, listes) + maillage blog + ConversionBlock.  
Pas une home miniaturisée vide.

### D. Essai / Démo / Contact
Garder le pattern déjà V3 : hero bleu **lisible** + formulaire above the fold + trust.  
CTA unique dominant.

### E. Landing Ads (`/lp/ads/*`) — vraie agressivité utile
**Agressif = conversion**, pas design trash.

Inspiré des ads qui marchent (Propret, Jobber) + home validée :
1. Headline bénéfice **spécifique** à l’angle campagne (Excel / concurrent / temps perdu)  
2. Sous-ligne : essai 2 mois + 29,99 €  
3. Formulaire court **immédiat** (ou CTA vers essai)  
4. 3 bullets preuve  
5. Avant / après compact (pas criard)  
6. Trust : sans CB, tout inclus, résiliable  
7. FAQ courte  

noindex conservé. Tracking campagne intact.  
**Ne pas** copier `/preview/ads`.

### F. Blog hub / article
Hub : intro courte + liste éditoriale soignée (comme teaser home).  
Article : prose lisible, CTA soft milieu + ConversionBlock bas.

---

## 4. Contenu & différenciation concurrentielle (à utiliser)

| Angle | Message |
|-------|---------|
| vs Propret | Même logique prix public / tout inclus — **essai 2 mois** vs souvent **14 jours** |
| vs Excel | Planning + terrain + facture reliés |
| vs ERP lourds | Mise en place rapide, prix clair, pas de setup 5–15 k€ |
| Segments | Bureaux, syndics, commerces, fin de chantier |

Ne pas dénigrer nommément hors pages prévues (`/alternative-propret`, ads concurrent).

Offre figée :
- Starter 29,99 · Pro 49,99 · Premium 99,99 € HT/mois  
- Essai **2 mois sans CB**  
- Tous modules inclus  

---

## 5. Technique

- Stack : Next.js App Router, Tailwind 4, `ButtonLink`, `ConversionBlock`, `cta.ts`, `LeadForm`  
- Tokens : `globals.css` V3  
- Archives noindex : `/v1`, `/v2`, `/v3-valide`, `/preview/*`  
- Previews rejetées : **ne plus itérer dessus** sauf demande ; priorité = pages live  
- Build doit passer (`npm run build`)  

---

## 6. Plan d’exécution recommandé (sprints courts)

Chaque sprint = 1 type de page, **même qualité que la home**.

| Sprint | Cible |
|--------|--------|
| P1 | 4 Solutions — template + contenus FR riches |
| P2 | Hub + pages Fonctionnalités (11 modules) |
| P3 | Tarifs, essai, démo, contact — polish aligné home |
| P4 | 3 piliers SEO + alternative-propret |
| P5 | LPs `/lp/*` non-ads |
| P6 | Ads `/lp/ads/*` — agressivité **utile** (pattern §3.E) |
| P7 | Blog hub restyle + CTA articles |
| P8 | QA contraste + mobile + tracking |

---

## 7. Prompt session (copier-coller)

```text
Tu travailles sur PROGESTI (dossier web/).

Lis et suis : docs/PROMPT-AMELIORER-PAGES.md
Référence visuelle & structure : src/components/home/HomeValidated.tsx (+ docs/V3-VALIDEE.md)

Contexte :
- L’utilisateur a VALIDÉ la home actuelle.
- Les previews /preview/terrain, /ads, /minimal sont REJETÉES — ne pas s’en inspirer.
- Objectif : porter le même niveau de qualité sur les autres pages (pas inventer un nouveau look).
- Offre : essai 2 mois sans CB, dès 29,99€ HT/mois, tous modules inclus.
- Contraste : sur fond blue-deep → blanc ou #B8F5D4 uniquement.

Pour CETTE session : exécute le sprint [P1|P2|…] du §6.
Livrable : pages live soignées, build OK, résumé des URLs à tester.
Ne commit pas sauf demande.
```

---

## 8. Critère de succès

Une page est bonne si l’utilisateur peut dire :  
**« Ça ressemble à la home validée, c’est clair, ça pousse à l’essai, et ce n’est pas vide. »**

Sinon : refaire, ne pas “ajouter du style”.
