import type { Metadata } from "next";
import { AdsKillerLanding } from "@/components/sections/ads-v4/AdsKillerLanding";

export const metadata: Metadata = {
  title: "Planning équipes — Logiciel nettoyage PROGESTI",
  description:
    "Agents et sites clairs, multi-sites. Planning équipes pour entreprises de nettoyage. Essai 2 mois sans CB, dès 29,99 € HT/mois.",
  robots: { index: false },
};

export default function AdsV4EquipesPage() {
  return (
    <AdsKillerLanding
      campaign="ads_v4_equipes"
      badge="Planning équipes"
      formEyebrow="Planning métier"
      formTitle="Voir le planning"
      formLead="Prénom + téléphone → accès immédiat. Agents et sites sans chaos."
      ctaLabel="Voir le planning équipes →"
      next="demo"
      headline="Agents et sites clairs, sans chaos"
      subhead="Planning agents, sites et équipes multi-sites pour entreprises de nettoyage. Essai 2 mois sans CB, puis dès 29,99 € HT/mois. Tous modules inclus."
      bullets={[
        "Affectations agents / sites lisibles",
        "2 mois gratuits sans carte bancaire",
        "Puis dès 29,99 € HT/mois — tout inclus",
      ]}
      monthStrip="Mois 1–2 : 0 €  →  Mois 3+ : dès 29,99 € HT  →  Résiliable"
      pains={[
        "Plusieurs sites, plusieurs agents — le planning devient illisible",
        "Une absence ou un remplacement casse toute la journée",
        "Le bureau passe son temps à rappeler qui va où",
      ]}
      before={["Planning flou", "Remplacements chaos", "Sites mélangés", "Appels constants"]}
      after={["Vue agents / sites", "Affectations claires", "Multi-sites géré", "Équipe informée"]}
      productTitle="Comment le planning se clarifie"
      productSteps={[
        { title: "Vous posez les sites", text: "Fréquences et besoins par client." },
        { title: "Vous affectez les agents", text: "Équipes visibles, sans double emploi." },
        { title: "Le terrain suit", text: "Pointage et réalisé rattachés au planning." },
      ]}
      faq={[
        {
          q: "Faut-il une carte bancaire pour tester ?",
          a: "Non. Essai 2 mois sans CB. Accès immédiat après le formulaire.",
        },
        {
          q: "Ça marche pour plusieurs sites ?",
          a: "Oui. PROGESTI est conçu pour les entreprises de propreté multi-sites.",
        },
        {
          q: "Combien après l’essai ?",
          a: "Dès 29,99 € HT/mois (Starter). Tarifs publics, tous modules inclus.",
        },
      ]}
      finalLine="Clarifiez vos équipes dès aujourd’hui — sans CB."
    />
  );
}
