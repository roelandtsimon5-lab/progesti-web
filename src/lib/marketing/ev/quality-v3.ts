/* eslint-disable */
/**
 * Quality MAX v3 — overlays narratifs EV (body/FAQ/SEO/demo enrichments).
 * Généré par scripts/ev-quality-max.mjs — ne pas y mettre de sécu.
 */
import type {
  IndustryBodySection,
  IndustryDemo,
  IndustryDemoRow,
} from "@/lib/industry/types";

/** Spec minimale pour overlay (évite import circulaire runtime avec build.ts). */
type EvOverlayTarget = {
  id: string;
  seoTitle: string;
  seoDesc: string;
  sub: string;
  empathyH2: string;
  empathyBody: string;
  proofH2: string;
  proofQuote: string;
  proofItems: readonly { title: string; text: string }[];
  bodySections: readonly IndustryBodySection[];
  faq: readonly { q: string; a: string }[];
  demo: IndustryDemo;
};

export type EvQualityOverlay = {
  seoTitle?: string;
  seoDesc?: string;
  sub?: string;
  empathyH2?: string;
  empathyBody?: string;
  proofH2?: string;
  proofQuote?: string;
  proofItems?: EvOverlayTarget["proofItems"];
  bodySections?: readonly IndustryBodySection[];
  faq?: EvOverlayTarget["faq"];
  demoExtra?: Partial<IndustryDemo> & { uiRows?: readonly IndustryDemoRow[] };
};

export const evQualityOverlays: Record<string, EvQualityOverlay> = {
  "EV-01": {
    seoTitle: "Logiciel espaces verts PME — planning météo, preuves, facture",
    seoDesc: "PME paysagiste 15–40 salariés : replanifiez l’orage du lundi, pointez le terrain, prouvez les passages et facturez le réalisé. Essai 15 jours sans CB — support Toulouse.",
    sub: "Chez Vertigo Paysage (28 salariés, périurbain 31), le gérant ouvre PROGESTI à 7h15 le lundi d’orage : 9 tontes impraticables, 2 équipes à redistribuer, l’élagage de mercredi intouchable. Plus de tableur du dimanche soir.",
    empathyH2: "Lundi 7h15 : l’orage a décidé à votre place",
    empathyBody: "Karim, gérant de Vertigo Paysage (28 salariés, 47 sites actifs), reçoit trois WhatsApp avant le café : « pelouse sous l’eau », « autoportée chez le mécano », « le syndic des Tilleuls rappelle ». Sans système, il reconstruit la semaine sur un Excel qui a déjà trois versions. Avec un vrai planning EV, les sites bloqués sont marqués, les fréquences restent attachées au contrat, et le mobile des équipes affiche le nouvel ordre avant 8h.",
    proofH2: "Ce que Vertigo a gagné en 6 semaines",
    proofQuote: "« On ne vend plus des excuses météo : on envoie le statut reporté + la date de reprise. Le conseil syndical a arrêté de nous harceler. » — Karim, gérant",
    bodySections: [
    {
      h2: "Journée type — Karim, gérant PME paysagiste 28 salariés",
      body: "Portefeuille mixte : 32 contrats d’entretien (résidences + ZA), 8 chantiers création, 2 marchés communaux annexes. Haute saison = 3 équipes de 4 + 1 binôme élagage. Le goulot : décider en 20 minutes ce qui glisse, ce qui reste, et qui conduit l’autoportée.",
      bullets: ["7h15 — filtre « impraticable météo » sur la tournée tonte S18","7h35 — bascule équipe A sur haies prioritaires syndic (accès digicode à jour)","7h50 — notification mobile : nouvel ordre + motif report visible client","17h40 — pointages du jour + 2 photos AV/AP haies rattachées au site"],
      h3: [
        { title: "Objection « Excel suffit »", body: "Excel ne synchronise pas le mobile du chef d’équipe à 7h40, ni l’historique que le syndic exige à 17h. Ce n’est pas un problème de discipline : c’est un problème de source de vérité." },
        { title: "Livrable client / donneur d’ordre", body: "Statut de passage par site, motif de report, date de reprise proposée, preuve horodatée — exportable pour un conseil syndical ou une régie." },
      ],
    },
    {
      h2: "Avant / après opérationnel (sans ROI inventé)",
      body: "Avant : 3 fichiers « Planning_S18_final_V2 », un groupe WhatsApp « Tournées », des photos perdues dans la galerie du téléphone. Après : une semaine EV unique, des reports tracés, une facture qui reprend les prestations ponctuelles réellement faites (haies d’urgence, plantation reportée).",
      bullets: ["Planning : fréquences contrat ≠ bricolage calendrier mural","Terrain : pointage arrivée/départ + photo optionnelle","Bureau : facture alimentée par le réalisé, pas par la mémoire du commercial"],
    },
    {
      h2: "Process PROGESTI sur cette page (pilier)",
      body: "Le pilier regroupe le flux complet d’une PME EV : replanifier sous la pluie, pointer, prouver, facturer. Pour un intent ultra-ciblé (tonte seule, syndic, collectivité), ouvrez la page sœur — ici on tient la journée du gérant de bout en bout.",
      h3: [
        { title: "Par où commencer l’essai", body: "Importez 10–15 sites critiques (ceux qui appellent le plus). Tenez une vraie semaine dessus. Gardez WhatsApp pour le social, plus pour le planning." },
      ],
    }
    ],
    faq: [
    { q: "On est 28 salariés multi-sites : est-ce trop « petit logiciel » ou trop « usine » ?", a: "C’est exactement la cible : assez de structure pour 40–80 sites, assez simple pour qu’un chef d’équipe pointe en 15 secondes. Pas un ERP chantier BTP." },
    { q: "Que se passe-t-il concrètement un lundi d’orage ?", a: "Vous marquez les sites impraticables, vous conservez la fréquence contrat, vous basculez les équipes sur du travail faisable (haies, plantations reportables), et le mobile affiche le nouvel ordre. Le client voit un report tracé, pas un silence radio." },
    { q: "Le terrain va-t-il vraiment pointer ?", a: "Si le planning bureau est juste, le mobile devient l’outil qui évite les coups de fil. Adoption = moins d’appels, pas plus de process." },
    { q: "Comment facturer le réalisé sans double saisie ?", a: "Les interventions clôturées (et les ponctuels ajoutés) alimentent la facturation. Les oublis de « petite haie d’urgence » diminuent parce qu’elles existent dans le planning." },
    { q: "Essai et tarif ?", a: "15 jours sans CB sur vos vrais sites. Tarif dès 29,99 € HT/mois. Support humain depuis Toulouse (31)." }
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
    seoTitle: "Espaces verts — hub solutions par métier",
    seoDesc: "Hub espaces verts PROGESTI : entretien, paysagisme, tonte, syndics, collectivités, zéro phyto, marchés publics, planning, preuves — 39 angles. Choisissez la page qui match votre intent.",
    sub: "Vous n’êtes pas « un utilisateur espaces verts » : vous êtes un gérant de tournée, un DST, un syndic pressé, ou un conducteur de travaux. Ce hub vous envoie vers la page qui parle votre journée — pas vers un catalogue générique.",
    empathyH2: "Trois personnes, trois recherches, zéro page fourre-tout",
    empathyBody: "Mardi 9h : Sophie (DST, commune 18 000 hab.) cherche un reporting marché. 10h : Marc (gérant, 22 salariés) veut replanifier sous la pluie. 11h : Nadia (conducteur travaux syndic) veut des preuves AV/AP avant le conseil. Une seule landing « tout EV » les perd tous. Ici, chaque intent a son URL.",
    bodySections: [
    {
      h2: "Comment choisir votre porte d’entrée en 30 secondes",
      body: "Si vous vendez et exécutez de l’entretien récurrent → pilier logiciel ou page entretien. Si vous êtes donneur d’ordre (collectivité, syndic, santé, scolaire) → pages audience. Si vous souffrez d’un process (Excel, météo, engins, absences) → pages problème/process.",
      bullets: ["Service = ce que vous faites (tonte, élagage, haies, désherbage…)","Audience = pour qui vous travaillez (syndic, mairie, clinique…)","Process = comment vous tenez la boutique (planning, pointage, factu)"],
      h3: [
        { title: "Ce hub n’est pas la propreté", body: "PROGESTI a d’autres verticales. Ici vocabulaire EV uniquement : tournée, fréquence, passage, AV/AP, marché, régie, engins. Pas de « sites tertiaires » recyclés." },
      ],
    },
    {
      h2: "Carte mentale des 39 angles",
      body: "Les pages sœurs ne se cannibalisent pas : tonte ≠ entretien global ≠ taille de haies. Multi-sites (N adresses) ≠ grands parcs (1 adresse, N zones). Preuves horodatées ≠ photos AV/AP. Zéro phyto ≠ désherbage opérationnel. Marchés publics ≠ renew privé. Parcourez, puis essayez sur 10 sites réels.",
    },
    {
      h2: "Prochaine étape utile",
      body: "Ouvrez le pilier si vous êtes dirigeant PME. Ouvrez collectivités / syndics / écoles / hôpitaux si vous êtes côté donneur d’ordre. Ouvrez « remplacer Excel » si vous voulez le contraste brutal avant/après.",
    }
    ],
    faq: [
    { q: "Je gère une entreprise d’entretien EV : par où commencer ?", a: "Le pilier /logiciel-espace-vert, puis entretien, planning équipes et preuves de passage. L’essai sur 10–15 sites suffit à juger." },
    { q: "Je suis une collectivité : c’est pour les prestataires ou pour la régie ?", a: "Les deux cas de figure sont couverts sur la page collectivités (reporting marché, tournées, preuves). Le prestataire privé peut aussi pointer depuis le même produit." },
    { q: "Pourquoi autant de pages ?", a: "Parce qu’un gérant de tonte et un DST ne posent pas la même question à Google. Une page fourre-tout fait rebondir les deux." },
    { q: "Y a-t-il un mélange avec la sécurité ou la propreté ?", a: "Non. Cette verticale est 100 % espaces verts. Les autres métiers ont leurs propres hubs." },
    { q: "Quel tarif pour « Espaces verts — hub solutions par métier » ?", a: "Dès 29,99 € HT/mois, essai 15 jours sans CB — détail sur /tarifs." }
    ],
    demoExtra: {
      uiToolbar: "Hub EV · 3 parcours · 36 pages",
      uiAlert: "Conseil : ne restez pas sur le hub — ouvrez la page qui match votre journée type",
      uiHint: "Chaque clic ouvre une démo produit différente — pas le même screenshot",
      uiSplitLabels: ["Qui êtes-vous ?","Où aller"],
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
    seoDesc: "Contrats annuels multi-sites : fréquences bihebdo, tournées, pointage et preuves pour renew. Cas résidence 120 lots. Essai 15 jours sans CB.",
    sub: "Léa, responsable d’exploitation chez Atelier des Haies (19 salariés), gère 64 contrats d’entretien. Son cauchemar : une fréquence perdue dans un PDF, un site oublié 3 semaines, un renew sans dossier de preuves.",
    empathyH2: "L’entretien ce n’est pas un devis : c’est une promesse hebdomadaire",
    empathyBody: "Le commercial a signé la résidence Les Acacias (120 lots) : tonte bihebdo mars→octobre, haies 4×/an, désherbage allées mensuel. Sans occurrency vivantes dans le planning, c’est Léa qui « se souvient » — jusqu’aux congés. Le client, lui, compte les semaines.",
    bodySections: [
    {
      h2: "Cas client — Résidence Les Acacias, contrat annuel 41 k€",
      body: "Léa paramètre le site une fois : consignes d’accès, digicode, local tondeuses, fréquences par prestation. La semaine S18 se génère. Deux passages manqués (pluie) apparaissent en retard avec motif — rattrapés S19 sans perdre le fil du contrat.",
      bullets: ["Fréquences attachées au contrat, pas à la mémoire du chef d’équipe","Retards visibles avant l’appel du conseil syndical","Historique exportable pour le renew de novembre"],
      h3: [
        { title: "Objection « le forfait se gère sur papier »", body: "Le papier ne dit pas si la bihebdo de la semaine 17 a été faite. Le renew se négocie sur des preuves, pas sur une impression." },
        { title: "≠ paysagisme création, ≠ tonte seule", body: "Cette page = récurrence multi-prestations. Pour un chantier one-shot, voyez paysagisme. Pour la seule tournée tonte volume, voyez tonte pelouse." },
      ],
    },
    {
      h2: "Journée type d’exploitation entretien",
      body: "Matin : filtre « dû cette semaine » + retards. Midi : ajustement météo. Soir : clôture des pointages, photos haies rattachées, préparation facture périodique.",
    },
    {
      h2: "Livrable pour le donneur d’ordre",
      body: "Tableau des passages promis vs réalisés, motifs de report, prochain créneau — de quoi tenir un conseil syndical sans improvisation WhatsApp.",
    }
    ],
    faq: [
    { q: "Peut-on gérer plusieurs fréquences sur le même site ?", a: "Oui : tonte bihebdo + haies trimestrielles + désherbage mensuel cohabitent sur la fiche site et génèrent des occurrences distinctes." },
    { q: "Comment prouver un passage contesté ?", a: "Pointage horodaté + historique site (+ photo si vous l’activez). Vous répondez avec un dossier, pas une capture d’écran de SMS." },
    { q: "Et les reports météo dans un forfait ?", a: "Le statut « reporté météo » conserve la fréquence contrat et propose une date de reprise — visible bureau et terrain." },
    { q: "Combien de sites pour démarrer ?", a: "Commencez par 10 contrats critiques (ceux qui renouvellent bientôt). Étendez ensuite." },
    { q: "Tarif essai ?", a: "15 jours sans CB. Détail sur /tarifs." }
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
    seoDesc: "Chantiers paysagers : devis, jalons engazonnement/plantations, engins, PV de réception avec preuves. Pour conducteurs de travaux, pas l’entretien récurrent.",
    sub: "Nicolas, conducteur de travaux chez Terra Forma (création), jongle avec 5 chantiers ouverts, une mini-pelle surbookée et un promoteur qui veut le PV demain. Ce n’est pas de l’entretien bihebdo : ce sont des jalons.",
    empathyH2: "Un chantier création ne se pilote pas comme une tournée de tonte",
    empathyBody: "Devis signé mardi, livraison terreau jeudi, engazonnement reporté pour pluie, réception partielle exigée par l’aménageur. Si tout vit dans des fils WhatsApp + un Gantt Excel perso, le commercial découvre les écarts trop tard — et la marge aussi.",
    bodySections: [
    {
      h2: "Cas — Lotissement Les Clarines, 3 jalons engazonnement",
      body: "Nicolas découpe le chantier : préparation sol → engazonnement → reprises J+21. Chaque jalon a une équipe, un engin, une preuve photo. À la réception, le dossier n’est pas une chasse aux messages.",
      bullets: ["Jalons datés avec dépendances (pas de pose si fourniture absente)","Conflit mini-pelle détecté avant le mardi critique","PV réception = preuves rattachées aux jalons, pas à la galerie téléphone"],
      h3: [
        { title: "≠ entretien annuel", body: "L’entretien vit par fréquences. Le paysagisme création vit par jalons et réception. Ne mélangez pas les deux intents : pages sœurs dédiées." },
      ],
    },
    {
      h2: "Objections terrain",
      body: "« On a déjà un CCTP » — très bien : le logiciel ne remplace pas le CCTP, il suit l’exécution. « One-shot pas besoin d’outil » — un one-shot mal tracé = litige garantie reprises.",
    },
    {
      h2: "Livrable promoteur / aménageur",
      body: "Timeline des jalons, écarts météo, photos avant/après, statut réception partielle ou totale.",
    }
    ],
    faq: [
    { q: "Peut-on lier devis → chantier → facture d’avancement ?", a: "Oui : le flux devis / planning / réalisé évite la double saisie et les oublis d’avenants." },
    { q: "Gestion des engins sur chantier création ?", a: "Les contraintes engins apparaissent dans le planning (conflit mini-pelle, nacelle). Ce n’est pas une GMAO industrielle : c’est de l’anti-double-booking EV." },
    { q: "Et les reprises sous garantie ?", a: "Planifiez un contrôle J+21 rattaché au chantier ; photo et statut restent dans le dossier réception." },
    { q: "Différence avec la page aménageurs ?", a: "Ici angle exécutant paysagiste. La page aménageurs/promoteurs cible la relation jalons/réception côté ce type de clients." },
    { q: "Puis-je tester PROGESTI sur mon cas « paysagisme / chantiers création » ?", a: "15 jours sans CB — importez 1–2 chantiers réels en cours." }
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
    seoDesc: "Optimisez les tournées de tonte : 14 pelouses, 1 autoportée, reports météo, ordre de passage. Pour exploitations volume — essai 15 jours.",
    sub: "Nord Tonte Services : 2 salariés + 1 apprenti, 14 pelouses le lundi, une seule autoportée. L’ordre de passage mal pensé = 40 km à vide et un client à 17h qui n’a pas été fait.",
    empathyH2: "La tonte, c’est de la logistique déguisée en jardinage",
    empathyBody: "Dès que la pousse accélère, le goulot n’est plus « savoir tondre » : c’est enchaîner les sites sans croiser l’autoportée, sans oublier la pelouse du fond de lotissement, et sans promettre mardi quand le sol est encore une éponge.",
    bodySections: [
    {
      h2: "Cas — Lundi 14 pelouses, 1 autoportée, orage à 11h",
      body: "Le planning ordonne les sites par secteur (nord puis ouest). À 11h, 3 pelouses sont marquées report météo ; l’équipe bascule sur 2 tailles de bordures prévues en buffer. Le client voit le report, pas un no-show.",
      bullets: ["Ordre de tournée anti km à vide","Statut pelouse impraticable sans perdre la cadence contrat","Engin unique visible : pas de fantaisie « deux équipes sur une machine »"],
      h3: [
        { title: "≠ entretien multi-prestations", body: "Ici focus volume tonte / engins / ordre de passage. L’entretien global (haies+désherbage+tonte) est la page sœur entretien." },
      ],
    },
    {
      h2: "Objections",
      body: "« On connaît nos tournées par cœur » — jusqu’à l’arrêt maladie du conducteur. « Le GPS suffice » — le GPS ne gère pas la fréquence contrat ni la preuve de passage.",
    },
    {
      h2: "Livrable",
      body: "Feuille de tournée du jour + statuts live + reports datés pour le bureau.",
    }
    ],
    faq: [
    { q: "Peut-on gérer plusieurs fréquences de tonte (hebdo / bihebdo) ?", a: "Oui, par site. La tournée du jour ne montre que ce qui est dû." },
    { q: "Autoportée en panne : que faire ?", a: "Marquez l’engin indispo ; les sites dépendants apparaissent à replanifier. Ce n’est pas une GMAO, c’est un garde-fou planning." },
    { q: "Photos après tonte ?", a: "Optionnelles mais utiles en copro. Voir aussi la page photos AV/AP." },
    { q: "Lien avec replanification météo ?", a: "Oui — page dédiée playbook orage si c’est votre douleur principale." },
    { q: "L’essai couvre-t-il vraiment « planning tonte multi-sites » ?", a: "15 jours — chargez votre tournée du lundi réelle." }
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
    seoDesc: "Pôle élagage : créneaux grimpe, binômes, nacelle, déchets de coupe, preuves client. Différent de la taille de haies. Essai 15 jours.",
    sub: "Le pôle élagage de Canopée Services (grimpeur + élagueur sol + camion) ne peut pas « glisser » comme une tonte. Un créneau raté = voisinage, DICT, benne, et parfois la mairie.",
    empathyH2: "L’élagage, c’est un rendez-vous chirurgical — pas une tournée flexible",
    empathyBody: "Autorisation d’occupation, information riverains, nacelle ou grimpe, évacuation branches sous 48h : si le planning traite ça comme une tonte déplacée, vous cumulez les risques. La page taille de haies est un autre métier.",
    bodySections: [
    {
      h2: "Cas — Frêne dangereux, mercredi 13h–17h, rue Pasteur",
      body: "Créneau tenu, binôme affecté, nacelle réservée, benne planifiée pour 17h30. Pluie forte → report avec conservation du créneau prioritaire et notification riverains. Preuve photo avant/après pour l’assurance et la mairie.",
      bullets: ["Créneau + compétences (grimpe) visibles","Engin / benne liés à l’intervention","Déchets de coupe = suite logistique, pas un oubli"],
    },
    {
      h2: "Objections",
      body: "« On a un planning papier grimpe » — il ne parle pas au commercial qui vend un élagage le même créneau. « C’est trop niche » — c’est niche, et c’est exactement pour ça qu’une page dédiée existe.",
    },
    {
      h2: "Livrable client",
      body: "Compte-rendu d’élagage daté, photos, statut évacuation branches.",
    }
    ],
    faq: [
    { q: "Différence avec taille de haies ?", a: "Haies = volume multi-sites, accès riverains, saison courte. Élagage = créneau expert, grimpe/nacelle, risque, souvent one-shot ou annuel ciblé." },
    { q: "Gestion DICT / autorisations ?", a: "Consigne sur la fiche intervention + checklist avant démarrage. Le logiciel rappelle ; il ne remplace pas vos obligations légales." },
    { q: "Benne et déchets verts ?", a: "Liez une rotation benne à l’intervention — détail sur la page déchets verts." },
    { q: "Météo et sécurité grimpe ?", a: "Report tracé avec motif sécurité ; le créneau prioritaire ne disparaît pas du backlog." },
    { q: "Comment démarrer un essai orienté élagage & grimpe ?", a: "15 jours — planifiez votre semaine d’élagage réelle." }
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
    seoDesc: "Planifiez désherbage mécanique / thermique des abords : allées, terre-pleins, cimetières. Preuves pour collectivités et syndics. Essai 15 jours.",
    sub: "Depuis le zéro phyto, Inès (exploitation, 11 salariés) enchaîne les passages mécaniques. Sans zonage clair, l’équipe « fait ce qui se voit » et la DST reçoit des photos de trottoirs oubliés.",
    empathyH2: "Le désherbage se juge sur les 20 mètres que personne ne regarde",
    empathyBody: "Entrée de résidence impeccable, arrière de parking poids lourds abandonné : le donneur d’ordre finit toujours par photographier le pire angle. Il faut des zones, des fréquences, et une preuve — pas une intention.",
    bodySections: [
    {
      h2: "Cas — Terre-pleins RD + allées copro, tournée jeudi",
      body: "8 terre-pleins communaux + 3 résidences. Zones sensibles (école, cimetière) en priorité matinale. Statut fait/partiel avec photo du point noir. Report pluie ≠ disparition de la zone du backlog.",
      bullets: ["Zones nommément listées (pas « site entier »)","Méthode (mécanique / thermique) en consigne","Preuve visuelle du point noir, pas de la belle entrée"],
    },
    {
      h2: "≠ cimetières / voirie (page sœur)",
      body: "Si votre cœur de métier est cimetière + terre-pleins très sensibles usagers, ouvrez la page dédiée. Ici : désherbage transverse abords.",
    },
    {
      h2: "Livrable DST / syndic",
      body: "Carte des zones traitées + dates + photos des points de contrôle convenus au marché.",
    }
    ],
    faq: [
    { q: "Peut-on tracer le zéro phyto / méthode utilisée ?", a: "Oui via consignes d’intervention et checklist. Utile pour reporting marché public." },
    { q: "Comment éviter les zones oubliées ?", a: "Découpez le site en zones ; le « fait » se coche zone par zone, pas site entier." },
    { q: "Lien avec collectivités ?", a: "Oui — reporting agrégé côté page collectivités ; exécution détaillée ici." },
    { q: "Matériel thermique / balayeuse ?", a: "Notez la contrainte engin sur l’intervention pour éviter le double booking." },
    { q: "Y a-t-il un essai sans engagement pour désherbage multi-sites ?", a: "15 jours — importez une tournée désherbage réelle." }
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
    seoDesc: "Tournées d’arrosage et contrôles irrigation : programmateurs, fuites, priorités canicule. Pour exploitations EV — essai 15 jours sans CB.",
    sub: "Août, canicule : Paulo (chef d’équipe irrigation) a 22 programmateurs à contrôler et 3 fuites signalées par des syndics. Sans tournée structurée, on « passe voir » au feeling — jusqu’au massif grillé.",
    empathyH2: "En canicule, l’arrosage devient un centre d’appels",
    empathyBody: "Le client ne voit pas votre planification : il voit un massif brûlé. Contrôles, compteurs, électrovannes, exceptions manuelles : tout doit être tracé, surtout quand un intérimaire remplace Paulo.",
    bodySections: [
    {
      h2: "Cas — Semaine canicule, 22 sites irrigation",
      body: "Tournée contrôles priorisée : massifs entrée syndic > pelouses secondaires. Fuite ZA Les Pins ouverte en ticket terrain avec photo + statut. Programmation manuelle temporaire notée pour ne pas laisser un « on verra lundi ».",
      bullets: ["Checklist contrôle (programmateur, pression, secteur)","Panne / fuite = ticket rattaché au site","Priorités visibles pour l’intérimaire du week-end"],
    },
    {
      h2: "≠ plantations / massifs",
      body: "La pose de massifs est une autre page. Ici : faire vivre l’eau après la pose.",
    },
    {
      h2: "Livrable",
      body: "Journal de contrôles + incidents ouverts/clos pour le gestionnaire de site.",
    }
    ],
    faq: [
    { q: "Gère-t-on les programmateurs connectés ?", a: "PROGESTI orchestre la tournée et les preuves d’intervention ; ce n’est pas un hyperviseur irrigation industriel." },
    { q: "Astreinte week-end ?", a: "Affectez un binôme + liste prioritaire des sites sensibles (entrée, jeux, clinique)." },
    { q: "Lien facturation eau / forfaits ?", a: "Les interventions hors forfait (réparation fuite) peuvent être tracées pour facturation du réalisé." },
    { q: "Photos obligatoires ?", a: "Recommandées sur fuites et compteurs — opposables en litige." },
    { q: "Puis-je essayer avant d’engager mon équipe sur arrosage & irrigation ?", a: "15 jours — chargez votre tournée d’août type." }
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
  "EV-09": {
    seoTitle: "Logiciel espaces verts collectivités — marchés & preuves",
    seoDesc: "DST / régie / prestataire marchés publics EV : tournées, reporting passages, zones sensibles, export pour élus. Essai 15 jours — support FR.",
    sub: "Sophie, DST d’une commune de 18 000 hab., pilote un marché EV à 3 lots. Elle ne veut pas un SaaS « PME » : elle veut savoir si le cimetière sud et les 8 terre-pleins ont été faits avant le comité de quartier.",
    empathyH2: "Le marché se défend avec des preuves, pas avec une réunion",
    empathyBody: "Élus, usagers, prestataire, régie interne : tout le monde a une version. Sans historique de passages par site/zone, Sophie passe ses lundis à reconstituer la semaine sur des mails. Le logiciel doit parler marché public et terrain — pas « digitalisation des équipes ».",
    bodySections: [
    {
      h2: "Cas — Marché 3 lots, reporting comité de quartier",
      body: "Lot 1 cimetières, lot 2 voiries végétalisées, lot 3 parcs. Sophie filtre la semaine : retards, motifs météo, photos des points de contrôle du CCTP. Le prestataire et la régie voient la même vérité.",
      bullets: ["Sites/zones alignés sur le bordereau","Export passages pour élus / commission","Écarts visibles avant la polémique Facebook locale"],
      h3: [
        { title: "≠ page écoles ou cimetières seule", body: "Ici vision marché / DST transverse. Les niches (écoles, cimetières) ont leurs pages pour l’intent de recherche dédié." },
      ],
    },
    {
      h2: "Journée type DST",
      body: "8h revue retards, 11h validation reports orage, 16h export PDF pour l’élu de secteur, 17h point téléphonique prestataire sur 2 zones critiques.",
    },
    {
      h2: "Objection « Excel filtrable suffit »",
      body: "Excel ne reçoit pas le pointage terrain à 9h12 ni la photo du point noir. Le filtre ne crée pas la preuve.",
    }
    ],
    faq: [
    { q: "Régie municipale ou prestataire : ça marche pour les deux ?", a: "Oui. La collectivité peut exiger le reporting ; le prestataire exécute et pointe dans le même référentiel sites/zones." },
    { q: "Peut-on coller au CCTP / bordereau ?", a: "Les prestations et fréquences se paramètrent par site. Ce n’est pas un outil de rédaction de marché : c’est l’exécution tracée." },
    { q: "Accès élus / lecture seule ?", a: "En pratique on exporte ou on partage un reporting périodique — évite de donner le planning opérationnel brut." },
    { q: "Lien avec zéro phyto ?", a: "Consignes méthode + preuves photo sur désherbage — voir aussi page désherbage." },
    { q: "L’essai suffit-il pour valider mon besoin espaces verts collectivités ?", a: "15 jours — chargez un lot pilote (ex. cimetières + 5 terre-pleins)." }
    ],
    demoExtra: {
      uiToolbar: "Marché EV · Lot 2 voirie · S18 · DST",
      uiAlert: "Comité quartier jeudi — 2 terre-pleins en retard pluie à justifier",
      uiHint: "Même vérité prestataire ↔ régie ↔ export élus",
      uiSplitLabels: ["Exécution terrain","Reporting DST"],
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
    seoDesc: "Prestataires EV pour syndics : passages prouvés, photos AV/AP, accès digicodes, dossier conseil syndical. ≠ solution syndic globale. Essai 15 j.",
    sub: "Nadia, conductrice de travaux pour un cabinet de syndic, ne gère pas les AG : elle doit prouver que la haie des Tilleuls a bien été faite avant le mail agressif de 17h.",
    empathyH2: "Le conseil syndical ne croit pas WhatsApp",
    empathyBody: "« Vous n’êtes pas venus » est le message le plus cher du métier. Digicodes qui changent, résidences multi-bâtiments, photos perdues : le syndic veut un dossier, pas une conversation. Attention : ce n’est pas /solutions/syndics (propreté / autre verticale).",
    bodySections: [
    {
      h2: "Cas — Mail syndic 17h02, Résidence des Tilleuls",
      body: "Nadia ouvre le site : derniers pointages, motif du report S17, photo AP haies S18, prochaine tonte. Réponse en un écran. Le commercial n’est plus otage du chef d’équipe introuvable.",
      bullets: ["Preuve horodatée + visuelle","Consignes d’accès à jour (digicode, local)","Dossier renew pour le syndic en novembre"],
    },
    {
      h2: "≠ preuves génériques / ≠ page sites privés",
      body: "Angle syndic/copro et conseil syndical. Les sites tertiaires B2B ont leur page. Les preuves « litige » pures ont la page preuves-passages.",
    },
    {
      h2: "Livrable conseil syndical",
      body: "Historique des passages de la saison + photos clés + exceptions (accès refusé, météo).",
    }
    ],
    faq: [
    { q: "C’est le même produit que pour les syndics propreté ?", a: "Non : cette page est 100 % espaces verts (tonte, haies, désherbage). Pas de mélange de verticale." },
    { q: "Le syndic peut-il avoir un accès ?", a: "Souvent on partage un reporting périodique. L’essai permet de tester le format de preuve qu’il exige." },
    { q: "Accès refusé / véhicule gênant ?", a: "Statut tracé + photo : protège le prestataire au moment du litige." },
    { q: "Photos AV/AP obligatoires ?", a: "Sur haies et massifs, fortement recommandées — page photos dédiée." },
    { q: "Puis-je tester PROGESTI sur mon cas « syndics & copropriétés EV » ?", a: "15 jours — 5 résidences pilotes suffisent." }
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
    seoDesc: "Sièges, ZA, parkings d’entreprise : planning abords, consignes sécurité, preuves pour facility. Essai 15 jours sans CB.",
    sub: "Olivier entretient 17 sites tertiaires (sièges + ZA). Le facility manager juge sur l’entrée visiteurs — et sur le parking PL que personne ne montre sur Instagram.",
    empathyH2: "Le B2B privé ne parle pas comme un syndic",
    empathyBody: "Badges, horaires de livraison, zones hexagone sécurité, interlocuteur facility qui change tous les 18 mois : si vos consignes vivent dans la tête du chef d’équipe, le premier remplacement casse la qualité perçue.",
    bodySections: [
    {
      h2: "Cas — Campus HexaTech, 2 passages / semaine",
      body: "Zones : entrée visiteurs, patio RH, parking PL, noue paysagère. Horaires 6h–8h hors flux salariés. Preuve mensuelle envoyée au facility (passages + 4 photos points de contrôle).",
      bullets: ["Consignes sécurité / badge sur la fiche site","Zones inégales en criticité visuelle","Reporting facility ≠ dossier conseil syndical"],
    },
    {
      h2: "≠ hôpitaux / ≠ écoles",
      body: "Même famille « sites contraints », mais protocoles santé et créneaux scolaires ont leurs pages.",
    },
    {
      h2: "Objection « comme un syndic »",
      body: "Le facility veut de la prévisibilité et zéro friction d’accès, rarement une photo de chaque haie. Adaptez le livrable.",
    }
    ],
    faq: [
    { q: "Multi-sites d’un même groupe ?", a: "Oui — portefeuille filtrable par client / commune / type de zone." },
    { q: "Astreinte espaces verts ?", a: "Interventions ponctuelles traçables hors forfait (casse, sinistre tempête)." },
    { q: "Lien devis annuel ?", a: "Page contrats annuels pour le cycle renew ; ici l’exécution sites privés." },
    { q: "Peut-on joindre des photos pour « Entretien EV sites privés entreprises… » ?", a: "4 points de contrôle par site souvent suffisent en B2B." },
    { q: "L’essai couvre-t-il vraiment « sites privés entreprises » ?", a: "15 jours — 3 sites d’un même client facility." }
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
    seoDesc: "Affectez tonte, haies, élagage : compétences, engins, secteurs. Finis les doublons WhatsApp. Essai 15 jours.",
    sub: "Le lundi de Mai, Julie (planificatrice, 34 collaborateurs) a 3 équipes à coller sur 51 interventions. Le grimpeur ne tond pas ; l’autoportée ne taille pas les haies en 4 m.",
    empathyH2: "Planifier sans compétences, c’est inventer des conflits",
    empathyBody: "Le tableau blanc du bureau est joli jusqu’à 6h50. Ensuite, quelqu’un est au mauvais endroit avec le mauvais engin. Le planning EV doit connaître les savoir-faire et les contraintes — pas seulement des cases colorées.",
    bodySections: [
    {
      h2: "Cas — Semaine 18, 51 interventions, 3 équipes",
      body: "Filtres : compétence grimpe, permis nacelle, secteur nord. Julie détecte un double booking autoportée et un trou sur la tournée haies après un arrêt maladie. Ajustement avant 7h30, sync mobile.",
      bullets: ["Compétences sur les personnes","Conflits engins visibles","Une seule semaine partagée bureau ↔ terrain"],
    },
    {
      h2: "≠ absences (page sœur) ≠ engins seuls",
      body: "Absences/remplacements = trou d’équipe last minute. Engins = ressource machine. Ici : construction de la semaine multi-contraintes.",
    },
    {
      h2: "Journée type planificatrice",
      body: "16h veille : brouillon. 6h45 : arbitrages. 7h15 : gel de la tournée. 17h : retours terrain → seeds du lendemain.",
    }
    ],
    faq: [
    { q: "Peut-on bloquer une affectation incompatible (grimpe) ?", a: "Vous voyez les compétences ; l’outil vous aide à ne pas affecter « au feeling ». La responsabilité reste humaine." },
    { q: "Planning glissant vs semaine fixe ?", a: "Semaine EV + reports : le plus lisible pour le terrain. Évitez le chaos du « on verra demain matin » permanent." },
    { q: "Peut-on gérer l’intérim pour « Planning équipes espaces verts — mult… » ?", a: "Créez le backup avec consignes sites ; limitez les sites sensibles le premier jour." },
    { q: "Quel lien avec le pointage pour « Planning équipes espaces verts — mult… » ?", a: "Oui — page pointage terrain pour la capture ; ici l’affectation." },
    { q: "Comment démarrer un essai orienté planning équipes EV ?", a: "15 jours — rejouez une vraie semaine chargée." }
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
    seoDesc: "Arrivée/départ chantier EV sur mobile : qui, où, quand. Base des preuves et de la facture. Essai 15 jours sans CB.",
    sub: "Sans pointage, votre « on est passé » est une opinion. Avec pointage, c’est un fait horodaté — celui que le syndic et la facture réclament.",
    empathyH2: "Le pointage n’est pas du flicage : c’est une ceinture de sécurité",
    empathyBody: "Les équipes détestent les usines à gaz. Elles acceptent un geste simple qui évite les appels du gérant à 18h. Arrivée, départ, éventuellement photo : si le planning est juste, le pointage devient naturel.",
    bodySections: [
    {
      h2: "Cas — Binôme tonte, 9 sites, journée type",
      body: "Chaque arrivée timestampée. Un oubli de pointage au site 4 apparaît en alerte bureau à 15h — relance immédiate. Le soir, la facturation périodique s’appuie sur du réel.",
      bullets: ["Geste mobile < 15 secondes","Alerte oublis avant la facture","Couplage naturel avec preuves / photos"],
    },
    {
      h2: "≠ page preuves litige",
      body: "Ici capture terrain. La page preuves-passages assemble le dossier quand le mail agressif arrive.",
    },
    {
      h2: "Objection « les gars ne pointeront pas »",
      body: "Ils ne pointeront pas un process absurde. Ils pointeront ce qui réduit les coups de fil et les accusations.",
    }
    ],
    faq: [
    { q: "Hors-ligne / réseau faible ?", a: "Le geste doit rester simple ; en pratique les équipes pointent dès qu’elles ont du réseau en sortie de site. On paramètre les exigences selon vos zones." },
    { q: "Géoloc obligatoire ?", a: "L’horodatage + site planifié suffisent souvent. Évitez le flicage excessif qui tue l’adoption." },
    { q: "Lien paie ?", a: "PROGESTI n’est pas un SIRH. Le pointage sert d’abord opération et preuve client." },
    { q: "Photo au pointage ?", a: "Optionnelle par type d’intervention (haies oui, tonte parfois)." },
    { q: "Y a-t-il un essai sans engagement pour pointage terrain EV ?", a: "15 jours — 1 équipe pilote suffit pour mesurer l’adoption." }
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
    seoDesc: "Devis entretien ou chantier, avenants, facture alignée sur le réalisé pointé. Moins d’oublis de prestations ponctuelles. Essai 15 j.",
    sub: "Chaque mois, Samia (administrative + commerciale) reconstruit la facturation depuis le groupe WhatsApp. Les haies d’urgence de la semaine 12 ont disparu — pas la marge.",
    empathyH2: "Si ce n’est pas dans le planning, ce ne sera pas dans la facture",
    empathyBody: "Le réalisé doit pousser la facture. Sinon vous facturez le forfait théorique et vous offrez le ponctuel. Les clients sympas en profitent ; les autres contestent le forfait.",
    bodySections: [
    {
      h2: "Cas — Fin de mois, 6 ponctuels « oubliés »",
      body: "Samia ouvre les interventions clôturées hors forfait : 3 haies d’urgence, 1 évacuation benne, 2 reprises plantations. Ticket facture généré depuis le réel. Le gérant arrête de « se souvenir » le dimanche.",
      bullets: ["Forfait vs ponctuel clairement séparés","Avenants tracés","Moins de leakage de marge silencieux"],
    },
    {
      h2: "≠ contrats annuels renew",
      body: "Le renew commercial est une autre page. Ici : produire les pièces devis/facture depuis l’exécution.",
    },
    {
      h2: "Objection « mon outil compta suffit »",
      body: "La compta facture ce qu’on lui dit. Elle ne sait pas ce qui s’est passé sur le parking PL mardi.",
    }
    ],
    faq: [
    { q: "Export comptable ?", a: "Oui dans la logique PROGESTI — l’essai montre le flux aligné sur votre organisation." },
    { q: "Devis chantier création vs entretien ?", a: "Deux modèles : jalons/avancement vs périodique forfait + ponctuels." },
    { q: "Avenants météo / volume ?", a: "Tracez l’exception dans le planning puis facturez si le contrat le prévoit." },
    { q: "Comment suivre les impayés liés à « Devis & facturation espaces verts — d… » ?", a: "Suivi dans le module — sans tableur parallèle." },
    { q: "Puis-je essayer avant d’engager mon équipe sur devis & facturation EV ?", a: "15 jours — rejouez votre dernier mois sur 15 sites." }
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
    seoDesc: "Mars–juin : densifiez tournées, embauches saisonnières, priorités clients. Playbook de montée en charge EV. Essai 15 jours.",
    sub: "Mi-mars, la pousse ne négocie pas. Vertigo passe de 2 à 4 équipes en 3 semaines. Sans playbook, le planning devient une salle d’urgence.",
    empathyH2: "Le printemps ne crée pas de nouveaux clients : il révèle le chaos",
    empathyBody: "Les fréquences passent hebdo, les saisonniers arrivent, les engins vieillissent d’un coup. Si votre système était déjà juste l’hiver, il casse au premier week-end de beau temps.",
    bodySections: [
    {
      h2: "Cas — Passage bihebdo → hebdo sur 28 pelouses",
      body: "Julie active le profil saisonnier : densification automatique des occurrences, priorisation clients renew, intégration de 2 saisonniers avec sites « faciles » la première semaine.",
      bullets: ["Densification des fréquences sans tout retaper","Onboarding saisonniers guidé","Buffer météo plus large qu’en hiver"],
    },
    {
      h2: "≠ saison automne-hiver",
      body: "L’autre page traite feuilles, tailles, baisse de cadence, maintenance engins. Ici : montée en charge.",
    },
    {
      h2: "Livrable interne",
      body: "Plan de charge 8 semaines + liste sites critiques + besoins engins.",
    }
    ],
    faq: [
    { q: "Peut-on pré-planifier mars en janvier ?", a: "Oui — préparez les fréquences et validez en S9–S10." },
    { q: "Saisonniers sans smartphone ?", a: "Binôme avec un titulaire qui pointe ; consignes papier en secours la première semaine seulement." },
    { q: "Prioriser quels clients ?", a: "Renew < 90 j, sites « visibles », marchés publics à reporting." },
    { q: "Lien absences ?", a: "Les arrêts explosent aussi au printemps — page remplacements." },
    { q: "L’essai suffit-il pour valider mon besoin saison printemps EV ?", a: "Idéal en février–mars sur une vraie montée." }
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
    seoDesc: "Ramassage feuilles, tailles hors pousse, maintenance engins, baisses de fréquence. Pilotez la basse saison sans perdre les sites. Essai 15 j.",
    sub: "Novembre : la tonte ralentit, les feuilles explosent, les tailles se concentrent. Ceux qui « improvisent la basse saison » perdent des forfaits au renew.",
    empathyH2: "La basse saison n’est pas une pause : c’est un autre métier",
    empathyBody: "Ramassage, soufflage, évacuation, tailles structurelles, inventaire engins : si vous laissez le planning en mode printemps, vous surstaffez les pelouses et sous-staffez les feuilles — puis vous expliquez au syndic pourquoi l’allée est un tapis jaune.",
    bodySections: [
    {
      h2: "Cas — 3 semaines de feuilles, 18 résidences",
      body: "Profil automne : cadence tonte réduite, tournées feuilles bihebdo, fenêtres de taille, créneaux atelier engins. Les sites sensibles (escalier nord, parking) ont une priorité usagers.",
      bullets: ["Changement de profil saisonnier global","Évacuation déchets verts liée","Atelier engins planifié hors urgence"],
    },
    {
      h2: "≠ printemps",
      body: "Montée vs redescente. Ne fusionnez pas les playbooks.",
    },
    {
      h2: "Livrable renew novembre",
      body: "Bilan d’exécution saison + photos avant/après tailles + dossier pour le syndic.",
    }
    ],
    faq: [
    { q: "Ramassage feuilles dans le forfait ?", a: "Selon contrats : certains forfaits l’incluent, d’autres non. Tracez pour facturer le juste." },
    { q: "Neige / déblaiement ?", a: "Si vous le proposez, créez des interventions ponctuelles ; ce n’est pas le cœur de cette page." },
    { q: "Maintenance engins ?", a: "Bloquez des créneaux atelier — évite la panne du premier lundi de mars." },
    { q: "Lien déchets verts ?", a: "Oui — rotations benne saturées en automne." },
    { q: "Puis-je tester PROGESTI sur mon cas « saison automne-hiver EV » ?", a: "15 jours — basculez 10 sites en profil automne." }
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
    seoDesc: "30 à 200+ sites : vision retards, filtres commune/type, priorités semaine. Différent des grands parcs (1 site N zones). Essai 15 j.",
    sub: "120 sites, 4 communes, 3 types de contrats : sans vue portefeuille, vous pilotez au téléphone. Excel « filtrable » devient un mensonge dès que le terrain bouge.",
    empathyH2: "Le problème n’est pas d’avoir des sites : c’est de voir les 8 critiques",
    empathyBody: "Parmi 120 fiches, 8 ont un retard, 3 un accès refusé, 2 un renew dans 30 jours. Si vous ne les sortez pas en 2 minutes, vous subissez la semaine au lieu de la diriger.",
    bodySections: [
    {
      h2: "Cas — Portefeuille 120 sites, lundi 7h",
      body: "Filtre : retard > 7 j + commune + type tonte. Liste des 8 critiques. Arbitrage : 5 rattrapages, 2 reports clients informés, 1 litige preuves. Le reste de la semaine redevient exécutable.",
      bullets: ["Filtres métier (pas seulement alpha)","Retards = objets actionnables","Reporting client sur extrait, pas sur tout le portefeuille"],
    },
    {
      h2: "≠ grands parcs",
      body: "Grands parcs = 1 adresse, N zones. Multi-sites = N adresses. Intentions Google différentes.",
    },
    {
      h2: "Objection Excel",
      body: "Le filtre Excel est froid : il n’inclut pas le pointage de 9h ni le statut mobile.",
    }
    ],
    faq: [
    { q: "Combien de sites avant que ça vaille le coup ?", a: "Dès 25–30, la vue portefeuille bat le tableur. À 100+, c’est vital." },
    { q: "Multi-sociétés / multi-dépôts ?", a: "Organisez par équipes/secteurs ; l’essai montre le bon découpage." },
    { q: "Y a-t-il une cartographie pour « Multi-sites espaces verts — portefeui… » ?", a: "L’essentiel est la liste actionnable + planning ; la carte ne remplace pas les statuts." },
    { q: "Lien collectivités multi-sites ?", a: "Oui — même logique, reporting marché en plus." },
    { q: "L’essai couvre-t-il vraiment « multi-sites EV » ?", a: "15 jours — importez un extrait réel (30 sites min)." }
    ],
    demoExtra: {
      uiToolbar: "Portefeuille · 120 sites · Filtre retards",
      uiAlert: "8 sites critiques cette semaine — 3 renew < 30 j inclus",
      uiHint: "2 minutes pour sortir le vrai travail du bruit",
      uiSplitLabels: ["Critiques","Actions"],
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
    seoDesc: "PME EV Toulouse métropole / Occitanie : essai sur vos sites périurbains, support joignable en 31. Pas une landing ville fantôme.",
    sub: "Tournefeuille, Blagnac, sud Tarn : le climat, les pousses et les clients ne sont pas ceux d’une slide parisienne. Vous voulez un éditeur qui connaît le terrain sud-ouest.",
    empathyH2: "« Cloud » n’empêche pas d’avoir besoin d’humain à Toulouse",
    empathyBody: "Quand le paramétrage bloque un lundi de mars, vous ne voulez pas un ticket anonyme à 6 fuseaux horaires. Support FR, exemples locaux, essai sur de vrais sites de la métropole.",
    bodySections: [
    {
      h2: "Cas — PME Tournefeuille, 22 salariés, 38 sites périurbains",
      body: "Import de 10 sites pilotes (résidences + ZA). Première semaine rejouée avec orage local. Support joignable pour caler fréquences et mobile.",
      bullets: ["Ancre locale réelle (pas 50 landings SEO)","Essai sur votre géographie","Vocabulaire clients sud : résidences, lotissements, ZA"],
    },
    {
      h2: "Ce que cette page n’est pas",
      body: "Pas une copie du pilier. Angle local + confiance éditeur. Le produit reste le même ; le parcours d’essai est ancré 31/Occitanie.",
    },
    {
      h2: "Suite",
      body: "Après l’essai local → pilier / process (planning, preuves) selon douleur.",
    }
    ],
    faq: [
    { q: "Vous ne couvrez que Toulouse ?", a: "Non — le produit est national. Cette page existe parce que beaucoup cherchent un ancrage local et un support accessible." },
    { q: "Démo sur site ?", a: "Démo guidée à distance + essai sur vos données. Déplacements selon contexte." },
    { q: "Données hébergées où ?", a: "Cadre PROGESTI standard — détails en essai / échange commercial." },
    { q: "Références locales ?", a: "On parle cas d’usage terrain sud-ouest pendant l’essai ; pas de name-dropping inventé ici." },
    { q: "Comment démarrer sur « Logiciel espaces verts Toulouse & Occ… » ?", a: "Essai 15 j — 10 sites périurbains Toulouse métropole." }
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
    seoDesc: "Passez de Excel+WhatsApp à une source de vérité EV : pilote 25 sites, coupez le groupe planning, gardez WA informal. Essai 15 jours.",
    sub: "Votre OS actuel : Planning_S18_final_V2.xlsx + groupe « Tournées ». Ça marche jusqu’à la première absence du gérant ou le premier litige syndic.",
    empathyH2: "Excel n’est pas l’ennemi — en faire un OS d’entreprise l’est",
    empathyBody: "Excel est excellent pour calculer. Horrible pour synchroniser 4 équipes à 7h10. WhatsApp est excellent pour la vie d’équipe. Horrible comme registre de preuves. Le remplacement se fait par pilote, pas par big bang.",
    bodySections: [
    {
      h2: "Méthode — 25 sites pilotes, 14 jours",
      body: "J1–2 import. J3–5 double run (Excel encore là). J6–10 mobile obligatoire sur le pilote. J11–14 : le groupe WA « planning » passe en lecture seule puis archivé. WA informal reste pour la pause café.",
      bullets: ["Périmètre pilote visible","Critère de succès : 0 planning parallèle","Mesure : appels gérant 18h en baisse"],
    },
    {
      h2: "≠ pilier money",
      body: "Le pilier vend le logiciel global. Ici on vend la sortie de crise Excel/WA.",
    },
    {
      h2: "Risques à anticiper",
      body: "Chef d’équipe qui re-crée un Excel fantôme, commercial qui promet hors système, photos encore sur téléphone perso.",
    }
    ],
    faq: [
    { q: "Faut-il tout migrer d’un coup ?", a: "Non. 25 sites, une vraie saison ou une vraie montée de charge, puis élargissement." },
    { q: "On garde WhatsApp ?", a: "Oui pour le social / urgence humaine. Non pour l’ordre de tournée officiel." },
    { q: "Et les anciens historiques Excel ?", a: "Archivez-les. Le neuf commence à la date d’essai ; pas besoin de réécrire 5 ans." },
    { q: "Résistance terrain ?", a: "Montrez que ça réduit les appels. L’adoption suit le soulagement, pas la slide." },
    { q: "Comment démarrer un essai orienté remplacer Excel en EV ?", a: "15 jours — pilote 25 sites exactement sur cette méthode." }
    ],
    demoExtra: {
      uiToolbar: "Migration · Pilote 25 sites · J11",
      uiAlert: "Groupe WA « Tournées » archivé — Excel S18 figé en lecture seule",
      uiHint: "Source de vérité unique · WA revient à sa place",
      uiSplitLabels: ["Avant","Après"],
      uiRows: [
        { left: "Planning_S18_final_V2.xlsx", right: "3 versions concurrentes", status: "Avant", meta: "Dimanche soir gérant", tone: "danger" },
        { left: "WA Tournées", right: "Ordres noyés", status: "Avant", meta: "Preuve impossible", tone: "warn" },
        { left: "Semaine EV pilote", right: "1 vérité · mobile sync", status: "Après", meta: "25 sites", tone: "ok" },
        { left: "WA informal", right: "Pause / entraide", status: "Après", meta: "Plus d’OS parallèle", tone: "ok" },
      ],
    },
  },
  "EV-20": {
    seoTitle: "FAQ logiciel espaces verts — réponses terrain",
    seoDesc: "Prix, mobile, météo, preuves, migration Excel, verticalité EV vs propreté : réponses concrètes avant essai. FAQ 100 % espaces verts.",
    sub: "Avant de lancer l’essai, les mêmes 6 questions reviennent. Voici des réponses de chef d’exploitation — pas de brochure.",
    empathyH2: "Vos vraies questions, sans langue de bois",
    empathyBody: "« C’est un soft de nettoyage ? » « Le terrain va pointer ? » « On est trop petits ? » Si on élude, vous le sentez. Cette FAQ est volontairement EV, distincte de la FAQ globale du site.",
    bodySections: [
    {
      h2: "Les 6 objections qui bloquent l’essai",
      body: "Verticalité EV, prix, adoption mobile, temps de paramétrage, peur du flicage, comparaison Excel. Chaque réponse renvoie vers une page sœur quand l’intent est plus profond.",
      bullets: ["Oui, verticale espaces verts dédiée","Essai 15 j sans CB sur vos sites","Paramétrage progressif (pilote)"],
    },
    {
      h2: "Parcours recommandé après la FAQ",
      body: "Pilier si vision globale · Remplacer Excel si vous voulez la méthode · Preuves si litige · Collectivités/syndics si donneur d’ordre.",
    },
    {
      h2: "Ce que vous ne trouverez pas ici",
      body: "Pas de ROI % inventé, pas d’« IA qui planifie toute seule », pas de mélange propreté/sécu.",
    }
    ],
    faq: [
    { q: "PROGESTI espaces verts, c’est la même chose que la propreté ?", a: "Non. Vocabulaire, démos et pages sont EV (tournée, fréquence, engins, AV/AP). Les autres métiers ont leurs hubs." },
    { q: "On est 6 personnes : trop petit ?", a: "Non — page TPE dédiée. L’essai sur 15–20 clients se juge vite." },
    { q: "Et si la haute saison empêche de paramétrer ?", a: "Paramétrez un pilote hors pic ou 1 h/jour. Ne visez pas 100 sites la première semaine." },
    { q: "Les preuves, c’est du flicage ?", a: "C’est une protection mutuelle bureau/terrain/client. Le geste mobile reste minimal." },
    { q: "Quel tarif pour « FAQ logiciel espaces verts — réponses… » ?", a: "Dès 29,99 € HT/mois — /tarifs. Essai 15 jours sans CB." }
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
  "EV-21": {
    seoTitle: "Guide — organiser l’entretien d’espaces verts sans chaos",
    seoDesc: "Méthode en 6 étapes : inventaire sites → fréquences → tournées → pointage → preuves → facture. Pour nouveaux responsables d’exploitation EV.",
    sub: "Vous venez de reprendre l’exploitation. Les sites sont « dans la tête de Michel ». Voici l’ordre des opérations pour sortir du folklore sans tout casser.",
    empathyH2: "Structurer n’est pas « mettre un logiciel » : c’est une séquence",
    empathyBody: "Installer un outil sur un inventaire flou produit un bel outil flou. Inventoriez, cadrez les fréquences, puis seulement automatisez la semaine. Ce guide est éducatif — le pilier reste la money page.",
    bodySections: [
    {
      h2: "Les 6 étapes (ordre non négociable)",
      body: "1) Inventaire sites/accès. 2) Fréquences par prestation. 3) Découpage tournées/secteurs. 4) Pointage minimal. 5) Preuves sur les sites litige. 6) Facture du réalisé. Sautez une étape → vous reviendrez la faire sous stress.",
      bullets: ["Semaine 1–2 : inventaire + fréquences","Semaine 3 : tournée pilote","Semaine 4 : preuves + facture"],
    },
    {
      h2: "Pièges classiques",
      body: "Tout paramétrer en haute saison, exiger 12 photos/site dès J1, laisser Excel vivre en parallèle « au cas où ».",
    },
    {
      h2: "Maillage process",
      body: "Après le guide → planning, pointage, preuves, devis/factu, remplacer Excel.",
    }
    ],
    faq: [
    { q: "Combien de temps pour un portefeuille de 40 sites ?", a: "Comptez 2–3 semaines en demi-teinte (1–2 h/jour), pas un week-end héroïque." },
    { q: "Je dois tout faire avant l’essai ?", a: "Non. L’essai accélère les étapes 3–6 sur un pilote." },
    { q: "Qui anime la méthode en interne ?", a: "Un responsable exploitation + un binôme terrain volontaire. Pas le stagiaire seul." },
    { q: "Lien avec contrats annuels ?", a: "Quand l’exécution est propre, le renew devient un dossier, pas une angoisse." },
    { q: "Et après ?", a: "Essai 15 j sur 10 sites — appliquez les 6 étapes pour de vrai." }
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
    seoDesc: "Mail « vous n’êtes pas venus » : historique, pointages, photos, reports motivés. Protégez renew et équipes. Essai 15 jours.",
    sub: "17h02, mail syndic en majuscules. Vous avez 12 minutes avant que le commercial promette n’importe quoi. Il vous faut un dossier, pas un fil WhatsApp.",
    empathyH2: "Le litige se gagne avant le litige : pendant le passage",
    empathyBody: "La preuve ne se crée pas à 17h. Elle se capture à 8h42. Cette page assemble le dossier ; la page pointage capture ; la page photos ajoute l’AV/AP ; la page syndic parle audience.",
    bodySections: [
    {
      h2: "Cas — Réponse en un écran, Résidence des Tilleuls",
      body: "Derniers passages, motif S17 pluie, photo haies S18, prochaine date. Pièce jointe envoyée. Ton factuel. Le conseil syndical reçoit des faits.",
      bullets: ["Horodatage + site + équipe","Motifs de report opposables","Visuel si configuré"],
    },
    {
      h2: "Objection « flicage »",
      body: "Sans preuve, c’est l’équipe qui trinque sous accusation. La preuve protège aussi le terrain.",
    },
    {
      h2: "Livrable",
      body: "PDF/historique période + exceptions + prochain créneau.",
    }
    ],
    faq: [
    { q: "Différence avec pointage ?", a: "Pointage = capture. Preuves = assemblage et usage litige/renew." },
    { q: "Sans photo, la preuve suffit ?", a: "Souvent oui (horodatage). La photo tranche les débats de rendu." },
    { q: "Accès refusé ?", a: "Statut + photo du blocage = meilleure défense." },
    { q: "Durée de conservation ?", a: "Alignez-vous sur vos besoins renew / litige — à cadrer en essai." },
    { q: "Y a-t-il un essai sans engagement pour preuves de passage EV ?", a: "15 jours — activez preuves sur 5 sites « chauds »." }
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
    seoDesc: "TPE EV < 10 personnes : finis les soirées Excel, oublis client, facture du dimanche. Simplicité + essai 15 j. Dès 29,99 € HT.",
    sub: "Malik, indépendant + 2 salariés, 18 clients. Il connaît tout par cœur — jusqu’à la haie oubliée et la soirée facture de 3 heures.",
    empathyH2: "Trop petit pour un logiciel ? Trop grand pour le cahier",
    empathyBody: "Le pilier parle PME 15–40. Ici l’angle est radicalement TPE : peu d’écrans, rentabilité rapide, zéro usine à gaz. Le prix ne doit pas faire plus peur que le dimanche Excel.",
    bodySections: [
    {
      h2: "Cas — 18 clients, une haie oubliée, un dimanche sauvé",
      body: "Malik voit la semaine sur mobile, pointe, photo haie, facture le forfait + 1 ponctuel. Temps admin : une demi-heure, pas trois.",
      bullets: ["Paramétrage express","Mobile first","Facture simple"],
    },
    {
      h2: "Objection prix",
      body: "Une haie oubliée + une soirée stress coûtent plus cher qu’un mois d’abonnement. L’essai sans CB tranche.",
    },
    {
      h2: "Quand passer au mode PME",
      body: "Au-delà de ~12 personnes / 40 sites, ouvrez planning engins et multi-sites avancé.",
    }
    ],
    faq: [
    { q: "Je suis seul : ça sert ?", a: "Oui pour ne plus oublier et facturer proprement — surtout si vous grossissez." },
    { q: "Formation longue ?", a: "Non. Objectif : être opérationnel en une après-midi sur 10 clients." },
    { q: "Différence avec le pilier ?", a: "Même produit, angle simplicité/prix/TPE. Le pilier = vision PME complète." },
    { q: "Faut-il encore WhatsApp avec « Logiciel paysagiste TPE & indépendant… » ?", a: "Gardez-le pour vos clients si besoin ; plus comme planning d’équipe." },
    { q: "Quel tarif pour « Logiciel paysagiste TPE & indépendant… » ?", a: "Dès 29,99 € HT/mois — essai 15 j." }
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
    seoDesc: "1 adresse, N zones (parc 28 ha, campus, domaine) : priorisez entrée, playground, massifs fond. ≠ multi-sites. Essai 15 j.",
    sub: "Parc des Moulins, 28 ha, 12 zones, 2 équipes. L’entrée Instagram est impeccable ; le fond de parc est une jungle. Sans zones, pas de pilotage.",
    empathyH2: "Un grand site n’est pas « un gros client » : c’est une carte",
    empathyBody: "Multi-sites = N adresses. Ici 1 adresse, N zones avec priorités différentes. Les équipes se perdent, les priorités aussi, si tout est coché « parc OK ».",
    bodySections: [
    {
      h2: "Cas — 12 zones, prioriser entrée + playground",
      body: "Matin : zones A/B (entrée, jeux). Après-midi : massifs fond si charge OK. Orage : on protège les zones usagers, on reporte le fond.",
      bullets: ["Zones nommément planifiées","Priorités usagers vs fond","2 équipes sans collision"],
    },
    {
      h2: "≠ multi-sites",
      body: "Ne cannibalisez pas : intents et démos différents.",
    },
    {
      h2: "Livrable direction de parc",
      body: "État des zones de la semaine + photos des zones usagers.",
    }
    ],
    faq: [
    { q: "Combien de zones max ?", a: "Autant que nécessaire pour piloter — 8 à 20 est courant sur 20–40 ha." },
    { q: "Engins sur grand site ?", a: "Affectez par zone pour éviter que deux équipes se croisent sur la même allée." },
    { q: "Public / billetterie / événements ?", a: "Bloquez des fenêtres « événement » sur les zones concernées." },
    { q: "Lien collectivités ?", a: "Souvent oui si parc public — reporting DST en plus." },
    { q: "Puis-je essayer avant d’engager mon équipe sur grands parcs EV ?", a: "15 jours — découpez votre parc en zones réelles." }
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
    seoDesc: "Novembre, renew 28 k€ : bilan d’exécution, exceptions, dossier conseil. Cycle de vie contrat ≠ simple facturation. Essai 15 j.",
    sub: "Le PDF du contrat ne dit pas si vous l’avez honoré. Six semaines avant échéance, le commercial a besoin d’un bilan — pas d’une impression.",
    empathyH2: "Le renew se joue sur l’exécution de l’année, pas sur le déjeuner",
    empathyBody: "Exceptions météo, accès refusés, ponctuels offerts : sans historique, vous négociez à découvert. Cette page = cycle de vie. L’entretien opère ; la factu facture ; ici on prépare le renew.",
    bodySections: [
    {
      h2: "Cas — Contrat 28 k€, dossier renew J-42",
      body: "Taux de tenue des fréquences, liste des reports motivés, photos clés, ponctuels facturés vs offerts. Pitch : transparence + ajustement de cadence si besoin.",
      bullets: ["Bilan quantifié","Exceptions assumées","Proposition d’avenant argumentée"],
    },
    {
      h2: "Journée type commercial + exploitation",
      body: "Export bilan → revue à deux → envoi syndic → RDV conseil.",
    },
    {
      h2: "Objection « le PDF suffit »",
      body: "Le PDF décrit la promesse. Le renew juge la tenue.",
    }
    ],
    faq: [
    { q: "Différence avec devis/facturation ?", a: "Factu = pièces. Renew = récit d’exécution + négociation." },
    { q: "Et si l’année a été chaotique ?", a: "Mieux vaut un bilan honnête avec motifs qu’un silence — vous proposez un plan S1." },
    { q: "Gère-t-on le multi-contrats pour « Contrats annuels entretien EV — suivi… » ?", a: "Portefeuille renew filtré par échéance." },
    { q: "Lien preuves ?", a: "Le dossier renew s’appuie sur les preuves de la saison." },
    { q: "L’essai suffit-il pour valider mon besoin contrats annuels EV ?", a: "15 jours — construisez le bilan d’un contrat qui renew bientôt." }
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
    seoDesc: "Anti double-booking engins EV : autoportée, nacelle, mini-pelle. Détectez le conflit avant le chantier bloqué. Pas une GMAO. Essai 15 j.",
    sub: "Mardi 10h : la mini-pelle est réservée sur deux chantiers. Personne au téléphone n’avait la vue complète. Un chantier plantation attendra — trop tard.",
    empathyH2: "L’engin rare dicte le planning — pas l’inverse",
    empathyBody: "Ce n’est pas une GMAO industrielle avec stocks de pièces. C’est un garde-fou dans le planning EV : qui a la machine, quand, et quel chantier saute si panne.",
    bodySections: [
    {
      h2: "Cas — Conflit mini-pelle, plantation vs reprise",
      body: "Alerte conflit. Arbitrage : plantation Clarines garde le créneau (jalon livraison plants), reprise ZA Nord glisse de 24 h. Notification des deux chefs.",
      bullets: ["Ressources engins sur les interventions","Alerte conflit","Panne = indispo + sites impactés"],
    },
    {
      h2: "≠ absences équipes",
      body: "Humains vs machines — pages sœurs.",
    },
    {
      h2: "Objection « on se téléphone »",
      body: "Le téléphone ne scale pas à 3 dépôts et 12 machines.",
    }
    ],
    faq: [
    { q: "Maintenance préventive ?", a: "Bloquez des créneaux atelier. Pour une GMAO profonde, gardez votre outil dédié si besoin." },
    { q: "Location engins ?", a: "Créez la ressource « loc » sur la période louée." },
    { q: "Permis / habilitations ?", a: "Couplez avec compétences personnes sur le planning équipes." },
    { q: "Télémétrie IoT ?", a: "Hors scope — focus anti-conflit planning." },
    { q: "Puis-je tester PROGESTI sur mon cas « engins & matériel EV » ?", a: "15 jours — déclarez vos 5 engins critiques." }
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
    seoDesc: "AV/AP haies, massifs, élagage : photos rattachées à l’intervention, plus dans WhatsApp. Complète les preuves horodatées. Essai 15 j.",
    sub: "Le rendu se discute. L’horodatage dit « on est venus » ; la photo dit « voilà le résultat ». Si l’AP est dans la galerie du stagiaire, elle n’existe pas.",
    empathyH2: "La photo orpheline ne sauve aucun conseil syndical",
    empathyBody: "Cette page ≠ preuves horodatage pures. Ici le geste visuel AV/AP, surtout haies et création. Le terrain doit pouvoir shooter sans friction.",
    bodySections: [
    {
      h2: "Cas — Taille haies syndic, AV 07:55 / AP 11:20",
      body: "Photos rattachées à l’intervention. Le syndic conteste la hauteur : l’AP tranche. Temps ajouté : 40 secondes.",
      bullets: ["Rattachement obligatoire à l’intervention","Exigence configurable par type","Fin des chasses dans WA"],
    },
    {
      h2: "Objection « trop long »",
      body: "40 secondes vs 40 minutes de litige. Exigez AV/AP où ça compte (haies, massifs), pas sur chaque tonte.",
    },
    {
      h2: "Livrable",
      body: "Galerie par site / période pour renew ou réception chantier.",
    }
    ],
    faq: [
    { q: "Stockage / poids des médias ?", a: "Compression raisonnable ; détail pratique en essai." },
    { q: "Obligatoire pour toutes interventions ?", a: "Non — paramétrez par type (haies oui, tonte optionnel)." },
    { q: "Différence avec preuves-passages ?", a: "Preuves = dossier litige global. Photos = brique visuelle." },
    { q: "Droit à l’image riverains ?", a: "Évitez les personnes ; focus végétation / ouvrage." },
    { q: "L’essai couvre-t-il vraiment « photos avant/après EV » ?", a: "15 jours — activez AV/AP sur haies uniquement." }
    ],
    demoExtra: {
      uiToolbar: "AV/AP · Haies Tilleuls · 19/05",
      uiAlert: "AP manquante = intervention non clôturable (règle haies)",
      uiHint: "40 secondes terrain · zéro chasse WhatsApp",
      uiSplitLabels: ["Avant","Après"],
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
    seoDesc: "Pluie, orage, sol détrempé : marquer reports, basculer haies prioritaires, sync mobile, garder fréquences. Playbook dédié. Essai 15 j.",
    sub: "Le pilier montre la vision globale. Ici uniquement le playbook pluie : ce que le planificateur fait entre 7h10 et 7h40 quand le ciel a décidé.",
    empathyH2: "Improviser sous la pluie coûte des clients par beau temps",
    empathyBody: "Reports en chaîne, clients non prévenus, fréquences perdues : la météo n’est pas un aléa rare en EV. C’est un mode de travail. Sans playbook, chaque orage réinvente l’organisation.",
    bodySections: [
    {
      h2: "Playbook 30 minutes — orage nocturne",
      body: "1) Marquer impraticables. 2) Conserver fréquences. 3) Basculer travail faisable (haies, plantations reportables non). 4) Notifier. 5) Sync mobile. 6) Buffer lendemain.",
      bullets: ["Statut report météo standardisé","Bascules d’équipe guidées","Trace client"],
    },
    {
      h2: "≠ tonte service ≠ pilier",
      body: "Intent pluie/replanif pur. Les autres pages citent la météo ; celle-ci l’opère.",
    },
    {
      h2: "Objection « météo auto ? »",
      body: "Pas de magie IA. Aide à exécuter le playbook humain plus vite.",
    }
    ],
    faq: [
    { q: "Y a-t-il une intégration météo automatique ?", a: "Le cœur est le playbook opérationnel. Les alertes automatiques ne remplacent pas le jugement terrain (sol détrempé local)." },
    { q: "Clients toujours notifiés ?", a: "Selon vos règles : SMS/mail sur reports des sites sensibles (syndics, marchés)." },
    { q: "Fréquences perdues après 3 reports ?", a: "Non — backlog visible, rattrapage planifiable." },
    { q: "Lien saison printemps ?", a: "Au printemps, élargissez le buffer météo du playbook." },
    { q: "Comment démarrer un essai orienté replanification météo EV ?", a: "15 jours — rejouez votre dernier lundi pluvieux." }
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
    seoDesc: "Sous-traitance EV lotissements / promotions : jalons engazonnement, PV réception, preuves promoteur. ≠ entretien sites privés. Essai 15 j.",
    sub: "Livraison de lotissement : 3 jalons, un promoteur pressé, un PV à signer. Ce n’est pas de l’entretien de siège social.",
    empathyH2: "Le promoteur achète des jalons tenus, pas une « belle équipe »",
    empathyBody: "Retards plants, pluie, réception partielle : sans timeline partagée, vous découvrez l’écart au PV. Page distincte des sites privés B2B récurrents.",
    bodySections: [
    {
      h2: "Cas — Lotissement, 3 jalons jusqu’au PV",
      body: "Préparation → engazonnement → reprises. Preuves à chaque jalon. Réception partielle documentée si une zone attend.",
      bullets: ["Jalons promoteur","Preuves pour PV","Écarts météo tracés"],
    },
    {
      h2: "≠ paysagisme exécutant pur",
      body: "Angle relation aménageur/promoteur et réception. La page paysagisme couvre le chantier côté entreprise EV.",
    },
    {
      h2: "Livrable",
      body: "Dossier réception : timeline + photos + réserves.",
    }
    ],
    faq: [
    { q: "CCTP / DOE ?", a: "Le logiciel suit l’exécution et les preuves ; il ne remplace pas vos pièces marchés." },
    { q: "Plusieurs lots / tranches ?", a: "Un chantier par tranche ou zones — comme un mini portefeuille jalons." },
    { q: "Garanties reprises ?", a: "Contrôle J+21 planifié dans le même dossier." },
    { q: "Facturation d’avancement ?", a: "Oui via réalisé des jalons — voir devis/factu." },
    { q: "Y a-t-il un essai sans engagement pour aménageurs & promoteurs ?", a: "15 jours — 1 chantier aménageur en cours." }
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
    seoDesc: "42 haies / trimestre, 2 équipes, accès riverains : planifiez, documentez refus, gardez la fréquence. ≠ élagage arbres. Essai 15 j.",
    sub: "Saison courte, volume haut, riverain qui refuse l’accès : la taille de haies ressemble à de la tonte… jusqu’au premier litige de hauteur.",
    empathyH2: "La haie oubliée se voit depuis la rue — et sur Facebook",
    empathyBody: "≠ élagage (grimpe, créneau chirurgical). ≠ entretien global. Ici volume multi-sites, accès, photo AV/AP, saison compressée.",
    bodySections: [
    {
      h2: "Cas — 42 haies, accès refusé n°17",
      body: "Tournée trimestre. Site 17 : véhicule gênant. Statut accès refusé + photo. Report sans perdre la fréquence. Relance syndic.",
      bullets: ["Volume + saison","Accès documenté","AV/AP recommandés"],
    },
    {
      h2: "Livrable",
      body: "Avancement tournée haies + exceptions accès + photos.",
    },
    {
      h2: "Objection « comme l’entretien »",
      body: "L’entretien mélange les prestations. Les recherches « taille de haies » veulent ce playbook précis.",
    }
    ],
    faq: [
    { q: "Hauteur / voisinage ?", a: "Photo AV/AP + consigne hauteur sur fiche. Le logiciel documente ; le droit de voisinage reste le vôtre." },
    { q: "Nacelle sur haies hautes ?", a: "Ressource engin sur l’intervention — voir engins." },
    { q: "Déchets de coupe ?", a: "Lier benne — page déchets verts." },
    { q: "Cadence annuelle ?", a: "2 à 4 passages selon contrats ; densifiez au printemps." },
    { q: "Puis-je essayer avant d’engager mon équipe sur taille de haies ?", a: "15 jours — votre tournée trimestre en cours." }
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
    seoDesc: "Arrêt maladie 6h40 : backup, compétences, tournée sauvée. Focus opérationnel planning — pas un SIRH. Essai 15 jours.",
    sub: "6h40, SMS : le conducteur d’autoportée est en arrêt. La tournée tonte part à 7h15. Sans backup préparé, 9 clients voient un no-show.",
    empathyH2: "Le remplacement se joue avant l’absence, pas pendant",
    empathyBody: "Pas un SIRH (congés, paie). Un playbook : qui peut conduire quoi, quels sites sont sensibles, qui prévenir. L’intérim mal affecté casse autant qu’un trou.",
    bodySections: [
    {
      h2: "Cas — Remplacement express avant départ tournée",
      body: "Alerte absence. Backup avec permis autoportée. Sites sensibles gardés au titulaire restant ; intérim sur sites faciles. Notification mobile 6h55.",
      bullets: ["Compétences backup","Tri sites sensibles","Sync immédiate"],
    },
    {
      h2: "≠ planning construction semaine",
      body: "Ici last minute. Le planning équipes construit ; celui-ci répare.",
    },
    {
      h2: "Objection « on appelle »",
      body: "Appeler ne met pas à jour le mobile de toute l’équipe ni l’historique.",
    }
    ],
    faq: [
    { q: "Lien SIRH ?", a: "Non. Vous notez l’indispo opérationnelle ; la paie reste ailleurs." },
    { q: "Intérim récurrent ?", a: "Fiches backup avec consignes ; limitez J1 aux sites simples." },
    { q: "Plusieurs absences le même jour ?", a: "Priorisez sites renew / marchés ; reportez le reste avec motif." },
    { q: "Astreinte chef d’équipe ?", a: "Définissez qui arbitre avant 7h — le logiciel exécute l’arbitrage." },
    { q: "L’essai suffit-il pour valider mon besoin absences & remplacements EV ?", a: "15 jours — simulez un arrêt sur votre tournée réelle." }
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
    seoDesc: "Cimetières, terre-pleins, abords sensibles : planning, discrétion, reporting DST. Niche collectivité souvent sous-couverte. Essai 15 j.",
    sub: "Un cimetière mal tondu un 1er novembre, c’est une crise locale. Les terre-pleins oubliés aussi. Sensibilité usagers ≠ ZA classique.",
    empathyH2: "Ici la qualité se juge avec émotion — pas seulement en m²",
    empathyBody: "Créneaux, discrétion engins, priorités calendaires (Toussaint), reporting élus : cette niche mérite son intent. Proche collectivités, mais recherche dédiée.",
    bodySections: [
    {
      h2: "Cas — Cimetière sud + 8 terre-pleins, semaine de Toussaint",
      body: "Priorité absolue abords allées et monuments. Engins discrets matin tôt. Terre-pleins en secondaire. Reporting DST avant le week-end.",
      bullets: ["Calendrier sensible","Zones honneur vs secondaires","Reporting élu/DST"],
    },
    {
      h2: "≠ désherbage générique",
      body: "Le désherbage transverse existe ; ici le contexte cimetière/voirie et l’opinion publique.",
    },
    {
      h2: "Livrable",
      body: "État des zones sensibles + photos points de contrôle + motifs reports.",
    }
    ],
    faq: [
    { q: "Horaires / bruit ?", a: "Consignes sur fiche site ; créneaux matinaux recommandés." },
    { q: "Fleurs / fleurissement ?", a: "Interventions saisonnières planifiables — souvent hors forfait tonte." },
    { q: "Sécurité agents ?", a: "Consignes accès ; pas un logiciel SS3." },
    { q: "Lien marché public ?", a: "Oui — page collectivités pour la vue marché." },
    { q: "Puis-je tester PROGESTI sur mon cas « cimetières & voiries » ?", a: "15 jours — cimetière + terre-pleins pilotes." }
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
    seoDesc: "Rotations benne après élagage/haies : pas de branches 48h chez le syndic. Coûts déchèterie tracés. Essai 15 jours.",
    sub: "S15 : 12 chantiers de coupe, 3 rotations benne. Oublier la benne, c’est offrir un litige gratuit — et une cour pleine de branches.",
    empathyH2: "La coupe n’est finie que quand le camion est parti",
    empathyBody: "≠ élagage (la coupe). Ici la logistique déchets : rotations, saturation printemps, coûts. Souvent négligée dans les logiciels « planning vert » génériques.",
    bodySections: [
    {
      h2: "Cas — 12 sites coupe, 3 rotations benne S15",
      body: "Chaque intervention coupe génère une tâche benne liée. Alerte si benne non planifiée sous 48h. Coût rotation visible pour le gérant.",
      bullets: ["Lien coupe → évacuation","Engagement délai client","Charge printemps anticipée"],
    },
    {
      h2: "Objection « c’est de la logistique »",
      body: "Oui — et sans elle votre belle taille de haies devient un scandale syndic.",
    },
    {
      h2: "Livrable",
      body: "Planning rotations + sites en attente d’évacuation.",
    }
    ],
    faq: [
    { q: "Bennes louées vs parc propre ?", a: "Les deux : ressource « benne loc » sur période." },
    { q: "Déchèterie / traçabilité ?", a: "Notez rotation et site ; documents légaux restent votre process." },
    { q: "Facturation évacuation ?", a: "Souvent hors forfait — poussez vers facture du réalisé." },
    { q: "Saturation novembre feuilles ?", a: "Oui — couplez avec saison automne." },
    { q: "L’essai couvre-t-il vraiment « évacuation déchets verts » ?", a: "15 jours — liez benne à votre prochaine tournée haies." }
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
    seoDesc: "Chantier plantation : fenêtre, fournitures, pose, contrôle reprise J+21. Pour conducteurs travaux massifs/engazonnement. Essai 15 j.",
    sub: "Plants livrés mardi, pose mercredi–jeudi, reprise J+21. Si la livraison glisse et que personne n’ajuste, vous plantez dans le stress — ou trop tard.",
    empathyH2: "Une plantation, c’est une chaîne d’approvisionnement miniature",
    empathyBody: "≠ devis paysagisme global. Focus massifs/plantations/engazonnement et garantie reprises. One-shot, oui — mais un one-shot mal tracé coûte une saison.",
    bodySections: [
    {
      h2: "Cas — Massifs résidence, livraison → pose → J+21",
      body: "Jalon fournitures. Blocage pose si plants absents. Photos pose. Contrôle reprise planifié. Écarts tracés pour le client.",
      bullets: ["Dépendance livraison","Fenêtre de pose","Garantie reprises"],
    },
    {
      h2: "≠ irrigation",
      body: "Après la pose, l’eau = page arrosage. Ici la mise en place.",
    },
    {
      h2: "Livrable",
      body: "Dossier plantation + photos + date contrôle reprise.",
    }
    ],
    faq: [
    { q: "Fournitures client vs entreprise ?", a: "Notez la responsabilité sur le jalon livraison pour éviter le flou." },
    { q: "Report gel / canicule ?", a: "Motif météo sur la fenêtre de pose — comme un playbook." },
    { q: "Engazonnement inclus ?", a: "Oui comme jalon distinct si besoin." },
    { q: "Lien aménageurs ?", a: "Souvent — réception promoteur s’appuie sur ces jalons." },
    { q: "Comment démarrer un essai orienté plantations & massifs ?", a: "15 jours — 1 chantier plantation réel." }
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
    seoDesc: "EV sites santé : tonte 6h–8h, zones hélistation interdites, preuves direction achats. Contraintes ≠ site privé classique. Essai 15 j.",
    sub: "Clinique des Cèdres : tonte avant 8h, hélistation intouchable, badge, silence engins près des chambres. Un site privé « normal » n’a pas ces règles.",
    empathyH2: "Au mauvais endroit à la mauvaise heure, vous sortez du site",
    empathyBody: "Protocoles accès, horaires stricts, image/hygiène des abords, interlocuteur achats : la page sites privés ne suffit pas. Intent santé dédié.",
    bodySections: [
    {
      h2: "Cas — Planning clinique avec zones interdites",
      body: "Créneau 6h–8h. Zone hélistation bloquée software-side (consigne forte). Preuve mensuelle pour la direction des achats. Intérim briefé via fiche site.",
      bullets: ["Créneaux non négociables","Zones interdites visibles","Reporting achats"],
    },
    {
      h2: "≠ écoles (créneaux enfants)",
      body: "Même famille contraintes, autre régulateur (récré vs soins/héliport).",
    },
    {
      h2: "Objection « comme un site privé »",
      body: "Jusqu’au premier refus d’accès pour non-respect d’horaire.",
    }
    ],
    faq: [
    { q: "EHPAD inclus ?", a: "Oui — mêmes logiques de créneaux et discrétion." },
    { q: "Hygiène / déchets verts près des bâtiments ?", a: "Évacuation rapide — lier page déchets verts." },
    { q: "Astreinte tempête ?", a: "Interventions ponctuelles hors créneau avec validation site." },
    { q: "Multi-établissements d’un groupe santé ?", a: "Portefeuille client avec règles par site." },
    { q: "Y a-t-il un essai sans engagement pour hôpitaux & cliniques ?", a: "15 jours — 1 clinique pilote avec vraies consignes." }
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
    seoDesc: "Écoles, collèges, lycées, crèches : tonte hors récréation, densification vacances, sécurité enfants. ≠ collectivités global. Essai 15 j.",
    sub: "12 écoles : tonte mercredi AM, zéro engin pendant la récré, planning vacances densifié. La page collectivités est trop large pour cet intent.",
    empathyH2: "Le créneau scolaire est une contrainte dure — pas une préférence",
    empathyBody: "Sécurité enfants, bruit, vacances : si votre planning traite une école comme une ZA, vous allez au conflit direction / parents. Intent dédié.",
    bodySections: [
    {
      h2: "Cas — 12 écoles, mercredi AM + vacances",
      body: "Fenêtres hors récré. Vacances : densification tonte/haies. Jour de rentrée : sites prioritaires faits. Consignes déposées sur chaque fiche établissement.",
      bullets: ["Horaires scolaires","Densification vacances","Zéro engin en récré"],
    },
    {
      h2: "≠ collectivités transverse",
      body: "La collectivité page couvre le marché. Ici l’opérationnel établissements.",
    },
    {
      h2: "Livrable direction / DST",
      body: "Calendrier interventions aligné vacances + preuves périodes sensibles.",
    }
    ],
    faq: [
    { q: "Crèches / centres de loisirs ?", a: "Oui — mêmes règles de créneaux et discrétion." },
    { q: "Vacances scolaires différentes selon zones ?", a: "Profils calendaires par établissement." },
    { q: "Travaux lourds élagage ?", a: "Uniquement hors présence élèves — créneau bloqué." },
    { q: "Lien cimetières/voirie ?", a: "Autre niche ; maillage possible via hub." },
    { q: "Puis-je essayer avant d’engager mon équipe sur écoles & établissements ?", a: "15 jours — 3 écoles pilotes + 1 période de vacances." }
    ],
    demoExtra: {
      uiToolbar: "Écoles · 12 établissements · Mer AM",
      uiAlert: "Récré 10h–10h20 — tout engin interdit à proximité cours",
      uiHint: "Créneaux durs · densification vacances · ≠ page collectivités",
      uiSplitLabels: ["Semaine scolaire","Vacances"],
      uiRows: [
        { left: "École Pasteur — tonte", right: "Mer 8h–9h45", status: "OK", meta: "Avant récré", tone: "ok" },
        { left: "Collège Hugo — haies", right: "Vacances densifiées", status: "Planifié", meta: "Semaine blanche", tone: "info" },
        { left: "Crèche Les Lilas", right: "Créneau 7h–8h", status: "Strict", meta: "Silence engins", tone: "warn" },
        { left: "Élagage lycée", right: "Uniquement vacances", status: "Bloqué hors", meta: "Sécurité élèves", tone: "danger" },
      ],
    },
  },
};

export function applyEvQualityOverlay<T extends EvOverlayTarget>(spec: T): T {
  const o = evQualityOverlays[spec.id];
  if (!o) return spec;
  const demo = o.demoExtra
    ? {
        ...spec.demo,
        ...o.demoExtra,
        uiRows: o.demoExtra.uiRows ?? spec.demo.uiRows,
      }
    : spec.demo;
  return {
    ...spec,
    seoTitle: o.seoTitle ?? spec.seoTitle,
    seoDesc: o.seoDesc ?? spec.seoDesc,
    sub: o.sub ?? spec.sub,
    empathyH2: o.empathyH2 ?? spec.empathyH2,
    empathyBody: o.empathyBody ?? spec.empathyBody,
    proofH2: o.proofH2 ?? spec.proofH2,
    proofQuote: o.proofQuote ?? spec.proofQuote,
    proofItems: o.proofItems ?? spec.proofItems,
    bodySections: o.bodySections ?? spec.bodySections,
    faq: o.faq ?? spec.faq,
    demo,
  };
}
