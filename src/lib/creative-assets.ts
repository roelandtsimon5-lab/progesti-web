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

/** Source unique hero / showcase / OG par module — captures réelles app.progesti.fr (démo). */
export const moduleCreativeAssets: Record<ModuleSlug, ModuleCreativeAssets> = {
  planification: {
    hero: {
      src: "/hero-planning.png",
      alt: "Planning PROGESTI — vue semaine multi-sites pour entreprises de nettoyage",
    },
    showcase: {
      src: "/screen-passages.webp",
      alt: "Missions et passages programmés dans PROGESTI",
    },
    og: { src: "/hero-planning.png", alt: "Planning nettoyage professionnel PROGESTI" },
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
      alt: "Preuve de passage PROGESTI — pointage télégestion validé",
    },
    og: { src: "/screen-telegestion.webp", alt: "Pointage et télégestion PROGESTI" },
    primaryMock: "telegestion",
    recipe: "ui-context",
  },
  clients: {
    hero: {
      src: "/screen-clients.webp",
      alt: "Module Clients PROGESTI — liste des fiches clients actives",
    },
    showcase: {
      src: "/screen-sites.webp",
      alt: "Sites rattachés aux fiches clients dans PROGESTI",
    },
    og: { src: "/screen-clients.webp", alt: "Gestion clients propreté PROGESTI" },
    primaryMock: "clients",
    recipe: "ui-stack",
  },
  devis: {
    hero: {
      src: "/screen-devis.webp",
      alt: "Module Devis PROGESTI — devis professionnels pour entreprises de nettoyage",
    },
    showcase: {
      src: "/screen-clients.webp",
      alt: "Fiches clients utilisées pour créer les devis",
    },
    og: { src: "/screen-devis.webp", alt: "Devis nettoyage PROGESTI" },
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
      src: "/screen-clients.webp",
      alt: "Fiches clients liées aux factures et relances",
    },
    og: { src: "/screen-factures.webp", alt: "Gestion impayés PROGESTI" },
    primaryMock: "impayes",
    recipe: "ui-stack",
  },
  "gestion-rh": {
    hero: {
      src: "/screen-rh.webp",
      alt: "Module RH PROGESTI — équipes, absences et heures terrain",
    },
    showcase: {
      src: "/screen-telegestion.webp",
      alt: "Export variables de paie depuis les pointages PROGESTI",
    },
    og: { src: "/screen-rh.webp", alt: "Gestion RH propreté PROGESTI" },
    primaryMock: "rh-stack",
    heroMock: "rh-stack",
    showcaseMock: "rh-payroll",
    recipe: "ui-stack",
  },
  rentabilite: {
    hero: {
      src: "/screen-rentabilite.webp",
      alt: "Module Rentabilité PROGESTI — chiffre d'affaires réalisé et prévision",
    },
    showcase: {
      src: "/screen-factures.webp",
      alt: "Factures — base du réalisé pour la marge",
    },
    og: { src: "/screen-rentabilite.webp", alt: "Rentabilité entreprise de nettoyage PROGESTI" },
    primaryMock: "dashboard-stack",
    recipe: "ui-stack",
  },
  crm: {
    hero: {
      src: "/screen-devis.webp",
      alt: "Module CRM PROGESTI — pipeline commercial via devis et clients",
    },
    showcase: {
      src: "/screen-clients.webp",
      alt: "Base clients du pipeline commercial PROGESTI",
    },
    og: { src: "/screen-devis.webp", alt: "CRM propreté PROGESTI" },
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
  showcase: {
    primary: { src: "/screen-telegestion.webp", alt: "Pointage terrain PROGESTI" },
    secondary: { src: "/screen-factures.webp", alt: "Facturation PROGESTI" },
  },
} as const;

/** Preview produit pour LP ads — capture réelle CA / rentabilité (3× DPR). */
export const adsProductPreview = {
  src: "/screen-rentabilite.webp",
  alt: "Chiffre d'affaires et rentabilité PROGESTI",
  width: 4320,
  height: 2700,
} as const;
