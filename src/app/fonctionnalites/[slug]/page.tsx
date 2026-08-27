import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModuleLandingPage } from "@/components/features/ModuleLandingPage";
import { BreadcrumbListLd } from "@/components/seo/BreadcrumbListLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { WebPageLd } from "@/components/seo/WebPageLd";
import { getModuleContent } from "@/lib/modules-content";
import { modules, site } from "@/lib/site";
import { stripSiteSuffix } from "@/lib/text-utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) return {};
  const content = getModuleContent(slug);
  const path = `/fonctionnalites/${mod.slug}`;
  const rawTitle =
    content?.seoTitle ?? `${mod.title} pour entreprises de nettoyage`;
  const title = stripSiteSuffix(rawTitle);
  const description =
    content?.seoDescription ??
    `${mod.short} Essai ${site.trialDays} jours sans CB · 149 € HT/mois tout inclus.`;
  return {
    title: { absolute: `${title} | ${site.name}` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}${path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
    },
  };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) notFound();
  const content = getModuleContent(slug);
  if (!content) notFound();

  const path = `/fonctionnalites/${slug}`;
  const pageTitle = stripSiteSuffix(content.seoTitle ?? `${mod.title} pour entreprises de nettoyage`);
  const pageDescription =
    content.seoDescription ??
    `${mod.short} Essai ${site.trialDays} jours sans CB · 149 € HT/mois tout inclus.`;

  return (
    <>
      <SoftwareApplicationLd />
      <WebPageLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbListLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Fonctionnalités", path: "/fonctionnalites" },
          { name: mod.title },
        ]}
      />
      <FaqPageLd items={[...content.faq]} />
      <ModuleLandingPage mod={mod} content={content} slug={slug} />
    </>
  );
}
