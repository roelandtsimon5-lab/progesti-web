/**
 * Catalogue EV v2 — source unique pour prompts + specs.
 * Owner: ESPACE VERT only. Ne pas mélanger Sécurité.
 * Usage: node scripts/generate-ev-v2-full.mjs
 */
export const CHARTE =
  "navy #012939 · chrome #011B25 · lime #A8E300 · paper #FAFAFA · warm #F6F8F9 · line #E4E8EB · slate #5C6B73 · radius 2–3px";

/** @typedef {'list'|'board'|'timeline'|'checklist'|'split'} Variant */

/**
 * @typedef {object} EvPage
 * @property {string} id
 * @property {string} key
 * @property {string} path
 * @property {string} type
 * @property {string} primaryKw
 * @property {string} seoTitle
 * @property {string} seoDesc
 * @property {string} crumbLabel
 * @property {string} h1Lead
 * @property {string} h1
 * @property {string} sub
 * @property {string} claimBefore
 * @property {string} claimHighlight
 * @property {string} claimSub
 * @property {string} productStrip
 * @property {string} empathyH2
 * @property {string} empathyBody
 * @property {string} showcaseTitle
 * @property {string} showcaseSub
 * @property {{title:string,sub:string}} showcaseBadgeLeft
 * @property {string} showcaseBadgeRight
 * @property {string} proofH2
 * @property {string} proofQuote
 * @property {{title:string,text:string}[]} proofItems
 * @property {string} vsTitle
 * @property {string} persona
 * @property {string[]} pains
 * @property {string[]} objections
 * @property {string} scenarioLong
 * @property {string} seoCluster
 * @property {string} antiCanibal
 * @property {string[]} outline
 * @property {string[]} preuves
 * @property {string} ton
 * @property {string[]} ctas
 * @property {string[]} maillage
 * @property {string[]} checklist
 * @property {object} demo
 * @property {object[]} bodySections
 * @property {{q:string,a:string}[]} faq
 * @property {{title:string,text:string,href:string}[]} gridItems
 * @property {string} [ctaPrimaryLabel]
 * @property {string} [ctaSecondaryLabel]
 */

/** @type {EvPage[]} */
export const EV_PAGES = [];

function add(/** @type {EvPage} */ p) {
  EV_PAGES.push(p);
}

function demo(o) {
  return o;
}
function step(label, detail) {
  return { label, detail };
}
function row(left, right, status) {
  return { left, right, status };
}
function link(title, text, href) {
  return { title, text, href };
}
function body(h2, bodyText, bullets, h3) {
  return { h2, body: bodyText, bullets, h3 };
}
function h3(title, bodyText) {
  return { title, body: bodyText };
}

// ═══════════════════════════════════════════════════════════
// EV-01 PILIER
// ═══════════════════════════════════════════════════════════
add({
  id: "EV-01",
  key: "logiciel-espace-vert",
  path: "/logiciel-espace-vert",
  type: "pilier",
  primaryKw: "logiciel espace vert",
  seoTitle: "Logiciel espaces verts — planning, terrain & facture",
  seoDesc:
    "Logiciel pour entreprise d’espaces verts : planning multi-sites, pointage mobile, preuves de passage, devis et facturation du réalisé. Essai 15 jours sans CB.",
  crumbLabel: "Logiciel espaces verts",
  h1Lead: "Logiciel pour entreprise d’espaces verts",
  h1: "du planning de tonte à la facture, sans Excel ni fil WhatsApp",
  sub: "Contrats d’entretien, chantiers paysagers, équipes et engins qui bougent avec la météo : PROGESTI centralise sites, fréquences, pointages et factures — pensé pour dirigeants de PME paysagistes et d’entretien EV.",
  claimBefore: "Du chantier à la",
  claimHighlight: "facture",
  claimSub: "logiciel espace vert · PME & multi-sites",
  productStrip: "Planning · pointage · preuves · factu EV",
  empathyH2: "Une semaine type en espaces verts, sans filet",
  empathyBody:
    "Lundi 7h : l’orage a trempé 12 pelouses — il faut basculer la tournée. Mardi : un conducteur d’autoportée en arrêt, le syndic des Tilleuls appelle déjà. Mercredi : photos AV/AP jamais remontées. Vendredi : facturation au feeling sur le tableur. Ce n’est pas un manque d’énergie : c’est un manque de système.",
  showcaseTitle: "Une semaine EV lisible pour le bureau et le terrain",
  showcaseSub: "Sites, fréquences saisonnières, équipes et statuts — une seule vérité partagée.",
  showcaseBadgeLeft: { title: "Tournée S18", sub: "47 sites · 3 équipes" },
  showcaseBadgeRight: "Passages OK",
  proofH2: "Ce que le logiciel change concrètement",
  proofQuote: "Planning tenu, passages prouvés, facture alignée sur le réalisé.",
  proofItems: [
    { title: "Fréquences tenues", text: "Récurrences par site (hebdo, bihebdo, mensuel) visibles et ajustables quand la saison accélère." },
    { title: "Preuves exploitables", text: "Pointages horodatés + historique : répondre au syndic ou à la collectivité sans fouiller WhatsApp." },
    { title: "Facture du réel", text: "Le réalisé alimente la facturation — moins d’oublis de prestations ponctuelles." },
  ],
  vsTitle: "Excel & WhatsApp vs PROGESTI pour une PME espaces verts",
  persona:
    "Dirigeant / responsable d’exploitation d’une PME d’entretien EV ou paysagiste (15–40 salariés) : mix contrats annuels multi-sites + chantiers ponctuels, 2–5 équipes, engins partagés.",
  pains: [
    "Replanif météo / absences qui détruisent le planning Excel",
    "Litiges syndic/collectivité sans preuve de passage",
    "Facturation qui oublie les ponctuels et les heures réelles",
    "Charge mentale du gérant = seul à tout savoir",
  ],
  objections: [
    "Excel suffit depuis 10 ans",
    "Le terrain ne pointera jamais",
    "Pas le temps de paramétrer en haute saison",
    "On a déjà un outil devis / compta",
  ],
  scenarioLong:
    "PME paysagiste 28 salariés, périurbain Occitanie. Orage nocturne : 9 sites de tonte du lundi impraticables. Deux équipes (tonte + haies) à redistribuer avant 8h, sans lâcher l’élagage nacelle de mercredi. Le gérant ouvre PROGESTI à 7h15, marque les reports, bascule les équipes, le terrain voit le nouvel ordre sur mobile.",
  seoCluster:
    "Pilier money « logiciel espace vert / logiciel paysagiste / logiciel entretien espaces verts ». Cluster : entretien, planning équipes, preuves, devis/factu, syndic, collectivités.",
  antiCanibal:
    "Money pilier global — ne pas cannibaliser les pages service (tonte, élagage…) ni audiences (syndics, collectivités). Une intention globale logiciel EV.",
  outline: [
    "H1 + promesse bureau↔terrain",
    "Empathie semaine type EV",
    "Démo unique : lundi pluvieux",
    "Persona & objections",
    "Capacités ancrées (planning, pointage, preuves, factu)",
    "Vs Excel/WhatsApp",
    "Modules / piliers produit",
    "FAQ EV",
    "Maillage hub + sœurs + tarifs/essai",
    "FinalPush essai 15 j",
  ],
  preuves: [
    "Planning multi-sites avec fréquences de contrat",
    "Pointage mobile arrivée/départ",
    "Historique d’interventions consultable",
    "Devis → chantier → facture du réalisé",
    "Contraintes équipes / engins si pertinent",
  ],
  ton: "Chef d’exploitation / gérant PME — direct, concret, zéro blabla SaaS (« digitaliser votre workforce »).",
  ctas: ["Essai 15 jours — mes sites EV", "Parler à un humain / démo guidée", "Tarifs en secondaire"],
  maillage: ["/espace-vert", "/espace-vert/entretien-espaces-verts", "/espace-vert/planning-equipes", "/tarifs", "/essai-gratuit"],
  checklist: [
    "H1/meta uniques vs hub et filles",
    "Persona identifiable en 10 s",
    "Démo non interchangeable avec EV-28 (météo dédiée)",
    "Aucun mélange propreté/sécurité",
    "Claims ancrés capacités produit",
  ],
  demo: demo({
    eyebrow: "Démo produit · pilier EV",
    h2: "Rejouez le lundi pluvieux sans reconstruire le planning",
    lead: "Walkthrough d’une replanification météo sur un portefeuille multi-clients — l’écran que le gérant ouvre à 7h15.",
    scenario:
      "PME paysagiste 28 salariés, périurbain. Orage nocturne : 9 sites de tonte du lundi sont impraticables. Deux équipes (tonte + haies) doivent être redistribuées avant 8h, sans lâcher l’élagage de mercredi.",
    steps: [
      step("Ouvrir la semaine", "Vue multi-sites : filtres équipe, type (tonte / haies / élagage) et commune."),
      step("Marquer les sites bloqués", "Statut « reporté météo » — les fréquences restent attachées au contrat."),
      step("Réaffecter", "Équipe A sur tailles de haies prioritaires syndic ; équipe B sur plantation reportable."),
      step("Terrain informé", "Nouvel ordre visible sur mobile ; le bureau garde la trace pour le client."),
    ],
    uiLabel: "Planning EV · Lundi 7h22",
    uiRows: [
      row("Résidence des Tilleuls — tonte", "Équipe A · reporté météo", "Report"),
      row("ZA Les Pins — taille haies", "Équipe A · prioritaire syndic", "Affecté"),
      row("Maison — élagage mercredi", "Équipe B · créneau tenu", "OK"),
      row("Mairie annexe — pelouse sud", "Équipe B · basculé mardi", "Replanifié"),
    ],
    takeaway: "En dix minutes la tournée est cohérente, le contrat n’est pas oublié, et tu as de quoi expliquer le report.",
    primaryCtaLabel: "Essayer sur mon planning",
    secondaryCtaLabel: "Voir la démo guidée",
    variant: "board",
  }),
  bodySections: [
    body(
      "Pour qui est ce logiciel espaces verts ?",
      "Dirigeants et responsables d’exploitation de PME d’entretien EV et de paysagisme (souvent 10–40 salariés) : multi-clients, mix entretien récurrent + chantiers, engins partagés, pression météo et absences. Le vocabulaire est celui du terrain : tournée, fréquence, passage, AV/AP, donneur d’ordre, régie, marché, devis chantier.",
      [
        "Objections fréquentes : « Excel suffit », « le terrain ne pointera pas », « pas le temps de paramétrer ».",
        "Approche d’adoption : sites critiques d’abord, pointage simple, valeur immédiate sur replanif et preuves.",
        "Pas une page tonte seule ni collectivités seule — intent logiciel global EV.",
      ],
      [
        h3("Ce que ce n’est pas", "Pas une page service (tonte, élagage) ni audience (syndic, mairie). Le hub et les filles creusent les niches SEO."),
        h3("Capacités ancrées produit", "Planning multi-sites, équipes, pointage mobile, historique, devis, facturation du réalisé — sans claim miracle ROI inventé."),
      ],
    ),
    body(
      "Intent SEO & cluster espaces verts",
      "Pilier money « logiciel espace vert ». Le cluster s’étend vers entretien EV, paysagiste, planning équipes, preuves, syndic EV, collectivités. Chaque fille a une URL et un H1 non interchangeables.",
      null,
      [h3("Anti-cannibalisation", "Services et audiences ont leurs pages. Ici on vend le système global bureau ↔ terrain.")],
    ),
    body(
      "De la tournée à la facture : le flux réel",
      "Un bon logiciel EV n’empile pas des modules marketing. Il porte le flux : contrat → fréquences → planning → pointage → preuves → facture. Si un maillon casse (souvent preuves ou factu), la marge et la relation client suivent.",
      [
        "Le contrat porte les fréquences (tonte bihebdo, haies 4×/an…).",
        "Le planning porte l’affectation équipes / engins.",
        "Le pointage et l’historique portent la preuve.",
        "La facture porte le réalisé — y compris les ponctuels.",
      ],
    ),
  ],
  faq: [
    { q: "PROGESTI est-il pensé pour les espaces verts ?", a: "Oui. Planning, pointage et facturation s’appliquent aux tournées d’entretien et aux chantiers paysagers — verticale séparée de la propreté et de la sécurité." },
    { q: "On a déjà un tableur qui marche…", a: "Il marche jusqu’à la pluie, l’arrêt maladie et le syndic qui demande l’historique. PROGESTI remplace le tableur pour ce qui doit être partagé bureau ↔ terrain." },
    { q: "Les équipes vont-elles pointer ?", a: "Le pointage mobile reste simple (arrivée / départ, site). Pour le terrain : savoir où aller sans quinze appels." },
    { q: "Entretien récurrent et chantiers ponctuels ?", a: "Oui — fréquences sur contrats d’entretien, et interventions ponctuelles dans le même planning." },
    { q: "Combien ça coûte ?", a: "Dès 29,99 € HT/mois, modules inclus. Essai 15 jours sans CB. Détail sur /tarifs." },
    { q: "Support ?", a: "Équipe joignable à Toulouse (31), qui parle planning d’équipes et contrats terrain — pas un ticket anonyme." },
  ],
  gridItems: [
    link("Logiciel entretien espaces verts", "Passages récurrents & preuves", "/espace-vert/entretien-espaces-verts"),
    link("Planning équipes EV", "Affectation multi-chantiers", "/espace-vert/planning-equipes"),
    link("Hub espaces verts", "Toutes les pages métier", "/espace-vert"),
  ],
  ctaPrimaryLabel: "Essai 15 jours — mes sites EV",
  ctaSecondaryLabel: "Parler à un humain",
});

// Continue in next chunk - export helper already works via push
console.log("catalog part1 loaded", EV_PAGES.length);
