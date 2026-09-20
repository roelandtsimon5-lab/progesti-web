/**
 * Enrichit les specs EV existantes + génère prompts v2 ultra-détaillés + 4 pages SEO.
 * Usage: node scripts/enrich-ev-v2.mjs
 * Owner: ESPACE VERT only.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docsPath = path.join(root, "docs", "prompts-v2-espace-vert.md");
const evDir = path.join(root, "src", "lib", "marketing", "ev");

/** Variantes démo cyclées par ID pour différenciation visuelle */
const VARIANTS = {
  "EV-01": "board",
  "EV-02": "split",
  "EV-03": "checklist",
  "EV-04": "timeline",
  "EV-05": "board",
  "EV-06": "timeline",
  "EV-07": "checklist",
  "EV-08": "list",
  "EV-09": "split",
  "EV-10": "checklist",
  "EV-11": "board",
  "EV-12": "board",
  "EV-13": "timeline",
  "EV-14": "timeline",
  "EV-15": "board",
  "EV-16": "list",
  "EV-17": "split",
  "EV-18": "list",
  "EV-19": "split",
  "EV-20": "checklist",
  "EV-21": "timeline",
  "EV-22": "checklist",
  "EV-23": "list",
  "EV-24": "board",
  "EV-25": "checklist",
  "EV-26": "board",
  "EV-27": "split",
  "EV-28": "board",
  "EV-29": "timeline",
  "EV-30": "checklist",
  "EV-31": "board",
  "EV-32": "list",
  "EV-33": "timeline",
  "EV-34": "checklist",
  "EV-35": "board",
  "EV-36": "split",
};

/** Enrichissements body + FAQ + meta prompt par ID (complète le contenu déjà en specs) */
const RICH = {
  "EV-01": {
    persona: "Dirigeant PME paysagiste / entretien EV 15–40 salariés",
    pains: ["chaos planning météo", "litiges sans preuves", "facture ≠ réalisé", "charge mentale gérant"],
    objections: ["Excel suffit", "terrain ne pointera pas", "pas le temps en haute saison"],
    scenario: "Orage lundi 7h → 9 tontes impraticables → replanif 2 équipes avant 8h sans lâcher élagage mercredi",
    cluster: "Money pilier logiciel espace vert",
    anti: "≠ pages service/audience — intent global logiciel",
    demoTitle: "Rejouer le lundi pluvieux (planning multi-sites)",
  },
  "EV-02": {
    persona: "Visiteur indécis multi-personas (PME / collectivité / syndic)",
    pains: ["ne sait pas quelle page lire", "peur du fourre-tout", "intent mélangé"],
    objections: ["c’est pour la propreté ?", "trop de pages"],
    scenario: "3 arrivées le même jour : gérant PME 22 sal., DST commune 18k, conducteur travaux syndic preuves",
    cluster: "Hub navigation solutions EV",
    anti: "0 cannibalisation service — pure orientation",
    demoTitle: "3 parcours cliquables → page fille + écran produit",
  },
  "EV-03": {
    persona: "Resp. exploitation contrats annuels multi-sites (entretien)",
    pains: ["fréquences perdues", "oublis de passage", "preuves absentes au renew"],
    objections: ["le forfait se gère sur papier", "trop de sites pour paramétrer"],
    scenario: "Contrat bihebdo Résidence des Tilleuls → générer tournée S18 → prouver 2 passages manqués rattrapés",
    cluster: "Service entretien espaces verts",
    anti: "≠ paysagisme création · ≠ tonte seule",
    demoTitle: "Paramétrer fréquences multi-prestations sur une résidence",
  },
  "EV-04": {
    persona: "Gérant / conducteur travaux création paysagère",
    pains: ["écart devis↔terrain↔facture", "conflit engins", "avancement opaque"],
    objections: ["mon devis est ailleurs", "chaque chantier est unique"],
    scenario: "Devis villa signé → planning 4j → conflit mini-pelle avec autre chantier → facture du réalisé",
    cluster: "Service logiciel paysagiste",
    anti: "≠ entretien récurrent forfaitaire",
    demoTitle: "Flux devis signé → chantier → facture",
  },
  "EV-05": {
    persona: "Chef d’équipe / exploitation tournées tonte volume",
    pains: ["pelouse oubliée", "km inutiles", "fréquence de coupe ratée"],
    objections: ["la tonte c’est simple", "Google Maps suffit"],
    scenario: "47 pelouses semaine · 3 autoportées · 1 panne · réorganiser sans oublier le lotissement nord",
    cluster: "Service planning tonte multi-sites",
    anti: "≠ entretien global · ≠ printemps saisonnier",
    demoTitle: "Optimiser tournée tonte + marquer pelouse reportée",
  },
  "EV-06": {
    persona: "Entreprise / pôle élagage (grimpe, nacelle)",
    pains: ["créneaux engins", "preuves chantier", "équipe qualifiée absente"],
    objections: ["trop spécifique", "sécurité chantier ailleurs"],
    scenario: "Devis 8 sujets + nacelle J+3 → absence grimpeur → bascule équipe + preuve AV/AP pour client",
    cluster: "Service logiciel élagage",
    anti: "≠ tonte · ≠ taille haies",
    demoTitle: "Planifier chantier élagage + contraintes nacelle/qualifs",
  },
  "EV-07": {
    persona: "Exploitation désherbage abords (collectivités / syndics)",
    pains: ["retours élus/photos", "zones oubliées", "méthodes variables"],
    objections: ["c’est du détail", "pas besoin de logiciel"],
    scenario: "15 ronds-points + cimetière sud · contrôle DST · 2 zones non faites → rattrapage tracé",
    cluster: "Service désherbage / abords",
    anti: "≠ tonte · ≠ entretien global",
    demoTitle: "Checklist désherbage multi-zones + motifs retard",
  },
  "EV-08": {
    persona: "Exploitation arrosage / contrôles irrigation",
    pains: ["oublis de contrôle", "canicule", "plaintes massifs secs"],
    objections: ["on a des programmateurs", "IoT suffit"],
    scenario: "Vague de chaleur S28 · 22 sites à contrôler · prioriser massifs exposés + consignes accès",
    cluster: "Service arrosage irrigation interventions",
    anti: "≠ IoT irrigation · focus interventions humaines",
    demoTitle: "Prioriser contrôles arrosage sous canicule",
  },
  "EV-09": {
    persona: "Responsable EV / DST / conducteur travaux collectivité ou titulaire marché",
    pains: ["reporting élus", "sites communaux éclatés", "preuves marché"],
    objections: ["on a déjà un outil marchés", "régie ≠ logiciel privé"],
    scenario: "Commune 18k · 64 sites · lundi 9h DST veut point avant conseil · totaux écoles/parcs/cimetières",
    cluster: "Audience collectivités EV",
    anti: "≠ syndics · ≠ grands parcs (site unique étendu)",
    demoTitle: "Reporting hebdo marché communal 64 sites",
  },
  "EV-10": {
    persona: "Commercial / exploitation EV face aux syndics & conseils syndicaux",
    pains: ["litiges passages", "photos WhatsApp perdues", "renew sous pression"],
    objections: ["le syndic n’a pas besoin d’accès", "on envoie déjà un mail"],
    scenario: "Syndic appelle : « vous n’êtes pas venus » · sortir historique + photos Tilleuls en 30 s",
    cluster: "Audience syndics copropriétés EV",
    anti: "≠ /solutions/syndics (propreté) · verticale EV seule",
    demoTitle: "Répondre au litige syndic avec preuves horodatées",
  },
  "EV-11": {
    persona: "Commercial / exploitation portefeuille sites privés B2B (ZA, cliniques, hôtels)",
    pains: ["créneaux d’accès", "image site", "horaires contraints"],
    objections: ["comme un syndic", "trop de consignes"],
    scenario: "Clinique : tonte 6h30 avant ouverture · entrepôt : badge · showroom : photo mensuelle",
    cluster: "Audience entreprises sites privés EV",
    anti: "≠ syndics · ≠ aménageurs (chantier livraison)",
    demoTitle: "Planifier 3 sites B2B avec contraintes d’accès",
  },
  "EV-12": {
    persona: "Planificateur / chef d’exploitation multi-équipes EV",
    pains: ["conflits d’affectation", "absences", "engins", "double booking"],
    objections: ["whiteboard suffit", "WhatsApp de l’équipe"],
    scenario: "Mardi 6h58 · 3 équipes · 1 arrêt · mini-pelle déjà prise · réaffecter sans trou",
    cluster: "Process planning équipes EV",
    anti: "≠ pages service · complémentaire absences/météo/engins",
    demoTitle: "Affectation multi-chantiers avec conflit ressources",
  },
  "EV-13": {
    persona: "Gérant / admin qui a besoin de preuves horodatées terrain",
    pains: ["feuilles papier", "heures contestées", "« on était là » non prouvé"],
    objections: ["flicage", "pas de réseau sur site"],
    scenario: "Équipe B arrive Résidence · pointe · part · litige le lendemain → preuve consultable",
    cluster: "Process pointage terrain EV",
    anti: "≠ preuves litige (EV-22) · ici capture du pointage",
    demoTitle: "Parcours pointage mobile arrivée → départ → historique",
  },
  "EV-14": {
    persona: "Assistante de gestion / gérant TPE-PME EV",
    pains: ["double saisie", "oublis ponctuels", "écart devis/facture"],
    objections: ["ma compta suffit", "devis déjà ailleurs"],
    scenario: "Chantier haies + tonte forfait + 2h arrachage improvisé → facture complète sans oublier le ponctuel",
    cluster: "Process devis facturation EV",
    anti: "≠ compta complète · flux commercial→réalisé",
    demoTitle: "Devis → réalisé pointé → facture sans double saisie",
  },
  "EV-15": {
    persona: "Exploitation en pic printemps (mars–juin)",
    pains: ["surcharge", "recrutements CDD", "clients qui veulent tout en même temps"],
    objections: ["c’est tous les ans", "on survit"],
    scenario: "S14 · charge 140% · prioriser contrats annuels vs devis ponctuels · tenir fréquences critiques",
    cluster: "Saisonnier haute saison printemps EV",
    anti: "≠ tonte service · ≠ météo problème",
    demoTitle: "Tableau de charge printemps + priorisation contrats",
  },
  "EV-16": {
    persona: "Exploitation automne-hiver (feuilles, tailles, reprises)",
    pains: ["ramassage feuilles volume", "visibilité moindre", "planifier la morte-saison"],
    objections: ["l’hiver on n’a rien", "pas besoin d’outil"],
    scenario: "S44 · 30 sites feuilles · 1 souffleur en panne · répartir + planifier tailles hivernales",
    cluster: "Saisonnier automne hiver EV",
    anti: "≠ printemps · deux intents saisonniers distincts",
    demoTitle: "Tournée ramassage feuilles + plan tailles hiver",
  },
  "EV-17": {
    persona: "Dirigeant / exploitation portefeuille 30–200+ sites",
    pains: ["perte de vision", "oublis géographiques", "reporting client"],
    objections: ["Excel filtrable suffit"],
    scenario: "Portefeuille 120 sites · filtre commune + type + retard · sortir les 8 critiques de la semaine",
    cluster: "Process multi-sites portefeuille EV",
    anti: "≠ audience collectivité · ≠ grands parcs (1 site zones)",
    demoTitle: "Vue portefeuille : filtres + retards critiques",
  },
  "EV-18": {
    persona: "Entreprise EV Toulouse / Occitanie cherchant éditeur local",
    pains: ["éditeur lointain", "support qui ne connaît pas le terrain sud"],
    objections: ["cloud = pas besoin de local"],
    scenario: "PME Tournefeuille / Toulouse métropole · essai sur vrais sites · support joignable 31",
    cluster: "Local Toulouse Occitanie logiciel EV",
    anti: "Pas 50 landings villes fantômes — 1 ancre locale réelle",
    demoTitle: "Essai local : importer 10 sites périurbains Toulouse",
  },
  "EV-19": {
    persona: "Gérant fatigué d’Excel + WhatsApp comme OS de l’entreprise",
    pains: ["versioning fichiers", "messages perdus", "aucune source de vérité"],
    objections: ["changement trop lourd", "équipes habituées"],
    scenario: "Migrer 25 sites pilotes · couper le groupe WA planning · garder WA informal",
    cluster: "Problème remplacer Excel WhatsApp EV",
    anti: "≠ pilier (solution globale) · ici le problème Excel/WA",
    demoTitle: "Avant/après : tableur vs semaine planifiée",
  },
  "EV-20": {
    persona: "Prospect EV avec questions concrètes avant essai",
    pains: ["doute verticalité propreté", "prix", "mobile"],
    objections: ["c’est un soft de nettoyage"],
    scenario: "FAQ interactive : 6 questions métier EV → CTA essai contextualisé",
    cluster: "FAQ logiciel espaces verts",
    anti: "≠ /faq site global (propreté) — 100% vocabulaire EV",
    demoTitle: "Parcours FAQ → réponse → essai sur mes sites",
  },
  "EV-21": {
    persona: "Nouveau responsable exploitation qui structure l’entretien",
    pains: ["pas de méthode", "sites mal inventoriés", "fréquences floues"],
    objections: ["on n’a pas le temps d’un guide"],
    scenario: "6 étapes : inventaire → fréquences → tournées → pointage → preuves → facture",
    cluster: "Guide organiser entretien espaces verts",
    anti: "Contenu éducatif + maillage process — pas money page",
    demoTitle: "Checklist des 6 étapes avec liens process",
  },
  "EV-22": {
    persona: "Gérant / commercial qui gère litiges « vous n’êtes pas venus »",
    pains: ["accusations", "renouvellement menacé", "preuves éparpillées"],
    objections: ["flicage des équipes"],
    scenario: "Mail syndic agressif 17h · sortir historique + pointages + photo en 1 écran",
    cluster: "Problème preuves de passage EV",
    anti: "≠ pointage (capture) · ≠ syndic (audience) — intent litige/preuve",
    demoTitle: "Dossier preuve litige en un écran",
  },
  "EV-23": {
    persona: "TPE / indépendant EV < 10 personnes",
    pains: ["soirées Excel", "oubli client", "prix perçu élevé"],
    objections: ["trop petit pour un logiciel", "trop cher"],
    scenario: "Indépendant + 2 salariés · 18 clients · oublie une haie · perd 1 soir à facturer",
    cluster: "Audience TPE indépendants EV",
    anti: "≠ PME 15–40 (pilier) — angle simplicité/prix",
    demoTitle: "Semaine TPE : 18 sites sans tableur du dimanche",
  },
  "EV-24": {
    persona: "Exploitation grand parc / domaine / campus (1 site, N zones)",
    pains: ["zones à découvert", "équipes perdues sur le site", "priorités floues"],
    objections: ["c’est un seul site"],
    scenario: "Parc 28 ha · 12 zones · 2 équipes · prioriser entrée + playground avant massifs fond",
    cluster: "Audience / service grands parcs sites étendus",
    anti: "≠ multi-sites (N adresses) — ici 1 adresse N zones",
    demoTitle: "Planifier par zones d’un grand parc",
  },
  "EV-25": {
    persona: "Commercial / exploitation cycle de vie contrats annuels",
    pains: ["renew sous pression", "exécution invisible", "exceptions non tracées"],
    objections: ["le PDF du contrat suffit"],
    scenario: "Novembre · contrat 28k€ · bilan exécution pour conseil syndical · pitch renew",
    cluster: "Process contrats annuels entretien EV",
    anti: "≠ entretien (opérer) · ≠ devis/factu (facturer) — cycle renew",
    demoTitle: "Dossier renouvellement 6 semaines avant échéance",
  },
  "EV-26": {
    persona: "Planificateur sous contrainte engins (mini-pelle, nacelle, autoportée)",
    pains: ["double booking engins", "panne", "chantier bloqué"],
    objections: ["GMAO ailleurs", "on se téléphone"],
    scenario: "Mini-pelle réservée 2 chantiers le même mardi · détecter conflit · décaler plantation",
    cluster: "Process engins matériel EV",
    anti: "Pas GMAO industrielle — contraintes dans le planning EV",
    demoTitle: "Détecter conflit mini-pelle et réaffecter",
  },
  "EV-27": {
    persona: "Exploitation / commercial qui doit prouver le rendu visuel",
    pains: ["photos perdues dans WA", "pas de AV/AP", "client conteste le rendu"],
    objections: ["trop long sur chantier"],
    scenario: "Taille haies syndic · photo avant · après · rattachées à l’intervention",
    cluster: "Process photos avant après EV",
    anti: "≠ preuves horodatage (EV-22) — preuve visuelle",
    demoTitle: "Attacher AV/AP à une intervention haies",
  },
  "EV-28": {
    persona: "Gérant / planificateur sous pluie fréquente",
    pains: ["reports en chaîne", "clients non prévenus", "fréquences perdues"],
    objections: ["météo auto ?", "on improvise"],
    scenario: "Playbook pluie : marquer reports · basculer haies prioritaires · notifier · garder fréquences",
    cluster: "Problème replanification météo EV",
    anti: "≠ pilier (global) · ≠ tonte service — intent pluie/replanif",
    demoTitle: "Playbook orage : report → bascule → sync mobile",
  },
  "EV-29": {
    persona: "Paysagiste / EV sous-traitant aménageurs & promoteurs",
    pains: ["jalons livraison", "réceptions", "preuves pour promoteur"],
    objections: ["CCTP ailleurs", "chantier one-shot"],
    scenario: "Livraison lotissement · 3 jalons engazonnement · PV réception avec preuves",
    cluster: "Audience aménageurs promoteurs EV",
    anti: "≠ sites privés entretien récurrent B2B",
    demoTitle: "Suivi jalons chantier aménageur jusqu’à réception",
  },
  "EV-30": {
    persona: "Exploitation taille de haies multi-sites (volume)",
    pains: ["haies oubliées", "saison courte", "accès riverains"],
    objections: ["comme l’entretien", "comme l’élagage"],
    scenario: "42 haies trimestre · 2 équipes · 1 accès refusé · reporter sans perdre la fréquence",
    cluster: "Service taille haies multi-sites",
    anti: "≠ élagage arbres · ≠ entretien global",
    demoTitle: "Tournée haies + accès refusé documenté",
  },
  "EV-31": {
    persona: "Planificateur gérant absences / remplacements dernière minute",
    pains: ["trou d’équipe", "site à découvert", "intérim mal affecté"],
    objections: ["SIRH ailleurs", "on appelle"],
    scenario: "6h40 · conducteur autoportée en arrêt · backup + notifier tournée tonte",
    cluster: "Process absences remplacements EV",
    anti: "Pas SIRH — focus opérationnel planning",
    demoTitle: "Remplacement express avant départ tournée",
  },
  "EV-32": {
    persona: "Régie / prestataire cimetières & voiries végétalisées",
    pains: ["sensibilité usagers", "retours élus", "zones sensibles"],
    objections: ["niche trop petite"],
    scenario: "Cimetière sud + 8 terre-pleins · désherbage + tonte abords · reporting DST",
    cluster: "Service cimetières voiries végétalisées",
    anti: "Niche souvent collectivité — intent recherche dédié",
    demoTitle: "Planning cimetière + terre-pleins avec priorités",
  },
  "EV-33": {
    persona: "Exploitation qui gère évacuation / valorisation déchets verts",
    pains: ["oublis de benne", "coûts déchèterie", "planning saturé printemps"],
    objections: ["c’est logistique pas logiciel"],
    scenario: "S15 · 12 sites élagage/haies · 3 rotations benne · ne pas laisser branches 48h chez le syndic",
    cluster: "Service déchets verts évacuation EV",
    anti: "≠ élagage (coupe) — intent évacuation/logistique déchets",
    demoTitle: "Planifier rotations benne liées aux chantiers coupe",
  },
  "EV-34": {
    persona: "Conducteur travaux plantations / massifs / engazonnement",
    pains: ["fenêtres de plantation", "fournitures", "reprise garantie"],
    objections: ["one-shot pas besoin d’outil"],
    scenario: "Massifs résidence · livraison plants mardi · pose mercredi-jeudi · contrôle reprise J+21",
    cluster: "Service plantations massifs EV",
    anti: "≠ paysagisme devis global · focus plantation/massifs",
    demoTitle: "Chantier plantation : livraison → pose → contrôle reprise",
  },
  "EV-35": {
    persona: "Exploitation EV sites santé (hôpitaux, cliniques, EHPAD)",
    pains: ["protocoles accès", "horaires stricts", "image / hygiène abords"],
    objections: ["comme un site privé classique"],
    scenario: "Clinique : tonte 6h–8h · zone hélistation interdite · preuve pour direction achats",
    cluster: "Audience hôpitaux cliniques EHPAD EV",
    anti: "≠ sites privés génériques — contraintes santé",
    demoTitle: "Planning site santé avec créneaux & zones interdites",
  },
  "EV-36": {
    persona: "Régie / prestataire écoles, collèges, lycées, crèches",
    pains: ["sécurité enfants", "créneaux hors récréation", "vacances scolaires"],
    objections: ["c’est la collectivité"],
    scenario: "12 écoles · tonte mercredi AM · pas d’engin pendant récré · planning vacances densifié",
    cluster: "Audience écoles établissements EV",
    anti: "≠ collectivités global — intent établissements scolaires",
    demoTitle: "Tournée écoles hors récré + planning vacances",
  },
};

/** Body enrichis longs (2–3 sections) pour pages trop minces */
function richBodies(id, key) {
  const r = RICH[id];
  if (!r) return null;
  return [
    {
      h2: `Persona terrain — ${r.persona.split("(")[0].trim()}`,
      body: `${r.persona}. Douleurs principales : ${r.pains.join(" · ")}. Objections à désamorcer sans blabla : ${r.objections.map((o) => `« ${o} »`).join(", ")}.`,
      bullets: r.pains.map((p) => `Pain : ${p}`),
      h3: [
        {
          title: "Scénario qui prouve que la page n’est pas générique",
          body: r.scenario,
        },
        {
          title: "Anti-cannibalisation SEO",
          body: `${r.anti}. Cluster : ${r.cluster}.`,
        },
      ],
    },
    {
      h2: "Ce que PROGESTI porte concrètement ici",
      body: "Ancrage capacités produit — planning d’interventions, équipes, contraintes engins si pertinent, pointage mobile, historique / preuves, devis et facturation du réalisé. Pas de claim ROI inventé, pas de jargon « digitaliser vos équipes ».",
      bullets: [
        "Une démo UI unique sur cette page (pas un screenshot générique recyclé).",
        "Vocabulaire EV : tournée, fréquence, passage, AV/AP, marché, syndic, régie, engins.",
        "Essai 15 jours sans CB sur vos vrais sites — pas une démo PowerPoint.",
      ],
    },
    {
      h2: "Maillage & suite de parcours",
      body: `Depuis cette page, le lecteur doit pouvoir basculer vers le hub /espace-vert, le pilier /logiciel-espace-vert, 2–3 sœurs complémentaires, puis /tarifs et /essai-gratuit. Démo phare : ${r.demoTitle}.`,
    },
  ];
}

function richFaq(id) {
  const r = RICH[id];
  if (!r) return null;
  return [
    {
      q: `Cette page est-elle adaptée à mon profil (${r.persona.split(",")[0]}) ?`,
      a: `Oui si vous vous reconnaissez dans le scénario : ${r.scenario} Sinon, repassez par le hub /espace-vert pour l’intent voisin.`,
    },
    {
      q: "En quoi c’est différent d’un Excel / WhatsApp ?",
      a: "Excel et WhatsApp ne portent pas une source de vérité partagée bureau ↔ terrain (fréquences, pointages, preuves, facture du réalisé). C’est exactement ce que cette page illustre.",
    },
    {
      q: "Faut-il tout migrer d’un coup ?",
      a: "Non. Commencez par un périmètre pilote (sites critiques). La valeur arrive d’abord sur la replanification, les preuves et la facture.",
    },
    {
      q: "Les équipes terrain vont-elles suivre ?",
      a: "Le mobile reste simple : où aller, pointer arrivée/départ, éventuellement photo. Moins d’appels = adoption naturelle si le bureau tient le planning à jour.",
    },
    {
      q: "Combien ça coûte et comment essayer ?",
      a: "Dès 29,99 € HT/mois, modules inclus. Essai 15 jours sans CB. Détail sur /tarifs — support humain depuis Toulouse (31).",
    },
  ];
}

/** 4 nouvelles pages SEO — specs complètes */
const NEW_PAGES = [
  {
    id: "EV-33",
    key: "dechets-verts",
    path: "/espace-vert/dechets-verts",
    type: "service",
    primaryKw: "évacuation déchets verts espaces verts",
    seoTitle: "Évacuation déchets verts — planifier bennes & chantiers",
    seoDesc:
      "Planifiez l’évacuation des déchets verts liée à vos tailles, élagages et tontes : rotations de benne, sites prioritaires, preuves. Essai 15 jours sans CB.",
    crumbLabel: "Déchets verts",
    h1Lead: "Évacuation des déchets verts",
    h1: "ne laissez pas les branches 48 h devant le syndic",
    sub: "Élagage, haies, tonte : le volume de déchets suit la coupe. PROGESTI relie chantiers et rotations de benne pour éviter les oublis logistiques — et les coups de fil furieux.",
    claimBefore: "De la coupe à l’",
    claimHighlight: "évacuation",
    claimSub: "déchets verts · planning logistique EV",
    productStrip: "Déchets verts · bennes · chantiers",
    empathyH2: "Le chantier est fini… les branches sont encore là",
    empathyBody:
      "Vous avez bien taillé. Le syndic photographie le tas. La déchèterie ferme à 17h. La benne est sur un autre site. Ce n’est pas un problème de bons professionnels — c’est un trou entre la coupe et la logistique.",
    showcaseTitle: "Coupes et rotations de benne sur une même semaine",
    showcaseSub: "Reliez interventions produisant des déchets et créneaux d’évacuation.",
    showcaseBadgeLeft: { title: "S15", sub: "12 sites · 3 bennes" },
    showcaseBadgeRight: "Évacué",
    proofH2: "Ce que change un planning déchets verts",
    proofQuote: "Moins de tas oubliés, moins de courses improvisées, plus de sérénité client.",
    proofItems: [
      { title: "Lien coupe → benne", text: "Les chantiers générateurs de volume portent une tâche d’évacuation." },
      { title: "Priorités client", text: "Syndics et écoles d’abord — pas de branches 48 h sur parking." },
      { title: "Charge visible", text: "Évitez de planifier 8 élagages le même jour sans rotation." },
    ],
    vsTitle: "Course improvisée vs évacuation planifiée",
    demo: {
      eyebrow: "Démo produit · déchets verts",
      h2: "Planifier 3 rotations de benne liées aux chantiers de coupe",
      lead: "Walkthrough : une semaine de haies/élagage où chaque volume a son créneau d’évacuation.",
      scenario:
        "S15 haute saison. 12 sites de taille/élagage. 1 benne 20 m³ + 2 rotations déchèterie. Objectif : aucun tas > 24 h sur site syndic.",
      steps: [
        { label: "Lister les coupes", detail: "Filtrer interventions haies/élagage de la semaine avec volume estimé." },
        { label: "Créer les évacuations", detail: "Tâches liées : benne + site + créneau + équipe conducteur." },
        { label: "Prioriser", detail: "Syndics et écoles en tête ; sites privés plus tolérants ensuite." },
        { label: "Clôturer", detail: "Pointer l’évacuation — preuve si le client rappelle." },
      ],
      uiLabel: "Logistique · Déchets S15",
      uiRows: [
        { left: "Tilleuls — haies", right: "Benne A · mar 10h", status: "Planifié" },
        { left: "ZA Pins — élagage", right: "Benne A · mar 14h", status: "Planifié" },
        { left: "École Jules Ferry", right: "Rotation déchèterie mer 8h", status: "Prioritaire" },
        { left: "Villa Martin", right: "Jeudi · toléré 48h", status: "OK" },
      ],
      takeaway: "La coupe et l’évacuation vivent dans le même planning — plus de trou logistique.",
      primaryCtaLabel: "Essai — mes tournées déchets",
      secondaryCtaLabel: "Voir élagage & haies",
      variant: "timeline",
    },
    faq: richFaq("EV-33"),
    gridItems: [
      { title: "Élagage", text: "La coupe qui génère le volume", href: "/espace-vert/elagage" },
      { title: "Taille de haies", text: "Volume récurrent", href: "/espace-vert/taille-haies" },
      { title: "Planning équipes", text: "Affecter conducteurs / bennes", href: "/espace-vert/planning-equipes" },
    ],
    ctaPrimaryLabel: "Essai 15 j — déchets verts",
    ctaSecondaryLabel: "Parler logistique EV",
  },
  {
    id: "EV-34",
    key: "plantations-massifs",
    path: "/espace-vert/plantations-massifs",
    type: "service",
    primaryKw: "logiciel plantations massifs paysagiste",
    seoTitle: "Plantations & massifs — planning chantier et reprises",
    seoDesc:
      "Planifiez plantations et massifs : livraison plants, pose, arrosage de reprise, contrôle J+21. Pour paysagistes et entreprises EV. Essai 15 jours.",
    crumbLabel: "Plantations & massifs",
    h1Lead: "Plantations et massifs",
    h1: "de la livraison des plants au contrôle de reprise",
    sub: "Une plantation réussie n’est pas seulement une belle journée de pose : c’est une fenêtre, des fournitures, un arrosage de reprise et un contrôle. PROGESTI porte ce fil jusqu’à la clôture.",
    claimBefore: "Du plant livré à la",
    claimHighlight: "reprise tenue",
    claimSub: "plantations · massifs · engazonnement",
    productStrip: "Plantations · pose · reprise",
    empathyH2: "Les plants sont là, l’équipe est ailleurs, la reprise personne n’y pense",
    empathyBody:
      "Livraison mardi 10h. Pose prévue mercredi — mais la pluie décale. Les godets restent au soleil. Trois semaines plus tard, le syndic appelle pour les plants morts. Sans jalons, la garantie devient un conflit.",
    showcaseTitle: "Jalons plantation sur un chantier résidence",
    showcaseSub: "Livraison → pose → arrosages de reprise → contrôle.",
    showcaseBadgeLeft: { title: "Massif nord", sub: "4 jalons" },
    showcaseBadgeRight: "Reprise OK",
    proofH2: "Ce qu’un suivi plantation change",
    proofQuote: "Moins de plants morts « mystérieux », plus de preuves de suivi.",
    proofItems: [
      { title: "Fenêtres", text: "Pose calée sur météo et disponibilité équipe." },
      { title: "Reprise", text: "Passages d’arrosage / contrôle planifiés, pas oubliés." },
      { title: "Preuve", text: "Photos et pointages pour clôturer sereinement." },
    ],
    vsTitle: "Pose one-shot vs chantier plantation suivi",
    demo: {
      eyebrow: "Démo produit · plantations",
      h2: "Suivre un massif de la livraison au contrôle J+21",
      lead: "Walkthrough d’un chantier plantation résidence avec jalons et preuves.",
      scenario:
        "Résidence Les Tilleuls — massif entrée. Plants livrés mardi. Pose mercredi-jeudi. Deux arrosages de reprise. Contrôle J+21 avant facture finale.",
      steps: [
        { label: "Créer le chantier", detail: "Lier devis plantation + site + consignes accès." },
        { label: "Jalons", detail: "Livraison, pose J1/J2, reprise, contrôle." },
        { label: "Météo", detail: "Reporter la pose si gel/pluie — sans perdre les jalons suivants." },
        { label: "Clôturer", detail: "Photos reprise + facture du réalisé." },
      ],
      uiLabel: "Chantier · Massif Tilleuls",
      uiRows: [
        { left: "Livraison plants", right: "Mar 10h · quai", status: "Fait" },
        { left: "Pose massif", right: "Mer–Jeu · équipe C", status: "En cours" },
        { left: "Arrosage reprise", right: "S+1 et S+2", status: "Planifié" },
        { left: "Contrôle J+21", right: "Photo + validation", status: "À faire" },
      ],
      takeaway: "La plantation devient un fil d’interventions — pas un souvenir de chantier.",
      primaryCtaLabel: "Essai — mes plantations",
      secondaryCtaLabel: "Voir paysagisme",
      variant: "checklist",
    },
    faq: richFaq("EV-34"),
    gridItems: [
      { title: "Paysagisme", text: "Devis & chantiers création", href: "/espace-vert/paysagisme" },
      { title: "Arrosage", text: "Reprises et contrôles", href: "/espace-vert/arrosage-irrigation" },
      { title: "Photos AV/AP", text: "Preuves visuelles", href: "/espace-vert/photos-avant-apres" },
    ],
    ctaPrimaryLabel: "Essai 15 j — plantations",
    ctaSecondaryLabel: "Démo chantier plantation",
  },
  {
    id: "EV-35",
    key: "hopitaux-cliniques",
    path: "/espace-vert/hopitaux-cliniques",
    type: "audience",
    primaryKw: "entretien espaces verts hôpital clinique",
    seoTitle: "Espaces verts hôpitaux & cliniques — planning contraint",
    seoDesc:
      "Entretien espaces verts pour hôpitaux, cliniques et EHPAD : créneaux stricts, zones sensibles, preuves pour achats. Essai 15 jours sans CB.",
    crumbLabel: "Hôpitaux & cliniques",
    h1Lead: "Espaces verts en établissements de santé",
    h1: "créneaux stricts, zones sensibles, preuves pour les achats",
    sub: "Un hôpital n’est pas une ZA classique : horaires, accès, image des abords, zones interdites. PROGESTI porte ces contraintes dans le planning — pour prestataires EV et services techniques.",
    claimBefore: "Des abords soignés sans",
    claimHighlight: "perturber le soin",
    claimSub: "hôpitaux · cliniques · EHPAD",
    productStrip: "Santé · accès · preuves EV",
    empathyH2: "La tonte à 10h devant les chambres, c’est fini",
    empathyBody:
      "La direction des achats veut des abords impeccables. Les soignants veulent du silence le matin. La sécurité refuse l’engin près de l’hélistation. Sans consignes dans le planning, chaque passage est une négociation.",
    showcaseTitle: "Sites santé avec contraintes visibles",
    showcaseSub: "Créneaux, zones interdites, preuves pour le donneur d’ordre.",
    showcaseBadgeLeft: { title: "Clinique", sub: "6h–8h only" },
    showcaseBadgeRight: "Conforme",
    proofH2: "Ce qu’attend un établissement de santé",
    proofQuote: "Discrétion, ponctualité, traçabilité — pas un discours SaaS.",
    proofItems: [
      { title: "Créneaux", text: "Passages hors pics de consultation / repos patients." },
      { title: "Zones", text: "Hélistation, urgences, accès ambulances : consignes explicites." },
      { title: "Preuves", text: "Historique pour marchés et contrôles qualité." },
    ],
    vsTitle: "Site privé générique vs site santé contraint",
    demo: {
      eyebrow: "Démo produit · sites santé",
      h2: "Planifier une clinique avec créneau 6h–8h et zone hélistation",
      lead: "Walkthrough d’une tournée abords cliniques sous contraintes d’accès.",
      scenario:
        "Clinique 180 lits. Tonte + haies. Passage autorisé 6h–8h en semaine. Zone hélistation interdite aux engins. Direction achats demande preuve mensuelle.",
      steps: [
        { label: "Fiche site", detail: "Créneaux, contacts sécurité, zones interdites." },
        { label: "Planifier", detail: "Équipe A mardi 6h15 — hors réveil patients étage jardin." },
        { label: "Pointer", detail: "Arrivée/départ + photo haie entrée." },
        { label: "Reporting", detail: "Export mensuel pour le marché." },
      ],
      uiLabel: "Site · Clinique des Cèdres",
      uiRows: [
        { left: "Tonte parkings", right: "Mar 6h15–7h40", status: "OK" },
        { left: "Haie entrée", right: "Mar 7h40 · photo", status: "OK" },
        { left: "Zone hélistation", right: "Interdit engins", status: "Contrainte" },
        { left: "Report achats", right: "Mensuel S18", status: "Prêt" },
      ],
      takeaway: "Les contraintes santé sont dans le planning — plus dans la tête du seul chef d’équipe.",
      primaryCtaLabel: "Essai — sites santé",
      secondaryCtaLabel: "Voir sites privés",
      variant: "board",
    },
    faq: richFaq("EV-35"),
    gridItems: [
      { title: "Sites privés", text: "Autres B2B contraints", href: "/espace-vert/entreprises-sites-prives" },
      { title: "Preuves de passage", text: "Pour les achats", href: "/espace-vert/preuves-passages" },
      { title: "Collectivités", text: "Marchés publics proches", href: "/espace-vert/collectivites" },
    ],
    ctaPrimaryLabel: "Essai 15 j — EV santé",
    ctaSecondaryLabel: "Parler contraintes accès",
  },
  {
    id: "EV-36",
    key: "ecoles-etablissements",
    path: "/espace-vert/ecoles-etablissements",
    type: "audience",
    primaryKw: "entretien espaces verts écoles collèges",
    seoTitle: "Espaces verts écoles & établissements — hors récré",
    seoDesc:
      "Planning d’entretien EV pour écoles, collèges, lycées, crèches : créneaux hors récréation, vacances scolaires, sécurité. Essai 15 jours sans CB.",
    crumbLabel: "Écoles & établissements",
    h1Lead: "Espaces verts des établissements scolaires",
    h1: "intervenir hors récré, densifier les vacances",
    sub: "Cours, abords, terrains : le planning doit respecter la vie de l’établissement. PROGESTI porte créneaux, vacances et preuves — pour régies et prestataires.",
    claimBefore: "Des cours entretenues sans",
    claimHighlight: "engins à la récré",
    claimSub: "écoles · collèges · crèches",
    productStrip: "Scolaire · créneaux · vacances",
    empathyH2: "Un autoportée pendant la récré, c’est un incident",
    empathyBody:
      "Le directeur d’école ne veut plus voir d’engin à 10h15. La collectivité veut des pelouses propres pour la photo de rentrée. Les vacances sont le seul vrai créneau dense — encore faut-il les planifier.",
    showcaseTitle: "Tournée scolaire calée sur la vie de l’établissement",
    showcaseSub: "Mercredis, matins tôt, vacances — pas de conflit avec les enfants.",
    showcaseBadgeLeft: { title: "12 écoles", sub: "Vacances OK" },
    showcaseBadgeRight: "Sécurisé",
    proofH2: "Ce qu’attend un établissement",
    proofQuote: "Sécurité des enfants d’abord, pelouse ensuite — dans cet ordre.",
    proofItems: [
      { title: "Hors récré", text: "Créneaux visibles pour chaque établissement." },
      { title: "Vacances", text: "Charge densifiée quand le site est vide." },
      { title: "Trace", text: "Utile pour la régie et les élus parents." },
    ],
    vsTitle: "Passage « quand on peut » vs planning scolaire",
    demo: {
      eyebrow: "Démo produit · écoles",
      h2: "Construire la tournée de 12 écoles hors récréation",
      lead: "Walkthrough : créneaux mercredi / matin tôt + sprint vacances de février.",
      scenario:
        "Commune : 12 écoles. Interdiction engins pendant récré et sortie. Tonte préférée mercredi matin ou 6h30. Vacances = semaine dense.",
      steps: [
        { label: "Consignes", detail: "Horaires récré / sortie par école." },
        { label: "Tournée type", detail: "Mercredi AM : 6 écoles · vendredi 6h30 : 3 autres." },
        { label: "Vacances", detail: "Basculer charge restante sur la zone." },
        { label: "Preuve", detail: "Pointages pour la régie." },
      ],
      uiLabel: "Scolaire · Semaine type",
      uiRows: [
        { left: "Jules Ferry", right: "Mer 7h–9h · hors récré", status: "OK" },
        { left: "Maternelle Pins", right: "Ven 6h30", status: "OK" },
        { left: "Collège Vigny", right: "Vacances fév. · dense", status: "Planifié" },
        { left: "Crèche Centre", right: "Accès jardin verrouillé", status: "Consignes" },
      ],
      takeaway: "Le calendrier scolaire devient une contrainte de planning — plus une surprise terrain.",
      primaryCtaLabel: "Essai — tournée écoles",
      secondaryCtaLabel: "Voir collectivités",
      variant: "split",
    },
    faq: richFaq("EV-36"),
    gridItems: [
      { title: "Collectivités", text: "Cadre marchés / régie", href: "/espace-vert/collectivites" },
      { title: "Cimetières & voirie", text: "Autres sites publics", href: "/espace-vert/cimetieres-voirie" },
      { title: "Planning équipes", text: "Affectation créneaux", href: "/espace-vert/planning-equipes" },
    ],
    ctaPrimaryLabel: "Essai 15 j — EV scolaire",
    ctaSecondaryLabel: "Parler créneaux écoles",
  },
];

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function injectVariantIntoSpecs() {
  for (const file of ["specs-part1.ts", "specs-part2.ts", "specs-part3.ts", "specs-part4.ts"]) {
    let src = fs.readFileSync(path.join(evDir, file), "utf8");
    for (const [id, variant] of Object.entries(VARIANTS)) {
      if (Number(id.slice(3)) > 32) continue;
      // Insert variant before closing of demo call — after secondary CTA line patterns
      // Safer: after each `id: "EV-XX"` block's demo takeaway section by adding variant in d() calls
    }
    // Add variant as property after each demo: d( ... ) by converting trailing pattern
    // We'll post-process: for each id, find `id: "EV-XX"` then find next `demo: d(` ... matching close `),`
    for (const [id, variant] of Object.entries(VARIANTS)) {
      if (Number(id.slice(3)) > 32) continue;
      const idToken = `id: "${id}"`;
      const idx = src.indexOf(idToken);
      if (idx < 0) continue;
      const demoIdx = src.indexOf("demo: d(", idx);
      if (demoIdx < 0 || demoIdx > idx + 4000) continue;
      // Find end of demo call — look for takeaway string then optional CTA strings then ),
      // Insert variant: change `demo: d(` to keep d() but add variant after by appending to object
      // Easier approach: after `demo: d(`, we can't easily add. Instead add after the closing `),` of demo
      // by replacing first occurrence of pattern near id.
    }
    // Practical approach: replace helper `d(` definition to accept variant as last optional,
    // and append variant string as last arg in each d( call via regex per block.
    fs.writeFileSync(path.join(evDir, file), src);
  }
}

/** Patch specs files: enrich bodySections/faq + add variant to demo helper invocations */
function patchSpecsFile(filename) {
  let src = fs.readFileSync(path.join(evDir, filename), "utf8");

  // Upgrade d() helper to accept variant
  if (src.includes("primaryCtaLabel?: string,\n  secondaryCtaLabel?: string,\n): EvPageSpec[\"demo\"]")) {
    src = src.replace(
      `primaryCtaLabel?: string,
  secondaryCtaLabel?: string,
): EvPageSpec["demo"] => ({
  eyebrow,
  h2,
  lead,
  scenario,
  steps,
  uiLabel,
  uiRows,
  takeaway,
  primaryCtaLabel,
  secondaryCtaLabel,
});`,
      `primaryCtaLabel?: string,
  secondaryCtaLabel?: string,
  variant?: EvPageSpec["demo"]["variant"],
): EvPageSpec["demo"] => ({
  eyebrow,
  h2,
  lead,
  scenario,
  steps,
  uiLabel,
  uiRows,
  takeaway,
  primaryCtaLabel,
  secondaryCtaLabel,
  variant,
});`,
    );
  }
  // Compact one-line helper variants in part2/3/4
  src = src.replace(
    /primaryCtaLabel, secondaryCtaLabel,\n\}\);/,
    "primaryCtaLabel, secondaryCtaLabel, variant,\n});",
  );
  src = src.replace(
    /secondaryCtaLabel\?: string,\n\): EvPageSpec\["demo"\] => \(\{/,
    'secondaryCtaLabel?: string,\n  variant?: EvPageSpec["demo"]["variant"],\n): EvPageSpec["demo"] => ({',
  );
  src = src.replace(
    /eyebrow, h2, lead, scenario, steps, uiLabel, uiRows, takeaway, primaryCtaLabel, secondaryCtaLabel,\n\}\);/,
    "eyebrow, h2, lead, scenario, steps, uiLabel, uiRows, takeaway, primaryCtaLabel, secondaryCtaLabel, variant,\n});",
  );

  // For each EV id in file, append variant as last arg before closing `),` of demo: d(
  for (const [id, variant] of Object.entries(VARIANTS)) {
    if (Number(id.slice(3)) > 32) continue;
    const idToken = `id: "${id}"`;
    const start = src.indexOf(idToken);
    if (start < 0) continue;
    const demoStart = src.indexOf("demo: d(", start);
    if (demoStart < 0) continue;
    // find matching close — naive: next `\n    ),\n    bodySections` after demoStart
    const endMarker = "\n    ),\n    bodySections";
    const end = src.indexOf(endMarker, demoStart);
    if (end < 0) continue;
    const demoBlock = src.slice(demoStart, end);
    if (demoBlock.includes(`"${variant}"`) && demoBlock.includes("variant")) continue;
    // Insert before final `)` of d( — the end is `    ),` so insert before that
    // Check if last args already have CTA strings; append variant arg
    const insertion = `,\n      "${variant}"`;
    // Avoid double
    if (src.slice(end - 20, end).includes(`"${variant}"`)) continue;
    src = src.slice(0, end) + insertion + src.slice(end);
  }

  // Replace thin bodySections + faq with rich ones where we detect short bodies
  for (const id of Object.keys(RICH)) {
    if (Number(id.slice(3)) > 32) continue;
    const bodies = richBodies(id);
    const faqs = richFaq(id);
    if (!bodies || !faqs) continue;
    const idToken = `id: "${id}"`;
    const start = src.indexOf(idToken);
    if (start < 0) continue;
    const bodyStart = src.indexOf("bodySections: [", start);
    const faqStart = src.indexOf("faq: [", start);
    const gridStart = src.indexOf("gridItems: [", start);
    if (bodyStart < 0 || faqStart < 0 || gridStart < 0) continue;
    if (bodyStart > start + 8000) continue;

    const bodiesTs = serializeBodies(bodies);
    const faqTs = serializeFaq(faqs);
    src = src.slice(0, bodyStart) + bodiesTs + ",\n    " + faqTs + src.slice(gridStart - 1).replace(/^\s*/, ",\n    ");
    // The above is fragile — do cleaner replace of bodySections through faq blocks
  }

  fs.writeFileSync(path.join(evDir, filename), src, "utf8");
  return src.length;
}

function serializeBodies(bodies) {
  const parts = bodies.map((b) => {
    const bullets = b.bullets
      ? `bullets: [\n${b.bullets.map((x) => `          ${JSON.stringify(x)},`).join("\n")}\n        ],`
      : "";
    const h3s = b.h3
      ? `h3: [\n${b.h3
          .map(
            (h) =>
              `          {\n            title: ${JSON.stringify(h.title)},\n            body: ${JSON.stringify(h.body)},\n          },`,
          )
          .join("\n")}\n        ],`
      : "";
    return `      {
        h2: ${JSON.stringify(b.h2)},
        body: ${JSON.stringify(b.body)},
        ${bullets}
        ${h3s}
      }`;
  });
  return `bodySections: [\n${parts.join(",\n")}\n    ]`;
}

function serializeFaq(faqs) {
  const parts = faqs.map(
    (f) =>
      `      {\n        q: ${JSON.stringify(f.q)},\n        a: ${JSON.stringify(f.a)},\n      }`,
  );
  return `faq: [\n${parts.join(",\n")}\n    ]`;
}

/** Cleaner patch: rewrite body+faq per id using brace scanning */
function patchBodiesAndFaqs(filename) {
  let src = fs.readFileSync(path.join(evDir, filename), "utf8");

  for (const id of Object.keys(RICH)) {
    if (Number(id.slice(3)) > 32) continue;
    const bodies = richBodies(id);
    const faqs = richFaq(id);
    const idToken = `id: "${id}"`;
    const start = src.indexOf(idToken);
    if (start < 0) continue;

    const bs = src.indexOf("bodySections:", start);
    const fs_ = src.indexOf("faq:", start);
    const gs = src.indexOf("gridItems:", start);
    if (bs < 0 || fs_ < 0 || gs < 0 || bs > fs_ || fs_ > gs) continue;

    const newBlock = `${serializeBodies(bodies)},\n    ${serializeFaq(faqs)},\n    `;
    src = src.slice(0, bs) + newBlock + src.slice(gs);
  }

  fs.writeFileSync(path.join(evDir, filename), src, "utf8");
}

function upgradeHelpers(filename) {
  let src = fs.readFileSync(path.join(evDir, filename), "utf8");

  // part1 multi-line helper
  if (src.includes("secondaryCtaLabel?: string,\n): EvPageSpec")) {
    src = src.replace(
      "secondaryCtaLabel?: string,\n): EvPageSpec[\"demo\"] => ({",
      "secondaryCtaLabel?: string,\n  variant?: EvPageSpec[\"demo\"][\"variant\"],\n): EvPageSpec[\"demo\"] => ({",
    );
  }
  if (src.includes("primaryCtaLabel,\n  secondaryCtaLabel,\n});")) {
    src = src.replace(
      "primaryCtaLabel,\n  secondaryCtaLabel,\n});",
      "primaryCtaLabel,\n  secondaryCtaLabel,\n  variant,\n});",
    );
  }
  // compact helpers
  src = src.replace(
    "eyebrow, h2, lead, scenario, steps, uiLabel, uiRows, takeaway, primaryCtaLabel, secondaryCtaLabel,\n});",
    "eyebrow, h2, lead, scenario, steps, uiLabel, uiRows, takeaway, primaryCtaLabel, secondaryCtaLabel, variant,\n});",
  );
  if (
    src.includes("secondaryCtaLabel?: string,\n): EvPageSpec[\"demo\"] => ({") &&
    !src.includes("variant?: EvPageSpec")
  ) {
    src = src.replace(
      "secondaryCtaLabel?: string,\n): EvPageSpec[\"demo\"] => ({",
      "secondaryCtaLabel?: string,\n  variant?: EvPageSpec[\"demo\"][\"variant\"],\n): EvPageSpec[\"demo\"] => ({",
    );
  }

  // Append variant args to demo: d( ... )
  for (const [id, variant] of Object.entries(VARIANTS)) {
    if (Number(id.slice(3)) > 32) continue;
    const idToken = `id: "${id}"`;
    const start = src.indexOf(idToken);
    if (start < 0) continue;
    const demoStart = src.indexOf("demo: d(", start);
    if (demoStart < 0) continue;
    const end = src.indexOf("\n    ),\n    bodySections", demoStart);
    if (end < 0) continue;
    const block = src.slice(demoStart, end);
    if (block.includes(`\n      "${variant}"`)) continue;
    src = src.slice(0, end) + `,\n      "${variant}"` + src.slice(end);
  }

  fs.writeFileSync(path.join(evDir, filename), src, "utf8");
}

function writeNewPagesSpec() {
  const file = path.join(evDir, "specs-part5.ts");
  let out = `/* eslint-disable */
import { link, type EvPageSpec } from "./build";

const d = (
  eyebrow: string,
  h2: string,
  lead: string,
  scenario: string,
  steps: EvPageSpec["demo"]["steps"],
  uiLabel: string,
  uiRows: EvPageSpec["demo"]["uiRows"],
  takeaway: string,
  primaryCtaLabel?: string,
  secondaryCtaLabel?: string,
  variant?: EvPageSpec["demo"]["variant"],
): EvPageSpec["demo"] => ({
  eyebrow, h2, lead, scenario, steps, uiLabel, uiRows, takeaway, primaryCtaLabel, secondaryCtaLabel, variant,
});
const s = (label: string, detail: string) => ({ label, detail });
const r = (left: string, right: string, status?: string) => ({ left, right, status });

/** EV-33 → EV-36 — niches SEO additionnelles */
export const evSpecsPart5: EvPageSpec[] = [
`;

  for (const p of NEW_PAGES) {
    const bodies = richBodies(p.id);
    const demo = p.demo;
    out += `  {
    id: ${JSON.stringify(p.id)},
    key: ${JSON.stringify(p.key)},
    path: ${JSON.stringify(p.path)},
    type: ${JSON.stringify(p.type)},
    primaryKw: ${JSON.stringify(p.primaryKw)},
    seoTitle: ${JSON.stringify(p.seoTitle)},
    seoDesc: ${JSON.stringify(p.seoDesc)},
    crumbLabel: ${JSON.stringify(p.crumbLabel)},
    h1Lead: ${JSON.stringify(p.h1Lead)},
    h1: ${JSON.stringify(p.h1)},
    sub: ${JSON.stringify(p.sub)},
    claimBefore: ${JSON.stringify(p.claimBefore)},
    claimHighlight: ${JSON.stringify(p.claimHighlight)},
    claimSub: ${JSON.stringify(p.claimSub)},
    productStrip: ${JSON.stringify(p.productStrip)},
    empathyH2: ${JSON.stringify(p.empathyH2)},
    empathyBody: ${JSON.stringify(p.empathyBody)},
    showcaseTitle: ${JSON.stringify(p.showcaseTitle)},
    showcaseSub: ${JSON.stringify(p.showcaseSub)},
    showcaseBadgeLeft: ${JSON.stringify(p.showcaseBadgeLeft)},
    showcaseBadgeRight: ${JSON.stringify(p.showcaseBadgeRight)},
    proofH2: ${JSON.stringify(p.proofH2)},
    proofQuote: ${JSON.stringify(p.proofQuote)},
    proofItems: ${JSON.stringify(p.proofItems)},
    vsTitle: ${JSON.stringify(p.vsTitle)},
    demo: d(
      ${JSON.stringify(demo.eyebrow)},
      ${JSON.stringify(demo.h2)},
      ${JSON.stringify(demo.lead)},
      ${JSON.stringify(demo.scenario)},
      [
${demo.steps.map((st) => `        s(${JSON.stringify(st.label)}, ${JSON.stringify(st.detail)}),`).join("\n")}
      ],
      ${JSON.stringify(demo.uiLabel)},
      [
${demo.uiRows.map((rw) => `        r(${JSON.stringify(rw.left)}, ${JSON.stringify(rw.right)}, ${JSON.stringify(rw.status)}),`).join("\n")}
      ],
      ${JSON.stringify(demo.takeaway)},
      ${JSON.stringify(demo.primaryCtaLabel)},
      ${JSON.stringify(demo.secondaryCtaLabel)},
      ${JSON.stringify(demo.variant)},
    ),
    ${serializeBodies(bodies)},
    ${serializeFaq(p.faq)},
    gridItems: [
${p.gridItems.map((g) => `      link(${JSON.stringify(g.title)}, ${JSON.stringify(g.text)}, ${JSON.stringify(g.href)}),`).join("\n")}
    ],
    ctaPrimaryLabel: ${JSON.stringify(p.ctaPrimaryLabel)},
    ctaSecondaryLabel: ${JSON.stringify(p.ctaSecondaryLabel)},
  },
`;
  }
  out += `];\n`;
  fs.writeFileSync(file, out, "utf8");
}

function updateIndex() {
  const idx = path.join(evDir, "index.ts");
  let src = fs.readFileSync(idx, "utf8");
  if (!src.includes("specs-part5")) {
    src = src.replace(
      'import { evSpecsPart4 } from "./specs-part4";',
      'import { evSpecsPart4 } from "./specs-part4";\nimport { evSpecsPart5 } from "./specs-part5";',
    );
    src = src.replace(
      "...evSpecsPart4,\n] as const;",
      "...evSpecsPart4,\n  ...evSpecsPart5,\n] as const;",
    );
    fs.writeFileSync(idx, src, "utf8");
  }
}

function writePromptsDoc() {
  const lines = [];
  lines.push(`# Super prompts v2 — Espaces verts (${Object.keys(RICH).length})`);
  lines.push("");
  lines.push("> **Owner :** verticale ESPACE VERT uniquement (ne pas toucher Sécurité).");
  lines.push("> **Fichier v1 (générique) :** `docs/prompts-marketing-espace-vert-securite.md` — historique.");
  lines.push("> **Implémentation :** `src/lib/marketing/ev/specs-part1.ts` … `specs-part5.ts` + `MarketingDemoSection` (variants).");
  lines.push("> **Validation :** `docs/pages-a-valider.md` · `/dashboard-validation`.");
  lines.push("> **Pas de commit** tant que Simon n’a pas demandé.");
  lines.push("");
  lines.push("## Règles v2 (anti-générique) — OBLIGATOIRES");
  lines.push("");
  lines.push("Chaque prompt CI-DESSOUS est un brief d’exécution complet. Interdit : pains copiés-collés, meta tronquées, démo « screenshot générique », mélange propreté/sécurité, claims ROI inventés.");
  lines.push("");
  lines.push(`**Charte :** ${"navy #012939 · chrome #011B25 · lime #A8E300 · paper #FAFAFA · warm #F6F8F9 · line #E4E8EB · slate #5C6B73 · radius 2–3px"}.`);
  lines.push("");
  lines.push("**SEO technique :** `pageMeta` + `SoftwareApplicationLd` + `FaqPageLd` · canonical · maillage hub/pilier/sœurs/`/tarifs`/`/essai-gratuit` · sitemap via `listAllMarketingVerticalPaths()`.");
  lines.push("");
  lines.push("## Architecture URLs v2");
  lines.push("");
  lines.push("```");
  lines.push("/logiciel-espace-vert     ← pilier money (EV-01)");
  lines.push("/espace-vert              ← hub (EV-02)");
  lines.push("/espace-vert/{slug}       ← filles (EV-03 … EV-36)");
  lines.push("```");
  lines.push("");
  lines.push("Nouveautés v2+ : engins-materiel · photos-avant-apres · replanification-meteo · amenageurs-promoteurs · taille-haies · absences-remplacements · cimetieres-voirie · **dechets-verts** · **plantations-massifs** · **hopitaux-cliniques** · **ecoles-etablissements**.");
  lines.push("");

  // Load path/title from NEW + infer from RICH keys by reading existing prompts structure
  const metaById = {};
  for (const p of NEW_PAGES) {
    metaById[p.id] = p;
  }

  // Parse existing specs lightly for path/h1 — from a static map of known pages
  const KNOWN = [
    ["EV-01", "/logiciel-espace-vert", "pilier", "Logiciel pour entreprise d’espaces verts — planning, terrain, facture", "logiciel espace vert"],
    ["EV-02", "/espace-vert", "hub", "Espaces verts — toutes les solutions PROGESTI", "solutions espaces verts PROGESTI"],
    ["EV-03", "/espace-vert/entretien-espaces-verts", "service", "Logiciel d’entretien d’espaces verts — passages & preuves", "logiciel entretien espaces verts"],
    ["EV-04", "/espace-vert/paysagisme", "service", "Logiciel paysagiste — devis, chantiers, facturation", "logiciel paysagiste"],
    ["EV-05", "/espace-vert/tonte-pelouse", "service", "Planning tonte multi-sites — sans oublier une pelouse", "planning tonte multi-sites"],
    ["EV-06", "/espace-vert/elagage", "service", "Logiciel élagage — devis, équipes, preuves chantier", "logiciel élagage"],
    ["EV-07", "/espace-vert/desherbage", "service", "Désherbage & abords — planning multi-sites", "désherbage espaces verts planning"],
    ["EV-08", "/espace-vert/arrosage-irrigation", "service", "Arrosage & irrigation — planifier les passages", "planning arrosage espaces verts"],
    ["EV-09", "/espace-vert/collectivites", "audience", "Espaces verts collectivités — planning & reporting", "logiciel espaces verts collectivités"],
    ["EV-10", "/espace-vert/syndics-coproprietes", "audience", "Espaces verts syndics & copropriétés — preuves", "espaces verts syndics copropriétés"],
    ["EV-11", "/espace-vert/entreprises-sites-prives", "audience", "Espaces verts entreprises & sites privés", "entretien espaces verts entreprises"],
    ["EV-12", "/espace-vert/planning-equipes", "process", "Planning équipes EV multi-chantiers", "planning équipes espaces verts"],
    ["EV-13", "/espace-vert/pointage-terrain", "process", "Pointage terrain EV — preuves", "pointage terrain espaces verts"],
    ["EV-14", "/espace-vert/devis-facturation", "process", "Devis & facturation EV sans double saisie", "devis facturation espaces verts"],
    ["EV-15", "/espace-vert/saison-printemps", "saisonnier", "Haute saison EV — tenir le printemps", "planning espaces verts printemps"],
    ["EV-16", "/espace-vert/saison-automne-hiver", "saisonnier", "Automne & hiver EV — ramassage, taille, suivi", "entretien espaces verts automne hiver"],
    ["EV-17", "/espace-vert/multi-sites", "process", "Multi-sites EV — portefeuille sous contrôle", "logiciel multi-sites espaces verts"],
    ["EV-18", "/espace-vert/toulouse-occitanie", "local", "Logiciel EV Toulouse & Occitanie", "logiciel espaces verts Toulouse"],
    ["EV-19", "/espace-vert/remplacer-excel", "probleme", "Remplacer Excel & WhatsApp en EV", "remplacer Excel espaces verts"],
    ["EV-20", "/espace-vert/faq", "faq", "FAQ logiciel espaces verts PROGESTI", "FAQ logiciel espaces verts"],
    ["EV-21", "/espace-vert/guide-organiser-entretien", "guide", "Guide — organiser l’entretien sans chaos", "organiser entretien espaces verts"],
    ["EV-22", "/espace-vert/preuves-passages", "probleme", "Preuves de passage — finis les litiges", "preuves de passage espaces verts"],
    ["EV-23", "/espace-vert/petites-entreprises", "audience", "Logiciel EV pour TPE & indépendants", "logiciel paysagiste TPE"],
    ["EV-24", "/espace-vert/grands-parcs", "audience", "Grands parcs & sites étendus", "gestion grands parcs espaces verts"],
    ["EV-25", "/espace-vert/contrats-annuels", "process", "Contrats annuels — suivi d’exécution", "contrat annuel entretien espaces verts"],
    ["EV-26", "/espace-vert/engins-materiel", "process", "Engins & matériel EV — conflits ressources", "planning engins espaces verts"],
    ["EV-27", "/espace-vert/photos-avant-apres", "process", "Photos AV/AP — preuves visuelles", "photos avant après espaces verts"],
    ["EV-28", "/espace-vert/replanification-meteo", "probleme", "Replanification météo — tournées sous la pluie", "replanification météo espaces verts"],
    ["EV-29", "/espace-vert/amenageurs-promoteurs", "audience", "EV aménageurs & promoteurs", "espaces verts aménageurs promoteurs"],
    ["EV-30", "/espace-vert/taille-haies", "service", "Taille de haies multi-sites", "planning taille de haies"],
    ["EV-31", "/espace-vert/absences-remplacements", "process", "Absences & remplacements équipes EV", "remplacement équipe espaces verts"],
    ["EV-32", "/espace-vert/cimetieres-voirie", "service", "Cimetières & voiries végétalisées", "entretien cimetières espaces verts"],
    ["EV-33", "/espace-vert/dechets-verts", "service", "Évacuation déchets verts — bennes & chantiers", "évacuation déchets verts espaces verts"],
    ["EV-34", "/espace-vert/plantations-massifs", "service", "Plantations & massifs — pose et reprises", "logiciel plantations massifs paysagiste"],
    ["EV-35", "/espace-vert/hopitaux-cliniques", "audience", "EV hôpitaux & cliniques — planning contraint", "entretien espaces verts hôpital clinique"],
    ["EV-36", "/espace-vert/ecoles-etablissements", "audience", "EV écoles & établissements — hors récré", "entretien espaces verts écoles collèges"],
  ];

  for (const [id, url, type, h1, kw] of KNOWN) {
    const r = RICH[id];
    const variant = VARIANTS[id];
    const seoTitle = h1.length > 55 ? h1.slice(0, 52) + "…" : h1;
    lines.push("---");
    lines.push("");
    lines.push(`### ${id} — ${h1}`);
    lines.push("");
    lines.push(`| Champ | Contenu d’exécution |`);
    lines.push(`|------|---------------------|`);
    lines.push(`| **URL** | \`${url}\` |`);
    lines.push(`| **Type** | ${type} |`);
    lines.push(`| **Mot-clé principal** | ${kw} |`);
    lines.push(`| **H1** | ${h1} |`);
    lines.push(`| **Meta title** | ${seoTitle} \\| PROGESTI |`);
    lines.push(`| **Meta description** | Angle ${type} · ${r.persona} · scénario : ${r.scenario.slice(0, 120)}… · essai 15 j sans CB. |`);
    lines.push("");
    lines.push(`#### 1. Persona (précis)`);
    lines.push(`- **Qui :** ${r.persona}`);
    lines.push(`- **Pains :**`);
    for (const p of r.pains) lines.push(`  - ${p}`);
    lines.push(`- **Objections :**`);
    for (const o of r.objections) lines.push(`  - « ${o} »`);
    lines.push("");
    lines.push(`#### 2. Scénario terrain (non interchangeable)`);
    lines.push(r.scenario);
    lines.push("");
    lines.push(`#### 3. SEO cluster & anti-cannibalisation`);
    lines.push(`- **Cluster / intent :** ${r.cluster}`);
    lines.push(`- **Anti-cannibalisation :** ${r.anti}`);
    lines.push("");
    lines.push(`#### 4. Outline H2/H3 obligatoire`);
    lines.push(`1. Empathie persona (douleurs terrain)`);
    lines.push(`2. **Démo produit unique** (voir §5) — mock UI variant \`${variant}\``);
    lines.push(`3. Détail métier / bodySections (capacités ancrées)`);
    lines.push(`4. Preuves process PROGESTI (planning, pointage, historique, devis/facture)`);
    lines.push(`5. Vs Excel / WhatsApp / status quo`);
    lines.push(`6. Modules / piliers adaptés à l’intent`);
    lines.push(`7. FAQ utiles (pas « Oui. »)`);
    lines.push(`8. Maillage hub + pilier + 2–4 sœurs + \`/tarifs\` + \`/essai-gratuit\``);
    lines.push(`9. FinalPush CTA persona`);
    lines.push("");
    lines.push(`#### 5. Démo produit UNIQUE (obligatoire)`);
    lines.push(`- **Titre démo :** ${r.demoTitle}`);
    lines.push(`- **Variant UI :** \`${variant}\` (list | board | timeline | checklist | split)`);
    lines.push(`- **Walkthrough :** 4 étapes ancrées au scénario ci-dessus`);
    lines.push(`- **Mock rows :** sites / équipes / statuts **spécifiques** à cette page (interdits : réutiliser les rows d’une sœur)`);
    lines.push(`- **CTA démo :** label persona (essai) + secondaire (démo guidée ou sœur)`);
    lines.push("");
    lines.push(`#### 6. Preuves / process réalistes`);
    lines.push(`- Planning d’interventions / fréquences si pertinent`);
    lines.push(`- Pointage mobile & historique`);
    lines.push(`- Contraintes équipes / engins / accès si pertinent`);
    lines.push(`- Devis / facturation du réalisé quand l’intent le justifie`);
    lines.push(`- **Interdit :** ROI % inventé, « IA qui planifie toute seule », mélange propreté/sécu`);
    lines.push("");
    lines.push(`#### 7. Ton`);
    lines.push(`Humain, chef d’exploitation / gérant / DST — vocabulaire EV (tournée, passage, AV/AP, marché, syndic, régie). Zéro blabla SaaS.`);
    lines.push("");
    lines.push(`#### 8. CTAs`);
    lines.push(`- Primaire : Essai 15 j — label contextualisé persona`);
    lines.push(`- Secondaire : Démo guidée / parler à un humain`);
    lines.push(`- Tertiaire : \`/tarifs\` si intent prix`);
    lines.push("");
    lines.push(`#### 9. Schema + maillage`);
    lines.push(`- JSON-LD SoftwareApplication + FAQPage`);
    lines.push(`- Maillage : \`/espace-vert\` · \`/logiciel-espace-vert\` · 2–4 sœurs · \`/tarifs\` · \`/essai-gratuit\``);
    lines.push("");
    lines.push(`#### 10. Checklist anti-générique (à cocher)`);
    lines.push(`- [ ] H1 / meta title / meta desc uniques`);
    lines.push(`- [ ] Persona identifiable en 10 secondes`);
    lines.push(`- [ ] Scénario non interchangeable avec une autre page EV`);
    lines.push(`- [ ] Section démo UI mock différente (variant \`${variant}\` + rows uniques)`);
    lines.push(`- [ ] FAQ utiles (réponses > 1 phrase)`);
    lines.push(`- [ ] Maillage 3–5 sœurs + tarifs/essai`);
    lines.push(`- [ ] Aucun mélange propreté / sécurité`);
    lines.push(`- [ ] Claims ancrés capacités produit`);
    lines.push("");
    lines.push(`**Specs source :** \`src/lib/marketing/ev/specs-part*.ts\` (id ${id}).`);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push("## Livrables Phase B (exécution)");
  lines.push("");
  lines.push("- Specs TS enrichies (body + FAQ + variant démo) pour EV-01…EV-36");
  lines.push("- Composant `MarketingDemoSection` : variants `list|board|timeline|checklist|split`");
  lines.push("- Routes `/espace-vert/[slug]` + pilier + hub");
  lines.push("- Sitemap via `listAllMarketingVerticalPaths()`");
  lines.push("- `docs/pages-a-valider.md` + `/dashboard-validation`");
  lines.push("- `npm run build` OK");
  lines.push("");

  fs.writeFileSync(docsPath, lines.join("\n"), "utf8");
}

function updatePagesAValider() {
  const p = path.join(root, "docs", "pages-a-valider.md");
  let src = fs.readFileSync(p, "utf8");
  // Update count and add new rows if missing
  src = src.replace("## ESPACE VERT (32)", "## ESPACE VERT (36)");
  src = src.replace("Hub · 32 angles", "Hub · 36 angles");
  if (!src.includes("dechets-verts")) {
    const insert = `| EV-33 | \`/espace-vert/dechets-verts\` | EV-33 | à valider | **Nouveau** déchets verts |
| EV-34 | \`/espace-vert/plantations-massifs\` | EV-34 | à valider | **Nouveau** plantations |
| EV-35 | \`/espace-vert/hopitaux-cliniques\` | EV-35 | à valider | **Nouveau** santé |
| EV-36 | \`/espace-vert/ecoles-etablissements\` | EV-36 | à valider | **Nouveau** scolaire |
`;
    src = src.replace(
      "| EV-32 | `/espace-vert/cimetieres-voirie` | EV-32 | à valider | **Nouveau v2** |\n",
      "| EV-32 | `/espace-vert/cimetieres-voirie` | EV-32 | à valider | **Nouveau v2** |\n" + insert,
    );
  }
  // Note enrichment
  if (!src.includes("enrich-ev-v2")) {
    src = src.replace(
      "| Specs EV v2 (copy + démos) | `src/lib/marketing/ev/specs-part*.ts` |",
      "| Specs EV v2 (copy + démos) | `src/lib/marketing/ev/specs-part1.ts` … `part5.ts` |\n| Générateur enrichissement EV | `scripts/enrich-ev-v2.mjs` |",
    );
  }
  fs.writeFileSync(p, src, "utf8");
}

// ─── RUN ───
console.log("1) Writing prompts doc…");
writePromptsDoc();
console.log("2) Upgrading helpers + variants…");
for (const f of ["specs-part1.ts", "specs-part2.ts", "specs-part3.ts", "specs-part4.ts"]) {
  upgradeHelpers(f);
}
console.log("3) Enriching bodySections + FAQ…");
for (const f of ["specs-part1.ts", "specs-part2.ts", "specs-part3.ts", "specs-part4.ts"]) {
  patchBodiesAndFaqs(f);
}
console.log("4) Writing specs-part5 (EV-33…36)…");
writeNewPagesSpec();
console.log("5) Updating ev/index.ts…");
updateIndex();
console.log("6) Updating pages-a-valider.md…");
updatePagesAValider();
console.log("Done.");
