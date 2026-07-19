import type { Metadata } from "next";
import { AdsSalesLanding } from "@/components/sections/ads-v2/AdsSalesLanding";

import { cta } from "@/lib/cta";
export const metadata: Metadata = {
  title: "Récupérez 8h d’admin — Logiciel nettoyage PROGESTI",
  description:
    "Passez de 8 heures d’administratif par semaine à quelques minutes. Planning, pointage et facturation pour entreprises de nettoyage. Essai 2 mois sans CB.",
  robots: { index: false },
};

export default function AdsV2TempsPage() {
  return (
    <AdsSalesLanding
      campaign="ads_v2_temps"
      badge="Essai 2 mois · Sans CB"
      headline="Passez de 8 heures d’administratif… à quelques minutes par jour."
      subhead="PROGESTI centralise planning, pointage terrain et facturation pour les entreprises de nettoyage — sans Excel, sans chaos WhatsApp."
      formTitle="Récupérer mon temps"
      formLead="Laissez vos coordonnées → accès immédiat à la plateforme."
      formCta="Voir comment gagner du temps →"
      primaryCtaLabel="Récupérer mon temps"
      secondaryCtaLabel="Créer mon essai 2 mois"
      secondaryHref={cta.trialApp}
      trustItems={["Sans carte bancaire", "Tous modules ouverts", "Dès 29,99€ HT/mois"]}
      proofStrip={[
        "Conçu pour la propreté",
        "Essai 2 mois sans CB",
        "Prise en main en minutes",
      ]}
      painTitle="Ce que vous coûte chaque semaine sans outil métier"
      pains={[
        {
          title: "Le dimanche soir planning",
          text: "Vous refaites le planning dans Excel pendant que vos concurrents ont déjà validé leurs équipes.",
        },
        {
          title: "Les appels agents",
          text: "« Où j’aille demain ? » — vous devenez le standardiste de votre propre entreprise.",
        },
        {
          title: "Les factures en retard",
          text: "Le réalisé se perd entre WhatsApp et le tableur. Votre trésorerie en pâtit.",
        },
      ]}
      beforeAfterTitle="Avant / après : le même métier, moins de friction"
      before={[
        "Planning Excel fragile, versions multiples",
        "Groupes WhatsApp qui débordent",
        "Pointage papier ou oublié",
        "Facturation déconnectée du terrain",
        "Aucune vision claire de l’activité",
      ]}
      after={[
        "Planning agents / sites dans un seul écran",
        "Agents qui voient leur journée dans l’app",
        "Pointage et bons d’intervention mobiles",
        "Facturation alignée sur le réalisé",
        "Cockpit pour piloter sans courir",
      ]}
      demoTitle="Ce que vous voyez en ouvrant PROGESTI"
      demoLead="Un ERP SaaS spécialisé nettoyage / services à la personne — pas un outil générique à paramétrer 3 semaines."
      demoSteps={[
        {
          title: "Planning métier",
          text: "Affectez agents et sites sans double saisie. Voyez les trous et les conflits tout de suite.",
        },
        {
          title: "Preuve terrain",
          text: "Pointage et validation des prestations depuis le mobile Android / iOS.",
        },
        {
          title: "Facturation liée",
          text: "Ce qui a été fait nourrit la facture — moins d’oublis, moins de litiges.",
        },
      ]}
      testimonials={[
        {
          quote:
            "Avant, je faisais le planning le dimanche. Maintenant c’est fait en 15 minutes le vendredi.",
          author: "Karim B.",
          role: "Gérant, 8 agents — Île-de-France",
        },
        {
          quote:
            "J’ai récupéré des soirées. L’admin ne mange plus toute ma bande passante de dirigeant.",
          author: "Élodie M.",
          role: "Dirigeante, entreprise de propreté",
        },
      ]}
      stepsTitle="Démarrer sans y passer votre week-end"
      steps={[
        {
          title: "Accédez à la plateforme",
          text: "Formulaire court → vous voyez l’outil immédiatement.",
        },
        {
          title: "Testez sur vos vrais sites",
          text: "Essai 2 mois, tous modules, sans carte bancaire.",
        },
        {
          title: "Gardez ou arrêtez",
          text: "Vous continuez seulement si ça vous fait gagner du temps.",
        },
      ]}
      faq={[
        {
          q: "Je n’ai vraiment pas le temps de changer d’outil",
          a: "C’est exactement le problème. L’essai 2 mois sans CB vous laisse valider sur un seul site client avant d’étendre. Pas de formation de 3 jours.",
        },
        {
          q: "Mes agents vont-ils s’y retrouver ?",
          a: "L’app mobile est conçue pour le terrain. La plupart des équipes comprennent le pointage le premier jour.",
        },
        {
          q: "Vais-je être harcelé par un commercial ?",
          a: "Vous testez librement. L’équipe reste dispo si vous voulez de l’aide — pas de pression pour signer le jour 1.",
        },
        {
          q: "C’est pour les grosses structures seulement ?",
          a: "Non. Starter dès 29,99€ HT/mois pour AE et petites équipes. Vous grandissez ensuite sans changer d’outil.",
        },
        {
          q: "Que se passe-t-il après les 2 mois ?",
          a: "Vous choisissez une offre — ou vous arrêtez. Aucun prélèvement sans votre décision.",
        },
      ]}
      finalTitle="Arrêtez de payer en heures ce qu’un logiciel règle en minutes"
      finalLead="Chaque semaine sans outil métier, c’est du temps de dirigeant brûlé — et de la croissance en pause."
      guarantee={[
        "Essai 2 mois sans carte bancaire",
        "Tous les modules ouverts",
        "Résiliable après l’essai",
        "Données exportables si vous partez",
      ]}
    />
  );
}
