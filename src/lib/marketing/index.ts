import {
  espaceVertPages,
  getespaceVertPages,
  listespaceVertPagesSlugs,
  listespaceVertPagesPaths,
  type espaceVertPagesSlug,
  type MarketingPageEntry,
} from "./espace-vert-pages";
import {
  securitePages,
  getsecuritePages,
  listsecuritePagesSlugs,
  listsecuritePagesPaths,
  type securitePagesSlug,
} from "./securite-pages";
import { withEspaceVertShell, withSecuriteShell } from "./vertical-shells";

export {
  espaceVertPages,
  securitePages,
  type MarketingPageEntry,
};

export type EspaceVertSlug = espaceVertPagesSlug;
export type SecuriteSlug = securitePagesSlug;

function wrapEv(entry: MarketingPageEntry | null): MarketingPageEntry | null {
  if (!entry) return null;
  return { ...entry, config: withEspaceVertShell(entry.config) };
}

function wrapSec(entry: MarketingPageEntry | null): MarketingPageEntry | null {
  if (!entry) return null;
  return { ...entry, config: withSecuriteShell(entry.config) };
}

export function getEspaceVertPage(slug: string): MarketingPageEntry | null {
  return wrapEv(getespaceVertPages(slug));
}

export function getSecuritePage(slug: string): MarketingPageEntry | null {
  return wrapSec(getsecuritePages(slug));
}

export const listEspaceVertSlugs = listespaceVertPagesSlugs;
export const listSecuriteSlugs = listsecuritePagesSlugs;
export const listEspaceVertPaths = listespaceVertPagesPaths;
export const listSecuritePaths = listsecuritePagesPaths;

/** Slugs filles /espace-vert/[slug] (hors hub + pilier root). */
export function listEspaceVertChildSlugs() {
  return listespaceVertPagesSlugs().filter(
    (s) => s !== "hub" && s !== "logiciel-espace-vert",
  );
}

/** Slugs filles /securite/[slug] (hors hub + pilier root). */
export function listSecuriteChildSlugs() {
  return listsecuritePagesSlugs().filter(
    (s) => s !== "hub" && s !== "logiciel-securite-gardiennage",
  );
}

export function listAllMarketingVerticalPaths(): string[] {
  return [...listespaceVertPagesPaths(), ...listsecuritePagesPaths()];
}
