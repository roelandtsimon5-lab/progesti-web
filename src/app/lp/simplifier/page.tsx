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
      headline="Le logiciel qui simplifie la gestion de votre entreprise de nettoyage"
      subhead="Stop Excel et WhatsApp. Planning, pointage et facturation dans un seul outil — demandez une démo ou démarrez l’essai."
      primaryCta={{ href: cta.trialApp, label: "Essai gratuit 2 mois" }}
      secondaryCta={{ href: "/demo", label: "Démo interactive" }}
      formTitle="Demander une démo / être recontacté"
      formLead="Réponse sous 24h ouvrées. Ou lancez la démo interactive sur /demo."
      formIntent="demo"
      formLabel="Envoyer ma demande"
      benefits={[
        "Planning agents / sites sans double saisie",
        "Pointage et bons d’intervention sur mobile",
        "Facturation alignée sur le réalisé",
        "Vision claire de l’activité en un cockpit",
      ]}
      objections={[
        {
          q: "Je n’ai pas le temps de changer d’outil",
          a: "Essai 2 mois sans CB + démarrage en quelques minutes. La démo interactive dure moins d’une minute pour se faire une idée.",
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
    />
  );
}
