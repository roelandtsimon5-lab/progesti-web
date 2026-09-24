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
  /**
   * Redirects with absolute canonical URLs.
   *
   * Using absolute destinations ensures the Location header is fully qualified,
   * which is preferred by search engines. The proxy.ts provides additional
   * handling for host canonicalization (www→apex) in a single hop when possible.
   *
   * Note: Vercel's edge handles http→https and www→apex redirects at platform
   * level BEFORE these redirects run, so multi-hop chains from www/http are
   * unavoidable. The path redirects themselves are single-hop with absolute URLs.
   */
  async redirects() {
    const SITE_URL = "https://progesti.fr";
    return [
      // Marketing redirects
      { source: "/signup", destination: `${SITE_URL}/essai-gratuit`, permanent: true },
      { source: "/clients", destination: `${SITE_URL}/cas-clients`, permanent: true },
      { source: "/nouveau", destination: SITE_URL, permanent: true },
      {
        source: "/blog/choisir-offre-starter-pro-premium",
        destination: `${SITE_URL}/blog/tarif-unique-logiciel-nettoyage`,
        permanent: true,
      },
      // Feature pages merged or removed in Home V2 (added 2026-08-19)
      {
        source: "/fonctionnalites/bon-intervention",
        destination: `${SITE_URL}/fonctionnalites/pointage`,
        permanent: true,
      },
      {
        source: "/fonctionnalites/prepaie",
        destination: `${SITE_URL}/fonctionnalites/gestion-rh`,
        permanent: true,
      },
      {
        source: "/fonctionnalites/tableaux-de-bord",
        destination: `${SITE_URL}/fonctionnalites/rentabilite`,
        permanent: true,
      },
      {
        source: "/fonctionnalites/contrats",
        destination: `${SITE_URL}/fonctionnalites`,
        permanent: true,
      },
      {
        source: "/fonctionnalites/geolocalisation",
        destination: `${SITE_URL}/fonctionnalites`,
        permanent: true,
      },
      {
        source: "/fonctionnalites/stock",
        destination: `${SITE_URL}/fonctionnalites`,
        permanent: true,
      },
      {
        source: "/fonctionnalites/supervision",
        destination: `${SITE_URL}/fonctionnalites`,
        permanent: true,
      },
      // Glossary page renamed
      {
        source: "/glossaire/starter-pro-premium",
        destination: `${SITE_URL}/glossaire/offre-progesti`,
        permanent: true,
      },
      // Accented URL variants (é → e) - historically linked but never in sitemap
      {
        source: "/fonctionnalit%C3%A9s",
        destination: `${SITE_URL}/fonctionnalites`,
        permanent: true,
      },
      {
        source: "/fonctionnalit%C3%A9s/:path*",
        destination: `${SITE_URL}/fonctionnalites/:path*`,
        permanent: true,
      },
      // /sécurité → /securite (security landing)
      // Both URL-encoded and raw UTF-8 forms to handle browser/CDN variations
      {
        source: "/s%C3%A9curit%C3%A9",
        destination: `${SITE_URL}/securite`,
        permanent: true,
      },
      {
        source: "/sécurité",
        destination: `${SITE_URL}/securite`,
        permanent: true,
      },
    ];
  },
  /**
   * OG image routes are assets, not indexable pages.
   * X-Robots-Tag stops Google treating /opengraph-image* as HTML.
   */
  async headers() {
    const noindex = [
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
    ];
    return [
      { source: "/opengraph-image", headers: noindex },
      { source: "/opengraph-image(.*)", headers: noindex },
    ];
  },
};

export default nextConfig;
