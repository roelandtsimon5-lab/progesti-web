/**
 * Génère specs-part2/3/4 — verticale Sécurité (SEC-10 → SEC-36).
 * node scripts/gen-sec-radical-rest.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../src/lib/marketing/sec");

const j = (x) => JSON.stringify(x);

function emitRows(rows) {
  return rows
    .map((r) => {
      const parts = [`left: ${j(r.left)}`, `right: ${j(r.right)}`];
      if (r.status) parts.push(`status: ${j(r.status)}`);
      if (r.tone) parts.push(`tone: ${j(r.tone)}`);
      if (r.meta) parts.push(`meta: ${j(r.meta)}`);
      return `{ ${parts.join(", ")} }`;
    })
    .join(",\n        ");
}

function emitPage(p) {
  const bodies = p.bodySections
    .map((b) => {
      let s = `{ h2: ${j(b.h2)}, body: ${j(b.body)}`;
      if (b.bullets) s += `, bullets: [${b.bullets.map(j).join(", ")}]`;
      if (b.h3)
        s += `, h3: [${b.h3.map((h) => `{ title: ${j(h.title)}, body: ${j(h.body)} }`).join(", ")}]`;
      return s + " }";
    })
    .join(",\n      ");
  const faq = p.faq.map((f) => `{ q: ${j(f.q)}, a: ${j(f.a)} }`).join(",\n      ");
  const proof = p.proofItems.map((i) => `{ title: ${j(i.title)}, text: ${j(i.text)} }`).join(",\n      ");
  const steps = p.demo.steps.map((s) => `{ label: ${j(s.label)}, detail: ${j(s.detail)} }`).join(",\n        ");
  const grid = p.gridItems
    .map((g) => `link(${j(g[0])}, ${j(g[1])}, ${j(g[2])})`)
    .join(",\n      ");
  const d = p.demo;
  return `  {
    id: ${j(p.id)}, key: ${j(p.key)}, path: ${j(p.path)}, type: ${j(p.type)},
    primaryKw: ${j(p.primaryKw)}, seoTitle: ${j(p.seoTitle)}, seoDesc: ${j(p.seoDesc)},
    crumbLabel: ${j(p.crumbLabel)}, h1Lead: ${j(p.h1Lead)}, h1: ${j(p.h1)}, sub: ${j(p.sub)},
    claimBefore: ${j(p.claimBefore)}, claimHighlight: ${j(p.claimHighlight)}, claimSub: ${j(p.claimSub)},
    productStrip: ${j(p.productStrip)}, empathyH2: ${j(p.empathyH2)}, empathyBody: ${j(p.empathyBody)},
    showcaseTitle: ${j(p.showcaseTitle)}, showcaseSub: ${j(p.showcaseSub)},
    showcaseBadgeLeft: { title: ${j(p.badgeL[0])}, sub: ${j(p.badgeL[1])} },
    showcaseBadgeRight: ${j(p.badgeR)},
    proofH2: ${j(p.proofH2)}, proofQuote: ${j(p.proofQuote)},
    proofItems: [ ${proof} ],
    vsTitle: ${j(p.vsTitle)},
    demo: {
      eyebrow: ${j(d.eyebrow)}, h2: ${j(d.h2)}, lead: ${j(d.lead)}, scenario: ${j(d.scenario)},
      steps: [ ${steps} ],
      uiLabel: ${j(d.uiLabel)},
      ${d.uiToolbar ? `uiToolbar: ${j(d.uiToolbar)},` : ""}
      ${d.uiAlert ? `uiAlert: ${j(d.uiAlert)},` : ""}
      ${d.uiHint ? `uiHint: ${j(d.uiHint)},` : ""}
      ${d.uiSplitLabels ? `uiSplitLabels: ${j(d.uiSplitLabels)},` : ""}
      variant: ${j(d.variant || "list")},
      uiRows: [ ${emitRows(d.uiRows)} ],
      takeaway: ${j(d.takeaway)},
      primaryCtaLabel: ${j(d.primaryCtaLabel)}, secondaryCtaLabel: ${j(d.secondaryCtaLabel)},
    },
    bodySections: [ ${bodies} ],
    faq: [ ${faq} ],
    gridItems: [ ${grid} ],
    ctaPrimaryLabel: ${j(p.ctaPrimaryLabel)}, ctaSecondaryLabel: ${j(p.ctaSecondaryLabel)},
    trustLeft: ${j(p.trustLeft)},
  }`;
}

function wrap(name, comment, pages) {
  return `/* eslint-disable */
/** ${comment} */
import type { SecPageSpec } from "./build";
import { link } from "./build";

export const ${name}: SecPageSpec[] = [
${pages.map(emitPage).join(",\n")}
];
`;
}

const price = [
  { q: "Essai ?", a: "15 jours sans CB, sur vos vrais sites." },
  { q: "Prix ?", a: "Dès 29,99 € HT/mois. Voir /tarifs." },
];

function page(o) {
  return {
    claimBefore: o.claimBefore || "Du terrain à la",
    claimHighlight: o.claimHighlight || "preuve",
    trustLeft: o.trustLeft || "Verticale sécurité · vacations & preuves",
    ctaPrimaryLabel: o.ctaPrimaryLabel || "Essai 15 j sans CB",
    ctaSecondaryLabel: o.ctaSecondaryLabel || "Voir la démo terrain",
    ...o,
  };
}

/** SEC-10 → SEC-18 */
const part2 = [
  page({
    id: "SEC-10", key: "coproprietes", path: "/securite/coproprietes", type: "audience",
    primaryKw: "gardiennage copropriété logiciel",
    seoTitle: "Gardiennage copropriété — reporting syndic & vacations",
    seoDesc: "Gardiennage copropriété : vacations soir, passages, reporting syndic. Essai 15 j sans CB.",
    crumbLabel: "Copropriétés", h1Lead: "Gardiennage en copropriété",
    h1: "vacations tenues, passages prouvés, reporting syndic lisible",
    sub: "Le conseil syndical veut qui était là, quels passages, quels incidents — pas un forward WhatsApp avant l’AG. ≠ pages EV syndics.",
    claimHighlight: "synthèse syndic", claimSub: "copropriété · reporting",
    productStrip: "Vacation soir · halls · parking · export syndic",
    empathyH2: "Le syndic juge le reporting — pas votre fil WhatsApp",
    empathyBody: "Vacation 20h–0h, tours parking, digicode forcé : en copro la preuve sert l’AG. Sans historique vous reconstruisez Excel la veille du CS.",
    showcaseTitle: "Résidence Les Pins : mois propre pour le syndic", showcaseSub: "Présences, passages, incidents exportables.",
    badgeL: ["Les Pins", "20h–0h"], badgeR: "Export syndic",
    proofH2: "Copro = présence + passages + incidents", proofQuote: "Ce qui n’est pas historisé ne survit pas à une AG tendue.",
    proofItems: [
      { title: "Vacations soir", text: "Créneaux résidentiels pointés." },
      { title: "Passages", text: "Halls / parking horodatés." },
      { title: "Synthèse", text: "Export mois syndic / CS." },
    ],
    vsTitle: "Carnet gardien vs reporting copro PROGESTI",
    demo: {
      eyebrow: "Démo · copropriété", h2: "Le syndic demande mars avant l’AG",
      lead: "Vacations, tours parking, incidents digicode — une synthèse.",
      scenario: "Résidence Les Pins (84 lots). Vacation 20h–0h + 2 passages parking. Syndic veut synthèse mars.",
      steps: [
        { label: "Filtre", detail: "Les Pins · mars." },
        { label: "Vacations", detail: "30/31 pointées · 1 remplacement." },
        { label: "Passages", detail: "Halls + parking." },
        { label: "Export", detail: "Synthèse + main courante digicode." },
      ],
      uiLabel: "Reporting · Les Pins · mars", uiToolbar: "Copro · Export syndic",
      variant: "list",
      uiRows: [
        { left: "Vacations 20h–0h", right: "30/31 · 1 remplacement 12/03", status: "OK", tone: "ok", meta: "120 h" },
        { left: "Tour parking", right: "21h / 23h", status: "Historisé", tone: "ok", meta: "2 rattrapages" },
        { left: "Main courante", right: "Digicode forcé · escalade syndic", status: "Noté", tone: "info", meta: "02:11" },
        { left: "Synthèse mois", right: "Prête AG / CS", status: "Exportable", tone: "ok", meta: "01/04 09:14" },
      ],
      uiHint: "≠ EV syndics / propreté.", takeaway: "Le syndic reçoit une synthèse, pas 200 WhatsApp.",
      primaryCtaLabel: "Essai copro", secondaryCtaLabel: "Démo reporting syndic",
    },
    bodySections: [
      { h2: "≠ espaces verts syndics", body: "Ici sécurité : vacation, passages, main courante. Pas tonte." },
      { h2: "Ce que le CS regarde", body: "Présence, incidents, continuité week-end.", bullets: ["Vacations", "Passages", "Incidents"] },
      { h2: "Objection gardien d’immeuble", body: "Prestataire externe : vacation et preuve restent votre responsabilité." },
    ],
    faq: [
      { q: "Même page qu’EV syndics ?", a: "Non — verticale sécurité." },
      { q: "Vs reporting-client ?", a: "Ici angle copro/syndic ; reporting-client = cadre DO général." },
      ...price, { q: "Main courante ?", a: "Oui — incidents liés site/vacation." },
    ],
    gridItems: [
      ["Reporting client", "Cadre DO.", "/securite/reporting-client"],
      ["Main courante", "Incidents.", "/securite/main-courante"],
      ["Astreinte nuit", "Soir/nuit.", "/securite/astreinte-nuit"],
      ["Gardiennage", "Poste.", "/securite/gardiennage"],
    ],
  }),
  page({
    id: "SEC-11", key: "planning-agents", path: "/securite/planning-agents", type: "process",
    primaryKw: "planning agents de sécurité",
    seoTitle: "Planning agents de sécurité — vacations & backups",
    seoDesc: "Planning agents sécurité : vacations, backups, trous rouges avant le client. Essai 15 j sans CB.",
    crumbLabel: "Planning agents", h1Lead: "Planning agents de sécurité",
    h1: "voir les trous de vacation avant le donneur d’ordre",
    sub: "Titulaire, backup, confirmation J-1, alerte rouge : le planning est votre filet anti vacation non pourvue — pas un calendrier décoratif.",
    claimHighlight: "vacation couverte", claimSub: "planning · couverture",
    productStrip: "Semaine · titulaire · backup · alerte trou",
    empathyH2: "Le client découvre le poste vide quand le planning n’a pas de filet",
    empathyBody: "Excel « planning_v23_FINAL » ne flagge pas l’absence de backup. En gardiennage la valeur du planning = couverture visible, surtout la veille des nuits.",
    showcaseTitle: "Semaine type : verts, oranges, rouges", showcaseSub: "Couvert, backup faible, trou.",
    badgeL: ["Semaine 12", "42 vacations"], badgeR: "1 trou rouge",
    proofH2: "Planning = gestion de couverture", proofQuote: "Rouge à 17h : le client n’a pas à l’apprendre à 22h.",
    proofItems: [
      { title: "Titulaire + backup", text: "Nommés sur postes critiques." },
      { title: "Confirmation", text: "Confirmé vs simple inscription." },
      { title: "Alertes", text: "J-1 / J-0 non couvertes." },
    ],
    vsTitle: "Tableur vs couverture live PROGESTI",
    demo: {
      eyebrow: "Démo · planning vacations", h2: "Mercredi 17h : tuer les rouges avant la nuit",
      lead: "Scan nuits · 1 trou Entrepôt B · pourvoi avant 19h.",
      scenario: "Chef d’exploitation, 12 sites. Ritual 17h : vacations 22h–06h non confirmées. Entrepôt B encore rouge.",
      steps: [
        { label: "Scan", detail: "Nuits non confirmées." },
        { label: "Trou", detail: "Entrepôt B sans titulaire." },
        { label: "Pourvoi", detail: "Backup pool + consignes." },
        { label: "Clos", detail: "Couvert 17h48." },
      ],
      uiLabel: "Planning nuit · Mer. 17h", uiToolbar: "J-0 · 22h–06h · 12 sites",
      uiAlert: "Entrepôt B — aucun agent confirmé 22h–06h",
      variant: "board",
      uiRows: [
        { left: "Entrepôt A", right: "Titulaire OK · Backup prêt", status: "Couvert", tone: "ok", meta: "22h–06h" },
        { left: "Usine Est", right: "Backup distant ETA 55 min", status: "Attention", tone: "warn", meta: "Surveiller" },
        { left: "Entrepôt B", right: "Aucun agent", status: "Trou", tone: "danger", meta: "17:02" },
        { left: "Entrepôt B après", right: "L. Moreau + brief", status: "Couvert", tone: "ok", meta: "17:48" },
      ],
      takeaway: "Le planning sert à tuer les rouges — pas à décorer le bureau.",
      primaryCtaLabel: "Essai planning", secondaryCtaLabel: "Démo couverture",
    },
    bodySections: [
      { h2: "Vs vacation non pourvue / remplacement", body: "Planning = anticipation. Non pourvue = problème SEO. Remplacement = urgence.", bullets: ["Anticipation", "Problème", "Urgence"] },
      { h2: "Ritual exploit", body: "J-1 18h confirmer nuits. J-0 17h scan rouges. Week-end : pool dédié.", h3: [{ title: "Posts P1", body: "Double check titulaire + backup." }, { title: "Multi-sites", body: "Éviter double booking." }] },
      { h2: "Objection Excel", body: "Excel planifie. Il n’alerte pas, ne lie pas consignes, ne trace pas le remplacement." },
    ],
    faq: [
      { q: "Planning RH ?", a: "Non — vacations / postes sécurité." },
      { q: "Lien chef exploitation ?", a: "Oui — page rôle / journée type." },
      ...price, { q: "Alertes push ?", a: "Trous exposés ; vos règles décident qui traite." },
    ],
    gridItems: [
      ["Vacation non pourvue", "Problème trou.", "/securite/vacation-non-pourvue"],
      ["Remplacement urgence", "Combler.", "/securite/remplacement-urgence"],
      ["Week-end & fériés", "Pics risque.", "/securite/week-end-jours-feries"],
      ["Chef exploitation", "Rôle.", "/securite/chef-exploitation"],
    ],
  }),
  page({
    id: "SEC-12", key: "pointage-vacations", path: "/securite/pointage-vacations", type: "process",
    primaryKw: "pointage agents sécurité",
    seoTitle: "Pointage agents sécurité — présence vacation horodatée",
    seoDesc: "Pointage agents sécurité : arrivée/départ vacation, écarts, base paie & facture. Essai 15 j sans CB.",
    crumbLabel: "Pointage vacations", h1Lead: "Pointage des vacations",
    h1: "prouver la présence en poste — pas le débat du lundi",
    sub: "Arrivée, départ, écart vs planning : l’horodatage coupe court aux « j’étais là » et alimente une facturation saine.",
    claimHighlight: "heure facturable", claimSub: "pointage · présence",
    productStrip: "Arrivée · départ · écart · réalisé",
    empathyH2: "Sans pointage, chaque fin de mois est une négociation",
    empathyBody: "Agent, exploit, donneur d’ordre : trois mémoires. L’horodatage de prise/fin de poste aligne tout le monde sur le même réalisé.",
    showcaseTitle: "Vacation 22h–06h : présence réelle", showcaseSub: "21h58 → 06h04 · écart toléré.",
    badgeL: ["Pointage mobile", "Poste entrée"], badgeR: "Horodaté",
    proofH2: "Pointage = socle paie + facture + preuve", proofQuote: "Ce qui n’est pas pointé sera contesté.",
    proofItems: [
      { title: "Prise de poste", text: "Horodatage arrivée." },
      { title: "Fin vacation", text: "Départ / relève." },
      { title: "Écarts", text: "Vs créneau planifié." },
    ],
    vsTitle: "Émargement papier vs pointage mobile",
    demo: {
      eyebrow: "Démo · pointage vacation", h2: "21h58 : prise de poste Entrepôt Nord",
      lead: "Arrivée, fin, écart, heures facturables. ≠ rondes.",
      scenario: "Vacation entrée 22h–06h. L. Moreau pointe arrivée/départ. Exploit valide +6 min lundi.",
      steps: [
        { label: "Arrivée", detail: "21h58 mobile site." },
        { label: "Vacation", detail: "Poste tenu." },
        { label: "Départ", detail: "06h04 relève." },
        { label: "Validation", detail: "8h06 facturables." },
      ],
      uiLabel: "Pointage · Entrepôt Nord", uiToolbar: "Présence poste · ≠ rondes",
      variant: "timeline",
      uiRows: [
        { left: "Arrivée", right: "Mobile · géoloc site", status: "Horodatée", tone: "ok", meta: "21:58:12" },
        { left: "Départ", right: "Fin vacation", status: "Horodatée", tone: "ok", meta: "06:04:03" },
        { left: "Écart", right: "+6 min · tolérance 15", status: "OK", tone: "ok", meta: "Règle contrat" },
        { left: "Facturable", right: "8h06 → brouillon", status: "Prêt", tone: "ok", meta: "Lundi" },
      ],
      takeaway: "Le débat « j’étais là » s’arrête avec l’horodatage.",
      primaryCtaLabel: "Essai pointage", secondaryCtaLabel: "Démo présence",
    },
    bodySections: [
      { h2: "Pointage ≠ ronde ≠ main courante", body: "Trois intents, trois pages. Ici = présence début/fin." },
      { h2: "Lien heures contestées", body: "Premier artefact en litige agent/client." },
      { h2: "Objection oubli agent", body: "Vacation non pointée = anomalie exploit (et impact preuve/paie)." },
    ],
    faq: [
      { q: "Vs rondes ?", a: "Rondes = passages. Pointage = présence poste." },
      { q: "Paie complète ?", a: "Non — le réalisé aide ; pas un logiciel de paie." },
      ...price, { q: "Géoloc obligatoire ?", a: "Selon paramétrage et accords." },
    ],
    gridItems: [
      ["Heures contestées", "Litiges.", "/securite/heures-contestees"],
      ["Facturation", "Réalisé → facture.", "/securite/facturation-gardiennage"],
      ["Rondes", "Passages.", "/securite/rondes-surveillance"],
      ["Planning", "Créneaux.", "/securite/planning-agents"],
    ],
  }),
];

// Write part2 starter then append more pages in same file via continued script execution
fs.writeFileSync(path.join(outDir, "specs-part2.ts"), wrap("secSpecsPart2", "SEC-10 → … (gen)", part2));
console.log("wrote partial part2", part2.length);
