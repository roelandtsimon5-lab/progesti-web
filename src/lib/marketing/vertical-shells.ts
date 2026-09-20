import { applyFeaturePatches } from "@/lib/industry/pillars-overrides";
import { defaultPillars } from "@/lib/industry/default";
import type { IndustryPageConfig } from "@/lib/industry/types";

const evPatches = {
  planning: {
    label: "Planning multi-chantiers",
    panelTitle: "Sites, fréquences et équipes sur une semaine lisible",
    panelBody:
      "Tonte, entretien, élagage : affectez vos équipes par site et par fréquence. Quand la météo ou une absence débarque, vous ajustez sans reconstruire Excel.",
    href: "/espace-vert/planning-equipes",
  },
  pointage: {
    label: "Pointage terrain",
    panelTitle: "Qui est intervenu, où, quand",
    panelBody:
      "Les équipes pointent sur mobile. Moins de feuilles papier, moins d’heures contestées, une preuve pour le client ou le syndic.",
    href: "/espace-vert/pointage-terrain",
  },
  "preuves-passages": {
    panelTitle: "Preuves d’entretien exploitables",
    panelBody:
      "Historique des passages par site — utile quand un syndic ou une collectivité demande des comptes.",
    href: "/espace-vert/preuves-passages",
  },
  remplacements: {
    panelTitle: "Remplacements sans laisser un site à découvert",
    panelBody:
      "Arrêt maladie ou panne véhicule : gérez le backup dans le même planning que vos tournées.",
    href: "/espace-vert/absences-remplacements",
  },
  devis: {
    panelTitle: "Devis entretien ou chantier",
    panelBody:
      "Devis structurés pour contrats d’entretien ou prestations ponctuelles — commercial et terrain alignés.",
    href: "/espace-vert/devis-facturation",
  },
  facturation: {
    panelTitle: "Facturer le réalisé espaces verts",
    panelBody:
      "Le planning et le pointage alimentent la facture : moins d’oublis en fin de mois.",
    href: "/espace-vert/devis-facturation",
  },
  impayes: {
    panelTitle: "Suivi des impayés",
    panelBody:
      "Voyez ce qui est dû et relancez sans tableur parallèle.",
    href: "/tarifs",
  },
  rentabilite: {
    panelTitle: "Marge par client / site",
    panelBody:
      "Identifiez les contrats qui rapportent et ceux qui grignotent la marge.",
    href: "/espace-vert/contrats-annuels",
  },
  clients: {
    panelTitle: "Clients, sites et accès",
    panelBody:
      "Fiches sites, consignes d’accès, historique : l’info au bon endroit pour le terrain.",
    href: "/espace-vert/multi-sites",
  },
  historique: {
    panelTitle: "Mémoire des interventions",
    panelBody:
      "Ce qui a été fait, quand, par qui — utile en litige ou renouvellement de contrat annuel.",
    href: "/espace-vert/preuves-passages",
  },
  "preuves-do": {
    panelTitle: "Reporting donneurs d’ordre",
    panelBody:
      "Montrez que l’entretien est tenu — sans dossier papier improvisé.",
    href: "/espace-vert/syndics-coproprietes",
  },
  flux: {
    panelTitle: "Devis → planning → facture",
    panelBody:
      "Un flux unique pour les espaces verts : ce qui est vendu devient ce qui est planifié, puis facturé.",
    href: "/espace-vert/devis-facturation",
  },
  app: {
    panelTitle: "L’info sur le chantier, pas au téléphone",
    panelBody:
      "Planning et pointage dans la poche des équipes — moins d’allers-retours avec le bureau.",
    href: "/espace-vert/pointage-terrain",
  },
  multi: {
    label: "Vision multi-sites",
    panelTitle: "Portefeuille de sites sous contrôle",
    panelBody:
      "Quand le carnet grossit, gardez une vision claire des sites et des tournées.",
    href: "/espace-vert/multi-sites",
  },
  support: {
    panelTitle: "Support FR qui parle terrain",
    panelBody:
      "Une équipe joignable, qui comprend planning d’équipes et contrats d’entretien — pas un ticket anonyme.",
    href: "/contact",
  },
  hub: {
    panelTitle: "Sortir d’Excel et WhatsApp",
    panelBody:
      "Centralisez pour réduire les erreurs et la charge mentale. Un système, une vérité.",
    href: "/logiciel-espace-vert",
  },
} as const;

const secPatches = {
  planning: {
    label: "Planning vacations",
    panelTitle: "Posts et vacations sans trou",
    panelBody:
      "Affectez vos agents par site et créneau (jour, nuit, week-end). Remplacements au même endroit — un poste ne reste pas à découvert.",
    href: "/securite/planning-agents",
  },
  pointage: {
    label: "Pointage vacations",
    panelTitle: "Présence réelle en poste",
    panelBody:
      "Arrivée et départ horodatés sur mobile. Moins d’heures contestées, une base pour la facturation.",
    href: "/securite/pointage-vacations",
  },
  "preuves-passages": {
    label: "Preuves & rondes",
    panelTitle: "Des preuves pour audits et clients",
    panelBody:
      "Historique de vacations et passages — quand le donneur d’ordre demande un rapport, vous répondez avec des faits.",
    href: "/securite/rondes-surveillance",
  },
  remplacements: {
    panelTitle: "Backups de vacation",
    panelBody:
      "Absence de dernière minute : couvrez le poste dans le même écran que le planning.",
    href: "/securite/remplacement-urgence",
  },
  devis: {
    panelTitle: "Devis gardiennage / event",
    panelBody:
      "Devis clairs pour contrats sites ou prestations événementielles — suivis jusqu’à l’exécution.",
    href: "/securite/facturation-gardiennage",
  },
  facturation: {
    panelTitle: "Facturer les vacations faites",
    panelBody:
      "Le réalisé terrain alimente la facture : moins d’écarts entre heures vendues et heures faites.",
    href: "/securite/facturation-gardiennage",
  },
  impayes: {
    panelTitle: "Trésorerie contrats sécurité",
    panelBody:
      "Suivez les retards et relancez sans tableur parallèle.",
    href: "/tarifs",
  },
  rentabilite: {
    panelTitle: "Marge par site / contrat",
    panelBody:
      "Lisez où vous gagnez — et où un contrat cadre vous coûte trop cher.",
    href: "/securite/contrats-cadres",
  },
  clients: {
    panelTitle: "Sites, consignes, contacts",
    panelBody:
      "Fiches sites avec consignes et accès : l’agent trouve l’info sur mobile, pas dans un carnet perdu.",
    href: "/securite/surete-sites",
  },
  historique: {
    panelTitle: "Historique d’activité",
    panelBody:
      "Qui était en poste, quand : indispensable en litige, audit ou renouvellement.",
    href: "/securite/preuves-intervention",
  },
  "preuves-do": {
    panelTitle: "Reporting donneurs d’ordre",
    panelBody:
      "Montrez que les vacations et rondes sont tenues — sans reconstruction à la louche.",
    href: "/securite/reporting-client",
  },
  flux: {
    panelTitle: "Devis → vacation → facture",
    panelBody:
      "Commercial et exploitation alignés dans le même outil.",
    href: "/securite/facturation-gardiennage",
  },
  app: {
    panelTitle: "Terrain informé",
    panelBody:
      "Planning, pointage et détails d’intervention dans la poche des agents.",
    href: "/securite/pointage-vacations",
  },
  multi: {
    panelTitle: "Portefeuille de sites lisible",
    panelBody:
      "Pilotez de nombreux postes sans perdre le fil.",
    href: "/securite/multi-sites",
  },
  support: {
    panelTitle: "Support FR métier sécurité",
    panelBody:
      "Une équipe joignable qui parle vacations, équipes et contrats — pas un chatbot.",
    href: "/contact",
  },
  hub: {
    panelTitle: "Sortir d’Excel et WhatsApp",
    panelBody:
      "Une source de vérité pour le bureau et le terrain.",
    href: "/logiciel-securite-gardiennage",
  },
} as const;

export const espaceVertPillars = applyFeaturePatches(defaultPillars, evPatches);

export const securitePillars = applyFeaturePatches(defaultPillars, secPatches);

export const espaceVertProof: IndustryPageConfig["proof"] = {
  h2: "Conçu pour le terrain des espaces verts",
  quote: "Planning, preuves de passage, facture — sans Excel ni WhatsApp.",
  items: [
    {
      title: "Fréquences tenues",
      text: "Sites et récurrences visibles — y compris en haute saison.",
    },
    {
      title: "Preuves client",
      text: "Pointages et historique pour syndics, collectivités et entreprises.",
    },
    {
      title: "Facturation alignée",
      text: "Du réalisé à la facture, sans double saisie.",
    },
  ],
};

export const securiteProof: IndustryPageConfig["proof"] = {
  h2: "Conçu pour le gardiennage et la sûreté",
  quote: "Vacations couvertes, présence prouvée, facture juste.",
  items: [
    {
      title: "Vacations sans trou",
      text: "Posts, backups et absences dans le même planning.",
    },
    {
      title: "Preuves & audits",
      text: "Historique exploitable pour clients et contrôles.",
    },
    {
      title: "Facturation vacations",
      text: "Facturez ce qui a été fait, pas ce qui était « prévu sur Excel ».",
    },
  ],
};

export function withEspaceVertShell(config: IndustryPageConfig): IndustryPageConfig {
  return {
    ...config,
    pillars: espaceVertPillars,
    // Ne pas écraser proof / vsTitle page-specific (prompts v2)
    vsTitle: config.vsTitle ?? "Excel & WhatsApp vs PROGESTI (espaces verts)",
  };
}

export function withSecuriteShell(config: IndustryPageConfig): IndustryPageConfig {
  return {
    ...config,
    pillars: securitePillars,
    // Ne pas écraser proof / vsTitle page-specific (prompts v2)
    proof: config.proof ?? securiteProof,
    vsTitle: config.vsTitle ?? "Excel & WhatsApp vs PROGESTI (sécurité)",
  };
}
