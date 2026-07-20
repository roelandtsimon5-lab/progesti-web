import type { Metadata } from "next";
import { AdsKillerLanding } from "@/components/sections/ads-v4/AdsKillerLanding";

export const metadata: Metadata = {
  title: "Alternative Propret — Comparer PROGESTI maintenant",
  description:
    "Vous comparez Propret ? Ouvrez PROGESTI : essai 2 mois sans CB, tarifs publics dès 29,99 € HT/mois, tous modules inclus.",
  robots: { index: false },
};

export default function AdsV4PropretPage() {
  return (
    <AdsKillerLanding
      campaign="ads_v4_propret"
      badge="Alternative Propret · Sans CB"
      formEyebrow="Comparaison directe"
      formTitle="Comparer maintenant"
      formLead="Prénom + téléphone → ouvrez PROGESTI tout de suite. Pas d’attente commerciale."
      ctaLabel="Comparer avec Propret →"
      next="demo"
      headline="Vous comparez Propret ? Ouvrez PROGESTI maintenant"
      subhead="Même métier nettoyage. Essai 2× plus long, prix affiché, tous modules inclus. Voyez la différence en 10 secondes."
      bullets={[
        "Essai 2 mois sans carte bancaire",
        "Dès 29,99 € HT/mois — tarifs publics",
        "Accès immédiat, pas de devis opaque",
      ]}
      monthStrip="Eux : souvent essai court  →  PROGESTI : 2 mois offerts puis dès 29,99 € HT"
      pains={[
        "Un essai trop court ne laisse pas le temps de valider sur vos vrais sites",
        "Sans prix public, impossible de comparer honnêtement",
        "Attendre un rappel commercial ralentit votre décision",
      ]}
      before={["Essai court", "Devis à demander", "Pression commerciale", "Modules flous"]}
      after={["2 mois sans CB", "Prix affiché", "Vous testez librement", "Tout inclus"]}
      productTitle="Ce que vous vérifiez en ouvrant PROGESTI"
      productSteps={[
        { title: "Planning métier", text: "Agents / sites comme chez vous sur le terrain." },
        { title: "Pointage + preuves", text: "Mobile Android & iOS inclus." },
        { title: "Facturation liée", text: "Le réalisé nourrit la facture — sans double saisie." },
      ]}
      faq={[
        {
          q: "C’est vraiment une alternative à Propret ?",
          a: "Oui pour le même métier (entreprises de nettoyage). Comparez l’essai, le prix et l’accès immédiat.",
        },
        {
          q: "Dois-je m’engager ?",
          a: "Non. 2 mois sans CB. Vous continuez seulement si ça matche.",
        },
        {
          q: "Combien ça coûte ensuite ?",
          a: "Dès 29,99 € HT/mois. Starter, Pro ou Premium — tous modules inclus.",
        },
      ]}
      finalLine="Même métier. Essai plus long. Prix affiché. Comparez maintenant."
    />
  );
}
