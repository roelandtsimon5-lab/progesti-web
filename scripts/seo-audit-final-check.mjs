import {
  espaceVertPages,
  securitePages,
  listAllMarketingVerticalPaths,
} from "../src/lib/marketing/index.ts";
import {
  withEspaceVertShell,
  withSecuriteShell,
} from "../src/lib/marketing/vertical-shells.ts";

const paths = listAllMarketingVerticalPaths();
const ev = Object.values(espaceVertPages).map((p) => ({
  ...p,
  config: withEspaceVertShell(p.config),
}));
const sec = Object.values(securitePages).map((p) => ({
  ...p,
  config: withSecuriteShell(p.config),
}));
const all = [...ev, ...sec];

console.log("counts", { ev: ev.length, sec: sec.length, paths: paths.length });
console.log(
  "EV planning href",
  ev[0].config.pillars[0].features.find((f) => f.id === "planning")?.href,
);
console.log(
  "SEC planning href",
  sec[0].config.pillars[0].features.find((f) => f.id === "planning")?.href,
);

const nettoyageLinks = all.flatMap((p) =>
  p.config.pillars.flatMap((pil) =>
    pil.features
      .filter((f) => /nettoyage|proprete|propret/i.test(f.href))
      .map((f) => `${p.id}:${f.id}->${f.href}`),
  ),
);
console.log("pillar nettoyage leaks", nettoyageLinks.length, nettoyageLinks.slice(0, 5));

const brandTitles = all.filter((p) => /PROGESTI/i.test(p.config.seo.title)).map((p) => p.id);
console.log("brand titles", brandTitles);

const longTitles = all.filter((p) => p.config.seo.title.length > 70).map((p) => `${p.id}(${p.config.seo.title.length})`);
console.log("long titles", longTitles.length, longTitles.slice(0, 10));

const shortFaq = all.flatMap((p) =>
  p.config.faq
    .filter((f) => f.q.replace(/\?$/, "").trim().split(/\s+/).length <= 1)
    .map((f) => `${p.id}:${f.q}`),
);
console.log("short faq left", shortFaq.length, shortFaq.slice(0, 10));
