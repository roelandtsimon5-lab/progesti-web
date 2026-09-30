import type { Metadata } from "next";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { ReviewsLd } from "@/components/seo/ReviewsLd";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: `Essai gratuit ${site.trialDays} jours sans CB — nettoyage`,
  description:
    `Testez PROGESTI ${site.trialDays} jours sans carte bancaire : planning, pointage, devis, facturation, tous modules inclus. Gratuit pour indépendants.`,
  path: "/essai-gratuit",
});

export default function EssaiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SoftwareApplicationLd />
      <ReviewsLd />
      {children}
    </>
  );
}
