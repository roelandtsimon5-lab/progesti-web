/**
 * Fix: upgrade d() helpers + inject demo variants for EV-01..32
 * node scripts/fix-ev-variants.mjs
 */
import fs from "node:fs";
import path from "node:path";

const evDir = path.join(process.cwd(), "src", "lib", "marketing", "ev");

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
};

const HELPER_FULL = `const d = (
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
});`;

const HELPER_COMPACT = `const d = (
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
});`;

function replaceHelper(src, compact) {
  // Match from `const d = (` until the closing `});` of the helper (before `const s =`)
  const re = /const d = \([\s\S]*?\n\}\);(\r?\nconst s = )/;
  const helper = compact ? HELPER_COMPACT : HELPER_FULL;
  if (!re.test(src)) {
    console.warn("helper not found");
    return src;
  }
  return src.replace(re, helper + "$1");
}

function injectVariants(src) {
  for (const [id, variant] of Object.entries(VARIANTS)) {
    const idToken = `id: "${id}"`;
    const start = src.indexOf(idToken);
    if (start < 0) continue;
    const demoStart = src.indexOf("demo: d(", start);
    if (demoStart < 0) continue;
    // end of demo call before bodySections
    const end = src.indexOf("\n    ),\n    bodySections", demoStart);
    if (end < 0) {
      console.warn("demo end not found", id);
      continue;
    }
    const block = src.slice(demoStart, end);
    if (block.includes(`"${variant}"`)) continue;
    // Insert before the closing of d(
    src = src.slice(0, end) + `,\n      "${variant}"` + src.slice(end);
  }
  return src;
}

for (const file of ["specs-part1.ts", "specs-part2.ts", "specs-part3.ts", "specs-part4.ts"]) {
  const p = path.join(evDir, file);
  let src = fs.readFileSync(p, "utf8");
  const compact = file !== "specs-part1.ts";
  src = replaceHelper(src, compact);
  src = injectVariants(src);
  fs.writeFileSync(p, src, "utf8");
  console.log("fixed", file);
}
console.log("ok");
