import { cta, ctaLabels } from "@/lib/cta";
import { modules, solutions, site } from "@/lib/site";

export type NavMenuItem = {
  label: string;
  href: string;
  hint?: string;
  icon?: NavIcon;
};

export type NavMenuColumn = {
  title?: string;
  items: NavMenuItem[];
};

export type NavMenuFooterLink = {
  label: string;
  href: string;
  badge?: string;
};

export type NavMegaMenu = {
  id: string;
  label: string;
  href: string;
  columns: NavMenuColumn[];
  footer: NavMenuFooterLink[];
};

export type NavIcon =
  | "planning"
  | "pointage"
  | "clients"
  | "devis"
  | "facturation"
  | "impayes"
  | "rh"
  | "rentabilite"
  | "crm";

const moduleIcon: Record<string, NavIcon> = {
  planification: "planning",
  pointage: "pointage",
  clients: "clients",
  devis: "devis",
  facturation: "facturation",
  impayes: "impayes",
  "gestion-rh": "rh",
  rentabilite: "rentabilite",
  crm: "crm",
};

export function getModuleNavIcon(slug: string): NavIcon | undefined {
  return moduleIcon[slug];
}

export function pillarHash(title?: string) {
  if (!title) return "";
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function pillarHubHref(title: string) {
  const hash = pillarHash(title);
  return hash ? `/fonctionnalites#${hash}` : "/fonctionnalites";
}

function moduleItem(slug: string, hint?: string): NavMenuItem {
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) return { label: slug, href: `/fonctionnalites/${slug}` };
  return {
    label: mod.title,
    href: `/fonctionnalites/${mod.slug}`,
    hint: hint ?? mod.short,
    icon: moduleIcon[mod.slug],
  };
}

export const productMegaMenu: NavMegaMenu = {
  id: "product",
  label: "Fonctionnalités",
  href: "/fonctionnalites",
  columns: [
    {
      title: "Organiser",
      items: [
        moduleItem("planification"),
        moduleItem("pointage"),
        moduleItem("clients", "Sites, fiches, historique"),
      ],
    },
    {
      title: "Facturer",
      items: [
        moduleItem("devis"),
        moduleItem("facturation"),
        moduleItem("impayes"),
        moduleItem("rentabilite"),
      ],
    },
    {
      title: "Équipe & pilotage",
      items: [
        moduleItem("gestion-rh"),
        moduleItem("crm"),
        {
          label: "Vue d'ensemble",
          href: "/fonctionnalites",
          hint: "Les 9 modules inclus",
          icon: "rentabilite",
        },
      ],
    },
  ],
  footer: [
    { label: "Intégrations", href: "/integrations" },
    { label: "Toutes les fonctionnalités", href: "/fonctionnalites" },
    { label: `Essai ${site.trialDays} jours`, href: cta.trial, badge: "Gratuit" },
  ],
};

export function getModulePillar(slug: string): { title: string; items: NavMenuItem[] } | null {
  for (const col of productMegaMenu.columns) {
    const featureItems = col.items.filter((i) => i.href.startsWith("/fonctionnalites/"));
    if (featureItems.some((i) => i.href.endsWith(`/${slug}`))) {
      return { title: col.title ?? "Modules", items: featureItems };
    }
  }
  return null;
}

export function getModulePager(slug: string): { prev?: NavMenuItem; next?: NavMenuItem } {
  const pillar = getModulePillar(slug);
  if (!pillar) return {};
  const idx = pillar.items.findIndex((i) => i.href.endsWith(`/${slug}`));
  if (idx < 0) return {};
  return {
    prev: idx > 0 ? pillar.items[idx - 1] : undefined,
    next: idx < pillar.items.length - 1 ? pillar.items[idx + 1] : undefined,
  };
}

export const solutionsMegaMenu: NavMegaMenu = {
  id: "solutions",
  label: "Solutions",
  href: "/solutions",
  columns: [
    {
      items: solutions.slice(0, 3).map((s) => ({
        label: s.title,
        href: `/solutions/${s.slug}`,
        hint: s.navHint,
      })),
    },
    {
      items: solutions.slice(3).map((s) => ({
        label: s.title,
        href: `/solutions/${s.slug}`,
        hint: s.navHint,
      })),
    },
    {
      items: [
        {
          label: "Logiciel entreprise de nettoyage",
          href: "/logiciel-entreprise-nettoyage",
          hint: "Page SEO · tout métier",
        },
        {
          label: "Logiciel planning nettoyage",
          href: "/logiciel-planning-nettoyage",
          hint: "Planning multi-sites",
        },
        {
          label: "Logiciel facturation propreté",
          href: "/logiciel-facturation-proprete",
          hint: "Du réalisé à la facture",
        },
      ],
    },
  ],
  footer: [
    { label: "Toutes les solutions", href: "/solutions" },
    { label: ctaLabels.demoGate, href: cta.demo },
    { label: `${site.phone}`, href: `tel:${site.phoneTel}` },
  ],
};

export const resourcesMegaMenu: NavMegaMenu = {
  id: "resources",
  label: "Ressources",
  href: "/ressources",
  columns: [
    {
      title: "Apprendre",
      items: [
        { label: "Blog", href: "/blog", hint: "Guides et conseils métier" },
        { label: "Guides", href: "/guides", hint: "Mise en place pas à pas" },
        { label: "Glossaire", href: "/glossaire", hint: "Vocabulaire propreté" },
      ],
    },
    {
      title: "Décider",
      items: [
        { label: "FAQ", href: "/faq", hint: "Questions fréquentes" },
        { label: "Comparatifs", href: "/comparatifs", hint: "Alternatives et critères" },
        { label: "Cas clients", href: "/cas-clients", hint: "Scénarios métier (études à venir)" },
      ],
    },
    {
      title: "Entreprise",
      items: [
        { label: "Tarifs", href: "/tarifs", hint: "149 € HT/mois tout inclus" },
        { label: "Contact", href: "/contact", hint: site.phone },
        { label: "À propos", href: "/a-propos", hint: "MSNE SAS · Toulouse" },
      ],
    },
  ],
  footer: [
    { label: "Centre ressources", href: "/ressources" },
    { label: "Essai gratuit", href: cta.trial },
  ],
};

export const megaMenus = [productMegaMenu, solutionsMegaMenu, resourcesMegaMenu] as const;

export const industryDarkPaths = new Set([
  "/",
  "/logiciel-entreprise-nettoyage",
  "/logiciel-planning-nettoyage",
  "/logiciel-facturation-proprete",
  "/solutions",
  "/fonctionnalites",
  "/faq",
  "/contact",
  ...solutions.map((s) => `/solutions/${s.slug}`),
]);

export function isIndustryDarkPath(pathname: string): boolean {
  if (industryDarkPaths.has(pathname)) return true;
  if (pathname.startsWith("/solutions/") && pathname.split("/").length === 3) return true;
  if (pathname.startsWith("/fonctionnalites/") && pathname.split("/").length === 3) return true;
  if (pathname === "/tarifs") return true;
  if (pathname.startsWith("/logiciel-")) return true;
  if (
    pathname === "/integrations" ||
    pathname === "/comparatifs" ||
    pathname === "/contact" ||
    pathname === "/faq" ||
    pathname === "/ressources" ||
    pathname === "/demo" ||
    pathname === "/a-propos" ||
    pathname === "/guides" ||
    pathname === "/glossaire" ||
    pathname === "/alternative-propret" ||
    pathname === "/blog" ||
    pathname === "/cgv" ||
    pathname === "/mentions-legales" ||
    pathname === "/confidentialite" ||
    pathname === "/rendez-vous" ||
    pathname === "/essai-gratuit" ||
    pathname === "/temoignages" ||
    pathname === "/cas-clients"
  ) {
    return true;
  }
  if (pathname.startsWith("/blog/")) return true;
  if (pathname.startsWith("/blog/categorie/")) return true;
  if (pathname.startsWith("/glossaire/")) return true;
  return false;
}
