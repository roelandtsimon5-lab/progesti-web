/** Fabrique une config page Sécurité v2 à partir d'un squelette + champs uniques. */

/**
 * @param {{
 *   id: string; slug: string; path: string; type: string; primaryKw: string;
 *   h1Lead: string; h1: string; sub: string; seoTitle: string; seoDesc: string;
 *   empathyH2: string; empathyBody: string; showcaseTitle: string; showcaseSub: string;
 *   productStrip: string; proofH2: string; proofQuote: string;
 *   persona: { role: string; pains: string[]; jargon: string[]; objections: string[] };
 *   scenario: string; seoIntent: string; antiCanni: string;
 *   demo: object; bodySections: object[]; faq: { q: string; a: string }[];
 *   gridItems: { title: string; text: string; href: string }[];
 *   vsTitle?: string; outline?: string[]; maillage?: string[]; checklist?: string[];
 *   crumbLabel?: string; proofItems?: { title: string; text: string }[];
 * }} u
 */
export function mk(u) {
  const outline = u.outline ?? [
    `H2 ${u.empathyH2}`,
    `H2 Démo — ${u.demo.h2}`,
    `H2 ${u.bodySections[0]?.h2 ?? "Corps métier"}`,
    "H2 FAQ + CTA essai/tarifs",
  ];
  const proofItems = u.proofItems ?? [
    { title: "Terrain", text: "Pointage et historique remontés au bureau." },
    { title: "Client", text: "Réponses factuelles aux demandes de compte." },
    { title: "Facture", text: "Réalisé exploitable — dès 29,99 € HT/mois." },
  ];
  return {
    ...u,
    outline,
    proofItems,
    tone: "Terrain, direct, jargon vacation/poste. Pas de blabla SaaS.",
    ctas: ["Essai 15 j sans CB", "Démo sur vos sites", "Tarifs publics"],
    schema: ["SoftwareApplication", "FAQPage"],
    maillage: u.maillage ?? ["/logiciel-securite-gardiennage", "/securite", "/tarifs", "/essai-gratuit"],
    checklist: u.checklist ?? [
      "Intent unique vs sœurs",
      "Démo uiRows différente des autres pages",
      "Pas fausse certif CNAPS / pas conseil juridique",
      "Prix dès 29,99 € HT/mois + essai sans CB",
    ],
    metaTitle: u.seoTitle,
    metaDesc: u.seoDesc,
    showcaseBadgeLeft: { title: "Vacation / site", sub: "Statut visible" },
    showcaseBadgeRight: "Preuve OK ✓",
  };
}

export function demo(slug, h2, lead, scenario, steps, uiLabel, uiRows, takeaway) {
  return {
    eyebrow: `Démo · ${slug.replace(/-/g, " ")}`,
    h2,
    lead,
    scenario,
    steps,
    uiLabel,
    uiRows,
    takeaway,
    primaryCtaLabel: "Essai sur vos sites",
    secondaryCtaLabel: "Voir la démo",
  };
}
