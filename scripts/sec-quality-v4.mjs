/**
 * v4 Sécu — FAQ terrain + empathy densifiée + body objection réelle.
 * Usage: node scripts/sec-quality-v4.mjs
 * Ne touche PAS à l'EV.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const secDir = path.join(root, "src", "lib", "marketing", "sec");
const SPEC_FILES = ["specs-part1.ts", "specs-legacy-rest.ts", "specs-new.ts"];

/** Packs par key — copy client, pas de « Prix ? / Support FR ? » */
const PACK = {
  "logiciel-securite-gardiennage": {
    empathyH2: "Vendredi 17h45 : la vacation de nuit n’a plus de titulaire",
    empathyBody:
      "Site Entrepôt Nord, vacation 22h–06h. L’agent prévu se déclare indisponible. Sans backup visible et sans consignes sur mobile, vous improviserez jusqu’à 21h50 — et le client saura. PROGESTI porte la chaîne vacation → présence → facture du réalisé, pas un tableur du lundi matin.",
    faq: [
      {
        q: "Comment on couvre une vacation de nuit quand le titulaire lâche à 17h45 ?",
        a: "Vous voyez le trou sur le planning, vous affectez un backup du pool, vous lui poussez les consignes site sur mobile, puis vous gardez le pointage début/fin. Le lundi, la ligne de facture part du réalisé — pas d’une reconstruction WhatsApp.",
      },
      {
        q: "C’est un logiciel de nettoyage renommé ?",
        a: "Non. La verticale /securite est séparée (propreté et espaces verts ont leurs arbres). Ici le vocabulaire est vacation, poste, ronde, main courante, backup, donneur d’ordre.",
      },
      {
        q: "PROGESTI remplace-t-il l’agrément / le cadre CNAPS ?",
        a: "Non. C’est l’outil d’organisation : vacations, preuves, facturation. Pas un conseil juridique ni un substitut à vos obligations professionnelles.",
      },
      {
        q: "Le pointage mobile sert à quoi concrètement en fin de mois ?",
        a: "À aligner les heures facturables sur ce qui s’est passé sur site. Moins d’écarts « on avait dit 8h » vs « il est parti à 5h50 » — le réalisé pointe, la facture suit.",
      },
      {
        q: "On commence comment sans migrer 80 postes d’un coup ?",
        a: "Pilotez 8–12 postes critiques (souvent les nuits et les sites qui appellent). Tenez deux semaines. Puis élargissez. Essai 15 jours sans CB, dès 29,99 € HT/mois.",
      },
    ],
  },
  hub: {
    empathyH2: "Une recherche Google ≠ une vacation ≠ une ronde",
    empathyBody:
      "« Preuve de ronde entrepôt » et « sécurité festival » ne doivent pas atterrir sur la même landing fourre-tout. Ce hub oriente vers la page qui parle votre terrain — puis vers l’essai.",
    faq: [
      {
        q: "Je cherche à couvrir un poste fixe copro : où aller ?",
        a: "Page gardiennage + copropriétés. Le pilier logiciel si vous voulez le flux global vacation → facture.",
      },
      {
        q: "Je dois prouver des rondes de nuit : quelle page ?",
        a: "Rondes & surveillance, puis preuves d’intervention. L’astreinte nuit couvre l’angle escalade 2h du matin.",
      },
      {
        q: "Pourquoi autant de pages sécurité ?",
        a: "Parce qu’un responsable planning et un organisateur event ne posent pas la même question. Une page unique les fait rebondir tous les deux.",
      },
      {
        q: "Où est la facturation des heures de vacation ?",
        a: "Page facturation gardiennage — branchée sur le pointage, pas sur un Excel de fin de mois.",
      },
      {
        q: "Par où commencer l’essai ?",
        a: "Choisissez la page de votre douleur du mois, ouvrez la démo, puis lancez l’essai sur un petit lot de postes réels.",
      },
    ],
  },
  gardiennage: {
    empathyH2: "Un poste sans backup, c’est une alerte client en puissance",
    empathyBody:
      "Titulaire malade, consignes dans un classeur, horaires flous : le donneur d’ordre ne veut pas votre stress, il veut un poste tenu. Le gardiennage site, c’est de la couverture visible avant 22h — pas une déclaration le lendemain.",
    faq: [
      {
        q: "Comment rendre visibles les trous de poste avant que le client appelle ?",
        a: "Le planning montre titulaire + backup. Un trou non couvert reste rouge. Vous traitez avant la prise de vacation, pas après le mail du facility.",
      },
      {
        q: "Les consignes site peuvent-elles suivre l’agent de backup ?",
        a: "Oui : le brief est sur le poste, pas dans la tête du titulaire. Le backup lit les consignes sur mobile avant d’arriver.",
      },
      {
        q: "Différence avec la page rondes ?",
        a: "Gardiennage = tenir un poste / une vacation. Rondes = prouver un parcours de points. Souvent complémentaires sur le même site.",
      },
      {
        q: "On gère déjà ça sur Excel par site client",
        a: "Excel ne pousse pas le brief au mobile du backup à 18h10. C’est là que les postes lâchent.",
      },
      {
        q: "Par où piloter un premier site ?",
        a: "Un site, deux semaines, titulaire + 2 backups nommés, consignes à jour. Puis vous répliquez le modèle.",
      },
    ],
  },
  "rondes-surveillance": {
    empathyH2: "« On a fait le tour » ne passe pas un audit du 12 mars",
    empathyBody:
      "Entrepôt frigo, quai, parking : le client veut des passages horodatés. Une ronde déclarée au téléphone ne tient pas face à un écart sur le point Q7 à 23h41.",
    faq: [
      {
        q: "Le client demande le détail de la ronde du 12 mars 22h–6h : je sors quoi en 2 minutes ?",
        a: "L’historique des points de passage avec horodatage, les écarts éventuels, et l’agent concerné. Pas un récit oral — un dossier exportable.",
      },
      {
        q: "Que se passe-t-il si un point de ronde est sauté ?",
        a: "L’écart apparaît côté exploitation. Vous pouvez relancer l’agent ou documenter la cause avant que le rapport client parte incomplet.",
      },
      {
        q: "QR / NFC obligatoires ?",
        a: "L’important est la validation horodatée des étapes. Le mode de scan dépend de votre déploiement terrain ; la preuve, elle, doit exister.",
      },
      {
        q: "Lien avec la vacation de nuit ?",
        a: "La vacation couvre la présence ; la ronde prouve le parcours. Sur un site industriel, les deux se complètent.",
      },
      {
        q: "Comment démarrer sans cartographier 40 sites ?",
        a: "Commencez par 1–2 sites audit-sensibles (ceux qui demandent déjà des preuves). Stabilisez le modèle de tournée, puis déployez.",
      },
    ],
  },
  "agents-securite": {
    empathyH2: "Affecter n’est pas « envoyer un prénom sur WhatsApp »",
    empathyBody:
      "Compétences, disponibilités, brief : un agent mal affecté sur un poste SSIAP ou un site sensible, c’est un risque opérationnel avant d’être un souci RH.",
    faq: [
      {
        q: "Comment éviter d’affecter un agent sans la compétence du poste ?",
        a: "Le poste porte ses exigences ; l’affectation visible si le profil ne matche pas. Vous corrigez avant la prise de vacation.",
      },
      {
        q: "Différence avec le planning agents ?",
        a: "Ici l’angle est le vivier agents / compétences. Le planning traite la grille horaires et les trous.",
      },
      {
        q: "Les backups sont-ils nominatifs ?",
        a: "Oui, idéalement : un pool nommé bat un « on verra ce soir » pour les postes critiques.",
      },
      {
        q: "Ça remplace mon SIRH ?",
        a: "Non. PROGESTI sert l’affectation opérationnelle. Congés / paie restent dans votre SIRH.",
      },
      {
        q: "Cas SSIAP ?",
        a: "Voir aussi la page SSIAP : l’orga de poste et la compétence doivent coller — sans promesse réglementaire abusive.",
      },
    ],
  },
  "surete-sites": {
    empathyH2: "Des consignes dans un classeur = des consignes invisibles à 21h50",
    empathyBody:
      "Contrôles d’accès, listes, particularités site : si le backup ne les lit pas avant d’entrer, vous n’avez pas de sûreté site — vous avez de l’espoir.",
    faq: [
      {
        q: "Où vivent les consignes pour qu’un backup les voie vraiment ?",
        a: "Sur le poste / le site, accessibles mobile au moment de l’affectation — pas dans un PDF mailé en janvier.",
      },
      {
        q: "Lien avec contrôle d’accès ?",
        a: "La page contrôle d’accès & consignes détaille le brief. Ici l’angle est la présence prouvée dans un cadre de sûreté site.",
      },
      {
        q: "Que journaliser en cas d’anomalie d’accès ?",
        a: "L’incident dans la main courante, rattaché au site et à la vacation — pour le rapport client et votre exploitation.",
      },
      {
        q: "Sites multi-consignes (jour/nuit) ?",
        a: "Séparez les briefs par créneau. L’agent de nuit ne doit pas appliquer le protocole jour par erreur.",
      },
      {
        q: "Par où commencer ?",
        a: "Un site pilote, consignes à jour, 2 backups briefés, une semaine de preuves de présence.",
      },
    ],
  },
  "sites-industriels": {
    empathyH2: "La nuit sur entrepôt ne pardonne pas un trou de vacation",
    empathyBody:
      "Accès quai, consignes frigo, vacation 22h–06h : le facility manager juge sur la couverture et les preuves, pas sur votre charge mentale du vendredi soir.",
    faq: [
      {
        q: "Comment gérer une vacation nuit industrielle avec backup de dernière minute ?",
        a: "Trou visible → backup affecté → consignes poussées → pointage. Le scénario Entrepôt Nord du pilier est exactement ce flux.",
      },
      {
        q: "Rondes sur site industriel : même page ?",
        a: "Non : utilisez rondes & surveillance pour les parcours. Ici l’angle est la vacation / présence site industriel.",
      },
      {
        q: "Accès badge / consignes quai ?",
        a: "Dans le brief site, visibles mobile. Le backup ne découvre pas le digicode à 21h55 au téléphone.",
      },
      {
        q: "Reporting facility le lundi ?",
        a: "Historique de présence + incidents main courante + rondes si configurées — un dossier, pas trois Excel.",
      },
      {
        q: "Pilote conseillé ?",
        a: "1 site industriel nuit + 1 semaine de backups testés. Puis vous étendez aux autres entrepôts.",
      },
    ],
  },
  "centres-commerciaux": {
    empathyH2: "Ouverture centre : horaires serrés, zéro place pour l’à-peu-près",
    empathyBody:
      "Flux clients, multi-postes, créneaux d’ouverture : si un poste lâché n’est pas repris avant l’ouverture, c’est visible dans le mall — et dans le compte-rendu du centre.",
    faq: [
      {
        q: "Comment tenir plusieurs postes sur un même centre le samedi ?",
        a: "Planning multi-postes avec backups par zone (parking, mall, livraison). Les trous apparaissent avant l’ouverture, pas à 10h15.",
      },
      {
        q: "Différence avec multi-sites ?",
        a: "Ici un site complexe multi-postes. Multi-sites = portefeuille d’adresses. Les deux se combinent souvent.",
      },
      {
        q: "Horaires d’ouverture variables ?",
        a: "Les vacations suivent le calendrier du centre (nocturnes, inventaires). Le planning doit pouvoir absorber ces exceptions.",
      },
      {
        q: "Preuves pour le gestionnaire du centre ?",
        a: "Présences + incidents + éventuellement rondes parkings — exportables pour le comité de suivi.",
      },
      {
        q: "Par où commencer ?",
        a: "Un centre, un week-end type, tous les postes du samedi modélisés avec backup.",
      },
    ],
  },
  evenementiel: {
    empathyH2: "Un festival ne se planifie pas comme un poste fixe annuel",
    empathyBody:
      "Renforts, créneaux courts, brief express : si l’agent arrive sans savoir où est le poste 4, vous le saurez au premier incident de file d’attente.",
    faq: [
      {
        q: "Comment briefer vite 20 renforts la veille d’un event ?",
        a: "Postes nommés, créneaux, consignes courtes sur mobile. Le brief n’est plus un PowerPoint oublié dans un groupe WA.",
      },
      {
        q: "Les vacations event se facturent comment ?",
        a: "Comme du réalisé pointé — utile quand les créneaux glissent. Voir aussi facturation gardiennage.",
      },
      {
        q: "Différence avec BTP chantier ?",
        a: "Event = pic court + renforts. BTP = créneaux chantier / accès engins. Pages distinctes.",
      },
      {
        q: "Que journaliser pendant l’event ?",
        a: "Main courante des incidents (files, évacuation partielle, objets trouvés) rattachée au dispositif du jour.",
      },
      {
        q: "Pilote ?",
        a: "Un event moyen (pas le plus gros de l’année) pour valider brief + pointage + reporting.",
      },
    ],
  },
  coproprietes: {
    empathyH2: "Le syndic veut une preuve, pas une discussion de hall",
    empathyBody:
      "Présence en résidence, rondes parking, incidents : le conseil syndical tranche sur des faits. WhatsApp ne construit pas un dossier.",
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
        q: "Multi-résidences ?",
        a: "Traitez-les comme un portefeuille : voir aussi multi-sites. Chaque résidence garde ses consignes.",
      },
      {
        q: "Essai utile sur combien de résidences ?",
        a: "2–3 résidences « bruyantes » (celles qui appellent) suffisent à juger en 15 jours.",
      },
    ],
  },
  "planning-agents": {
    empathyH2: "Le trou de vacation se voit avant le client — ou trop tard",
    empathyBody:
      "Grille horaires, backups, alertes : un planning qui n’affiche pas les trous transforme chaque indisponibilité en crise de 21h.",
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
        q: "Par où piloter ?",
        a: "Une semaine complète sur 10 postes, avec règle « tout trou rouge traité avant 17h ».",
      },
    ],
  },
  "pointage-vacations": {
    empathyH2: "Sans pointage, la facture est une négociation",
    empathyBody:
      "Début/fin, écarts, heures supplémentaires : le réalisé terrain doit pouvoir se défendre face au donneur d’ordre et face à votre propre compta.",
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
        q: "Pilote ?",
        a: "Tous les postes nuit d’une semaine + revue des écarts le lundi matin avec l’exploitation.",
      },
    ],
  },
  "preuves-intervention": {
    empathyH2: "Le donneur d’ordre ne veut pas votre bonne foi — il veut le dossier",
    empathyBody:
      "Audit, réclamation, renew : les preuves (présence, ronde, incident) doivent tenir sur un écran, pas dans trois fils de discussion.",
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
        q: "Par où commencer ?",
        a: "Choisissez le client qui vous a déjà demandé un audit. Rejouez un mois typique et montrez le dossier.",
      },
    ],
  },
  "multi-sites": {
    empathyH2: "20 sites, 3 alertes critiques : lesquelles voyez-vous à 9h ?",
    empathyBody:
      "Sans vue portefeuille, vous managez au fil des coups de fil. Les retards et trous des sites secondaires pourrissent jusqu’au mail du grand compte.",
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
        q: "Pilote ?",
        a: "12–20 sites, une semaine, revue quotidienne des alertes — pas un big bang 200 sites.",
      },
    ],
  },
  "facturation-gardiennage": {
    empathyH2: "Fin de mois : si vous reconstruitsez les heures, vous perdez du cash ou de la confiance",
    empathyBody:
      "Heures pointées, majorations, écarts validés : la facture gardiennage doit sortir du réalisé, pas d’une négociation mémorielle avec le client.",
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
        q: "Par où piloter ?",
        a: "Un client, un mois, comparaison facture précédente vs réalisé pointé. L’écart parle tout seul.",
      },
    ],
  },
  "remplacer-excel": {
    empathyH2: "Excel + WhatsApp comme OS de sécurité, ça casse toujours au même endroit",
    empathyBody:
      "Versions de fichiers, messages contradictoires, aucune source de vérité pour le backup : le symptôme arrive un vendredi à 17h45.",
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
        q: "Essai ?",
        a: "15 jours sans CB — idéal pour un pilote borné, pas pour une migration théorique.",
      },
    ],
  },
  faq: {
    empathyH2: "Les questions qu’on vous pose avant de tenter l’essai",
    empathyBody:
      "Verticalité, CNAPS, mobile, prix, migration : mieux vaut des réponses franches que une landing opaque.",
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
        q: "Tarif et essai ?",
        a: "Dès 29,99 € HT/mois. Essai 15 jours sans CB. Détail sur /tarifs.",
      },
      {
        q: "Support ?",
        a: "Équipe francophone, basée en Occitanie — on parle vacations et sites, pas jargon « field service ».",
      },
    ],
  },
  "guide-organiser-vacations": {
    empathyH2: "Publier une vacation, ce n’est pas envoyer un créneau dans un chat",
    empathyBody:
      "Méthode en étapes : inventaire postes → titulaire/backup → consignes → publication → pointage → revue. Sans ça, chaque semaine est une improvisation.",
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
        q: "Et après le guide ?",
        a: "Passez au planning agents et au pointage — la méthode devient quotidienne.",
      },
    ],
  },
  "toulouse-occitanie": {
    empathyH2: "Un essai sur vos sites du 31, pas une démo hors-sol",
    empathyBody:
      "Sociétés de sécurité toulousaines / occitanes : support joignable, cas locaux, prise en main sur de vrais postes — le cloud n’empêche pas l’accompagnement humain.",
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
        q: "Tarif identique ?",
        a: "Oui, grille publique. L’essai 15 jours reste le même.",
      },
      {
        q: "Comment démarrer depuis Toulouse ?",
        a: "Choisissez 8 postes locaux, lancez l’essai, planifiez un point avec le support après une semaine réelle.",
      },
    ],
  },
  "astreinte-nuit": {
    empathyH2: "2h17 : l’alerte ne peut pas attendre le briefing du lundi",
    empathyBody:
      "Escalade, relève, consignes de nuit : l’astreinte se juge dans l’heure, pas dans le reporting du mois.",
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
        q: "Pilote nuit ?",
        a: "Une semaine de nuits sur 2–3 sites, avec au moins un test d’escalade documenté.",
      },
    ],
  },
  "pme-entreprises": {
    empathyH2: "Une PME cliente veut un site tenu, pas un discours sécurité",
    empathyBody:
      "Poste d’accueil, rondes parking, horaires bureau : le besoin est simple, la preuve doit l’être aussi.",
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
        q: "Essai ?",
        a: "2–3 sites PME sur 15 jours suffisent à valider le rythme.",
      },
    ],
  },
  "grands-comptes": {
    empathyH2: "Le reporting cadre arrive le lundi — prêt ou bricolé",
    empathyBody:
      "SLA, multi-sites, preuves consolidées : un grand compte ne négocie pas votre organisation interne. Il lit le dossier.",
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
  },
  "contrats-cadres": {
    empathyH2: "Un cadre sans exécution tracée, c’est un renew fragile",
    empathyBody:
      "Volumes, sites, preuves, écarts : le renew se joue sur l’historique d’exécution, pas sur le PDF signé il y a deux ans.",
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
        q: "Par où commencer ?",
        a: "Le contrat qui renew dans les 90 jours. Reconstituez un mois type proprement — ça fixe le standard.",
      },
    ],
  },
  "petites-societes": {
    empathyH2: "Petite structure : moins de monde, zéro marge pour le flou",
    empathyBody:
      "8–25 agents, le gérant fait encore le planning : Excel le soir, WhatsApp le week-end. L’outil doit alléger, pas créer une usine.",
    faq: [
      {
        q: "On est une petite société : ce n’est pas trop lourd ?",
        a: "L’angle est simplicité : vacations, backups, pointage, facture. Pas un module forest pour 200 sites le jour 1.",
      },
      {
        q: "Tarif accessible ?",
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
        q: "Pilote ?",
        a: "Tous vos postes sur 15 jours — à cette taille, le pilote peut être global.",
      },
    ],
  },
  "controle-acces-consignes": {
    empathyH2: "Si le backup n’a pas lu les consignes, l’accès est un risque",
    empathyBody:
      "Listes, horaires, exceptions, zones interdites : le contrôle d’accès commence par un brief lisible, pas par un classeur au PC.",
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
        q: "Lien sûreté sites ?",
        a: "Complémentaire : sûreté = cadre présence ; ici = consignes / accès actionnables.",
      },
      {
        q: "Mise à jour fréquente des listes ?",
        a: "Le brief doit pouvoir changer sans renvoyer un mail à 40 agents. C’est le point faible du PDF.",
      },
    ],
  },
  "main-courante": {
    empathyH2: "Un incident non saisi est un incident contestable",
    empathyBody:
      "Tag, intrusion, malaise, litige : la main courante transforme le terrain en rapport client — horodaté, rattaché au site et à la vacation.",
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
        q: "Pilote ?",
        a: "Un site, obligation de saisir tout incident une semaine, revue exploitation chaque matin.",
      },
    ],
  },
  ssiap: {
    empathyH2: "Un poste SSIAP mal affecté, ce n’est pas « un détail RH »",
    empathyBody:
      "Compétence et poste doivent coller. L’outil aide à organiser l’affectation et la traçabilité — sans se substituer à vos obligations.",
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
        q: "Lien page agents ?",
        a: "Les compétences vivent côté agents ; SSIAP insiste sur l’adéquation poste/profil.",
      },
      {
        q: "Reporting client sur ces postes ?",
        a: "Présence + incidents + preuves comme ailleurs — avec la vigilance compétence en plus côté exploitation.",
      },
      {
        q: "Par où commencer ?",
        a: "Inventoriez vos postes à exigence particulière, rattachez les profils, testez une semaine d’affectations.",
      },
    ],
  },
  "sites-sensibles": {
    empathyH2: "Brief renforcé, preuves renforcées — le flou ne passe pas",
    empathyBody:
      "Accès restreints, consignes dures, reporting exigeant : un site sensible se pilote avec une discipline de preuve, pas avec le même standard qu’un parking banal.",
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
        q: "Escalade incident ?",
        a: "Main courante + astreinte si besoin. Le chemin d’escalade doit être dans les consignes.",
      },
      {
        q: "Pilote ?",
        a: "Le site le plus exigeant de votre portefeuille — si ça tient là, le modèle est bon.",
      },
    ],
  },
  "btp-chantiers": {
    empathyH2: "Un chantier BTP change d’accès chaque semaine — le planning doit suivre",
    empathyBody:
      "Créneaux, engins, zones : le gardiennage chantier n’est pas un poste fixe annuel. Si l’agent arrive sur un accès fermé, c’est votre organisation qui a glissé.",
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
        q: "Pilote ?",
        a: "Un chantier actif sur 2 semaines, y compris un changement d’accès documenté.",
      },
    ],
  },
  "pc-securite": {
    empathyH2: "Le PC qui « demande sur le groupe » n’est pas un PC",
    empathyBody:
      "Dispatch, vue sites, escalades : le PC a besoin d’une vérité temps réel des vacations et alertes — pas d’un collage de captures d’écran.",
    faq: [
      {
        q: "Que doit voir un opérateur PC en un coup d’œil ?",
        a: "Postes couverts / trous, alertes nuit, incidents ouverts, sites prioritaires. Ensuite le détail.",
      },
      {
        q: "Lien multi-sites ?",
        a: "Le PC supervise ; le portefeuille multi-sites structure. Les deux se renforcent.",
      },
      {
        q: "Remplace-t-on une hypervision vidéo ?",
        a: "Non. PROGESTI porte l’organisation vacations / preuves / dispatch humain — pas le mur d’images.",
      },
      {
        q: "Astreinte et PC ?",
        a: "L’escalade nuit peut remonter au PC ou à l’astreinte selon votre modèle — l’alerte doit être unique et claire.",
      },
      {
        q: "Pilote PC ?",
        a: "Une plage de supervision réelle (soirée ou week-end) sur un sous-ensemble de sites.",
      },
    ],
  },
  "vacation-non-pourvue": {
    empathyH2: "Le trou de vacation est une course contre la montre — pas un mail du lundi",
    empathyBody:
      "Alerte, backup, brief : chaque minute compte avant la prise de poste. Si vous découvrez le trou quand le client appelle, c’est déjà perdu.",
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
  },
  "remplacement-urgence": {
    empathyH2: "17h45, titulaire down : le remplacement se joue maintenant",
    empathyBody:
      "Trouver la relève, briefer, confirmer : le remplacement d’urgence est un geste d’exploitation chronométré, pas un espoir dans un groupe WA.",
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
        q: "Pilote ?",
        a: "Simulez un remplacement sur un poste réel (avec agent prévenu) pour chronométrer le process.",
      },
    ],
  },
  "reporting-client": {
    empathyH2: "Le reporting client du lundi se prépare toute la semaine — ou se bricole à 23h",
    empathyBody:
      "Couverture, incidents, écarts : si les preuves vivent au fil de l’eau, le rapport part en extraction. Sinon c’est une nuit blanche avant le comité.",
    faq: [
      {
        q: "Que contient un reporting client exploitable ?",
        a: "Vacations tenues vs prévues, incidents main courante, écarts de pointage validés, preuves de ronde si exigées — sur la période demandée.",
      },
      {
        q: "Différence avec preuves d’intervention ?",
        a: "Preuves = dossier d’un fait. Reporting = consolidation périodique pour le donneur d’ordre.",
      },
      {
        q: "Grands comptes vs PME ?",
        a: "Même base de faits ; le grand compte exige souvent plus de consolidation multi-sites.",
      },
      {
        q: "Qui génère le rapport ?",
        a: "L’exploitation / le chargé de compte. L’outil fournit les données ; vous choisissez le format client.",
      },
      {
        q: "Pilote ?",
        a: "Un client, un cycle de reporting complet (semaine ou mois), sans Excel parallèle.",
      },
    ],
  },
  "week-end-jours-feries": {
    empathyH2: "Week-end et fériés : les trous coûtent plus cher — et se voient plus",
    empathyBody:
      "Majorations, disponibilités rares, sites ouverts : si le planning férié est flou le jeudi, vous le paierez samedi matin.",
    faq: [
      {
        q: "Comment anticiper les vacations fériées sans stress du vendredi ?",
        a: "Publiez tôt, nommez backups, vérifiez les trous rouges avant la veille. Les majorations suivent le réalisé pointé.",
      },
      {
        q: "Lien avec astreinte nuit ?",
        a: "Souvent cumulé le week-end. Astreinte = escalade ; ici = couverture calendaire spéciale.",
      },
      {
        q: "Agents qui refusent les fériés ?",
        a: "Le vivier et les compétences aident à trouver qui peut. Le trou doit rester visible, pas caché.",
      },
      {
        q: "Facturation des majorations ?",
        a: "Si le réalisé et les règles sont captés, la facture peut suivre. Sinon le férié se « perd » dans la négociation.",
      },
      {
        q: "Pilote ?",
        a: "Un week-end + un jour férié sur 5–8 postes critiques.",
      },
    ],
  },
  "heures-contestees": {
    empathyH2: "Heures contestées : sans pointage, c’est votre parole contre la sienne",
    empathyBody:
      "Client ou agent : le différend sur les heures se tranche avec un historique, pas avec un souvenir de vacation.",
    faq: [
      {
        q: "Que montrer en cas de contestation client sur 2h ?",
        a: "Pointages début/fin, validations exploitation, éventuelle main courante. Chronologie > discussion.",
      },
      {
        q: "Et si c’est l’agent qui conteste sa vacation ?",
        a: "Même base : horodatages et affectation. Utile aussi pour la paie interne.",
      },
      {
        q: "Lien facturation ?",
        a: "Les heures validées alimentent la facture. Les contestations se traitent avant l’émission idéalement.",
      },
      {
        q: "Délai pour répondre à une contestation ?",
        a: "Minutes si le dossier existe. Demi-journée si vous reconstruisez WhatsApp — signal que le process manque.",
      },
      {
        q: "Pilote ?",
        a: "Une semaine de pointage strict + revue des écarts avec l’exploitation.",
      },
    ],
  },
  "chef-exploitation": {
    empathyH2: "Le chef d’exploitation vit dans les alertes — pas dans les slides",
    empathyBody:
      "Trous, remplacements, preuves, reporting : son outil doit prioriser ce qui brûle aujourd’hui, pas afficher un dashboard décoratif.",
    faq: [
      {
        q: "Que doit voir un chef d’explo à 9h et à 17h ?",
        a: "9h : incidents nuit + écarts pointage. 17h : trous de vacation nuit / lendemain encore rouges. Deux rituels, une source de vérité.",
      },
      {
        q: "Différence avec le pilier logiciel ?",
        a: "Le pilier parle au dirigeant / flux global. Ici l’angle est le quotidien du chef d’exploitation.",
      },
      {
        q: "Combien d’écrans différents doit-il ouvrir ?",
        a: "L’idéal : planning + alertes + preuves sans reconstruire trois Excel. Moins de bascules = moins d’oublis.",
      },
      {
        q: "Délégation aux chefs de site / PC ?",
        a: "Oui via PC sécurité / multi-sites. Le chef d’explo garde la priorisation.",
      },
      {
        q: "Pilote ?",
        a: "Deux semaines où le chef d’explo n’utilise plus Excel pour les alertes du jour — mesurez le temps récupéré.",
      },
    ],
  },
};

function replaceFieldArray(src, key, fieldName, newLiteral) {
  const keyToken = `key: "${key}"`;
  const kIdx = src.indexOf(keyToken);
  if (kIdx < 0) {
    console.warn("key manquante:", key);
    return src;
  }
  const nextId = src.slice(kIdx + keyToken.length).search(/\n\s+id: "SEC-/);
  const endIdx = nextId < 0 ? src.length : kIdx + keyToken.length + nextId;
  const slice = src.slice(kIdx, endIdx);
  const fieldToken = `${fieldName}:`;
  const fIdx = slice.indexOf(fieldToken);
  if (fIdx < 0) {
    console.warn(`champ ${fieldName} manquant:`, key);
    return src;
  }
  const absF = kIdx + fIdx;
  const after = src.slice(absF + fieldToken.length);
  const bracketOrQuote = after.search(/[\[`"]/);
  // for string fields like empathyBody we handle separately
  return { absF, after, startSearch: absF + fieldToken.length };
}

function replaceArrayField(src, key, fieldName, arrayLiteral) {
  const keyToken = `key: "${key}"`;
  const kIdx = src.indexOf(keyToken);
  if (kIdx < 0) return src;
  const nextId = src.slice(kIdx + keyToken.length).search(/\n\s+id: "SEC-/);
  const endIdx = nextId < 0 ? src.length : kIdx + keyToken.length + nextId;
  const slice = src.slice(kIdx, endIdx);
  const fieldToken = `${fieldName}:`;
  const fIdx = slice.indexOf(fieldToken);
  if (fIdx < 0) return src;
  const absF = kIdx + fIdx;
  const after = src.slice(absF + fieldToken.length);
  const b = after.search(/\[/);
  if (b < 0) return src;
  const start = absF + fieldToken.length + b;
  let depth = 0;
  let i = start;
  for (; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }
  return src.slice(0, start) + arrayLiteral + src.slice(i);
}

function replaceStringField(src, key, fieldName, value) {
  const keyToken = `key: "${key}"`;
  const kIdx = src.indexOf(keyToken);
  if (kIdx < 0) return src;
  const nextId = src.slice(kIdx + keyToken.length).search(/\n\s+id: "SEC-/);
  const endIdx = nextId < 0 ? src.length : kIdx + keyToken.length + nextId;
  const before = src.slice(0, kIdx);
  let block = src.slice(kIdx, endIdx);
  const after = src.slice(endIdx);
  const re = new RegExp(`${fieldName}:\\s*\`[\\s\\S]*?\`|${fieldName}:\\s*"[^"]*"`);
  const lit = value.includes("\n") || value.includes('"')
    ? `${fieldName}: ${JSON.stringify(value)}`
    : `${fieldName}: ${JSON.stringify(value)}`;
  if (!re.test(block)) {
    console.warn(`string field ${fieldName} introuvable`, key);
    return src;
  }
  block = block.replace(re, lit);
  return before + block + after;
}

function fmtFaq(faq) {
  return `[
${faq
  .map(
    (f) => `      {
        q: ${JSON.stringify(f.q)},
        a: ${JSON.stringify(f.a)},
      },`,
  )
  .join("\n")}
    ]`;
}

let n = 0;
for (const file of SPEC_FILES) {
  const specsPath = path.join(secDir, file);
  if (!fs.existsSync(specsPath)) {
    console.warn("missing", file);
    continue;
  }
  let src = fs.readFileSync(specsPath, "utf8");
  let fileN = 0;
  for (const [key, pack] of Object.entries(PACK)) {
    if (!src.includes(`key: "${key}"`)) continue;
    src = replaceArrayField(src, key, "faq", fmtFaq(pack.faq));
    if (pack.empathyH2) src = replaceStringField(src, key, "empathyH2", pack.empathyH2);
    if (pack.empathyBody) src = replaceStringField(src, key, "empathyBody", pack.empathyBody);
    fileN++;
    n++;
  }
  fs.writeFileSync(specsPath, src);
  console.log(`${file}: ${fileN} pages`);
}
console.log(`SEC v4 total: ${n} pages (FAQ + empathy)`);

// Fix EV overlay meta leftovers
const evQ = path.join(root, "src", "lib", "marketing", "ev", "quality-v3.ts");
let ev = fs.readFileSync(evQ, "utf8");
ev = ev.replace(
  `body: "Cette page couvre le flux complet PME EV — pas un seul service. Si vous cherchez uniquement la tonte, les syndicats, ou la collectivité, les pages sœurs sont plus précises. Ici : replanif → pointage → preuve → facture."`,
  `body: "Le pilier regroupe le flux complet d’une PME EV : replanifier sous la pluie, pointer, prouver, facturer. Pour un intent ultra-ciblé (tonte seule, syndic, collectivité), ouvrez la page sœur — ici on tient la journée du gérant de bout en bout."`,
);
fs.writeFileSync(evQ, ev);
console.log("EV overlay: fix meta EV-01");
