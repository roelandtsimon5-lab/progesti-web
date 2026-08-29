import type { modules } from "@/lib/site";
import type { MockKind } from "@/lib/industry/types";
import type { UseCaseTab } from "@/components/features/FeatureUseCaseTabs";

type ModuleSlug = (typeof modules)[number]["slug"];

export type ModuleContent = {
  pillar: string;
  heroLead?: string;
  seoTitle?: string;
  seoDescription?: string;
  benefits: readonly { title: string; text: string }[];
  problemBody: string;
  solutionBody: string;
  solutionBullets: readonly string[];
  excelComparison: readonly { aspect: string; excel: string; progesti: string }[];
  workflow: readonly { step: string; text: string }[];
  dayInLife?: readonly { time: string; text: string }[];
  relatedModuleSlugs: readonly string[];
  relatedIntro: string;
  stats: readonly [string, string][];
  image: string;
  imageAlt: string;
  faq: readonly { q: string; a: string }[];
  useCases: readonly UseCaseTab[];
};

export const moduleContent: Record<ModuleSlug, ModuleContent> = {
  planification: {
    pillar: "Organiser",
    heroLead:
      "Construisez la semaine de vos équipes de nettoyage en quelques clics : récurrences, titulaires, remplacements et multi-sites dans un seul planning partagé avec le terrain.",
    seoTitle: "Planning nettoyage professionnel",
    seoDescription:
      "Planning multi-sites pour entreprises de nettoyage : récurrences, affectations et remplacements sans Excel. Inclus à 149 € HT/mois, 5 utilisateurs, essai 7 jours.",
    benefits: [
      {
        title: "Fréquences qui tiennent",
        text: "Quotidien, hebdo, mensuel : programmez une fois, les passages se répètent automatiquement sur l'année.",
      },
      {
        title: "Vue agent ou site",
        text: "Basculez entre les deux vues pour gérer absences, remplacements et urgences sans reconstruire la semaine.",
      },
      {
        title: "Multi-sites natif",
        text: "Bureaux, immeubles, locaux pros : tout votre parc client tient dans une semaine lisible pour le bureau et le terrain.",
      },
    ],
    problemBody:
      "Dans une entreprise de nettoyage qui grandit, le planning finit presque toujours dans Excel. Une feuille par semaine, une couleur par agent, des onglets par client — et dès qu'un remplacement tombe un mardi matin, tout le monde appelle tout le monde. Les consignes d'accès traînent dans WhatsApp, les fréquences syndic ne correspondent plus à ce qui est réellement passé, et personne ne sait si le backup a bien été prévenu. Le responsable d'exploitation reconstruit la semaine le dimanche soir ; le commercial promet un créneau sans voir la charge réelle ; la facturation découvre des passages oubliés en fin de mois. Résultat : retards sur site, heures perdues au téléphone, litiges avec les syndics et une équipe terrain qui consulte un PDF périmé dès le premier imprévu. Le problème n'est pas le manque de rigueur : c'est l'absence d'un planning unique, partagé et connecté au reste de l'activité.",
    solutionBody:
      "PROGESTI centralise votre planning dans un outil pensé pour le nettoyage professionnel. Vous créez vos sites, vos fréquences et vos titulaires une seule fois ; les récurrences se déroulent seules, et chaque modification se propage sur le mobile des agents. Vue par site pour préparer une tournée immeuble, vue par agent pour équilibrer la charge : vous basculez en un clic. Les absences et remplacements se gèrent au même endroit que les affectations, sans copier-coller vers une autre feuille. Le terrain consulte le planning à jour sur l'application ; le bureau voit en direct ce qui est prévu et ce qui a été pointé. Quand un passage est validé, les données alimentent la facturation et le suivi client — plus de double saisie entre Excel, messagerie et logiciel comptable. Pour 149 € HT par mois, jusqu'à 5 utilisateurs, le module planning est inclus avec tous les autres. Essai gratuit 7 jours, sans carte bancaire.",
    solutionBullets: [
      "Récurrences par site : quotidien, hebdo, mensuel ou sur mesure",
      "Titulaire et backup par passage, visibles bureau et mobile",
      "Vue semaine multi-sites avec filtres agent, client ou zone",
      "Modifications en direct : l'équipe terrain est notifiée",
      "Lien natif vers pointage, clients et facturation",
    ],
    excelComparison: [
      { aspect: "Mise à jour", excel: "Copier-coller manuel à chaque changement", progesti: "Modification unique, visible partout en direct" },
      { aspect: "Récurrences", excel: "Formules fragiles ou saisie répétée", progesti: "Fréquences programmées une fois par site" },
      { aspect: "Remplacements", excel: "Appels + annotation sur la feuille", progesti: "Affectation backup + notification mobile" },
      { aspect: "Consultation terrain", excel: "PDF ou capture d'écran", progesti: "App mobile avec planning du jour" },
      { aspect: "Lien facturation", excel: "Recomptage manuel en fin de mois", progesti: "Passages planifiés → base de facturation" },
      { aspect: "Multi-sites", excel: "Un fichier par client ou par semaine", progesti: "Parc complet dans une vue unifiée" },
    ],
    workflow: [
      { step: "01", text: "Créez vos clients, sites et fréquences de passage dans PROGESTI" },
      { step: "02", text: "Affectez titulaires et backups sur la vue semaine ou par site" },
      { step: "03", text: "Les agents consultent leur tournée sur mobile et interviennent" },
      { step: "04", text: "Les passages réalisés alimentent facturation et historique client" },
    ],
    dayInLife: [
      { time: "07:00", text: "Marie ouvre PROGESTI : deux absences signalées, elle réaffecte les passages immeuble avant 8 h." },
      { time: "08:30", text: "Les agents voient leur journée mise à jour sur l'app — plus de PDF de la veille." },
      { time: "11:00", text: "Un syndic demande un passage supplémentaire : créneau ajouté, agent notifié, site à jour." },
      { time: "16:00", text: "Vue par site : tous les bureaux du client Dupont sont couverts cette semaine." },
      { time: "18:00", text: "Le responsable vérifie la semaine suivante sans rouvrir Excel." },
    ],
    relatedModuleSlugs: ["pointage", "clients", "gestion-rh"],
    relatedIntro:
      "Le planning PROGESTI ne vit pas isolé : il s'appuie sur vos fiches clients, les pointages terrain et la gestion RH pour tenir la promesse opérationnelle.",
    stats: [
      ["Multi-sites", "Parc illimité"],
      ["Récurrences", "Auto-programmées"],
      ["Vue agent", "ou par site"],
      ["Mobile", "Planning terrain live"],
    ],
    image: "/hero-planning.png",
    imageAlt: "Planning PROGESTI — vue semaine multi-sites pour entreprises de nettoyage",
    faq: [
      { q: "Peut-on gérer des récurrences complexes par site ?", a: "Oui. Fréquences libres par site, avec titulaire, backup et consignes d'accès rattachées au passage." },
      { q: "Le planning est-il visible sur mobile pour les agents ?", a: "Oui. Chaque agent consulte ses passages du jour et les mises à jour en direct sur l'application Android ou iOS." },
      { q: "Comment gérer un remplacement de dernière minute ?", a: "Réaffectez le passage depuis la vue semaine : le nouvel agent reçoit la tournée à jour sans appels en chaîne." },
      { q: "Le module planning est-il payant en supplément ?", a: "Non. Il est inclus dans l'offre à 149 € HT par mois, jusqu'à 5 utilisateurs, tous modules compris." },
      { q: "Peut-on planifier plusieurs sites pour un même client ?", a: "Oui. Chaque site a ses propres fréquences et affectations, regroupés sous la fiche client." },
      { q: "Un accompagnement est-il proposé à la mise en place ?", a: "Oui. L'équipe PROGESTI vous aide à structurer vos sites et fréquences lors de la prise en main." },
    ],
    useCases: [
      {
        id: "syndics",
        label: "Syndics",
        title: "Parties communes et fréquences immeuble",
        body: "Pour un contrat syndic, les halls, cages d'escalier et locaux techniques obéissent à des fréquences strictes — deux fois par semaine sur certains niveaux, mensuel sur les parkings. Dans PROGESTI, chaque immeuble est un site avec ses récurrences et son titulaire habituel. Quand le gardien signale une fête de copropriété, vous décalez ou ajoutez un passage sans toucher à une feuille Excel. La vue par site montre ce qui est prévu sur la semaine pour l'ensemble du patrimoine du syndic. Les agents reçoivent la tournée à jour sur mobile, avec les consignes d'accès centralisées. En cas de contrôle ou de réclamation, l'historique des passages planifiés et réalisés est disponible depuis la même base.",
        mock: "multi-sites",
        context: "syndics",
      },
      {
        id: "bureaux",
        label: "Bureaux",
        title: "Créneaux tôt le matin ou en soirée",
        body: "Le nettoyage de bureaux impose des créneaux avant l'ouverture ou après 19 h, parfois différents selon les étages. PROGESTI permet d'affecter un agent par zone ou par étage, avec des fréquences adaptées — quotidien open space, hebdo sanitaires du R+3. Le responsable d'exploitation voit d'un coup d'œil si tous les sites d'un même client corporate sont couverts avant le week-end. Un remplacement sur un créneau matinal se fait en quelques clics : le backup est notifié avec le code d'accès et l'heure d'intervention. Fini les tableurs où une colonne oubliée laisse un étage sans passage pendant une semaine entière.",
        mock: "planning-map",
        context: "bureaux",
      },
      {
        id: "fin-de-chantier",
        label: "Fin de chantier",
        title: "Mobiliser l'équipe sur un délai serré",
        body: "Une remise en état après travaux ne ressemble pas à un contrat récurrent : il faut caler plusieurs agents sur 48 ou 72 heures, parfois en soirée ou le week-end. Dans PROGESTI, vous créez les passages ponctuels liés au devis accepté, affectez les équipes disponibles et suivez l'avancement comme sur un planning classique. Le chef d'équipe sait qui intervient sur quel lot — sols, vitres, sanitaires — sans reconstruire un planning parallèle. Une fois les prestations terminées, les passages réalisés servent de base à la facturation finale. Le commercial et l'exploitation travaillent sur la même fiche client, sans double saisie entre devis Word et Excel.",
        mock: "passages",
        context: "fin-de-chantier",
      },
    ],
  },
  pointage: {
    pillar: "Organiser",
    heroLead:
      "Vos agents pointent arrivée et départ depuis leur mobile : heures horodatées, géolocalisation optionnelle et remontée bureau en direct pour la paie et la facturation.",
    seoTitle: "Pointage & télégestion nettoyage",
    seoDescription:
      "Pointage mobile avec géolocalisation pour équipes de nettoyage. Heures terrain en direct, moins de litiges. Inclus à 149 € HT/mois. Essai 7 jours sans CB.",
    benefits: [
      {
        title: "Arrivée / départ terrain",
        text: "Les agents pointent sur Android ou iOS — fini les feuilles papier ramassées le vendredi soir.",
      },
      {
        title: "Géoloc optionnelle",
        text: "Vérifiez que l'équipe est bien sur site, sans multiplier les appels de contrôle.",
      },
      {
        title: "Remontée bureau en direct",
        text: "Statuts live pour la prépaie, le suivi d'exploitation et la base de facturation.",
      },
    ],
    problemBody:
      "Sans outil de pointage adapté, les entreprises de nettoyage s'appuient sur des feuilles signées, des SMS « je suis arrivé » ou la bonne foi des équipes. Le bureau reçoit les documents en fin de semaine, parfois illisibles ou incomplets. Un client conteste des heures facturées ; le responsable fouille dans un classeur pour retrouver une signature. Les agents oublient de noter un départ, doublent une arrivée ou pointent au mauvais site quand ils enchaînent trois immeubles le matin. La prépaie repose sur des estimations, la facturation sur des durées théoriques plutôt que le réalisé. Les litiges s'accumulent — avec les clients, avec les salariés, avec l'URSSAF quand les heures ne collent pas. Et personne n'a une vue claire de ce qui se passe réellement sur le terrain à 9 h un mardi.",
    solutionBody:
      "Le module Pointage & télégestion de PROGESTI transforme le smartphone de vos agents en outil de contrôle horaire connecté au reste de l'activité. Depuis l'application mobile, ils consultent leur planning du jour et pointent arrivée et départ sur chaque site. L'horodatage est automatique ; la géolocalisation, si vous l'activez, confirme la présence sur site sans micromanagement. Le bureau voit les statuts en direct : qui est en intervention, où, depuis quand. Ces heures terrain alimentent directement la gestion RH pour les variables de paie et la facturation pour facturer le réalisé — pas une durée théorique héritée du devis. Moins de ressaisie, moins de contestations, plus de traçabilité en cas de litige client. Tout est inclus dans l'offre à 149 € HT par mois, 5 utilisateurs, essai 7 jours sans carte bancaire. Support français au 05 82 95 09 19.",
    solutionBullets: [
      "Pointage arrivée / départ depuis l'app mobile Android et iOS",
      "Géolocalisation optionnelle pour confirmer la présence sur site",
      "Horodatage automatique, moins de litiges sur les heures",
      "Données en direct pour RH, exploitation et facturation",
      "Historique consultable par site, agent et période",
    ],
    excelComparison: [
      { aspect: "Collecte des heures", excel: "Feuilles papier en fin de semaine", progesti: "Pointage mobile horodaté en direct" },
      { aspect: "Preuve de présence", excel: "Signature manuscrite contestable", progesti: "Horodatage + géoloc optionnelle" },
      { aspect: "Visibilité bureau", excel: "Saisie manuelle le vendredi", progesti: "Tableau de bord live des interventions" },
      { aspect: "Lien prépaie", excel: "Recomptage Excel avant paie", progesti: "Heures exportées vers module RH" },
      { aspect: "Multi-sites", excel: "Une feuille par agent et par semaine", progesti: "Pointage rattaché au site et au passage" },
      { aspect: "Litiges client", excel: "Recherche dans les classeurs", progesti: "Historique horodaté par intervention" },
    ],
    workflow: [
      { step: "01", text: "L'agent ouvre son planning mobile et voit les sites du jour" },
      { step: "02", text: "Pointage arrivée sur le site — horodatage enregistré" },
      { step: "03", text: "Intervention terminée : pointage départ sur le même site" },
      { step: "04", text: "Les heures remontent vers RH et facturation sans ressaisie" },
    ],
    dayInLife: [
      { time: "06:45", text: "Karim pointe son arrivée au parking du siège client — le bureau voit le statut vert." },
      { time: "08:10", text: "Départ immeuble A, arrivée immeuble B : deux pointages distincts, deux sites tracés." },
      { time: "12:30", text: "Le responsable vérifie qui est encore sur site avant de valider un remplacement." },
      { time: "17:00", text: "Fin de journée : les heures sont prêtes pour la prépaie, sans feuille papier." },
      { time: "17:30", text: "Un client conteste une facture : l'historique de pointage du mardi est sorti en deux clics." },
    ],
    relatedModuleSlugs: ["planification", "facturation", "gestion-rh"],
    relatedIntro:
      "Le pointage s'inscrit dans votre flux PROGESTI : alimenté par le planning, il nourrit la facturation au réalisé et les variables RH.",
    stats: [
      ["Mobile", "Android & iOS"],
      ["Direct", "Remontée bureau live"],
      ["Horodatage", "Arrivée & départ"],
      ["Preuve", "Historique par site"],
    ],
    image: "/screen-telegestion.webp",
    imageAlt: "Télégestion PROGESTI — pointages et interventions en direct",
    faq: [
      { q: "Faut-il du matériel spécifique pour pointer ?", a: "Non. Un smartphone Android ou iOS suffit. L'application PROGESTI est incluse dans l'offre." },
      { q: "La géolocalisation est-elle obligatoire ?", a: "Non, c'est optionnel. Vous choisissez de l'activer selon vos contrats et votre politique interne." },
      { q: "Les heures pointées sont-elles utilisées pour la facturation ?", a: "Oui. Les heures terrain alimentent la facturation au réalisé et le module RH pour les variables de paie." },
      { q: "Que se passe-t-il si un agent oublie de pointer ?", a: "Le bureau voit les passages sans pointage et peut corriger ou relancer l'agent depuis PROGESTI." },
      { q: "Le module est-il inclus dans le tarif ?", a: "Oui — 149 € HT par mois, jusqu'à 5 utilisateurs, tous modules compris. Essai 7 jours sans carte bancaire." },
      { q: "Peut-on consulter l'historique par client ?", a: "Oui. Filtrez par site, agent ou période pour répondre à un litige ou un contrôle." },
    ],
    useCases: [
      {
        id: "syndics",
        label: "Syndics",
        title: "Prouver les passages parties communes",
        body: "Les syndics et régies exigent parfois des preuves de passage sur halls et cages d'escalier, surtout après une réclamation de copropriétaire. Avec PROGESTI, chaque intervention est horodatée et rattachée au site immeuble. Vous sortez un relevé clair : qui est passé, quand, combien de temps. La géolocalisation optionnelle renforce la crédibilité sans alourdir le travail des agents. Fini les feuilles papier perdues ou signées en avance. En cas de contrôle du contrat cadre, vous répondez avec des données structurées, pas des souvenirs d'équipe. Le pointage devient un outil de relation client autant qu'un contrôle horaire.",
        mock: "preuves-report",
        context: "syndics",
      },
      {
        id: "bureaux",
        label: "Bureaux",
        title: "Créneaux avant ouverture tracés",
        body: "Les prestations tôt le matin ou en soirée sont difficiles à superviser : le donneur d'ordre n'est pas sur place quand vos équipes interviennent. Le pointage PROGESTI atteste l'arrivée et le départ sur chaque site corporate, avec l'heure exacte. Le facility manager peut être rassuré sans appeler votre standard. Si un étage a été oublié, vous le voyez avant la facturation. Les heures réelles alimentent la facturation au réalisé quand le contrat est au temps passé. Les agents enchaînent plusieurs sites : chaque pointage est rattaché au bon client, sans confusion en fin de semaine.",
        mock: "telegestion",
        context: "bureaux",
      },
      {
        id: "fin-de-chantier",
        label: "Fin de chantier",
        title: "Heures chantier pour facturation finale",
        body: "Sur une remise en état post-travaux, les heures réelles déterminent souvent le solde à facturer — surtout quand le chantier s'est prolongé. Les équipes pointent chaque phase sur site : décapage, finition, vitrerie. Le bureau suit l'avancement en direct et ajuste la facturation finale sans estimer au doigt mouillé. Le donneur d'ordre BTP ou le maitre d'ouvrage peut recevoir une trace des interventions. Les données de pointage rejoignent le devis accepté dans PROGESTI pour clôturer le dossier proprement, sans ressaisie dans un tableur parallèle.",
        mock: "mobile-app",
        context: "fin-de-chantier",
      },
    ],
  },
  clients: {
    pillar: "Organiser",
    heroLead:
      "Centralisez fiches clients, sites rattachés, consignes d'accès et historique d'interventions : une seule base partagée entre commercial, exploitation et facturation.",
    seoTitle: "Gestion clients & sites nettoyage",
    seoDescription:
      "Fiches clients, sites illimités et historique pour entreprises de nettoyage. Fini les infos dispersées. Inclus à 149 € HT/mois. Essai 7 jours sans carte bancaire.",
    benefits: [
      { title: "Fiches clients complètes", text: "Contacts, contrats, sites rattachés — une seule vérité pour toute l'équipe." },
      { title: "Infos d'accès centralisées", text: "Codes, clés, consignes : fini les messages perdus dans WhatsApp ou les mails." },
      { title: "Historique par site", text: "Ce qui a été fait, quand, par qui — pour litiges, renouvellements et audits." },
    ],
    problemBody:
      "Les informations client d'une entreprise de nettoyage sont rarement au même endroit. Le commercial a les contacts dans son carnet, l'exploitant les codes d'accès dans un groupe WhatsApp, la comptabilité les adresses de facturation dans un dossier Excel. Quand un agent remplace un collègue sur un immeuble, personne ne sait où trouver le badge parking. Un renouvellement de contrat arrive : il faut recomposer l'historique des passages à la main. Un syndic réclame un relevé trimestriel, et vous passez une demi-journée à croiser planning, factures et feuilles de présence. Les sites se multiplient — bureaux, résidences, locaux industriels — sans structure commune. Chaque départ d'employé emporte avec lui une partie du savoir client. La croissance devient un risque opérationnel plutôt qu'un levier.",
    solutionBody:
      "Le module Clients de PROGESTI structure votre portefeuille autour d'une fiche par client, avec autant de sites rattachés que nécessaire. Contacts, adresses, conditions contractuelles, consignes d'accès et documents utiles vivent au même endroit — accessibles au bureau et, pour le terrain, via le mobile sur chaque passage. Chaque site alimente directement le planning et reçoit en retour l'historique des interventions, pointages et factures associées. Quand le commercial crée un devis, il part de la fiche existante ; quand l'exploitant planifie, les données sont déjà là ; quand la compta facture, le lien client-site est intact. Clients et sites illimités, inclus dans l'offre à 149 € HT par mois pour 5 utilisateurs. Import possible avec accompagnement. Essai 7 jours sans carte bancaire.",
    solutionBullets: [
      "Fiche client avec contacts, contrat et documents",
      "Sites illimités rattachés, chacun avec ses consignes",
      "Historique interventions, pointages et factures par site",
      "Alimentation directe du planning et des devis",
      "Import de votre base existante avec accompagnement",
    ],
    excelComparison: [
      { aspect: "Structure", excel: "Un onglet par client, champs hétérogènes", progesti: "Fiche normalisée client + sites rattachés" },
      { aspect: "Consignes accès", excel: "Notes dispersées, SMS, mails", progesti: "Codes et consignes sur chaque fiche site" },
      { aspect: "Historique", excel: "Croisement manuel planning + factures", progesti: "Timeline interventions par site" },
      { aspect: "Partage équipe", excel: "Fichier local ou Google Drive", progesti: "Base unique, droits par utilisateur" },
      { aspect: "Lien planning", excel: "Recopier adresse et fréquence", progesti: "Site → planning en un clic" },
      { aspect: "Renouvellement", excel: "Reconstituer l'activité à la main", progesti: "Historique et CA par client disponibles" },
    ],
    workflow: [
      { step: "01", text: "Créez la fiche client avec contacts et conditions contractuelles" },
      { step: "02", text: "Ajoutez les sites : adresses, accès, fréquences et consignes" },
      { step: "03", text: "Le planning et le terrain s'appuient sur ces fiches à jour" },
      { step: "04", text: "Chaque intervention enrichit l'historique client automatiquement" },
    ],
    dayInLife: [
      { time: "08:00", text: "Nouveau client signé : fiche créée, trois sites rattachés en quinze minutes." },
      { time: "10:00", text: "Un agent remplaçant consulte les codes d'accès sur mobile avant d'intervenir." },
      { time: "14:00", text: "Le syndic appelle : l'historique du site rue Lafayette s'affiche immédiatement." },
      { time: "16:30", text: "Renouvellement annuel : CA et passages du client sortis sans tableur." },
      { time: "17:00", text: "Mise à jour consigne parking : visible bureau et terrain en direct." },
    ],
    relatedModuleSlugs: ["planification", "devis", "facturation"],
    relatedIntro:
      "Vos fiches clients sont le socle de PROGESTI : elles alimentent le planning, les devis et la facturation sans ressaisie.",
    stats: [
      ["Illimité", "Clients et sites"],
      ["1 base", "Commercial + ops + compta"],
      ["Historique", "Passages & devis"],
      ["Consignes", "Bureau et mobile"],
    ],
    image: "/hero-planning.png",
    imageAlt: "Module Clients PROGESTI — fiches clients et sites pour entreprises de nettoyage",
    faq: [
      { q: "Combien de clients et sites puis-je créer ?", a: "Clients et sites illimités dans l'offre à 149 € HT par mois, sans supplément par site." },
      { q: "Peut-on importer une base existante ?", a: "Oui. PROGESTI propose un import avec accompagnement pour reprendre vos fiches clients et sites." },
      { q: "Les agents voient-ils les consignes d'accès ?", a: "Oui. Les consignes sont visibles sur mobile lors de chaque passage planifié." },
      { q: "L'historique inclut-il les pointages et factures ?", a: "Oui. Par site, vous retrouvez interventions, heures et factures associées." },
      { q: "Plusieurs contacts par client ?", a: "Oui. Gérez plusieurs interlocuteurs par fiche client avec leurs rôles." },
      { q: "Le module est-il lié au CRM ?", a: "Oui. Prospects et clients partagent la même logique dans PROGESTI." },
    ],
    useCases: [
      {
        id: "syndics",
        label: "Syndics",
        title: "Patrimoine immeuble structuré",
        body: "Un contrat syndic couvre souvent dix ou vingt immeubles avec des interlocuteurs différents — gardien, gestionnaire, conseil syndical. PROGESTI regroupe le tout sous une fiche client syndic, avec un site par immeuble : adresse, accès badge, fréquences parties communes, contact sur place. Quand la régie change de gestionnaire, vous mettez à jour un seul endroit. L'historique par immeuble permet de répondre à une réclamation sur les halls du bâtiment B sans confondre avec le bâtiment C. Les renouvellements se préparent avec le volume réel de passages et le CA par site.",
        mock: "clients",
        context: "syndics",
      },
      {
        id: "bureaux",
        label: "Bureaux",
        title: "Multi-sites corporate sous une fiche",
        body: "Les grands comptes bureaux ont des sites dans plusieurs villes ou étages, chacun avec ses horaires et consignes sécurité. La fiche client PROGESTI regroupe l'ensemble du parc : site siège, agences régionales, locaux annexes. Le facility manager central voit tous les sites ; l'exploitant planifie site par site avec les bonnes fréquences. Un changement de code d'accès après audit sécurité se propage immédiatement au terrain. La facturation consolidée ou par site reste rattachée au bon contrat cadre.",
        mock: "historique-timeline",
        context: "bureaux",
      },
      {
        id: "fin-de-chantier",
        label: "Fin de chantier",
        title: "Dossier client ponctuel complet",
        body: "Une remise en état post-travaux est un client ponctuel mais exigeant : adresse chantier, contact conducteur de travaux, devis signé, planning d'intervention et facture finale. PROGESTI crée un dossier complet dès l'acceptation du devis — site temporaire ou client one-shot. Toutes les étapes restent liées : devis, passages, pointages, photos si besoin, facture. Le commercial retrouve le dossier six mois plus tard si le même promoteur rappelle. Pas de recherche dans les mails ni de dossier Word perdu.",
        mock: "flux-pipeline",
        context: "fin-de-chantier",
      },
    ],
  },
  devis: {
    pillar: "Facturer",
    heroLead:
      "Créez des devis professionnels rattachés à vos fiches clients, suivez les acceptations et convertissez en contrat et planning sans ressaisie.",
    seoTitle: "Devis nettoyage professionnel",
    seoDescription:
      "Devis structurés pour entreprises de nettoyage, liés aux clients et sites. Conversion contrat sans ressaisie. 149 € HT/mois, essai 7 jours sans CB.",
    benefits: [
      { title: "Devis structurés", text: "Rattachés au client et aux sites — plus de fichiers Word éparpillés sur le bureau." },
      { title: "Envoi rapide", text: "Le commercial et l'exploitation partagent la même base client à jour." },
      { title: "Vers contrat & planning", text: "Devis accepté → passages planifiés et facturation préparée sans double saisie." },
    ],
    problemBody:
      "Dans beaucoup d'entreprises de nettoyage, le devis vit encore dans Word ou un PDF générique. Le commercial l'envoie par mail, le classe dans un dossier, et l'exploitation ne le voit qu'une fois le client signé — parfois avec des montants ou des fréquences mal retranscrits. Les versions s'accumulent : devis_v2_final_modif.docx. Personne ne sait quel prospect est en attente de relance, ni depuis combien de jours. Un appel d'offres syndic exige une réactivité que votre processus manuel ne suit pas. Quand le devis est accepté, il faut recréer le client, les sites, les fréquences et le montant dans le planning et la compta. Chaque conversion est une source d'erreur. Les marges réelles divergent du devis initial parce que personne n'a relié l'estimation au réalisé terrain.",
    solutionBody:
      "Le module Devis de PROGESTI s'intègre nativement à vos fiches clients et au CRM. Vous composez un devis professionnel directement depuis le dossier prospect ou client : prestations, fréquences, tarifs, sites concernés. Envoi et suivi de statut sont centralisés ; le commercial voit ce qui est en attente, accepté ou refusé. Dès qu'un devis est signé, la conversion vers contrat et planning se fait sans ressaisie — les sites, fréquences et montants alimentent l'exploitation et préparent la facturation. Le pipeline commercial et l'opérationnel travaillent enfin sur la même base. Devis illimités, inclus dans l'offre à 149 € HT par mois pour 5 utilisateurs. Essai 7 jours sans carte bancaire, accompagnement à la prise en main.",
    solutionBullets: [
      "Devis rattachés à la fiche client ou prospect",
      "Modèle professionnel avec vos prestations types",
      "Suivi des statuts : envoyé, accepté, refusé, expiré",
      "Conversion directe vers planning et facturation",
      "Historique des versions et relances commerciales",
    ],
    excelComparison: [
      { aspect: "Création", excel: "Word + copier-coller adresse client", progesti: "Devis depuis la fiche client préremplie" },
      { aspect: "Suivi commercial", excel: "Liste Excel ou mémoire du commercial", progesti: "Statuts et relances dans le CRM intégré" },
      { aspect: "Conversion ops", excel: "Ressaisie manuelle planning + compta", progesti: "Acceptation → contrat et sites automatiques" },
      { aspect: "Versions", excel: "Fichiers _v2 _final éparpillés", progesti: "Historique des devis par client" },
      { aspect: "Marge", excel: "Devis isolé du réalisé", progesti: "Lien devis → passages → rentabilité" },
      { aspect: "Réactivité AO", excel: "Repartir de zéro à chaque appel d'offres", progesti: "Dupliquer un modèle site et ajuster" },
    ],
    workflow: [
      { step: "01", text: "Ouvrez la fiche prospect ou client et lancez un nouveau devis" },
      { step: "02", text: "Composez prestations, fréquences et tarifs par site" },
      { step: "03", text: "Envoyez et suivez l'acceptation depuis PROGESTI" },
      { step: "04", text: "Convertissez en contrat : planning et facturation prêts" },
    ],
    dayInLife: [
      { time: "09:00", text: "Le commercial crée un devis syndic depuis la fiche prospect créée hier." },
      { time: "11:00", text: "Relance automatique listée : deux devis en attente depuis dix jours." },
      { time: "14:00", text: "Devis accepté par mail : conversion en contrat en trois clics." },
      { time: "15:00", text: "L'exploitant voit les sites et fréquences sans ressaisie." },
      { time: "17:00", text: "Le dirigeant compare devis signé et marge prévisionnelle dans Rentabilité." },
    ],
    relatedModuleSlugs: ["crm", "planification", "facturation"],
    relatedIntro:
      "Le devis PROGESTI ouvre le flux commercial : du CRM à la planification et à la facturation, sans rupture de données.",
    stats: [
      ["0", "Ressaisie après acceptation"],
      ["CRM", "Suivi intégré"],
      ["PDF", "Devis pro en 1 clic"],
      ["Contrat", "→ planning direct"],
    ],
    image: "/screen-factures.webp",
    imageAlt: "Module Devis PROGESTI — devis professionnels pour entreprises de nettoyage",
    faq: [
      { q: "Peut-on personnaliser le format du devis ?", a: "Oui. Devis professionnels avec votre structure de prestations et vos conditions habituelles." },
      { q: "Le devis est-il lié au CRM ?", a: "Oui. Prospects, statuts et relances sont gérés dans le module CRM intégré." },
      { q: "Que se passe-t-il quand le client accepte ?", a: "Vous convertissez en contrat : sites, fréquences et tarifs alimentent le planning sans ressaisie." },
      { q: "Peut-on dupliquer un devis existant ?", a: "Oui. Pratique pour les appels d'offres ou les contrats similaires sur un nouveau site." },
      { q: "Le module est-il inclus dans le tarif ?", a: "Oui — 149 € HT par mois, 5 utilisateurs, tous modules compris." },
      { q: "Export PDF pour envoi client ?", a: "Oui. Envoi par mail ou export PDF depuis PROGESTI." },
    ],
    useCases: [
      {
        id: "syndics",
        label: "Syndics",
        title: "Appel d'offres immeuble détaillé",
        body: "Un appel d'offres syndic exige un devis précis : surfaces parties communes, fréquences par zone, tarif annuel indexé. PROGESTI permet de structurer le devis par site immeuble avec des prestations récurrentes claires. Le commercial duplique un modèle de copropriété type et ajuste les surfaces. Une fois le marché remporté, la conversion crée les sites et fréquences pour l'exploitation — halls, cages, parking, local poubelles. Le syndic retrouve le même détail sur la facturation. Les renouvellements partent de l'historique contractuel, pas d'un nouveau fichier Word.",
        mock: "devis",
        context: "syndics",
      },
      {
        id: "bureaux",
        label: "Bureaux",
        title: "Devis multi-étages et options",
        body: "Un prospect bureaux demande un devis open space quotidien plus sanitaires hebdo et vitrerie mensuelle. PROGESTI compose le devis par zone avec des lignes distinctes, rattachées au futur site. Le facility manager compare facilement ; une fois signé, chaque ligne devient une fréquence planifiable. Les options — tapis, consommables — restent visibles pour la facturation. Le commercial suit le statut sans tableur parallèle. Si le client négocie une fréquence, vous versionnez le devis sans perdre l'original.",
        mock: "flux-pipeline",
        context: "bureaux",
      },
      {
        id: "fin-de-chantier",
        label: "Fin de chantier",
        title: "Devis ponctuel remise en état",
        body: "La remise en état post-travaux repose sur un devis forfaitaire ou au temps passé, souvent urgent. PROGESTI crée un devis ponctuel rattaché au chantier : lots sols, vitres, désinfection, délais. À l'acceptation, les passages exceptionnels sont planifiés sur les créneaux serrés demandés par le conducteur de travaux. Les heures pointées sur site servent à ajuster la facture finale si le contrat le prévoit. Le dossier complet — devis, planning, pointages, facture — reste dans PROGESTI pour référence future.",
        mock: "devis",
        context: "fin-de-chantier",
      },
    ],
  },
  facturation: {
    pillar: "Facturer",
    heroLead:
      "Facturez ce qui a réellement été fait sur le terrain : planning et pointages alimentent vos factures, sans double saisie ni oubli de fin de mois.",
    seoTitle: "Facturation nettoyage au réalisé",
    seoDescription:
      "Factures alignées sur le réalisé terrain pour entreprises de nettoyage. Planning et pointage intégrés. 149 € HT/mois, 5 users, essai 7 jours sans CB.",
    benefits: [
      { title: "Du réalisé à la facture", text: "Planning et pointage alimentent la facturation — facturez ce qui a vraiment été fait." },
      { title: "Moins d'oublis", text: "Fin de mois sans recomptage manuel ni factures oubliées sur un site." },
      { title: "Un seul outil", text: "Pas de double saisie entre ops et logiciel comptable pour l'activité courante." },
    ],
    problemBody:
      "La facturation est souvent le maillon faible des entreprises de nettoyage. L'exploitation connaît le réalisé, la compta facture des forfaits théoriques, et personne ne recoupe avant l'envoi. Des passages non facturés s'accumulent silencieusement ; des prestations exceptionnelles restent dans la tête du chef d'équipe. Fin de mois rime avec stress : Excel des heures, liste des sites, modèles Word de facture, relances pour savoir ce qui manque. Les factures partent en retard, la trésorerie souffre, les clients professionnels râlent. Les exports vers le comptable sont une rafale de corrections. Quand un syndic demande une facture détaillée par immeuble, c'est une demi-journée de reconstruction. Le lien entre terrain et chiffre d'affaires reste opaque — vous facturez « à peu près » ce que vous pensez avoir fait.",
    solutionBody:
      "PROGESTI aligne la facturation sur le réalisé terrain. Les passages planifiés et pointés constituent la base de facturation : vous validez, ajustez si besoin, et générez les factures par client ou par site. Les contrats récurrents produisent des factures périodiques ; les prestations exceptionnelles sont rattrapées avant qu'elles ne disparaissent. Plus de double saisie entre ops et facturation — les mêmes données nourrissent le CA et la rentabilité. Export comptable disponible selon vos intégrations. Factures illimitées, module inclus à 149 € HT par mois pour 5 utilisateurs. Essai 7 jours sans carte bancaire. Support français au 05 82 95 09 19 pour la mise en place de vos modèles de facturation.",
    solutionBullets: [
      "Base de facturation alimentée par planning et pointages",
      "Factures récurrentes alignées sur les contrats",
      "Prestations exceptionnelles rattrapées avant envoi",
      "Facturation par client, site ou contrat cadre",
      "Export vers votre écosystème comptable",
    ],
    excelComparison: [
      { aspect: "Source des données", excel: "Recomptage manuel fin de mois", progesti: "Passages planifiés et pointés en base" },
      { aspect: "Oublis", excel: "Sites oubliés dans la liste", progesti: "Alertes sur passages non facturés" },
      { aspect: "Prestations extra", excel: "Orales, jamais facturées", progesti: "Interventions exceptionnelles intégrées" },
      { aspect: "Détail syndic", excel: "Reconstruction manuelle par immeuble", progesti: "Facturation ventilée par site" },
      { aspect: "Délai d'envoi", excel: "Fin de mois + 5 à 10 jours", progesti: "Facturation continue, envoi accéléré" },
      { aspect: "Lien rentabilité", excel: "CA dans un autre fichier", progesti: "Factures → marges par client" },
    ],
    workflow: [
      { step: "01", text: "Les passages planifiés et pointés constituent la base du mois" },
      { step: "02", text: "Vérifiez et ajustez les prestations avant clôture" },
      { step: "03", text: "Générez les factures par client, site ou contrat" },
      { step: "04", text: "Envoyez et suivez les paiements dans le module Impayés" },
    ],
    dayInLife: [
      { time: "08:00", text: "Vue du mois : passages pointés et prestations en attente de validation." },
      { time: "10:00", text: "Prestation exceptionnelle ajoutée hier : incluse dans la facture syndic." },
      { time: "14:00", text: "Factures récurrentes générées pour les contrats bureaux du 1er au 30." },
      { time: "16:00", text: "Export comptable du lot du mois — une seule manipulation." },
      { time: "17:30", text: "Facture détaillée par immeuble envoyée au syndic avant sa deadline." },
    ],
    relatedModuleSlugs: ["pointage", "impayes", "rentabilite"],
    relatedIntro:
      "La facturation PROGESTI s'appuie sur le pointage terrain et alimente le suivi des impayés et la rentabilité.",
    stats: [
      ["Réalisé", "Base de facturation"],
      ["0", "Double saisie ops → compta"],
      ["B2B", "Factures & relances"],
      ["Export", "Comptable intégré"],
    ],
    image: "/screen-factures.webp",
    imageAlt: "Facturation PROGESTI — factures alignées sur le réalisé terrain",
    faq: [
      { q: "La facturation se base-t-elle sur les pointages ?", a: "Oui. Les passages planifiés et pointés alimentent la base de facturation, ajustable avant envoi." },
      { q: "Peut-on facturer des contrats récurrents automatiquement ?", a: "Oui. Factures périodiques alignées sur vos contrats et fréquences." },
      { q: "Export vers mon logiciel comptable ?", a: "Consultez la page Intégrations pour les options d'export disponibles." },
      { q: "Facturation détaillée par site pour les syndics ?", a: "Oui. Ventilation par site rattaché au client." },
      { q: "Le module est-il inclus ?", a: "Oui — 149 € HT par mois, 5 utilisateurs, sans module payant en supplément." },
      { q: "Peut-on inclure des prestations exceptionnelles ?", a: "Oui. Interventions hors contrat intégrées avant génération de la facture." },
    ],
    useCases: [
      {
        id: "syndics",
        label: "Syndics",
        title: "Facturation ventilée par immeuble",
        body: "Les régies exigent souvent une facture mensuelle ventilée par immeuble ou par lot de copropriété. PROGESTI génère la facturation à partir des passages réalisés sur chaque site rattaché au contrat syndic. Halls, cages, parkings : chaque ligne correspond au réalisé pointé. Plus de reconstruction manuelle à partir d'un montant global. En cas de contestation sur un bâtiment, vous isolez les interventions du mois. Les indexations annuelles partent du contrat initial stocké dans PROGESTI. La trésorerie s'améliore parce que les factures partent à temps, complètes.",
        mock: "factures-stack",
        context: "syndics",
      },
      {
        id: "bureaux",
        label: "Bureaux",
        title: "Forfait et heures supplémentaires",
        body: "Les contrats bureaux combinent souvent un forfait mensuel et des heures supplémentaires — nettoyage événementiel, débordement open space. PROGESTI facture le forfait récurrent et intègre les prestations exceptionnelles pointées sur site. Le facility manager reçoit une facture cohérente avec les interventions réelles. Fin de mois sans appeler chaque chef d'équipe pour lister les extras. Le CA par site alimente directement le module Rentabilité pour voir si le contrat tient la marge.",
        mock: "factures-stack",
        context: "bureaux",
      },
      {
        id: "fin-de-chantier",
        label: "Fin de chantier",
        title: "Facture finale de remise en état",
        body: "La remise en état se facture souvent en une ou deux fois, avec acompte à la commande et solde à la livraison. PROGESTI enchaîne devis accepté, passages pointés et facture finale dans le même dossier. Les heures réelles ajustent le solde si le contrat est au temps passé. Le conducteur de travaux reçoit une facture détaillée par lot. Le dossier reste archivé pour les prochains chantiers du même promoteur. Pas de facture Word oubliée dans les brouillons du commercial.",
        mock: "flux-pipeline",
        context: "fin-de-chantier",
      },
    ],
  },
  impayes: {
    pillar: "Facturer",
    heroLead:
      "Visualisez ce qui est dû, suivez vos relances et protégez votre trésorerie — sans tableur parallèle ni factures oubliées dans les brouillons.",
    seoTitle: "Suivi impayés & relances",
    seoDescription:
      "Suivez factures impayées et relances pour entreprises de nettoyage. Trésorerie sous contrôle, sans Excel. 149 € HT/mois. Essai 7 jours sans CB.",
    benefits: [
      { title: "Vue trésorerie claire", text: "Ce qui est dû, par client, sans tableur parallèle ni post-it sur l'écran." },
      { title: "Relances suivies", text: "Gardez le fil des relances, échéances et litiges en cours." },
      { title: "Marge protégée", text: "Repérez les retards de paiement avant qu'ils ne deviennent critiques." },
    ],
    problemBody:
      "Les impayés tuinent silencieusement les entreprises de nettoyage. Vous facturez, vous envoyez, et vous espérez. Personne ne regarde vraiment l'échéancier avant que la trésorerie ne se serre. Les relances sont irrégulières — un mail un jour, un appel trois semaines plus tard, selon l'humeur. Certains clients professionnels paient à 60 ou 90 jours ; d'autres traînent sans réponse. Le dirigeant découvre 15 000 € de retard en préparant la paie. Les litiges sur des prestations contestées bloquent des factures entières pendant des mois. Excel liste les factures « en attente », mais personne ne le met à jour. La relation commerciale souffre quand les relances sont tardives ou mal cadrées. Et vous continuez de prestater chez des clients qui ne paient plus depuis deux mois.",
    solutionBody:
      "Le module Impayés de PROGESTI donne une vue claire de votre poste client : factures émises, échues, partiellement payées ou en litige. Par client, par facture, par ancienneté — vous priorisez les relances qui comptent. Chaque action est tracée : mail, appel, mise en demeure. Vous voyez qui paie régulièrement et qui nécessite une vigilance accrue avant d'accepter de nouvelles prestations. Lié à la facturation, le module évite les tableurs parallèles : dès qu'une facture est émise, elle entre dans le suivi. La trésorerie redevient prévisible ; les mauvaises surprises de fin de trimestre diminuent. Inclus à 149 € HT par mois, 5 utilisateurs. Essai 7 jours sans carte bancaire.",
    solutionBullets: [
      "Tableau de bord des factures échues et en retard",
      "Suivi des relances par client et par facture",
      "Vue par ancienneté pour prioriser les actions",
      "Statuts : payé, partiel, litige, contentieux",
      "Lien direct avec le module Facturation",
    ],
    excelComparison: [
      { aspect: "Vue d'ensemble", excel: "Liste Excel non mise à jour", progesti: "Tableau de bord temps réel des échéances" },
      { aspect: "Relances", excel: "Post-it et mémoire du dirigeant", progesti: "Historique des relances par facture" },
      { aspect: "Priorisation", excel: "Tri manuel par montant", progesti: "Classement par ancienneté et montant dû" },
      { aspect: "Litiges", excel: "Note dans un coin du classeur", progesti: "Statut litige avec commentaire tracé" },
      { aspect: "Lien facturation", excel: "Recroiser deux fichiers", progesti: "Facture émise → suivi automatique" },
      { aspect: "Décision commerciale", excel: "Accepter un client sans visibilité", progesti: "Historique paiement visible avant nouveau contrat" },
    ],
    workflow: [
      { step: "01", text: "Les factures émises entrent automatiquement dans le suivi" },
      { step: "02", text: "Identifiez les échues et priorisez par ancienneté" },
      { step: "03", text: "Lancez relances mail ou appel, tracées dans PROGESTI" },
      { step: "04", text: "Marquez payé, partiel ou litige — trésorerie à jour" },
    ],
    dayInLife: [
      { time: "08:30", text: "Tableau de bord : factures échues priorisées par ancienneté." },
      { time: "10:00", text: "Relance mail programmée pour trois factures syndic à J+30." },
      { time: "11:30", text: "Un client appelle : historique des paiements affiché en direct." },
      { time: "15:00", text: "Litige sur une prestation : facture mise en statut litige, relances suspendues." },
      { time: "17:00", text: "Virement reçu : facture soldée, trésorerie recalculée." },
    ],
    relatedModuleSlugs: ["facturation", "rentabilite", "crm"],
    relatedIntro:
      "Les impayés s'inscrivent dans la boucle Facturation → Trésorerie → Rentabilité, avec le CRM pour anticiper les risques client.",
    stats: [
      ["Temps réel", "Poste client"],
      ["Tracé", "Historique relances"],
      ["Relances", "Priorisées par échéance"],
      ["Litiges", "Statut dédié"],
    ],
    image: "/screen-telegestion.webp",
    imageAlt: "Module Impayés PROGESTI — suivi trésorerie et relances",
    faq: [
      { q: "Les relances sont-elles automatiques ?", a: "PROGESTI trace et structure vos relances. Vous gardez la main sur le contenu et le timing." },
      { q: "Peut-on voir les impayés par client ?", a: "Oui. Vue par client, par facture et par ancienneté de retard." },
      { q: "Comment gérer un litige sur une prestation ?", a: "Statut litige sur la facture, avec commentaire et suspension des relances automatiques." },
      { q: "Le module est-il lié à la facturation ?", a: "Oui. Chaque facture émise entre dans le suivi impayés sans ressaisie." },
      { q: "Inclus dans le tarif ?", a: "Oui — 149 € HT par mois, 5 utilisateurs, sans supplément." },
      { q: "Peut-on identifier les clients à risque ?", a: "Oui. Historique de paiement visible avant d'accepter un nouveau contrat." },
    ],
    useCases: [
      {
        id: "syndics",
        label: "Syndics",
        title: "Échéances longues des régies",
        body: "Les syndics et régies paient souvent à 45 ou 60 jours fin de mois. Sans suivi rigoureux, trois factures s'accumulent avant la première relance. PROGESTI liste les échéances par régie et par immeuble, avec l'ancienneté de chaque facture. Vous relancez au bon moment, avec l'historique des échanges. Un litige sur un immeuble n'bloque pas le paiement des autres sites du même client. Le dirigeant voit le poste client syndic sans attendre le bilan trimestriel. La trésorerie devient lisible même avec des délais de paiement longs mais prévisibles.",
        mock: "impayes",
        context: "syndics",
      },
      {
        id: "bureaux",
        label: "Bureaux",
        title: "Retards ponctuels grands comptes",
        body: "Les grands comptes bureaux paient généralement, mais avec des décalages — validation interne, changement de contact comptable. PROGESTI alerte quand une facture corporate dépasse l'échéance habituelle de ce client. Vous relancez le facility manager et le service comptable avec la bonne facture, sans chercher dans les mails. L'historique montre si c'est un retard ponctuel ou une dégradation. Avant de signer un nouveau site, vous consultez le profil de paiement du groupe.",
        mock: "impayes",
        context: "bureaux",
      },
      {
        id: "fin-de-chantier",
        label: "Fin de chantier",
        title: "Solde de chantier et acomptes",
        body: "Les remises en état combinent acompte à la commande et solde à réception. PROGESTI suit les deux échéances : acompte du devis, solde de la facture finale. Si le promoteur retarde le solde après livraison, la relance part avec le détail des prestations pointées. Un litige sur une zone non conforme se gère sur la facture concernée sans perdre la trace des heures réelles. Le dossier chantier reste complet pour un éventuel contentieux.",
        mock: "impayes",
        context: "fin-de-chantier",
      },
    ],
  },
  "gestion-rh": {
    pillar: "Équipe & pilotage",
    heroLead:
      "Contrats, absences, remplacements et heures terrain : la gestion RH de PROGESTI vit au même endroit que le planning, sans tableur prépaie parallèle.",
    seoTitle: "Gestion RH entreprise de nettoyage",
    seoDescription:
      "RH, absences et heures terrain pour entreprises de nettoyage. Lié au planning et pointage. 149 € HT/mois, 5 users. Essai 7 jours sans CB.",
    benefits: [
      { title: "Absences & remplacements", text: "Gérés au même endroit que le planning — pas de double communication." },
      { title: "Heures terrain", text: "Pointages alimentent variables et prépaie, moins d'oubli d'heures sup." },
      { title: "Fiches agents", text: "Contrats, coordonnées et affectations habituelles centralisés." },
    ],
    problemBody:
      "La gestion RH des entreprises de nettoyage est souvent éclatée. Les contrats traînent dans un classeur, les absences arrivent par SMS, les remplacements se gèrent au téléphone en parallèle du planning Excel. Le responsable d'exploitation apprend à 7 h qu'un agent est malade ; la prépaie découvre des heures supplémentaires non déclarées le 28 du mois. Les variables de paie se calculent sur des feuilles papier ramassées en retard. Personne ne voit la charge globale par agent sur le mois. Les remplacements récurrents ne sont pas tracés : le même intérimaire revient sans que sa fiche soit à jour. Turnover élevé, multi-sites, horaires décalés : la complexité RH explose avec la croissance, mais les outils restent ceux d'une équipe de cinq personnes.",
    solutionBody:
      "Le module RH de PROGESTI connecte les fiches agents au planning et au pointage. Vous gérez contrats, absences et remplacements au même endroit où vous affectez les passages. Une absence signalée déclenche la recherche de backup sur le planning ; les heures pointées alimentent les variables de paie sans ressaisie. Chaque agent a sa fiche : coordonnées, type de contrat, sites habituels, historique d'interventions. Le bureau voit la charge du mois par agent avant de valider la prépaie. Ce n'est pas un logiciel de paie complet, mais la base fiable que votre comptable ou votre expert paie attend — heures réelles, propres, traçables. Inclus à 149 € HT par mois, 5 utilisateurs. Essai 7 jours sans carte bancaire.",
    solutionBullets: [
      "Fiches agents avec contrat et sites habituels",
      "Absences liées au planning et aux remplacements",
      "Heures terrain remontées par le pointage mobile",
      "Variables de paie préparées sans feuilles papier",
      "Vue charge mensuelle par agent",
    ],
    excelComparison: [
      { aspect: "Absences", excel: "SMS + modification planning à part", progesti: "Absence → impact planning immédiat" },
      { aspect: "Heures", excel: "Feuilles papier fin de semaine", progesti: "Pointages mobile en direct" },
      { aspect: "Remplacements", excel: "Appels en chaîne, non tracés", progesti: "Backup affecté et visible sur mobile" },
      { aspect: "Fiches agents", excel: "Classeur ou dossier partagé", progesti: "Fiche centralisée avec historique" },
      { aspect: "Prépaie", excel: "Recomptage Excel avant le 28", progesti: "Export heures structuré pour la paie" },
      { aspect: "Charge", excel: "Estimation au feeling", progesti: "Heures planifiées vs réalisées par agent" },
    ],
    workflow: [
      { step: "01", text: "Créez les fiches agents : contrat, sites habituels, coordonnées" },
      { step: "02", text: "Signalez une absence — le planning propose les remplacements" },
      { step: "03", text: "Les pointages terrain alimentent les heures du mois" },
      { step: "04", text: "Exportez les variables pour la prépaie ou votre expert paie" },
    ],
    dayInLife: [
      { time: "06:30", text: "Sophie signale une absence : trois passages à réaffecter avant 8 h." },
      { time: "07:00", text: "Backup affecté sur les immeubles du matin, notifié sur mobile." },
      { time: "12:00", text: "Vue charge : alerte avant dépassement d'heures sup sur la semaine." },
      { time: "16:00", text: "Nouvel agent : fiche créée, sites de titularité assignés." },
      { time: "28 du mois", text: "Export heures du mois pour l'expert paie — sans feuilles papier." },
    ],
    relatedModuleSlugs: ["planification", "pointage", "rentabilite"],
    relatedIntro:
      "La gestion RH PROGESTI s'articule autour du planning et du pointage pour des équipes terrain toujours couvertes et des heures fiables.",
    stats: [
      ["Lié", "Planning + pointage"],
      ["Contrats", "Agents & équipes"],
      ["Absences", "Liées au planning"],
      ["Heures", "Export paie"],
    ],
    image: "/hero-planning.png",
    imageAlt: "Gestion RH PROGESTI — équipes, absences, heures terrain et export paie",
    faq: [
      { q: "PROGESTI remplace-t-il un logiciel de paie ?", a: "Non. PROGESTI centralise heures et variables ; vous exportez vers votre expert paie ou logiciel de paie." },
      { q: "Comment gérer un remplacement ?", a: "Depuis l'absence, réaffectez les passages à un backup — visible sur le planning mobile." },
      { q: "Les heures supplémentaires sont-elles visibles ?", a: "Oui. Heures planifiées vs pointées par agent sur la période." },
      { q: "Combien d'agents puis-je gérer ?", a: "Agents illimités. L'offre inclut 5 utilisateurs bureau ; le terrain pointe via l'app mobile." },
      { q: "Inclus dans le tarif ?", a: "Oui — 149 € HT par mois, tous modules compris." },
      { q: "Fiches agents avec documents ?", a: "Oui. Contrat, coordonnées et affectations centralisés par agent." },
    ],
    useCases: [
      {
        id: "syndics",
        label: "Syndics",
        title: "Titulaires et backups immeuble",
        body: "Sur un parc syndic, chaque immeuble a un titulaire habituel et un backup connu. PROGESTI rattache ces affectations à la fiche agent et au planning. Quand le titulaire est absent, le backup prend les passages en connaissance de cause — codes d'accès, consignes, fréquences. Le syndic ne voit pas de rupture de service. Les heures par agent alimentent la prépaie ; les remplacements sont tracés pour la rentabilité par contrat. La turnover se gère sans perdre la connaissance des sites.",
        mock: "rh-stack",
        context: "syndics",
      },
      {
        id: "bureaux",
        label: "Bureaux",
        title: "Équipes matin/soir et charge",
        body: "Les prestations bureaux tôt le matin reposent sur des agents spécifiques. PROGESTI montre la charge hebdomadaire de chaque agent avant d'accepter un nouveau site à 6 h. Une absence matinale déclenche le remplacement sur les créneaux critiques avant l'ouverture du client. Les heures décalées sont correctement remontées pour la paie. Le responsable RH voit qui approche des 35 h ou qui a de la marge pour absorber un remplacement.",
        mock: "rh-stack",
        context: "bureaux",
      },
      {
        id: "fin-de-chantier",
        label: "Fin de chantier",
        title: "Mobilisation équipes ponctuelles",
        body: "Un chantier de remise en état mobilise des agents sur quelques jours, parfois en heures supplémentaires. PROGESTI affecte temporairement les équipes sur les passages ponctuels et trace les heures pointées par agent. La prépaie du mois inclut les heures chantier sans oubli. Le coût main-d'œuvre alimente la rentabilité du dossier fin de chantier. Les intérimaires ou renforts peuvent être gérés avec des fiches dédiées.",
        mock: "rh-payroll",
        context: "fin-de-chantier",
      },
    ],
  },
  rentabilite: {
    pillar: "Facturer",
    heroLead:
      "Lisez vos marges par client et par site : tableaux de bord alimentés par le réalisé terrain, pour décider avec des chiffres et non une impression de fin de mois.",
    seoTitle: "Rentabilité & marges nettoyage",
    seoDescription:
      "Marges par client et site pour entreprises de nettoyage. Tableaux de bord alimentés par le réalisé. 149 € HT/mois. Essai 7 jours sans CB.",
    benefits: [
      { title: "Marges par client / site", text: "Lisez où vous gagnez — et où vous perdez du temps ou de l'argent." },
      { title: "Tableaux de bord", text: "Activité, charge et priorités du mois en un coup d'œil." },
      { title: "Décisions chiffrées", text: "Renégociations et arbitrages basés sur le réalisé, pas sur une intuition." },
    ],
    problemBody:
      "Beaucoup de dirigeants d'entreprises de nettoyage pilotent à l'instinct. Le CA est connu — plus ou moins — mais la marge par client reste floue. Un contrat syndic semble rentable jusqu'au jour où vous comptez les heures réelles et les remplacements non facturés. Un site bureaux « stratégique » consomme deux agents là où le devis n'en prévoyait qu'un. Excel ne suit pas le réalisé terrain ; le comptable voit le CA encaissé, pas le coût opérationnel. Les renégociations annuelles se font au doigt mouillé. Vous acceptez des contrats sous-tarifés par peur de perdre un client, sans chiffre pour dire non. Les fins de mois apportent une impression de rush sans visibilité sur ce qui a réellement rapporté. La croissance du chiffre d'affaires masque parfois une érosion silencieuse des marges.",
    solutionBody:
      "Le module Rentabilité de PROGESTI croise facturation, heures terrain et structure de coûts pour afficher des marges par client, par site et par période. Les données viennent du réalisé — passages pointés, factures émises — pas d'estimations manuelles. Vous identifiez les contrats qui tiennent la promesse commerciale et ceux qui grignotent votre marge avec des heures supplémentaires non refacturées. Les tableaux de bord donnent une lecture mensuelle : activité, charge, CA, tendances. Avant une renégociation ou un refus de baisse de prix, vous avez des arguments chiffrés. Le dirigeant passe d'une impression de fin de mois à un pilotage actif. Inclus à 149 € HT par mois, 5 utilisateurs. Essai 7 jours sans carte bancaire.",
    solutionBullets: [
      "Marge par client, site et période",
      "Données alimentées par facturation et pointages",
      "Tableaux de bord mensuels activité et charge",
      "Identification des contrats sous-tarifés",
      "Base chiffrée pour renégociations commerciales",
    ],
    excelComparison: [
      { aspect: "Source", excel: "CA comptable + estimations ops", progesti: "Réalisé terrain + factures émises" },
      { aspect: "Granularité", excel: "Par client au mieux", progesti: "Par client et par site" },
      { aspect: "Actualisation", excel: "Mise à jour mensuelle manuelle", progesti: "Données continues depuis le terrain" },
      { aspect: "Heures réelles", excel: "Non intégrées ou approximatives", progesti: "Pointages intégrés au calcul" },
      { aspect: "Décision", excel: "Intuition et impression", progesti: "Arbitrage chiffré avant renégociation" },
      { aspect: "Contrats perdants", excel: "Découverts tardivement", progesti: "Alerte sur écarts devis vs réalisé" },
    ],
    workflow: [
      { step: "01", text: "Les pointages et factures alimentent les données de marge en continu" },
      { step: "02", text: "Consultez les tableaux de bord par client, site ou période" },
      { step: "03", text: "Identifiez les écarts entre devis initial et réalisé" },
      { step: "04", text: "Arbitrez : renégocier, réorganiser ou arrêter un contrat" },
    ],
    dayInLife: [
      { time: "09:00", text: "Tableau de bord : marge globale du mois en cours vs mois précédent." },
      { time: "10:30", text: "Alerte : un site consomme plus d'heures que prévu sur le contrat." },
      { time: "14:00", text: "Préparation renégociation syndic : CA et heures réelles sur 12 mois." },
      { time: "16:00", text: "Décision : réorganiser la tournée immeuble B pour retrouver la marge." },
      { time: "17:00", text: "Le dirigeant valide les priorités commerciales du trimestre avec des chiffres." },
    ],
    relatedModuleSlugs: ["facturation", "planification", "impayes"],
    relatedIntro:
      "La rentabilité PROGESTI s'appuie sur la facturation au réalisé, le planning et le suivi des impayés pour un pilotage financier cohérent.",
    stats: [
      ["Par site", "Marge détaillée"],
      ["Réalisé", "Données terrain"],
      ["Marges", "Par client & site"],
      ["Charge", "Heures vs budget"],
    ],
    image: "/screen-telegestion.webp",
    imageAlt: "Module Rentabilité PROGESTI — marges et tableaux de bord",
    faq: [
      { q: "La marge est-elle calculée par site ?", a: "Oui. Vision par client et par site rattaché, sur la période de votre choix." },
      { q: "Les données sont-elles en temps réel ?", a: "Alimentées en continu par planning, pointages et facturation — pas de saisie manuelle." },
      { q: "Peut-on comparer devis et réalisé ?", a: "Oui. Écarts entre estimation commerciale et heures réellement consommées." },
      { q: "Module payant en supplément ?", a: "Non. Inclus à 149 € HT par mois, 5 utilisateurs." },
      { q: "Utile pour les renégociations ?", a: "Oui. Historique CA et heures par contrat pour argumenter une revalorisation." },
      { q: "Tableaux de bord personnalisables ?", a: "Vues par période, client et site pour le pilotage mensuel." },
    ],
    useCases: [
      {
        id: "syndics",
        label: "Syndics",
        title: "Marge par immeuble du parc",
        body: "Un contrat syndic regroupe plusieurs immeubles aux profils différents — surface, fréquence, accessibilité. PROGESTI montre la marge par site : l'immeuble avec ascenseur en panne et accès compliqué coûte plus d'heures que prévu. Avant la renégociation annuelle, vous savez quels lots sont sous-tarifés et lesquels tiennent la route. Le syndic reçoit une argumentation factuelle si vous demandez une revalorisation. Les remplacements non refacturés apparaissent dans le calcul. La rentabilité du parc syndic devient lisible, pas noyée dans un chiffre global.",
        mock: "dashboard-stack",
        context: "syndics",
      },
      {
        id: "bureaux",
        label: "Bureaux",
        title: "Contrat corporate : marge réelle",
        body: "Les contrats bureaux multi-sites promettent un CA récurrent confortable, mais les heures supplémentaires événementielles grignotent la marge. PROGESTI croise forfait facturé et heures pointées par site. Vous voyez si le contrat cadre tient ses promesses ou si chaque demande extra vous coûte de l'argent. Avant d'accepter un nouveau site du même groupe, vous consultez la rentabilité des sites existants. Le commercial et le dirigeant partagent la même lecture chiffrée.",
        mock: "dashboard-stack",
        context: "bureaux",
      },
      {
        id: "fin-de-chantier",
        label: "Fin de chantier",
        title: "Rentabilité dossier ponctuel",
        body: "Une remise en état post-travaux doit être rentable en une fois — pas de régularisation sur l'année. PROGESTI calcule le coût main-d'œuvre pointé vs montant facturé sur le dossier chantier. Si le promoteur a demandé des retouches supplémentaires, vous voyez l'impact sur la marge avant de facturer le solde. Les prochains devis similaires s'ajustent avec l'expérience chiffrée du dossier précédent. Fini les chantiers « à perte » découverts après encaissement.",
        mock: "dashboard-stack",
        context: "fin-de-chantier",
      },
    ],
  },
  crm: {
    pillar: "Équipe & pilotage",
    heroLead:
      "Suivez prospects, devis en cours et relances commerciales dans le même outil que votre exploitation — sans CRM parallèle ni prospects oubliés.",
    seoTitle: "CRM entreprise de nettoyage",
    seoDescription:
      "CRM intégré pour entreprises de nettoyage : prospects, devis et relances dans le même outil que l'ops. 149 € HT/mois. Essai 7 jours sans CB.",
    benefits: [
      { title: "Pipeline commercial", text: "Suivez prospects et devis en cours avec statuts et prochaines actions." },
      { title: "Devis → contrat", text: "Enchaînement fluide vers l'exploitation sans ressaisie ni perte d'info." },
      { title: "Moins de prospects perdus", text: "Relances et échéances visibles — fini les opportunités oubliées." },
    ],
    problemBody:
      "Le commercial d'une entreprise de nettoyage jongle entre carnet d'adresses, mails et fichiers Excel. Un prospect demande un devis lundi ; la relance part trois semaines plus tard, ou jamais. Personne ne sait combien d'opportunités sont en cours, ni leur valeur totale. Le dirigeant découvre un appel d'offres raté parce que personne n'a suivi la date limite. Quand le client signe, l'information arrive au bureau d'exploitation par oral — adresse incomplète, fréquences floues. Deux CRM généralistes ont été testés et abandonnés : trop lourds, pas connectés au planning. Les prospects refroidissent pendant que le commercial roule sur le terrain. La croissance commerciale repose sur la mémoire d'une ou deux personnes.",
    solutionBody:
      "Le CRM de PROGESTI est intégré au reste de l'outil — pas un silo à part. Vous créez un prospect, enregistrez les échanges, lancez un devis et suivez son statut jusqu'à la signature. Pipeline visible : combien en cours, quel montant, quelle prochaine action. Les relances sont structurées ; les échéances d'appels d'offres ne passent plus inaperçues. Dès qu'un devis est accepté, la conversion alimente la fiche client, le planning et la facturation. Le commercial et l'exploitation travaillent enfin sur la même base. Simple, adapté aux TPE de nettoyage, sans usine à gaz. Inclus à 149 € HT par mois, 5 utilisateurs. Essai 7 jours sans carte bancaire. Support au 05 82 95 09 19.",
    solutionBullets: [
      "Pipeline prospects avec statuts et montants",
      "Relances et prochaines actions planifiées",
      "Devis intégré depuis la fiche prospect",
      "Conversion client sans ressaisie ops",
      "Historique des échanges par opportunité",
    ],
    excelComparison: [
      { aspect: "Suivi prospects", excel: "Liste Excel non mise à jour", progesti: "Pipeline avec statuts et relances" },
      { aspect: "Relances", excel: "Dépendent de la mémoire du commercial", progesti: "Échéances et actions tracées" },
      { aspect: "Devis", excel: "Word séparé du suivi", progesti: "Devis natif depuis la fiche prospect" },
      { aspect: "Conversion ops", excel: "Mail au bureau d'exploitation", progesti: "Acceptation → client + planning automatiques" },
      { aspect: "Vision dirigeant", excel: "Impossible sans demander au commercial", progesti: "Pipeline et CA prévisionnel visibles" },
      { aspect: "Outils", excel: "CRM + ops + compta séparés", progesti: "Tout dans PROGESTI à 149 € HT/mois" },
    ],
    workflow: [
      { step: "01", text: "Créez le prospect avec contacts, source et potentiel estimé" },
      { step: "02", text: "Enregistrez échanges et planifiez la prochaine relance" },
      { step: "03", text: "Composez et envoyez le devis depuis PROGESTI" },
      { step: "04", text: "Devis accepté → fiche client et planning prêts pour l'ops" },
    ],
    dayInLife: [
      { time: "08:00", text: "Pipeline du jour : cinq relances prévues, deux devis à envoyer." },
      { time: "10:00", text: "Visite prospect syndic : compte-rendu saisi, devis promis pour demain." },
      { time: "14:00", text: "Devis bureaux envoyé — statut « en attente » avec relance J+7." },
      { time: "16:00", text: "Devis accepté : notification exploitation, sites à planifier." },
      { time: "17:00", text: "Le dirigeant consulte le CA prévisionnel du pipeline commercial." },
    ],
    relatedModuleSlugs: ["devis", "clients", "facturation"],
    relatedIntro:
      "Le CRM PROGESTI ouvre le flux commercial et se connecte aux devis, fiches clients et facturation pour zéro rupture entre vente et ops.",
    stats: [
      ["Intégré", "Devis + clients + ops"],
      ["Pipeline", "Relances tracées"],
      ["Prospects", "Suivi commercial"],
      ["Devis", "En 1 clic depuis CRM"],
    ],
    image: "/hero-planning.png",
    imageAlt: "Module CRM PROGESTI — pipeline commercial pour entreprises de nettoyage",
    faq: [
      { q: "Le CRM est-il séparé du reste de PROGESTI ?", a: "Non. CRM, devis, clients, planning et facturation partagent la même base." },
      { q: "Adapté aux TPE de nettoyage ?", a: "Oui. Simple, sans fonctionnalités inutiles — pensé pour les équipes de 5 à 30 personnes." },
      { q: "Peut-on suivir les appels d'offres ?", a: "Oui. Échéances, statuts et relances par opportunité." },
      { q: "Inclus dans le tarif ?", a: "Oui — 149 € HT par mois, 5 utilisateurs, tous modules." },
      { q: "Historique des échanges ?", a: "Oui. Compte-rendus et actions tracés par prospect." },
      { q: "Conversion vers client automatique ?", a: "Devis accepté → fiche client et données ops sans ressaisie." },
    ],
    useCases: [
      {
        id: "syndics",
        label: "Syndics",
        title: "Appels d'offres et renouvellements",
        body: "Les marchés syndic tournent autour de cycles d'appels d'offres et de renouvellements triennaux. PROGESTI CRM trace chaque opportunité : date limite, contacts régie, montant estimé, statut. La relance part avant la clôture, pas après. Les renouvellements des clients existants apparaissent dans le pipeline avec l'historique contractuel. Le commercial prépare le devis depuis la fiche client existante — CA et heures des années passées à portée. Le dirigeant voit le pipe syndic sans interroger l'équipe commerciale chaque lundi.",
        mock: "flux-pipeline",
        context: "syndics",
      },
      {
        id: "bureaux",
        label: "Bureaux",
        title: "Prospection multi-sites corporate",
        body: "Un prospect bureaux peut ouvrir trois sites en une fois ou étendre progressivement. Le CRM PROGESTI suit l'opportunité globale et les sites individuels. Premier devis pour le siège ; extensions planifiées comme futures actions commerciales. Le facility manager change ? La fiche prospect est à jour pour la relance. Conversion site par site sans perdre la vision groupe. Le commercial sait quels corporates sont chauds, lesquels refroidissent, lesquels attendent un devis révisé.",
        mock: "flux-pipeline",
        context: "bureaux",
      },
      {
        id: "fin-de-chantier",
        label: "Fin de chantier",
        title: "Prospects ponctuels et récurrence",
        body: "Un chantier de remise en état peut devenir un contrat d'entretien si le CRM suit bien la relation. PROGESTI enregistre le prospect promoteur, le devis chantier, puis planifie une relance post-livraison pour proposer un contrat récurrent. Le commercial ne perd pas le contact une fois la facture finale payée. Les promoteurs récurrents apparaissent dans le pipeline avec l'historique des chantiers passés. La conversion vers contrat d'entretien se fait sans recréer la fiche client.",
        mock: "clients",
        context: "fin-de-chantier",
      },
    ],
  },
};

export function getModuleContent(slug: string): ModuleContent | undefined {
  return moduleContent[slug as ModuleSlug];
}
