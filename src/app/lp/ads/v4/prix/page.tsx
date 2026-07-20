import type { Metadata } from "next";
import { AdsKillerLanding } from "@/components/sections/ads-v4/AdsKillerLanding";
import { formatEuro, plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dès 29,99 € HT/mois — Logiciel nettoyage PROGESTI",
  description:
    "Tarifs publics : dès 29,99 € HT/mois après 2 mois offerts. Pas de devis opaque. Tous modules inclus.",
  robots: { index: false },
};

const starter = plans[0];
const pro = plans[1];
const premium = plans[2];

export default function AdsV4PrixPage() {
  return (
    <AdsKillerLanding
      campaign="ads_v4_prix"
      badge={`Dès ${formatEuro(starter.monthly)} HT/mois`}
      formEyebrow="Tarifs publics"
      formTitle="Voir le prix et tester"
      formLead="Prénom + téléphone → accès plateforme. Prix affichés, pas de devis opaque."
      ctaLabel="Voir le prix et tester →"
      next="demo"
      headline={`Dès ${formatEuro(starter.monthly)} HT/mois — après 2 mois offerts`}
      subhead={`Starter ${formatEuro(starter.monthly)} · Pro ${formatEuro(pro.monthly)} · Premium ${formatEuro(premium.monthly)} HT/mois. Tous modules inclus. Essai 2 mois sans CB.`}
      bullets={[
        "Tarifs publics — pas de devis opaque",
        "2 mois gratuits sans carte bancaire",
        "Tous les modules dans chaque offre",
      ]}
      monthStrip={`Mois 1–2 : 0 €  →  Puis dès ${formatEuro(starter.monthly)} HT/mois`}
      pains={[
        "« Contactez-nous pour un devis » = vous perdez du temps",
        "Modules payants en plus chez beaucoup d’outils",
        "Essai court avec CB = pression pour signer trop vite",
      ]}
      before={["Devis opaque", "Modules extra", "Essai 14 j + CB", "Engagement flou"]}
      after={[
        `Dès ${formatEuro(starter.monthly)} affiché`,
        "Tout inclus",
        "2 mois sans CB",
        "Résiliable",
      ]}
      productTitle="Ce que vous payez (HT / mois)"
      productSteps={[
        {
          title: `Starter ${formatEuro(starter.monthly)}`,
          text: "1 administrateur · tous modules · sites illimités",
        },
        {
          title: `Pro ${formatEuro(pro.monthly)}`,
          text: "5 utilisateurs · le plus populaire",
        },
        {
          title: `Premium ${formatEuro(premium.monthly)}`,
          text: "20 utilisateurs · équipes qui grandissent",
        },
      ]}
      faq={[
        {
          q: "Les prix sont-ils HT ?",
          a: "Oui, tarifs HT / mois. Option annuelle = 2 mois offerts.",
        },
        {
          q: "Y a-t-il des frais cachés ?",
          a: "Non. Mise en place offerte. Tous les modules inclus dans chaque offre.",
        },
        {
          q: "Je peux tester avant de payer ?",
          a: "Oui. 2 mois sans CB. Vous ne choisissez une offre qu’au mois 3.",
        },
      ]}
      finalLine="Prix clair. Essai long. Décidez ensuite."
    />
  );
}
