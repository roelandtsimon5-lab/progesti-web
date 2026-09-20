/**
 * Retire « — PROGESTI » / « | PROGESTI » des titles SEO marketing
 * (le layout ajoute déjà `| PROGESTI` via le template Next).
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/lib/marketing");
const files = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (name.endsWith(".ts")) files.push(p);
  }
}

walk(ROOT);

let total = 0;
const re =
  /(title:\s*")([^"]*?)(\s*[|—–-]\s*PROGESTI)(")/gi;

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  let n = 0;
  const next = src.replace(re, (_m, a, mid, _brand, q) => {
    n += 1;
    return `${a}${mid.trim()}${q}`;
  });
  if (n > 0) {
    fs.writeFileSync(file, next, "utf8");
    total += n;
    console.log(path.relative(process.cwd(), file), n);
  }
}
console.log("Titles nettoyés:", total);
