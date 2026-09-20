/**
 * EV Quality MAX v3 — réécriture radicale body/FAQ/démo enrichments.
 * Usage: node scripts/ev-quality-max.mjs
 * Owner: ESPACE VERT only. Ne touche pas la sécu.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outPath = path.join(root, "src", "lib", "marketing", "ev", "quality-v3.ts");

/** @typedef {{ q: string, a: string }} Faq */
/** @typedef {{ h2: string, body: string, bullets?: string[], h3?: {title:string,body:string}[] }} Body */

/**
 * Pack narratif unique par page — copy client réelle, zéro scaffolding SEO.
 * Chaque entrée remplace bodySections + faq et enrichit la démo.
 */
export const PACK = {
  "EV-01": {
    seoTitle: "Logiciel espaces verts PME — planning météo, preuves, facture",
    seoDesc:
      "PME paysagiste 15–40 salariés : replanifiez l’orage du lundi, pointez le terrain, prouvez les passages et facturez le réalisé. Essai 15 jours sans CB — support Toulouse.",
    sub: "Chez Vertigo Paysage (28 salariés, périurbain 31), le gérant ouvre PROGESTI à 7h15 le lundi d’orage : 9 tontes impraticables, 2 équipes à redistribuer, l’élagage de mercredi intouchable. Plus de tableur du dimanche soir.",
    empathyH2: "Lundi 7h15 : l’orage a décidé à votre place",
    empathyBody:
      "Karim, gérant de Vertigo Paysage (28 salariés, 47 sites actifs), reçoit trois WhatsApp avant le café : « pelouse sous l’eau », « autoportée chez le mécano », « le syndic des Tilleuls rappelle ». Sans système, il reconstruit la semaine sur un Excel qui a déjà trois versions. Avec un vrai planning EV, les sites bloqués sont marqués, les fréquences restent attachées au contrat, et le mobile des équipes affiche le nouvel ordre avant 8h.",
    proofH2: "Ce que Vertigo a gagné en 6 semaines",
    proofQuote:
      "« On ne vend plus des excuses météo : on envoie le statut reporté + la date de reprise. Le conseil syndical a arrêté de nous harceler. » — Karim, gérant",
    bodySections: [
      {
        h2: "Journée type — Karim, gérant PME paysagiste 28 salariés",
        body: "Portefeuille mixte : 32 contrats d’entretien (résidences + ZA), 8 chantiers création, 2 marchés communaux annexes. Haute saison = 3 équipes de 4 + 1 binôme élagage. Le goulot : décider en 20 minutes ce qui glisse, ce qui reste, et qui conduit l’autoportée.",
        bullets: [
          "7h15 — filtre « impraticable météo » sur la tournée tonte S18",
          "7h35 — bascule équipe A sur haies prioritaires syndic (accès digicode à jour)",
          "7h50 — notification mobile : nouvel ordre + motif report visible client",
          "17h40 — pointages du jour + 2 photos AV/AP haies rattachées au site",
        ],
        h3: [
          {
            title: "Objection « Excel suffit »",
            body: "Excel ne synchronise pas le mobile du chef d’équipe à 7h40, ni l’historique que le syndic exige à 17h. Ce n’est pas un problème de discipline : c’est un problème de source de vérité.",
          },
          {
            title: "Livrable client / donneur d’ordre",
            body: "Statut de passage par site, motif de report, date de reprise proposée, preuve horodatée — exportable pour un conseil syndical ou une régie.",
          },
        ],
      },
      {
        h2: "Avant / après opérationnel (sans ROI inventé)",
        body: "Avant : 3 fichiers « Planning_S18_final_V2 », un groupe WhatsApp « Tournées », des photos perdues dans la galerie du téléphone. Après : une semaine EV unique, des reports tracés, une facture qui reprend les prestations ponctuelles réellement faites (haies d’urgence, plantation reportée).",
        bullets: [
          "Planning : fréquences contrat ≠ bricolage calendrier mural",
          "Terrain : pointage arrivée/départ + photo optionnelle",
          "Bureau : facture alimentée par le réalisé, pas par la mémoire du commercial",
        ],
      },
      {
        h2: "Process PROGESTI sur cette page (pilier)",
        body: "Cette page couvre le flux complet PME EV — pas un seul service. Si vous cherchez uniquement la tonte, les syndicats, ou la collectivité, les pages sœurs sont plus précises. Ici : replanif → pointage → preuve → facture.",
        h3: [
          {
            title: "Par où commencer l’essai",
            body: "Importez 10–15 sites critiques (ceux qui appellent le plus). Tenez une vraie semaine dessus. Gardez WhatsApp pour le social, plus pour le planning.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "On est 28 salariés multi-sites : est-ce trop « petit logiciel » ou trop « usine » ?",
        a: "C’est exactement la cible : assez de structure pour 40–80 sites, assez simple pour qu’un chef d’équipe pointe en 15 secondes. Pas un ERP chantier BTP.",
      },
      {
        q: "Que se passe-t-il concrètement un lundi d’orage ?",
        a: "Vous marquez les sites impraticables, vous conservez la fréquence contrat, vous basculez les équipes sur du travail faisable (haies, plantations reportables), et le mobile affiche le nouvel ordre. Le client voit un report tracé, pas un silence radio.",
      },
      {
        q: "Le terrain va-t-il vraiment pointer ?",
        a: "Si le planning bureau est juste, le mobile devient l’outil qui évite les coups de fil. Adoption = moins d’appels, pas plus de process.",
      },
      {
        q: "Comment facturer le réalisé sans double saisie ?",
        a: "Les interventions clôturées (et les ponctuels ajoutés) alimentent la facturation. Les oublis de « petite haie d’urgence » diminuent parce qu’elles existent dans le planning.",
      },
      {
        q: "Essai et tarif ?",
        a: "15 jours sans CB sur vos vrais sites. Tarif dès 29,99 € HT/mois. Support humain depuis Toulouse (31).",
      },
    ],
    demoExtra: {
      uiToolbar: "S18 · Vertigo · 47 sites · Orage 14 mm",
      uiAlert: "Alerte météo : 9 tontes lundi marquées impraticables — fréquences contrat conservées",
      uiHint: "Équipe A basculée haies prioritaires · Équipe B tient élagage mercredi",
      uiRows: [
        { left: "Résidence des Tilleuls — tonte", right: "Équipe A · sol détrempé", status: "Report météo", meta: "Reprise proposée mer. 10h · contrat bihebdo", tone: "warn" },
        { left: "ZA Les Pins — taille haies", right: "Équipe A · prioritaire syndic", status: "Affecté 7h41", meta: "Digicode 4412 · nacelle non requise", tone: "info" },
        { left: "Maison Lemoine — élagage", right: "Équipe B · créneau mer. tenu", status: "OK", meta: "Grimpeur + sol · ½ journée", tone: "ok" },
        { left: "Mairie annexe — pelouse sud", right: "Équipe B · basculé mardi 8h", status: "Replanifié", meta: "Client SMS auto · motif pluie", tone: "info" },
        { left: "Autoportée #2", right: "Chez mécano · retour estimé jeudi", status: "Engin indispo", meta: "Tournée tonte limitée à 1 machine", tone: "danger" },
      ],
    },
  },

  "EV-02": {
    seoTitle: "Espaces verts PROGESTI — hub solutions par métier",
    seoDesc:
      "Trouvez la bonne page EV : entretien, tonte, syndic, collectivité, école, hôpital, planning, preuves, météo. 36 angles métier — zéro fourre-tout propreté.",
    sub: "Vous n’êtes pas « un utilisateur espaces verts » : vous êtes un gérant de tournée, un DST, un syndic pressé, ou un conducteur de travaux. Ce hub vous envoie vers la page qui parle votre journée — pas vers un catalogue générique.",
    empathyH2: "Trois personnes, trois recherches, zéro page fourre-tout",
    empathyBody:
      "Mardi 9h : Sophie (DST, commune 18 000 hab.) cherche un reporting marché. 10h : Marc (gérant, 22 salariés) veut replanifier sous la pluie. 11h : Nadia (conducteur travaux syndic) veut des preuves AV/AP avant le conseil. Une seule landing « tout EV » les perd tous. Ici, chaque intent a son URL.",
    bodySections: [
      {
        h2: "Comment choisir votre porte d’entrée en 30 secondes",
        body: "Si vous vendez et exécutez de l’entretien récurrent → pilier logiciel ou page entretien. Si vous êtes donneur d’ordre (collectivité, syndic, santé, scolaire) → pages audience. Si vous souffrez d’un process (Excel, météo, engins, absences) → pages problème/process.",
        bullets: [
          "Service = ce que vous faites (tonte, élagage, haies, désherbage…)",
          "Audience = pour qui vous travaillez (syndic, mairie, clinique…)",
          "Process = comment vous tenez la boutique (planning, pointage, factu)",
        ],
        h3: [
          {
            title: "Ce hub n’est pas la propreté",
            body: "PROGESTI a d’autres verticales. Ici vocabulaire EV uniquement : tournée, fréquence, passage, AV/AP, marché, régie, engins. Pas de « sites tertiaires » recyclés.",
          },
        ],
      },
      {
        h2: "Carte mentale des 36 angles",
        body: "Les pages sœurs ne se cannibalisent pas : tonte ≠ entretien global ≠ taille de haies. Multi-sites (N adresses) ≠ grands parcs (1 adresse, N zones). Preuves horodatées ≠ photos AV/AP. Parcourez, puis essayez sur 10 sites réels.",
      },
      {
        h2: "Prochaine étape utile",
        body: "Ouvrez le pilier si vous êtes dirigeant PME. Ouvrez collectivités / syndics / écoles / hôpitaux si vous êtes côté donneur d’ordre. Ouvrez « remplacer Excel » si vous voulez le contraste brutal avant/après.",
      },
    ],
    faq: [
      {
        q: "Je gère une entreprise d’entretien EV : par où commencer ?",
        a: "Le pilier /logiciel-espace-vert, puis entretien, planning équipes et preuves de passage. L’essai sur 10–15 sites suffit à juger.",
      },
      {
        q: "Je suis une collectivité : c’est pour les prestataires ou pour la régie ?",
        a: "Les deux cas de figure sont couverts sur la page collectivités (reporting marché, tournées, preuves). Le prestataire privé peut aussi pointer depuis le même produit.",
      },
      {
        q: "Pourquoi autant de pages ?",
        a: "Parce qu’un gérant de tonte et un DST ne posent pas la même question à Google. Une page fourre-tout fait rebondir les deux.",
      },
      {
        q: "Y a-t-il un mélange avec la sécurité ou la propreté ?",
        a: "Non. Cette verticale est 100 % espaces verts. Les autres métiers ont leurs propres hubs.",
      },
      {
        q: "Tarif ?",
        a: "Dès 29,99 € HT/mois, essai 15 jours sans CB — détail sur /tarifs.",
      },
    ],
    demoExtra: {
      uiToolbar: "Hub EV · 3 parcours · 36 pages",
      uiAlert: "Conseil : ne restez pas sur le hub — ouvrez la page qui match votre journée type",
      uiSplitLabels: ["Qui êtes-vous ?", "Où aller"],
      uiHint: "Chaque clic ouvre une démo produit différente — pas le même screenshot",
      uiRows: [
        { left: "Gérant PME 22 sal.", right: "Replanif météo + facture", status: "Pilier", meta: "→ /logiciel-espace-vert", tone: "info" },
        { left: "DST commune 18k", right: "Marché + reporting passages", status: "Audience", meta: "→ /espace-vert/collectivites", tone: "info" },
        { left: "Syndic / CT travaux", right: "Preuves + photos AV/AP", status: "Audience", meta: "→ /espace-vert/syndics-coproprietes", tone: "info" },
        { left: "Chef d’exploitation", right: "Tournées & absences", status: "Process", meta: "→ /espace-vert/planning-equipes", tone: "neutral" },
      ],
    },
  },

  "EV-03": {
    seoTitle: "Logiciel entretien espaces verts — fréquences & preuves",
    seoDesc:
      "Contrats annuels multi-sites : fréquences bihebdo, tournées, pointage et preuves pour renew. Cas résidence 120 lots. Essai 15 jours sans CB.",
    sub: "Léa, responsable d’exploitation chez Atelier des Haies (19 salariés), gère 64 contrats d’entretien. Son cauchemar : une fréquence perdue dans un PDF, un site oublié 3 semaines, un renew sans dossier de preuves.",
    empathyH2: "L’entretien ce n’est pas un devis : c’est une promesse hebdomadaire",
    empathyBody:
      "Le commercial a signé la résidence Les Acacias (120 lots) : tonte bihebdo mars→octobre, haies 4×/an, désherbage allées mensuel. Sans occurrency vivantes dans le planning, c’est Léa qui « se souvient » — jusqu’aux congés. Le client, lui, compte les semaines.",
    bodySections: [
      {
        h2: "Cas client — Résidence Les Acacias, contrat annuel 41 k€",
        body: "Léa paramètre le site une fois : consignes d’accès, digicode, local tondeuses, fréquences par prestation. La semaine S18 se génère. Deux passages manqués (pluie) apparaissent en retard avec motif — rattrapés S19 sans perdre le fil du contrat.",
        bullets: [
          "Fréquences attachées au contrat, pas à la mémoire du chef d’équipe",
          "Retards visibles avant l’appel du conseil syndical",
          "Historique exportable pour le renew de novembre",
        ],
        h3: [
          {
            title: "Objection « le forfait se gère sur papier »",
            body: "Le papier ne dit pas si la bihebdo de la semaine 17 a été faite. Le renew se négocie sur des preuves, pas sur une impression.",
          },
          {
            title: "≠ paysagisme création, ≠ tonte seule",
            body: "Cette page = récurrence multi-prestations. Pour un chantier one-shot, voyez paysagisme. Pour la seule tournée tonte volume, voyez tonte pelouse.",
          },
        ],
      },
      {
        h2: "Journée type d’exploitation entretien",
        body: "Matin : filtre « dû cette semaine » + retards. Midi : ajustement météo. Soir : clôture des pointages, photos haies rattachées, préparation facture périodique.",
      },
      {
        h2: "Livrable pour le donneur d’ordre",
        body: "Tableau des passages promis vs réalisés, motifs de report, prochain créneau — de quoi tenir un conseil syndical sans improvisation WhatsApp.",
      },
    ],
    faq: [
      {
        q: "Peut-on gérer plusieurs fréquences sur le même site ?",
        a: "Oui : tonte bihebdo + haies trimestrielles + désherbage mensuel cohabitent sur la fiche site et génèrent des occurrences distinctes.",
      },
      {
        q: "Comment prouver un passage contesté ?",
        a: "Pointage horodaté + historique site (+ photo si vous l’activez). Vous répondez avec un dossier, pas une capture d’écran de SMS.",
      },
      {
        q: "Et les reports météo dans un forfait ?",
        a: "Le statut « reporté météo » conserve la fréquence contrat et propose une date de reprise — visible bureau et terrain.",
      },
      {
        q: "Combien de sites pour démarrer ?",
        a: "Commencez par 10 contrats critiques (ceux qui renouvellent bientôt). Étendez ensuite.",
      },
      {
        q: "Tarif essai ?",
        a: "15 jours sans CB. Détail sur /tarifs.",
      },
    ],
    demoExtra: {
      uiToolbar: "Acacias · Contrat 41 k€ · S18 · bihebdo",
      uiAlert: "2 retards tonte (pluie S17) — rattrapage planifié S19 sans casser la fréquence",
      uiHint: "Checklist contrat : prestations vivantes, pas un PDF mort",
      uiRows: [
        { left: "Tonte pelouses A/B", right: "Bihebdo · Équipe Nord", status: "Planifié mar. 8h", meta: "Dernier OK 12/05 08:42", tone: "info" },
        { left: "Taille haies périphériques", right: "Trimestriel · fenêtre S22", status: "Contrat", meta: "4×/an · photo AV/AP exigée", tone: "neutral" },
        { left: "Désherbage allées", right: "Mensuel · dû cette semaine", status: "À faire", meta: "Zone bac à ordures prioritaire", tone: "warn" },
        { left: "Passage tonte S17", right: "Report pluie · rattrapage S19", status: "Prouvé report", meta: "Motif tracé · client informé", tone: "ok" },
      ],
    },
  },

  "EV-04": {
    seoTitle: "Logiciel paysagisme — chantiers création, jalons, réception",
    seoDesc:
      "Chantiers paysagers : devis, jalons engazonnement/plantations, engins, PV de réception avec preuves. Pour conducteurs de travaux, pas l’entretien récurrent.",
    sub: "Nicolas, conducteur de travaux chez Terra Forma (création), jongle avec 5 chantiers ouverts, une mini-pelle surbookée et un promoteur qui veut le PV demain. Ce n’est pas de l’entretien bihebdo : ce sont des jalons.",
    empathyH2: "Un chantier création ne se pilote pas comme une tournée de tonte",
    empathyBody:
      "Devis signé mardi, livraison terreau jeudi, engazonnement reporté pour pluie, réception partielle exigée par l’aménageur. Si tout vit dans des fils WhatsApp + un Gantt Excel perso, le commercial découvre les écarts trop tard — et la marge aussi.",
    bodySections: [
      {
        h2: "Cas — Lotissement Les Clarines, 3 jalons engazonnement",
        body: "Nicolas découpe le chantier : préparation sol → engazonnement → reprises J+21. Chaque jalon a une équipe, un engin, une preuve photo. À la réception, le dossier n’est pas une chasse aux messages.",
        bullets: [
          "Jalons datés avec dépendances (pas de pose si fourniture absente)",
          "Conflit mini-pelle détecté avant le mardi critique",
          "PV réception = preuves rattachées aux jalons, pas à la galerie téléphone",
        ],
        h3: [
          {
            title: "≠ entretien annuel",
            body: "L’entretien vit par fréquences. Le paysagisme création vit par jalons et réception. Ne mélangez pas les deux intents : pages sœurs dédiées.",
          },
        ],
      },
      {
        h2: "Objections terrain",
        body: "« On a déjà un CCTP » — très bien : le logiciel ne remplace pas le CCTP, il suit l’exécution. « One-shot pas besoin d’outil » — un one-shot mal tracé = litige garantie reprises.",
      },
      {
        h2: "Livrable promoteur / aménageur",
        body: "Timeline des jalons, écarts météo, photos avant/après, statut réception partielle ou totale.",
      },
    ],
    faq: [
      {
        q: "Peut-on lier devis → chantier → facture d’avancement ?",
        a: "Oui : le flux devis / planning / réalisé évite la double saisie et les oublis d’avenants.",
      },
      {
        q: "Gestion des engins sur chantier création ?",
        a: "Les contraintes engins apparaissent dans le planning (conflit mini-pelle, nacelle). Ce n’est pas une GMAO industrielle : c’est de l’anti-double-booking EV.",
      },
      {
        q: "Et les reprises sous garantie ?",
        a: "Planifiez un contrôle J+21 rattaché au chantier ; photo et statut restent dans le dossier réception.",
      },
      {
        q: "Différence avec la page aménageurs ?",
        a: "Ici angle exécutant paysagiste. La page aménageurs/promoteurs cible la relation jalons/réception côté ce type de clients.",
      },
      {
        q: "Essai ?",
        a: "15 jours sans CB — importez 1–2 chantiers réels en cours.",
      },
    ],
    demoExtra: {
      uiToolbar: "Clarines · Chantier création · Sem. 18",
      uiAlert: "Conflit mini-pelle mardi 10h — plantation Clarines vs reprise ZA Nord",
      uiHint: "Timeline jalons → preuves → PV réception",
      uiRows: [
        { left: "Jalon 1 — préparation sol", right: "Équipe création · lun–mar", status: "Clos", meta: "Photo AV 08/05 · engins OK", tone: "ok" },
        { left: "Jalon 2 — engazonnement", right: "Report pluie → jeu. 8h", status: "Replanifié", meta: "Fournisseur terreau livré", tone: "warn" },
        { left: "Jalon 3 — contrôle reprises", right: "J+21 · 29/05", status: "Planifié", meta: "Garantie contrat · photo AP", tone: "info" },
        { left: "Mini-pelle #1", right: "Double booking détecté", status: "Conflit", meta: "Arbitrer avant 16h", tone: "danger" },
      ],
    },
  },

  "EV-05": {
    seoTitle: "Planning tonte pelouse multi-sites — tournées & engins",
    seoDesc:
      "Optimisez les tournées de tonte : 14 pelouses, 1 autoportée, reports météo, ordre de passage. Pour exploitations volume — essai 15 jours.",
    sub: "Nord Tonte Services : 2 salariés + 1 apprenti, 14 pelouses le lundi, une seule autoportée. L’ordre de passage mal pensé = 40 km à vide et un client à 17h qui n’a pas été fait.",
    empathyH2: "La tonte, c’est de la logistique déguisée en jardinage",
    empathyBody:
      "Dès que la pousse accélère, le goulot n’est plus « savoir tondre » : c’est enchaîner les sites sans croiser l’autoportée, sans oublier la pelouse du fond de lotissement, et sans promettre mardi quand le sol est encore une éponge.",
    bodySections: [
      {
        h2: "Cas — Lundi 14 pelouses, 1 autoportée, orage à 11h",
        body: "Le planning ordonne les sites par secteur (nord puis ouest). À 11h, 3 pelouses sont marquées report météo ; l’équipe bascule sur 2 tailles de bordures prévues en buffer. Le client voit le report, pas un no-show.",
        bullets: [
          "Ordre de tournée anti km à vide",
          "Statut pelouse impraticable sans perdre la cadence contrat",
          "Engin unique visible : pas de fantaisie « deux équipes sur une machine »",
        ],
        h3: [
          {
            title: "≠ entretien multi-prestations",
            body: "Ici focus volume tonte / engins / ordre de passage. L’entretien global (haies+désherbage+tonte) est la page sœur entretien.",
          },
        ],
      },
      {
        h2: "Objections",
        body: "« On connaît nos tournées par cœur » — jusqu’à l’arrêt maladie du conducteur. « Le GPS suffice » — le GPS ne gère pas la fréquence contrat ni la preuve de passage.",
      },
      {
        h2: "Livrable",
        body: "Feuille de tournée du jour + statuts live + reports datés pour le bureau.",
      },
    ],
    faq: [
      {
        q: "Peut-on gérer plusieurs fréquences de tonte (hebdo / bihebdo) ?",
        a: "Oui, par site. La tournée du jour ne montre que ce qui est dû.",
      },
      {
        q: "Autoportée en panne : que faire ?",
        a: "Marquez l’engin indispo ; les sites dépendants apparaissent à replanifier. Ce n’est pas une GMAO, c’est un garde-fou planning.",
      },
      {
        q: "Photos après tonte ?",
        a: "Optionnelles mais utiles en copro. Voir aussi la page photos AV/AP.",
      },
      {
        q: "Lien avec replanification météo ?",
        a: "Oui — page dédiée playbook orage si c’est votre douleur principale.",
      },
      {
        q: "Essai ?",
        a: "15 jours — chargez votre tournée du lundi réelle.",
      },
    ],
    demoExtra: {
      uiToolbar: "Tournée tonte · Lun 06/05 · Autoportée #1",
      uiAlert: "11h02 orage local — 3 pelouses marquées impraticables, buffer bordures activé",
      uiHint: "1 machine · 14 sites · ordre nord→ouest",
      uiRows: [
        { left: "1. Lot. Les Bleuets", right: "Équipe Tonte · 55 min", status: "Fait 08:12", meta: "Pointage + photo sortie", tone: "ok" },
        { left: "2. Résidence Ormes", right: "Pelouse détrempée", status: "Report météo", meta: "Reprise mer. · cadence bihebdo", tone: "warn" },
        { left: "3. ZA Horizon — bande sud", right: "En cours", status: "13:05", meta: "Autoportée #1", tone: "info" },
        { left: "Buffer — bordures Acacias", right: "Activé post-orage", status: "Ajouté", meta: "Évite retour garage à vide", tone: "neutral" },
      ],
    },
  },

  "EV-06": {
    seoTitle: "Planning élagage & grimpe — créneaux, sécurité, preuves",
    seoDesc:
      "Pôle élagage : créneaux grimpe, binômes, nacelle, déchets de coupe, preuves client. Différent de la taille de haies. Essai 15 jours.",
    sub: "Le pôle élagage de Canopée Services (grimpeur + élagueur sol + camion) ne peut pas « glisser » comme une tonte. Un créneau raté = voisinage, DICT, benne, et parfois la mairie.",
    empathyH2: "L’élagage, c’est un rendez-vous chirurgical — pas une tournée flexible",
    empathyBody:
      "Autorisation d’occupation, information riverains, nacelle ou grimpe, évacuation branches sous 48h : si le planning traite ça comme une tonte déplacée, vous cumulez les risques. La page taille de haies est un autre métier.",
    bodySections: [
      {
        h2: "Cas — Frêne dangereux, mercredi 13h–17h, rue Pasteur",
        body: "Créneau tenu, binôme affecté, nacelle réservée, benne planifiée pour 17h30. Pluie forte → report avec conservation du créneau prioritaire et notification riverains. Preuve photo avant/après pour l’assurance et la mairie.",
        bullets: [
          "Créneau + compétences (grimpe) visibles",
          "Engin / benne liés à l’intervention",
          "Déchets de coupe = suite logistique, pas un oubli",
        ],
      },
      {
        h2: "Objections",
        body: "« On a un planning papier grimpe » — il ne parle pas au commercial qui vend un élagage le même créneau. « C’est trop niche » — c’est niche, et c’est exactement pour ça qu’une page dédiée existe.",
      },
      {
        h2: "Livrable client",
        body: "Compte-rendu d’élagage daté, photos, statut évacuation branches.",
      },
    ],
    faq: [
      {
        q: "Différence avec taille de haies ?",
        a: "Haies = volume multi-sites, accès riverains, saison courte. Élagage = créneau expert, grimpe/nacelle, risque, souvent one-shot ou annuel ciblé.",
      },
      {
        q: "Gestion DICT / autorisations ?",
        a: "Consigne sur la fiche intervention + checklist avant démarrage. Le logiciel rappelle ; il ne remplace pas vos obligations légales.",
      },
      {
        q: "Benne et déchets verts ?",
        a: "Liez une rotation benne à l’intervention — détail sur la page déchets verts.",
      },
      {
        q: "Météo et sécurité grimpe ?",
        a: "Report tracé avec motif sécurité ; le créneau prioritaire ne disparaît pas du backlog.",
      },
      {
        q: "Essai ?",
        a: "15 jours — planifiez votre semaine d’élagage réelle.",
      },
    ],
    demoExtra: {
      uiToolbar: "Élagage · Mer 13–17h · Rue Pasteur",
      uiAlert: "Vent 62 km/h — grimpe reportée · créneau prioritaire conservé · riverains notifiés",
      uiHint: "Binôme grimpe+sol · nacelle · benne 17h30",
      uiRows: [
        { left: "Frêne — abattage raisonné", right: "Grimpeur L. + sol M.", status: "Report sécurité", meta: "Motif vent · reprise ven. AM", tone: "warn" },
        { left: "Nacelle 18 m", right: "Réservée créneau", status: "Tenue", meta: "Pas de double booking", tone: "ok" },
        { left: "Benne branches", right: "Rotation 17h30", status: "Planifiée", meta: "Engagement <48h sur site", tone: "info" },
        { left: "Preuve photo AV", right: "Déposée 12:58", status: "OK", meta: "Dossier assurance / mairie", tone: "ok" },
      ],
    },
  },

  "EV-07": {
    seoTitle: "Désherbage espaces verts — tournées, zones, preuves zéro phyto",
    seoDesc:
      "Planifiez désherbage mécanique / thermique des abords : allées, terre-pleins, cimetières. Preuves pour collectivités et syndics. Essai 15 jours.",
    sub: "Depuis le zéro phyto, Inès (exploitation, 11 salariés) enchaîne les passages mécaniques. Sans zonage clair, l’équipe « fait ce qui se voit » et la DST reçoit des photos de trottoirs oubliés.",
    empathyH2: "Le désherbage se juge sur les 20 mètres que personne ne regarde",
    empathyBody:
      "Entrée de résidence impeccable, arrière de parking poids lourds abandonné : le donneur d’ordre finit toujours par photographier le pire angle. Il faut des zones, des fréquences, et une preuve — pas une intention.",
    bodySections: [
      {
        h2: "Cas — Terre-pleins RD + allées copro, tournée jeudi",
        body: "8 terre-pleins communaux + 3 résidences. Zones sensibles (école, cimetière) en priorité matinale. Statut fait/partiel avec photo du point noir. Report pluie ≠ disparition de la zone du backlog.",
        bullets: [
          "Zones nommément listées (pas « site entier »)",
          "Méthode (mécanique / thermique) en consigne",
          "Preuve visuelle du point noir, pas de la belle entrée",
        ],
      },
      {
        h2: "≠ cimetières / voirie (page sœur)",
        body: "Si votre cœur de métier est cimetière + terre-pleins très sensibles usagers, ouvrez la page dédiée. Ici : désherbage transverse abords.",
      },
      {
        h2: "Livrable DST / syndic",
        body: "Carte des zones traitées + dates + photos des points de contrôle convenus au marché.",
      },
    ],
    faq: [
      {
        q: "Peut-on tracer le zéro phyto / méthode utilisée ?",
        a: "Oui via consignes d’intervention et checklist. Utile pour reporting marché public.",
      },
      {
        q: "Comment éviter les zones oubliées ?",
        a: "Découpez le site en zones ; le « fait » se coche zone par zone, pas site entier.",
      },
      {
        q: "Lien avec collectivités ?",
        a: "Oui — reporting agrégé côté page collectivités ; exécution détaillée ici.",
      },
      {
        q: "Matériel thermique / balayeuse ?",
        a: "Notez la contrainte engin sur l’intervention pour éviter le double booking.",
      },
      {
        q: "Essai ?",
        a: "15 jours — importez une tournée désherbage réelle.",
      },
    ],
    demoExtra: {
      uiToolbar: "Désherbage · Jeu S18 · 11 zones",
      uiAlert: "Point noir parking PL signalé par DST — photo exigée avant clôture",
      uiHint: "Méthode mécanique · zéro phyto · zones cochées une à une",
      uiRows: [
        { left: "Allées Résidence Ormes", right: "Mécanique · Équipe D", status: "Fait 09:40", meta: "Photo point de contrôle n°2", tone: "ok" },
        { left: "Terre-plein RD12 — nord", right: "Partiel · pluie 11h", status: "Reprise ven.", meta: "Zone école prioritaire OK", tone: "warn" },
        { left: "Arrière parking PL", right: "Point noir DST", status: "À prouver", meta: "Photo avant clôture obligatoire", tone: "danger" },
        { left: "Entrée mairie annexe", right: "Thermique", status: "Planifié 14h", meta: "Hors récré scolaire", tone: "info" },
      ],
    },
  },

  "EV-08": {
    seoTitle: "Arrosage & irrigation — contrôles, pannes, tournées estivales",
    seoDesc:
      "Tournées d’arrosage et contrôles irrigation : programmateurs, fuites, priorités canicule. Pour exploitations EV — essai 15 jours sans CB.",
    sub: "Août, canicule : Paulo (chef d’équipe irrigation) a 22 programmateurs à contrôler et 3 fuites signalées par des syndics. Sans tournée structurée, on « passe voir » au feeling — jusqu’au massif grillé.",
    empathyH2: "En canicule, l’arrosage devient un centre d’appels",
    empathyBody:
      "Le client ne voit pas votre planification : il voit un massif brûlé. Contrôles, compteurs, électrovannes, exceptions manuelles : tout doit être tracé, surtout quand un intérimaire remplace Paulo.",
    bodySections: [
      {
        h2: "Cas — Semaine canicule, 22 sites irrigation",
        body: "Tournée contrôles priorisée : massifs entrée syndic > pelouses secondaires. Fuite ZA Les Pins ouverte en ticket terrain avec photo + statut. Programmation manuelle temporaire notée pour ne pas laisser un « on verra lundi ».",
        bullets: [
          "Checklist contrôle (programmateur, pression, secteur)",
          "Panne / fuite = ticket rattaché au site",
          "Priorités visibles pour l’intérimaire du week-end",
        ],
      },
      {
        h2: "≠ plantations / massifs",
        body: "La pose de massifs est une autre page. Ici : faire vivre l’eau après la pose.",
      },
      {
        h2: "Livrable",
        body: "Journal de contrôles + incidents ouverts/clos pour le gestionnaire de site.",
      },
    ],
    faq: [
      {
        q: "Gère-t-on les programmateurs connectés ?",
        a: "PROGESTI orchestre la tournée et les preuves d’intervention ; ce n’est pas un hyperviseur irrigation industriel.",
      },
      {
        q: "Astreinte week-end ?",
        a: "Affectez un binôme + liste prioritaire des sites sensibles (entrée, jeux, clinique).",
      },
      {
        q: "Lien facturation eau / forfaits ?",
        a: "Les interventions hors forfait (réparation fuite) peuvent être tracées pour facturation du réalisé.",
      },
      {
        q: "Photos obligatoires ?",
        a: "Recommandées sur fuites et compteurs — opposables en litige.",
      },
      {
        q: "Essai ?",
        a: "15 jours — chargez votre tournée d’août type.",
      },
    ],
    demoExtra: {
      uiToolbar: "Irrigation · Canicule S32 · 22 contrôles",
      uiAlert: "Fuite électrovanne ZA Les Pins — ticket ouvert 07:50 · photo déposée",
      uiHint: "Priorité massifs entrée · pelouses secondaires en buffer",
      uiRows: [
        { left: "Acacias — programmateur A", right: "Contrôle OK · 06:40", status: "Clos", meta: "Secteurs 1–4 · pression OK", tone: "ok" },
        { left: "ZA Les Pins — électrovanne", right: "Fuite visible", status: "Ticket", meta: "Photo + isolation secteur 2", tone: "danger" },
        { left: "Clinique — massif entrée", right: "Arrosage manuel temporaire", status: "Prioritaire", meta: "Consigne intérim samedi", tone: "warn" },
        { left: "Mairie — pelouse sud", right: "Contrôle décalé 16h", status: "Planifié", meta: "Priorité basse vs massifs", tone: "info" },
      ],
    },
  },
};
