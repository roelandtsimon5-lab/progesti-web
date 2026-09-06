import type { MetadataRoute } from "next";
import { getAllPosts, getActiveBlogCategories } from "@/lib/blog";
import { glossaryTerms } from "@/lib/glossary";
import { modules, site, solutions } from "@/lib/site";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

function entry(
  path: string,
  priority: number,
  changeFrequency: Freq = "weekly",
  lastModified: Date = new Date(),
): MetadataRoute.Sitemap[number] {
  return {
    url: path === "/" || path === "" ? site.url : `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

/**
 * Sitemap organique uniquement.
 * Exclus volontairement : /lp/** (noindex), /preview, /v1–v3, /app, /demo/live, /login, /signup.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  /** Pages conversion / intent — priorité haute */
  const money: MetadataRoute.Sitemap = [
    entry("", 1, "weekly"),
    entry("/logiciel-entreprise-nettoyage", 0.95, "weekly"),
    entry("/logiciel-planning-nettoyage", 0.9, "weekly"),
    entry("/logiciel-facturation-proprete", 0.9, "weekly"),
    entry("/alternative-propret", 0.9, "weekly"),
    entry("/tarifs", 0.9, "weekly"),
    entry("/essai-gratuit", 0.9, "weekly"),
    entry("/solutions", 0.85, "weekly"),
    entry("/fonctionnalites", 0.8, "weekly"),
    entry("/demo", 0.8, "weekly"),
    entry("/contact", 0.75, "monthly"),
    entry("/rendez-vous", 0.7, "monthly"),
  ];

  /** Contenu & confiance */
  const content: MetadataRoute.Sitemap = [
    entry("/blog", 0.7, "daily"),
    entry("/faq", 0.65, "monthly"),
    entry("/ressources", 0.6, "weekly"),
    entry("/glossaire", 0.55, "monthly"),
    entry("/guides", 0.55, "weekly"),
    entry("/comparatifs", 0.55, "weekly"),
    entry("/temoignages", 0.6, "monthly"),
    entry("/integrations", 0.45, "monthly"),
    entry("/a-propos", 0.45, "monthly"),
  ];

  /** Légal & support — indexable mais faible priorité */
  const legal: MetadataRoute.Sitemap = [
    entry("/support", 0.3, "yearly"),
    entry("/mentions-legales", 0.2, "yearly"),
    entry("/confidentialite", 0.2, "yearly"),
    entry("/cgv", 0.2, "yearly"),
  ];

  const solutionPages = solutions.map((s) =>
    entry(`/solutions/${s.slug}`, 0.8, "monthly"),
  );

  /**
   * Locs en 308 (next.config redirects) — ne pas les réindexer.
   * Inclut aussi d’anciennes pages fonctionnalités fusionnées.
   */
  const SITEMAP_EXCLUDE = new Set([
    "/blog/choisir-offre-starter-pro-premium",
    "/fonctionnalites/prepaie",
    "/fonctionnalites/tableaux-de-bord",
  ]);

  const featurePages = modules
    .map((m) => `/fonctionnalites/${m.slug}`)
    .filter((path) => !SITEMAP_EXCLUDE.has(path))
    .map((path) => entry(path, 0.6, "monthly"));

  const categoryPages = getActiveBlogCategories().map((c) =>
    entry(`/blog/categorie/${c.slug}`, 0.5, "weekly"),
  );

  const posts = getAllPosts()
    .filter((p) => !SITEMAP_EXCLUDE.has(`/blog/${p.slug}`))
    .map((p) =>
      entry(`/blog/${p.slug}`, 0.55, "monthly", new Date(p.updatedAt || p.date)),
    );

  const glossary = glossaryTerms.map((t) =>
    entry(`/glossaire/${t.slug}`, 0.4, "monthly"),
  );

  return [
    ...money,
    ...solutionPages,
    ...featurePages,
    ...content,
    ...categoryPages,
    ...posts,
    ...glossary,
    ...legal,
  ];
}
