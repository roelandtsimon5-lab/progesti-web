/* eslint-disable */
/**
 * Pages marketing sécurité — builder sec/specs.ts
 * Ne pas fusionner avec /solutions (propreté).
 */
import { buildSecEntry } from "./sec/build";
import { secSpecs } from "./sec/specs";
import type { MarketingPageEntry } from "./espace-vert-pages-types";

export type { MarketingPageEntry };

export const securitePages = Object.fromEntries(
  secSpecs.map((s) => [s.key, buildSecEntry(s)])
) as Record<string, MarketingPageEntry>;

export type securitePagesSlug = keyof typeof securitePages;

export function getsecuritePages(slug: string): MarketingPageEntry | null {
  if (slug in securitePages) return securitePages[slug as securitePagesSlug];
  return null;
}

export function listsecuritePagesSlugs(): securitePagesSlug[] {
  return Object.keys(securitePages) as securitePagesSlug[];
}

export function listsecuritePagesPaths(): string[] {
  return Object.values(securitePages).map((p) => p.path);
}
