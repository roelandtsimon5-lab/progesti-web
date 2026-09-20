/**
 * Enrichit specs-legacy-rest.ts : démos plus riches (variant, meta, tone, toolbar, alert).
 * node scripts/enrich-sec-legacy-max.mjs
 */
import fs from "node:fs";

const path = "src/lib/marketing/sec/specs-legacy-rest.ts";
let src = fs.readFileSync(path, "utf8");

const variants = ["list", "board", "timeline", "checklist", "split"];
const keys = [...src.matchAll(/key: "([^"]+)"/g)].map((m) => m[1]);

/** Par clé : toolbar / alert / variant / hint */
const enrich = {
  coproprietes: {
    variant: "list",
    toolbar: "Copro · Export syndic · Vacation soir",
    alert: null,
    hint: "Angle sécurité résidentielle — ≠ EV syndics.",
  },
  "planning-agents": {
    variant: "board",
    toolbar: "J-0 · Vacations nuit · Couverture titulaire/backup",
    alert: "Trou détecté — vacation sans titulaire confirmé",
    hint: "Planning = anticipation · ≠ page vacation non pourvue.",
  },
  "pointage-vacations": {
    variant: "timeline",
    toolbar: "Présence poste · Arrivée / départ · ≠ rondes",
    alert: null,
    hint: "Pointage présence — complémentaire preuves de ronde.",
  },
  "preuves-intervention": {
    variant: "split",
    toolbar: "Audit donneur d’ordre · Export période",
    alert: null,
    hint: "Dossier preuves — pas un label certifié.",
    split: ["Terrain", "Export"],
  },
  "multi-sites": {
    variant: "board",
    toolbar: "Portefeuille · Criticité · Couverture nuit",
    alert: "P1 — site critique · vacation non pourvue",
    hint: "Priorisation multi-sites.",
  },
  "facturation-gardiennage": {
    variant: "list",
    toolbar: "Réalisé pointé · Écarts · Extras",
    alert: null,
    hint: "Facture alignée sur le tenu — pas le planning optimiste.",
  },
  "remplacer-excel": {
    variant: "split",
    toolbar: "Avant Excel / WhatsApp · Après couverture unique",
    alert: null,
    hint: "Migration organisationnelle.",
    split: ["Avant", "Après"],
  },
  faq: {
    variant: "board",
    toolbar: "FAQ · Aiguillage intents",
    alert: null,
    hint: "Réponses courtes + maillage deep.",
  },
  "guide-organiser-vacations": {
    variant: "checklist",
    toolbar: "Méthode · Checklist couverture semaine",
    alert: null,
    hint: "Méthode avant automatisation.",
  },
  "toulouse-occitanie": {
    variant: "list",
    toolbar: "31 / Occitanie · Support Tournefeuille",
    alert: null,
    hint: "Ancrage local — produit national.",
  },
  "astreinte-nuit": {
    variant: "timeline",
    toolbar: "Nuit 22h–06h · Pool backup · Escalade",
    alert: "03h — ronde manquante signalée",
    hint: "Organisation nuit — ≠ PC télésurveillance.",
  },
  "pme-entreprises": {
    variant: "list",
    toolbar: "PME · 1–2 postes · Facture simple",
    alert: null,
    hint: "Audience PME — vs grands comptes.",
  },
  "grands-comptes": {
    variant: "split",
    toolbar: "Périmètre national · Reporting DO",
    alert: null,
    hint: "Sans promesse SLA non maîtrisée par le logiciel seul.",
    split: ["Sites", "Reporting"],
  },
  "contrats-cadres": {
    variant: "list",
    toolbar: "Cadre annuel · Réalisé mois · Écart",
    alert: "Écart volume visible avant facture",
    hint: "Pilotage exécution — pas rédaction juridique.",
  },
  "petites-societes": {
    variant: "checklist",
    toolbar: "TPE 5–15 agents · Léger · Prix public",
    alert: null,
    hint: "Positionnement TPE — complementary grands comptes.",
  },
  "controle-acces-consignes": {
    variant: "checklist",
    toolbar: "Fiche site · Consignes · Lecture prise de poste",
    alert: null,
    hint: "Infos/consignes — pas hardware contrôle d’accès.",
  },
  "main-courante": {
    variant: "timeline",
    toolbar: "Main courante · Site · Vacation liée",
    alert: "02:14 — incident noté · escalade en cours",
    hint: "Historique — pas substitut obligations légales.",
  },
  ssiap: {
    variant: "list",
    toolbar: "Postes SSIAP · Vacation · Relève · Consignes",
    alert: null,
    hint: "Orga postes — pas formation / habilitation SSIAP.",
  },
  "sites-sensibles": {
    variant: "checklist",
    toolbar: "Sites à enjeux · Brief obligatoire · Double check",
    alert: null,
    hint: "Ops — pas claim secret défense.",
  },
  "btp-chantiers": {
    variant: "board",
    toolbar: "Chantier · Horaires glissants · Accès engins",
    alert: null,
    hint: "Audience BTP — ≠ industriel permanent.",
  },
  "pc-securite": {
    variant: "board",
    toolbar: "PC exploitation · Live postes · Alertes",
    alert: "Site #7 — 22h sans agent confirmé",
    hint: "Supervision orga — pas télésurveillance vidéo.",
  },
  "vacation-non-pourvue": {
    variant: "list",
    toolbar: "Couverture · Trou rouge · J-0",
    alert: "17h40 — vacation 22h–06h sans titulaire confirmé",
    hint: "Angle problème trou — ≠ planning process.",
  },
  "remplacement-urgence": {
    variant: "timeline",
    toolbar: "Désistement · Pool backup · Brief · Pointage",
    alert: "21h10 — titulaire se désiste · vacation 22h–06h",
    hint: "Process urgence — complementary non pourvue.",
  },
};

function injectDemoFields(block, cfg, variantFallback) {
  const variant = cfg?.variant || variantFallback;
  let out = block;
  // Remove existing variant if present then add rich fields before uiRows or takeaway
  if (!/variant:/.test(out)) {
    out = out.replace(
      /uiRows:/,
      `variant: "${variant}",\n      uiRows:`,
    );
  } else {
    out = out.replace(/variant: "[^"]+"/, `variant: "${variant}"`);
  }
  if (cfg?.toolbar && !/uiToolbar:/.test(out)) {
    out = out.replace(/uiLabel: ([^\n]+)\n/, `uiLabel: $1\n      uiToolbar: ${JSON.stringify(cfg.toolbar)},\n`);
  }
  if (cfg?.alert && !/uiAlert:/.test(out)) {
    out = out.replace(
      /uiToolbar: ([^\n]+)\n/,
      (m) => `${m}      uiAlert: ${JSON.stringify(cfg.alert)},\n`,
    );
    if (!/uiAlert:/.test(out)) {
      out = out.replace(/uiLabel: ([^\n]+)\n/, `uiLabel: $1\n      uiAlert: ${JSON.stringify(cfg.alert)},\n`);
    }
  }
  if (cfg?.hint && !/uiHint:/.test(out)) {
    out = out.replace(/takeaway:/, `uiHint: ${JSON.stringify(cfg.hint)},\n      takeaway:`);
  }
  if (cfg?.split && !/uiSplitLabels:/.test(out)) {
    out = out.replace(
      /variant: "[^"]+",/,
      `variant: "${variant}",\n      uiSplitLabels: ${JSON.stringify(cfg.split)},`,
    );
  }
  // Enrich uiRows with meta/tone if missing
  out = out.replace(
    /\{\s*left: "([^"]+)",\s*right: "([^"]+)",\s*status: "(alert|ok)"\s*\}/g,
    (_, left, right, status) => {
      const tone = status === "alert" ? "danger" : "ok";
      const label = status === "alert" ? "Alerte" : "OK";
      return `{ left: "${left}", right: "${right}", status: "${label}", tone: "${tone}", meta: "Vacation · horodatage" }`;
    },
  );
  return out;
}

// Process each demo: { ... } block after "demo: {"
let pageIdx = 0;
src = src.replace(/demo: \{[\s\S]*?\n    \},\n    bodySections:/g, (demoBlock) => {
  const key = keys[pageIdx] || "";
  pageIdx++;
  const cfg = enrich[key];
  const variantFallback = variants[pageIdx % variants.length];
  const inner = demoBlock.slice(0, demoBlock.indexOf("\n    },\n    bodySections:"));
  const enriched = injectDemoFields(inner, cfg, variantFallback);
  return `${enriched}\n    },\n    bodySections:`;
});

// Soft SaaS phrase replacements
const replacements = [
  [/source de vérité/gi, "couverture unique bureau ↔ terrain"],
  [/centralise l'opérationnel/gi, "structure vacations, preuves et réalisé"],
  [/pilotage/gi, "suivi d’exploitation"],
  [/en temps réel/gi, "pendant la vacation"],
  [/digitaliser/gi, "structurer"],
  [/solution SaaS/gi, "outil gardiennage"],
  [/optimiser vos process/gi, "tenir vos postes et vos preuves"],
  [/visibilité/gi, "couverture lisible"],
];
for (const [re, to] of replacements) {
  src = src.replace(re, to);
}

// Expand ultra-short FAQ answers
src = src.replace(
  /a: "Oui — ([^"]{0,40})"\s*\}/g,
  'a: "Oui — $1. Détail et scénario terrain sur la page dédiée ; essai 15 j sans CB." }',
);
src = src.replace(
  /a: "Dès 29,99 € HT\/mois\."\s*\}/g,
  'a: "Dès 29,99 € HT/mois tout inclus. Essai 15 jours sans CB — voir aussi /tarifs." }',
);
src = src.replace(
  /a: "15 j sans CB\."\s*\}/g,
  'a: "Oui — 15 jours sans carte bancaire, sur vos vrais sites et vacations." }',
);

fs.writeFileSync(path, src);
console.log("enriched legacy", pageIdx, "demos · keys", keys.length);
