import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/v1", "/v1/", "/lp/ads/", "/api/", "/app", "/demo/live"],
    },
    sitemap: "https://progesti.fr/sitemap.xml",
  };
}
