/** Pack EV-21 → EV-36 + 3 gaps SEO */
export const PACK_PART3 = {
  "EV-21": {
    seoTitle: "Guide — organiser l’entretien d’espaces verts sans chaos",
    seoDesc:
      "Méthode en 6 étapes : inventaire sites → fréquences → tournées → pointage → preuves → facture. Pour nouveaux responsables d’exploitation EV.",
    sub: "Vous venez de reprendre l’exploitation. Les sites sont « dans la tête de Michel ». Voici l’ordre des opérations pour sortir du folklore sans tout casser.",
    empathyH2: "Structurer n’est pas « mettre un logiciel » : c’est une séquence",
    empathyBody:
      "Installer un outil sur un inventaire flou produit un bel outil flou. Inventoriez, cadrez les fréquences, puis seulement automatisez la semaine. Ce guide est éducatif — le pilier reste la money page.",
    bodySections: [
      {
        h2: "Les 6 étapes (ordre non négociable)",
        body: "1) Inventaire sites/accès. 2) Fréquences par prestation. 3) Découpage tournées/secteurs. 4) Pointage minimal. 5) Preuves sur les sites litige. 6) Facture du réalisé. Sautez une étape → vous reviendrez la faire sous stress.",
        bullets: [
          "Semaine 1–2 : inventaire + fréquences",
          "Semaine 3 : tournée pilote",
          "Semaine 4 : preuves + facture",
        ],
      },
      {
        h2: "Pièges classiques",
        body: "Tout paramétrer en haute saison, exiger 12 photos/site dès J1, laisser Excel vivre en parallèle « au cas où ».",
      },
      {
        h2: "Maillage process",
        body: "Après le guide → planning, pointage, preuves, devis/factu, remplacer Excel.",
      },
    ],
    faq: [
      {
        q: "Combien de temps pour un portefeuille de 40 sites ?",
        a: "Comptez 2–3 semaines en demi-teinte (1–2 h/jour), pas un week-end héroïque.",
      },
      {
        q: "Je dois tout faire avant l’essai ?",
        a: "Non. L’essai accélère les étapes 3–6 sur un pilote.",
      },
      {
        q: "Qui anime la méthode en interne ?",
        a: "Un responsable exploitation + un binôme terrain volontaire. Pas le stagiaire seul.",
      },
      {
        q: "Lien avec contrats annuels ?",
        a: "Quand l’exécution est propre, le renew devient un dossier, pas une angoisse.",
      },
      {
        q: "Et après ?",
        a: "Essai 15 j sur 10 sites — appliquez les 6 étapes pour de vrai.",
      },
    ],
    demoExtra: {
      uiToolbar: "Guide · Checklist 6 étapes · Nouveau resp. explo",
      uiAlert: "N’inversez pas : inventaire avant mobile, preuves avant renew",
      uiHint: "Éducatif + liens process — pas une money page déguisée",
      uiRows: [
        { left: "1. Inventaire sites/accès", right: "40 fiches", status: "Fait", meta: "Digicodes à jour", tone: "ok" },
        { left: "2. Fréquences prestations", right: "Tonte/haies/désherbage", status: "Fait", meta: "Attachées contrats", tone: "ok" },
        { left: "3. Tournées secteurs", right: "Nord / Ouest", status: "En cours", meta: "Pilote S18", tone: "info" },
        { left: "4–6. Pointage → preuves → factu", right: "Semaine 4", status: "À ouvrir", meta: "Essai recommandé", tone: "warn" },
      ],
    },
  },

  "EV-22": {
    seoTitle: "Preuves de passage espaces verts — dossier litige en 1 écran",
    seoDesc:
      "Mail « vous n’êtes pas venus » : historique, pointages, photos, reports motivés. Protégez renew et équipes. Essai 15 jours.",
    sub: "17h02, mail syndic en majuscules. Vous avez 12 minutes avant que le commercial promette n’importe quoi. Il vous faut un dossier, pas un fil WhatsApp.",
    empathyH2: "Le litige se gagne avant le litige : pendant le passage",
    empathyBody:
      "La preuve ne se crée pas à 17h. Elle se capture à 8h42. Cette page assemble le dossier ; la page pointage capture ; la page photos ajoute l’AV/AP ; la page syndic parle audience.",
    bodySections: [
      {
        h2: "Cas — Réponse en un écran, Résidence des Tilleuls",
        body: "Derniers passages, motif S17 pluie, photo haies S18, prochaine date. Pièce jointe envoyée. Ton factuel. Le conseil syndical reçoit des faits.",
        bullets: [
          "Horodatage + site + équipe",
          "Motifs de report opposables",
          "Visuel si configuré",
        ],
      },
      {
        h2: "Objection « flicage »",
        body: "Sans preuve, c’est l’équipe qui trinque sous accusation. La preuve protège aussi le terrain.",
      },
      {
        h2: "Livrable",
        body: "PDF/historique période + exceptions + prochain créneau.",
      },
    ],
    faq: [
      {
        q: "Différence avec pointage ?",
        a: "Pointage = capture. Preuves = assemblage et usage litige/renew.",
      },
      {
        q: "Sans photo, la preuve suffit ?",
        a: "Souvent oui (horodatage). La photo tranche les débats de rendu.",
      },
      {
        q: "Accès refusé ?",
        a: "Statut + photo du blocage = meilleure défense.",
      },
      {
        q: "Durée de conservation ?",
        a: "Alignez-vous sur vos besoins renew / litige — à cadrer en essai.",
      },
      {
        q: "Essai ?",
        a: "15 jours — activez preuves sur 5 sites « chauds ».",
      },
    ],
    demoExtra: {
      uiToolbar: "Dossier preuve · Tilleuls · 17h02",
      uiAlert: "Litige ouvert — assemblage auto pointages + reports + photos",
      uiHint: "Réponse factuelle en un écran · renew protégé",
      uiRows: [
        { left: "Passage 12/05 08:42", right: "Tonte · Équipe A", status: "Prouvé", meta: "Horodatage + site", tone: "ok" },
        { left: "Report S17", right: "Orage 14 mm", status: "Motif tracé", meta: "Client informé", tone: "warn" },
        { left: "Haies 19/05", right: "AV 07:55 · AP 11:20", status: "Visuel OK", meta: "Rendu contesté → tranché", tone: "ok" },
        { left: "Réponse syndic", right: "Dossier joint", status: "Envoyé 17:11", meta: "Ton factuel", tone: "info" },
      ],
    },
  },

  "EV-23": {
    seoTitle: "Logiciel paysagiste TPE & indépendants — simple et abordable",
    seoDesc:
      "TPE EV < 10 personnes : finis les soirées Excel, oublis client, facture du dimanche. Simplicité + essai 15 j. Dès 29,99 € HT.",
    sub: "Malik, indépendant + 2 salariés, 18 clients. Il connaît tout par cœur — jusqu’à la haie oubliée et la soirée facture de 3 heures.",
    empathyH2: "Trop petit pour un logiciel ? Trop grand pour le cahier",
    empathyBody:
      "Le pilier parle PME 15–40. Ici l’angle est radicalement TPE : peu d’écrans, rentabilité rapide, zéro usine à gaz. Le prix ne doit pas faire plus peur que le dimanche Excel.",
    bodySections: [
      {
        h2: "Cas — 18 clients, une haie oubliée, un dimanche sauvé",
        body: "Malik voit la semaine sur mobile, pointe, photo haie, facture le forfait + 1 ponctuel. Temps admin : une demi-heure, pas trois.",
        bullets: [
          "Paramétrage express",
          "Mobile first",
          "Facture simple",
        ],
      },
      {
        h2: "Objection prix",
        body: "Une haie oubliée + une soirée stress coûtent plus cher qu’un mois d’abonnement. L’essai sans CB tranche.",
      },
      {
        h2: "Quand passer au mode PME",
        body: "Au-delà de ~12 personnes / 40 sites, ouvrez planning engins et multi-sites avancé.",
      },
    ],
    faq: [
      {
        q: "Je suis seul : ça sert ?",
        a: "Oui pour ne plus oublier et facturer proprement — surtout si vous grossissez.",
      },
      {
        q: "Formation longue ?",
        a: "Non. Objectif : être opérationnel en une après-midi sur 10 clients.",
      },
      {
        q: "Différence avec le pilier ?",
        a: "Même produit, angle simplicité/prix/TPE. Le pilier = vision PME complète.",
      },
      {
        q: "WhatsApp ?",
        a: "Gardez-le pour vos clients si besoin ; plus comme planning d’équipe.",
      },
      {
        q: "Tarif ?",
        a: "Dès 29,99 € HT/mois — essai 15 j.",
      },
    ],
    demoExtra: {
      uiToolbar: "TPE · Malik · 18 clients · Semaine",
      uiAlert: "Haie Client B.addée en ponctuel — ne disparaîtra plus à la facture",
      uiHint: "Peu d’écrans · mobile · dimanche Excel terminé",
      uiRows: [
        { left: "Client A — tonte", right: "Mar 8h", status: "Fait", meta: "Pointé", tone: "ok" },
        { left: "Client B — haie", right: "Ponctuel urgence", status: "Facturable", meta: "Photo AP", tone: "info" },
        { left: "Client C — forfait", right: "Jeudi", status: "Planifié", meta: "Rappel veille", tone: "neutral" },
        { left: "Facture semaine", right: "Forfait + 1 ponctuel", status: "30 min", meta: "Plus 3 h dimanche", tone: "ok" },
      ],
    },
  },

  "EV-24": {
    seoTitle: "Grands parcs & sites étendus — planning par zones",
    seoDesc:
      "1 adresse, N zones (parc 28 ha, campus, domaine) : priorisez entrée, playground, massifs fond. ≠ multi-sites. Essai 15 j.",
    sub: "Parc des Moulins, 28 ha, 12 zones, 2 équipes. L’entrée Instagram est impeccable ; le fond de parc est une jungle. Sans zones, pas de pilotage.",
    empathyH2: "Un grand site n’est pas « un gros client » : c’est une carte",
    empathyBody:
      "Multi-sites = N adresses. Ici 1 adresse, N zones avec priorités différentes. Les équipes se perdent, les priorités aussi, si tout est coché « parc OK ».",
    bodySections: [
      {
        h2: "Cas — 12 zones, prioriser entrée + playground",
        body: "Matin : zones A/B (entrée, jeux). Après-midi : massifs fond si charge OK. Orage : on protège les zones usagers, on reporte le fond.",
        bullets: [
          "Zones nommément planifiées",
          "Priorités usagers vs fond",
          "2 équipes sans collision",
        ],
      },
      {
        h2: "≠ multi-sites",
        body: "Ne cannibalisez pas : intents et démos différents.",
      },
      {
        h2: "Livrable direction de parc",
        body: "État des zones de la semaine + photos des zones usagers.",
      },
    ],
    faq: [
      {
        q: "Combien de zones max ?",
        a: "Autant que nécessaire pour piloter — 8 à 20 est courant sur 20–40 ha.",
      },
      {
        q: "Engins sur grand site ?",
        a: "Affectez par zone pour éviter que deux équipes se croisent sur la même allée.",
      },
      {
        q: "Public / billetterie / événements ?",
        a: "Bloquez des fenêtres « événement » sur les zones concernées.",
      },
      {
        q: "Lien collectivités ?",
        a: "Souvent oui si parc public — reporting DST en plus.",
      },
      {
        q: "Essai ?",
        a: "15 jours — découpez votre parc en zones réelles.",
      },
    ],
    demoExtra: {
      uiToolbar: "Parc Moulins · 28 ha · 12 zones · 2 équipes",
      uiAlert: "Priorité usagers : entrée + playground avant massifs fond",
      uiHint: "1 adresse · N zones · pas un multi-sites déguisé",
      uiRows: [
        { left: "Zone A — entrée", right: "Équipe 1 · matin", status: "Fait", meta: "Photo Instagram OK", tone: "ok" },
        { left: "Zone B — playground", right: "Équipe 1 · 10h", status: "Fait", meta: "Sécurisation sols", tone: "ok" },
        { left: "Zone H — massifs fond", right: "Équipe 2 · buffer", status: "Reportable", meta: "Si orage → saute", tone: "warn" },
        { left: "Zone C — parking", right: "Désherbage", status: "PM", meta: "Point noir usagers", tone: "info" },
      ],
    },
  },

  "EV-25": {
    seoTitle: "Contrats annuels entretien EV — suivi d’exécution & renew",
    seoDesc:
      "Novembre, renew 28 k€ : bilan d’exécution, exceptions, dossier conseil. Cycle de vie contrat ≠ simple facturation. Essai 15 j.",
    sub: "Le PDF du contrat ne dit pas si vous l’avez honoré. Six semaines avant échéance, le commercial a besoin d’un bilan — pas d’une impression.",
    empathyH2: "Le renew se joue sur l’exécution de l’année, pas sur le déjeuner",
    empathyBody:
      "Exceptions météo, accès refusés, ponctuels offerts : sans historique, vous négociez à découvert. Cette page = cycle de vie. L’entretien opère ; la factu facture ; ici on prépare le renew.",
    bodySections: [
      {
        h2: "Cas — Contrat 28 k€, dossier renew J-42",
        body: "Taux de tenue des fréquences, liste des reports motivés, photos clés, ponctuels facturés vs offerts. Pitch : transparence + ajustement de cadence si besoin.",
        bullets: [
          "Bilan quantifié",
          "Exceptions assumées",
          "Proposition d’avenant argumentée",
        ],
      },
      {
        h2: "Journée type commercial + exploitation",
        body: "Export bilan → revue à deux → envoi syndic → RDV conseil.",
      },
      {
        h2: "Objection « le PDF suffit »",
        body: "Le PDF décrit la promesse. Le renew juge la tenue.",
      },
    ],
    faq: [
      {
        q: "Différence avec devis/facturation ?",
        a: "Factu = pièces. Renew = récit d’exécution + négociation.",
      },
      {
        q: "Et si l’année a été chaotique ?",
        a: "Mieux vaut un bilan honnête avec motifs qu’un silence — vous proposez un plan S1.",
      },
      {
        q: "Multi-contrats ?",
        a: "Portefeuille renew filtré par échéance.",
      },
      {
        q: "Lien preuves ?",
        a: "Le dossier renew s’appuie sur les preuves de la saison.",
      },
      {
        q: "Essai ?",
        a: "15 jours — construisez le bilan d’un contrat qui renew bientôt.",
      },
    ],
    demoExtra: {
      uiToolbar: "Renew · Contrat 28 k€ · J-42",
      uiAlert: "Échéance 28/11 — dossier exécution prêt pour conseil syndical",
      uiHint: "Promesse vs tenue · exceptions · pitch avenant",
      uiRows: [
        { left: "Tenue tonte bihebdo", right: "92 % · reports motivés", status: "OK", meta: "Détail S12–S44", tone: "ok" },
        { left: "Haies 4×/an", right: "4/4 faites", status: "OK", meta: "Photos AP", tone: "ok" },
        { left: "Ponctuels offerts", right: "3 haies urgence", status: "À discuter", meta: "Marge grignotée", tone: "warn" },
        { left: "Proposition S1", right: "Cadence +1 printemps", status: "Brouillon", meta: "Avenant argumenté", tone: "info" },
      ],
    },
  },

  "EV-26": {
    seoTitle: "Planning engins espaces verts — conflits autoportée & mini-pelle",
    seoDesc:
      "Anti double-booking engins EV : autoportée, nacelle, mini-pelle. Détectez le conflit avant le chantier bloqué. Pas une GMAO. Essai 15 j.",
    sub: "Mardi 10h : la mini-pelle est réservée sur deux chantiers. Personne au téléphone n’avait la vue complète. Un chantier plantation attendra — trop tard.",
    empathyH2: "L’engin rare dicte le planning — pas l’inverse",
    empathyBody:
      "Ce n’est pas une GMAO industrielle avec stocks de pièces. C’est un garde-fou dans le planning EV : qui a la machine, quand, et quel chantier saute si panne.",
    bodySections: [
      {
        h2: "Cas — Conflit mini-pelle, plantation vs reprise",
        body: "Alerte conflit. Arbitrage : plantation Clarines garde le créneau (jalon livraison plants), reprise ZA Nord glisse de 24 h. Notification des deux chefs.",
        bullets: [
          "Ressources engins sur les interventions",
          "Alerte conflit",
          "Panne = indispo + sites impactés",
        ],
      },
      {
        h2: "≠ absences équipes",
        body: "Humains vs machines — pages sœurs.",
      },
      {
        h2: "Objection « on se téléphone »",
        body: "Le téléphone ne scale pas à 3 dépôts et 12 machines.",
      },
    ],
    faq: [
      {
        q: "Maintenance préventive ?",
        a: "Bloquez des créneaux atelier. Pour une GMAO profonde, gardez votre outil dédié si besoin.",
      },
      {
        q: "Location engins ?",
        a: "Créez la ressource « loc » sur la période louée.",
      },
      {
        q: "Permis / habilitations ?",
        a: "Couplez avec compétences personnes sur le planning équipes.",
      },
      {
        q: "Télémétrie IoT ?",
        a: "Hors scope — focus anti-conflit planning.",
      },
      {
        q: "Essai ?",
        a: "15 jours — déclarez vos 5 engins critiques.",
      },
    ],
    demoExtra: {
      uiToolbar: "Engins · Mar 10h · Mini-pelle #1",
      uiAlert: "CONFLIT : Clarines plantation vs ZA Nord reprise — même créneau",
      uiHint: "Garde-fou planning · pas une GMAO usine",
      uiRows: [
        { left: "Mini-pelle #1", right: "Clarines 08–12", status: "Prioritaire", meta: "Livraison plants mardi", tone: "ok" },
        { left: "Mini-pelle #1", right: "ZA Nord 09–11", status: "Conflit", meta: "Glisser +24 h", tone: "danger" },
        { left: "Autoportée #2", right: "Mécano", status: "Indispo", meta: "Retour jeu.", tone: "warn" },
        { left: "Nacelle 18 m", right: "Élagage mer PM", status: "Réservée", meta: "OK", tone: "ok" },
      ],
    },
  },

  "EV-27": {
    seoTitle: "Photos avant/après espaces verts — preuves visuelles chantier",
    seoDesc:
      "AV/AP haies, massifs, élagage : photos rattachées à l’intervention, plus dans WhatsApp. Complète les preuves horodatées. Essai 15 j.",
    sub: "Le rendu se discute. L’horodatage dit « on est venus » ; la photo dit « voilà le résultat ». Si l’AP est dans la galerie du stagiaire, elle n’existe pas.",
    empathyH2: "La photo orpheline ne sauve aucun conseil syndical",
    empathyBody:
      "Cette page ≠ preuves horodatage pures. Ici le geste visuel AV/AP, surtout haies et création. Le terrain doit pouvoir shooter sans friction.",
    bodySections: [
      {
        h2: "Cas — Taille haies syndic, AV 07:55 / AP 11:20",
        body: "Photos rattachées à l’intervention. Le syndic conteste la hauteur : l’AP tranche. Temps ajouté : 40 secondes.",
        bullets: [
          "Rattachement obligatoire à l’intervention",
          "Exigence configurable par type",
          "Fin des chasses dans WA",
        ],
      },
      {
        h2: "Objection « trop long »",
        body: "40 secondes vs 40 minutes de litige. Exigez AV/AP où ça compte (haies, massifs), pas sur chaque tonte.",
      },
      {
        h2: "Livrable",
        body: "Galerie par site / période pour renew ou réception chantier.",
      },
    ],
    faq: [
      {
        q: "Stockage / poids des médias ?",
        a: "Compression raisonnable ; détail pratique en essai.",
      },
      {
        q: "Obligatoire pour toutes interventions ?",
        a: "Non — paramétrez par type (haies oui, tonte optionnel).",
      },
      {
        q: "Différence avec preuves-passages ?",
        a: "Preuves = dossier litige global. Photos = brique visuelle.",
      },
      {
        q: "Droit à l’image riverains ?",
        a: "Évitez les personnes ; focus végétation / ouvrage.",
      },
      {
        q: "Essai ?",
        a: "15 jours — activez AV/AP sur haies uniquement.",
      },
    ],
    demoExtra: {
      uiToolbar: "AV/AP · Haies Tilleuls · 19/05",
      uiAlert: "AP manquante = intervention non clôturable (règle haies)",
      uiSplitLabels: ["Avant", "Après"],
      uiHint: "40 secondes terrain · zéro chasse WhatsApp",
      uiRows: [
        { left: "Photo AV", right: "07:55 · face rue", status: "OK", meta: "Rattachée int. #1842", tone: "ok" },
        { left: "Photo AP", right: "11:20 · même angle", status: "OK", meta: "Hauteur visible", tone: "ok" },
        { left: "Clôture intervention", right: "Autorisée", status: "Clos", meta: "Règle haies respectée", tone: "ok" },
        { left: "Partage syndic", right: "Lien dossier", status: "Prêt", meta: "Litige hauteur tranché", tone: "info" },
      ],
    },
  },

  "EV-28": {
    seoTitle: "Replanification météo espaces verts — playbook orage",
    seoDesc:
      "Pluie, orage, sol détrempé : marquer reports, basculer haies prioritaires, sync mobile, garder fréquences. Playbook dédié. Essai 15 j.",
    sub: "Le pilier montre la vision globale. Ici uniquement le playbook pluie : ce que le planificateur fait entre 7h10 et 7h40 quand le ciel a décidé.",
    empathyH2: "Improviser sous la pluie coûte des clients par beau temps",
    empathyBody:
      "Reports en chaîne, clients non prévenus, fréquences perdues : la météo n’est pas un aléa rare en EV. C’est un mode de travail. Sans playbook, chaque orage réinvente l’organisation.",
    bodySections: [
      {
        h2: "Playbook 30 minutes — orage nocturne",
        body: "1) Marquer impraticables. 2) Conserver fréquences. 3) Basculer travail faisable (haies, plantations reportables non). 4) Notifier. 5) Sync mobile. 6) Buffer lendemain.",
        bullets: [
          "Statut report météo standardisé",
          "Bascules d’équipe guidées",
          "Trace client",
        ],
      },
      {
        h2: "≠ tonte service ≠ pilier",
        body: "Intent pluie/replanif pur. Les autres pages citent la météo ; celle-ci l’opère.",
      },
      {
        h2: "Objection « météo auto ? »",
        body: "Pas de magie IA. Aide à exécuter le playbook humain plus vite.",
      },
    ],
    faq: [
      {
        q: "Y a-t-il une intégration météo automatique ?",
        a: "Le cœur est le playbook opérationnel. Les alertes automatiques ne remplacent pas le jugement terrain (sol détrempé local).",
      },
      {
        q: "Clients toujours notifiés ?",
        a: "Selon vos règles : SMS/mail sur reports des sites sensibles (syndics, marchés).",
      },
      {
        q: "Fréquences perdues après 3 reports ?",
        a: "Non — backlog visible, rattrapage planifiable.",
      },
      {
        q: "Lien saison printemps ?",
        a: "Au printemps, élargissez le buffer météo du playbook.",
      },
      {
        q: "Essai ?",
        a: "15 jours — rejouez votre dernier lundi pluvieux.",
      },
    ],
    demoExtra: {
      uiToolbar: "Playbook orage · Lun 7h18 · 14 mm",
      uiAlert: "9 tontes impraticables — bascule haies prioritaires · sync mobile 7h36",
      uiHint: "30 minutes · fréquences conservées · clients informés",
      uiRows: [
        { left: "Marquer impraticables", right: "9 sites tonte", status: "Fait 7:22", meta: "Statut report météo", tone: "ok" },
        { left: "Bascule Équipe A", right: "Haies syndic prioritaire", status: "Fait 7:31", meta: "Travail faisable", tone: "ok" },
        { left: "Notifications", right: "5 syndics sensibles", status: "Fait 7:34", meta: "Motif + reprise", tone: "info" },
        { left: "Mobile sync", right: "Nouvel ordre", status: "Fait 7:36", meta: "Plus d’appels 7:50", tone: "ok" },
      ],
    },
  },

  "EV-29": {
    seoTitle: "Espaces verts aménageurs & promoteurs — jalons & réception",
    seoDesc:
      "Sous-traitance EV lotissements / promotions : jalons engazonnement, PV réception, preuves promoteur. ≠ entretien sites privés. Essai 15 j.",
    sub: "Livraison de lotissement : 3 jalons, un promoteur pressé, un PV à signer. Ce n’est pas de l’entretien de siège social.",
    empathyH2: "Le promoteur achète des jalons tenus, pas une « belle équipe »",
    empathyBody:
      "Retards plants, pluie, réception partielle : sans timeline partagée, vous découvrez l’écart au PV. Page distincte des sites privés B2B récurrents.",
    bodySections: [
      {
        h2: "Cas — Lotissement, 3 jalons jusqu’au PV",
        body: "Préparation → engazonnement → reprises. Preuves à chaque jalon. Réception partielle documentée si une zone attend.",
        bullets: [
          "Jalons promoteur",
          "Preuves pour PV",
          "Écarts météo tracés",
        ],
      },
      {
        h2: "≠ paysagisme exécutant pur",
        body: "Angle relation aménageur/promoteur et réception. La page paysagisme couvre le chantier côté entreprise EV.",
      },
      {
        h2: "Livrable",
        body: "Dossier réception : timeline + photos + réserves.",
      },
    ],
    faq: [
      {
        q: "CCTP / DOE ?",
        a: "Le logiciel suit l’exécution et les preuves ; il ne remplace pas vos pièces marchés.",
      },
      {
        q: "Plusieurs lots / tranches ?",
        a: "Un chantier par tranche ou zones — comme un mini portefeuille jalons.",
      },
      {
        q: "Garanties reprises ?",
        a: "Contrôle J+21 planifié dans le même dossier.",
      },
      {
        q: "Facturation d’avancement ?",
        a: "Oui via réalisé des jalons — voir devis/factu.",
      },
      {
        q: "Essai ?",
        a: "15 jours — 1 chantier aménageur en cours.",
      },
    ],
    demoExtra: {
      uiToolbar: "Aménageur · Lotissement Clarines · PV",
      uiAlert: "Réception partielle zone C — reprises J+21 planifiées",
      uiHint: "Jalons promoteur · preuves · réserves",
      uiRows: [
        { left: "Jalon préparation", right: "Clos", status: "OK", meta: "Photo + date", tone: "ok" },
        { left: "Jalon engazonnement", right: "Clos", status: "OK", meta: "Écart pluie +2 j", tone: "ok" },
        { left: "Zone C — réserves", right: "Attente reprises", status: "Partiel", meta: "PV annoté", tone: "warn" },
        { left: "Contrôle J+21", right: "29/05", status: "Planifié", meta: "Garantie", tone: "info" },
      ],
    },
  },

  "EV-30": {
    seoTitle: "Taille de haies multi-sites — tournées, accès, saison",
    seoDesc:
      "42 haies / trimestre, 2 équipes, accès riverains : planifiez, documentez refus, gardez la fréquence. ≠ élagage arbres. Essai 15 j.",
    sub: "Saison courte, volume haut, riverain qui refuse l’accès : la taille de haies ressemble à de la tonte… jusqu’au premier litige de hauteur.",
    empathyH2: "La haie oubliée se voit depuis la rue — et sur Facebook",
    empathyBody:
      "≠ élagage (grimpe, créneau chirurgical). ≠ entretien global. Ici volume multi-sites, accès, photo AV/AP, saison compressée.",
    bodySections: [
      {
        h2: "Cas — 42 haies, accès refusé n°17",
        body: "Tournée trimestre. Site 17 : véhicule gênant. Statut accès refusé + photo. Report sans perdre la fréquence. Relance syndic.",
        bullets: [
          "Volume + saison",
          "Accès documenté",
          "AV/AP recommandés",
        ],
      },
      {
        h2: "Livrable",
        body: "Avancement tournée haies + exceptions accès + photos.",
      },
      {
        h2: "Objection « comme l’entretien »",
        body: "L’entretien mélange les prestations. Les recherches « taille de haies » veulent ce playbook précis.",
      },
    ],
    faq: [
      {
        q: "Hauteur / voisinage ?",
        a: "Photo AV/AP + consigne hauteur sur fiche. Le logiciel documente ; le droit de voisinage reste le vôtre.",
      },
      {
        q: "Nacelle sur haies hautes ?",
        a: "Ressource engin sur l’intervention — voir engins.",
      },
      {
        q: "Déchets de coupe ?",
        a: "Lier benne — page déchets verts.",
      },
      {
        q: "Cadence annuelle ?",
        a: "2 à 4 passages selon contrats ; densifiez au printemps.",
      },
      {
        q: "Essai ?",
        a: "15 jours — votre tournée trimestre en cours.",
      },
    ],
    demoExtra: {
      uiToolbar: "Haies · Trimestre · 42 sites · Équipe 2",
      uiAlert: "Accès refusé #17 — photo véhicule · fréquence conservée · relance syndic",
      uiHint: "Volume ≠ élagage · AV/AP · saison courte",
      uiRows: [
        { left: "Haie #12 — Ormes", right: "Faite · AP OK", status: "Clos", meta: "11:20", tone: "ok" },
        { left: "Haie #17 — Tilleuls", right: "Véhicule gênant", status: "Accès refusé", meta: "Photo · report", tone: "danger" },
        { left: "Haie #18 — Tilleuls", right: "Suivante", status: "En cours", meta: "Même résidence", tone: "info" },
        { left: "Avancement tournée", right: "28 / 42", status: "66 %", meta: "Fin fenêtre S22", tone: "warn" },
      ],
    },
  },

  "EV-31": {
    seoTitle: "Absences & remplacements équipes EV — trou comblé avant 7h",
    seoDesc:
      "Arrêt maladie 6h40 : backup, compétences, tournée sauvée. Focus opérationnel planning — pas un SIRH. Essai 15 jours.",
    sub: "6h40, SMS : le conducteur d’autoportée est en arrêt. La tournée tonte part à 7h15. Sans backup préparé, 9 clients voient un no-show.",
    empathyH2: "Le remplacement se joue avant l’absence, pas pendant",
    empathyBody:
      "Pas un SIRH (congés, paie). Un playbook : qui peut conduire quoi, quels sites sont sensibles, qui prévenir. L’intérim mal affecté casse autant qu’un trou.",
    bodySections: [
      {
        h2: "Cas — Remplacement express avant départ tournée",
        body: "Alerte absence. Backup avec permis autoportée. Sites sensibles gardés au titulaire restant ; intérim sur sites faciles. Notification mobile 6h55.",
        bullets: [
          "Compétences backup",
          "Tri sites sensibles",
          "Sync immédiate",
        ],
      },
      {
        h2: "≠ planning construction semaine",
        body: "Ici last minute. Le planning équipes construit ; celui-ci répare.",
      },
      {
        h2: "Objection « on appelle »",
        body: "Appeler ne met pas à jour le mobile de toute l’équipe ni l’historique.",
      },
    ],
    faq: [
      {
        q: "Lien SIRH ?",
        a: "Non. Vous notez l’indispo opérationnelle ; la paie reste ailleurs.",
      },
      {
        q: "Intérim récurrent ?",
        a: "Fiches backup avec consignes ; limitez J1 aux sites simples.",
      },
      {
        q: "Plusieurs absences le même jour ?",
        a: "Priorisez sites renew / marchés ; reportez le reste avec motif.",
      },
      {
        q: "Astreinte chef d’équipe ?",
        a: "Définissez qui arbitre avant 7h — le logiciel exécute l’arbitrage.",
      },
      {
        q: "Essai ?",
        a: "15 jours — simulez un arrêt sur votre tournée réelle.",
      },
    ],
    demoExtra: {
      uiToolbar: "Absence · 6h40 · Conducteur autoportée",
      uiAlert: "Backup K. affecté · sites sensibles restés au titulaire · sync 6h55",
      uiHint: "Pas un SIRH · playbook opérationnel avant 7h15",
      uiRows: [
        { left: "Titulaire C. — arrêt", right: "SMS 6h40", status: "Indispo", meta: "Tournée tonte impactée", tone: "danger" },
        { left: "Backup K.", right: "Permis autoportée", status: "Affecté", meta: "Sites 1–6", tone: "ok" },
        { left: "Sites sensibles syndic", right: "Restent titulaire B.", status: "Protégés", meta: "Pas d’intérim J1", tone: "info" },
        { left: "Mobile tournée", right: "Nouvel ordre", status: "Sync 6h55", meta: "Départ 7h15 tenu", tone: "ok" },
      ],
    },
  },

  "EV-32": {
    seoTitle: "Entretien cimetières & voiries végétalisées — priorités usagers",
    seoDesc:
      "Cimetières, terre-pleins, abords sensibles : planning, discrétion, reporting DST. Niche collectivité souvent sous-couverte. Essai 15 j.",
    sub: "Un cimetière mal tondu un 1er novembre, c’est une crise locale. Les terre-pleins oubliés aussi. Sensibilité usagers ≠ ZA classique.",
    empathyH2: "Ici la qualité se juge avec émotion — pas seulement en m²",
    empathyBody:
      "Créneaux, discrétion engins, priorités calendaires (Toussaint), reporting élus : cette niche mérite son intent. Proche collectivités, mais recherche dédiée.",
    bodySections: [
      {
        h2: "Cas — Cimetière sud + 8 terre-pleins, semaine de Toussaint",
        body: "Priorité absolue abords allées et monuments. Engins discrets matin tôt. Terre-pleins en secondaire. Reporting DST avant le week-end.",
        bullets: [
          "Calendrier sensible",
          "Zones honneur vs secondaires",
          "Reporting élu/DST",
        ],
      },
      {
        h2: "≠ désherbage générique",
        body: "Le désherbage transverse existe ; ici le contexte cimetière/voirie et l’opinion publique.",
      },
      {
        h2: "Livrable",
        body: "État des zones sensibles + photos points de contrôle + motifs reports.",
      },
    ],
    faq: [
      {
        q: "Horaires / bruit ?",
        a: "Consignes sur fiche site ; créneaux matinaux recommandés.",
      },
      {
        q: "Fleurs / fleurissement ?",
        a: "Interventions saisonnières planifiables — souvent hors forfait tonte.",
      },
      {
        q: "Sécurité agents ?",
        a: "Consignes accès ; pas un logiciel SS3.",
      },
      {
        q: "Lien marché public ?",
        a: "Oui — page collectivités pour la vue marché.",
      },
      {
        q: "Essai ?",
        a: "15 jours — cimetière + terre-pleins pilotes.",
      },
    ],
    demoExtra: {
      uiToolbar: "Cimetière sud · S44 · Toussaint",
      uiAlert: "Priorité allées & monuments — terre-pleins en secondaire après reporting DST",
      uiHint: "Sensibilité usagers · créneaux discrets · preuve élus",
      uiRows: [
        { left: "Allées principales", right: "Tonte + finitions", status: "Fait 07:20", meta: "Discrétion engins", tone: "ok" },
        { left: "Carré monuments", right: "Désherbage manuel", status: "Fait 08:10", meta: "Photo contrôle", tone: "ok" },
        { left: "Terre-plein RD12", right: "Secondaire", status: "Ven.", meta: "Après priorité cimetière", tone: "info" },
        { left: "Reporting DST", right: "PDF week-end", status: "Prêt", meta: "Avant afflux usagers", tone: "ok" },
      ],
    },
  },

  "EV-33": {
    seoTitle: "Évacuation déchets verts — bennes liées aux chantiers coupe",
    seoDesc:
      "Rotations benne après élagage/haies : pas de branches 48h chez le syndic. Coûts déchèterie tracés. Essai 15 jours.",
    sub: "S15 : 12 chantiers de coupe, 3 rotations benne. Oublier la benne, c’est offrir un litige gratuit — et une cour pleine de branches.",
    empathyH2: "La coupe n’est finie que quand le camion est parti",
    empathyBody:
      "≠ élagage (la coupe). Ici la logistique déchets : rotations, saturation printemps, coûts. Souvent négligée dans les logiciels « planning vert » génériques.",
    bodySections: [
      {
        h2: "Cas — 12 sites coupe, 3 rotations benne S15",
        body: "Chaque intervention coupe génère une tâche benne liée. Alerte si benne non planifiée sous 48h. Coût rotation visible pour le gérant.",
        bullets: [
          "Lien coupe → évacuation",
          "Engagement délai client",
          "Charge printemps anticipée",
        ],
      },
      {
        h2: "Objection « c’est de la logistique »",
        body: "Oui — et sans elle votre belle taille de haies devient un scandale syndic.",
      },
      {
        h2: "Livrable",
        body: "Planning rotations + sites en attente d’évacuation.",
      },
    ],
    faq: [
      {
        q: "Bennes louées vs parc propre ?",
        a: "Les deux : ressource « benne loc » sur période.",
      },
      {
        q: "Déchèterie / traçabilité ?",
        a: "Notez rotation et site ; documents légaux restent votre process.",
      },
      {
        q: "Facturation évacuation ?",
        a: "Souvent hors forfait — poussez vers facture du réalisé.",
      },
      {
        q: "Saturation novembre feuilles ?",
        a: "Oui — couplez avec saison automne.",
      },
      {
        q: "Essai ?",
        a: "15 jours — liez benne à votre prochaine tournée haies.",
      },
    ],
    demoExtra: {
      uiToolbar: "Déchets verts · S15 · 3 rotations",
      uiAlert: "2 sites sans benne <48h après coupe — risque litige syndic",
      uiHint: "La coupe n’est close que si évacuation planifiée",
      uiRows: [
        { left: "Élagage Pasteur", right: "Coupe clos 17h", status: "Benne 17h30", meta: "Rotation #1", tone: "ok" },
        { left: "Haies Tilleuls", right: "Coupe clos 11h", status: "Sans benne", meta: "Alerte 48h", tone: "danger" },
        { left: "Haies Ormes", right: "Coupe demain", status: "Benne réservée", meta: "Rotation #2", tone: "info" },
        { left: "Coût rotations S15", right: "3 × loc", status: "Visible", meta: "Marge à surveiller", tone: "warn" },
      ],
    },
  },

  "EV-34": {
    seoTitle: "Plantations & massifs — livraison plants, pose, reprises",
    seoDesc:
      "Chantier plantation : fenêtre, fournitures, pose, contrôle reprise J+21. Pour conducteurs travaux massifs/engazonnement. Essai 15 j.",
    sub: "Plants livrés mardi, pose mercredi–jeudi, reprise J+21. Si la livraison glisse et que personne n’ajuste, vous plantez dans le stress — ou trop tard.",
    empathyH2: "Une plantation, c’est une chaîne d’approvisionnement miniature",
    empathyBody:
      "≠ devis paysagisme global. Focus massifs/plantations/engazonnement et garantie reprises. One-shot, oui — mais un one-shot mal tracé coûte une saison.",
    bodySections: [
      {
        h2: "Cas — Massifs résidence, livraison → pose → J+21",
        body: "Jalon fournitures. Blocage pose si plants absents. Photos pose. Contrôle reprise planifié. Écarts tracés pour le client.",
        bullets: [
          "Dépendance livraison",
          "Fenêtre de pose",
          "Garantie reprises",
        ],
      },
      {
        h2: "≠ irrigation",
        body: "Après la pose, l’eau = page arrosage. Ici la mise en place.",
      },
      {
        h2: "Livrable",
        body: "Dossier plantation + photos + date contrôle reprise.",
      },
    ],
    faq: [
      {
        q: "Fournitures client vs entreprise ?",
        a: "Notez la responsabilité sur le jalon livraison pour éviter le flou.",
      },
      {
        q: "Report gel / canicule ?",
        a: "Motif météo sur la fenêtre de pose — comme un playbook.",
      },
      {
        q: "Engazonnement inclus ?",
        a: "Oui comme jalon distinct si besoin.",
      },
      {
        q: "Lien aménageurs ?",
        a: "Souvent — réception promoteur s’appuie sur ces jalons.",
      },
      {
        q: "Essai ?",
        a: "15 jours — 1 chantier plantation réel.",
      },
    ],
    demoExtra: {
      uiToolbar: "Plantation · Massifs Acacias · Sem. 18",
      uiAlert: "Pose bloquée tant que livraison plants non confirmée mardi 16h",
      uiHint: "Livraison → pose → contrôle reprise J+21",
      uiRows: [
        { left: "Livraison plants", right: "Mar 16h", status: "Confirmée", meta: "Fournisseur X", tone: "ok" },
        { left: "Pose massifs", right: "Mer–Jeu", status: "Débloquée", meta: "Équipe création", tone: "info" },
        { left: "Photo fin de pose", right: "Jeu 17h", status: "Exigée", meta: "AV sol nu / AP planté", tone: "warn" },
        { left: "Contrôle reprises", right: "J+21", status: "Planifié", meta: "Garantie", tone: "ok" },
      ],
    },
  },

  "EV-35": {
    seoTitle: "Espaces verts hôpitaux & cliniques — créneaux et zones interdites",
    seoDesc:
      "EV sites santé : tonte 6h–8h, zones hélistation interdites, preuves direction achats. Contraintes ≠ site privé classique. Essai 15 j.",
    sub: "Clinique des Cèdres : tonte avant 8h, hélistation intouchable, badge, silence engins près des chambres. Un site privé « normal » n’a pas ces règles.",
    empathyH2: "Au mauvais endroit à la mauvaise heure, vous sortez du site",
    empathyBody:
      "Protocoles accès, horaires stricts, image/hygiène des abords, interlocuteur achats : la page sites privés ne suffit pas. Intent santé dédié.",
    bodySections: [
      {
        h2: "Cas — Planning clinique avec zones interdites",
        body: "Créneau 6h–8h. Zone hélistation bloquée software-side (consigne forte). Preuve mensuelle pour la direction des achats. Intérim briefé via fiche site.",
        bullets: [
          "Créneaux non négociables",
          "Zones interdites visibles",
          "Reporting achats",
        ],
      },
      {
        h2: "≠ écoles (créneaux enfants)",
        body: "Même famille contraintes, autre régulateur (récré vs soins/héliport).",
      },
      {
        h2: "Objection « comme un site privé »",
        body: "Jusqu’au premier refus d’accès pour non-respect d’horaire.",
      },
    ],
    faq: [
      {
        q: "EHPAD inclus ?",
        a: "Oui — mêmes logiques de créneaux et discrétion.",
      },
      {
        q: "Hygiène / déchets verts près des bâtiments ?",
        a: "Évacuation rapide — lier page déchets verts.",
      },
      {
        q: "Astreinte tempête ?",
        a: "Interventions ponctuelles hors créneau avec validation site.",
      },
      {
        q: "Multi-établissements d’un groupe santé ?",
        a: "Portefeuille client avec règles par site.",
      },
      {
        q: "Essai ?",
        a: "15 jours — 1 clinique pilote avec vraies consignes.",
      },
    ],
    demoExtra: {
      uiToolbar: "Clinique Cèdres · 06:00–08:00 · Santé",
      uiAlert: "Zone hélistation INTERDITE — toute intervention hors protocole = refus d’accès",
      uiHint: "Créneaux soins · badge · preuve direction achats",
      uiRows: [
        { left: "Pelouse entrée", right: "Tonte 06:15–07:10", status: "OK", meta: "Silence engins", tone: "ok" },
        { left: "Massifs hall", right: "Finitions 07:15", status: "OK", meta: "Avant flux visiteurs", tone: "ok" },
        { left: "Hélistation", right: "Zone bloquée", status: "Interdit", meta: "Consigne site", tone: "danger" },
        { left: "Reporting achats", right: "Mensuel", status: "À émettre", meta: "Passages + écarts", tone: "info" },
      ],
    },
  },

  "EV-36": {
    seoTitle: "Espaces verts écoles & établissements — hors récré, vacances",
    seoDesc:
      "Écoles, collèges, lycées, crèches : tonte hors récréation, densification vacances, sécurité enfants. ≠ collectivités global. Essai 15 j.",
    sub: "12 écoles : tonte mercredi AM, zéro engin pendant la récré, planning vacances densifié. La page collectivités est trop large pour cet intent.",
    empathyH2: "Le créneau scolaire est une contrainte dure — pas une préférence",
    empathyBody:
      "Sécurité enfants, bruit, vacances : si votre planning traite une école comme une ZA, vous allez au conflit direction / parents. Intent dédié.",
    bodySections: [
      {
        h2: "Cas — 12 écoles, mercredi AM + vacances",
        body: "Fenêtres hors récré. Vacances : densification tonte/haies. Jour de rentrée : sites prioritaires faits. Consignes déposées sur chaque fiche établissement.",
        bullets: [
          "Horaires scolaires",
          "Densification vacances",
          "Zéro engin en récré",
        ],
      },
      {
        h2: "≠ collectivités transverse",
        body: "La collectivité page couvre le marché. Ici l’opérationnel établissements.",
      },
      {
        h2: "Livrable direction / DST",
        body: "Calendrier interventions aligné vacances + preuves périodes sensibles.",
      },
    ],
    faq: [
      {
        q: "Crèches / centres de loisirs ?",
        a: "Oui — mêmes règles de créneaux et discrétion.",
      },
      {
        q: "Vacances scolaires différentes selon zones ?",
        a: "Profils calendaires par établissement.",
      },
      {
        q: "Travaux lourds élagage ?",
        a: "Uniquement hors présence élèves — créneau bloqué.",
      },
      {
        q: "Lien cimetières/voirie ?",
        a: "Autre niche ; maillage possible via hub.",
      },
      {
        q: "Essai ?",
        a: "15 jours — 3 écoles pilotes + 1 période de vacances.",
      },
    ],
    demoExtra: {
      uiToolbar: "Écoles · 12 établissements · Mer AM",
      uiAlert: "Récré 10h–10h20 — tout engin interdit à proximité cours",
      uiSplitLabels: ["Semaine scolaire", "Vacances"],
      uiHint: "Créneaux durs · densification vacances · ≠ page collectivités",
      uiRows: [
        { left: "École Pasteur — tonte", right: "Mer 8h–9h45", status: "OK", meta: "Avant récré", tone: "ok" },
        { left: "Collège Hugo — haies", right: "Vacances densifiées", status: "Planifié", meta: "Semaine blanche", tone: "info" },
        { left: "Crèche Les Lilas", right: "Créneau 7h–8h", status: "Strict", meta: "Silence engins", tone: "warn" },
        { left: "Élagage lycée", right: "Uniquement vacances", status: "Bloqué hors", meta: "Sécurité élèves", tone: "danger" },
      ],
    },
  },

  // ── Gaps SEO réels ──────────────────────────────────────────
  "EV-37": {
    seoTitle: "Zéro phyto & biodiversité — planning EV sans chimie",
    seoDesc:
      "Désherbage mécanique/thermique, fauche différenciée, reporting zéro phyto pour marchés et syndics. Intent réglementaire + terrain. Essai 15 j.",
    sub: "Depuis le zéro phyto, vos marchés demandent une méthode et une preuve — pas une promesse. La fauche différenciée ajoute des zones « laissez faire » à piloter.",
    empathyH2: "Le zéro phyto sans traçabilité, c’est du slogan",
    empathyBody:
      "Élus et syndics demandent : quelle méthode, où, quand. Si la réponse est « on fait de notre mieux », vous perdez le renew. Intent distinct du désherbage opérationnel pur.",
    isNewPage: true,
    key: "zero-phyto-biodiversite",
    path: "/espace-vert/zero-phyto-biodiversite",
    type: "service",
    primaryKw: "zéro phyto espaces verts logiciel",
    crumbLabel: "Zéro phyto & biodiversité",
    h1Lead: "Zéro phyto & fauche différenciée",
    h1: "prouver la méthode, pas seulement tondre moins",
    claimBefore: "De la consigne",
    claimHighlight: "à la preuve",
    claimSub: "zéro phyto · biodiversité · marchés",
    productStrip: "Méthodes · zones · reporting",
    showcaseTitle: "Zones différenciées lisibles pour le terrain",
    showcaseSub: "Mécanique, thermique, fauche tardive — consignes sur la carte opérationnelle.",
    showcaseBadgeLeft: { title: "Zéro phyto", sub: "Méthode tracée" },
    showcaseBadgeRight: "Reporting OK",
    proofH2: "Ce que le donneur d’ordre veut voir",
    proofQuote: "Méthode + zone + date + photo du point de contrôle.",
    proofItems: [
      { title: "Méthode par zone", text: "Mécanique, thermique, fauche différenciée — pas un flou « on évite les produits »." },
      { title: "Preuves marché", text: "Export pour DST / élus sur la période." },
      { title: "Formation terrain", text: "Consignes visibles pour saisonniers." },
    ],
    vsTitle: "Promesse zéro phyto vs exécution tracée",
    gridItems: [
      { title: "Désherbage opérationnel", text: "Tournées zones", href: "/espace-vert/desherbage" },
      { title: "Collectivités", text: "Reporting marchés", href: "/espace-vert/collectivites" },
      { title: "Cimetières & voirie", text: "Zones sensibles", href: "/espace-vert/cimetieres-voirie" },
    ],
    bodySections: [
      {
        h2: "Cas — Marché communal, audit méthode S18",
        body: "Chaque zone a une méthode. Les saisonniers voient la consigne. Le DST reçoit l’export : 42 interventions mécaniques, 11 thermiques, 6 fauches différenciées.",
        bullets: ["Consignes méthode", "Zones biodiversité", "Export audit"],
      },
      {
        h2: "≠ page désherbage seule",
        body: "Désherbage = exécuter. Ici = prouver le cadre zéro phyto / biodiversité.",
      },
      {
        h2: "Livrable",
        body: "Rapport méthodes + cartes zones + photos points de contrôle.",
      },
    ],
    faq: [
      {
        q: "Remplace-t-il un plan de gestion différenciée ?",
        a: "Non — il exécute et prouve. Le plan reste votre document cadre.",
      },
      {
        q: "Fauche tardive / biodiversité ?",
        a: "Zones marquées « différenciées » avec fenêtre de fauche — le terrain ne tond pas par erreur.",
      },
      {
        q: "Produits de biocontrôle ?",
        a: "Notez la méthode autorisée sur la zone ; traçabilité d’usage selon vos process.",
      },
      {
        q: "Lien cimetières ?",
        a: "Souvent prioritaire en zéro phyto — maillage utile.",
      },
      {
        q: "Essai ?",
        a: "15 jours — 1 marché ou 5 résidences en méthode tracée.",
      },
    ],
    demo: {
      eyebrow: "Démo · zéro phyto",
      h2: "Audit méthode : zones, consignes, export DST",
      lead: "Montrez en un écran que le zéro phyto n’est pas un slogan.",
      scenario:
        "DST demande un export S16–S18. L’exploitation filtre par méthode et joint 3 photos de points de contrôle (école, cimetière, terre-plein).",
      steps: [
        { label: "Zones & méthodes", detail: "Mécanique / thermique / fauche différenciée sur la fiche zone." },
        { label: "Exécution", detail: "Terrain voit la consigne ; coche zone par zone." },
        { label: "Preuves", detail: "Photos points de contrôle exigés au marché." },
        { label: "Export", detail: "PDF méthodes + dates pour le DST." },
      ],
      uiLabel: "Zéro phyto · Audit S16–S18",
      uiToolbar: "Marché · Méthodes · Export DST",
      uiAlert: "3 points de contrôle photo manquants avant export — bloquant audit",
      uiHint: "Slogan → preuve · zones biodiversité protégées du « tondu par erreur »",
      variant: "checklist",
      takeaway: "Le renew marché se défend avec des méthodes datées, pas avec une présentation PowerPoint.",
      primaryCtaLabel: "Essayer sur mon marché",
      secondaryCtaLabel: "Voir désherbage opérationnel",
      uiRows: [
        { left: "École — mécanique", right: "12 passages", status: "OK", meta: "Photo contrôle OK", tone: "ok" },
        { left: "Cimetière — manuel", right: "8 passages", status: "OK", meta: "Zéro thermique near monuments", tone: "ok" },
        { left: "Noue — fauche différenciée", right: "Fenêtre tardive", status: "Respectée", meta: "Pas de tonte précoce", tone: "ok" },
        { left: "Terre-plein RD — photo", right: "Point contrôle", status: "Manquant", meta: "Bloque export", tone: "danger" },
      ],
    },
  },

  "EV-38": {
    seoTitle: "Marchés publics espaces verts — exécution & reporting bordereau",
    seoDesc:
      "Réponse opérationnelle aux marchés publics EV : bordereau, lots, preuves, pénalités évitées. Pour prestataires et régies. Essai 15 j.",
    sub: "Vous avez gagné le marché. Maintenant il faut l’exécuter sans pénalité. Le bordereau n’est pas un Excel mort : c’est le planning.",
    empathyH2: "Gagner le marché est une étape — ne pas le perdre en est une autre",
    empathyBody:
      "Lots, fréquences CCTP, points de contrôle, reports motivés : la page collectivités parle DST. Ici l’angle prestataire / exécution marché public et anti-pénalités.",
    isNewPage: true,
    key: "marches-publics",
    path: "/espace-vert/marches-publics",
    type: "process",
    primaryKw: "marché public espaces verts logiciel",
    crumbLabel: "Marchés publics EV",
    h1Lead: "Exécuter un marché public EV",
    h1: "du bordereau aux preuves, sans pénalités surprises",
    claimBefore: "Du CCTP à",
    claimHighlight: "l’exécution",
    claimSub: "marchés publics · lots · reporting",
    productStrip: "Lots · fréquences · preuves marché",
    showcaseTitle: "Bordereau vivant",
    showcaseSub: "Chaque ligne du marché devient des occurrences planifiées et prouvables.",
    showcaseBadgeLeft: { title: "Lot 2", sub: "Voirie végétale" },
    showcaseBadgeRight: "Conforme",
    proofH2: "Anti-pénalités par la trace",
    proofQuote: "Retard motivé > retard silencieux.",
    proofItems: [
      { title: "Lots & sites", text: "Structurez comme le marché, pas comme votre tournée historique." },
      { title: "Preuves CCTP", text: "Points de contrôle photographiés." },
      { title: "Reporting", text: "Exports périodiques pour le pouvoir adjudicateur." },
    ],
    vsTitle: "Excel de suivi de marché vs exécution vivante",
    gridItems: [
      { title: "Collectivités", text: "Angle DST", href: "/espace-vert/collectivites" },
      { title: "Zéro phyto", text: "Méthodes tracées", href: "/espace-vert/zero-phyto-biodiversite" },
      { title: "Contrats annuels", text: "Renew privé", href: "/espace-vert/contrats-annuels" },
    ],
    bodySections: [
      {
        h2: "Cas — Prestataire, marché 3 lots, mois 2",
        body: "Écarts sur lot 2 terre-pleins. Reports orage documentés. Export envoyé avant la réunion de chantier. Pénalité évitée faute de silence.",
        bullets: ["Structure lots", "Motifs opposables", "Réunion de chantier préparée"],
      },
      {
        h2: "≠ collectivités (audience DST)",
        body: "Même famille, intent prestataire / anti-pénalités / bordereau.",
      },
      {
        h2: "Livrable",
        body: "Tableau conformité période + annexes photo.",
      },
    ],
    faq: [
      {
        q: "Rédige-t-on les mémoires techniques ?",
        a: "Non — on exécute et on prouve après notification.",
      },
      {
        q: "Pénalités de retard ?",
        a: "La traçabilité des motifs (météo, accès) est votre première défense.",
      },
      {
        q: "Sous-traitance ?",
        a: "Affectez clairement qui exécute quel lot/site.",
      },
      {
        q: "Différence renew privé ?",
        a: "Page contrats annuels pour le privé ; ici formalisme marché public.",
      },
      {
        q: "Essai ?",
        a: "15 jours — 1 lot pilote de votre marché en cours.",
      },
    ],
    demo: {
      eyebrow: "Démo · marchés publics",
      h2: "Conformité lot 2 : retards motivés avant la réunion de chantier",
      lead: "Transformez le bordereau en occurrences + preuves.",
      scenario:
        "Réunion de chantier jeudi. Le chef de projet ouvre le lot 2 : 2 retards orage motivés, 1 accès refusé photographié, export prêt.",
      steps: [
        { label: "Mapper le lot", detail: "Sites/zones = lignes du bordereau." },
        { label: "Exécuter", detail: "Tournées + pointages." },
        { label: "Motiver les écarts", detail: "Météo / accès — jamais le silence." },
        { label: "Exporter", detail: "PDF conformité pour le pouvoir adjudicateur." },
      ],
      uiLabel: "Marché · Lot 2 · Conformité",
      uiToolbar: "MP · Lot 2 · Réunion chantier jeu.",
      uiAlert: "2 retards motivés orage — export annexé avant réunion",
      uiHint: "Anti-pénalités · bordereau vivant · pas un Excel mort",
      variant: "split",
      uiSplitLabels: ["Écarts", "Défense"],
      takeaway: "Un écart motivé se défend ; un écart silencieux se pénalise.",
      primaryCtaLabel: "Essayer sur mon marché",
      secondaryCtaLabel: "Voir angle collectivités",
      uiRows: [
        { left: "Terre-plein RD12", right: "Report orage", status: "Motif OK", meta: "Annexe météo", tone: "warn" },
        { left: "Square Hugo", right: "Accès refusé", status: "Photo", meta: "Véhicule chantier ville", tone: "warn" },
        { left: "Parc Central", right: "Conforme S18", status: "OK", meta: "Points CCTP", tone: "ok" },
        { left: "Export réunion", right: "PDF prêt", status: "Envoyé", meta: "J-1", tone: "ok" },
      ],
    },
  },

  "EV-39": {
    seoTitle: "Ouverture de saison espaces verts — check-list mars",
    seoDesc:
      "Check-list ouverture de saison EV : engins, fréquences, saisonniers, clients critiques. Pont entre hiver et sprint printemps. Essai 15 j.",
    sub: "Fin février : avant la bascule hebdo, vérifiez engins, fréquences, digicodes, saisonniers. L’ouverture de saison ratée se paie jusqu’à juin.",
    empathyH2: "Le printemps commence en février — sur une check-list",
    empathyBody:
      "La page printemps traite la montée en charge. Ici le rituel d’ouverture : atelier engins, audit digicodes, profils saisonniers, clients renew. Intent « préparer la saison » souvent cherché tel quel.",
    isNewPage: true,
    key: "ouverture-saison",
    path: "/espace-vert/ouverture-saison",
    type: "guide",
    primaryKw: "ouverture saison espaces verts planning",
    crumbLabel: "Ouverture de saison",
    h1Lead: "Ouverture de saison EV",
    h1: "la check-list de février qui sauve le mois de mars",
    claimBefore: "Préparer la",
    claimHighlight: "montée",
    claimSub: "ouverture saison · engins · fréquences",
    productStrip: "Check-list · engins · saisonniers",
    showcaseTitle: "Rituel d’ouverture lisible",
    showcaseSub: "Engins, sites, équipes, clients critiques — cochés avant la pousse.",
    showcaseBadgeLeft: { title: "Février", sub: "S8–S9" },
    showcaseBadgeRight: "Prêt mars",
    proofH2: "Ce que vous validez avant S10",
    proofQuote: "Autoportée OK, digicodes OK, fréquences densifiées, saisonniers briefés.",
    proofItems: [
      { title: "Engins", text: "Atelier avant la panne du premier beau lundi." },
      { title: "Fréquences", text: "Profil printemps prêt à activer." },
      { title: "Humains", text: "Saisonniers + backups absences." },
    ],
    vsTitle: "Improviser mars vs ouvrir la saison en février",
    gridItems: [
      { title: "Saison printemps", text: "Montée en charge", href: "/espace-vert/saison-printemps" },
      { title: "Engins", text: "Conflits & atelier", href: "/espace-vert/engins-materiel" },
      { title: "Absences", text: "Backups", href: "/espace-vert/absences-remplacements" },
    ],
    bodySections: [
      {
        h2: "Check-list ouverture (ordre)",
        body: "1) Atelier engins. 2) Audit accès/digicodes. 3) Activer profil fréquences. 4) Brief saisonniers. 5) Liste clients renew < 90 j. 6) Buffer météo élargi.",
        bullets: ["S8 atelier", "S9 paramétrage", "S10 go densification"],
      },
      {
        h2: "≠ page printemps",
        body: "Printemps = vivre la charge. Ouverture = rituel avant le sprint.",
      },
      {
        h2: "Livrable interne",
        body: "Check-list cochée + responsables + dates.",
      },
    ],
    faq: [
      {
        q: "Quand démarrer l’ouverture ?",
        a: "S7–S9 selon région — en Occitanie souvent fin février.",
      },
      {
        q: "Et si on découvre une panne engins trop tard ?",
        a: "C’est exactement ce que la check-list évite — bloquez l’atelier en S8.",
      },
      {
        q: "Saisonniers pas encore recrutés ?",
        a: "Préparez les fiches sites / backups ; intégrez dès J1 recrutement.",
      },
      {
        q: "Lien guide organiser entretien ?",
        a: "Le guide est structure permanente ; l’ouverture est le rituel saisonnier.",
      },
      {
        q: "Essai ?",
        a: "15 jours en février — cocher la check-list sur le vrai portefeuille.",
      },
    ],
    demo: {
      eyebrow: "Démo · ouverture saison",
      h2: "Check-list S8–S9 : engins, digicodes, densification",
      lead: "Le rituel qui évite le chaos du premier beau lundi.",
      scenario:
        "Fin février, Julie ouvre la check-list : autoportée #2 encore chez le mécano, 6 digicodes obsolètes, profil printemps prêt, 2 saisonniers briefés.",
      steps: [
        { label: "Atelier engins", detail: "Clos ou date de retour claire." },
        { label: "Audit accès", detail: "Digicodes / badges mis à jour." },
        { label: "Profil fréquences", detail: "Densification prête à activer S10." },
        { label: "Brief humains", detail: "Saisonniers + backups absences." },
      ],
      uiLabel: "Ouverture saison · Check-list S9",
      uiToolbar: "Février · S9 · Go mars",
      uiAlert: "Autoportée #2 toujours mécano — capacité tonte limitée semaine 10",
      uiHint: "Rituel février · sprint mars · ≠ page printemps charge",
      variant: "checklist",
      takeaway: "Si la check-list est verte en S9, mars redevient un plan — plus une salle d’urgence.",
      primaryCtaLabel: "Lancer ma check-list",
      secondaryCtaLabel: "Voir montée printemps",
      uiRows: [
        { left: "Atelier autoportée #1", right: "OK", status: "Fait", meta: "S8", tone: "ok" },
        { left: "Autoportée #2", right: "Mécano", status: "Risque", meta: "Retour S11 ?", tone: "danger" },
        { left: "Digicodes (38 sites)", right: "6 obsolètes corrigés", status: "Fait", meta: "Audit S9", tone: "ok" },
        { left: "Profil printemps", right: "Densification prête", status: "Armé", meta: "Activation S10", tone: "info" },
      ],
    },
  },
};
