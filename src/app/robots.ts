import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/v1",
        "/v1/",
        "/v2",
        "/v2/",
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
        "/mot-de-passe-oublie",
      ],
    },
    sitemap: "https://progesti.fr/sitemap.xml",
  };
}
