import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/ancien",
        "/ancien/",
        "/nouveau",
        "/nouveau/",
        "/v1",
        "/v1/",
        "/v2",
        "/v2/",
        "/v3",
        "/v3/",
        "/v3-valide",
        "/v3-valide/",
        "/preview",
        "/preview/",
        "/lp/",
        "/api/",
        "/app",
        "/demo/live",
        "/login",
        "/signup",
        "/creer-mon-espace",
        "/forgot-password",
        "/mot-de-passe-oublie",
        "/dashboard-validation",
        "/dashboard-validation/",
      ],
    },
    sitemap: "https://progesti.fr/sitemap.xml",
  };
}
