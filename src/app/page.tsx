import type { Metadata } from "next";
import { HomeNew } from "@/components/home/HomeNew";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Logiciel entreprise de nettoyage — 149 € HT/mois",
  description:
    "Logiciel pour entreprises de nettoyage : planning, pointage, facture. 149 € HT/mois, 5 utilisateurs, tout inclus. Essai 7 jours. Demandez une démo.",
  path: "/",
  openGraph: {
    title: "Logiciel entreprise de nettoyage — 149 € HT/mois | PROGESTI",
    description:
      "Logiciel pour entreprises de nettoyage : planning, pointage, facture. 149 € HT/mois, 5 utilisateurs, tout inclus. Essai 7 jours. Demandez une démo.",
  },
});

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationLd />
      <HomeNew />
      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
