export type GlossaryTerm = {
  slug: string;
  term: string;
  definition: string;
  related?: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "vacation",
    term: "Vacation",
    definition:
      "Créneau de travail d’un agent sur un site (durée et horaire définis). Le planning PROGESTI organise les vacations par site et par agent.",
    related: ["/fonctionnalites/planification", "/blog/organiser-planning-equipe-nettoyage"],
  },
  {
    slug: "parties-communes",
    term: "Parties communes",
    definition:
      "Espaces partagés d’un immeuble (halls, cages d’escalier, locaux techniques) souvent gérés via un syndic. Voir la solution syndics.",
    related: ["/solutions/syndics", "/blog/controle-qualite-parties-communes-syndic"],
  },
  {
    slug: "bon-d-intervention",
    term: "Bon d’intervention",
    definition:
      "Document (souvent signé / photo) qui atteste du travail réalisé sur un site. Utile en litige et pour la facturation.",
    related: ["/fonctionnalites/bon-intervention", "/blog/bons-intervention-preuves-photos-nettoyage"],
  },
  {
    slug: "pointage",
    term: "Pointage",
    definition:
      "Enregistrement de la présence / du passage d’un agent (heure, parfois géoloc). Remplace les feuilles papier.",
    related: ["/fonctionnalites/pointage", "/blog/pointage-mobile-agents-proprete"],
  },
  {
    slug: "site",
    term: "Site",
    definition:
      "Adresse ou local client à entretenir (bureau, immeuble, commerce, chantier). Unité de base du planning multi-sites.",
    related: ["/solutions/bureaux", "/fonctionnalites/planification"],
  },
  {
    slug: "frequence",
    term: "Fréquence",
    definition:
      "Rythme contractuel des passages (quotidien, hebdomadaire, mensuel…). À croiser avec les contraintes d’accès.",
    related: ["/blog/frequences-menage-bureaux-hebdo-mensuel"],
  },
  {
    slug: "agent-titulaire",
    term: "Agent titulaire",
    definition:
      "Agent habituellement affecté à un site. Associé à un backup pour éviter les sites orphelins.",
    related: ["/blog/backup-agent-sites-orphelins-nettoyage"],
  },
  {
    slug: "backup-agent",
    term: "Backup agent",
    definition:
      "Agent de remplacement prévu pour couvrir absences et imprévus sur un site donné.",
    related: ["/blog/backup-agent-sites-orphelins-nettoyage"],
  },
  {
    slug: "fin-de-chantier",
    term: "Fin de chantier",
    definition:
      "Prestation ponctuelle de remise en état après travaux, distincte de l’entretien récurrent.",
    related: ["/solutions/fin-de-chantier", "/blog/planning-fin-de-chantier-vs-entretien-recurrent"],
  },
  {
    slug: "remise-en-etat",
    term: "Remise en état",
    definition:
      "Nettoyage approfondi visant à livrer un local propre après chantier ou sinistre.",
    related: ["/solutions/fin-de-chantier", "/blog/remise-en-etat-apres-travaux-process"],
  },
  {
    slug: "prepaie",
    term: "Prépaie",
    definition:
      "Préparation des éléments variables (heures, absences, avenants) avant transmission à la paie.",
    related: ["/fonctionnalites/prepaie", "/blog/prepaie-variables-entreprise-proprete"],
  },
  {
    slug: "contrat-multi-sites",
    term: "Contrat multi-sites",
    definition:
      "Engagement commercial couvrant plusieurs adresses / immeubles pour un même client.",
    related: ["/fonctionnalites/contrats", "/blog/contrats-multi-sites-renouvellements-nettoyage"],
  },
  {
    slug: "cahier-des-charges",
    term: "Cahier des charges",
    definition:
      "Document listant prestations, fréquences et niveaux de qualité attendus sur un site.",
    related: ["/solutions/syndics", "/blog/controle-qualite-parties-communes-syndic"],
  },
  {
    slug: "preuve-terrain",
    term: "Preuve terrain",
    definition:
      "Éléments horodatés (pointage, photos, signature) démontrant qu’une intervention a eu lieu.",
    related: ["/fonctionnalites/bon-intervention", "/blog/bons-intervention-preuves-photos-nettoyage"],
  },
  {
    slug: "geolocalisation",
    term: "Géolocalisation",
    definition:
      "Localisation des passages / tournées. À expliquer clairement aux agents (transparence et finalité).",
    related: ["/fonctionnalites/geolocalisation", "/blog/geolocalisation-expliquer-agents-nettoyage"],
  },
  {
    slug: "supervision-qualite",
    term: "Supervision qualité",
    definition:
      "Contrôle des passages et du niveau de propreté, notamment sur parties communes et multi-sites.",
    related: ["/fonctionnalites/supervision"],
  },
  {
    slug: "open-space",
    term: "Open space",
    definition:
      "Plateau de bureaux ouvert, typique du tertiaire, avec fréquences et contraintes d’accès spécifiques.",
    related: ["/solutions/bureaux", "/blog/logiciel-nettoyage-bureaux-criteres"],
  },
  {
    slug: "syndic",
    term: "Syndic",
    definition:
      "Gestionnaire de copropriété, interlocuteur fréquent pour les contrats de parties communes.",
    related: ["/solutions/syndics", "/blog/travailler-avec-syndic-acces-reporting"],
  },
  {
    slug: "consommables",
    term: "Consommables",
    definition:
      "Produits et fournitures (papier, savon, sacs…) suivis par site pour éviter ruptures et gaspillage.",
    related: ["/fonctionnalites/stock", "/blog/gestion-stock-consommables-multi-sites"],
  },
  {
    slug: "rentabilite-contrat",
    term: "Rentabilité contrat",
    definition:
      "Écart entre chiffre d’affaires d’un contrat et coûts (heures, trajets, consommables) — suivi via tableaux de bord.",
    related: ["/fonctionnalites/tableaux-de-bord", "/blog/tableaux-de-bord-rentabilite-chantier-contrat"],
  },
  {
    slug: "accessibilite-site",
    term: "Accessibilité site",
    definition:
      "Contraintes d’entrée (badges, codes, alarmes, horaires). Doivent figurer dans le planning, pas seulement dans WhatsApp.",
    related: ["/blog/checklist-ouverture-fermeture-locaux-pros"],
  },
  {
    slug: "entretien-recurrent",
    term: "Entretien récurrent",
    definition:
      "Prestations répétées selon une fréquence contractuelle, par opposition aux interventions ponctuelles.",
    related: ["/blog/planning-fin-de-chantier-vs-entretien-recurrent"],
  },
  {
    slug: "litige-heures",
    term: "Litige d’heures",
    definition:
      "Désaccord sur le temps travaillé. Le pointage mobile réduit ces discussions entre agents, admin et clients.",
    related: ["/blog/pointage-mobile-agents-proprete"],
  },
  {
    slug: "migration-excel",
    term: "Migration Excel",
    definition:
      "Passage progressif des tableaux Excel vers un logiciel métier (clients, sites, fréquences, puis planning).",
    related: ["/blog/passer-de-excel-a-un-logiciel-nettoyage"],
  },
  {
    slug: "essai-gratuit",
    term: "Essai gratuit",
    definition:
      "Période de test du logiciel. Chez PROGESTI : 2 mois sans carte bancaire, tous modules inclus.",
    related: ["/essai-gratuit", "/blog/essai-gratuit-logiciel-nettoyage-checklist"],
  },
  {
    slug: "starter-pro-premium",
    term: "Starter / Pro / Premium",
    definition:
      "Offres PROGESTI différenciées par le nombre d’utilisateurs ; les modules sont inclus dans chaque offre.",
    related: ["/tarifs", "/blog/choisir-offre-starter-pro-premium"],
  },
  {
    slug: "tertiaire",
    term: "Tertiaire",
    definition:
      "Secteur des bureaux et services ; contexte typique du nettoyage d’immeubles de bureaux et coworking.",
    related: ["/solutions/bureaux"],
  },
  {
    slug: "locaux-professionnels",
    term: "Locaux professionnels",
    definition:
      "Cabinets, commerces, restaurants — horaires d’accès souvent hors ouverture au public.",
    related: ["/solutions/professionnels", "/blog/menage-cabinet-medical-hygiene-plannings"],
  },
];

export function getTerm(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug);
}
