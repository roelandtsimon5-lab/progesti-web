# Super prompts v2 — Sécurité / Gardiennage (32)

> **Owner exclusif :** verticale **SÉCURITÉ / GARDIENNAGE** (ne pas toucher Espaces verts / propreté).
> **Fichier v1 (historique) :** `docs/prompts-marketing-espace-vert-securite.md`
> **Implémentation :** `src/lib/marketing/sec/specs.ts` + `MarketingSecuriteDemo` + `MarketingBodySections`
> **Validation :** `docs/pages-a-valider.md` · dashboard `/dashboard-validation`
> **Pas de commit** tant que Simon n'a pas demandé. **Pas de merge** avec EV.

## Règles v2 (anti-générique)

Chaque prompt DOIT contenir : (1) persona précis dirigeants / exploitation / facility / events, (2) pains + jargon + objections métier, (3) scénario terrain non interchangeable, (4) intent SEO + anti-cannibalisation, (5) H1 / meta / outline, (6) **démo produit unique** (walkthrough + mock UI), (7) preuves/process réalistes (pas fausse certif CNAPS), (8) ton terrain, (9) CTAs + schema + maillage `/tarifs` `/essai-gratuit`, (10) checklist.

**Charte :** navy #012939 · chrome #011B25 · lime #A8E300 · paper #FAFAFA · warm #F6F8F9 · line #E4E8EB · slate #5C6B73 · radius 2–3px.

**SEO technique :** `pageMeta` + `SoftwareApplicationLd` + `FaqPageLd` · canonical · maillage hub/pilier/sœurs · sitemap via `listAllMarketingVerticalPaths()`.

**Checklist qualité**
- [ ] H1 / meta title / meta desc uniques (pas de « … » tronqué)
- [ ] Persona identifiable en 10 s (gardiennage ≠ EV ≠ propreté)
- [ ] Scénario terrain non interchangeable
- [ ] Démo UI mock différente (`MarketingSecuriteDemo`)
- [ ] FAQ utiles (pas « Oui. »)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Claims ancrés : vacations, pointage, main courante, preuves, facture du réalisé

## Architecture URLs v2

```
/logiciel-securite-gardiennage   ← pilier money (SEC-01)
/securite                        ← hub (SEC-02)
/securite/{slug}                 ← filles (SEC-03 … SEC-32)
```

Extras v2 : vacation-non-pourvue · remplacement-urgence.

---

# SEC-01 — /logiciel-securite-gardiennage

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/logiciel-securite-gardiennage` |
| **Type** | pilier |
| **Mot-clé principal** | logiciel gardiennage |
| **H1** | Logiciel pour sociétés de sécurité privée — vacations tenues, preuves terrain, facture du réalisé |
| **Meta title** | Logiciel gardiennage & sécurité — vacations & preuves |
| **Meta description** | Logiciel gardiennage & sécurité privée : vacations, preuves terrain, facture du réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Dirigeant / gérant société de sécurité privée (15–80 agents) |
| **Scénario terrain** | Vendredi 17h45 : un agent se désiste pour la vacation 22h–6h sur un site industriel. Le gérant trouve un backup briefé, met à jour le planning, et s'assure que pointages + main courante du week-end seront exploitables lundi pour le reporting client. |
| **Intent + anti-cannibalisation** | Transactionnel — intent large « logiciel gardiennage ». Pilier money sans cannibaliser rondes, event, SSIAP. · H1 pilier générique. Renvoyer rondes, event, SSIAP, main courante vers filles dédiées. |
| **Démo produit (unique)** | De la vacation planifiée à la facture du réalisé — Vacation 22h–06h · Entrepôt Nord |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-01`) |

### Persona

**Dirigeant / gérant société de sécurité privée (15–80 agents)**

### Pains

- vacation non pourvue découverte par le client
- remplacements sur WhatsApp à 21h
- heures contestées en fin de mois
- rapport client reconstruit le lundi
- Excel « planning_v23_FINAL » divergent du terrain

### Jargon métier

- vacation
- poste
- ronde
- main courante
- backup
- consignes site
- réalisé
- donneur d'ordre

### Objections

- Excel + WhatsApp suffit
- Les agents ne pointeront pas
- Trop lourd pour notre taille
- Outil propreté déguisé

### Scénario terrain

Vendredi 17h45 : un agent se désiste pour la vacation 22h–6h sur un site industriel. Le gérant trouve un backup briefé, met à jour le planning, et s'assure que pointages + main courante du week-end seront exploitables lundi pour le reporting client.

### Intent SEO

Transactionnel — intent large « logiciel gardiennage ». Pilier money sans cannibaliser rondes, event, SSIAP.

### Anti-cannibalisation

H1 pilier générique. Renvoyer rondes, event, SSIAP, main courante vers filles dédiées.

### H1

Logiciel pour sociétés de sécurité privée — vacations tenues, preuves terrain, facture du réalisé

### Meta

**Title:** Logiciel gardiennage & sécurité — vacations & preuves

**Description:** Logiciel gardiennage & sécurité privée : vacations, preuves terrain, facture du réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Empathie dirigeant : trou de vacation & rapport client
- H2 Démo flux planning → présence → facture
- H2 Posts, backups, consignes, preuves
- H2 Excel/WhatsApp vs source de vérité
- H2 Segments TPE → multi-sites + maillage
- H2 FAQ métier (pas promesses CNAPS)

**Corps long (spec):**
- **Ce que vous structurez en gardiennage (sans promesse miracle)** — Posts fixes, renforts, consignes site, historique d'activité : PROGESTI centralise l'opérationnel. Ce n'est pas un substitut à vos obligations professionnelles — c'est l'outil qui évite le chaos administratif.
  - Vacations par site et par créneau
  - Backups visibles avant le trou
  - Consignes accessibles sur mobile
- **Pour qui : de la TPE multi-sites au contrat cadre** — Même logique pour 12 agents ou 120 : une source de vérité. Les pages audience (industriel, retail, grands comptes) détaillent les contraintes ; le pilier tient le flux global.
  - *TPE / petites sociétés* : Prise en main rapide, tarif public dès 29,99 € HT/mois.
  - *Multi-sites* : Portefeuille unifié sans tableur par client.

### Démo produit (unique)

**Démo · flux pilier**

## De la vacation planifiée à la facture du réalisé

Un scénario type : site industriel, vacation de nuit, backup de dernière minute.

*Scénario:* Site « Entrepôt Nord » — vacation 22h–06h, agent titulaire indisponible à 17h45.

**Étapes:**
- **Planning** — Vacation publiée, backup affecté, consignes site visibles mobile.
- **Présence** — Pointage début/fin + main courante incidents.
- **Contrôle** — Exploitation valide heures vs contrat.
- **Facture** — Ligne générée depuis le réalisé pointé.

**UI (Vacation 22h–06h · Entrepôt Nord):**
- Titulaire prévu → Agent M. — indisponible (alert)
- Backup affecté → Agent L. — brief consignes OK (ok)
- Pointage réel → 21h58 → 06h04 (ok)
- Ligne facture → 8h04 facturables · brouillon prêt (ok)

**Takeaway:** Une seule chaîne : plus de ressaisie entre planning, terrain et compta.

### Preuves / process

**Conçu pour le rythme d'une société de gardiennage**

> Si ce n'est pas dans le planning et le pointage, ce n'est pas fiable.

- **Posts couverts** — Titulaires, backups, trous visibles avant le client.
- **Preuves exploitables** — Présences et passages historisés pour le donneur d'ordre.
- **Facture alignée** — Le réalisé terrain alimente la facturation — moins d'écarts de fin de mois.

### Ton

Terrain, direct, français métier sécurité privée.

### CTAs

- Essai gratuit 15 j sans CB
- Voir une démo terrain
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /securite
- /securite/gardiennage
- /securite/planning-agents
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] H1 ≠ page gardiennage service
- [ ] Démo flux unique
- [ ] Pas fausse certif CNAPS
- [ ] Prix/essai factuels


---

# SEC-02 — /securite

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite` |
| **Type** | hub |
| **Mot-clé principal** | solutions sécurité PROGESTI |
| **H1** | Sécurité & gardiennage — choisissez la page qui correspond à votre terrain |
| **Meta title** | Sécurité & gardiennage — hub solutions |
| **Meta description** | Hub sécurité & gardiennage PROGESTI : postes, rondes, industriel, retail, event, planning, preuves. Essai 15 j sans CB. |
| **Persona** | Dirigeant ou resp. exploitation indécis sur la bonne page |
| **Scénario terrain** | Un dirigeant tape « logiciel sécurité » et arrive ici. En 30 s : poste fixe → gardiennage, passages → rondes, festival → event, nuit → astreinte, main courante → page dédiée. |
| **Intent + anti-cannibalisation** | Navigation hub — oriente sans cannibaliser le pilier money. · H1 hub, pas « logiciel gardiennage ». Lien fort pilier + clusters. |
| **Démo produit (unique)** | Trouver la bonne porte en 30 secondes — Assistant intent (maquette) |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-02`) |

### Persona

**Dirigeant ou resp. exploitation indécis sur la bonne page**

### Pains

- pages fourre-tout
- confusion ronde vs poste vs event
- peur du mauvais module

### Jargon métier

- vacation
- SSIAP
- event
- donneur d'ordre
- multi-sites

### Objections

- Tout se ressemble
- Je veux juste les rondes

### Scénario terrain

Un dirigeant tape « logiciel sécurité » et arrive ici. En 30 s : poste fixe → gardiennage, passages → rondes, festival → event, nuit → astreinte, main courante → page dédiée.

### Intent SEO

Navigation hub — oriente sans cannibaliser le pilier money.

### Anti-cannibalisation

H1 hub, pas « logiciel gardiennage ». Lien fort pilier + clusters.

### H1

Sécurité & gardiennage — choisissez la page qui correspond à votre terrain

### Meta

**Title:** Sécurité & gardiennage — hub solutions

**Description:** Hub sécurité & gardiennage PROGESTI : postes, rondes, industriel, retail, event, planning, preuves. Essai 15 j sans CB.

### Outline H2/H3

**Corps long (spec):**
- **Comment choisir votre page** — Partez du métier terrain : type de site (industriel, retail…), type de prestation (poste, ronde, event), ou process (planning, pointage, factu). Le pilier reste la porte money « logiciel gardiennage ».
  - Service vs audience vs process
  - Une intention SEO par URL
  - Maillage vers 2–3 sœurs + tarifs
- **Verticales séparées (non négociable)** — Sécurité ≠ propreté ≠ espaces verts. Pas de fusion des configs : chaque verticale a son hub et son pilier.

### Démo produit (unique)

**Démo · parcours hub**

## Trouver la bonne porte en 30 secondes

Intent → page fille → essai.

*Scénario:* Prospect hésite entre ronde entrepôt et poste fixe copro.

**Étapes:**
- **Besoin** — « Je dois prouver les rondes entrepôt »
- **Page** — → /securite/rondes-surveillance
- **Sœur** — Gardiennage poste si mixte site
- **Essai** — 15 j sans CB sur vrais sites

**UI (Assistant intent (maquette)):**
- Poste fixe 24/7 → → Gardiennage (ok)
- Passages horodatés → → Rondes (ok)
- Concert / salon → → Événementiel (ok)
- Registre incidents → → Main courante (ok)

**Takeaway:** Le hub ne vend pas tout : il route vers la page qui convertit.

### Preuves / process

**Guider, pas tout dire en une page**

> La bonne page parle de VOTRE vacation — pas d'un SaaS générique.

- **Services** — Gardiennage, rondes, agents, sûreté, consignes, main courante.
- **Audiences** — Industriel, retail, event, copro, BTP, sites sensibles, PME, grands comptes.
- **Process** — Planning, pointage, preuves, factu, PC sécurité, SSIAP (orga postes).

### Ton

Terrain, direct, français métier sécurité privée.

### CTAs

- Essai gratuit 15 j sans CB
- Voir une démo terrain
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite/gardiennage
- /securite/rondes-surveillance
- /tarifs

### Checklist anti-générique




---

# SEC-03 — /securite/gardiennage

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/gardiennage` |
| **Type** | service |
| **Mot-clé principal** | logiciel société de gardiennage |
| **H1** | Logiciel gardiennage — tenir les postes sans trou de vacation |
| **Meta title** | Logiciel gardiennage — PROGESTI |
| **Meta description** | Logiciel société de gardiennage : postes fixes, backups et pointages. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Resp. exploitation — portefeuille immeubles & accueils |
| **Scénario terrain** | Lundi 7h12 : le syndic appelle — personne à l'accueil. Vacation 6h–14h non remplacée. Il faut prouver qui était prévu et activer le backup avec consignes à jour. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « logiciel société de gardiennage » — page service, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Couvrir l'accueil quand le titulaire saute — Résidence Parc · poste accueil |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-03`) |

### Persona

**Resp. exploitation — portefeuille immeubles & accueils**

### Pains

- syndic qui découvre un poste vide avant vous
- consignes accueil différentes selon la version papier
- titulaire malade sans backup briefé
- litige « qui était prévu » sans historique

### Jargon métier

- poste fixe
- vacation
- syndic
- backup
- consignes accueil
- réalisé

### Objections

- On gère déjà au feeling
- Trop de saisie pour l'accueil
- Les remplaçants ne lisent jamais les consignes

### Scénario terrain

Lundi 7h12 : le syndic appelle — personne à l'accueil. Vacation 6h–14h non remplacée. Il faut prouver qui était prévu et activer le backup avec consignes à jour.

### Intent SEO

Intent SEO ciblé « logiciel société de gardiennage » — page service, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Logiciel gardiennage — tenir les postes sans trou de vacation

### Meta

**Title:** Logiciel gardiennage — PROGESTI

**Description:** Logiciel société de gardiennage : postes fixes, backups et pointages. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Un poste fixe vide, c'est le client qui appelle en premier
- H2 Démo — Couvrir l'accueil quand le titulaire saute
- H2 Cartographier vos postes fixes (accueil, portail, réception)
- H2 Remplacements sans chaos du dimanche soir
- H2 Rappel
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Cartographier vos postes fixes (accueil, portail, réception)** — Chaque site a ses créneaux et ses consignes d'accueil. PROGESTI aligne vacations, fiche site et agents — sans promettre ce que la réglementation relève de votre responsabilité pro.
  - Posts nommés par site
  - Backups par créneau
  - Consignes visibles avant prise de poste
- **Remplacements sans chaos du dimanche soir** — Quand le titulaire tombe, l'exploitation voit le trou, propose un backup et garde la trace de qui a briefé qui — plus de « on pensait que c'était couvert ».
- **Rappel** — PROGESTI organise et trace ; il ne remplace ni l'agrément CNAPS ni un avis juridique sur vos contrats de gardiennage.

### Démo produit (unique)

**Démo · gardiennage**

## Couvrir l'accueil quand le titulaire saute

Poste fixe 6h–14h : de l'alerte absence à la preuve pour le syndic.

*Scénario:* Lundi 7h12 : le syndic appelle — personne à l'accueil. Vacation 6h–14h non remplacée. Il faut prouver qui était prévu et activer le backup avec consignes à jour.

**Étapes:**
- **Alerte** — Vacation accueil sans titulaire confirmé — statut rouge.
- **Backup** — Agent R. affecté, consignes résidence lues 05h52.
- **Présence** — Pointage 05h55, main courante ouverte si incident.
- **Compte** — Historique exporté pour le syndic + heures facturables.

**UI (Résidence Parc · poste accueil):**
- Poste accueil 6h–14h → Titulaire absent (alert)
- Backup R. → Brief consignes OK (ok)
- Pointage → 05h55 (ok)
- Syndic → Historique exportable (ok)

**Takeaway:** Le poste tient avant l'appel client — et vous avez la preuve si on vous challenge.

### Preuves / process

**Tenir un poste fixe, c'est tenir la promesse client**

> « Personne à l'accueil » : la phrase que vous voulez éviter à 7h du matin.

- **Couverture visible** — Vacations par poste, alertes avant le trou.
- **Remplacement tracé** — Backup affecté avec consignes lues sur mobile.
- **Historique syndic** — Présences exportables sans reconstruire le week-end.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-04 — /securite/rondes-surveillance

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/rondes-surveillance` |
| **Type** | service |
| **Mot-clé principal** | logiciel rondes sécurité |
| **H1** | Rondes & surveillance — des passages tracés, pas « on a fait le tour » |
| **Meta title** | Rondes & surveillance — PROGESTI |
| **Meta description** | Logiciel rondes sécurité : passages horodatés, alertes, historique audit. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Chef de site / exploitation entrepôts logistique |
| **Scénario terrain** | Audit client sur entrepôt frigorifique : « prouvez la ronde 22h–6h du 12 mars ». Sans point de contrôle horodaté, la prestation est contestée. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « logiciel rondes sécurité » — page service, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Répondre à l'audit « prouvez la nuit du 12 » — Entrepôt Nord · tournée nuit |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-04`) |

### Persona

**Chef de site / exploitation entrepôts logistique**

### Pains

- client frigo qui conteste une nuit entière
- points de contrôle différents selon les sites
- ronde « raccourcie » non détectée avant l'audit
- agents qui oublient un secteur du quai

### Jargon métier

- ronde
- point de contrôle
- tournée
- QHSE
- vacation nuit
- main courante

### Objections

- On note sur papier
- Les tags NFC coûtent trop
- L'agent triche anyway

### Scénario terrain

Audit client sur entrepôt frigorifique : « prouvez la ronde 22h–6h du 12 mars ». Sans point de contrôle horodaté, la prestation est contestée.

### Intent SEO

Intent SEO ciblé « logiciel rondes sécurité » — page service, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Rondes & surveillance — des passages tracés, pas « on a fait le tour »

### Meta

**Title:** Rondes & surveillance — PROGESTI

**Description:** Logiciel rondes sécurité : passages horodatés, alertes, historique audit. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 « On a fait le tour » ne suffit pas à l'audit
- H2 Démo — Répondre à l'audit « prouvez la nuit du 12 »
- H2 Définir des tournées qui collent au plan du site
- H2 Exploiter les écarts avant le mail client
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Définir des tournées qui collent au plan du site** — Zones ATEX, quai, parking : une tournée n'est pas une autre. Vous nommez les points, les fréquences, et les agents savent ce qui est attendu.
  - Modèles par typologie de site
  - Fréquence nuit / week-end
  - Lien vacation ↔ tournée
- **Exploiter les écarts avant le mail client** — Retard ou point manquant : l'exploitation voit l'écart dans la journée, pas après la réclamation.

### Démo produit (unique)

**Démo · rondes surveillance**

## Répondre à l'audit « prouvez la nuit du 12 »

Tournée entrepôt : 12 points, un retard détecté, dossier prêt en 5 minutes.

*Scénario:* Audit client sur entrepôt frigorifique : « prouvez la ronde 22h–6h du 12 mars ». Sans point de contrôle horodaté, la prestation est contestée.

**Étapes:**
- **Modèle** — Tournée Q1–Q12 attachée au site frigorifique.
- **Nuit** — 11/12 points OK — Q3 porte Nord +8 min.
- **Alerte** — Exploitation notifiée, consigne relue agent.
- **Audit** — Export passages 22h14 → 05h58 pour le donneur d'ordre.

**UI (Entrepôt Nord · tournée nuit):**
- Point Q1 entrepôt → 22h14 scanné (ok)
- Point Q2 quai → 22h41 scanné (ok)
- Point Q3 porte Nord → 23h05 — retard 8 min (alert)
- Tournée nuit → 12/12 points OK (ok)

**Takeaway:** Chaque passage compte — vous répondez factuellement au lieu de négocier à l'oral.

### Preuves / process

**Prouver la ronde, pas la raconter**

> L'audit demande le 12 mars 22h–6h — pas vos bonnes intentions.

- **Points de passage** — Scan ou validation par étape, horodatage conservé.
- **Retards visibles** — Écart sur un point = alerte exploitation avant le client.
- **Dossier audit** — Historique de tournée exportable sur une période.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-05 — /securite/agents-securite

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/agents-securite` |
| **Type** | service |
| **Mot-clé principal** | logiciel gestion agents de sécurité |
| **H1** | Gestion agents de sécurité — la bonne personne au bon poste |
| **Meta title** | Gestion agents de sécurité — PROGESTI |
| **Meta description** | Gestion agents de sécurité : compétences, dispos, remplacements. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Gérant TPE / adjoint exploitation |
| **Scénario terrain** | Haute saison : 6 absences la même semaine. L'exploition doit croiser compétences (SSIAP / APS), disponibilités nuit et sites éloignés sans tableur parallèle. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « logiciel gestion agents de sécurité » — page service, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Staffer six absences sans tableur parallèle — Effectif · semaine S12 |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-05`) |

### Persona

**Gérant TPE / adjoint exploitation**

### Pains

- 6 absences la même semaine de haute saison
- compétences mélangées sur des postes sensibles
- agents éloignés géographiquement le soir même
- double booking sur deux sites

### Jargon métier

- APS
- SSIAP
- backup
- pool
- affectation
- vacation

### Objections

- On se connaît tous
- Trop lourd de saisir les profils
- Les dispos changent tout le temps

### Scénario terrain

Haute saison : 6 absences la même semaine. L'exploition doit croiser compétences (SSIAP / APS), disponibilités nuit et sites éloignés sans tableur parallèle.

### Intent SEO

Intent SEO ciblé « logiciel gestion agents de sécurité » — page service, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Gestion agents de sécurité — la bonne personne au bon poste

### Meta

**Title:** Gestion agents de sécurité — PROGESTI

**Description:** Gestion agents de sécurité : compétences, dispos, remplacements. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Sans vue effectif, vous staffez à l'aveugle
- H2 Démo — Staffer six absences sans tableur parallèle
- H2 Un fichier agents qui sert vraiment l'exploitation
- H2 Éviter le double booking du vendredi soir
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Un fichier agents qui sert vraiment l'exploitation** — Coordonnées, compétences, sites habituels : la fiche agent alimente le planning et les remplacements — pas un RH complet, l'essentiel terrain.
  - Statut dispo / en vacation
  - Sites et clients autorisés
  - Notes exploitation (sans dossier médical)
- **Éviter le double booking du vendredi soir** — Avant d'envoyer un agent, vous voyez s'il est déjà affecté ailleurs sur le même créneau.

### Démo produit (unique)

**Démo · agents securite**

## Staffer six absences sans tableur parallèle

Semaine critique : croiser compétences, distance et vacations déjà posées.

*Scénario:* Haute saison : 6 absences la même semaine. L'exploition doit croiser compétences (SSIAP / APS), disponibilités nuit et sites éloignés sans tableur parallèle.

**Étapes:**
- **Absences** — 6 créneaux à risque remontés depuis le planning.
- **Filtre** — SSIAP 1 + dispo nuit + pas déjà sur site B.
- **Affectation** — Dupont site A 14h–22h, Martin en backup site C.
- **Notification** — Agents voient vacation + consignes sur mobile.

**UI (Effectif · semaine S12):**
- Agent Dupont → SSIAP 1 · dispo nuit (ok)
- Agent Martin → En vacation site B (ok)
- Absence imprévue → Backup proposé (alert)
- Affectation → Site A 14h–22h (ok)

**Takeaway:** Moins de vacations refaites parce que le profil ou la dispo était fausse.

### Preuves / process

**La bonne personne au bon poste**

> Envoyer un APS sur un poste SSIAP, c'est une vacation perdue — et un client furieux.

- **Profils & habilitations** — SSIAP, APS, sites autorisés — visibles à l'affectation.
- **Vacations en cours** — Qui est déjà staffé ce soir avant d'envoyer un backup.
- **Historique agent** — Sites déjà tenus, incidents, heures — pour décider vite.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-06 — /securite/surete-sites

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/surete-sites` |
| **Type** | service |
| **Mot-clé principal** | logiciel sûreté des sites |
| **H1** | Sûreté des sites — consignes, vacations, preuves — site par site |
| **Meta title** | Sûreté des sites — PROGESTI |
| **Meta description** | Sûreté des sites : fiches, consignes, vacations et preuves. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Directeur exploitation multi-clients |
| **Scénario terrain** | Nouveau site industriel : consignes accès changent chaque lundi. L'agent de nuit arrive sans la bonne version — incident évitable avec fiche site centralisée. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « logiciel sûreté des sites » — page service, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Nouveau site : consignes jour J pour l'agent de nuit — Portefeuille · Site Gamma |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-06`) |

### Persona

**Directeur exploitation multi-clients**

### Pains

- consignes qui changent chaque lundi
- nouveau site mal onboardé en 48 h
- incident accès non remonté au bon contact
- rapport hebdo reconstruit le vendredi

### Jargon métier

- donneur d'ordre
- fiche site
- consignes
- sûreté
- vacation portail

### Objections

- Chaque client veut son format
- On a déjà SharePoint
- Trop de sites pour un seul outil

### Scénario terrain

Nouveau site industriel : consignes accès changent chaque lundi. L'agent de nuit arrive sans la bonne version — incident évitable avec fiche site centralisée.

### Intent SEO

Intent SEO ciblé « logiciel sûreté des sites » — page service, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Sûreté des sites — consignes, vacations, preuves — site par site

### Meta

**Title:** Sûreté des sites — PROGESTI

**Description:** Sûreté des sites : fiches, consignes, vacations et preuves. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 La sûreté d'un site, c'est la bonne consigne au bon agent
- H2 Démo — Nouveau site : consignes jour J pour l'agent de nuit
- H2 Onboarder un site sans oublier la vacation #1
- H2 Incidents accès : tracer et informer
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Onboarder un site sans oublier la vacation #1** — Contrat signé : fiche site, consignes, premières vacations et contacts client — checklist exploitation, pas marketing.
  - Modèle fiche par typologie
  - Liens vacations ↔ consignes
  - Historique dès le premier jour
- **Incidents accès : tracer et informer** — Main courante + notification exploitation — le donneur d'ordre sait ce qui s'est passé sans relance téléphonique.

### Démo produit (unique)

**Démo · surete sites**

## Nouveau site : consignes jour J pour l'agent de nuit

Site industriel récent — accès mis à jour hier, vacation portail ce soir.

*Scénario:* Nouveau site industriel : consignes accès changent chaque lundi. L'agent de nuit arrive sans la bonne version — incident évitable avec fiche site centralisée.

**Étapes:**
- **Onboarding** — Fiche site Gamma créée, contacts sécurité client.
- **Màj** — Consignes portail validées hier 16h — version 3.
- **Vacation** — Agent lit consignes avant pointage début.
- **Incident** — Accès refusé noté main courante → synthèse DO.

**UI (Portefeuille · Site Gamma):**
- Site Gamma — consignes → Màj hier 16h (ok)
- Vacation portail → Couverture OK (ok)
- Incident accès → Noté main courante (alert)
- Donneur d'ordre → Synthèse hebdo prête (ok)

**Takeaway:** Chaque site a sa vérité — l'agent n'invente pas la procédure sur place.

### Preuves / process

**Sûreté = continuité d'information**

> L'agent de nuit arrive avec la consigne de lundi… un mardi où tout a changé.

- **Fiches sites à jour** — Accès, contacts, procédures — version visible mobile.
- **Vacations par site** — Couverture portail, rondes, accueil — vue client.
- **Synthèse donneur d'ordre** — Incidents + présences pour le reporting hebdo.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-07 — /securite/sites-industriels

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/sites-industriels` |
| **Type** | audience |
| **Mot-clé principal** | gardiennage site industriel logiciel |
| **H1** | Sites industriels — des vacations qui tiennent les contraintes terrain |
| **Meta title** | Sites industriels — PROGESTI |
| **Meta description** | Gardiennage site industriel : 3×8, accès, audits donneur d'ordre. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Exploitation gardiennage sites industriels |
| **Scénario terrain** | Usine 3×8 : le donneur d'ordre demande qui tenait le portail sud pendant l'arrêt technique. Il faut l'historique vacations + pointages, pas un SMS. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « gardiennage site industriel logiciel » — page audience, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Qui tenait le portail sud pendant l'arrêt ? — Site usine · semaine arrêt |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-07`) |

### Persona

**Exploitation gardiennage sites industriels**

### Pains

- arrêt technique = vacations modifiées en dernière minute
- audit sécurité client sans préavis
- ronde zone ATEX oubliée sur un shift
- portail sud non tenu pendant travaux

### Jargon métier

- 3×8
- donneur d'ordre
- QHSE
- portail
- arrêt technique
- vacation

### Objections

- Le client impose son outil
- Trop de zones à modéliser
- Nos agents connaissent l'usine

### Scénario terrain

Usine 3×8 : le donneur d'ordre demande qui tenait le portail sud pendant l'arrêt technique. Il faut l'historique vacations + pointages, pas un SMS.

### Intent SEO

Intent SEO ciblé « gardiennage site industriel logiciel » — page audience, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Sites industriels — des vacations qui tiennent les contraintes terrain

### Meta

**Title:** Sites industriels — PROGESTI

**Description:** Gardiennage site industriel : 3×8, accès, audits donneur d'ordre. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Sur site industriel, l'audit ne pardonne pas le trou de portail
- H2 Démo — Qui tenait le portail sud pendant l'arrêt ?
- H2 Adapter le planning aux arrêts et aux renforts
- H2 Preuves pour les audits client
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Adapter le planning aux arrêts et aux renforts** — Travaux = vacations modifiées, consignes temporaires, backups — le planning absorbe le changement sans fichier « planning_usine_OLD2 ».
  - Consignes temporaires datées
  - Renforts week-end industrie
  - Lien ronde ↔ shift
- **Preuves pour les audits client** — Export présences et rondes sur la période demandée — base factuelle pour votre relation donneur d'ordre.

### Démo produit (unique)

**Démo · sites industriels**

## Qui tenait le portail sud pendant l'arrêt ?

Intervention maintenance : historique vacations + pointages sur 72 h.

*Scénario:* Usine 3×8 : le donneur d'ordre demande qui tenait le portail sud pendant l'arrêt technique. Il faut l'historique vacations + pointages, pas un SMS.

**Étapes:**
- **Shift** — Vacations 3×8 mises à jour avec consignes travaux.
- **Nuit** — Ronde zone ATEX 02h — passages OK.
- **Demande** — DO industriel : portail sud 14h–22h mardi.
- **Réponse** — Agent L. pointé 13h58–22h04 — export joint.

**UI (Site usine · semaine arrêt):**
- Site usine — 3×8 → Postes couverts (ok)
- Ronde zone ATEX → Passages OK (ok)
- Audit sécurité client → Historique 30 j (ok)
- Vacation nuit → Pointage 21h58 (ok)

**Takeaway:** Vous répondez au QHSE avec des faits, pas avec la mémoire du chef de poste.

### Preuves / process

**Documenter l'industriel, shift par shift**

> Pendant l'arrêt technique, personne ne veut entendre « on croit que c'était Dupont ».

- **Shifts nommés** — Matin / après-midi / nuit — vacations visibles par zone.
- **Rondes zones sensibles** — Tournées liées aux procédures site.
- **Historique 30 j** — Prêt quand le QHSE client envoie sa checklist.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-08 — /securite/centres-commerciaux

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/centres-commerciaux` |
| **Type** | audience |
| **Mot-clé principal** | sécurité centre commercial logiciel |
| **H1** | Centres commerciaux & retail — tenir les postes aux heures de pointe |
| **Meta title** | Centres commerciaux & retail — PROGESTI |
| **Meta description** | Sécurité centre commercial : multi-postes, pics, preuves week-end. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Exploitation sécurité grands surfaces / CC |
| **Scénario terrain** | Samedi soldes : +4 postes en 2 h. Le directeur centre veut la preuve des renforts dimanche soir pour valider la facture. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « sécurité centre commercial logiciel » — page audience, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Prouver les +4 agents du samedi soldes — Centre Atlas · soldes |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-08`) |

### Persona

**Exploitation sécurité grands surfaces / CC**

### Pains

- pic 18h sous-staffé
- directeur centre qui conteste les heures
- renforts activés trop tard
- poste parking oublié dimanche

### Jargon métier

- renfort
- directeur centre
- parking
- soldes
- vacation
- réalisé

### Objections

- Le centre change tout à la dernière minute
- Facturation au ticket horaire
- Agents intérimaires différents chaque week-end

### Scénario terrain

Samedi soldes : +4 postes en 2 h. Le directeur centre veut la preuve des renforts dimanche soir pour valider la facture.

### Intent SEO

Intent SEO ciblé « sécurité centre commercial logiciel » — page audience, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Centres commerciaux & retail — tenir les postes aux heures de pointe

### Meta

**Title:** Centres commerciaux & retail — PROGESTI

**Description:** Sécurité centre commercial : multi-postes, pics, preuves week-end. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Samedi soldes : quatre postes en plus, zéro marge d'erreur
- H2 Démo — Prouver les +4 agents du samedi soldes
- H2 Modèles de week-end et soirées
- H2 Relation directeur centre / facturation
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Modèles de week-end et soirées** — Créneaux type CC : ouverture, pic, fermeture, parking — dupliquez le modèle soldes sans recréer from scratch.
  - Renforts en un clic
  - Postes parking nommés
  - Historique par événement commercial
- **Relation directeur centre / facturation** — Heures pointées alignées sur le bon de commande — moins de débat « vous n'étiez pas assez » après coup.

### Démo produit (unique)

**Démo · centres commerciaux**

## Prouver les +4 agents du samedi soldes

Centre Atlas : planning dense, pic 18h, facture à justifier dimanche soir.

*Scénario:* Samedi soldes : +4 postes en 2 h. Le directeur centre veut la preuve des renforts dimanche soir pour valider la facture.

**Étapes:**
- **Brief** — +4 postes ajoutés jeudi — directeur centre informé.
- **Samedi** — Parking couvert, renfort entrée activé 17h30.
- **Pic** — Alerte 18h — agent renfort déjà sur zone.
- **Facture** — Pointages week-end → brouillon facture lundi 8h.

**UI (Centre Atlas · soldes):**
- Centre Atlas — samedi → +4 agents soldes (ok)
- Poste parking → Couvert 8h–20h (ok)
- Pic 18h → Renfort activé (alert)
- Preuve week-end → Pointages consolidés (ok)

**Takeaway:** Le retail pardonne peu — vous staffez et prouvez dans le même outil.

### Preuves / process

**Tenir les postes quand le flux explose**

> « Vous aviez combien d'agents samedi 18h ? » — question classique du directeur centre.

- **Renforts planifiés** — +4 agents soldes visibles avant l'ouverture.
- **Parking & accès** — Vacations couvertes 8h–20h tracées.
- **Preuve week-end** — Pointages consolidés pour validation facture.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-09 — /securite/evenementiel

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/evenementiel` |
| **Type** | audience |
| **Mot-clé principal** | logiciel sécurité événementielle |
| **H1** | Sécurité événementielle — monter une équipe vite, facturer proprement |
| **Meta title** | Sécurité événementielle — PROGESTI |
| **Meta description** | Logiciel sécurité événementielle : staffing, pointage, facture réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Resp. événementiel sécurité privée |
| **Scénario terrain** | Concert 18 000 places : montage équipe en 4 h, dépassements horaires sur poste barrières. Il faut staffer, pointer et facturer le réalisé sans chaos. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « logiciel sécurité événementielle » — page audience, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Clôturer Summer Fest sans ressaisie compta — Event Summer Fest |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-09`) |

### Persona

**Resp. événementiel sécurité privée**

### Pains

- 48 agents à placer en une matinée
- dépassements non facturés
- poste barrière non couvert à l'ouverture
- client promoteur qui veut le détail heures

### Jargon métier

- barrière
- ordre de service
- vacation
- renfort
- réalisé
- promoteur

### Objections

- Chaque event est unique
- On staff avec des freelances
- Pas le temps de saisir pendant l'event

### Scénario terrain

Concert 18 000 places : montage équipe en 4 h, dépassements horaires sur poste barrières. Il faut staffer, pointer et facturer le réalisé sans chaos.

### Intent SEO

Intent SEO ciblé « logiciel sécurité événementielle » — page audience, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Sécurité événementielle — monter une équipe vite, facturer proprement

### Meta

**Title:** Sécurité événementielle — PROGESTI

**Description:** Logiciel sécurité événementielle : staffing, pointage, facture réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Montage équipe en 4 h : le planning ne peut pas attendre lundi
- H2 Démo — Clôturer Summer Fest sans ressaisie compta
- H2 Structurer un dossier par événement
- H2 Freelances et renforts ponctuels
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Structurer un dossier par événement** — Un event = un regroupement sites/vacations : ordre de service, équipe, consignes promoteur — clôturé après le démontage.
  - Zones entrée / scène / parking
  - Consignes promoteur attachées
  - Export heures pour avenant
- **Freelances et renforts ponctuels** — Affectation et pointage comme les titulaires — pas de seconde vérité sur un groupe messenger.

### Démo produit (unique)

**Démo · evenementiel**

## Clôturer Summer Fest sans ressaisie compta

18 000 places : planning dense, dépassements barrières, facture promoteur.

*Scénario:* Concert 18 000 places : montage équipe en 4 h, dépassements horaires sur poste barrières. Il faut staffer, pointer et facturer le réalisé sans chaos.

**Étapes:**
- **OS** — 48 vacations réparties entrée A/B, parking, backstage.
- **Ouverture** — Poste barrière A staffé 14h — pointage OK.
- **Nuit** — +45 min barrière — fin réelle 23h45 tracée.
- **Facture** — Lignes depuis pointages — brouillon prêt mardi.

**UI (Event Summer Fest):**
- Event « Summer Fest » → 48 agents planifiés (ok)
- Poste entrée A → 14h–23h staffé (ok)
- Dépassement horaire → +45 min tracés (alert)
- Facture event → Brouillon depuis réalisé (ok)

**Takeaway:** Le promoteur paie le réel pointé — vous ne laissez pas d'heures sur la table.

### Preuves / process

**L'événementiel exige vitesse et trace**

> Dépassement barrières +45 min : soit c'est pointé, soit c'est offert au client.

- **Montage rapide** — Vacations par zone entrée / scène / parking.
- **Heures réelles** — Dépassements tracés pour facturation ou avenant.
- **Clôture event** — Brouillon facture depuis le réalisé pointé.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-10 — /securite/coproprietes

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/coproprietes` |
| **Type** | audience |
| **Mot-clé principal** | gardiennage copropriété logiciel |
| **H1** | Sécurité en copropriété — présence tenue, syndic informé |
| **Meta title** | Sécurité en copropriété — PROGESTI |
| **Meta description** | Gardiennage copropriété : vacations tenues, reporting syndic. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Exploitation gardiennage résidentiel |
| **Scénario terrain** | AG copro : « qui gardait la résidence vendredi soir ? » Le syndic exige un historique clair de présence, pas la parole du gardien. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « gardiennage copropriété logiciel » — page audience, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Répondre à l'AG : vendredi soir, qui gardait ? — Résidence Parc · mois en cours |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-10`) |

### Persona

**Exploitation gardiennage résidentiel**

### Pains

- syndic qui vérifie chaque absence
- gardien seul mal remplacé
- confusion EV / gardiennage côté client
- plusieurs résidences même syndic

### Jargon métier

- syndic
- AG
- gardien
- vacation
- résidence
- conseil syndical

### Objections

- Le syndic veut papier
- Peu d'heures à facturer
- On n'est pas le gardien salarié

### Scénario terrain

AG copro : « qui gardait la résidence vendredi soir ? » Le syndic exige un historique clair de présence, pas la parole du gardien.

### Intent SEO

Intent SEO ciblé « gardiennage copropriété logiciel » — page audience, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Sécurité en copropriété — présence tenue, syndic informé

### Meta

**Title:** Sécurité en copropriété — PROGESTI

**Description:** Gardiennage copropriété : vacations tenues, reporting syndic. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 En copro, c'est le syndic qui demande « qui était là vendredi ? »
- H2 Démo — Répondre à l'AG : vendredi soir, qui gardait ?
- H2 Gardiennage copro ≠ espaces verts
- H2 Remplacements discrets mais tracés
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Gardiennage copro ≠ espaces verts** — Intent distinct : présence humaine, accès résidence, syndic — pas confondre avec la verticale espaces verts (autre produit).
  - Vacations gardien / accueil
  - Consignes résidence
  - Export pour AG
- **Remplacements discrets mais tracés** — Le résident ne doit pas voir un trou ; le syndic doit voir qui est venu — les deux via planning + pointage.

### Démo produit (unique)

**Démo · coproprietes**

## Répondre à l'AG : vendredi soir, qui gardait ?

Résidence Parc — historique présence + vacation remplacée.

*Scénario:* AG copro : « qui gardait la résidence vendredi soir ? » Le syndic exige un historique clair de présence, pas la parole du gardien.

**Étapes:**
- **Planning** — Vacation 7j/7 gardien + backup week-end.
- **Vendredi** — Titulaire absent — backup 18h–8h affecté.
- **Trace** — Pointages + main courante porte parking.
- **Syndic** — Rapport mensuel PDF avec lignes vendredi.

**UI (Résidence Parc · mois en cours):**
- Résidence Parc → Vacation 7j/7 (ok)
- Présence gardien → Pointage quotidien (ok)
- Conseil syndical → Rapport mensuel (ok)
- Multi-résidences → 3 sites actifs (ok)

**Takeaway:** Le syndic voit des faits — votre renouvellement ne se joue pas sur un malentendu.

### Preuves / process

**Documenter pour le conseil syndical**

> AG copro : une absence de gardien non expliquée devient un vote contre votre contrat.

- **Présence quotidienne** — Pointage gardien / vacation accueil.
- **Rapport mensuel** — Historique exploitable pour le syndic.
- **Multi-résidences** — Chaque immeuble = site, vue portefeuille.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-11 — /securite/planning-agents

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/planning-agents` |
| **Type** | process |
| **Mot-clé principal** | planning agents de sécurité |
| **H1** | Planning agents sécurité — chaque vacation couverte, chaque jour |
| **Meta title** | Planning agents sécurité — PROGESTI |
| **Meta description** | Planning agents de sécurité : vacations, backups, alertes trous. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Planificateur / adjoint exploitation |
| **Scénario terrain** | Jeudi 11h : deux vacations à risque samedi nuit, pool backup épuisé. Anticiper dans le planning avant l'appel panique du client. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « planning agents de sécurité » — page process, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Sauver deux nuits samedi avant le week-end — Planning · semaine S12 |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-11`) |

### Persona

**Planificateur / adjoint exploitation**

### Pains

- deux nuits samedi sans backup identifié
- pool épuisé avant le week-end
- versions planning qui divergent
- publication tardive des vacations

### Jargon métier

- vacation
- backup
- pool
- publication
- créneau
- poste

### Objections

- On planifie le vendredi pour la semaine suivante
- Excel suffit à 20 agents
- Les agents ne regardent pas le planning

### Scénario terrain

Jeudi 11h : deux vacations à risque samedi nuit, pool backup épuisé. Anticiper dans le planning avant l'appel panique du client.

### Intent SEO

Intent SEO ciblé « planning agents de sécurité » — page process, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Planning agents sécurité — chaque vacation couverte, chaque jour

### Meta

**Title:** Planning agents sécurité — PROGESTI

**Description:** Planning agents de sécurité : vacations, backups, alertes trous. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Deux vacations à risque jeudi : le trou se voit samedi nuit
- H2 Démo — Sauver deux nuits samedi avant le week-end
- H2 Voir les trous avant le client
- H2 Une version publiée = une vérité terrain
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Voir les trous avant le client** — Statuts vacations : titulaire, backup, alerte — l'exploition traite la liste rouge en priorité.
  - Vue semaine / mois
  - Filtre site ou client
  - Duplication modèles récurrents
- **Une version publiée = une vérité terrain** — Fini le « j'avais l'ancien fichier » : publication synchronisée avec les apps agents.

### Démo produit (unique)

**Démo · planning agents**

## Sauver deux nuits samedi avant le week-end

Jeudi 11h : vacations à risque détectées, remplacements en 12 minutes.

*Scénario:* Jeudi 11h : deux vacations à risque samedi nuit, pool backup épuisé. Anticiper dans le planning avant l'appel panique du client.

**Étapes:**
- **Scan** — Semaine S12 — 2 vacations nuit sans backup confirmé.
- **Pool** — 5 agents dispo nuit filtrés (compétence + distance).
- **Affectation** — Remplacement posé — statut vert.
- **Publish** — Agents notifiés, consignes site attachées.

**UI (Planning · semaine S12):**
- Semaine S12 → 2 vacations à risque (alert)
- Backup pool → 5 agents dispo (ok)
- Remplacement → Affecté en 12 min (ok)
- Publication → Agents notifiés (ok)

**Takeaway:** Le planning devient un outil de couverture — pas une photo figée du lundi.

### Preuves / process

**Couvrir avant l'appel panique**

> Anticiper jeudi coûte moins cher qu'excuser samedi à 2 h du matin.

- **Alertes vacations** — Créneaux sans titulaire ou backup.
- **Pool dispo** — Agents libres croisés compétences.
- **Publication** — Agents notifiés — une version unique.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-12 — /securite/pointage-vacations

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/pointage-vacations` |
| **Type** | process |
| **Mot-clé principal** | pointage agents sécurité |
| **H1** | Pointage vacations — savoir qui est réellement en poste |
| **Meta title** | Pointage vacations — PROGESTI |
| **Meta description** | Pointage vacations sécurité : présence réelle, fin de mois saine. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Comptable / exploitation fin de mois |
| **Scénario terrain** | Fin de mois : le client conteste 6 h sur un poste. Sans pointage début/fin, la marge part en litige. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « pointage agents sécurité » — page process, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Trancher le litige des 6 heures — Pointage · vacation nuit |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-12`) |

### Persona

**Comptable / exploitation fin de mois**

### Pains

- 6 h contestées sur un poste
- agents qui oublient de pointer
- double saisie planning → paie
- client qui compare bon de commande au réel

### Jargon métier

- pointage
- réalisé
- vacation
- écart
- heures facturables

### Objections

- Les agents tricheront
- Ça ralentit la prise de poste
- On pointe sur papier

### Scénario terrain

Fin de mois : le client conteste 6 h sur un poste. Sans pointage début/fin, la marge part en litige.

### Intent SEO

Intent SEO ciblé « pointage agents sécurité » — page process, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Pointage vacations — savoir qui est réellement en poste

### Meta

**Title:** Pointage vacations — PROGESTI

**Description:** Pointage vacations sécurité : présence réelle, fin de mois saine. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Sans pointage début/fin, la fin de mois devient un tribunal
- H2 Démo — Trancher le litige des 6 heures
- H2 Lier pointage et vacation planifiée
- H2 Tolérances et validation
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Lier pointage et vacation planifiée** — Un pointage hors vacation = alerte ; un pointage manquant = trou — l'exploition voit les deux.
  - Mobile agent
  - Vue bureau temps réel
  - Export paie / facturation
- **Tolérances et validation** — Quelques minutes d'écart : règles par site ou client, validation humaine avant facture.

### Démo produit (unique)

**Démo · pointage vacations**

## Trancher le litige des 6 heures

Vacation nuit : prévu 22h–06h, réel 21h58–06h04, écart 4 min à valider.

*Scénario:* Fin de mois : le client conteste 6 h sur un poste. Sans pointage début/fin, la marge part en litige.

**Étapes:**
- **Prévu** — Vacation 22h–06h site Delta attachée agent M.
- **Arrivée** — Pointage 21h58 — dans tolérance site.
- **Départ** — 06h04 — +4 min vs contrat.
- **Clôture** — Exploitation valide → ligne facture / paie.

**UI (Pointage · vacation nuit):**
- Vacation prévue → 22h–06h (ok)
- Arrivée réelle → 21h58 (ok)
- Départ réel → 06h04 (ok)
- Écart paie/client → 0h04 à valider (alert)

**Takeaway:** Le pointage protège votre marge autant que la relation client.

### Preuves / process

**Le réel qui alimente client et facture**

> « Il est parti à 5 h » vs pointage 06h04 — fin de discussion.

- **Début / fin** — Horodatage lié à la vacation planifiée.
- **Écarts** — Minutes à valider exploitation avant facture.
- **Preuve client** — Historique exportable en litige.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-13 — /securite/preuves-intervention

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/preuves-intervention` |
| **Type** | probleme |
| **Mot-clé principal** | preuve intervention sécurité |
| **H1** | Preuves & audits — quand le client demande le rapport, vous l'avez |
| **Meta title** | Preuves & audits — PROGESTI |
| **Meta description** | Preuves intervention sécurité : historiques, audits, exports client. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Commercial / exploitation face au donneur d'ordre |
| **Scénario terrain** | Email client 17h02 : « envoyez toutes les preuves semaine 11 ». Il faut sortir pointages + main courante sans fouiller WhatsApp. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « preuve intervention sécurité » — page probleme, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Compiler semaine 11 avant 18h — Export preuves · mars |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-13`) |

### Persona

**Commercial / exploitation face au donneur d'ordre**

### Pains

- demande preuve same-day
- 142 lignes à retrouver
- incidents éparpillés
- renouvellement contrat exigeant historique

### Jargon métier

- preuve
- audit
- export
- donneur d'ordre
- main courante
- pointage

### Objections

- On envoie un Excel maison
- Le client veut notre format
- Trop de clics

### Scénario terrain

Email client 17h02 : « envoyez toutes les preuves semaine 11 ». Il faut sortir pointages + main courante sans fouiller WhatsApp.

### Intent SEO

Intent SEO ciblé « preuve intervention sécurité » — page probleme, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Preuves & audits — quand le client demande le rapport, vous l'avez

### Meta

**Title:** Preuves & audits — PROGESTI

**Description:** Preuves intervention sécurité : historiques, audits, exports client. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Email client 17h02 : « envoyez les preuves semaine 11 »
- H2 Démo — Compiler semaine 11 avant 18h
- H2 Ce qu'on entend par « preuve » chez PROGESTI
- H2 Anticiper les audits récurrents
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Ce qu'on entend par « preuve » chez PROGESTI** — Présences, passages ronde, entrées main courante — traces opérationnelles, pas vidéo ni télésurveillance.
  - Horodatage
  - Lien vacation / site
  - Export période
- **Anticiper les audits récurrents** — Clients qui demandent chaque mois le même rapport : modèle de période + export — moins de stress équipe.

### Démo produit (unique)

**Démo · preuves intervention**

## Compiler semaine 11 avant 18h

Demande client : toutes preuves 12–18 mars, site entrepôt.

*Scénario:* Email client 17h02 : « envoyez toutes les preuves semaine 11 ». Il faut sortir pointages + main courante sans fouiller WhatsApp.

**Étapes:**
- **Filtre** — Site + dates 12–18 mars.
- **Pointages** — 142 lignes vacations pointées.
- **Incidents** — 3 événements main courante attachés.
- **Envoi** — PDF + lien lecture — mail client 17h48.

**UI (Export preuves · mars):**
- Demande client → Rapport 12–18 mars (alert)
- Pointages → 142 lignes (ok)
- Main courante → 3 événements (ok)
- Envoi → PDF + accès lecture (ok)

**Takeaway:** Vous transformez une urgence en routine — le renouvellement se gagne aussi là.

### Preuves / process

**Répondre factuellement sous pression**

> Le client ne veut pas votre bonne foi — il veut des lignes horodatées.

- **Période filtrée** — Semaine, site, agent — export ciblé.
- **Multi-source** — Pointages + main courante + rondes.
- **Envoi** — PDF ou accès lecture — sans reconstitution manuelle.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-14 — /securite/multi-sites

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/multi-sites` |
| **Type** | probleme |
| **Mot-clé principal** | gestion multi-sites sécurité |
| **H1** | Multi-sites sécurité — quand le portefeuille s'étend, le tableur lâche |
| **Meta title** | Multi-sites sécurité — PROGESTI |
| **Meta description** | Gestion multi-sites sécurité : portefeuille, consignes, couverture. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Dirigeant en croissance / resp. développement |
| **Scénario terrain** | Contrat gagné : +12 sites en 30 jours. Excel casse — consignes éparpillées, vacations oubliées sur site #9. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « gestion multi-sites sécurité » — page probleme, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Onboarder 12 sites sans oublier le #9 — Portefeuille · croissance |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-14`) |

### Persona

**Dirigeant en croissance / resp. développement**

### Pains

- nouveau contrat mal repris
- consignes site 12 jamais mises à jour
- exploitation noyée sous les onglets
- vacation oubliée après signature

### Jargon métier

- portefeuille
- onboarding
- site
- contrat
- vacation

### Objections

- On ajoutera des sites plus tard
- Chaque client est un monde
- ERP client suffit

### Scénario terrain

Contrat gagné : +12 sites en 30 jours. Excel casse — consignes éparpillées, vacations oubliées sur site #9.

### Intent SEO

Intent SEO ciblé « gestion multi-sites sécurité » — page probleme, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Multi-sites sécurité — quand le portefeuille s'étend, le tableur lâche

### Meta

**Title:** Multi-sites sécurité — PROGESTI

**Description:** Gestion multi-sites sécurité : portefeuille, consignes, couverture. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 +12 sites en 30 jours : Excel lâche avant vous
- H2 Démo — Onboarder 12 sites sans oublier le #9
- H2 Modèles pour ne pas réinventer chaque site
- H2 Gouvernance direction vs exploitation
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Modèles pour ne pas réinventer chaque site** — Industrie, copro, retail : dupliquez structure vacations + consignes — personnalisez ensuite.
  - Modèle par vertical
  - Checklist onboarding
  - Alertes consignes
- **Gouvernance direction vs exploitation** — Direction = KPI et alertes ; exploitation = affectations — même data, rôles différents.

### Démo produit (unique)

**Démo · multi sites**

## Onboarder 12 sites sans oublier le #9

Contrat gagné : checklist site, consignes, vacations — alerte sur fiche stale.

*Scénario:* Contrat gagné : +12 sites en 30 jours. Excel casse — consignes éparpillées, vacations oubliées sur site #9.

**Étapes:**
- **Import** — 12 fiches sites depuis modèle industriel.
- **Vacations** — Modèle 3×8 appliqué par site.
- **Alerte** — Site #12 consignes > 90 j — revue planifiée.
- **Direction** — Vue 47 sites — 1 alerte consignes.

**UI (Portefeuille · croissance):**
- Portefeuille → 47 sites actifs (ok)
- Site #12 → Consignes obsolètes (alert)
- Direction → Vue consolidée (ok)
- Nouveau contrat → Onboarding site 48h (ok)

**Takeaway:** Scale = process — PROGESTI porte le portefeuille, pas votre mémoire.

### Preuves / process

**Grandir sans perdre le site oublié**

> Site #12 avec consignes obsolètes — incident waiting to happen.

- **Vue consolidée** — Direction voit alertes tous sites.
- **Onboarding 48h** — Modèle site + vacations type.
- **Consignes versionnées** — Alerte si fiche trop vieille.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-15 — /securite/facturation-gardiennage

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/facturation-gardiennage` |
| **Type** | process |
| **Mot-clé principal** | facturation gardiennage |
| **H1** | Facturation gardiennage — facturez les heures faites, pas les heures estimées |
| **Meta title** | Facturation gardiennage — PROGESTI |
| **Meta description** | Facturation gardiennage : heures pointées → facture du réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Gérant / comptable société gardiennage |
| **Scénario terrain** | Clôture mensuelle : 280 h pointées, facture basée sur devis estimatif — 14 h non facturées découvertes après envoi. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « facturation gardiennage » — page process, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Clôture mars sans heures oubliées — Facturation · mars |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-15`) |

### Persona

**Gérant / comptable société gardiennage**

### Pains

- heures non facturées découvertes tard
- double saisie pointage → facture
- client compare bon de commande
- litiges fin de mois

### Jargon métier

- réalisé
- ligne facture
- devis
- écart
- heures facturables

### Objections

- On facture dans Sage
- Trop de détails par site
- Client impose son format

### Scénario terrain

Clôture mensuelle : 280 h pointées, facture basée sur devis estimatif — 14 h non facturées découvertes après envoi.

### Intent SEO

Intent SEO ciblé « facturation gardiennage » — page process, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Facturation gardiennage — facturez les heures faites, pas les heures estimées

### Meta

**Title:** Facturation gardiennage — PROGESTI

**Description:** Facturation gardiennage : heures pointées → facture du réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 280 h pointées, facture sur devis : 14 h perdues
- H2 Démo — Clôture mars sans heures oubliées
- H2 Chaîne vacation → validation → facture
- H2 Pas un ERP complet
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Chaîne vacation → validation → facture** — Exploitation valide les heures ; compta exporte ou finalise — une seule source de vérité.
  - Brouillon depuis pointages
  - Alertes écarts devis
  - Export comptable
- **Pas un ERP complet** — PROGESTI structure le réalisé facturable — votre expert-comptable garde la liasse fiscale.

### Démo produit (unique)

**Démo · facturation gardiennage**

## Clôture mars sans heures oubliées

312 h pointées — écart -4 h vs devis repéré avant envoi.

*Scénario:* Clôture mensuelle : 280 h pointées, facture basée sur devis estimatif — 14 h non facturées découvertes après envoi.

**Étapes:**
- **Collecte** — Vacations mars validées exploitation.
- **Lignes** — Brouillon facture généré depuis pointages.
- **Contrôle** — Écart -4 h site Gamma — ajustement.
- **Envoi** — Facture alignée bon de commande client.

**UI (Facturation · mars):**
- Vacations pointées → 312 h mars (ok)
- Lignes facture → Auto depuis réalisé (ok)
- Écart devis → -4 h détectées (alert)
- Impayé → Relance planifiée (ok)

**Takeaway:** La facture devient la conséquence du terrain — pas un pari fin de mois.

### Preuves / process

**Aligner facture et terrain**

> Découvrir 14 h non facturées après envoi — classique sans lien pointage.

- **Lignes auto** — Heures validées → brouillon facture.
- **Écarts devis** — -4 h détectées avant envoi.
- **Relances** — Suivi impayés planifié (orga commerciale).

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-16 — /securite/remplacer-excel

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/remplacer-excel` |
| **Type** | probleme |
| **Mot-clé principal** | remplacer Excel gardiennage |
| **H1** | Sortir d'Excel en sécurité — un système pour vacations et preuves |
| **Meta title** | Sortir d'Excel en sécurité — PROGESTI |
| **Meta description** | Remplacer Excel en gardiennage : une source bureau ↔ terrain. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Dirigeant TPE en bascule digitale |
| **Scénario terrain** | Deux versions du planning circulent le dimanche. Personne ne sait qui couvre le poste nuit — source de vérité manquante. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « remplacer Excel gardiennage » — page probleme, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Dimanche soir : une seule version du planning nuit — Migration · semaine 1 |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-16`) |

### Persona

**Dirigeant TPE en bascule digitale**

### Pains

- fichiers VERSION_FINALE
- groupes WhatsApp ingérables
- peur de perdre une semaine en migration
- équipe habituée au papier

### Jargon métier

- Excel
- migration
- source de vérité
- vacation
- pointage

### Objections

- On a toujours fait comme ça
- Pas le temps de former
- Coût vs Excel gratuit

### Scénario terrain

Deux versions du planning circulent le dimanche. Personne ne sait qui couvre le poste nuit — source de vérité manquante.

### Intent SEO

Intent SEO ciblé « remplacer Excel gardiennage » — page probleme, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Sortir d'Excel en sécurité — un système pour vacations et preuves

### Meta

**Title:** Sortir d'Excel en sécurité — PROGESTI

**Description:** Remplacer Excel en gardiennage : une source bureau ↔ terrain. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Deux plannings circulent le dimanche — qui couvre la nuit ?
- H2 Démo — Dimanche soir : une seule version du planning nuit
- H2 Migrer une semaine réelle, pas tout l'historique
- H2 Ce que Excel fait encore bien
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Migrer une semaine réelle, pas tout l'historique** — Commencez par la semaine courante + sites actifs — l'historique Excel archive, PROGESTI avance.
  - Import manuel guidé
  - Parallèle court autorisé
  - Support FR pour démarrage
- **Ce que Excel fait encore bien** — Analyses ad hoc — OK. Pilotage vacations et preuves — non.

### Démo produit (unique)

**Démo · remplacer excel**

## Dimanche soir : une seule version du planning nuit

Ancien Excel obsolète vs PROGESTI publié — vacation nuit identifiée.

*Scénario:* Deux versions du planning circulent le dimanche. Personne ne sait qui couvre le poste nuit — source de vérité manquante.

**Étapes:**
- **Constat** — Deux fichiers — conflit poste nuit site A.
- **Bascule** — Semaine courante saisie dans PROGESTI.
- **Publish** — Agents voient même vacation + consignes.
- **Clôture** — Pointages alimentent facture — zéro ressaisie.

**UI (Migration · semaine 1):**
- Planning Excel → Version obsolète (alert)
- Source PROGESTI → Bureau = terrain (ok)
- WhatsApp → Remplacé par affectations (ok)
- Fin de mois → Facture sans ressaisie (ok)

**Takeaway:** Excel reste pour la compta si vous voulez — pas pour piloter les vacations.

### Preuves / process

**Remplacer Excel sans big bang**

> Personne ne sait qui couvre la nuit si deux fichiers circulent.

- **Source unique** — Planning publié = ce que voient les agents.
- **WhatsApp ↓** — Affectations et consignes in-app.
- **Fin de mois** — Facture sans ressaisie depuis le tableur.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-17 — /securite/faq

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/faq` |
| **Type** | faq |
| **Mot-clé principal** | FAQ logiciel gardiennage |
| **H1** | FAQ sécurité — réponses courtes, utiles |
| **Meta title** | FAQ logiciel gardiennage |
| **Meta description** | FAQ logiciel gardiennage : prix, essai, mobile, CNAPS. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Dirigeant avant essai |
| **Scénario terrain** | Avant l'essai, le dirigeant veut prix, mobile, séparation propreté, et si les agents pointeront vraiment — réponses courtes sans blabla. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « FAQ logiciel gardiennage » — page faq, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Parcours décision en 4 questions — FAQ · décision |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-17`) |

### Persona

**Dirigeant avant essai**

### Pains

- prix caché derrière démo
- peur outil propreté déguisé
- doute adoption agents
- temps perdu en appels

### Jargon métier

- essai
- CB
- verticale
- pointage
- vacation

### Objections

- Encore un SaaS
- On nous appellera dix fois
- Pas le temps

### Scénario terrain

Avant l'essai, le dirigeant veut prix, mobile, séparation propreté, et si les agents pointeront vraiment — réponses courtes sans blabla.

### Intent SEO

Intent SEO ciblé « FAQ logiciel gardiennage » — page faq, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

FAQ sécurité — réponses courtes, utiles

### Meta

**Title:** FAQ logiciel gardiennage

**Description:** FAQ logiciel gardiennage : prix, essai, mobile, CNAPS. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Avant l'essai, vous voulez des réponses nettes
- H2 Démo — Parcours décision en 4 questions
- H2 Questions que tout dirigeant gardiennage pose
- H2 Où approfondir après la FAQ
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Questions que tout dirigeant gardiennage pose** — CNAPS, paie, vidéo : nous bornons le périmètre PROGESTI clairement — organisation vacations et preuves.
  - Pas conseil juridique
  - Pas télésurveillance
  - Pas ERP paie complet
- **Où approfondir après la FAQ** — Poste fixe, rondes, factu, multi-sites : le hub /securite oriente vers la page intent.

### Démo produit (unique)

**Démo · faq**

## Parcours décision en 4 questions

Simuler le check-list dirigeant avant clic essai.

*Scénario:* Avant l'essai, le dirigeant veut prix, mobile, séparation propreté, et si les agents pointeront vraiment — réponses courtes sans blabla.

**Étapes:**
- **Prix** — 29,99 € HT/mois tout inclus — page tarifs.
- **Essai** — 15 j sans CB — annulation simple.
- **Mobile** — Pointage Android / iOS agents.
- **Verticale** — Routes /securite — pas nettoyage.

**UI (FAQ · décision):**
- Question prix → 29,99 € HT/mois (ok)
- Question essai → 15 j sans CB (ok)
- Question mobile → Android / iOS (ok)
- Question verticale → Sécurité ≠ propreté (ok)

**Takeaway:** Si ça matche, vous testez sur un vrai site — pas un sandbox bidon.

### Preuves / process

**Décider en dix minutes**

> Pas de tunnel commercial pour savoir si ça matche une TPE gardiennage.

- **Tarif public** — 29,99 € HT/mois affiché — pas de devis caché.
- **Essai réel** — 15 j sans CB sur vos sites.
- **Verticale dédiée** — Sécurité ≠ propreté ≠ EV.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-18 — /securite/guide-organiser-vacations

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/guide-organiser-vacations` |
| **Type** | guide |
| **Mot-clé principal** | comment organiser planning gardiennage |
| **H1** | Guide pratique — organiser les vacations sans trou |
| **Meta title** | Guide : organiser les vacations de gardiennage |
| **Meta description** | Guide : organiser vacations gardiennage — posts, backups, factu. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Créateur société / resp. reprise exploitation |
| **Scénario terrain** | Nouvelle société : cartographier posts, figer créneaux, lister backups, puis seulement choisir l'outil — méthode avant logiciel. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « comment organiser planning gardiennage » — page guide, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Les 4 étapes sur un site pilote — Guide · site pilote |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-18`) |

### Persona

**Créateur société / resp. reprise exploitation**

### Pains

- posts flous « sécurité nuit »
- pas de liste backups
- factu déconnectée du réel
- achat logiciel prématuré

### Jargon métier

- poste
- créneau
- backup
- vacation
- réalisé

### Objections

- On achètera l'outil plus tard
- On n'a que 8 agents
- Le guide ne remplace pas l'action

### Scénario terrain

Nouvelle société : cartographier posts, figer créneaux, lister backups, puis seulement choisir l'outil — méthode avant logiciel.

### Intent SEO

Intent SEO ciblé « comment organiser planning gardiennage » — page guide, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Guide pratique — organiser les vacations sans trou

### Meta

**Title:** Guide : organiser les vacations de gardiennage

**Description:** Guide : organiser vacations gardiennage — posts, backups, factu. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Méthode d'abord, logiciel ensuite
- H2 Démo — Les 4 étapes sur un site pilote
- H2 Étape 1 — Nommer les posts (pas « agent nuit »)
- H2 Étape 2 à 4 — Staff, pointer, facturer
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Étape 1 — Nommer les posts (pas « agent nuit »)** — Chaque vacation doit avoir un poste, un site, un créneau — vocabulaire partagé bureau et terrain.
  - Fiche site minimale
  - Contacts client
  - Consignes accès
- **Étape 2 à 4 — Staff, pointer, facturer** — Backups listés, pointage non négociable, facture branchée sur le réel — ensuite seulement déploiement multi-sites.

### Démo produit (unique)

**Démo · guide organiser vacations**

## Les 4 étapes sur un site pilote

Appliquer la méthode sur un client avant généralisation.

*Scénario:* Nouvelle société : cartographier posts, figer créneaux, lister backups, puis seulement choisir l'outil — méthode avant logiciel.

**Étapes:**
- **Posts** — Cartographie accueil / portail / ronde site pilote.
- **Besoins** — Créneaux figés alignés contrat.
- **Staff** — Titulaires + 3 backups identifiés.
- **Factu** — Règle : heures pointées = lignes facture.

**UI (Guide · site pilote):**
- Étape 1 posts → Cartographie OK (ok)
- Étape 2 besoins → Créneaux figés (ok)
- Étape 3 staff → Backups listés (ok)
- Étape 4 factu → Lien pointage (ok)

**Takeaway:** PROGESTI accélère une méthode — ne la remplace pas.

### Preuves / process

**Structurer avant d'automatiser**

> Un logiciel sur un planning flou automatise le chaos.

- **Cartographie** — Posts nommés par site client.
- **Besoins** — Créneaux et volumes contractuels.
- **Staff & preuve** — Backups + lien pointage facture.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-19 — /securite/toulouse-occitanie

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/toulouse-occitanie` |
| **Type** | local |
| **Mot-clé principal** | logiciel gardiennage Toulouse |
| **H1** | Sécurité en Occitanie — outil FR, équipe près de Toulouse |
| **Meta title** | Logiciel gardiennage Toulouse / Occitanie |
| **Meta description** | Logiciel gardiennage Toulouse / Occitanie : support FR local. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Dirigeant gardiennage Toulouse / Occitanie |
| **Scénario terrain** | Société du 31 : veut parler à un humain, essayer sur un vrai site local, sans hotline offshore. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « logiciel gardiennage Toulouse » — page local, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Essai sur un site du 31 cette semaine — Occitanie · essai local |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-19`) |

### Persona

**Dirigeant gardiennage Toulouse / Occitanie**

### Pains

- support US décalé
- peur startup sans racines
- besoin démo en français métier
- clients locaux exigeants

### Jargon métier

- vacation
- site
- essai
- Occitanie
- gardiennage

### Objections

- Vous êtes trop petit
- On est only local
- Paris suffit pour le SaaS

### Scénario terrain

Société du 31 : veut parler à un humain, essayer sur un vrai site local, sans hotline offshore.

### Intent SEO

Intent SEO ciblé « logiciel gardiennage Toulouse » — page local, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Sécurité en Occitanie — outil FR, équipe près de Toulouse

### Meta

**Title:** Logiciel gardiennage Toulouse / Occitanie

**Description:** Logiciel gardiennage Toulouse / Occitanie : support FR local. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Vous voulez un interlocuteur, pas une hotline offshore
- H2 Démo — Essai sur un site du 31 cette semaine
- H2 Basé Occitanie, clients partout
- H2 Réseau gardiennage toulousain
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Basé Occitanie, clients partout** — Racines régionales ≠ limitation géographique : vacations Paris ou Lyon se gèrent identiquement.
  - Support FR
  - Démo vacations réelles
  - Essai sans CB
- **Réseau gardiennage toulousain** — PME locales et croissance : même tarif public 29,99 € HT/mois — pas de « surdevis région ».

### Démo produit (unique)

**Démo · toulouse occitanie**

## Essai sur un site du 31 cette semaine

Créneau démo + montage site pilote région toulousaine.

*Scénario:* Société du 31 : veut parler à un humain, essayer sur un vrai site local, sans hotline offshore.

**Étapes:**
- **Contact** — Échange avec équipe Tournefeuille.
- **Site pilote** — Un contrat local monté dans PROGESTI.
- **Agents** — 2 agents pointent — test réel 48 h.
- **Bilan** — Go / no-go avant fin essai 15 j.

**UI (Occitanie · essai local):**
- Support → Équipe Tournefeuille (ok)
- Société locale → Essai sur sites 31 (ok)
- Démo → Créneau cette semaine (ok)
- Déploiement → France entière OK (ok)

**Takeaway:** Le local rassure — le produit travaille sur tous vos sites France.

### Preuves / process

**Local où ça compte : la relation**

> Essayer sur un site du 31 avec quelqu'un qui connaît le métier vacation.

- **Équipe joignable** — Support basé Occitanie — pas ticket anonyme seul.
- **Démo métier** — Scénarios gardiennage, pas demo CRM générique.
- **France entière** — Produit non limité au 31 — local = confiance.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-20 — /securite/astreinte-nuit

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/astreinte-nuit` |
| **Type** | service |
| **Mot-clé principal** | planning agents sécurité nuit |
| **H1** | Nuits & astreintes — des postes tenus quand tout le monde dort |
| **Meta title** | Nuits & astreintes — PROGESTI |
| **Meta description** | Planning agents sécurité nuit : vacations, rondes, preuves. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Astreinte exploitation / gérant |
| **Scénario terrain** | 03h : ronde manquée signalée par le client. Vérifier titulaire, passages et main courante en temps réel. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « planning agents sécurité nuit » — page service, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Incident 03h : titulaire, ronde, main courante — Nuit · site Delta |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-20`) |

### Persona

**Astreinte exploitation / gérant**

### Pains

- ronde 02h non faite
- titulaire nuit indispo sans backup
- incident 03h mal remonté
- fatigue décisionnelle

### Jargon métier

- vacation nuit
- ronde
- astreinte
- relève
- main courante

### Objections

- La nuit on se débrouille
- Personne ne regarde l'app à 3 h
- On dort pas assez déjà

### Scénario terrain

03h : ronde manquée signalée par le client. Vérifier titulaire, passages et main courante en temps réel.

### Intent SEO

Intent SEO ciblé « planning agents sécurité nuit » — page service, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Nuits & astreintes — des postes tenus quand tout le monde dort

### Meta

**Title:** Nuits & astreintes — PROGESTI

**Description:** Planning agents sécurité nuit : vacations, rondes, preuves. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 03h : ronde manquée — vous devez trancher sans appeler dix agents
- H2 Démo — Incident 03h : titulaire, ronde, main courante
- H2 Préparer la nuit avant 18 h
- H2 Main courante nocturne
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Préparer la nuit avant 18 h** — Backups nuit, rondes attachées, consignes urgence — pas d'impro à minuit.
  - Pool nuit
  - Rondes critiques listées
  - Contacts client visibles
- **Main courante nocturne** — Incident 03h saisi mobile → exploitation notifiée → client informé au format pro.

### Démo produit (unique)

**Démo · astreinte nuit**

## Incident 03h : titulaire, ronde, main courante

Client signale ronde manquée — vérification sans réveiller toute l'équipe.

*Scénario:* 03h : ronde manquée signalée par le client. Vérifier titulaire, passages et main courante en temps réel.

**Étapes:**
- **Vacation** — 22h–06h titulaire confirmé + backup liste.
- **Ronde 02h** — Point Q4 — passage 02h07 OK.
- **Alerte** — Client dit Q6 manquant — historique Q6 02h31.
- **Clôture** — Main courante + preuve envoyée 06h15.

**UI (Nuit · site Delta):**
- Vacation 22h–06h → Titulaire confirmé (ok)
- Ronde 02h → Point passé (ok)
- Incident 03h → Main courante (alert)
- Relève 06h → Pointage OK (ok)

**Takeaway:** La nuit se pilote le jour — backups et rondes planifiés avant 22 h.

### Preuves / process

**Tenir la nuit comme le jour**

> Client qui appelle à 3 h — vous devez voir titulaire, ronde, incident en live.

- **Titulaire confirmé** — Backup identifié avant 22 h.
- **Rondes nuit** — Passages attendus vs réels.
- **Relève matin** — Pointage 06h pour clôture shift.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-21 — /securite/pme-entreprises

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/pme-entreprises` |
| **Type** | audience |
| **Mot-clé principal** | sécurité entreprises PME logiciel prestataire |
| **H1** | Sécurité pour PME — des sites pros, des vacations carrées |
| **Meta title** | Sécurité pour PME — PROGESTI |
| **Meta description** | Sécurité entreprises PME : accès, présence, audit client. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Commercial gardiennage secteur tertiaire PME |
| **Scénario terrain** | Siège PME : accès 7h–19h strict. Une absence non couverte = client pro qui juge immédiatement la fiabilité. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « sécurité entreprises PME logiciel prestataire » — page audience, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Audit surprise siège PME client — Siège PME · accueil |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-21`) |

### Persona

**Commercial gardiennage secteur tertiaire PME**

### Pains

- absence accueil vue par le DG
- audit sécurité client sans préavis
- consignes visiteurs mal tenues
- concurrence low-cost

### Jargon métier

- accueil
- vacation
- PME
- audit
- accès
- réalisé

### Objections

- PME paie peu
- Un seul poste
- Client ne veut pas d'app

### Scénario terrain

Siège PME : accès 7h–19h strict. Une absence non couverte = client pro qui juge immédiatement la fiabilité.

### Intent SEO

Intent SEO ciblé « sécurité entreprises PME logiciel prestataire » — page audience, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Sécurité pour PME — des sites pros, des vacations carrées

### Meta

**Title:** Sécurité pour PME — PROGESTI

**Description:** Sécurité entreprises PME : accès, présence, audit client. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Siège PME : une absence non couverte = confiance perdue
- H2 Démo — Audit surprise siège PME client
- H2 Posts accueil et accès PME
- H2 Renouvellement contrat PME
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Posts accueil et accès PME** — Peu de vacations mais zéro marge : titulaire, backup, consignes visiteurs — fiche site claire.
  - Plages horaires client
  - Procédure visiteur
  - Contact responsable site
- **Renouvellement contrat PME** — Historique propre = renégociation sans sueur — export période en deux clics.

### Démo produit (unique)

**Démo · pme entreprises**

## Audit surprise siège PME client

Visite QHSE client — preuves accueil semaine en cours.

*Scénario:* Siège PME : accès 7h–19h strict. Une absence non couverte = client pro qui juge immédiatement la fiabilité.

**Étapes:**
- **Contrat** — Accès 7h–19h — vacation accueil staffée.
- **Semaine** — Pointages quotidiens sans trou.
- **Audit** — Export présence + main courante visiteurs.
- **Facture** — Heures alignées bon de commande PME.

**UI (Siège PME · accueil):**
- Siège PME client → Accès 7h–19h (ok)
- Vacation accueil → Couverture OK (ok)
- Visite audit → Preuves prêtes (ok)
- Facture → Heures pointées (ok)

**Takeaway:** Vous vendez de la fiabilité — PROGESTI la documente.

### Preuves / process

**Fiabilité visible pour le client pro**

> Le DG PME n'attend pas le rapport mensuel pour virer un prestataire.

- **Accès horaires** — Vacations calées sur plages client.
- **Audit interne** — Preuves prêtes visite surprise.
- **Facture claire** — Heures pointées = ligne facture.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-22 — /securite/grands-comptes

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/grands-comptes` |
| **Type** | audience |
| **Mot-clé principal** | logiciel sécurité grands comptes |
| **H1** | Grands comptes sécurité — tenir le cadre contractuel sur tous les sites |
| **Meta title** | Grands comptes sécurité — PROGESTI |
| **Meta description** | Logiciel sécurité grands comptes : KPI, exports, multi-sites. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Directeur exploitation grands comptes |
| **Scénario terrain** | Comité trimestriel : 84 sites, KPI couverture et export 90 jours exigés sous 24 h. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « logiciel sécurité grands comptes » — page audience, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Comité trimestriel : export 90 j en une session — Grands comptes · T1 |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-22`) |

### Persona

**Directeur exploitation grands comptes**

### Pains

- comité sous 48 h
- 84 sites incohérents
- SLA vacation manquante
- renouvellement annuel exigeant

### Jargon métier

- SLA
- donneur d'ordre
- KPI
- contrat cadre
- audit

### Objections

- Le client impose son portail
- On a un SI interne
- PROGESTI trop PME

### Scénario terrain

Comité trimestriel : 84 sites, KPI couverture et export 90 jours exigés sous 24 h.

### Intent SEO

Intent SEO ciblé « logiciel sécurité grands comptes » — page audience, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Grands comptes sécurité — tenir le cadre contractuel sur tous les sites

### Meta

**Title:** Grands comptes sécurité — PROGESTI

**Description:** Logiciel sécurité grands comptes : KPI, exports, multi-sites. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 84 sites, KPI sous 24 h : le tableur meurt ici
- H2 Démo — Comité trimestriel : export 90 j en une session
- H2 Standardiser sans uniformiser bêtement
- H2 Relation avec le portail client
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Standardiser sans uniformiser bêtement** — Modèles vacations par typologie site — personnalisation consignes locale.
  - KPI direction
  - Exports longue période
  - Escalade écarts SLA
- **Relation avec le portail client** — Export PROGESTI → votre mise en forme DO — pas de connecteur magique garanti.

### Démo produit (unique)

**Démo · grands comptes**

## Comité trimestriel : export 90 j en une session

DO demande couverture + preuves — réponse avant 24 h.

*Scénario:* Comité trimestriel : 84 sites, KPI couverture et export 90 jours exigés sous 24 h.

**Étapes:**
- **Périmètre** — 84 sites contrat cadre Alpha.
- **KPI** — Couverture 98,2 % sur trimestre.
- **Écart** — 1 vacation à analyser site #41.
- **Envoi** — Export DO + plan action écart.

**UI (Grands comptes · T1):**
- Contrat cadre → 84 sites (ok)
- KPI couverture → 98,2 % (ok)
- Audit DO → Export 90 j (ok)
- Écart SLA → 1 vacation à analyser (alert)

**Takeaway:** L'échelle se gère par process — PROGESTI porte la data vacations.

### Preuves / process

**Tenir le cadre à l'échelle**

> Export 90 jours en 24 h — ou le comité suivant est tendu.

- **KPI couverture** — 98 %+ visible direction.
- **Audit DO** — Export période longue.
- **Écarts SLA** — Vacation manquante flaggée.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-23 — /securite/contrats-cadres

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/contrats-cadres` |
| **Type** | process |
| **Mot-clé principal** | contrat cadre gardiennage suivi |
| **H1** | Contrats cadres — l'exécution fait le renouvellement |
| **Meta title** | Contrats cadres — PROGESTI |
| **Meta description** | Contrat cadre gardiennage : exécution, preuves, renouvellement. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Commercial / DA contrats cadres |
| **Scénario terrain** | Renouvellement contrat cadre : prouver exécution volumes + preuves sur 12 mois — sinon marge perdue. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « contrat cadre gardiennage suivi » — page process, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Préparer le renouvellement cadre Alpha — Contrat cadre · mars |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-23`) |

### Persona

**Commercial / DA contrats cadres**

### Pains

- écart heures non vu avant renouvellement
- preuves 12 mois éparpillées
- facturation déconnectée cadre
- pénalités SLA

### Jargon métier

- contrat cadre
- volume
- réalisé
- renouvellement
- SLA

### Objections

- Le juridique gère le cadre
- Excel suffit pour volumes
- Client fixe le format

### Scénario terrain

Renouvellement contrat cadre : prouver exécution volumes + preuves sur 12 mois — sinon marge perdue.

### Intent SEO

Intent SEO ciblé « contrat cadre gardiennage suivi » — page process, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Contrats cadres — l'exécution fait le renouvellement

### Meta

**Title:** Contrats cadres — PROGESTI

**Description:** Contrat cadre gardiennage : exécution, preuves, renouvellement. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Renouvellement cadre : prouver 12 mois d'exécution
- H2 Démo — Préparer le renouvellement cadre Alpha
- H2 Suivre le cadre mois par mois
- H2 Cadre juridique vs exploitation
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Suivre le cadre mois par mois** — Alertes sous-consommation / dépassement — agir en cours de mois, pas au renouvellement.
  - Volumes par site
  - Lien facturation
  - Export 12 mois
- **Cadre juridique vs exploitation** — PROGESTI suit l'exécution — le juridique rédige le contrat.

### Démo produit (unique)

**Démo · contrats cadres**

## Préparer le renouvellement cadre Alpha

Mars : 1188 h vs 1200 h — analyse avant comité.

*Scénario:* Renouvellement contrat cadre : prouver exécution volumes + preuves sur 12 mois — sinon marge perdue.

**Étapes:**
- **Cadre** — 1200 h/mois réparties 84 sites.
- **Réalisé** — 1188 h pointées validées.
- **Analyse** — -12 h site #7 arrêt client.
- **Dossier** — Historique + factures → renouvellement.

**UI (Contrat cadre · mars):**
- Volume contractuel → 1200 h/mois (ok)
- Réalisé pointé → 1188 h (alert)
- Preuve renouvellement → Historique joint (ok)
- Facturation → Alignée cadre (ok)

**Takeaway:** Vous renouvelez avec des chiffres — pas avec des promesses.

### Preuves / process

**L'exécution fait le renouvellement**

> 1188 h pointées vs 1200 h cadre — écart à expliquer avant signature.

- **Volume cadre** — Heures contractuelles visibles.
- **Réalisé** — Pointages consolidés mensuels.
- **Preuve renouvellement** — Historique 12 mois joint.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-24 — /securite/petites-societes

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/petites-societes` |
| **Type** | audience |
| **Mot-clé principal** | logiciel gardiennage TPE |
| **H1** | Petites sociétés de sécurité — structurer sans se noyer |
| **Meta title** | Petites sociétés de sécurité — PROGESTI |
| **Meta description** | Logiciel gardiennage TPE : planning, pointage, facture simple. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Gérant TPE 5–15 agents |
| **Scénario terrain** | 8 agents, pas d'assistante : il faut planning + facture simple, tout inclus, sans usine à gaz. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « logiciel gardiennage TPE » — page audience, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Semaine 1 : 8 agents opérationnels — TPE · onboarding |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-24`) |

### Persona

**Gérant TPE 5–15 agents**

### Pains

- tout sur le gérant
- peur complexité SaaS
- budget serré
- clients qui demandent plus de preuves

### Jargon métier

- TPE
- vacation
- facture
- pointage
- backup

### Objections

- Excel gratuit
- On grandira plus tard
- Pas le temps former

### Scénario terrain

8 agents, pas d'assistante : il faut planning + facture simple, tout inclus, sans usine à gaz.

### Intent SEO

Intent SEO ciblé « logiciel gardiennage TPE » — page audience, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Petites sociétés de sécurité — structurer sans se noyer

### Meta

**Title:** Petites sociétés de sécurité — PROGESTI

**Description:** Logiciel gardiennage TPE : planning, pointage, facture simple. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 8 agents, pas d'assistante : tout doit tenir en une main
- H2 Démo — Semaine 1 : 8 agents opérationnels
- H2 Ce qu'une TPE utilise vraiment
- H2 Grandir ensuite
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Ce qu'une TPE utilise vraiment** — Planning, pointage, facture légère, consignes — pas 50 écrans ERP.
  - Tarif public
  - Support FR
  - Essai 15 j sans CB
- **Grandir ensuite** — Multi-sites et contrats cadres : même outil — pas de migration forcée.

### Démo produit (unique)

**Démo · petites societes**

## Semaine 1 : 8 agents opérationnels

Montage 3 sites, planning semaine, pointages, 1 facture brouillon.

*Scénario:* 8 agents, pas d'assistante : il faut planning + facture simple, tout inclus, sans usine à gaz.

**Étapes:**
- **J1** — 3 fiches sites + agents.
- **J2** — Planning semaine publié.
- **J4** — Premiers pointages OK.
- **J7** — Brouillon facture client A.

**UI (TPE · onboarding):**
- Effectif → 8 agents (ok)
- Prise en main → < 1 semaine (ok)
- Prix → 29,99 € HT/mois (ok)
- Modules → Tout inclus (ok)

**Takeaway:** Vous avez l'air plus grand que 8 agents — sans doubler la charge admin.

### Preuves / process

**Professionnaliser sans embaucher**

> 29,99 € HT/mois — moins qu'une heure perdue en litige client.

- **Prise en main** — Sites + vacations en jours, pas mois.
- **Tout inclus** — Pas 12 modules payants.
- **Mobile agents** — Pointage simple dès semaine 1.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-25 — /securite/controle-acces-consignes

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/controle-acces-consignes` |
| **Type** | process |
| **Mot-clé principal** | consignes accès agents sécurité |
| **H1** | Consignes & accès — l'info au bon agent, au bon moment |
| **Meta title** | Consignes & accès — PROGESTI |
| **Meta description** | Consignes accès agents : fiche site mobile à jour. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Exploitation / chef de site |
| **Scénario terrain** | Agent remplaçant sur site : mauvais code portail — 20 min perdus. Consignes doivent être sur mobile, à jour. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « consignes accès agents sécurité » — page process, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Remplaçant sur portail B — consignes v2 — Consignes · portail B |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-25`) |

### Persona

**Exploitation / chef de site**

### Pains

- codes dans SMS perdus
- consignes contradictoires
- remplaçant sans brief
- client demande traçabilité accès

### Jargon métier

- consignes
- code
- portail
- accès
- fiche site

### Objections

- On a déjà un Excel codes
- Le client gère les badges
- Pas notre métier

### Scénario terrain

Agent remplaçant sur site : mauvais code portail — 20 min perdus. Consignes doivent être sur mobile, à jour.

### Intent SEO

Intent SEO ciblé « consignes accès agents sécurité » — page process, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Consignes & accès — l'info au bon agent, au bon moment

### Meta

**Title:** Consignes & accès — PROGESTI

**Description:** Consignes accès agents : fiche site mobile à jour. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Mauvais code portail : 20 minutes perdues, client agacé
- H2 Démo — Remplaçant sur portail B — consignes v2
- H2 Périmètre clair : orga, pas contrôle physique
- H2 Màj consignes sans email perdu
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Périmètre clair : orga, pas contrôle physique** — Codes, procédures, contacts — pas de promesse lecteur badge intégré.
  - Fiche site versionnée
  - Mobile agent
  - Lien main courante
- **Màj consignes sans email perdu** — Publication fiche → agents affectés voient la version — fin du « je ne l'avais pas reçu ».

### Démo produit (unique)

**Démo · controle acces consignes**

## Remplaçant sur portail B — consignes v2

Agent vacation lit code à jour — incident évité.

*Scénario:* Agent remplaçant sur site : mauvais code portail — 20 min perdus. Consignes doivent être sur mobile, à jour.

**Étapes:**
- **Fiche** — Code portail B v2 publié hier.
- **Brief** — Agent ouvre fiche 10 min avant poste.
- **Accès** — Entrée OK — pointage début.
- **Si erreur** — Incident saisi + contact client.

**UI (Consignes · portail B):**
- Code portail B → Fiche site à jour (ok)
- Agent vacation → Consignes lues (ok)
- Mauvais code saisi → Incident noté (alert)
- Pas de hardware → Org. infos seulement (ok)

**Takeaway:** Organisation des infos d'accès — le hardware reste chez le client.

### Preuves / process

**Information, pas matériel**

> Remplaçant sans consigne = incident accès garanti.

- **Version consignes** — Màj datée visible avant poste.
- **Lecture tracée** — Agent a ouvert fiche — preuve orga.
- **Incident** — Mauvais code → main courante.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-26 — /securite/main-courante

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/main-courante` |
| **Type** | process |
| **Mot-clé principal** | main courante sécurité logiciel |
| **H1** | Main courante — chaque incident tracé, pas perdu dans un groupe WhatsApp |
| **Meta title** | Main courante — PROGESTI |
| **Meta description** | Main courante sécurité logiciel : incidents horodatés, exports. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Agent / exploitation nuit |
| **Scénario terrain** | Tentative effraction 21h40 : saisie mobile, notification exploitation, compte-rendu client horodaté — pas 40 messages WhatsApp. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « main courante sécurité logiciel » — page process, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Effraction 21h40 : de la saisie au CR client — Main courante · nuit |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-26`) |

### Persona

**Agent / exploitation nuit**

### Pains

- incidents perdus dans le groupe
- client demande CR immédiat
- pas de lien vacation
- doublons exploitation

### Jargon métier

- main courante
- incident
- compte-rendu
- vacation
- horodatage

### Objections

- On appelle direct
- Trop long à saisir
- Les agents oublient

### Scénario terrain

Tentative effraction 21h40 : saisie mobile, notification exploitation, compte-rendu client horodaté — pas 40 messages WhatsApp.

### Intent SEO

Intent SEO ciblé « main courante sécurité logiciel » — page process, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Main courante — chaque incident tracé, pas perdu dans un groupe WhatsApp

### Meta

**Title:** Main courante — PROGESTI

**Description:** Main courante sécurité logiciel : incidents horodatés, exports. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 40 messages WhatsApp ≠ un registre d'incidents
- H2 Démo — Effraction 21h40 : de la saisie au CR client
- H2 Lier incident, site, vacation
- H2 PC sécurité et supervision
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Lier incident, site, vacation** — Chaque entrée rattachée au contexte — qui était en poste, où, quand.
  - Types configurables
  - Pièces note texte
  - Export période
- **PC sécurité et supervision** — Flux visible exploitation / PC — voir page PC sécurité (humain, pas vidéo).

### Démo produit (unique)

**Démo · main courante**

## Effraction 21h40 : de la saisie au CR client

Mobile agent → notification exploitation → export client.

*Scénario:* Tentative effraction 21h40 : saisie mobile, notification exploitation, compte-rendu client horodaté — pas 40 messages WhatsApp.

**Étapes:**
- **Saisie** — Agent en poste — type intrusion tentée.
- **Notify** — Exploitation alertée 21h42.
- **Actions** — Police + contact client notés.
- **CR** — Compte-rendu horodaté envoyé 22h10.

**UI (Main courante · nuit):**
- Incident 21h40 → Saisie agent mobile (ok)
- Type → Intrusion tentée (alert)
- Exploitation → Notifiée (ok)
- Client → Compte-rendu horodaté (ok)

**Takeaway:** Registre pro — pas archive chat illisible.

### Preuves / process

**Chaque incident compte**

> Effraction tentée : horodatage, type, actions — pas emoji dans un groupe.

- **Saisie terrain** — Agent mobile sur vacation en cours.
- **Typologie** — Intrusion, accès, conflit — filtres export.
- **Compte-rendu client** — Horodaté, lié site.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-27 — /securite/ssiap

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/ssiap` |
| **Type** | service |
| **Mot-clé principal** | organisation postes SSIAP logiciel |
| **H1** | Organisation postes SSIAP — planifier présence et consignes — pas remplacer la formation |
| **Meta title** | Organisation postes SSIAP — PROGESTI |
| **Meta description** | Organisation postes SSIAP : vacations, backups, preuves (pas formation). Essai 15 j sans CB. |
| **Persona** | Exploitation société avec postes SSIAP |
| **Scénario terrain** | Organisation postes SSIAP 1 sur site tertiaire : vacations, backups, preuves présence — sans prétendre former ou certifier. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « organisation postes SSIAP logiciel » — page service, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Staffer poste SSIAP 1 tertiaire — bon profil — SSIAP · orga postes |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-27`) |

### Persona

**Exploitation société avec postes SSIAP**

### Pains

- agent non SSIAP affecté par erreur
- client confond logiciel et formation
- preuve présence poste incendie
- backups SSIAP rares

### Jargon métier

- SSIAP
- poste
- vacation
- évacuation
- APS

### Objections

- Vous formez au SSIAP ?
- On a un ERP RH compétences
- Réglementation trop complexe

### Scénario terrain

Organisation postes SSIAP 1 sur site tertiaire : vacations, backups, preuves présence — sans prétendre former ou certifier.

### Intent SEO

Intent SEO ciblé « organisation postes SSIAP logiciel » — page service, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Organisation postes SSIAP — planifier présence et consignes — pas remplacer la formation

### Meta

**Title:** Organisation postes SSIAP — PROGESTI

**Description:** Organisation postes SSIAP : vacations, backups, preuves (pas formation). Essai 15 j sans CB.

### Outline H2/H3

- H2 Organiser les postes SSIAP, pas jouer le centre de formation
- H2 Démo — Staffer poste SSIAP 1 tertiaire — bon profil
- H2 Ce que PROGESTI fait sur SSIAP
- H2 Ce que PROGESTI ne fait pas
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Ce que PROGESTI fait sur SSIAP** — Affectation compétence, vacations, pointages, consignes site fournies par le client.
  - Filtre SSIAP affectation
  - Backups listés
  - Export présence
- **Ce que PROGESTI ne fait pas** — Pas formation SSIAP, pas avis réglementaire ERP, pas remplacement service sécurité incendie.

### Démo produit (unique)

**Démo · ssiap**

## Staffer poste SSIAP 1 tertiaire — bon profil

Vacation couverte agent SSIAP 1 — consignes évacuation lues.

*Scénario:* Organisation postes SSIAP 1 sur site tertiaire : vacations, backups, preuves présence — sans prétendre former ou certifier.

**Étapes:**
- **Poste** — Vacation SSIAP 1 immeuble tertiaire.
- **Profil** — Agent filtré SSIAP 1 — pas APS seul.
- **Consignes** — Procédure évacuation fiche site.
- **Preuve** — Pointage poste + historique DO.

**UI (SSIAP · orga postes):**
- Poste SSIAP 1 → Vacation couverte (ok)
- Organisation → Planning + consignes (ok)
- Formation → Hors scope PROGESTI (ok)
- Preuve présence → Pointage poste (ok)

**Takeaway:** Clarté : PROGESTI orga & trace — formation reste votre filière agréée.

### Preuves / process

**Organisationnel, pas réglementaire**

> Former au SSIAP ≠ planifier qui tient le poste mardi nuit.

- **Vacations poste** — SSIAP staffé vs compétence agent.
- **Consignes site** — Procédures évacuation accessibles — contenu client.
- **Preuve présence** — Pointage poste pour DO.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-28 — /securite/sites-sensibles

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/sites-sensibles` |
| **Type** | audience |
| **Mot-clé principal** | gardiennage sites sensibles |
| **H1** | Sites à enjeux opérationnels — procédures tenues, preuves sans promesses invraisemblables |
| **Meta title** | Sites à enjeux opérationnels — PROGESTI |
| **Meta description** | Gardiennage sites sensibles : consignes strictes, traçabilité ops. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Exploitation sites à procédures renforcées |
| **Scénario terrain** | Site à procédures renforcées (sans discours défense) : traçabilité consignes + activité pour le donneur d'ordre exigeant. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « gardiennage sites sensibles » — page audience, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Audit DO site à procédures renforcées — Site sensible · ops |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-28`) |

### Persona

**Exploitation sites à procédures renforcées**

### Pains

- DO exigeant sur traces
- consignes classification floue marketing
- agents non briefés
- audits fréquents

### Jargon métier

- consignes
- donneur d'ordre
- traçabilité
- procédure
- vacation

### Objections

- Vous êtes agréés défense ?
- Concurrent promet plus
- Trop sensible pour cloud

### Scénario terrain

Site à procédures renforcées (sans discours défense) : traçabilité consignes + activité pour le donneur d'ordre exigeant.

### Intent SEO

Intent SEO ciblé « gardiennage sites sensibles » — page audience, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Sites à enjeux opérationnels — procédures tenues, preuves sans promesses invraisemblables

### Meta

**Title:** Sites à enjeux opérationnels — PROGESTI

**Description:** Gardiennage sites sensibles : consignes strictes, traçabilité ops. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Sites exigeants : procédures tenues, sans discours défense
- H2 Démo — Audit DO site à procédures renforcées
- H2 Procédures et consignes renforcées
- H2 Bornes du discours
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Procédures et consignes renforcées** — Contenu fourni par le client — PROGESTI distribue, trace lecture, historise activité.
  - Versioning
  - Agents affectés seulement
  - Export audit
- **Bornes du discours** — Pas site défense / militaire promis — gardiennage privé classique à exigence haute.

### Démo produit (unique)

**Démo · sites sensibles**

## Audit DO site à procédures renforcées

Consignes v4 + historique activité 30 j — sans claim défense.

*Scénario:* Site à procédures renforcées (sans discours défense) : traçabilité consignes + activité pour le donneur d'ordre exigeant.

**Étapes:**
- **Consignes** — Version validée publiée — lecture tracée.
- **Vacations** — Postes couverts profils filtrés.
- **Activité** — Pointages + main courante 30 j.
- **Audit** — Export DO — périmètre ops gardiennage.

**UI (Site sensible · ops):**
- Site à enjeu → Procédures renforcées (ok)
- Consignes → Version validée (ok)
- Traçabilité → Historique complet (ok)
- Pas de promesse défense → Ops gardiennage only (ok)

**Takeaway:** Sérieux opérationnel — pas sur-promesse sectorielle.

### Preuves / process

**Ops réalistes, claims sobres**

> Traçabilité pro — pas « solution anti-terrorisme » marketing.

- **Procédures** — Versions validées, lecture agent.
- **Traçabilité** — Historique complet activité.
- **Périmètre honnête** — Gardiennage privé — pas défense.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-29 — /securite/btp-chantiers

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/btp-chantiers` |
| **Type** | audience |
| **Mot-clé principal** | sécurité chantier BTP gardiennage |
| **H1** | Gardiennage chantiers BTP — portails, horaires de travaux, vacations adaptées |
| **Meta title** | Gardiennage chantiers BTP — PROGESTI |
| **Meta description** | Sécurité chantier BTP : portails, renforts, preuves MOA. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Exploitation gardiennage BTP |
| **Scénario terrain** | Chantier : portail ouvert 6h, visiteurs badges, renfort week-end. Preuves pour MOA avant réception. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « sécurité chantier BTP gardiennage » — page audience, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Week-end chantier Lyon Est — renfort portail — Chantier · week-end |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-29`) |

### Persona

**Exploitation gardiennage BTP**

### Pains

- portail ouvert trop tôt
- visiteurs non tracés orga
- renfort dimanche oublié facture
- MOA demande preuves réception

### Jargon métier

- chantier
- MOA
- portail
- badge visiteur
- vacation

### Objections

- Chaque chantier unique
- Durée courte
- Client généraliste gère

### Scénario terrain

Chantier : portail ouvert 6h, visiteurs badges, renfort week-end. Preuves pour MOA avant réception.

### Intent SEO

Intent SEO ciblé « sécurité chantier BTP gardiennage » — page audience, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Gardiennage chantiers BTP — portails, horaires de travaux, vacations adaptées

### Meta

**Title:** Gardiennage chantiers BTP — PROGESTI

**Description:** Sécurité chantier BTP : portails, renforts, preuves MOA. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Chantier : portail 6 h, visiteurs badges, renfort dimanche
- H2 Démo — Week-end chantier Lyon Est — renfort portail
- H2 Vacations liées au phasage
- H2 Badges et accès
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Vacations liées au phasage** — Montée / fondation / finition : adapter posts et horaires — clôturer chantier proprement.
  - Site temporaire
  - Renforts week-end
  - Export MOA
- **Badges et accès** — Organisation consignes visiteurs — lecteurs badges restent MOA / entreprise générale.

### Démo produit (unique)

**Démo · btp chantiers**

## Week-end chantier Lyon Est — renfort portail

Portail 6h, badges visiteurs, pointages pour MOA.

*Scénario:* Chantier : portail ouvert 6h, visiteurs badges, renfort week-end. Preuves pour MOA avant réception.

**Étapes:**
- **Phase** — Vacations alignées planning travaux.
- **Samedi** — Renfort portail affecté 6h–14h.
- **Visiteurs** — Consignes badges — main courante si refus.
- **MOA** — Export pointages semaine réception.

**UI (Chantier · week-end):**
- Chantier Lyon Est → Portail ouvert 6h (ok)
- Contrôle accès → Badges visiteurs (ok)
- Vacation week-end → Renfort BTP (alert)
- Preuve → Pointages chantier (ok)

**Takeaway:** Chantier = temporalité courte — preuves et factu doivent suivre.

### Preuves / process

**Preuves pour la MOA**

> Réception chantier : qui tenait le portail samedi ?

- **Horaires travaux** — Vacations alignées phasage.
- **Visiteurs** — Consignes badges — orga, pas hardware.
- **Week-end** — Renforts tracés pointage.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-30 — /securite/pc-securite

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/pc-securite` |
| **Type** | process |
| **Mot-clé principal** | poste central sécurité exploitation |
| **H1** | Poste central (PC sécurité) — superviser l'exploitation, pas remplacer la vidéo |
| **Meta title** | Poste central (PC sécurité) — PROGESTI |
| **Meta description** | PC sécurité exploitation : coordination agents, main courante. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Superviseur PC / chef de site |
| **Scénario terrain** | PC site : coordination agents, flux main courante, consignes — exploitation humaine, pas écran télésurveillance. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « poste central sécurité exploitation » — page process, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Shift PC site Delta — coordination sans VMS — PC sécurité · Delta |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-30`) |

### Persona

**Superviseur PC / chef de site**

### Pains

- incidents noyés dans radio
- consignes obsolètes PC
- confusion avec télésurveillance
- agents non localisés orga

### Jargon métier

- PC sécurité
- supervision
- main courante
- consignes
- vacation

### Objections

- On a déjà la vidéo
- PC ne saisit pas
- Double écran

### Scénario terrain

PC site : coordination agents, flux main courante, consignes — exploitation humaine, pas écran télésurveillance.

### Intent SEO

Intent SEO ciblé « poste central sécurité exploitation » — page process, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Poste central (PC sécurité) — superviser l'exploitation, pas remplacer la vidéo

### Meta

**Title:** Poste central (PC sécurité) — PROGESTI

**Description:** PC sécurité exploitation : coordination agents, main courante. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 PC sécurité : coordonner l'humain, pas regarder 400 caméras
- H2 Démo — Shift PC site Delta — coordination sans VMS
- H2 Rôle du PC dans PROGESTI
- H2 Pas télésurveillance
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Rôle du PC dans PROGESTI** — Consulter vacations, suivre main courante, pousser consignes — pas flux RTSP caméras.
  - Vue site temps réel orga
  - Historique shift
  - Lien agents mobile
- **Pas télésurveillance** — Centrale distante vidéo = autre métier — cette page = PC sur site / exploitation locale.

### Démo produit (unique)

**Démo · pc securite**

## Shift PC site Delta — coordination sans VMS

2 agents + superviseur : main courante live, consignes, vacations.

*Scénario:* PC site : coordination agents, flux main courante, consignes — exploitation humaine, pas écran télésurveillance.

**Étapes:**
- **Shift** — Vacations jour visibles PC.
- **Incident** — Main courante remontée 14h22.
- **Consigne** — Procédure v3 envoyée agents mobile.
- **Clôture** — Synthèse shift exportée exploitation.

**UI (PC sécurité · Delta):**
- PC site Delta → 2 agents + superviseur (ok)
- Main courante → Flux temps réel (ok)
- Consignes → Procédures à jour (ok)
- Pas télésurveillance → Exploitation humaine (ok)

**Takeaway:** Humain d'abord — vidéo reste outil séparé si présent.

### Preuves / process

**Superviser sans usurper la vidéo**

> Le PC coordonne les agents — la vidéo reste autre système.

- **Vue agents** — Postes, vacations, statuts.
- **Flux incidents** — Main courante temps réel.
- **Consignes** — Procédures à jour partagées.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-31 — /securite/vacation-non-pourvue

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/vacation-non-pourvue` |
| **Type** | probleme |
| **Mot-clé principal** | vacation non pourvue gardiennage |
| **H1** | Vacation non pourvue — voir le trou avant l'appel client |
| **Meta title** | Vacation non pourvue — anticiper les trous |
| **Meta description** | Vacation non pourvue : alertes couverture avant l'appel client. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Resp. exploitation / gérant — 20 à 60 agents, multi-sites |
| **Scénario terrain** | Vendredi 17h40 : vacation 22h–06h sans titulaire confirmé. Le trou est rouge dans le planning — backup affecté avant que le client ne découvre la porte. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « vacation non pourvue gardiennage » — page probleme, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Vendredi 17h40 : sauver la vacation 22h–06h — Couverture · Entrepôt Nord |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-31`) |

### Persona

**Resp. exploitation / gérant — 20 à 60 agents, multi-sites**

### Pains

- client qui découvre le poste vide avant vous
- planning « OK » sur Excel mais personne confirmée
- backup introuvable à 21h sur WhatsApp
- litige « vous n'étiez pas là » sans historique d'affectation

### Jargon métier

- vacation non pourvue
- trou
- titulaire
- backup
- confirmation
- donneur d'ordre

### Objections

- On voit bien qui manque
- Les agents confirment toujours au feeling
- Trop d'alertes = on ignore

### Scénario terrain

Vendredi 17h40 : vacation 22h–06h sans titulaire confirmé. Le trou est rouge dans le planning — backup affecté avant que le client ne découvre la porte.

### Intent SEO

Intent SEO ciblé « vacation non pourvue gardiennage » — page probleme, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Vacation non pourvue — voir le trou avant l'appel client

### Meta

**Title:** Vacation non pourvue — anticiper les trous

**Description:** Vacation non pourvue : alertes couverture avant l'appel client. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 Le pire moment : découvrir le trou par le client
- H2 Démo — Vendredi 17h40 : sauver la vacation 22h–06h
- H2 Qu'est-ce qu'une vacation non pourvue (terrain)
- H2 Process anti-trou pour sociétés de gardiennage
- H2 Lien avec remplacement et facturation
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Qu'est-ce qu'une vacation non pourvue (terrain)** — Ce n'est pas seulement « personne n'est venu ». C'est l'absence de titulaire confirmé + absence de backup prêt avant le créneau. PROGESTI rend ce statut visible pour l'exploitation.
  - Confirmation vs simple inscription Excel
  - Backup nommé avant le créneau
  - Alerte J-0 / J-1 selon vos règles d'orga
- **Process anti-trou pour sociétés de gardiennage** — Cartographier les postes critiques (accueil, portail, site industriel), imposer un backup sur les nuits, et traiter les alertes rouges comme une file d'attente — pas comme un SMS oublié.
  - *Posts critiques* : Ceux où le client voit le trou en 10 minutes.
  - *Nuits & week-ends* : Pool backup dédié, pas le même numéro WhatsApp pour tout.
- **Lien avec remplacement et facturation** — Une vacation sauvée doit rester traçable : qui a remplacé, quelles heures pointées, quelle ligne facturée. Voir aussi remplacement urgence et facturation gardiennage.

### Démo produit (unique)

**Démo · vacation non pourvue**

## Vendredi 17h40 : sauver la vacation 22h–06h

Trou rouge → backup briefé → client qui ne sait jamais qu'il y a eu un imprévu.

*Scénario:* Vendredi 17h40 : vacation 22h–06h sans titulaire confirmé. Le trou est rouge dans le planning — backup affecté avant que le client ne découvre la porte.

**Étapes:**
- **Alerte** — Vacation Entrepôt Nord sans titulaire confirmé — statut rouge.
- **Pool** — 3 agents nuit dispo, 1 déjà briefé sur le site.
- **Affectation** — Backup L. + consignes lues 17h52.
- **Suite** — Pointage 21h58 — historique prêt si audit.

**UI (Couverture · Entrepôt Nord):**
- Entrepôt Nord 22h–06h → Aucun agent confirmé (alert)
- Alerte J-0 17h40 → Trou visible exploitation (alert)
- Backup L. affecté → Consignes lues 17h52 (ok)
- Client → Pas d'appel « personne » (ok)

**Takeaway:** Le trou se gère dans le planning — pas dans la boîte vocale du client.

### Preuves / process

**Anticiper la vacation non pourvue**

> Si le trou est rouge à 17h, le client n'a pas à l'apprendre à 22h.

- **Statut couverture** — Titulaire / backup / trou — lisible d'un coup d'œil.
- **Alerte anticipée** — Vacations sans confirmation visibles avant le créneau.
- **Preuve d'affectation** — Qui a été prévu, qui a remplacé, à quelle heure.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---

# SEC-32 — /securite/remplacement-urgence

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | `/securite/remplacement-urgence` |
| **Type** | process |
| **Mot-clé principal** | remplacement agent sécurité urgence |
| **H1** | Remplacement d'urgence — couvrir le poste en minutes, pas en SMS |
| **Meta title** | Remplacement urgence agent sécurité |
| **Meta description** | Remplacement agent sécurité urgence : backup briefé en minutes. Essai 15 j sans CB. Dès 29,99 € HT/mois. |
| **Persona** | Chef d'exploitation / astreinte bureau — société 25–100 agents |
| **Scénario terrain** | 21h10 : agent titulaire se désiste pour la nuit. Pool backup, brief consignes mobile, pointage 21h54 — le poste tient sans fil WhatsApp de 40 messages. |
| **Intent + anti-cannibalisation** | Intent SEO ciblé « remplacement agent sécurité urgence » — page process, distincte du pilier et des sœurs proches. · Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves). |
| **Démo produit (unique)** | Remplacement en 8 minutes chrono — Remplacement · Portail Sud |
| **Specs source** | `src/lib/marketing/sec/specs.ts` (`SEC-32`) |

### Persona

**Chef d'exploitation / astreinte bureau — société 25–100 agents**

### Pains

- désistement 1 h avant vacation
- backup qui arrive sans connaître le digicode
- historique flou pour le donneur d'ordre
- double affectation par erreur sur deux sites

### Jargon métier

- backup
- remplacement
- astreinte
- confirmation
- consignes
- vacation

### Objections

- WhatsApp est plus rapide
- On connaît tous nos agents
- Trop de clics en urgence

### Scénario terrain

21h10 : agent titulaire se désiste pour la nuit. Pool backup, brief consignes mobile, pointage 21h54 — le poste tient sans fil WhatsApp de 40 messages.

### Intent SEO

Intent SEO ciblé « remplacement agent sécurité urgence » — page process, distincte du pilier et des sœurs proches.

### Anti-cannibalisation

Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).

### H1

Remplacement d'urgence — couvrir le poste en minutes, pas en SMS

### Meta

**Title:** Remplacement urgence agent sécurité

**Description:** Remplacement agent sécurité urgence : backup briefé en minutes. Essai 15 j sans CB. Dès 29,99 € HT/mois.

### Outline H2/H3

- H2 21h : le titulaire se désiste — et le fil WhatsApp explose
- H2 Démo — Remplacement en 8 minutes chrono
- H2 Checklist remplacement de dernière minute
- H2 Astreinte bureau et nuit
- H2 Ce que PROGESTI ne fait pas
- H2 FAQ + CTA essai/tarifs

**Corps long (spec):**
- **Checklist remplacement de dernière minute** — Identifier le poste, vérifier compétences (ex. SSIAP si requis — orga, pas formation), choisir un agent briefable, pousser consignes, confirmer pointage.
  - Prioriser agents déjà passés sur le site
  - Éviter double booking multi-sites
  - Tracer le motif de remplacement
- **Astreinte bureau et nuit** — Les nuits concentrent les désistements. Coupler cette page avec astreinte-nuit et vacation-non-pourvue pour un process complet alerte → remplacement → preuve.
- **Ce que PROGESTI ne fait pas** — Pas d'appel automatique aux agents à votre place comme un centre d'appel — l'outil structure l'affectation et la preuve ; l'humain décide.

### Démo produit (unique)

**Démo · remplacement urgence**

## Remplacement en 8 minutes chrono

Désistement → pool → affectation → brief → pointage.

*Scénario:* 21h10 : agent titulaire se désiste pour la nuit. Pool backup, brief consignes mobile, pointage 21h54 — le poste tient sans fil WhatsApp de 40 messages.

**Étapes:**
- **Signal** — Titulaire M. se désiste 21h10 — vacation 22h–06h.
- **Choix** — Pool : 3 dispos ; R. déjà passé sur le site.
- **Brief** — Consignes portail + contacts poussés mobile 21h18.
- **Preuve** — Pointage 21h54 — historique remplacement exportable.

**UI (Remplacement · Portail Sud):**
- Titulaire M. → Désistement 21h10 (alert)
- Pool backup → 3 agents dispo nuit (ok)
- Affectation R. → Brief mobile 21h18 (ok)
- Pointage entrée → 21h54 · poste tenu (ok)

**Takeaway:** Urgence maîtrisée = poste tenu + dossier propre le lendemain.

### Preuves / process

**Remplacer sans perdre la preuve**

> Le client ne veut pas votre stress — il veut un agent en poste avec les bonnes consignes.

- **Pool backup** — Disponibilités nuit / week-end visibles.
- **Brief mobile** — Consignes site lues avant prise de poste.
- **Trace** — Qui a remplacé qui, horodatage, pointage.

### Ton

Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.

### CTAs

- Essai 15 j sans CB
- Démo sur vos sites
- Tarifs publics

### Schema + maillage

Schema: SoftwareApplication, FAQPage

Liens:
- /logiciel-securite-gardiennage
- /securite
- /tarifs
- /essai-gratuit

### Checklist anti-générique

- [ ] Intent unique vs sœurs
- [ ] Démo uiRows différente des autres pages
- [ ] Pas fausse certif CNAPS / pas conseil juridique
- [ ] Prix dès 29,99 € HT/mois + essai sans CB


---
