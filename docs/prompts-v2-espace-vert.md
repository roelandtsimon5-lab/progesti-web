# Super prompts v2 — Espaces verts (36)

> **Owner :** verticale ESPACE VERT uniquement (ne pas toucher Sécurité).
> **Fichier v1 (générique) :** `docs/prompts-marketing-espace-vert-securite.md` — historique.
> **Implémentation :** `src/lib/marketing/ev/specs-part1.ts` … `specs-part5.ts` + `MarketingDemoSection` (variants).
> **Validation :** `docs/pages-a-valider.md` · `/dashboard-validation`.
> **Pas de commit** tant que Simon n’a pas demandé.

## Règles v2 (anti-générique) — OBLIGATOIRES

Chaque prompt CI-DESSOUS est un brief d’exécution complet. Interdit : pains copiés-collés, meta tronquées, démo « screenshot générique », mélange propreté/sécurité, claims ROI inventés.

**Charte :** navy #012939 · chrome #011B25 · lime #A8E300 · paper #FAFAFA · warm #F6F8F9 · line #E4E8EB · slate #5C6B73 · radius 2–3px.

**SEO technique :** `pageMeta` + `SoftwareApplicationLd` + `FaqPageLd` · canonical · maillage hub/pilier/sœurs/`/tarifs`/`/essai-gratuit` · sitemap via `listAllMarketingVerticalPaths()`.

## Architecture URLs v2

```
/logiciel-espace-vert     ← pilier money (EV-01)
/espace-vert              ← hub (EV-02)
/espace-vert/{slug}       ← filles (EV-03 … EV-36)
```

Nouveautés v2+ : engins-materiel · photos-avant-apres · replanification-meteo · amenageurs-promoteurs · taille-haies · absences-remplacements · cimetieres-voirie · **dechets-verts** · **plantations-massifs** · **hopitaux-cliniques** · **ecoles-etablissements**.

---

### EV-01 — Logiciel pour entreprise d’espaces verts — planning, terrain, facture

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/logiciel-espace-vert` |
| **Type** | pilier |
| **Mot-clé principal** | logiciel espace vert |
| **H1** | Logiciel pour entreprise d’espaces verts — planning, terrain, facture |
| **Meta title** | Logiciel pour entreprise d’espaces verts — planning,… \| PROGESTI |
| **Meta description** | Angle pilier · Dirigeant PME paysagiste / entretien EV 15–40 salariés · scénario : Orage lundi 7h → 9 tontes impraticables → replanif 2 équipes avant 8h sans lâcher élagage mercredi… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Dirigeant PME paysagiste / entretien EV 15–40 salariés
- **Pains :**
  - chaos planning météo
  - litiges sans preuves
  - facture ≠ réalisé
  - charge mentale gérant
- **Objections :**
  - « Excel suffit »
  - « terrain ne pointera pas »
  - « pas le temps en haute saison »

#### 2. Scénario terrain (non interchangeable)
Orage lundi 7h → 9 tontes impraticables → replanif 2 équipes avant 8h sans lâcher élagage mercredi

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Money pilier logiciel espace vert
- **Anti-cannibalisation :** ≠ pages service/audience — intent global logiciel

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Rejouer le lundi pluvieux (planning multi-sites)
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-01).

---

### EV-02 — Espaces verts — toutes les solutions PROGESTI

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert` |
| **Type** | hub |
| **Mot-clé principal** | solutions espaces verts PROGESTI |
| **H1** | Espaces verts — toutes les solutions PROGESTI |
| **Meta title** | Espaces verts — toutes les solutions PROGESTI \| PROGESTI |
| **Meta description** | Angle hub · Visiteur indécis multi-personas (PME / collectivité / syndic) · scénario : 3 arrivées le même jour : gérant PME 22 sal., DST commune 18k, conducteur travaux syndic preuves… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Visiteur indécis multi-personas (PME / collectivité / syndic)
- **Pains :**
  - ne sait pas quelle page lire
  - peur du fourre-tout
  - intent mélangé
- **Objections :**
  - « c’est pour la propreté ? »
  - « trop de pages »

#### 2. Scénario terrain (non interchangeable)
3 arrivées le même jour : gérant PME 22 sal., DST commune 18k, conducteur travaux syndic preuves

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Hub navigation solutions EV
- **Anti-cannibalisation :** 0 cannibalisation service — pure orientation

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `split`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** 3 parcours cliquables → page fille + écran produit
- **Variant UI :** `split` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `split` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-02).

---

### EV-03 — Logiciel d’entretien d’espaces verts — passages & preuves

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/entretien-espaces-verts` |
| **Type** | service |
| **Mot-clé principal** | logiciel entretien espaces verts |
| **H1** | Logiciel d’entretien d’espaces verts — passages & preuves |
| **Meta title** | Logiciel d’entretien d’espaces verts — passages & pr… \| PROGESTI |
| **Meta description** | Angle service · Resp. exploitation contrats annuels multi-sites (entretien) · scénario : Contrat bihebdo Résidence des Tilleuls → générer tournée S18 → prouver 2 passages manqués rattrapés… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Resp. exploitation contrats annuels multi-sites (entretien)
- **Pains :**
  - fréquences perdues
  - oublis de passage
  - preuves absentes au renew
- **Objections :**
  - « le forfait se gère sur papier »
  - « trop de sites pour paramétrer »

#### 2. Scénario terrain (non interchangeable)
Contrat bihebdo Résidence des Tilleuls → générer tournée S18 → prouver 2 passages manqués rattrapés

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service entretien espaces verts
- **Anti-cannibalisation :** ≠ paysagisme création · ≠ tonte seule

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `checklist`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Paramétrer fréquences multi-prestations sur une résidence
- **Variant UI :** `checklist` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `checklist` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-03).

---

### EV-04 — Logiciel paysagiste — devis, chantiers, facturation

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/paysagisme` |
| **Type** | service |
| **Mot-clé principal** | logiciel paysagiste |
| **H1** | Logiciel paysagiste — devis, chantiers, facturation |
| **Meta title** | Logiciel paysagiste — devis, chantiers, facturation \| PROGESTI |
| **Meta description** | Angle service · Gérant / conducteur travaux création paysagère · scénario : Devis villa signé → planning 4j → conflit mini-pelle avec autre chantier → facture du réalisé… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Gérant / conducteur travaux création paysagère
- **Pains :**
  - écart devis↔terrain↔facture
  - conflit engins
  - avancement opaque
- **Objections :**
  - « mon devis est ailleurs »
  - « chaque chantier est unique »

#### 2. Scénario terrain (non interchangeable)
Devis villa signé → planning 4j → conflit mini-pelle avec autre chantier → facture du réalisé

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service logiciel paysagiste
- **Anti-cannibalisation :** ≠ entretien récurrent forfaitaire

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `timeline`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Flux devis signé → chantier → facture
- **Variant UI :** `timeline` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `timeline` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-04).

---

### EV-05 — Planning tonte multi-sites — sans oublier une pelouse

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/tonte-pelouse` |
| **Type** | service |
| **Mot-clé principal** | planning tonte multi-sites |
| **H1** | Planning tonte multi-sites — sans oublier une pelouse |
| **Meta title** | Planning tonte multi-sites — sans oublier une pelouse \| PROGESTI |
| **Meta description** | Angle service · Chef d’équipe / exploitation tournées tonte volume · scénario : 47 pelouses semaine · 3 autoportées · 1 panne · réorganiser sans oublier le lotissement nord… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Chef d’équipe / exploitation tournées tonte volume
- **Pains :**
  - pelouse oubliée
  - km inutiles
  - fréquence de coupe ratée
- **Objections :**
  - « la tonte c’est simple »
  - « Google Maps suffit »

#### 2. Scénario terrain (non interchangeable)
47 pelouses semaine · 3 autoportées · 1 panne · réorganiser sans oublier le lotissement nord

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service planning tonte multi-sites
- **Anti-cannibalisation :** ≠ entretien global · ≠ printemps saisonnier

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Optimiser tournée tonte + marquer pelouse reportée
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-05).

---

### EV-06 — Logiciel élagage — devis, équipes, preuves chantier

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/elagage` |
| **Type** | service |
| **Mot-clé principal** | logiciel élagage |
| **H1** | Logiciel élagage — devis, équipes, preuves chantier |
| **Meta title** | Logiciel élagage — devis, équipes, preuves chantier \| PROGESTI |
| **Meta description** | Angle service · Entreprise / pôle élagage (grimpe, nacelle) · scénario : Devis 8 sujets + nacelle J+3 → absence grimpeur → bascule équipe + preuve AV/AP pour client… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Entreprise / pôle élagage (grimpe, nacelle)
- **Pains :**
  - créneaux engins
  - preuves chantier
  - équipe qualifiée absente
- **Objections :**
  - « trop spécifique »
  - « sécurité chantier ailleurs »

#### 2. Scénario terrain (non interchangeable)
Devis 8 sujets + nacelle J+3 → absence grimpeur → bascule équipe + preuve AV/AP pour client

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service logiciel élagage
- **Anti-cannibalisation :** ≠ tonte · ≠ taille haies

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `timeline`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Planifier chantier élagage + contraintes nacelle/qualifs
- **Variant UI :** `timeline` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `timeline` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-06).

---

### EV-07 — Désherbage & abords — planning multi-sites

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/desherbage` |
| **Type** | service |
| **Mot-clé principal** | désherbage espaces verts planning |
| **H1** | Désherbage & abords — planning multi-sites |
| **Meta title** | Désherbage & abords — planning multi-sites \| PROGESTI |
| **Meta description** | Angle service · Exploitation désherbage abords (collectivités / syndics) · scénario : 15 ronds-points + cimetière sud · contrôle DST · 2 zones non faites → rattrapage tracé… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Exploitation désherbage abords (collectivités / syndics)
- **Pains :**
  - retours élus/photos
  - zones oubliées
  - méthodes variables
- **Objections :**
  - « c’est du détail »
  - « pas besoin de logiciel »

#### 2. Scénario terrain (non interchangeable)
15 ronds-points + cimetière sud · contrôle DST · 2 zones non faites → rattrapage tracé

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service désherbage / abords
- **Anti-cannibalisation :** ≠ tonte · ≠ entretien global

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `checklist`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Checklist désherbage multi-zones + motifs retard
- **Variant UI :** `checklist` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `checklist` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-07).

---

### EV-08 — Arrosage & irrigation — planifier les passages

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/arrosage-irrigation` |
| **Type** | service |
| **Mot-clé principal** | planning arrosage espaces verts |
| **H1** | Arrosage & irrigation — planifier les passages |
| **Meta title** | Arrosage & irrigation — planifier les passages \| PROGESTI |
| **Meta description** | Angle service · Exploitation arrosage / contrôles irrigation · scénario : Vague de chaleur S28 · 22 sites à contrôler · prioriser massifs exposés + consignes accès… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Exploitation arrosage / contrôles irrigation
- **Pains :**
  - oublis de contrôle
  - canicule
  - plaintes massifs secs
- **Objections :**
  - « on a des programmateurs »
  - « IoT suffit »

#### 2. Scénario terrain (non interchangeable)
Vague de chaleur S28 · 22 sites à contrôler · prioriser massifs exposés + consignes accès

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service arrosage irrigation interventions
- **Anti-cannibalisation :** ≠ IoT irrigation · focus interventions humaines

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `list`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Prioriser contrôles arrosage sous canicule
- **Variant UI :** `list` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `list` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-08).

---

### EV-09 — Espaces verts collectivités — planning & reporting

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/collectivites` |
| **Type** | audience |
| **Mot-clé principal** | logiciel espaces verts collectivités |
| **H1** | Espaces verts collectivités — planning & reporting |
| **Meta title** | Espaces verts collectivités — planning & reporting \| PROGESTI |
| **Meta description** | Angle audience · Responsable EV / DST / conducteur travaux collectivité ou titulaire marché · scénario : Commune 18k · 64 sites · lundi 9h DST veut point avant conseil · totaux écoles/parcs/cimetières… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Responsable EV / DST / conducteur travaux collectivité ou titulaire marché
- **Pains :**
  - reporting élus
  - sites communaux éclatés
  - preuves marché
- **Objections :**
  - « on a déjà un outil marchés »
  - « régie ≠ logiciel privé »

#### 2. Scénario terrain (non interchangeable)
Commune 18k · 64 sites · lundi 9h DST veut point avant conseil · totaux écoles/parcs/cimetières

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Audience collectivités EV
- **Anti-cannibalisation :** ≠ syndics · ≠ grands parcs (site unique étendu)

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `split`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Reporting hebdo marché communal 64 sites
- **Variant UI :** `split` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `split` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-09).

---

### EV-10 — Espaces verts syndics & copropriétés — preuves

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/syndics-coproprietes` |
| **Type** | audience |
| **Mot-clé principal** | espaces verts syndics copropriétés |
| **H1** | Espaces verts syndics & copropriétés — preuves |
| **Meta title** | Espaces verts syndics & copropriétés — preuves \| PROGESTI |
| **Meta description** | Angle audience · Commercial / exploitation EV face aux syndics & conseils syndicaux · scénario : Syndic appelle : « vous n’êtes pas venus » · sortir historique + photos Tilleuls en 30 s… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Commercial / exploitation EV face aux syndics & conseils syndicaux
- **Pains :**
  - litiges passages
  - photos WhatsApp perdues
  - renew sous pression
- **Objections :**
  - « le syndic n’a pas besoin d’accès »
  - « on envoie déjà un mail »

#### 2. Scénario terrain (non interchangeable)
Syndic appelle : « vous n’êtes pas venus » · sortir historique + photos Tilleuls en 30 s

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Audience syndics copropriétés EV
- **Anti-cannibalisation :** ≠ /solutions/syndics (propreté) · verticale EV seule

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `checklist`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Répondre au litige syndic avec preuves horodatées
- **Variant UI :** `checklist` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `checklist` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-10).

---

### EV-11 — Espaces verts entreprises & sites privés

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/entreprises-sites-prives` |
| **Type** | audience |
| **Mot-clé principal** | entretien espaces verts entreprises |
| **H1** | Espaces verts entreprises & sites privés |
| **Meta title** | Espaces verts entreprises & sites privés \| PROGESTI |
| **Meta description** | Angle audience · Commercial / exploitation portefeuille sites privés B2B (ZA, cliniques, hôtels) · scénario : Clinique : tonte 6h30 avant ouverture · entrepôt : badge · showroom : photo mensuelle… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Commercial / exploitation portefeuille sites privés B2B (ZA, cliniques, hôtels)
- **Pains :**
  - créneaux d’accès
  - image site
  - horaires contraints
- **Objections :**
  - « comme un syndic »
  - « trop de consignes »

#### 2. Scénario terrain (non interchangeable)
Clinique : tonte 6h30 avant ouverture · entrepôt : badge · showroom : photo mensuelle

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Audience entreprises sites privés EV
- **Anti-cannibalisation :** ≠ syndics · ≠ aménageurs (chantier livraison)

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Planifier 3 sites B2B avec contraintes d’accès
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-11).

---

### EV-12 — Planning équipes EV multi-chantiers

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/planning-equipes` |
| **Type** | process |
| **Mot-clé principal** | planning équipes espaces verts |
| **H1** | Planning équipes EV multi-chantiers |
| **Meta title** | Planning équipes EV multi-chantiers \| PROGESTI |
| **Meta description** | Angle process · Planificateur / chef d’exploitation multi-équipes EV · scénario : Mardi 6h58 · 3 équipes · 1 arrêt · mini-pelle déjà prise · réaffecter sans trou… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Planificateur / chef d’exploitation multi-équipes EV
- **Pains :**
  - conflits d’affectation
  - absences
  - engins
  - double booking
- **Objections :**
  - « whiteboard suffit »
  - « WhatsApp de l’équipe »

#### 2. Scénario terrain (non interchangeable)
Mardi 6h58 · 3 équipes · 1 arrêt · mini-pelle déjà prise · réaffecter sans trou

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Process planning équipes EV
- **Anti-cannibalisation :** ≠ pages service · complémentaire absences/météo/engins

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Affectation multi-chantiers avec conflit ressources
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-12).

---

### EV-13 — Pointage terrain EV — preuves

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/pointage-terrain` |
| **Type** | process |
| **Mot-clé principal** | pointage terrain espaces verts |
| **H1** | Pointage terrain EV — preuves |
| **Meta title** | Pointage terrain EV — preuves \| PROGESTI |
| **Meta description** | Angle process · Gérant / admin qui a besoin de preuves horodatées terrain · scénario : Équipe B arrive Résidence · pointe · part · litige le lendemain → preuve consultable… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Gérant / admin qui a besoin de preuves horodatées terrain
- **Pains :**
  - feuilles papier
  - heures contestées
  - « on était là » non prouvé
- **Objections :**
  - « flicage »
  - « pas de réseau sur site »

#### 2. Scénario terrain (non interchangeable)
Équipe B arrive Résidence · pointe · part · litige le lendemain → preuve consultable

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Process pointage terrain EV
- **Anti-cannibalisation :** ≠ preuves litige (EV-22) · ici capture du pointage

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `timeline`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Parcours pointage mobile arrivée → départ → historique
- **Variant UI :** `timeline` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `timeline` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-13).

---

### EV-14 — Devis & facturation EV sans double saisie

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/devis-facturation` |
| **Type** | process |
| **Mot-clé principal** | devis facturation espaces verts |
| **H1** | Devis & facturation EV sans double saisie |
| **Meta title** | Devis & facturation EV sans double saisie \| PROGESTI |
| **Meta description** | Angle process · Assistante de gestion / gérant TPE-PME EV · scénario : Chantier haies + tonte forfait + 2h arrachage improvisé → facture complète sans oublier le ponctuel… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Assistante de gestion / gérant TPE-PME EV
- **Pains :**
  - double saisie
  - oublis ponctuels
  - écart devis/facture
- **Objections :**
  - « ma compta suffit »
  - « devis déjà ailleurs »

#### 2. Scénario terrain (non interchangeable)
Chantier haies + tonte forfait + 2h arrachage improvisé → facture complète sans oublier le ponctuel

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Process devis facturation EV
- **Anti-cannibalisation :** ≠ compta complète · flux commercial→réalisé

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `timeline`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Devis → réalisé pointé → facture sans double saisie
- **Variant UI :** `timeline` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `timeline` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-14).

---

### EV-15 — Haute saison EV — tenir le printemps

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/saison-printemps` |
| **Type** | saisonnier |
| **Mot-clé principal** | planning espaces verts printemps |
| **H1** | Haute saison EV — tenir le printemps |
| **Meta title** | Haute saison EV — tenir le printemps \| PROGESTI |
| **Meta description** | Angle saisonnier · Exploitation en pic printemps (mars–juin) · scénario : S14 · charge 140% · prioriser contrats annuels vs devis ponctuels · tenir fréquences critiques… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Exploitation en pic printemps (mars–juin)
- **Pains :**
  - surcharge
  - recrutements CDD
  - clients qui veulent tout en même temps
- **Objections :**
  - « c’est tous les ans »
  - « on survit »

#### 2. Scénario terrain (non interchangeable)
S14 · charge 140% · prioriser contrats annuels vs devis ponctuels · tenir fréquences critiques

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Saisonnier haute saison printemps EV
- **Anti-cannibalisation :** ≠ tonte service · ≠ météo problème

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Tableau de charge printemps + priorisation contrats
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-15).

---

### EV-16 — Automne & hiver EV — ramassage, taille, suivi

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/saison-automne-hiver` |
| **Type** | saisonnier |
| **Mot-clé principal** | entretien espaces verts automne hiver |
| **H1** | Automne & hiver EV — ramassage, taille, suivi |
| **Meta title** | Automne & hiver EV — ramassage, taille, suivi \| PROGESTI |
| **Meta description** | Angle saisonnier · Exploitation automne-hiver (feuilles, tailles, reprises) · scénario : S44 · 30 sites feuilles · 1 souffleur en panne · répartir + planifier tailles hivernales… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Exploitation automne-hiver (feuilles, tailles, reprises)
- **Pains :**
  - ramassage feuilles volume
  - visibilité moindre
  - planifier la morte-saison
- **Objections :**
  - « l’hiver on n’a rien »
  - « pas besoin d’outil »

#### 2. Scénario terrain (non interchangeable)
S44 · 30 sites feuilles · 1 souffleur en panne · répartir + planifier tailles hivernales

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Saisonnier automne hiver EV
- **Anti-cannibalisation :** ≠ printemps · deux intents saisonniers distincts

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `list`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Tournée ramassage feuilles + plan tailles hiver
- **Variant UI :** `list` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `list` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-16).

---

### EV-17 — Multi-sites EV — portefeuille sous contrôle

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/multi-sites` |
| **Type** | process |
| **Mot-clé principal** | logiciel multi-sites espaces verts |
| **H1** | Multi-sites EV — portefeuille sous contrôle |
| **Meta title** | Multi-sites EV — portefeuille sous contrôle \| PROGESTI |
| **Meta description** | Angle process · Dirigeant / exploitation portefeuille 30–200+ sites · scénario : Portefeuille 120 sites · filtre commune + type + retard · sortir les 8 critiques de la semaine… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Dirigeant / exploitation portefeuille 30–200+ sites
- **Pains :**
  - perte de vision
  - oublis géographiques
  - reporting client
- **Objections :**
  - « Excel filtrable suffit »

#### 2. Scénario terrain (non interchangeable)
Portefeuille 120 sites · filtre commune + type + retard · sortir les 8 critiques de la semaine

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Process multi-sites portefeuille EV
- **Anti-cannibalisation :** ≠ audience collectivité · ≠ grands parcs (1 site zones)

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `split`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Vue portefeuille : filtres + retards critiques
- **Variant UI :** `split` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `split` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-17).

---

### EV-18 — Logiciel EV Toulouse & Occitanie

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/toulouse-occitanie` |
| **Type** | local |
| **Mot-clé principal** | logiciel espaces verts Toulouse |
| **H1** | Logiciel EV Toulouse & Occitanie |
| **Meta title** | Logiciel EV Toulouse & Occitanie \| PROGESTI |
| **Meta description** | Angle local · Entreprise EV Toulouse / Occitanie cherchant éditeur local · scénario : PME Tournefeuille / Toulouse métropole · essai sur vrais sites · support joignable 31… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Entreprise EV Toulouse / Occitanie cherchant éditeur local
- **Pains :**
  - éditeur lointain
  - support qui ne connaît pas le terrain sud
- **Objections :**
  - « cloud = pas besoin de local »

#### 2. Scénario terrain (non interchangeable)
PME Tournefeuille / Toulouse métropole · essai sur vrais sites · support joignable 31

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Local Toulouse Occitanie logiciel EV
- **Anti-cannibalisation :** Pas 50 landings villes fantômes — 1 ancre locale réelle

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `list`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Essai local : importer 10 sites périurbains Toulouse
- **Variant UI :** `list` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `list` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-18).

---

### EV-19 — Remplacer Excel & WhatsApp en EV

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/remplacer-excel` |
| **Type** | probleme |
| **Mot-clé principal** | remplacer Excel espaces verts |
| **H1** | Remplacer Excel & WhatsApp en EV |
| **Meta title** | Remplacer Excel & WhatsApp en EV \| PROGESTI |
| **Meta description** | Angle probleme · Gérant fatigué d’Excel + WhatsApp comme OS de l’entreprise · scénario : Migrer 25 sites pilotes · couper le groupe WA planning · garder WA informal… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Gérant fatigué d’Excel + WhatsApp comme OS de l’entreprise
- **Pains :**
  - versioning fichiers
  - messages perdus
  - aucune source de vérité
- **Objections :**
  - « changement trop lourd »
  - « équipes habituées »

#### 2. Scénario terrain (non interchangeable)
Migrer 25 sites pilotes · couper le groupe WA planning · garder WA informal

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Problème remplacer Excel WhatsApp EV
- **Anti-cannibalisation :** ≠ pilier (solution globale) · ici le problème Excel/WA

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `split`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Avant/après : tableur vs semaine planifiée
- **Variant UI :** `split` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `split` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-19).

---

### EV-20 — FAQ logiciel espaces verts PROGESTI

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/faq` |
| **Type** | faq |
| **Mot-clé principal** | FAQ logiciel espaces verts |
| **H1** | FAQ logiciel espaces verts PROGESTI |
| **Meta title** | FAQ logiciel espaces verts PROGESTI \| PROGESTI |
| **Meta description** | Angle faq · Prospect EV avec questions concrètes avant essai · scénario : FAQ interactive : 6 questions métier EV → CTA essai contextualisé… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Prospect EV avec questions concrètes avant essai
- **Pains :**
  - doute verticalité propreté
  - prix
  - mobile
- **Objections :**
  - « c’est un soft de nettoyage »

#### 2. Scénario terrain (non interchangeable)
FAQ interactive : 6 questions métier EV → CTA essai contextualisé

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** FAQ logiciel espaces verts
- **Anti-cannibalisation :** ≠ /faq site global (propreté) — 100% vocabulaire EV

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `checklist`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Parcours FAQ → réponse → essai sur mes sites
- **Variant UI :** `checklist` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `checklist` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-20).

---

### EV-21 — Guide — organiser l’entretien sans chaos

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/guide-organiser-entretien` |
| **Type** | guide |
| **Mot-clé principal** | organiser entretien espaces verts |
| **H1** | Guide — organiser l’entretien sans chaos |
| **Meta title** | Guide — organiser l’entretien sans chaos \| PROGESTI |
| **Meta description** | Angle guide · Nouveau responsable exploitation qui structure l’entretien · scénario : 6 étapes : inventaire → fréquences → tournées → pointage → preuves → facture… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Nouveau responsable exploitation qui structure l’entretien
- **Pains :**
  - pas de méthode
  - sites mal inventoriés
  - fréquences floues
- **Objections :**
  - « on n’a pas le temps d’un guide »

#### 2. Scénario terrain (non interchangeable)
6 étapes : inventaire → fréquences → tournées → pointage → preuves → facture

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Guide organiser entretien espaces verts
- **Anti-cannibalisation :** Contenu éducatif + maillage process — pas money page

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `timeline`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Checklist des 6 étapes avec liens process
- **Variant UI :** `timeline` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `timeline` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-21).

---

### EV-22 — Preuves de passage — finis les litiges

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/preuves-passages` |
| **Type** | probleme |
| **Mot-clé principal** | preuves de passage espaces verts |
| **H1** | Preuves de passage — finis les litiges |
| **Meta title** | Preuves de passage — finis les litiges \| PROGESTI |
| **Meta description** | Angle probleme · Gérant / commercial qui gère litiges « vous n’êtes pas venus » · scénario : Mail syndic agressif 17h · sortir historique + pointages + photo en 1 écran… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Gérant / commercial qui gère litiges « vous n’êtes pas venus »
- **Pains :**
  - accusations
  - renouvellement menacé
  - preuves éparpillées
- **Objections :**
  - « flicage des équipes »

#### 2. Scénario terrain (non interchangeable)
Mail syndic agressif 17h · sortir historique + pointages + photo en 1 écran

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Problème preuves de passage EV
- **Anti-cannibalisation :** ≠ pointage (capture) · ≠ syndic (audience) — intent litige/preuve

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `checklist`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Dossier preuve litige en un écran
- **Variant UI :** `checklist` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `checklist` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-22).

---

### EV-23 — Logiciel EV pour TPE & indépendants

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/petites-entreprises` |
| **Type** | audience |
| **Mot-clé principal** | logiciel paysagiste TPE |
| **H1** | Logiciel EV pour TPE & indépendants |
| **Meta title** | Logiciel EV pour TPE & indépendants \| PROGESTI |
| **Meta description** | Angle audience · TPE / indépendant EV < 10 personnes · scénario : Indépendant + 2 salariés · 18 clients · oublie une haie · perd 1 soir à facturer… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** TPE / indépendant EV < 10 personnes
- **Pains :**
  - soirées Excel
  - oubli client
  - prix perçu élevé
- **Objections :**
  - « trop petit pour un logiciel »
  - « trop cher »

#### 2. Scénario terrain (non interchangeable)
Indépendant + 2 salariés · 18 clients · oublie une haie · perd 1 soir à facturer

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Audience TPE indépendants EV
- **Anti-cannibalisation :** ≠ PME 15–40 (pilier) — angle simplicité/prix

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `list`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Semaine TPE : 18 sites sans tableur du dimanche
- **Variant UI :** `list` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `list` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-23).

---

### EV-24 — Grands parcs & sites étendus

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/grands-parcs` |
| **Type** | audience |
| **Mot-clé principal** | gestion grands parcs espaces verts |
| **H1** | Grands parcs & sites étendus |
| **Meta title** | Grands parcs & sites étendus \| PROGESTI |
| **Meta description** | Angle audience · Exploitation grand parc / domaine / campus (1 site, N zones) · scénario : Parc 28 ha · 12 zones · 2 équipes · prioriser entrée + playground avant massifs fond… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Exploitation grand parc / domaine / campus (1 site, N zones)
- **Pains :**
  - zones à découvert
  - équipes perdues sur le site
  - priorités floues
- **Objections :**
  - « c’est un seul site »

#### 2. Scénario terrain (non interchangeable)
Parc 28 ha · 12 zones · 2 équipes · prioriser entrée + playground avant massifs fond

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Audience / service grands parcs sites étendus
- **Anti-cannibalisation :** ≠ multi-sites (N adresses) — ici 1 adresse N zones

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Planifier par zones d’un grand parc
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-24).

---

### EV-25 — Contrats annuels — suivi d’exécution

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/contrats-annuels` |
| **Type** | process |
| **Mot-clé principal** | contrat annuel entretien espaces verts |
| **H1** | Contrats annuels — suivi d’exécution |
| **Meta title** | Contrats annuels — suivi d’exécution \| PROGESTI |
| **Meta description** | Angle process · Commercial / exploitation cycle de vie contrats annuels · scénario : Novembre · contrat 28k€ · bilan exécution pour conseil syndical · pitch renew… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Commercial / exploitation cycle de vie contrats annuels
- **Pains :**
  - renew sous pression
  - exécution invisible
  - exceptions non tracées
- **Objections :**
  - « le PDF du contrat suffit »

#### 2. Scénario terrain (non interchangeable)
Novembre · contrat 28k€ · bilan exécution pour conseil syndical · pitch renew

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Process contrats annuels entretien EV
- **Anti-cannibalisation :** ≠ entretien (opérer) · ≠ devis/factu (facturer) — cycle renew

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `checklist`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Dossier renouvellement 6 semaines avant échéance
- **Variant UI :** `checklist` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `checklist` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-25).

---

### EV-26 — Engins & matériel EV — conflits ressources

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/engins-materiel` |
| **Type** | process |
| **Mot-clé principal** | planning engins espaces verts |
| **H1** | Engins & matériel EV — conflits ressources |
| **Meta title** | Engins & matériel EV — conflits ressources \| PROGESTI |
| **Meta description** | Angle process · Planificateur sous contrainte engins (mini-pelle, nacelle, autoportée) · scénario : Mini-pelle réservée 2 chantiers le même mardi · détecter conflit · décaler plantation… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Planificateur sous contrainte engins (mini-pelle, nacelle, autoportée)
- **Pains :**
  - double booking engins
  - panne
  - chantier bloqué
- **Objections :**
  - « GMAO ailleurs »
  - « on se téléphone »

#### 2. Scénario terrain (non interchangeable)
Mini-pelle réservée 2 chantiers le même mardi · détecter conflit · décaler plantation

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Process engins matériel EV
- **Anti-cannibalisation :** Pas GMAO industrielle — contraintes dans le planning EV

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Détecter conflit mini-pelle et réaffecter
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-26).

---

### EV-27 — Photos AV/AP — preuves visuelles

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/photos-avant-apres` |
| **Type** | process |
| **Mot-clé principal** | photos avant après espaces verts |
| **H1** | Photos AV/AP — preuves visuelles |
| **Meta title** | Photos AV/AP — preuves visuelles \| PROGESTI |
| **Meta description** | Angle process · Exploitation / commercial qui doit prouver le rendu visuel · scénario : Taille haies syndic · photo avant · après · rattachées à l’intervention… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Exploitation / commercial qui doit prouver le rendu visuel
- **Pains :**
  - photos perdues dans WA
  - pas de AV/AP
  - client conteste le rendu
- **Objections :**
  - « trop long sur chantier »

#### 2. Scénario terrain (non interchangeable)
Taille haies syndic · photo avant · après · rattachées à l’intervention

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Process photos avant après EV
- **Anti-cannibalisation :** ≠ preuves horodatage (EV-22) — preuve visuelle

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `split`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Attacher AV/AP à une intervention haies
- **Variant UI :** `split` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `split` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-27).

---

### EV-28 — Replanification météo — tournées sous la pluie

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/replanification-meteo` |
| **Type** | probleme |
| **Mot-clé principal** | replanification météo espaces verts |
| **H1** | Replanification météo — tournées sous la pluie |
| **Meta title** | Replanification météo — tournées sous la pluie \| PROGESTI |
| **Meta description** | Angle probleme · Gérant / planificateur sous pluie fréquente · scénario : Playbook pluie : marquer reports · basculer haies prioritaires · notifier · garder fréquences… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Gérant / planificateur sous pluie fréquente
- **Pains :**
  - reports en chaîne
  - clients non prévenus
  - fréquences perdues
- **Objections :**
  - « météo auto ? »
  - « on improvise »

#### 2. Scénario terrain (non interchangeable)
Playbook pluie : marquer reports · basculer haies prioritaires · notifier · garder fréquences

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Problème replanification météo EV
- **Anti-cannibalisation :** ≠ pilier (global) · ≠ tonte service — intent pluie/replanif

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Playbook orage : report → bascule → sync mobile
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-28).

---

### EV-29 — EV aménageurs & promoteurs

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/amenageurs-promoteurs` |
| **Type** | audience |
| **Mot-clé principal** | espaces verts aménageurs promoteurs |
| **H1** | EV aménageurs & promoteurs |
| **Meta title** | EV aménageurs & promoteurs \| PROGESTI |
| **Meta description** | Angle audience · Paysagiste / EV sous-traitant aménageurs & promoteurs · scénario : Livraison lotissement · 3 jalons engazonnement · PV réception avec preuves… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Paysagiste / EV sous-traitant aménageurs & promoteurs
- **Pains :**
  - jalons livraison
  - réceptions
  - preuves pour promoteur
- **Objections :**
  - « CCTP ailleurs »
  - « chantier one-shot »

#### 2. Scénario terrain (non interchangeable)
Livraison lotissement · 3 jalons engazonnement · PV réception avec preuves

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Audience aménageurs promoteurs EV
- **Anti-cannibalisation :** ≠ sites privés entretien récurrent B2B

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `timeline`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Suivi jalons chantier aménageur jusqu’à réception
- **Variant UI :** `timeline` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `timeline` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-29).

---

### EV-30 — Taille de haies multi-sites

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/taille-haies` |
| **Type** | service |
| **Mot-clé principal** | planning taille de haies |
| **H1** | Taille de haies multi-sites |
| **Meta title** | Taille de haies multi-sites \| PROGESTI |
| **Meta description** | Angle service · Exploitation taille de haies multi-sites (volume) · scénario : 42 haies trimestre · 2 équipes · 1 accès refusé · reporter sans perdre la fréquence… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Exploitation taille de haies multi-sites (volume)
- **Pains :**
  - haies oubliées
  - saison courte
  - accès riverains
- **Objections :**
  - « comme l’entretien »
  - « comme l’élagage »

#### 2. Scénario terrain (non interchangeable)
42 haies trimestre · 2 équipes · 1 accès refusé · reporter sans perdre la fréquence

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service taille haies multi-sites
- **Anti-cannibalisation :** ≠ élagage arbres · ≠ entretien global

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `checklist`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Tournée haies + accès refusé documenté
- **Variant UI :** `checklist` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `checklist` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-30).

---

### EV-31 — Absences & remplacements équipes EV

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/absences-remplacements` |
| **Type** | process |
| **Mot-clé principal** | remplacement équipe espaces verts |
| **H1** | Absences & remplacements équipes EV |
| **Meta title** | Absences & remplacements équipes EV \| PROGESTI |
| **Meta description** | Angle process · Planificateur gérant absences / remplacements dernière minute · scénario : 6h40 · conducteur autoportée en arrêt · backup + notifier tournée tonte… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Planificateur gérant absences / remplacements dernière minute
- **Pains :**
  - trou d’équipe
  - site à découvert
  - intérim mal affecté
- **Objections :**
  - « SIRH ailleurs »
  - « on appelle »

#### 2. Scénario terrain (non interchangeable)
6h40 · conducteur autoportée en arrêt · backup + notifier tournée tonte

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Process absences remplacements EV
- **Anti-cannibalisation :** Pas SIRH — focus opérationnel planning

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Remplacement express avant départ tournée
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-31).

---

### EV-32 — Cimetières & voiries végétalisées

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/cimetieres-voirie` |
| **Type** | service |
| **Mot-clé principal** | entretien cimetières espaces verts |
| **H1** | Cimetières & voiries végétalisées |
| **Meta title** | Cimetières & voiries végétalisées \| PROGESTI |
| **Meta description** | Angle service · Régie / prestataire cimetières & voiries végétalisées · scénario : Cimetière sud + 8 terre-pleins · désherbage + tonte abords · reporting DST… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Régie / prestataire cimetières & voiries végétalisées
- **Pains :**
  - sensibilité usagers
  - retours élus
  - zones sensibles
- **Objections :**
  - « niche trop petite »

#### 2. Scénario terrain (non interchangeable)
Cimetière sud + 8 terre-pleins · désherbage + tonte abords · reporting DST

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service cimetières voiries végétalisées
- **Anti-cannibalisation :** Niche souvent collectivité — intent recherche dédié

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `list`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Planning cimetière + terre-pleins avec priorités
- **Variant UI :** `list` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `list` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-32).

---

### EV-33 — Évacuation déchets verts — bennes & chantiers

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/dechets-verts` |
| **Type** | service |
| **Mot-clé principal** | évacuation déchets verts espaces verts |
| **H1** | Évacuation déchets verts — bennes & chantiers |
| **Meta title** | Évacuation déchets verts — bennes & chantiers \| PROGESTI |
| **Meta description** | Angle service · Exploitation qui gère évacuation / valorisation déchets verts · scénario : S15 · 12 sites élagage/haies · 3 rotations benne · ne pas laisser branches 48h chez le syndic… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Exploitation qui gère évacuation / valorisation déchets verts
- **Pains :**
  - oublis de benne
  - coûts déchèterie
  - planning saturé printemps
- **Objections :**
  - « c’est logistique pas logiciel »

#### 2. Scénario terrain (non interchangeable)
S15 · 12 sites élagage/haies · 3 rotations benne · ne pas laisser branches 48h chez le syndic

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service déchets verts évacuation EV
- **Anti-cannibalisation :** ≠ élagage (coupe) — intent évacuation/logistique déchets

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `timeline`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Planifier rotations benne liées aux chantiers coupe
- **Variant UI :** `timeline` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `timeline` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-33).

---

### EV-34 — Plantations & massifs — pose et reprises

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/plantations-massifs` |
| **Type** | service |
| **Mot-clé principal** | logiciel plantations massifs paysagiste |
| **H1** | Plantations & massifs — pose et reprises |
| **Meta title** | Plantations & massifs — pose et reprises \| PROGESTI |
| **Meta description** | Angle service · Conducteur travaux plantations / massifs / engazonnement · scénario : Massifs résidence · livraison plants mardi · pose mercredi-jeudi · contrôle reprise J+21… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Conducteur travaux plantations / massifs / engazonnement
- **Pains :**
  - fenêtres de plantation
  - fournitures
  - reprise garantie
- **Objections :**
  - « one-shot pas besoin d’outil »

#### 2. Scénario terrain (non interchangeable)
Massifs résidence · livraison plants mardi · pose mercredi-jeudi · contrôle reprise J+21

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Service plantations massifs EV
- **Anti-cannibalisation :** ≠ paysagisme devis global · focus plantation/massifs

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `checklist`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Chantier plantation : livraison → pose → contrôle reprise
- **Variant UI :** `checklist` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `checklist` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-34).

---

### EV-35 — EV hôpitaux & cliniques — planning contraint

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/hopitaux-cliniques` |
| **Type** | audience |
| **Mot-clé principal** | entretien espaces verts hôpital clinique |
| **H1** | EV hôpitaux & cliniques — planning contraint |
| **Meta title** | EV hôpitaux & cliniques — planning contraint \| PROGESTI |
| **Meta description** | Angle audience · Exploitation EV sites santé (hôpitaux, cliniques, EHPAD) · scénario : Clinique : tonte 6h–8h · zone hélistation interdite · preuve pour direction achats… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Exploitation EV sites santé (hôpitaux, cliniques, EHPAD)
- **Pains :**
  - protocoles accès
  - horaires stricts
  - image / hygiène abords
- **Objections :**
  - « comme un site privé classique »

#### 2. Scénario terrain (non interchangeable)
Clinique : tonte 6h–8h · zone hélistation interdite · preuve pour direction achats

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Audience hôpitaux cliniques EHPAD EV
- **Anti-cannibalisation :** ≠ sites privés génériques — contraintes santé

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `board`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Planning site santé avec créneaux & zones interdites
- **Variant UI :** `board` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `board` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-35).

---

### EV-36 — EV écoles & établissements — hors récré

| Champ | Contenu d’exécution |
|------|---------------------|
| **URL** | `/espace-vert/ecoles-etablissements` |
| **Type** | audience |
| **Mot-clé principal** | entretien espaces verts écoles collèges |
| **H1** | EV écoles & établissements — hors récré |
| **Meta title** | EV écoles & établissements — hors récré \| PROGESTI |
| **Meta description** | Angle audience · Régie / prestataire écoles, collèges, lycées, crèches · scénario : 12 écoles · tonte mercredi AM · pas d’engin pendant récré · planning vacances densifié… · essai 15 j sans CB. |

#### 1. Persona (précis)
- **Qui :** Régie / prestataire écoles, collèges, lycées, crèches
- **Pains :**
  - sécurité enfants
  - créneaux hors récréation
  - vacances scolaires
- **Objections :**
  - « c’est la collectivité »

#### 2. Scénario terrain (non interchangeable)
12 écoles · tonte mercredi AM · pas d’engin pendant récré · planning vacances densifié

#### 3. SEO cluster & anti-cannibalisation
- **Cluster / intent :** Audience écoles établissements EV
- **Anti-cannibalisation :** ≠ collectivités global — intent établissements scolaires

#### 4. Outline H2/H3 obligatoire
1. Empathie persona (douleurs terrain)
2. **Démo produit unique** (voir §5) — mock UI variant `split`
3. Détail métier / bodySections (capacités ancrées)
4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)
5. Vs Excel / WhatsApp / status quo
6. Modules / piliers adaptés à l’intent
7. FAQ utiles (pas « Oui. »)
8. Maillage hub + pilier + 2–4 sœurs + `/tarifs` + `/essai-gratuit`
9. FinalPush CTA persona

#### 5. Démo produit UNIQUE (obligatoire)
- **Titre démo :** Tournée écoles hors récré + planning vacances
- **Variant UI :** `split` (list | board | timeline | checklist | split)
- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus
- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)
- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)

#### 6. Preuves / process réalistes
- Planning d’interventions / fréquences si pertinent
- Pointage mobile & historique
- Contraintes équipes / engins / accès si pertinent
- Devis / facturation du réalisé quand l’intent le justifie
- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu

#### 7. Ton
Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.

#### 8. CTAs
- Primaire : Essai 15 j — label contextualisé persona
- Secondaire : Démo guidée / parler à un humain
- Tertiaire : `/tarifs` si intent prix

#### 9. Schema + maillage
- JSON-LD SoftwareApplication + FAQPage
- Maillage : `/espace-vert` · `/logiciel-espace-vert` · 2–4 sœurs · `/tarifs` · `/essai-gratuit`

#### 10. Checklist anti-générique (à cocher)
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario non interchangeable avec une autre page EV
- [ ] Section démo UI mock différente (variant `split` + rows uniques)
- [ ] FAQ utiles (réponses > 1 phrase)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités produit

**Specs source :** `src/lib/marketing/ev/specs-part*.ts` (id EV-36).

---

## Livrables Phase B (exécution)

- Specs TS enrichies (body + FAQ + variant démo) pour EV-01…EV-36
- Composant `MarketingDemoSection` : variants `list|board|timeline|checklist|split`
- Routes `/espace-vert/[slug]` + pilier + hub
- Sitemap via `listAllMarketingVerticalPaths()`
- `docs/pages-a-valider.md` + `/dashboard-validation`
- `npm run build` OK
