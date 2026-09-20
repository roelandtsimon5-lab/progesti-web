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
for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  let n = 0;
  const next = src.replace(
    /(seoTitle:\s*")([^"]+?)(\s*[|—–-]\s*PROGESTI|\s+PROGESTI)(")/gi,
    (_m, a, mid, _brand, q) => {
      n += 1;
      return `${a}${mid.trim()}${q}`;
    },
  );
  if (n > 0) {
    fs.writeFileSync(file, next, "utf8");
    total += n;
    console.log(path.relative(process.cwd(), file), n);
  }
}
console.log("seoTitle nettoyés:", total);
