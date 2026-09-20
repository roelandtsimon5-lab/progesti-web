import fs from "node:fs";

const src = fs.readFileSync("src/lib/marketing/sec/specs.ts", "utf8");
const marker = 'id: "SEC-10"';
const start = src.indexOf(marker);
if (start < 0) {
  console.error("SEC-10 not found");
  process.exit(1);
}
let i = start;
while (i > 0 && src[i] !== "{") i--;
const chunk = src.slice(i);
const end = chunk.lastIndexOf("];");
const body = chunk.slice(0, end).trim().replace(/,\s*$/, "");

const out = `/* eslint-disable */
/** Legacy SEC-10 → SEC-32 — base v2 (enrichissement démos/copy appliqué ensuite) */
import type { SecPageSpec } from "./build";
import { link } from "./build";

export const secSpecsLegacyRest: SecPageSpec[] = [
${body}
];
`;

fs.writeFileSync("src/lib/marketing/sec/specs-legacy-rest.ts", out);
console.log("wrote specs-legacy-rest.ts", out.length, "bytes");
