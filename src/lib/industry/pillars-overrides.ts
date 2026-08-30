import type { IndustryFeature, IndustryPillar } from "./types";
import { defaultPillars } from "./default";

type FeaturePatch = Partial<Pick<IndustryFeature, "label" | "panelTitle" | "panelBody">>;

/** Applique des surcharges copy par id de feature, sans dupliquer toute la matrice 4×4. */
export function applyFeaturePatches(
  pillars: readonly IndustryPillar[],
  patches: Record<string, FeaturePatch>,
): readonly IndustryPillar[] {
  return pillars.map((pillar) => ({
    ...pillar,
    features: pillar.features.map((f) => {
      const patch = patches[f.id];
      if (!patch) return f;
      return { ...f, ...patch };
    }) as unknown as IndustryPillar["features"],
  }));
}

const bureauxPatches: Record<string, FeaturePatch> = {
  planning: {
    label: "Planning tertiaire & étages",
    panelTitle: "Open spaces et multi-étages dans le même planning",
    panelBody:
      "Hebdo, bihebdo, quotidien : affectez agents titulaires et backups par étage. Les créneaux avant ouverture ou en soirée restent lisibles — sans reconstruire la semaine dans Excel.",
  },
  pointage: {
    label: "Pointage avant / après ouverture",
    panelTitle: "Prouver le passage quand personne n’est sur site",
    panelBody:
      "Arrivée et départ horodatés sur mobile : utile pour le donneur d’ordre tertiaire et pour aligner la facturation sur le réalisé.",
  },
  "preuves-passages": {
    panelTitle: "Des traces pour vos contrats bureaux",
    panelBody:
      "Historique des passages par site et par agent — quand le facility manager demande un relevé, vous répondez sans fouiller vos mails.",
  },
  remplacements: {
    panelTitle: "Backup quand un titulaire est absent",
    panelBody:
      "Congé ou maladie sur un créneau tôt le matin : gérez le remplacement dans le même écran que le planning — l’étage ne reste pas à découvert.",
  },
  devis: {
    panelTitle: "Devis tertiaire structurés",
    panelBody:
      "Chiffrage par immeuble, étage ou surface — le commercial et l’ops partagent la même base pour enchaîner contrat et planning.",
  },
  facturation: {
    panelTitle: "Facturer les vacations tertiaires sans ressaisie",
    panelBody:
      "Planning et pointage alimentent la facturation : moins d’écarts entre heures vendues et heures faites sur vos sites de bureaux.",
  },
  impayes: {
    panelTitle: "Trésorerie facility manager",
    panelBody:
      "Suivez les retards par donneur d’ordre tertiaire — relancez sans tableur parallèle quand la facture dépasse le Net 30.",
  },
  rentabilite: {
    panelTitle: "Marge par immeuble ou open space",
    panelBody:
      "Lisez la rentabilité par site tertiaire : utile pour renégocier un contrat ou couper un créneau déficitaire.",
  },
  clients: {
    panelTitle: "Facility managers et sites au même endroit",
    panelBody:
      "Contacts, accès badge, consignes d’alarme : l’équipe de nuit trouve l’info sans appeler le bureau.",
  },
  historique: {
    panelTitle: "Historique par immeuble tertiaire",
    panelBody:
      "Qui est passé sur quel étage, quand : indispensable en renégociation ou contrôle qualité facility.",
  },
  "preuves-do": {
    panelTitle: "Reporting pour le donneur d’ordre tertiaire",
    panelBody:
      "Export des passages et taux de couverture — montrez que le contrat open space / multi-étages est tenu.",
  },
  flux: {
    panelTitle: "Devis facility → planning → facture",
    panelBody:
      "Enchaînez commercial et ops pour le tertiaire : ce qui est vendu devient planifié, pointé, puis facturé.",
  },
  app: {
    panelTitle: "Planning tôt le matin dans la poche",
    panelBody:
      "L’agent voit ses créneaux 06h30 et pointe à l’arrivée — moins d’appels au bureau pour confirmer le passage.",
  },
  multi: {
    panelTitle: "Tous vos immeubles tertiaires d’un coup d’œil",
    panelBody:
      "Haussmann, coworking, open spaces : statuts live par site sans être sur chaque étage.",
  },
};

const syndicsPatches: Record<string, FeaturePatch> = {
  planning: {
    label: "Planning multi-immeubles",
    panelTitle: "Un portefeuille de halls sans oubli",
    panelBody:
      "Cartographiez immeubles, halls, cages et locaux techniques avec fréquences et titulaires. Vue par site ou par agent pour couvrir tout le parc.",
  },
  pointage: {
    panelTitle: "Valider le passage en parties communes",
    panelBody:
      "Pointage hall, cage ou local technique : horodatage utile quand le syndic demande si le prestataire est passé ce matin.",
  },
  "preuves-passages": {
    label: "Preuves parties communes",
    panelTitle: "Répondre au syndic avec des faits",
    panelBody:
      "Passages validés et historique conservés — quand l’interlocuteur immobilier demande des comptes, vous sortez une trace claire, pas un dossier WhatsApp.",
  },
  remplacements: {
    panelTitle: "Couvrir un immeuble si titulaire absent",
    panelBody:
      "Backup sur hall ou cage B : le remplacement se gère au même endroit que le planning multi-immeubles.",
  },
  devis: {
    panelTitle: "Devis syndic par immeuble",
    panelBody:
      "Chiffrage halls, cages, locaux techniques — devis rattaché au portefeuille immobilier du syndic.",
  },
  facturation: {
    panelTitle: "Facturer le parc immobilier sans oubli",
    panelBody:
      "Passages pointés sur chaque immeuble alimentent la facturation — moins de litiges sur les parties communes facturées.",
  },
  impayes: {
    panelTitle: "Suivi des syndics en retard",
    panelBody:
      "Vue par syndic ou immeuble : repérez les impayés avant qu’ils impactent votre trésorerie.",
  },
  rentabilite: {
    panelTitle: "Rentabilité par immeuble syndic",
    panelBody:
      "Certains halls coûtent plus cher qu’ils ne rapportent — identifiez-les avec une marge par site.",
  },
  clients: {
    panelTitle: "Fiche syndic · tous les immeubles",
    panelBody:
      "Un syndic, douze immeubles : contacts, accès locaux techniques et historique au même endroit.",
  },
  historique: {
    panelTitle: "La mémoire de chaque immeuble",
    panelBody:
      "Qui est passé, quand, sur quel immeuble : indispensable en litige, en contrôle qualité ou en renégociation de contrat syndic.",
  },
  "preuves-do": {
    panelTitle: "Reporting donneur d’ordre immobilier",
    panelBody:
      "Montrez que halls, cages et locaux techniques sont tenus — appuyez-vous sur pointages et historique pour sécuriser le renouvellement.",
  },
  flux: {
    panelTitle: "Devis syndic → contrat → facture",
    panelBody:
      "Du marché parties communes à la facture mensuelle : un flux sans ressaisie entre commercial et terrain.",
  },
  app: {
    panelTitle: "Agents syndic sur mobile",
    panelBody:
      "Planning halls du jour, pointage à l’arrivée, consignes d’accès cage B — tout dans la poche.",
  },
  multi: {
    panelTitle: "Vue portefeuille syndic",
    panelBody:
      "Douze immeubles, statuts live : pilotez le parc sans visite site par site.",
  },
};

const professionnelsPatches: Record<string, FeaturePatch> = {
  planning: {
    label: "Créneaux & accès sensibles",
    panelTitle: "Des plages horaires qui tiennent la route",
    panelBody:
      "Cabinet médical, commerce ou restaurant : planifiez des créneaux serrés avec consignes d’accès sur la fiche site — visibles sur mobile.",
  },
  pointage: {
    panelTitle: "Horodater l’intervention pro",
    panelBody:
      "Le client pro veut savoir si le passage a eu lieu dans la plage prévue. Pointage mobile + statuts live = moins d’appels au bureau.",
  },
  "preuves-passages": {
    panelTitle: "Preuve pour le client pro exigeant",
    panelBody:
      "Cabinet médical ou restaurant : historique horodaté quand le client demande si le passage a eu lieu avant ouverture.",
  },
  remplacements: {
    panelTitle: "Backup sur créneau serré",
    panelBody:
      "Retard ou absence sur un créneau 12h30–13h30 : remplacez vite sans perdre la relation client pro.",
  },
  devis: {
    panelTitle: "Devis locaux pros qui partent vite",
    panelBody:
      "Structurez vos offres par local et surface — le commercial et l’ops partagent la même base pour enchaîner contrat et planning.",
  },
  facturation: {
    panelTitle: "Facturer les interventions pro",
    panelBody:
      "Heures pointées dans la plage contractuelle alimentent la facture — moins de contestation sur les vacations courtes.",
  },
  impayes: {
    panelTitle: "Relances commerces et cabinets",
    panelBody:
      "Suivez les retards par client pro sans tableur — protégez la trésorerie de votre TPE.",
  },
  rentabilite: {
    panelTitle: "Marge par local pro",
    panelBody:
      "Un restaurant à 45 min vs un cabinet à 2 h : voyez où vous gagnez vraiment sur vos contrats pros.",
  },
  clients: {
    panelTitle: "Codes, clés, consignes au même endroit",
    panelBody:
      "Alarme, digicode, contact sur place : l’équipe terrain trouve l’info sans appeler — fini les vacations ratées pour mauvaise consigne.",
  },
  historique: {
    panelTitle: "Historique par local professionnel",
    panelBody:
      "Interventions passées, agents, horaires : utile en renouvellement ou litige avec un client pro exigeant.",
  },
  "preuves-do": {
    panelTitle: "Rassurer le client pro",
    panelBody:
      "Montrez que la plage horaire contractuelle est tenue — appuyez-vous sur pointages et historique.",
  },
  flux: {
    panelTitle: "Devis local pro → exécution → facture",
    panelBody:
      "Du devis cabinet ou commerce à la facture : zéro double saisie entre commercial et terrain.",
  },
  app: {
    panelTitle: "Consignes d’accès sur mobile",
    panelBody:
      "Digicode, alarme, contact sur place : l’agent consulte avant d’entrer — moins de vacations ratées.",
  },
  multi: {
    panelTitle: "Plusieurs locaux pros en parallèle",
    panelBody:
      "Cabinet, restaurant, pharmacie : vue d’ensemble des statuts sans appels en cascade.",
  },
};

const finDeChantierPatches: Record<string, FeaturePatch> = {
  planning: {
    label: "Planning remise en état",
    panelTitle: "Mobiliser l’équipe sur un délai serré",
    panelBody:
      "Prestation ponctuelle post-travaux : affectez agents et sites en urgence, suivez statuts et livraison — sans tableur parallèle.",
  },
  pointage: {
    panelTitle: "Heures chantier pour facturation J+0",
    panelBody:
      "Pointage équipe sur site : les heures remontent directement pour facturer dès la livraison.",
  },
  devis: {
    panelTitle: "Devis chantier → exécution",
    panelBody:
      "Ce qui est chiffré devient ce qui est planifié : enchaînez devis accepté, équipe sur site et suivi d’avancement dans le même outil.",
  },
  facturation: {
    panelTitle: "Facturer dès la livraison",
    panelBody:
      "Heures pointées et prestation validée alimentent la facture — encaissez plus vite après remise en état, sans retaper les heures.",
  },
  "preuves-passages": {
    panelTitle: "Photos et preuves de livraison",
    panelBody:
      "Conservez les preuves de fin de chantier avec l’intervention — utile en cas de réserve ou de demande du donneur d’ordre.",
  },
  remplacements: {
    panelTitle: "Renfort équipe sur urgence chantier",
    panelBody:
      "Mobilisez des agents supplémentaires le jour J — couverture et remplacements dans le même planning.",
  },
  impayes: {
    panelTitle: "Encaisser vite après livraison",
    panelBody:
      "Facture émise J+0 : suivez le paiement promoteur sans perdre le fil entre chantiers.",
  },
  rentabilite: {
    panelTitle: "Marge par chantier",
    panelBody:
      "Heures vendues vs heures pointées : voyez si la remise en état était rentable avant d’accepter le prochain devis.",
  },
  clients: {
    panelTitle: "Promoteur et chantiers rattachés",
    panelBody:
      "Fiche promoteur, adresses chantier, contacts livraison — tout au même endroit pour l’urgence.",
  },
  historique: {
    panelTitle: "Historique livraisons chantier",
    panelBody:
      "Chaque remise en état archivée : utile en cas de réserve ou pour renégocier avec le promoteur.",
  },
  "preuves-do": {
    panelTitle: "Dossier livraison pour le donneur d’ordre",
    panelBody:
      "Preuves et pointages regroupés — répondez au promoteur ou au maître d’ouvrage sans dossier papier.",
  },
  flux: {
    panelTitle: "Chantier : devis → équipe → facture",
    panelBody:
      "Enchaînement complet pour la remise en état — zéro ressaisie entre commercial, terrain et compta ops.",
  },
  app: {
    panelTitle: "Équipe chantier sur mobile",
    panelBody:
      "Planning du jour, pointage arrivée, consignes site — même pour une grosse équipe mobilisée en urgence.",
  },
  multi: {
    panelTitle: "Deux chantiers en parallèle",
    panelBody:
      "Rivoli le matin, remise état B2 l’après-midi : pilotez les statuts sans être sur site.",
  },
};

const autoPatches: Record<string, FeaturePatch> = {
  planning: {
    label: "Planning simple multi-sites",
    panelTitle: "Vos sites dans une seule semaine",
    panelBody:
      "Auto-entrepreneur ou petite équipe : voyez qui va où, sans double saisie. Idéal pour remplacer le planning WhatsApp.",
  },
  pointage: {
    panelTitle: "Pointer seul ou en petite équipe",
    panelBody:
      "Arrivée et départ sur mobile — même pour un solo : preuve du passage et base facturation sans paperasse.",
  },
  "preuves-passages": {
    panelTitle: "Preuve simple pour vos clients",
    panelBody:
      "Historique des passages : rassurez un client TPE qui demande si vous êtes passé cette semaine.",
  },
  remplacements: {
    panelTitle: "Vous remplacez ou vous déléguez",
    panelBody:
      "Petite équipe : gérez qui couvre quel site quand vous êtes absent — sans chaos de messages.",
  },
  devis: {
    panelTitle: "Devis rapide pour TPE",
    panelBody:
      "Créez et envoyez un devis depuis la fiche client — pas de Word ni de modèle compliqué.",
  },
  facturation: {
    panelTitle: "Factures sans usine à gaz",
    panelBody:
      "Passez du passage pointé à la facture client — même pour une TPE, sans second logiciel comptable obligatoire côté ops.",
  },
  impayes: {
    panelTitle: "Relances sans tableur",
    panelBody:
      "Trois clients, deux retards : voyez ce qui est dû sans Excel parallèle.",
  },
  rentabilite: {
    panelTitle: "Savoir si vos clients rapportent",
    panelBody:
      "Même petit : lisez la marge par client pour décider de renégocier ou arrêter un site chronophage.",
  },
  clients: {
    panelTitle: "Fiches clients simples",
    panelBody:
      "Adresses, accès, tarifs : tout au même endroit pour ne pas chercher dans vos notes.",
  },
  historique: {
    panelTitle: "Historique sans dossier papier",
    panelBody:
      "Ce que vous avez fait, quand, où — utile en renouvellement ou litige avec un petit client.",
  },
  "preuves-do": {
    panelTitle: "Montrer que le contrat est tenu",
    panelBody:
      "Pointages et historique pour rassurer un client TPE — sans rapport fancy.",
  },
  flux: {
    panelTitle: "Devis → passage → facture",
    panelBody:
      "Enchaînement complet pour une TPE : pas de double saisie entre commercial et terrain.",
  },
  app: {
    panelTitle: "Tout dans la poche",
    panelBody:
      "Planning, pointage, consignes : idéal quand vous êtes seul sur le terrain.",
  },
  multi: {
    panelTitle: "Plusieurs clients, une vue",
    panelBody:
      "Client A, B, C : statuts du jour sans ouvrir trois conversations WhatsApp.",
  },
  hub: {
    panelTitle: "Excel + WhatsApp → un seul outil",
    panelBody:
      "149 € HT/mois tout inclus : sites, planning, pointage, devis et factures. Pas de module surprise, pas de devis opaque.",
  },
  support: {
    panelTitle: "On vous aide à démarrer",
    panelBody:
      "Support FR inclus — une équipe qui comprend la propreté, pas un ticket anonyme. Joignable quand ça bloque au lancement.",
  },
};

export const pillarPatchesBySlug: Record<string, Record<string, FeaturePatch>> = {
  bureaux: bureauxPatches,
  syndics: syndicsPatches,
  professionnels: professionnelsPatches,
  "fin-de-chantier": finDeChantierPatches,
  "auto-entrepreneurs": autoPatches,
};

export function pillarsForSlug(slug: string): readonly IndustryPillar[] {
  const patches = pillarPatchesBySlug[slug];
  if (!patches) return defaultPillars;
  return applyFeaturePatches(defaultPillars, patches);
}
