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

/** Variante visuelle mock UI (différenciation page à page). */
export type IndustryDemoVariant =
  | "list"
  | "board"
  | "timeline"
  | "checklist"
  | "split";

/** Tone statut mock UI (couleurs). */
export type IndustryDemoTone = "ok" | "warn" | "danger" | "info" | "neutral";

/** Ligne mock UI — champs optionnels rétrocompat. */
export type IndustryDemoRow = {
  left: string;
  right: string;
  status?: string;
  /** Sous-ligne (engin, horodatage, photo…). */
  meta?: string;
  tone?: IndustryDemoTone;
};

/** Démo produit unique par page (walkthrough + mock UI). */
export type IndustryDemo = {
  eyebrow: string;
  h2: string;
  lead: string;
  scenario: string;
  steps: readonly { label: string; detail: string }[];
  uiLabel: string;
  uiRows: readonly IndustryDemoRow[];
  takeaway: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  /** Layout mock UI — défaut list (rétrocompat). */
  variant?: IndustryDemoVariant;
  /** Barre d’outils mock (filtres, semaine, météo…). */
  uiToolbar?: string;
  /** Alerte bandeau (orage, conflit engin, litige…). */
  uiAlert?: string;
  /** En-têtes colonnes (variant list table-like). */
  uiColumns?: readonly string[];
  /** Micro-copy bas de mock. */
  uiHint?: string;
  /** Titres panneaux split (gauche / droite). */
  uiSplitLabels?: readonly [string, string];
};

/** Blocs éditoriaux H2/H3 pour copy longue différenciée. */
export type IndustryBodySection = {
  h2: string;
  body: string;
  bullets?: readonly string[];
  h3?: readonly { title: string; body: string }[];
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
  /** Section démo produit spécifique à la page */
  demo?: IndustryDemo;
  /** Sections éditoriales longues (SEO / E-E-A-T) */
  bodySections?: readonly IndustryBodySection[];
  /** CTAs hero optionnels (sinon défaut essai / démo) */
  ctaPrimaryLabel?: string;
  ctaSecondaryLabel?: string;
};

export type IndustrySlug =
  | "default"
  | "bureaux"
  | "syndics"
  | "professionnels"
  | "fin-de-chantier"
  | "auto-entrepreneurs";
