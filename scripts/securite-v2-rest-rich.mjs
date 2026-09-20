/**
 * Copy différenciée SEC-03 … SEC-30 — source de vérité (non écrasée à la regen).
 * Appliquée par scripts/_write-rest-configs.mjs
 */

/** @typedef {import('./securite-v2-factory.mjs').mk extends (u: infer U) => unknown ? Partial<U> : never} RichOverride */

/** @type {Record<string, RichOverride>} */
export const RICH_BY_SLUG = {
  gardiennage: {
    empathyH2: "Un poste fixe vide, c'est le client qui appelle en premier",
    empathyBody:
      "Accueil, portail, réception : une vacation non pourvue se voit en dix minutes. Vous devez savoir qui devait être là, remplacer vite, et garder une trace exploitable si le syndic ou le donneur d'ordre conteste.",
    showcaseTitle: "Poste fixe couvert, consignes sous la main",
    showcaseSub: "Titulaire, backup, pointage — la même vue pour l'exploitation.",
    productStrip: "Sécurité · poste fixe · couverture",
    showcaseBadgeLeft: { title: "Poste accueil", sub: "6h–14h staffé" },
    proofH2: "Tenir un poste fixe, c'est tenir la promesse client",
    proofQuote: "« Personne à l'accueil » : la phrase que vous voulez éviter à 7h du matin.",
    proofItems: [
      { title: "Couverture visible", text: "Vacations par poste, alertes avant le trou." },
      { title: "Remplacement tracé", text: "Backup affecté avec consignes lues sur mobile." },
      { title: "Historique syndic", text: "Présences exportables sans reconstruire le week-end." },
    ],
    vsTitle: "Tableur + SMS vs poste fixe piloté dans PROGESTI",
    persona: {
      role: "Resp. exploitation — portefeuille immeubles & accueils",
      pains: [
        "syndic qui découvre un poste vide avant vous",
        "consignes accueil différentes selon la version papier",
        "titulaire malade sans backup briefé",
        "litige « qui était prévu » sans historique",
      ],
      jargon: ["poste fixe", "vacation", "syndic", "backup", "consignes accueil", "réalisé"],
      objections: ["On gère déjà au feeling", "Trop de saisie pour l'accueil", "Les remplaçants ne lisent jamais les consignes"],
    },
    demo: {
      h2: "Couvrir l'accueil quand le titulaire saute",
      lead: "Poste fixe 6h–14h : de l'alerte absence à la preuve pour le syndic.",
      steps: [
        { label: "Alerte", detail: "Vacation accueil sans titulaire confirmé — statut rouge." },
        { label: "Backup", detail: "Agent R. affecté, consignes résidence lues 05h52." },
        { label: "Présence", detail: "Pointage 05h55, main courante ouverte si incident." },
        { label: "Compte", detail: "Historique exporté pour le syndic + heures facturables." },
      ],
      uiLabel: "Résidence Parc · poste accueil",
      takeaway: "Le poste tient avant l'appel client — et vous avez la preuve si on vous challenge.",
    },
    bodySections: [
      {
        h2: "Cartographier vos postes fixes (accueil, portail, réception)",
        body: "Chaque site a ses créneaux et ses consignes d'accueil. PROGESTI aligne vacations, fiche site et agents — sans promettre ce que la réglementation relève de votre responsabilité pro.",
        bullets: ["Posts nommés par site", "Backups par créneau", "Consignes visibles avant prise de poste"],
      },
      {
        h2: "Remplacements sans chaos du dimanche soir",
        body: "Quand le titulaire tombe, l'exploitation voit le trou, propose un backup et garde la trace de qui a briefé qui — plus de « on pensait que c'était couvert ».",
      },
      {
        h2: "Rappel",
        body: "PROGESTI organise et trace ; il ne remplace ni l'agrément CNAPS ni un avis juridique sur vos contrats de gardiennage.",
      },
    ],
    faq: [
      { q: "Poste fixe seulement, ou aussi rondes ?", a: "Les deux — cette page cible l'accueil/portail ; les rondes ont leur page dédiée." },
      { q: "Le syndic peut-il avoir un récap ?", a: "Vous exportez l'historique de présence ; pas de portail syndic vendu comme produit séparé." },
      { q: "Tarif pour une TPE multi-immeubles ?", a: "Dès 29,99 € HT/mois tout inclus — essai 15 jours sans CB." },
      { q: "Agents sans smartphone ?", a: "Le pointage mobile est le cœur des preuves ; prévoir au moins un terminal par équipe." },
      { q: "C'est un logiciel de nettoyage ?", a: "Non — verticale /securite, séparée propreté et espaces verts." },
    ],
  },

  "rondes-surveillance": {
    empathyH2: "« On a fait le tour » ne suffit pas à l'audit",
    empathyBody:
      "Entrepôt, quai, parking : le client exige des passages horodatés, pas une déclaration au téléphone. Une ronde oubliée ou non prouvée remet en cause toute la vacation de nuit.",
    showcaseTitle: "Tournées nommées, passages datés",
    showcaseSub: "De la planification de ronde au rapport client.",
    productStrip: "Sécurité · rondes · audit client",
    showcaseBadgeLeft: { title: "Tournée Q1–Q12", sub: "Entrepôt frigo" },
    proofH2: "Prouver la ronde, pas la raconter",
    proofQuote: "L'audit demande le 12 mars 22h–6h — pas vos bonnes intentions.",
    proofItems: [
      { title: "Points de passage", text: "Scan ou validation par étape, horodatage conservé." },
      { title: "Retards visibles", text: "Écart sur un point = alerte exploitation avant le client." },
      { title: "Dossier audit", text: "Historique de tournée exportable sur une période." },
    ],
    vsTitle: "Carnet papier vs rondes exploitables dans PROGESTI",
    persona: {
      role: "Chef de site / exploitation entrepôts logistique",
      pains: [
        "client frigo qui conteste une nuit entière",
        "points de contrôle différents selon les sites",
        "ronde « raccourcie » non détectée avant l'audit",
        "agents qui oublient un secteur du quai",
      ],
      jargon: ["ronde", "point de contrôle", "tournée", "QHSE", "vacation nuit", "main courante"],
      objections: ["On note sur papier", "Les tags NFC coûtent trop", "L'agent triche anyway"],
    },
    demo: {
      h2: "Répondre à l'audit « prouvez la nuit du 12 »",
      lead: "Tournée entrepôt : 12 points, un retard détecté, dossier prêt en 5 minutes.",
      steps: [
        { label: "Modèle", detail: "Tournée Q1–Q12 attachée au site frigorifique." },
        { label: "Nuit", detail: "11/12 points OK — Q3 porte Nord +8 min." },
        { label: "Alerte", detail: "Exploitation notifiée, consigne relue agent." },
        { label: "Audit", detail: "Export passages 22h14 → 05h58 pour le donneur d'ordre." },
      ],
      uiLabel: "Entrepôt Nord · tournée nuit",
      takeaway: "Chaque passage compte — vous répondez factuellement au lieu de négocier à l'oral.",
    },
    bodySections: [
      {
        h2: "Définir des tournées qui collent au plan du site",
        body: "Zones ATEX, quai, parking : une tournée n'est pas une autre. Vous nommez les points, les fréquences, et les agents savent ce qui est attendu.",
        bullets: ["Modèles par typologie de site", "Fréquence nuit / week-end", "Lien vacation ↔ tournée"],
      },
      {
        h2: "Exploiter les écarts avant le mail client",
        body: "Retard ou point manquant : l'exploitation voit l'écart dans la journée, pas après la réclamation.",
      },
    ],
    faq: [
      { q: "Faut-il du matériel NFC obligatoire ?", a: "Non imposé par PROGESTI — l'important est la trace horodatée adaptée à votre procédure." },
      { q: "Rondes + poste fixe même site ?", a: "Oui — vacations distinctes, historiques liés au même site." },
      { q: "Essai gratuit ?", a: "15 jours sans carte bancaire sur votre propre tournée pilote." },
      { q: "Prix mensuel ?", a: "Dès 29,99 € HT/mois, modules vacations inclus." },
      { q: "Différence avec la page preuves ?", a: "Ici = process ronde ; preuves = intent « audit / rapport client » transversal." },
    ],
  },

  "agents-securite": {
    empathyH2: "Sans vue effectif, vous staffez à l'aveugle",
    empathyBody:
      "Compétences SSIAP, dispos nuit, sites éloignés : affecter le mauvais profil coûte une vacation à refaire. Il vous faut un registre agents vivant, pas un onglet Excel « dispo » jamais à jour.",
    showcaseTitle: "Qui est disponible, qualifié, où",
    showcaseSub: "Effectif, vacations en cours, remplacements possibles.",
    productStrip: "Sécurité · effectif · affectations",
    showcaseBadgeLeft: { title: "Pool agents", sub: "Compétences & dispos" },
    proofH2: "La bonne personne au bon poste",
    proofQuote: "Envoyer un APS sur un poste SSIAP, c'est une vacation perdue — et un client furieux.",
    proofItems: [
      { title: "Profils & habilitations", text: "SSIAP, APS, sites autorisés — visibles à l'affectation." },
      { title: "Vacations en cours", text: "Qui est déjà staffé ce soir avant d'envoyer un backup." },
      { title: "Historique agent", text: "Sites déjà tenus, incidents, heures — pour décider vite." },
    ],
    vsTitle: "Excel « dispo » vs registre agents synchronisé",
    persona: {
      role: "Gérant TPE / adjoint exploitation",
      pains: [
        "6 absences la même semaine de haute saison",
        "compétences mélangées sur des postes sensibles",
        "agents éloignés géographiquement le soir même",
        "double booking sur deux sites",
      ],
      jargon: ["APS", "SSIAP", "backup", "pool", "affectation", "vacation"],
      objections: ["On se connaît tous", "Trop lourd de saisir les profils", "Les dispos changent tout le temps"],
    },
    demo: {
      h2: "Staffer six absences sans tableur parallèle",
      lead: "Semaine critique : croiser compétences, distance et vacations déjà posées.",
      steps: [
        { label: "Absences", detail: "6 créneaux à risque remontés depuis le planning." },
        { label: "Filtre", detail: "SSIAP 1 + dispo nuit + pas déjà sur site B." },
        { label: "Affectation", detail: "Dupont site A 14h–22h, Martin en backup site C." },
        { label: "Notification", detail: "Agents voient vacation + consignes sur mobile." },
      ],
      uiLabel: "Effectif · semaine S12",
      takeaway: "Moins de vacations refaites parce que le profil ou la dispo était fausse.",
    },
    bodySections: [
      {
        h2: "Un fichier agents qui sert vraiment l'exploitation",
        body: "Coordonnées, compétences, sites habituels : la fiche agent alimente le planning et les remplacements — pas un RH complet, l'essentiel terrain.",
        bullets: ["Statut dispo / en vacation", "Sites et clients autorisés", "Notes exploitation (sans dossier médical)"],
      },
      {
        h2: "Éviter le double booking du vendredi soir",
        body: "Avant d'envoyer un agent, vous voyez s'il est déjà affecté ailleurs sur le même créneau.",
      },
    ],
    faq: [
      { q: "Gestion paie / contrats de travail ?", a: "Non — focus vacations et preuves ; export heures pour votre paie." },
      { q: "Combien d'agents dans la base ?", a: "Pas de limite artificielle basse — adapté PME et croissance." },
      { q: "Les agents mettent à jour leurs dispos ?", a: "Selon votre process ; l'exploitation garde la main sur les affectations." },
      { q: "Tarif public ?", a: "29,99 € HT/mois tout inclus — essai 15 j sans CB." },
      { q: "Lien avec planning ?", a: "Oui — même source ; voir page planning agents pour la couverture." },
    ],
  },

  "surete-sites": {
    empathyH2: "La sûreté d'un site, c'est la bonne consigne au bon agent",
    empathyBody:
      "Multi-sites industriels ou tertiaires : une consigne accès obsolète, c'est un incident évitable. Vous devez piloter vacations, fiches sites et historique sans un dossier par client perdu dans le mail.",
    showcaseTitle: "Fiche site, équipe, historique — par client",
    showcaseSub: "Sûreté opérationnelle site par site.",
    productStrip: "Sécurité · sûreté · multi-clients",
    showcaseBadgeLeft: { title: "Site Gamma", sub: "Consignes v3" },
    proofH2: "Sûreté = continuité d'information",
    proofQuote: "L'agent de nuit arrive avec la consigne de lundi… un mardi où tout a changé.",
    proofItems: [
      { title: "Fiches sites à jour", text: "Accès, contacts, procédures — version visible mobile." },
      { title: "Vacations par site", text: "Couverture portail, rondes, accueil — vue client." },
      { title: "Synthèse donneur d'ordre", text: "Incidents + présences pour le reporting hebdo." },
    ],
    vsTitle: "Dossiers mail vs sûreté sites centralisée",
    persona: {
      role: "Directeur exploitation multi-clients",
      pains: [
        "consignes qui changent chaque lundi",
        "nouveau site mal onboardé en 48 h",
        "incident accès non remonté au bon contact",
        "rapport hebdo reconstruit le vendredi",
      ],
      jargon: ["donneur d'ordre", "fiche site", "consignes", "sûreté", "vacation portail"],
      objections: ["Chaque client veut son format", "On a déjà SharePoint", "Trop de sites pour un seul outil"],
    },
    demo: {
      h2: "Nouveau site : consignes jour J pour l'agent de nuit",
      lead: "Site industriel récent — accès mis à jour hier, vacation portail ce soir.",
      steps: [
        { label: "Onboarding", detail: "Fiche site Gamma créée, contacts sécurité client." },
        { label: "Màj", detail: "Consignes portail validées hier 16h — version 3." },
        { label: "Vacation", detail: "Agent lit consignes avant pointage début." },
        { label: "Incident", detail: "Accès refusé noté main courante → synthèse DO." },
      ],
      uiLabel: "Portefeuille · Site Gamma",
      takeaway: "Chaque site a sa vérité — l'agent n'invente pas la procédure sur place.",
    },
    bodySections: [
      {
        h2: "Onboarder un site sans oublier la vacation #1",
        body: "Contrat signé : fiche site, consignes, premières vacations et contacts client — checklist exploitation, pas marketing.",
        bullets: ["Modèle fiche par typologie", "Liens vacations ↔ consignes", "Historique dès le premier jour"],
      },
      {
        h2: "Incidents accès : tracer et informer",
        body: "Main courante + notification exploitation — le donneur d'ordre sait ce qui s'est passé sans relance téléphonique.",
      },
    ],
    faq: [
      { q: "Un site par contrat ou mutualisé ?", a: "Autant de fiches sites que votre portefeuille — vue consolidée exploitation." },
      { q: "Documents plans / PDF ?", a: "Consignes texte et contacts ; pas de GED lourde — restez sur l'essentiel terrain." },
      { q: "Essai sur un site pilote ?", a: "15 jours sans CB — montez un site réel pour tester." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois — pas de surcoût par site dans le tarif public." },
      { q: "Différence multi-sites ?", a: "Sûreté = angle client/site ; multi-sites = problème croissance portefeuille." },
    ],
  },

  "sites-industriels": {
    empathyH2: "Sur site industriel, l'audit ne pardonne pas le trou de portail",
    empathyBody:
      "3×8, arrêts techniques, zones restreintes : le donneur d'ordre veut savoir qui tenait le portail sud pendant l'intervention. Horaires atypiques et rondes ATEX demandent plus qu'un SMS « c'est couvert ».",
    showcaseTitle: "Industrie : vacations, rondes, audits",
    showcaseSub: "Contraintes usine, preuves pour le client industriel.",
    productStrip: "Sécurité · industrie · 3×8",
    showcaseBadgeLeft: { title: "Usine · 3×8", sub: "Portail + rondes" },
    proofH2: "Documenter l'industriel, shift par shift",
    proofQuote: "Pendant l'arrêt technique, personne ne veut entendre « on croit que c'était Dupont ».",
    proofItems: [
      { title: "Shifts nommés", text: "Matin / après-midi / nuit — vacations visibles par zone." },
      { title: "Rondes zones sensibles", text: "Tournées liées aux procédures site." },
      { title: "Historique 30 j", text: "Prêt quand le QHSE client envoie sa checklist." },
    ],
    vsTitle: "Planning papier usine vs trace shift PROGESTI",
    persona: {
      role: "Exploitation gardiennage sites industriels",
      pains: [
        "arrêt technique = vacations modifiées en dernière minute",
        "audit sécurité client sans préavis",
        "ronde zone ATEX oubliée sur un shift",
        "portail sud non tenu pendant travaux",
      ],
      jargon: ["3×8", "donneur d'ordre", "QHSE", "portail", "arrêt technique", "vacation"],
      objections: ["Le client impose son outil", "Trop de zones à modéliser", "Nos agents connaissent l'usine"],
    },
    demo: {
      h2: "Qui tenait le portail sud pendant l'arrêt ?",
      lead: "Intervention maintenance : historique vacations + pointages sur 72 h.",
      steps: [
        { label: "Shift", detail: "Vacations 3×8 mises à jour avec consignes travaux." },
        { label: "Nuit", detail: "Ronde zone ATEX 02h — passages OK." },
        { label: "Demande", detail: "DO industriel : portail sud 14h–22h mardi." },
        { label: "Réponse", detail: "Agent L. pointé 13h58–22h04 — export joint." },
      ],
      uiLabel: "Site usine · semaine arrêt",
      takeaway: "Vous répondez au QHSE avec des faits, pas avec la mémoire du chef de poste.",
    },
    bodySections: [
      {
        h2: "Adapter le planning aux arrêts et aux renforts",
        body: "Travaux = vacations modifiées, consignes temporaires, backups — le planning absorbe le changement sans fichier « planning_usine_OLD2 ».",
        bullets: ["Consignes temporaires datées", "Renforts week-end industrie", "Lien ronde ↔ shift"],
      },
      {
        h2: "Preuves pour les audits client",
        body: "Export présences et rondes sur la période demandée — base factuelle pour votre relation donneur d'ordre.",
      },
    ],
    faq: [
      { q: "Sites Seveso ou ATEX ?", a: "Organisation et traces — pas de promesse réglementaire spécifique au seuil." },
      { q: "Intégration badge usine ?", a: "Non — consignes et preuves PROGESTI ; badges restent chez le client." },
      { q: "Vacations nuit industrielles ?", a: "Oui — voir aussi page astreinte nuit." },
      { q: "Coût mensuel ?", a: "29,99 € HT/mois tout inclus — essai 15 j sans CB." },
      { q: "Page sûreté vs industrie ?", a: "Industrie = contraintes usine ; sûreté = angle fiche site multi-secteurs." },
    ],
  },

  "centres-commerciaux": {
    empathyH2: "Samedi soldes : quatre postes en plus, zéro marge d'erreur",
    empathyBody:
      "Retail et centres commerciaux : pics d'affluence, parking, soirées. Le directeur centre veut la preuve des renforts avant de signer la facture du week-end — pas votre parole au téléphone.",
    showcaseTitle: "Retail : densifier le planning aux heures chaudes",
    showcaseSub: "Soldes, soirées, parking — staffé et prouvé.",
    productStrip: "Sécurité · retail · week-end",
    showcaseBadgeLeft: { title: "Centre Atlas", sub: "Samedi soldes" },
    proofH2: "Tenir les postes quand le flux explose",
    proofQuote: "« Vous aviez combien d'agents samedi 18h ? » — question classique du directeur centre.",
    proofItems: [
      { title: "Renforts planifiés", text: "+4 agents soldes visibles avant l'ouverture." },
      { title: "Parking & accès", text: "Vacations couvertes 8h–20h tracées." },
      { title: "Preuve week-end", text: "Pointages consolidés pour validation facture." },
    ],
    vsTitle: "Appels panique samedi vs planning retail calé",
    persona: {
      role: "Exploitation sécurité grands surfaces / CC",
      pains: [
        "pic 18h sous-staffé",
        "directeur centre qui conteste les heures",
        "renforts activés trop tard",
        "poste parking oublié dimanche",
      ],
      jargon: ["renfort", "directeur centre", "parking", "soldes", "vacation", "réalisé"],
      objections: ["Le centre change tout à la dernière minute", "Facturation au ticket horaire", "Agents intérimaires différents chaque week-end"],
    },
    demo: {
      h2: "Prouver les +4 agents du samedi soldes",
      lead: "Centre Atlas : planning dense, pic 18h, facture à justifier dimanche soir.",
      steps: [
        { label: "Brief", detail: "+4 postes ajoutés jeudi — directeur centre informé." },
        { label: "Samedi", detail: "Parking couvert, renfort entrée activé 17h30." },
        { label: "Pic", detail: "Alerte 18h — agent renfort déjà sur zone." },
        { label: "Facture", detail: "Pointages week-end → brouillon facture lundi 8h." },
      ],
      uiLabel: "Centre Atlas · soldes",
      takeaway: "Le retail pardonne peu — vous staffez et prouvez dans le même outil.",
    },
    bodySections: [
      {
        h2: "Modèles de week-end et soirées",
        body: "Créneaux type CC : ouverture, pic, fermeture, parking — dupliquez le modèle soldes sans recréer from scratch.",
        bullets: ["Renforts en un clic", "Postes parking nommés", "Historique par événement commercial"],
      },
      {
        h2: "Relation directeur centre / facturation",
        body: "Heures pointées alignées sur le bon de commande — moins de débat « vous n'étiez pas assez » après coup.",
      },
    ],
    faq: [
      { q: "Événementiel vs retail ?", a: "Retail = récurrence CC ; event = montage équipe ponctuel (page event)." },
      { q: "Agents intérimaires ?", a: "Affectation comme les titulaires — profil minimal + pointage." },
      { q: "Essai avant soldes ?", a: "15 j sans CB — testez sur un samedi réel." },
      { q: "Tarif ?", a: "Dès 29,99 € HT/mois." },
      { q: "Multi-centres ?", a: "Oui — chaque centre = site ; vue portefeuille exploitation." },
    ],
  },

  "evenementiel": {
    empathyH2: "Montage équipe en 4 h : le planning ne peut pas attendre lundi",
    empathyBody:
      "Concerts, salons, stades : des dizaines d'agents, des postes barrières, des dépassements horaires. Staffer vite, pointer le réel et facturer sans chaos sépare les sociétés pro des bricolages Excel.",
    showcaseTitle: "Event : staffer, pointer, facturer le réel",
    showcaseSub: "Concerts, festivals, salons — une vacation = un dossier.",
    productStrip: "Sécurité · événementiel · réalisé",
    showcaseBadgeLeft: { title: "Summer Fest", sub: "48 agents" },
    proofH2: "L'événementiel exige vitesse et trace",
    proofQuote: "Dépassement barrières +45 min : soit c'est pointé, soit c'est offert au client.",
    proofItems: [
      { title: "Montage rapide", text: "Vacations par zone entrée / scène / parking." },
      { title: "Heures réelles", text: "Dépassements tracés pour facturation ou avenant." },
      { title: "Clôture event", text: "Brouillon facture depuis le réalisé pointé." },
    ],
    vsTitle: "WhatsApp group event vs dossier vacation PROGESTI",
    persona: {
      role: "Resp. événementiel sécurité privée",
      pains: [
        "48 agents à placer en une matinée",
        "dépassements non facturés",
        "poste barrière non couvert à l'ouverture",
        "client promoteur qui veut le détail heures",
      ],
      jargon: ["barrière", "ordre de service", "vacation", "renfort", "réalisé", "promoteur"],
      objections: ["Chaque event est unique", "On staff avec des freelances", "Pas le temps de saisir pendant l'event"],
    },
    demo: {
      h2: "Clôturer Summer Fest sans ressaisie compta",
      lead: "18 000 places : planning dense, dépassements barrières, facture promoteur.",
      steps: [
        { label: "OS", detail: "48 vacations réparties entrée A/B, parking, backstage." },
        { label: "Ouverture", detail: "Poste barrière A staffé 14h — pointage OK." },
        { label: "Nuit", detail: "+45 min barrière — fin réelle 23h45 tracée." },
        { label: "Facture", detail: "Lignes depuis pointages — brouillon prêt mardi." },
      ],
      uiLabel: "Event Summer Fest",
      takeaway: "Le promoteur paie le réel pointé — vous ne laissez pas d'heures sur la table.",
    },
    bodySections: [
      {
        h2: "Structurer un dossier par événement",
        body: "Un event = un regroupement sites/vacations : ordre de service, équipe, consignes promoteur — clôturé après le démontage.",
        bullets: ["Zones entrée / scène / parking", "Consignes promoteur attachées", "Export heures pour avenant"],
      },
      {
        h2: "Freelances et renforts ponctuels",
        body: "Affectation et pointage comme les titulaires — pas de seconde vérité sur un groupe messenger.",
      },
    ],
    faq: [
      { q: "Billetterie / accès scan ?", a: "Non — organisation agents et preuves, pas billetterie." },
      { q: "Plusieurs events simultanés ?", a: "Oui — dossiers séparés par promoteur / date." },
      { q: "Prix pour société event ?", a: "29,99 € HT/mois tout inclus — essai 15 j sans CB." },
      { q: "Lien retail CC ?", a: "Event = ponctuel fort volume ; retail = récurrence centre." },
      { q: "Main courante incident public ?", a: "Oui — saisie mobile liée au poste event." },
    ],
  },

  coproprietes: {
    empathyH2: "En copro, c'est le syndic qui demande « qui était là vendredi ? »",
    empathyBody:
      "Résidences, gardiens, vacations 7j/7 : la présence doit être documentée pour le conseil syndical — pas seulement ressentie. Multi-résidences amplifie le risque d'oubli de vacation.",
    showcaseTitle: "Copro : présence tenue, syndic rassuré",
    showcaseSub: "Gardiennage résidence — preuves pour le syndic.",
    productStrip: "Sécurité · copro · syndic",
    showcaseBadgeLeft: { title: "Résidence Parc", sub: "7j/7" },
    proofH2: "Documenter pour le conseil syndical",
    proofQuote: "AG copro : une absence de gardien non expliquée devient un vote contre votre contrat.",
    proofItems: [
      { title: "Présence quotidienne", text: "Pointage gardien / vacation accueil." },
      { title: "Rapport mensuel", text: "Historique exploitable pour le syndic." },
      { title: "Multi-résidences", text: "Chaque immeuble = site, vue portefeuille." },
    ],
    vsTitle: "Parole du gardien vs historique syndic",
    persona: {
      role: "Exploitation gardiennage résidentiel",
      pains: [
        "syndic qui vérifie chaque absence",
        "gardien seul mal remplacé",
        "confusion EV / gardiennage côté client",
        "plusieurs résidences même syndic",
      ],
      jargon: ["syndic", "AG", "gardien", "vacation", "résidence", "conseil syndical"],
      objections: ["Le syndic veut papier", "Peu d'heures à facturer", "On n'est pas le gardien salarié"],
    },
    demo: {
      h2: "Répondre à l'AG : vendredi soir, qui gardait ?",
      lead: "Résidence Parc — historique présence + vacation remplacée.",
      steps: [
        { label: "Planning", detail: "Vacation 7j/7 gardien + backup week-end." },
        { label: "Vendredi", detail: "Titulaire absent — backup 18h–8h affecté." },
        { label: "Trace", detail: "Pointages + main courante porte parking." },
        { label: "Syndic", detail: "Rapport mensuel PDF avec lignes vendredi." },
      ],
      uiLabel: "Résidence Parc · mois en cours",
      takeaway: "Le syndic voit des faits — votre renouvellement ne se joue pas sur un malentendu.",
    },
    bodySections: [
      {
        h2: "Gardiennage copro ≠ espaces verts",
        body: "Intent distinct : présence humaine, accès résidence, syndic — pas confondre avec la verticale espaces verts (autre produit).",
        bullets: ["Vacations gardien / accueil", "Consignes résidence", "Export pour AG"],
      },
      {
        h2: "Remplacements discrets mais tracés",
        body: "Le résident ne doit pas voir un trou ; le syndic doit voir qui est venu — les deux via planning + pointage.",
      },
    ],
    faq: [
      { q: "Logiciel syndic / copro ?", a: "Non — outil prestataire gardiennage ; vous exportez au syndic." },
      { q: "Différence espaces verts ?", a: "Verticales séparées — pas de page EV ici." },
      { q: "Essai ?", a: "15 jours sans CB sur une résidence pilote." },
      { q: "Tarif TPE résidentiel ?", a: "Dès 29,99 € HT/mois." },
      { q: "Poste fixe accueil copro ?", a: "Oui — voir page gardiennage poste fixe." },
    ],
  },

  "planning-agents": {
    empathyH2: "Deux vacations à risque jeudi : le trou se voit samedi nuit",
    empathyBody:
      "Le planning sécurité, ce n'est pas un joli tableau : c'est anticiper les trous, mobiliser le pool backup et publier avant que le client découvre le poste vide. WhatsApp ne scale pas à 40 sites.",
    showcaseTitle: "Planning qui absorbe les imprévus",
    showcaseSub: "Vacations à risque, backups, publication agents.",
    productStrip: "Sécurité · planning · couverture",
    showcaseBadgeLeft: { title: "Semaine S12", sub: "2 alertes" },
    proofH2: "Couvrir avant l'appel panique",
    proofQuote: "Anticiper jeudi coûte moins cher qu'excuser samedi à 2 h du matin.",
    proofItems: [
      { title: "Alertes vacations", text: "Créneaux sans titulaire ou backup." },
      { title: "Pool dispo", text: "Agents libres croisés compétences." },
      { title: "Publication", text: "Agents notifiés — une version unique." },
    ],
    vsTitle: "Planning_vFinal.xlsx vs planning live PROGESTI",
    persona: {
      role: "Planificateur / adjoint exploitation",
      pains: [
        "deux nuits samedi sans backup identifié",
        "pool épuisé avant le week-end",
        "versions planning qui divergent",
        "publication tardive des vacations",
      ],
      jargon: ["vacation", "backup", "pool", "publication", "créneau", "poste"],
      objections: ["On planifie le vendredi pour la semaine suivante", "Excel suffit à 20 agents", "Les agents ne regardent pas le planning"],
    },
    demo: {
      h2: "Sauver deux nuits samedi avant le week-end",
      lead: "Jeudi 11h : vacations à risque détectées, remplacements en 12 minutes.",
      steps: [
        { label: "Scan", detail: "Semaine S12 — 2 vacations nuit sans backup confirmé." },
        { label: "Pool", detail: "5 agents dispo nuit filtrés (compétence + distance)." },
        { label: "Affectation", detail: "Remplacement posé — statut vert." },
        { label: "Publish", detail: "Agents notifiés, consignes site attachées." },
      ],
      uiLabel: "Planning · semaine S12",
      takeaway: "Le planning devient un outil de couverture — pas une photo figée du lundi.",
    },
    bodySections: [
      {
        h2: "Voir les trous avant le client",
        body: "Statuts vacations : titulaire, backup, alerte — l'exploition traite la liste rouge en priorité.",
        bullets: ["Vue semaine / mois", "Filtre site ou client", "Duplication modèles récurrents"],
      },
      {
        h2: "Une version publiée = une vérité terrain",
        body: "Fini le « j'avais l'ancien fichier » : publication synchronisée avec les apps agents.",
      },
    ],
    faq: [
      { q: "Planning vs pointage ?", a: "Planning = prévu ; pointage = réel — deux pages, même base." },
      { q: "Import Excel ?", a: "Reprise manuelle guidée ; pas de magie — prévoir une migration propre." },
      { q: "Essai 15 j ?", a: "Oui, sans CB — importez une semaine réelle." },
      { q: "Prix ?", a: "29,99 € HT/mois tout inclus." },
      { q: "Contrats cadres volumes ?", a: "Voir page contrats cadres pour le suivi volumes." },
    ],
  },

  "pointage-vacations": {
    empathyH2: "Sans pointage début/fin, la fin de mois devient un tribunal",
    empathyBody:
      "Le client conteste six heures ; l'agent jure qu'il est resté. Sans horodatage lié à la vacation, vous perdez marge et crédibilité — le pointage n'est pas de la surveillance, c'est la base du réalisé.",
    showcaseTitle: "Présence réelle, pas déclarative",
    showcaseSub: "Début/fin vacation, écarts visibles bureau.",
    productStrip: "Sécurité · pointage · réalisé",
    showcaseBadgeLeft: { title: "Vacation 22h–06h", sub: "Pointage live" },
    proofH2: "Le réel qui alimente client et facture",
    proofQuote: "« Il est parti à 5 h » vs pointage 06h04 — fin de discussion.",
    proofItems: [
      { title: "Début / fin", text: "Horodatage lié à la vacation planifiée." },
      { title: "Écarts", text: "Minutes à valider exploitation avant facture." },
      { title: "Preuve client", text: "Historique exportable en litige." },
    ],
    vsTitle: "Heures au feeling vs pointage vacation PROGESTI",
    persona: {
      role: "Comptable / exploitation fin de mois",
      pains: [
        "6 h contestées sur un poste",
        "agents qui oublient de pointer",
        "double saisie planning → paie",
        "client qui compare bon de commande au réel",
      ],
      jargon: ["pointage", "réalisé", "vacation", "écart", "heures facturables"],
      objections: ["Les agents tricheront", "Ça ralentit la prise de poste", "On pointe sur papier"],
    },
    demo: {
      h2: "Trancher le litige des 6 heures",
      lead: "Vacation nuit : prévu 22h–06h, réel 21h58–06h04, écart 4 min à valider.",
      steps: [
        { label: "Prévu", detail: "Vacation 22h–06h site Delta attachée agent M." },
        { label: "Arrivée", detail: "Pointage 21h58 — dans tolérance site." },
        { label: "Départ", detail: "06h04 — +4 min vs contrat." },
        { label: "Clôture", detail: "Exploitation valide → ligne facture / paie." },
      ],
      uiLabel: "Pointage · vacation nuit",
      takeaway: "Le pointage protège votre marge autant que la relation client.",
    },
    bodySections: [
      {
        h2: "Lier pointage et vacation planifiée",
        body: "Un pointage hors vacation = alerte ; un pointage manquant = trou — l'exploition voit les deux.",
        bullets: ["Mobile agent", "Vue bureau temps réel", "Export paie / facturation"],
      },
      {
        h2: "Tolérances et validation",
        body: "Quelques minutes d'écart : règles par site ou client, validation humaine avant facture.",
      },
    ],
    faq: [
      { q: "Géolocalisation obligatoire ?", a: "Selon votre paramétrage métier — le cœur est l'horodatage vacation." },
      { q: "Pointage sans réseau ?", a: "Prévoir sync — discuter mode dégradé avec support." },
      { q: "Tarif ?", a: "Inclus dès 29,99 € HT/mois — essai 15 j sans CB." },
      { q: "Différence preuves ?", a: "Pointage = réel horaire ; preuves = dossier audit global." },
      { q: "Agents refus ?", a: "Process interne + consignes claires — outil neutre, c'est votre procédure." },
    ],
  },

  "preuves-intervention": {
    empathyH2: "Email client 17h02 : « envoyez les preuves semaine 11 »",
    empathyBody:
      "Audit, litige, renouvellement : il faut sortir pointages, rondes et main courante sans fouiller WhatsApp. La page preuves répond à l'intent « dossier client » — pas à refaire tout le produit.",
    showcaseTitle: "Dossier preuves en minutes, pas en jours",
    showcaseSub: "Pointages, rondes, incidents — période demandée.",
    productStrip: "Sécurité · preuves · audit",
    showcaseBadgeLeft: { title: "Demande client", sub: "12–18 mars" },
    proofH2: "Répondre factuellement sous pression",
    proofQuote: "Le client ne veut pas votre bonne foi — il veut des lignes horodatées.",
    proofItems: [
      { title: "Période filtrée", text: "Semaine, site, agent — export ciblé." },
      { title: "Multi-source", text: "Pointages + main courante + rondes." },
      { title: "Envoi", text: "PDF ou accès lecture — sans reconstitution manuelle." },
    ],
    vsTitle: "Archives WhatsApp vs dossier preuves PROGESTI",
    persona: {
      role: "Commercial / exploitation face au donneur d'ordre",
      pains: [
        "demande preuve same-day",
        "142 lignes à retrouver",
        "incidents éparpillés",
        "renouvellement contrat exigeant historique",
      ],
      jargon: ["preuve", "audit", "export", "donneur d'ordre", "main courante", "pointage"],
      objections: ["On envoie un Excel maison", "Le client veut notre format", "Trop de clics"],
    },
    demo: {
      h2: "Compiler semaine 11 avant 18h",
      lead: "Demande client : toutes preuves 12–18 mars, site entrepôt.",
      steps: [
        { label: "Filtre", detail: "Site + dates 12–18 mars." },
        { label: "Pointages", detail: "142 lignes vacations pointées." },
        { label: "Incidents", detail: "3 événements main courante attachés." },
        { label: "Envoi", detail: "PDF + lien lecture — mail client 17h48." },
      ],
      uiLabel: "Export preuves · mars",
      takeaway: "Vous transformez une urgence en routine — le renouvellement se gagne aussi là.",
    },
    bodySections: [
      {
        h2: "Ce qu'on entend par « preuve » chez PROGESTI",
        body: "Présences, passages ronde, entrées main courante — traces opérationnelles, pas vidéo ni télésurveillance.",
        bullets: ["Horodatage", "Lien vacation / site", "Export période"],
      },
      {
        h2: "Anticiper les audits récurrents",
        body: "Clients qui demandent chaque mois le même rapport : modèle de période + export — moins de stress équipe.",
      },
    ],
    faq: [
      { q: "Vidéo / VMS ?", a: "Non — preuves organisationnelles gardiennage." },
      { q: "Signature électronique client ?", a: "Export + votre process — pas de DocuSign intégré." },
      { q: "Essai ?", a: "15 j sans CB — testez un export réel." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
      { q: "Rondes incluses ?", a: "Oui si vous les tracez dans PROGESTI — voir page rondes." },
    ],
  },

  "multi-sites": {
    empathyH2: "+12 sites en 30 jours : Excel lâche avant vous",
    empathyBody:
      "Croissance portefeuille : consignes oubliées sur site #9, vacation non dupliée, nouveau client mal onboardé. Multi-sites, c'est le problème de scale — pas juste « plusieurs fiches ».",
    showcaseTitle: "Portefeuille unifié, sites distincts",
    showcaseSub: "47 sites actifs — une direction, zéro tableur par client.",
    productStrip: "Sécurité · multi-sites · scale",
    showcaseBadgeLeft: { title: "47 sites", sub: "Vue direction" },
    proofH2: "Grandir sans perdre le site oublié",
    proofQuote: "Site #12 avec consignes obsolètes — incident waiting to happen.",
    proofItems: [
      { title: "Vue consolidée", text: "Direction voit alertes tous sites." },
      { title: "Onboarding 48h", text: "Modèle site + vacations type." },
      { title: "Consignes versionnées", text: "Alerte si fiche trop vieille." },
    ],
    vsTitle: "Un Excel par client vs portefeuille PROGESTI",
    persona: {
      role: "Dirigeant en croissance / resp. développement",
      pains: [
        "nouveau contrat mal repris",
        "consignes site 12 jamais mises à jour",
        "exploitation noyée sous les onglets",
        "vacation oubliée après signature",
      ],
      jargon: ["portefeuille", "onboarding", "site", "contrat", "vacation"],
      objections: ["On ajoutera des sites plus tard", "Chaque client est un monde", "ERP client suffit"],
    },
    demo: {
      h2: "Onboarder 12 sites sans oublier le #9",
      lead: "Contrat gagné : checklist site, consignes, vacations — alerte sur fiche stale.",
      steps: [
        { label: "Import", detail: "12 fiches sites depuis modèle industriel." },
        { label: "Vacations", detail: "Modèle 3×8 appliqué par site." },
        { label: "Alerte", detail: "Site #12 consignes > 90 j — revue planifiée." },
        { label: "Direction", detail: "Vue 47 sites — 1 alerte consignes." },
      ],
      uiLabel: "Portefeuille · croissance",
      takeaway: "Scale = process — PROGESTI porte le portefeuille, pas votre mémoire.",
    },
    bodySections: [
      {
        h2: "Modèles pour ne pas réinventer chaque site",
        body: "Industrie, copro, retail : dupliquez structure vacations + consignes — personnalisez ensuite.",
        bullets: ["Modèle par vertical", "Checklist onboarding", "Alertes consignes"],
      },
      {
        h2: "Gouvernance direction vs exploitation",
        body: "Direction = KPI et alertes ; exploitation = affectations — même data, rôles différents.",
      },
    ],
    faq: [
      { q: "Limite nombre de sites ?", a: "Pas de plafond marketing bas — adapté croissance PME." },
      { q: "Multi-entités juridiques ?", a: "Organisation commerciale — voir avec support votre cas." },
      { q: "Tarif fixe ?", a: "29,99 € HT/mois public — essai 15 j sans CB." },
      { q: "Vs page sûreté ?", a: "Multi-sites = scale ; sûreté = profondeur fiche client." },
      { q: "Export global ?", a: "Par période et site — pas BI avancée." },
    ],
  },

  "facturation-gardiennage": {
    empathyH2: "280 h pointées, facture sur devis : 14 h perdues",
    empathyBody:
      "Facturer le gardiennage au réalisé pointé, pas au « on avait estimé ça ». Clôture mensuelle : écarts devis/réel = marge qui s'évapore — surtout quand le client paie au ticket horaire.",
    showcaseTitle: "Facture depuis le réalisé pointé",
    showcaseSub: "Vacations → heures → lignes facture.",
    productStrip: "Sécurité · facturation · réalisé",
    showcaseBadgeLeft: { title: "Mars", sub: "312 h pointées" },
    proofH2: "Aligner facture et terrain",
    proofQuote: "Découvrir 14 h non facturées après envoi — classique sans lien pointage.",
    proofItems: [
      { title: "Lignes auto", text: "Heures validées → brouillon facture." },
      { title: "Écarts devis", text: "-4 h détectées avant envoi." },
      { title: "Relances", text: "Suivi impayés planifié (orga commerciale)." },
    ],
    vsTitle: "Facture Excel vs réalisé PROGESTI",
    persona: {
      role: "Gérant / comptable société gardiennage",
      pains: [
        "heures non facturées découvertes tard",
        "double saisie pointage → facture",
        "client compare bon de commande",
        "litiges fin de mois",
      ],
      jargon: ["réalisé", "ligne facture", "devis", "écart", "heures facturables"],
      objections: ["On facture dans Sage", "Trop de détails par site", "Client impose son format"],
    },
    demo: {
      h2: "Clôture mars sans heures oubliées",
      lead: "312 h pointées — écart -4 h vs devis repéré avant envoi.",
      steps: [
        { label: "Collecte", detail: "Vacations mars validées exploitation." },
        { label: "Lignes", detail: "Brouillon facture généré depuis pointages." },
        { label: "Contrôle", detail: "Écart -4 h site Gamma — ajustement." },
        { label: "Envoi", detail: "Facture alignée bon de commande client." },
      ],
      uiLabel: "Facturation · mars",
      takeaway: "La facture devient la conséquence du terrain — pas un pari fin de mois.",
    },
    bodySections: [
      {
        h2: "Chaîne vacation → validation → facture",
        body: "Exploitation valide les heures ; compta exporte ou finalise — une seule source de vérité.",
        bullets: ["Brouillon depuis pointages", "Alertes écarts devis", "Export comptable"],
      },
      {
        h2: "Pas un ERP complet",
        body: "PROGESTI structure le réalisé facturable — votre expert-comptable garde la liasse fiscale.",
      },
    ],
    faq: [
      { q: "Export Sage / Cegid ?", a: "Export données — connecteurs selon votre setup (discuter support)." },
      { q: "Facturation au forfait ?", a: "Possible si vous figez les lignes — le réel sert en contrôle." },
      { q: "Prix logiciel ?", a: "29,99 € HT/mois — essai 15 j sans CB." },
      { q: "Page pointage ?", a: "Indispensable en amont — facture = aval du réel." },
      { q: "TVA / mentions légales ?", a: "Votre modèle facture — PROGESTI alimente les lignes heures." },
    ],
  },

  "remplacer-excel": {
    empathyH2: "Deux plannings circulent le dimanche — qui couvre la nuit ?",
    empathyBody:
      "Excel + WhatsApp tiennent jusqu'à 15 agents et 5 sites. Au-delà, versions divergentes, vacations orphelines, preuves reconstruites le lundi. Sortir d'Excel, c'est accepter une source de vérité — pas « un outil de plus ».",
    showcaseTitle: "Une vérité bureau ↔ terrain",
    showcaseSub: "Fin du planning_v23_FINAL.xlsx parallèle.",
    productStrip: "Sécurité · migration · Excel",
    showcaseBadgeLeft: { title: "Ancien Excel", sub: "Obsolète" },
    proofH2: "Remplacer Excel sans big bang",
    proofQuote: "Personne ne sait qui couvre la nuit si deux fichiers circulent.",
    proofItems: [
      { title: "Source unique", text: "Planning publié = ce que voient les agents." },
      { title: "WhatsApp ↓", text: "Affectations et consignes in-app." },
      { title: "Fin de mois", text: "Facture sans ressaisie depuis le tableur." },
    ],
    vsTitle: "Double saisie Excel vs flux unique PROGESTI",
    persona: {
      role: "Dirigeant TPE en bascule digitale",
      pains: [
        "fichiers VERSION_FINALE",
        "groupes WhatsApp ingérables",
        "peur de perdre une semaine en migration",
        "équipe habituée au papier",
      ],
      jargon: ["Excel", "migration", "source de vérité", "vacation", "pointage"],
      objections: ["On a toujours fait comme ça", "Pas le temps de former", "Coût vs Excel gratuit"],
    },
    demo: {
      h2: "Dimanche soir : une seule version du planning nuit",
      lead: "Ancien Excel obsolète vs PROGESTI publié — vacation nuit identifiée.",
      steps: [
        { label: "Constat", detail: "Deux fichiers — conflit poste nuit site A." },
        { label: "Bascule", detail: "Semaine courante saisie dans PROGESTI." },
        { label: "Publish", detail: "Agents voient même vacation + consignes." },
        { label: "Clôture", detail: "Pointages alimentent facture — zéro ressaisie." },
      ],
      uiLabel: "Migration · semaine 1",
      takeaway: "Excel reste pour la compta si vous voulez — pas pour piloter les vacations.",
    },
    bodySections: [
      {
        h2: "Migrer une semaine réelle, pas tout l'historique",
        body: "Commencez par la semaine courante + sites actifs — l'historique Excel archive, PROGESTI avance.",
        bullets: ["Import manuel guidé", "Parallèle court autorisé", "Support FR pour démarrage"],
      },
      {
        h2: "Ce que Excel fait encore bien",
        body: "Analyses ad hoc — OK. Pilotage vacations et preuves — non.",
      },
    ],
    faq: [
      { q: "Import automatique Excel ?", a: "Pas de miracle — reprise structurée avec support." },
      { q: "Combien de temps bascule ?", a: "Souvent < 1 semaine pour une TPE motivée." },
      { q: "Essai sans engagement ?", a: "15 jours sans CB." },
      { q: "Tarif vs Excel ?", a: "29,99 € HT/mois — comparez au coût des heures perdues." },
      { q: "Formation agents ?", a: "App mobile simple — 30 min prise de poste suffit souvent." },
    ],
  },

  faq: {
    empathyH2: "Avant l'essai, vous voulez des réponses nettes",
    empathyBody:
      "Dirigeant sécurité : prix, mobile, séparation propreté, agents qui pointeront-ils vraiment ? Cette page FAQ tranche sans vous forcer à lire trente pages — intent « décision rapide ».",
    showcaseTitle: "FAQ décision gardiennage",
    showcaseSub: "Réponses courtes — liens vers pages métier.",
    productStrip: "Sécurité · FAQ · décision",
    showcaseBadgeLeft: { title: "Questions", sub: "Prix · essai · mobile" },
    proofH2: "Décider en dix minutes",
    proofQuote: "Pas de tunnel commercial pour savoir si ça matche une TPE gardiennage.",
    proofItems: [
      { title: "Tarif public", text: "29,99 € HT/mois affiché — pas de devis caché." },
      { title: "Essai réel", text: "15 j sans CB sur vos sites." },
      { title: "Verticale dédiée", text: "Sécurité ≠ propreté ≠ EV." },
    ],
    vsTitle: "Pages marketing floues vs FAQ tranchée",
    persona: {
      role: "Dirigeant avant essai",
      pains: [
        "prix caché derrière démo",
        "peur outil propreté déguisé",
        "doute adoption agents",
        "temps perdu en appels",
      ],
      jargon: ["essai", "CB", "verticale", "pointage", "vacation"],
      objections: ["Encore un SaaS", "On nous appellera dix fois", "Pas le temps"],
    },
    demo: {
      h2: "Parcours décision en 4 questions",
      lead: "Simuler le check-list dirigeant avant clic essai.",
      steps: [
        { label: "Prix", detail: "29,99 € HT/mois tout inclus — page tarifs." },
        { label: "Essai", detail: "15 j sans CB — annulation simple." },
        { label: "Mobile", detail: "Pointage Android / iOS agents." },
        { label: "Verticale", detail: "Routes /securite — pas nettoyage." },
      ],
      uiLabel: "FAQ · décision",
      takeaway: "Si ça matche, vous testez sur un vrai site — pas un sandbox bidon.",
    },
    bodySections: [
      {
        h2: "Questions que tout dirigeant gardiennage pose",
        body: "CNAPS, paie, vidéo : nous bornons le périmètre PROGESTI clairement — organisation vacations et preuves.",
        bullets: ["Pas conseil juridique", "Pas télésurveillance", "Pas ERP paie complet"],
      },
      {
        h2: "Où approfondir après la FAQ",
        body: "Poste fixe, rondes, factu, multi-sites : le hub /securite oriente vers la page intent.",
      },
    ],
    faq: [
      { q: "PROGESTI remplace l'agrément CNAPS ?", a: "Non — outil orga ; vos obligations pro restent les vôtres." },
      { q: "Combien coûte-t-il vraiment ?", a: "Dès 29,99 € HT/mois tout inclus — voir /tarifs." },
      { q: "Essai sans carte ?", a: "15 jours — pas de prélèvement surprise." },
      { q: "C'est pour le nettoyage ?", a: "Non — verticale sécurité privée dédiée." },
      { q: "Support humain ?", a: "Oui, équipe FR basée Occitanie — pas chatbot seul." },
      { q: "Les agents vont-ils pointer ?", a: "Dépend de votre process — l'app est conçue pour 30 s en prise de poste." },
    ],
  },

  "guide-organiser-vacations": {
    empathyH2: "Méthode d'abord, logiciel ensuite",
    empathyBody:
      "Nouvelle société ou chaos repris : cartographier posts, figer créneaux, lister backups — ensuite seulement l'outil. Ce guide intent « comment faire » oriente vers PROGESTI sans promettre magie sans process.",
    showcaseTitle: "Guide : vacations sans trou",
    showcaseSub: "4 étapes avant de choisir un outil.",
    productStrip: "Sécurité · guide · méthode",
    showcaseBadgeLeft: { title: "Étape 1–4", sub: "Posts → factu" },
    proofH2: "Structurer avant d'automatiser",
    proofQuote: "Un logiciel sur un planning flou automatise le chaos.",
    proofItems: [
      { title: "Cartographie", text: "Posts nommés par site client." },
      { title: "Besoins", text: "Créneaux et volumes contractuels." },
      { title: "Staff & preuve", text: "Backups + lien pointage facture." },
    ],
    vsTitle: "Improviser vs méthode vacations",
    persona: {
      role: "Créateur société / resp. reprise exploitation",
      pains: [
        "posts flous « sécurité nuit »",
        "pas de liste backups",
        "factu déconnectée du réel",
        "achat logiciel prématuré",
      ],
      jargon: ["poste", "créneau", "backup", "vacation", "réalisé"],
      objections: ["On achètera l'outil plus tard", "On n'a que 8 agents", "Le guide ne remplace pas l'action"],
    },
    demo: {
      h2: "Les 4 étapes sur un site pilote",
      lead: "Appliquer la méthode sur un client avant généralisation.",
      steps: [
        { label: "Posts", detail: "Cartographie accueil / portail / ronde site pilote." },
        { label: "Besoins", detail: "Créneaux figés alignés contrat." },
        { label: "Staff", detail: "Titulaires + 3 backups identifiés." },
        { label: "Factu", detail: "Règle : heures pointées = lignes facture." },
      ],
      uiLabel: "Guide · site pilote",
      takeaway: "PROGESTI accélère une méthode — ne la remplace pas.",
    },
    bodySections: [
      {
        h2: "Étape 1 — Nommer les posts (pas « agent nuit »)",
        body: "Chaque vacation doit avoir un poste, un site, un créneau — vocabulaire partagé bureau et terrain.",
        bullets: ["Fiche site minimale", "Contacts client", "Consignes accès"],
      },
      {
        h2: "Étape 2 à 4 — Staff, pointer, facturer",
        body: "Backups listés, pointage non négociable, facture branchée sur le réel — ensuite seulement déploiement multi-sites.",
      },
    ],
    faq: [
      { q: "Guide vs page planning ?", a: "Guide = méthode ; planning = fonction produit." },
      { q: "Modèle PDF ?", a: "Contenu web — exportez si besoin pour formation interne." },
      { q: "Accompagnement PROGESTI ?", a: "Support démarrage — pas consulting orga long terme." },
      { q: "Essai après méthode ?", a: "15 j sans CB quand posts cartographiés." },
      { q: "Tarif ?", a: "29,99 € HT/mois une fois prêt." },
    ],
  },

  "toulouse-occitanie": {
    empathyH2: "Vous voulez un interlocuteur, pas une hotline offshore",
    empathyBody:
      "Société du 31 ou d'Occitanie : essayer sur un vrai site local, parler à une équipe joignable — produit français terrain, pas un discours US traduit. Intent local, déploiement France entière possible.",
    showcaseTitle: "PROGESTI près de Toulouse",
    showcaseSub: "Support FR · essai sur sites Occitanie.",
    productStrip: "Sécurité · Occitanie · support",
    showcaseBadgeLeft: { title: "Tournefeuille", sub: "Support FR" },
    proofH2: "Local où ça compte : la relation",
    proofQuote: "Essayer sur un site du 31 avec quelqu'un qui connaît le métier vacation.",
    proofItems: [
      { title: "Équipe joignable", text: "Support basé Occitanie — pas ticket anonyme seul." },
      { title: "Démo métier", text: "Scénarios gardiennage, pas demo CRM générique." },
      { title: "France entière", text: "Produit non limité au 31 — local = confiance." },
    ],
    vsTitle: "Hotline générique vs support métier Occitanie",
    persona: {
      role: "Dirigeant gardiennage Toulouse / Occitanie",
      pains: [
        "support US décalé",
        "peur startup sans racines",
        "besoin démo en français métier",
        "clients locaux exigeants",
      ],
      jargon: ["vacation", "site", "essai", "Occitanie", "gardiennage"],
      objections: ["Vous êtes trop petit", "On est only local", "Paris suffit pour le SaaS"],
    },
    demo: {
      h2: "Essai sur un site du 31 cette semaine",
      lead: "Créneau démo + montage site pilote région toulousaine.",
      steps: [
        { label: "Contact", detail: "Échange avec équipe Tournefeuille." },
        { label: "Site pilote", detail: "Un contrat local monté dans PROGESTI." },
        { label: "Agents", detail: "2 agents pointent — test réel 48 h." },
        { label: "Bilan", detail: "Go / no-go avant fin essai 15 j." },
      ],
      uiLabel: "Occitanie · essai local",
      takeaway: "Le local rassure — le produit travaille sur tous vos sites France.",
    },
    bodySections: [
      {
        h2: "Basé Occitanie, clients partout",
        body: "Racines régionales ≠ limitation géographique : vacations Paris ou Lyon se gèrent identiquement.",
        bullets: ["Support FR", "Démo vacations réelles", "Essai sans CB"],
      },
      {
        h2: "Réseau gardiennage toulousain",
        body: "PME locales et croissance : même tarif public 29,99 € HT/mois — pas de « surdevis région ».",
      },
    ],
    faq: [
      { q: "Uniquement Occitanie ?", a: "Non — page locale SEO ; clients France entière." },
      { q: "Rencontre sur site ?", a: "Sur demande — démo visio souvent suffisante." },
      { q: "Essai 15 j ?", a: "Sans CB — démarrez en ligne." },
      { q: "Prix affiché ?", a: "29,99 € HT/mois — /tarifs." },
      { q: "Anglais / espagnol ?", a: "Produit FR métier — support en français." },
    ],
  },

  "astreinte-nuit": {
    empathyH2: "03h : ronde manquée — vous devez trancher sans appeler dix agents",
    empathyBody:
      "Vacations 22h–06h, backups de dernière minute, rondes critiques : la nuit amplifie chaque erreur. Planning nuit + pointage + main courante = réponse client au réveil, pas au lundi.",
    showcaseTitle: "Nuits staffées, nuits prouvées",
    showcaseSub: "Astreinte, rondes 02h, relève 06h.",
    productStrip: "Sécurité · nuit · astreinte",
    showcaseBadgeLeft: { title: "22h–06h", sub: "Vacation nuit" },
    proofH2: "Tenir la nuit comme le jour",
    proofQuote: "Client qui appelle à 3 h — vous devez voir titulaire, ronde, incident en live.",
    proofItems: [
      { title: "Titulaire confirmé", text: "Backup identifié avant 22 h." },
      { title: "Rondes nuit", text: "Passages attendus vs réels." },
      { title: "Relève matin", text: "Pointage 06h pour clôture shift." },
    ],
    vsTitle: "Tel perso exploit vs pilotage nuit PROGESTI",
    persona: {
      role: "Astreinte exploitation / gérant",
      pains: [
        "ronde 02h non faite",
        "titulaire nuit indispo sans backup",
        "incident 03h mal remonté",
        "fatigue décisionnelle",
      ],
      jargon: ["vacation nuit", "ronde", "astreinte", "relève", "main courante"],
      objections: ["La nuit on se débrouille", "Personne ne regarde l'app à 3 h", "On dort pas assez déjà"],
    },
    demo: {
      h2: "Incident 03h : titulaire, ronde, main courante",
      lead: "Client signale ronde manquée — vérification sans réveiller toute l'équipe.",
      steps: [
        { label: "Vacation", detail: "22h–06h titulaire confirmé + backup liste." },
        { label: "Ronde 02h", detail: "Point Q4 — passage 02h07 OK." },
        { label: "Alerte", detail: "Client dit Q6 manquant — historique Q6 02h31." },
        { label: "Clôture", detail: "Main courante + preuve envoyée 06h15." },
      ],
      uiLabel: "Nuit · site Delta",
      takeaway: "La nuit se pilote le jour — backups et rondes planifiés avant 22 h.",
    },
    bodySections: [
      {
        h2: "Préparer la nuit avant 18 h",
        body: "Backups nuit, rondes attachées, consignes urgence — pas d'impro à minuit.",
        bullets: ["Pool nuit", "Rondes critiques listées", "Contacts client visibles"],
      },
      {
        h2: "Main courante nocturne",
        body: "Incident 03h saisi mobile → exploitation notifiée → client informé au format pro.",
      },
    ],
    faq: [
      { q: "Alertes SMS exploitation ?", a: "Selon paramétrage — cœur = données vacations visibles." },
      { q: "Majorations nuit paie ?", a: "Export heures — règles paie chez vous." },
      { q: "Essai sur vacation nuit ?", a: "15 j sans CB — testez un site nuit réel." },
      { q: "Tarif ?", a: "29,99 € HT/mois inclus." },
      { q: "Page rondes ?", a: "Complémentaire — rondes = preuve passages." },
    ],
  },

  "pme-entreprises": {
    empathyH2: "Siège PME : une absence non couverte = confiance perdue",
    empathyBody:
      "Vos clients sont des PME avec accès 7h–19h stricts, visiteurs, audits internes. Une vacation accueil ratée — le directeur général juge votre société de gardiennage immédiatement, pas à la fin du contrat.",
    showcaseTitle: "Gardiennage PME clientes",
    showcaseSub: "Accueil, accès, preuves pour dirigeants exigeants.",
    productStrip: "Sécurité · PME · accueil",
    showcaseBadgeLeft: { title: "Siège client", sub: "7h–19h" },
    proofH2: "Fiabilité visible pour le client pro",
    proofQuote: "Le DG PME n'attend pas le rapport mensuel pour virer un prestataire.",
    proofItems: [
      { title: "Accès horaires", text: "Vacations calées sur plages client." },
      { title: "Audit interne", text: "Preuves prêtes visite surprise." },
      { title: "Facture claire", text: "Heures pointées = ligne facture." },
    ],
    vsTitle: "Prestataire « on verra » vs PME carrée",
    persona: {
      role: "Commercial gardiennage secteur tertiaire PME",
      pains: [
        "absence accueil vue par le DG",
        "audit sécurité client sans préavis",
        "consignes visiteurs mal tenues",
        "concurrence low-cost",
      ],
      jargon: ["accueil", "vacation", "PME", "audit", "accès", "réalisé"],
      objections: ["PME paie peu", "Un seul poste", "Client ne veut pas d'app"],
    },
    demo: {
      h2: "Audit surprise siège PME client",
      lead: "Visite QHSE client — preuves accueil semaine en cours.",
      steps: [
        { label: "Contrat", detail: "Accès 7h–19h — vacation accueil staffée." },
        { label: "Semaine", detail: "Pointages quotidiens sans trou." },
        { label: "Audit", detail: "Export présence + main courante visiteurs." },
        { label: "Facture", detail: "Heures alignées bon de commande PME." },
      ],
      uiLabel: "Siège PME · accueil",
      takeaway: "Vous vendez de la fiabilité — PROGESTI la documente.",
    },
    bodySections: [
      {
        h2: "Posts accueil et accès PME",
        body: "Peu de vacations mais zéro marge : titulaire, backup, consignes visiteurs — fiche site claire.",
        bullets: ["Plages horaires client", "Procédure visiteur", "Contact responsable site"],
      },
      {
        h2: "Renouvellement contrat PME",
        body: "Historique propre = renégociation sans sueur — export période en deux clics.",
      },
    ],
    faq: [
      { q: "Un seul site PME ?", a: "Oui — tarif TPE 29,99 € HT/mois." },
      { q: "Multi-sites PME nationale ?", a: "Chaque site = fiche ; vue portefeuille." },
      { q: "Essai ?", a: "15 j sans CB." },
      { q: "Vs grands comptes ?", a: "PME = peu de posts, exigence forte ; grands comptes = volume." },
      { q: "Badge visiteur ?", a: "Consignes orga — pas gestion badge hardware." },
    ],
  },

  "grands-comptes": {
    empathyH2: "84 sites, KPI sous 24 h : le tableur meurt ici",
    empathyBody:
      "Comité trimestriel, audits donneur d'ordre, SLA couverture : les grands comptes exigent volume ET vitesse de réponse. Structurez vacations et preuves à l'échelle — sans promettre un ERP enterprise.",
    showcaseTitle: "Grands comptes : échelle & SLA",
    showcaseSub: "KPI couverture, exports 90 j, contrôle écarts.",
    productStrip: "Sécurité · grands comptes · KPI",
    showcaseBadgeLeft: { title: "84 sites", sub: "Contrat cadre" },
    proofH2: "Tenir le cadre à l'échelle",
    proofQuote: "Export 90 jours en 24 h — ou le comité suivant est tendu.",
    proofItems: [
      { title: "KPI couverture", text: "98 %+ visible direction." },
      { title: "Audit DO", text: "Export période longue." },
      { title: "Écarts SLA", text: "Vacation manquante flaggée." },
    ],
    vsTitle: "Reporting manuel vs KPI grands comptes",
    persona: {
      role: "Directeur exploitation grands comptes",
      pains: [
        "comité sous 48 h",
        "84 sites incohérents",
        "SLA vacation manquante",
        "renouvellement annuel exigeant",
      ],
      jargon: ["SLA", "donneur d'ordre", "KPI", "contrat cadre", "audit"],
      objections: ["Le client impose son portail", "On a un SI interne", "PROGESTI trop PME"],
    },
    demo: {
      h2: "Comité trimestriel : export 90 j en une session",
      lead: "DO demande couverture + preuves — réponse avant 24 h.",
      steps: [
        { label: "Périmètre", detail: "84 sites contrat cadre Alpha." },
        { label: "KPI", detail: "Couverture 98,2 % sur trimestre." },
        { label: "Écart", detail: "1 vacation à analyser site #41." },
        { label: "Envoi", detail: "Export DO + plan action écart." },
      ],
      uiLabel: "Grands comptes · T1",
      takeaway: "L'échelle se gère par process — PROGESTI porte la data vacations.",
    },
    bodySections: [
      {
        h2: "Standardiser sans uniformiser bêtement",
        body: "Modèles vacations par typologie site — personnalisation consignes locale.",
        bullets: ["KPI direction", "Exports longue période", "Escalade écarts SLA"],
      },
      {
        h2: "Relation avec le portail client",
        body: "Export PROGESTI → votre mise en forme DO — pas de connecteur magique garanti.",
      },
    ],
    faq: [
      { q: "SSO / LDAP ?", a: "Discuter avec support — périmètre PME d'abord." },
      { q: "Multi-contrats cadres ?", a: "Oui — sites tagués par client DO." },
      { q: "Prix volume ?", a: "Tarif public 29,99 € HT/mois — grands comptes négocient services autour." },
      { q: "Essai ?", a: "15 j sans CB sur périmètre pilote." },
      { q: "Page contrats cadres ?", a: "Focus volumes & renouvellement — complémentaire." },
    ],
  },

  "contrats-cadres": {
    empathyH2: "Renouvellement cadre : prouver 12 mois d'exécution",
    empathyBody:
      "Volume contractuel 1200 h/mois : le réalisé pointé doit coller au cadre — sinon marge perdue ou client qui coupe. Suivi volumes + preuves = argument renouvellement, pas slide PowerPoint.",
    showcaseTitle: "Contrat cadre : prévu vs réalisé",
    showcaseSub: "Volumes, preuves, facturation alignée.",
    productStrip: "Sécurité · contrat cadre · volumes",
    showcaseBadgeLeft: { title: "1200 h/mois", sub: "Cadre" },
    proofH2: "L'exécution fait le renouvellement",
    proofQuote: "1188 h pointées vs 1200 h cadre — écart à expliquer avant signature.",
    proofItems: [
      { title: "Volume cadre", text: "Heures contractuelles visibles." },
      { title: "Réalisé", text: "Pointages consolidés mensuels." },
      { title: "Preuve renouvellement", text: "Historique 12 mois joint." },
    ],
    vsTitle: "Feeling commercial vs exécution cadre chiffrée",
    persona: {
      role: "Commercial / DA contrats cadres",
      pains: [
        "écart heures non vu avant renouvellement",
        "preuves 12 mois éparpillées",
        "facturation déconnectée cadre",
        "pénalités SLA",
      ],
      jargon: ["contrat cadre", "volume", "réalisé", "renouvellement", "SLA"],
      objections: ["Le juridique gère le cadre", "Excel suffit pour volumes", "Client fixe le format"],
    },
    demo: {
      h2: "Préparer le renouvellement cadre Alpha",
      lead: "Mars : 1188 h vs 1200 h — analyse avant comité.",
      steps: [
        { label: "Cadre", detail: "1200 h/mois réparties 84 sites." },
        { label: "Réalisé", detail: "1188 h pointées validées." },
        { label: "Analyse", detail: "-12 h site #7 arrêt client." },
        { label: "Dossier", detail: "Historique + factures → renouvellement." },
      ],
      uiLabel: "Contrat cadre · mars",
      takeaway: "Vous renouvelez avec des chiffres — pas avec des promesses.",
    },
    bodySections: [
      {
        h2: "Suivre le cadre mois par mois",
        body: "Alertes sous-consommation / dépassement — agir en cours de mois, pas au renouvellement.",
        bullets: ["Volumes par site", "Lien facturation", "Export 12 mois"],
      },
      {
        h2: "Cadre juridique vs exploitation",
        body: "PROGESTI suit l'exécution — le juridique rédige le contrat.",
      },
    ],
    faq: [
      { q: "Clause pénale SLA ?", a: "Traçabilité vacations — interprétation juridique chez vous." },
      { q: "Avenants volume ?", a: "Ajustez planning + suivi volumes manuellement." },
      { q: "Tarif ?", a: "29,99 € HT/mois — essai 15 j sans CB." },
      { q: "Grands comptes ?", a: "Même base — angle KPI vs angle volumes cadre." },
      { q: "Export comptable ?", a: "Lignes heures — votre ERP finalise." },
    ],
  },

  "petites-societes": {
    empathyH2: "8 agents, pas d'assistante : tout doit tenir en une main",
    empathyBody:
      "TPE gardiennage : le gérant fait planning, remplacements, factures et parfois vacation. Il vous faut l'essentiel — planning, pointage, factu — tout inclus sans usine à gaz ni devis sur mesure caché.",
    showcaseTitle: "TPE sécurité : l'essentiel tout inclus",
    showcaseSub: "Prise en main < 1 semaine — tarif public clair.",
    productStrip: "Sécurité · TPE · tout inclus",
    showcaseBadgeLeft: { title: "8 agents", sub: "1 gérant" },
    proofH2: "Professionnaliser sans embaucher",
    proofQuote: "29,99 € HT/mois — moins qu'une heure perdue en litige client.",
    proofItems: [
      { title: "Prise en main", text: "Sites + vacations en jours, pas mois." },
      { title: "Tout inclus", text: "Pas 12 modules payants." },
      { title: "Mobile agents", text: "Pointage simple dès semaine 1." },
    ],
    vsTitle: "Bricolage TPE vs stack pro accessible",
    persona: {
      role: "Gérant TPE 5–15 agents",
      pains: [
        "tout sur le gérant",
        "peur complexité SaaS",
        "budget serré",
        "clients qui demandent plus de preuves",
      ],
      jargon: ["TPE", "vacation", "facture", "pointage", "backup"],
      objections: ["Excel gratuit", "On grandira plus tard", "Pas le temps former"],
    },
    demo: {
      h2: "Semaine 1 : 8 agents opérationnels",
      lead: "Montage 3 sites, planning semaine, pointages, 1 facture brouillon.",
      steps: [
        { label: "J1", detail: "3 fiches sites + agents." },
        { label: "J2", detail: "Planning semaine publié." },
        { label: "J4", detail: "Premiers pointages OK." },
        { label: "J7", detail: "Brouillon facture client A." },
      ],
      uiLabel: "TPE · onboarding",
      takeaway: "Vous avez l'air plus grand que 8 agents — sans doubler la charge admin.",
    },
    bodySections: [
      {
        h2: "Ce qu'une TPE utilise vraiment",
        body: "Planning, pointage, facture légère, consignes — pas 50 écrans ERP.",
        bullets: ["Tarif public", "Support FR", "Essai 15 j sans CB"],
      },
      {
        h2: "Grandir ensuite",
        body: "Multi-sites et contrats cadres : même outil — pas de migration forcée.",
      },
    ],
    faq: [
      { q: "Minimum agents ?", a: "Pas de minimum — conçu TPE." },
      { q: "Prix caché ?", a: "29,99 € HT/mois affiché — /tarifs." },
      { q: "Essai ?", a: "15 j sans CB." },
      { q: "Vs grands comptes page ?", a: "TPE = simplicité ; grands comptes = échelle." },
      { q: "Formation ?", a: "Démo + docs — pas package consulting obligatoire." },
    ],
  },

  "controle-acces-consignes": {
    empathyH2: "Mauvais code portail : 20 minutes perdues, client agacé",
    empathyBody:
      "Consignes accès, codes, contacts urgence : l'agent remplaçant doit les avoir sur mobile à jour — PROGESTI organise l'info, ne vend pas de lecteur badge ni portique.",
    showcaseTitle: "Consignes accès au bon agent",
    showcaseSub: "Fiche site mobile — pas de hardware.",
    productStrip: "Sécurité · consignes · accès",
    showcaseBadgeLeft: { title: "Portail B", sub: "Code v2" },
    proofH2: "Information, pas matériel",
    proofQuote: "Remplaçant sans consigne = incident accès garanti.",
    proofItems: [
      { title: "Version consignes", text: "Màj datée visible avant poste." },
      { title: "Lecture tracée", text: "Agent a ouvert fiche — preuve orga." },
      { title: "Incident", text: "Mauvais code → main courante." },
    ],
    vsTitle: "Carnet codes vs fiche site PROGESTI",
    persona: {
      role: "Exploitation / chef de site",
      pains: [
        "codes dans SMS perdus",
        "consignes contradictoires",
        "remplaçant sans brief",
        "client demande traçabilité accès",
      ],
      jargon: ["consignes", "code", "portail", "accès", "fiche site"],
      objections: ["On a déjà un Excel codes", "Le client gère les badges", "Pas notre métier"],
    },
    demo: {
      h2: "Remplaçant sur portail B — consignes v2",
      lead: "Agent vacation lit code à jour — incident évité.",
      steps: [
        { label: "Fiche", detail: "Code portail B v2 publié hier." },
        { label: "Brief", detail: "Agent ouvre fiche 10 min avant poste." },
        { label: "Accès", detail: "Entrée OK — pointage début." },
        { label: "Si erreur", detail: "Incident saisi + contact client." },
      ],
      uiLabel: "Consignes · portail B",
      takeaway: "Organisation des infos d'accès — le hardware reste chez le client.",
    },
    bodySections: [
      {
        h2: "Périmètre clair : orga, pas contrôle physique",
        body: "Codes, procédures, contacts — pas de promesse lecteur badge intégré.",
        bullets: ["Fiche site versionnée", "Mobile agent", "Lien main courante"],
      },
      {
        h2: "Màj consignes sans email perdu",
        body: "Publication fiche → agents affectés voient la version — fin du « je ne l'avais pas reçu ».",
      },
    ],
    faq: [
      { q: "Intégration contrôle d'accès physique ?", a: "Non — infos et procédures pour agents." },
      { q: "Photos plans ?", a: "Texte + contacts — pas GED lourde." },
      { q: "Essai ?", a: "15 j sans CB sur un site à consignes complexes." },
      { q: "Prix ?", a: "29,99 € HT/mois." },
      { q: "Page sûreté ?", a: "Sûreté = global site ; ici = focus consignes accès." },
    ],
  },

  "main-courante": {
    empathyH2: "40 messages WhatsApp ≠ un registre d'incidents",
    empathyBody:
      "Tentative effraction, conflit visiteur, anomalie accès : la main courante horodatée liée au site et à la vacation vaut plus qu'un fil de groupe — exploitation et client informés proprement.",
    showcaseTitle: "Registre incidents exploitable",
    showcaseSub: "Saisie mobile → exploitation → client.",
    productStrip: "Sécurité · main courante · incidents",
    showcaseBadgeLeft: { title: "21h40", sub: "Incident" },
    proofH2: "Chaque incident compte",
    proofQuote: "Effraction tentée : horodatage, type, actions — pas emoji dans un groupe.",
    proofItems: [
      { title: "Saisie terrain", text: "Agent mobile sur vacation en cours." },
      { title: "Typologie", text: "Intrusion, accès, conflit — filtres export." },
      { title: "Compte-rendu client", text: "Horodaté, lié site." },
    ],
    vsTitle: "WhatsApp incidents vs main courante PROGESTI",
    persona: {
      role: "Agent / exploitation nuit",
      pains: [
        "incidents perdus dans le groupe",
        "client demande CR immédiat",
        "pas de lien vacation",
        "doublons exploitation",
      ],
      jargon: ["main courante", "incident", "compte-rendu", "vacation", "horodatage"],
      objections: ["On appelle direct", "Trop long à saisir", "Les agents oublient"],
    },
    demo: {
      h2: "Effraction 21h40 : de la saisie au CR client",
      lead: "Mobile agent → notification exploitation → export client.",
      steps: [
        { label: "Saisie", detail: "Agent en poste — type intrusion tentée." },
        { label: "Notify", detail: "Exploitation alertée 21h42." },
        { label: "Actions", detail: "Police + contact client notés." },
        { label: "CR", detail: "Compte-rendu horodaté envoyé 22h10." },
      ],
      uiLabel: "Main courante · nuit",
      takeaway: "Registre pro — pas archive chat illisible.",
    },
    bodySections: [
      {
        h2: "Lier incident, site, vacation",
        body: "Chaque entrée rattachée au contexte — qui était en poste, où, quand.",
        bullets: ["Types configurables", "Pièces note texte", "Export période"],
      },
      {
        h2: "PC sécurité et supervision",
        body: "Flux visible exploitation / PC — voir page PC sécurité (humain, pas vidéo).",
      },
    ],
    faq: [
      { q: "Photos incident ?", a: "Selon app — au minimum texte horodaté." },
      { q: "Lien police / assurance ?", a: "Vos procédures — PROGESTI trace le registre." },
      { q: "Essai ?", a: "15 j sans CB." },
      { q: "Tarif ?", a: "29,99 € HT/mois inclus." },
      { q: "Preuves audit ?", a: "Export main courante + pointages — page preuves." },
    ],
  },

  ssiap: {
    empathyH2: "Organiser les postes SSIAP, pas jouer le centre de formation",
    empathyBody:
      "Vacations SSIAP 1, backups qualifiés, preuves de présence : PROGESTI aide l'exploitation à staffer et tracer — sans vendre formation SSIAP, certification ou conseil réglementaire incendie.",
    showcaseTitle: "SSIAP : orga postes & présence",
    showcaseSub: "Planning, consignes site — hors formation.",
    productStrip: "Sécurité · SSIAP · orga",
    showcaseBadgeLeft: { title: "Poste SSIAP 1", sub: "Tertiaire" },
    proofH2: "Organisationnel, pas réglementaire",
    proofQuote: "Former au SSIAP ≠ planifier qui tient le poste mardi nuit.",
    proofItems: [
      { title: "Vacations poste", text: "SSIAP staffé vs compétence agent." },
      { title: "Consignes site", text: "Procédures évacuation accessibles — contenu client." },
      { title: "Preuve présence", text: "Pointage poste pour DO." },
    ],
    vsTitle: "Confusion formation vs orga SSIAP",
    persona: {
      role: "Exploitation société avec postes SSIAP",
      pains: [
        "agent non SSIAP affecté par erreur",
        "client confond logiciel et formation",
        "preuve présence poste incendie",
        "backups SSIAP rares",
      ],
      jargon: ["SSIAP", "poste", "vacation", "évacuation", "APS"],
      objections: ["Vous formez au SSIAP ?", "On a un ERP RH compétences", "Réglementation trop complexe"],
    },
    demo: {
      h2: "Staffer poste SSIAP 1 tertiaire — bon profil",
      lead: "Vacation couverte agent SSIAP 1 — consignes évacuation lues.",
      steps: [
        { label: "Poste", detail: "Vacation SSIAP 1 immeuble tertiaire." },
        { label: "Profil", detail: "Agent filtré SSIAP 1 — pas APS seul." },
        { label: "Consignes", detail: "Procédure évacuation fiche site." },
        { label: "Preuve", detail: "Pointage poste + historique DO." },
      ],
      uiLabel: "SSIAP · orga postes",
      takeaway: "Clarté : PROGESTI orga & trace — formation reste votre filière agréée.",
    },
    bodySections: [
      {
        h2: "Ce que PROGESTI fait sur SSIAP",
        body: "Affectation compétence, vacations, pointages, consignes site fournies par le client.",
        bullets: ["Filtre SSIAP affectation", "Backups listés", "Export présence"],
      },
      {
        h2: "Ce que PROGESTI ne fait pas",
        body: "Pas formation SSIAP, pas avis réglementaire ERP, pas remplacement service sécurité incendie.",
      },
    ],
    faq: [
      { q: "PROGESTI forme au SSIAP ?", a: "Non — organisation postes et preuves uniquement." },
      { q: "Gestion habilitations ?", a: "Champ compétence agent — pas dossier réglementaire complet." },
      { q: "Essai ?", a: "15 j sans CB." },
      { q: "Prix ?", a: "29,99 € HT/mois." },
      { q: "SSIAP vs gardiennage APS ?", a: "Même outil — filtres compétence à l'affectation." },
    ],
  },

  "sites-sensibles": {
    empathyH2: "Sites exigeants : procédures tenues, sans discours défense",
    empathyBody:
      "Enjeux ops forts — consignes renforcées, traçabilité stricte, donneur d'ordre vigilant. PROGESTI parle gardiennage privé opérationnel — pas promesses militaires / défense invendables.",
    showcaseTitle: "Sites sensibles côté exploitation",
    showcaseSub: "Procédures, traces, consignes validées.",
    productStrip: "Sécurité · sites sensibles · ops",
    showcaseBadgeLeft: { title: "Site enjeu", sub: "Procédures v4" },
    proofH2: "Ops réalistes, claims sobres",
    proofQuote: "Traçabilité pro — pas « solution anti-terrorisme » marketing.",
    proofItems: [
      { title: "Procédures", text: "Versions validées, lecture agent." },
      { title: "Traçabilité", text: "Historique complet activité." },
      { title: "Périmètre honnête", text: "Gardiennage privé — pas défense." },
    ],
    vsTitle: "Marketing défense vs ops gardiennage",
    persona: {
      role: "Exploitation sites à procédures renforcées",
      pains: [
        "DO exigeant sur traces",
        "consignes classification floue marketing",
        "agents non briefés",
        "audits fréquents",
      ],
      jargon: ["consignes", "donneur d'ordre", "traçabilité", "procédure", "vacation"],
      objections: ["Vous êtes agréés défense ?", "Concurrent promet plus", "Trop sensible pour cloud"],
    },
    demo: {
      h2: "Audit DO site à procédures renforcées",
      lead: "Consignes v4 + historique activité 30 j — sans claim défense.",
      steps: [
        { label: "Consignes", detail: "Version validée publiée — lecture tracée." },
        { label: "Vacations", detail: "Postes couverts profils filtrés." },
        { label: "Activité", detail: "Pointages + main courante 30 j." },
        { label: "Audit", detail: "Export DO — périmètre ops gardiennage." },
      ],
      uiLabel: "Site sensible · ops",
      takeaway: "Sérieux opérationnel — pas sur-promesse sectorielle.",
    },
    bodySections: [
      {
        h2: "Procédures et consignes renforcées",
        body: "Contenu fourni par le client — PROGESTI distribue, trace lecture, historise activité.",
        bullets: ["Versioning", "Agents affectés seulement", "Export audit"],
      },
      {
        h2: "Bornes du discours",
        body: "Pas site défense / militaire promis — gardiennage privé classique à exigence haute.",
      },
    ],
    faq: [
      { q: "Site militaire / défense ?", a: "Non — pas promesses sectorielles — orga gardiennage privé." },
      { q: "Hébergement données ?", a: "Discuter exigences client avec support." },
      { q: "Essai ?", a: "15 j sans CB sur site pilote." },
      { q: "Tarif ?", a: "29,99 € HT/mois public." },
      { q: "Vs sûreté ?", a: "Sensibles = enjeu procédure ; sûreté = multi-sites client." },
    ],
  },

  "btp-chantiers": {
    empathyH2: "Chantier : portail 6 h, visiteurs badges, renfort dimanche",
    empathyBody:
      "Gardiennage BTP : horaires travaux, accès fluctuants, MOA exigeante. Vacations week-end et preuves avant réception — angle chantier, pas immeuble tertiaire classique.",
    showcaseTitle: "Gardiennage chantiers BTP",
    showcaseSub: "Portails, badges visiteurs, renforts week-end.",
    productStrip: "Sécurité · BTP · chantier",
    showcaseBadgeLeft: { title: "Lyon Est", sub: "Chantier actif" },
    proofH2: "Preuves pour la MOA",
    proofQuote: "Réception chantier : qui tenait le portail samedi ?",
    proofItems: [
      { title: "Horaires travaux", text: "Vacations alignées phasage." },
      { title: "Visiteurs", text: "Consignes badges — orga, pas hardware." },
      { title: "Week-end", text: "Renforts tracés pointage." },
    ],
    vsTitle: "Gardiennage tertiaire vs process chantier",
    persona: {
      role: "Exploitation gardiennage BTP",
      pains: [
        "portail ouvert trop tôt",
        "visiteurs non tracés orga",
        "renfort dimanche oublié facture",
        "MOA demande preuves réception",
      ],
      jargon: ["chantier", "MOA", "portail", "badge visiteur", "vacation"],
      objections: ["Chaque chantier unique", "Durée courte", "Client généraliste gère"],
    },
    demo: {
      h2: "Week-end chantier Lyon Est — renfort portail",
      lead: "Portail 6h, badges visiteurs, pointages pour MOA.",
      steps: [
        { label: "Phase", detail: "Vacations alignées planning travaux." },
        { label: "Samedi", detail: "Renfort portail affecté 6h–14h." },
        { label: "Visiteurs", detail: "Consignes badges — main courante si refus." },
        { label: "MOA", detail: "Export pointages semaine réception." },
      ],
      uiLabel: "Chantier · week-end",
      takeaway: "Chantier = temporalité courte — preuves et factu doivent suivre.",
    },
    bodySections: [
      {
        h2: "Vacations liées au phasage",
        body: "Montée / fondation / finition : adapter posts et horaires — clôturer chantier proprement.",
        bullets: ["Site temporaire", "Renforts week-end", "Export MOA"],
      },
      {
        h2: "Badges et accès",
        body: "Organisation consignes visiteurs — lecteurs badges restent MOA / entreprise générale.",
      },
    ],
    faq: [
      { q: "Chantier vs site industriel ?", a: "BTP = temporaire phasé ; industrie = site stable." },
      { q: "Multi-chantiers ?", a: "Un site PROGESTI par chantier — vue portefeuille." },
      { q: "Essai ?", a: "15 j sans CB." },
      { q: "Prix ?", a: "29,99 € HT/mois." },
      { q: "Coordination entreprise générale ?", a: "Consignes partagées via fiche — pas ERP BTP." },
    ],
  },

  "pc-securite": {
    empathyH2: "PC sécurité : coordonner l'humain, pas regarder 400 caméras",
    empathyBody:
      "Poste central sur site : supervision agents, flux main courante, consignes à jour — exploitation humaine. PROGESTI n'est pas un VMS ni de la télésurveillance vidéo ; c'est le tableau de bord ops du PC.",
    showcaseTitle: "Poste central · exploitation humaine",
    showcaseSub: "Agents, main courante, consignes — temps réel.",
    productStrip: "Sécurité · PC · supervision ops",
    showcaseBadgeLeft: { title: "PC Delta", sub: "2 agents + sup." },
    proofH2: "Superviser sans usurper la vidéo",
    proofQuote: "Le PC coordonne les agents — la vidéo reste autre système.",
    proofItems: [
      { title: "Vue agents", text: "Postes, vacations, statuts." },
      { title: "Flux incidents", text: "Main courante temps réel." },
      { title: "Consignes", text: "Procédures à jour partagées." },
    ],
    vsTitle: "VMS vidéo vs PC exploitation PROGESTI",
    persona: {
      role: "Superviseur PC / chef de site",
      pains: [
        "incidents noyés dans radio",
        "consignes obsolètes PC",
        "confusion avec télésurveillance",
        "agents non localisés orga",
      ],
      jargon: ["PC sécurité", "supervision", "main courante", "consignes", "vacation"],
      objections: ["On a déjà la vidéo", "PC ne saisit pas", "Double écran"],
    },
    demo: {
      h2: "Shift PC site Delta — coordination sans VMS",
      lead: "2 agents + superviseur : main courante live, consignes, vacations.",
      steps: [
        { label: "Shift", detail: "Vacations jour visibles PC." },
        { label: "Incident", detail: "Main courante remontée 14h22." },
        { label: "Consigne", detail: "Procédure v3 envoyée agents mobile." },
        { label: "Clôture", detail: "Synthèse shift exportée exploitation." },
      ],
      uiLabel: "PC sécurité · Delta",
      takeaway: "Humain d'abord — vidéo reste outil séparé si présent.",
    },
    bodySections: [
      {
        h2: "Rôle du PC dans PROGESTI",
        body: "Consulter vacations, suivre main courante, pousser consignes — pas flux RTSP caméras.",
        bullets: ["Vue site temps réel orga", "Historique shift", "Lien agents mobile"],
      },
      {
        h2: "Pas télésurveillance",
        body: "Centrale distante vidéo = autre métier — cette page = PC sur site / exploitation locale.",
      },
    ],
    faq: [
      { q: "Intégration caméras ?", a: "Non — pas VMS / télésurveillance." },
      { q: "Main courante ?", a: "Oui — flux central — voir page main courante." },
      { q: "Essai ?", a: "15 j sans CB sur site avec PC." },
      { q: "Tarif ?", a: "29,99 € HT/mois." },
      { q: "Plusieurs PC ?", a: "Sites distincts — vue portefeuille direction." },
    ],
  },

  "vacation-non-pourvue": {
    empathyH2: "Le pire moment : découvrir le trou par le client",
    empathyBody:
      "Un poste vide à l'ouverture, un portail sans agent à 22h : le donneur d'ordre appelle avant votre exploitation. La vacation non pourvue n'est pas un « imprévu » — c'est un signal que le planning n'avait pas de filet.",
    showcaseTitle: "Trous rouges avant l'appel client",
    showcaseSub: "Couverture visible, backups listés, historique de qui était prévu.",
    productStrip: "Sécurité · couverture · alertes",
    showcaseBadgeLeft: { title: "Trou 22h–06h", sub: "Alerte J-0" },
    proofH2: "Anticiper la vacation non pourvue",
    proofQuote: "Si le trou est rouge à 17h, le client n'a pas à l'apprendre à 22h.",
    proofItems: [
      { title: "Statut couverture", text: "Titulaire / backup / trou — lisible d'un coup d'œil." },
      { title: "Alerte anticipée", text: "Vacations sans confirmation visibles avant le créneau." },
      { title: "Preuve d'affectation", text: "Qui a été prévu, qui a remplacé, à quelle heure." },
    ],
    vsTitle: "WhatsApp panique vs trou visible dans le planning",
    persona: {
      role: "Resp. exploitation / gérant — 20 à 60 agents, multi-sites",
      pains: [
        "client qui découvre le poste vide avant vous",
        "planning « OK » sur Excel mais personne confirmée",
        "backup introuvable à 21h sur WhatsApp",
        "litige « vous n'étiez pas là » sans historique d'affectation",
      ],
      jargon: ["vacation non pourvue", "trou", "titulaire", "backup", "confirmation", "donneur d'ordre"],
      objections: ["On voit bien qui manque", "Les agents confirment toujours au feeling", "Trop d'alertes = on ignore"],
    },
    demo: {
      h2: "Vendredi 17h40 : sauver la vacation 22h–06h",
      lead: "Trou rouge → backup briefé → client qui ne sait jamais qu'il y a eu un imprévu.",
      steps: [
        { label: "Alerte", detail: "Vacation Entrepôt Nord sans titulaire confirmé — statut rouge." },
        { label: "Pool", detail: "3 agents nuit dispo, 1 déjà briefé sur le site." },
        { label: "Affectation", detail: "Backup L. + consignes lues 17h52." },
        { label: "Suite", detail: "Pointage 21h58 — historique prêt si audit." },
      ],
      uiLabel: "Couverture · Entrepôt Nord",
      takeaway: "Le trou se gère dans le planning — pas dans la boîte vocale du client.",
    },
    bodySections: [
      {
        h2: "Qu'est-ce qu'une vacation non pourvue (terrain)",
        body: "Ce n'est pas seulement « personne n'est venu ». C'est l'absence de titulaire confirmé + absence de backup prêt avant le créneau. PROGESTI rend ce statut visible pour l'exploitation.",
        bullets: ["Confirmation vs simple inscription Excel", "Backup nommé avant le créneau", "Alerte J-0 / J-1 selon vos règles d'orga"],
      },
      {
        h2: "Process anti-trou pour sociétés de gardiennage",
        body: "Cartographier les postes critiques (accueil, portail, site industriel), imposer un backup sur les nuits, et traiter les alertes rouges comme une file d'attente — pas comme un SMS oublié.",
        h3: [
          { title: "Posts critiques", body: "Ceux où le client voit le trou en 10 minutes." },
          { title: "Nuits & week-ends", body: "Pool backup dédié, pas le même numéro WhatsApp pour tout." },
        ],
      },
      {
        h2: "Lien avec remplacement et facturation",
        body: "Une vacation sauvée doit rester traçable : qui a remplacé, quelles heures pointées, quelle ligne facturée. Voir aussi remplacement urgence et facturation gardiennage.",
      },
    ],
    faq: [
      { q: "C'est une page planning ?", a: "Non — angle problème « trou / non pourvue ». Le planning a sa page process." },
      { q: "Alertes push ?", a: "L'outil expose les trous ; vos règles d'exploitation décident qui traite." },
      { q: "Essai sur nos vrais postes ?", a: "Oui — 15 j sans CB." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
      { q: "Vs Excel ?", a: "Excel ne flagge pas le trou à 17h — il le révèle le lundi." },
    ],
    ctaPrimaryLabel: "Essayer sur vos postes à risque",
    ctaSecondaryLabel: "Voir la démo couverture",
  },

  "remplacement-urgence": {
    empathyH2: "21h : le titulaire se désiste — et le fil WhatsApp explose",
    empathyBody:
      "Remplacement d'urgence n'est pas « trouver quelqu'un ». C'est trouver le bon agent (compétences, site déjà briefé), lui pousser les consignes, tracer le changement, et prouver au client que le poste a tenu.",
    showcaseTitle: "Backup affecté, briefé, pointé",
    showcaseSub: "De l'alerte absence à la présence réelle en poste.",
    productStrip: "Sécurité · backup · urgence",
    showcaseBadgeLeft: { title: "Désistement 21h10", sub: "Backup 21h18" },
    proofH2: "Remplacer sans perdre la preuve",
    proofQuote: "Le client ne veut pas votre stress — il veut un agent en poste avec les bonnes consignes.",
    proofItems: [
      { title: "Pool backup", text: "Disponibilités nuit / week-end visibles." },
      { title: "Brief mobile", text: "Consignes site lues avant prise de poste." },
      { title: "Trace", text: "Qui a remplacé qui, horodatage, pointage." },
    ],
    vsTitle: "Chaîne WhatsApp vs remplacement tracé dans PROGESTI",
    persona: {
      role: "Chef d'exploitation / astreinte bureau — société 25–100 agents",
      pains: [
        "désistement 1 h avant vacation",
        "backup qui arrive sans connaître le digicode",
        "historique flou pour le donneur d'ordre",
        "double affectation par erreur sur deux sites",
      ],
      jargon: ["backup", "remplacement", "astreinte", "confirmation", "consignes", "vacation"],
      objections: ["WhatsApp est plus rapide", "On connaît tous nos agents", "Trop de clics en urgence"],
    },
    demo: {
      h2: "Remplacement en 8 minutes chrono",
      lead: "Désistement → pool → affectation → brief → pointage.",
      steps: [
        { label: "Signal", detail: "Titulaire M. se désiste 21h10 — vacation 22h–06h." },
        { label: "Choix", detail: "Pool : 3 dispos ; R. déjà passé sur le site." },
        { label: "Brief", detail: "Consignes portail + contacts poussés mobile 21h18." },
        { label: "Preuve", detail: "Pointage 21h54 — historique remplacement exportable." },
      ],
      uiLabel: "Remplacement · Portail Sud",
      takeaway: "Urgence maîtrisée = poste tenu + dossier propre le lendemain.",
    },
    bodySections: [
      {
        h2: "Checklist remplacement de dernière minute",
        body: "Identifier le poste, vérifier compétences (ex. SSIAP si requis — orga, pas formation), choisir un agent briefable, pousser consignes, confirmer pointage.",
        bullets: ["Prioriser agents déjà passés sur le site", "Éviter double booking multi-sites", "Tracer le motif de remplacement"],
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
      { q: "Différence avec vacation non pourvue ?", a: "Non pourvue = voir le trou ; remplacement = process pour le combler en urgence." },
      { q: "SMS automatique ?", a: "L'affectation et le brief sont dans l'outil ; vos canaux d'appel restent les vôtres." },
      { q: "Essai ?", a: "15 j sans CB." },
      { q: "Tarif ?", a: "Dès 29,99 € HT/mois." },
      { q: "Lien agents ?", a: "Oui — page gestion agents pour le pool compétences." },
    ],
    ctaPrimaryLabel: "Essayer sur un remplacement réel",
    ctaSecondaryLabel: "Voir la démo backup",
  },
};

