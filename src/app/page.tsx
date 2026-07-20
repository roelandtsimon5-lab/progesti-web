import type { Metadata } from "next";
import { HomeValidated } from "@/components/home/HomeValidated";

export const metadata: Metadata = {
  title: "Logiciel entreprise de nettoyage — essai 2 mois sans CB",
  description:
    "PROGESTI : planning, pointage terrain et facturation pour sociétés de propreté. Dès 29,99 € HT/mois, tous modules inclus. Essai 2 mois sans carte bancaire.",
  openGraph: {
    title: "PROGESTI — Le logiciel qui simplifie le nettoyage professionnel",
    description:
      "Centralisez planning, pointage, RH et facturation. Essai 2 mois sans CB · Dès 29,99 € HT/mois.",
  },
};

export default function HomePage() {
  return <HomeValidated />;
}
