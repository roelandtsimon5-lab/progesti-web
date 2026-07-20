import type { SolutionContent } from "@/components/sections/SolutionLanding";

export const solutionPages: Record<string, SolutionContent> = {
  bureaux: {
    slug: "bureaux",
    title: "Nettoyage de bureaux",
    headline: "Organisez le ménage des bureaux comme un métier, pas comme un tableur",
    lead:
      "Open spaces, immeubles de bureaux, coworking : fréquences, accès et équipes tôt le matin ou en soirée — sans double saisie Excel / WhatsApp.",
    seoDescription:
      "Logiciel de nettoyage de bureaux : planning multi-sites, pointage agents et facturation. Essai PROGESTI 2 mois sans CB.",
    pains: [
      {
        title: "Fréquences qui dérivent",
        text: "Hebdo, bihebdo, mensuel… sans titulaire clair, les open spaces passent à côté ou sont doublonnés.",
      },
      {
        title: "Accès et créneaux serrés",
        text: "Badges, alarmes, horaires avant ouverture : une info perdue dans un fil WhatsApp coûte une vacation.",
      },
      {
        title: "Facturation décalée",
        text: "Le réalisé terrain n’arrive pas à temps : factures en retard, litiges sur les passages.",
      },
    ],
    responses: [
      {
        moduleSlug: "planification",
        text: "Affectez agents et sites tertiaires avec fréquences visibles et backups pour éviter les sites orphelins.",
      },
      {
        moduleSlug: "pointage",
        text: "Le pointage mobile horodate le passage — utile pour le client et pour la prépaie.",
      },
      {
        moduleSlug: "facturation",
        text: "Passez du réalisé à la facture sans ressaisir les heures dans un autre fichier.",
      },
      {
        moduleSlug: "tableaux-de-bord",
        text: "Voyez charge et activité par site pour piloter le mois en cours.",
      },
    ],
    day: [
      { time: "06:30", text: "Les agents consultent le planning du jour sur mobile — sites et créneaux à jour." },
      { time: "09:30", text: "Pointages validés sur les premiers open spaces ; alertes sur les absences." },
      { time: "14:00", text: "Vous réaffectez un backup sur un immeuble sans toucher à Excel." },
      { time: "17:30", text: "Préparation facturation sur les passages validés de la semaine." },
    ],
    faq: [
      {
        q: "PROGESTI convient-il aux entreprises multi-étages ?",
        a: "Oui. Vous structurez sites et zones (étages, parties communes) avec fréquences et agents dédiés.",
      },
      {
        q: "Peut-on gérer des équipes de nuit ?",
        a: "Oui. Les créneaux et affectations sont libres : tôt le matin, soirée ou nuit selon vos contrats.",
      },
      {
        q: "Combien de temps pour démarrer ?",
        a: "Quelques minutes pour créer le compte et ajouter vos premiers sites. Essai 2 mois sans carte bancaire.",
      },
    ],
  },
  syndics: {
    slug: "syndics",
    title: "Syndics & copropriétés",
    headline: "Parties communes multi-sites : planning, preuves et reporting",
    lead:
      "Halls, cages d’escalier, locaux techniques : pilotez les passages récurrents et documentez la qualité pour vos interlocuteurs immobiliers.",
    seoDescription:
      "Logiciel nettoyage syndics et parties communes : multi-immeubles, preuves terrain, reporting. Essai PROGESTI 2 mois.",
    pains: [
      {
        title: "Portefeuille d’immeubles",
        text: "Des dizaines de halls à suivre : sans vue claire, les oublis se multiplient.",
      },
      {
        title: "Reporting syndic",
        text: "Le syndic demande des preuves de passage et de qualité — photos et messages épars ne suffisent pas.",
      },
      {
        title: "Accès locaux techniques",
        text: "Codes, clés, créneaux : une information mal partagée bloque toute l’équipe.",
      },
    ],
    responses: [
      {
        moduleSlug: "planification",
        text: "Cartographiez immeubles et fréquences ; titulaire + backup par site.",
      },
      {
        moduleSlug: "bon-intervention",
        text: "Bons et preuves photos conservés — utiles en cas de litige ou de contrôle.",
      },
      {
        moduleSlug: "supervision",
        text: "Contrôle qualité des parties communes avec suivi des passages.",
      },
      {
        moduleSlug: "contrats",
        text: "Suivez engagements multi-sites et dates de renouvellement.",
      },
    ],
    day: [
      { time: "07:00", text: "Tournées parties communes affichées par immeuble." },
      { time: "11:00", text: "Bons d’intervention et photos archivés sur les halls prioritaires." },
      { time: "15:00", text: "Relance d’un site non pointé avant la fin de journée." },
      { time: "18:00", text: "Export / vue pour préparer un point avec le syndic." },
    ],
    faq: [
      {
        q: "Peut-on travailler avec plusieurs syndics ?",
        a: "Oui. Clients, sites et contrats sont séparés : chaque portefeuille reste lisible.",
      },
      {
        q: "Comment prouver un passage ?",
        a: "Pointage mobile et bons d’intervention (photos, signature) constituent une trace exploitable.",
      },
      {
        q: "Y a-t-il un engagement long ?",
        a: "Non. Essai 2 mois sans CB, puis abonnement résiliable selon les conditions de l’offre.",
      },
    ],
  },
  professionnels: {
    slug: "professionnels",
    title: "Professionnels & commerces",
    headline: "Locaux pros avec contraintes d’horaires et d’accès",
    lead:
      "Cabinets médicaux, commerces, restaurants : horaires serrés, accès sensibles et preuves de passage — sans chaos WhatsApp.",
    seoDescription:
      "Logiciel ménage cabinets, commerces et restaurants : plannings d’accès, pointage, facturation. Essai PROGESTI 2 mois.",
    pains: [
      {
        title: "Créneaux hors ouverture",
        text: "Intervenir avant ou après le public impose une organisation stricte — une erreur d’horaire = litige.",
      },
      {
        title: "Hygiène & exigences",
        text: "Cabinets et restauration demandent des standards précis et des preuves de réalisation.",
      },
      {
        title: "Petites équipes saturées",
        text: "L’admin et le terrain se mélangent : absences gérées par SMS, factures en retard.",
      },
    ],
    responses: [
      {
        moduleSlug: "planification",
        text: "Créneaux et contraintes d’accès visibles pour chaque local professionnel.",
      },
      {
        moduleSlug: "pointage",
        text: "Horodatage des passages pour limiter les discussions sur les heures.",
      },
      {
        moduleSlug: "gestion-rh",
        text: "Absences et variables au même endroit pour préparer la paie sans chaos.",
      },
      {
        moduleSlug: "facturation",
        text: "Facturez au rythme de vos contrats récurrents ou de vos prestations ponctuelles.",
      },
    ],
    day: [
      { time: "05:45", text: "Passage cabinet avant ouverture — créneau et accès dans le planning." },
      { time: "10:00", text: "Pointage validé ; alerte si un commerce n’a pas été couvert." },
      { time: "13:30", text: "Réaffectation suite à une absence agent." },
      { time: "16:00", text: "Préparation des factures de la période sur le réalisé." },
    ],
    faq: [
      {
        q: "Convient-il aux cabinets médicaux ?",
        a: "Oui, pour l’organisation planning / preuves / facturation. Les protocoles d’hygiène restent de votre responsabilité métier.",
      },
      {
        q: "Peut-on gérer des commerces multi-adresses ?",
        a: "Oui. Chaque adresse est un site avec ses fréquences et agents.",
      },
      {
        q: "Quels tarifs ?",
        a: "Dès 29,99 € HT/mois (Starter), tous modules inclus. Voir /tarifs.",
      },
    ],
  },
  "fin-de-chantier": {
    slug: "fin-de-chantier",
    title: "Fin de chantier",
    headline: "Remise en état : planning serré, preuves photos, facturation rapide",
    lead:
      "Prestations ponctuelles après travaux : organisez les équipes, capturez les preuves et facturez dès la livraison.",
    seoDescription:
      "Logiciel fin de chantier et remise en état : planning, preuves photos, facturation post-chantier. Essai PROGESTI 2 mois.",
    pains: [
      {
        title: "Délais de livraison",
        text: "Le chantier bouge : sans planning agile, les équipes arrivent trop tôt ou trop tard.",
      },
      {
        title: "Preuves de livraison",
        text: "Le client conteste l’état des lieux : il manque photos et bons signés.",
      },
      {
        title: "Facturation oubliée",
        text: "Les avenants et extras se perdent entre WhatsApp et Excel — marge érodée.",
      },
    ],
    responses: [
      {
        moduleSlug: "planification",
        text: "Planifiez les créneaux ponctuels distincts de l’entretien récurrent.",
      },
      {
        moduleSlug: "bon-intervention",
        text: "Photos et signature sur place pour sécuriser la réception.",
      },
      {
        moduleSlug: "facturation",
        text: "Facturez vite après livraison, y compris les extras documentés.",
      },
      {
        moduleSlug: "stock",
        text: "Suivez consommables et matériel mobilisés sur le chantier.",
      },
    ],
    day: [
      { time: "08:00", text: "Brief équipes : zones, planning serré, points d’attention." },
      { time: "12:00", text: "Avancement pointé ; photos des zones livrées." },
      { time: "16:30", text: "Bon d’intervention signé avec le client / conducteur." },
      { time: "17:30", text: "Facture émise sur le réalisé + extras validés." },
    ],
    faq: [
      {
        q: "Peut-on mélanger entretien récurrent et fin de chantier ?",
        a: "Oui. Les deux coexistent : sites récurrents et prestations ponctuelles dans le même outil.",
      },
      {
        q: "Les preuves photos sont-elles conservées ?",
        a: "Les bons d’intervention permettent d’associer preuves au passage — utiles en cas de litige.",
      },
      {
        q: "Combien de temps dure l’essai ?",
        a: "2 mois complets, sans carte bancaire, tous modules inclus.",
      },
    ],
  },
  "auto-entrepreneurs": {
    slug: "auto-entrepreneurs",
    title: "Auto-entrepreneurs & petites équipes",
    headline: "Démarrer sans usine à gaz — dès 29,99 € HT/mois",
    lead:
      "Un seul outil pour remplacer Excel et WhatsApp : sites, planning, pointage et factures, avec essai 2 mois sans carte bancaire.",
    seoDescription:
      "Logiciel nettoyage auto-entrepreneur : planning, pointage, facturation dès 29,99 € HT/mois. Essai 2 mois sans CB.",
    pains: [
      {
        title: "Tout sur Excel",
        text: "Planning, heures et factures dans des fichiers fragiles qui cassent dès que l’activité croît.",
      },
      {
        title: "WhatsApp comme outil",
        text: "Absences et changements de site dans des fils illisibles.",
      },
      {
        title: "Peur de l’outil trop lourd",
        text: "Les ERP génériques demandent trop de temps pour une petite structure.",
      },
    ],
    responses: [
      {
        moduleSlug: "planification",
        text: "Ajoutez vos sites et créneaux en quelques minutes.",
      },
      {
        moduleSlug: "pointage",
        text: "Pointez sur mobile — fini les feuilles papier.",
      },
      {
        moduleSlug: "facturation",
        text: "Émettez vos factures à partir du réalisé.",
      },
      {
        moduleSlug: "tableaux-de-bord",
        text: "Une vue simple de l’activité du mois.",
      },
    ],
    day: [
      { time: "Matin", text: "Consultez le planning du jour et les accès clients." },
      { time: "Terrain", text: "Pointez chaque site ; joignez un bon si besoin." },
      { time: "Soir", text: "Vérifiez les pointages et préparez la facturation hebdo." },
      { time: "Fin de mois", text: "Prépaie et factures clients sans nuit blanche Excel." },
    ],
    faq: [
      {
        q: "L’offre Starter suffit-elle ?",
        a: "Oui pour 1 administrateur. Passez à Pro (5 users) ou Premium (20) quand l’équipe grandit — mêmes modules.",
      },
      {
        q: "Faut-il une formation longue ?",
        a: "Non. La plupart des indépendants démarrent le jour même. Assistance FR disponible.",
      },
      {
        q: "Y a-t-il des frais cachés ?",
        a: "Non. Pas de frais d’entrée ni d’installation. Mise en place offerte.",
      },
    ],
  },
};

export const solutionSlugs = Object.keys(solutionPages);
