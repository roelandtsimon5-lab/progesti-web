import type { Metadata } from "next";
import { AdsGoogleLanding } from "@/components/sections/ads-v3/AdsGoogleLanding";
import { cta } from "@/lib/cta";
import { formatEuro, plans, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Logiciel nettoyage syndics & copropriétés — PROGESTI",
  description:
    "Planning parties communes, preuves de passage et reporting syndic. Multi-immeubles. Essai 2 mois sans CB, dès 29,99 € HT/mois.",
  robots: { index: false },
};

const starter = plans[0];

export default function AdsV3SyndicPage() {
  return (
    <AdsGoogleLanding
      campaign="ads_v3_syndic"
      badge="Syndics · Essai 2 mois"
      priceAnchor={`Essai ${site.trialMonths} mois · puis ${formatEuro(starter.monthly)} HT/mois`}
      headline="Parties communes multi-sites : planning, preuves et reporting syndic."
      subhead="PROGESTI pilote halls, cages d’escalier et locaux techniques sur tous vos immeubles — sans Excel, sans litiges de passage. Testez 2 mois sans carte bancaire."
      formType="lead"
      formTitle="Voir le planning multi-sites"
      formLead="Prénom + email → accès immédiat. Sans carte bancaire. Conçu pour les entreprises qui travaillent avec des syndics."
      formCta="Ouvrir PROGESTI pour syndics →"
      primaryCtaLabel="Voir le planning multi-sites"
      secondaryCtaLabel="Créer mon essai 2 mois"
      secondaryHref={cta.trialApp}
      trustItems={[
        "Sites & immeubles illimités",
        `${site.trialMonths} mois sans CB`,
        `Dès ${formatEuro(starter.monthly)} HT/mois`,
      ]}
      monthTimelineTitle="De l’essai au reporting syndic — mois par mois"
      monthTimelineLead="Vous structurez vos copropriétés avant de payer. Chaque mois a un objectif clair."
      months={[
        {
          label: "Mois 1",
          price: "0 €",
          detail:
            "Vous créez vos immeubles, halls et fréquences. Un premier planning parties communes opérationnel.",
          highlight: true,
        },
        {
          label: "Mois 2",
          price: "0 €",
          detail:
            "Vos agents pointent et capturent les preuves. Vous testez un reporting simple pour un syndic.",
          highlight: true,
        },
        {
          label: "Mois 3+",
          price: `dès ${formatEuro(starter.monthly)}`,
          detail:
            "Multi-sites en production. Vous facturez le réalisé. Vous continuez ou vous arrêtez librement.",
        },
      ]}
      roiTitle="Ce que vous coûte le chaos multi-immeubles chaque mois"
      roiLead="Un litige de passage non prouvé ou une prestation oubliée = souvent 150 à 400 €. Sur 20 immeubles, ça s’accumule vite."
      roiItems={[
        {
          label: "Sans preuves terrain",
          value: "~300 €/mois",
          note: "1 litige / oubli facturé évité par mois sur un portefeuille moyen",
        },
        {
          label: "Coût PROGESTI Starter",
          value: `${formatEuro(starter.monthly)}/mois`,
          note: "Sites illimités · planning · pointage · facturation · HT",
        },
        {
          label: "Temps admin multi-sites",
          value: "8–12 h/mois",
          note: "Récupérées quand le planning et les preuves sont dans le même outil",
        },
      ]}
      painTitle="Pourquoi Excel explose dès que vous avez plus de 10 immeubles"
      pains={[
        {
          title: "Le syndic veut des preuves",
          text: "« Vous n’êtes pas passés » — sans photo ni pointage, vous perdez la discussion… et parfois le contrat.",
        },
        {
          title: "Remplacements en urgence",
          text: "Absences, accès, codes : tout se gère par WhatsApp. Un agent rate un hall, le syndic appelle.",
        },
        {
          title: "Facturation éparpillée",
          text: "Chaque immeuble a sa fréquence. Vous refacturez à la main et oubliez des prestations.",
        },
      ]}
      beforeAfterTitle="Multi-immeubles Excel vs PROGESTI"
      before={[
        "Un tableur (ou 5) par secteur / syndic",
        "Preuves perdues dans les téléphones",
        "Reporting manuel la veille de la réunion",
        "Factures incompletes en fin de mois",
        "Aucun cockpit « qui est où ce matin »",
      ]}
      after={[
        "Tous les immeubles dans un seul planning",
        "Pointage + preuves depuis le mobile",
        "Historique clair pour répondre au syndic",
        "Facturation alignée sur le réalisé",
        "Vision multi-sites en un coup d’œil",
      ]}
      demoTitle="Ce que voit un gérant multi-sites dans PROGESTI"
      demoLead="Un flux métier copropriété : planifier → pointer → prouver → facturer."
      demoSteps={[
        {
          title: "Planifiez par immeuble",
          text: "Halls, cages, locaux techniques : fréquences et agents sans double saisie.",
        },
        {
          title: "Preuves de passage",
          text: "Pointage mobile et bons d’intervention. Vous documentez avant que le syndic demande.",
        },
        {
          title: "Facturez le réalisé",
          text: "Moins d’oublis, moins de litiges, trésorerie plus propre en fin de mois.",
        },
      ]}
      testimonials={[
        {
          quote:
            "On a 28 immeubles. Avant, le reporting syndic était un enfer. Maintenant les preuves sont dans l’outil.",
          author: "Amina K.",
          role: "Responsable exploitation — propreté immobilière",
        },
        {
          quote:
            "Le mois 2 d’essai a suffi : les agents pointent, je facture sans courir après les infos.",
          author: "Julien P.",
          role: "Gérant, nettoyage parties communes",
        },
      ]}
      stepsTitle="Structurer vos copropriétés en 3 étapes"
      steps={[
        {
          title: "Semaine 1 : 3 immeubles pilotes",
          text: "Accès immédiat après le formulaire. Vous recréez un premier portefeuille réel.",
        },
        {
          title: "Mois 1–2 : preuves + équipe",
          text: "Essai sans CB. Vos agents pointent, vous montrez un reporting à un syndic.",
        },
        {
          title: "Mois 3 : vous décidez",
          text: `Starter dès ${formatEuro(starter.monthly)} HT/mois ou vous arrêtez. Aucune CB pour démarrer.`,
        },
      ]}
      faq={[
        {
          q: "C’est adapté aux contrats syndic / multi-sites ?",
          a: "Oui. Sites illimités, fréquences récurrentes, pointage et preuves — pensé pour la propreté immobilière.",
        },
        {
          q: "Puis-je produire un reporting pour le syndic ?",
          a: "Vous centralisez passages et preuves. L’historique sert à répondre vite en cas de litige ou de réunion.",
        },
        {
          q: "Mes agents gèrent plusieurs immeubles le même jour",
          a: "Le planning et l’app mobile montrent la tournée. Moins d’oublis de hall ou de cage d’escalier.",
        },
        {
          q: "Combien coûte PROGESTI après l’essai ?",
          a: `Dès ${formatEuro(starter.monthly)} HT/mois (Starter). Pro ${formatEuro(plans[1].monthly)} HT/mois pour 5 utilisateurs. Tous modules inclus.`,
        },
        {
          q: "Faut-il une carte bancaire pour les 2 mois ?",
          a: "Non. Essai sans CB. Au mois 3, vous choisissez une offre ou vous arrêtez — aucun prélèvement sans votre décision.",
        },
      ]}
      finalTitle="Multi-immeubles sous contrôle. Essai 2 mois sans CB."
      finalLead="Planning, preuves et facturation pour vos contrats syndic — dès 29,99 € HT/mois après l’essai."
      guarantee={[
        `${site.trialMonths} mois sans carte bancaire`,
        "Sites et immeubles illimités",
        "Planning + pointage + preuves",
        `Dès ${formatEuro(starter.monthly)} HT/mois après l’essai`,
        "Apps Android & iOS",
      ]}
    />
  );
}
