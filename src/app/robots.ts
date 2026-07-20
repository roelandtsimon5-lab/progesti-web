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
        "/lp/ads/",
        "/api/",
        "/app",
        "/demo/live",
      ],
    },
    sitemap: "https://progesti.fr/sitemap.xml",
  };
}
