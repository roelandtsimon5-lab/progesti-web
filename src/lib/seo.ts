import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Chemin canonique, ex. `/tarifs` ou `/`. */
  path: string;
  openGraph?: {
    title?: string;
    description?: string;
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

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: absoluteUrl,
    },
  };
}
