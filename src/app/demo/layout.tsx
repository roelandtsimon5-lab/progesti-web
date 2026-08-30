import type { Metadata } from "next";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { ReviewsLd } from "@/components/seo/ReviewsLd";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Démo interactive — logiciel nettoyage PROGESTI",
  description:
    "Accédez à la vraie application PROGESTI en démo : planning, pointage terrain et facturation pour entreprises de nettoyage. Sans rendez-vous obligatoire.",
  path: "/demo",
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SoftwareApplicationLd />
      <ReviewsLd />
      {children}
    </>
  );
}
