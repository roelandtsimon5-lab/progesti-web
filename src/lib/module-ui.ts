import { getModuleCreativeAssets } from "@/lib/creative-assets";
import type { modules } from "@/lib/site";

type ModuleSlug = (typeof modules)[number]["slug"];

export type ModuleUiMeta = {
  heroQuote: string;
  useCaseId: string;
  /** @deprecated Use useCaseId instead */
  testimonialId?: string;
};

export const moduleUi: Record<ModuleSlug, ModuleUiMeta> = {
  planification: {
    heroQuote: "Fini le planning Excel du dimanche soir",
    useCaseId: "multi-sites",
  },
  pointage: {
    heroQuote: "Les heures terrain remontent sans feuille papier",
    useCaseId: "proof-passages",
  },
  clients: {
    heroQuote: "Une fiche client, tous vos sites au même endroit",
    useCaseId: "multi-sites",
  },
  devis: {
    heroQuote: "Du devis signé au planning, sans ressaisie",
    useCaseId: "chantier-cash",
  },
  facturation: {
    heroQuote: "Facturer le réalisé, pas une estimation Excel",
    useCaseId: "admin-time",
  },
  impayes: {
    heroQuote: "Relances tracées, trésorerie sous contrôle",
    useCaseId: "chantier-cash",
  },
  "gestion-rh": {
    heroQuote: "Absences, heures et planning dans le même flux",
    useCaseId: "prepaie",
  },
  rentabilite: {
    heroQuote: "Voir la marge par site avant qu'il soit trop tard",
    useCaseId: "admin-time",
  },
  crm: {
    heroQuote: "Pipeline commercial connecté à l'exploitation",
    useCaseId: "tpe-simple",
  },
};

export function getModuleUi(slug: string): ModuleUiMeta | undefined {
  return moduleUi[slug as ModuleSlug];
}

/** Images hero + showcase — voir creative-assets.ts */
export { getModuleCreativeAssets };
