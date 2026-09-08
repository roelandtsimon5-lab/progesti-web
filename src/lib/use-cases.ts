/** Cas d'usage PROGESTI — avantages réels du produit, sans fausses références clients. */

export type UseCase = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  segment: string;
  segmentHref: string;
  icon: "time" | "proof" | "cash" | "planning" | "mobile" | "simple";
};

export const productFacts = {
  headline: "Avantages produit",
  headlineSub: "pour les entreprises de propreté",
  modules: "9",
  modulesLabel: "modules inclus · dès 29,99 € HT/mois",
  support: "Support FR",
  supportLabel: "Équipe à Toulouse · 05 82 95 09 19",
  trial: "Essai 15 jours",
  trialLabel: "sans carte bancaire",
} as const;

export const useCases: readonly UseCase[] = [
  {
    id: "admin-time",
    title: "Moins de temps admin",
    problem:
      "Excel, WhatsApp et double saisie pour le planning : des heures perdues chaque semaine.",
    solution:
      "Un seul outil pour planifier, pointer et facturer. Ce qui est sur le terrain remonte automatiquement.",
    benefit: "Gain estimé : plusieurs heures/semaine",
    segment: "Bureaux & tertiaire",
    segmentHref: "/solutions/bureaux",
    icon: "time",
  },
  {
    id: "proof-passages",
    title: "Preuves de passage centralisées",
    problem:
      "Syndics et donneurs d'ordre demandent des comptes — répondre prend du temps et crée des litiges.",
    solution:
      "Historique des passages et pointages accessibles en quelques clics. Fini les dossiers papier improvisés.",
    benefit: "Moins de litiges sur les accès",
    segment: "Syndics",
    segmentHref: "/solutions/syndics",
    icon: "proof",
  },
  {
    id: "tpe-simple",
    title: "Démarrer sans usine à gaz",
    problem:
      "Les ERP complexes ne sont pas faits pour une activité qui démarre avec quelques clients.",
    solution:
      "Dès 29,99 € HT/mois, tous modules inclus. Planning et facturation dans le même outil.",
    benefit: "Opérationnel dès le 1er client",
    segment: "TPE & auto-entrepreneurs",
    segmentHref: "/solutions/auto-entrepreneurs",
    icon: "simple",
  },
  {
    id: "chantier-cash",
    title: "Facturer dès la livraison",
    problem:
      "Sur les fins de chantier, facturer vite débloque la trésorerie — mais les preuves terrain traînent.",
    solution:
      "Photos, bons signés et facturation le jour même. Moins d'écart entre prestation et encaissement.",
    benefit: "Trésorerie accélérée",
    segment: "Fin de chantier",
    segmentHref: "/solutions/fin-de-chantier",
    icon: "cash",
  },
  {
    id: "multi-sites",
    title: "Plusieurs sites, une seule vue",
    problem:
      "Avec 10+ sites et des horaires différents, le planning devient un chaos de messages.",
    solution:
      "Vision multi-sites pour le bureau, planning mobile pour les agents. Zéro appel inutile.",
    benefit: "Coordination simplifiée",
    segment: "Professionnels",
    segmentHref: "/solutions/professionnels",
    icon: "planning",
  },
  {
    id: "mobile-terrain",
    title: "Planning accessible partout",
    problem:
      "Les agents appellent le bureau le matin pour savoir où aller. Le planning change, personne n'est au courant.",
    solution:
      "App mobile (Android & iOS) : le planning du jour, les infos d'accès, le pointage sur place.",
    benefit: "Équipe autonome sur le terrain",
    segment: "Multi-sites",
    segmentHref: "/logiciel-planning-nettoyage",
    icon: "mobile",
  },
  {
    id: "prepaie",
    title: "Variables de paie sans recopie",
    problem:
      "Recouper feuilles de présence et heures : fastidieux et source d'erreurs.",
    solution:
      "Le pointage remonte automatiquement. Validation et export comptable en quelques clics.",
    benefit: "Prépaie fiabilisée",
    segment: "Multi-sites",
    segmentHref: "/logiciel-planning-nettoyage",
    icon: "time",
  },
  {
    id: "backup-urgence",
    title: "Remplacements d'urgence",
    problem:
      "Un agent absent le lundi matin : c'est la panique pour trouver un backup et prévenir le client.",
    solution:
      "Réaffectation dans le planning, notification automatique. Le site reste couvert, le client informé.",
    benefit: "Continuité de service",
    segment: "Bureaux",
    segmentHref: "/solutions/bureaux",
    icon: "planning",
  },
] as const;

export function featuredUseCases(limit = 4): UseCase[] {
  return useCases.slice(0, limit);
}
