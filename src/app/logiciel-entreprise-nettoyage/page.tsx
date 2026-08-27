import type { Metadata } from "next";
import { IndustryLanding } from "@/components/industry/IndustryLanding";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { defaultIndustryConfig, mergeIndustryConfig } from "@/lib/industry";
import { pageMeta } from "@/lib/seo";
import { site, trialCopy } from "@/lib/site";

const pageUrl = `${site.url}/logiciel-entreprise-nettoyage`;

export const metadata: Metadata = pageMeta({
  title: "Logiciel entreprise de nettoyage — planning, pointage, facture",
  description:
    `Logiciel pour entreprise de nettoyage : planning multi-sites, pointage terrain, devis et facturation. 149 € HT/mois, 5 utilisateurs, tout inclus. ${trialCopy.noCard}.`,
  path: "/logiciel-entreprise-nettoyage",
  openGraph: {
    title: "Logiciel entreprise de nettoyage | PROGESTI",
    description:
      `Planning, pointage et facturation pour entreprises de propreté. 149 € HT/mois tout inclus. ${trialCopy.label}.`,
  },
});

export default function PillarNettoyagePage() {
  const config = mergeIndustryConfig(defaultIndustryConfig, {
    breadcrumbs: [
      { label: "Accueil", href: "/" },
      { label: "Logiciel entreprise de nettoyage", href: "/logiciel-entreprise-nettoyage" },
    ],
  });

  return (
    <>
      <SoftwareApplicationLd url={pageUrl} />
      <FaqPageLd items={[...defaultIndustryConfig.faq]} />
      <IndustryLanding config={config} />
    </>
  );
}
