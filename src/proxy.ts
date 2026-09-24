import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "progesti.fr";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

/**
 * Legacy feature paths that were merged or removed.
 * Maps old path to new path (relative, without leading slash in value).
 */
const LEGACY_FEATURE_REDIRECTS: Record<string, string> = {
  "/fonctionnalites/bon-intervention": "/fonctionnalites/pointage",
  "/fonctionnalites/prepaie": "/fonctionnalites/gestion-rh",
  "/fonctionnalites/tableaux-de-bord": "/fonctionnalites/rentabilite",
  "/fonctionnalites/contrats": "/fonctionnalites",
  "/fonctionnalites/geolocalisation": "/fonctionnalites",
  "/fonctionnalites/stock": "/fonctionnalites",
  "/fonctionnalites/supervision": "/fonctionnalites",
};

/**
 * Other legacy redirects (marketing, glossary, etc.)
 */
const OTHER_REDIRECTS: Record<string, string> = {
  "/signup": "/essai-gratuit",
  "/clients": "/cas-clients",
  "/nouveau": "/",
  "/blog/choisir-offre-starter-pro-premium": "/blog/tarif-unique-logiciel-nettoyage",
  "/glossaire/starter-pro-premium": "/glossaire/offre-progesti",
};

/**
 * Accented URL variants — historically linked but never in sitemap.
 * Handled separately because they need decoding logic.
 */
function normalizeAccentedPath(pathname: string): string | null {
  const decoded = decodeURIComponent(pathname);
  if (decoded.startsWith("/fonctionnalités")) {
    return decoded.replace("/fonctionnalités", "/fonctionnalites");
  }
  if (decoded === "/sécurité" || pathname === "/s%C3%A9curit%C3%A9") {
    return "/securite";
  }
  return null;
}

/**
 * Middleware that consolidates host canonicalization and legacy path redirects
 * into a single-hop 308 permanent redirect with an absolute Location header.
 *
 * This prevents multi-hop chains that GSC flags as redirect errors:
 * - http://www.progesti.fr/fonctionnalites/tableaux-de-bord previously went through
 *   301→301→308→200 (HTTP→HTTPS, www→apex, old→new).
 * - Now it goes directly to https://progesti.fr/fonctionnalites/rentabilite in one hop.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host") || "";
  const hostLower = host.toLowerCase().replace(/:\d+$/, "");
  const proto = request.headers.get("x-forwarded-proto") || "https";

  const isNonCanonicalProgestiHost =
    hostLower === `www.${CANONICAL_HOST}` ||
    (hostLower.endsWith(`.${CANONICAL_HOST}`) && hostLower !== CANONICAL_HOST);

  const isHttpOnCanonical =
    hostLower === CANONICAL_HOST && proto.toLowerCase() === "http";

  const needsHostCanon = isNonCanonicalProgestiHost || isHttpOnCanonical;

  const legacyFeatureDest = LEGACY_FEATURE_REDIRECTS[pathname];
  const otherDest = OTHER_REDIRECTS[pathname];
  const accentedDest = normalizeAccentedPath(pathname);

  const hasPathRedirect = legacyFeatureDest || otherDest || accentedDest;
  const finalPath = hasPathRedirect || pathname;

  if (needsHostCanon && hasPathRedirect) {
    const destination = `${CANONICAL_ORIGIN}${finalPath}${search}`;
    return NextResponse.redirect(destination, { status: 308 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match paths that may need redirects:
     * - Legacy feature pages
     * - Marketing redirects
     * - Accented variants
     * - Any request from non-canonical hosts (www, http)
     *
     * Exclude static files, API routes, and Next.js internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)).*)",
  ],
};
