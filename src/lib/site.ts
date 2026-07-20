export const site = {
  name: "PROGESTI",
  tagline: "GÉREZ. OPTIMISEZ. PERFORMEZ.",
  usp: "Organisez votre nettoyage professionnel — planning, terrain, facture",
  description:
    "Logiciel de gestion pour entreprises de nettoyage et de propreté. Planifiez vos agents, pointez le terrain et facturez — bureaux, syndics, professionnels et fin de chantier.",
  url: "https://progesti.fr",
  email: "contact@progesti.fr",
  /** Téléphone public (affichage FR). */
  phone: "05 82 95 09 19",
  /** Lien tel: (E.164). */
  phoneTel: "+33582950919",
  /**
   * Profils publics (fiche Google Business, LinkedIn, etc.).
   * Ajouter l’URL GMB après création — voir docs/SEO-GMB-CHECKLIST.md.
   */
  sameAs: [] as readonly string[],
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
  { href: "/blog", label: "Blog" },
  { href: "/demo", label: "Démo" },
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
      "Halls, cages d’escalier, locaux techniques : pilotez les passages récurrents et documentez la qualité pour vos interlocuteurs immobiliers.",
  },
  {
    slug: "professionnels",
    title: "Professionnels & commerces",
    navHint: "Cabinets, commerces, restaurants",
    headline: "Locaux pros avec contraintes d’horaires et d’accès",
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
    headline: "Démarrer sans usine à gaz — dès 29,99 € HT/mois",
    lead:
      "Un seul outil pour remplacer Excel et WhatsApp : sites, planning, pointage et factures, avec essai 2 mois sans carte bancaire.",
  },
] as const;

export const modules = [
  {
    slug: "planification",
    title: "Planification",
    short: "Affectez agents et sites sans double saisie ni oubli.",
    pain: "Planning Excel + WhatsApp = erreurs quotidiennes.",
  },
  {
    slug: "gestion-rh",
    title: "Gestion RH",
    short: "Contrats, absences et variables de paie au même endroit.",
    pain: "RH dispersée, oubli d’heures, stress de fin de mois.",
  },
  {
    slug: "facturation",
    title: "Facturation & relation client",
    short: "Devis et factures alignés sur le réalisé terrain.",
    pain: "Factures en retard, relances manuelles, litiges.",
  },
  {
    slug: "contrats",
    title: "Contrats",
    short: "Suivez engagements multi-sites et renouvellements.",
    pain: "Contrats papier, dates de fin oubliées.",
  },
  {
    slug: "stock",
    title: "Stock",
    short: "Consommables et matériel suivis par site ou équipe.",
    pain: "Ruptures, gaspillages, inventaires approximatifs.",
  },
  {
    slug: "prepaie",
    title: "Prépaie",
    short: "Préparez les éléments variables sans ressaisie.",
    pain: "Soirées perdues sur les heures et avenants.",
  },
  {
    slug: "tableaux-de-bord",
    title: "Tableaux de bord",
    short: "Pilotez activité, charge et rentabilité en temps réel.",
    pain: "Aucune vision claire du mois en cours.",
  },
  {
    slug: "geolocalisation",
    title: "Géolocalisation",
    short: "Localisez interventions et tournées terrain.",
    pain: "Déplacements flous, contrôle difficile.",
  },
  {
    slug: "pointage",
    title: "Pointage",
    short: "Pointage mobile fiable pour vos agents de propreté.",
    pain: "Feuilles papier, heures contestées.",
  },
  {
    slug: "bon-intervention",
    title: "Bon d’intervention",
    short: "Bons signés sur place, preuves conservées.",
    pain: "Preuves perdues, litiges clients.",
  },
  {
    slug: "supervision",
    title: "Supervision",
    short: "Contrôle qualité et suivi des passages.",
    pain: "Qualité irrégulière, clients qui partent.",
  },
] as const;

export type BillingPeriod = "month" | "year";

export const plans = [
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

export const planInclusions = [
  "Comptes clients illimités",
  "Stockage illimité",
  "Mise en place offerte",
  "Mises à jour gratuites",
  "Cloud + apps Android & iOS",
  "Tous les modules fonctionnels",
  "Fiches clients et sites illimitées",
  "Maintenance comprise",
] as const;

export const trustBadges = [
  { title: "Essai 2 mois", text: "Sans carte bancaire" },
  { title: "Tous modules", text: "Inclus dans chaque offre" },
  { title: "Résiliable", text: "Sans engagement long" },
  { title: "Support FR", text: "Équipe à votre écoute" },
  { title: "Mobile", text: "Android & iOS" },
  { title: "Mises à jour", text: "Inclues et continues" },
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
    text: "Dès 29,99€ HT/mois. Pas de module surprise. Vous savez exactement ce que vous payez.",
  },
] as const;

export const benefits = [
  {
    title: "Gagnez des heures chaque semaine",
    text: "Moins de double saisie entre Excel, WhatsApp et la facturation.",
  },
  {
    title: "Réduisez les litiges",
    text: "Pointage et bons d’intervention tracent le réalisé sur le terrain.",
  },
  {
    title: "Facturez plus vite",
    text: "Passez du terrain à la facture sans perdre d’informations.",
  },
  {
    title: "Pilotez sereinement",
    text: "Un cockpit simple pour voir l’activité, la charge et les priorités.",
  },
] as const;

export const faqItems = [
  {
    q: "Combien de temps faut-il pour démarrer ?",
    a: "Comptez quelques minutes pour créer votre compte et ajouter vos premiers sites. La plupart des indépendants sont opérationnels le jour même.",
  },
  {
    q: "Combien de temps dure l’essai gratuit ?",
    a: "2 mois complets, sans carte bancaire, avec tous les modules inclus.",
  },
  {
    q: "Puis-je importer mes données ?",
    a: "Oui. Vous pouvez reprendre clients, sites et contrats. Nous pouvons aussi vous accompagner sur l’intégration.",
  },
  {
    q: "Y a-t-il un engagement ?",
    a: "Non. Vous pouvez résilier selon les conditions de votre abonnement, sans durée longue imposée.",
  },
  {
    q: "Puis-je résilier quand je veux ?",
    a: "Oui. L’objectif est que vous restiez parce que l’outil vous sert, pas parce que vous êtes bloqué.",
  },
  {
    q: "Les données sont-elles sécurisées ?",
    a: "Oui. Accès contrôlé, bonnes pratiques de sécurité applicative, et hébergement professionnel. Détails précisés dans la politique de confidentialité.",
  },
  {
    q: "Où sont hébergées les données ?",
    a: "Hébergement cloud professionnel, avec cible d’infrastructure en France (OVH / équivalent) à la mise en production. Les détails techniques seront publiés dans les mentions légales.",
  },
  {
    q: "Le logiciel fonctionne-t-il sur mobile ?",
    a: "Oui. PROGESTI est accessible en cloud, sur Android et iOS, pour le bureau comme pour le terrain.",
  },
  {
    q: "Y a-t-il des mises à jour ?",
    a: "Oui. Les mises à jour évolutives sont incluses dans toutes les offres, sans surcoût.",
  },
  {
    q: "Y a-t-il une assistance ?",
    a: "Oui. Une assistance humaine est disponible pour vous aider à démarrer et à utiliser le logiciel au quotidien.",
  },
  {
    q: "Puis-je inviter mon équipe ?",
    a: "Oui. Selon l’offre (Starter, Pro, Premium), vous ajoutez des utilisateurs pour vos agents et votre administration.",
  },
  {
    q: "Les sauvegardes sont-elles automatiques ?",
    a: "Oui. Les sauvegardes font partie du fonctionnement cloud de la plateforme.",
  },
  {
    q: "Puis-je changer d’offre ?",
    a: "Oui. Vous pouvez passer de Starter à Pro ou Premium quand votre équipe grandit.",
  },
  {
    q: "Les paiements sont-ils sécurisés ?",
    a: "Oui. Les paiements d’abonnement passeront par un prestataire de paiement sécurisé conforme aux standards du marché.",
  },
  {
    q: "Quelle est la disponibilité du service ?",
    a: "La plateforme est conçue pour une disponibilité élevée. Un statut et des engagements plus précis seront publiés avec la prod finale.",
  },
  {
    q: "Que se passe-t-il après l’essai gratuit ?",
    a: "Vous choisissez Starter, Pro ou Premium pour continuer — ou vous arrêtez. Aucune carte n’est demandée pendant l’essai.",
  },
  {
    q: "Puis-je récupérer mes données ?",
    a: "Oui. Vous pouvez demander l’export / récupération de vos données selon les procédures prévues.",
  },
  {
    q: "PROGESTI est-il adapté aux auto-entrepreneurs ?",
    a: "Oui. L’offre Starter est pensée pour les indépendants et toutes petites structures de nettoyage.",
  },
  {
    q: "Faut-il payer module par module ?",
    a: "Non. Chaque offre inclut l’ensemble des modules : planning, RH, facturation, terrain, tableaux de bord, etc.",
  },
  {
    q: "Y a-t-il des frais cachés ?",
    a: "Non. Pas de frais d’entrée, pas de frais d’installation. Le prix affiché est le prix payé.",
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
    minimumFractionDigits: 2,
  }).format(value);
}
