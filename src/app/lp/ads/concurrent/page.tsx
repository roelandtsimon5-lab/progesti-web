import type { Metadata } from "next";
import { AdsCaptureLanding } from "@/components/sections/AdsCaptureLanding";

export const metadata: Metadata = {
  title: "Alternative Propret — Voir PROGESTI",
  robots: { index: false },
};

export default function AdsConcurrentPage() {
  return (
    <AdsCaptureLanding
      campaign="ads_concurrent"
      headline="Vous comparez Propret ? Ouvrez PROGESTI maintenant"
      subhead="Même métier. Essai 2 mois. Accédez avec prénom + téléphone."
      bullets={[
        "Essai 2 mois sans carte bancaire",
        "Gratuit pour indépendants",
        "Migration possible si ça matche",
      ]}
    />
  );
}
