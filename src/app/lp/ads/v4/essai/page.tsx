import type { Metadata } from "next";
import { AdsKillerLanding } from "@/components/sections/ads-v4/AdsKillerLanding";

export const metadata: Metadata = {
  title: "Essai 2 mois gratuit — PROGESTI nettoyage",
  description:
    "2 mois gratuits sans carte bancaire. Créez votre espace PROGESTI en 2 minutes. Dès 29,99 € HT/mois ensuite.",
  robots: { index: false },
};

export default function AdsV4EssaiPage() {
  return (
    <AdsKillerLanding
      campaign="ads_v4_essai"
      badge="2 mois offerts · Sans CB"
      formEyebrow="Essai gratuit"
      formTitle="Ouvrir mon essai"
      formLead="Prénom + téléphone → compte créé, accès immédiat à l’app."
      ctaLabel="Ouvrir mon essai gratuit →"
      next="trial"
      headline="2 mois gratuits. Sans carte bancaire. Accès immédiat."
      subhead="Créez votre espace PROGESTI en 2 minutes. Planning, pointage et facturation pour entreprises de nettoyage."
      bullets={[
        "Sans carte bancaire",
        "Tous modules ouverts pendant 2 mois",
        "Puis dès 29,99 € HT/mois — résiliable",
      ]}
      monthStrip="Mois 1–2 : 0 €  →  Mois 3+ : dès 29,99 € HT  →  Vous décidez"
      pains={[
        "Les concurrents offrent 7–14 jours — trop court pour valider sur le terrain",
        "Un devis opaque = vous ne savez pas ce que vous payerez",
        "Sans outil métier, l’essai “mental” Excel ne change rien",
      ]}
      before={["Essai 14 jours + CB", "Modules payants", "Devis caché", "Rappel commercial"]}
      after={["2 mois sans CB", "Tout inclus", "Prix affiché", "Vous testez librement"]}
      productTitle="Votre essai inclut tout"
      productSteps={[
        { title: "Configurez 1 site", text: "Agents, fréquences, planning — le jour même." },
        { title: "Faites pointer l’équipe", text: "Mobile terrain pendant les 2 mois." },
        { title: "Décidez au mois 3", text: "Starter, Pro, Premium — ou vous arrêtez." },
      ]}
      faq={[
        {
          q: "Vais-je être prélevé automatiquement ?",
          a: "Non. Aucune CB demandée pour démarrer. Pas de prélèvement sans votre décision.",
        },
        {
          q: "Que se passe-t-il après 2 mois ?",
          a: "Vous choisissez une offre (dès 29,99 € HT/mois) ou vous arrêtez.",
        },
        {
          q: "Puis-je ouvrir l’app tout de suite ?",
          a: "Oui. Après le formulaire, vous êtes redirigé vers la création de votre espace.",
        },
      ]}
      finalLine="2 mois pour prouver le ROI — sans risque."
    />
  );
}
