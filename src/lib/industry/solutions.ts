import { site, trialCopy } from "@/lib/site";
import { defaultIndustryConfig, mergeIndustryConfig } from "./default";

export const bureauxConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "bureaux",
  seo: {
    title: "Logiciel nettoyage de bureaux — planning & facturation",
    description:
      `Organisez le ménage des bureaux et open spaces : planning multi-sites, pointage, facturation. 149 € HT/mois tout inclus. ${trialCopy.label}.`,
    path: "/solutions/bureaux",
  },
  hero: {
    h1Lead: "Logiciel nettoyage de bureaux",
    h1: "pour organiser open spaces et multi-étages",
    sub: "Fréquences, accès et équipes tôt le matin ou en soirée — du planning à la facture, sans tableur ni WhatsApp.",
    claimBefore: "Du créneau à la",
    claimHighlight: "facture",
    claimSub: "Tertiaire, coworking, immeubles de bureaux",
    trustLeft: "Pensé pour le nettoyage tertiaire français",
    productStripLabel: "Planning bureaux · fréquences visibles",
  },
  empathy: {
    h2: "Faites tourner le tertiaire sans perdre le fil",
    body: "Hebdo, bihebdo, open spaces oubliés, badges et alarmes mal communiqués : une info perdue coûte une vacation. PROGESTI structure vos sites, vos créneaux et votre facturation pour que chaque étage soit couvert — et prouvé.",
  },
  showcase: {
    title: "Planning qui suit vos immeubles",
    sub: "Fréquences, agents titulaires et backups — une semaine lisible pour le tertiaire.",
    image: "/hero-planning.png",
    imageAlt: "Planning PROGESTI — passages bureaux et open spaces",
    badgeLeft: { title: "3 étages · 1 agent", sub: "Open space 06:30–08:00" },
    badgeRight: "Passage OK ✓",
  },
  grid: {
    h2Lead: "Aussi rigoureux que",
    h2Highlight: "vos contrats tertiaires",
  },
  faq: [
    {
      q: "PROGESTI convient-il aux entreprises multi-étages ?",
      a: "Oui. Vous structurez sites et zones (étages, parties communes) avec fréquences et agents dédiés.",
    },
    {
      q: "Peut-on gérer des équipes de nuit ou tôt le matin ?",
      a: "Oui. Les créneaux et affectations sont libres : tôt le matin, soirée ou nuit selon vos contrats.",
    },
    {
      q: "Le pointage est-il utile pour les clients tertiaires ?",
      a: "Oui. Arrivée et départ horodatés — utile en cas de litige ou pour justifier la facturation.",
    },
    {
      q: "Combien coûte PROGESTI pour une TPE bureaux ?",
      a: `149 € HT/mois, jusqu'à 5 utilisateurs, tous modules inclus. ${trialCopy.noCard}.`,
    },
    {
      q: "Peut-on remplacer Excel progressivement ?",
      a: "Oui. Beaucoup démarrent par le planning + pointage, puis branchent la facturation.",
    },
    {
      q: "Les modules sont-ils payants en plus ?",
      a: "Non. Planning, pointage, facturation, RH… tout est inclus à 149 € HT/mois.",
    },
  ],
});

export const syndicsConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "syndics",
  seo: {
    title: "Logiciel nettoyage syndics & parties communes",
    description:
      `Multi-immeubles, passages récurrents, preuves terrain pour syndics. PROGESTI 149 € HT/mois tout inclus. ${trialCopy.label}.`,
    path: "/solutions/syndics",
  },
  hero: {
    h1Lead: "Logiciel nettoyage syndics",
    h1: "pour parties communes et multi-immeubles",
    sub: "Halls, cages d’escalier, locaux techniques : planning, preuves et historique pour vos interlocuteurs immobiliers.",
    claimBefore: "Du hall à la",
    claimHighlight: "preuve",
    claimSub: "Reporting syndic sans dossier papier",
    trustLeft: "Adapté aux prestataires syndic et immobilier",
    productStripLabel: "Multi-immeubles · passages tracés",
  },
  empathy: {
    h2: "Tenir vos contrats syndic sans improvisation",
    body: "Portefeuille d’immeubles, demandes de preuves, accès locaux techniques : le syndic veut des faits, pas des promesses. PROGESTI centralise planning, pointages et historique pour répondre vite — et facturer ce qui est réellement fait.",
  },
  showcase: {
    title: "Preuves prêtes pour le syndic",
    sub: "Passages validés, historique et remontées terrain — sans photos éparpillées.",
    image: "/screen-passages.webp",
    imageAlt: "Preuves de passages PROGESTI — parties communes",
    badgeLeft: { title: "Immeuble Les Lilas", sub: "Hall · cage · local tech" },
    badgeRight: "Preuve archivée ✓",
  },
  grid: {
    h2Lead: "Aussi carré que",
    h2Highlight: "vos engagements syndic",
  },
  faq: [
    {
      q: "PROGESTI gère-t-il plusieurs immeubles ?",
      a: "Oui. Chaque immeuble est un site avec fréquences, agents et historique de passages.",
    },
    {
      q: "Peut-on prouver les passages aux syndics ?",
      a: "Oui. Pointages, historique et preuves conservés pour répondre aux contrôles et litiges.",
    },
    {
      q: "Est-ce adapté aux parties communes récurrentes ?",
      a: "Oui. Quotidien, hebdo, mensuel — les récurrences se programment une fois.",
    },
    {
      q: "Combien coûte PROGESTI ?",
      a: "149 € HT/mois, 5 utilisateurs, tous modules. Pas de surcoût par immeuble.",
    },
    {
      q: "Le support comprend-il le métier syndic ?",
      a: `Oui. Équipe FR joignable au ${site.phone}, basée à Toulouse (31).`,
    },
    {
      q: "Comment démarrer l’essai ?",
      a: `Essai ${site.trialDays} jours gratuit, sans carte bancaire.`,
    },
  ],
});

export const professionnelsConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "professionnels",
  seo: {
    title: "Logiciel nettoyage commerces & cabinets",
    description:
      `Cabinets médicaux, commerces, restaurants : horaires serrés, accès sensibles, preuves. PROGESTI 149 € HT/mois. ${trialCopy.label}.`,
    path: "/solutions/professionnels",
  },
  hero: {
    h1Lead: "Logiciel nettoyage professionnels",
    h1: "pour commerces et locaux à accès sensibles",
    sub: "Créneaux serrés, codes d’accès, exigences d’hygiène — planning et pointage sans chaos WhatsApp.",
    claimBefore: "De l’accès à la",
    claimHighlight: "preuve",
    claimSub: "Cabinets, commerces, restaurants",
    trustLeft: "Locaux pros avec contraintes d’horaires",
    productStripLabel: "Créneaux serrés · statuts live",
  },
  empathy: {
    h2: "Des locaux pros qui ne tolèrent pas l’approximation",
    body: "Fermeture à 19 h, passage avant ouverture, cabinet médical stérile : une équipe en retard ou un accès mal transmis casse la relation client. PROGESTI aligne planning, consignes d’accès et preuves pour des interventions carrées.",
  },
  showcase: {
    title: "Créneaux respectés, preuves à l’appui",
    sub: "Pointage horodaté et détails d’intervention — le client pro rassuré, le bureau serein.",
    image: "/screen-telegestion.webp",
    imageAlt: "Pointage PROGESTI — intervention locaux professionnels",
    badgeLeft: { title: "Cabinet Pasteur", sub: "10:30–12:00 · accès OK" },
    badgeRight: "Intervention validée ✓",
  },
  faq: [
    {
      q: "Peut-on gérer des créneaux très courts ?",
      a: "Oui. Les plages horaires et affectations sont configurables site par site.",
    },
    {
      q: "Les infos d’accès sont-elles centralisées ?",
      a: "Oui. Codes, clés et consignes sur la fiche site — visibles sur mobile.",
    },
    {
      q: "Est-ce adapté aux cabinets médicaux ?",
      a: "Oui. Passages planifiés, pointés et historisés — utile pour l’hygiène et la relation client.",
    },
    {
      q: "Prix et essai ?",
      a: `149 € HT/mois tout inclus · ${trialCopy.noCard.toLowerCase()}.`,
    },
    {
      q: "Facturation depuis le terrain ?",
      a: "Oui. Le réalisé alimente la facturation sans ressaisie.",
    },
    {
      q: "Support en France ?",
      a: `Oui — ${site.phone}.`,
    },
  ],
});

export const finDeChantierConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "fin-de-chantier",
  seo: {
    title: "Logiciel remise en état & fin de chantier",
    description:
      `Remise en état après travaux : planning serré, preuves photos, facturation rapide. PROGESTI 149 € HT/mois. ${trialCopy.label}.`,
    path: "/solutions/fin-de-chantier",
  },
  hero: {
    h1Lead: "Logiciel fin de chantier",
    h1: "pour remise en état et prestations ponctuelles",
    sub: "Organisez les équipes, capturez les preuves et facturez dès la livraison — sans double saisie.",
    claimBefore: "Du chantier à la",
    claimHighlight: "facture",
    claimSub: "Prestations ponctuelles, délais serrés",
    trustLeft: "Remise en état et nettoyage post-travaux",
    productStripLabel: "Devis · exécution · facture",
  },
  empathy: {
    h2: "Enchaîner les remises en état sans perdre la marge",
    body: "Planning serré, équipes à mobiliser vite, photos de livraison et facturation immédiate : la fin de chantier ne pardonne pas le flou. PROGESTI relie devis, exécution terrain et facture dans un seul flux.",
  },
  showcase: {
    title: "Devis signé → équipe → facture",
    sub: "Enchaînez commercial et ops sans retaper les heures dans un second outil.",
    image: "/screen-factures.webp",
    imageAlt: "Facturation PROGESTI — fin de chantier",
    badgeLeft: { title: "Chantier livré", sub: "Preuve photo · heures OK" },
    badgeRight: "Facture prête ✓",
  },
  faq: [
    {
      q: "PROGESTI convient-il aux prestations ponctuelles ?",
      a: "Oui. Devis, planning one-shot et facturation dans le même outil.",
    },
    {
      q: "Peut-on joindre des preuves photos ?",
      a: "Oui. Preuves et historique conservés avec les interventions.",
    },
    {
      q: "Facturation rapide après livraison ?",
      a: "Oui. Le pointage et le réalisé alimentent la facture.",
    },
    {
      q: "Prix ?",
      a: "149 € HT/mois, 5 utilisateurs, tous modules.",
    },
    {
      q: "Essai gratuit ?",
      a: `Oui — ${site.trialDays} jours, sans carte bancaire.`,
    },
    {
      q: "Migration depuis Excel ?",
      a: "Accompagnement possible pour reprendre clients et chantiers.",
    },
  ],
});

export const autoEntrepreneursConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "auto-entrepreneurs",
  seo: {
    title: "Logiciel nettoyage auto-entrepreneur — 149 € HT/mois",
    description:
      `Remplacez Excel et WhatsApp : sites, planning, pointage et factures. PROGESTI tout inclus pour TPE propreté. ${trialCopy.label}.`,
    path: "/solutions/auto-entrepreneurs",
  },
  hero: {
    h1Lead: "Logiciel nettoyage TPE",
    h1: "pour démarrer sans usine à gaz",
    sub: "Un seul outil à 149 € HT/mois : sites, planning, pointage et factures — idéal auto-entrepreneurs et petites équipes.",
    claimBefore: "D’Excel à la",
    claimHighlight: "facture",
    claimSub: "Simple, tout inclus, prix public",
    trustLeft: "Pensé pour les petites équipes propreté",
    productStripLabel: "149 € HT · tout inclus",
  },
  empathy: {
    h2: "Professionnaliser sans vous noyer",
    body: "Vous jonglez entre Excel, WhatsApp et factures Word : une heure oubliée, un site en double, une facture en retard. PROGESTI regroupe l’essentiel pour une TPE propre — sans module surprise ni devis opaque.",
  },
  showcase: {
    title: "Tout inclus, prix affiché",
    sub: "Planning, pointage, devis, factures, RH — 149 € HT/mois, 5 utilisateurs.",
    image: "/screen-telegestion.webp",
    imageAlt: "Tableau de bord PROGESTI — vue activité TPE",
    badgeLeft: { title: "5 utilisateurs", sub: "Tous modules inclus" },
    badgeRight: "149 € HT/mois",
  },
  faq: [
    {
      q: "PROGESTI est-il adapté aux auto-entrepreneurs ?",
      a: "Oui. Prise en main rapide, prix unique, pas de module payant en plus.",
    },
    {
      q: "Combien ça coûte vraiment ?",
      a: "149 € HT/mois, jusqu’à 5 utilisateurs, tous modules inclus.",
    },
    {
      q: "Faut-il une carte bancaire pour l’essai ?",
      a: `Non. Essai ${site.trialDays} jours gratuit.`,
    },
    {
      q: "Puis-je remplacer WhatsApp pour le planning ?",
      a: "Oui. Planning et pointage mobile centralisés — une seule vérité.",
    },
    {
      q: "Combien de temps pour démarrer ?",
      a: "Quelques minutes pour créer le compte et ajouter vos premiers sites.",
    },
    {
      q: "Support disponible ?",
      a: `Oui — ${site.phone}, équipe FR à Toulouse.`,
    },
  ],
});

export const industryConfigs = {
  default: defaultIndustryConfig,
  bureaux: bureauxConfig,
  syndics: syndicsConfig,
  professionnels: professionnelsConfig,
  "fin-de-chantier": finDeChantierConfig,
  "auto-entrepreneurs": autoEntrepreneursConfig,
} as const;
