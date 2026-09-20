import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingVerticalPage } from "@/components/marketing/MarketingVerticalPage";
import { getSecuritePage, listSecuriteChildSlugs } from "@/lib/marketing";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listSecuriteChildSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getSecuritePage(slug);
  if (!entry || entry.path.startsWith("/logiciel-") || slug === "hub") return {};
  return pageMeta({
    title: entry.config.seo.title,
    description: entry.config.seo.description,
    path: entry.config.seo.path,
  });
}

export default async function SecuriteSlugPage({ params }: Props) {
  const { slug } = await params;
  const entry = getSecuritePage(slug);
  if (!entry || slug === "hub" || entry.path.startsWith("/logiciel-")) notFound();
  return <MarketingVerticalPage entry={entry} />;
}
