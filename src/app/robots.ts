import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/app",
        "/demo/live",
        "/login",
        "/signup",
        "/mot-de-passe-oublie",
        "/_next/",
        "/cdn-cgi/",
      ],
    },
    sitemap: "https://progesti.fr/sitemap.xml",
  };
}
