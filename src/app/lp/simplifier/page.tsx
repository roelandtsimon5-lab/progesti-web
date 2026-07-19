import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

import { cta } from "@/lib/cta";
export const metadata: Metadata = {
  title: "Simplifiez la gestion de votre entreprise de nettoyage",
  robots: { index: false },
};

export default function LandingSimplifierPage() {
  return (
    <LandingTemplate
      badge="Landing conversion"
      headline="Le logiciel qui simplifie radicalement la gestion de votre entreprise de nettoyage"
      subhead="Stop Excel et WhatsApp. Planning, pointage et facturation dans un seul outil."
      primaryCta={{ href: cta.trialApp, label: "Commencez gratuitement" }}
      secondaryCta={{ href: "/demo", label: "Voir une démonstration" }}
      benefits={[
        "Planning agents / sites sans double saisie",
        "Pointage et bons d’intervention sur mobile",
        "Facturation alignée sur le réalisé",
        "Vision claire de l’activité en un cockpit",
      ]}
      objections={[
        {
          q: "Je n’ai pas le temps de changer d’outil",
          a: "Essai 2 mois sans CB + démarrage en quelques minutes.",
        },
        {
          q: "C’est trop cher pour un AE",
          a: "Starter à 29,99€ HT/mois, tous modules inclus.",
        },
        {
          q: "Et si ça ne me convient pas ?",
          a: "Vous testez 2 mois. Ensuite vous continuez ou vous arrêtez.",
        },
      ]}
      formIntent="demo"
      formLabel="Être recontacté"
    />
  );
}
