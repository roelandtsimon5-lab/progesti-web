import type { Metadata } from "next";
import { AdsCaptureLanding } from "@/components/sections/AdsCaptureLanding";

export const metadata: Metadata = {
  title: "Voir la plateforme — Essai logiciel nettoyage",
  robots: { index: false },
};

export default function AdsEssaiPage() {
  return (
    <AdsCaptureLanding
      campaign="ads_essai"
      headline="Testez le logiciel de nettoyage en 10 secondes"
      subhead="Entrez votre prénom et votre téléphone pour ouvrir la plateforme immédiatement."
      bullets={[
        "Sans carte bancaire",
        "Tous les modules ouverts",
        "Conçu pour AE et petites entreprises de propreté",
      ]}
    />
  );
}
