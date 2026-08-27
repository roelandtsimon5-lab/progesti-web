import type { Metadata } from "next";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { ReviewsLd } from "@/components/seo/ReviewsLd";
import { pageMeta } from "@/lib/seo";
import { site, trialCopy } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: trialCopy.free,
  description:
    `Testez PROGESTI gratuitement pendant ${site.trialDays} jours. Sans engagement, tous modules inclus. 149 € HT/mois.`,  path: "/essai-gratuit",
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
