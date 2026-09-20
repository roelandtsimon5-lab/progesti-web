/* eslint-disable */
/**
 * Builder pages Sécurité — copy longue + démo unique par page.
 * Ne pas fusionner avec EV / propreté.
 */
import { defaultIndustryConfig, mergeIndustryConfig } from "@/lib/industry";
import type { IndustryBodySection, IndustryDemo, IndustryPageConfig } from "@/lib/industry/types";
import type { MarketingPageEntry } from "../espace-vert-pages-types";

export type SecPageSpec = {
  id: string;
  key: string;
  path: string;
  type: string;
  primaryKw: string;
  seoTitle: string;
  seoDesc: string;
  crumbLabel: string;
  h1Lead: string;
  h1: string;
  sub: string;
  claimBefore: string;
  claimHighlight: string;
  claimSub: string;
  productStrip: string;
  empathyH2: string;
  empathyBody: string;
  showcaseTitle: string;
  showcaseSub: string;
  showcaseBadgeLeft: { title: string; sub: string };
  showcaseBadgeRight: string;
  proofH2: string;
  proofQuote: string;
  proofItems: readonly { title: string; text: string }[];
  vsTitle: string;
  demo: IndustryDemo;
  bodySections: readonly IndustryBodySection[];
  faq: readonly { q: string; a: string }[];
  gridItems: readonly { title: string; text: string; href: string }[];
  ctaPrimaryLabel?: string;
  ctaSecondaryLabel?: string;
  trustLeft?: string;
};

export function buildSecEntry(spec: SecPageSpec): MarketingPageEntry {
  const isHub = spec.key === "hub";
  const isPilier = spec.key === "logiciel-securite-gardiennage";
  const breadcrumbs = isPilier
    ? [
        { label: "Accueil", href: "/" },
        { label: spec.crumbLabel, href: spec.path },
      ]
    : isHub
      ? [
          { label: "Accueil", href: "/" },
          { label: "Sécurité", href: "/securite" },
        ]
      : [
          { label: "Accueil", href: "/" },
          { label: "Sécurité", href: "/securite" },
          { label: spec.crumbLabel, href: spec.path },
        ];

  const config: IndustryPageConfig = mergeIndustryConfig(defaultIndustryConfig, {
    slug: isHub ? "securite" : spec.key,
    seo: {
      title: spec.seoTitle,
      description: spec.seoDesc,
      path: spec.path,
    },
    breadcrumbs,
    hero: {
      h1Lead: spec.h1Lead,
      h1: spec.h1,
      sub: spec.sub,
      claimBefore: spec.claimBefore,
      claimHighlight: spec.claimHighlight,
      claimSub: spec.claimSub,
      trustLeft: spec.trustLeft ?? "Verticale sécurité · vacations & preuves",
      productStripLabel: spec.productStrip,
      mediaPhoto: "/screen-passages.webp",
      mediaPhotoAlt: `${spec.h1Lead} — vacations & preuves PROGESTI`,
    },
    empathy: {
      h2: spec.empathyH2,
      body: spec.empathyBody,
    },
    showcase: {
      title: spec.showcaseTitle,
      sub: spec.showcaseSub,
      image: "/hero-planning.png",
      imageAlt: `${spec.showcaseTitle} — PROGESTI sécurité`,
      badgeLeft: spec.showcaseBadgeLeft,
      badgeRight: spec.showcaseBadgeRight,
    },
    proof: {
      h2: spec.proofH2,
      quote: spec.proofQuote,
      items: spec.proofItems,
    },
    grid: {
      h2Lead: "Dans la verticale",
      h2Highlight: "sécurité",
      lead: "Maillage contrôlé : une intention par page, des sœurs complémentaires, tarifs et essai.",
      items: [
        ...spec.gridItems,
        { title: "Tarifs PROGESTI", text: "Prix public, modules inclus.", href: "/tarifs" },
        { title: "Essai gratuit", text: "15 jours sans CB, sur vos vrais sites.", href: "/essai-gratuit" },
      ],
    },
    faq: spec.faq,
    vsTitle: spec.vsTitle,
    demo: spec.demo,
    bodySections: spec.bodySections,
    ctaPrimaryLabel: spec.ctaPrimaryLabel,
    ctaSecondaryLabel: spec.ctaSecondaryLabel,
  });

  return {
    id: spec.id,
    path: spec.path,
    type: spec.type,
    primaryKw: spec.primaryKw,
    config,
  };
}

export function link(title: string, text: string, href: string) {
  return { title, text, href };
}
