/** Pack EV-09 → EV-20 */
export const PACK_PART2 = {
  "EV-09": {
    seoTitle: "Logiciel espaces verts collectivités — marchés & preuves",
    seoDesc:
      "DST / régie / prestataire marchés publics EV : tournées, reporting passages, zones sensibles, export pour élus. Essai 15 jours — support FR.",
    sub: "Sophie, DST d’une commune de 18 000 hab., pilote un marché EV à 3 lots. Elle ne veut pas un SaaS « PME » : elle veut savoir si le cimetière sud et les 8 terre-pleins ont été faits avant le comité de quartier.",
    empathyH2: "Le marché se défend avec des preuves, pas avec une réunion",
    empathyBody:
      "Élus, usagers, prestataire, régie interne : tout le monde a une version. Sans historique de passages par site/zone, Sophie passe ses lundis à reconstituer la semaine sur des mails. Le logiciel doit parler marché public et terrain — pas « digitalisation des équipes ».",
    bodySections: [
      {
        h2: "Cas — Marché 3 lots, reporting comité de quartier",
        body: "Lot 1 cimetières, lot 2 voiries végétalisées, lot 3 parcs. Sophie filtre la semaine : retards, motifs météo, photos des points de contrôle du CCTP. Le prestataire et la régie voient la même vérité.",
        bullets: [
          "Sites/zones alignés sur le bordereau",
          "Export passages pour élus / commission",
          "Écarts visibles avant la polémique Facebook locale",
        ],
        h3: [
          {
            title: "≠ page écoles ou cimetières seule",
            body: "Ici vision marché / DST transverse. Les niches (écoles, cimetières) ont leurs pages pour l’intent de recherche dédié.",
          },
        ],
      },
      {
        h2: "Journée type DST",
        body: "8h revue retards, 11h validation reports orage, 16h export PDF pour l’élu de secteur, 17h point téléphonique prestataire sur 2 zones critiques.",
      },
      {
        h2: "Objection « Excel filtrable suffit »",
        body: "Excel ne reçoit pas le pointage terrain à 9h12 ni la photo du point noir. Le filtre ne crée pas la preuve.",
      },
    ],
    faq: [
      {
        q: "Régie municipale ou prestataire : ça marche pour les deux ?",
        a: "Oui. La collectivité peut exiger le reporting ; le prestataire exécute et pointe dans le même référentiel sites/zones.",
      },
      {
        q: "Peut-on coller au CCTP / bordereau ?",
        a: "Les prestations et fréquences se paramètrent par site. Ce n’est pas un outil de rédaction de marché : c’est l’exécution tracée.",
      },
      {
        q: "Accès élus / lecture seule ?",
        a: "En pratique on exporte ou on partage un reporting périodique — évite de donner le planning opérationnel brut.",
      },
      {
        q: "Lien avec zéro phyto ?",
        a: "Consignes méthode + preuves photo sur désherbage — voir aussi page désherbage.",
      },
      {
        q: "Essai ?",
        a: "15 jours — chargez un lot pilote (ex. cimetières + 5 terre-pleins).",
      },
    ],
    demoExtra: {
      uiToolbar: "Marché EV · Lot 2 voirie · S18 · DST",
      uiAlert: "Comité quartier jeudi — 2 terre-pleins en retard pluie à justifier",
      uiSplitLabels: ["Exécution terrain", "Reporting DST"],
      uiHint: "Même vérité prestataire ↔ régie ↔ export élus",
      uiRows: [
        { left: "Cimetière sud — tonte abords", right: "Lot 1 · fait 07:50", status: "Prouvé", meta: "Point contrôle entrée", tone: "ok" },
        { left: "Terre-plein RD12 nord", right: "Report orage", status: "Justifier", meta: "Reprise mar. · photo prévue", tone: "warn" },
        { left: "Parc Central — aires jeux", right: "Désherbage mécanique", status: "Fait", meta: "Hors horaires scolaires", tone: "ok" },
        { left: "Export commission", right: "PDF S17–S18", status: "Prêt", meta: "Écarts + motifs", tone: "info" },
      ],
    },
  },

  "EV-10": {
    seoTitle: "Espaces verts syndics & copropriétés — preuves conseils",
    seoDesc:
      "Prestataires EV pour syndics : passages prouvés, photos AV/AP, accès digicodes, dossier conseil syndical. ≠ solution syndic globale. Essai 15 j.",
    sub: "Nadia, conductrice de travaux pour un cabinet de syndic, ne gère pas les AG : elle doit prouver que la haie des Tilleuls a bien été faite avant le mail agressif de 17h.",
    empathyH2: "Le conseil syndical ne croit pas WhatsApp",
    empathyBody:
      "« Vous n’êtes pas venus » est le message le plus cher du métier. Digicodes qui changent, résidences multi-bâtiments, photos perdues : le syndic veut un dossier, pas une conversation. Attention : ce n’est pas /solutions/syndics (propreté / autre verticale).",
    bodySections: [
      {
        h2: "Cas — Mail syndic 17h02, Résidence des Tilleuls",
        body: "Nadia ouvre le site : derniers pointages, motif du report S17, photo AP haies S18, prochaine tonte. Réponse en un écran. Le commercial n’est plus otage du chef d’équipe introuvable.",
        bullets: [
          "Preuve horodatée + visuelle",
          "Consignes d’accès à jour (digicode, local)",
          "Dossier renew pour le syndic en novembre",
        ],
      },
      {
        h2: "≠ preuves génériques / ≠ page sites privés",
        body: "Angle syndic/copro et conseil syndical. Les sites tertiaires B2B ont leur page. Les preuves « litige » pures ont la page preuves-passages.",
      },
      {
        h2: "Livrable conseil syndical",
        body: "Historique des passages de la saison + photos clés + exceptions (accès refusé, météo).",
      },
    ],
    faq: [
      {
        q: "C’est le même produit que pour les syndics propreté ?",
        a: "Non : cette page est 100 % espaces verts (tonte, haies, désherbage). Pas de mélange de verticale.",
      },
      {
        q: "Le syndic peut-il avoir un accès ?",
        a: "Souvent on partage un reporting périodique. L’essai permet de tester le format de preuve qu’il exige.",
      },
      {
        q: "Accès refusé / véhicule gênant ?",
        a: "Statut tracé + photo : protège le prestataire au moment du litige.",
      },
      {
        q: "Photos AV/AP obligatoires ?",
        a: "Sur haies et massifs, fortement recommandées — page photos dédiée.",
      },
      {
        q: "Essai ?",
        a: "15 jours — 5 résidences pilotes suffisent.",
      },
    ],
    demoExtra: {
      uiToolbar: "Syndic · Tilleuls · Dossier litige 17h02",
      uiAlert: "Mail client : « personne n’est passé » — dossier preuve prêt à joindre",
      uiHint: "Pointages + photo AP + report S17 motivé",
      uiRows: [
        { left: "Tonte — 12/05", right: "Pointé 08:42 · Équipe A", status: "Prouvé", meta: "Digicode 4412 OK", tone: "ok" },
        { left: "Haies — 19/05", right: "Photo AP déposée", status: "Prouvé", meta: "AV 07:55 · AP 11:20", tone: "ok" },
        { left: "Tonte — S17", right: "Report orage", status: "Tracé", meta: "SMS syndic · reprise S18", tone: "warn" },
        { left: "Prochaine tonte", right: "Ven 06/06 8h", status: "Planifié", meta: "Cadence bihebdo contrat", tone: "info" },
      ],
    },
  },

  "EV-11": {
    seoTitle: "Entretien EV sites privés entreprises — multi-sites B2B",
    seoDesc:
      "Sièges, ZA, parkings d’entreprise : planning abords, consignes sécurité, preuves pour facility. Essai 15 jours sans CB.",
    sub: "Olivier entretient 17 sites tertiaires (sièges + ZA). Le facility manager juge sur l’entrée visiteurs — et sur le parking PL que personne ne montre sur Instagram.",
    empathyH2: "Le B2B privé ne parle pas comme un syndic",
    empathyBody:
      "Badges, horaires de livraison, zones hexagone sécurité, interlocuteur facility qui change tous les 18 mois : si vos consignes vivent dans la tête du chef d’équipe, le premier remplacement casse la qualité perçue.",
    bodySections: [
      {
        h2: "Cas — Campus HexaTech, 2 passages / semaine",
        body: "Zones : entrée visiteurs, patio RH, parking PL, noue paysagère. Horaires 6h–8h hors flux salariés. Preuve mensuelle envoyée au facility (passages + 4 photos points de contrôle).",
        bullets: [
          "Consignes sécurité / badge sur la fiche site",
          "Zones inégales en criticité visuelle",
          "Reporting facility ≠ dossier conseil syndical",
        ],
      },
      {
        h2: "≠ hôpitaux / ≠ écoles",
        body: "Même famille « sites contraints », mais protocoles santé et créneaux scolaires ont leurs pages.",
      },
      {
        h2: "Objection « comme un syndic »",
        body: "Le facility veut de la prévisibilité et zéro friction d’accès, rarement une photo de chaque haie. Adaptez le livrable.",
      },
    ],
    faq: [
      {
        q: "Multi-sites d’un même groupe ?",
        a: "Oui — portefeuille filtrable par client / commune / type de zone.",
      },
      {
        q: "Astreinte espaces verts ?",
        a: "Interventions ponctuelles traçables hors forfait (casse, sinistre tempête).",
      },
      {
        q: "Lien devis annuel ?",
        a: "Page contrats annuels pour le cycle renew ; ici l’exécution sites privés.",
      },
      {
        q: "Photos ?",
        a: "4 points de contrôle par site souvent suffisent en B2B.",
      },
      {
        q: "Essai ?",
        a: "15 jours — 3 sites d’un même client facility.",
      },
    ],
    demoExtra: {
      uiToolbar: "HexaTech · Campus · Mar 06:00–08:00",
      uiAlert: "Badge visiteur expiré pour l’intérimaire — consigne mise à jour sur fiche site",
      uiHint: "Entrée visiteurs > patio > parking PL",
      uiRows: [
        { left: "Entrée visiteurs", right: "Tonte + massifs", status: "Fait 06:55", meta: "Photo point n°1", tone: "ok" },
        { left: "Patio RH", right: "Désherbage joints", status: "Fait 07:20", meta: "Hors flux café", tone: "ok" },
        { left: "Parking PL", right: "Herbes hautes signalées", status: "Priorité j+1", meta: "Zone « Instagram inverse »", tone: "warn" },
        { left: "Reporting facility", right: "Mensuel S14–S18", status: "À envoyer", meta: "4 points de contrôle", tone: "info" },
      ],
    },
  },

  "EV-12": {
    seoTitle: "Planning équipes espaces verts — multi-chantiers & compétences",
    seoDesc:
      "Affectez tonte, haies, élagage : compétences, engins, secteurs. Finis les doublons WhatsApp. Essai 15 jours.",
    sub: "Le lundi de Mai, Julie (planificatrice, 34 collaborateurs) a 3 équipes à coller sur 51 interventions. Le grimpeur ne tond pas ; l’autoportée ne taille pas les haies en 4 m.",
    empathyH2: "Planifier sans compétences, c’est inventer des conflits",
    empathyBody:
      "Le tableau blanc du bureau est joli jusqu’à 6h50. Ensuite, quelqu’un est au mauvais endroit avec le mauvais engin. Le planning EV doit connaître les savoir-faire et les contraintes — pas seulement des cases colorées.",
    bodySections: [
      {
        h2: "Cas — Semaine 18, 51 interventions, 3 équipes",
        body: "Filtres : compétence grimpe, permis nacelle, secteur nord. Julie détecte un double booking autoportée et un trou sur la tournée haies après un arrêt maladie. Ajustement avant 7h30, sync mobile.",
        bullets: [
          "Compétences sur les personnes",
          "Conflits engins visibles",
          "Une seule semaine partagée bureau ↔ terrain",
        ],
      },
      {
        h2: "≠ absences (page sœur) ≠ engins seuls",
        body: "Absences/remplacements = trou d’équipe last minute. Engins = ressource machine. Ici : construction de la semaine multi-contraintes.",
      },
      {
        h2: "Journée type planificatrice",
        body: "16h veille : brouillon. 6h45 : arbitrages. 7h15 : gel de la tournée. 17h : retours terrain → seeds du lendemain.",
      },
    ],
    faq: [
      {
        q: "Peut-on bloquer une affectation incompatible (grimpe) ?",
        a: "Vous voyez les compétences ; l’outil vous aide à ne pas affecter « au feeling ». La responsabilité reste humaine.",
      },
      {
        q: "Planning glissant vs semaine fixe ?",
        a: "Semaine EV + reports : le plus lisible pour le terrain. Évitez le chaos du « on verra demain matin » permanent.",
      },
      {
        q: "Intérim ?",
        a: "Créez le backup avec consignes sites ; limitez les sites sensibles le premier jour.",
      },
      {
        q: "Lien pointage ?",
        a: "Oui — page pointage terrain pour la capture ; ici l’affectation.",
      },
      {
        q: "Essai ?",
        a: "15 jours — rejouez une vraie semaine chargée.",
      },
    ],
    demoExtra: {
      uiToolbar: "Planning · S18 · 3 équipes · 51 int.",
      uiAlert: "Double booking Autoportée #1 mar. AM — arbitrage requis avant 7h30",
      uiHint: "Compétences + engins + secteurs sur une semaine",
      uiRows: [
        { left: "Équipe Nord — tonte", right: "12 sites · Autoportée #1", status: "OK", meta: "Secteur nord figé 7h15", tone: "ok" },
        { left: "Équipe Haies", right: "Trou 1 binôme (arrêt)", status: "Backup", meta: "Intérim + chef ½ j", tone: "warn" },
        { left: "Pôle élagage", right: "Grimpeur L. · mer PM", status: "Tenu", meta: "Nacelle réservée", tone: "ok" },
        { left: "Autoportée #1", right: "Mar AM conflictuel", status: "Conflit", meta: "ZA vs lotissement", tone: "danger" },
      ],
    },
  },

  "EV-13": {
    seoTitle: "Pointage terrain espaces verts — mobile, horodatage, preuves",
    seoDesc:
      "Arrivée/départ chantier EV sur mobile : qui, où, quand. Base des preuves et de la facture. Essai 15 jours sans CB.",
    sub: "Sans pointage, votre « on est passé » est une opinion. Avec pointage, c’est un fait horodaté — celui que le syndic et la facture réclament.",
    empathyH2: "Le pointage n’est pas du flicage : c’est une ceinture de sécurité",
    empathyBody:
      "Les équipes détestent les usines à gaz. Elles acceptent un geste simple qui évite les appels du gérant à 18h. Arrivée, départ, éventuellement photo : si le planning est juste, le pointage devient naturel.",
    bodySections: [
      {
        h2: "Cas — Binôme tonte, 9 sites, journée type",
        body: "Chaque arrivée timestampée. Un oubli de pointage au site 4 apparaît en alerte bureau à 15h — relance immédiate. Le soir, la facturation périodique s’appuie sur du réel.",
        bullets: [
          "Geste mobile < 15 secondes",
          "Alerte oublis avant la facture",
          "Couplage naturel avec preuves / photos",
        ],
      },
      {
        h2: "≠ page preuves litige",
        body: "Ici capture terrain. La page preuves-passages assemble le dossier quand le mail agressif arrive.",
      },
      {
        h2: "Objection « les gars ne pointeront pas »",
        body: "Ils ne pointeront pas un process absurde. Ils pointeront ce qui réduit les coups de fil et les accusations.",
      },
    ],
    faq: [
      {
        q: "Hors-ligne / réseau faible ?",
        a: "Le geste doit rester simple ; en pratique les équipes pointent dès qu’elles ont du réseau en sortie de site. On paramètre les exigences selon vos zones.",
      },
      {
        q: "Géoloc obligatoire ?",
        a: "L’horodatage + site planifié suffisent souvent. Évitez le flicage excessif qui tue l’adoption.",
      },
      {
        q: "Lien paie ?",
        a: "PROGESTI n’est pas un SIRH. Le pointage sert d’abord opération et preuve client.",
      },
      {
        q: "Photo au pointage ?",
        a: "Optionnelle par type d’intervention (haies oui, tonte parfois).",
      },
      {
        q: "Essai ?",
        a: "15 jours — 1 équipe pilote suffit pour mesurer l’adoption.",
      },
    ],
    demoExtra: {
      uiToolbar: "Mobile terrain · 12/05 · Équipe A",
      uiAlert: "Oubli pointage départ — Résidence Ormes · alerte bureau 15:02",
      uiHint: "Arrivée / départ · < 15 s · sync preuve",
      uiRows: [
        { left: "Bleuets — arrivée", right: "08:03", status: "OK", meta: "Tonte · Autoportée #1", tone: "ok" },
        { left: "Bleuets — départ", right: "08:58", status: "OK", meta: "Durée 55 min", tone: "ok" },
        { left: "Ormes — arrivée", right: "09:12", status: "OK", meta: "Digicode OK", tone: "ok" },
        { left: "Ormes — départ", right: "—", status: "Manquant", meta: "Relance chef 15:02", tone: "danger" },
      ],
    },
  },

  "EV-14": {
    seoTitle: "Devis & facturation espaces verts — du réalisé à la facture",
    seoDesc:
      "Devis entretien ou chantier, avenants, facture alignée sur le réalisé pointé. Moins d’oublis de prestations ponctuelles. Essai 15 j.",
    sub: "Chaque mois, Samia (administrative + commerciale) reconstruit la facturation depuis le groupe WhatsApp. Les haies d’urgence de la semaine 12 ont disparu — pas la marge.",
    empathyH2: "Si ce n’est pas dans le planning, ce ne sera pas dans la facture",
    empathyBody:
      "Le réalisé doit pousser la facture. Sinon vous facturez le forfait théorique et vous offrez le ponctuel. Les clients sympas en profitent ; les autres contestent le forfait.",
    bodySections: [
      {
        h2: "Cas — Fin de mois, 6 ponctuels « oubliés »",
        body: "Samia ouvre les interventions clôturées hors forfait : 3 haies d’urgence, 1 évacuation benne, 2 reprises plantations. Ticket facture généré depuis le réel. Le gérant arrête de « se souvenir » le dimanche.",
        bullets: [
          "Forfait vs ponctuel clairement séparés",
          "Avenants tracés",
          "Moins de leakage de marge silencieux",
        ],
      },
      {
        h2: "≠ contrats annuels renew",
        body: "Le renew commercial est une autre page. Ici : produire les pièces devis/facture depuis l’exécution.",
      },
      {
        h2: "Objection « mon outil compta suffit »",
        body: "La compta facture ce qu’on lui dit. Elle ne sait pas ce qui s’est passé sur le parking PL mardi.",
      },
    ],
    faq: [
      {
        q: "Export comptable ?",
        a: "Oui dans la logique PROGESTI — l’essai montre le flux aligné sur votre organisation.",
      },
      {
        q: "Devis chantier création vs entretien ?",
        a: "Deux modèles : jalons/avancement vs périodique forfait + ponctuels.",
      },
      {
        q: "Avenants météo / volume ?",
        a: "Tracez l’exception dans le planning puis facturez si le contrat le prévoit.",
      },
      {
        q: "Impayés ?",
        a: "Suivi dans le module — sans tableur parallèle.",
      },
      {
        q: "Essai ?",
        a: "15 jours — rejouez votre dernier mois sur 15 sites.",
      },
    ],
    demoExtra: {
      uiToolbar: "Facturation · Mai · Forfait + ponctuels",
      uiAlert: "6 interventions hors forfait clôturées non encore facturées",
      uiHint: "Le réalisé pousse la pièce — plus le souvenir du dimanche",
      uiRows: [
        { left: "Forfait Acacias — mai", right: "Contrat 41 k€ /12", status: "Brouillon", meta: "Passages OK S18–S21", tone: "info" },
        { left: "Haie urgence Tilleuls", right: "19/05 · 2h", status: "À facturer", meta: "Hors forfait · photo AP", tone: "warn" },
        { left: "Benne branches Pasteur", right: "Évacuation", status: "À facturer", meta: "Liée élagage", tone: "warn" },
        { left: "Reprises massifs Clarines", right: "Garantie J+21", status: "Inclus devis", meta: "Pas de leakage", tone: "ok" },
      ],
    },
  },

  "EV-15": {
    seoTitle: "Saison printemps espaces verts — monte en charge planning",
    seoDesc:
      "Mars–juin : densifiez tournées, embauches saisonnières, priorités clients. Playbook de montée en charge EV. Essai 15 jours.",
    sub: "Mi-mars, la pousse ne négocie pas. Vertigo passe de 2 à 4 équipes en 3 semaines. Sans playbook, le planning devient une salle d’urgence.",
    empathyH2: "Le printemps ne crée pas de nouveaux clients : il révèle le chaos",
    empathyBody:
      "Les fréquences passent hebdo, les saisonniers arrivent, les engins vieillissent d’un coup. Si votre système était déjà juste l’hiver, il casse au premier week-end de beau temps.",
    bodySections: [
      {
        h2: "Cas — Passage bihebdo → hebdo sur 28 pelouses",
        body: "Julie active le profil saisonnier : densification automatique des occurrences, priorisation clients renew, intégration de 2 saisonniers avec sites « faciles » la première semaine.",
        bullets: [
          "Densification des fréquences sans tout retaper",
          "Onboarding saisonniers guidé",
          "Buffer météo plus large qu’en hiver",
        ],
      },
      {
        h2: "≠ saison automne-hiver",
        body: "L’autre page traite feuilles, tailles, baisse de cadence, maintenance engins. Ici : montée en charge.",
      },
      {
        h2: "Livrable interne",
        body: "Plan de charge 8 semaines + liste sites critiques + besoins engins.",
      },
    ],
    faq: [
      {
        q: "Peut-on pré-planifier mars en janvier ?",
        a: "Oui — préparez les fréquences et validez en S9–S10.",
      },
      {
        q: "Saisonniers sans smartphone ?",
        a: "Binôme avec un titulaire qui pointe ; consignes papier en secours la première semaine seulement.",
      },
      {
        q: "Prioriser quels clients ?",
        a: "Renew < 90 j, sites « visibles », marchés publics à reporting.",
      },
      {
        q: "Lien absences ?",
        a: "Les arrêts explosent aussi au printemps — page remplacements.",
      },
      {
        q: "Essai ?",
        a: "Idéal en février–mars sur une vraie montée.",
      },
    ],
    demoExtra: {
      uiToolbar: "Printemps · S12 · Densification · +2 saisonniers",
      uiAlert: "28 pelouses passent bihebdo → hebdo — charge +38 % sur Équipe Nord",
      uiHint: "Profil saisonnier activé · buffer météo élargi",
      uiRows: [
        { left: "Pelouses nord — cadence", right: "Hebdo dès S12", status: "Activé", meta: "28 sites", tone: "info" },
        { left: "Saisonnier A.", right: "Semaine 1 sites faciles", status: "Onboard", meta: "Binôme titulaire", tone: "ok" },
        { left: "Autoportée #2", right: "Retour mécano vendredi", status: "Risque", meta: "Capacité limitée 4 j", tone: "warn" },
        { left: "Clients renew <90j", right: "12 contrats", status: "Prioritaires", meta: "Zéro no-show", tone: "danger" },
      ],
    },
  },

  "EV-16": {
    seoTitle: "Saison automne-hiver EV — feuilles, tailles, cadence basse",
    seoDesc:
      "Ramassage feuilles, tailles hors pousse, maintenance engins, baisses de fréquence. Pilotez la basse saison sans perdre les sites. Essai 15 j.",
    sub: "Novembre : la tonte ralentit, les feuilles explosent, les tailles se concentrent. Ceux qui « improvisent la basse saison » perdent des forfaits au renew.",
    empathyH2: "La basse saison n’est pas une pause : c’est un autre métier",
    empathyBody:
      "Ramassage, soufflage, évacuation, tailles structurelles, inventaire engins : si vous laissez le planning en mode printemps, vous surstaffez les pelouses et sous-staffez les feuilles — puis vous expliquez au syndic pourquoi l’allée est un tapis jaune.",
    bodySections: [
      {
        h2: "Cas — 3 semaines de feuilles, 18 résidences",
        body: "Profil automne : cadence tonte réduite, tournées feuilles bihebdo, fenêtres de taille, créneaux atelier engins. Les sites sensibles (escalier nord, parking) ont une priorité usagers.",
        bullets: [
          "Changement de profil saisonnier global",
          "Évacuation déchets verts liée",
          "Atelier engins planifié hors urgence",
        ],
      },
      {
        h2: "≠ printemps",
        body: "Montée vs redescente. Ne fusionnez pas les playbooks.",
      },
      {
        h2: "Livrable renew novembre",
        body: "Bilan d’exécution saison + photos avant/après tailles + dossier pour le syndic.",
      },
    ],
    faq: [
      {
        q: "Ramassage feuilles dans le forfait ?",
        a: "Selon contrats : certains forfaits l’incluent, d’autres non. Tracez pour facturer le juste.",
      },
      {
        q: "Neige / déblaiement ?",
        a: "Si vous le proposez, créez des interventions ponctuelles ; ce n’est pas le cœur de cette page.",
      },
      {
        q: "Maintenance engins ?",
        a: "Bloquez des créneaux atelier — évite la panne du premier lundi de mars.",
      },
      {
        q: "Lien déchets verts ?",
        a: "Oui — rotations benne saturées en automne.",
      },
      {
        q: "Essai ?",
        a: "15 jours — basculez 10 sites en profil automne.",
      },
    ],
    demoExtra: {
      uiToolbar: "Automne · S45 · Feuilles + tailles",
      uiAlert: "Saturation benne feuilles — 3 rotations à confirmer avant vendredi",
      uiHint: "Cadence tonte ↓ · feuilles ↑ · atelier engins",
      uiRows: [
        { left: "Tilleuls — ramassage", right: "Bihebdo automne", status: "Dû jeu.", meta: "Escalier nord prioritaire", tone: "info" },
        { left: "Ormes — taille structure", right: "Fenêtre nov.", status: "Planifié", meta: "Photo AV/AP", tone: "ok" },
        { left: "Benne feuilles #2", right: "Pleine 80 %", status: "Rotation", meta: "Créneau ven. 16h", tone: "warn" },
        { left: "Autoportée #1 — atelier", right: "Entretien ½ j", status: "Bloqué lun.", meta: "Avant saison morte", tone: "neutral" },
      ],
    },
  },

  "EV-17": {
    seoTitle: "Multi-sites espaces verts — portefeuille, retards, filtres",
    seoDesc:
      "30 à 200+ sites : vision retards, filtres commune/type, priorités semaine. Différent des grands parcs (1 site N zones). Essai 15 j.",
    sub: "120 sites, 4 communes, 3 types de contrats : sans vue portefeuille, vous pilotez au téléphone. Excel « filtrable » devient un mensonge dès que le terrain bouge.",
    empathyH2: "Le problème n’est pas d’avoir des sites : c’est de voir les 8 critiques",
    empathyBody:
      "Parmi 120 fiches, 8 ont un retard, 3 un accès refusé, 2 un renew dans 30 jours. Si vous ne les sortez pas en 2 minutes, vous subissez la semaine au lieu de la diriger.",
    bodySections: [
      {
        h2: "Cas — Portefeuille 120 sites, lundi 7h",
        body: "Filtre : retard > 7 j + commune + type tonte. Liste des 8 critiques. Arbitrage : 5 rattrapages, 2 reports clients informés, 1 litige preuves. Le reste de la semaine redevient exécutable.",
        bullets: [
          "Filtres métier (pas seulement alpha)",
          "Retards = objets actionnables",
          "Reporting client sur extrait, pas sur tout le portefeuille",
        ],
      },
      {
        h2: "≠ grands parcs",
        body: "Grands parcs = 1 adresse, N zones. Multi-sites = N adresses. Intentions Google différentes.",
      },
      {
        h2: "Objection Excel",
        body: "Le filtre Excel est froid : il n’inclut pas le pointage de 9h ni le statut mobile.",
      },
    ],
    faq: [
      {
        q: "Combien de sites avant que ça vaille le coup ?",
        a: "Dès 25–30, la vue portefeuille bat le tableur. À 100+, c’est vital.",
      },
      {
        q: "Multi-sociétés / multi-dépôts ?",
        a: "Organisez par équipes/secteurs ; l’essai montre le bon découpage.",
      },
      {
        q: "Cartographie ?",
        a: "L’essentiel est la liste actionnable + planning ; la carte ne remplace pas les statuts.",
      },
      {
        q: "Lien collectivités multi-sites ?",
        a: "Oui — même logique, reporting marché en plus.",
      },
      {
        q: "Essai ?",
        a: "15 jours — importez un extrait réel (30 sites min).",
      },
    ],
    demoExtra: {
      uiToolbar: "Portefeuille · 120 sites · Filtre retards",
      uiAlert: "8 sites critiques cette semaine — 3 renew < 30 j inclus",
      uiSplitLabels: ["Critiques", "Actions"],
      uiHint: "2 minutes pour sortir le vrai travail du bruit",
      uiRows: [
        { left: "Retard tonte > 7 j", right: "5 sites", status: "Rattrapage", meta: "Secteur ouest", tone: "warn" },
        { left: "Accès refusé", right: "3 résidences", status: "Relance", meta: "Photo véhicule gênant", tone: "danger" },
        { left: "Renew < 30 j", right: "3 contrats", status: "Priorité", meta: "Dossier preuves", tone: "info" },
        { left: "OK semaine", right: "109 sites", status: "Sous contrôle", meta: "Pas de micro-management", tone: "ok" },
      ],
    },
  },

  "EV-18": {
    seoTitle: "Logiciel espaces verts Toulouse & Occitanie — éditeur local",
    seoDesc:
      "PME EV Toulouse métropole / Occitanie : essai sur vos sites périurbains, support joignable en 31. Pas une landing ville fantôme.",
    sub: "Tournefeuille, Blagnac, sud Tarn : le climat, les pousses et les clients ne sont pas ceux d’une slide parisienne. Vous voulez un éditeur qui connaît le terrain sud-ouest.",
    empathyH2: "« Cloud » n’empêche pas d’avoir besoin d’humain à Toulouse",
    empathyBody:
      "Quand le paramétrage bloque un lundi de mars, vous ne voulez pas un ticket anonyme à 6 fuseaux horaires. Support FR, exemples locaux, essai sur de vrais sites de la métropole.",
    bodySections: [
      {
        h2: "Cas — PME Tournefeuille, 22 salariés, 38 sites périurbains",
        body: "Import de 10 sites pilotes (résidences + ZA). Première semaine rejouée avec orage local. Support joignable pour caler fréquences et mobile.",
        bullets: [
          "Ancre locale réelle (pas 50 landings SEO)",
          "Essai sur votre géographie",
          "Vocabulaire clients sud : résidences, lotissements, ZA",
        ],
      },
      {
        h2: "Ce que cette page n’est pas",
        body: "Pas une copie du pilier. Angle local + confiance éditeur. Le produit reste le même ; le parcours d’essai est ancré 31/Occitanie.",
      },
      {
        h2: "Suite",
        body: "Après l’essai local → pilier / process (planning, preuves) selon douleur.",
      },
    ],
    faq: [
      {
        q: "Vous ne couvrez que Toulouse ?",
        a: "Non — le produit est national. Cette page existe parce que beaucoup cherchent un ancrage local et un support accessible.",
      },
      {
        q: "Démo sur site ?",
        a: "Démo guidée à distance + essai sur vos données. Déplacements selon contexte.",
      },
      {
        q: "Données hébergées où ?",
        a: "Cadre PROGESTI standard — détails en essai / échange commercial.",
      },
      {
        q: "Références locales ?",
        a: "On parle cas d’usage terrain sud-ouest pendant l’essai ; pas de name-dropping inventé ici.",
      },
      {
        q: "Démarrer ?",
        a: "Essai 15 j — 10 sites périurbains Toulouse métropole.",
      },
    ],
    demoExtra: {
      uiToolbar: "Essai local · 31 · 10 sites pilotes",
      uiAlert: "Orage périurbain rejoué sur planning — support FR joignable",
      uiHint: "Ancre Toulouse / Occitanie · pas de landing fantôme",
      uiRows: [
        { left: "Tournefeuille — Tilleuls", right: "Bihebdo · pilote", status: "Importé", meta: "Digicode à jour", tone: "ok" },
        { left: "Blagnac — ZA Aéro", right: "Tonte + haies", status: "Importé", meta: "Accès badge", tone: "ok" },
        { left: "Balma — lotissement", right: "Report météo test", status: "OK", meta: "Playbook orage", tone: "info" },
        { left: "Support 31", right: "Calage fréquences", status: "Dispo", meta: "Humain, pas chatbot", tone: "ok" },
      ],
    },
  },

  "EV-19": {
    seoTitle: "Remplacer Excel & WhatsApp en espaces verts — méthode",
    seoDesc:
      "Passez de Excel+WhatsApp à une source de vérité EV : pilote 25 sites, coupez le groupe planning, gardez WA informal. Essai 15 jours.",
    sub: "Votre OS actuel : Planning_S18_final_V2.xlsx + groupe « Tournées ». Ça marche jusqu’à la première absence du gérant ou le premier litige syndic.",
    empathyH2: "Excel n’est pas l’ennemi — en faire un OS d’entreprise l’est",
    empathyBody:
      "Excel est excellent pour calculer. Horrible pour synchroniser 4 équipes à 7h10. WhatsApp est excellent pour la vie d’équipe. Horrible comme registre de preuves. Le remplacement se fait par pilote, pas par big bang.",
    bodySections: [
      {
        h2: "Méthode — 25 sites pilotes, 14 jours",
        body: "J1–2 import. J3–5 double run (Excel encore là). J6–10 mobile obligatoire sur le pilote. J11–14 : le groupe WA « planning » passe en lecture seule puis archivé. WA informal reste pour la pause café.",
        bullets: [
          "Périmètre pilote visible",
          "Critère de succès : 0 planning parallèle",
          "Mesure : appels gérant 18h en baisse",
        ],
      },
      {
        h2: "≠ pilier money",
        body: "Le pilier vend le logiciel global. Ici on vend la sortie de crise Excel/WA.",
      },
      {
        h2: "Risques à anticiper",
        body: "Chef d’équipe qui re-crée un Excel fantôme, commercial qui promet hors système, photos encore sur téléphone perso.",
      },
    ],
    faq: [
      {
        q: "Faut-il tout migrer d’un coup ?",
        a: "Non. 25 sites, une vraie saison ou une vraie montée de charge, puis élargissement.",
      },
      {
        q: "On garde WhatsApp ?",
        a: "Oui pour le social / urgence humaine. Non pour l’ordre de tournée officiel.",
      },
      {
        q: "Et les anciens historiques Excel ?",
        a: "Archivez-les. Le neuf commence à la date d’essai ; pas besoin de réécrire 5 ans.",
      },
      {
        q: "Résistance terrain ?",
        a: "Montrez que ça réduit les appels. L’adoption suit le soulagement, pas la slide.",
      },
      {
        q: "Essai ?",
        a: "15 jours — pilote 25 sites exactement sur cette méthode.",
      },
    ],
    demoExtra: {
      uiToolbar: "Migration · Pilote 25 sites · J11",
      uiAlert: "Groupe WA « Tournées » archivé — Excel S18 figé en lecture seule",
      uiSplitLabels: ["Avant", "Après"],
      uiHint: "Source de vérité unique · WA revient à sa place",
      uiRows: [
        { left: "Planning_S18_final_V2.xlsx", right: "3 versions concurrentes", status: "Avant", meta: "Dimanche soir gérant", tone: "danger" },
        { left: "WA Tournées", right: "Ordres noyés", status: "Avant", meta: "Preuve impossible", tone: "warn" },
        { left: "Semaine EV pilote", right: "1 vérité · mobile sync", status: "Après", meta: "25 sites", tone: "ok" },
        { left: "WA informal", right: "Pause / entraide", status: "Après", meta: "Plus d’OS parallèle", tone: "ok" },
      ],
    },
  },

  "EV-20": {
    seoTitle: "FAQ logiciel espaces verts — réponses terrain PROGESTI",
    seoDesc:
      "Prix, mobile, météo, preuves, migration Excel, verticalité EV vs propreté : réponses concrètes avant essai. FAQ 100 % espaces verts.",
    sub: "Avant de lancer l’essai, les mêmes 6 questions reviennent. Voici des réponses de chef d’exploitation — pas de brochure.",
    empathyH2: "Vos vraies questions, sans langue de bois",
    empathyBody:
      "« C’est un soft de nettoyage ? » « Le terrain va pointer ? » « On est trop petits ? » Si on élude, vous le sentez. Cette FAQ est volontairement EV, distincte de la FAQ globale du site.",
    bodySections: [
      {
        h2: "Les 6 objections qui bloquent l’essai",
        body: "Verticalité EV, prix, adoption mobile, temps de paramétrage, peur du flicage, comparaison Excel. Chaque réponse renvoie vers une page sœur quand l’intent est plus profond.",
        bullets: [
          "Oui, verticale espaces verts dédiée",
          "Essai 15 j sans CB sur vos sites",
          "Paramétrage progressif (pilote)",
        ],
      },
      {
        h2: "Parcours recommandé après la FAQ",
        body: "Pilier si vision globale · Remplacer Excel si vous voulez la méthode · Preuves si litige · Collectivités/syndics si donneur d’ordre.",
      },
      {
        h2: "Ce que vous ne trouverez pas ici",
        body: "Pas de ROI % inventé, pas d’« IA qui planifie toute seule », pas de mélange propreté/sécu.",
      },
    ],
    faq: [
      {
        q: "PROGESTI espaces verts, c’est la même chose que la propreté ?",
        a: "Non. Vocabulaire, démos et pages sont EV (tournée, fréquence, engins, AV/AP). Les autres métiers ont leurs hubs.",
      },
      {
        q: "On est 6 personnes : trop petit ?",
        a: "Non — page TPE dédiée. L’essai sur 15–20 clients se juge vite.",
      },
      {
        q: "Et si la haute saison empêche de paramétrer ?",
        a: "Paramétrez un pilote hors pic ou 1 h/jour. Ne visez pas 100 sites la première semaine.",
      },
      {
        q: "Les preuves, c’est du flicage ?",
        a: "C’est une protection mutuelle bureau/terrain/client. Le geste mobile reste minimal.",
      },
      {
        q: "Tarif ?",
        a: "Dès 29,99 € HT/mois — /tarifs. Essai 15 jours sans CB.",
      },
    ],
    demoExtra: {
      uiToolbar: "FAQ EV · 6 objections · CTA essai",
      uiAlert: "Réponses terrain — puis essai sur vos sites, pas une démo PowerPoint",
      uiHint: "Chaque réponse peut ouvrir une page sœur plus profonde",
      uiRows: [
        { left: "C’est de la propreté ?", right: "Non — hub EV dédié", status: "Clarifié", meta: "Vocabulaire tournée/fréquence", tone: "ok" },
        { left: "Terrain pointera ?", right: "Si planning juste", status: "OK", meta: "Geste < 15 s", tone: "ok" },
        { left: "Trop petit / trop cher ?", right: "TPE & essai 15 j", status: "Voir TPE", meta: "→ petites-entreprises", tone: "info" },
        { left: "Excel suffit ?", right: "Jusqu’au premier litige", status: "Voir méthode", meta: "→ remplacer-excel", tone: "warn" },
      ],
    },
  },
};
