/**
 * Phase A+B — verticale Sécurité v2
 * node scripts/generate-securite-v2.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildSecPages, page } from "./securite-v2-catalog.mjs";
import { writeRestConfigs } from "./_write-rest-configs.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** @typedef {ReturnType<typeof page>} SecPageDef */

function allPages(restConfigs) {
  const base = buildSecPages();
  const rest = restConfigs.map((c) => page(c));
  return [...base, ...rest].sort((a, b) => a.id.localeCompare(b.id));
}

function mdSection(title, body) {
  return `### ${title}\n\n${body.trim()}\n`;
}

function renderPrompt(p) {
  const pains = p.persona.pains.map((x) => `- ${x}`).join("\n");
  const jargon = p.persona.jargon.map((x) => `- ${x}`).join("\n");
  const objections = p.persona.objections.map((x) => `- ${x}`).join("\n");
  const outline = p.outline.map((x) => `- ${x}`).join("\n");
  const demoSteps = p.demo.steps.map((s) => `- **${s.label}** — ${s.detail}`).join("\n");
  const uiRows = p.demo.uiRows.map((r) => `- ${r.left} → ${r.right}${r.status ? ` (${r.status})` : ""}`).join("\n");
  const proof = p.proofItems.map((i) => `- **${i.title}** — ${i.text}`).join("\n");
  const faq = p.faq.map((f) => `- **${f.q}** ${f.a}`).join("\n");
  const maillage = p.maillage.map((u) => `- ${u}`).join("\n");
  const checklist = p.checklist.map((x) => `- [ ] ${x}`).join("\n");
  const bodyOutline = p.bodySections
    .map((b) => {
      let s = `- **${b.h2}** — ${b.body}`;
      if (b.bullets?.length) s += `\n${b.bullets.map((x) => `  - ${x}`).join("\n")}`;
      if (b.h3?.length) s += `\n${b.h3.map((h) => `  - *${h.title}* : ${h.body}`).join("\n")}`;
      return s;
    })
    .join("\n");

  return `# ${p.id} — ${p.path}

> Prompt ultra-détaillé · verticale **Sécurité / gardiennage** · PROGESTI  
> Prix public : **dès 29,99 € HT/mois** · Essai **15 jours sans CB**

| Champ | Valeur |
|------|--------|
| **URL** | \`${p.path}\` |
| **Type** | ${p.type} |
| **Mot-clé principal** | ${p.primaryKw} |
| **H1** | ${p.h1Lead} — ${p.h1} |
| **Meta title** | ${p.metaTitle || p.seoTitle} |
| **Meta description** | ${p.metaDesc || p.seoDesc} |
| **Persona** | ${p.persona?.role ?? ""} |
| **Scénario terrain** | ${p.scenario} |
| **Intent + anti-cannibalisation** | ${p.seoIntent} · ${p.antiCanni} |
| **Démo produit (unique)** | ${p.demo?.h2 ?? ""} — ${p.demo?.uiLabel ?? ""} |
| **Specs source** | \`src/lib/marketing/sec/specs.ts\` (\`${p.id}\`) |

${mdSection("Persona", `**${p.persona.role}**`)}
${mdSection("Pains", pains)}
${mdSection("Jargon métier", jargon)}
${mdSection("Objections", objections)}
${mdSection("Scénario terrain", p.scenario)}
${mdSection("Intent SEO", p.seoIntent)}
${mdSection("Anti-cannibalisation", p.antiCanni)}
${mdSection("H1", `${p.h1Lead} — ${p.h1}`)}
${mdSection("Meta", `**Title:** ${p.metaTitle || p.seoTitle}\n\n**Description:** ${p.metaDesc || p.seoDesc}`)}
${mdSection("Outline H2/H3", outline + (bodyOutline ? `\n\n**Corps long (spec):**\n${bodyOutline}` : ""))}
${mdSection(
  "Démo produit (unique)",
  `**${p.demo.eyebrow}**\n\n## ${p.demo.h2}\n\n${p.demo.lead}\n\n*Scénario:* ${p.demo.scenario}\n\n**Étapes:**\n${demoSteps}\n\n**UI (${p.demo.uiLabel}):**\n${uiRows}\n\n**Takeaway:** ${p.demo.takeaway}`
)}
${mdSection("Preuves / process", `**${p.proofH2}**\n\n> ${p.proofQuote}\n\n${proof}`)}
${mdSection("Ton", p.tone)}
${mdSection("CTAs", p.ctas.map((c) => `- ${c}`).join("\n"))}
${mdSection("Schema + maillage", `Schema: ${p.schema.join(", ")}\n\nLiens:\n${maillage}`)}
${mdSection("Checklist anti-générique", checklist)}

---
`;
}

function writePromptsMd(pages) {
  const intro = `# Super prompts v2 — Sécurité / Gardiennage (${pages.length})

> **Owner exclusif :** verticale **SÉCURITÉ / GARDIENNAGE** (ne pas toucher Espaces verts / propreté).
> **Fichier v1 (historique) :** \`docs/prompts-marketing-espace-vert-securite.md\`
> **Implémentation :** \`src/lib/marketing/sec/specs.ts\` + \`MarketingSecuriteDemo\` + \`MarketingBodySections\`
> **Validation :** \`docs/pages-a-valider.md\` · dashboard \`/dashboard-validation\`
> **Pas de commit** tant que Simon n'a pas demandé. **Pas de merge** avec EV.

## Règles v2 (anti-générique)

Chaque prompt DOIT contenir : (1) persona précis dirigeants / exploitation / facility / events, (2) pains + jargon + objections métier, (3) scénario terrain non interchangeable, (4) intent SEO + anti-cannibalisation, (5) H1 / meta / outline, (6) **démo produit unique** (walkthrough + mock UI), (7) preuves/process réalistes (pas fausse certif CNAPS), (8) ton terrain, (9) CTAs + schema + maillage \`/tarifs\` \`/essai-gratuit\`, (10) checklist.

**Charte :** navy #012939 · chrome #011B25 · lime #A8E300 · paper #FAFAFA · warm #F6F8F9 · line #E4E8EB · slate #5C6B73 · radius 2–3px.

**SEO technique :** \`pageMeta\` + \`SoftwareApplicationLd\` + \`FaqPageLd\` · canonical · maillage hub/pilier/sœurs · sitemap via \`listAllMarketingVerticalPaths()\`.

**Checklist qualité**
- [ ] H1 / meta title / meta desc uniques (pas de « … » tronqué)
- [ ] Persona identifiable en 10 s (gardiennage ≠ EV ≠ propreté)
- [ ] Scénario terrain non interchangeable
- [ ] Démo UI mock différente (\`MarketingSecuriteDemo\`)
- [ ] FAQ utiles (pas « Oui. »)
- [ ] Maillage 3–5 sœurs + tarifs/essai
- [ ] Claims ancrés : vacations, pointage, main courante, preuves, facture du réalisé

## Architecture URLs v2

\`\`\`
/logiciel-securite-gardiennage   ← pilier money (SEC-01)
/securite                        ← hub (SEC-02)
/securite/{slug}                 ← filles (SEC-03 … SEC-${String(pages.length).padStart(2, "0")})
\`\`\`

Extras v2 : vacation-non-pourvue · remplacement-urgence.

---

`;
  const body = pages.map(renderPrompt).join("\n");
  fs.writeFileSync(path.join(root, "docs/prompts-v2-securite.md"), intro + body, "utf8");
}

function tsStr(v, indent = 0) {
  const pad = "  ".repeat(indent);
  if (v === null || v === undefined) return "undefined";
  if (typeof v === "string") return JSON.stringify(v);
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return "[]";
    return `[\n${v.map((item) => `${pad}  ${tsStr(item, indent + 1)},`).join("\n")}\n${pad}]`;
  }
  const entries = Object.entries(v).filter(([, val]) => val !== undefined);
  return `{\n${entries
    .map(([k, val]) => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
      return `${pad}  ${key}: ${tsStr(val, indent + 1)},`;
    })
    .join("\n")}\n${pad}}`;
}

function emitGridItems(items) {
  return items.map((i) => `    link(${JSON.stringify(i.title)}, ${JSON.stringify(i.text)}, ${JSON.stringify(i.href)}),`).join("\n");
}

function writeSpecsTs(pages) {
  const blocks = pages.map((p) => {
    return `  {
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
    showcaseBadgeLeft: ${tsStr(p.showcaseBadgeLeft, 2)},
    showcaseBadgeRight: ${JSON.stringify(p.showcaseBadgeRight)},
    proofH2: ${JSON.stringify(p.proofH2)},
    proofQuote: ${JSON.stringify(p.proofQuote)},
    proofItems: ${tsStr(p.proofItems, 2)},
    vsTitle: ${JSON.stringify(p.vsTitle)},
    demo: ${tsStr(p.demo, 2)},
    bodySections: ${tsStr(p.bodySections, 2)},
    faq: ${tsStr(p.faq, 2)},
    gridItems: [
${emitGridItems(p.gridItems)}
    ],
    ctaPrimaryLabel: ${JSON.stringify(p.ctaPrimaryLabel)},
    ctaSecondaryLabel: ${JSON.stringify(p.ctaSecondaryLabel)},
    trustLeft: ${JSON.stringify(p.trustLeft)},
  }`;
  });

  const ts = `/* eslint-disable */
/** Généré — node scripts/generate-securite-v2.mjs */
import type { SecPageSpec } from "./build";
import { link } from "./build";

export const secSpecs: SecPageSpec[] = [
${blocks.join(",\n")}
];
`;
  fs.mkdirSync(path.join(root, "src/lib/marketing/sec"), { recursive: true });
  fs.writeFileSync(path.join(root, "src/lib/marketing/sec/specs.ts"), ts, "utf8");
}

function updatePagesAValider(pages) {
  const mdPath = path.join(root, "docs/pages-a-valider.md");
  let md = fs.readFileSync(mdPath, "utf8");

  if (!md.includes("prompts-v2-securite.md")) {
    md = md.replace(
      "| 50 super prompts | `docs/prompts-marketing-espace-vert-securite.md` |",
      "| 50 super prompts | `docs/prompts-marketing-espace-vert-securite.md` |\n| Prompts v2 Sécurité (30) | `docs/prompts-v2-securite.md` |"
    );
    md = md.replace(
      "| Configs Sécurité | `src/lib/marketing/securite-pages.ts` |",
      "| Configs Sécurité | `src/lib/marketing/securite-pages.ts` + `src/lib/marketing/sec/specs.ts` |"
    );
  }

  const notes = {
    "SEC-26": "Main courante",
    "SEC-27": "SSIAP orga postes (info, pas formation/juridique)",
    "SEC-28": "Sites sensibles — enjeux ops (pas défense)",
    "SEC-29": "BTP chantiers",
    "SEC-30": "PC sécurité exploitation (pas télésurveillance)",
    "SEC-31": "**Nouveau v2** · trou de vacation",
    "SEC-32": "**Nouveau v2** · remplacement urgence",
  };

  const rows = pages
    .map((p) => {
      const note =
        p.id === "SEC-01"
          ? "Pilier money · démo flux"
          : p.id === "SEC-02"
            ? "Hub"
            : p.id === "SEC-19"
              ? "Local"
              : p.id === "SEC-10"
                ? "≠ EV syndics"
                : p.id === "SEC-25"
                  ? "Infos/consignes (pas hardware)"
                  : notes[p.id] ?? "";
      return `| ${p.id} | \`${p.path}\` | ${p.id} | à valider | ${note} |`;
    })
    .join("\n");

  const secBlock = `## SÉCURITÉ (${pages.length}) — prompts v2 — toutes à valider

> Copy & specs v2 : \`docs/prompts-v2-securite.md\` · génération \`node scripts/generate-securite-v2.mjs\`  
> Démo UI : \`MarketingSecuriteDemo\` (dédié sécu)

| ID | URL | Prompt | Statut | Note |
|----|-----|--------|--------|------|
${rows}`;

  if (/## SÉCURITÉ \(\d+\)[\s\S]*?(?=## Priorité)/.test(md)) {
    md = md.replace(/## SÉCURITÉ \(\d+\)[\s\S]*?(?=## Priorité)/, secBlock + "\n\n");
  } else if (md.includes("## SÉCURITÉ")) {
    md = md.replace(/## SÉCURITÉ[\s\S]*$/, secBlock + "\n");
  } else {
    md += "\n\n" + secBlock + "\n";
  }
  fs.writeFileSync(mdPath, md, "utf8");
}

function main() {
  const restConfigs = writeRestConfigs();
  const pages = allPages(restConfigs);
  if (pages.length < 30) {
    console.error(`Expected ≥30 pages, got ${pages.length}`);
    process.exit(1);
  }
  writePromptsMd(pages);
  writeSpecsTs(pages);
  updatePagesAValider(pages);
  console.log(`OK — ${pages.length} pages → docs/prompts-v2-securite.md, src/lib/marketing/sec/specs.ts`);
}

main();
