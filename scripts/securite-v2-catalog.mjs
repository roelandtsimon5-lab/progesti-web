/**
 * Catalogue 30 pages Sécurité v2 — source pour generate-securite-v2.mjs
 */

/** @typedef {Record<string, unknown>} SecPageDef */

/**
 * @param {Partial<SecPageDef> & Pick<SecPageDef, 'id'|'slug'|'path'|'type'|'primaryKw'>} cfg
 * @returns {SecPageDef}
 */
export function page(cfg) {
  const slug = cfg.slug;
  const claimSub = cfg.claimSub ?? cfg.primaryKw;
  const productStrip = cfg.productStrip ?? "Sécurité · vacations · preuves";
  const showcaseBadgeRight = cfg.showcaseBadgeRight ?? "Preuve OK ✓";
  const vsTitle = cfg.vsTitle ?? `Excel & WhatsApp vs PROGESTI — ${cfg.primaryKw}`;
  const ctaPrimaryLabel = cfg.ctaPrimaryLabel ?? "Essai gratuit 15 j sans CB";
  const ctaSecondaryLabel = cfg.ctaSecondaryLabel ?? "Voir une démo terrain";
  const trustLeft = cfg.trustLeft ?? "Verticale sécurité · vacations & preuves";
  const crumbLabel = cfg.crumbLabel ?? cfg.seoTitle?.split("—")[0]?.trim() ?? cfg.h1Lead;

  return {
    claimBefore: "Du terrain à la",
    claimHighlight: "facture",
    claimSub,
    productStrip,
    showcaseBadgeRight,
    vsTitle,
    ctaPrimaryLabel,
    ctaSecondaryLabel,
    trustLeft,
    crumbLabel,
    secondaryKw: cfg.secondaryKw ?? [],
    persona: cfg.persona ?? { role: "", pains: [], jargon: [], objections: [] },
    scenario: cfg.scenario ?? "",
    seoIntent: cfg.seoIntent ?? "",
    antiCanni: cfg.antiCanni ?? "",
    outline: cfg.outline ?? [],
    tone: cfg.tone ?? "Terrain, direct, français métier sécurité privée.",
    ctas: cfg.ctas ?? [ctaPrimaryLabel, ctaSecondaryLabel, "Tarifs publics"],
    schema: cfg.schema ?? ["SoftwareApplication", "FAQPage"],
    maillage: cfg.maillage ?? [],
    checklist: cfg.checklist ?? [],
    metaTitle: cfg.metaTitle ?? cfg.seoTitle ?? "",
    metaDesc: cfg.metaDesc ?? cfg.seoDesc ?? "",
    seoTitle: cfg.seoTitle ?? cfg.metaTitle ?? "",
    seoDesc: cfg.seoDesc ?? cfg.metaDesc ?? "",
    h1Lead: cfg.h1Lead ?? "",
    h1: cfg.h1 ?? "",
    heroSub: cfg.heroSub ?? cfg.sub ?? "",
    sub: cfg.sub ?? cfg.heroSub ?? "",
    empathyH2: cfg.empathyH2 ?? "",
    empathyBody: cfg.empathyBody ?? "",
    showcaseTitle: cfg.showcaseTitle ?? "",
    showcaseSub: cfg.showcaseSub ?? "",
    showcaseBadgeLeft: cfg.showcaseBadgeLeft ?? { title: "Poste / site", sub: "Planning à jour" },
    proofH2: cfg.proofH2 ?? "",
    proofQuote: cfg.proofQuote ?? "",
    proofItems: cfg.proofItems ?? [],
    demo: cfg.demo,
    bodySections: cfg.bodySections ?? [],
    faq: cfg.faq ?? [],
    gridItems: cfg.gridItems ?? [],
    ...cfg,
    slug,
    key: slug,
  };
}

/** @returns {SecPageDef[]} */
export function buildSecPages() {
  return [
    page({
      id: "SEC-01",
      slug: "logiciel-securite-gardiennage",
      path: "/logiciel-securite-gardiennage",
      type: "pilier",
      primaryKw: "logiciel gardiennage",
      secondaryKw: ["logiciel entreprise sécurité", "gestion société gardiennage", "logiciel vacations sécurité"],
      persona: {
        role: "Dirigeant / gérant société de sécurité privée (15–80 agents)",
        pains: [
          "vacation non pourvue découverte par le client",
          "remplacements sur WhatsApp à 21h",
          "heures contestées en fin de mois",
          "rapport client reconstruit le lundi",
          "Excel « planning_v23_FINAL » divergent du terrain",
        ],
        jargon: ["vacation", "poste", "ronde", "main courante", "backup", "consignes site", "réalisé", "donneur d'ordre"],
        objections: ["Excel + WhatsApp suffit", "Les agents ne pointeront pas", "Trop lourd pour notre taille", "Outil propreté déguisé"],
      },
      scenario:
        "Vendredi 17h45 : un agent se désiste pour la vacation 22h–6h sur un site industriel. Le gérant trouve un backup briefé, met à jour le planning, et s'assure que pointages + main courante du week-end seront exploitables lundi pour le reporting client.",
      seoIntent: "Transactionnel — intent large « logiciel gardiennage ». Pilier money sans cannibaliser rondes, event, SSIAP.",
      antiCanni: "H1 pilier générique. Renvoyer rondes, event, SSIAP, main courante vers filles dédiées.",
      outline: [
        "H2 Empathie dirigeant : trou de vacation & rapport client",
        "H2 Démo flux planning → présence → facture",
        "H2 Posts, backups, consignes, preuves",
        "H2 Excel/WhatsApp vs source de vérité",
        "H2 Segments TPE → multi-sites + maillage",
        "H2 FAQ métier (pas promesses CNAPS)",
      ],
      h1Lead: "Logiciel pour sociétés de sécurité privée",
      h1: "vacations tenues, preuves terrain, facture du réalisé",
      seoTitle: "Logiciel gardiennage & sécurité — vacations & preuves",
      seoDesc:
        "Logiciel gardiennage & sécurité privée : vacations, preuves terrain, facture du réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
      sub: "Affectez vos agents, couvrez les postes, gardez les preuves de présence et facturez le réalisé — sans reconstruire le mois sur Excel.",
      empathyH2: "En sécurité privée, le flou se paie cash",
      empathyBody:
        "Vacation non couverte, ronde non prouvée, client qui demande le rapport le lundi : WhatsApp et le tableur ne tiennent pas. Il vous faut une source de vérité bureau ↔ terrain.",
      showcaseTitle: "Vacations, preuves, facture — la même chaîne",
      showcaseSub: "Du planning agent à la ligne de facture, sans double saisie.",
      showcaseBadgeLeft: { title: "Poste / vacation", sub: "Couverture visible" },
      productStrip: "Sécurité · vacations · facture réalisé",
      proofH2: "Conçu pour le rythme d'une société de gardiennage",
      proofQuote: "Si ce n'est pas dans le planning et le pointage, ce n'est pas fiable.",
      proofItems: [
        { title: "Posts couverts", text: "Titulaires, backups, trous visibles avant le client." },
        { title: "Preuves exploitables", text: "Présences et passages historisés pour le donneur d'ordre." },
        { title: "Facture alignée", text: "Le réalisé terrain alimente la facturation — moins d'écarts de fin de mois." },
      ],
      vsTitle: "Excel + WhatsApp vs une chaîne vacation → facture",
      demo: {
        eyebrow: "Démo · flux pilier",
        h2: "De la vacation planifiée à la facture du réalisé",
        lead: "Un scénario type : site industriel, vacation de nuit, backup de dernière minute.",
        scenario: "Site « Entrepôt Nord » — vacation 22h–06h, agent titulaire indisponible à 17h45.",
        steps: [
          { label: "Planning", detail: "Vacation publiée, backup affecté, consignes site visibles mobile." },
          { label: "Présence", detail: "Pointage début/fin + main courante incidents." },
          { label: "Contrôle", detail: "Exploitation valide heures vs contrat." },
          { label: "Facture", detail: "Ligne générée depuis le réalisé pointé." },
        ],
        uiLabel: "Vacation 22h–06h · Entrepôt Nord",
        uiRows: [
          { left: "Titulaire prévu", right: "Agent M. — indisponible", status: "alert" },
          { left: "Backup affecté", right: "Agent L. — brief consignes OK", status: "ok" },
          { left: "Pointage réel", right: "21h58 → 06h04", status: "ok" },
          { left: "Ligne facture", right: "8h04 facturables · brouillon prêt", status: "ok" },
        ],
        takeaway: "Une seule chaîne : plus de ressaisie entre planning, terrain et compta.",
        primaryCtaLabel: "Essayer sur vos vacations",
        secondaryCtaLabel: "Voir le flux en démo",
      },
      bodySections: [
        {
          h2: "Ce que vous structurez en gardiennage (sans promesse miracle)",
          body: "Posts fixes, renforts, consignes site, historique d'activité : PROGESTI centralise l'opérationnel. Ce n'est pas un substitut à vos obligations professionnelles — c'est l'outil qui évite le chaos administratif.",
          bullets: ["Vacations par site et par créneau", "Backups visibles avant le trou", "Consignes accessibles sur mobile"],
        },
        {
          h2: "Pour qui : de la TPE multi-sites au contrat cadre",
          body: "Même logique pour 12 agents ou 120 : une source de vérité. Les pages audience (industriel, retail, grands comptes) détaillent les contraintes ; le pilier tient le flux global.",
          h3: [
            { title: "TPE / petites sociétés", body: "Prise en main rapide, tarif public dès 29,99 € HT/mois." },
            { title: "Multi-sites", body: "Portefeuille unifié sans tableur par client." },
          ],
        },
      ],
      faq: [
        { q: "Logiciel gardiennage, pas nettoyage ?", a: "Oui — verticale /securite dédiée, séparée propreté et espaces verts." },
        { q: "PROGESTI remplace l'agrément / CNAPS ?", a: "Non. Organisation vacations, preuves et facturation — pas conseil juridique." },
        { q: "Pointage mobile ?", a: "Oui — base des preuves et de la facturation saine." },
        { q: "Prix ?", a: "Dès 29,99 € HT/mois tout inclus. Essai 15 jours sans CB." },
        { q: "Support FR ?", a: "Oui — équipe joignable, basée en Occitanie." },
      ],
      gridItems: [
        { title: "Gardiennage site", text: "Poste fixe & couverture vacations.", href: "/securite/gardiennage" },
        { title: "Planning agents", text: "Éviter les trous avant le client.", href: "/securite/planning-agents" },
        { title: "Facturation gardiennage", text: "Heures pointées → facture.", href: "/securite/facturation-gardiennage" },
      ],
      maillage: ["/securite", "/securite/gardiennage", "/securite/planning-agents", "/tarifs", "/essai-gratuit"],
      checklist: ["H1 ≠ page gardiennage service", "Démo flux unique", "Pas fausse certif CNAPS", "Prix/essai factuels"],
    }),

    page({
      id: "SEC-02",
      slug: "hub",
      path: "/securite",
      type: "hub",
      primaryKw: "solutions sécurité PROGESTI",
      secondaryKw: ["hub gardiennage", "pages métier sécurité privée"],
      persona: {
        role: "Dirigeant ou resp. exploitation indécis sur la bonne page",
        pains: ["pages fourre-tout", "confusion ronde vs poste vs event", "peur du mauvais module"],
        jargon: ["vacation", "SSIAP", "event", "donneur d'ordre", "multi-sites"],
        objections: ["Tout se ressemble", "Je veux juste les rondes"],
      },
      scenario:
        "Un dirigeant tape « logiciel sécurité » et arrive ici. En 30 s : poste fixe → gardiennage, passages → rondes, festival → event, nuit → astreinte, main courante → page dédiée.",
      seoIntent: "Navigation hub — oriente sans cannibaliser le pilier money.",
      antiCanni: "H1 hub, pas « logiciel gardiennage ». Lien fort pilier + clusters.",
      h1Lead: "Sécurité & gardiennage",
      h1: "choisissez la page qui correspond à votre terrain",
      seoTitle: "Sécurité & gardiennage — hub solutions",
      seoDesc:
        "Hub sécurité & gardiennage PROGESTI : postes, rondes, industriel, retail, event, planning, preuves. Essai 15 j sans CB.",
      sub: "Poste fixe, rondes, industriel, retail, événementiel, process : chaque page a un angle SEO distinct. Ce hub oriente.",
      empathyH2: "Une verticale, des intentions différentes",
      empathyBody: "Chercher « preuve de ronde » ≠ « sécurité festival ». Mélanger les angles perd Google et vos prospects.",
      showcaseTitle: "Parcours sécurité sans cannibalisation",
      showcaseSub: "Du besoin terrain à la bonne page — puis l'essai.",
      showcaseBadgeLeft: { title: "Hub /securite", sub: "Navigation intent" },
      productStrip: "Sécurité · hub · maillage intent",
      proofH2: "Guider, pas tout dire en une page",
      proofQuote: "La bonne page parle de VOTRE vacation — pas d'un SaaS générique.",
      proofItems: [
        { title: "Services", text: "Gardiennage, rondes, agents, sûreté, consignes, main courante." },
        { title: "Audiences", text: "Industriel, retail, event, copro, BTP, sites sensibles, PME, grands comptes." },
        { title: "Process", text: "Planning, pointage, preuves, factu, PC sécurité, SSIAP (orga postes)." },
      ],
      vsTitle: "Une landing fourre-tout vs un hub intent clair",
      demo: {
        eyebrow: "Démo · parcours hub",
        h2: "Trouver la bonne porte en 30 secondes",
        lead: "Intent → page fille → essai.",
        scenario: "Prospect hésite entre ronde entrepôt et poste fixe copro.",
        steps: [
          { label: "Besoin", detail: "« Je dois prouver les rondes entrepôt »" },
          { label: "Page", detail: "→ /securite/rondes-surveillance" },
          { label: "Sœur", detail: "Gardiennage poste si mixte site" },
          { label: "Essai", detail: "15 j sans CB sur vrais sites" },
        ],
        uiLabel: "Assistant intent (maquette)",
        uiRows: [
          { left: "Poste fixe 24/7", right: "→ Gardiennage", status: "ok" },
          { left: "Passages horodatés", right: "→ Rondes", status: "ok" },
          { left: "Concert / salon", right: "→ Événementiel", status: "ok" },
          { left: "Registre incidents", right: "→ Main courante", status: "ok" },
        ],
        takeaway: "Le hub ne vend pas tout : il route vers la page qui convertit.",
      },
      bodySections: [
        {
          h2: "Comment choisir votre page",
          body: "Partez du métier terrain : type de site (industriel, retail…), type de prestation (poste, ronde, event), ou process (planning, pointage, factu). Le pilier reste la porte money « logiciel gardiennage ».",
          bullets: ["Service vs audience vs process", "Une intention SEO par URL", "Maillage vers 2–3 sœurs + tarifs"],
        },
        {
          h2: "Verticales séparées (non négociable)",
          body: "Sécurité ≠ propreté ≠ espaces verts. Pas de fusion des configs : chaque verticale a son hub et son pilier.",
        },
      ],
      faq: [
        { q: "Par où commencer ?", a: "Pilier logiciel gardiennage, ou votre type de site / process." },
        { q: "Séparé nettoyage / EV ?", a: "Oui — verticales distinctes." },
        { q: "Essai ?", a: "15 jours sans CB." },
        { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
      ],
      gridItems: [
        { title: "Logiciel gardiennage", text: "Pilier money — flux vacation → facture.", href: "/logiciel-securite-gardiennage" },
        { title: "Gardiennage site", text: "Poste fixe & couverture.", href: "/securite/gardiennage" },
        { title: "Rondes", text: "Passages prouvés.", href: "/securite/rondes-surveillance" },
      ],
      maillage: ["/logiciel-securite-gardiennage", "/securite/gardiennage", "/securite/rondes-surveillance", "/tarifs"],
    }),

  ];
}
