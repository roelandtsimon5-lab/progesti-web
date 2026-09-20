/**
 * Fix helpers + inject variants (CRLF-safe)
 * node scripts/fix-ev-variants2.mjs
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

const HELPER = `const d = (
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

for (const file of ["specs-part1.ts", "specs-part2.ts", "specs-part3.ts", "specs-part4.ts"]) {
  const p = path.join(evDir, file);
  let src = fs.readFileSync(p, "utf8");

  src = src.replace(/const d = \([\s\S]*?\n\}\);(\r?\nconst s = )/, HELPER + "$1");

  let n = 0;
  for (const [id, variant] of Object.entries(VARIANTS)) {
    const start = src.indexOf(`id: "${id}"`);
    if (start < 0) continue;
    const demoStart = src.indexOf("demo: d(", start);
    if (demoStart < 0) continue;
    const slice = src.slice(demoStart);
    const m = slice.match(/\r?\n    \),\r?\n    bodySections/);
    if (!m || m.index == null) {
      console.log("no end", id, file);
      continue;
    }
    const end = demoStart + m.index;
    const block = src.slice(demoStart, end);
    if (block.includes(`"${variant}"`)) continue;
    src = src.slice(0, end) + `,\n      "${variant}"` + src.slice(end);
    n++;
  }

  fs.writeFileSync(p, src, "utf8");
  console.log(file, "variants injected:", n);
}
