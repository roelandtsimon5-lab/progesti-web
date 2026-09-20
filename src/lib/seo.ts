import type { Metadata } from "next";
import { site } from "@/lib/site";

const DEFAULT_OG = {
  url: `${site.url}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: `${site.name} — Logiciel de gestion métier`,
};

type PageMetaInput = {
  title: string;
  description: string;
  /** Chemin canonique, ex. `/tarifs` ou `/`. */
  path: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: { url: string; width?: number; height?: number; alt?: string }[];
  };
};

/** Retire une marque déjà présente pour éviter `X — PROGESTI | PROGESTI`. */
export function stripTrailingBrand(title: string, brand = site.name): string {
  const escaped = brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return title
    .replace(new RegExp(`\\s*[|—–-]\\s*${escaped}\\s*$`, "i"), "")
    .replace(new RegExp(`\\s+${escaped}\\s*$`, "i"), "")
    .trim();
}

function withBrandOnce(title: string): string {
  const clean = stripTrailingBrand(title);
  return `${clean} | ${site.name}`;
}

/** Metadata marketing avec canonical + Open Graph de base. */
export function pageMeta({
  title,
  description,
  path,
  openGraph,
}: PageMetaInput): Metadata {
  const canonical = path || "/";
  const absoluteUrl = canonical === "/" ? site.url : `${site.url}${canonical}`;
  const cleanTitle = stripTrailingBrand(title);
  const ogTitle = withBrandOnce(openGraph?.title ?? cleanTitle);
  const ogDescription = openGraph?.description ?? description;
  const images = openGraph?.images?.length ? openGraph.images : [DEFAULT_OG];

  return {
    title: cleanTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: absoluteUrl,
      type: "website",
      locale: "fr_FR",
      siteName: site.name,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: images.map((img) => img.url),
    },
  };
}

export { DEFAULT_OG };
