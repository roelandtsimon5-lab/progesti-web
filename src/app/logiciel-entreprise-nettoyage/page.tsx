import type { Metadata } from "next";
import { IndustryLanding } from "@/components/industry/IndustryLanding";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { defaultIndustryConfig, mergeIndustryConfig } from "@/lib/industry";
import { pageMeta } from "@/lib/seo";
import { site, trialCopy } from "@/lib/site";

const pageUrl = `${site.url}/logiciel-entreprise-nettoyage`;

export const metadata: Metadata = pageMeta({
  title: "Logiciel pour entreprise de nettoyage — Essai gratuit",
  description:
    "Gérant d'entreprise de nettoyage ? Planning, pointage, facture en un seul logiciel. 149 € HT/mois, 5 utilisateurs inclus. Essai 7 jours sans engagement.",
  path: "/logiciel-entreprise-nettoyage",
  openGraph: {
    title: "Logiciel pour entreprise de nettoyage — Essai gratuit",
    description:
      "Gérant d'entreprise de nettoyage ? Planning, pointage, facture en un seul logiciel. 149 € HT/mois, 5 utilisateurs inclus. Essai 7 jours sans engagement.",
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