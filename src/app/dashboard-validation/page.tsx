import type { Metadata } from "next";
import {
  DashboardValidationClient,
  type DashboardPageRow,
  type SeoStatus,
} from "@/components/marketing/DashboardValidationClient";
import {
  espaceVertPages,
  securitePages,
  listAllMarketingVerticalPaths,
} from "@/lib/marketing";
import type { MarketingPageEntry } from "@/lib/marketing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dashboard validation — pages marketing",
  robots: { index: false, follow: false },
};

const sitemapPaths = new Set(listAllMarketingVerticalPaths());

function parentFor(path: string, vertical: DashboardPageRow["vertical"]): string | null {
  if (path.startsWith("/espace-vert/") || path.startsWith("/securite/")) {
    return vertical === "espace-vert" ? "/espace-vert" : "/securite";
  }
  if (path === "/espace-vert" || path === "/securite") {
    return vertical === "espace-vert"
      ? "/logiciel-espace-vert"
      : "/logiciel-securite-gardiennage";
  }
  return null;
}

function sistersFor(
  page: MarketingPageEntry,
  pages: MarketingPageEntry[],
  vertical: DashboardPageRow["vertical"],
): string[] {
  const parent = parentFor(page.path, vertical);
  if (!parent) return [];
  return pages
    .filter((p) => p.id !== page.id && parentFor(p.path, vertical) === parent)
    .slice(0, 4)
    .map((p) => p.path);
}

function auditRow(
  page: MarketingPageEntry,
  vertical: DashboardPageRow["vertical"],
  siblings: MarketingPageEntry[],
): DashboardPageRow {
  const notes: string[] = [];
  const title = page.config.seo.title;
  const meta = page.config.seo.description ?? "";
  const h1 = page.config.hero.h1;
  const faqCount = page.config.faq?.length ?? 0;
  const h2Count = page.config.bodySections?.length ?? 0;
  const outboundCount = page.config.grid?.items?.length ?? 0;
  const inSitemap = sitemapPaths.has(page.path);

  if (!meta || meta.length < 50) notes.push("Meta description trop courte ou absente");
  if (meta.length > 170) notes.push("Meta description longue (>170)");
  if (!title || title.length < 20) notes.push("Title trop court");
  if (title.length > 70) notes.push("Title long (>70)");
  if (/PROGESTI/i.test(title) && /\|/.test(title)) {
    notes.push("Title contient déjà la marque (risque double brand)");
  }
  if (!page.config.breadcrumbs?.length) notes.push("Breadcrumbs absents");
  if (!inSitemap) notes.push("Absente du sitemap marketing");
  if (faqCount === 0) notes.push("Pas de FAQ");
  if (h2Count === 0) notes.push("Pas de bodySections éditoriales");
  if (outboundCount < 2) notes.push("Peu de liens sortants (grille)");
  if (page.config.faq.some((f) => /^Essai \?$/i.test(f.q))) {
    notes.push("FAQ « Essai ? » générique");
  }
  if (page.config.faq.some((f) => f.q.replace(/\?$/, "").trim().split(/\s+/).length <= 1)) {
    notes.push("FAQ avec question trop courte");
  }

  let seoStatus: SeoStatus = "ok";
  if (notes.some((n) => n.includes("sitemap") || n.includes("Meta description trop"))) {
    seoStatus = "fix";
  } else if (notes.length > 0) {
    seoStatus = "watch";
  }

  return {
    id: page.id,
    path: page.path,
    type: page.type,
    primaryKw: page.primaryKw,
    title,
    vertical,
    h1,
    metaDescription: meta,
    canonical: `${site.url}${page.path}`,
    robots: "index,follow (page marketing)",
    inSitemap,
    faqCount,
    h2Count,
    outboundCount,
    parentPath: parentFor(page.path, vertical),
    sisterSample: sistersFor(page, siblings, vertical),
    seoStatus,
    seoNotes: notes,
  };
}

function toRows(
  pages: Record<string, MarketingPageEntry>,
  vertical: DashboardPageRow["vertical"],
): DashboardPageRow[] {
  const list = Object.values(pages);
  return list
    .map((page) => auditRow(page, vertical, list))
    .sort((a, b) => a.id.localeCompare(b.id, "fr"));
}

export default function DashboardValidationPage() {
  const espaceVert = toRows(espaceVertPages, "espace-vert");
  const securite = toRows(securitePages, "securite");

  return <DashboardValidationClient espaceVert={espaceVert} securite={securite} />;
}
