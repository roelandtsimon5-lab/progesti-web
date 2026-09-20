/**
 * Génère quality-v3.ts + specs-part6 (EV-37..39) + merge build/index + docs.
 * Usage: node scripts/ev-quality-max.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const evDir = path.join(root, "src", "lib", "marketing", "ev");
const scriptsDir = path.join(root, "scripts");

function load(rel) {
  return import(pathToFileURL(path.join(scriptsDir, rel)).href + "?t=" + Date.now());
}

function serStr(s) {
  return JSON.stringify(s);
}

function serBody(sections) {
  return sections
    .map((sec) => {
      let out = `    {\n      h2: ${serStr(sec.h2)},\n      body: ${serStr(sec.body)},`;
      if (sec.bullets?.length) {
        out += `\n      bullets: ${JSON.stringify(sec.bullets)},`;
      }
      if (sec.h3?.length) {
        out += `\n      h3: [\n${sec.h3
          .map((h) => `        { title: ${serStr(h.title)}, body: ${serStr(h.body)} }`)
          .join(",\n")},\n      ],`;
      }
      out += `\n    }`;
      return out;
    })
    .join(",\n");
}

function serFaq(faq) {
  return faq.map((f) => `    { q: ${serStr(f.q)}, a: ${serStr(f.a)} }`).join(",\n");
}

function serOverlay(id, p) {
  const base = [`  ${serStr(id)}: {`];
  for (const k of [
    "seoTitle",
    "seoDesc",
    "sub",
    "empathyH2",
    "empathyBody",
    "proofH2",
    "proofQuote",
  ]) {
    if (p[k]) base.push(`    ${k}: ${serStr(p[k])},`);
  }
  if (p.proofItems) base.push(`    proofItems: ${JSON.stringify(p.proofItems)},`);
  if (p.bodySections) {
    base.push(`    bodySections: [`);
    base.push(serBody(p.bodySections));
    base.push(`    ],`);
  }
  if (p.faq) {
    base.push(`    faq: [`);
    base.push(serFaq(p.faq));
    base.push(`    ],`);
  }
  if (p.demoExtra) {
    const e = p.demoExtra;
    base.push(`    demoExtra: {`);
    if (e.uiToolbar) base.push(`      uiToolbar: ${serStr(e.uiToolbar)},`);
    if (e.uiAlert) base.push(`      uiAlert: ${serStr(e.uiAlert)},`);
    if (e.uiHint) base.push(`      uiHint: ${serStr(e.uiHint)},`);
    if (e.uiColumns) base.push(`      uiColumns: ${JSON.stringify(e.uiColumns)},`);
    if (e.uiSplitLabels) base.push(`      uiSplitLabels: ${JSON.stringify(e.uiSplitLabels)},`);
    if (e.uiRows) {
      base.push(`      uiRows: [`);
      for (const r of e.uiRows) {
        base.push(
          `        { left: ${serStr(r.left)}, right: ${serStr(r.right)}${
            r.status ? `, status: ${serStr(r.status)}` : ""
          }${r.meta ? `, meta: ${serStr(r.meta)}` : ""}${
            r.tone ? `, tone: ${serStr(r.tone)}` : ""
          } },`,
        );
      }
      base.push(`      ],`);
    }
    base.push(`    },`);
  }
  base.push(`  }`);
  return base.join("\n");
}

const { PACK: pack1 } = await load("_ev-pack-part1.mjs");
const { PACK_PART2: pack2 } = await load("_ev-pack-part2.mjs");
const { PACK_PART3: pack3 } = await load("_ev-pack-part3.mjs");
const ALL = { ...pack1, ...pack2, ...pack3 };

const overlays = {};
const newPages = [];
for (const [id, p] of Object.entries(ALL)) {
  if (p.isNewPage) newPages.push([id, p]);
  else overlays[id] = p;
}

let ts = `/* eslint-disable */
/**
 * Quality MAX v3 — overlays narratifs EV (body/FAQ/SEO/demo enrichments).
 * Généré par scripts/ev-quality-max.mjs — ne pas y mettre de sécu.
 */
import type { IndustryBodySection, IndustryDemo, IndustryDemoRow } from "@/lib/industry/types";
import type { EvPageSpec } from "./build";

export type EvQualityOverlay = {
  seoTitle?: string;
  seoDesc?: string;
  sub?: string;
  empathyH2?: string;
  empathyBody?: string;
  proofH2?: string;
  proofQuote?: string;
  proofItems?: EvPageSpec["proofItems"];
  bodySections?: readonly IndustryBodySection[];
  faq?: EvPageSpec["faq"];
  demoExtra?: Partial<IndustryDemo> & { uiRows?: readonly IndustryDemoRow[] };
};

export const evQualityOverlays: Record<string, EvQualityOverlay> = {
`;

for (const [id, p] of Object.entries(overlays)) {
  ts += serOverlay(id, p) + ",\n";
}
ts += `};

export function applyEvQualityOverlay(spec: EvPageSpec): EvPageSpec {
  const o = evQualityOverlays[spec.id];
  if (!o) return spec;
  const demo = o.demoExtra
    ? {
        ...spec.demo,
        ...o.demoExtra,
        uiRows: o.demoExtra.uiRows ?? spec.demo.uiRows,
      }
    : spec.demo;
  return {
    ...spec,
    seoTitle: o.seoTitle ?? spec.seoTitle,
    seoDesc: o.seoDesc ?? spec.seoDesc,
    sub: o.sub ?? spec.sub,
    empathyH2: o.empathyH2 ?? spec.empathyH2,
    empathyBody: o.empathyBody ?? spec.empathyBody,
    proofH2: o.proofH2 ?? spec.proofH2,
    proofQuote: o.proofQuote ?? spec.proofQuote,
    proofItems: o.proofItems ?? spec.proofItems,
    bodySections: o.bodySections ?? spec.bodySections,
    faq: o.faq ?? spec.faq,
    demo,
  };
}
`;

fs.writeFileSync(path.join(evDir, "quality-v3.ts"), ts, "utf8");
console.log("quality-v3.ts overlays:", Object.keys(overlays).length);

let part6 = `/* eslint-disable */
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
  extra?: Pick<EvPageSpec["demo"], "uiToolbar" | "uiAlert" | "uiHint" | "uiSplitLabels" | "uiColumns">,
): EvPageSpec["demo"] => ({
  eyebrow, h2, lead, scenario, steps, uiLabel, uiRows, takeaway,
  primaryCtaLabel, secondaryCtaLabel, variant, ...extra,
});

const s = (label: string, detail: string) => ({ label, detail });

/** EV-37 → EV-39 — gaps SEO */
export const evSpecsPart6: EvPageSpec[] = [
`;

for (const [id, p] of newPages) {
  const demo = p.demo;
  const extra = {
    uiToolbar: demo.uiToolbar,
    uiAlert: demo.uiAlert,
    uiHint: demo.uiHint,
    ...(demo.uiSplitLabels ? { uiSplitLabels: demo.uiSplitLabels } : {}),
  };
  part6 += `  {
    id: ${serStr(id)},
    key: ${serStr(p.key)},
    path: ${serStr(p.path)},
    type: ${serStr(p.type)},
    primaryKw: ${serStr(p.primaryKw)},
    seoTitle: ${serStr(p.seoTitle)},
    seoDesc: ${serStr(p.seoDesc)},
    crumbLabel: ${serStr(p.crumbLabel)},
    h1Lead: ${serStr(p.h1Lead)},
    h1: ${serStr(p.h1)},
    sub: ${serStr(p.sub)},
    claimBefore: ${serStr(p.claimBefore)},
    claimHighlight: ${serStr(p.claimHighlight)},
    claimSub: ${serStr(p.claimSub)},
    productStrip: ${serStr(p.productStrip)},
    empathyH2: ${serStr(p.empathyH2)},
    empathyBody: ${serStr(p.empathyBody)},
    showcaseTitle: ${serStr(p.showcaseTitle)},
    showcaseSub: ${serStr(p.showcaseSub)},
    showcaseBadgeLeft: ${JSON.stringify(p.showcaseBadgeLeft)},
    showcaseBadgeRight: ${serStr(p.showcaseBadgeRight)},
    proofH2: ${serStr(p.proofH2)},
    proofQuote: ${serStr(p.proofQuote)},
    proofItems: ${JSON.stringify(p.proofItems)},
    vsTitle: ${serStr(p.vsTitle)},
    demo: d(
      ${serStr(demo.eyebrow)},
      ${serStr(demo.h2)},
      ${serStr(demo.lead)},
      ${serStr(demo.scenario)},
      [
${demo.steps.map((st) => `        s(${serStr(st.label)}, ${serStr(st.detail)})`).join(",\n")},
      ],
      ${serStr(demo.uiLabel)},
      [
${demo.uiRows
  .map((r) => {
    let row = `        { left: ${serStr(r.left)}, right: ${serStr(r.right)}`;
    if (r.status) row += `, status: ${serStr(r.status)}`;
    if (r.meta) row += `, meta: ${serStr(r.meta)}`;
    if (r.tone) row += `, tone: ${serStr(r.tone)}`;
    return row + " }";
  })
  .join(",\n")},
      ],
      ${serStr(demo.takeaway)},
      ${serStr(demo.primaryCtaLabel)},
      ${serStr(demo.secondaryCtaLabel)},
      ${serStr(demo.variant)},
      ${JSON.stringify(extra)},
    ),
    bodySections: [
${serBody(p.bodySections)},
    ],
    faq: [
${serFaq(p.faq)},
    ],
    gridItems: [
${p.gridItems.map((g) => `      link(${serStr(g.title)}, ${serStr(g.text)}, ${serStr(g.href)})`).join(",\n")},
    ],
    ctaPrimaryLabel: "Essai 15 jours — mes sites",
    ctaSecondaryLabel: "Parler à un humain",
  },
`;
}
part6 += `];\n`;
fs.writeFileSync(path.join(evDir, "specs-part6.ts"), part6, "utf8");
console.log("specs-part6.ts pages:", newPages.length);

const buildPath = path.join(evDir, "build.ts");
let build = fs.readFileSync(buildPath, "utf8");
if (!build.includes("applyEvQualityOverlay")) {
  build = build.replace(
    `import type { MarketingPageEntry } from "../espace-vert-pages-types";`,
    `import type { MarketingPageEntry } from "../espace-vert-pages-types";\nimport { applyEvQualityOverlay } from "./quality-v3";`,
  );
  build = build.replace(
    `export function buildEvEntry(spec: EvPageSpec): MarketingPageEntry {\n  const isHub = spec.key === "hub";`,
    `export function buildEvEntry(raw: EvPageSpec): MarketingPageEntry {\n  const spec = applyEvQualityOverlay(raw);\n  const isHub = spec.key === "hub";`,
  );
  fs.writeFileSync(buildPath, build, "utf8");
  console.log("patched build.ts");
}

const indexPath = path.join(evDir, "index.ts");
let index = fs.readFileSync(indexPath, "utf8");
if (!index.includes("specs-part6")) {
  index = index.replace(
    `import { evSpecsPart5 } from "./specs-part5";`,
    `import { evSpecsPart5 } from "./specs-part5";\nimport { evSpecsPart6 } from "./specs-part6";`,
  );
  index = index.replace(
    `  ...evSpecsPart5,\n] as const;`,
    `  ...evSpecsPart5,\n  ...evSpecsPart6,\n] as const;`,
  );
  fs.writeFileSync(indexPath, index, "utf8");
  console.log("patched index.ts");
}

const docPath = path.join(root, "docs", "pages-a-valider.md");
let doc = fs.readFileSync(docPath, "utf8");
doc = doc.replace("## ESPACE VERT (36)", "## ESPACE VERT (39)");
doc = doc.replace("Hub · 36 angles", "Hub · 39 angles");
if (!doc.includes("zero-phyto-biodiversite")) {
  doc = doc.replace(
    "| EV-36 | `/espace-vert/ecoles-etablissements` | EV-36 | à valider | **Nouveau** scolaire |\n",
    `| EV-36 | \`/espace-vert/ecoles-etablissements\` | EV-36 | à valider | **Nouveau** scolaire |
| EV-37 | \`/espace-vert/zero-phyto-biodiversite\` | EV-37 | à valider | **Quality v3** zéro phyto |
| EV-38 | \`/espace-vert/marches-publics\` | EV-38 | à valider | **Quality v3** marchés publics |
| EV-39 | \`/espace-vert/ouverture-saison\` | EV-39 | à valider | **Quality v3** ouverture saison |
`,
  );
}
if (!doc.includes("quality-v3.ts")) {
  doc = doc.replace(
    "| Générateur enrichissement EV | `scripts/enrich-ev-v2.mjs` |",
    "| Générateur enrichissement EV | `scripts/enrich-ev-v2.mjs` |\n| **Quality MAX v3 EV** | `src/lib/marketing/ev/quality-v3.ts` + `scripts/ev-quality-max.mjs` |",
  );
}
doc = doc.replace(
  "## ESPACE VERT (39) — prompts v2 — toutes à valider",
  "## ESPACE VERT (39) — prompts v2 + **Quality MAX v3** — toutes à valider\n\n> Body/FAQ/SEO/démos réécrits (cas clients narratifs). Démo UI enrichie (toolbar, alertes, meta, tones). +3 gaps SEO.",
);
fs.writeFileSync(docPath, doc, "utf8");
console.log("updated pages-a-valider.md");

const p1 = path.join(evDir, "specs-part1.ts");
let s1 = fs.readFileSync(p1, "utf8");
if (!s1.includes("zero-phyto-biodiversite")) {
  s1 = s1.replace(
    `link("Plantations & massifs", "Pose et reprises", "/espace-vert/plantations-massifs"),
    ],
    ctaPrimaryLabel: "Essai gratuit",`,
    `link("Plantations & massifs", "Pose et reprises", "/espace-vert/plantations-massifs"),
      link("Zéro phyto", "Méthodes & preuves", "/espace-vert/zero-phyto-biodiversite"),
      link("Marchés publics", "Bordereau & conformité", "/espace-vert/marches-publics"),
      link("Ouverture de saison", "Check-list février", "/espace-vert/ouverture-saison"),
    ],
    ctaPrimaryLabel: "Essai gratuit",`,
  );
  fs.writeFileSync(p1, s1, "utf8");
  console.log("hub grid updated");
}

console.log("DONE overlays=%s new=%s", Object.keys(overlays).length, newPages.length);
