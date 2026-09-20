import fs from "fs";

const pages = [
  ["EV-01","pilier","/logiciel-espace-vert","logiciel espace vert","Logiciel pour entreprise d’espaces verts — planning, terrain, facture","Dirigeant PME paysagiste / entretien EV 15–40 salariés","Replanif orage lundi 7h, absences, factu du réalisé","Money pilier — pas service ni audience","Rejouer le lundi pluvieux (planning multi-sites)"],
  ["EV-02","hub","/espace-vert","solutions espaces verts PROGESTI","Espaces verts — toutes les solutions PROGESTI","Visiteur indécis (multi-personas)","3 parcours cliquables PME / collectivité / syndic","Hub navigation — 0 cannibalisation service","Orientation hub → page fille + écran produit associé"],
  ["EV-03","service","/espace-vert/entretien-espaces-verts","logiciel entretien espaces verts","Logiciel d’entretien d’espaces verts — passages & preuves","Exploitation contrats annuels multi-sites","Du contrat bihebdo à la tournée semaine","≠ paysagisme / ≠ tonte seule","Paramétrer fréquences multi-prestations sur une résidence"],
  ["EV-04","service","/espace-vert/paysagisme","logiciel paysagiste","Logiciel paysagiste — devis, chantiers, facturation","Gérant / conducteur travaux création","Devis villa → planning 4j + conflit mini-pelle","≠ entretien récurrent","Flux devis signé → chantier → facture"],
  ["EV-05","service","/espace-vert/tonte-pelouse","planning tonte multi-sites","Planning tonte multi-sites — sans oublier une pelouse","Chef d’équipe tournées volume","14 pelouses mardi + autoportée au garage","≠ entretien global / ≠ printemps","Construire tournée tonte avec contrainte engins"],
  ["EV-06","service","/espace-vert/elagage","logiciel élagage","Logiciel élagage — devis, équipes, preuves chantier","Élagueur / pôle élagage EV","Nacelle louée + grimpeur + voisinage","≠ tonte / ≠ haies","Planifier élagage avec ressource nacelle"],
  ["EV-07","service","/espace-vert/desherbage","planning désherbage multi-sites","Désherbage & abords — planning multi-sites","Exploitation + syndic/collectivité exigeants","Ajouter désherbage mensuel sans polluer tonte","≠ entretien fourre-tout","Fréquence abords distincte + tournée vendredi"],
  ["EV-08","service","/espace-vert/arrosage-irrigation","planning arrosage espaces verts","Arrosage & irrigation — planifier les passages","Exploitation post-plantation / canicule","Contrôles programmateurs + arrosages manuels","≠ IoT irrigation — passages humains","Contrôles irrigation semaine canicule"],
  ["EV-09","audience","/espace-vert/collectivites","logiciel espaces verts collectivités","Espaces verts collectivités — planning & reporting","DST / responsable EV / titulaire marché","Reporting S18 pour conseil municipal","≠ syndics / ≠ grands parcs seuls","Reporting marché 64 sites"],
  ["EV-10","audience","/espace-vert/syndics-coproprietes","espaces verts syndics copropriétés","Espaces verts syndics & copropriétés — preuves","Entreprise EV face syndic","Réclamation pelouse → historique 90s","≠ /solutions/syndics propreté","Réponse réclamation avec pointages"],
  ["EV-11","audience","/espace-vert/entreprises-sites-prives","entretien espaces verts entreprises","Espaces verts entreprises & sites privés","PME EV portefeuille B2B","Groupe 5 sites / créneaux accès","≠ syndics","Tournée sièges avec consignes d’accès"],
  ["EV-12","process","/espace-vert/planning-equipes","planning équipes espaces verts","Planning équipes EV multi-chantiers","Responsable exploitation","Réaffecter après arrêt 6h50","Process transverse ≠ service","Réaffectation live backup"],
  ["EV-13","process","/espace-vert/pointage-terrain","pointage terrain espaces verts","Pointage terrain EV — preuves","Chefs d’équipe / gérants","Suivre tournée live vs appel syndic","Alimente preuves & factu","Live 8 sites pointages"],
  ["EV-14","process","/espace-vert/devis-facturation","devis facturation espaces verts","Devis & facturation EV sans double saisie","Gérant / assistante admin","Fin de mois forfaits + 2 ponctuels","≠ page paysagisme seule","Facturer réalisé sans oublis"],
  ["EV-15","saisonnier","/espace-vert/saison-printemps","organisation espaces verts printemps","Haute saison EV — tenir le printemps","Exploitation anticipant le pic","Basculer 40 sites en hebdo avant S16","≠ tonte service","Plan de charge printemps"],
  ["EV-16","saisonnier","/espace-vert/saison-automne-hiver","entretien espaces verts automne hiver","Automne & hiver EV — ramassage, taille, suivi","Exploitation basse saison","Plan feuilles + tailles + renew","≠ printemps","Plan novembre S44–S50"],
  ["EV-17","process","/espace-vert/multi-sites","gestion multi-sites espaces verts","Multi-sites EV — portefeuille sous contrôle","PME en croissance 30→80 sites","Alertes retards fréquences","≠ grands parcs (zones)","Exceptions portefeuille 78 sites"],
  ["EV-18","local","/espace-vert/toulouse-occitanie","logiciel espaces verts Toulouse","Logiciel EV Toulouse & Occitanie","Dirigeant EV agglo 31","Essai 20 sites Blagnac/Labège","Local NAP réel — pas city-spam","Prise en main portefeuille 31"],
  ["EV-19","probleme","/espace-vert/remplacer-excel","remplacer Excel espaces verts","Remplacer Excel & WhatsApp en EV","Gérant fatigué des fichiers v7","Migrer 15 sites pilotes","Problème transverse","Atelier migration après-midi"],
  ["EV-20","faq","/espace-vert/faq","FAQ logiciel espaces verts","FAQ logiciel espaces verts PROGESTI","Décideur avant essai","3 objections → 3 écrans","FAQ EV ≠ /faq global","FAQ interactive modules"],
  ["EV-21","guide","/espace-vert/guide-organiser-entretien","organiser entretien espaces verts","Guide — organiser l’entretien sans chaos","Dirigeant structurants","Étape 3 tournées dans l’outil","Guide E-E-A-T","Guide → écran tournées"],
  ["EV-22","probleme","/espace-vert/preuves-passages","preuves de passage espaces verts","Preuves de passage — finis les litiges","Exploitation / commercial renew","Dossier litige 90s","≠ pointage (capture)","Historique vs réclamation"],
  ["EV-23","audience","/espace-vert/petites-entreprises","logiciel espaces verts TPE","Logiciel EV pour TPE & indépendants","Artisan / <10 salariés","Setup 8 sites dimanche soir","≠ multi-sites croissance","Setup express TPE"],
  ["EV-24","audience","/espace-vert/grands-parcs","gestion grands parcs espaces verts","Grands parcs & sites étendus","Régie / prestataire parc","Découper 12 ha en 7 zones","≠ multi-sites adresses","Zones parc central"],
  ["EV-25","process","/espace-vert/contrats-annuels","contrat annuel entretien espaces verts","Contrats annuels — suivi d’exécution","Commercial + exploitation renew","Dossier renew 6 sem avant","Cycle de vie contrat","Bilan exécution renew"],
  ["EV-26","process","/espace-vert/engins-materiel","gestion engins espaces verts","Engins & matériel EV — conflits ressources","Exploitation / magasinier","Double booking nacelle","≠ GMAO","Conflit nacelle jeudi"],
  ["EV-27","process","/espace-vert/photos-avant-apres","photos avant après espaces verts","Photos AV/AP — preuves visuelles","Chefs chantier élagage/création","Checklist AV/AP mobile","≠ preuves horodatage seules","Checklist photo élagage"],
  ["EV-28","probleme","/espace-vert/replanification-meteo","replanifier tournée espaces verts pluie","Replanification météo — tournées sous la pluie","Gérant / chef d’équipe","Playbook orage 9 pelouses","≠ pilier global","Playbook orage 7h"],
  ["EV-29","audience","/espace-vert/amenageurs-promoteurs","espaces verts aménageurs promoteurs","EV aménageurs & promoteurs","Paysagiste face promo","Réception lot demain 10h","≠ sites privés entretien","Réception lot C"],
  ["EV-30","service","/espace-vert/taille-haies","planning taille de haies","Taille de haies multi-sites","Exploitation volume haies","Tournée vendredi dédiée","≠ élagage arbres","Tournée haies ≠ tonte"],
  ["EV-31","process","/espace-vert/absences-remplacements","remplacement absence équipe espaces verts","Absences & remplacements équipes EV","Responsable exploitation","Backup conducteur 6h40","≠ planning général","Remplacement 15 min"],
  ["EV-32","service","/espace-vert/cimetieres-voirie","entretien cimetières voiries espaces verts","Cimetières & voiries végétalisées","Prestataire / régie","Mercredi cimetière + 8 RP","Niche publique sensible","Tournée sites sensibles"],
];

const lines = [];
lines.push(`# Super prompts v2 — Espaces verts (32)

> **Owner :** verticale ESPACE VERT uniquement (ne pas toucher Sécurité).
> **Fichier v1 (générique) :** \`docs/prompts-marketing-espace-vert-securite.md\` — conservé pour historique.
> **Implémentation :** \`src/lib/marketing/ev/specs-part*.ts\` + \`MarketingDemoSection\` / \`MarketingBodySections\`.
> **Validation :** \`docs/pages-a-valider.md\` · dashboard \`/dashboard-validation\`.
> **Pas de commit** tant que Simon n’a pas demandé.

## Règles v2 (anti-générique)

Chaque prompt DOIT contenir : (1) persona précis + pains/objections, (2) scénario terrain, (3) intent SEO + cluster + anti-cannibalisation, (4) H1/meta/outline, (5) **démo produit unique**, (6) preuves/process réalistes produit, (7) ton terrain, (8) CTAs persona, (9) schema + maillage + tarifs/essai, (10) checklist anti-générique.

**Charte :** navy #012939 · chrome #011B25 · lime #A8E300 · paper #FAFAFA · warm #F6F8F9 · line #E4E8EB · slate #5C6B73 · radius 2–3px.

**SEO technique :** \`pageMeta\` + \`SoftwareApplicationLd\` + \`FaqPageLd\` · canonical · maillage hub/pilier/sœurs/\`/tarifs\`/\`/essai-gratuit\` · sitemap via \`listAllMarketingVerticalPaths()\`.

**Checklist qualité (à cocher page par page)**
- [ ] H1 / meta title / meta desc uniques
- [ ] Persona identifiable en 10 secondes
- [ ] Scénario terrain non interchangeable avec une autre page
- [ ] Section démo UI mock différente
- [ ] FAQ utiles (pas « Oui. »)
- [ ] Maillage 3–5 sœurs pertinentes + tarifs/essai
- [ ] Aucun mélange propreté / sécurité
- [ ] Claims ancrés capacités : planning, interventions, équipes, matériel (contraintes), reporting, devis/facturation

---

## Architecture URLs v2

\`\`\`
/logiciel-espace-vert     ← pilier money (EV-01)
/espace-vert              ← hub (EV-02)
/espace-vert/{slug}       ← 30 filles (EV-03 … EV-32)
\`\`\`

Nouveautés vs v1 : engins-materiel · photos-avant-apres · replanification-meteo · amenageurs-promoteurs · taille-haies · absences-remplacements · cimetieres-voirie.

---
`);

for (const [id, type, url, kw, h1, persona, scenario, cannibal, demo] of pages) {
  lines.push(`### ${id} — ${h1}

| Champ | Valeur |
|------|--------|
| **URL** | \`${url}\` |
| **Type** | ${type} |
| **Mot-clé principal** | ${kw} |
| **H1** | ${h1} |
| **Meta title** | ${h1.slice(0, 55)} \\| PROGESTI |
| **Meta description** | Angle ${type} · ${persona.split(",")[0]} · essai 15 j sans CB. Copy longue + démo dans specs TS. |
| **Persona** | ${persona} — pains : chaos planning, preuves, marge ; objections : Excel suffit / terrain ne pointera pas / pas le temps. |
| **Scénario terrain** | ${scenario} |
| **Intent + anti-cannibalisation** | ${cannibal} |
| **Démo produit (obligatoire, unique)** | ${demo} — walkthrough + mock UI rows + CTA essai/démo adaptés. |
| **Outline H2/H3** | Empathie persona · Démo UI · Détail métier (bodySections) · Preuves process · Vs Excel/WA · Modules · FAQ · Maillage · FinalPush |
| **Preuves / process** | Ancrage planning · pointage · historique · devis/facture du réalisé · contraintes équipes/engins si pertinent — pas de claim ROI inventé. |
| **Ton** | Humain, chef d’exploitation / gérant PME, zéro blabla SaaS. |
| **CTAs** | Essai 15 j (label persona) · Démo guidée · \`/tarifs\` en secondaire si intent prix. |
| **Schema + maillage** | SoftwareApplication + FAQPage · hub \`/espace-vert\` · pilier \`/logiciel-espace-vert\` · 2–4 sœurs · \`/tarifs\` · \`/essai-gratuit\` |
| **Checklist** | Voir liste anti-générique en tête de doc — à valider sur \`/dashboard-validation\`. |

**Specs source :** \`src/lib/marketing/ev/specs-part*.ts\` (id ${id}).

---
`);
}

lines.push(`
## Livrables Phase B

- Configs : \`src/lib/marketing/ev/\` (32 specs) + builder
- UI démo : \`MarketingDemoSection.tsx\` · copy longue : \`MarketingBodySections.tsx\`
- Shell EV : préserve proof/vsTitle page-specific
- Sitemap : automatique via paths marketing
- Docs validation : section EV (32)
`);

fs.writeFileSync("docs/prompts-v2-espace-vert.md", lines.join("\n"), "utf8");
console.log("OK", pages.length, fs.statSync("docs/prompts-v2-espace-vert.md").size);
