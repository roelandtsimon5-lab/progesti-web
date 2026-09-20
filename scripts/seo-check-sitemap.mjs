import sitemap from "../src/app/sitemap.ts";
import robots from "../src/app/robots.ts";

const entries = sitemap();
const paths = entries.map((e) => e.url.replace("https://progesti.fr", ""));
const ev = paths.filter(
  (p) => p === "/espace-vert" || p.startsWith("/espace-vert/") || p === "/logiciel-espace-vert",
);
const sec = paths.filter(
  (p) => p === "/securite" || p.startsWith("/securite/") || p === "/logiciel-securite-gardiennage",
);
console.log({
  sitemapTotal: entries.length,
  ev: ev.length,
  sec: sec.length,
  dups: paths.length - new Set(paths).size,
  localhost: paths.filter((p) => p.includes("localhost")).length,
});
const r = robots();
const disallow = Array.isArray(r.rules) ? r.rules[0]?.disallow : r.rules?.disallow;
console.log("dashboard disallowed", Array.isArray(disallow) && disallow.includes("/dashboard-validation"));
