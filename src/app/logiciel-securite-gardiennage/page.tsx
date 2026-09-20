import type { Metadata } from "next";
import { MarketingVerticalPage } from "@/components/marketing/MarketingVerticalPage";
import { getSecuritePage } from "@/lib/marketing";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const entry = getSecuritePage("logiciel-securite-gardiennage")!;

export const metadata: Metadata = pageMeta({
  title: entry.config.seo.title,
  description: entry.config.seo.description,
  path: entry.config.seo.path,
  openGraph: {
    title: `${entry.config.seo.title} | ${site.name}`,
    description: entry.config.seo.description,
  },
});

export default function LogicielSecuriteGardiennagePage() {
  return <MarketingVerticalPage entry={entry} />;
}
