/** Avis clients — source unique (remplacer par retours validés + logos officiels). */

export type Testimonial = {

  id: string;

  quote: string;

  author: string;

  role: string;

  company: string;

  city: string;

  segment: string;

  segmentHref: string;

  /** Icône logo carrée (SVG /public/clients/icons/) */
  logo: string;

  logoAlt: string;

  /** Client depuis (affiché en badge crédibilité) */

  since: string;

  featured?: boolean;

  /** Bénéfice chiffré ou concret affiché en badge */

  result?: string;

};



export const socialProofStats = {

  headline: "Entreprises de propreté",

  headlineSub: "en France",

  rating: "4,8",

  ratingLabel: "satisfaction support",

  modules: "9",

  modulesLabel: "modules inclus · 149 € HT/mois",

} as const;



export const testimonials: readonly Testimonial[] = [

  {

    id: "marie-pro-nettoyage-31",

    quote:

      "On a quitté Excel en trois semaines. Les absences se gèrent en deux clics et la facturation suit le pointage — fini la double saisie le vendredi soir.",

    author: "Marie Lambert",

    role: "Dirigeante",

    company: "Pro Nettoyage 31",

    city: "Toulouse",

    segment: "Bureaux & tertiaire",

    segmentHref: "/solutions/bureaux",

    logo: "/clients/icons/pro-nettoyage-31.svg",

    logoAlt: "Logo Pro Nettoyage 31",

    since: "2023",

    featured: true,

    result: "−6 h / semaine admin",

  },

  {

    id: "karim-clean-immeuble",

    quote:

      "Nos syndics demandaient des preuves de passage sur les parties communes. Aujourd'hui on sort l'historique en cinq minutes — les relances ont chuté.",

    author: "Karim Benali",

    role: "Responsable exploitation",

    company: "Clean Immeuble",

    city: "Lyon",

    segment: "Syndics",

    segmentHref: "/solutions/syndics",

    logo: "/clients/icons/clean-immeuble.svg",

    logoAlt: "Logo Clean Immeuble",

    since: "2022",

    featured: true,

    result: "−70 % litiges accès",

  },

  {

    id: "sophie-sm-proprete",

    quote:

      "149 € tout inclus, pas de module caché. J'ai lancé mon activité seule avec cinq clients — le planning et la facture tiennent dans le même outil.",

    author: "Sophie Martin",

    role: "Gérante",

    company: "SM Propreté",

    city: "Bordeaux",

    segment: "TPE & auto-entrepreneurs",

    segmentHref: "/solutions/auto-entrepreneurs",

    logo: "/clients/icons/sm-proprete.svg",

    logoAlt: "Logo SM Propreté",

    since: "2024",

    featured: true,

    result: "5 clients dès le mois 1",

  },

  {

    id: "thomas-renov-pro",

    quote:

      "Sur la fin de chantier, facturer le jour de la livraison avec les photos et le bon signé a débloqué notre trésorerie. On encaisse deux semaines plus tôt.",

    author: "Thomas Rousseau",

    role: "Gérant",

    company: "Rénov'Pro Services",

    city: "Nantes",

    segment: "Fin de chantier",

    segmentHref: "/solutions/fin-de-chantier",

    logo: "/clients/icons/renov-pro.svg",

    logoAlt: "Logo Rénov'Pro Services",

    since: "2023",

    featured: true,

    result: "+15 j trésorerie",

  },

  {

    id: "nadia-azur-clean",

    quote:

      "Douze sites pros avec des horaires différents : avant c'était le chaos WhatsApp. Maintenant l'équipe voit le planning mobile le matin — zéro appel inutile.",

    author: "Nadia Khoury",

    role: "Responsable qualité",

    company: "Azur Clean",

    city: "Nice",

    segment: "Professionnels",

    segmentHref: "/solutions/professionnels",

    logo: "/clients/icons/azur-clean.svg",

    logoAlt: "Logo Azur Clean",

    since: "2023",

    result: "12 sites · 1 vue",

  },

  {

    id: "julien-ecopro-bureaux",

    quote:

      "Le remplacement d'urgence un lundi matin ne casse plus la semaine. On réaffecte un agent, le site est couvert, le client est prévenu — tout est tracé.",

    author: "Julien Petit",

    role: "Directeur d'exploitation",

    company: "ÉcoPro Bureaux",

    city: "Montpellier",

    segment: "Bureaux",

    segmentHref: "/solutions/bureaux",

    logo: "/clients/icons/ecopro-bureaux.svg",

    logoAlt: "Logo ÉcoPro Bureaux",

    since: "2022",

    result: "Backups en 3 min",

  },

  {

    id: "fatima-lot-proprete",

    quote:

      "La prépaie variables : avant on recoupait les feuilles à la main. Le pointage remonte seul, on valide et on envoie au comptable. Gain de temps énorme.",

    author: "Fatima Amrani",

    role: "Office manager",

    company: "Lot Propreté",

    city: "Cahors",

    segment: "Multi-sites",

    segmentHref: "/logiciel-planning-nettoyage",

    logo: "/clients/icons/lot-proprete.svg",

    logoAlt: "Logo Lot Propreté",

    since: "2024",

    result: "Prépaie en 1 h",

  },

  {

    id: "david-chantier-express",

    quote:

      "Prix affiché, essai sans CB : on a testé un week-end sur un vrai chantier avant de basculer toute l'équipe. Migration clients faite en une semaine.",

    author: "David Charpentier",

    role: "Fondateur",

    company: "Chantier Express Net",

    city: "Strasbourg",

    segment: "Fin de chantier",

    segmentHref: "/solutions/fin-de-chantier",

    logo: "/clients/icons/chantier-express.svg",

    logoAlt: "Logo Chantier Express Net",

    since: "2024",

    result: "Migration 7 jours",

  },

] as const;



export function featuredTestimonials(limit = 4): Testimonial[] {

  return testimonials.filter((t) => t.featured).slice(0, limit);

}



export function initials(name: string): string {

  return name

    .split(/[\s.]+/)

    .filter(Boolean)

    .slice(0, 2)

    .map((part) => part[0]?.toUpperCase() ?? "")

    .join("");

}


