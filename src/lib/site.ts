export const site = {
  name: "PROGESTI",
  tagline: "Le logiciel des entreprises de nettoyage.",
  usp: "Conçu par des gens du métier — planning, pointage, facture",
  description:
    "Logiciel de gestion pour entreprises de nettoyage et de propreté. Planifiez vos agents, pointez le terrain et facturez — bureaux, syndics, professionnels et fin de chantier.",
  url: "https://progesti.fr",
  email: "contact@progesti.fr",
  phone: "05 82 95 09 19",
  phoneTel: "+33582950919",
  sameAs: [] as readonly string[],
  trialDays: 7,
  /** @deprecated Use trialDays. Kept for backward compatibility with ads pages. */
  trialMonths: 2,
  company: {
    legalName: "MSNE SAS",
    siren: "106177116",
    siret: "10617711600014",
    tva: "FR44106177116",
    rcs: "Toulouse",
    capital: "5 000 €",
    address: "56 boulevard Vincent Auriol",
    city: "31170 Tournefeuille",
  },
} as const;

export const navLinks = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/solutions", label: "Solutions" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/ressources", label: "Ressources" },
  { href: "/faq", label: "FAQ" },
] as const;

export const solutions = [
  {
    slug: "bureaux",
    title: "Nettoyage de bureaux",
    navHint: "Tertiaire, open spaces, multi-étages",
    headline: "Organisez le ménage des bureaux comme un métier, pas comme un tableur",
    lead:
      "Fréquences, accès, équipes de nuit ou tôt le matin : PROGESTI structure vos sites tertiaires du planning à la facture.",
  },
  {
    slug: "syndics",
    title: "Syndics & copropriétés",
    navHint: "Parties communes, multi-immeubles",
    headline: "Parties communes multi-sites : planning, preuves et reporting syndic",
    lead:
      "Halls, cages d'escalier, locaux techniques : pilotez les passages récurrents et documentez la qualité pour vos interlocuteurs immobiliers.",
  },
  {
    slug: "professionnels",
    title: "Professionnels & commerces",
    navHint: "Cabinets, commerces, restaurants",
    headline: "Locaux pros avec contraintes d'horaires et d'accès",
    lead:
      "Cabinets médicaux, commerces et restaurants : horaires serrés, accès sensibles, preuves de passage — sans chaos WhatsApp.",
  },
  {
    slug: "fin-de-chantier",
    title: "Fin de chantier",
    navHint: "Remise en état, prestations ponctuelles",
    headline: "Remise en état : planning serré, preuves photos, facturation rapide",
    lead:
      "Prestations ponctuelles après travaux : organisez les équipes, capturez les preuves et facturez dès la livraison.",
  },
  {
    slug: "auto-entrepreneurs",
    title: "Auto-entrepreneurs & petites équipes",
    navHint: "Indépendants, TPE propreté",
    headline: "Démarrer sans usine à gaz — 149 € HT/mois",
    lead:
      "Un seul outil pour remplacer Excel et WhatsApp : sites, planning, pointage et factures. Demandez une démo.",
  },
] as const;

export const modules = [
  {
    slug: "planification",
    title: "Planning",
    short: "Affectez agents et sites sans double saisie ni oubli.",
    pain: "Planning Excel + WhatsApp = erreurs quotidiennes.",
  },
  {
    slug: "pointage",
    title: "Pointage & télégestion",
    short: "Pointage mobile avec géolocalisation et preuves terrain.",
    pain: "Feuilles papier, heures contestées.",
  },
  {
    slug: "clients",
    title: "Clients",
    short: "Fiches clients, sites rattachés, historique complet.",
    pain: "Infos dispersées, pas de vision client.",
  },
  {
    slug: "devis",
    title: "Devis",
    short: "Créez et envoyez vos devis professionnels.",
    pain: "Devis Word, pas de suivi.",
  },
  {
    slug: "facturation",
    title: "Facturation",
    short: "Factures alignées sur le réalisé terrain.",
    pain: "Factures en retard, relances manuelles.",
  },
  {
    slug: "impayes",
    title: "Impayés",
    short: "Suivez et relancez les factures impayées.",
    pain: "Trésorerie qui traîne, litiges.",
  },
  {
    slug: "gestion-rh",
    title: "RH",
    short: "Contrats, absences et variables de paie au même endroit.",
    pain: "RH dispersée, oubli d'heures.",
  },
  {
    slug: "rentabilite",
    title: "Rentabilité",
    short: "Pilotez marges et rentabilité par client ou site.",
    pain: "Aucune vision claire des marges.",
  },
  {
    slug: "crm",
    title: "CRM",
    short: "Suivez vos prospects et opportunités commerciales.",
    pain: "Prospects perdus, pas de suivi.",
  },
] as const;

export type BillingPeriod = "month" | "year";

export const mainPlan = {
  id: "progesti",
  name: "PROGESTI",
  users: "Jusqu'à 5 utilisateurs",
  monthly: 149,
  yearly: 1490,
  yearlyStrike: 1788,
  features: [
    "Tous les modules inclus",
    "Planning & affectations",
    "Pointage & télégestion",
    "Clients & sites illimités",
    "Devis & facturation",
    "Gestion des impayés",
    "RH & prépaie",
    "Tableaux de bord",
    "CRM intégré",
    "App mobile agents",
    "Support FR inclus",
  ],
} as const;

/** @deprecated Use mainPlan. Kept for backward compatibility with ads pages. */
export const legacyPlans = [
  {
    id: "starter",
    name: "Starter",
    users: "1 administrateur",
    monthly: 29.99,
    yearly: 299.9,
    yearlyStrike: 359.88,
    perUserHint: null as string | null,
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    users: "5 utilisateurs",
    monthly: 49.99,
    yearly: 499.9,
    yearlyStrike: 599.88,
    perUserHint: "Soit 9,99€ HT / utilisateur",
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    users: "20 utilisateurs",
    monthly: 99.99,
    yearly: 999.9,
    yearlyStrike: 1199.88,
    perUserHint: "Soit 4,99€ HT / utilisateur",
    highlight: false,
  },
] as const;

export const plans = legacyPlans;

export const planInclusions = [
  "Clients & sites illimités",
  "Tous les modules inclus",
  "App mobile Android & iOS",
  "Mise en place accompagnée",
  "Support FR inclus",
  "Mises à jour gratuites",
] as const;

export const trustBadges = [
  { title: "Essai 7 jours", text: "Sans engagement" },
  { title: "149 € HT/mois", text: "Tout inclus" },
  { title: "Support FR", text: "Équipe à Tournefeuille" },
  { title: "Mobile", text: "Android & iOS" },
] as const;

export const whyPoints = [
  {
    title: "Fait pour le nettoyage",
    text: "Planning, sites, agents, pointage et facturation — le vocabulaire de votre métier, pas un ERP générique.",
  },
  {
    title: "Prêt en quelques minutes",
    text: "Créez votre compte, ajoutez vos premiers sites, planifiez. Pas de formation de 3 jours pour démarrer.",
  },
  {
    title: "Prix clair, tout inclus",
    text: "149 € HT/mois, jusqu'à 5 utilisateurs. Pas de module surprise. Vous savez exactement ce que vous payez.",
  },
] as const;

export const benefits = [
  {
    title: "Gagnez des heures chaque semaine",
    text: "Moins de double saisie entre Excel, WhatsApp et la facturation.",
  },
  {
    title: "Réduisez les litiges",
    text: "Pointage et bons d'intervention tracent le réalisé sur le terrain.",
  },
  {
    title: "Facturez plus vite",
    text: "Passez du terrain à la facture sans perdre d'informations.",
  },
  {
    title: "Pilotez sereinement",
    text: "Un cockpit simple pour voir l'activité, la charge et les priorités.",
  },
] as const;

export const faqItems = [
  {
    q: "Combien coûte PROGESTI ?",
    a: "149 € HT par mois, jusqu'à 5 utilisateurs, tous les modules inclus. Pas de frais d'installation ni de module en supplément.",
  },
  {
    q: "Pour qui est fait PROGESTI ?",
    a: "Pour les entreprises de nettoyage et de propreté : bureaux, syndics, commerces, fin de chantier. TPE comme PME avec plusieurs équipes.",
  },
  {
    q: "Je gère encore tout sur Excel, c'est compliqué de migrer ?",
    a: "Non. On vous accompagne sur l'import de vos clients et sites. La prise en main est rapide, la plupart sont opérationnels en quelques heures.",
  },
  {
    q: "Comment je gère mes salariés ?",
    a: "Vous créez leurs fiches, les affectez aux sites, suivez leurs heures via le pointage mobile. Prépaie et variables RH sont centralisés.",
  },
  {
    q: "Comment je gère mes clients ?",
    a: "Fiche client, sites rattachés, contrats, historique de passages, factures — tout au même endroit.",
  },
  {
    q: "Comment fonctionnent les devis et factures ?",
    a: "Vous créez un devis, le convertissez en contrat, puis en facture. Le réalisé terrain alimente automatiquement la facturation.",
  },
  {
    q: "Comment fonctionne le pointage terrain ?",
    a: "Vos agents utilisent l'app mobile (Android/iOS). Prise de service, géolocalisation, bons d'intervention signés sur place.",
  },
  {
    q: "Le logiciel fonctionne-t-il sur mobile ?",
    a: "Oui. PROGESTI est accessible en cloud (bureau) et en app mobile (terrain) sur Android et iOS.",
  },
  {
    q: "Puis-je importer mes données existantes ?",
    a: "Oui. Nous vous accompagnons sur l'import de vos clients, sites et contrats. Pas de promesse d'import magique, mais un accompagnement réel.",
  },
  {
    q: "PROGESTI est-il adapté aux TPE ?",
    a: "Oui. L'offre à 149 € HT/mois est conçue pour les petites structures comme pour les entreprises multi-équipes.",
  },
  {
    q: "Comment demander une démo ?",
    a: "Cliquez sur « Demander une démo » pour prendre rendez-vous. Nous vous montrons le logiciel sur vos cas d'usage réels.",
  },
  {
    q: "Y a-t-il une assistance ?",
    a: "Oui. Support FR inclus, équipe basée à Tournefeuille (31). Nous vous accompagnons dès la mise en place.",
  },
] as const;

export const blogCategories = [
  { slug: "guides", label: "Guides opérationnels" },
  { slug: "conseils-metier", label: "Conseils métier propreté" },
  { slug: "comparatifs", label: "Comparatifs & alternatives" },
  { slug: "etudes-de-cas", label: "Études de cas" },
  { slug: "nouveautes", label: "Nouveautés produit" },
  { slug: "bureaux-tertiaire", label: "Bureaux & tertiaire" },
  { slug: "syndics-immobilier", label: "Syndics & immobilier" },
  { slug: "fin-de-chantier", label: "Fin de chantier" },
  { slug: "reglementation", label: "Réglementation & bonnes pratiques" },
] as const;

export function formatEuro(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
