/* eslint-disable */
import { buildEvEntry } from "./build";
import { evSpecsPart1 } from "./specs-part1";
import { evSpecsPart2 } from "./specs-part2";
import { evSpecsPart3 } from "./specs-part3";
import { evSpecsPart4 } from "./specs-part4";
import { evSpecsPart5 } from "./specs-part5";
import { evSpecsPart6 } from "./specs-part6";
import type { MarketingPageEntry } from "../espace-vert-pages-types";

export const evAllSpecs = [
  ...evSpecsPart1,
  ...evSpecsPart2,
  ...evSpecsPart3,
  ...evSpecsPart4,
  ...evSpecsPart5,
  ...evSpecsPart6,
] as const;

function buildPages(): Record<string, MarketingPageEntry> {
  const out: Record<string, MarketingPageEntry> = {};
  for (const spec of evAllSpecs) {
    out[spec.key] = buildEvEntry(spec);
  }
  return out;
}

export const espaceVertPages = buildPages();

export type espaceVertPagesSlug = string;

export function getespaceVertPages(slug: string): MarketingPageEntry | null {
  return espaceVertPages[slug] ?? null;
}

export function listespaceVertPagesSlugs(): string[] {
  return Object.keys(espaceVertPages);
}

export function listespaceVertPagesPaths(): string[] {
  return Object.values(espaceVertPages).map((p) => p.path);
}

export type { MarketingPageEntry };
