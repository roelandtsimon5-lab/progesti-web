# Super prompts marketing — Espaces verts (25) + Sécurité (25)

> **Repo :** Progesti `web-seo-tech-p0`  
> **Règle d’or :** NE RIEN FUSIONNER entre EV, Sécurité et Propreté.  
> **Exécution :** pages data-driven via `IndustryLanding` + configs dans `src/lib/marketing/`.  
> **Validation :** `docs/pages-a-valider.md` — Simon valide page par page.  
> **Commit :** uniquement sur demande explicite.

## Architecture SEO proposée

```
/logiciel-espace-vert          ← pilier EV (money)
/espace-vert                   ← hub EV
/espace-vert/{slug}            ← 23 pages filles EV

/logiciel-securite-gardiennage ← pilier Sécurité (money)
/securite                      ← hub Sécurité
/securite/{slug}               ← 23 pages filles Sécurité
```

- **Intent mapping 1 page = 1 angle** (service / audience / process / problème / saison / local / FAQ / guide)
- **Maillage** : fille → hub + pilier + 2–3 sœurs + `/tarifs` + `/essai-gratuit`
- **Schema** : SoftwareApplication + FAQPage + canonical via `pageMeta`
- **Sitemap** : URLs ajoutées côté organique (pas de `/lp/**`)

**Charte graphique (non négociable)**
- Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73
- Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles
- Réutiliser `IndustryLanding` + `mergeIndustryConfig` + CTAs `cta.trial` / `cta.demo`

**SEO technique**
- `pageMeta` (canonical + OG), `SoftwareApplicationLd`, `FaqPageLd`
- Maillage interne vers hub verticale + 2–3 pages sœurs + `/tarifs` + `/essai-gratuit`
- Ajouter l’URL au `sitemap.ts` (organique)
- Ton humain, métier, pas de blabla IA ; faits prix/essai depuis `site.ts` / `trialCopy`
- **NE PAS fusionner** avec la verticale nettoyage (`/solutions/*` propreté reste séparée)

---

## PARTIE A — ESPACE VERT (25)

### EV-01 — Logiciel pour entreprise d’espaces verts — planning, terrain, facture

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/logiciel-espace-vert` |
| **Type** | pilier |
| **Mot-clé principal** | logiciel espace vert |
| **Secondaires** | logiciel entretien espaces verts · logiciel paysagiste · gestion entreprise espace vert |
| **H1** | Logiciel pour entreprise d’espaces verts — planning, terrain, facture |
| **Meta title** | Logiciel espaces verts — planning & facturation | PROGESTI |
| **Meta description** | Pilotez tonte, entretien et équipes multi-sites : planning, pointage mobile, devis et factures. Essai gratuit sans CB. |
| **Différenciation** | Pilier EV global — intent générique « logiciel espace vert », pas un service précis. |

**Architecture sections (ordre)**  
1. Hero SEO · 2. Empathie gérant EV · 3. Explorer modules (planning/pointage/factu) · 4. Preuves terrain · 5. Vs Excel/WhatsApp · 6. FAQ métier · 7. FinalPush

**Angle / ton**  
Dirigeant d’entreprise d’espaces verts qui perd le fil entre chantiers, météo et absences. Ton terrain, concret, sans jargon SaaS.

**CTAs**  
Essai gratuit · Voir une démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/logiciel-espace-vert`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-02 — Espaces verts — toutes les solutions PROGESTI

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert` |
| **Type** | hub |
| **Mot-clé principal** | solutions espaces verts PROGESTI |
| **Secondaires** | logiciel entretien espaces verts · pages métier paysagisme |
| **H1** | Espaces verts — toutes les solutions PROGESTI |
| **Meta title** | Espaces verts — logiciel gestion & entretien | PROGESTI |
| **Meta description** | Hub solutions espaces verts : entretien, paysagisme, planning équipes, syndics, collectivités. Pages métier et essai gratuit. |
| **Différenciation** | Hub navigation EV — pas de cannibalisation SEO sur un service. |

**Architecture sections (ordre)**  
1. Hero hub · 2. Grille pages filles · 3. Pour qui · 4. CTA essai · 5. Maillage pilier

**Angle / ton**  
Page index claire : orienter vers la bonne intention (service, audience, process).

**CTAs**  
Essai gratuit · Logiciel espaces verts → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-03 — Logiciel d’entretien d’espaces verts — passages & preuves

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/entretien-espaces-verts` |
| **Type** | service |
| **Mot-clé principal** | logiciel entretien espaces verts |
| **Secondaires** | gestion entretien espaces verts · planning entretien espaces verts |
| **H1** | Logiciel d’entretien d’espaces verts — passages & preuves |
| **Meta title** | Logiciel entretien espaces verts | PROGESTI |
| **Meta description** | Organisez l’entretien récurrent : sites, fréquences, pointage et preuves pour vos clients. Essai gratuit. |
| **Différenciation** | Intent « entretien » récurrent vs paysagisme / tonte seule. |

**Architecture sections (ordre)**  
1. Hero · 2. Douleurs entretien récurrent · 3. Modules utiles · 4. Preuves client · 5. FAQ · 6. CTA

**Angle / ton**  
Focus entretien récurrent (pas création paysagère).

**CTAs**  
Essai gratuit · Demander une démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/entretien-espaces-verts`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-04 — Logiciel paysagiste — devis, chantiers, facturation

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/paysagisme` |
| **Type** | service |
| **Mot-clé principal** | logiciel paysagiste |
| **Secondaires** | logiciel entreprise paysagisme · gestion chantier paysager |
| **H1** | Logiciel paysagiste — devis, chantiers, facturation |
| **Meta title** | Logiciel paysagiste — chantiers & devis | PROGESTI |
| **Meta description** | Devis, planning chantiers paysagers, preuves et factures. Pour entreprises de paysagisme. Essai gratuit. |
| **Différenciation** | Paysagisme / aménagement — pas entretien récurrent. |

**Architecture sections (ordre)**  
1. Hero · 2. Flux devis→chantier→facture · 3. Différence entretien · 4. Modules · 5. FAQ · 6. CTA

**Angle / ton**  
Chantiers / aménagement (ponctuel) vs entretien récurrent.

**CTAs**  
Essai gratuit · Voir tarifs → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/paysagisme`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-05 — Planning tonte multi-sites — sans oublier une pelouse

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/tonte-pelouse` |
| **Type** | service |
| **Mot-clé principal** | logiciel tonte pelouse entreprise |
| **Secondaires** | planning tonte espaces verts · gestion tontes multi-sites |
| **H1** | Planning tonte multi-sites — sans oublier une pelouse |
| **Meta title** | Logiciel planning tonte pelouse multi-sites | PROGESTI |
| **Meta description** | Planifiez les tontes par site et fréquence, pointez le terrain, facturez. Essai gratuit. |
| **Différenciation** | Focus tonte haute fréquence — pas élagage ni désherbage. |

**Architecture sections (ordre)**  
1. Hero · 2. Saisonnalité tonte · 3. Planning densifié · 4. Pointage · 5. FAQ · 6. CTA

**Angle / ton**  
Volume élevé, récurrence courte, pression saisonnière.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/tonte-pelouse`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-06 — Logiciel élagage — devis, équipes, preuves chantier

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/elagage` |
| **Type** | service |
| **Mot-clé principal** | logiciel élagueur |
| **Secondaires** | gestion chantier élagage · devis élagage entreprise |
| **H1** | Logiciel élagage — devis, équipes, preuves chantier |
| **Meta title** | Logiciel élagueur — devis & chantiers | PROGESTI |
| **Meta description** | Pilotez devis d’élagage, planning équipes et preuves avant/après. Essai gratuit. |
| **Différenciation** | Élagage spécialisé — pas tonte ni entretien général. |

**Architecture sections (ordre)**  
1. Hero · 2. Chantiers à risque / accès · 3. Devis · 4. Preuves · 5. FAQ · 6. CTA

**Angle / ton**  
Prestations spécialisées, souvent ponctuelles, accès et sécurité chantier.

**CTAs**  
Essai gratuit · Contact → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/elagage`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-07 — Désherbage & entretien des abords — planning multi-sites

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/desherbage` |
| **Type** | service |
| **Mot-clé principal** | logiciel désherbage entreprise |
| **Secondaires** | planning désherbage · entretien voiries espaces verts |
| **H1** | Désherbage & entretien des abords — planning multi-sites |
| **Meta title** | Logiciel désherbage & abords | PROGESTI |
| **Meta description** | Planifiez désherbage et entretien des abords, suivez les passages, facturez. Essai gratuit. |
| **Différenciation** | Désherbage / abords — intent distinct de tonte et élagage. |

**Architecture sections (ordre)**  
1. Hero · 2. Contrats collectivité/pro · 3. Récurrences · 4. Preuves · 5. FAQ · 6. CTA

**Angle / ton**  
Prestations souvent liées voiries / abords / contraintes environnementales.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/desherbage`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-08 — Arrosage & irrigation — planifier les passages d’entretien

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/arrosage-irrigation` |
| **Type** | service |
| **Mot-clé principal** | logiciel arrosage espaces verts |
| **Secondaires** | gestion irrigation entretien · passages arrosage |
| **H1** | Arrosage & irrigation — planifier les passages d’entretien |
| **Meta title** | Logiciel arrosage & irrigation espaces verts | PROGESTI |
| **Meta description** | Planifiez contrôles d’arrosage et passages irrigation, pointez, facturez. Essai gratuit. |
| **Différenciation** | Irrigation / arrosage — niche saisonnière distincte. |

**Architecture sections (ordre)**  
1. Hero · 2. Contrôles récurrents · 3. Saison sèche · 4. Preuves · 5. FAQ · 6. CTA

**Angle / ton**  
Maintenance / contrôles plutôt que pose seule.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/arrosage-irrigation`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-09 — Espaces verts pour collectivités — planning & reporting

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/collectivites` |
| **Type** | audience |
| **Mot-clé principal** | logiciel espaces verts collectivités |
| **Secondaires** | entretien espaces verts mairie · gestion marchés publics espaces verts |
| **H1** | Espaces verts pour collectivités — planning & reporting |
| **Meta title** | Logiciel espaces verts collectivités | PROGESTI |
| **Meta description** | Marchés et contrats collectivités : multi-sites, preuves de passages, facturation. Essai gratuit. |
| **Différenciation** | Audience collectivités — pas syndic ni entreprise privée. |

**Architecture sections (ordre)**  
1. Hero · 2. Contraintes collectivité · 3. Preuves / reporting · 4. Multi-sites · 5. FAQ · 6. CTA

**Angle / ton**  
Donneur d’ordre public / semi-public, besoin de traçabilité.

**CTAs**  
Essai gratuit · Parler à un humain → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/collectivites`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-10 — Espaces verts pour syndics & copropriétés

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/syndics-coproprietes` |
| **Type** | audience |
| **Mot-clé principal** | entretien espaces verts syndic |
| **Secondaires** | espaces verts copropriété logiciel · prestataire syndic paysagiste |
| **H1** | Espaces verts pour syndics & copropriétés |
| **Meta title** | Espaces verts syndics & copropriétés | PROGESTI |
| **Meta description** | Entretien d’espaces verts en copro : planning multi-immeubles, preuves pour le syndic. Essai gratuit. |
| **Différenciation** | Audience syndic côté EV — ne pas confondre avec /solutions/syndics (propreté). |

**Architecture sections (ordre)**  
1. Hero · 2. Attentes syndic · 3. Preuves · 4. Multi-immeubles · 5. FAQ · 6. CTA

**Angle / ton**  
Prestataire EV face au syndic (distinct de page nettoyage syndics).

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/syndics-coproprietes`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-11 — Espaces verts pour entreprises & sites privés

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/entreprises-sites-prives` |
| **Type** | audience |
| **Mot-clé principal** | entretien espaces verts entreprises |
| **Secondaires** | espaces verts sièges sociaux · prestataire green facility |
| **H1** | Espaces verts pour entreprises & sites privés |
| **Meta title** | Entretien espaces verts entreprises | PROGESTI |
| **Meta description** | Sièges, campuses, parkings végétalisés : planning, pointage, facturation. Essai gratuit. |
| **Différenciation** | Audience entreprises privées — pas collectivité ni syndic. |

**Architecture sections (ordre)**  
1. Hero · 2. Contraintes accès/horaires · 3. Multi-sites pro · 4. Factu · 5. FAQ · 6. CTA

**Angle / ton**  
Clients B2B privés (sièges, campuses).

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/entreprises-sites-prives`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-12 — Planning équipes espaces verts — multi-chantiers

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/planning-equipes` |
| **Type** | process |
| **Mot-clé principal** | planning équipes espaces verts |
| **Secondaires** | logiciel planning paysagiste · affectation agents espaces verts |
| **H1** | Planning équipes espaces verts — multi-chantiers |
| **Meta title** | Planning équipes espaces verts | PROGESTI |
| **Meta description** | Affectez agents et chantiers EV, gérez absences et remplacements. Essai gratuit. |
| **Différenciation** | Process planning EV — complementary to service pages. |

**Architecture sections (ordre)**  
1. Hero · 2. Douleurs planning · 3. Remplacements · 4. Vue semaine · 5. FAQ · 6. CTA

**Angle / ton**  
Process planning (pas service métier).

**CTAs**  
Essai gratuit · Voir planning nettoyage (maillage soft) → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/planning-equipes`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-13 — Pointage terrain espaces verts — preuves de passage

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/pointage-terrain` |
| **Type** | process |
| **Mot-clé principal** | pointage agents espaces verts |
| **Secondaires** | télégestion espaces verts · preuve passage paysagiste |
| **H1** | Pointage terrain espaces verts — preuves de passage |
| **Meta title** | Pointage terrain espaces verts | PROGESTI |
| **Meta description** | Pointage mobile des équipes EV, historique et preuves pour vos clients. Essai gratuit. |
| **Différenciation** | Focus pointage EV — distinct planning et factu. |

**Architecture sections (ordre)**  
1. Hero · 2. Fin des heures contestées · 3. Mobile · 4. Lien facturation · 5. FAQ · 6. CTA

**Angle / ton**  
Process pointage / preuves.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/pointage-terrain`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-14 — Devis & facturation espaces verts — sans double saisie

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/devis-facturation` |
| **Type** | process |
| **Mot-clé principal** | facturation entreprise espaces verts |
| **Secondaires** | devis paysagiste logiciel · facture entretien espaces verts |
| **H1** | Devis & facturation espaces verts — sans double saisie |
| **Meta title** | Devis & facturation espaces verts | PROGESTI |
| **Meta description** | Devis pros, factures alignées sur le terrain EV. Essai gratuit. |
| **Différenciation** | Focus devis/facture EV — pas planning. |

**Architecture sections (ordre)**  
1. Hero · 2. Du devis au réalisé · 3. Impayés · 4. Marges · 5. FAQ · 6. CTA

**Angle / ton**  
Process commercial / factu EV.

**CTAs**  
Essai gratuit · Tarifs → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/devis-facturation`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-15 — Haute saison espaces verts — tenir le printemps sans chaos

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/saison-printemps` |
| **Type** | saisonnier |
| **Mot-clé principal** | organisation entretien printemps espaces verts |
| **Secondaires** | planning haute saison espaces verts · tonte printemps |
| **H1** | Haute saison espaces verts — tenir le printemps sans chaos |
| **Meta title** | Planning haute saison espaces verts (printemps) | PROGESTI |
| **Meta description** | Préparez densification des tournées au printemps : planning, équipes, preuves. Essai gratuit. |
| **Différenciation** | Angle saisonnier printemps — vs automne/hiver. |

**Architecture sections (ordre)**  
1. Hero · 2. Pics de charge · 3. Densifier sans casser · 4. Checklist · 5. FAQ · 6. CTA

**Angle / ton**  
Saisonnier printemps / haute pousse.

**CTAs**  
Essai gratuit · Planning équipes → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/saison-printemps`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-16 — Automne & hiver espaces verts — ramassage, taille, suivi

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/saison-automne-hiver` |
| **Type** | saisonnier |
| **Mot-clé principal** | entretien espaces verts hiver |
| **Secondaires** | ramassage feuilles planning · entretien hivernal espaces verts |
| **H1** | Automne & hiver espaces verts — ramassage, taille, suivi |
| **Meta title** | Entretien espaces verts automne-hiver | PROGESTI |
| **Meta description** | Organisez ramassages, tailles et passages hors saison. Essai gratuit. |
| **Différenciation** | Saisonnier automne-hiver — complementary to printemps. |

**Architecture sections (ordre)**  
1. Hero · 2. Activités hors pic · 3. Maintenir la cadence · 4. FAQ · 5. CTA

**Angle / ton**  
Saison basse / travaux d’automne-hiver.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/saison-automne-hiver`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-17 — Multi-sites espaces verts — un portefeuille sous contrôle

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/multi-sites` |
| **Type** | probleme |
| **Mot-clé principal** | gestion multi-sites espaces verts |
| **Secondaires** | logiciel multi-chantiers paysagiste · portefeuille sites entretien |
| **H1** | Multi-sites espaces verts — un portefeuille sous contrôle |
| **Meta title** | Gestion multi-sites espaces verts | PROGESTI |
| **Meta description** | Pilotez un portefeuille de sites EV : fréquences, équipes, historique. Essai gratuit. |
| **Différenciation** | Problème multi-sites — transversal aux services. |

**Architecture sections (ordre)**  
1. Hero · 2. Douleur portefeuille · 3. Fiches sites · 4. Vision gérant · 5. FAQ · 6. CTA

**Angle / ton**  
Problème multi-sites (scalabilité).

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/multi-sites`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-18 — Logiciel espaces verts à Toulouse & en Occitanie

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/toulouse-occitanie` |
| **Type** | local |
| **Mot-clé principal** | logiciel espaces verts Toulouse |
| **Secondaires** | logiciel paysagiste Occitanie · gestion entreprise espaces verts Haute-Garonne |
| **H1** | Logiciel espaces verts à Toulouse & en Occitanie |
| **Meta title** | Logiciel espaces verts Toulouse / Occitanie | PROGESTI |
| **Meta description** | Éditeur basé près de Toulouse. Planning, pointage, facturation pour entreprises EV d’Occitanie. Essai gratuit. |
| **Différenciation** | Page géo Occitanie — unique angle local EV. |

**Architecture sections (ordre)**  
1. Hero local · 2. Proximité support · 3. Cas d’usage région · 4. FAQ · 5. CTA

**Angle / ton**  
Local SEO + proximité éditeur (Tournefeuille/Toulouse).

**CTAs**  
Essai gratuit · Appeler → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/toulouse-occitanie`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-19 — Remplacer Excel & WhatsApp en espaces verts

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/remplacer-excel` |
| **Type** | probleme |
| **Mot-clé principal** | remplacer Excel espaces verts |
| **Secondaires** | alternative WhatsApp planning paysagiste · sortir tableur entretien EV |
| **H1** | Remplacer Excel & WhatsApp en espaces verts |
| **Meta title** | Remplacer Excel en espaces verts | PROGESTI |
| **Meta description** | Passez du tableur et des groupes WhatsApp à un vrai planning + pointage + factures. Essai gratuit. |
| **Différenciation** | Intent « sortir d’Excel » EV — pas un service. |

**Architecture sections (ordre)**  
1. Hero · 2. Ce qui casse avec Excel · 3. Migration douce · 4. Avant/après · 5. FAQ · 6. CTA

**Angle / ton**  
Problème outil (Excel/WhatsApp).

**CTAs**  
Essai gratuit · Démo migration → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/remplacer-excel`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-20 — FAQ — logiciel espaces verts PROGESTI

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/faq` |
| **Type** | faq |
| **Mot-clé principal** | FAQ logiciel espaces verts |
| **Secondaires** | questions logiciel paysagiste · aide PROGESTI espaces verts |
| **H1** | FAQ — logiciel espaces verts PROGESTI |
| **Meta title** | FAQ logiciel espaces verts | PROGESTI |
| **Meta description** | Réponses claires sur planning, pointage, prix, essai pour entreprises d’espaces verts. |
| **Différenciation** | FAQ pure EV — pas guide long ni service. |

**Architecture sections (ordre)**  
1. Hero court · 2. FAQ longue · 3. Liens pages filles · 4. CTA

**Angle / ton**  
FAQ dédiée EV (featured snippets).

**CTAs**  
Essai gratuit · Contact → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/faq`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-21 — Guide — organiser l’entretien d’espaces verts sans chaos

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/guide-organiser-entretien` |
| **Type** | guide |
| **Mot-clé principal** | comment organiser entretien espaces verts |
| **Secondaires** | méthode planning espaces verts · process prestataire EV |
| **H1** | Guide — organiser l’entretien d’espaces verts sans chaos |
| **Meta title** | Guide : organiser l’entretien d’espaces verts | PROGESTI |
| **Meta description** | Méthode concrète : sites, fréquences, équipes, preuves, facturation. Pour gérants EV. |
| **Différenciation** | Guide process — pas page produit pure. |

**Architecture sections (ordre)**  
1. Hero guide · 2. Étapes 1–5 · 3. Erreurs fréquentes · 4. Outil · 5. CTA

**Angle / ton**  
Contenu éducatif (TOFU) qui convertit vers essai.

**CTAs**  
Essai gratuit · Voir entretien → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/guide-organiser-entretien`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-22 — Preuves de passage espaces verts — finis les litiges

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/preuves-passages` |
| **Type** | probleme |
| **Mot-clé principal** | preuve de passage espaces verts |
| **Secondaires** | justificatif entretien pelouse · litige passage paysagiste |
| **H1** | Preuves de passage espaces verts — finis les litiges |
| **Meta title** | Preuves de passage espaces verts | PROGESTI |
| **Meta description** | Justifiez les passages d’entretien auprès de clients et syndics. Pointage + historique. Essai gratuit. |
| **Différenciation** | Intent preuve/litige — distinct pointage technique. |

**Architecture sections (ordre)**  
1. Hero · 2. Litiges types · 3. Ce que change le pointage · 4. Reporting · 5. FAQ · 6. CTA

**Angle / ton**  
Problème preuve / litige.

**CTAs**  
Essai gratuit · Pointage terrain → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/preuves-passages`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-23 — Logiciel espaces verts pour TPE & indépendants

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/petites-entreprises` |
| **Type** | audience |
| **Mot-clé principal** | logiciel espaces verts TPE |
| **Secondaires** | logiciel paysagiste auto-entrepreneur · petit entretien espaces verts |
| **H1** | Logiciel espaces verts pour TPE & indépendants |
| **Meta title** | Logiciel espaces verts TPE | PROGESTI |
| **Meta description** | Simple, tout inclus, dès 29,99 € HT/mois. Pour petites équipes EV. Essai gratuit. |
| **Différenciation** | Audience TPE EV — vs grands comptes / collectivités. |

**Architecture sections (ordre)**  
1. Hero · 2. Simplicité · 3. Prix transparent · 4. Modules utiles · 5. FAQ · 6. CTA

**Angle / ton**  
Petites structures / prix d’entrée.

**CTAs**  
Essai gratuit · Tarifs → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/petites-entreprises`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-24 — Grands parcs & sites étendus — zones, équipes, suivi

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/grands-parcs` |
| **Type** | audience |
| **Mot-clé principal** | gestion grands parcs espaces verts |
| **Secondaires** | entretien parc multi-zones · logiciel green large site |
| **H1** | Grands parcs & sites étendus — zones, équipes, suivi |
| **Meta title** | Gestion grands parcs espaces verts | PROGESTI |
| **Meta description** | Structurez zones et équipes sur de grands sites verts. Planning et preuves. Essai gratuit. |
| **Différenciation** | Grands parcs / sites étendus — vs TPE. |

**Architecture sections (ordre)**  
1. Hero · 2. Complexité zones · 3. Équipes multiples · 4. Pilot · 5. FAQ · 6. CTA

**Angle / ton**  
Grands sites / complexité spatiale.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/grands-parcs`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

### EV-25 — Contrats annuels d’entretien — suivre l’exécution

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/espace-vert/contrats-annuels` |
| **Type** | process |
| **Mot-clé principal** | contrat annuel entretien espaces verts |
| **Secondaires** | suivi contrat espaces verts · renouvellement entretien EV |
| **H1** | Contrats annuels d’entretien — suivre l’exécution |
| **Meta title** | Contrats annuels espaces verts | PROGESTI |
| **Meta description** | Pilotez l’exécution des contrats annuels EV : planning, preuves, facturation. Essai gratuit. |
| **Différenciation** | Angle contrat annuel — commercial + exécution. |

**Architecture sections (ordre)**  
1. Hero · 2. Promesse vs réalisé · 3. Renouvellement · 4. Marge · 5. FAQ · 6. CTA

**Angle / ton**  
Contrats annuels / récurrence commerciale.

**CTAs**  
Essai gratuit · Facturation → `/essai-gratuit` · `/demo`

**Contraintes**  
**Charte graphique (non négociable)** - Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73 - Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles Canonical `/espace-vert/contrats-annuels`. Maillage hub `/espace-vert` + pilier `/logiciel-espace-vert`.

---

## PARTIE B — SÉCURITÉ (25)

### SEC-01 — Logiciel gardiennage & sécurité — planning agents, rondes, facture

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/logiciel-securite-gardiennage` |
| **Type** | pilier |
| **Mot-clé principal** | logiciel gardiennage |
| **Secondaires** | logiciel entreprise sécurité · logiciel agents de sécurité · gestion société gardiennage |
| **H1** | Logiciel gardiennage & sécurité — planning agents, rondes, facture |
| **Meta title** | Logiciel gardiennage & sécurité | PROGESTI |
| **Meta description** | Planifiez vos agents, suivez rondes et vacations, facturez. Pour sociétés de sécurité privée. Essai gratuit. |
| **Différenciation** | Pilier sécu global — pas un type de site. |

**Architecture sections (ordre)**  
1. Hero · 2. Empathie dirigeant sécurité · 3. Modules · 4. Vs Excel · 5. FAQ · 6. CTA

**Angle / ton**  
Pilier sécurité/gardiennage — intent générique logiciel.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/logiciel-securite-gardiennage`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-02 — Sécurité & gardiennage — solutions PROGESTI

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite` |
| **Type** | hub |
| **Mot-clé principal** | solutions sécurité PROGESTI |
| **Secondaires** | pages métier gardiennage · logiciel sûreté |
| **H1** | Sécurité & gardiennage — solutions PROGESTI |
| **Meta title** | Sécurité & gardiennage — logiciel gestion | PROGESTI |
| **Meta description** | Hub solutions sécurité : gardiennage, rondes, sites industriels, planning agents. Essai gratuit. |
| **Différenciation** | Hub sécu — pas cannibalisation service. |

**Architecture sections (ordre)**  
1. Hero hub · 2. Grille pages · 3. Audiences · 4. CTA

**Angle / ton**  
Index navigation sécu.

**CTAs**  
Essai gratuit · Pilier logiciel → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-03 — Logiciel société de gardiennage — vacations & preuves

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/gardiennage` |
| **Type** | service |
| **Mot-clé principal** | logiciel société de gardiennage |
| **Secondaires** | gestion gardiennage · planning gardiennage |
| **H1** | Logiciel société de gardiennage — vacations & preuves |
| **Meta title** | Logiciel société de gardiennage | PROGESTI |
| **Meta description** | Organisez vacations, sites et équipes de gardiennage. Pointage et facturation. Essai gratuit. |
| **Différenciation** | Gardiennage « site » — vs rondes ou event. |

**Architecture sections (ordre)**  
1. Hero · 2. Vacations · 3. Multi-sites · 4. Factu · 5. FAQ · 6. CTA

**Angle / ton**  
Service gardiennage classique.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/gardiennage`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-04 — Rondes & surveillance — planifier et prouver

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/rondes-surveillance` |
| **Type** | service |
| **Mot-clé principal** | logiciel rondes sécurité |
| **Secondaires** | surveillance ronde agents · preuve de ronde gardiennage |
| **H1** | Rondes & surveillance — planifier et prouver |
| **Meta title** | Logiciel rondes sécurité & surveillance | PROGESTI |
| **Meta description** | Planifiez les rondes, pointez les passages, gardez les preuves. Essai gratuit. |
| **Différenciation** | Rondes — distinct gardiennage poste fixe. |

**Architecture sections (ordre)**  
1. Hero · 2. Preuve de ronde · 3. Planning · 4. Reporting client · 5. FAQ · 6. CTA

**Angle / ton**  
Rondes mobiles / surveillance itinerante.

**CTAs**  
Essai gratuit · Pointage → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/rondes-surveillance`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-05 — Gestion des agents de sécurité — planning & présence

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/agents-securite` |
| **Type** | service |
| **Mot-clé principal** | logiciel gestion agents de sécurité |
| **Secondaires** | planning agents sécurité · RH agents gardiennage |
| **H1** | Gestion des agents de sécurité — planning & présence |
| **Meta title** | Logiciel gestion agents de sécurité | PROGESTI |
| **Meta description** | Affectez vos agents, suivez absences et vacations, centralisez le terrain. Essai gratuit. |
| **Différenciation** | Angle agents/RH — pas type de site. |

**Architecture sections (ordre)**  
1. Hero · 2. Équipe & vacations · 3. Absences · 4. Lien terrain · 5. FAQ · 6. CTA

**Angle / ton**  
Focus ressources humaines agents.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/agents-securite`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-06 — Sûreté des sites — organisation multi-sites

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/surete-sites` |
| **Type** | service |
| **Mot-clé principal** | logiciel sûreté des sites |
| **Secondaires** | gestion sûreté multi-sites · prestataire sûreté |
| **H1** | Sûreté des sites — organisation multi-sites |
| **Meta title** | Logiciel sûreté des sites | PROGESTI |
| **Meta description** | Pilotez la sûreté multi-sites : vacations, consignes, preuves. Essai gratuit. |
| **Différenciation** | Lexique « sûreté sites » — vs gardiennage commercial. |

**Architecture sections (ordre)**  
1. Hero · 2. Consignes & accès · 3. Multi-sites · 4. Reporting · 5. FAQ · 6. CTA

**Angle / ton**  
Sûreté / protection de sites (vocabulaire donneur d’ordre).

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/surete-sites`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-07 — Gardiennage sites industriels — planning & traçabilité

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/sites-industriels` |
| **Type** | audience |
| **Mot-clé principal** | gardiennage site industriel logiciel |
| **Secondaires** | sécurité site industriel planning · agents sécurité usine |
| **H1** | Gardiennage sites industriels — planning & traçabilité |
| **Meta title** | Gardiennage sites industriels | PROGESTI |
| **Meta description** | Usines, entrepôts, plateformes : vacations, rondes, preuves. Essai gratuit. |
| **Différenciation** | Sites industriels — vs commerces / copro / event. |

**Architecture sections (ordre)**  
1. Hero · 2. Contraintes industrielles · 3. Accès · 4. Reporting · 5. FAQ · 6. CTA

**Angle / ton**  
Audience / vertical site industriel.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/sites-industriels`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-08 — Sécurité centres commerciaux & retail

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/centres-commerciaux` |
| **Type** | audience |
| **Mot-clé principal** | sécurité centre commercial logiciel |
| **Secondaires** | gardiennage galerie commerciale · agents sécurité retail |
| **H1** | Sécurité centres commerciaux & retail |
| **Meta title** | Sécurité centres commerciaux | PROGESTI |
| **Meta description** | Planning agents, vacation week-end, preuves pour centres et galeries. Essai gratuit. |
| **Différenciation** | Retail/centre commercial — audience distincte. |

**Architecture sections (ordre)**  
1. Hero · 2. Pics fréquentation · 3. Multi-postes · 4. Reporting · 5. FAQ · 6. CTA

**Angle / ton**  
Retail / centres commerciaux.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/centres-commerciaux`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-09 — Sécurité événementielle — équipes & vacation one-shot

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/evenementiel` |
| **Type** | audience |
| **Mot-clé principal** | logiciel sécurité événementielle |
| **Secondaires** | planning agents événement · gardiennage concert festival |
| **H1** | Sécurité événementielle — équipes & vacation one-shot |
| **Meta title** | Logiciel sécurité événementielle | PROGESTI |
| **Meta description** | Organisez agents et postes pour événements : planning serré, preuves, facturation. Essai gratuit. |
| **Différenciation** | Event one-shot — vs contrats sites récurrents. |

**Architecture sections (ordre)**  
1. Hero · 2. One-shot · 3. Devis→exécution · 4. Factu rapide · 5. FAQ · 6. CTA

**Angle / ton**  
Événementiel ponctuel.

**CTAs**  
Essai gratuit · Devis/factu → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/evenementiel`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-10 — Gardiennage & sécurité en copropriété

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/coproprietes` |
| **Type** | audience |
| **Mot-clé principal** | gardiennage copropriété logiciel |
| **Secondaires** | sécurité immeuble syndic · agent sécurité résidence |
| **H1** | Gardiennage & sécurité en copropriété |
| **Meta title** | Gardiennage copropriétés | PROGESTI |
| **Meta description** | Vacations et présence en résidence : planning, preuves pour syndic. Essai gratuit. |
| **Différenciation** | Copro sécu — ne pas fusionner avec EV syndics ni nettoyage syndics. |

**Architecture sections (ordre)**  
1. Hero · 2. Attentes syndic · 3. Présence · 4. Reporting · 5. FAQ · 6. CTA

**Angle / ton**  
Copro / syndic côté sécurité (séparé EV et propreté).

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/coproprietes`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-11 — Planning agents de sécurité — vacations sans trou

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/planning-agents` |
| **Type** | process |
| **Mot-clé principal** | planning agents de sécurité |
| **Secondaires** | logiciel planning gardiennage · vacation planning sécurité |
| **H1** | Planning agents de sécurité — vacations sans trou |
| **Meta title** | Planning agents de sécurité | PROGESTI |
| **Meta description** | Construisez et ajustez les vacations, gérez absences et backups. Essai gratuit. |
| **Différenciation** | Process planning — complementary to gardiennage/rondes. |

**Architecture sections (ordre)**  
1. Hero · 2. Trous de vacation · 3. Remplacements · 4. Vue semaine · 5. FAQ · 6. CTA

**Angle / ton**  
Process planning sécu.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/planning-agents`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-12 — Pointage des vacations — présence prouvée

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/pointage-vacations` |
| **Type** | process |
| **Mot-clé principal** | pointage agents sécurité |
| **Secondaires** | pointage vacation gardiennage · présence agent sécurité |
| **H1** | Pointage des vacations — présence prouvée |
| **Meta title** | Pointage vacations sécurité | PROGESTI |
| **Meta description** | Pointage mobile des agents : arrivée, départ, historique. Essai gratuit. |
| **Différenciation** | Pointage vacations — vs preuve de ronde (proche mais angle présence poste). |

**Architecture sections (ordre)**  
1. Hero · 2. Présence réelle · 3. Litiges heures · 4. Lien factu · 5. FAQ · 6. CTA

**Angle / ton**  
Process pointage sécu.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/pointage-vacations`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-13 — Preuves d’intervention & rapports — répondre aux audits

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/preuves-intervention` |
| **Type** | probleme |
| **Mot-clé principal** | preuve intervention sécurité |
| **Secondaires** | rapport vacation gardiennage · justificatif ronde |
| **H1** | Preuves d’intervention & rapports — répondre aux audits |
| **Meta title** | Preuves d’intervention sécurité | PROGESTI |
| **Meta description** | Historique et preuves pour audits clients et litiges. Essai gratuit. |
| **Différenciation** | Angle audit/preuve — broader than pointage alone. |

**Architecture sections (ordre)**  
1. Hero · 2. Audits · 3. Litiges · 4. Historique · 5. FAQ · 6. CTA

**Angle / ton**  
Problème preuve / audit.

**CTAs**  
Essai gratuit · Rondes → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/preuves-intervention`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-14 — Multi-sites sécurité — portefeuille de postes sous contrôle

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/multi-sites` |
| **Type** | probleme |
| **Mot-clé principal** | gestion multi-sites sécurité |
| **Secondaires** | portefeuille sites gardiennage · logiciel sécurité multi-sites |
| **H1** | Multi-sites sécurité — portefeuille de postes sous contrôle |
| **Meta title** | Gestion multi-sites sécurité | PROGESTI |
| **Meta description** | Pilotez de nombreux sites de gardiennage : vacations, consignes, historique. Essai gratuit. |
| **Différenciation** | Multi-sites sécu — parallel but separate from EV multi-sites. |

**Architecture sections (ordre)**  
1. Hero · 2. Passage d’échelle · 3. Fiches sites · 4. Vision direction · 5. FAQ · 6. CTA

**Angle / ton**  
Scalabilité multi-sites sécu.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/multi-sites`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-15 — Facturation gardiennage — du réalisé à la facture

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/facturation-gardiennage` |
| **Type** | process |
| **Mot-clé principal** | facturation gardiennage |
| **Secondaires** | facture vacations sécurité · devis société sécurité |
| **H1** | Facturation gardiennage — du réalisé à la facture |
| **Meta title** | Facturation gardiennage & sécurité | PROGESTI |
| **Meta description** | Facturez les vacations réellement effectuées, suivez les impayés. Essai gratuit. |
| **Différenciation** | Facturation sécu — not planning. |

**Architecture sections (ordre)**  
1. Hero · 2. Heures facturables · 3. Impayés · 4. Devis · 5. FAQ · 6. CTA

**Angle / ton**  
Process factu sécu.

**CTAs**  
Essai gratuit · Tarifs → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/facturation-gardiennage`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-16 — Remplacer Excel & WhatsApp en sécurité privée

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/remplacer-excel` |
| **Type** | probleme |
| **Mot-clé principal** | remplacer Excel gardiennage |
| **Secondaires** | alternative WhatsApp planning sécurité · sortir tableur société sécurité |
| **H1** | Remplacer Excel & WhatsApp en sécurité privée |
| **Meta title** | Remplacer Excel en gardiennage | PROGESTI |
| **Meta description** | Passez à un planning + pointage + factures pour votre société de sécurité. Essai gratuit. |
| **Différenciation** | Sortir d’Excel sécu — parallel EV but separate URL tree. |

**Architecture sections (ordre)**  
1. Hero · 2. Limites Excel · 3. Migration · 4. Avant/après · 5. FAQ · 6. CTA

**Angle / ton**  
Problème Excel sécu.

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/remplacer-excel`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-17 — FAQ — logiciel sécurité & gardiennage

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/faq` |
| **Type** | faq |
| **Mot-clé principal** | FAQ logiciel gardiennage |
| **Secondaires** | questions logiciel sécurité privée · aide PROGESTI sécurité |
| **H1** | FAQ — logiciel sécurité & gardiennage |
| **Meta title** | FAQ logiciel gardiennage | PROGESTI |
| **Meta description** | Prix, essai, planning, pointage : réponses pour dirigeants de sociétés de sécurité. |
| **Différenciation** | FAQ pure sécu. |

**Architecture sections (ordre)**  
1. Hero · 2. FAQ longue · 3. Liens · 4. CTA

**Angle / ton**  
FAQ sécu.

**CTAs**  
Essai gratuit · Contact → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/faq`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-18 — Guide — organiser les vacations de gardiennage

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/guide-organiser-vacations` |
| **Type** | guide |
| **Mot-clé principal** | comment organiser planning gardiennage |
| **Secondaires** | méthode vacation sécurité · process société gardiennage |
| **H1** | Guide — organiser les vacations de gardiennage |
| **Meta title** | Guide : organiser les vacations de gardiennage | PROGESTI |
| **Meta description** | Méthode : posts, effectifs, backups, pointage, facturation. Pour dirigeants sécurité. |
| **Différenciation** | Guide process sécu — not product-only. |

**Architecture sections (ordre)**  
1. Hero guide · 2. Étapes · 3. Erreurs · 4. Outil · 5. CTA

**Angle / ton**  
Guide éducatif sécu.

**CTAs**  
Essai gratuit · Planning agents → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/guide-organiser-vacations`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-19 — Logiciel gardiennage à Toulouse & en Occitanie

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/toulouse-occitanie` |
| **Type** | local |
| **Mot-clé principal** | logiciel gardiennage Toulouse |
| **Secondaires** | logiciel sécurité Occitanie · société sécurité Haute-Garonne logiciel |
| **H1** | Logiciel gardiennage à Toulouse & en Occitanie |
| **Meta title** | Logiciel gardiennage Toulouse / Occitanie | PROGESTI |
| **Meta description** | Éditeur près de Toulouse. Planning agents, pointage, facturation pour sociétés de sécurité en Occitanie. |
| **Différenciation** | Géo sécu Occitanie — separate from EV local page. |

**Architecture sections (ordre)**  
1. Hero local · 2. Proximité · 3. CTA phone · 4. FAQ

**Angle / ton**  
Local SEO sécu.

**CTAs**  
Essai gratuit · Appeler → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/toulouse-occitanie`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-20 — Vacations de nuit & astreintes — planning sans faille

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/astreinte-nuit` |
| **Type** | service |
| **Mot-clé principal** | planning agents sécurité nuit |
| **Secondaires** | vacation nuit gardiennage · astreinte sécurité logiciel |
| **H1** | Vacations de nuit & astreintes — planning sans faille |
| **Meta title** | Planning vacations nuit sécurité | PROGESTI |
| **Meta description** | Organisez nuits et astreintes : équipes, backups, pointage. Essai gratuit. |
| **Différenciation** | Focus nuit/astreinte — not daytime gardiennage. |

**Architecture sections (ordre)**  
1. Hero · 2. Contraintes nuit · 3. Backups · 4. Preuves · 5. FAQ · 6. CTA

**Angle / ton**  
Nuit / astreinte (temporal).

**CTAs**  
Essai gratuit · Planning → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/astreinte-nuit`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-21 — Prestations sécurité pour PME & sièges

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/pme-entreprises` |
| **Type** | audience |
| **Mot-clé principal** | sécurité entreprises PME logiciel prestataire |
| **Secondaires** | gardiennage sièges PME · prestataire sécurité entreprises |
| **H1** | Prestations sécurité pour PME & sièges |
| **Meta title** | Gardiennage PME & sièges d’entreprise | PROGESTI |
| **Meta description** | Organisez vos prestations chez les PME : sites, vacations, preuves. Essai gratuit. |
| **Différenciation** | Clients PME — vs industriel / retail / event. |

**Architecture sections (ordre)**  
1. Hero · 2. Attentes PME · 3. Multi-clients · 4. Factu · 5. FAQ · 6. CTA

**Angle / ton**  
Audience clients PME (côté prestataire sécu).

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/pme-entreprises`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-22 — Grands comptes sécurité — reporting & multi-sites

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/grands-comptes` |
| **Type** | audience |
| **Mot-clé principal** | logiciel sécurité grands comptes |
| **Secondaires** | gardiennage contrat cadre · reporting sécurité grand compte |
| **H1** | Grands comptes sécurité — reporting & multi-sites |
| **Meta title** | Sécurité grands comptes multi-sites | PROGESTI |
| **Meta description** | Contrats cadres, nombreux sites, reporting exigeant. Planning et preuves. Essai gratuit. |
| **Différenciation** | Grands comptes — vs PME / TPE sécu. |

**Architecture sections (ordre)**  
1. Hero · 2. Exigences GC · 3. Reporting · 4. Scale · 5. FAQ · 6. CTA

**Angle / ton**  
Grands comptes / contrats cadres.

**CTAs**  
Essai gratuit · Contacter → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/grands-comptes`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-23 — Contrats cadres gardiennage — suivre l’exécution

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/contrats-cadres` |
| **Type** | process |
| **Mot-clé principal** | contrat cadre gardiennage suivi |
| **Secondaires** | exécution contrat sécurité · renouvellement gardiennage |
| **H1** | Contrats cadres gardiennage — suivre l’exécution |
| **Meta title** | Suivi contrats cadres gardiennage | PROGESTI |
| **Meta description** | Exécutez et documentez vos contrats cadres : vacations, preuves, facturation. Essai gratuit. |
| **Différenciation** | Contrats cadres sécu — parallel EV contrats annuels. |

**Architecture sections (ordre)**  
1. Hero · 2. Promesse vs réalisé · 3. Renouvellement · 4. Marge · 5. FAQ · 6. CTA

**Angle / ton**  
Contrats cadres process.

**CTAs**  
Essai gratuit · Facturation → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/contrats-cadres`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-24 — Logiciel gardiennage pour petites sociétés

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/petites-societes` |
| **Type** | audience |
| **Mot-clé principal** | logiciel gardiennage TPE |
| **Secondaires** | logiciel petite société sécurité · démarrer société gardiennage outil |
| **H1** | Logiciel gardiennage pour petites sociétés |
| **Meta title** | Logiciel gardiennage TPE | PROGESTI |
| **Meta description** | Simple et tout inclus dès 29,99 € HT/mois pour petites sociétés de sécurité. Essai gratuit. |
| **Différenciation** | TPE sécu — vs grands comptes. |

**Architecture sections (ordre)**  
1. Hero · 2. Simplicité · 3. Prix · 4. Essentiel modules · 5. FAQ · 6. CTA

**Angle / ton**  
TPE sécurité.

**CTAs**  
Essai gratuit · Tarifs → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/petites-societes`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

### SEC-25 — Consignes & accès sites — une fiche pour le terrain

| Champ | Valeur |
|------|--------|
| **Slug / URL** | `/securite/controle-acces-consignes` |
| **Type** | process |
| **Mot-clé principal** | consignes accès agents sécurité |
| **Secondaires** | fiche site gardiennage · consignes vacation logiciel |
| **H1** | Consignes & accès sites — une fiche pour le terrain |
| **Meta title** | Consignes et accès sites sécurité | PROGESTI |
| **Meta description** | Centralisez consignes, codes et infos d’accès pour vos agents. Essai gratuit. |
| **Différenciation** | Consignes/accès info — not hardware access control; unique ops angle. |

**Architecture sections (ordre)**  
1. Hero · 2. Info perdue = risque · 3. Fiche site · 4. Mobile · 5. FAQ · 6. CTA

**Angle / ton**  
Process consignes/accès (pas contrôle d’accès hardware).

**CTAs**  
Essai gratuit · Démo → `/essai-gratuit` · `/demo`

**Contraintes**  
Canonical `/securite/controle-acces-consignes`. Maillage hub `/securite` + pilier `/logiciel-securite-gardiennage`. Pas de fusion avec EV ni propreté.

---

## Checklist exécution agent

1. Configs TS générées (`espace-vert-pages.ts`, `securite-pages.ts`)
2. Routes hub + `[slug]` + piliers
3. Sitemap organique mis à jour
4. Suivi `docs/pages-a-valider.md`
5. **Pas de commit** sans demande Simon
