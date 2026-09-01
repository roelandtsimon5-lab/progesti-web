export type MockKind =
  | "planning-map"
  | "telegestion"
  | "passages"
  | "rh"
  | "rh-stack"
  | "rh-payroll"
  | "devis"
  | "factures-stack"
  | "impayes"
  | "dashboard-stack"
  | "clients"
  | "historique-timeline"
  | "preuves-report"
  | "flux-pipeline"
  | "mobile-app"
  | "multi-sites"
  | "photo-overlay"
  | "support"
  | "hub";

export type IndustryFeature = {
  id: string;
  label: string;
  panelTitle: string;
  panelBody: string;
  mock: MockKind;
  href: string;
};

export type IndustryPillar = {
  id: string;
  label: string;
  icon: "clipboard" | "margin" | "contracts" | "quality";
  features: readonly [IndustryFeature, IndustryFeature, IndustryFeature, IndustryFeature];
};

export type IndustryHero = {
  h1Lead: string;
  h1: string;
  sub: string;
  claimBefore: string;
  claimHighlight: string;
  claimSub: string;
  trustLeft: string;
  trust: readonly { label: string; value: string }[];
  mediaPhoto?: string;
  mediaPhotoAlt?: string;
  productStripLabel?: string;
};

export type IndustryShowcase = {
  title: string;
  sub: string;
  image: string;
  imageAlt: string;
  stackImage?: string;
  stackImageAlt?: string;
  badgeLeft?: { title: string; sub: string };
  badgeRight?: string;
};

export type IndustryPageConfig = {
  slug: string;
  seo: {
    title: string;
    description: string;
    path: string;
  };
  hero: IndustryHero;
  empathy: { h2: string; body: string };
  pillars: readonly IndustryPillar[];
  showcase: IndustryShowcase;
  proof: {
    h2: string;
    quote: string;
    items: readonly { title: string; text: string }[];
  };
  grid: {
    h2Lead: string;
    h2Highlight: string;
    lead: string;
    items: readonly { title: string; text: string; href: string }[];
  };
  faq: readonly { q: string; a: string }[];
  /** Fil d'Ariane optionnel (pages SEO hors /solutions) */
  breadcrumbs?: readonly { label: string; href: string }[];
  /** Titre H2 du comparatif Excel/WhatsApp (optionnel) */
  vsTitle?: string;
};

export type IndustrySlug =
  | "default"
  | "bureaux"
  | "syndics"
  | "professionnels"
  | "fin-de-chantier"
  | "auto-entrepreneurs";
