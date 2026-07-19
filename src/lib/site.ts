export const site = {
  name: "PROGESTI",
  tagline: "GÉREZ. OPTIMISEZ. PERFORMEZ.",
  usp: "L'intelligence organisée au service de vos performances",
  description:
    "Logiciel de gestion pour entreprises de nettoyage et de propreté. Planning, facturation, RH et pointage terrain — conçu pour auto-entrepreneurs et petites structures.",
  url: "https://progesti.fr",
  email: "contact@progesti.fr",
  phone: null as string | null,
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
  { href: "/tarifs", label: "Tarifs" },
  { href: "/demo", label: "Démo" },
  { href: "/faq", label: "FAQ" },
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
  { slug: "guides", label: "Guides" },
  { slug: "conseils-metier", label: "Conseils métier" },
  { slug: "comparatifs", label: "Comparatifs" },
  { slug: "etudes-de-cas", label: "Études de cas" },
  { slug: "nouveautes", label: "Nouveautés produit" },
] as const;

export const blogPosts = [
  {
    slug: "organiser-planning-equipe-nettoyage",
    title: "Comment organiser le planning d’une équipe de nettoyage",
    category: "guides",
    excerpt:
      "Méthode simple pour éviter les trous de planning, les doublons et les interventions oubliées.",
    body: [
      "Un planning de nettoyage solide commence par une liste claire des sites, des fréquences et des compétences agents.",
      "Étape 1 : cartographier vos sites (adresse, durée estimée, contraintes d’accès). Étape 2 : définir des créneaux récurrents. Étape 3 : affecter un agent titulaire + un backup.",
      "Évitez WhatsApp comme outil de planification : gardez-le pour l’urgence, pas pour la structure.",
      "Avec PROGESTI, le planning alimente ensuite le pointage et la facturation — c’est là que le gain de temps apparaît.",
    ],
  },
  {
    slug: "facturer-plus-vite-entreprise-proprete",
    title: "Facturer plus vite sans perdre en conformité",
    category: "conseils-metier",
    excerpt:
      "Les étapes concrètes pour passer du terrain à la facture sans Excel ni relances chaotiques.",
    body: [
      "Le retard de facturation vient souvent d’une information terrain incomplète : heures non validées, bons manquants, sites mal identifiés.",
      "Mettez en place une règle simple : pas de facture sans pointage validé (ou bon d’intervention signé).",
      "Regroupez par client / site / période. Automatisez les relances sur les factures non payées.",
      "PROGESTI relie ces étapes pour réduire la double saisie et accélérer l’émission.",
    ],
  },
  {
    slug: "progesti-vs-propret",
    title: "PROGESTI vs Propret : comment choisir ?",
    category: "comparatifs",
    excerpt:
      "Critères concrets pour une entreprise de nettoyage qui veut tester avant d’acheter.",
    body: [
      "Les deux solutions ciblent le métier de la propreté. Comparez surtout : durée d’essai, clarté des tarifs, accompagnement migration, et confort d’usage au quotidien.",
      "PROGESTI propose un essai de 2 mois sans carte bancaire et des tarifs publics dès 29,99€ HT/mois, tous modules inclus.",
      "Le meilleur critère reste un test sur vos propres sites. Lancez la démo interactive ou l’essai gratuit.",
    ],
  },
  {
    slug: "passer-de-excel-a-un-logiciel-nettoyage",
    title: "Passer d’Excel à un logiciel de nettoyage sans chaos",
    category: "guides",
    excerpt: "Un plan de migration en 4 étapes pour quitter les tableaux sans perdre le fil.",
    body: [
      "Exportez d’abord clients, sites et fréquences. Ne cherchez pas la perfection : importez le cœur, affinez ensuite.",
      "Formez 1 référent (vous) avant toute l’équipe. Puis basculez le planning semaine par semaine.",
      "Gardez Excel en lecture seule 15 jours comme filet de sécurité, puis archivez-le.",
    ],
  },
  {
    slug: "pointage-mobile-agents-proprete",
    title: "Pointage mobile : ce qui change pour vos agents",
    category: "conseils-metier",
    excerpt: "Pourquoi le pointage mobile réduit les litiges et accélère la prépaie.",
    body: [
      "Le pointage papier crée des contestations. Le mobile horodate et localise le passage.",
      "Expliquez le “pourquoi” aux agents : moins de discussions sur les heures, paie plus juste.",
      "Couplé aux bons d’intervention, vous obtenez une preuve utile en cas de litige client.",
    ],
  },
  {
    slug: "choisir-offre-starter-pro-premium",
    title: "Starter, Pro ou Premium : quelle offre choisir ?",
    category: "guides",
    excerpt: "Grille simple selon le nombre d’utilisateurs et la taille de votre équipe.",
    body: [
      "Starter : idéal AE / 1 administrateur.",
      "Pro : jusqu’à 5 utilisateurs — petite équipe terrain + admin.",
      "Premium : jusqu’à 20 utilisateurs — multi-sites et croissance.",
      "Dans tous les cas, les modules sont inclus. L’essai 2 mois permet de valider avant de payer.",
    ],
  },
  {
    slug: "eviter-oublis-interventions-nettoyage",
    title: "Comment éviter les oublis d’interventions",
    category: "conseils-metier",
    excerpt: "Check-list opérationnelle pour sécuriser vos passages clients.",
    body: [
      "Chaque site doit avoir un titulaire nommé et une fréquence visible.",
      "Relisez le planning la veille. Confirmez les accès spéciaux (badges, codes).",
      "Le lendemain, vérifiez les pointages non validés avant 12h.",
    ],
  },
  {
    slug: "essai-gratuit-logiciel-nettoyage-checklist",
    title: "Checklist : réussir son essai gratuit logiciel nettoyage",
    category: "guides",
    excerpt: "Ce qu’il faut tester en 14 jours (même si l’essai PROGESTI dure 2 mois).",
    body: [
      "Jour 1-2 : créer 5 sites et 3 agents. Jour 3-5 : planifier une semaine réelle.",
      "Jour 6-10 : pointer et émettre une facture test. Jour 11-14 : décider avec votre checklist.",
      "Si un point bloque, demandez un accompagnement via /rendez-vous.",
    ],
  },
] as const;

export function formatEuro(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
}
