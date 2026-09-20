/**
 * Remplace les « page-0 » erronés dans quality-v3.ts par le libellé de la clé EV-XX
 * (ou un mot-clé dérivé de seoTitle / contexte).
 */
import fs from "node:fs";

const file = "src/lib/marketing/ev/quality-v3.ts";
let src = fs.readFileSync(file, "utf8");

const labels = {
  "EV-01": "logiciel espaces verts PME",
  "EV-02": "hub espaces verts",
  "EV-03": "entretien espaces verts",
  "EV-04": "paysagisme / chantiers création",
  "EV-05": "planning tonte multi-sites",
  "EV-06": "élagage & grimpe",
  "EV-07": "désherbage multi-sites",
  "EV-08": "arrosage & irrigation",
  "EV-09": "espaces verts collectivités",
  "EV-10": "syndics & copropriétés EV",
  "EV-11": "sites privés entreprises",
  "EV-12": "planning équipes EV",
  "EV-13": "pointage terrain EV",
  "EV-14": "devis & facturation EV",
  "EV-15": "saison printemps EV",
  "EV-16": "saison automne-hiver EV",
  "EV-17": "multi-sites EV",
  "EV-18": "EV Toulouse / Occitanie",
  "EV-19": "remplacer Excel en EV",
  "EV-20": "FAQ espaces verts",
  "EV-21": "guide entretien EV",
  "EV-22": "preuves de passage EV",
  "EV-23": "TPE & indépendants EV",
  "EV-24": "grands parcs EV",
  "EV-25": "contrats annuels EV",
  "EV-26": "engins & matériel EV",
  "EV-27": "photos avant/après EV",
  "EV-28": "replanification météo EV",
  "EV-29": "aménageurs & promoteurs",
  "EV-30": "taille de haies",
  "EV-31": "absences & remplacements EV",
  "EV-32": "cimetières & voiries",
  "EV-33": "évacuation déchets verts",
  "EV-34": "plantations & massifs",
  "EV-35": "hôpitaux & cliniques",
  "EV-36": "écoles & établissements",
  "EV-37": "zéro phyto",
  "EV-38": "marchés publics EV",
  "EV-39": "ouverture de saison EV",
};

let total = 0;
const parts = src.split(/(?="EV-\d{2}":\s*\{)/);
const out = parts.map((part) => {
  const m = part.match(/^"EV-(\d{2})":/);
  if (!m || !part.includes("page-0")) return part;
  const id = `EV-${m[1]}`;
  const label = labels[id] ?? id.toLowerCase();
  let n = 0;
  const next = part.replace(/page-0/g, () => {
    n += 1;
    return label;
  });
  total += n;
  return next;
});

fs.writeFileSync(file, out.join(""), "utf8");
console.log("page-0 remplacés:", total);

// Aussi dans les specs si présents
for (const f of [
  "src/lib/marketing/ev/specs-part1.ts",
  "src/lib/marketing/ev/specs-part2.ts",
  "src/lib/marketing/ev/specs-part3.ts",
  "src/lib/marketing/ev/specs-part4.ts",
  "src/lib/marketing/ev/specs-part5.ts",
  "src/lib/marketing/ev/specs-part6.ts",
]) {
  if (!fs.existsSync(f)) continue;
  let s = fs.readFileSync(f, "utf8");
  if (!s.includes("page-0")) continue;
  const chunks = s.split(/(?=^\s{2}id:\s*")/m);
  let changed = 0;
  const rebuilt = chunks.map((chunk) => {
    if (!chunk.includes("page-0")) return chunk;
    const idMatch = chunk.match(/id:\s*"(EV-\d+)"/);
    const kwMatch = chunk.match(/primaryKw:\s*"([^"]+)"/);
    const label = kwMatch?.[1] ?? idMatch?.[1] ?? "espaces verts";
    return chunk.replace(/page-0/g, () => {
      changed += 1;
      return label;
    });
  });
  if (changed) {
    fs.writeFileSync(f, rebuilt.join(""), "utf8");
    console.log(f, changed);
  }
}
