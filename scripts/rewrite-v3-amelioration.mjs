/**
 * v3 — réécriture réelle des pages marketing
 * - EV : bodySections + FAQ (tue le meta Persona/Pain/SEO)
 * - SEC : claim / badge / CTA / trust différenciés + variants démo
 *
 * Usage: node scripts/rewrite-v3-amelioration.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

/* -------------------------------------------------------------------------- */
/* EV RICH (source métier — transformée en copy client, PAS en brief)         */
/* -------------------------------------------------------------------------- */

const RICH = {
  "EV-01": {
    persona: "dirigeant de PME paysagiste / entretien (15–40 salariés)",
    pains: ["replanifier sous la pluie", "litiges sans preuves", "facture ≠ réalisé", "charge mentale du gérant"],
    objections: ["Excel suffit", "le terrain ne pointera pas", "pas le temps en haute saison"],
    scenario:
      "Lundi 7h, orage : neuf tontes impraticables. Il faut redistribuer deux équipes avant 8h sans lâcher l’élagage de mercredi.",
    angle: "pilier logiciel",
    h2a: "Le lundi pluvieux qui révèle le système",
    h2b: "Ce que vous tenez dans PROGESTI",
    h2c: "Objections de haute saison",
    product: [
      "Planning multi-sites avec report météo sans perdre la fréquence contrat",
      "Pointage mobile + historique pour répondre syndic / collectivité",
      "Facturation calée sur le réalisé, y compris le ponctuel oublié",
    ],
    faqExtra: {
      q: "Comment on replanifie neuf sites avant 8h sans tout casser ?",
      a: "Vous marquez les sites impraticables, vous gardez les fréquences attachées au contrat, puis vous basculez les équipes sur les priorités (haies syndic, plantation reportable). Le terrain voit le nouvel ordre sur mobile ; le bureau garde la trace pour expliquer le report au client.",
    },
  },
  "EV-02": {
    persona: "visiteur qui cherche la bonne porte d’entrée",
    pains: ["trop d’angles possibles", "peur du fourre-tout", "intent mélangé"],
    objections: ["c’est pour la propreté ?", "trop de pages"],
    scenario:
      "Trois arrivées le même jour : un gérant PME 22 salariés, un DST de commune 18k, un conducteur travaux syndic qui veut des preuves.",
    angle: "hub navigation",
    h2a: "Trois intentions, trois portes — pas un catalogue flou",
    h2b: "Comment choisir votre page en 30 secondes",
    h2c: "Ce hub n’est pas un logiciel de propreté",
    product: [
      "Pages service (tonte, entretien, élagage…) séparées des audiences (syndics, collectivités, écoles)",
      "Chaque page fille porte une démo produit différente",
      "Retour possible vers le pilier logiciel si vous voulez la vue d’ensemble",
    ],
    faqExtra: {
      q: "Je gère syndics ET tonte volume — par où commencer ?",
      a: "Prenez d’abord la page qui match votre douleur du mois : litige preuves → page syndics / preuves ; tournées pelouses → tonte ; contrats annuels multi-sites → entretien. Le hub oriente, le pilier regroupe le flux planning → facture.",
    },
  },
  "EV-03": {
    persona: "responsable d’exploitation sur contrats d’entretien multi-sites",
    pains: ["fréquences perdues", "oublis de passage", "preuves absentes au renew"],
    objections: ["le forfait se gère sur papier", "trop de sites pour paramétrer"],
    scenario:
      "Contrat bihebdo à la Résidence des Tilleuls : générer la tournée S18 et prouver que deux passages manqués ont bien été rattrapés.",
    angle: "entretien récurrent",
    h2a: "Un bihebdo qui ne vit plus dans la tête du chef d’équipe",
    h2b: "Fréquences, dettes de tournée, preuves",
    h2c: "Avant le renew, le dossier s’écrit tout seul",
    product: [
      "Récurrences par site et par prestation (tonte, haies, massifs)",
      "Visibilité des passages dus / faits / reportés",
      "Historique exploitable pour le renouvellement de contrat",
    ],
    faqExtra: {
      q: "Comment paramétrer un bihebdo + haies 4×/an sans Excel parallèle ?",
      a: "Chaque prestation porte sa fréquence sur le site. La tournée de la semaine se génère à partir de ces règles ; un passage manqué reste une dette visible, pas un oubli oral. Au renew, vous sortez l’exécution réelle, pas un souvenir de saison.",
    },
  },
  "EV-04": {
    persona: "gérant / conducteur de travaux en création paysagère",
    pains: ["écart devis ↔ terrain ↔ facture", "conflit d’engins", "avancement opaque"],
    objections: ["mon devis est ailleurs", "chaque chantier est unique"],
    scenario:
      "Devis villa signé, planning sur 4 jours, conflit de mini-pelle avec un autre chantier, facture finale calée sur le réalisé.",
    angle: "chantier paysager",
    h2a: "Du devis signé au chantier qui ne dérive pas",
    h2b: "Engins, jalons, facture du réel",
    h2c: "Oui, chaque chantier est unique — la méthode ne l’est pas",
    product: [
      "Chantier lié au devis avec jalons visibles",
      "Réservation d’engins pour éviter le double booking",
      "Facture construite sur le réalisé pointé, pas sur le souvenir du commercial",
    ],
    faqExtra: {
      q: "Je fais déjà mes devis dans un autre outil — ça bloque ?",
      a: "Non. L’essentiel est de rattacher le chantier, les ressources et le réalisé dans PROGESTI pour que la facture et le suivi d’avancement ne vivent plus dans trois fichiers. Le devis externe peut rester votre point d’entrée commercial.",
    },
  },
  "EV-05": {
    persona: "chef d’équipe / exploitation sur tournées de tonte à volume",
    pains: ["pelouse oubliée", "km inutiles", "fréquence de coupe ratée"],
    objections: ["la tonte c’est simple", "Google Maps suffit"],
    scenario:
      "47 pelouses dans la semaine, 3 autoportées, une panne : réorganiser sans oublier le lotissement nord.",
    angle: "tonte volume",
    h2a: "47 pelouses, une panne, zéro place pour l’à-peu-près",
    h2b: "Tournées, engins, pelouses reportées",
    h2c: "Maps n’est pas un planning d’exploitation",
    product: [
      "Tournées de tonte par équipe / engin",
      "Statut pelouse faite / reportée / à rattraper",
      "Réaffectation rapide quand une autoportée tombe en panne",
    ],
    faqExtra: {
      q: "Comment éviter d’oublier une pelouse après une panne d’engin ?",
      a: "La pelouse reste attachée à la tournée avec un statut. Si l’équipe bascule, le site non fait reste en dette visible pour le lendemain — pas dans un message WhatsApp noyé entre deux photos de haies.",
    },
  },
  "EV-06": {
    persona: "responsable de pôle élagage (grimpe, nacelle)",
    pains: ["créneaux engins", "preuves chantier", "absence d’équipe qualifiée"],
    objections: ["trop spécifique", "la sécurité chantier est ailleurs"],
    scenario:
      "Devis 8 sujets + nacelle à J+3, grimpeur absent : bascule d’équipe et preuves AV/AP pour le client.",
    angle: "élagage",
    h2a: "Un chantier élagage ne se bricole pas le matin même",
    h2b: "Nacelle, qualifs, preuves AV/AP",
    h2c: "Spécifique oui — c’est pour ça que la page existe",
    product: [
      "Planification avec contrainte nacelle / équipe qualifiée",
      "Photos avant/après rattachées au chantier",
      "Traçabilité pour le client et pour votre assurance chantier",
    ],
    faqExtra: {
      q: "Que se passe-t-il si le grimpeur tombe malade à J-1 ?",
      a: "Vous voyez le chantier, la contrainte de qualif et la nacelle réservée. Vous basculez une équipe disponible, vous documentez le report, et le client reçoit une réalité de planning — pas un silence jusqu’au créneau manqué.",
    },
  },
  "EV-07": {
    persona: "exploitation désherbage d’abords (collectivités / syndics)",
    pains: ["retours élus / photos", "zones oubliées", "méthodes variables"],
    objections: ["c’est du détail", "pas besoin de logiciel"],
    scenario:
      "15 ronds-points + cimetière sud, contrôle DST : deux zones non faites, rattrapage tracé.",
    angle: "désherbage",
    h2a: "Le détail que le DST photographie le lundi matin",
    h2b: "Zones, checklist, motifs de retard",
    h2c: "Le « détail » qui revient en conseil",
    product: [
      "Checklist multi-zones par site",
      "Motifs de non-fait (accès, météo, charge)",
      "Historique pour répondre aux retours élus ou syndic",
    ],
    faqExtra: {
      q: "Comment prouver qu’une zone a bien été rattrapée après contrôle ?",
      a: "La zone reste ouverte tant qu’elle n’est pas clôturée. Le rattrapage est daté, affecté, et consultable — utile quand une photo d’élu arrive trois jours plus tard.",
    },
  },
  "EV-08": {
    persona: "exploitation arrosage / contrôles irrigation",
    pains: ["oublis de contrôle", "canicule", "plaintes massifs secs"],
    objections: ["on a des programmateurs", "l’IoT suffit"],
    scenario:
      "Vague de chaleur S28 : 22 sites à contrôler, prioriser les massifs exposés et les consignes d’accès.",
    angle: "arrosage interventions",
    h2a: "La canicule ne pardonne pas un contrôle oublié",
    h2b: "Priorisation humaine, pas seulement programmateurs",
    h2c: "IoT ≠ tournée de contrôle",
    product: [
      "File de contrôles priorisés par exposition / criticité",
      "Consignes d’accès sur mobile",
      "Historique des passages de contrôle pour répondre aux plaintes",
    ],
    faqExtra: {
      q: "On a déjà des programmateurs — pourquoi un logiciel d’interventions ?",
      a: "Le programmateur gère l’eau ; vous gérez les humains qui vérifient, réparent, priorisent sous canicule et prouvent le passage. PROGESTI porte la tournée de contrôle, pas la vanne.",
    },
  },
  "EV-09": {
    persona: "responsable EV / DST / titulaire de marché en collectivité",
    pains: ["reporting élus", "sites communaux éclatés", "preuves de marché"],
    objections: ["on a déjà un outil marchés", "régie ≠ logiciel privé"],
    scenario:
      "Commune 18k, 64 sites : lundi 9h le DST veut un point avant conseil — totaux écoles, parcs, cimetières.",
    angle: "collectivités",
    h2a: "Le point du lundi avant conseil municipal",
    h2b: "64 sites, une lecture par typologie",
    h2c: "Complément d’un outil marchés — pas un doublon administratif",
    product: [
      "Portefeuille communal filtré par type de site",
      "Totaux de passages pour le reporting",
      "Preuves exploitables pour le suivi d’exécution du marché",
    ],
    faqExtra: {
      q: "Est-ce compatible avec une régie ou un titulaire de marché ?",
      a: "Oui : l’outil sert l’exécution terrain et le reporting. Il ne remplace pas vos procédures marchés publics ; il évite que la preuve d’exécution vive dans des tableurs parallèles.",
    },
  },
  "EV-10": {
    persona: "commercial / exploitation face aux syndics et conseils syndicaux",
    pains: ["litiges de passages", "photos WhatsApp perdues", "renew sous pression"],
    objections: ["le syndic n’a pas besoin d’accès", "on envoie déjà un mail"],
    scenario:
      "Le syndic appelle : « vous n’êtes pas venus ». Il faut sortir l’historique + photos des Tilleuls en moins de 30 secondes.",
    angle: "syndics",
    h2a: "Quand le syndic dit « vous n’êtes pas venus »",
    h2b: "Preuves horodatées, pas un fil WhatsApp",
    h2c: "Le renew se joue sur la confiance documentée",
    product: [
      "Historique de passages par résidence",
      "Photos et pointages rattachés à l’intervention",
      "Dossier prêt pour un conseil syndical ou un mail tendu",
    ],
    faqExtra: {
      q: "Faut-il donner un accès logiciel au syndic ?",
      a: "Pas forcément. Beaucoup d’entreprises sortent un historique propre et l’envoient. L’essentiel est de ne plus fouiller trois téléphones pour prouver un passage du mardi.",
    },
  },
  "EV-11": {
    persona: "commercial / exploitation sur sites privés B2B (ZA, cliniques, hôtels)",
    pains: ["créneaux d’accès", "image du site", "horaires contraints"],
    objections: ["comme un syndic", "trop de consignes"],
    scenario:
      "Clinique : tonte à 6h30 avant ouverture. Entrepôt : badge. Showroom : photo mensuelle obligatoire.",
    angle: "sites privés B2B",
    h2a: "Trois sites B2B, trois consignes d’accès",
    h2b: "Créneaux, badges, livrables image",
    h2c: "Ce n’est pas « comme un syndic »",
    product: [
      "Consignes d’accès par site sur mobile",
      "Créneaux imposés visibles dans la tournée",
      "Livrables (photo mensuelle) rattachés au contrat site",
    ],
    faqExtra: {
      q: "Comment ne pas confondre consignes clinique et consignes entrepôt ?",
      a: "Chaque site porte ses règles. L’équipe voit le bon brief au bon endroit — pas un pavé Word générique envoyé une fois en mars.",
    },
  },
  "EV-12": {
    persona: "planificateur / chef d’exploitation multi-équipes",
    pains: ["conflits d’affectation", "absences", "engins", "double booking"],
    objections: ["le whiteboard suffit", "WhatsApp de l’équipe"],
    scenario:
      "Mardi 6h58 : trois équipes, un arrêt, mini-pelle déjà prise — réaffecter sans laisser un site à découvert.",
    angle: "planning équipes",
    h2a: "6h58, le planning doit tenir debout",
    h2b: "Équipes, engins, priorités",
    h2c: "Le whiteboard ne scale pas à 9h",
    product: [
      "Affectation multi-chantiers avec conflits visibles",
      "Prise en compte des absences et des engins",
      "Sync mobile pour que le terrain ne parte pas sur l’ancien ordre",
    ],
    faqExtra: {
      q: "On se parle déjà sur WhatsApp — pourquoi changer ?",
      a: "WhatsApp diffuse, il n’arbitre pas. Quand une mini-pelle est réservée deux fois, seul un planning partagé montre le conflit avant que deux équipes se retrouvent sur le même engin.",
    },
  },
  "EV-13": {
    persona: "gérant / admin qui a besoin de preuves horodatées",
    pains: ["feuilles papier", "heures contestées", "« on était là » non prouvé"],
    objections: ["c’est du flicage", "pas de réseau sur site"],
    scenario:
      "L’équipe B arrive à la résidence, pointe, repart. Litige le lendemain : la preuve doit être consultable.",
    angle: "pointage",
    h2a: "« On était là » ne suffit plus",
    h2b: "Arrivée, départ, historique",
    h2c: "Preuve ≠ flicage si le brief est clair",
    product: [
      "Pointage mobile arrivée / départ",
      "Historique consultable bureau",
      "Base saine pour litige et pour facturation",
    ],
    faqExtra: {
      q: "Et s’il n’y a pas de réseau sur le site ?",
      a: "Le parcours mobile reste simple et conçu pour le terrain. L’essentiel est que le pointage remonte et s’historise pour le bureau — pas une feuille volante dans la cabine de l’autoportée.",
    },
  },
  "EV-14": {
    persona: "assistante de gestion / gérant TPE-PME EV",
    pains: ["double saisie", "oublis de ponctuels", "écart devis / facture"],
    objections: ["ma compta suffit", "les devis sont déjà ailleurs"],
    scenario:
      "Chantier haies + tonte forfait + 2 h d’arrachage improvisé : facturer sans oublier le ponctuel.",
    angle: "devis facturation",
    h2a: "Le ponctuel oublié qui fait mal en fin de mois",
    h2b: "Du réalisé pointé à la ligne de facture",
    h2c: "La compta enregistre — PROGESTI alimente",
    product: [
      "Lien devis / chantier / réalisé",
      "Ponctuels captés sur le terrain",
      "Moins de double saisie vers la facture",
    ],
    faqExtra: {
      q: "Je garde ma compta actuelle ?",
      a: "Oui. PROGESTI sécurise le flux commercial → réalisé → facture. Votre outil comptable reste le registre ; vous arrêtez de reconstruire le mois à la main.",
    },
  },
  "EV-15": {
    persona: "exploitation en pic de printemps (mars–juin)",
    pains: ["surcharge", "CDD", "tout le monde veut tout en même temps"],
    objections: ["c’est tous les ans", "on survit"],
    scenario:
      "S14, charge à 140 % : prioriser les contrats annuels face aux devis ponctuels et tenir les fréquences critiques.",
    angle: "printemps",
    h2a: "S14 à 140 % : survivre ne structure pas",
    h2b: "Prioriser sans lâcher les contrats annuels",
    h2c: "Le printemps revient — le chaos n’est pas une fatalité",
    product: [
      "Vue de charge par semaine",
      "Priorisation contrats vs ponctuels",
      "Fréquences critiques visibles quand la saison explose",
    ],
    faqExtra: {
      q: "Comment trancher entre un devis ponctuel urgent et un bihebdo annuel ?",
      a: "Vous voyez la charge et les dettes de fréquence. Le bihebdo critique reste visible ; le ponctuel se place dans les créneaux restants — au lieu de se décider au feeling à 6h45.",
    },
  },
  "EV-16": {
    persona: "exploitation automne-hiver (feuilles, tailles, reprises)",
    pains: ["ramassage feuilles en volume", "visibilité moindre", "morte-saison mal planifiée"],
    objections: ["l’hiver on n’a rien", "pas besoin d’outil"],
    scenario:
      "S44 : 30 sites feuilles, un souffleur en panne — répartir et planifier les tailles hivernales.",
    angle: "automne hiver",
    h2a: "L’hiver n’est pas « vide » — il est mal lu",
    h2b: "Feuilles, pannes, tailles planifiées",
    h2c: "Préparer la reprise plutôt que subir",
    product: [
      "Tournées ramassage avec statut par site",
      "Réaffectation si matériel en panne",
      "Plan de tailles / reprises sur la morte-saison",
    ],
    faqExtra: {
      q: "Pourquoi outiller une saison plus calme ?",
      a: "Parce que le calme relatif est le moment où vous rattrapez les tailles, structurez les sites et évitez de repartir en mars avec les mêmes trous d’information.",
    },
  },
  "EV-17": {
    persona: "dirigeant / exploitation sur 30 à 200+ sites",
    pains: ["perte de vision", "oublis géographiques", "reporting client"],
    objections: ["Excel filtrable suffit"],
    scenario:
      "Portefeuille 120 sites : filtrer commune + type + retard, sortir les 8 critiques de la semaine.",
    angle: "multi-sites",
    h2a: "120 sites, 8 critiques — lesquels ?",
    h2b: "Filtres, retards, vision portefeuille",
    h2c: "Excel filtrable n’est pas une exploitation temps réel",
    product: [
      "Vue portefeuille avec filtres métier",
      "Retards / dettes de passage visibles",
      "Exports pour reporting client sans reconstruire le fichier",
    ],
    faqExtra: {
      q: "À partir de combien de sites Excel craque vraiment ?",
      a: "Souvent bien avant 100, dès que plusieurs équipes et la météo s’en mêlent. Le symptôme : personne n’est sûr de la liste des retards du mardi sans appeler trois chefs d’équipe.",
    },
  },
  "EV-18": {
    persona: "entreprise EV à Toulouse / Occitanie qui veut un éditeur local",
    pains: ["éditeur lointain", "support qui ne connaît pas le terrain sud"],
    objections: ["le cloud rend le local inutile"],
    scenario:
      "PME à Tournefeuille / Toulouse métropole : essai sur de vrais sites, support joignable dans le 31.",
    angle: "local Toulouse",
    h2a: "Un essai sur vos sites périurbains, pas une démo Paris",
    h2b: "Support humain depuis l’Occitanie",
    h2c: "Cloud oui — accompagnement local aussi",
    product: [
      "Essai 15 jours sur vos vrais sites",
      "Accompagnement par une équipe basée en Occitanie",
      "Vocabulaire et cas d’usage EV du Sud-Ouest",
    ],
    faqExtra: {
      q: "Le support est-il vraiment joignable localement ?",
      a: "Oui — équipe en Occitanie, habituée aux contraintes de saison et aux portefeuilles multi-communes de la métropole toulousaine. L’essai se fait sur vos sites, pas sur un jeu de démo figé.",
    },
  },
  "EV-19": {
    persona: "gérant fatigué d’Excel + WhatsApp comme OS de l’entreprise",
    pains: ["versions de fichiers", "messages perdus", "pas de source de vérité"],
    objections: ["changement trop lourd", "équipes habituées"],
    scenario:
      "Migrer 25 sites pilotes, couper le groupe WA « planning », garder WhatsApp pour l’informel.",
    angle: "remplacer Excel WhatsApp",
    h2a: "Excel + WhatsApp n’est pas un système d’exploitation",
    h2b: "Pilote 25 sites, bascule progressive",
    h2c: "On ne coupe pas tout le jour 1",
    product: [
      "Semaine planifiée partagée bureau ↔ terrain",
      "Migration par lot de sites",
      "WhatsApp reste pour l’humain, plus pour le planning officiel",
    ],
    faqExtra: {
      q: "Faut-il abandonner WhatsApp complètement ?",
      a: "Non. Vous abandonnez WhatsApp comme registre de tournée. Les échanges humains restent ; la vérité planning / preuves / facture vit ailleurs.",
    },
  },
  "EV-20": {
    persona: "prospect EV avec des questions concrètes avant essai",
    pains: ["doute sur la verticalité", "prix", "mobile"],
    objections: ["c’est un soft de nettoyage"],
    scenario: "Six questions métier EV avant de lancer un essai contextualisé sur vos sites.",
    angle: "FAQ",
    h2a: "Les vraies questions avant de cliquer essai",
    h2b: "Verticale espaces verts, pas propreté",
    h2c: "Réponses courtes, ensuite on essaie sur le terrain",
    product: [
      "Réponses orientées vocabulaire EV",
      "Lien clair vers tarifs et essai",
      "Orientation vers la page fille de votre intent",
    ],
    faqExtra: {
      q: "PROGESTI est-il un logiciel de nettoyage renommé ?",
      a: "Non. La verticale /espace-vert est séparée, avec démos, pages et vocabulaire propres (tournées, fréquences, engins, AV/AP). La propreté a son propre arbre.",
    },
  },
  "EV-21": {
    persona: "nouveau responsable d’exploitation qui structure l’entretien",
    pains: ["pas de méthode", "sites mal inventoriés", "fréquences floues"],
    objections: ["pas le temps d’un guide"],
    scenario:
      "Six étapes : inventaire → fréquences → tournées → pointage → preuves → facture.",
    angle: "guide méthode",
    h2a: "Une méthode en six étapes, pas un roman",
    h2b: "Inventaire → fréquences → exécution",
    h2c: "Le guide maillage vers les process",
    product: [
      "Parcours clair pour structurer un parc de sites",
      "Liens vers les pages process (planning, pointage, factu)",
      "Pilote possible sur un sous-ensemble de sites",
    ],
    faqExtra: {
      q: "Combien de temps pour poser l’inventaire initial ?",
      a: "Beaucoup d’entreprises commencent par 15–30 sites critiques. L’inventaire n’a pas besoin d’être parfait jour 1 : il doit être assez juste pour générer une tournée et pointer.",
    },
  },
  "EV-22": {
    persona: "gérant / commercial qui gère les litiges « vous n’êtes pas venus »",
    pains: ["accusations", "renouvellement menacé", "preuves éparpillées"],
    objections: ["flicage des équipes"],
    scenario:
      "Mail syndic agressif à 17h : sortir historique, pointages et photo sur un seul écran.",
    angle: "preuves litige",
    h2a: "Le mail de 17h qui demande des preuves",
    h2b: "Un dossier litige, un écran",
    h2c: "Protéger le contrat sans infantiliser les équipes",
    product: [
      "Historique + pointages + médias sur l’intervention",
      "Réponse rapide au donneur d’ordre",
      "Trace utile aussi pour le renew",
    ],
    faqExtra: {
      q: "Les équipes vont-elles vivre ça comme du flicage ?",
      a: "Si le brief est « prouver le passage pour protéger le contrat », l’adoption est différente d’un discours de contrôle punitif. Le mobile reste simple : pointer, éventuellement photo, avancer.",
    },
  },
  "EV-23": {
    persona: "TPE / indépendant EV (< 10 personnes)",
    pains: ["soirées Excel", "oubli client", "prix perçu élevé"],
    objections: ["trop petit pour un logiciel", "trop cher"],
    scenario:
      "Indépendant + 2 salariés, 18 clients : oubli d’une haie, soirée perdue à facturer.",
    angle: "TPE",
    h2a: "18 clients, pas besoin d’un usine à gaz",
    h2b: "Semaine lisible, facture le vendredi",
    h2c: "Petit oui — désorganisé non",
    product: [
      "Prise en main rapide sur un petit parc de sites",
      "Moins de soirées tableur",
      "Tarif d’entrée dès 29,99 € HT/mois, essai 15 jours",
    ],
    faqExtra: {
      q: "À partir de quelle taille ça vaut le coup ?",
      a: "Dès que vous perdez des soirs à reconstruire la semaine ou que vous oubliez une prestation. Ce n’est pas une question de 50 salariés — c’est une question de charge mentale et d’oublis facturables.",
    },
  },
  "EV-24": {
    persona: "exploitation grand parc / domaine / campus (1 site, N zones)",
    pains: ["zones à découvert", "équipes perdues sur le site", "priorités floues"],
    objections: ["c’est un seul site"],
    scenario:
      "Parc 28 ha, 12 zones, 2 équipes : prioriser entrée + playground avant les massifs de fond.",
    angle: "grands parcs",
    h2a: "Un seul site, douze façons de se perdre",
    h2b: "Zones, priorités, deux équipes",
    h2c: "« Un seul site » n’est pas un argument",
    product: [
      "Découpage par zones à l’intérieur du site",
      "Priorisation visuelle des zones sensibles",
      "Affectation claire des équipes sur le plan du parc",
    ],
    faqExtra: {
      q: "Pourquoi ne pas gérer ça comme une grosse pelouse ?",
      a: "Parce que l’entrée visiteurs, le playground et le fond de parc n’ont pas la même criticité. Sans zones, l’équipe fait ce qui est devant elle — pas ce qui compte pour le gestionnaire.",
    },
  },
  "EV-25": {
    persona: "commercial / exploitation sur le cycle de vie des contrats annuels",
    pains: ["renew sous pression", "exécution invisible", "exceptions non tracées"],
    objections: ["le PDF du contrat suffit"],
    scenario:
      "Novembre, contrat 28 k€ : bilan d’exécution pour le conseil syndical et pitch de renouvellement.",
    angle: "contrats annuels",
    h2a: "Six semaines avant échéance, le dossier renew",
    h2b: "Exécution réelle, exceptions, argumentaire",
    h2c: "Le PDF ne raconte pas la saison",
    product: [
      "Bilan d’exécution par contrat",
      "Exceptions et reports historisés",
      "Support factuel pour le renew",
    ],
    faqExtra: {
      q: "Que mettre dans le dossier renew sans y passer trois soirs ?",
      a: "Les passages tenus vs dus, les rattrapages, les preuves clés, les exceptions validées. Si c’est historisé toute l’année, le dossier de novembre est une extraction — pas une reconstruction.",
    },
  },
  "EV-26": {
    persona: "planificateur sous contrainte d’engins",
    pains: ["double booking engins", "panne", "chantier bloqué"],
    objections: ["GMAO ailleurs", "on se téléphone"],
    scenario:
      "Mini-pelle réservée sur deux chantiers le même mardi : détecter le conflit et décaler la plantation.",
    angle: "engins",
    h2a: "Deux chantiers, une mini-pelle, un mardi",
    h2b: "Conflits d’engins dans le planning EV",
    h2c: "Pas une GMAO industrielle — une contrainte d’exploitation",
    product: [
      "Réservation d’engins liée aux interventions",
      "Alerte de double booking",
      "Replanification du chantier dépendant",
    ],
    faqExtra: {
      q: "Remplacez-vous une GMAO ?",
      a: "Non. PROGESTI porte la contrainte engin dans le planning d’exploitation EV. L’entretien lourd / inventaire technique peut rester dans votre GMAO si vous en avez une.",
    },
  },
  "EV-27": {
    persona: "exploitation / commercial qui doit prouver le rendu visuel",
    pains: ["photos perdues dans WhatsApp", "pas d’AV/AP", "client qui conteste le rendu"],
    objections: ["trop long sur chantier"],
    scenario:
      "Taille de haies syndic : photo avant, photo après, toutes deux rattachées à l’intervention.",
    angle: "photos AV/AP",
    h2a: "La photo WhatsApp n’est pas une preuve de rendu",
    h2b: "Avant / après attachés à l’intervention",
    h2c: "30 secondes terrain, des heures de litige évitées",
    product: [
      "Capture AV/AP liée au bon site et à la bonne intervention",
      "Consultation bureau sans fouiller les téléphones",
      "Support en cas de contestation de rendu",
    ],
    faqExtra: {
      q: "Les équipes vont-elles vraiment prendre les photos ?",
      a: "Si c’est dans le flux de clôture de l’intervention (pas une corvée à part), oui. Deux photos ciblées battent dix images perdues dans un groupe saturé.",
    },
  },
  "EV-28": {
    persona: "gérant / planificateur sous pluie fréquente",
    pains: ["reports en chaîne", "clients non prévenus", "fréquences perdues"],
    objections: ["météo auto ?", "on improvise"],
    scenario:
      "Playbook pluie : marquer les reports, basculer les haies prioritaires, synchroniser le mobile, garder les fréquences.",
    angle: "météo replanif",
    h2a: "Le playbook orage, pas l’improvisation",
    h2b: "Report → bascule → sync terrain",
    h2c: "La fréquence survit à la pluie",
    product: [
      "Statuts report météo sans effacer le contrat",
      "Bascule vers prestations possibles le jour J",
      "Mobile à jour pour éviter les déplacements inutiles",
    ],
    faqExtra: {
      q: "Y a-t-il une météo automatique magique ?",
      a: "L’enjeu n’est pas la prévision satellite : c’est votre décision d’exploitation traçable (quoi reporter, quoi basculer, comment prévenir). PROGESTI porte cette décision.",
    },
  },
  "EV-29": {
    persona: "paysagiste / EV sous-traitant d’aménageurs & promoteurs",
    pains: ["jalons de livraison", "réceptions", "preuves promoteur"],
    objections: ["CCTP ailleurs", "chantier one-shot"],
    scenario:
      "Livraison lotissement : trois jalons d’engazonnement, PV de réception avec preuves.",
    angle: "aménageurs",
    h2a: "Les jalons promoteur ne se gèrent pas au feeling",
    h2b: "Engazonnement, réception, preuves",
    h2c: "One-shot oui — sans méthode, one-shot douloureux",
    product: [
      "Jalons de chantier jusqu’à réception",
      "Preuves attachées aux étapes",
      "Visibilité pour le dialogue aménageur / promoteur",
    ],
    faqExtra: {
      q: "Le CCTP reste dans nos outils aménageur ?",
      a: "Oui. PROGESTI suit l’exécution et les preuves de vos jalons paysagers — le complementary opérationnel du dossier technique.",
    },
  },
  "EV-30": {
    persona: "exploitation taille de haies multi-sites (volume)",
    pains: ["haies oubliées", "saison courte", "accès riverains"],
    objections: ["comme l’entretien", "comme l’élagage"],
    scenario:
      "42 haies au trimestre, 2 équipes, un accès refusé : reporter sans perdre la fréquence.",
    angle: "haies",
    h2a: "La saison des haies est courte — les oublis coûtent cher",
    h2b: "Tournées haies + accès refusés documentés",
    h2c: "Ni tonte, ni élagage : un flux dédié",
    product: [
      "Tournée haies par équipe",
      "Accès refusé historisé",
      "Fréquence trimestrielle préservée malgré les reports",
    ],
    faqExtra: {
      q: "Pourquoi une page haies si on a déjà entretien et élagage ?",
      a: "Parce que le volume, la saisonnalité et les accès riverains ne se pilotent pas comme une tonte hebdo ni comme un chantier nacelle. L’intent de recherche et le process terrain sont différents.",
    },
  },
  "EV-31": {
    persona: "planificateur qui gère absences et remplacements de dernière minute",
    pains: ["trou d’équipe", "site à découvert", "intérim mal affecté"],
    objections: ["SIRH ailleurs", "on appelle"],
    scenario:
      "6h40 : conducteur d’autoportée en arrêt — trouver un backup et notifier la tournée tonte.",
    angle: "absences",
    h2a: "6h40, un conducteur en moins",
    h2b: "Backup, tournée, notification",
    h2c: "Pas un SIRH — une réponse d’exploitation",
    product: [
      "Remplacement express dans le planning",
      "Tournée mise à jour avant départ",
      "Traçabilité du backup pour le bureau",
    ],
    faqExtra: {
      q: "Remplacez-vous notre SIRH / paie ?",
      a: "Non. On couvre le trou opérationnel du matin : qui part, sur quelle tournée, avec quel engin. Les congés RH restent dans votre SIRH.",
    },
  },
  "EV-32": {
    persona: "régie / prestataire cimetières & voiries végétalisées",
    pains: ["sensibilité usagers", "retours élus", "zones sensibles"],
    objections: ["niche trop petite"],
    scenario:
      "Cimetière sud + 8 terre-pleins : désherbage et tonte d’abords, reporting DST.",
    angle: "cimetières voirie",
    h2a: "Des espaces où l’erreur se voit tout de suite",
    h2b: "Priorités, zones sensibles, reporting",
    h2c: "Niche oui — intent de recherche réel",
    product: [
      "Planning dédié zones sensibles",
      "Priorisation cimetière / terre-pleins",
      "Reporting propre pour le DST",
    ],
    faqExtra: {
      q: "Pourquoi isoler cimetières et voiries ?",
      a: "Parce que la sensibilité usagers et le niveau d’exigence visuelle ne sont pas ceux d’une ZA. Le process et le reporting méritent un angle dédié.",
    },
  },
  "EV-33": {
    persona: "exploitation qui gère évacuation / valorisation des déchets verts",
    pains: ["oublis de benne", "coûts déchèterie", "planning saturé au printemps"],
    objections: ["c’est de la logistique, pas du logiciel"],
    scenario:
      "S15 : 12 sites élagage/haies, 3 rotations de benne — ne pas laisser les branches 48 h chez le syndic.",
    angle: "déchets verts",
    h2a: "La coupe est faite — la benne, elle, est où ?",
    h2b: "Rotations liées aux chantiers de coupe",
    h2c: "Logistique oui, improvisée non",
    product: [
      "Rotations de benne liées aux chantiers",
      "Échéances visibles pour ne pas laisser les déchets sur site",
      "Charge printemps lisible pour anticiper",
    ],
    faqExtra: {
      q: "On sous-traite parfois la benne — ça reste utile ?",
      a: "Oui : vous gardez la date promise au client et le lien avec le chantier de coupe. Sous-traitée ou non, la rotation doit apparaître dans la semaine d’exploitation.",
    },
  },
  "EV-34": {
    persona: "conducteur de travaux plantations / massifs / engazonnement",
    pains: ["fenêtres de plantation", "fournitures", "reprise garantie"],
    objections: ["one-shot, pas besoin d’outil"],
    scenario:
      "Massifs résidence : livraison plants mardi, pose mercredi-jeudi, contrôle reprise à J+21.",
    angle: "plantations massifs",
    h2a: "Livraison plants → pose → reprise",
    h2b: "Jalons de plantation tenus",
    h2c: "One-shot n’excuse pas le flou",
    product: [
      "Jalons livraison / pose / contrôle reprise",
      "Rattachement au site et au chantier",
      "Preuve pour la garantie de reprise",
    ],
    faqExtra: {
      q: "Comment suivre la reprise à J+21 sans post-it ?",
      a: "Le contrôle de reprise est une intervention planifiée liée au chantier initial. À J+21 elle apparaît dans la semaine — pas dans la mémoire du conducteur de travaux.",
    },
  },
  "EV-35": {
    persona: "exploitation EV sur sites de santé (hôpitaux, cliniques, EHPAD)",
    pains: ["protocoles d’accès", "horaires stricts", "image / hygiène des abords"],
    objections: ["comme un site privé classique"],
    scenario:
      "Clinique : tonte 6h–8h, zone hélistation interdite, preuve pour la direction des achats.",
    angle: "santé",
    h2a: "Des abords où l’horaire n’est pas négociable",
    h2b: "Créneaux, zones interdites, preuves achats",
    h2c: "Ce n’est pas un site privé générique",
    product: [
      "Créneaux imposés et zones interdites dans le brief site",
      "Preuves de passage pour la direction achats",
      "Respect des contraintes d’image / accès santé",
    ],
    faqExtra: {
      q: "Qu’est-ce qui change vs un hôtel ou une ZA ?",
      a: "Les fenêtres horaires, les zones interdites (hélistation, accès urgences) et le niveau d’exigence documentaire. Le brief site doit être impératif, pas indicatif.",
    },
  },
  "EV-36": {
    persona: "régie / prestataire écoles, collèges, lycées, crèches",
    pains: ["sécurité enfants", "créneaux hors récréation", "vacances scolaires"],
    objections: ["c’est la collectivité"],
    scenario:
      "12 écoles : tonte mercredi après-midi, pas d’engin pendant les récrés, planning vacances densifié.",
    angle: "écoles",
    h2a: "Pas d’engin pendant la récré",
    h2b: "Créneaux scolaires et vacances densifiées",
    h2c: "Collectivité ou pas — le terrain écoles a ses règles",
    product: [
      "Tournées calées hors récréation",
      "Densification pendant les vacances scolaires",
      "Consignes sécurité enfants visibles mobile",
    ],
    faqExtra: {
      q: "Comment densifier pendant les vacances sans oublier le mercredi type ?",
      a: "Vous avez deux logiques de calendrier : semaine scolaire contrainte, et vacances où vous rattrapez. Les deux cohabitent dans le planning par établissement.",
    },
  },
};

/* -------------------------------------------------------------------------- */
/* SEC shell par key                                                           */
/* -------------------------------------------------------------------------- */

const SEC_SHELL = {
  "logiciel-securite-gardiennage": {
    claimBefore: "Du réalisé pointé à la",
    claimHighlight: "facture",
    claimSub: "logiciel gardiennage · vacations & preuves",
    badge: "Vacation couverte",
    cta: "Essayer sur mes vacations",
    cta2: "Voir le flux terrain",
    trust: "Verticale sécurité · sociétés de gardiennage",
    variant: "board",
  },
  hub: {
    claimBefore: "De l’intention à la",
    claimHighlight: "bonne page",
    claimSub: "hub sécurité · une porte par besoin",
    badge: "32 angles métier",
    cta: "Trouver ma page sécurité",
    cta2: "Voir le pilier logiciel",
    trust: "Gardiennage · rondes · vacations · preuves",
    variant: "split",
  },
  gardiennage: {
    claimBefore: "Du poste fixe à la",
    claimHighlight: "vacation tenue",
    claimSub: "gardiennage site · couverture & backups",
    badge: "Poste tenu",
    cta: "Couvrir un poste type",
    cta2: "Voir planning agents",
    trust: "Posts · titulaire · backup",
    variant: "board",
  },
  "rondes-surveillance": {
    claimBefore: "De la ronde planifiée à la",
    claimHighlight: "preuve d’audit",
    claimSub: "rondes · passages · preuves client",
    badge: "Ronde validée",
    cta: "Tester une ronde réelle",
    cta2: "Voir preuves d’intervention",
    trust: "Rondes · QR/NFC · historique",
    variant: "timeline",
  },
  "agents-securite": {
    claimBefore: "De la disponibilité agent à la",
    claimHighlight: "vacation affectée",
    claimSub: "agents · compétences · affectations",
    badge: "Agent briefé",
    cta: "Affecter une vacation",
    cta2: "Voir remplacements",
    trust: "Affectation · compétences · backups",
    variant: "list",
  },
  "surete-sites": {
    claimBefore: "Des consignes site à la",
    claimHighlight: "présence prouvée",
    claimSub: "sûreté site · consignes & contrôles",
    badge: "Consignes lues",
    cta: "Structurer un site",
    cta2: "Voir contrôle d’accès",
    trust: "Consignes · contrôles · preuves",
    variant: "checklist",
  },
  "sites-industriels": {
    claimBefore: "De l’entrepôt à la",
    claimHighlight: "vacation de nuit tenue",
    claimSub: "sites industriels · nuit & accès",
    badge: "Nuit couverte",
    cta: "Piloter un site industriel",
    cta2: "Voir astreinte nuit",
    trust: "Industriel · accès · vacations nuit",
    variant: "board",
  },
  "centres-commerciaux": {
    claimBefore: "De l’ouverture centre à la",
    claimHighlight: "vacation magasin",
    claimSub: "retail · flux & horaires centre",
    badge: "Ouverture OK",
    cta: "Planifier un centre",
    cta2: "Voir multi-sites",
    trust: "Retail · horaires · multi-postes",
    variant: "timeline",
  },
  evenementiel: {
    claimBefore: "Du brief agents au",
    claimHighlight: "poste tenu",
    claimSub: "événementiel · renforts & créneaux",
    badge: "Brief OK",
    cta: "Monter un dispositif event",
    cta2: "Voir planning agents",
    trust: "Event · renforts · créneaux courts",
    variant: "board",
  },
  coproprietes: {
    claimBefore: "Du hall à la",
    claimHighlight: "preuve pour le syndic",
    claimSub: "copropriétés · présence & reporting",
    badge: "Présence prouvée",
    cta: "Couvrir une résidence",
    cta2: "Voir main courante",
    trust: "Résidentiel · syndic · preuves",
    variant: "checklist",
  },
  "planning-agents": {
    claimBefore: "Du trou détecté à la",
    claimHighlight: "vacation couverte",
    claimSub: "planning · backups · alertes",
    badge: "Trou évité",
    cta: "Sécuriser mon planning",
    cta2: "Voir vacation non pourvue",
    trust: "Planning · trous · backups",
    variant: "board",
  },
  "pointage-vacations": {
    claimBefore: "Du pointage mobile à la",
    claimHighlight: "heure facturable",
    claimSub: "pointage · début/fin · écarts",
    badge: "Pointé",
    cta: "Tester le pointage",
    cta2: "Voir facturation",
    trust: "Pointage · vacations · écarts",
    variant: "timeline",
  },
  "preuves-intervention": {
    claimBefore: "De l’intervention à la",
    claimHighlight: "preuve client",
    claimSub: "preuves · historique · audit",
    badge: "Preuve exportable",
    cta: "Monter un dossier preuve",
    cta2: "Voir rondes",
    trust: "Preuves · donneur d’ordre · audit",
    variant: "checklist",
  },
  "multi-sites": {
    claimBefore: "Du portefeuille sites à la",
    claimHighlight: "couverture globale",
    claimSub: "multi-sites · vision exploitation",
    badge: "Sites sous contrôle",
    cta: "Voir mon portefeuille",
    cta2: "Voir grands comptes",
    trust: "Multi-sites · priorités · retards",
    variant: "board",
  },
  "facturation-gardiennage": {
    claimBefore: "Des heures pointées à la",
    claimHighlight: "facture",
    claimSub: "factu gardiennage · réalisé terrain",
    badge: "Brouillon facture",
    cta: "Facturer le réalisé",
    cta2: "Voir pointage vacations",
    trust: "Réalisé · lignes · fin de mois",
    variant: "list",
  },
  "remplacer-excel": {
    claimBefore: "Du tableur éclaté à la",
    claimHighlight: "source de vérité",
    claimSub: "sortie Excel / WhatsApp sécurité",
    badge: "Pilote lancé",
    cta: "Lancer un pilote 10 postes",
    cta2: "Voir le pilier logiciel",
    trust: "Migration · pilote · adoption",
    variant: "split",
  },
  faq: {
    claimBefore: "De la question métier à la",
    claimHighlight: "réponse claire",
    claimSub: "FAQ sécurité · avant l’essai",
    badge: "Réponse terrain",
    cta: "Lire puis essayer",
    cta2: "Parler à un humain",
    trust: "FAQ · verticale /securite",
    variant: "list",
  },
  "guide-organiser-vacations": {
    claimBefore: "De la méthode à la",
    claimHighlight: "vacation publiée",
    claimSub: "guide organiser vacations",
    badge: "Méthode 6 étapes",
    cta: "Suivre le guide",
    cta2: "Ouvrir le planning",
    trust: "Méthode · publication · backups",
    variant: "checklist",
  },
  "toulouse-occitanie": {
    claimBefore: "De l’essai local à la",
    claimHighlight: "prise en main",
    claimSub: "Toulouse · Occitanie · support FR",
    badge: "Support 31",
    cta: "Essayer depuis Toulouse",
    cta2: "Voir tarifs",
    trust: "Éditeur Occitanie · support humain",
    variant: "split",
  },
  "astreinte-nuit": {
    claimBefore: "De l’alerte 2h du mat à la",
    claimHighlight: "relève assurée",
    claimSub: "astreinte · nuit · escalade",
    badge: "Nuit sous contrôle",
    cta: "Structurer mes nuits",
    cta2: "Voir vacation non pourvue",
    trust: "Nuit · astreinte · escalade",
    variant: "timeline",
  },
  "pme-entreprises": {
    claimBefore: "Du besoin PME à la",
    claimHighlight: "couverture site",
    claimSub: "PME · sites entreprise",
    badge: "Site PME couvert",
    cta: "Couvrir un site PME",
    cta2: "Voir petites sociétés",
    trust: "PME · postes · reporting simple",
    variant: "list",
  },
  "grands-comptes": {
    claimBefore: "Du reporting cadre à la",
    claimHighlight: "preuve consolidée",
    claimSub: "grands comptes · multi-sites exigents",
    badge: "Reporting prêt",
    cta: "Piloter un grand compte",
    cta2: "Voir contrats cadres",
    trust: "Grands comptes · SLA · preuves",
    variant: "board",
  },
  "contrats-cadres": {
    claimBefore: "Du contrat cadre à la",
    claimHighlight: "exécution tracée",
    claimSub: "contrats cadres · exécution & renew",
    badge: "Exécution visible",
    cta: "Suivre un contrat cadre",
    cta2: "Voir facturation",
    trust: "Cadre · exécution · renew",
    variant: "checklist",
  },
  "petites-societes": {
    claimBefore: "De la petite structure à la",
    claimHighlight: "semaine tenue",
    claimSub: "TPE / petites sociétés de sécurité",
    badge: "Simple & tenu",
    cta: "Essayer en petite structure",
    cta2: "Voir tarifs",
    trust: "TPE sécurité · simplicité · prix clair",
    variant: "list",
  },
  "controle-acces-consignes": {
    claimBefore: "Des consignes lues au",
    claimHighlight: "contrôle d’accès",
    claimSub: "consignes · accès · brief mobile",
    badge: "Consignes OK",
    cta: "Poser des consignes site",
    cta2: "Voir sûreté sites",
    trust: "Consignes · accès · brief agent",
    variant: "checklist",
  },
  "main-courante": {
    claimBefore: "De l’incident saisi au",
    claimHighlight: "rapport client",
    claimSub: "main courante · incidents · transmission",
    badge: "Incident tracé",
    cta: "Tester une main courante",
    cta2: "Voir preuves",
    trust: "Main courante · incidents · reporting",
    variant: "timeline",
  },
  ssiap: {
    claimBefore: "Du poste SSIAP à la",
    claimHighlight: "vacation conforme",
    claimSub: "SSiap · compétences & affectation",
    badge: "Compétence OK",
    cta: "Affecter un profil SSIAP",
    cta2: "Voir agents sécurité",
    trust: "Compétences · postes · traçabilité",
    variant: "list",
  },
  "sites-sensibles": {
    claimBefore: "Du brief renforcé à la",
    claimHighlight: "présence exigée",
    claimSub: "sites sensibles · consignes renforcées",
    badge: "Brief renforcé",
    cta: "Couvrir un site sensible",
    cta2: "Voir preuves",
    trust: "Sensibles · brief · preuves renforcées",
    variant: "checklist",
  },
  "btp-chantiers": {
    claimBefore: "Du chantier BTP à la",
    claimHighlight: "vacation créneau",
    claimSub: "BTP · gardiennage chantier",
    badge: "Créneau tenu",
    cta: "Planifier un chantier",
    cta2: "Voir planning agents",
    trust: "BTP · créneaux · accès chantier",
    variant: "board",
  },
  "pc-securite": {
    claimBefore: "Du PC sécurité à la",
    claimHighlight: "vue temps réel",
    claimSub: "PC · dispatch · supervision",
    badge: "PC synchronisé",
    cta: "Voir la vue PC",
    cta2: "Voir multi-sites",
    trust: "PC · dispatch · supervision",
    variant: "board",
  },
  "vacation-non-pourvue": {
    claimBefore: "De l’alerte trou à la",
    claimHighlight: "vacation sauvée",
    claimSub: "vacation non pourvue · alerte & backup",
    badge: "Trou détecté",
    cta: "Traiter un trou vacation",
    cta2: "Voir remplacement urgence",
    trust: "Alertes · trous · backups",
    variant: "board",
  },
  "remplacement-urgence": {
    claimBefore: "De l’indisponibilité à la",
    claimHighlight: "relève trouvée",
    claimSub: "remplacement urgence · dernière minute",
    badge: "Backup affecté",
    cta: "Simuler un remplacement",
    cta2: "Voir planning agents",
    trust: "Urgence · backup · brief consignes",
    variant: "timeline",
  },
};

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

function esc(str) {
  return String(str)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
}

function fmtBullets(items) {
  return items.map((b) => `          ${JSON.stringify(b)},`).join("\n");
}

function fmtH3(items) {
  if (!items?.length) return "";
  return `        h3: [
${items
  .map(
    (h) => `          {
            title: ${JSON.stringify(h.title)},
            body: ${JSON.stringify(h.body)},
          },`,
  )
  .join("\n")}
        ],`;
}

function marketingBodies(id) {
  const r = RICH[id];
  if (!r) return null;

  const objectionBits = r.objections
    .map((o) => `« ${o} »`)
    .join(", ");

  return `[
      {
        h2: ${JSON.stringify(r.h2a)},
        body: ${JSON.stringify(
          `Vous êtes ${r.persona}. ${r.scenario} Ce n’est pas un cas inventé pour une landing : c’est le type de journée qui révèle si votre organisation tient — ou si Excel et WhatsApp absorbent encore le choc.`,
        )},
        bullets: [
${fmtBullets(r.pains.map((p) => p.charAt(0).toUpperCase() + p.slice(1)))}
        ],
${fmtH3([
  {
    title: "Ce qui se joue concrètement",
    body: r.scenario,
  },
  {
    title: "Pourquoi cet angle (et pas un autre)",
    body: `Cette page couvre l’angle « ${r.angle} ». Les pages sœurs traitent d’autres intents : ici on reste sur votre réalité opérationnelle, sans fourre-tout.`,
  },
])}
      },
      {
        h2: ${JSON.stringify(r.h2b)},
        body: ${JSON.stringify(
          `PROGESTI ancre le flux bureau ↔ terrain pour cet usage : planning d’interventions, équipes, contraintes engins si besoin, pointage, historique / preuves, devis et facturation du réalisé. Pas de promesse miracle — une source de vérité pour ${r.angle}.`,
        )},
        bullets: [
${fmtBullets(r.product)}
        ],
      },
      {
        h2: ${JSON.stringify(r.h2c)},
        body: ${JSON.stringify(
          `On entend souvent ${objectionBits}. La réponse n’est pas un slide : c’est un essai sur vos vrais sites, avec une démo calée sur ce scénario, puis un pilote (pas une migration big bang).`,
        )},
        bullets: [
${fmtBullets([
  "Essai 15 jours sans CB sur un périmètre pilote",
  "Démo produit unique sur cette page — pas un screenshot recyclé",
  "Support humain depuis l’Occitanie si vous voulez un accompagnement",
])}
        ],
      }
    ]`;
}

function marketingFaq(id) {
  const r = RICH[id];
  if (!r) return null;
  const firstName = r.persona.split(",")[0];
  return `[
      {
        q: ${JSON.stringify(r.faqExtra.q)},
        a: ${JSON.stringify(r.faqExtra.a)},
      },
      {
        q: ${JSON.stringify(`Je suis ${firstName} — cette page me concerne ?`)},
        a: ${JSON.stringify(
          `Oui si le scénario vous parle : ${r.scenario} Sinon, repassez par le hub /espace-vert pour l’intention voisine (service, audience ou process).`,
        )},
      },
      {
        q: "En quoi c’est différent d’un Excel / WhatsApp pour mon exploitation ?",
        a: ${JSON.stringify(
          `Excel versionne mal, WhatsApp n’arbitre pas les conflits d’équipe ni les fréquences contrat. Ici, la semaine, les preuves et le réalisé vivent au même endroit — c’est ce que la démo « ${r.h2a} » illustre pour l’angle ${r.angle}.`,
        )},
      },
      {
        q: ${JSON.stringify(`Que répondre à « ${r.objections[0]} » en interne ?`)},
        a: ${JSON.stringify(
          `Proposez un pilote sur les sites où la douleur est la plus nette (souvent ceux du scénario ci-dessus). La valeur apparaît d’abord sur la replanification, les preuves et la facture — pas sur un discours abstrait de “digitalisation”.`,
        )},
      },
      {
        q: "Combien ça coûte et comment essayer sans risque ?",
        a: "Dès 29,99 € HT/mois, modules inclus. Essai 15 jours sans CB. Détail sur /tarifs — support humain depuis Toulouse (31).",
      }
    ]`;
}

function replaceFieldArray(src, id, fieldName, newArrayLiteral) {
  const idToken = `id: "${id}"`;
  const idIdx = src.indexOf(idToken);
  if (idIdx < 0) {
    console.warn("ID introuvable:", id);
    return src;
  }

  // Search field only within this page object (until next id: "EV-/SEC- or end)
  const nextId = src.slice(idIdx + idToken.length).search(/\n\s+id: "(EV|SEC)-/);
  const endIdx = nextId < 0 ? src.length : idIdx + idToken.length + nextId;
  const slice = src.slice(idIdx, endIdx);

  const fieldToken = `${fieldName}:`;
  const fIdx = slice.indexOf(fieldToken);
  if (fIdx < 0) {
    console.warn(`Champ ${fieldName} introuvable pour`, id);
    return src;
  }

  const absF = idIdx + fIdx;
  const after = src.slice(absF + fieldToken.length);
  const bracketStart = after.search(/\[/);
  if (bracketStart < 0) return src;
  const start = absF + fieldToken.length + bracketStart;

  let depth = 0;
  let i = start;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }

  return src.slice(0, start) + newArrayLiteral + src.slice(i);
}

function patchSecShell(src, key, shell) {
  // Find block by key: "..."
  const keyToken = `key: "${key}"`;
  const kIdx = src.indexOf(keyToken);
  if (kIdx < 0) {
    console.warn("SEC key introuvable:", key);
    return src;
  }
  const nextKey = src.slice(kIdx + keyToken.length).search(/\n\s+id: "SEC-/);
  const endIdx = nextKey < 0 ? src.length : kIdx + keyToken.length + nextKey;
  let block = src.slice(kIdx, endIdx);
  const before = src.slice(0, kIdx);
  const after = src.slice(endIdx);

  const repl = (re, value) => {
    if (re.test(block)) block = block.replace(re, value);
  };

  repl(/claimBefore:\s*"[^"]*"/, `claimBefore: "${shell.claimBefore}"`);
  repl(/claimHighlight:\s*"[^"]*"/, `claimHighlight: "${shell.claimHighlight}"`);
  repl(/claimSub:\s*"[^"]*"/, `claimSub: "${shell.claimSub}"`);
  repl(/showcaseBadgeRight:\s*"[^"]*"/, `showcaseBadgeRight: "${shell.badge}"`);
  repl(/ctaPrimaryLabel:\s*"[^"]*"/, `ctaPrimaryLabel: "${shell.cta}"`);
  if (block.includes("ctaSecondaryLabel:")) {
    repl(/ctaSecondaryLabel:\s*"[^"]*"/, `ctaSecondaryLabel: "${shell.cta2}"`);
  } else {
    block = block.replace(
      /ctaPrimaryLabel:\s*"[^"]*"/,
      (m) => `${m},\n    ctaSecondaryLabel: "${shell.cta2}"`,
    );
  }
  if (block.includes("trustLeft:")) {
    repl(/trustLeft:\s*"[^"]*"/, `trustLeft: "${shell.trust}"`);
  } else {
    block = block.replace(
      /ctaPrimaryLabel:\s*"[^"]*"$/,
      (m) => `${m},\n    trustLeft: "${shell.trust}"`,
    );
  }

  // Inject demo.variant if missing inside demo: { ... }
  if (shell.variant && block.includes("demo:")) {
    if (!/demo:\s*\{[\s\S]*?\bvariant:/.test(block)) {
      block = block.replace(
        /(demo:\s*\{)/,
        `$1\n      variant: "${shell.variant}",`,
      );
    } else {
      block = block.replace(
        /(demo:\s*\{[\s\S]*?variant:\s*")[^"]*(")/,
        `$1${shell.variant}$2`,
      );
    }
  }

  return before + block + after;
}

/* -------------------------------------------------------------------------- */
/* Run                                                                         */
/* -------------------------------------------------------------------------- */

function rewriteEvFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  let count = 0;
  for (const id of Object.keys(RICH)) {
    if (!src.includes(`id: "${id}"`)) continue;
    const bodies = marketingBodies(id);
    const faq = marketingFaq(id);
    src = replaceFieldArray(src, id, "bodySections", bodies);
    src = replaceFieldArray(src, id, "faq", faq);
    count++;
  }
  fs.writeFileSync(filePath, src);
  console.log(`EV ${path.basename(filePath)}: ${count} pages réécrites`);
}

function rewriteSecFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  let count = 0;
  for (const [key, shell] of Object.entries(SEC_SHELL)) {
    if (!src.includes(`key: "${key}"`)) continue;
    src = patchSecShell(src, key, shell);
    count++;
  }
  fs.writeFileSync(filePath, src);
  console.log(`SEC specs: ${count} shells différenciés`);
}

const evDir = path.join(root, "src", "lib", "marketing", "ev");
for (const part of ["specs-part1.ts", "specs-part2.ts", "specs-part3.ts", "specs-part4.ts", "specs-part5.ts"]) {
  rewriteEvFile(path.join(evDir, part));
}
rewriteSecFile(path.join(root, "src", "lib", "marketing", "sec", "specs.ts"));

console.log("OK — v3 appliquée. Relancer npm run build.");
