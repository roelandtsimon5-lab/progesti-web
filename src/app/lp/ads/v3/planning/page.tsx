import type { Metadata } from "next";
import { AdsGoogleLanding } from "@/components/sections/ads-v3/AdsGoogleLanding";
import { cta } from "@/lib/cta";
import { formatEuro, plans, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Logiciel planning nettoyage — Essai 2 mois PROGESTI",
  description:
    "Planning agents et sites en 15 minutes, pas 3 heures le dimanche. Logiciel métier pour entreprises de nettoyage. Essai 2 mois sans CB, dès 29,99 € HT/mois.",
  robots: { index: false },
};

const starter = plans[0];

export default function AdsV3PlanningPage() {
  return (
    <AdsGoogleLanding
      campaign="ads_v3_planning"
      badge="Planning métier · Essai 2 mois"
      priceAnchor={`Essai ${site.trialMonths} mois · puis ${formatEuro(starter.monthly)} HT/mois`}
      headline="Votre planning agents & sites en 15 minutes — pas 3 heures le dimanche."
      subhead="PROGESTI remplace Excel et WhatsApp pour planifier vos équipes de nettoyage. Pointage terrain et facturation dans le même flux. Testez 2 mois sans carte bancaire."
      formType="lead"
      formTitle="Voir mon planning métier"
      formLead="Prénom + email → accès immédiat à la plateforme. Sans carte bancaire."
      formCta="Ouvrir le planning PROGESTI →"
      primaryCtaLabel="Voir mon planning métier"
      secondaryCtaLabel="Créer mon essai 2 mois"
      secondaryHref={cta.trialApp}
      trustItems={[
        "Planning agents / sites unifié",
        `${site.trialMonths} mois sans CB`,
        `Dès ${formatEuro(starter.monthly)} HT/mois`,
      ]}
      monthTimelineTitle="De l’essai au planning qui tourne — mois par mois"
      monthTimelineLead="Chaque mois a un objectif clair. Vous savez où vous en êtes avant de payer quoi que ce soit."
      months={[
        {
          label: "Mois 1",
          price: "0 €",
          detail: "Vous recréez votre planning actuel dans PROGESTI. Agents, sites, fréquences — sans Excel.",
          highlight: true,
        },
        {
          label: "Mois 2",
          price: "0 €",
          detail: "Vos agents pointent sur mobile. Vous mesurez : combien d’heures admin économisées par semaine ?",
          highlight: true,
        },
        {
          label: "Mois 3+",
          price: `dès ${formatEuro(starter.monthly)}`,
          detail: "Le planning tourne seul. Vous facturez le réalisé. Vous continuez ou vous arrêtez librement.",
        },
      ]}
      roiTitle="Combien vous coûte votre planning Excel chaque mois ?"
      roiLead="Un gérant qui refait le planning 3 h le dimanche × 4 semaines = 12 h/mois. À 45 €/h, c’est 540 € brûlés."
      roiItems={[
        {
          label: "Planning Excel + WhatsApp",
          value: "~540 €/mois",
          note: "12 h/mois de dirigeant × 45 €/h — sans compter les erreurs d’affectation",
        },
        {
          label: "Planning PROGESTI",
          value: `${formatEuro(starter.monthly)}/mois`,
          note: "Starter · 1 admin · planning + pointage + facturation inclus",
        },
        {
          label: "Temps récupéré",
          value: "12 h/mois",
          note: "Soit 3 h par semaine réinvesties en prospection ou pilotage qualité",
        },
      ]}
      painTitle="Pourquoi Excel ne tient plus quand vous grandissez"
      pains={[
        {
          title: "Le dimanche soir planning",
          text: "3 heures à jongler avec les absences pendant que vos concurrents ont déjà validé leurs équipes.",
        },
        {
          title: "« Où j’aille demain ? »",
          text: "15 appels par semaine. Vous êtes le standardiste de votre propre entreprise.",
        },
        {
          title: "Versions qui divergent",
          text: "Le fichier bureau ≠ le fichier téléphone. Un agent arrive au mauvais immeuble.",
        },
      ]}
      beforeAfterTitle="Planning Excel vs planning PROGESTI"
      before={[
        "Tableur fragile, formules cassées",
        "Absences gérées par SMS et appels",
        "Agents sans visibilité sur leur semaine",
        "Facturation déconnectée du planning",
        "Dimanche soir = 3 h perdues",
      ]}
      after={[
        "Planning agents ↔ sites en un écran",
        "Remplacements visibles instantanément",
        "App mobile : chaque agent voit sa journée",
        "Facture nourrie par le réalisé terrain",
        "Planning hebdo en 15 minutes le vendredi",
      ]}
      demoTitle="Le planning que vous ouvrez le lundi matin"
      demoLead="Affectations claires, conflits visibles, agents informés — sans ouvrir Excel ni WhatsApp."
      demoSteps={[
        {
          title: "Affectez en glisser-déposer",
          text: "Agents, sites, fréquences. Les trous et doubles réservations sautent aux yeux.",
        },
        {
          title: "Les agents voient leur journée",
          text: "Consignes et horaires dans l’app mobile. Fini les appels « c’est où déjà ? ».",
        },
        {
          title: "Le réalisé alimente la facture",
          text: "Pointage validé → prestation comptabilisée. Moins d’oublis en fin de mois.",
        },
      ]}
      testimonials={[
        {
          quote:
            "Avant, je faisais le planning le dimanche. Maintenant c’est fait en 15 minutes le vendredi.",
          author: "Karim B.",
          role: "Gérant, 8 agents — Île-de-France",
        },
        {
          quote:
            "Excel tenait tant qu’on était 3. À 9 agents, c’était dangereux. PROGESTI a calmé le chaos.",
          author: "Thomas L.",
          role: "Gérant société de nettoyage",
        },
      ]}
      stepsTitle="Votre planning opérationnel en 3 semaines"
      steps={[
        {
          title: "Semaine 1 : importez vos sites",
          text: "Accès immédiat après le formulaire. Vous recréez un premier planning réel.",
        },
        {
          title: "Semaine 2–4 : testez avec l’équipe",
          text: "Essai 2 mois sans CB. Vos agents pointent, vous mesurez le gain.",
        },
        {
          title: "Mois 3 : vous décidez",
          text: `Starter dès ${formatEuro(starter.monthly)} HT/mois ou vous repassez à Excel. Votre choix.`,
        },
      ]}
      faq={[
        {
          q: "Est-ce que je peux importer mon Excel ?",
          a: "Oui. Vous démarrez avec vos sites et agents. Pour une reprise plus large, l’équipe peut accompagner.",
        },
        {
          q: "Mes agents vont-ils comprendre l’app ?",
          a: "L’app mobile est conçue pour le terrain. La plupart des équipes comprennent le pointage le premier jour.",
        },
        {
          q: "Combien de temps pour un planning opérationnel ?",
          a: "Souvent le jour même pour un premier site. L’essai 2 mois laisse le temps d’ancrer les bons gestes.",
        },
        {
          q: "C’est adapté aux syndics et multi-sites ?",
          a: "Oui. Sites illimités, fréquences récurrentes, reporting par immeuble — pensé pour la propreté multi-sites.",
        },
        {
          q: "Que se passe-t-il après les 2 mois ?",
          a: `Vous choisissez une offre (dès ${formatEuro(starter.monthly)} HT/mois) ou vous arrêtez. Aucune CB demandée pour démarrer.`,
        },
      ]}
      finalTitle="Arrêtez de planifier dans Excel. Testez 2 mois gratuitement."
      finalLead="540 € de temps dirigeant économisé pour 29,99 €/mois — le planning métier se paie tout seul."
      guarantee={[
        `${site.trialMonths} mois sans carte bancaire`,
        "Planning + pointage + facturation",
        `Dès ${formatEuro(starter.monthly)} HT/mois après l’essai`,
        "Sites et agents illimités",
        "Apps Android & iOS",
      ]}
    />
  );
}
