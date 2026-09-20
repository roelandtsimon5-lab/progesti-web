/**
 * Bake EV quality packs INTO specs-part*.ts (body/faq/sub/empathy/proof).
 * Source de vérité unique — plus de specs faibles sous l’overlay.
 * Usage: node scripts/bake-ev-quality-into-specs.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const scriptsDir = path.join(root, "scripts");
const evDir = path.join(root, "src", "lib", "marketing", "ev");

async function load(rel) {
  return import(pathToFileURL(path.join(scriptsDir, rel)).href + "?t=" + Date.now());
}

const { PACK: p1 } = await load("_ev-pack-part1.mjs");
const { PACK_PART2: p2 } = await load("_ev-pack-part2.mjs");
const { PACK_PART3: p3 } = await load("_ev-pack-part3.mjs");
const ALL = { ...p1, ...p2, ...p3 };

function fmtBody(sections) {
  return `[
${sections
  .map((sec) => {
    let s = `      {
        h2: ${JSON.stringify(sec.h2)},
        body: ${JSON.stringify(sec.body)},`;
    if (sec.bullets?.length) {
      s += `
        bullets: [
${sec.bullets.map((b) => `          ${JSON.stringify(b)},`).join("\n")}
        ],`;
    }
    if (sec.h3?.length) {
      s += `
        h3: [
${sec.h3
  .map(
    (h) => `          {
            title: ${JSON.stringify(h.title)},
            body: ${JSON.stringify(h.body)},
          },`,
  )
  .join("\n")}
        ],`;
    }
    s += `
      }`;
    return s;
  })
  .join(",\n")}
    ]`;
}

function fmtFaq(faq) {
  return `[
${faq
  .map(
    (f) => `      {
        q: ${JSON.stringify(f.q)},
        a: ${JSON.stringify(f.a)},
      },`,
  )
  .join("\n")}
    ]`;
}

function replaceArrayField(src, id, fieldName, literal) {
  const idToken = `id: "${id}"`;
  const idIdx = src.indexOf(idToken);
  if (idIdx < 0) return src;
  const nextId = src.slice(idIdx + idToken.length).search(/\n\s+id: "EV-/);
  const endIdx = nextId < 0 ? src.length : idIdx + idToken.length + nextId;
  const slice = src.slice(idIdx, endIdx);
  const fieldToken = `${fieldName}:`;
  const fIdx = slice.indexOf(fieldToken);
  if (fIdx < 0) return src;
  const absF = idIdx + fIdx;
  const after = src.slice(absF + fieldToken.length);
  const b = after.search(/\[/);
  if (b < 0) return src;
  const start = absF + fieldToken.length + b;
  let depth = 0;
  let i = start;
  for (; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }
  return src.slice(0, start) + literal + src.slice(i);
}

function replaceStringField(src, id, fieldName, value) {
  const idToken = `id: "${id}"`;
  const idIdx = src.indexOf(idToken);
  if (idIdx < 0) return src;
  const nextId = src.slice(idIdx + idToken.length).search(/\n\s+id: "EV-/);
  const endIdx = nextId < 0 ? src.length : idIdx + idToken.length + nextId;
  const before = src.slice(0, idIdx);
  let block = src.slice(idIdx, endIdx);
  const afterBlock = src.slice(endIdx);
  const re = new RegExp(`${fieldName}:\\s*\`[\\s\\S]*?\`|${fieldName}:\\s*"[^"]*"`);
  if (!re.test(block)) return src;
  block = block.replace(re, `${fieldName}: ${JSON.stringify(value)}`);
  return before + block + afterBlock;
}

const files = ["specs-part1.ts", "specs-part2.ts", "specs-part3.ts", "specs-part4.ts", "specs-part5.ts"];
let total = 0;

for (const file of files) {
  const fp = path.join(evDir, file);
  let src = fs.readFileSync(fp, "utf8");
  let n = 0;
  for (const [id, pack] of Object.entries(ALL)) {
    if (!src.includes(`id: "${id}"`)) continue;
    if (pack.bodySections) src = replaceArrayField(src, id, "bodySections", fmtBody(pack.bodySections));
    if (pack.faq) src = replaceArrayField(src, id, "faq", fmtFaq(pack.faq));
    if (pack.sub) src = replaceStringField(src, id, "sub", pack.sub);
    if (pack.empathyH2) src = replaceStringField(src, id, "empathyH2", pack.empathyH2);
    if (pack.empathyBody) src = replaceStringField(src, id, "empathyBody", pack.empathyBody);
    if (pack.seoTitle) src = replaceStringField(src, id, "seoTitle", pack.seoTitle);
    if (pack.seoDesc) src = replaceStringField(src, id, "seoDesc", pack.seoDesc);
    if (pack.proofH2) src = replaceStringField(src, id, "proofH2", pack.proofH2);
    if (pack.proofQuote) src = replaceStringField(src, id, "proofQuote", pack.proofQuote);
    n++;
    total++;
  }
  fs.writeFileSync(fp, src);
  console.log(`${file}: ${n} pages baked`);
}

console.log(`Total baked: ${total}`);
