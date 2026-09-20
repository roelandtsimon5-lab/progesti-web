import fs from "node:fs";
import path from "node:path";

const ROOT = "src/lib/marketing";
const map = {
  "Tarif ?": (kw) => `Quel tarif pour « ${kw} » ?`,
  "Photos ?": (kw) => `Peut-on joindre des photos pour « ${kw} » ?`,
  "Intérim ?": (kw) => `Peut-on gérer l’intérim pour « ${kw} » ?`,
  "Impayés ?": (kw) => `Comment suivre les impayés liés à « ${kw} » ?`,
  "Cartographie ?": (kw) => `Y a-t-il une cartographie pour « ${kw} » ?`,
  "Démarrer ?": (kw) => `Comment démarrer sur « ${kw} » ?`,
  "WhatsApp ?": (kw) => `Faut-il encore WhatsApp avec « ${kw} » ?`,
  "Multi-contrats ?": (kw) => `Gère-t-on le multi-contrats pour « ${kw} » ?`,
  "Lien pointage ?": (kw) => `Quel lien avec le pointage pour « ${kw} » ?`,
};

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".ts")) out.push(p);
  }
  return out;
}

let total = 0;
for (const file of walk(ROOT)) {
  let src = fs.readFileSync(file, "utf8");
  if (![...Object.keys(map)].some((k) => src.includes(`q: "${k}"`))) continue;
  const chunks = src.split(/(?=^\s{2}id:\s*"|"EV-\d{2}":\s*\{)/m);
  let changed = 0;
  const rebuilt = chunks.map((chunk) => {
    const kwMatch = chunk.match(/primaryKw:\s*"([^"]+)"/);
    const idMatch = chunk.match(/(?:id:\s*"|")((?:EV|SEC)-\d+)(?:"|:)/);
    const seoMatch = chunk.match(/seoTitle:\s*"([^"]+)"/);
    const kw = (kwMatch?.[1] ?? seoMatch?.[1] ?? idMatch?.[1] ?? "ce sujet")
      .replace(/\s+/g, " ")
      .trim();
    const shortKw = kw.length > 40 ? `${kw.slice(0, 37).trim()}…` : kw;
    let next = chunk;
    for (const [oldQ, fn] of Object.entries(map)) {
      const needle = `q: "${oldQ}"`;
      if (!next.includes(needle)) continue;
      const count = next.split(needle).length - 1;
      next = next.split(needle).join(`q: ${JSON.stringify(fn(shortKw))}`);
      changed += count;
    }
    return next;
  });
  if (changed) {
    fs.writeFileSync(file, rebuilt.join(""), "utf8");
    total += changed;
    console.log(file, changed);
  }
}
console.log("short FAQ fix:", total);
