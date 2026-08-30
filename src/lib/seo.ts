import type { Metadata } from "next";

import { site } from "@/lib/site";



const DEFAULT_OG = {

  url: `${site.url}/opengraph-image`,

  width: 1200,

  height: 630,

  alt: `${site.name} — Logiciel entreprises de nettoyage`,

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



/** Metadata marketing avec canonical + Open Graph de base. */

export function pageMeta({

  title,

  description,

  path,

  openGraph,

}: PageMetaInput): Metadata {

  const canonical = path || "/";

  const absoluteUrl = canonical === "/" ? site.url : `${site.url}${canonical}`;

  const ogTitle = openGraph?.title ?? `${title} | ${site.name}`;

  const ogDescription = openGraph?.description ?? description;

  const images = openGraph?.images?.length ? openGraph.images : [DEFAULT_OG];



  return {

    title,

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

