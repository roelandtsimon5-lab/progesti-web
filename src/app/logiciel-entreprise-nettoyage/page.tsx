import type { Metadata } from "next";
import { IndustryLanding } from "@/components/industry/IndustryLanding";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { defaultIndustryConfig, mergeIndustryConfig } from "@/lib/industry";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const pageUrl = `${site.url}/logiciel-entreprise-nettoyage`;

const pillarFaq = [
  {
    q: "Combien coûte PROGESTI pour mon entreprise de nettoyage ?",
    a: "Gratuit pour indépendants et micro-entreprises (1 admin, tous modules). Pro 49,99 € HT/mois (5 utilisateurs), Premium 99,99 € HT/mois (20 utilisateurs). Pas de module payant en plus, pas de frais d'installation.",
  },
  {
    q: "Puis-je tester avant de m'engager ?",
    a: `Oui. Essai ${site.trialDays} jours gratuit, sans carte bancaire. Vous testez sur vos vrais sites et vos agents. Si ça ne convient pas, vous arrêtez sans justification.`,
  },
  {
    q: "Je gère tout sur Excel et WhatsApp — la migration est-elle compliquée ?",
    a: "Non. Vous pouvez reprendre vos clients, sites et contrats existants. La plupart des gérants sont opérationnels en quelques heures. L'équipe peut vous accompagner sur l'import si besoin.",
  },
  {
    q: "PROGESTI gère-t-il le planning de plusieurs sites avec différentes fréquences ?",
    a: "Oui. Vous définissez la fréquence de chaque site (quotidien, 2×/semaine, mensuel…), affectez vos agents, et le planning se répète automatiquement. Remplacements et absences se gèrent au même endroit.",
  },
  {
    q: "Comment mes agents pointent-ils sur le terrain ?",
    a: "Ils utilisent l'app mobile (Android/iOS). Arrivée, départ, géolocalisation si activée. Les données remontent au bureau en temps réel — plus de feuilles papier ni d'heures contestées.",
  },
  {
    q: "Puis-je facturer à partir du réalisé terrain sans ressaisir ?",
    a: "Oui. Le planning et le pointage alimentent directement la facturation. Vous facturez ce qui a été fait, sans double saisie ni oubli.",
  },
  {
    q: "PROGESTI convient-il à un auto-entrepreneur ou une TPE ?",
    a: "Oui. L'offre Gratuit est conçue pour indépendants et micro-entreprises (1 admin, tous modules inclus). Pro et Premium accompagnent la croissance jusqu'à 20 utilisateurs. Voir aussi : logiciel nettoyage gratuit.",
  },
  {
    q: "Y a-t-il un engagement ou des frais cachés ?",
    a: "Pas d'engagement longue durée. Vous pouvez résilier selon les conditions d'abonnement. Mise en place offerte, pas de module surprise ni de frais d'installation.",
  },
  {
    q: "Comment gérer un remplacement de dernière minute ?",
    a: "Absences et remplacements se gèrent dans le même écran que le planning. Vous voyez les agents disponibles et réaffectez en quelques clics. L'agent remplaçant reçoit la notification sur mobile.",
  },
  {
    q: "Comment contacter le support ?",
    a: `Support FR inclus, équipe à Toulouse (31). Joignable au ${site.phone}. Pas un chatbot : des gens qui comprennent le métier propreté.`,
  },
] as const;

export const metadata: Metadata = pageMeta({
  title: "Logiciel entreprise de nettoyage — Planning, pointage, facture",
  description: `Logiciel de gestion pour entreprises de nettoyage : planning multi-sites, pointage mobile, facturation du réalisé. Gratuit pour indépendants. Essai ${site.trialDays}j sans CB · Support FR ${site.phone}.`,
  path: "/logiciel-entreprise-nettoyage",
  openGraph: {
    title: "Logiciel entreprise de nettoyage — Planning, pointage, facture",
    description: `Logiciel de gestion pour entreprises de nettoyage : planning multi-sites, pointage mobile, facturation du réalisé. Gratuit pour indépendants. Essai ${site.trialDays}j sans CB.`,
  },
});

export default function PillarNettoyagePage() {
  const config = mergeIndustryConfig(defaultIndustryConfig, {
    breadcrumbs: [
      { label: "Accueil", href: "/" },
      { label: "Logiciel entreprise de nettoyage", href: "/logiciel-entreprise-nettoyage" },
    ],
    hero: {
      h1Lead: "Logiciel pour entreprise de nettoyage",
      h1: "Planning multi-sites → pointage mobile → facturation",
      sub: `Vous gérez des agents sur plusieurs sites, des fréquences différentes, des remplacements de dernière minute ? PROGESTI centralise tout : du planning à la facture, en passant par les preuves terrain. Gratuit pour indépendants, essai ${site.trialDays} jours sans CB.`,
    },
    empathy: {
      h2: "Vous êtes gérant. Votre semaine ne devrait pas ressembler à ça.",
      body: "Dimanche soir à refaire le planning sur Excel. Lundi matin à gérer une absence par SMS. Mardi à chercher qui était sur quel site. Vendredi à facturer de mémoire parce que les feuilles de pointage sont illisibles. PROGESTI remplace ce chaos : un seul outil pour affecter, pointer, prouver et facturer — bureaux, syndics, locaux pros, fin de chantier ou activité indépendante.",
    },
    compareNote: {
      before: "Vous comparez les alternatives ? Consultez notre ",
      href: "/alternative-propret",
      anchor: "comparatif Propret vs PROGESTI",
      after: ` — tarifs publics, essai ${site.trialDays} jours sans CB, support FR.`,
    },
    faq: pillarFaq,
  });

  return (
    <>
      <SoftwareApplicationLd url={pageUrl} />
      <FaqPageLd items={[...pillarFaq]} />
      <IndustryLanding config={config} />
    </>
  );
}
