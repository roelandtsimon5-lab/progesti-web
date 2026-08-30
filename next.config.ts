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
};

export default nextConfig;
