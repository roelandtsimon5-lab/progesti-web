import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLanding } from "@/components/industry/IndustryLanding";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { getIndustryConfig, getIndustrySlugs } from "@/lib/industry";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const config = getIndustryConfig(slug);
  if (config.slug !== slug) return {};
  return pageMeta({
    title: config.seo.title,
    description: config.seo.description,
    path: config.seo.path,
    openGraph: {
      title: `${config.seo.title} | ${site.name}`,
      description: config.seo.description,
    },
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const config = getIndustryConfig(slug);
  if (config.slug !== slug) notFound();

  return (
    <>
      <SoftwareApplicationLd url={`${site.url}${config.seo.path}`} />
      <FaqPageLd items={[...config.faq]} />
      <IndustryLanding config={config} />
    </>
  );
}
