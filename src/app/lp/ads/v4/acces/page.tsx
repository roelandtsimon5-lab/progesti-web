import type { Metadata } from "next";
import { AdsKillerLanding } from "@/components/sections/ads-v4/AdsKillerLanding";

export const metadata: Metadata = {
  title: "Voir PROGESTI maintenant — Logiciel nettoyage",
  description:
    "Testez le logiciel de nettoyage en 10 secondes. Prénom + téléphone → accès immédiat. Essai 2 mois sans CB.",
  robots: { index: false },
};

export default function AdsV4AccesPage() {
  return (
    <AdsKillerLanding
      campaign="ads_v4_acces"
      badge="Essai 2 mois · Sans CB"
      formEyebrow="Accès immédiat"
      formTitle="Voir la plateforme"
      formLead="Prénom + téléphone → accès direct."
      ctaLabel="Voir la plateforme →"
      next="demo"
      headline="Testez le logiciel de nettoyage en 10 secondes"
      subhead="Entrez votre prénom et votre téléphone pour ouvrir la plateforme immédiatement. Conçu pour les entreprises de propreté."
      bullets={[
        "Essai 2 mois sans carte bancaire",
        "Tous les modules inclus",
        "Dès 29,99 € HT/mois après l’essai",
      ]}
      monthStrip="Mois 1–2 : 0 €  →  Mois 3+ : dès 29,99 € HT  →  Résiliable"
      pains={[
        "Planning Excel + WhatsApp : erreurs et appels en boucle",
        "Factures en retard faute de lien avec le terrain",
        "Vous perdez des heures d’admin au lieu de vendre",
      ]}
      before={["Excel fragile", "Messages perdus", "Pas de preuves", "Facturation manuelle"]}
      after={["Planning métier", "App agents", "Pointage + bons", "Facture liée au réalisé"]}
      productTitle="Ce que vous ouvrez tout de suite"
      productSteps={[
        { title: "Planning agents / sites", text: "Affectations claires, sans double saisie." },
        { title: "Pointage mobile", text: "Preuves terrain sur Android & iOS." },
        { title: "Facturation", text: "Le réalisé nourrit la facture." },
      ]}
      faq={[
        {
          q: "Faut-il une carte bancaire ?",
          a: "Non. Essai 2 mois sans CB. Vous ne payez qu’à partir du mois 3 si vous continuez.",
        },
        {
          q: "C’est pour mon métier nettoyage ?",
          a: "Oui. PROGESTI est conçu pour la propreté : planning, pointage, bons, facturation.",
        },
        {
          q: "Combien après l’essai ?",
          a: "Dès 29,99 € HT/mois (Starter). Tarifs publics, tous modules inclus.",
        },
      ]}
      finalLine="Voyez PROGESTI maintenant — sans rendez-vous."
    />
  );
}
