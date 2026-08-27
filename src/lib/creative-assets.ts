import type { MockKind } from "@/lib/industry/types";
import type { modules } from "@/lib/site";

type ModuleSlug = (typeof modules)[number]["slug"];

export type CreativeRecipe = "ui-stack" | "ui-context" | "photo-overlay";

export type ModuleCreativeAssets = {
  hero: { src: string; alt: string };
  showcase: { src: string; alt: string };
  og: { src: string; alt: string };
  primaryMock: MockKind;
  recipe: CreativeRecipe;
  /** Remplace l'image hero par un mock UI produit */
  heroMock?: MockKind;
  /** Remplace l'image showcase par un mock UI produit */
  showcaseMock?: MockKind;
};

/** Source unique hero / showcase / OG par module — évite la fatigue des 4 PNG recyclés. */
export const moduleCreativeAssets: Record<ModuleSlug, ModuleCreativeAssets> = {
  planification: {
    hero: {
      src: "/hero-planning.webp",
      alt: "Planning PROGESTI — vue semaine multi-sites pour entreprises de nettoyage",
    },
    showcase: {
      src: "/screen-passages.webp",
      alt: "Passages par site et fréquences programmées dans PROGESTI",
    },
    og: { src: "/hero-planning.webp", alt: "Planning nettoyage professionnel PROGESTI" },
    primaryMock: "planning-map",
    recipe: "ui-context",
  },
  pointage: {
    hero: {
      src: "/screen-telegestion.webp",
      alt: "Télégestion PROGESTI — pointages et interventions en direct",
    },
    showcase: {
      src: "/screen-passages.webp",
      alt: "Preuves de passage liées aux pointages terrain",
    },
    og: { src: "/screen-telegestion.webp", alt: "Pointage et télégestion PROGESTI" },
    primaryMock: "telegestion",
    recipe: "ui-context",
  },
  clients: {
    hero: {
      src: "/screen-passages.webp",
      alt: "Module Clients PROGESTI — fiches clients et sites rattachés",
    },
    showcase: {
      src: "/hero-planning.webp",
      alt: "Planning des sites rattachés à la fiche client",
    },
    og: { src: "/screen-passages.webp", alt: "Gestion clients propreté PROGESTI" },
    primaryMock: "clients",
    recipe: "ui-stack",
  },
  devis: {
    hero: {
      src: "/screen-factures.webp",
      alt: "Module Devis PROGESTI — devis professionnels pour entreprises de nettoyage",
    },
    showcase: {
      src: "/hero-planning.webp",
      alt: "Conversion devis signé vers sites et fréquences planifiées",
    },
    og: { src: "/screen-factures.webp", alt: "Devis nettoyage PROGESTI" },
    primaryMock: "devis",
    recipe: "ui-stack",
  },
  facturation: {
    hero: {
      src: "/screen-factures.webp",
      alt: "Facturation PROGESTI — factures alignées sur le réalisé terrain",
    },
    showcase: {
      src: "/screen-telegestion.webp",
      alt: "Pointages terrain — base de facturation sans ressaisie",
    },
    og: { src: "/screen-factures.webp", alt: "Facturation propreté PROGESTI" },
    primaryMock: "factures-stack",
    recipe: "ui-stack",
  },
  impayes: {
    hero: {
      src: "/screen-factures.webp",
      alt: "Module Impayés PROGESTI — suivi trésorerie et relances clients",
    },
    showcase: {
      src: "/screen-telegestion.webp",
      alt: "Lien entre interventions réalisées et factures émises",
    },
    og: { src: "/screen-factures.webp", alt: "Gestion impayés PROGESTI" },
    primaryMock: "impayes",
    recipe: "ui-stack",
  },
  "gestion-rh": {
    hero: {
      src: "/hero-planning.webp",
      alt: "Module RH PROGESTI — équipes, absences et heures terrain",
    },
    showcase: {
      src: "/screen-telegestion.webp",
      alt: "Export variables de paie depuis les pointages PROGESTI",
    },
    og: { src: "/hero-planning.webp", alt: "Gestion RH propreté PROGESTI" },
    primaryMock: "rh-stack",
    heroMock: "rh-stack",
    showcaseMock: "rh-payroll",
    recipe: "ui-stack",
  },
  rentabilite: {
    hero: {
      src: "/screen-telegestion.webp",
      alt: "Module Rentabilité PROGESTI — marges et tableaux de bord par site",
    },
    showcase: {
      src: "/screen-passages.webp",
      alt: "Charge et marge croisées par passage et par site",
    },
    og: { src: "/screen-telegestion.webp", alt: "Rentabilité entreprise de nettoyage PROGESTI" },
    primaryMock: "dashboard-stack",
    recipe: "ui-stack",
  },
  crm: {
    hero: {
      src: "/hero-planning.webp",
      alt: "Module CRM PROGESTI — pipeline commercial pour entreprises de nettoyage",
    },
    showcase: {
      src: "/screen-factures.webp",
      alt: "Devis signés et facturation dans le même flux",
    },
    og: { src: "/hero-planning.webp", alt: "CRM propreté PROGESTI" },
    primaryMock: "flux-pipeline",
    recipe: "ui-stack",
  },
};

export function getModuleCreativeAssets(slug: string): ModuleCreativeAssets | undefined {
  return moduleCreativeAssets[slug as ModuleSlug];
}

export const homeCreative = {
  heroPhoto: {
    src: "/hero-owners.jpg",
    alt: "Agent de propreté en intervention — entreprise de nettoyage",
  },
  productStrip: {
    src: "/hero-planning.webp",
    alt: "Planning multi-sites PROGESTI",
    label: "Planning multi-sites · vue réelle",
  },
  showcase: {
    primary: { src: "/screen-telegestion.webp", alt: "Pointage terrain PROGESTI" },
    secondary: { src: "/screen-factures.webp", alt: "Facturation PROGESTI" },
  },
} as const;

/** Remplace `dashboard-mockup-opt.webp` (absent) sur les LP ads. */
export const adsProductPreview = {
  src: "/screen-telegestion.webp",
  alt: "Tableaux de bord et télégestion PROGESTI",
  width: 1682,
  height: 828,
} as const;
