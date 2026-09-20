import {
  espaceVertPages,
  securitePages,
  listAllMarketingVerticalPaths,
} from "../src/lib/marketing/index.ts";

const ev = Object.values(espaceVertPages);
const sec = Object.values(securitePages);
const paths = listAllMarketingVerticalPaths();
console.log("EV", ev.length, "SEC", sec.length, "paths", paths.length);
const all = [...ev, ...sec];
function dups(arr, label) {
  const m = new Map();
  for (const x of arr) m.set(x, (m.get(x) || 0) + 1);
  const d = [...m.entries()].filter(([, c]) => c > 1);
  console.log(label + " dups", d.length, JSON.stringify(d.slice(0, 8)));
}
dups(
  all.map((p) => p.config.seo.title),
  "title",
);
dups(
  all.map((p) => p.config.hero.h1),
  "h1",
);
dups(
  all.map((p) => p.primaryKw),
  "kw",
);
dups(
  all.map((p) => p.path),
  "path",
);
console.log(
  "Essai?",
  all.flatMap((p) => p.config.faq.filter((f) => /^Essai \?$/i.test(f.q))).length,
);
console.log(
  "weak meta",
  all
    .filter((p) => !p.config.seo.description || p.config.seo.description.length < 50)
    .map((p) => p.id),
);
console.log(
  "no breadcrumbs",
  all.filter((p) => !p.config.breadcrumbs?.length).map((p) => p.id),
);
console.log(
  "no bodySections",
  all.filter((p) => !p.config.bodySections?.length).map((p) => p.id).length,
);
console.log(
  "PROGESTI in title",
  all.filter((p) => /PROGESTI/i.test(p.config.seo.title)).map((p) => p.id),
);
