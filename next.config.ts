import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  /**
   * Page légale Play Store : HTML statique sans payload RSC « not-found »
   * (évite le soft-404 Google Play sur « Page introuvable »).
   */
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/confidentialite", destination: "/confidentialite.html" },
        { source: "/confidentialite/", destination: "/confidentialite.html" },
      ],
    };
  },
  /**
   * Permanent 301 redirects for URLs removed after Home V2 module rename.
   * Added 2026-08-19 to fix 404s on live site.
   */
  async redirects() {
    return [
      // Feature pages merged or removed in Home V2
      {
        source: "/fonctionnalites/bon-intervention",
        destination: "/fonctionnalites/pointage",
        permanent: true,
      },
      {
        source: "/fonctionnalites/prepaie",
        destination: "/fonctionnalites/gestion-rh",
        permanent: true,
      },
      {
        source: "/fonctionnalites/tableaux-de-bord",
        destination: "/fonctionnalites/rentabilite",
        permanent: true,
      },
      {
        source: "/fonctionnalites/contrats",
        destination: "/fonctionnalites",
        permanent: true,
      },
      {
        source: "/fonctionnalites/geolocalisation",
        destination: "/fonctionnalites",
        permanent: true,
      },
      {
        source: "/fonctionnalites/stock",
        destination: "/fonctionnalites",
        permanent: true,
      },
      {
        source: "/fonctionnalites/supervision",
        destination: "/fonctionnalites",
        permanent: true,
      },
      // Glossary page renamed
      {
        source: "/glossaire/starter-pro-premium",
        destination: "/glossaire/offre-progesti",
        permanent: true,
      },
      // Accented URL variants (é → e) - historically linked but never in sitemap
      {
        source: "/fonctionnalit%C3%A9s",
        destination: "/fonctionnalites",
        permanent: true,
      },
      {
        source: "/fonctionnalit%C3%A9s/:path*",
        destination: "/fonctionnalites/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
