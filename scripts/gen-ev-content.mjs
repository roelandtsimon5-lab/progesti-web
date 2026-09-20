/**
 * Générateur contenu EV v2 — exécuté une fois pour produire les specs.
 * Usage: node scripts/gen-ev-content.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src/lib/marketing/ev");

/** @typedef {{ id:string,key:string,path:string,type:string,primaryKw:string,seoTitle:string,seoDesc:string,crumbLabel:string,h1Lead:string,h1:string,sub:string,claimBefore:string,claimHighlight:string,claimSub:string,productStrip:string,empathyH2:string,empathyBody:string,showcaseTitle:string,showcaseSub:string,badgeL:string,badgeLS:string,badgeR:string,proofH2:string,proofQuote:string,proof:string[][],vsTitle:string,demo:any,body:any[],faq:string[][],grid:string[][],ctaP?:string,ctaS?:string }} Spec */

/** @type {Spec[]} */
const pages = [];

function add(p) {
  pages.push(p);
}

function demo(eyebrow, h2, lead, scenario, steps, uiLabel, uiRows, takeaway, ctaP, ctaS) {
  return { eyebrow, h2, lead, scenario, steps, uiLabel, uiRows, takeaway, primaryCtaLabel: ctaP, secondaryCtaLabel: ctaS };
}
function step(label, detail) {
  return { label, detail };
}
function row(left, right, status) {
  return { left, right, status };
}
function body(h2, body, bullets, h3) {
  return { h2, body, bullets, h3 };
}
function h3(title, body) {
  return { title, body };
}

// ——— EV-01 Pilier ———
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
  sub: "Vous gérez des contrats d’entretien, des chantiers paysagers et des équipes qui bougent avec la météo. PROGESTI centralise sites, fréquences, pointages et factures — pour dirigeants de PME paysagistes et d’entretien EV.",
  claimBefore: "Du chantier à la",
  claimHighlight: "facture",
  claimSub: "logiciel espace vert · PME & multi-sites",
  productStrip: "Planning · pointage · preuves · factu EV",
  empathyH2: "Une semaine type en espaces verts, sans filet",
  empathyBody:
    "Lundi 7h : l’orage a trempé 12 pelouses — faut basculer la tournée. Mardi : un conducteur d’autoportée en arrêt, le syndic de la Résidence des Tilleuls appelle déjà. Mercredi : photos AV/AP jamais remontées. Vendredi : facturation « au feeling » sur le tableur. Ce n’est pas un manque d’énergie : c’est un manque de système.",
  showcaseTitle: "Une semaine EV lisible pour le bureau et le terrain",
  showcaseSub: "Sites, fréquences saisonnières, équipes et statuts — une seule vérité.",
  badgeL: "Tournée S18",
  badgeLS: "47 sites · 3 équipes",
  badgeR: "Passages OK",
  proofH2: "Ce que le logiciel change concrètement",
  proofQuote: "Planning tenu, passages prouvés, facture alignée sur le réalisé.",
  proof: [
    ["Fréquences tenues", "Récurrences par site (hebdo, bihebdo, mensuel) visibles et ajustables quand la saison accélère."],
    ["Preuves exploitables", "Pointages horodatés + historique : réponds au syndic ou à la collectivité sans fouiller WhatsApp."],
    ["Facture du réel", "Le réalisé alimente la facturation — moins d’oublis de prestations ponctuelles ou d’heures."],
  ],
  vsTitle: "Excel & WhatsApp vs PROGESTI pour une PME espaces verts",
  demo: demo(
    "Démo produit · pilier EV",
    "Rejouez le lundi pluvieux sans reconstruire le planning",
    "Walkthrough d’une replanification météo sur un portefeuille multi-clients — l’écran que le gérant ouvre à 7h15.",
    "PME paysagiste 28 salariés, secteur périurbain. Orage nocturne : 9 sites de tonte du lundi sont impraticables. Deux équipes (tonte + taille de haies) doivent être redistribuées avant 8h, sans laisser le chantier élagage de mercredi à découvert.",
    [
      step("Ouvrir la semaine", "Vue planning multi-sites : filtres par équipe, type de prestation (tonte / haies / élagage) et commune."),
      step("Marquer les sites bloqués", "Statut « reporté météo » sur les 9 pelouses — les fréquences restent attachées au contrat, pas perdues."),
      step("Réaffecter les équipes", "Glisser l’équipe A sur 4 tailles de haies prioritaires syndic ; équipe B sur un chantier plantation reportable."),
      step("Prévenir sans chaos", "Le terrain voit le nouveau ordre sur mobile ; le bureau garde la trace pour le reporting client."),
    ],
    "Planning EV · Lundi 7h22",
    [
      row("Résidence des Tilleuls — tonte", "Équipe A · reporté météo", "Report"),
      row("ZA Les Pins — taille haies", "Équipe A · prioritaire syndic", "Affecté"),
      row("Maison individuelle — élagage", "Équipe B · créneau mercredi tenu", "OK"),
      row("Mairie annexe — pelouse sud", "Équipe B · basculé mardi", "Replanifié"),
    ],
    "En 10 minutes, la tournée est cohérente, le contrat n’est pas « oublié », et tu as une base pour expliquer le report au client.",
    "Essayer sur mon planning",
    "Voir la démo guidée",
  ),
  body: [
    body(
      "Pour qui est ce logiciel espaces verts ?",
      "Dirigeants et responsables d’exploitation de PME d’entretien d’espaces verts et de paysagisme (souvent 10 à 40 salariés) : multi-clients, mix entretien récurrent + chantiers ponctuels, engins partagés, pression météo et absences.",
      [
        "Vocabulaire métier : tournée, fréquence, passage, AV/AP, donneur d’ordre, régie, marché public, devis chantier.",
        "Objections fréquentes : « on a déjà Excel », « le terrain ne tapera jamais sur un téléphone », « on n’a pas le temps de paramétrer ».",
        "Réponse produit : démarrer sur les sites critiques, pointage simple, valeur immédiate sur replanif et preuves.",
      ],
      [
        h3("Ce que ce n’est pas", "Pas une page « tonte seule », ni « collectivités seule », ni « syndic ». Ici l’intent est le logiciel global EV — le hub et les pages filles creusent les niches."),
        h3("Capacités ancrées produit", "Planning multi-sites, affectation d’équipes, pointage mobile, historique d’interventions, devis, facturation du réalisé, vision multi-clients — sans claim miracle sur la productivité."),
      ],
    ),
    body(
      "Intent SEO & positionnement",
      "Mot-clé pilier : logiciel espace vert / logiciel espaces verts. Cluster money : logiciel entretien espaces verts, logiciel paysagiste, planning équipes EV. Cannibalisation évitée : les services (tonte, élagage…) et audiences (syndic, collectivité) ont leurs URLs dédiées.",
    ),
  ],
  faq: [
    ["PROGESTI est-il vraiment pensé pour les espaces verts ?", "Oui. Le socle planning / pointage / facturation s’applique aux tournées d’entretien, aux chantiers paysagers et aux multi-sites — sans fusion avec la verticale propreté."],
    ["On a déjà un tableur qui « marche »…", "Il marche jusqu’à la pluie, l’arrêt maladie et le syndic qui demande l’historique. PROGESTI remplace le tableur pour ce qui doit être partagé bureau ↔ terrain."],
    ["Les équipes terrain vont-elles pointer ?", "Le pointage mobile est volontairement simple (arrivée / départ, site). La valeur pour eux : savoir où aller et quoi faire sans 15 appels."],
    ["Peut-on gérer entretien récurrent et chantiers ponctuels ?", "Oui — fréquences sur contrats d’entretien, et interventions ponctuelles (élagage, plantation) dans le même planning."],
    ["Combien ça coûte ?", "Dès 29,99 € HT/mois, modules inclus. Essai 15 jours sans carte bancaire."],
    ["Support ?", "Équipe joignable, basée à Toulouse (31), qui parle planning d’équipes et contrats terrain."],
  ],
  grid: [
    ["Logiciel entretien espaces verts", "Focus passages récurrents & preuves", "/espace-vert/entretien-espaces-verts"],
    ["Planning équipes EV", "Process affectation multi-chantiers", "/espace-vert/planning-equipes"],
    ["Hub espaces verts", "Toutes les pages métier EV", "/espace-vert"],
  ],
  ctaP: "Essai 15 jours — mes sites EV",
  ctaS: "Parler à un humain",
});

// Continue generating remaining pages in the script file...
// I'll write a second large chunk below.

const OUT_SPECS = path.join(root, "generated-specs.json");
fs.mkdirSync(root, { recursive: true });

console.log("Partial generator scaffold — will be completed with all 32 pages");
fs.writeFileSync(OUT_SPECS, JSON.stringify({ count: pages.length, pages }, null, 0));
console.log("Wrote", OUT_SPECS, "with", pages.length, "pages");
