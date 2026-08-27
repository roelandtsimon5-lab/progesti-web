import { site, trialCopy } from "@/lib/site";
import { homeCreative } from "@/lib/creative-assets";
import type { IndustryPageConfig, IndustryPillar } from "./types";

export const defaultPillars: readonly IndustryPillar[] = [
  {
    id: "travailler-mieux",
    label: "Travailler mieux",
    icon: "clipboard",
    features: [
      {
        id: "planning",
        label: "Planning multi-sites",
        panelTitle: "Un planning qui suit vos sites, pas l’inverse",
        panelBody:
          "Définissez fréquences et affectations une fois : les passages se répètent sans reconstruire la semaine. Vue par agent ou par site, statuts visibles, changements d’urgence sans perdre le fil.",
        mock: "planning-map",
        href: "/logiciel-planning-nettoyage",
      },
      {
        id: "pointage",
        label: "Pointage & télégestion",
        panelTitle: "Le terrain remonte tout seul",
        panelBody:
          "Les agents pointent sur mobile (arrivée, départ, géoloc). Moins de feuilles papier, moins d’heures contestées, une vision claire de qui est où.",
        mock: "telegestion",
        href: "/fonctionnalites/pointage",
      },
      {
        id: "preuves-passages",
        label: "Preuves de passages",
        panelTitle: "Des preuves pour vous — et pour le client",
        panelBody:
          "Suivez les passages validés et conservez l’historique. Quand un syndic ou un donneur d’ordre demande des comptes, vous répondez avec des faits.",
        mock: "passages",
        href: "/fonctionnalites/pointage",
      },
      {
        id: "remplacements",
        label: "Remplacements & absences",
        panelTitle: "Les trous de planning ne cassent plus la journée",
        panelBody:
          "Gérez absences et remplacements au même endroit que le planning. L’équipe reste couverte, les sites ne restent pas à découvert.",
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
        panelTitle: "Des devis clairs qui partent plus vite",
        panelBody:
          "Créez et envoyez des devis structurés, rattachés au client et aux sites. Fini les Word perdus : le commercial et l’ops partagent la même base.",
        mock: "devis",
        href: "/fonctionnalites/devis",
      },
      {
        id: "facturation",
        label: "Facturation sans ressaisie",
        panelTitle: "Du réalisé à la facture, sans retaper",
        panelBody:
          "Ce qui est planifié et pointé alimente la facturation. Moins d’oublis, moins d’écarts, des factures alignées sur le terrain.",
        mock: "factures-stack",
        href: "/logiciel-facturation-proprete",
      },
      {
        id: "impayes",
        label: "Suivi des impayés",
        panelTitle: "La trésorerie ne se gère pas au feeling",
        panelBody:
          "Voyez ce qui est dû, relancez sans tableur parallèle, gardez le fil des litiges.",
        mock: "impayes",
        href: "/fonctionnalites/impayes",
      },
      {
        id: "rentabilite",
        label: "Rentabilité client / site",
        panelTitle: "Sachez où vous gagnez — et où vous perdez",
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
        panelTitle: "Toute la relation au même endroit",
        panelBody:
          "Fiches clients, sites rattachés, infos d’accès et historique : l’équipe trouve ce qu’il faut sans fouiller trois outils.",
        mock: "clients",
        href: "/fonctionnalites/clients",
      },
      {
        id: "historique",
        label: "Historique interventions",
        panelTitle: "La mémoire de vos contrats",
        panelBody:
          "Ce qui a été fait, quand, par qui. Utile en litige, en renouvellement, et pour former les nouveaux.",
        mock: "historique-timeline",
        href: "/fonctionnalites/clients",
      },
      {
        id: "preuves-do",
        label: "Preuves donneurs d’ordre",
        panelTitle: "Montrez que le contrat est tenu",
        panelBody:
          "Appuyez-vous sur passages et historique pour rassurer syndics et clients pro — sans dossier papier improvisé.",
        mock: "preuves-report",
        href: "/solutions/syndics",
      },
      {
        id: "flux",
        label: "Devis → facture",
        panelTitle: "Un flux, zéro double saisie",
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
        panelTitle: "L’info sur le terrain, pas au téléphone",
        panelBody:
          "Planning, pointage, détails d’intervention dans la poche. Moins d’allers-retours avec le bureau.",
        mock: "mobile-app",
        href: "/fonctionnalites/pointage",
      },
      {
        id: "multi",
        label: "Vision multi-sites",
        panelTitle: "Une entreprise lisible d’un coup d’œil",
        panelBody:
          "Sites, équipes, statuts : pilotez sans être sur chaque chantier.",
        mock: "multi-sites",
        href: "/logiciel-planning-nettoyage",
      },
      {
        id: "support",
        label: "Support métier FR",
        panelTitle: "Des gens qui comprennent la propreté",
        panelBody:
          "Accompagnement en français, par une équipe qui parle planning, agents et contrats — pas un ticket anonyme.",
        mock: "support",
        href: "/contact",
      },
      {
        id: "hub",
        label: "Un seul outil",
        panelTitle: "Sortir d’Excel et WhatsApp",
        panelBody:
          "Centralisez pour réduire les erreurs, les oublis et la charge mentale. Un système, une vérité.",
        mock: "hub",
        href: "/fonctionnalites",
      },
    ],
  },
] as const;

const defaultTrust = [
  { label: "Essai 7 jours", value: "" },
  { label: "Sans carte bancaire", value: "" },
  { label: "149 € HT/mois", value: "" },
  { label: "5 utilisateurs", value: "" },
  { label: "Support FR", value: "" },
] as const;

const defaultFaq = [
  {
    q: "Qu’est-ce qu’un logiciel pour entreprise de nettoyage ?",
    a: "Un outil métier qui centralise planning des agents, pointage terrain, facturation et suivi d’activité — à la place d’Excel, WhatsApp et factures manuelles. Il relie le bureau au terrain pour éviter les ressaisies et les oublis.",
  },
  {
    q: "PROGESTI gère-t-il le planning multi-sites et les récurrences ?",
    a: "Oui. Affectation agents / sites, fréquences (quotidien, hebdo, mensuel), remplacements et vue par agent ou par site. C’est le cœur du logiciel.",
  },
  {
    q: "Le pointage mobile fonctionne comment ?",
    a: "Les agents pointent arrivée et départ sur l’app Android / iOS, avec géolocalisation si activée. Les données remontent au bureau en temps réel pour la prépaie et le suivi.",
  },
  {
    q: "Peut-on facturer à partir du réalisé terrain ?",
    a: "Oui. Le planning et le pointage alimentent la facturation pour limiter la double saisie et facturer ce qui a réellement été fait.",
  },
  {
    q: "Est-ce adapté aux syndics et parties communes ?",
    a: "Oui. Multi-immeubles, passages récurrents, historique et preuves pour vos interlocuteurs immobiliers. Voir aussi la solution Syndics.",
  },
  {
    q: "Combien coûte PROGESTI ? Qu’est-ce qui est inclus ?",
    a: "149 € HT/mois, jusqu’à 5 utilisateurs, tous modules inclus (planning, pointage, devis, facturation, impayés, RH, tableaux de bord, CRM…). Pas de module payant en plus.",
  },
  {
    q: `Combien dure l’essai ? Faut-il une carte bancaire ?`,
    a: `Essai ${site.trialDays} jours pour tester sur votre activité. Pas besoin de carte bancaire pour démarrer l’essai.`,
  },
  {
    q: "Comment migrer depuis Excel / WhatsApp ?",
    a: "Vous pouvez reprendre clients, sites et contrats. L’équipe peut vous accompagner sur l’intégration si besoin.",
  },
  {
    q: "Combien d’utilisateurs sont inclus ?",
    a: "Jusqu’à 5 utilisateurs dans l’offre à 149 € HT/mois. Idéal pour TPE et petites équipes de propreté.",
  },
  {
    q: "Le support est-il en France ?",
    a: `Oui. Support FR inclus, joignable au ${site.phone}. Société MSNE SAS, Tournefeuille (31).`,
  },
] as const;

export const defaultIndustryConfig: IndustryPageConfig = {
  slug: "default",
  seo: {
    title: "Logiciel entreprise de nettoyage — 149 € HT/mois",
    description:
      `Simplifiez et faites grandir votre entreprise de nettoyage : planning, pointage, facture. 149 € HT/mois, 5 utilisateurs, tout inclus. ${trialCopy.label}.`,
    path: "/",
  },
  hero: {
    h1Lead: "Logiciel entreprise de nettoyage",
    h1: "pour simplifier et faire grandir votre activité",
    sub: "Planning, pointage terrain et facturation — tout centralisé pour protéger vos contrats et vos équipes.",
    claimBefore: "Du planning à la",
    claimHighlight: "facture",
    claimSub: "Un seul outil pour faire tourner la propreté",
    trustLeft: "Conçu pour les entreprises de nettoyage françaises",
    trust: defaultTrust,
    mediaPhoto: "/hero-owners.jpg",
    mediaPhotoAlt: "Agent de propreté en intervention sur site client",
    productStripLabel: "Planning multi-sites · vue réelle",
  },
  empathy: {
    h2: "Faites tourner une entreprise de propreté exigeante",
    body: "Absences, multi-sites, exigences clients et équipes qu’on ne voit pas sur le terrain : le quotidien est déjà assez dur. PROGESTI réunit planning, pointage et facturation pour que chaque passage soit fait, prouvé, et facturé — sans Excel ni chaos WhatsApp.",
  },
  pillars: defaultPillars,
  showcase: {
    title: "Le terrain remonte tout seul",
    sub: "Pointage mobile · géoloc · statuts live — le bureau voit sans harceler le téléphone.",
    image: homeCreative.showcase.primary.src,
    imageAlt: homeCreative.showcase.primary.alt,
    stackImage: homeCreative.showcase.secondary.src,
    stackImageAlt: homeCreative.showcase.secondary.alt,
    badgeLeft: { title: "2 agents sur site", sub: "Arrivée · géoloc OK" },
    badgeRight: "Pointage validé ✓",
  },
  proof: {
    h2: "Conçu avec le métier — pas une usine à logiciels",
    quote: "Fait par des gens du nettoyage, pas par une usine à logiciels.",
    items: [
      {
        title: "Prix public",
        text: "149 € HT/mois, jusqu’à 5 utilisateurs, tous modules inclus. Pas de devis opaque.",
      },
      {
        title: "Tout inclus",
        text: "Planning, pointage, devis, factures, impayés, RH, tableaux de bord — sans module payant en plus.",
      },
      {
        title: "Support FR",
        text: `${site.phone} · équipe MSNE SAS à Tournefeuille (31), qui parle le terrain.`,
      },
    ],
  },
  grid: {
    h2Lead: "Aussi pro que",
    h2Highlight: "votre chantier",
    lead: "Montrez à vos clients et à vos équipes une exploitation claire — du passage à la facture.",
    items: [
      {
        title: "Planning multi-sites",
        text: "Fréquences, agents, remplacements : une semaine lisible pour tout le monde.",
        href: "/logiciel-planning-nettoyage",
      },
      {
        title: "Pointage mobile",
        text: "Arrivée, départ, géoloc — le bureau voit le terrain sans harceler le téléphone.",
        href: "/fonctionnalites/pointage",
      },
      {
        title: "Preuves de passage",
        text: "Historique et validations pour répondre aux litiges et aux demandes syndic.",
        href: "/fonctionnalites/pointage",
      },
      {
        title: "Devis & factures",
        text: "Du commercial au réalisé, sans retaper dans un second outil.",
        href: "/logiciel-facturation-proprete",
      },
      {
        title: "Clients & sites",
        text: "Fiches, accès, historique : une seule vérité pour l’équipe.",
        href: "/fonctionnalites/clients",
      },
      {
        title: "Support FR",
        text: "Une équipe qui comprend la propreté, joignable quand ça bloque.",
        href: "/contact",
      },
    ],
  },
  faq: defaultFaq,
};

export function mergeIndustryConfig(
  base: IndustryPageConfig,
  patch: Partial<Omit<IndustryPageConfig, "hero" | "empathy" | "showcase" | "proof" | "grid">> & {
    hero?: Partial<IndustryPageConfig["hero"]>;
    empathy?: Partial<IndustryPageConfig["empathy"]>;
    showcase?: Partial<IndustryPageConfig["showcase"]>;
    proof?: Partial<IndustryPageConfig["proof"]> & {
      items?: IndustryPageConfig["proof"]["items"];
    };
    grid?: Partial<IndustryPageConfig["grid"]> & {
      items?: IndustryPageConfig["grid"]["items"];
    };
    breadcrumbs?: IndustryPageConfig["breadcrumbs"];
  },
): IndustryPageConfig {
  return {
    ...base,
    ...patch,
    seo: { ...base.seo, ...patch.seo },
    hero: { ...base.hero, ...patch.hero },
    empathy: { ...base.empathy, ...patch.empathy },
    showcase: { ...base.showcase, ...patch.showcase },
    proof: {
      ...base.proof,
      ...patch.proof,
      items: patch.proof?.items ?? base.proof.items,
    },
    grid: {
      ...base.grid,
      ...patch.grid,
      items: patch.grid?.items ?? base.grid.items,
    },
    pillars: patch.pillars ?? base.pillars,
    faq: patch.faq ?? base.faq,
    breadcrumbs: patch.breadcrumbs ?? base.breadcrumbs,
  };
}
