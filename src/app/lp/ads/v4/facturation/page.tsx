import type { Metadata } from "next";
import { AdsKillerLanding } from "@/components/sections/ads-v4/AdsKillerLanding";

export const metadata: Metadata = {
  title: "Facturation terrain — Logiciel nettoyage PROGESTI",
  description:
    "La facture suit le réalisé. Facturation liée au terrain pour entreprises de nettoyage. Essai 2 mois sans CB, dès 29,99 € HT/mois.",
  robots: { index: false },
};

export default function AdsV4FacturationPage() {
  return (
    <AdsKillerLanding
      campaign="ads_v4_facturation"
      badge="Facturation terrain"
      formEyebrow="Facturation métier"
      formTitle="Voir la facturation"
      formLead="Prénom + téléphone → accès immédiat. La facture suit le réalisé."
      ctaLabel="Voir la facturation métier →"
      next="demo"
      headline="La facture suit le réalisé — sans double saisie"
      subhead="Planning, pointage et facturation liés pour entreprises de nettoyage. Essai 2 mois sans CB, puis dès 29,99 € HT/mois. Tous modules inclus."
      bullets={[
        "Facture alimentée par le terrain",
        "2 mois gratuits sans carte bancaire",
        "Puis dès 29,99 € HT/mois — tout inclus",
      ]}
      monthStrip="Mois 1–2 : 0 €  →  Mois 3+ : dès 29,99 € HT  →  Résiliable"
      pains={[
        "Vous ressaisissez les heures pour facturer — erreurs et retards",
        "Le réalisé terrain et la facture ne se parlent pas",
        "Vous perdez des lignes facturables faute de lien métier",
      ]}
      before={["Double saisie", "Heures perdues", "Factures en retard", "Litiges clients"]}
      after={["Réalisé → facture", "Moins d’admin", "Facture plus vite", "Preuves à l’appui"]}
      productTitle="Comment la facturation suit le terrain"
      productSteps={[
        { title: "Le terrain enregistre", text: "Pointages et passages nourrissent le réalisé." },
        { title: "Vous validez", text: "Contrôle rapide avant émission." },
        { title: "Vous facturez", text: "La facture reprend ce qui a été fait." },
      ]}
      faq={[
        {
          q: "Faut-il une carte bancaire pour tester ?",
          a: "Non. Essai 2 mois sans CB. Vous ne choisissez une offre qu’au mois 3.",
        },
        {
          q: "C’est pour mon métier nettoyage ?",
          a: "Oui. PROGESTI relie planning, pointage et facturation pour la propreté.",
        },
        {
          q: "Combien après l’essai ?",
          a: "Dès 29,99 € HT/mois (Starter). Tarifs publics, tous modules inclus.",
        },
      ]}
      finalLine="Facturez le réalisé — dès aujourd’hui, sans CB."
    />
  );
}
