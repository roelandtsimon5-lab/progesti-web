import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Intégration rapide de vos données",
  robots: { index: false },
};

export default function LandingIntegrationPage() {
  return (
    <LandingTemplate
      badge="Landing migration"
      headline="Nous intégrons vos données rapidement pour vous"
      subhead="La peur du changement bloque souvent plus que le prix. On s’occupe de la reprise."
      primaryCta={{ href: "/rendez-vous", label: "Planifier l’intégration" }}
      secondaryCta={{ href: "/essai-gratuit", label: "Essayer d’abord" }}
      benefits={[
        "Reprise clients / sites / contrats",
        "Paramétrage planning et équipes",
        "Formation courte aux bons gestes",
        "Go-live sans coupure d’activité",
      ]}
      objections={[
        {
          q: "Combien de temps ça prend ?",
          a: "Selon votre volume — on cadre un plan clair dès le premier échange.",
        },
        {
          q: "Qui fait le travail ?",
          a: "Vous fournissez les exports ; nous structurons l’import et la vérif.",
        },
      ]}
      formIntent="onboarding"
      formLabel="Demander un rappel intégration"
    />
  );
}
