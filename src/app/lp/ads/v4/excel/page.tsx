import type { Metadata } from "next";
import { AdsKillerLanding } from "@/components/sections/ads-v4/AdsKillerLanding";

export const metadata: Metadata = {
  title: "Stop Excel & WhatsApp — Planning nettoyage PROGESTI",
  description:
    "Remplacez Excel et WhatsApp. Planning agents/sites, pointage, facturation. Essai 2 mois sans CB.",
  robots: { index: false },
};

export default function AdsV4ExcelPage() {
  return (
    <AdsKillerLanding
      campaign="ads_v4_excel"
      badge="Remplace Excel · Sans CB"
      formEyebrow="Accès immédiat"
      formTitle="Voir mon planning métier"
      formLead="Prénom + téléphone → vous voyez le planning PROGESTI tout de suite."
      ctaLabel="Voir mon planning métier →"
      next="demo"
      headline="Stop Excel & WhatsApp. Un planning qui tient vraiment."
      subhead="Remplacez le tableur du dimanche soir. Agents, sites, pointage et facture dans le même flux — spécial nettoyage."
      bullets={[
        "Planning agents ↔ sites en un écran",
        "Plus de versions Excel qui divergent",
        "Essai 2 mois sans carte bancaire",
      ]}
      monthStrip="Mois 1–2 : 0 € pour basculer  →  Puis dès 29,99 € HT/mois"
      pains={[
        "Le fichier bureau ≠ le fichier téléphone → mauvais site",
        "Absences et remplacements noyés dans WhatsApp",
        "Vous refaites le planning 3 h le dimanche",
      ]}
      before={["Tableur fragile", "Groupes WhatsApp", "Appels « où j’aille ? »", "Double saisie"]}
      after={["Planning unifié", "App agents", "Consignes claires", "Facture liée"]}
      productTitle="Du planning à la facture, sans ressaisie"
      productSteps={[
        { title: "Planifiez une fois", text: "Affectations et conflits visibles immédiatement." },
        { title: "Le terrain confirme", text: "Pointage mobile — fini le flou." },
        { title: "Vous facturez le réel", text: "Moins d’oublis en fin de mois." },
      ]}
      faq={[
        {
          q: "Puis-je repartir de mon Excel ?",
          a: "Oui. Vous recréez sites et agents rapidement. L’essai 2 mois laisse le temps de basculer.",
        },
        {
          q: "Mes agents vont s’y retrouver ?",
          a: "L’app mobile est conçue pour le terrain. La plupart comprennent le pointage le premier jour.",
        },
        {
          q: "Faut-il une CB ?",
          a: "Non pour démarrer. Essai 2 mois sans carte bancaire.",
        },
      ]}
      finalLine="Arrêtez le chaos Excel. Voyez le planning métier."
    />
  );
}
