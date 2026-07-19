import type { MetadataRoute } from "next";
import { blogPosts, modules, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/fonctionnalites",
    "/tarifs",
    "/demo",
    "/essai-gratuit",
    "/login",
    "/rendez-vous",
    "/contact",
    "/faq",
    "/blog",
    "/ressources",
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
    "/lp/ads/probleme",
    "/lp/ads/logiciel",
    "/lp/ads/concurrent",
    "/lp/ads/essai",
    "/lp/ads/v2/temps",
    "/lp/ads/v2/excel",
    "/lp/ads/v2/essai",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : path.startsWith("/logiciel") || path.startsWith("/alternative") ? 0.85 : 0.7,
    })),
    ...modules.map((m) => ({
      url: `${base}/fonctionnalites/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
  ];
}
