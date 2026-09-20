/**
 * Remplace les FAQ q trop courtes (1 mot) type « Pilote ? » par des questions
 * contextualisées à partir de primaryKw / id.
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

const map = {
  "Pilote ?": (kw) => `Par quel pilote démarrer pour « ${kw} » ?`,
  "Support ?": (kw) => `Y a-t-il un support FR pour « ${kw} » ?`,
  "Pilote nuit ?": (kw) => `Puis-je piloter la nuit sur « ${kw} » ?`,
  "Pilote PC ?": (kw) => `Comment piloter le PC sécurité pour « ${kw} » ?`,
  "Pilote conseillé ?": (kw) => `Quel pilote conseillez-vous pour « ${kw} » ?`,
  "Multi-résidences ?": (kw) => `Ça marche sur un portefeuille multi-résidences (« ${kw} ») ?`,
  "Cas SSIAP ?": (kw) => `Comment gérer un cas SSIAP avec « ${kw} » ?`,
  "Par où piloter ?": (kw) => `Par où piloter concrètement « ${kw} » ?`,
  "Par où commencer ?": (kw) => `Par où commencer pour « ${kw} » ?`,
  "Tarif et essai ?": (kw) => `Quels tarif et essai pour « ${kw} » ?`,
  "Tarif identique ?": (kw) => `Le tarif reste-t-il identique pour « ${kw} » ?`,
  "Tarif accessible ?": (kw) => `Le tarif est-il accessible pour « ${kw} » ?`,
  "Et après le guide ?": (kw) => `Que faire après le guide « ${kw} » ?`,
  "Lien facturation ?": (kw) => `Quel lien avec la facturation pour « ${kw} » ?`,
  "Lien sûreté sites ?": (kw) => `Quel lien avec la sûreté des sites pour « ${kw} » ?`,
  "Lien page agents ?": (kw) => `Quel lien avec la page agents pour « ${kw} » ?`,
  "Lien multi-sites ?": (kw) => `Quel lien avec le multi-sites pour « ${kw} » ?`,
  "Escalade incident ?": (kw) => `Comment gérer l’escalade d’incident pour « ${kw} » ?`,
  "Astreinte et PC ?": (kw) => `Comment lier astreinte et PC pour « ${kw} » ?`,
};

let total = 0;

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const chunks = src.split(/(?=^\s{2}id:\s*")/m);
  let changed = 0;
  const rebuilt = chunks.map((chunk) => {
    const kwMatch = chunk.match(/primaryKw:\s*"([^"]+)"/);
    const idMatch = chunk.match(/id:\s*"([^"]+)"/);
    const kw = (kwMatch?.[1] ?? idMatch?.[1] ?? "ce cas").replace(/\s+/g, " ").trim();
    const shortKw = kw.length > 42 ? `${kw.slice(0, 39).trim()}…` : kw;
    let next = chunk;
    for (const [oldQ, fn] of Object.entries(map)) {
      const needle = `q: "${oldQ}"`;
      if (!next.includes(needle)) continue;
      const replacement = `q: ${JSON.stringify(fn(shortKw))}`;
      const before = next;
      next = next.split(needle).join(replacement);
      if (next !== before) {
        const count = (before.split(needle).length - 1);
        changed += count;
      }
    }
    return next;
  });
  if (changed > 0) {
    fs.writeFileSync(file, rebuilt.join(""), "utf8");
    total += changed;
    console.log(path.relative(process.cwd(), file), changed);
  }
}
console.log("FAQ courtes réécrites:", total);
