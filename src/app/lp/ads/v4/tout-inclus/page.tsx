import type { Metadata } from "next";
import { AdsKillerLanding } from "@/components/sections/ads-v4/AdsKillerLanding";

export const metadata: Metadata = {
  title: "Tout inclus — Logiciel nettoyage PROGESTI",
  description:
    "Un prix clair, tous les modules inclus. Planning, pointage, facturation. Essai 2 mois sans CB, dès 29,99 € HT/mois.",
  robots: { index: false },
};

export default function AdsV4ToutInclusPage() {
  return (
    <AdsKillerLanding
      campaign="ads_v4_tout_inclus"
      badge="Tout inclus"
      formEyebrow="Offre claire"
      formTitle="Voir l’offre"
      formLead="Prénom + téléphone → accès immédiat. Un prix, tous les modules."
      ctaLabel="Voir l’offre tout inclus →"
      next="demo"
      headline="Un prix clair, tous les modules"
      subhead="Planning, pointage et facturation inclus — sans modules surprise. Essai 2 mois sans CB pour entreprises de nettoyage, puis dès 29,99 € HT/mois."
      bullets={[
        "Tous modules dans chaque offre",
        "2 mois gratuits sans carte bancaire",
        "Puis dès 29,99 € HT/mois — tarifs publics",
      ]}
      monthStrip="Mois 1–2 : 0 €  →  Mois 3+ : dès 29,99 € HT  →  Résiliable"
      pains={[
        "Beaucoup d’outils vendent le planning, puis facturent le reste à part",
        "Un devis opaque cache le vrai coût une fois les modules ajoutés",
        "Vous ne voulez pas payer trois fois pour un seul métier",
      ]}
      before={["Modules extra", "Devis opaque", "Prix qui gonfle", "Surprises mois 2"]}
      after={["Tout inclus", "Prix affiché", "Dès 29,99 € HT", "Essai 2 mois"]}
      productTitle="Ce qui est inclus dès le départ"
      productSteps={[
        { title: "Planning équipes / sites", text: "Affectations métier, multi-sites." },
        { title: "Pointage mobile", text: "Preuves terrain Android & iOS." },
        { title: "Facturation liée", text: "Le réalisé nourrit la facture." },
      ]}
      faq={[
        {
          q: "Y a-t-il des modules payants en plus ?",
          a: "Non. Tous les modules sont inclus dans chaque offre. Tarifs publics.",
        },
        {
          q: "Faut-il une carte bancaire pour démarrer ?",
          a: "Non. Essai 2 mois sans CB. Vous choisissez une offre au mois 3.",
        },
        {
          q: "Quel est le prix après l’essai ?",
          a: "Dès 29,99 € HT/mois (Starter). Pro et Premium selon le nombre d’utilisateurs.",
        },
      ]}
      finalLine="Prix clair. Modules inclus. Testez 2 mois sans CB."
    />
  );
}
