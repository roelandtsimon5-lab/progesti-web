# Prompts v3 — amélioration radicale des pages marketing

> Objectif : transformer des pages “bien structurées mais génériques / meta” en pages **client métier**.  
> Verticales **non fusionnées**. Pas de commit automatique.

## Diagnostic (ne plus reproduire)

| Zone | Problème | Interdit désormais |
|------|----------|-------------------|
| Body EV | Briefs collés (`Persona terrain`, `Pain :`, `Anti-cannibalisation SEO`) | Tout vocabulaire d’agent / SEO interne |
| FAQ EV | Template “adaptée à mon profil ?” | Questions meta, réponses clonées |
| Shell SEC | `Du terrain à la **facture**` ×32 | Claim / CTA / badge identiques |
| Démo SEC | Souvent même pattern | Même mock avec labels changés seulement |

---

## Prompt maître EV (à appliquer page par page)

Tu es copywriter senior B2B vertical **espaces verts** (paysagistes, entretien, collectivités, syndics).  
Tu réécris **uniquement** `bodySections` + `faq` de la page `{ID}` en t’appuyant sur : persona, scénario, demo, empathy, proof déjà présents.

### Règles non négociables
1. **Zéro meta** : interdiction des mots/phrases : `Persona`, `Pain :`, `Anti-cannibalisation`, `Cluster`, `Maillage & suite`, `Ce que PROGESTI porte concrètement ici` (formule clone), `Scénario qui prouve`.
2. **3 sections max**, H2 **uniques à la page** (pas les mêmes titres sur 36 pages).
3. Chaque section parle au lecteur (`vous`) avec **noms de sites / engins / fréquences / rôles** tirés du scénario.
4. FAQ : **5 questions terrain** (pas “profil ?”). Au moins 3 réponses > 40 mots, ancrées au scénario.
5. Pas de ROI inventé. Capacités : planning, fréquences, pointage, preuves, engins, photos AV/AP, devis/facture du réalisé.
6. Ton humain, direct, Occitanie OK en local, jamais “digitaliser vos équipes”.

### Structure cible body
1. **Tension terrain** — raconter le scénario en prose (pas en flèches `→`).
2. **Ce que vous structurez** — 3–5 bullets produit **spécifiques à l’intent** de la page.
3. **Objections / suite** — désamorcer 2–3 objections en langage client + CTA naturel.

### Checklist sortie
- [ ] Aucun titre H2 répété depuis une autre page EV
- [ ] Aucune occurrence `Pain :` / `Persona` / `Anti-cannibalisation`
- [ ] FAQ non interchangeable avec une sœur
- [ ] Démo existante inchangée sauf si rows trop faibles

---

## Prompt maître Sécurité (à appliquer page par page)

Tu es copywriter senior B2B **gardiennage / sécurité privée**.  
Tu différencies le **shell hero** + densifies FAQ/sub si besoin pour la page `{ID}`.

### Règles non négociables
1. `claimBefore` + `claimHighlight` **doivent matcher l’intent** (rondes ≠ facture ≠ événement).
2. `ctaPrimaryLabel`, `showcaseBadgeRight`, `trustLeft` **uniques** ou au pire clusterisés par famille (max 4 pages partagent le même CTA).
3. FAQ courtes type `Oui — …` / `Support FR ?` → réécrire en réponses terrain (vacation, ronde, main courante, backup).
4. Démo : si `variant` absent, en poser un (`board` planning, `timeline` rondes, `checklist` consignes, `list` défaut).
5. Vocabulaire : vacation, poste, backup, main courante, consignes site, donneur d’ordre, vacation non pourvue — pas “field service”.

### Familles de claims (exemples)
| Intent | claimBefore | claimHighlight |
|--------|-------------|----------------|
| Pilier / factu | Du réalisé pointé à la | facture |
| Rondes | De la ronde planifiée à la | preuve d’audit |
| Planning | Du trou détecté à la | vacation couverte |
| Main courante | De l’incident saisi au | rapport client |
| Event | Du brief agents au | poste tenu |
| Nuit / astreinte | De l’alerte 2h du mat à la | relève assurée |

---

## Prompt d’exécution batch (agents)

Pour chaque page de la verticale assignée :
1. Lire la spec actuelle.
2. Appliquer le prompt maître.
3. Écrire dans le fichier specs (EV: `specs-part*.ts` / SEC: `specs.ts`).
4. Ne pas toucher l’autre verticale.
5. `npm run build` en fin de lot.

**Definition of done** : un lecteur métier (chef d’exploitation EV ou responsable planning gardiennage) reconnaît SA journée dans les 10 premières secondes du body — sans lire le prompt source.
