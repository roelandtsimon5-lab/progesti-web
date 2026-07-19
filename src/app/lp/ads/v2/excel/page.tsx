import type { Metadata } from "next";
import { AdsSalesLanding } from "@/components/sections/ads-v2/AdsSalesLanding";

import { cta } from "@/lib/cta";
export const metadata: Metadata = {
  title: "Stop Excel & WhatsApp — Logiciel planning nettoyage",
  description:
    "Remplacez Excel et WhatsApp par un logiciel métier : planning agents/sites, pointage terrain, facturation. Essai 2 mois sans carte bancaire.",
  robots: { index: false },
};

export default function AdsV2ExcelPage() {
  return (
    <AdsSalesLanding
      campaign="ads_v2_excel"
      badge="Remplace Excel · Essai 2 mois"
      headline="Stop Excel & WhatsApp. Un seul logiciel pour votre boîte de nettoyage."
      subhead="Affectez vos agents, validez le terrain, facturez le réalisé — dans le même outil. Conçu pour les entreprises de propreté et services à la personne."
      formTitle="Voir mon planning métier"
      formLead="Prénom + email → accès plateforme immédiat. Sans carte bancaire."
      formCta="Ouvrir le planning PROGESTI →"
      primaryCtaLabel="Voir mon planning métier"
      secondaryCtaLabel="Créer mon essai gratuit"
      secondaryHref={cta.trialApp}
      trustItems={["Sans double saisie", "Mobile terrain", "Dès 29,99€ HT/mois"]}
      proofStrip={[
        "Planning agents / sites",
        "Pointage + bons",
        "Facture liée au réalisé",
      ]}
      painTitle="Excel et WhatsApp ne scalent pas une boîte de nettoyage"
      pains={[
        {
          title: "Versions qui divergent",
          text: "Le fichier du bureau n’est plus celui du téléphone. Un agent arrive au mauvais site.",
        },
        {
          title: "Messages perdus",
          text: "Absences, remplacements, photos d’intervention : tout se noie dans les conversations.",
        },
        {
          title: "Double (et triple) saisie",
          text: "Vous re-tapez le planning pour facturer. Chaque heure perdue est une heure non vendue.",
        },
      ]}
      beforeAfterTitle="Excel / WhatsApp vs PROGESTI"
      before={[
        "Tableaux fragiles, formules cassées",
        "Messages WhatsApp éparpillés",
        "Photos et preuves perdues",
        "Facturation manuelle en fin de mois",
        "Aucune vision d’activité temps réel",
      ]}
      after={[
        "Planning métier clair agents ↔ sites",
        "Consignes et planning dans l’app",
        "Pointage + bons d’intervention",
        "Facturation nourrie par le terrain",
        "Cockpit d’activité en un coup d’œil",
      ]}
      demoTitle="Du planning à la facture, sans ressaisie"
      demoLead="PROGESTI n’est pas « encore un tableur en ligne ». C’est un flux métier nettoyage : planifier → pointer → facturer."
      demoSteps={[
        {
          title: "Planifiez une fois",
          text: "Créez les affectations agents / sites. Les conflits et trous sautent aux yeux.",
        },
        {
          title: "Le terrain confirme",
          text: "Vos agents pointent et valident sur mobile. Fini le « t’étais où ce matin ? ».",
        },
        {
          title: "Vous facturez le réel",
          text: "La facture suit le réalisé. Moins d’oublis, moins de litiges clients.",
        },
      ]}
      testimonials={[
        {
          quote:
            "On a arrêté les groupes WhatsApp de planning. Les agents voient leur journée dans l’app.",
          author: "Nadia R.",
          role: "Responsable multi-sites",
        },
        {
          quote:
            "Excel tenait tant qu’on était 3. À 9 agents, c’était devenu dangereux. PROGESTI a calmé le chaos.",
          author: "Thomas L.",
          role: "Gérant société de nettoyage",
        },
      ]}
      stepsTitle="Remplacer Excel sans tout casser"
      steps={[
        {
          title: "Voyez l’outil",
          text: "Accès immédiat à la plateforme après le formulaire.",
        },
        {
          title: "Reproduisez 1 site client",
          text: "Testez le flux planning → pointage → facture sur un cas réel.",
        },
        {
          title: "Étendez à toute l’équipe",
          text: "Quand c’est clair, vous basculez le reste — essai 2 mois pour le faire sereinement.",
        },
      ]}
      faq={[
        {
          q: "Est-ce que je peux importer mon Excel ?",
          a: "Oui, vous démarrez avec vos sites et agents. Pour une reprise plus large, on peut accompagner l’intégration.",
        },
        {
          q: "Mes agents n’ont pas tous un bon smartphone",
          a: "L’app Android / iOS est légère. Le bureau reste utilisable pour ceux qui gèrent depuis un PC.",
        },
        {
          q: "On est habitués à WhatsApp, pourquoi changer ?",
          a: "WhatsApp est parfait pour discuter. Il est catastrophique pour un planning fiable et une facturation propre. PROGESTI garde le fil métier.",
        },
        {
          q: "Combien de temps pour être opérationnel ?",
          a: "Souvent le jour même pour un premier planning. L’essai 2 mois laisse le temps d’ancrer les bons gestes.",
        },
        {
          q: "Et si ça ne me convient pas ?",
          a: "Vous arrêtez après l’essai. Aucune CB n’est demandée pour démarrer.",
        },
      ]}
      finalTitle="Un seul outil. Zéro chaos de fichiers."
      finalLead="Arrêtez de piloter une entreprise de nettoyage avec des tableurs et des messages. Passez au logiciel métier."
      guarantee={[
        "Essai 2 mois sans carte bancaire",
        "Tous modules inclus",
        "Cloud + mobile Android / iOS",
        "Tarifs publics dès 29,99€ HT/mois",
      ]}
    />
  );
}
