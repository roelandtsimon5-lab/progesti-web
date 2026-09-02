import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  /**
   * Play Store : lien direct possible vers /confidentialite.html (fichier statique).
   * La route /confidentialite sert la page React avec header/footer du site.
   */
  async rewrites() {
    return { beforeFiles: [] as { source: string; destination: string }[] };
  },
  async redirects() {
    return [
      { source: "/signup", destination: "/essai-gratuit", permanent: true },
      { source: "/clients", destination: "/cas-clients", permanent: true },
      { source: "/nouveau", destination: "/", permanent: true },
      {
        source: "/blog/choisir-offre-starter-pro-premium",
        destination: "/blog/tarif-unique-logiciel-nettoyage",
        permanent: true,
      },
    ];
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
