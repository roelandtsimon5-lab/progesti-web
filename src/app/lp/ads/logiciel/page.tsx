import type { Metadata } from "next";
import { AdsCaptureLanding } from "@/components/sections/AdsCaptureLanding";

export const metadata: Metadata = {
  title: "Logiciel nettoyage — Voir la plateforme",
  robots: { index: false },
};

export default function AdsLogicielPage() {
  return (
    <AdsCaptureLanding
      campaign="ads_logiciel"
      headline="Le logiciel tout-en-un pour votre boîte de nettoyage"
      subhead="Planning, facturation, pointage — Gratuit pour indépendants. Voyez la plateforme maintenant."
      bullets={[
        "Tous modules inclus",
        "Tarifs publics transparents",
        "Cloud + mobile Android / iOS",
      ]}
    />
  );
}
