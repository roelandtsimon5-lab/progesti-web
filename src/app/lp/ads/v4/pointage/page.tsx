import type { Metadata } from "next";
import { AdsKillerLanding } from "@/components/sections/ads-v4/AdsKillerLanding";

export const metadata: Metadata = {
  title: "Pointage mobile — Logiciel nettoyage PROGESTI",
  description:
    "Preuves de passage sur Android & iOS. Pointage mobile pour entreprises de nettoyage. Essai 2 mois sans CB, dès 29,99 € HT/mois.",
  robots: { index: false },
};

export default function AdsV4PointagePage() {
  return (
    <AdsKillerLanding
      campaign="ads_v4_pointage"
      badge="Pointage mobile"
      formEyebrow="Pointage terrain"
      formTitle="Voir le pointage"
      formLead="Prénom + téléphone → accès immédiat. Preuves sur Android & iOS."
      ctaLabel="Voir le pointage mobile →"
      next="demo"
      headline="Preuves terrain sur Android & iOS"
      subhead="Pointage mobile et preuves de passage pour entreprises de nettoyage. Essai 2 mois sans CB, puis dès 29,99 € HT/mois. Tous modules inclus."
      bullets={[
        "Pointage agents sur mobile",
        "2 mois gratuits sans carte bancaire",
        "Puis dès 29,99 € HT/mois — tout inclus",
      ]}
      monthStrip="Mois 1–2 : 0 €  →  Mois 3+ : dès 29,99 € HT  →  Résiliable"
      pains={[
        "Sans preuve de passage, les litiges clients s’éternisent",
        "Le bureau ne sait pas qui a réellement fait le site",
        "Les heures terrain restent floues jusqu’à la paie ou la facture",
      ]}
      before={["Pas de preuve", "Appels en boucle", "Heures floues", "Litiges clients"]}
      after={["Pointage mobile", "Preuves terrain", "Heures claires", "Bureau informé"]}
      productTitle="Ce que vos agents font sur le terrain"
      productSteps={[
        { title: "Ils pointent sur mobile", text: "Android & iOS, directement sur site." },
        { title: "Vous voyez le passage", text: "Qui, où, quand — sans relancer l’équipe." },
        { title: "Vous utilisez le réalisé", text: "Planning et facturation s’appuient dessus." },
      ]}
      faq={[
        {
          q: "Faut-il une carte bancaire pour tester ?",
          a: "Non. Essai 2 mois sans CB. Vous ne payez qu’à partir du mois 3 si vous continuez.",
        },
        {
          q: "Ça marche sur Android et iPhone ?",
          a: "Oui. Le pointage mobile est pensé pour les agents sur le terrain.",
        },
        {
          q: "Combien après l’essai ?",
          a: "Dès 29,99 € HT/mois (Starter). Tarifs publics, tous modules inclus.",
        },
      ]}
      finalLine="Des preuves terrain dès aujourd’hui — sans CB."
    />
  );
}
