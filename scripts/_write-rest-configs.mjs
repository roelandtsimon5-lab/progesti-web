/**
 * Génère scripts/securite-v2-rest-configs.mjs (SEC-03 … SEC-30)
 * node scripts/_write-rest-configs.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mk, demo } from "./securite-v2-factory.mjs";
import { RICH_BY_SLUG } from "./securite-v2-rest-rich.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @param {ReturnType<typeof buildPage>} cfg @param {(typeof RICH_BY_SLUG)[string]} rich */
function applyRich(cfg, rich) {
  if (!rich) return cfg;
  const scalarKeys = [
    "empathyH2",
    "empathyBody",
    "showcaseTitle",
    "showcaseSub",
    "productStrip",
    "showcaseBadgeLeft",
    "proofH2",
    "proofQuote",
    "vsTitle",
  ];
  for (const k of scalarKeys) {
    if (rich[k] !== undefined) cfg[k] = rich[k];
  }
  if (rich.persona) cfg.persona = { ...cfg.persona, ...rich.persona };
  if (rich.proofItems) cfg.proofItems = rich.proofItems;
  if (rich.bodySections) cfg.bodySections = rich.bodySections;
  if (rich.faq) cfg.faq = rich.faq;
  if (rich.demo) cfg.demo = { ...cfg.demo, ...rich.demo };
  if (rich.outline) cfg.outline = rich.outline;
  if (rich.seoDesc) {
    cfg.seoDesc = rich.seoDesc;
    cfg.metaDesc = rich.seoDesc;
  }
  if (rich.seoTitle) {
    cfg.seoTitle = rich.seoTitle;
    cfg.metaTitle = rich.seoTitle;
  }
  if (rich.ctaPrimaryLabel) cfg.ctaPrimaryLabel = rich.ctaPrimaryLabel;
  if (rich.ctaSecondaryLabel) cfg.ctaSecondaryLabel = rich.ctaSecondaryLabel;
  cfg.outline = [
    `H2 ${cfg.empathyH2}`,
    `H2 Démo — ${cfg.demo.h2}`,
    ...cfg.bodySections.map((b) => `H2 ${b.h2}`),
    "H2 FAQ + CTA essai/tarifs",
  ];
  return cfg;
}

/** @type {Record<string, { left: string; right: string; status?: string }[]>} */
const UI = {
  gardiennage: [
    { left: "Poste accueil 6h–14h", right: "Titulaire absent", status: "alert" },
    { left: "Backup R.", right: "Brief consignes OK", status: "ok" },
    { left: "Pointage", right: "05h55", status: "ok" },
    { left: "Syndic", right: "Historique exportable", status: "ok" },
  ],
  "rondes-surveillance": [
    { left: "Point Q1 entrepôt", right: "22h14 scanné", status: "ok" },
    { left: "Point Q2 quai", right: "22h41 scanné", status: "ok" },
    { left: "Point Q3 porte Nord", right: "23h05 — retard 8 min", status: "alert" },
    { left: "Tournée nuit", right: "12/12 points OK", status: "ok" },
  ],
  "agents-securite": [
    { left: "Agent Dupont", right: "SSIAP 1 · dispo nuit", status: "ok" },
    { left: "Agent Martin", right: "En vacation site B", status: "ok" },
    { left: "Absence imprévue", right: "Backup proposé", status: "alert" },
    { left: "Affectation", right: "Site A 14h–22h", status: "ok" },
  ],
  "surete-sites": [
    { left: "Site Gamma — consignes", right: "Màj hier 16h", status: "ok" },
    { left: "Vacation portail", right: "Couverture OK", status: "ok" },
    { left: "Incident accès", right: "Noté main courante", status: "alert" },
    { left: "Donneur d'ordre", right: "Synthèse hebdo prête", status: "ok" },
  ],
  "sites-industriels": [
    { left: "Site usine — 3×8", right: "Postes couverts", status: "ok" },
    { left: "Ronde zone ATEX", right: "Passages OK", status: "ok" },
    { left: "Audit sécurité client", right: "Historique 30 j", status: "ok" },
    { left: "Vacation nuit", right: "Pointage 21h58", status: "ok" },
  ],
  "centres-commerciaux": [
    { left: "Centre Atlas — samedi", right: "+4 agents soldes", status: "ok" },
    { left: "Poste parking", right: "Couvert 8h–20h", status: "ok" },
    { left: "Pic 18h", right: "Renfort activé", status: "alert" },
    { left: "Preuve week-end", right: "Pointages consolidés", status: "ok" },
  ],
  evenementiel: [
    { left: "Event « Summer Fest »", right: "48 agents planifiés", status: "ok" },
    { left: "Poste entrée A", right: "14h–23h staffé", status: "ok" },
    { left: "Dépassement horaire", right: "+45 min tracés", status: "alert" },
    { left: "Facture event", right: "Brouillon depuis réalisé", status: "ok" },
  ],
  coproprietes: [
    { left: "Résidence Parc", right: "Vacation 7j/7", status: "ok" },
    { left: "Présence gardien", right: "Pointage quotidien", status: "ok" },
    { left: "Conseil syndical", right: "Rapport mensuel", status: "ok" },
    { left: "Multi-résidences", right: "3 sites actifs", status: "ok" },
  ],
  "planning-agents": [
    { left: "Semaine S12", right: "2 vacations à risque", status: "alert" },
    { left: "Backup pool", right: "5 agents dispo", status: "ok" },
    { left: "Remplacement", right: "Affecté en 12 min", status: "ok" },
    { left: "Publication", right: "Agents notifiés", status: "ok" },
  ],
  "pointage-vacations": [
    { left: "Vacation prévue", right: "22h–06h", status: "ok" },
    { left: "Arrivée réelle", right: "21h58", status: "ok" },
    { left: "Départ réel", right: "06h04", status: "ok" },
    { left: "Écart paie/client", right: "0h04 à valider", status: "alert" },
  ],
  "preuves-intervention": [
    { left: "Demande client", right: "Rapport 12–18 mars", status: "alert" },
    { left: "Pointages", right: "142 lignes", status: "ok" },
    { left: "Main courante", right: "3 événements", status: "ok" },
    { left: "Envoi", right: "PDF + accès lecture", status: "ok" },
  ],
  "multi-sites": [
    { left: "Portefeuille", right: "47 sites actifs", status: "ok" },
    { left: "Site #12", right: "Consignes obsolètes", status: "alert" },
    { left: "Direction", right: "Vue consolidée", status: "ok" },
    { left: "Nouveau contrat", right: "Onboarding site 48h", status: "ok" },
  ],
  "facturation-gardiennage": [
    { left: "Vacations pointées", right: "312 h mars", status: "ok" },
    { left: "Lignes facture", right: "Auto depuis réalisé", status: "ok" },
    { left: "Écart devis", right: "-4 h détectées", status: "alert" },
    { left: "Impayé", right: "Relance planifiée", status: "ok" },
  ],
  "remplacer-excel": [
    { left: "Planning Excel", right: "Version obsolète", status: "alert" },
    { left: "Source PROGESTI", right: "Bureau = terrain", status: "ok" },
    { left: "WhatsApp", right: "Remplacé par affectations", status: "ok" },
    { left: "Fin de mois", right: "Facture sans ressaisie", status: "ok" },
  ],
  faq: [
    { left: "Question prix", right: "29,99 € HT/mois", status: "ok" },
    { left: "Question essai", right: "15 j sans CB", status: "ok" },
    { left: "Question mobile", right: "Android / iOS", status: "ok" },
    { left: "Question verticale", right: "Sécurité ≠ propreté", status: "ok" },
  ],
  "guide-organiser-vacations": [
    { left: "Étape 1 posts", right: "Cartographie OK", status: "ok" },
    { left: "Étape 2 besoins", right: "Créneaux figés", status: "ok" },
    { left: "Étape 3 staff", right: "Backups listés", status: "ok" },
    { left: "Étape 4 factu", right: "Lien pointage", status: "ok" },
  ],
  "toulouse-occitanie": [
    { left: "Support", right: "Équipe Tournefeuille", status: "ok" },
    { left: "Société locale", right: "Essai sur sites 31", status: "ok" },
    { left: "Démo", right: "Créneau cette semaine", status: "ok" },
    { left: "Déploiement", right: "France entière OK", status: "ok" },
  ],
  "astreinte-nuit": [
    { left: "Vacation 22h–06h", right: "Titulaire confirmé", status: "ok" },
    { left: "Ronde 02h", right: "Point passé", status: "ok" },
    { left: "Incident 03h", right: "Main courante", status: "alert" },
    { left: "Relève 06h", right: "Pointage OK", status: "ok" },
  ],
  "pme-entreprises": [
    { left: "Siège PME client", right: "Accès 7h–19h", status: "ok" },
    { left: "Vacation accueil", right: "Couverture OK", status: "ok" },
    { left: "Visite audit", right: "Preuves prêtes", status: "ok" },
    { left: "Facture", right: "Heures pointées", status: "ok" },
  ],
  "grands-comptes": [
    { left: "Contrat cadre", right: "84 sites", status: "ok" },
    { left: "KPI couverture", right: "98,2 %", status: "ok" },
    { left: "Audit DO", right: "Export 90 j", status: "ok" },
    { left: "Écart SLA", right: "1 vacation à analyser", status: "alert" },
  ],
  "contrats-cadres": [
    { left: "Volume contractuel", right: "1200 h/mois", status: "ok" },
    { left: "Réalisé pointé", right: "1188 h", status: "alert" },
    { left: "Preuve renouvellement", right: "Historique joint", status: "ok" },
    { left: "Facturation", right: "Alignée cadre", status: "ok" },
  ],
  "petites-societes": [
    { left: "Effectif", right: "8 agents", status: "ok" },
    { left: "Prise en main", right: "< 1 semaine", status: "ok" },
    { left: "Prix", right: "29,99 € HT/mois", status: "ok" },
    { left: "Modules", right: "Tout inclus", status: "ok" },
  ],
  "controle-acces-consignes": [
    { left: "Code portail B", right: "Fiche site à jour", status: "ok" },
    { left: "Agent vacation", right: "Consignes lues", status: "ok" },
    { left: "Mauvais code saisi", right: "Incident noté", status: "alert" },
    { left: "Pas de hardware", right: "Org. infos seulement", status: "ok" },
  ],
  "main-courante": [
    { left: "Incident 21h40", right: "Saisie agent mobile", status: "ok" },
    { left: "Type", right: "Intrusion tentée", status: "alert" },
    { left: "Exploitation", right: "Notifiée", status: "ok" },
    { left: "Client", right: "Compte-rendu horodaté", status: "ok" },
  ],
  ssiap: [
    { left: "Poste SSIAP 1", right: "Vacation couverte", status: "ok" },
    { left: "Organisation", right: "Planning + consignes", status: "ok" },
    { left: "Formation", right: "Hors scope PROGESTI", status: "ok" },
    { left: "Preuve présence", right: "Pointage poste", status: "ok" },
  ],
  "sites-sensibles": [
    { left: "Site à enjeu", right: "Procédures renforcées", status: "ok" },
    { left: "Consignes", right: "Version validée", status: "ok" },
    { left: "Traçabilité", right: "Historique complet", status: "ok" },
    { left: "Pas de promesse défense", right: "Ops gardiennage only", status: "ok" },
  ],
  "btp-chantiers": [
    { left: "Chantier Lyon Est", right: "Portail ouvert 6h", status: "ok" },
    { left: "Contrôle accès", right: "Badges visiteurs", status: "ok" },
    { left: "Vacation week-end", right: "Renfort BTP", status: "alert" },
    { left: "Preuve", right: "Pointages chantier", status: "ok" },
  ],
  "pc-securite": [
    { left: "PC site Delta", right: "2 agents + superviseur", status: "ok" },
    { left: "Main courante", right: "Flux temps réel", status: "ok" },
    { left: "Consignes", right: "Procédures à jour", status: "ok" },
    { left: "Pas télésurveillance", right: "Exploitation humaine", status: "ok" },
  ],
  "vacation-non-pourvue": [
    { left: "Entrepôt Nord 22h–06h", right: "Aucun agent confirmé", status: "alert" },
    { left: "Alerte J-0 17h40", right: "Trou visible exploitation", status: "alert" },
    { left: "Backup L. affecté", right: "Consignes lues 17h52", status: "ok" },
    { left: "Client", right: "Pas d'appel « personne »", status: "ok" },
  ],
  "remplacement-urgence": [
    { left: "Titulaire M.", right: "Désistement 21h10", status: "alert" },
    { left: "Pool backup", right: "3 agents dispo nuit", status: "ok" },
    { left: "Affectation R.", right: "Brief mobile 21h18", status: "ok" },
    { left: "Pointage entrée", right: "21h54 · poste tenu", status: "ok" },
  ],
};

const ROWS = [
  ["SEC-03", "gardiennage", "service", "logiciel société de gardiennage", "poste fixe"],
  ["SEC-04", "rondes-surveillance", "service", "logiciel rondes sécurité", "rondes entrepôt"],
  ["SEC-05", "agents-securite", "service", "logiciel gestion agents de sécurité", "effectif agents"],
  ["SEC-06", "surete-sites", "service", "logiciel sûreté des sites", "sûreté multi-sites"],
  ["SEC-07", "sites-industriels", "audience", "gardiennage site industriel logiciel", "site industriel"],
  ["SEC-08", "centres-commerciaux", "audience", "sécurité centre commercial logiciel", "retail / CC"],
  ["SEC-09", "evenementiel", "audience", "logiciel sécurité événementielle", "événementiel"],
  ["SEC-10", "coproprietes", "audience", "gardiennage copropriété logiciel", "copropriété"],
  ["SEC-11", "planning-agents", "process", "planning agents de sécurité", "planning vacations"],
  ["SEC-12", "pointage-vacations", "process", "pointage agents sécurité", "pointage présence"],
  ["SEC-13", "preuves-intervention", "probleme", "preuve intervention sécurité", "preuves audit"],
  ["SEC-14", "multi-sites", "probleme", "gestion multi-sites sécurité", "multi-sites"],
  ["SEC-15", "facturation-gardiennage", "process", "facturation gardiennage", "facturation réalisé"],
  ["SEC-16", "remplacer-excel", "probleme", "remplacer Excel gardiennage", "sortie Excel"],
  ["SEC-17", "faq", "faq", "FAQ logiciel gardiennage", "FAQ décision"],
  ["SEC-18", "guide-organiser-vacations", "guide", "comment organiser planning gardiennage", "guide méthode"],
  ["SEC-19", "toulouse-occitanie", "local", "logiciel gardiennage Toulouse", "local Occitanie"],
  ["SEC-20", "astreinte-nuit", "service", "planning agents sécurité nuit", "nuits / astreinte"],
  ["SEC-21", "pme-entreprises", "audience", "sécurité entreprises PME logiciel prestataire", "PME clientes"],
  ["SEC-22", "grands-comptes", "audience", "logiciel sécurité grands comptes", "grands comptes"],
  ["SEC-23", "contrats-cadres", "process", "contrat cadre gardiennage suivi", "contrats cadres"],
  ["SEC-24", "petites-societes", "audience", "logiciel gardiennage TPE", "TPE sécurité"],
  ["SEC-25", "controle-acces-consignes", "process", "consignes accès agents sécurité", "consignes accès"],
  ["SEC-26", "main-courante", "process", "main courante sécurité logiciel", "main courante"],
  ["SEC-27", "ssiap", "service", "organisation postes SSIAP logiciel", "orga SSIAP"],
  ["SEC-28", "sites-sensibles", "audience", "gardiennage sites sensibles", "sites sensibles"],
  ["SEC-29", "btp-chantiers", "audience", "sécurité chantier BTP gardiennage", "chantiers BTP"],
  ["SEC-30", "pc-securite", "process", "poste central sécurité exploitation", "PC sécurité"],
  ["SEC-31", "vacation-non-pourvue", "probleme", "vacation non pourvue gardiennage", "trou de vacation"],
  ["SEC-32", "remplacement-urgence", "process", "remplacement agent sécurité urgence", "remplacement urgence"],
];

const HERO = {
  gardiennage: ["Logiciel gardiennage", "tenir les postes sans trou de vacation", "Posts fixes, équipes, remplacements : un planning qui ne laisse pas un site à découvert."],
  "rondes-surveillance": ["Rondes & surveillance", "des passages tracés, pas « on a fait le tour »", "Planifiez les tournées, validez les passages, répondez aux audits client avec un historique."],
  "agents-securite": ["Gestion agents de sécurité", "la bonne personne au bon poste", "Compétences, disponibilités, remplacements : pilotez l'effectif sans tableur parallèle."],
  "surete-sites": ["Sûreté des sites", "consignes, vacations, preuves — site par site", "Centralisez fiches sites, équipes et historique pour une sûreté opérationnelle."],
  "sites-industriels": ["Sites industriels", "des vacations qui tiennent les contraintes terrain", "Accès stricts, horaires atypiques, audits : organisez et documentez."],
  "centres-commerciaux": ["Centres commerciaux & retail", "tenir les postes aux heures de pointe", "Week-ends, soldes, soirées : densifiez le planning et gardez la preuve des vacations."],
  evenementiel: ["Sécurité événementielle", "monter une équipe vite, facturer proprement", "Concerts, salons, manifestations : planifiez les postes, suivez le réalisé, facturez sans chaos."],
  coproprietes: ["Sécurité en copropriété", "présence tenue, syndic informé", "Résidences et immeubles : organisez les vacations et documentez pour le syndic."],
  "planning-agents": ["Planning agents sécurité", "chaque vacation couverte, chaque jour", "Posts, horaires, backups : un planning qui absorbe les imprévus."],
  "pointage-vacations": ["Pointage vacations", "savoir qui est réellement en poste", "Les agents pointent ; le bureau voit. Fini les heures contestées en fin de mois."],
  "preuves-intervention": ["Preuves & audits", "quand le client demande le rapport, vous l'avez", "Conservez l'historique des vacations et passages pour répondre vite et factuellement."],
  "multi-sites": ["Multi-sites sécurité", "quand le portefeuille s'étend, le tableur lâche", "Sites, consignes, équipes : une base unique pour grandir sans perdre le contrôle."],
  "facturation-gardiennage": ["Facturation gardiennage", "facturez les heures faites, pas les heures estimées", "Reliez vacations pointées et factures. Réduisez les écarts et les litiges."],
  "remplacer-excel": ["Sortir d'Excel en sécurité", "un système pour vacations et preuves", "Fichiers qui divergent, groupes WhatsApp ingérables : basculez vers un outil métier."],
  faq: ["FAQ sécurité", "réponses courtes, utiles", "Pour décider si PROGESTI matche votre société de sécurité."],
  "guide-organiser-vacations": ["Guide pratique", "organiser les vacations sans trou", "Cartographier posts, figer besoins, staffer, pointer, facturer."],
  "toulouse-occitanie": ["Sécurité en Occitanie", "outil FR, équipe près de Toulouse", "Gardiennage en région : produit terrain + support joignable."],
  "astreinte-nuit": ["Nuits & astreintes", "des postes tenus quand tout le monde dort", "Planifiez les vacations de nuit, sécurisez les backups, gardez les preuves."],
  "pme-entreprises": ["Sécurité pour PME", "des sites pros, des vacations carrées", "Sièges et locaux PME : respectez accès et horaires, prouvez la présence."],
  "grands-comptes": ["Grands comptes sécurité", "tenir le cadre contractuel sur tous les sites", "Volume, exigences, audits : structurez vacations et preuves à l'échelle."],
  "contrats-cadres": ["Contrats cadres", "l'exécution fait le renouvellement", "Planifiez les vacations dues, prouvez-les, facturez juste — tout le long du contrat."],
  "petites-societes": ["Petites sociétés de sécurité", "structurer sans se noyer", "Planning, pointage, factures — l'essentiel pour professionnaliser une petite équipe."],
  "controle-acces-consignes": ["Consignes & accès", "l'info au bon agent, au bon moment", "Codes, contacts, consignes : fiche site visible mobile — pas un carnet perdu."],
  "main-courante": ["Main courante", "chaque incident tracé, pas perdu dans un groupe WhatsApp", "Registre horodaté lié aux vacations et sites — exploitation et client informés."],
  ssiap: ["Organisation postes SSIAP", "planifier présence et consignes — pas remplacer la formation", "Vacations SSIAP, backups, preuves de présence. Info organisationnelle, pas conseil réglementaire."],
  "sites-sensibles": ["Sites à enjeux opérationnels", "procédures tenues, preuves sans promesses invraisemblables", "Sites exigeants côté consignes et traçabilité — sans discours défense / militaire."],
  "btp-chantiers": ["Gardiennage chantiers BTP", "portails, horaires de travaux, vacations adaptées", "Chantiers : accès fluctuants, renforts week-end, preuves pour MOA."],
  "pc-securite": ["Poste central (PC sécurité)", "superviser l'exploitation, pas remplacer la vidéo", "Coordination agents, main courante, consignes — exploitation humaine du site."],
  "vacation-non-pourvue": ["Vacation non pourvue", "voir le trou avant l'appel client", "Alertes de couverture, backups visibles, historique de qui devait être là — pour ne plus découvrir le poste vide au téléphone."],
  "remplacement-urgence": ["Remplacement d'urgence", "couvrir le poste en minutes, pas en SMS", "Absence de dernière minute : affecter un backup briefé, tracer le changement, garder la preuve pour le donneur d'ordre."],
};

/** Meta descriptions uniques (~150–155 car.) — pas de troncature « … » générique. */
const SEO_DESC = {
  gardiennage:
    "Logiciel société de gardiennage : postes fixes, backups et pointages. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "rondes-surveillance":
    "Logiciel rondes sécurité : passages horodatés, alertes, historique audit. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "agents-securite":
    "Gestion agents de sécurité : compétences, dispos, remplacements. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "surete-sites":
    "Sûreté des sites : fiches, consignes, vacations et preuves. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "sites-industriels":
    "Gardiennage site industriel : 3×8, accès, audits donneur d'ordre. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "centres-commerciaux":
    "Sécurité centre commercial : multi-postes, pics, preuves week-end. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  evenementiel:
    "Logiciel sécurité événementielle : staffing, pointage, facture réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  coproprietes:
    "Gardiennage copropriété : vacations tenues, reporting syndic. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "planning-agents":
    "Planning agents de sécurité : vacations, backups, alertes trous. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "pointage-vacations":
    "Pointage vacations sécurité : présence réelle, fin de mois saine. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "preuves-intervention":
    "Preuves intervention sécurité : historiques, audits, exports client. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "multi-sites":
    "Gestion multi-sites sécurité : portefeuille, consignes, couverture. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "facturation-gardiennage":
    "Facturation gardiennage : heures pointées → facture du réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "remplacer-excel":
    "Remplacer Excel en gardiennage : une source bureau ↔ terrain. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  faq: "FAQ logiciel gardiennage : prix, essai, mobile, CNAPS. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "guide-organiser-vacations":
    "Guide : organiser vacations gardiennage — posts, backups, factu. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "toulouse-occitanie":
    "Logiciel gardiennage Toulouse / Occitanie : support FR local. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "astreinte-nuit":
    "Planning agents sécurité nuit : vacations, rondes, preuves. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "pme-entreprises":
    "Sécurité entreprises PME : accès, présence, audit client. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "grands-comptes":
    "Logiciel sécurité grands comptes : KPI, exports, multi-sites. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "contrats-cadres":
    "Contrat cadre gardiennage : exécution, preuves, renouvellement. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "petites-societes":
    "Logiciel gardiennage TPE : planning, pointage, facture simple. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "controle-acces-consignes":
    "Consignes accès agents : fiche site mobile à jour. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "main-courante":
    "Main courante sécurité logiciel : incidents horodatés, exports. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  ssiap:
    "Organisation postes SSIAP : vacations, backups, preuves (pas formation). Essai 15 j sans CB.",
  "sites-sensibles":
    "Gardiennage sites sensibles : consignes strictes, traçabilité ops. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "btp-chantiers":
    "Sécurité chantier BTP : portails, renforts, preuves MOA. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "pc-securite":
    "PC sécurité exploitation : coordination agents, main courante. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "vacation-non-pourvue":
    "Vacation non pourvue : alertes couverture avant l'appel client. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
  "remplacement-urgence":
    "Remplacement agent sécurité urgence : backup briefé en minutes. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
};

function gridFor(slug) {
  const pilier = { title: "Logiciel gardiennage", text: "Pilier — flux vacation → facture.", href: "/logiciel-securite-gardiennage" };
  const sisters = {
    gardiennage: [
      pilier,
      { title: "Rondes", text: "Passages tracés.", href: "/securite/rondes-surveillance" },
      { title: "Planning", text: "Staffer les postes.", href: "/securite/planning-agents" },
    ],
    "rondes-surveillance": [
      pilier,
      { title: "Gardiennage", text: "Poste fixe.", href: "/securite/gardiennage" },
      { title: "Preuves", text: "Audits client.", href: "/securite/preuves-intervention" },
    ],
    "main-courante": [
      pilier,
      { title: "Preuves", text: "Historiques & audits.", href: "/securite/preuves-intervention" },
      { title: "PC sécurité", text: "Supervision exploitation.", href: "/securite/pc-securite" },
    ],
    ssiap: [
      pilier,
      { title: "Planning", text: "Vacations postes.", href: "/securite/planning-agents" },
      { title: "Pointage", text: "Preuve présence.", href: "/securite/pointage-vacations" },
    ],
    "pc-securite": [
      pilier,
      { title: "Main courante", text: "Registre incidents.", href: "/securite/main-courante" },
      { title: "Consignes", text: "Fiches sites.", href: "/securite/controle-acces-consignes" },
    ],
    "vacation-non-pourvue": [
      pilier,
      { title: "Planning agents", text: "Anticiper les trous.", href: "/securite/planning-agents" },
      { title: "Remplacement urgence", text: "Couvrir en minutes.", href: "/securite/remplacement-urgence" },
    ],
    "remplacement-urgence": [
      pilier,
      { title: "Vacation non pourvue", text: "Voir le trou avant.", href: "/securite/vacation-non-pourvue" },
      { title: "Agents", text: "Pool & compétences.", href: "/securite/agents-securite" },
    ],
  };
  if (sisters[slug]) return sisters[slug];
  return [
    pilier,
    { title: "Planning agents", text: "Couverture vacations.", href: "/securite/planning-agents" },
    { title: "Pointage", text: "Présence réelle.", href: "/securite/pointage-vacations" },
  ];
}

function buildPage([id, slug, type, primaryKw, angle]) {
  const [h1Lead, h1, sub] = HERO[slug];
  const uiRows = UI[slug];
  const seoTitle =
    slug === "faq"
      ? "FAQ logiciel gardiennage"
      : slug === "guide-organiser-vacations"
        ? "Guide : organiser les vacations de gardiennage"
        : slug === "toulouse-occitanie"
          ? "Logiciel gardiennage Toulouse / Occitanie"
          : slug === "vacation-non-pourvue"
            ? "Vacation non pourvue — anticiper les trous"
            : slug === "remplacement-urgence"
              ? "Remplacement urgence agent sécurité"
              : h1Lead + " — PROGESTI";
  const seoDesc =
    SEO_DESC[slug] ??
    `${sub} Essai 15 j sans CB. Dès 29,99 € HT/mois.`.slice(0, 155);

  const persona = {
    role: `Interlocuteur sécurité privée — angle ${angle}`,
    pains: [
      `douleur liée à ${angle} (trous, preuves, litiges)`,
      "fin de mois heures contestées",
      "consignes éparpillées SMS / papier",
      "donneur d'ordre qui demande un rapport immédiat",
    ],
    jargon: ["vacation", "poste", "main courante", "donneur d'ordre", "backup", "réalisé"],
    objections: ["Excel suffit", "Trop cher pour nous", "Les agents ne l'utiliseront pas"],
  };

  const scenario = `Scénario ${angle} : un imprévu un soir (absence, incident, audit) — l'exploitation doit couvrir le poste, tracer l'activité et répondre au client le lendemain sans reconstruire le planning.`;

  return mk({
    id,
    slug,
    path: `/securite/${slug}`,
    type,
    primaryKw,
    h1Lead,
    h1,
    sub,
    seoTitle,
    seoDesc,
    empathyH2: `Le métier « ${angle} » ne pardonne pas le flou`,
    empathyBody: `Sur ${angle}, un trou de vacation ou une preuve manquante se voit tout de suite. Centralisez planning, consignes et historique — pas de promesse réglementaire, de l'organisation solide.`,
    showcaseTitle: `Pilotage ${angle}`,
    showcaseSub: "Vacations, statuts, preuves — vue exploitation.",
    productStrip: `Sécurité · ${angle} · preuves`,
    proofH2: `Preuves et process pour ${angle}`,
    proofQuote: "Le client veut des faits horodatés — pas une excuse du lundi matin.",
    persona,
    scenario,
    seoIntent: `Intent SEO ciblé « ${primaryKw} » — page ${type}, distincte du pilier et des sœurs proches.`,
    antiCanni: `Ne pas voler le H1 du pilier / hub. Différencier vs pages process voisines (planning vs pointage vs preuves).`,
    demo: demo(
      slug,
      `${angle} — scénario exploitation`,
      `Illustration PROGESTI pour ${primaryKw}.`,
      scenario,
      [
        { label: "Planifier", detail: "Vacations et consignes site" },
        { label: "Exécuter", detail: "Agents en poste / rondes" },
        { label: "Tracer", detail: "Pointages & main courante" },
        { label: "Facturer", detail: "Réalisé → facture" },
      ],
      `Vue ${angle}`,
      uiRows,
      `Takeaway ${angle} : une chaîne bureau ↔ terrain, tarif dès 29,99 € HT/mois.`
    ),
    bodySections: [
      {
        h2: `Organiser ${angle} au quotidien`,
        body: `Posts, créneaux, backups : règles claires dans PROGESTI. L'objectif est l'exploitation (couverture + preuves), pas un discours marketing générique.`,
        bullets: ["Fiche site et consignes", "Historique exploitable", "Essai 15 jours sans CB"],
      },
      {
        h2: "Ce que PROGESTI ne remplace pas",
        body: "Pas de conseil juridique, pas de certification CNAPS vendue avec le logiciel, pas de formation SSIAP — uniquement de l'organisation et de la traçabilité opérationnelle.",
      },
    ],
    faq: [
      { q: "Adapté aux sociétés de gardiennage ?", a: "Oui — verticale /securite dédiée." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois tout inclus." },
      { q: "Essai ?", a: "15 jours sans carte bancaire." },
      { q: "Mobile terrain ?", a: "Pointage et consignes sur app agents." },
      { q: slug === "ssiap" ? "PROGESTI forme au SSIAP ?" : "Séparé propreté / EV ?", a: slug === "ssiap" ? "Non — organisation des postes et preuves seulement." : "Oui — verticales distinctes." },
      ...(slug === "controle-acces-consignes"
        ? [{ q: "Contrôle d'accès physique ?", a: "Non — organisation des consignes et infos d'accès pour vos agents." }]
        : slug === "pc-securite"
          ? [{ q: "Télésurveillance vidéo ?", a: "Non — cette page = exploitation / PC humain, pas VMS." }]
          : slug === "sites-sensibles"
            ? [{ q: "Site défense / militaire ?", a: "Non — gardiennage privé et enjeux ops classiques, sans promesses sectorielles." }]
            : []),
    ],
    gridItems: gridFor(slug),
    vsTitle: `Excel & WhatsApp vs PROGESTI — ${angle}`,
  });
}

/** @type {Record<string, string>} */
const SCENARIOS = {
  gardiennage:
    "Lundi 7h12 : le syndic appelle — personne à l'accueil. Vacation 6h–14h non remplacée. Il faut prouver qui était prévu et activer le backup avec consignes à jour.",
  "rondes-surveillance":
    "Audit client sur entrepôt frigorifique : « prouvez la ronde 22h–6h du 12 mars ». Sans point de contrôle horodaté, la prestation est contestée.",
  "agents-securite":
    "Haute saison : 6 absences la même semaine. L'exploition doit croiser compétences (SSIAP / APS), disponibilités nuit et sites éloignés sans tableur parallèle.",
  "surete-sites":
    "Nouveau site industriel : consignes accès changent chaque lundi. L'agent de nuit arrive sans la bonne version — incident évitable avec fiche site centralisée.",
  "sites-industriels":
    "Usine 3×8 : le donneur d'ordre demande qui tenait le portail sud pendant l'arrêt technique. Il faut l'historique vacations + pointages, pas un SMS.",
  "centres-commerciaux":
    "Samedi soldes : +4 postes en 2 h. Le directeur centre veut la preuve des renforts dimanche soir pour valider la facture.",
  evenementiel:
    "Concert 18 000 places : montage équipe en 4 h, dépassements horaires sur poste barrières. Il faut staffer, pointer et facturer le réalisé sans chaos.",
  coproprietes:
    "AG copro : « qui gardait la résidence vendredi soir ? » Le syndic exige un historique clair de présence, pas la parole du gardien.",
  "planning-agents":
    "Jeudi 11h : deux vacations à risque samedi nuit, pool backup épuisé. Anticiper dans le planning avant l'appel panique du client.",
  "pointage-vacations":
    "Fin de mois : le client conteste 6 h sur un poste. Sans pointage début/fin, la marge part en litige.",
  "preuves-intervention":
    "Email client 17h02 : « envoyez toutes les preuves semaine 11 ». Il faut sortir pointages + main courante sans fouiller WhatsApp.",
  "multi-sites":
    "Contrat gagné : +12 sites en 30 jours. Excel casse — consignes éparpillées, vacations oubliées sur site #9.",
  "facturation-gardiennage":
    "Clôture mensuelle : 280 h pointées, facture basée sur devis estimatif — 14 h non facturées découvertes après envoi.",
  "remplacer-excel":
    "Deux versions du planning circulent le dimanche. Personne ne sait qui couvre le poste nuit — source de vérité manquante.",
  faq: "Avant l'essai, le dirigeant veut prix, mobile, séparation propreté, et si les agents pointeront vraiment — réponses courtes sans blabla.",
  "guide-organiser-vacations":
    "Nouvelle société : cartographier posts, figer créneaux, lister backups, puis seulement choisir l'outil — méthode avant logiciel.",
  "toulouse-occitanie":
    "Société du 31 : veut parler à un humain, essayer sur un vrai site local, sans hotline offshore.",
  "astreinte-nuit":
    "03h : ronde manquée signalée par le client. Vérifier titulaire, passages et main courante en temps réel.",
  "pme-entreprises":
    "Siège PME : accès 7h–19h strict. Une absence non couverte = client pro qui juge immédiatement la fiabilité.",
  "grands-comptes":
    "Comité trimestriel : 84 sites, KPI couverture et export 90 jours exigés sous 24 h.",
  "contrats-cadres":
    "Renouvellement contrat cadre : prouver exécution volumes + preuves sur 12 mois — sinon marge perdue.",
  "petites-societes":
    "8 agents, pas d'assistante : il faut planning + facture simple, tout inclus, sans usine à gaz.",
  "controle-acces-consignes":
    "Agent remplaçant sur site : mauvais code portail — 20 min perdus. Consignes doivent être sur mobile, à jour.",
  "main-courante":
    "Tentative effraction 21h40 : saisie mobile, notification exploitation, compte-rendu client horodaté — pas 40 messages WhatsApp.",
  ssiap:
    "Organisation postes SSIAP 1 sur site tertiaire : vacations, backups, preuves présence — sans prétendre former ou certifier.",
  "sites-sensibles":
    "Site à procédures renforcées (sans discours défense) : traçabilité consignes + activité pour le donneur d'ordre exigeant.",
  "btp-chantiers":
    "Chantier : portail ouvert 6h, visiteurs badges, renfort week-end. Preuves pour MOA avant réception.",
  "pc-securite":
    "PC site : coordination agents, flux main courante, consignes — exploitation humaine, pas écran télésurveillance.",
  "vacation-non-pourvue":
    "Vendredi 17h40 : vacation 22h–06h sans titulaire confirmé. Le trou est rouge dans le planning — backup affecté avant que le client ne découvre la porte.",
  "remplacement-urgence":
    "21h10 : agent titulaire se désiste pour la nuit. Pool backup, brief consignes mobile, pointage 21h54 — le poste tient sans fil WhatsApp de 40 messages.",
};

export function writeRestConfigs() {
  const configs = ROWS.map((row) => {
    const slug = row[1];
    const cfg = buildPage(row);
    applyRich(cfg, RICH_BY_SLUG[slug]);
    if (SCENARIOS[slug]) {
      cfg.scenario = SCENARIOS[slug];
      cfg.demo.scenario = SCENARIOS[slug];
    }
    return cfg;
  });
  const out = `/** Auto-généré — node scripts/generate-securite-v2.mjs */\nexport const restSecConfigs = ${JSON.stringify(configs, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, "securite-v2-rest-configs.mjs"), out, "utf8");
  return configs;
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}` || process.argv[1]?.endsWith("_write-rest-configs.mjs")) {
  console.log(`Wrote ${writeRestConfigs().length} configs`);
}
