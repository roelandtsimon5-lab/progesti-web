/**
 * Remplace les FAQ q: "Essai ?" clonées par des questions spécifiques
 * (réponse déjà contextualisée dans la plupart des specs).
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

const variants = [
  (kw) => `Puis-je tester PROGESTI sur mon cas « ${kw} » ?`,
  (kw) => `L’essai couvre-t-il vraiment « ${kw} » ?`,
  (kw) => `Comment démarrer un essai orienté ${kw} ?`,
  (kw) => `Y a-t-il un essai sans engagement pour ${kw} ?`,
  (kw) => `Puis-je essayer avant d’engager mon équipe sur ${kw} ?`,
  (kw) => `L’essai suffit-il pour valider mon besoin ${kw} ?`,
];

let total = 0;

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes('q: "Essai ?"')) continue;

  // Découpe grossière par objets id: pour contextualiser
  const chunks = src.split(/(?=^\s{2}id:\s*")/m);
  let changed = 0;
  const rebuilt = chunks.map((chunk, idx) => {
    if (!chunk.includes('q: "Essai ?"')) return chunk;

    const idMatch = chunk.match(/id:\s*"([^"]+)"/);
    const kwMatch = chunk.match(/primaryKw:\s*"([^"]+)"/);
    const id = idMatch?.[1] ?? `page-${idx}`;
    const kw = (kwMatch?.[1] ?? id).replace(/\s+/g, " ").trim();
    const shortKw =
      kw.length > 48 ? `${kw.slice(0, 45).trim()}…` : kw;

    let local = 0;
    const next = chunk.replace(/q:\s*"Essai \?"/g, () => {
      const q = variants[local % variants.length](shortKw);
      local += 1;
      changed += 1;
      return `q: ${JSON.stringify(q)}`;
    });
    return next;
  });

  if (changed > 0) {
    fs.writeFileSync(file, rebuilt.join(""), "utf8");
    total += changed;
    console.log(`${path.relative(process.cwd(), file)}: ${changed}`);
  }
}

console.log(`Total FAQ Essai réécrites: ${total}`);
