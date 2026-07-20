import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { glossaryTerms } from "@/lib/glossary";
import { blogCategories, modules, site, solutions } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/fonctionnalites",
    "/solutions",
    "/tarifs",
    "/demo",
    "/essai-gratuit",
    "/login",
    "/rendez-vous",
    "/contact",
    "/faq",
    "/blog",
    "/ressources",
    "/glossaire",
    "/guides",
    "/comparatifs",
    "/clients",
    "/cas-clients",
    "/temoignages",
    "/integrations",
    "/mentions-legales",
    "/confidentialite",
    "/cgv",
    "/a-propos",
    "/logiciel-entreprise-nettoyage",
    "/logiciel-planning-nettoyage",
    "/logiciel-facturation-proprete",
    "/alternative-propret",
    "/lp/simplifier",
    "/lp/essai-2-mois",
    "/lp/alternative",
    "/lp/integration",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority:
        path === ""
          ? 1
          : path.startsWith("/logiciel") || path.startsWith("/alternative") || path.startsWith("/solutions")
            ? 0.85
            : 0.7,
    })),
    ...solutions.map((s) => ({
      url: `${base}/solutions/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...modules.map((m) => ({
      url: `${base}/fonctionnalites/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogCategories.map((c) => ({
      url: `${base}/blog/categorie/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...getAllPosts().map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt || p.date),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
    ...glossaryTerms.map((t) => ({
      url: `${base}/glossaire/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
