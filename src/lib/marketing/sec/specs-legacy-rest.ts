/* eslint-disable */
/** Legacy SEC-10 → SEC-32 — base v2 (enrichissement démos/copy appliqué ensuite) */
import type { SecPageSpec } from "./build";
import { link } from "./build";

export const secSpecsLegacyRest: SecPageSpec[] = [
{
    id: "SEC-10",
    key: "coproprietes",
    path: "/securite/coproprietes",
    type: "audience",
    primaryKw: "gardiennage copropriété logiciel",
    seoTitle: "Sécurité en copropriété",
    seoDesc: "Gardiennage copropriété : vacations tenues, reporting syndic. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Sécurité en copropriété",
    h1Lead: "Sécurité en copropriété",
    h1: "présence tenue, syndic informé",
    sub: "Résidences et immeubles : organisez les vacations et documentez pour le syndic.",
    claimBefore: "Du hall à la",
    claimHighlight: "preuve pour le syndic",
    claimSub: "copropriétés · présence & reporting",
    productStrip: "Sécurité · copro · syndic",
    empathyH2: "Le syndic veut une preuve, pas une discussion de hall",
    empathyBody: "Présence en résidence, rondes parking, incidents : le conseil syndical tranche sur des faits. WhatsApp ne construit pas un dossier.",
    showcaseTitle: "Copro : présence tenue, syndic rassuré",
    showcaseSub: "Gardiennage résidence — preuves pour le syndic.",
    showcaseBadgeLeft: {
      title: "Résidence Parc",
      sub: "7j/7",
    },
    showcaseBadgeRight: "Présence prouvée",
    proofH2: "Documenter pour le conseil syndical",
    proofQuote: "AG copro : une absence de gardien non expliquée devient un vote contre votre contrat.",
    proofItems: [
      {
        title: "Présence quotidienne",
        text: "Pointage gardien / vacation accueil.",
      },
      {
        title: "Rapport mensuel",
        text: "Historique exploitable pour le syndic.",
      },
      {
        title: "Multi-résidences",
        text: "Chaque immeuble = site, vue portefeuille.",
      },
    ],
    vsTitle: "Parole du gardien vs historique syndic",
    demo: {
      variant: "list",
      eyebrow: "Démo · coproprietes",
      h2: "Répondre à l'AG : vendredi soir, qui gardait ?",
      lead: "Résidence Parc — historique présence + vacation remplacée.",
      scenario: "AG copro : « qui gardait la résidence vendredi soir ? » Le syndic exige un historique clair de présence, pas la parole du gardien.",
      steps: [
        {
          label: "Planning",
          detail: "Vacation 7j/7 gardien + backup week-end.",
        },
        {
          label: "Vendredi",
          detail: "Titulaire absent — backup 18h–8h affecté.",
        },
        {
          label: "Trace",
          detail: "Pointages + main courante porte parking.",
        },
        {
          label: "Syndic",
          detail: "Rapport mensuel PDF avec lignes vendredi.",
        },
      ],
      uiLabel: "Résidence Parc · mois en cours",
      uiToolbar: "Copro · Export syndic · Vacation soir",
      uiRows: [
        {
          left: "Résidence Parc",
          right: "Vacation 7j/7",
          status: "ok",
        },
        {
          left: "Présence gardien",
          right: "Pointage quotidien",
          status: "ok",
        },
        {
          left: "Conseil syndical",
          right: "Rapport mensuel",
          status: "ok",
        },
        {
          left: "Multi-résidences",
          right: "3 sites actifs",
          status: "ok",
        },
      ],
      uiHint: "Angle sécurité résidentielle — ≠ EV syndics.",
      takeaway: "Le syndic voit des faits — votre renouvellement ne se joue pas sur un malentendu.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Gardiennage copro ≠ espaces verts",
        body: "Intent distinct : présence humaine, accès résidence, syndic — pas confondre avec la verticale espaces verts (autre produit).",
        bullets: [
          "Vacations gardien / accueil",
          "Consignes résidence",
          "Export pour AG",
        ],
      },
      {
        h2: "Remplacements discrets mais tracés",
        body: "Le résident ne doit pas voir un trou ; le syndic doit voir qui est venu — les deux via planning + pointage.",
      },
    ],
    faq: [
      {
        q: "Que sortir quand le syndic dit « vous n’étiez pas là mardi » ?",
        a: "Historique de présence / pointage de la vacation, éventuellement photos ou main courante — en minutes, pas en fouille de téléphones.",
      },
      {
        q: "Lien avec la page main courante ?",
        a: "Les incidents résidentiels (tags, squat hall, litige voisin) se journalisent là. Ici l’angle est la couverture présence copro.",
      },
      {
        q: "Faut-il un accès logiciel pour le syndic ?",
        a: "Pas obligatoire. Beaucoup envoient un export propre. L’essentiel est d’avoir la preuve sans improvisation.",
      },
      {
        q: "Ça marche sur un portefeuille multi-résidences (« gardiennage copropriété logiciel ») ?",
        a: "Traitez-les comme un portefeuille : voir aussi multi-sites. Chaque résidence garde ses consignes.",
      },
      {
        q: "Essai utile sur combien de résidences ?",
        a: "2–3 résidences « bruyantes » (celles qui appellent) suffisent à juger en 15 jours.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Couvrir une résidence",
    ctaSecondaryLabel: "Voir main courante",
    trustLeft: "Résidentiel · syndic · preuves",
  },
  {
    id: "SEC-11",
    key: "planning-agents",
    path: "/securite/planning-agents",
    type: "process",
    primaryKw: "planning agents de sécurité",
    seoTitle: "Planning agents sécurité",
    seoDesc: "Planning agents de sécurité : vacations, backups, alertes trous. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Planning agents sécurité",
    h1Lead: "Planning agents sécurité",
    h1: "chaque vacation couverte, chaque jour",
    sub: "Jeudi 11h, deux nuits samedi encore sans backup : le planning doit le crier maintenant — pas le client à 21h. Titulaires, pool, publication mobile : une seule grille.",
    claimBefore: "Du trou détecté à la",
    claimHighlight: "vacation couverte",
    claimSub: "planning · backups · alertes",
    productStrip: "Sécurité · planning · couverture",
    empathyH2: "Le trou de vacation se voit avant le client — ou trop tard",
    empathyBody: "Grille horaires, backups, alertes : un planning qui n’affiche pas les trous transforme chaque indisponibilité en crise de 21h.",
    showcaseTitle: "Planning qui absorbe les imprévus",
    showcaseSub: "Vacations à risque, backups, publication agents.",
    showcaseBadgeLeft: {
      title: "Semaine S12",
      sub: "2 alertes",
    },
    showcaseBadgeRight: "Trou évité",
    proofH2: "Couvrir avant l'appel panique",
    proofQuote: "Anticiper jeudi coûte moins cher qu'excuser samedi à 2 h du matin.",
    proofItems: [
      {
        title: "Alertes vacations",
        text: "Créneaux sans titulaire ou backup.",
      },
      {
        title: "Pool dispo",
        text: "Agents libres croisés compétences.",
      },
      {
        title: "Publication",
        text: "Agents notifiés — une version unique.",
      },
    ],
    vsTitle: "Planning_vFinal.xlsx vs planning live PROGESTI",
    demo: {
      variant: "board",
      eyebrow: "Démo · planning agents",
      h2: "Sauver deux nuits samedi avant le week-end",
      lead: "Jeudi 11h : vacations à risque détectées, remplacements en 12 minutes.",
      scenario: "Jeudi 11h : deux vacations à risque samedi nuit, pool backup épuisé. Anticiper dans le planning avant l'appel panique du client.",
      steps: [
        {
          label: "Scan",
          detail: "Semaine S12 — 2 vacations nuit sans backup confirmé.",
        },
        {
          label: "Pool",
          detail: "5 agents dispo nuit filtrés (compétence + distance).",
        },
        {
          label: "Affectation",
          detail: "Remplacement posé — statut vert.",
        },
        {
          label: "Publish",
          detail: "Agents notifiés, consignes site attachées.",
        },
      ],
      uiLabel: "Planning · semaine S12",
      uiToolbar: "J-0 · Vacations nuit · Couverture titulaire/backup",
      uiAlert: "Trou détecté — vacation sans titulaire confirmé",
      uiRows: [
        {
          left: "Semaine S12",
          right: "2 vacations à risque",
          status: "alert",
        },
        {
          left: "Backup pool",
          right: "5 agents dispo",
          status: "ok",
        },
        {
          left: "Remplacement",
          right: "Affecté en 12 min",
          status: "ok",
        },
        {
          left: "Publication",
          right: "Agents notifiés",
          status: "ok",
        },
      ],
      uiHint: "Planning = anticipation · ≠ page vacation non pourvue.",
      takeaway: "Le planning devient un outil de couverture — pas une photo figée du lundi.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Voir les trous avant le client",
        body: "Statuts vacations : titulaire, backup, alerte — l'exploition traite la liste rouge en priorité.",
        bullets: [
          "Vue semaine / mois",
          "Filtre site ou client",
          "Duplication modèles récurrents",
        ],
      },
      {
        h2: "Une version publiée = une vérité terrain",
        body: "Fini le « j'avais l'ancien fichier » : publication synchronisée avec les apps agents.",
      },
    ],
    faq: [
      {
        q: "Comment détecter une vacation non pourvue avant 18h ?",
        a: "Le planning signale les postes sans titulaire / sans backup. Vous traitez dans la journée — voir aussi la page vacation non pourvue.",
      },
      {
        q: "Différence avec remplacement urgence ?",
        a: "Planning = prévenir et structurer. Remplacement urgence = le geste de dernière minute quand ça lâche quand même.",
      },
      {
        q: "WhatsApp de planning, ça marche jusqu’à quand ?",
        a: "Jusqu’au premier double message contradictoire à 19h. Le planning partagé arbitre ; le chat, non.",
      },
      {
        q: "Multi-sites dans la même grille ?",
        a: "Oui : filtres par site / semaine. Les priorités (nuits, sites sensibles) restent visibles.",
      },
      {
        q: "Par où piloter concrètement « gardiennage copropriété logiciel » ?",
        a: "Une semaine complète sur 10 postes, avec règle « tout trou rouge traité avant 17h ».",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Sécuriser mon planning",
    ctaSecondaryLabel: "Voir vacation non pourvue",
    trustLeft: "Planning · trous · backups",
  },
  {
    id: "SEC-12",
    key: "pointage-vacations",
    path: "/securite/pointage-vacations",
    type: "process",
    primaryKw: "pointage agents sécurité",
    seoTitle: "Pointage vacations",
    seoDesc: "Pointage vacations sécurité : présence réelle, fin de mois saine. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Pointage vacations",
    h1Lead: "Pointage vacations",
    h1: "savoir qui est réellement en poste",
    sub: "Les agents pointent ; le bureau voit. Fini les heures contestées en fin de mois.",
    claimBefore: "Du pointage mobile à la",
    claimHighlight: "heure facturable",
    claimSub: "pointage · début/fin · écarts",
    productStrip: "Sécurité · pointage · réalisé",
    empathyH2: "Sans pointage, la facture est une négociation",
    empathyBody: "Début/fin, écarts, heures supplémentaires : le réalisé terrain doit pouvoir se défendre face au donneur d’ordre et face à votre propre compta.",
    showcaseTitle: "Présence réelle, pas déclarative",
    showcaseSub: "Début/fin vacation, écarts visibles bureau.",
    showcaseBadgeLeft: {
      title: "Vacation 22h–06h",
      sub: "Pointage live",
    },
    showcaseBadgeRight: "Pointé",
    proofH2: "Le réel qui alimente client et facture",
    proofQuote: "« Il est parti à 5 h » vs pointage 06h04 — fin de discussion.",
    proofItems: [
      {
        title: "Début / fin",
        text: "Horodatage lié à la vacation planifiée.",
      },
      {
        title: "Écarts",
        text: "Minutes à valider exploitation avant facture.",
      },
      {
        title: "Preuve client",
        text: "Historique exportable en litige.",
      },
    ],
    vsTitle: "Heures au feeling vs pointage vacation PROGESTI",
    demo: {
      variant: "timeline",
      eyebrow: "Démo · pointage vacations",
      h2: "Trancher le litige des 6 heures",
      lead: "Vacation nuit : prévu 22h–06h, réel 21h58–06h04, écart 4 min à valider.",
      scenario: "Fin de mois : le client conteste 6 h sur un poste. Sans pointage début/fin, la marge part en litige.",
      steps: [
        {
          label: "Prévu",
          detail: "Vacation 22h–06h site Delta attachée agent M.",
        },
        {
          label: "Arrivée",
          detail: "Pointage 21h58 — dans tolérance site.",
        },
        {
          label: "Départ",
          detail: "06h04 — +4 min vs contrat.",
        },
        {
          label: "Clôture",
          detail: "Exploitation valide → ligne facture / paie.",
        },
      ],
      uiLabel: "Pointage · vacation nuit",
      uiToolbar: "Présence poste · Arrivée / départ · ≠ rondes",
      uiRows: [
        {
          left: "Vacation prévue",
          right: "22h–06h",
          status: "ok",
        },
        {
          left: "Arrivée réelle",
          right: "21h58",
          status: "ok",
        },
        {
          left: "Départ réel",
          right: "06h04",
          status: "ok",
        },
        {
          left: "Écart paie/client",
          right: "0h04 à valider",
          status: "alert",
        },
      ],
      uiHint: "Pointage présence — complémentaire preuves de ronde.",
      takeaway: "Le pointage protège votre marge autant que la relation client.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Lier pointage et vacation planifiée",
        body: "Un pointage hors vacation = alerte ; un pointage manquant = trou — l'exploition voit les deux.",
        bullets: [
          "Mobile agent",
          "Vue bureau temps réel",
          "Export paie / facturation",
        ],
      },
      {
        h2: "Tolérances et validation",
        body: "Quelques minutes d'écart : règles par site ou client, validation humaine avant facture.",
      },
    ],
    faq: [
      {
        q: "Que faire si un agent pointe en retard de 12 minutes ?",
        a: "L’écart est visible. Exploitation valide, documente, et la facture reflète la règle contractuelle — pas une discussion du lundi floue.",
      },
      {
        q: "Lien direct avec la facturation ?",
        a: "Oui : les heures pointées alimentent les lignes. C’est tout l’intérêt vs un Excel recollé en fin de mois.",
      },
      {
        q: "Et sans réseau sur site ?",
        a: "Le parcours mobile reste conçu terrain. L’objectif est que le pointage remonte et s’historise pour le bureau.",
      },
      {
        q: "Les agents vont crier au flicage ?",
        a: "Si le discours est « protéger la vacation et la facture », ce n’est pas le même message qu’un contrôle punitif. Le geste reste simple : début / fin.",
      },
      {
        q: "Par quel pilote démarrer pour « gardiennage copropriété logiciel » ?",
        a: "Tous les postes nuit d’une semaine + revue des écarts le lundi matin avec l’exploitation.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Tester le pointage",
    ctaSecondaryLabel: "Voir facturation",
    trustLeft: "Pointage · vacations · écarts",
  },
  {
    id: "SEC-13",
    key: "preuves-intervention",
    path: "/securite/preuves-intervention",
    type: "probleme",
    primaryKw: "preuve intervention sécurité",
    seoTitle: "Preuves & audits",
    seoDesc: "Preuves intervention sécurité : historiques, audits, exports client. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Preuves & audits",
    h1Lead: "Preuves & audits",
    h1: "quand le client demande le rapport, vous l'avez",
    sub: "Conservez l'historique des vacations et passages pour répondre vite et factuellement.",
    claimBefore: "De l’intervention à la",
    claimHighlight: "preuve client",
    claimSub: "preuves · historique · audit",
    productStrip: "Sécurité · preuves · audit",
    empathyH2: "Le donneur d’ordre ne veut pas votre bonne foi — il veut le dossier",
    empathyBody: "Audit, réclamation, renew : les preuves (présence, ronde, incident) doivent tenir sur un écran, pas dans trois fils de discussion.",
    showcaseTitle: "Dossier preuves en minutes, pas en jours",
    showcaseSub: "Pointages, rondes, incidents — période demandée.",
    showcaseBadgeLeft: {
      title: "Demande client",
      sub: "12–18 mars",
    },
    showcaseBadgeRight: "Preuve exportable",
    proofH2: "Répondre factuellement sous pression",
    proofQuote: "Le client ne veut pas votre bonne foi — il veut des lignes horodatées.",
    proofItems: [
      {
        title: "Période filtrée",
        text: "Semaine, site, agent — export ciblé.",
      },
      {
        title: "Multi-source",
        text: "Pointages + main courante + rondes.",
      },
      {
        title: "Envoi",
        text: "PDF ou accès lecture — sans reconstitution manuelle.",
      },
    ],
    vsTitle: "Archives WhatsApp vs dossier preuves PROGESTI",
    demo: {
      variant: "split",
      uiSplitLabels: ["Terrain","Export"],
      eyebrow: "Démo · preuves intervention",
      h2: "Compiler semaine 11 avant 18h",
      lead: "Demande client : toutes preuves 12–18 mars, site entrepôt.",
      scenario: "Email client 17h02 : « envoyez toutes les preuves semaine 11 ». Il faut sortir pointages + main courante sans fouiller WhatsApp.",
      steps: [
        {
          label: "Filtre",
          detail: "Site + dates 12–18 mars.",
        },
        {
          label: "Pointages",
          detail: "142 lignes vacations pointées.",
        },
        {
          label: "Incidents",
          detail: "3 événements main courante attachés.",
        },
        {
          label: "Envoi",
          detail: "PDF + lien lecture — mail client 17h48.",
        },
      ],
      uiLabel: "Export preuves · mars",
      uiToolbar: "Audit donneur d’ordre · Export période",
      uiRows: [
        {
          left: "Demande client",
          right: "Rapport 12–18 mars",
          status: "alert",
        },
        {
          left: "Pointages",
          right: "142 lignes",
          status: "ok",
        },
        {
          left: "Main courante",
          right: "3 événements",
          status: "ok",
        },
        {
          left: "Envoi",
          right: "PDF + accès lecture",
          status: "ok",
        },
      ],
      uiHint: "Dossier preuves — pas un label certifié.",
      takeaway: "Vous transformez une urgence en routine — le renouvellement se gagne aussi là.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Ce qu'on entend par « preuve » chez PROGESTI",
        body: "Présences, passages ronde, entrées main courante — traces opérationnelles, pas vidéo ni télésurveillance.",
        bullets: [
          "Horodatage",
          "Lien vacation / site",
          "Export période",
        ],
      },
      {
        h2: "Anticiper les audits récurrents",
        body: "Clients qui demandent chaque mois le même rapport : modèle de période + export — moins de stress équipe.",
      },
    ],
    faq: [
      {
        q: "Qu’est-ce qu’un « dossier preuve » exploitable ?",
        a: "Vacation concernée, pointages, passages de ronde le cas échéant, main courante, horodatages. Exportable pour le client.",
      },
      {
        q: "Différence avec rondes ?",
        a: "Rondes = capturer le parcours. Preuves = reconstituer le dossier pour l’audit / le litige, tous artefacts confondus.",
      },
      {
        q: "Délai pour sortir une preuve sur une réclamation ?",
        a: "L’objectif est la minute, pas la demi-journée. Si vous fouillez encore WhatsApp, le process n’est pas en place.",
      },
      {
        q: "Qui côté client reçoit ça ?",
        a: "Facility, syndic, charge d’affaire grands comptes — selon le contrat. Le format doit être lisible pour un non-agent.",
      },
      {
        q: "Par où commencer pour « gardiennage copropriété logiciel » ?",
        a: "Choisissez le client qui vous a déjà demandé un audit. Rejouez un mois typique et montrez le dossier.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Monter un dossier preuve",
    ctaSecondaryLabel: "Voir rondes",
    trustLeft: "Preuves · donneur d’ordre · audit",
  },
  {
    id: "SEC-14",
    key: "multi-sites",
    path: "/securite/multi-sites",
    type: "probleme",
    primaryKw: "gestion multi-sites sécurité",
    seoTitle: "Multi-sites sécurité",
    seoDesc: "Gestion multi-sites sécurité : portefeuille, consignes, couverture. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Multi-sites sécurité",
    h1Lead: "Multi-sites sécurité",
    h1: "quand le portefeuille s'étend, le tableur lâche",
    sub: "Sites, consignes, équipes : une base unique pour grandir sans perdre le contrôle.",
    claimBefore: "Du portefeuille sites à la",
    claimHighlight: "couverture globale",
    claimSub: "multi-sites · vision exploitation",
    productStrip: "Sécurité · multi-sites · scale",
    empathyH2: "20 sites, 3 alertes critiques : lesquelles voyez-vous à 9h ?",
    empathyBody: "Sans vue portefeuille, vous managez au fil des coups de fil. Les retards et trous des sites secondaires pourrissent jusqu’au mail du grand compte.",
    showcaseTitle: "Portefeuille unifié, sites distincts",
    showcaseSub: "47 sites actifs — une direction, zéro tableur par client.",
    showcaseBadgeLeft: {
      title: "47 sites",
      sub: "Vue direction",
    },
    showcaseBadgeRight: "Sites sous contrôle",
    proofH2: "Grandir sans perdre le site oublié",
    proofQuote: "Site #12 avec consignes obsolètes — incident waiting to happen.",
    proofItems: [
      {
        title: "Vue consolidée",
        text: "Direction voit alertes tous sites.",
      },
      {
        title: "Onboarding 48h",
        text: "Modèle site + vacations type.",
      },
      {
        title: "Consignes versionnées",
        text: "Alerte si fiche trop vieille.",
      },
    ],
    vsTitle: "Un Excel par client vs portefeuille PROGESTI",
    demo: {
      variant: "board",
      eyebrow: "Démo · multi sites",
      h2: "Onboarder 12 sites sans oublier le #9",
      lead: "Contrat gagné : checklist site, consignes, vacations — alerte sur fiche stale.",
      scenario: "Contrat gagné : +12 sites en 30 jours. Excel casse — consignes éparpillées, vacations oubliées sur site #9.",
      steps: [
        {
          label: "Import",
          detail: "12 fiches sites depuis modèle industriel.",
        },
        {
          label: "Vacations",
          detail: "Modèle 3×8 appliqué par site.",
        },
        {
          label: "Alerte",
          detail: "Site #12 consignes > 90 j — revue planifiée.",
        },
        {
          label: "Direction",
          detail: "Vue 47 sites — 1 alerte consignes.",
        },
      ],
      uiLabel: "Portefeuille · croissance",
      uiToolbar: "Portefeuille · Criticité · Couverture nuit",
      uiAlert: "P1 — site critique · vacation non pourvue",
      uiRows: [
        {
          left: "Portefeuille",
          right: "47 sites actifs",
          status: "ok",
        },
        {
          left: "Site #12",
          right: "Consignes obsolètes",
          status: "alert",
        },
        {
          left: "Direction",
          right: "Vue consolidée",
          status: "ok",
        },
        {
          left: "Nouveau contrat",
          right: "Onboarding site 48h",
          status: "ok",
        },
      ],
      uiHint: "Priorisation multi-sites.",
      takeaway: "Scale = process — PROGESTI porte le portefeuille, pas votre mémoire.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Modèles pour ne pas réinventer chaque site",
        body: "Industrie, copro, retail : dupliquez structure vacations + consignes — personnalisez ensuite.",
        bullets: [
          "Modèle par vertical",
          "Checklist onboarding",
          "Alertes consignes",
        ],
      },
      {
        h2: "Gouvernance direction vs exploitation",
        body: "Direction = KPI et alertes ; exploitation = affectations — même data, rôles différents.",
      },
    ],
    faq: [
      {
        q: "Comment prioriser les sites le lundi matin ?",
        a: "Filtres : trous de vacation, incidents ouverts, sites sensibles / SLA. Vous traitez les 5 rouges avant le reste.",
      },
      {
        q: "Différence avec grands comptes ?",
        a: "Multi-sites = vision exploitation. Grands comptes = reporting / exigences cadre. Souvent liés.",
      },
      {
        q: "Excel filtrable ne suffit-il pas ?",
        a: "Jusqu’à ce que la réalité terrain change à 17h45. Un portefeuille vivant bat un export figé de la veille.",
      },
      {
        q: "PC sécurité au milieu ?",
        a: "Le PC peut superviser ; le portefeuille reste la vérité des postes. Voir page PC sécurité.",
      },
      {
        q: "Par quel pilote démarrer pour « gardiennage copropriété logiciel » ?",
        a: "12–20 sites, une semaine, revue quotidienne des alertes — pas un big bang 200 sites.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Voir mon portefeuille",
    ctaSecondaryLabel: "Voir grands comptes",
    trustLeft: "Multi-sites · priorités · retards",
  },
  {
    id: "SEC-15",
    key: "facturation-gardiennage",
    path: "/securite/facturation-gardiennage",
    type: "process",
    primaryKw: "facturation gardiennage",
    seoTitle: "Facturation gardiennage",
    seoDesc: "Facturation gardiennage : heures pointées → facture du réalisé. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Facturation gardiennage",
    h1Lead: "Facturation gardiennage",
    h1: "facturez les heures faites, pas les heures estimées",
    sub: "Reliez vacations pointées et factures. Réduisez les écarts et les litiges.",
    claimBefore: "Des heures pointées à la",
    claimHighlight: "facture",
    claimSub: "factu gardiennage · réalisé terrain",
    productStrip: "Sécurité · facturation · réalisé",
    empathyH2: "Fin de mois : si vous reconstruitsez les heures, vous perdez du cash ou de la confiance",
    empathyBody: "Heures pointées, majorations, écarts validés : la facture gardiennage doit sortir du réalisé, pas d’une négociation mémorielle avec le client.",
    showcaseTitle: "Facture depuis le réalisé pointé",
    showcaseSub: "Vacations → heures → lignes facture.",
    showcaseBadgeLeft: {
      title: "Mars",
      sub: "312 h pointées",
    },
    showcaseBadgeRight: "Brouillon facture",
    proofH2: "Aligner facture et terrain",
    proofQuote: "Découvrir 14 h non facturées après envoi — classique sans lien pointage.",
    proofItems: [
      {
        title: "Lignes auto",
        text: "Heures validées → brouillon facture.",
      },
      {
        title: "Écarts devis",
        text: "-4 h détectées avant envoi.",
      },
      {
        title: "Relances",
        text: "Suivi impayés planifié (orga commerciale).",
      },
    ],
    vsTitle: "Facture Excel vs réalisé PROGESTI",
    demo: {
      variant: "list",
      eyebrow: "Démo · facturation gardiennage",
      h2: "Clôture mars sans heures oubliées",
      lead: "312 h pointées — écart -4 h vs devis repéré avant envoi.",
      scenario: "Clôture mensuelle : 280 h pointées, facture basée sur devis estimatif — 14 h non facturées découvertes après envoi.",
      steps: [
        {
          label: "Collecte",
          detail: "Vacations mars validées exploitation.",
        },
        {
          label: "Lignes",
          detail: "Brouillon facture généré depuis pointages.",
        },
        {
          label: "Contrôle",
          detail: "Écart -4 h site Gamma — ajustement.",
        },
        {
          label: "Envoi",
          detail: "Facture alignée bon de commande client.",
        },
      ],
      uiLabel: "Facturation · mars",
      uiToolbar: "Réalisé pointé · Écarts · Extras",
      uiRows: [
        {
          left: "Vacations pointées",
          right: "312 h mars",
          status: "ok",
        },
        {
          left: "Lignes facture",
          right: "Auto depuis réalisé",
          status: "ok",
        },
        {
          left: "Écart devis",
          right: "-4 h détectées",
          status: "alert",
        },
        {
          left: "Impayé",
          right: "Relance planifiée",
          status: "ok",
        },
      ],
      uiHint: "Facture alignée sur le tenu — pas le planning optimiste.",
      takeaway: "La facture devient la conséquence du terrain — pas un pari fin de mois.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Chaîne vacation → validation → facture",
        body: "Exploitation valide les heures ; compta exporte ou finalise — un seul réalisé sourcé.",
        bullets: [
          "Brouillon depuis pointages",
          "Alertes écarts devis",
          "Export comptable",
        ],
      },
      {
        h2: "Pas un ERP complet",
        body: "PROGESTI structure le réalisé facturable — votre expert-comptable garde la liasse fiscale.",
      },
    ],
    faq: [
      {
        q: "Comment une vacation nuit devient-elle une ligne de facture ?",
        a: "Pointage début/fin → validation exploitation → ligne générée. Les écarts traités ne disparaissant pas dans un flou Excel.",
      },
      {
        q: "Et les heures supplémentaires / prolongations ?",
        a: "Si elles sont captées et validées dans le flux, elles peuvent entrer au réalisé. Sinon elles meurent dans un message « on est restés plus tard ».",
      },
      {
        q: "Ma compta reste la même ?",
        a: "Oui. PROGESTI sécurise l’alimentation ; votre outil comptable enregistre.",
      },
      {
        q: "Litige client sur les heures : que montrer ?",
        a: "Le dossier pointage de la période + validations. C’est aussi une page preuves.",
      },
      {
        q: "Par où piloter concrètement « gardiennage copropriété logiciel » ?",
        a: "Un client, un mois, comparaison facture précédente vs réalisé pointé. L’écart parle tout seul.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Facturer le réalisé",
    ctaSecondaryLabel: "Voir pointage vacations",
    trustLeft: "Réalisé · lignes · fin de mois",
  },
  {
    id: "SEC-16",
    key: "remplacer-excel",
    path: "/securite/remplacer-excel",
    type: "probleme",
    primaryKw: "remplacer Excel gardiennage",
    seoTitle: "Sortir d'Excel en sécurité",
    seoDesc: "Remplacer Excel en gardiennage : une source bureau ↔ terrain. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Sortir d'Excel en sécurité",
    h1Lead: "Sortir d'Excel en sécurité",
    h1: "un système pour vacations et preuves",
    sub: "Fichiers qui divergent, groupes WhatsApp ingérables : basculez vers un outil métier.",
    claimBefore: "Du tableur éclaté à la",
    claimHighlight: "source unique",
    claimSub: "sortie Excel / WhatsApp sécurité",
    productStrip: "Sécurité · migration · Excel",
    empathyH2: "Excel + WhatsApp comme OS de sécurité, ça casse toujours au même endroit",
    empathyBody: "Versions de fichiers, messages contradictoires, aucune source de vérité pour le backup : le symptôme arrive un vendredi à 17h45.",
    showcaseTitle: "Une vérité bureau ↔ terrain",
    showcaseSub: "Fin du planning_v23_FINAL.xlsx parallèle.",
    showcaseBadgeLeft: {
      title: "Ancien Excel",
      sub: "Obsolète",
    },
    showcaseBadgeRight: "Pilote lancé",
    proofH2: "Remplacer Excel sans big bang",
    proofQuote: "Personne ne sait qui couvre la nuit si deux fichiers circulent.",
    proofItems: [
      {
        title: "Source unique",
        text: "Planning publié = ce que voient les agents.",
      },
      {
        title: "WhatsApp ↓",
        text: "Affectations et consignes in-app.",
      },
      {
        title: "Fin de mois",
        text: "Facture sans ressaisie depuis le tableur.",
      },
    ],
    vsTitle: "Double saisie Excel vs flux unique PROGESTI",
    demo: {
      variant: "split",
      uiSplitLabels: ["Avant","Après"],
      eyebrow: "Démo · remplacer excel",
      h2: "Dimanche soir : une seule version du planning nuit",
      lead: "Ancien Excel obsolète vs PROGESTI publié — vacation nuit identifiée.",
      scenario: "Deux versions du planning circulent le dimanche. Personne ne sait qui couvre le poste nuit — aucune couverture unique.",
      steps: [
        {
          label: "Constat",
          detail: "Deux fichiers — conflit poste nuit site A.",
        },
        {
          label: "Bascule",
          detail: "Semaine courante saisie dans PROGESTI.",
        },
        {
          label: "Publish",
          detail: "Agents voient même vacation + consignes.",
        },
        {
          label: "Clôture",
          detail: "Pointages alimentent facture — zéro ressaisie.",
        },
      ],
      uiLabel: "Migration · semaine 1",
      uiToolbar: "Avant Excel / WhatsApp · Après couverture unique",
      uiRows: [
        {
          left: "Planning Excel",
          right: "Version obsolète",
          status: "alert",
        },
        {
          left: "Source PROGESTI",
          right: "Bureau = terrain",
          status: "ok",
        },
        {
          left: "WhatsApp",
          right: "Remplacé par affectations",
          status: "ok",
        },
        {
          left: "Fin de mois",
          right: "Facture sans ressaisie",
          status: "ok",
        },
      ],
      uiHint: "Migration organisationnelle.",
      takeaway: "Excel reste pour la compta si vous voulez — pas pour piloter les vacations.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Migrer une semaine réelle, pas tout l'historique",
        body: "Commencez par la semaine courante + sites actifs — l'historique Excel archive, PROGESTI avance.",
        bullets: [
          "Import manuel guidé",
          "Parallèle court autorisé",
          "Support FR pour démarrage",
        ],
      },
      {
        h2: "Ce que Excel fait encore bien",
        body: "Analyses ad hoc — OK. suivi d’exploitation vacations et preuves — non.",
      },
    ],
    faq: [
      {
        q: "Faut-il tout couper le jour 1 ?",
        a: "Non. Pilotez 10 postes, coupez le « planning officiel » WhatsApp sur ce lot, gardez le chat pour l’humain.",
      },
      {
        q: "Combien de temps pour un pilote crédible ?",
        a: "Deux semaines de vacations réelles, avec au moins un imprévu (indispo, trou). Si le pilote est trop sage, vous n’apprenez rien.",
      },
      {
        q: "Les équipes vont résister ?",
        a: "Elles résistent au double outil. Si le planning bureau est juste, le mobile simplifie leur vie (moins d’appels).",
      },
      {
        q: "On a déjà un monstre Excel macro",
        a: "Les macros ne poussent pas un brief au backup ni un pointage horodaté. C’est le trou fonctionnel.",
      },
      {
        q: "Puis-je tester PROGESTI sur mon cas « gardiennage copropriété logiciel » ?",
        a: "15 jours sans CB — idéal pour un pilote borné, pas pour une migration théorique.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Lancer un pilote 10 postes",
    ctaSecondaryLabel: "Voir le pilier logiciel",
    trustLeft: "Migration · pilote · adoption",
  },
  {
    id: "SEC-17",
    key: "faq",
    path: "/securite/faq",
    type: "faq",
    primaryKw: "FAQ logiciel gardiennage",
    seoTitle: "FAQ logiciel gardiennage",
    seoDesc: "FAQ logiciel gardiennage : prix, essai, mobile, CNAPS. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "FAQ logiciel gardiennage",
    h1Lead: "FAQ sécurité",
    h1: "réponses courtes, utiles",
    sub: "Pour décider si PROGESTI matche votre société de sécurité.",
    claimBefore: "De la question métier à la",
    claimHighlight: "réponse claire",
    claimSub: "FAQ sécurité · avant l’essai",
    productStrip: "Sécurité · FAQ · décision",
    empathyH2: "Les questions qu’on vous pose avant de tenter l’essai",
    empathyBody: "Verticalité, CNAPS, mobile, prix, migration : mieux vaut des réponses franches que une landing opaque.",
    showcaseTitle: "FAQ décision gardiennage",
    showcaseSub: "Réponses courtes — liens vers pages métier.",
    showcaseBadgeLeft: {
      title: "Questions",
      sub: "Prix · essai · mobile",
    },
    showcaseBadgeRight: "Réponse terrain",
    proofH2: "Décider en dix minutes",
    proofQuote: "Pas de tunnel commercial pour savoir si ça matche une TPE gardiennage.",
    proofItems: [
      {
        title: "Tarif public",
        text: "29,99 € HT/mois affiché — pas de devis caché.",
      },
      {
        title: "Essai réel",
        text: "15 j sans CB sur vos sites.",
      },
      {
        title: "Verticale dédiée",
        text: "Sécurité ≠ propreté ≠ EV.",
      },
    ],
    vsTitle: "Pages marketing floues vs FAQ tranchée",
    demo: {
      variant: "board",
      eyebrow: "Démo · faq",
      h2: "Parcours décision en 4 questions",
      lead: "Simuler le check-list dirigeant avant clic essai.",
      scenario: "Avant l'essai, le dirigeant veut prix, mobile, séparation propreté, et si les agents pointeront vraiment — réponses courtes sans blabla.",
      steps: [
        {
          label: "Prix",
          detail: "29,99 € HT/mois tout inclus — page tarifs.",
        },
        {
          label: "Essai",
          detail: "15 j sans CB — annulation simple.",
        },
        {
          label: "Mobile",
          detail: "Pointage Android / iOS agents.",
        },
        {
          label: "Verticale",
          detail: "Routes /securite — pas nettoyage.",
        },
      ],
      uiLabel: "FAQ · décision",
      uiToolbar: "FAQ · Aiguillage intents",
      uiRows: [
        {
          left: "Question prix",
          right: "29,99 € HT/mois",
          status: "ok",
        },
        {
          left: "Question essai",
          right: "15 j sans CB",
          status: "ok",
        },
        {
          left: "Question mobile",
          right: "Android / iOS",
          status: "ok",
        },
        {
          left: "Question verticale",
          right: "Sécurité ≠ propreté",
          status: "ok",
        },
      ],
      uiHint: "Réponses courtes + maillage deep.",
      takeaway: "Si ça matche, vous testez sur un vrai site — pas un sandbox bidon.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Questions que tout dirigeant gardiennage pose",
        body: "CNAPS, paie, vidéo : nous bornons le périmètre PROGESTI clairement — organisation vacations et preuves.",
        bullets: [
          "Pas conseil juridique",
          "Pas télésurveillance",
          "Pas ERP paie complet",
        ],
      },
      {
        h2: "Où approfondir après la FAQ",
        body: "Poste fixe, rondes, factu, multi-sites : le hub /securite oriente vers la page intent.",
      },
    ],
    faq: [
      {
        q: "C’est bien du gardiennage / sécurité privée ?",
        a: "Oui — verticale /securite dédiée, séparée propreté et espaces verts, avec démos vacations / rondes / preuves.",
      },
      {
        q: "Vous gérez l’agrément pour nous ?",
        a: "Non. Organisation opérationnelle et preuves — pas de substitut réglementaire.",
      },
      {
        q: "Le mobile est-il utilisable par un agent de nuit ?",
        a: "Le parcours reste simple : consignes, pointage, main courante. L’adoption dépend d’un planning bureau propre.",
      },
      {
        q: "Quels tarif et essai pour « gardiennage copropriété logiciel » ?",
        a: "Dès 29,99 € HT/mois. Essai 15 jours sans CB. Détail sur /tarifs.",
      },
      {
        q: "Y a-t-il un support FR pour « gardiennage copropriété logiciel » ?",
        a: "Équipe francophone, basée en Occitanie — on parle vacations et sites, pas jargon « field service ».",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Lire puis essayer",
    ctaSecondaryLabel: "Parler à un humain",
    trustLeft: "FAQ · verticale /securite",
  },
  {
    id: "SEC-18",
    key: "guide-organiser-vacations",
    path: "/securite/guide-organiser-vacations",
    type: "guide",
    primaryKw: "comment organiser planning gardiennage",
    seoTitle: "Guide : organiser les vacations de gardiennage",
    seoDesc: "Guide : organiser vacations gardiennage — posts, backups, factu. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Guide : organiser les vacations de gardiennage",
    h1Lead: "Guide pratique",
    h1: "organiser les vacations sans trou",
    sub: "Cartographier posts, figer besoins, staffer, pointer, facturer.",
    claimBefore: "De la méthode à la",
    claimHighlight: "vacation publiée",
    claimSub: "guide organiser vacations",
    productStrip: "Sécurité · guide · méthode",
    empathyH2: "Publier une vacation, ce n’est pas envoyer un créneau dans un chat",
    empathyBody: "Méthode en étapes : inventaire postes → titulaire/backup → consignes → publication → pointage → revue. Sans ça, chaque semaine est une improvisation.",
    showcaseTitle: "Guide : vacations sans trou",
    showcaseSub: "4 étapes avant de choisir un outil.",
    showcaseBadgeLeft: {
      title: "Étape 1–4",
      sub: "Posts → factu",
    },
    showcaseBadgeRight: "Méthode 6 étapes",
    proofH2: "Structurer avant d'automatiser",
    proofQuote: "Un logiciel sur un planning flou automatise le chaos.",
    proofItems: [
      {
        title: "Cartographie",
        text: "Posts nommés par site client.",
      },
      {
        title: "Besoins",
        text: "Créneaux et volumes contractuels.",
      },
      {
        title: "Staff & preuve",
        text: "Backups + lien pointage facture.",
      },
    ],
    vsTitle: "Improviser vs méthode vacations",
    demo: {
      variant: "checklist",
      eyebrow: "Démo · guide organiser vacations",
      h2: "Les 4 étapes sur un site pilote",
      lead: "Appliquer la méthode sur un client avant généralisation.",
      scenario: "Nouvelle société : cartographier posts, figer créneaux, lister backups, puis seulement choisir l'outil — méthode avant logiciel.",
      steps: [
        {
          label: "Posts",
          detail: "Cartographie accueil / portail / ronde site pilote.",
        },
        {
          label: "Besoins",
          detail: "Créneaux figés alignés contrat.",
        },
        {
          label: "Staff",
          detail: "Titulaires + 3 backups identifiés.",
        },
        {
          label: "Factu",
          detail: "Règle : heures pointées = lignes facture.",
        },
      ],
      uiLabel: "Guide · site pilote",
      uiToolbar: "Méthode · Checklist couverture semaine",
      uiRows: [
        {
          left: "Étape 1 posts",
          right: "Cartographie OK",
          status: "ok",
        },
        {
          left: "Étape 2 besoins",
          right: "Créneaux figés",
          status: "ok",
        },
        {
          left: "Étape 3 staff",
          right: "Backups listés",
          status: "ok",
        },
        {
          left: "Étape 4 factu",
          right: "Lien pointage",
          status: "ok",
        },
      ],
      uiHint: "Méthode avant automatisation.",
      takeaway: "PROGESTI accélère une méthode — ne la remplace pas.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Étape 1 — Nommer les posts (pas « agent nuit »)",
        body: "Chaque vacation doit avoir un poste, un site, un créneau — vocabulaire partagé bureau et terrain.",
        bullets: [
          "Fiche site minimale",
          "Contacts client",
          "Consignes accès",
        ],
      },
      {
        h2: "Étape 2 à 4 — Staff, pointer, facturer",
        body: "Backups listés, pointage non négociable, facture branchée sur le réel — ensuite seulement déploiement multi-sites.",
      },
    ],
    faq: [
      {
        q: "Dans quel ordre structurer si on part de zéro ?",
        a: "Inventaire des postes, règles de couverture (titulaire+backup), consignes, publication planning, pointage, revue des trous le lundi.",
      },
      {
        q: "Combien de postes pour démarrer le guide ?",
        a: "5–10 postes représentatifs (un mix jour/nuit). Le guide est une méthode, pas un roman.",
      },
      {
        q: "Lien avec vacation non pourvue ?",
        a: "Le guide prévient. La page vacation non pourvue traite l’alerte quand le trou apparaît quand même.",
      },
      {
        q: "Doit-on former tous les agents jour 1 ?",
        a: "Non : formez l’exploitation + les agents des postes pilotes. Élargissez ensuite.",
      },
      {
        q: "Que faire après le guide « gardiennage copropriété logiciel » ?",
        a: "Passez au planning agents et au pointage — la méthode devient quotidienne.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Suivre le guide",
    ctaSecondaryLabel: "Ouvrir le planning",
    trustLeft: "Méthode · publication · backups",
  },
  {
    id: "SEC-19",
    key: "toulouse-occitanie",
    path: "/securite/toulouse-occitanie",
    type: "local",
    primaryKw: "logiciel gardiennage Toulouse",
    seoTitle: "Logiciel gardiennage Toulouse / Occitanie",
    seoDesc: "Logiciel gardiennage Toulouse / Occitanie : support FR local. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Logiciel gardiennage Toulouse / Occitanie",
    h1Lead: "Sécurité en Occitanie",
    h1: "outil FR, équipe près de Toulouse",
    sub: "Gardiennage en région : produit terrain + support joignable.",
    claimBefore: "De l’essai local à la",
    claimHighlight: "prise en main",
    claimSub: "Toulouse · Occitanie · support FR",
    productStrip: "Sécurité · Occitanie · support",
    empathyH2: "Un essai sur vos sites du 31, pas une démo hors-sol",
    empathyBody: "Sociétés de sécurité toulousaines / occitanes : support joignable, cas locaux, prise en main sur de vrais postes — le cloud n’empêche pas l’accompagnement humain.",
    showcaseTitle: "PROGESTI près de Toulouse",
    showcaseSub: "Support FR · essai sur sites Occitanie.",
    showcaseBadgeLeft: {
      title: "Tournefeuille",
      sub: "Support FR",
    },
    showcaseBadgeRight: "Support 31",
    proofH2: "Local où ça compte : la relation",
    proofQuote: "Essayer sur un site du 31 avec quelqu'un qui connaît le métier vacation.",
    proofItems: [
      {
        title: "Équipe joignable",
        text: "Support basé Occitanie — pas ticket anonyme seul.",
      },
      {
        title: "Démo métier",
        text: "Scénarios gardiennage, pas demo CRM générique.",
      },
      {
        title: "France entière",
        text: "Produit non limité au 31 — local = confiance.",
      },
    ],
    vsTitle: "Hotline générique vs support métier Occitanie",
    demo: {
      variant: "list",
      eyebrow: "Démo · toulouse occitanie",
      h2: "Essai sur un site du 31 cette semaine",
      lead: "Créneau démo + montage site pilote région toulousaine.",
      scenario: "Société du 31 : veut parler à un humain, essayer sur un vrai site local, sans hotline offshore.",
      steps: [
        {
          label: "Contact",
          detail: "Échange avec équipe Tournefeuille.",
        },
        {
          label: "Site pilote",
          detail: "Un contrat local monté dans PROGESTI.",
        },
        {
          label: "Agents",
          detail: "2 agents pointent — test réel 48 h.",
        },
        {
          label: "Bilan",
          detail: "Go / no-go avant fin essai 15 j.",
        },
      ],
      uiLabel: "Occitanie · essai local",
      uiToolbar: "31 / Occitanie · Support Tournefeuille",
      uiRows: [
        {
          left: "Support",
          right: "Équipe Tournefeuille",
          status: "ok",
        },
        {
          left: "Société locale",
          right: "Essai sur sites 31",
          status: "ok",
        },
        {
          left: "Démo",
          right: "Créneau cette semaine",
          status: "ok",
        },
        {
          left: "Déploiement",
          right: "France entière OK",
          status: "ok",
        },
      ],
      uiHint: "Ancrage local — produit national.",
      takeaway: "Le local rassure — le produit travaille sur tous vos sites France.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Basé Occitanie, clients partout",
        body: "Racines régionales ≠ limitation géographique : vacations Paris ou Lyon se gèrent identiquement.",
        bullets: [
          "Support FR",
          "Démo vacations réelles",
          "Essai sans CB",
        ],
      },
      {
        h2: "Réseau gardiennage toulousain",
        body: "PME locales et croissance : même tarif public 29,99 € HT/mois — pas de « surdevis région ».",
      },
    ],
    faq: [
      {
        q: "Le support est-il vraiment local / joignable ?",
        a: "Équipe en Occitanie, francophone. L’essai se fait sur vos postes, pas uniquement sur un jeu de démo.",
      },
      {
        q: "On a des sites hors Occitanie aussi",
        a: "Aucun souci : la page ancre la proximité pour ceux qui la cherchent ; le produit couvre multi-sites ailleurs.",
      },
      {
        q: "Différence avec le pilier logiciel ?",
        a: "Le pilier = flux produit. Ici = angle local / confiance éditeur + essai terrain.",
      },
      {
        q: "Le tarif reste-t-il identique pour « gardiennage copropriété logiciel » ?",
        a: "Oui, grille publique. L’essai 15 jours reste le même.",
      },
      {
        q: "Comment démarrer depuis Toulouse ?",
        a: "Choisissez 8 postes locaux, lancez l’essai, planifiez un point avec le support après une semaine réelle.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Essayer depuis Toulouse",
    ctaSecondaryLabel: "Voir tarifs",
    trustLeft: "Éditeur Occitanie · support humain",
  },
  {
    id: "SEC-20",
    key: "astreinte-nuit",
    path: "/securite/astreinte-nuit",
    type: "service",
    primaryKw: "planning agents sécurité nuit",
    seoTitle: "Nuits & astreintes",
    seoDesc: "Planning agents sécurité nuit : vacations, rondes, preuves. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Nuits & astreintes",
    h1Lead: "Nuits & astreintes",
    h1: "des postes tenus quand tout le monde dort",
    sub: "Planifiez les vacations de nuit, sécurisez les backups, gardez les preuves.",
    claimBefore: "De l’alerte 2h du mat à la",
    claimHighlight: "relève assurée",
    claimSub: "astreinte · nuit · escalade",
    productStrip: "Sécurité · nuit · astreinte",
    empathyH2: "2h17 : l’alerte ne peut pas attendre le briefing du lundi",
    empathyBody: "Escalade, relève, consignes de nuit : l’astreinte se juge dans l’heure, pas dans le reporting du mois.",
    showcaseTitle: "Nuits staffées, nuits prouvées",
    showcaseSub: "Astreinte, rondes 02h, relève 06h.",
    showcaseBadgeLeft: {
      title: "22h–06h",
      sub: "Vacation nuit",
    },
    showcaseBadgeRight: "Nuit sous contrôle",
    proofH2: "Tenir la nuit comme le jour",
    proofQuote: "Client qui appelle à 3 h — vous devez voir titulaire, ronde, incident en live.",
    proofItems: [
      {
        title: "Titulaire confirmé",
        text: "Backup identifié avant 22 h.",
      },
      {
        title: "Rondes nuit",
        text: "Passages attendus vs réels.",
      },
      {
        title: "Relève matin",
        text: "Pointage 06h pour clôture shift.",
      },
    ],
    vsTitle: "Tel perso exploit vs suivi d’exploitation nuit PROGESTI",
    demo: {
      variant: "timeline",
      eyebrow: "Démo · astreinte nuit",
      h2: "Incident 03h : titulaire, ronde, main courante",
      lead: "Client signale ronde manquée — vérification sans réveiller toute l'équipe.",
      scenario: "03h : ronde manquée signalée par le client. Vérifier titulaire, passages et main courante pendant la vacation.",
      steps: [
        {
          label: "Vacation",
          detail: "22h–06h titulaire confirmé + backup liste.",
        },
        {
          label: "Ronde 02h",
          detail: "Point Q4 — passage 02h07 OK.",
        },
        {
          label: "Alerte",
          detail: "Client dit Q6 manquant — historique Q6 02h31.",
        },
        {
          label: "Clôture",
          detail: "Main courante + preuve envoyée 06h15.",
        },
      ],
      uiLabel: "Nuit · site Delta",
      uiToolbar: "Nuit 22h–06h · Pool backup · Escalade",
      uiAlert: "03h — ronde manquante signalée",
      uiRows: [
        {
          left: "Vacation 22h–06h",
          right: "Titulaire confirmé",
          status: "ok",
        },
        {
          left: "Ronde 02h",
          right: "Point passé",
          status: "ok",
        },
        {
          left: "Incident 03h",
          right: "Main courante",
          status: "alert",
        },
        {
          left: "Relève 06h",
          right: "Pointage OK",
          status: "ok",
        },
      ],
      uiHint: "Organisation nuit — ≠ PC télésurveillance.",
      takeaway: "La nuit se pilote le jour — backups et rondes planifiés avant 22 h.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Préparer la nuit avant 18 h",
        body: "Backups nuit, rondes attachées, consignes urgence — pas d'impro à minuit.",
        bullets: [
          "Pool nuit",
          "Rondes critiques listées",
          "Contacts client visibles",
        ],
      },
      {
        h2: "Main courante nocturne",
        body: "Incident 03h saisi mobile → exploitation notifiée → client informé au format pro.",
      },
    ],
    faq: [
      {
        q: "Que doit voir l’exploitation à 2h du matin ?",
        a: "Quelle vacation est en alerte, qui est d’astreinte, quelles consignes d’escalade — sans reconstruire le contexte au téléphone.",
      },
      {
        q: "Lien avec vacation non pourvue ?",
        a: "Un trou de nuit est une vacation non pourvue critique. L’astreinte ajoute la couche escalade / relève.",
      },
      {
        q: "Main courante de nuit ?",
        a: "Oui : chaque incident nocturne doit pouvoir être relu le matin par le client ou le PC.",
      },
      {
        q: "Rondes de nuit sur le même site ?",
        a: "Complémentaire : page rondes pour le parcours, ici pour l’organisation de la nuit / astreinte.",
      },
      {
        q: "Puis-je piloter la nuit sur « gardiennage copropriété logiciel » ?",
        a: "Une semaine de nuits sur 2–3 sites, avec au moins un test d’escalade documenté.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Structurer mes nuits",
    ctaSecondaryLabel: "Voir vacation non pourvue",
    trustLeft: "Nuit · astreinte · escalade",
  },
  {
    id: "SEC-21",
    key: "pme-entreprises",
    path: "/securite/pme-entreprises",
    type: "audience",
    primaryKw: "sécurité entreprises PME logiciel prestataire",
    seoTitle: "Sécurité pour PME",
    seoDesc: "Sécurité entreprises PME : accès, présence, audit client. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Sécurité pour PME",
    h1Lead: "Sécurité pour PME",
    h1: "des sites pros, des vacations carrées",
    sub: "Sièges et locaux PME : respectez accès et horaires, prouvez la présence.",
    claimBefore: "Du besoin PME à la",
    claimHighlight: "couverture site",
    claimSub: "PME · sites entreprise",
    productStrip: "Sécurité · PME · accueil",
    empathyH2: "Une PME cliente veut un site tenu, pas un discours sécurité",
    empathyBody: "Poste d’accueil, rondes parking, horaires bureau : le besoin est simple, la preuve doit l’être aussi.",
    showcaseTitle: "Gardiennage PME clientes",
    showcaseSub: "Accueil, accès, preuves pour dirigeants exigeants.",
    showcaseBadgeLeft: {
      title: "Siège client",
      sub: "7h–19h",
    },
    showcaseBadgeRight: "Site PME couvert",
    proofH2: "Fiabilité visible pour le client pro",
    proofQuote: "Le DG PME n'attend pas le rapport mensuel pour virer un prestataire.",
    proofItems: [
      {
        title: "Accès horaires",
        text: "Vacations calées sur plages client.",
      },
      {
        title: "Audit interne",
        text: "Preuves prêtes visite surprise.",
      },
      {
        title: "Facture claire",
        text: "Heures pointées = ligne facture.",
      },
    ],
    vsTitle: "Prestataire « on verra » vs PME carrée",
    demo: {
      variant: "list",
      eyebrow: "Démo · pme entreprises",
      h2: "Audit surprise siège PME client",
      lead: "Visite QHSE client — preuves accueil semaine en cours.",
      scenario: "Siège PME : accès 7h–19h strict. Une absence non couverte = client pro qui juge immédiatement la fiabilité.",
      steps: [
        {
          label: "Contrat",
          detail: "Accès 7h–19h — vacation accueil staffée.",
        },
        {
          label: "Semaine",
          detail: "Pointages quotidiens sans trou.",
        },
        {
          label: "Audit",
          detail: "Export présence + main courante visiteurs.",
        },
        {
          label: "Facture",
          detail: "Heures alignées bon de commande PME.",
        },
      ],
      uiLabel: "Siège PME · accueil",
      uiToolbar: "PME · 1–2 postes · Facture simple",
      uiRows: [
        {
          left: "Siège PME client",
          right: "Accès 7h–19h",
          status: "ok",
        },
        {
          left: "Vacation accueil",
          right: "Couverture OK",
          status: "ok",
        },
        {
          left: "Visite audit",
          right: "Preuves prêtes",
          status: "ok",
        },
        {
          left: "Facture",
          right: "Heures pointées",
          status: "ok",
        },
      ],
      uiHint: "Audience PME — vs grands comptes.",
      takeaway: "Vous vendez de la fiabilité — PROGESTI la documente.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Posts accueil et accès PME",
        body: "Peu de vacations mais zéro marge : titulaire, backup, consignes visiteurs — fiche site claire.",
        bullets: [
          "Plages horaires client",
          "Procédure visiteur",
          "Contact responsable site",
        ],
      },
      {
        h2: "Renouvellement contrat PME",
        body: "Historique propre = renégociation sans sueur — export période en deux clics.",
      },
    ],
    faq: [
      {
        q: "On sécurise surtout des PME / TPE clientes : la page est-elle adaptée ?",
        a: "Oui : couverture claire, reporting simple, sans usine grands comptes. Les pages petites sociétés / gardiennage complètent.",
      },
      {
        q: "Différence avec grands comptes ?",
        a: "PME = simplicité et réactivité. Grands comptes = SLA, consolidations, multi-sites exigents.",
      },
      {
        q: "Que facturer à une PME ?",
        a: "Le réalisé pointé des vacations convenues — voir facturation gardiennage.",
      },
      {
        q: "Consignes légères vs sites sensibles ?",
        a: "Adaptez le brief. Un site PME n’a pas le même protocole qu’un site sensible — pages distinctes.",
      },
      {
        q: "L’essai couvre-t-il vraiment « gardiennage copropriété logiciel » ?",
        a: "2–3 sites PME sur 15 jours suffisent à valider le rythme.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Couvrir un site PME",
    ctaSecondaryLabel: "Voir petites sociétés",
    trustLeft: "PME · postes · reporting simple",
  },
  {
    id: "SEC-22",
    key: "grands-comptes",
    path: "/securite/grands-comptes",
    type: "audience",
    primaryKw: "logiciel sécurité grands comptes",
    seoTitle: "Grands comptes sécurité",
    seoDesc: "Logiciel sécurité grands comptes : KPI, exports, multi-sites. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Grands comptes sécurité",
    h1Lead: "Grands comptes sécurité",
    h1: "tenir le cadre contractuel sur tous les sites",
    sub: "Volume, exigences, audits : structurez vacations et preuves à l'échelle.",
    claimBefore: "Du reporting cadre à la",
    claimHighlight: "preuve consolidée",
    claimSub: "grands comptes · multi-sites exigents",
    productStrip: "Sécurité · grands comptes · KPI",
    empathyH2: "Le reporting cadre arrive le lundi — prêt ou bricolé",
    empathyBody: "SLA, multi-sites, preuves consolidées : un grand compte ne négocie pas votre organisation interne. Il lit le dossier.",
    showcaseTitle: "Grands comptes : échelle & SLA",
    showcaseSub: "KPI couverture, exports 90 j, contrôle écarts.",
    showcaseBadgeLeft: {
      title: "84 sites",
      sub: "Contrat cadre",
    },
    showcaseBadgeRight: "Reporting prêt",
    proofH2: "Tenir le cadre à l'échelle",
    proofQuote: "Export 90 jours en 24 h — ou le comité suivant est tendu.",
    proofItems: [
      {
        title: "KPI couverture",
        text: "98 %+ visible direction.",
      },
      {
        title: "Audit DO",
        text: "Export période longue.",
      },
      {
        title: "Écarts SLA",
        text: "Vacation manquante flaggée.",
      },
    ],
    vsTitle: "Reporting manuel vs KPI grands comptes",
    demo: {
      variant: "split",
      uiSplitLabels: ["Sites","Reporting"],
      eyebrow: "Démo · grands comptes",
      h2: "Comité trimestriel : export 90 j en une session",
      lead: "DO demande couverture + preuves — réponse avant 24 h.",
      scenario: "Comité trimestriel : 84 sites, KPI couverture et export 90 jours exigés sous 24 h.",
      steps: [
        {
          label: "Périmètre",
          detail: "84 sites contrat cadre Alpha.",
        },
        {
          label: "KPI",
          detail: "Couverture 98,2 % sur trimestre.",
        },
        {
          label: "Écart",
          detail: "1 vacation à analyser site #41.",
        },
        {
          label: "Envoi",
          detail: "Export DO + plan action écart.",
        },
      ],
      uiLabel: "Grands comptes · T1",
      uiToolbar: "Périmètre national · Reporting DO",
      uiRows: [
        {
          left: "Contrat cadre",
          right: "84 sites",
          status: "ok",
        },
        {
          left: "KPI couverture",
          right: "98,2 %",
          status: "ok",
        },
        {
          left: "Audit DO",
          right: "Export 90 j",
          status: "ok",
        },
        {
          left: "Écart SLA",
          right: "1 vacation à analyser",
          status: "alert",
        },
      ],
      uiHint: "Sans promesse SLA non maîtrisée par le logiciel seul.",
      takeaway: "L'échelle se gère par process — PROGESTI porte la data vacations.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Standardiser sans uniformiser bêtement",
        body: "Modèles vacations par typologie site — personnalisation consignes locale.",
        bullets: [
          "KPI direction",
          "Exports longue période",
          "Escalade écarts SLA",
        ],
      },
      {
        h2: "Relation avec le portail client",
        body: "Export PROGESTI → votre mise en forme DO — pas de connecteur magique garanti.",
      },
    ],
    faq: [
      {
        q: "Que consolider pour un comité de suivi grand compte ?",
        a: "Couverture des postes, incidents, écarts, preuves de ronde si exigées — sur la période, multi-sites.",
      },
      {
        q: "Lien contrats cadres ?",
        a: "Le grand compte impose souvent un cadre. La page contrats cadres traite l’exécution / renew ; ici le reporting exigé.",
      },
      {
        q: "PC sécurité obligatoire ?",
        a: "Pas toujours, mais fréquent. La page PC couvre la supervision temps réel.",
      },
      {
        q: "Comment éviter le reporting « chantier Excel » la veille ?",
        a: "Si les preuves vivent au fil de l’eau, le lundi est une extraction. Sinon c’est une nuit blanche.",
      },
      {
        q: "Pilote grand compte ?",
        a: "Un lot de sites du compte (pas tout le contrat), un cycle de reporting complet.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Piloter un grand compte",
    ctaSecondaryLabel: "Voir contrats cadres",
    trustLeft: "Grands comptes · SLA · preuves",
  },
  {
    id: "SEC-23",
    key: "contrats-cadres",
    path: "/securite/contrats-cadres",
    type: "process",
    primaryKw: "contrat cadre gardiennage suivi",
    seoTitle: "Contrats cadres",
    seoDesc: "Contrat cadre gardiennage : exécution, preuves, renouvellement. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Contrats cadres",
    h1Lead: "Contrats cadres",
    h1: "l'exécution fait le renouvellement",
    sub: "Planifiez les vacations dues, prouvez-les, facturez juste — tout le long du contrat.",
    claimBefore: "Du contrat cadre à la",
    claimHighlight: "exécution tracée",
    claimSub: "contrats cadres · exécution & renew",
    productStrip: "Sécurité · contrat cadre · volumes",
    empathyH2: "Un cadre sans exécution tracée, c’est un renew fragile",
    empathyBody: "Volumes, sites, preuves, écarts : le renew se joue sur l’historique d’exécution, pas sur le PDF signé il y a deux ans.",
    showcaseTitle: "Contrat cadre : prévu vs réalisé",
    showcaseSub: "Volumes, preuves, facturation alignée.",
    showcaseBadgeLeft: {
      title: "1200 h/mois",
      sub: "Cadre",
    },
    showcaseBadgeRight: "Exécution visible",
    proofH2: "L'exécution fait le renouvellement",
    proofQuote: "1188 h pointées vs 1200 h cadre — écart à expliquer avant signature.",
    proofItems: [
      {
        title: "Volume cadre",
        text: "Heures contractuelles visibles.",
      },
      {
        title: "Réalisé",
        text: "Pointages consolidés mensuels.",
      },
      {
        title: "Preuve renouvellement",
        text: "Historique 12 mois joint.",
      },
    ],
    vsTitle: "Feeling commercial vs exécution cadre chiffrée",
    demo: {
      variant: "list",
      eyebrow: "Démo · contrats cadres",
      h2: "Préparer le renouvellement cadre Alpha",
      lead: "Mars : 1188 h vs 1200 h — analyse avant comité.",
      scenario: "Renouvellement contrat cadre : prouver exécution volumes + preuves sur 12 mois — sinon marge perdue.",
      steps: [
        {
          label: "Cadre",
          detail: "1200 h/mois réparties 84 sites.",
        },
        {
          label: "Réalisé",
          detail: "1188 h pointées validées.",
        },
        {
          label: "Analyse",
          detail: "-12 h site #7 arrêt client.",
        },
        {
          label: "Dossier",
          detail: "Historique + factures → renouvellement.",
        },
      ],
      uiLabel: "Contrat cadre · mars",
      uiToolbar: "Cadre annuel · Réalisé mois · Écart",
      uiAlert: "Écart volume visible avant facture",
      uiRows: [
        {
          left: "Volume contractuel",
          right: "1200 h/mois",
          status: "ok",
        },
        {
          left: "Réalisé pointé",
          right: "1188 h",
          status: "alert",
        },
        {
          left: "Preuve renouvellement",
          right: "Historique joint",
          status: "ok",
        },
        {
          left: "Facturation",
          right: "Alignée cadre",
          status: "ok",
        },
      ],
      uiHint: "suivi d’exploitation exécution — pas rédaction juridique.",
      takeaway: "Vous renouvelez avec des chiffres — pas avec des promesses.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Suivre le cadre mois par mois",
        body: "Alertes sous-consommation / dépassement — agir en cours de mois, pas au renouvellement.",
        bullets: [
          "Volumes par site",
          "Lien facturation",
          "Export 12 mois",
        ],
      },
      {
        h2: "Cadre juridique vs exploitation",
        body: "PROGESTI suit l'exécution — le juridique rédige le contrat.",
      },
    ],
    faq: [
      {
        q: "Que mettre dans le dossier renew six semaines avant échéance ?",
        a: "Exécution réelle vs prévu, incidents majeurs traités, preuves demandées honorées, écarts expliqués. Pas un PowerPoint décoratif.",
      },
      {
        q: "Différence avec facturation ?",
        a: "Facturation = cash du mois. Cadre = vie du contrat et renew. Les deux s’alimentent du réalisé.",
      },
      {
        q: "Plusieurs lots / sites dans le cadre ?",
        a: "Oui — traçabilité par site / lot pour éviter les zones d’ombre au renew.",
      },
      {
        q: "Qui côté client lit ça ?",
        a: "Achats / facility / sûreté selon l’organisation. Le dossier doit parler leur langue (faits, dates, preuves).",
      },
      {
        q: "Par où commencer pour « gardiennage copropriété logiciel » ?",
        a: "Le contrat qui renew dans les 90 jours. Reconstituez un mois type proprement — ça fixe le standard.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Suivre un contrat cadre",
    ctaSecondaryLabel: "Voir facturation",
    trustLeft: "Cadre · exécution · renew",
  },
  {
    id: "SEC-24",
    key: "petites-societes",
    path: "/securite/petites-societes",
    type: "audience",
    primaryKw: "logiciel gardiennage TPE",
    seoTitle: "Petites sociétés de sécurité",
    seoDesc: "Logiciel gardiennage TPE : planning, pointage, facture simple. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Petites sociétés de sécurité",
    h1Lead: "Petites sociétés de sécurité",
    h1: "structurer sans se noyer",
    sub: "Planning, pointage, factures — l'essentiel pour professionnaliser une petite équipe.",
    claimBefore: "De la petite structure à la",
    claimHighlight: "semaine tenue",
    claimSub: "TPE / petites sociétés de sécurité",
    productStrip: "Sécurité · TPE · tout inclus",
    empathyH2: "Petite structure : moins de monde, zéro marge pour le flou",
    empathyBody: "8–25 agents, le gérant fait encore le planning : Excel le soir, WhatsApp le week-end. L’outil doit alléger, pas créer une usine.",
    showcaseTitle: "TPE sécurité : l'essentiel tout inclus",
    showcaseSub: "Prise en main < 1 semaine — tarif public clair.",
    showcaseBadgeLeft: {
      title: "8 agents",
      sub: "1 gérant",
    },
    showcaseBadgeRight: "Simple & tenu",
    proofH2: "Professionnaliser sans embaucher",
    proofQuote: "29,99 € HT/mois — moins qu'une heure perdue en litige client.",
    proofItems: [
      {
        title: "Prise en main",
        text: "Sites + vacations en jours, pas mois.",
      },
      {
        title: "Tout inclus",
        text: "Pas 12 modules payants.",
      },
      {
        title: "Mobile agents",
        text: "Pointage simple dès semaine 1.",
      },
    ],
    vsTitle: "Bricolage TPE vs stack pro accessible",
    demo: {
      variant: "checklist",
      eyebrow: "Démo · petites societes",
      h2: "Semaine 1 : 8 agents opérationnels",
      lead: "Montage 3 sites, planning semaine, pointages, 1 facture brouillon.",
      scenario: "8 agents, pas d'assistante : il faut planning + facture simple, tout inclus, sans usine à gaz.",
      steps: [
        {
          label: "J1",
          detail: "3 fiches sites + agents.",
        },
        {
          label: "J2",
          detail: "Planning semaine publié.",
        },
        {
          label: "J4",
          detail: "Premiers pointages OK.",
        },
        {
          label: "J7",
          detail: "Brouillon facture client A.",
        },
      ],
      uiLabel: "TPE · onboarding",
      uiToolbar: "TPE 5–15 agents · Léger · Prix public",
      uiRows: [
        {
          left: "Effectif",
          right: "8 agents",
          status: "ok",
        },
        {
          left: "Prise en main",
          right: "< 1 semaine",
          status: "ok",
        },
        {
          left: "Prix",
          right: "29,99 € HT/mois",
          status: "ok",
        },
        {
          left: "Modules",
          right: "Tout inclus",
          status: "ok",
        },
      ],
      uiHint: "Positionnement TPE — complementary grands comptes.",
      takeaway: "Vous avez l'air plus grand que 8 agents — sans doubler la charge admin.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Ce qu'une TPE utilise vraiment",
        body: "Planning, pointage, facture légère, consignes — pas 50 écrans ERP.",
        bullets: [
          "Tarif public",
          "Support FR",
          "Essai 15 j sans CB",
        ],
      },
      {
        h2: "Grandir ensuite",
        body: "Multi-sites et contrats cadres : même outil — pas de migration forcée.",
      },
    ],
    faq: [
      {
        q: "On est une petite société : ce n’est pas trop lourd ?",
        a: "L’angle est simplicité : vacations, backups, pointage, facture. Pas un module forest pour 200 sites le jour 1.",
      },
      {
        q: "Le tarif est-il accessible pour « gardiennage copropriété logiciel » ?",
        a: "Dès 29,99 € HT/mois, essai 15 jours. L’enjeu est le temps gérant récupéré, pas la « digitalisation ». ",
      },
      {
        q: "Le gérant peut-il tout tenir seul au début ?",
        a: "Oui : publier le planning, suivre les trous, valider les pointages. Déléguez ensuite.",
      },
      {
        q: "Différence avec le pilier ?",
        a: "Même produit ; ici le discours et les exemples sont calibrés petite structure.",
      },
      {
        q: "Par quel pilote démarrer pour « gardiennage copropriété logiciel » ?",
        a: "Tous vos postes sur 15 jours — à cette taille, le pilote peut être global.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Essayer en petite structure",
    ctaSecondaryLabel: "Voir tarifs",
    trustLeft: "TPE sécurité · simplicité · prix clair",
  },
  {
    id: "SEC-25",
    key: "controle-acces-consignes",
    path: "/securite/controle-acces-consignes",
    type: "process",
    primaryKw: "consignes accès agents sécurité",
    seoTitle: "Consignes & accès",
    seoDesc: "Consignes accès agents : fiche site mobile à jour. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Consignes & accès",
    h1Lead: "Consignes & accès",
    h1: "l'info au bon agent, au bon moment",
    sub: "Codes, contacts, consignes : fiche site visible mobile — pas un carnet perdu.",
    claimBefore: "Des consignes lues au",
    claimHighlight: "contrôle d’accès",
    claimSub: "consignes · accès · brief mobile",
    productStrip: "Sécurité · consignes · accès",
    empathyH2: "Si le backup n’a pas lu les consignes, l’accès est un risque",
    empathyBody: "Listes, horaires, exceptions, zones interdites : le contrôle d’accès commence par un brief lisible, pas par un classeur au PC.",
    showcaseTitle: "Consignes accès au bon agent",
    showcaseSub: "Fiche site mobile — pas de hardware.",
    showcaseBadgeLeft: {
      title: "Portail B",
      sub: "Code v2",
    },
    showcaseBadgeRight: "Consignes OK",
    proofH2: "Information, pas matériel",
    proofQuote: "Remplaçant sans consigne = incident accès garanti.",
    proofItems: [
      {
        title: "Version consignes",
        text: "Màj datée visible avant poste.",
      },
      {
        title: "Lecture tracée",
        text: "Agent a ouvert fiche — preuve orga.",
      },
      {
        title: "Incident",
        text: "Mauvais code → main courante.",
      },
    ],
    vsTitle: "Carnet codes vs fiche site PROGESTI",
    demo: {
      variant: "checklist",
      eyebrow: "Démo · controle acces consignes",
      h2: "Remplaçant sur portail B — consignes v2",
      lead: "Agent vacation lit code à jour — incident évité.",
      scenario: "Agent remplaçant sur site : mauvais code portail — 20 min perdus. Consignes doivent être sur mobile, à jour.",
      steps: [
        {
          label: "Fiche",
          detail: "Code portail B v2 publié hier.",
        },
        {
          label: "Brief",
          detail: "Agent ouvre fiche 10 min avant poste.",
        },
        {
          label: "Accès",
          detail: "Entrée OK — pointage début.",
        },
        {
          label: "Si erreur",
          detail: "Incident saisi + contact client.",
        },
      ],
      uiLabel: "Consignes · portail B",
      uiToolbar: "Fiche site · Consignes · Lecture prise de poste",
      uiRows: [
        {
          left: "Code portail B",
          right: "Fiche site à jour",
          status: "ok",
        },
        {
          left: "Agent vacation",
          right: "Consignes lues",
          status: "ok",
        },
        {
          left: "Mauvais code saisi",
          right: "Incident noté",
          status: "alert",
        },
        {
          left: "Pas de hardware",
          right: "Org. infos seulement",
          status: "ok",
        },
      ],
      uiHint: "Infos/consignes — pas hardware contrôle d’accès.",
      takeaway: "Organisation des infos d'accès — le hardware reste chez le client.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Périmètre clair : orga, pas contrôle physique",
        body: "Codes, procédures, contacts — pas de promesse lecteur badge intégré.",
        bullets: [
          "Fiche site versionnée",
          "Mobile agent",
          "Lien main courante",
        ],
      },
      {
        h2: "Màj consignes sans email perdu",
        body: "Publication fiche → agents affectés voient la version — fin du « je ne l'avais pas reçu ».",
      },
    ],
    faq: [
      {
        q: "Où l’agent voit-il les consignes d’accès juste avant la vacation ?",
        a: "Sur mobile, rattachées au poste/site, au moment où la vacation lui est affectée.",
      },
      {
        q: "Que faire d’une anomalie d’accès (personne non prévue) ?",
        a: "Main courante + éventuelle escalation. Le fait doit exister pour le client le lendemain.",
      },
      {
        q: "Consignes différentes jour / nuit ?",
        a: "Oui — deux briefs. Évitez le protocole unique qui se trompe de créneau.",
      },
      {
        q: "Quel lien avec la sûreté des sites pour « gardiennage copropriété logiciel » ?",
        a: "Complémentaire : sûreté = cadre présence ; ici = consignes / accès actionnables.",
      },
      {
        q: "Mise à jour fréquente des listes ?",
        a: "Le brief doit pouvoir changer sans renvoyer un mail à 40 agents. C’est le point faible du PDF.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Poser des consignes site",
    ctaSecondaryLabel: "Voir sûreté sites",
    trustLeft: "Consignes · accès · brief agent",
  },
  {
    id: "SEC-26",
    key: "main-courante",
    path: "/securite/main-courante",
    type: "process",
    primaryKw: "main courante sécurité logiciel",
    seoTitle: "Main courante",
    seoDesc: "Main courante sécurité logiciel : incidents horodatés, exports. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Main courante",
    h1Lead: "Main courante",
    h1: "chaque incident tracé, pas perdu dans un groupe WhatsApp",
    sub: "Registre horodaté lié aux vacations et sites — exploitation et client informés.",
    claimBefore: "De l’incident saisi au",
    claimHighlight: "rapport client",
    claimSub: "main courante · incidents · transmission",
    productStrip: "Sécurité · main courante · incidents",
    empathyH2: "Un incident non saisi est un incident contestable",
    empathyBody: "Tag, intrusion, malaise, litige : la main courante transforme le terrain en rapport client — horodaté, rattaché au site et à la vacation.",
    showcaseTitle: "Registre incidents exploitable",
    showcaseSub: "Saisie mobile → exploitation → client.",
    showcaseBadgeLeft: {
      title: "21h40",
      sub: "Incident",
    },
    showcaseBadgeRight: "Incident tracé",
    proofH2: "Chaque incident compte",
    proofQuote: "Effraction tentée : horodatage, type, actions — pas emoji dans un groupe.",
    proofItems: [
      {
        title: "Saisie terrain",
        text: "Agent mobile sur vacation en cours.",
      },
      {
        title: "Typologie",
        text: "Intrusion, accès, conflit — filtres export.",
      },
      {
        title: "Compte-rendu client",
        text: "Horodaté, lié site.",
      },
    ],
    vsTitle: "WhatsApp incidents vs main courante PROGESTI",
    demo: {
      variant: "timeline",
      eyebrow: "Démo · main courante",
      h2: "Effraction 21h40 : de la saisie au CR client",
      lead: "Mobile agent → notification exploitation → export client.",
      scenario: "Tentative effraction 21h40 : saisie mobile, notification exploitation, compte-rendu client horodaté — pas 40 messages WhatsApp.",
      steps: [
        {
          label: "Saisie",
          detail: "Agent en poste — type intrusion tentée.",
        },
        {
          label: "Notify",
          detail: "Exploitation alertée 21h42.",
        },
        {
          label: "Actions",
          detail: "Police + contact client notés.",
        },
        {
          label: "CR",
          detail: "Compte-rendu horodaté envoyé 22h10.",
        },
      ],
      uiLabel: "Main courante · nuit",
      uiToolbar: "Main courante · Site · Vacation liée",
      uiAlert: "02:14 — incident noté · escalade en cours",
      uiRows: [
        {
          left: "Incident 21h40",
          right: "Saisie agent mobile",
          status: "ok",
        },
        {
          left: "Type",
          right: "Intrusion tentée",
          status: "alert",
        },
        {
          left: "Exploitation",
          right: "Notifiée",
          status: "ok",
        },
        {
          left: "Client",
          right: "Compte-rendu horodaté",
          status: "ok",
        },
      ],
      uiHint: "Historique — pas substitut obligations légales.",
      takeaway: "Registre pro — pas archive chat illisible.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Lier incident, site, vacation",
        body: "Chaque entrée rattachée au contexte — qui était en poste, où, quand.",
        bullets: [
          "Types configurables",
          "Pièces note texte",
          "Export période",
        ],
      },
      {
        h2: "PC sécurité et supervision",
        body: "Flux visible exploitation / PC — voir page PC sécurité (humain, pas vidéo).",
      },
    ],
    faq: [
      {
        q: "Qui saisit, qui valide, qui envoie au client ?",
        a: "L’agent saisit, l’exploitation peut qualifier, le rapport part selon vos règles client. L’important : la chronologie existe.",
      },
      {
        q: "Différence avec preuves d’intervention ?",
        a: "Main courante = journal d’événements. Preuves = dossier complet (présence + rondes + incidents) pour audit/litige.",
      },
      {
        q: "Photos / pièces jointes ?",
        a: "Si votre process le prévoit, elles doivent rester collées à l’incident — pas perdues dans la galerie du téléphone.",
      },
      {
        q: "Astreinte nuit et main courante ?",
        a: "Les incidents 2h du matin doivent être relisables à 8h sans appeler l’agent chez lui.",
      },
      {
        q: "Par quel pilote démarrer pour « gardiennage copropriété logiciel » ?",
        a: "Un site, obligation de saisir tout incident une semaine, revue exploitation chaque matin.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Preuves", "Historiques & audits.", "/securite/preuves-intervention"),
    link("PC sécurité", "Supervision exploitation.", "/securite/pc-securite"),
    ],
    ctaPrimaryLabel: "Tester une main courante",
    ctaSecondaryLabel: "Voir preuves",
    trustLeft: "Main courante · incidents · reporting",
  },
  {
    id: "SEC-27",
    key: "ssiap",
    path: "/securite/ssiap",
    type: "service",
    primaryKw: "organisation postes SSIAP logiciel",
    seoTitle: "Organisation postes SSIAP",
    seoDesc: "Organisation postes SSIAP : vacations, backups, preuves (pas formation). Essai 15 j sans CB.",
    crumbLabel: "Organisation postes SSIAP",
    h1Lead: "Organisation postes SSIAP",
    h1: "planifier présence et consignes — pas remplacer la formation",
    sub: "Vacations SSIAP, backups, preuves de présence. Info organisationnelle, pas conseil réglementaire.",
    claimBefore: "Du poste SSIAP à la",
    claimHighlight: "vacation conforme",
    claimSub: "SSiap · compétences & affectation",
    productStrip: "Sécurité · SSIAP · orga",
    empathyH2: "Un poste SSIAP mal affecté, ce n’est pas « un détail RH »",
    empathyBody: "Compétence et poste doivent coller. L’outil aide à organiser l’affectation et la traçabilité — sans se substituer à vos obligations.",
    showcaseTitle: "SSIAP : orga postes & présence",
    showcaseSub: "Planning, consignes site — hors formation.",
    showcaseBadgeLeft: {
      title: "Poste SSIAP 1",
      sub: "Tertiaire",
    },
    showcaseBadgeRight: "Compétence OK",
    proofH2: "Organisationnel, pas réglementaire",
    proofQuote: "Former au SSIAP ≠ planifier qui tient le poste mardi nuit.",
    proofItems: [
      {
        title: "Vacations poste",
        text: "SSIAP staffé vs compétence agent.",
      },
      {
        title: "Consignes site",
        text: "Procédures évacuation accessibles — contenu client.",
      },
      {
        title: "Preuve présence",
        text: "Pointage poste pour DO.",
      },
    ],
    vsTitle: "Confusion formation vs orga SSIAP",
    demo: {
      variant: "list",
      eyebrow: "Démo · ssiap",
      h2: "Staffer poste SSIAP 1 tertiaire — bon profil",
      lead: "Vacation couverte agent SSIAP 1 — consignes évacuation lues.",
      scenario: "Organisation postes SSIAP 1 sur site tertiaire : vacations, backups, preuves présence — sans prétendre former ou certifier.",
      steps: [
        {
          label: "Poste",
          detail: "Vacation SSIAP 1 immeuble tertiaire.",
        },
        {
          label: "Profil",
          detail: "Agent filtré SSIAP 1 — pas APS seul.",
        },
        {
          label: "Consignes",
          detail: "Procédure évacuation fiche site.",
        },
        {
          label: "Preuve",
          detail: "Pointage poste + historique DO.",
        },
      ],
      uiLabel: "SSIAP · orga postes",
      uiToolbar: "Postes SSIAP · Vacation · Relève · Consignes",
      uiRows: [
        {
          left: "Poste SSIAP 1",
          right: "Vacation couverte",
          status: "ok",
        },
        {
          left: "Organisation",
          right: "Planning + consignes",
          status: "ok",
        },
        {
          left: "Formation",
          right: "Hors scope PROGESTI",
          status: "ok",
        },
        {
          left: "Preuve présence",
          right: "Pointage poste",
          status: "ok",
        },
      ],
      uiHint: "Orga postes — pas formation / habilitation SSIAP.",
      takeaway: "Clarté : PROGESTI orga & trace — formation reste votre filière agréée.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Ce que PROGESTI fait sur SSIAP",
        body: "Affectation compétence, vacations, pointages, consignes site fournies par le client.",
        bullets: [
          "Filtre SSIAP affectation",
          "Backups listés",
          "Export présence",
        ],
      },
      {
        h2: "Ce que PROGESTI ne fait pas",
        body: "Pas formation SSIAP, pas avis réglementaire ERP, pas remplacement service sécurité incendie.",
      },
    ],
    faq: [
      {
        q: "PROGESTI délivre-t-il des habilitations SSIAP ?",
        a: "Non. Il aide à affecter et tracer les postes selon les compétences que VOUS enregistrez. Pas de promesse réglementaire.",
      },
      {
        q: "Comment éviter d’envoyer un profil inadapté ?",
        a: "Exigences sur le poste + alerte si l’agent ne matche pas. Correction avant prise de vacation.",
      },
      {
        q: "Quel lien avec la page agents pour « gardiennage copropriété logiciel » ?",
        a: "Les compétences vivent côté agents ; SSIAP insiste sur l’adéquation poste/profil.",
      },
      {
        q: "Reporting client sur ces postes ?",
        a: "Présence + incidents + preuves comme ailleurs — avec la vigilance compétence en plus côté exploitation.",
      },
      {
        q: "Par où commencer pour « gardiennage copropriété logiciel » ?",
        a: "Inventoriez vos postes à exigence particulière, rattachez les profils, testez une semaine d’affectations.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning", "Vacations postes.", "/securite/planning-agents"),
    link("Pointage", "Preuve présence.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Affecter un profil SSIAP",
    ctaSecondaryLabel: "Voir agents sécurité",
    trustLeft: "Compétences · postes · traçabilité",
  },
  {
    id: "SEC-28",
    key: "sites-sensibles",
    path: "/securite/sites-sensibles",
    type: "audience",
    primaryKw: "gardiennage sites sensibles",
    seoTitle: "Sites à enjeux opérationnels",
    seoDesc: "Gardiennage sites sensibles : consignes strictes, traçabilité ops. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Sites à enjeux opérationnels",
    h1Lead: "Sites à enjeux opérationnels",
    h1: "procédures tenues, preuves sans promesses invraisemblables",
    sub: "Sites exigeants côté consignes et traçabilité — sans discours défense / militaire.",
    claimBefore: "Du brief renforcé à la",
    claimHighlight: "présence exigée",
    claimSub: "sites sensibles · consignes renforcées",
    productStrip: "Sécurité · sites sensibles · ops",
    empathyH2: "Brief renforcé, preuves renforcées — le flou ne passe pas",
    empathyBody: "Accès restreints, consignes dures, reporting exigeant : un site sensible se pilote avec une discipline de preuve, pas avec le même standard qu’un parking banal.",
    showcaseTitle: "Sites sensibles côté exploitation",
    showcaseSub: "Procédures, traces, consignes validées.",
    showcaseBadgeLeft: {
      title: "Site enjeu",
      sub: "Procédures v4",
    },
    showcaseBadgeRight: "Brief renforcé",
    proofH2: "Ops réalistes, claims sobres",
    proofQuote: "Traçabilité pro — pas « solution anti-terrorisme » marketing.",
    proofItems: [
      {
        title: "Procédures",
        text: "Versions validées, lecture agent.",
      },
      {
        title: "Traçabilité",
        text: "Historique complet activité.",
      },
      {
        title: "Périmètre honnête",
        text: "Gardiennage privé — pas défense.",
      },
    ],
    vsTitle: "Marketing défense vs ops gardiennage",
    demo: {
      variant: "checklist",
      eyebrow: "Démo · sites sensibles",
      h2: "Audit DO site à procédures renforcées",
      lead: "Consignes v4 + historique activité 30 j — sans claim défense.",
      scenario: "Site à procédures renforcées (sans discours défense) : traçabilité consignes + activité pour le donneur d'ordre exigeant.",
      steps: [
        {
          label: "Consignes",
          detail: "Version validée publiée — lecture tracée.",
        },
        {
          label: "Vacations",
          detail: "Postes couverts profils filtrés.",
        },
        {
          label: "Activité",
          detail: "Pointages + main courante 30 j.",
        },
        {
          label: "Audit",
          detail: "Export DO — périmètre ops gardiennage.",
        },
      ],
      uiLabel: "Site sensible · ops",
      uiToolbar: "Sites à enjeux · Brief obligatoire · Double check",
      uiRows: [
        {
          left: "Site à enjeu",
          right: "Procédures renforcées",
          status: "ok",
        },
        {
          left: "Consignes",
          right: "Version validée",
          status: "ok",
        },
        {
          left: "Traçabilité",
          right: "Historique complet",
          status: "ok",
        },
        {
          left: "Pas de promesse défense",
          right: "Ops gardiennage only",
          status: "ok",
        },
      ],
      uiHint: "Ops — pas claim secret défense.",
      takeaway: "Sérieux opérationnel — pas sur-promesse sectorielle.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Procédures et consignes renforcées",
        body: "Contenu fourni par le client — PROGESTI distribue, trace lecture, historise activité.",
        bullets: [
          "Versioning",
          "Agents affectés seulement",
          "Export audit",
        ],
      },
      {
        h2: "Bornes du discours",
        body: "Pas site défense / militaire promis — gardiennage privé classique à exigence haute.",
      },
    ],
    faq: [
      {
        q: "Qu’est-ce qui change vs un site standard ?",
        a: "Brief plus strict, souvent plus de preuves (rondes, main courante), backups plus cadrés, moins de place à l’improvisation.",
      },
      {
        q: "Peut-on promettre une conformité magique ?",
        a: "Non. On structure l’exécution et la preuve. Vos obligations restent les vôtres.",
      },
      {
        q: "Lien sites industriels / SSIAP ?",
        a: "Souvent voisins. Choisissez la page selon l’intent dominant (industriel nuit, compétence, sensibilité).",
      },
      {
        q: "Comment gérer l’escalade d’incident pour « gardiennage copropriété logiciel » ?",
        a: "Main courante + astreinte si besoin. Le chemin d’escalade doit être dans les consignes.",
      },
      {
        q: "Par quel pilote démarrer pour « gardiennage copropriété logiciel » ?",
        a: "Le site le plus exigeant de votre portefeuille — si ça tient là, le modèle est bon.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Couvrir un site sensible",
    ctaSecondaryLabel: "Voir preuves",
    trustLeft: "Sensibles · brief · preuves renforcées",
  },
  {
    id: "SEC-29",
    key: "btp-chantiers",
    path: "/securite/btp-chantiers",
    type: "audience",
    primaryKw: "sécurité chantier BTP gardiennage",
    seoTitle: "Gardiennage chantiers BTP",
    seoDesc: "Sécurité chantier BTP : portails, renforts, preuves MOA. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Gardiennage chantiers BTP",
    h1Lead: "Gardiennage chantiers BTP",
    h1: "portails, horaires de travaux, vacations adaptées",
    sub: "Chantiers : accès fluctuants, renforts week-end, preuves pour MOA.",
    claimBefore: "Du chantier BTP à la",
    claimHighlight: "vacation créneau",
    claimSub: "BTP · gardiennage chantier",
    productStrip: "Sécurité · BTP · chantier",
    empathyH2: "Un chantier BTP change d’accès chaque semaine — le planning doit suivre",
    empathyBody: "Créneaux, engins, zones : le gardiennage chantier n’est pas un poste fixe annuel. Si l’agent arrive sur un accès fermé, c’est votre organisation qui a glissé.",
    showcaseTitle: "Gardiennage chantiers BTP",
    showcaseSub: "Portails, badges visiteurs, renforts week-end.",
    showcaseBadgeLeft: {
      title: "Lyon Est",
      sub: "Chantier actif",
    },
    showcaseBadgeRight: "Créneau tenu",
    proofH2: "Preuves pour la MOA",
    proofQuote: "Réception chantier : qui tenait le portail samedi ?",
    proofItems: [
      {
        title: "Horaires travaux",
        text: "Vacations alignées phasage.",
      },
      {
        title: "Visiteurs",
        text: "Consignes badges — orga, pas hardware.",
      },
      {
        title: "Week-end",
        text: "Renforts tracés pointage.",
      },
    ],
    vsTitle: "Gardiennage tertiaire vs process chantier",
    demo: {
      variant: "board",
      eyebrow: "Démo · btp chantiers",
      h2: "Week-end chantier Lyon Est — renfort portail",
      lead: "Portail 6h, badges visiteurs, pointages pour MOA.",
      scenario: "Chantier : portail ouvert 6h, visiteurs badges, renfort week-end. Preuves pour MOA avant réception.",
      steps: [
        {
          label: "Phase",
          detail: "Vacations alignées planning travaux.",
        },
        {
          label: "Samedi",
          detail: "Renfort portail affecté 6h–14h.",
        },
        {
          label: "Visiteurs",
          detail: "Consignes badges — main courante si refus.",
        },
        {
          label: "MOA",
          detail: "Export pointages semaine réception.",
        },
      ],
      uiLabel: "Chantier · week-end",
      uiToolbar: "Chantier · Horaires glissants · Accès engins",
      uiRows: [
        {
          left: "Chantier Lyon Est",
          right: "Portail ouvert 6h",
          status: "ok",
        },
        {
          left: "Contrôle accès",
          right: "Badges visiteurs",
          status: "ok",
        },
        {
          left: "Vacation week-end",
          right: "Renfort BTP",
          status: "alert",
        },
        {
          left: "Preuve",
          right: "Pointages chantier",
          status: "ok",
        },
      ],
      uiHint: "Audience BTP — ≠ industriel permanent.",
      takeaway: "Chantier = temporalité courte — preuves et factu doivent suivre.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Vacations liées au phasage",
        body: "Montée / fondation / finition : adapter posts et horaires — clôturer chantier proprement.",
        bullets: [
          "Site temporaire",
          "Renforts week-end",
          "Export MOA",
        ],
      },
      {
        h2: "Badges et accès",
        body: "Organisation consignes visiteurs — lecteurs badges restent MOA / entreprise générale.",
      },
    ],
    faq: [
      {
        q: "Comment gérer des créneaux chantier qui bougent ?",
        a: "Vacations recalées sur le planning réel du chantier, consignes d’accès à jour, pointage pour facturer le réalisé.",
      },
      {
        q: "Différence avec événementiel ?",
        a: "BTP = durée chantier + accès engins/zones. Event = pic court + renforts. Process proches, intents SEO distincts.",
      },
      {
        q: "Main courante sur chantier ?",
        a: "Oui — vols de matériel, accès non autorisés, incidents — utiles pour le conducteur de travaux.",
      },
      {
        q: "Multi-chantiers simultanés ?",
        a: "Vue portefeuille + priorités. Voir aussi multi-sites.",
      },
      {
        q: "Par quel pilote démarrer pour « gardiennage copropriété logiciel » ?",
        a: "Un chantier actif sur 2 semaines, y compris un changement d’accès documenté.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Couverture vacations.", "/securite/planning-agents"),
    link("Pointage", "Présence réelle.", "/securite/pointage-vacations"),
    ],
    ctaPrimaryLabel: "Planifier un chantier",
    ctaSecondaryLabel: "Voir planning agents",
    trustLeft: "BTP · créneaux · accès chantier",
  },
  {
    id: "SEC-30",
    key: "pc-securite",
    path: "/securite/pc-securite",
    type: "process",
    primaryKw: "poste central sécurité exploitation",
    seoTitle: "Poste central (PC sécurité)",
    seoDesc: "PC sécurité exploitation : coordination agents, main courante. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Poste central (PC sécurité)",
    h1Lead: "Poste central (PC sécurité)",
    h1: "superviser l'exploitation, pas remplacer la vidéo",
    sub: "Coordination agents, main courante, consignes — exploitation humaine du site.",
    claimBefore: "Du PC sécurité à la",
    claimHighlight: "vue temps réel",
    claimSub: "PC · dispatch · supervision",
    productStrip: "Sécurité · PC · supervision ops",
    empathyH2: "Le PC qui « demande sur le groupe » n’est pas un PC",
    empathyBody: "Dispatch, vue sites, escalades : le PC a besoin d’une vérité temps réel des vacations et alertes — pas d’un collage de captures d’écran.",
    showcaseTitle: "Poste central · exploitation humaine",
    showcaseSub: "Agents, main courante, consignes — temps réel.",
    showcaseBadgeLeft: {
      title: "PC Delta",
      sub: "2 agents + sup.",
    },
    showcaseBadgeRight: "PC synchronisé",
    proofH2: "Superviser sans usurper la vidéo",
    proofQuote: "Le PC coordonne les agents — la vidéo reste autre système.",
    proofItems: [
      {
        title: "Vue agents",
        text: "Postes, vacations, statuts.",
      },
      {
        title: "Flux incidents",
        text: "Main courante temps réel.",
      },
      {
        title: "Consignes",
        text: "Procédures à jour partagées.",
      },
    ],
    vsTitle: "VMS vidéo vs PC exploitation PROGESTI",
    demo: {
      variant: "board",
      eyebrow: "Démo · pc securite",
      h2: "Shift PC site Delta — coordination sans VMS",
      lead: "2 agents + superviseur : main courante live, consignes, vacations.",
      scenario: "PC site : coordination agents, flux main courante, consignes — exploitation humaine, pas écran télésurveillance.",
      steps: [
        {
          label: "Shift",
          detail: "Vacations jour visibles PC.",
        },
        {
          label: "Incident",
          detail: "Main courante remontée 14h22.",
        },
        {
          label: "Consigne",
          detail: "Procédure v3 envoyée agents mobile.",
        },
        {
          label: "Clôture",
          detail: "Synthèse shift exportée exploitation.",
        },
      ],
      uiLabel: "PC sécurité · Delta",
      uiToolbar: "PC exploitation · Live postes · Alertes",
      uiAlert: "Site #7 — 22h sans agent confirmé",
      uiRows: [
        {
          left: "PC site Delta",
          right: "2 agents + superviseur",
          status: "ok",
        },
        {
          left: "Main courante",
          right: "Flux temps réel",
          status: "ok",
        },
        {
          left: "Consignes",
          right: "Procédures à jour",
          status: "ok",
        },
        {
          left: "Pas télésurveillance",
          right: "Exploitation humaine",
          status: "ok",
        },
      ],
      uiHint: "Supervision orga — pas télésurveillance vidéo.",
      takeaway: "Humain d'abord — vidéo reste outil séparé si présent.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Rôle du PC dans PROGESTI",
        body: "Consulter vacations, suivre main courante, pousser consignes — pas flux RTSP caméras.",
        bullets: [
          "Vue site temps réel orga",
          "Historique shift",
          "Lien agents mobile",
        ],
      },
      {
        h2: "Pas télésurveillance",
        body: "Centrale distante vidéo = autre métier — cette page = PC sur site / exploitation locale.",
      },
    ],
    faq: [
      {
        q: "Que doit voir un opérateur PC en un coup d’œil ?",
        a: "Postes couverts / trous, alertes nuit, incidents ouverts, sites prioritaires. Ensuite le détail.",
      },
      {
        q: "Quel lien avec le multi-sites pour « gardiennage copropriété logiciel » ?",
        a: "Le PC supervise ; le portefeuille multi-sites structure. Les deux se renforcent.",
      },
      {
        q: "Remplace-t-on une hypervision vidéo ?",
        a: "Non. PROGESTI porte l’organisation vacations / preuves / dispatch humain — pas le mur d’images.",
      },
      {
        q: "Comment lier astreinte et PC pour « gardiennage copropriété logiciel » ?",
        a: "L’escalade nuit peut remonter au PC ou à l’astreinte selon votre modèle — l’alerte doit être unique et claire.",
      },
      {
        q: "Comment piloter le PC sécurité pour « gardiennage copropriété logiciel » ?",
        a: "Une plage de supervision réelle (soirée ou week-end) sur un sous-ensemble de sites.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Main courante", "Registre incidents.", "/securite/main-courante"),
    link("Consignes", "Fiches sites.", "/securite/controle-acces-consignes"),
    ],
    ctaPrimaryLabel: "Voir la vue PC",
    ctaSecondaryLabel: "Voir multi-sites",
    trustLeft: "PC · dispatch · supervision",
  },
  {
    id: "SEC-31",
    key: "vacation-non-pourvue",
    path: "/securite/vacation-non-pourvue",
    type: "probleme",
    primaryKw: "vacation non pourvue gardiennage",
    seoTitle: "Vacation non pourvue — anticiper les trous",
    seoDesc: "Vacation non pourvue : alertes couverture avant l'appel client. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Vacation non pourvue",
    h1Lead: "Vacation non pourvue",
    h1: "voir le trou avant l'appel client",
    sub: "Alertes de couverture, backups visibles, historique de qui devait être là — pour ne plus découvrir le poste vide au téléphone.",
    claimBefore: "De l’alerte trou à la",
    claimHighlight: "vacation sauvée",
    claimSub: "vacation non pourvue · alerte & backup",
    productStrip: "Sécurité · couverture · alertes",
    empathyH2: "Le trou de vacation est une course contre la montre — pas un mail du lundi",
    empathyBody: "Alerte, backup, brief : chaque minute compte avant la prise de poste. Si vous découvrez le trou quand le client appelle, c’est déjà perdu.",
    showcaseTitle: "Trous rouges avant l'appel client",
    showcaseSub: "Couverture visible, backups listés, historique de qui était prévu.",
    showcaseBadgeLeft: {
      title: "Trou 22h–06h",
      sub: "Alerte J-0",
    },
    showcaseBadgeRight: "Trou détecté",
    proofH2: "Anticiper la vacation non pourvue",
    proofQuote: "Si le trou est rouge à 17h, le client n'a pas à l'apprendre à 22h.",
    proofItems: [
      {
        title: "Statut couverture",
        text: "Titulaire / backup / trou — lisible d'un coup d'œil.",
      },
      {
        title: "Alerte anticipée",
        text: "Vacations sans confirmation visibles avant le créneau.",
      },
      {
        title: "Preuve d'affectation",
        text: "Qui a été prévu, qui a remplacé, à quelle heure.",
      },
    ],
    vsTitle: "WhatsApp panique vs trou visible dans le planning",
    demo: {
      variant: "list",
      eyebrow: "Démo · vacation non pourvue",
      h2: "Vendredi 17h40 : sauver la vacation 22h–06h",
      lead: "Trou rouge → backup briefé → client qui ne sait jamais qu'il y a eu un imprévu.",
      scenario: "Vendredi 17h40 : vacation 22h–06h sans titulaire confirmé. Le trou est rouge dans le planning — backup affecté avant que le client ne découvre la porte.",
      steps: [
        {
          label: "Alerte",
          detail: "Vacation Entrepôt Nord sans titulaire confirmé — statut rouge.",
        },
        {
          label: "Pool",
          detail: "3 agents nuit dispo, 1 déjà briefé sur le site.",
        },
        {
          label: "Affectation",
          detail: "Backup L. + consignes lues 17h52.",
        },
        {
          label: "Suite",
          detail: "Pointage 21h58 — historique prêt si audit.",
        },
      ],
      uiLabel: "Couverture · Entrepôt Nord",
      uiToolbar: "Couverture · Trou rouge · J-0",
      uiAlert: "17h40 — vacation 22h–06h sans titulaire confirmé",
      uiRows: [
        {
          left: "Entrepôt Nord 22h–06h",
          right: "Aucun agent confirmé",
          status: "alert",
        },
        {
          left: "Alerte J-0 17h40",
          right: "Trou visible exploitation",
          status: "alert",
        },
        {
          left: "Backup L. affecté",
          right: "Consignes lues 17h52",
          status: "ok",
        },
        {
          left: "Client",
          right: "Pas d'appel « personne »",
          status: "ok",
        },
      ],
      uiHint: "Angle problème trou — ≠ planning process.",
      takeaway: "Le trou se gère dans le planning — pas dans la boîte vocale du client.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Qu'est-ce qu'une vacation non pourvue (terrain)",
        body: "Ce n'est pas seulement « personne n'est venu ». C'est l'absence de titulaire confirmé + absence de backup prêt avant le créneau. PROGESTI rend ce statut visible pour l'exploitation.",
        bullets: [
          "Confirmation vs simple inscription Excel",
          "Backup nommé avant le créneau",
          "Alerte J-0 / J-1 selon vos règles d'orga",
        ],
      },
      {
        h2: "Process anti-trou pour sociétés de gardiennage",
        body: "Cartographier les postes critiques (accueil, portail, site industriel), imposer un backup sur les nuits, et traiter les alertes rouges comme une file d'attente — pas comme un SMS oublié.",
        h3: [
          {
            title: "Posts critiques",
            body: "Ceux où le client voit le trou en 10 minutes.",
          },
          {
            title: "Nuits & week-ends",
            body: "Pool backup dédié, pas le même numéro WhatsApp pour tout.",
          },
        ],
      },
      {
        h2: "Lien avec remplacement et facturation",
        body: "Une vacation sauvée doit rester traçable : qui a remplacé, quelles heures pointées, quelle ligne facturée. Voir aussi remplacement urgence et facturation gardiennage.",
      },
    ],
    faq: [
      {
        q: "Quand l’alerte doit-elle partir ?",
        a: "Dès qu’un poste n’a plus de titulaire ni de backup valide avant l’heure de vacation — pas après le début de créneau.",
      },
      {
        q: "Que fait-on dans les 30 minutes suivantes ?",
        a: "Identifier backup → affecter → pousser consignes → confirmer prise de poste / pointage. Voir aussi remplacement urgence.",
      },
      {
        q: "Différence avec planning agents ?",
        a: "Planning = prévention. Cette page = gestion de l’alerte trou quand elle existe.",
      },
      {
        q: "Comment éviter que ça se reproduise chaque vendredi ?",
        a: "Règle d’exploitation : tout trou rouge traité avant une heure butoir (ex. 17h). Mesurez-le une semaine.",
      },
      {
        q: "Preuve pour le client après un trou sauvé ?",
        a: "Vacation finalement tenue + pointage + éventuelle note d’incident. Transparence > silence.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Planning agents", "Anticiper les trous.", "/securite/planning-agents"),
    link("Remplacement urgence", "Couvrir en minutes.", "/securite/remplacement-urgence"),
    ],
    ctaPrimaryLabel: "Traiter un trou vacation",
    ctaSecondaryLabel: "Voir remplacement urgence",
    trustLeft: "Alertes · trous · backups",
  },
  {
    id: "SEC-32",
    key: "remplacement-urgence",
    path: "/securite/remplacement-urgence",
    type: "process",
    primaryKw: "remplacement agent sécurité urgence",
    seoTitle: "Remplacement urgence agent sécurité",
    seoDesc: "Remplacement agent sécurité urgence : backup briefé en minutes. Essai 15 j sans CB. Dès 29,99 € HT/mois.",
    crumbLabel: "Remplacement urgence agent sécurité",
    h1Lead: "Remplacement d'urgence",
    h1: "couvrir le poste en minutes, pas en SMS",
    sub: "Absence de dernière minute : affecter un backup briefé, tracer le changement, garder la preuve pour le donneur d'ordre.",
    claimBefore: "De l’indisponibilité à la",
    claimHighlight: "relève trouvée",
    claimSub: "remplacement urgence · dernière minute",
    productStrip: "Sécurité · backup · urgence",
    empathyH2: "17h45, titulaire down : le remplacement se joue maintenant",
    empathyBody: "Trouver la relève, briefer, confirmer : le remplacement d’urgence est un geste d’exploitation chronométré, pas un espoir dans un groupe WA.",
    showcaseTitle: "Backup affecté, briefé, pointé",
    showcaseSub: "De l'alerte absence à la présence réelle en poste.",
    showcaseBadgeLeft: {
      title: "Désistement 21h10",
      sub: "Backup 21h18",
    },
    showcaseBadgeRight: "Backup affecté",
    proofH2: "Remplacer sans perdre la preuve",
    proofQuote: "Le client ne veut pas votre stress — il veut un agent en poste avec les bonnes consignes.",
    proofItems: [
      {
        title: "Pool backup",
        text: "Disponibilités nuit / week-end visibles.",
      },
      {
        title: "Brief mobile",
        text: "Consignes site lues avant prise de poste.",
      },
      {
        title: "Trace",
        text: "Qui a remplacé qui, horodatage, pointage.",
      },
    ],
    vsTitle: "Chaîne WhatsApp vs remplacement tracé dans PROGESTI",
    demo: {
      variant: "timeline",
      eyebrow: "Démo · remplacement urgence",
      h2: "Remplacement en 8 minutes chrono",
      lead: "Désistement → pool → affectation → brief → pointage.",
      scenario: "21h10 : agent titulaire se désiste pour la nuit. Pool backup, brief consignes mobile, pointage 21h54 — le poste tient sans fil WhatsApp de 40 messages.",
      steps: [
        {
          label: "Signal",
          detail: "Titulaire M. se désiste 21h10 — vacation 22h–06h.",
        },
        {
          label: "Choix",
          detail: "Pool : 3 dispos ; R. déjà passé sur le site.",
        },
        {
          label: "Brief",
          detail: "Consignes portail + contacts poussés mobile 21h18.",
        },
        {
          label: "Preuve",
          detail: "Pointage 21h54 — historique remplacement exportable.",
        },
      ],
      uiLabel: "Remplacement · Portail Sud",
      uiToolbar: "Désistement · Pool backup · Brief · Pointage",
      uiAlert: "21h10 — titulaire se désiste · vacation 22h–06h",
      uiRows: [
        {
          left: "Titulaire M.",
          right: "Désistement 21h10",
          status: "alert",
        },
        {
          left: "Pool backup",
          right: "3 agents dispo nuit",
          status: "ok",
        },
        {
          left: "Affectation R.",
          right: "Brief mobile 21h18",
          status: "ok",
        },
        {
          left: "Pointage entrée",
          right: "21h54 · poste tenu",
          status: "ok",
        },
      ],
      uiHint: "Process urgence — complementary non pourvue.",
      takeaway: "Urgence maîtrisée = poste tenu + dossier propre le lendemain.",
      primaryCtaLabel: "Essai sur vos sites",
      secondaryCtaLabel: "Voir la démo",
    },
    bodySections: [
      {
        h2: "Checklist remplacement de dernière minute",
        body: "Identifier le poste, vérifier compétences (ex. SSIAP si requis — orga, pas formation), choisir un agent briefable, pousser consignes, confirmer pointage.",
        bullets: [
          "Prioriser agents déjà passés sur le site",
          "Éviter double booking multi-sites",
          "Tracer le motif de remplacement",
        ],
      },
      {
        h2: "Astreinte bureau et nuit",
        body: "Les nuits concentrent les désistements. Coupler cette page avec astreinte-nuit et vacation-non-pourvue pour un process complet alerte → remplacement → preuve.",
      },
      {
        h2: "Ce que PROGESTI ne fait pas",
        body: "Pas d'appel automatique aux agents à votre place comme un centre d'appel — l'outil structure l'affectation et la preuve ; l'humain décide.",
      },
    ],
    faq: [
      {
        q: "Quel est le déroulé type d’un remplacement réussi ?",
        a: "Indispo déclarée → backup choisi (compétences/dispo) → consignes lues → confirmation mobile → pointage à l’heure. Chronologie historisée.",
      },
      {
        q: "Différence avec vacation non pourvue ?",
        a: "Vacation non pourvue = l’alerte trou. Remplacement = le mode opératoire pour la combler.",
      },
      {
        q: "Et si aucun backup du pool n’est dispo ?",
        a: "L’alerte reste rouge : vous escaladez (astreinte, renfort externe) avec trace. Le pire est l’illusion d’une couverture.",
      },
      {
        q: "Le client doit-il être informé ?",
        a: "Selon contrat. Dans tous les cas, votre dossier interne doit être propre si question ultérieure.",
      },
      {
        q: "Par quel pilote démarrer pour « gardiennage copropriété logiciel » ?",
        a: "Simulez un remplacement sur un poste réel (avec agent prévenu) pour chronométrer le process.",
      },
    ],
    gridItems: [
    link("Logiciel gardiennage", "Pilier — flux vacation → facture.", "/logiciel-securite-gardiennage"),
    link("Vacation non pourvue", "Voir le trou avant.", "/securite/vacation-non-pourvue"),
    link("Agents", "Pool & compétences.", "/securite/agents-securite"),
    ],
    ctaPrimaryLabel: "Simuler un remplacement",
    ctaSecondaryLabel: "Voir planning agents",
    trustLeft: "Urgence · backup · brief consignes",
  }
];
