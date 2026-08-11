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
};

export default nextConfig;
