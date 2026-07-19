import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Essai gratuit 2 mois — logiciel nettoyage",
  robots: { index: false },
};

export default function LandingEssaiPage() {
  return (
    <LandingTemplate
      badge="Landing essai"
      headline="Essayez gratuitement pendant 2 mois"
      subhead="Accès immédiat à tous les modules. Sans carte bancaire. Sans engagement."
      primaryCta={{ href: "/essai-gratuit", label: "Créer mon essai maintenant" }}
      secondaryCta={{ href: "/demo", label: "Préférer la démo 30s" }}
      benefits={[
        "Friction minimale : formulaire court puis entrée dans l’app",
        "Tous les modules ouverts pendant 2 mois",
        "Idéal pour valider sur vos vrais sites clients",
        "Passage ensuite vers Starter / Pro / Premium",
      ]}
      objections={[
        {
          q: "Vais-je être relancé commercialement ?",
          a: "Vous testez librement. L’équipe reste dispo si vous voulez de l’aide.",
        },
        {
          q: "Que se passe-t-il après 2 mois ?",
          a: "Vous choisissez une offre — ou vous arrêtez.",
        },
      ]}
    />
  );
}
