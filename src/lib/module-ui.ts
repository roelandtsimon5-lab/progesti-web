import { getModuleCreativeAssets } from "@/lib/creative-assets";
import type { modules } from "@/lib/site";

type ModuleSlug = (typeof modules)[number]["slug"];

export type ModuleUiMeta = {
  heroQuote: string;
  testimonialId: string;
};

export const moduleUi: Record<ModuleSlug, ModuleUiMeta> = {
  planification: {
    heroQuote: "Fini le planning Excel du dimanche soir",
    testimonialId: "marie-pro-nettoyage-31",
  },
  pointage: {
    heroQuote: "Les heures terrain remontent sans feuille papier",
    testimonialId: "karim-clean-immeuble",
  },
  clients: {
    heroQuote: "Une fiche client, tous vos sites au même endroit",
    testimonialId: "julien-ecopro-bureaux",
  },
  devis: {
    heroQuote: "Du devis signé au planning, sans ressaisie",
    testimonialId: "thomas-renov-pro",
  },
  facturation: {
    heroQuote: "Facturer le réalisé, pas une estimation Excel",
    testimonialId: "sophie-sm-proprete",
  },
  impayes: {
    heroQuote: "Relances tracées, trésorerie sous contrôle",
    testimonialId: "nadia-azur-clean",
  },
  "gestion-rh": {
    heroQuote: "Absences, heures et planning dans le même flux",
    testimonialId: "fatima-lot-proprete",
  },
  rentabilite: {
    heroQuote: "Voir la marge par site avant qu'il soit trop tard",
    testimonialId: "marie-pro-nettoyage-31",
  },
  crm: {
    heroQuote: "Pipeline commercial connecté à l'exploitation",
    testimonialId: "david-chantier-express",
  },
};

export function getModuleUi(slug: string): ModuleUiMeta | undefined {
  return moduleUi[slug as ModuleSlug];
}

/** Images hero + showcase — voir creative-assets.ts */
export { getModuleCreativeAssets };
