import type { Metadata } from "next";
import { IndustryLanding } from "@/components/industry/IndustryLanding";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { ReviewsLd } from "@/components/seo/ReviewsLd";
import { defaultIndustryConfig, mergeIndustryConfig, defaultPillars } from "@/lib/industry";
import type { IndustryPillar } from "@/lib/industry";
import { pageMeta } from "@/lib/seo";
import { trialCopy } from "@/lib/site";

const homePillars: readonly IndustryPillar[] = [
  {
    id: "travailler-mieux",
    label: "Travailler mieux",
    icon: "clipboard",
    features: [
      {
        id: "planning",
        label: "Planning multi-sites",
        panelTitle: "Affectez chaque agent au bon site, au bon moment",
        panelBody:
          "Définissez fréquences et affectations une fois : les passages se répètent sans reconstruire la semaine. Vue par agent ou par site, statuts visibles, changements d'urgence sans perdre le fil.",
        mock: "planning-map",
        href: "/logiciel-planning-nettoyage",
      },
      {
        id: "pointage",
        label: "Pointage & télégestion",
        panelTitle: "Pointage mobile — arrivée, départ, géoloc",
        panelBody:
          "Les agents pointent sur mobile (arrivée, départ, géoloc). Moins de feuilles papier, moins d'heures contestées, une vision claire de qui est où.",
        mock: "telegestion",
        href: "/fonctionnalites/pointage",
      },
      {
        id: "preuves-passages",
        label: "Preuves de passages",
        panelTitle: "Historique et preuves pour vos clients",
        panelBody:
          "Suivez les passages validés et conservez l'historique. Quand un syndic ou un donneur d'ordre demande des comptes, vous répondez avec des faits.",
        mock: "passages",
        href: "/fonctionnalites/pointage",
      },
      {
        id: "remplacements",
        label: "Remplacements & absences",
        panelTitle: "Absences et remplacements gérés au même endroit",
        panelBody:
          "Gérez absences et remplacements au même endroit que le planning. L'équipe reste couverte, les sites ne restent pas à découvert.",
        mock: "rh-stack",
        href: "/fonctionnalites/gestion-rh",
      },
    ],
  },
  {
    id: "proteger-marge",
    label: "Protéger la marge",
    icon: "margin",
    features: [
      {
        id: "devis",
        label: "Devis professionnels",
        panelTitle: "Devis structurés, envoyés en quelques clics",
        panelBody:
          "Créez et envoyez des devis structurés, rattachés au client et aux sites. Fini les Word perdus : le commercial et l'ops partagent la même base.",
        mock: "devis",
        href: "/fonctionnalites/devis",
      },
      {
        id: "facturation",
        label: "Facturation sans ressaisie",
        panelTitle: "Facturez ce qui a été fait — sans retaper",
        panelBody:
          "Ce qui est planifié et pointé alimente la facturation. Moins d'oublis, moins d'écarts, des factures alignées sur le terrain.",
        mock: "factures-stack",
        href: "/logiciel-facturation-proprete",
      },
      {
        id: "impayes",
        label: "Suivi des impayés",
        panelTitle: "Suivez et relancez vos impayés",
        panelBody:
          "Voyez ce qui est dû, relancez sans tableur parallèle, gardez le fil des litiges.",
        mock: "impayes",
        href: "/fonctionnalites/impayes",
      },
      {
        id: "rentabilite",
        label: "Rentabilité client / site",
        panelTitle: "Marges et rentabilité par client ou site",
        panelBody:
          "Tableaux de bord pour lire marges et activité. Des décisions sur des chiffres, pas sur une impression de fin de mois.",
        mock: "dashboard-stack",
        href: "/fonctionnalites/rentabilite",
      },
    ],
  },
  {
    id: "gagner-garder",
    label: "Gagner & garder",
    icon: "contracts",
    features: [
      {
        id: "clients",
        label: "Clients & sites",
        panelTitle: "Fiches clients, sites et historique centralisés",
        panelBody:
          "Fiches clients, sites rattachés, infos d'accès et historique : l'équipe trouve ce qu'il faut sans fouiller trois outils.",
        mock: "clients",
        href: "/fonctionnalites/clients",
      },
      {
        id: "historique",
        label: "Historique interventions",
        panelTitle: "L'historique de chaque intervention",
        panelBody:
          "Ce qui a été fait, quand, par qui. Utile en litige, en renouvellement, et pour former les nouveaux.",
        mock: "historique-timeline",
        href: "/fonctionnalites/clients",
      },
      {
        id: "preuves-do",
        label: "Preuves donneurs d'ordre",
        panelTitle: "Preuves pour syndics et donneurs d'ordre",
        panelBody:
          "Appuyez-vous sur passages et historique pour rassurer syndics et clients pro — sans dossier papier improvisé.",
        mock: "preuves-report",
        href: "/solutions/syndics",
      },
      {
        id: "flux",
        label: "Devis → facture",
        panelTitle: "Du devis à la facture, sans double saisie",
        panelBody:
          "Enchaînez les étapes commerciales et ops dans le même logiciel. Ce qui est vendu devient ce qui est planifié, puis facturé.",
        mock: "flux-pipeline",
        href: "/fonctionnalites/facturation",
      },
    ],
  },
  {
    id: "tenir-qualite",
    label: "Tenir la qualité",
    icon: "quality",
    features: [
      {
        id: "app",
        label: "App mobile agents",
        panelTitle: "Application mobile pour vos agents",
        panelBody:
          "Planning, pointage, détails d'intervention dans la poche. Moins d'allers-retours avec le bureau.",
        mock: "mobile-app",
        href: "/fonctionnalites/pointage",
      },
      {
        id: "multi",
        label: "Vision multi-sites",
        panelTitle: "Tous vos sites visibles d'un coup d'œil",
        panelBody:
          "Sites, équipes, statuts : pilotez sans être sur chaque chantier.",
        mock: "multi-sites",
        href: "/logiciel-planning-nettoyage",
      },
      {
        id: "support",
        label: "Support métier FR",
        panelTitle: "Support en français, par des gens du métier",
        panelBody:
          "Accompagnement en français, par une équipe qui parle planning, agents et contrats — pas un ticket anonyme.",
        mock: "support",
        href: "/contact",
      },
      {
        id: "hub",
        label: "Un seul outil",
        panelTitle: "Un logiciel, une vérité",
        panelBody:
          "Centralisez pour réduire les erreurs, les oublis et la charge mentale. Un système, une vérité.",
        mock: "hub",
        href: "/fonctionnalites",
      },
    ],
  },
] as const;

const homeConfig = mergeIndustryConfig(defaultIndustryConfig, {
  pillars: homePillars,
  empathy: {
    h2: "Planifier. Pointer. Facturer. Tout au même endroit.",
    body: "Vous gérez des agents sur plusieurs sites, des remplacements de dernière minute, et vous facturez parfois de mémoire ? PROGESTI rassemble planning, pointage terrain et facturation dans un seul logiciel — pour que chaque heure travaillée soit tracée et facturée.",
  },
  showcase: {
    title: "Vos équipes, vos sites, votre activité — en temps réel",
    sub: "Pointage mobile · géoloc · statuts live — le bureau voit sans appeler le terrain.",
  },
  proof: {
    h2: "149 € HT/mois, tout inclus — vraiment",
    quote: "Un prix public, des modules métier, un support qui répond.",
    items: [
      {
        title: "Prix affiché",
        text: "149 € HT/mois, jusqu'à 5 utilisateurs, tous modules inclus. Pas de devis à négocier.",
      },
      {
        title: "Modules métier",
        text: "Planning, pointage, devis, factures, impayés, RH, tableaux de bord — sans supplément.",
      },
      {
        title: "Support réactif",
        text: "Équipe MSNE SAS à Toulouse (31). Joignable au 05 82 95 09 19.",
      },
    ],
  },
  grid: {
    h2Lead: "Du planning à la facture",
    h2Highlight: "en 3 clics",
    lead: "Un logiciel pensé pour le quotidien du gérant de propreté — pas un ERP générique.",
  },
  vsTitle: "Pourquoi un logiciel métier plutôt qu'Excel ?",
});

export const metadata: Metadata = pageMeta({
  title: "Logiciel entreprise de nettoyage — 149 € HT/mois",
  description:
    `Simplifiez et faites grandir votre entreprise de nettoyage : planning, pointage, facture. 149 € HT/mois, 5 utilisateurs, tout inclus. ${trialCopy.noCard}.`,
  path: "/",
  openGraph: {
    title: "Logiciel entreprise de nettoyage — 149 € HT/mois | PROGESTI",
    description:
      `Planning, pointage et facturation pour entreprises de propreté. 149 € HT/mois tout inclus. ${trialCopy.label}.`,
  },
});

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationLd />
      <ReviewsLd />
      <FaqPageLd items={[...homeConfig.faq]} />
      <IndustryLanding config={homeConfig} />
    </>
  );
}
