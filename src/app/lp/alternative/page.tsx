import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

import { cta } from "@/lib/cta";
export const metadata: Metadata = {
  title: "Passez à une solution plus performante",
  robots: { index: false },
};

export default function LandingAlternativePage() {
  return (
    <LandingTemplate
      badge="Landing switch"
      headline="Passez à une solution plus performante"
      subhead="Vous utilisez déjà un logiciel (Propret ou autre) ? Comparez sans risque pendant 2 mois."
      primaryCta={{ href: cta.trialApp, label: "Tester PROGESTI 2 mois" }}
      secondaryCta={{ href: "/alternative-propret", label: "Voir la comparaison" }}
      benefits={[
        "Même niche : entreprises de nettoyage",
        "Tarifs publics dès 29,99€ HT/mois",
        "Essai 2 mois vs essai court ailleurs",
        "Accompagnement possible pour migrer",
      ]}
      objections={[
        {
          q: "Je vais tout perdre en migrant",
          a: "Nous pouvons vous aider à intégrer clients, sites et contrats.",
        },
        {
          q: "Pourquoi changer si ça marche déjà ?",
          a: "Pour gagner en clarté d’usage et tester un parcours plus long avant d’acheter.",
        },
      ]}
      formIntent="switch"
      formLabel="Comparer avec mon outil actuel"
    />
  );
}
