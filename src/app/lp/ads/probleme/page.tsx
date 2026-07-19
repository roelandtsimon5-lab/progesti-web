import type { Metadata } from "next";
import { AdsCaptureLanding } from "@/components/sections/AdsCaptureLanding";

export const metadata: Metadata = {
  title: "Fini le planning Excel — Voir PROGESTI",
  robots: { index: false },
};

export default function AdsProblemePage() {
  return (
    <AdsCaptureLanding
      campaign="ads_probleme"
      headline="Stop Excel & WhatsApp pour votre planning nettoyage"
      subhead="Voyez comment affecter agents et sites clairement. Accès plateforme immédiat."
      bullets={[
        "Planning agents / sites sans galère",
        "Pointage terrain",
        "Lien direct vers la facturation",
      ]}
    />
  );
}
