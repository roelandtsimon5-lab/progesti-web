# Prompts v4 — améliorer vraiment les pages (master)

> Remplace l’usage “mou” de v3.  
> Verticales **non fusionnées**. Pas de commit.  
> Fichiers cibles : `src/lib/marketing/ev/specs-part*.ts` · `src/lib/marketing/sec/specs.ts`  
> Démos UI : `MarketingDemoSection.tsx` (EV) · `MarketingSecuriteDemo.tsx` (SEC)

---

## 0. Ce que v3 a corrigé — et ce qui reste FAIBLE

| Corrigé v3 | Encore trop faible (à tuer en v4) |
|------------|-----------------------------------|
| Plus de `Persona` / `Pain :` / `Anti-cannibalisation` | H3 clone : `Ce qui se joue concrètement` / `Pourquoi cet angle` |
| Claims SEC différenciés | 3e section EV souvent = même blabla essai 15 j / Occitanie |
| FAQ un peu plus terrain | FAQ « Je suis {persona} — cette page me concerne ? » = encore meta |
| | Body §2 : phrase catalogue « planning, équipes, pointage… » recyclée |
| | Bullets §1 = liste de douleurs sèches, pas de micro-scènes |

**Test d’échec (obligatoire)** : prends le body de la page A, colle-le sur la page B en changeant 3 noms. Si ça passe encore → **FAIL**, réécris.

---

## 1. Prompt agent — une page EV (copier-coller)

```text
RÔLE
Tu es copywriter senior B2B vertical espaces verts (paysagiste / entretien / collectivité / syndic).
Tu n’es PAS un SEO qui parle de clusters. Tu écris pour un gérant qui lit sur son téléphone à 6h50.

PAGE
- ID: {EV-XX}
- Fichier: {chemin specs-partN.ts}
- Lis TOUTE la spec (h1, sub, empathy, demo, proof, body, faq, grid).

MISSION
Réécris UNIQUEMENT : bodySections + faq (+ demo.uiRows si trop génériques).
Ne touche PAS sécurité. Pas de commit.

INTERDITS (si présents = échec)
- Persona, Pain :, Anti-cannibalisation, Cluster, Maillage, “angle « … »”
- “Cette page couvre…”, “les pages sœurs…”, “Je suis X — cette page me concerne ?”
- “Ce qui se joue concrètement”, “Pourquoi cet angle”, “Ce que PROGESTI porte”
- Phrase catalogue identique sur >1 page : “planning d’interventions, équipes, contraintes engins…”
- Bullets “Essai 15 jours / Démo unique / Support Occitanie” comme section produit
- ROI inventé, “digitaliser vos équipes”, “solution tout-en-un”

OBLIGATOIRE
1) 3 bodySections max, H2 100% uniques (vérifie les 35 autres pages EV).
2) Au moins 2 noms propres terrain (site, résidence, commune, engin, équipe) issus de demo/empathy.
3) Section 1 = NARRATION (horaires, décision, conséquence client) — pas une liste de pains.
4) Section 2 = MÉCANIQUE PRODUIT de CETTE page seule (3–5 bullets actionnables, verbes d’exploitation).
5) Section 3 = OBJECTION → RÉPONSE terrain (1 objection dominante, réponse en process, pas en marketing).
6) h3 : titres concrets (ex. “Mardi 6h58 — mini-pelle déjà prise”), jamais meta.
7) FAQ : 5 questions qu’un exploitation poserait à un confrère. 0 question “est-ce pour mon profil”.
8) Au moins 3 réponses FAQ ≥ 45 mots, avec un détail opérationnel (statut, fréquence, écran, rôle).

FORMAT DE SORTIE
- Patch TypeScript prêt à coller (bodySections + faq seulement).
- Puis 5 lignes : (a) H2 choisis (b) noms propres utilisés (c) objection traitée (d) test swap vs page sœur (e) score /10.

DEFINITION OF DONE
Un chef d’exploitation EV reconnaît SA journée en 10 secondes.
Score auto ≥ 8/10 sur la grille §3.
```

---

## 2. Prompt agent — une page Sécurité (copier-coller)

```text
RÔLE
Tu es copywriter senior B2B gardiennage / sécurité privée (vacations, rondes, main courante, backups).
Tu écris pour un responsable planning qui a une vacation non pourvue à 17h45.

PAGE
- ID: {SEC-XX}
- Fichier: src/lib/marketing/sec/specs.ts
- Lis toute la spec.

MISSION
Améliore : claimBefore/Highlight/Sub, showcaseBadge*, cta*, trustLeft, empathy si mou,
bodySections (si encore générique), faq (tuer Oui— / Support FR ?),
demo (variant + uiRows denses : agent, site, horaire, statut).

INTERDITS
- claim “Du terrain à la facture” si la page n’est PAS facturation/pilier factu
- CTA “Essai gratuit 15 j sans CB” générique si un CTA métier existe
- FAQ ≤ 12 mots du type “Oui — …”, “Support FR ?”, “Prix ?”
- Vocabulaire “field service”, “digitaliser”, mélange propreté/EV
- uiRows interchangeables entre rondes et event

OBLIGATOIRE
1) claimHighlight = le NOUN de l’intent (preuve d’audit / vacation couverte / rapport client…).
2) ctaPrimary = verbe + objet métier (“Tester une ronde réelle”, pas “Essayer”).
3) demo.variant cohérent : board=planning, timeline=rondes/nuit, checklist=consignes/preuves, list=agents/faq.
4) Chaque uiRow : Nom site ou agent + horaire ou poste + statut actionnable.
5) body : 2 sections max si déjà bon ; sinon 3. Zéro section “pour qui” générique TPE/multi-sites clonée.
6) FAQ : 5 Q terrain (trou vacation, backup, consignes, audit client, pointage).

SORTIE
- Patch TS des champs modifiés.
- Test swap avec une page sœur SEC.
- Score /10 grille §3.
```

---

## 3. Grille de score (0–10) — seuil de merge page = 8

| Critère | 0–2 | 3–5 | 6–7 | 8–10 |
|---------|-----|-----|-----|------|
| Spécificité terrain | Aucun nom / horaire | 1 détail | 2–3 détails | Scène rejouable |
| Différenciation | Interchangeable | Quasi sœur | Angle clair | Impossible à swapper |
| Produit | Blabla SaaS | Features liste | Features liées au scénario | Verbes d’exploitation |
| FAQ | Template | Mi-template | OK | Confrère → confrère |
| Démo | Labels changés | Rows OK | Rows + variant | On “voit” l’écran |
| Ton | Corporate | Soft SaaS | Direct | Chef d’explo à 6h50 |

**Auto-fail immédiat** si un INTERDIT est présent, quel que soit le reste.

---

## 4. Micro-prompts par champ (quand tu bloques)

### H2 body
```text
Donne 8 H2 candidats pour cette page. Interdits : Ce que / Pourquoi / Comment PROGESTI / Pour qui.
Garde les 3 les plus ancrés dans le scénario (horaire ou objet terrain dans le titre).
```

### Section narration
```text
Réécris en 90–130 mots : départ (heure + contrainte), bascule (décision), enjeu client (qui appelle / qui audite).
Pas de liste. Pas de “vous êtes {persona}” en ouverture si ça sonne fiche LinkedIn — ouvre sur l’événement.
```

### Bullets produit
```text
Transforme chaque feature en puce “quand X → vous faites Y dans l’outil”.
Exemple BAD: “Planning multi-sites”
Exemple GOOD: “Marquer 9 tontes ‘report météo’ sans effacer la fréquence bihebdo du contrat Tilleuls”
```

### Objection
```text
Prends UNE objection. Réponds en 3 étapes process (pas en argumentaire vente).
Finis par le prochain clic utile (pilote N sites / voir démo de CETTE page).
```

### FAQ
```text
Écris 5 questions que deux gérants se poseraient au café des entrepreneurs — pas à Google.
Chaque réponse cite un arteact (statut, écran, photo, vacation, ligne facture).
```

### Démo rows SEC/EV
```text
4 rows max. Colonnes mentales: Objet | Décision/état | Tag.
Au moins 1 row alert/warn et 1 row ok. Horodatage ou créneau sur ≥2 rows.
```

---

## 5. Avant → après (exemples réels du repo)

### EV body — BAD (encore vu post-v3)
> « Vous êtes dirigeant de PME… Ce n’est pas un cas inventé pour une landing… »
> H3 « Pourquoi cet angle (et pas un autre) »
> Bullets essai 15 j / démo unique / support Occitanie

### EV body — GOOD (cible)
> **H2** « 7h12 — neuf pelouses impraticables, l’élagage mercredi ne bouge pas »
> **Body** « L’orage a trempé le nord de la tournée. Avant 8h vous devez sortir l’équipe A des Tilleuls et la coller sur les haies syndic prioritaires, sans toucher au créneau nacelle de mercredi. Si le report n’est pas historisé, le bihebdo disparaît de la tête du chef d’équipe — et du renew. »
> **Bullets** « Statut report météo sur les 9 sites · Fréquence contrat conservée · Nouvel ordre sync mobile équipe A/B »
> **H3** « Ce que le syndic des Tilleuls doit pouvoir lire jeudi »

### SEC claim — BAD
> Du terrain à la **facture** (page rondes)

### SEC claim — GOOD
> De la ronde planifiée à la **preuve d’audit**
> CTA « Tester une ronde réelle » · Badge « Ronde validée » · Row `Q7 quai frigo · 23h41 · scan OK`

### SEC FAQ — BAD
> « Prix ? » / « Oui — verticale /securite… »

### SEC FAQ — GOOD
> « Le client demande le détail de la ronde du 12 mars 22h–6h : je sors quoi en 2 minutes ? »
> Réponse qui cite points de passage, horodatage, écart, export.

---

## 6. Ordre d’exécution recommandé (batch)

### Lot A — EV piliers (d’abord, qualité max)
`EV-01` pilier · `EV-02` hub · `EV-03` entretien · `EV-05` tonte · `EV-10` syndics · `EV-12` planning

### Lot B — EV reste
Toutes les autres `EV-04…EV-36` avec le prompt §1 + score ≥ 8

### Lot C — SEC piliers
`SEC-01` · `SEC-02` · `SEC-03` gardiennage · `SEC-04` rondes · `SEC-11` planning · `SEC-31` vacation non pourvue

### Lot D — SEC reste
Autres `SEC-*` avec prompt §2

Après chaque lot : `npm run build` + spot-check 2 URLs sur `/dashboard-validation`.

---

## 7. Prompt “chef d’orchestre” (si un seul agent fait tout)

```text
Tu améliores les pages marketing Progesti EV puis Sécurité avec docs/prompts-v4-amelioration.md.

Règles:
- Une page à la fois (ou lots A→D). Score ≥ 8 sinon tu réécris.
- Interdits §1/§2 = auto-fail.
- Ne fusionne pas les verticales. Pas de commit.
- Ne régénère PAS via enrich-ev-v2.mjs (il recrée du meta).
- Tu peux t’aider de scripts UNIQUEMENT s’ils produisent du copy non template ;
  sinon édition directe des specs.
- Rapport final: tableau ID | score | H2 phare | interdits restants (0 attendu).
```

---

## 8. Definition of done globale

- [ ] 0 occurrence des INTERDITS EV/SEC dans les specs
- [ ] Aucun H2 body dupliqué à l’identique entre 2 pages d’une même verticale
- [ ] Aucun claimHighlight identique sur 2 intents différents SEC
- [ ] Test swap échoue (pages non interchangeables)
- [ ] Build OK
- [ ] 6 URLs prio revalidables sur `/dashboard-validation`
