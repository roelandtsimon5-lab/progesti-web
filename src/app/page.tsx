import type { Metadata } from "next";
import { IndustryLanding } from "@/components/industry/IndustryLanding";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { ReviewsLd } from "@/components/seo/ReviewsLd";
import { defaultIndustryConfig } from "@/lib/industry";
import { pageMeta } from "@/lib/seo";
import { trialCopy } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Logiciel entreprise de nettoyage — 149 € HT/mois",
  description:
    `Simplifiez et faites grandir votre entreprise de nettoyage : planning, pointage, facture. 149 € HT/mois, 5 utilisateurs, tout inclus. ${trialCopy.noCard}.`,
  path: "/",
  openGraph: {
    title: "Logiciel entreprise de nettoyage — 149 € HT/mois | PROGESTI",
    description:
      `Planning, pointage et facturation pour entreprises de propreté. 149 € HT/mois tout inclus. ${trialCopy.label}.`,
  },
});

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationLd />
      <ReviewsLd />
      <FaqPageLd items={[...defaultIndustryConfig.faq]} />
      <IndustryLanding config={defaultIndustryConfig} />
    </>
  );
}
