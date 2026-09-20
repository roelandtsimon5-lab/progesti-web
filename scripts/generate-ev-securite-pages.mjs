/**
 * Génère docs/prompts-marketing-espace-vert-securite.md
 * + configs TS + suivi validation pour les 50 pages EV / Sécurité.
 * Exécuter: node scripts/generate-ev-securite-pages.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..");

const sharedConstraints = `
**Charte graphique (non négociable)**
- Tokens: navy #012939, chrome #011B25, lime #A8E300, paper #FAFAFA, warm #F6F8F9, line #E4E8EB, slate #5C6B73
- Radius 2–3px, font Inter / font-display existant, pas de purple / glow / cards inutiles
- Réutiliser \`IndustryLanding\` + \`mergeIndustryConfig\` + CTAs \`cta.trial\` / \`cta.demo\`

**SEO technique**
- \`pageMeta\` (canonical + OG), \`SoftwareApplicationLd\`, \`FaqPageLd\`
- Maillage interne vers hub verticale + 2–3 pages sœurs + \`/tarifs\` + \`/essai-gratuit\`
- Ajouter l’URL au \`sitemap.ts\` (organique)
- Ton humain, métier, pas de blabla IA ; faits prix/essai depuis \`site.ts\` / \`trialCopy\`
- **NE PAS fusionner** avec la verticale nettoyage (\`/solutions/*\` propreté reste séparée)
`.trim();

/** @typedef {{ id: string, vertical: 'ev'|'sec', slug: string, path: string, type: string, primary: string, secondary: string[], h1: string, metaTitle: string, metaDesc: string, sections: string[], angle: string, ctas: string[], differentiator: string, heroLead: string, heroH1: string, heroSub: string, empathyH2: string, empathyBody: string, showcaseTitle: string, showcaseSub: string, faq: {q:string,a:string}[] }} PageDef */

/** @type {PageDef[]} */
const ev = [
  {
    id: "EV-01",
    vertical: "ev",
    slug: "logiciel-espace-vert",
    path: "/logiciel-espace-vert",
    type: "pilier",
    primary: "logiciel espace vert",
    secondary: ["logiciel entretien espaces verts", "logiciel paysagiste", "gestion entreprise espace vert"],
    h1: "Logiciel pour entreprise d’espaces verts — planning, terrain, facture",
    metaTitle: "Logiciel espaces verts — planning & facturation | PROGESTI",
    metaDesc: "Pilotez tonte, entretien et équipes multi-sites : planning, pointage mobile, devis et factures. Essai gratuit sans CB.",
    sections: ["Hero SEO", "Empathie gérant EV", "Explorer modules (planning/pointage/factu)", "Preuves terrain", "Vs Excel/WhatsApp", "FAQ métier", "FinalPush"],
    angle: "Dirigeant d’entreprise d’espaces verts qui perd le fil entre chantiers, météo et absences. Ton terrain, concret, sans jargon SaaS.",
    ctas: ["Essai gratuit", "Voir une démo"],
    differentiator: "Pilier EV global — intent générique « logiciel espace vert », pas un service précis.",
    heroLead: "Logiciel pour entreprises d’espaces verts",
    heroH1: "du planning chantier à la facture, sans Excel ni WhatsApp",
    heroSub: "Tonte, entretien, élagage, multi-clients : affectez vos équipes, pointez sur site et facturez le réalisé — un seul outil.",
    empathyH2: "Vos semaines ressemblent à ça ?",
    empathyBody: "Lundi : replanning à cause de la pluie. Mardi : un salarié qui n’est pas au bon site. Mercredi : un syndic qui demande « qui est passé quand ». Vendredi : facturation au feeling. PROGESTI remet de l’ordre — planning, preuves, facture.",
    showcaseTitle: "Une semaine d’espaces verts lisible",
    showcaseSub: "Sites, fréquences saisonnières, agents et statuts — sans tableur parallèle.",
    faq: [
      { q: "PROGESTI est-il conçu pour les espaces verts ?", a: "Oui. Le même socle planning / pointage / facturation s’adapte aux entreprises d’entretien d’espaces verts et de paysagisme : multi-sites, récurrences et preuves terrain." },
      { q: "Combien ça coûte ?", a: "Dès 29,99 € HT/mois, tous modules inclus. Essai gratuit sans carte bancaire." },
      { q: "Mes agents peuvent-ils pointer sur mobile ?", a: "Oui — app Android/iOS, arrivée/départ, historique remonté au bureau." },
      { q: "Peut-on gérer des fréquences saisonnières ?", a: "Oui. Vous définissez les récurrences par site (hebdo, bihebdo, mensuel…) et ajustez selon la saison." },
      { q: "Faut-il un outil séparé pour la facturation ?", a: "Non. Le réalisé alimente la facturation sans ressaisie." },
      { q: "Support en France ?", a: "Oui — équipe joignable, basée à Toulouse (31)." },
    ],
  },
  {
    id: "EV-02",
    vertical: "ev",
    slug: "hub",
    path: "/espace-vert",
    type: "hub",
    primary: "solutions espaces verts PROGESTI",
    secondary: ["logiciel entretien espaces verts", "pages métier paysagisme"],
    h1: "Espaces verts — toutes les solutions PROGESTI",
    metaTitle: "Espaces verts — logiciel gestion & entretien | PROGESTI",
    metaDesc: "Hub solutions espaces verts : entretien, paysagisme, planning équipes, syndics, collectivités. Pages métier et essai gratuit.",
    sections: ["Hero hub", "Grille pages filles", "Pour qui", "CTA essai", "Maillage pilier"],
    angle: "Page index claire : orienter vers la bonne intention (service, audience, process).",
    ctas: ["Essai gratuit", "Logiciel espaces verts"],
    differentiator: "Hub navigation EV — pas de cannibalisation SEO sur un service.",
    heroLead: "Solutions espaces verts",
    heroH1: "choisissez la page qui parle de votre métier",
    heroSub: "Entretien, paysagisme, syndic, collectivité ou process : chaque page traite un angle précis — sans mélanger avec la propreté.",
    empathyH2: "Un métier, plusieurs façons de chercher",
    empathyBody: "Vous ne cherchez pas tous la même chose : tonte récurrente, devis élagage, reporting syndic, planning saisonnier. Ce hub pointe vers la bonne page.",
    showcaseTitle: "Parcours typiques",
    showcaseSub: "Du besoin métier à l’essai en quelques clics.",
    faq: [
      { q: "Par où commencer ?", a: "Si vous cherchez un logiciel global, ouvrez la page pilier. Sinon choisissez votre service ou votre type de client." },
      { q: "C’est séparé du nettoyage ?", a: "Oui. Les pages espaces verts sont une verticale dédiée, non fusionnée avec les solutions propreté." },
      { q: "Y a-t-il un essai ?", a: "Oui — essai gratuit sans CB." },
      { q: "Prix ?", a: "À partir de 29,99 € HT/mois tout inclus." },
    ],
  },
  {
    id: "EV-03",
    vertical: "ev",
    slug: "entretien-espaces-verts",
    path: "/espace-vert/entretien-espaces-verts",
    type: "service",
    primary: "logiciel entretien espaces verts",
    secondary: ["gestion entretien espaces verts", "planning entretien espaces verts"],
    h1: "Logiciel d’entretien d’espaces verts — passages & preuves",
    metaTitle: "Logiciel entretien espaces verts | PROGESTI",
    metaDesc: "Organisez l’entretien récurrent : sites, fréquences, pointage et preuves pour vos clients. Essai gratuit.",
    sections: ["Hero", "Douleurs entretien récurrent", "Modules utiles", "Preuves client", "FAQ", "CTA"],
    angle: "Focus entretien récurrent (pas création paysagère).",
    ctas: ["Essai gratuit", "Demander une démo"],
    differentiator: "Intent « entretien » récurrent vs paysagisme / tonte seule.",
    heroLead: "Logiciel entretien espaces verts",
    heroH1: "pour tenir les passages sans oublier un site",
    heroSub: "Contrats d’entretien, fréquences, équipes terrain : planifiez, pointez, prouvez — puis facturez.",
    empathyH2: "L’entretien se juge sur la régularité",
    empathyBody: "Un site oublié, une fréquence mal suivie, et le client le voit avant vous. Centralisez sites et passages pour ne plus piloter au WhatsApp.",
    showcaseTitle: "Passages d’entretien sous contrôle",
    showcaseSub: "Statuts, historiques et équipes visibles.",
    faq: [
      { q: "Gère-t-on des fréquences différentes par site ?", a: "Oui — quotidien, hebdo, mensuel… configurables site par site." },
      { q: "Comment prouver un passage ?", a: "Pointage horodaté et historique consultable." },
      { q: "Facturation des contrats d’entretien ?", a: "Oui, alignée sur le réalisé." },
      { q: "Essai ?", a: "Gratuit, sans CB." },
    ],
  },
  {
    id: "EV-04",
    vertical: "ev",
    slug: "paysagisme",
    path: "/espace-vert/paysagisme",
    type: "service",
    primary: "logiciel paysagiste",
    secondary: ["logiciel entreprise paysagisme", "gestion chantier paysager"],
    h1: "Logiciel paysagiste — devis, chantiers, facturation",
    metaTitle: "Logiciel paysagiste — chantiers & devis | PROGESTI",
    metaDesc: "Devis, planning chantiers paysagers, preuves et factures. Pour entreprises de paysagisme. Essai gratuit.",
    sections: ["Hero", "Flux devis→chantier→facture", "Différence entretien", "Modules", "FAQ", "CTA"],
    angle: "Chantiers / aménagement (ponctuel) vs entretien récurrent.",
    ctas: ["Essai gratuit", "Voir tarifs"],
    differentiator: "Paysagisme / aménagement — pas entretien récurrent.",
    heroLead: "Logiciel pour paysagistes",
    heroH1: "devis clair, chantier suivi, facture rapide",
    heroSub: "Aménagements et chantiers ponctuels : organisez les équipes, documentez le livré, facturez sans double saisie.",
    empathyH2: "Le chantier paysager ne pardonne pas le flou",
    empathyBody: "Devis Word, planning SMS, photos sur le téléphone du chef d’équipe : à la livraison, tout le monde reconstruit. Unifiez le flux.",
    showcaseTitle: "Du devis signé à la livraison",
    showcaseSub: "Commercial et terrain sur la même base.",
    faq: [
      { q: "Convient aux chantiers ponctuels ?", a: "Oui — devis, planning one-shot et facturation." },
      { q: "Preuves photos ?", a: "Historique et preuves liées aux interventions." },
      { q: "Différence avec l’entretien ?", a: "Cette page cible l’aménagement / chantiers ; l’entretien a sa page dédiée." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "EV-05",
    vertical: "ev",
    slug: "tonte-pelouse",
    path: "/espace-vert/tonte-pelouse",
    type: "service",
    primary: "logiciel tonte pelouse entreprise",
    secondary: ["planning tonte espaces verts", "gestion tontes multi-sites"],
    h1: "Planning tonte multi-sites — sans oublier une pelouse",
    metaTitle: "Logiciel planning tonte pelouse multi-sites | PROGESTI",
    metaDesc: "Planifiez les tontes par site et fréquence, pointez le terrain, facturez. Essai gratuit.",
    sections: ["Hero", "Saisonnalité tonte", "Planning densifié", "Pointage", "FAQ", "CTA"],
    angle: "Volume élevé, récurrence courte, pression saisonnière.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Focus tonte haute fréquence — pas élagage ni désherbage.",
    heroLead: "Planning tonte pelouse",
    heroH1: "pour enchaîner les sites sans perdre une vacation",
    heroSub: "Haute saison : densifiez les tournées, suivez qui a tondu quoi, gardez la preuve pour le client.",
    empathyH2: "En mai, le chaos se voit sur la pelouse",
    empathyBody: "Quand la pousse accélère, Excel et le groupe WhatsApp explosent. Un planning sites + agents tient la cadence.",
    showcaseTitle: "Tournées de tonte lisibles",
    showcaseSub: "Fréquences, titulaires, backups.",
    faq: [
      { q: "Peut-on densifier en haute saison ?", a: "Oui — ajustez fréquences et affectations sans tout reconstruire." },
      { q: "Preuve de tonte ?", a: "Pointage et historique par site." },
      { q: "Multi-villes ?", a: "Oui, multi-sites natif." },
      { q: "Essai ?", a: "Sans CB." },
    ],
  },
  {
    id: "EV-06",
    vertical: "ev",
    slug: "elagage",
    path: "/espace-vert/elagage",
    type: "service",
    primary: "logiciel élagueur",
    secondary: ["gestion chantier élagage", "devis élagage entreprise"],
    h1: "Logiciel élagage — devis, équipes, preuves chantier",
    metaTitle: "Logiciel élagueur — devis & chantiers | PROGESTI",
    metaDesc: "Pilotez devis d’élagage, planning équipes et preuves avant/après. Essai gratuit.",
    sections: ["Hero", "Chantiers à risque / accès", "Devis", "Preuves", "FAQ", "CTA"],
    angle: "Prestations spécialisées, souvent ponctuelles, accès et sécurité chantier.",
    ctas: ["Essai gratuit", "Contact"],
    differentiator: "Élagage spécialisé — pas tonte ni entretien général.",
    heroLead: "Logiciel pour élagueurs",
    heroH1: "chantiers cadrés, devis suivis, preuves propres",
    heroSub: "Organisez les interventions d’élagage : équipes, créneaux, accès site, documentation et facturation.",
    empathyH2: "L’élagage, ce n’est pas une tonte de plus",
    empathyBody: "Accès, matériel, durée, preuves avant/après : le client et l’assureur veulent du carré. Centralisez.",
    showcaseTitle: "Chantier d’élagage suivi bout en bout",
    showcaseSub: "Devis → exécution → facture.",
    faq: [
      { q: "Pour prestations ponctuelles ?", a: "Oui." },
      { q: "Infos d’accès sur mobile ?", a: "Oui, fiche site." },
      { q: "Facturation après chantier ?", a: "Oui, depuis le réalisé." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "EV-07",
    vertical: "ev",
    slug: "desherbage",
    path: "/espace-vert/desherbage",
    type: "service",
    primary: "logiciel désherbage entreprise",
    secondary: ["planning désherbage", "entretien voiries espaces verts"],
    h1: "Désherbage & entretien des abords — planning multi-sites",
    metaTitle: "Logiciel désherbage & abords | PROGESTI",
    metaDesc: "Planifiez désherbage et entretien des abords, suivez les passages, facturez. Essai gratuit.",
    sections: ["Hero", "Contrats collectivité/pro", "Récurrences", "Preuves", "FAQ", "CTA"],
    angle: "Prestations souvent liées voiries / abords / contraintes environnementales.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Désherbage / abords — intent distinct de tonte et élagage.",
    heroLead: "Logiciel désherbage & abords",
    heroH1: "pour tenir les tournées et les preuves",
    heroSub: "Zones, fréquences, équipes : organisez le désherbage comme un vrai contrat, pas comme une liste papier.",
    empathyH2: "Le désherbage se voit… quand il n’est pas fait",
    empathyBody: "Clients et collectivités jugent sur le rendu. Un oubli de zone = réclamation. Structurez sites et passages.",
    showcaseTitle: "Tournées de désherbage tracées",
    showcaseSub: "Qui, où, quand — historisé.",
    faq: [
      { q: "Zones par site ?", a: "Oui, structurez sites et zones." },
      { q: "Reporting client ?", a: "Historique de passages disponible." },
      { q: "Essai ?", a: "Gratuit sans CB." },
      { q: "Support ?", a: "FR, téléphone affiché sur le site." },
    ],
  },
  {
    id: "EV-08",
    vertical: "ev",
    slug: "arrosage-irrigation",
    path: "/espace-vert/arrosage-irrigation",
    type: "service",
    primary: "logiciel arrosage espaces verts",
    secondary: ["gestion irrigation entretien", "passages arrosage"],
    h1: "Arrosage & irrigation — planifier les passages d’entretien",
    metaTitle: "Logiciel arrosage & irrigation espaces verts | PROGESTI",
    metaDesc: "Planifiez contrôles d’arrosage et passages irrigation, pointez, facturez. Essai gratuit.",
    sections: ["Hero", "Contrôles récurrents", "Saison sèche", "Preuves", "FAQ", "CTA"],
    angle: "Maintenance / contrôles plutôt que pose seule.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Irrigation / arrosage — niche saisonnière distincte.",
    heroLead: "Passages arrosage & irrigation",
    heroH1: "contrôles planifiés, terrain tracé",
    heroSub: "Programmez les contrôles et interventions d’arrosage, suivez qui est intervenu, gardez l’historique client.",
    empathyH2: "En période sèche, chaque oubli coûte cher",
    empathyBody: "Un automatisme en panne, une zone oubliée : le client appelle. Anticipez avec un planning de contrôles.",
    showcaseTitle: "Contrôles d’arrosage au planning",
    showcaseSub: "Récurrences et preuves.",
    faq: [
      { q: "Adapté à la maintenance ?", a: "Oui — passages récurrents et ponctuels." },
      { q: "Mobile terrain ?", a: "Oui." },
      { q: "Facturation ?", a: "Alignée sur le réalisé." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "EV-09",
    vertical: "ev",
    slug: "collectivites",
    path: "/espace-vert/collectivites",
    type: "audience",
    primary: "logiciel espaces verts collectivités",
    secondary: ["entretien espaces verts mairie", "gestion marchés publics espaces verts"],
    h1: "Espaces verts pour collectivités — planning & reporting",
    metaTitle: "Logiciel espaces verts collectivités | PROGESTI",
    metaDesc: "Marchés et contrats collectivités : multi-sites, preuves de passages, facturation. Essai gratuit.",
    sections: ["Hero", "Contraintes collectivité", "Preuves / reporting", "Multi-sites", "FAQ", "CTA"],
    angle: "Donneur d’ordre public / semi-public, besoin de traçabilité.",
    ctas: ["Essai gratuit", "Parler à un humain"],
    differentiator: "Audience collectivités — pas syndic ni entreprise privée.",
    heroLead: "Espaces verts & collectivités",
    heroH1: "tenir le marché avec des preuves, pas des promesses",
    heroSub: "Parcs, voiries végétalisées, sites municipaux : planifiez les équipes et documentez les passages.",
    empathyH2: "Le marché se joue aussi sur le reporting",
    empathyBody: "Quand on demande des comptes, vous devez répondre vite. Historique et pointages battent le classeur.",
    showcaseTitle: "Reporting prêt pour la collectivité",
    showcaseSub: "Passages et sites historisés.",
    faq: [
      { q: "Multi-sites municipaux ?", a: "Oui." },
      { q: "Preuves pour contrôles ?", a: "Oui — pointages et historique." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Accompagnement ?", a: "Support FR disponible." },
    ],
  },
  {
    id: "EV-10",
    vertical: "ev",
    slug: "syndics-coproprietes",
    path: "/espace-vert/syndics-coproprietes",
    type: "audience",
    primary: "entretien espaces verts syndic",
    secondary: ["espaces verts copropriété logiciel", "prestataire syndic paysagiste"],
    h1: "Espaces verts pour syndics & copropriétés",
    metaTitle: "Espaces verts syndics & copropriétés | PROGESTI",
    metaDesc: "Entretien d’espaces verts en copro : planning multi-immeubles, preuves pour le syndic. Essai gratuit.",
    sections: ["Hero", "Attentes syndic", "Preuves", "Multi-immeubles", "FAQ", "CTA"],
    angle: "Prestataire EV face au syndic (distinct de page nettoyage syndics).",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Audience syndic côté EV — ne pas confondre avec /solutions/syndics (propreté).",
    heroLead: "Espaces verts en copropriété",
    heroH1: "passages tenus, syndic rassuré",
    heroSub: "Pelouses, haies, massifs : organisez les interventions et gardez les preuves pour le conseil syndical.",
    empathyH2: "Le syndic veut des faits",
    empathyBody: "« Qui est passé mardi ? » — si la réponse met 20 minutes, vous perdez la confiance. Ayez l’historique sous la main.",
    showcaseTitle: "Preuves prêtes pour le syndic",
    showcaseSub: "Immeubles, passages, historique.",
    faq: [
      { q: "Plusieurs copros ?", a: "Oui, multi-sites." },
      { q: "Différent du nettoyage parties communes ?", a: "Oui — verticale espaces verts dédiée." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
      { q: "Essai ?", a: "15 jours typiquement selon offre affichée — sans CB." },
    ],
  },
  {
    id: "EV-11",
    vertical: "ev",
    slug: "entreprises-sites-prives",
    path: "/espace-vert/entreprises-sites-prives",
    type: "audience",
    primary: "entretien espaces verts entreprises",
    secondary: ["espaces verts sièges sociaux", "prestataire green facility"],
    h1: "Espaces verts pour entreprises & sites privés",
    metaTitle: "Entretien espaces verts entreprises | PROGESTI",
    metaDesc: "Sièges, campuses, parkings végétalisés : planning, pointage, facturation. Essai gratuit.",
    sections: ["Hero", "Contraintes accès/horaires", "Multi-sites pro", "Factu", "FAQ", "CTA"],
    angle: "Clients B2B privés (sièges, campuses).",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Audience entreprises privées — pas collectivité ni syndic.",
    heroLead: "Espaces verts sites d’entreprise",
    heroH1: "accès, créneaux, preuves — sans improvisation",
    heroSub: "Parkings, abords de bureaux, campus : respectez les contraintes d’accès et prouvez les passages.",
    empathyH2: "Le facility manager juge sur la régularité",
    empathyBody: "Un site mal tenu devant l’accueil, c’est visible. Structurez fréquences et équipes.",
    showcaseTitle: "Sites pro sous contrôle",
    showcaseSub: "Créneaux et preuves.",
    faq: [
      { q: "Horaires d’accès ?", a: "Créneaux configurables." },
      { q: "Codes d’accès ?", a: "Sur fiche site, visibles mobile." },
      { q: "Facturation cadre ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
    ],
  },
  {
    id: "EV-12",
    vertical: "ev",
    slug: "planning-equipes",
    path: "/espace-vert/planning-equipes",
    type: "process",
    primary: "planning équipes espaces verts",
    secondary: ["logiciel planning paysagiste", "affectation agents espaces verts"],
    h1: "Planning équipes espaces verts — multi-chantiers",
    metaTitle: "Planning équipes espaces verts | PROGESTI",
    metaDesc: "Affectez agents et chantiers EV, gérez absences et remplacements. Essai gratuit.",
    sections: ["Hero", "Douleurs planning", "Remplacements", "Vue semaine", "FAQ", "CTA"],
    angle: "Process planning (pas service métier).",
    ctas: ["Essai gratuit", "Voir planning nettoyage (maillage soft)"],
    differentiator: "Process planning EV — complementary to service pages.",
    heroLead: "Planning équipes espaces verts",
    heroH1: "qui est où, aujourd’hui et toute la semaine",
    heroSub: "Affectations, absences, backups : un planning terrain qui tient quand la météo ou un arrêt maladie débarque.",
    empathyH2: "Le planning EV change vite",
    empathyBody: "Pluie, urgence client, véhicule en panne : si tout est dans la tête du chef d’équipe, ça casse. Centralisez.",
    showcaseTitle: "Semaine d’équipes lisible",
    showcaseSub: "Sites × agents × statuts.",
    faq: [
      { q: "Remplacements ?", a: "Oui, au même endroit que le planning." },
      { q: "Vue mobile ?", a: "Oui pour le terrain." },
      { q: "Multi-équipes ?", a: "Oui." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "EV-13",
    vertical: "ev",
    slug: "pointage-terrain",
    path: "/espace-vert/pointage-terrain",
    type: "process",
    primary: "pointage agents espaces verts",
    secondary: ["télégestion espaces verts", "preuve passage paysagiste"],
    h1: "Pointage terrain espaces verts — preuves de passage",
    metaTitle: "Pointage terrain espaces verts | PROGESTI",
    metaDesc: "Pointage mobile des équipes EV, historique et preuves pour vos clients. Essai gratuit.",
    sections: ["Hero", "Fin des heures contestées", "Mobile", "Lien facturation", "FAQ", "CTA"],
    angle: "Process pointage / preuves.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Focus pointage EV — distinct planning et factu.",
    heroLead: "Pointage espaces verts",
    heroH1: "arrivée, départ, preuve — sans feuille papier",
    heroSub: "Vos équipes pointent sur mobile ; le bureau voit le réel. Moins de litiges, plus de sérénité.",
    empathyH2: "Les heures contestées mangent votre marge",
    empathyBody: "Sans pointage fiable, chaque fin de mois est une négociation. Le terrain doit remonter tout seul.",
    showcaseTitle: "Le terrain remonte en direct",
    showcaseSub: "Statuts et historiques.",
    faq: [
      { q: "Android / iOS ?", a: "Oui." },
      { q: "Géoloc ?", a: "Disponible si activée." },
      { q: "Utile pour le client ?", a: "Oui — preuve de passage." },
      { q: "Essai ?", a: "Sans CB." },
    ],
  },
  {
    id: "EV-14",
    vertical: "ev",
    slug: "devis-facturation",
    path: "/espace-vert/devis-facturation",
    type: "process",
    primary: "facturation entreprise espaces verts",
    secondary: ["devis paysagiste logiciel", "facture entretien espaces verts"],
    h1: "Devis & facturation espaces verts — sans double saisie",
    metaTitle: "Devis & facturation espaces verts | PROGESTI",
    metaDesc: "Devis pros, factures alignées sur le terrain EV. Essai gratuit.",
    sections: ["Hero", "Du devis au réalisé", "Impayés", "Marges", "FAQ", "CTA"],
    angle: "Process commercial / factu EV.",
    ctas: ["Essai gratuit", "Tarifs"],
    differentiator: "Focus devis/facture EV — pas planning.",
    heroLead: "Devis & factures espaces verts",
    heroH1: "facturez ce qui a été fait, pas ce dont vous vous souvenez",
    heroSub: "Reliez devis, interventions et factures. Moins d’oublis, trésorerie plus propre.",
    empathyH2: "La marge se perd entre le chantier et Word",
    empathyBody: "Heures non reprises, avenants oubliés, relances en retard : unifie commercial et ops.",
    showcaseTitle: "Du terrain à la facture",
    showcaseSub: "Sans retaper.",
    faq: [
      { q: "Devis professionnels ?", a: "Oui." },
      { q: "Facture depuis le réalisé ?", a: "Oui." },
      { q: "Impayés ?", a: "Suivi inclus." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois tout inclus." },
    ],
  },
  {
    id: "EV-15",
    vertical: "ev",
    slug: "saison-printemps",
    path: "/espace-vert/saison-printemps",
    type: "saisonnier",
    primary: "organisation entretien printemps espaces verts",
    secondary: ["planning haute saison espaces verts", "tonte printemps"],
    h1: "Haute saison espaces verts — tenir le printemps sans chaos",
    metaTitle: "Planning haute saison espaces verts (printemps) | PROGESTI",
    metaDesc: "Préparez densification des tournées au printemps : planning, équipes, preuves. Essai gratuit.",
    sections: ["Hero", "Pics de charge", "Densifier sans casser", "Checklist", "FAQ", "CTA"],
    angle: "Saisonnier printemps / haute pousse.",
    ctas: ["Essai gratuit", "Planning équipes"],
    differentiator: "Angle saisonnier printemps — vs automne/hiver.",
    heroLead: "Printemps espaces verts",
    heroH1: "absorber le pic sans perdre des sites",
    heroSub: "Quand tout pousse en même temps, le planning doit suivre. Densifiez fréquences et équipes proprement.",
    empathyH2: "Le printemps révèle les failles d’organisation",
    empathyBody: "Ce qui passait en hiver ne passe plus en mai. Anticipez plutôt que de courir après les réclamations.",
    showcaseTitle: "Semaine de haute saison maîtrisée",
    showcaseSub: "Fréquences ajustées, équipes couvertes.",
    faq: [
      { q: "Changer les fréquences facilement ?", a: "Oui." },
      { q: "Gérer les renforts saisonniers ?", a: "Affectations et planning centralisés." },
      { q: "Essai avant le pic ?", a: "Oui — idéal pour tester." },
      { q: "Support ?", a: "FR." },
    ],
  },
  {
    id: "EV-16",
    vertical: "ev",
    slug: "saison-automne-hiver",
    path: "/espace-vert/saison-automne-hiver",
    type: "saisonnier",
    primary: "entretien espaces verts hiver",
    secondary: ["ramassage feuilles planning", "entretien hivernal espaces verts"],
    h1: "Automne & hiver espaces verts — ramassage, taille, suivi",
    metaTitle: "Entretien espaces verts automne-hiver | PROGESTI",
    metaDesc: "Organisez ramassages, tailles et passages hors saison. Essai gratuit.",
    sections: ["Hero", "Activités hors pic", "Maintenir la cadence", "FAQ", "CTA"],
    angle: "Saison basse / travaux d’automne-hiver.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Saisonnier automne-hiver — complementary to printemps.",
    heroLead: "Automne & hiver espaces verts",
    heroH1: "garder le fil hors haute saison",
    heroSub: "Ramassage, tailles, contrôles : planifiez autrement, mais planifiez quand même.",
    empathyH2: "Hors saison ≠ sans organisation",
    empathyBody: "Les contrats continuent. Les équipes aussi. Un planning clair évite de « perdre » des sites entre deux pics.",
    showcaseTitle: "Planning hors saison lisible",
    showcaseSub: "Passages adaptés, preuves gardées.",
    faq: [
      { q: "Fréquences réduites ?", a: "Oui, ajustables." },
      { q: "Chantiers ponctuels hiver ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "EV-17",
    vertical: "ev",
    slug: "multi-sites",
    path: "/espace-vert/multi-sites",
    type: "probleme",
    primary: "gestion multi-sites espaces verts",
    secondary: ["logiciel multi-chantiers paysagiste", "portefeuille sites entretien"],
    h1: "Multi-sites espaces verts — un portefeuille sous contrôle",
    metaTitle: "Gestion multi-sites espaces verts | PROGESTI",
    metaDesc: "Pilotez un portefeuille de sites EV : fréquences, équipes, historique. Essai gratuit.",
    sections: ["Hero", "Douleur portefeuille", "Fiches sites", "Vision gérant", "FAQ", "CTA"],
    angle: "Problème multi-sites (scalabilité).",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Problème multi-sites — transversal aux services.",
    heroLead: "Multi-sites espaces verts",
    heroH1: "quand le carnet grossit, Excel craque",
    heroSub: "Centralisez clients, sites, accès et fréquences. Voyez l’activité sans assembler trois tableurs.",
    empathyH2: "Passer de 30 à 80 sites change tout",
    empathyBody: "Ce n’est plus « se souvenir ». C’est structurer. PROGESTI est fait pour ce passage d’échelle.",
    showcaseTitle: "Portefeuille de sites unifié",
    showcaseSub: "Une vérité pour le bureau et le terrain.",
    faq: [
      { q: "Limite de sites ?", a: "Conçu pour le multi-sites ; parlez-nous de votre volume en démo." },
      { q: "Accès différents par site ?", a: "Oui, fiche site." },
      { q: "Reporting global ?", a: "Tableaux de bord et historiques." },
      { q: "Essai ?", a: "Sans CB." },
    ],
  },
  {
    id: "EV-18",
    vertical: "ev",
    slug: "toulouse-occitanie",
    path: "/espace-vert/toulouse-occitanie",
    type: "local",
    primary: "logiciel espaces verts Toulouse",
    secondary: ["logiciel paysagiste Occitanie", "gestion entreprise espaces verts Haute-Garonne"],
    h1: "Logiciel espaces verts à Toulouse & en Occitanie",
    metaTitle: "Logiciel espaces verts Toulouse / Occitanie | PROGESTI",
    metaDesc: "Éditeur basé près de Toulouse. Planning, pointage, facturation pour entreprises EV d’Occitanie. Essai gratuit.",
    sections: ["Hero local", "Proximité support", "Cas d’usage région", "FAQ", "CTA"],
    angle: "Local SEO + proximité éditeur (Tournefeuille/Toulouse).",
    ctas: ["Essai gratuit", "Appeler"],
    differentiator: "Page géo Occitanie — unique angle local EV.",
    heroLead: "Espaces verts en Occitanie",
    heroH1: "un logiciel FR, une équipe près de Toulouse",
    heroSub: "Pour les entreprises d’entretien et de paysagisme de Toulouse et de la région : outil terrain + support joignable.",
    empathyH2: "Un éditeur qu’on peut joindre",
    empathyBody: "Pas un chatbot offshore. Une équipe en France, téléphone affiché, qui parle métier.",
    showcaseTitle: "Support et produit ancrés en France",
    showcaseSub: "Siège Tournefeuille (31).",
    faq: [
      { q: "Vous êtes où ?", a: "MSNE SAS — Tournefeuille (31), métropole toulousaine." },
      { q: "Démo en visio ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Uniquement Occitanie ?", a: "Non — France entière ; la page locale aide les recherches géo." },
    ],
  },
  {
    id: "EV-19",
    vertical: "ev",
    slug: "remplacer-excel",
    path: "/espace-vert/remplacer-excel",
    type: "probleme",
    primary: "remplacer Excel espaces verts",
    secondary: ["alternative WhatsApp planning paysagiste", "sortir tableur entretien EV"],
    h1: "Remplacer Excel & WhatsApp en espaces verts",
    metaTitle: "Remplacer Excel en espaces verts | PROGESTI",
    metaDesc: "Passez du tableur et des groupes WhatsApp à un vrai planning + pointage + factures. Essai gratuit.",
    sections: ["Hero", "Ce qui casse avec Excel", "Migration douce", "Avant/après", "FAQ", "CTA"],
    angle: "Problème outil (Excel/WhatsApp).",
    ctas: ["Essai gratuit", "Démo migration"],
    differentiator: "Intent « sortir d’Excel » EV — pas un service.",
    heroLead: "Fini Excel & WhatsApp",
    heroH1: "pour piloter vraiment vos espaces verts",
    heroSub: "Un fichier qui casse, un message perdu, une facture oubliée : basculez vers un outil métier.",
    empathyH2: "Excel a bien marché… jusqu’à 40 sites",
    empathyBody: "Puis les versions divergent, les absences se gèrent en fil SMS, et personne n’a la même vérité. Il faut un système.",
    showcaseTitle: "Une seule source de vérité",
    showcaseSub: "Planning, terrain, facture.",
    faq: [
      { q: "Migration progressive ?", a: "Oui — souvent planning+pointage d’abord." },
      { q: "Import possible ?", a: "Accompagnement possible selon besoin." },
      { q: "Essai pour tester sur vos sites ?", a: "Oui." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "EV-20",
    vertical: "ev",
    slug: "faq",
    path: "/espace-vert/faq",
    type: "faq",
    primary: "FAQ logiciel espaces verts",
    secondary: ["questions logiciel paysagiste", "aide PROGESTI espaces verts"],
    h1: "FAQ — logiciel espaces verts PROGESTI",
    metaTitle: "FAQ logiciel espaces verts | PROGESTI",
    metaDesc: "Réponses claires sur planning, pointage, prix, essai pour entreprises d’espaces verts.",
    sections: ["Hero court", "FAQ longue", "Liens pages filles", "CTA"],
    angle: "FAQ dédiée EV (featured snippets).",
    ctas: ["Essai gratuit", "Contact"],
    differentiator: "FAQ pure EV — pas guide long ni service.",
    heroLead: "FAQ espaces verts",
    heroH1: "les questions qu’on nous pose vraiment",
    heroSub: "Prix, essai, terrain, facturation — réponses directes pour dirigeants EV.",
    empathyH2: "Pas de blabla : des réponses",
    empathyBody: "Vous voulez savoir si ça matche votre métier. Voici les réponses utiles.",
    showcaseTitle: "Tout savoir avant l’essai",
    showcaseSub: "Puis testez sur vos sites.",
    faq: [
      { q: "C’est pour le nettoyage ou les espaces verts ?", a: "PROGESTI sert aussi les entreprises d’espaces verts via une verticale dédiée (pages /espace-vert)." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois tout inclus." },
      { q: "Essai ?", a: "Gratuit sans CB." },
      { q: "App mobile ?", a: "Android et iOS." },
      { q: "Support ?", a: "France, téléphone sur le site." },
      { q: "Formation ?", a: "Prise en main rapide ; accompagnement possible." },
    ],
  },
  {
    id: "EV-21",
    vertical: "ev",
    slug: "guide-organiser-entretien",
    path: "/espace-vert/guide-organiser-entretien",
    type: "guide",
    primary: "comment organiser entretien espaces verts",
    secondary: ["méthode planning espaces verts", "process prestataire EV"],
    h1: "Guide — organiser l’entretien d’espaces verts sans chaos",
    metaTitle: "Guide : organiser l’entretien d’espaces verts | PROGESTI",
    metaDesc: "Méthode concrète : sites, fréquences, équipes, preuves, facturation. Pour gérants EV.",
    sections: ["Hero guide", "Étapes 1–5", "Erreurs fréquentes", "Outil", "CTA"],
    angle: "Contenu éducatif (TOFU) qui convertit vers essai.",
    ctas: ["Essai gratuit", "Voir entretien"],
    differentiator: "Guide process — pas page produit pure.",
    heroLead: "Guide pratique",
    heroH1: "organiser l’entretien EV en 5 étapes",
    heroSub: "Une méthode de gérant : inventorier les sites, figer les fréquences, affecter, pointer, facturer.",
    empathyH2: "La méthode avant l’outil",
    empathyBody: "Sans règles claires, le meilleur logiciel n’arrangera rien. Posez d’abord le cadre — puis outillez.",
    showcaseTitle: "De la méthode au logiciel",
    showcaseSub: "PROGESTI suit ce flux.",
    faq: [
      { q: "Ce guide est-il gratuit ?", a: "Oui — contenu ouvert." },
      { q: "Faut-il PROGESTI pour appliquer ?", a: "Non, mais l’outil accélère les étapes 3 à 5." },
      { q: "Pour petites structures ?", a: "Oui." },
      { q: "Suite ?", a: "Pages service entretien et planning." },
    ],
  },
  {
    id: "EV-22",
    vertical: "ev",
    slug: "preuves-passages",
    path: "/espace-vert/preuves-passages",
    type: "probleme",
    primary: "preuve de passage espaces verts",
    secondary: ["justificatif entretien pelouse", "litige passage paysagiste"],
    h1: "Preuves de passage espaces verts — finis les litiges",
    metaTitle: "Preuves de passage espaces verts | PROGESTI",
    metaDesc: "Justifiez les passages d’entretien auprès de clients et syndics. Pointage + historique. Essai gratuit.",
    sections: ["Hero", "Litiges types", "Ce que change le pointage", "Reporting", "FAQ", "CTA"],
    angle: "Problème preuve / litige.",
    ctas: ["Essai gratuit", "Pointage terrain"],
    differentiator: "Intent preuve/litige — distinct pointage technique.",
    heroLead: "Preuves de passage",
    heroH1: "répondre au client avec des faits",
    heroSub: "Quand on conteste un passage, ouvrez l’historique. Plus de reconstruction à la louche.",
    empathyH2: "Le litige commence par « on n’a vu personne »",
    empathyBody: "Sans preuve, c’est parole contre parole. Avec un pointage, la discussion change.",
    showcaseTitle: "Historique exploitable",
    showcaseSub: "Pour vous et pour le client.",
    faq: [
      { q: "Quoi comme preuve ?", a: "Pointages horodatés et historique d’interventions." },
      { q: "Utile syndics ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Lien facturation ?", a: "Le réalisé alimente la facture." },
    ],
  },
  {
    id: "EV-23",
    vertical: "ev",
    slug: "petites-entreprises",
    path: "/espace-vert/petites-entreprises",
    type: "audience",
    primary: "logiciel espaces verts TPE",
    secondary: ["logiciel paysagiste auto-entrepreneur", "petit entretien espaces verts"],
    h1: "Logiciel espaces verts pour TPE & indépendants",
    metaTitle: "Logiciel espaces verts TPE | PROGESTI",
    metaDesc: "Simple, tout inclus, dès 29,99 € HT/mois. Pour petites équipes EV. Essai gratuit.",
    sections: ["Hero", "Simplicité", "Prix transparent", "Modules utiles", "FAQ", "CTA"],
    angle: "Petites structures / prix d’entrée.",
    ctas: ["Essai gratuit", "Tarifs"],
    differentiator: "Audience TPE EV — vs grands comptes / collectivités.",
    heroLead: "TPE espaces verts",
    heroH1: "professionnaliser sans usine à gaz",
    heroSub: "Un outil clair pour remplacer Excel : sites, planning, pointage, factures — prix affiché.",
    empathyH2: "Vous n’avez pas une DSI",
    empathyBody: "Il vous faut quelque chose qui marche ce mois-ci, pas un projet de 6 mois. PROGESTI vise ça.",
    showcaseTitle: "Tout inclus, prix public",
    showcaseSub: "Dès 29,99 € HT/mois.",
    faq: [
      { q: "Auto-entrepreneurs ?", a: "Oui." },
      { q: "Carte pour l’essai ?", a: "Non." },
      { q: "Modules payants en plus ?", a: "Non." },
      { q: "Prise en main ?", a: "Rapide." },
    ],
  },
  {
    id: "EV-24",
    vertical: "ev",
    slug: "grands-parcs",
    path: "/espace-vert/grands-parcs",
    type: "audience",
    primary: "gestion grands parcs espaces verts",
    secondary: ["entretien parc multi-zones", "logiciel green large site"],
    h1: "Grands parcs & sites étendus — zones, équipes, suivi",
    metaTitle: "Gestion grands parcs espaces verts | PROGESTI",
    metaDesc: "Structurez zones et équipes sur de grands sites verts. Planning et preuves. Essai gratuit.",
    sections: ["Hero", "Complexité zones", "Équipes multiples", "Pilot", "FAQ", "CTA"],
    angle: "Grands sites / complexité spatiale.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Grands parcs / sites étendus — vs TPE.",
    heroLead: "Grands parcs & sites étendus",
    heroH1: "découper le site pour mieux le tenir",
    heroSub: "Zones, fréquences, équipes : rendez un grand domaine gérable au quotidien.",
    empathyH2: "Un grand site mal découpé = angles morts",
    empathyBody: "Sans zones claires, tout le monde « croit » que c’est fait. Structurez.",
    showcaseTitle: "Zones et passages visibles",
    showcaseSub: "Pour le chef de site et le donneur d’ordre.",
    faq: [
      { q: "Zones par site ?", a: "Oui." },
      { q: "Plusieurs équipes ?", a: "Oui." },
      { q: "Reporting ?", a: "Historique et statuts." },
      { q: "Essai ?", a: "Sans CB." },
    ],
  },
  {
    id: "EV-25",
    vertical: "ev",
    slug: "contrats-annuels",
    path: "/espace-vert/contrats-annuels",
    type: "process",
    primary: "contrat annuel entretien espaces verts",
    secondary: ["suivi contrat espaces verts", "renouvellement entretien EV"],
    h1: "Contrats annuels d’entretien — suivre l’exécution",
    metaTitle: "Contrats annuels espaces verts | PROGESTI",
    metaDesc: "Pilotez l’exécution des contrats annuels EV : planning, preuves, facturation. Essai gratuit.",
    sections: ["Hero", "Promesse vs réalisé", "Renouvellement", "Marge", "FAQ", "CTA"],
    angle: "Contrats annuels / récurrence commerciale.",
    ctas: ["Essai gratuit", "Facturation"],
    differentiator: "Angle contrat annuel — commercial + exécution.",
    heroLead: "Contrats annuels EV",
    heroH1: "tenir la promesse toute l’année",
    heroSub: "Un contrat signé n’est gagné que s’il est exécuté. Planning, preuves et factures alignés.",
    empathyH2: "Le renouvellement se joue sur le vécu",
    empathyBody: "Si le client a dû relancer trois fois, le devis concurrent est déjà ouvert. Montrez de la maîtrise.",
    showcaseTitle: "Exécution de contrat visible",
    showcaseSub: "Du planning à la facture.",
    faq: [
      { q: "Suivi d’exécution ?", a: "Oui via planning et pointages." },
      { q: "Facturation périodique ?", a: "Oui." },
      { q: "Preuves pour renouvellement ?", a: "Historique disponible." },
      { q: "Essai ?", a: "Sans CB." },
    ],
  },
];

/** @type {PageDef[]} */
const sec = [
  {
    id: "SEC-01",
    vertical: "sec",
    slug: "logiciel-securite-gardiennage",
    path: "/logiciel-securite-gardiennage",
    type: "pilier",
    primary: "logiciel gardiennage",
    secondary: ["logiciel entreprise sécurité", "logiciel agents de sécurité", "gestion société gardiennage"],
    h1: "Logiciel gardiennage & sécurité — planning agents, rondes, facture",
    metaTitle: "Logiciel gardiennage & sécurité | PROGESTI",
    metaDesc: "Planifiez vos agents, suivez rondes et vacations, facturez. Pour sociétés de sécurité privée. Essai gratuit.",
    sections: ["Hero", "Empathie dirigeant sécurité", "Modules", "Vs Excel", "FAQ", "CTA"],
    angle: "Pilier sécurité/gardiennage — intent générique logiciel.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Pilier sécu global — pas un type de site.",
    heroLead: "Logiciel pour sociétés de sécurité",
    heroH1: "vacations, rondes et facturation sans tableur",
    heroSub: "Affectez vos agents, suivez le terrain, gardez les preuves d’intervention et facturez le réalisé.",
    empathyH2: "En sécurité, le flou est un risque",
    empathyBody: "Vacation non couverte, ronde non prouvée, client qui demande le rapport : Excel et WhatsApp ne tiennent pas la charge. Structurez.",
    showcaseTitle: "Vacations sous contrôle",
    showcaseSub: "Planning agents · terrain · facture.",
    faq: [
      { q: "Adapté au gardiennage ?", a: "Oui — verticale sécurité dédiée (pages /securite)." },
      { q: "Rondes / pointages ?", a: "Pointage mobile et historique." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois tout inclus." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Support FR ?", a: "Oui." },
      { q: "Séparée de la propreté ?", a: "Oui — pas de fusion des verticales." },
    ],
  },
  {
    id: "SEC-02",
    vertical: "sec",
    slug: "hub",
    path: "/securite",
    type: "hub",
    primary: "solutions sécurité PROGESTI",
    secondary: ["pages métier gardiennage", "logiciel sûreté"],
    h1: "Sécurité & gardiennage — solutions PROGESTI",
    metaTitle: "Sécurité & gardiennage — logiciel gestion | PROGESTI",
    metaDesc: "Hub solutions sécurité : gardiennage, rondes, sites industriels, planning agents. Essai gratuit.",
    sections: ["Hero hub", "Grille pages", "Audiences", "CTA"],
    angle: "Index navigation sécu.",
    ctas: ["Essai gratuit", "Pilier logiciel"],
    differentiator: "Hub sécu — pas cannibalisation service.",
    heroLead: "Solutions sécurité",
    heroH1: "trouvez la page adaptée à votre activité",
    heroSub: "Gardiennage, rondes, industriel, événementiel, process : chaque page a un angle SEO distinct.",
    empathyH2: "Une verticale, des intentions différentes",
    empathyBody: "Ne mélangez pas recherche « ronde » et « événementiel ». Ce hub oriente.",
    showcaseTitle: "Parcours sécurité",
    showcaseSub: "Du besoin à l’essai.",
    faq: [
      { q: "Par où commencer ?", a: "Page pilier logiciel, ou votre type de site / process." },
      { q: "Séparé du nettoyage ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "SEC-03",
    vertical: "sec",
    slug: "gardiennage",
    path: "/securite/gardiennage",
    type: "service",
    primary: "logiciel société de gardiennage",
    secondary: ["gestion gardiennage", "planning gardiennage"],
    h1: "Logiciel société de gardiennage — vacations & preuves",
    metaTitle: "Logiciel société de gardiennage | PROGESTI",
    metaDesc: "Organisez vacations, sites et équipes de gardiennage. Pointage et facturation. Essai gratuit.",
    sections: ["Hero", "Vacations", "Multi-sites", "Factu", "FAQ", "CTA"],
    angle: "Service gardiennage classique.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Gardiennage « site » — vs rondes ou event.",
    heroLead: "Logiciel gardiennage",
    heroH1: "tenir les postes sans trou de vacation",
    heroSub: "Posts fixes, équipes, remplacements : un planning qui ne laisse pas un site à découvert.",
    empathyH2: "Un poste non couvert, c’est immédiat",
    empathyBody: "Le client le voit à l’entrée. Les remplacements doivent être gérés au même endroit que le planning.",
    showcaseTitle: "Posts et vacations lisibles",
    showcaseSub: "Titulaires, backups, statuts.",
    faq: [
      { q: "Posts 24/7 ?", a: "Créneaux libres, y compris nuit." },
      { q: "Remplacements ?", a: "Oui." },
      { q: "Preuves ?", a: "Pointage et historique." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "SEC-04",
    vertical: "sec",
    slug: "rondes-surveillance",
    path: "/securite/rondes-surveillance",
    type: "service",
    primary: "logiciel rondes sécurité",
    secondary: ["surveillance ronde agents", "preuve de ronde gardiennage"],
    h1: "Rondes & surveillance — planifier et prouver",
    metaTitle: "Logiciel rondes sécurité & surveillance | PROGESTI",
    metaDesc: "Planifiez les rondes, pointez les passages, gardez les preuves. Essai gratuit.",
    sections: ["Hero", "Preuve de ronde", "Planning", "Reporting client", "FAQ", "CTA"],
    angle: "Rondes mobiles / surveillance itinerante.",
    ctas: ["Essai gratuit", "Pointage"],
    differentiator: "Rondes — distinct gardiennage poste fixe.",
    heroLead: "Rondes & surveillance",
    heroH1: "des passages tracés, pas « on a fait le tour »",
    heroSub: "Planifiez les tournées, validez les passages, répondez aux audits client avec un historique.",
    empathyH2: "Sans preuve de ronde, la prestation est contestable",
    empathyBody: "Le donneur d’ordre veut des faits. Le pointage transforme la ronde en élément contractuel.",
    showcaseTitle: "Rondes historisées",
    showcaseSub: "Qui, où, quand.",
    faq: [
      { q: "Preuve de ronde ?", a: "Pointage horodaté." },
      { q: "Multi-sites de ronde ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Mobile ?", a: "Android/iOS." },
    ],
  },
  {
    id: "SEC-05",
    vertical: "sec",
    slug: "agents-securite",
    path: "/securite/agents-securite",
    type: "service",
    primary: "logiciel gestion agents de sécurité",
    secondary: ["planning agents sécurité", "RH agents gardiennage"],
    h1: "Gestion des agents de sécurité — planning & présence",
    metaTitle: "Logiciel gestion agents de sécurité | PROGESTI",
    metaDesc: "Affectez vos agents, suivez absences et vacations, centralisez le terrain. Essai gratuit.",
    sections: ["Hero", "Équipe & vacations", "Absences", "Lien terrain", "FAQ", "CTA"],
    angle: "Focus ressources humaines agents.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Angle agents/RH — pas type de site.",
    heroLead: "Gestion agents de sécurité",
    heroH1: "la bonne personne au bon poste",
    heroSub: "Compétences, disponibilités, remplacements : pilotez l’effectif sans tableur parallèle.",
    empathyH2: "Votre matière première, c’est l’effectif",
    empathyBody: "Un agent au mauvais endroit ou une absence non couverte = incident client. Le planning doit coller au réel.",
    showcaseTitle: "Effectif et vacations alignés",
    showcaseSub: "Bureau et terrain synchronisés.",
    faq: [
      { q: "Absences ?", a: "Gérées avec le planning." },
      { q: "Pointage agents ?", a: "Oui." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
      { q: "Essai ?", a: "Sans CB." },
    ],
  },
  {
    id: "SEC-06",
    vertical: "sec",
    slug: "surete-sites",
    path: "/securite/surete-sites",
    type: "service",
    primary: "logiciel sûreté des sites",
    secondary: ["gestion sûreté multi-sites", "prestataire sûreté"],
    h1: "Sûreté des sites — organisation multi-sites",
    metaTitle: "Logiciel sûreté des sites | PROGESTI",
    metaDesc: "Pilotez la sûreté multi-sites : vacations, consignes, preuves. Essai gratuit.",
    sections: ["Hero", "Consignes & accès", "Multi-sites", "Reporting", "FAQ", "CTA"],
    angle: "Sûreté / protection de sites (vocabulaire donneur d’ordre).",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Lexique « sûreté sites » — vs gardiennage commercial.",
    heroLead: "Sûreté des sites",
    heroH1: "consignes, vacations, preuves — site par site",
    heroSub: "Centralisez fiches sites, équipes et historique pour une sûreté opérationnelle.",
    empathyH2: "Chaque site a ses règles",
    empathyBody: "Accès, horaires, consignes : si c’est dans la tête d’un seul chef de poste, vous êtes fragile.",
    showcaseTitle: "Fiches sites opérationnelles",
    showcaseSub: "Visibles aussi sur mobile.",
    faq: [
      { q: "Consignes sur mobile ?", a: "Oui via fiche site." },
      { q: "Historique incidents/passages ?", a: "Historique d’activité." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "SEC-07",
    vertical: "sec",
    slug: "sites-industriels",
    path: "/securite/sites-industriels",
    type: "audience",
    primary: "gardiennage site industriel logiciel",
    secondary: ["sécurité site industriel planning", "agents sécurité usine"],
    h1: "Gardiennage sites industriels — planning & traçabilité",
    metaTitle: "Gardiennage sites industriels | PROGESTI",
    metaDesc: "Usines, entrepôts, plateformes : vacations, rondes, preuves. Essai gratuit.",
    sections: ["Hero", "Contraintes industrielles", "Accès", "Reporting", "FAQ", "CTA"],
    angle: "Audience / vertical site industriel.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Sites industriels — vs commerces / copro / event.",
    heroLead: "Sites industriels",
    heroH1: "des vacations qui tiennent les contraintes terrain",
    heroSub: "Accès stricts, horaires atypiques, audits : organisez et documentez.",
    empathyH2: "L’industriel exige de la traçabilité",
    empathyBody: "Contrôles, rondes, postes : le flou ne passe pas un audit. Ayez l’historique.",
    showcaseTitle: "Traçabilité pour sites industriels",
    showcaseSub: "Planning + pointage.",
    faq: [
      { q: "Horaires nuit / 3×8 ?", a: "Créneaux libres." },
      { q: "Multi-sites logistiques ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Support ?", a: "FR." },
    ],
  },
  {
    id: "SEC-08",
    vertical: "sec",
    slug: "centres-commerciaux",
    path: "/securite/centres-commerciaux",
    type: "audience",
    primary: "sécurité centre commercial logiciel",
    secondary: ["gardiennage galerie commerciale", "agents sécurité retail"],
    h1: "Sécurité centres commerciaux & retail",
    metaTitle: "Sécurité centres commerciaux | PROGESTI",
    metaDesc: "Planning agents, vacation week-end, preuves pour centres et galeries. Essai gratuit.",
    sections: ["Hero", "Pics fréquentation", "Multi-postes", "Reporting", "FAQ", "CTA"],
    angle: "Retail / centres commerciaux.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Retail/centre commercial — audience distincte.",
    heroLead: "Centres commerciaux & retail",
    heroH1: "tenir les postes aux heures de pointe",
    heroSub: "Week-ends, soldes, soirées : densifiez le planning et gardez la preuve des vacations.",
    empathyH2: "Le flux client ne attend pas votre tableur",
    empathyBody: "Les besoins varient fort. Votre planning doit suivre sans improvisation permanente.",
    showcaseTitle: "Planning retail adaptable",
    showcaseSub: "Posts et renforts.",
    faq: [
      { q: "Pics d’activité ?", a: "Ajustez affectations rapidement." },
      { q: "Plusieurs postes dans un centre ?", a: "Oui — sites/zones." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "SEC-09",
    vertical: "sec",
    slug: "evenementiel",
    path: "/securite/evenementiel",
    type: "audience",
    primary: "logiciel sécurité événementielle",
    secondary: ["planning agents événement", "gardiennage concert festival"],
    h1: "Sécurité événementielle — équipes & vacation one-shot",
    metaTitle: "Logiciel sécurité événementielle | PROGESTI",
    metaDesc: "Organisez agents et postes pour événements : planning serré, preuves, facturation. Essai gratuit.",
    sections: ["Hero", "One-shot", "Devis→exécution", "Factu rapide", "FAQ", "CTA"],
    angle: "Événementiel ponctuel.",
    ctas: ["Essai gratuit", "Devis/factu"],
    differentiator: "Event one-shot — vs contrats sites récurrents.",
    heroLead: "Sécurité événementielle",
    heroH1: "monter une équipe vite, facturer proprement",
    heroSub: "Concerts, salons, manifestations : planifiez les postes, suivez le réalisé, facturez sans chaos.",
    empathyH2: "L’événement ne se rejoue pas",
    empathyBody: "Mal staffé = incident. Mal facturé = marge perdue. Unifiez ops et facturation.",
    showcaseTitle: "De l’événement à la facture",
    showcaseSub: "One-shot maîtrisé.",
    faq: [
      { q: "Prestations ponctuelles ?", a: "Oui." },
      { q: "Devis événement ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "SEC-10",
    vertical: "sec",
    slug: "coproprietes",
    path: "/securite/coproprietes",
    type: "audience",
    primary: "gardiennage copropriété logiciel",
    secondary: ["sécurité immeuble syndic", "agent sécurité résidence"],
    h1: "Gardiennage & sécurité en copropriété",
    metaTitle: "Gardiennage copropriétés | PROGESTI",
    metaDesc: "Vacations et présence en résidence : planning, preuves pour syndic. Essai gratuit.",
    sections: ["Hero", "Attentes syndic", "Présence", "Reporting", "FAQ", "CTA"],
    angle: "Copro / syndic côté sécurité (séparé EV et propreté).",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Copro sécu — ne pas fusionner avec EV syndics ni nettoyage syndics.",
    heroLead: "Sécurité en copropriété",
    heroH1: "présence tenue, syndic informé",
    heroSub: "Résidences et immeubles : organisez les vacations et documentez pour le syndic.",
    empathyH2: "Le conseil syndical veut de la transparence",
    empathyBody: "Qui était là ? Quand ? Ayez la réponse sans fouiller les messages.",
    showcaseTitle: "Reporting présence copro",
    showcaseSub: "Historique clair.",
    faq: [
      { q: "Multi-résidences ?", a: "Oui." },
      { q: "Preuves pour syndic ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Différent espaces verts ?", a: "Oui — verticale sécurité séparée." },
    ],
  },
  {
    id: "SEC-11",
    vertical: "sec",
    slug: "planning-agents",
    path: "/securite/planning-agents",
    type: "process",
    primary: "planning agents de sécurité",
    secondary: ["logiciel planning gardiennage", "vacation planning sécurité"],
    h1: "Planning agents de sécurité — vacations sans trou",
    metaTitle: "Planning agents de sécurité | PROGESTI",
    metaDesc: "Construisez et ajustez les vacations, gérez absences et backups. Essai gratuit.",
    sections: ["Hero", "Trous de vacation", "Remplacements", "Vue semaine", "FAQ", "CTA"],
    angle: "Process planning sécu.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Process planning — complementary to gardiennage/rondes.",
    heroLead: "Planning agents sécurité",
    heroH1: "chaque vacation couverte, chaque jour",
    heroSub: "Posts, horaires, backups : un planning qui absorbe les imprévus.",
    empathyH2: "Le trou de vacation se paie cash",
    empathyBody: "Client mécontent, urgence de dernière minute, fatigue d’équipe. Anticipez dans l’outil.",
    showcaseTitle: "Semaine de vacations lisible",
    showcaseSub: "Statuts visibles.",
    faq: [
      { q: "Nuit / week-end ?", a: "Oui." },
      { q: "Remplacements rapides ?", a: "Oui." },
      { q: "Mobile agents ?", a: "Oui." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "SEC-12",
    vertical: "sec",
    slug: "pointage-vacations",
    path: "/securite/pointage-vacations",
    type: "process",
    primary: "pointage agents sécurité",
    secondary: ["pointage vacation gardiennage", "présence agent sécurité"],
    h1: "Pointage des vacations — présence prouvée",
    metaTitle: "Pointage vacations sécurité | PROGESTI",
    metaDesc: "Pointage mobile des agents : arrivée, départ, historique. Essai gratuit.",
    sections: ["Hero", "Présence réelle", "Litiges heures", "Lien factu", "FAQ", "CTA"],
    angle: "Process pointage sécu.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Pointage vacations — vs preuve de ronde (proche mais angle présence poste).",
    heroLead: "Pointage vacations",
    heroH1: "savoir qui est réellement en poste",
    heroSub: "Les agents pointent ; le bureau voit. Fini les heures contestées en fin de mois.",
    empathyH2: "Sans pointage, la paie et le client souffrent",
    empathyBody: "Heures floues = marge floue = discussions pénibles. Le terrain doit remonter.",
    showcaseTitle: "Présence horodatée",
    showcaseSub: "Pour RH et client.",
    faq: [
      { q: "App mobile ?", a: "Android/iOS." },
      { q: "Géoloc ?", a: "Si activée." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Facturation ?", a: "Alimentée par le réalisé." },
    ],
  },
  {
    id: "SEC-13",
    vertical: "sec",
    slug: "preuves-intervention",
    path: "/securite/preuves-intervention",
    type: "probleme",
    primary: "preuve intervention sécurité",
    secondary: ["rapport vacation gardiennage", "justificatif ronde"],
    h1: "Preuves d’intervention & rapports — répondre aux audits",
    metaTitle: "Preuves d’intervention sécurité | PROGESTI",
    metaDesc: "Historique et preuves pour audits clients et litiges. Essai gratuit.",
    sections: ["Hero", "Audits", "Litiges", "Historique", "FAQ", "CTA"],
    angle: "Problème preuve / audit.",
    ctas: ["Essai gratuit", "Rondes"],
    differentiator: "Angle audit/preuve — broader than pointage alone.",
    heroLead: "Preuves & audits",
    heroH1: "quand le client demande le rapport, vous l’avez",
    heroSub: "Conservez l’historique des vacations et passages pour répondre vite et factuellement.",
    empathyH2: "L’audit n’attend pas que vous retrouviez un SMS",
    empathyBody: "Centralisez. Archivez. Répondez.",
    showcaseTitle: "Historique exploitable",
    showcaseSub: "Pour vous et le donneur d’ordre.",
    faq: [
      { q: "Quel type de preuve ?", a: "Pointages et historique d’activité." },
      { q: "Utile grands comptes ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "SEC-14",
    vertical: "sec",
    slug: "multi-sites",
    path: "/securite/multi-sites",
    type: "probleme",
    primary: "gestion multi-sites sécurité",
    secondary: ["portefeuille sites gardiennage", "logiciel sécurité multi-sites"],
    h1: "Multi-sites sécurité — portefeuille de postes sous contrôle",
    metaTitle: "Gestion multi-sites sécurité | PROGESTI",
    metaDesc: "Pilotez de nombreux sites de gardiennage : vacations, consignes, historique. Essai gratuit.",
    sections: ["Hero", "Passage d’échelle", "Fiches sites", "Vision direction", "FAQ", "CTA"],
    angle: "Scalabilité multi-sites sécu.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Multi-sites sécu — parallel but separate from EV multi-sites.",
    heroLead: "Multi-sites sécurité",
    heroH1: "quand le portefeuille s’étend, le tableur lâche",
    heroSub: "Sites, consignes, équipes : une base unique pour grandir sans perdre le contrôle.",
    empathyH2: "Plus de sites = plus de points de défaillance",
    empathyBody: "Sans système, chaque nouveau contrat augmente le chaos. Structurez avant.",
    showcaseTitle: "Portefeuille unifié",
    showcaseSub: "Direction et exploitation alignées.",
    faq: [
      { q: "Beaucoup de sites ?", a: "Conçu pour le multi-sites." },
      { q: "Consignes différentes ?", a: "Fiche par site." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Support ?", a: "FR." },
    ],
  },
  {
    id: "SEC-15",
    vertical: "sec",
    slug: "facturation-gardiennage",
    path: "/securite/facturation-gardiennage",
    type: "process",
    primary: "facturation gardiennage",
    secondary: ["facture vacations sécurité", "devis société sécurité"],
    h1: "Facturation gardiennage — du réalisé à la facture",
    metaTitle: "Facturation gardiennage & sécurité | PROGESTI",
    metaDesc: "Facturez les vacations réellement effectuées, suivez les impayés. Essai gratuit.",
    sections: ["Hero", "Heures facturables", "Impayés", "Devis", "FAQ", "CTA"],
    angle: "Process factu sécu.",
    ctas: ["Essai gratuit", "Tarifs"],
    differentiator: "Facturation sécu — not planning.",
    heroLead: "Facturation gardiennage",
    heroH1: "facturez les heures faites, pas les heures estimées",
    heroSub: "Reliez vacations pointées et factures. Réduisez les écarts et les litiges.",
    empathyH2: "Chaque heure non facturée est de la marge perdue",
    empathyBody: "Sans lien terrain→facture, vous laissez de l’argent. Automatisez le flux.",
    showcaseTitle: "Vacations → facture",
    showcaseSub: "Sans double saisie.",
    faq: [
      { q: "Devis ?", a: "Oui." },
      { q: "Impayés ?", a: "Suivi inclus." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Prix outil ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "SEC-16",
    vertical: "sec",
    slug: "remplacer-excel",
    path: "/securite/remplacer-excel",
    type: "probleme",
    primary: "remplacer Excel gardiennage",
    secondary: ["alternative WhatsApp planning sécurité", "sortir tableur société sécurité"],
    h1: "Remplacer Excel & WhatsApp en sécurité privée",
    metaTitle: "Remplacer Excel en gardiennage | PROGESTI",
    metaDesc: "Passez à un planning + pointage + factures pour votre société de sécurité. Essai gratuit.",
    sections: ["Hero", "Limites Excel", "Migration", "Avant/après", "FAQ", "CTA"],
    angle: "Problème Excel sécu.",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Sortir d’Excel sécu — parallel EV but separate URL tree.",
    heroLead: "Sortir d’Excel en sécurité",
    heroH1: "un système pour vacations et preuves",
    heroSub: "Fichiers qui divergent, groupes WhatsApp ingérables : basculez vers un outil métier.",
    empathyH2: "Excel a marché jusqu’au premier audit raté",
    empathyBody: "Puis plus personne n’a la même version du planning. Il faut une source de vérité.",
    showcaseTitle: "Une vérité bureau / terrain",
    showcaseSub: "Planning, pointage, facture.",
    faq: [
      { q: "Migration progressive ?", a: "Oui." },
      { q: "Essai sur sites réels ?", a: "Oui." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
      { q: "Support migration ?", a: "Accompagnement possible." },
    ],
  },
  {
    id: "SEC-17",
    vertical: "sec",
    slug: "faq",
    path: "/securite/faq",
    type: "faq",
    primary: "FAQ logiciel gardiennage",
    secondary: ["questions logiciel sécurité privée", "aide PROGESTI sécurité"],
    h1: "FAQ — logiciel sécurité & gardiennage",
    metaTitle: "FAQ logiciel gardiennage | PROGESTI",
    metaDesc: "Prix, essai, planning, pointage : réponses pour dirigeants de sociétés de sécurité.",
    sections: ["Hero", "FAQ longue", "Liens", "CTA"],
    angle: "FAQ sécu.",
    ctas: ["Essai gratuit", "Contact"],
    differentiator: "FAQ pure sécu.",
    heroLead: "FAQ sécurité",
    heroH1: "réponses courtes, utiles",
    heroSub: "Pour décider si PROGESTI matche votre société de sécurité.",
    empathyH2: "Des réponses, pas du marketing",
    empathyBody: "Voici ce que les dirigeants demandent avant l’essai.",
    showcaseTitle: "Avant de démarrer",
    showcaseSub: "Puis testez.",
    faq: [
      { q: "Pour la sécurité privée ?", a: "Oui — verticale /securite dédiée." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Mobile ?", a: "Oui." },
      { q: "Support ?", a: "FR." },
      { q: "Fusionné avec nettoyage ?", a: "Non." },
    ],
  },
  {
    id: "SEC-18",
    vertical: "sec",
    slug: "guide-organiser-vacations",
    path: "/securite/guide-organiser-vacations",
    type: "guide",
    primary: "comment organiser planning gardiennage",
    secondary: ["méthode vacation sécurité", "process société gardiennage"],
    h1: "Guide — organiser les vacations de gardiennage",
    metaTitle: "Guide : organiser les vacations de gardiennage | PROGESTI",
    metaDesc: "Méthode : posts, effectifs, backups, pointage, facturation. Pour dirigeants sécurité.",
    sections: ["Hero guide", "Étapes", "Erreurs", "Outil", "CTA"],
    angle: "Guide éducatif sécu.",
    ctas: ["Essai gratuit", "Planning agents"],
    differentiator: "Guide process sécu — not product-only.",
    heroLead: "Guide pratique",
    heroH1: "organiser les vacations sans trou",
    heroSub: "Une méthode simple : cartographier les posts, figer les besoins, staffer, pointer, facturer.",
    empathyH2: "La méthode avant le logiciel",
    empathyBody: "Clarifiez vos règles d’affectation — l’outil démultiplie ensuite.",
    showcaseTitle: "Méthode → outil",
    showcaseSub: "PROGESTI suit le flux.",
    faq: [
      { q: "Gratuit ?", a: "Oui." },
      { q: "Obligé d’utiliser PROGESTI ?", a: "Non." },
      { q: "Pour PME ?", a: "Oui." },
      { q: "Suite ?", a: "Pages planning et gardiennage." },
    ],
  },
  {
    id: "SEC-19",
    vertical: "sec",
    slug: "toulouse-occitanie",
    path: "/securite/toulouse-occitanie",
    type: "local",
    primary: "logiciel gardiennage Toulouse",
    secondary: ["logiciel sécurité Occitanie", "société sécurité Haute-Garonne logiciel"],
    h1: "Logiciel gardiennage à Toulouse & en Occitanie",
    metaTitle: "Logiciel gardiennage Toulouse / Occitanie | PROGESTI",
    metaDesc: "Éditeur près de Toulouse. Planning agents, pointage, facturation pour sociétés de sécurité en Occitanie.",
    sections: ["Hero local", "Proximité", "CTA phone", "FAQ"],
    angle: "Local SEO sécu.",
    ctas: ["Essai gratuit", "Appeler"],
    differentiator: "Géo sécu Occitanie — separate from EV local page.",
    heroLead: "Sécurité en Occitanie",
    heroH1: "outil FR, équipe près de Toulouse",
    heroSub: "Pour les sociétés de gardiennage de la région : produit terrain + support joignable.",
    empathyH2: "Un interlocuteur réel",
    empathyBody: "Téléphone affiché, équipe en France — pas une hotline anonyme.",
    showcaseTitle: "Ancré à Toulouse",
    showcaseSub: "Tournefeuille (31).",
    faq: [
      { q: "Localisation ?", a: "Tournefeuille (31)." },
      { q: "France entière ?", a: "Oui — page locale pour l’intent géo." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Démo ?", a: "Oui." },
    ],
  },
  {
    id: "SEC-20",
    vertical: "sec",
    slug: "astreinte-nuit",
    path: "/securite/astreinte-nuit",
    type: "service",
    primary: "planning agents sécurité nuit",
    secondary: ["vacation nuit gardiennage", "astreinte sécurité logiciel"],
    h1: "Vacations de nuit & astreintes — planning sans faille",
    metaTitle: "Planning vacations nuit sécurité | PROGESTI",
    metaDesc: "Organisez nuits et astreintes : équipes, backups, pointage. Essai gratuit.",
    sections: ["Hero", "Contraintes nuit", "Backups", "Preuves", "FAQ", "CTA"],
    angle: "Nuit / astreinte (temporal).",
    ctas: ["Essai gratuit", "Planning"],
    differentiator: "Focus nuit/astreinte — not daytime gardiennage.",
    heroLead: "Nuits & astreintes",
    heroH1: "des postes tenus quand tout le monde dort",
    heroSub: "Planifiez les vacations de nuit, sécurisez les backups, gardez les preuves de présence.",
    empathyH2: "La nuit, un trou se voit encore plus",
    empathyBody: "Moins de marge d’erreur, plus de fatigue. Le planning doit être béton.",
    showcaseTitle: "Couverture nuit visible",
    showcaseSub: "Titulaires et remplacements.",
    faq: [
      { q: "Créneaux nuit ?", a: "Oui." },
      { q: "Astreintes ?", a: "Planifiables comme vacations." },
      { q: "Pointage nuit ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
    ],
  },
  {
    id: "SEC-21",
    vertical: "sec",
    slug: "pme-entreprises",
    path: "/securite/pme-entreprises",
    type: "audience",
    primary: "sécurité entreprises PME logiciel prestataire",
    secondary: ["gardiennage sièges PME", "prestataire sécurité entreprises"],
    h1: "Prestations sécurité pour PME & sièges",
    metaTitle: "Gardiennage PME & sièges d’entreprise | PROGESTI",
    metaDesc: "Organisez vos prestations chez les PME : sites, vacations, preuves. Essai gratuit.",
    sections: ["Hero", "Attentes PME", "Multi-clients", "Factu", "FAQ", "CTA"],
    angle: "Audience clients PME (côté prestataire sécu).",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Clients PME — vs industriel / retail / event.",
    heroLead: "Sécurité pour PME",
    heroH1: "des sites pros, des vacations carrées",
    heroSub: "Sièges et locaux PME : respectez accès et horaires, prouvez la présence, facturez net.",
    empathyH2: "La PME juge sur la fiabilité",
    empathyBody: "Peu de patience pour l’à-peu-près. Montrez de l’organisation.",
    showcaseTitle: "Portefeuille PME tenu",
    showcaseSub: "Sites et vacations.",
    faq: [
      { q: "Horaires bureau ?", a: "Créneaux configurables." },
      { q: "Accès ?", a: "Fiche site." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
  {
    id: "SEC-22",
    vertical: "sec",
    slug: "grands-comptes",
    path: "/securite/grands-comptes",
    type: "audience",
    primary: "logiciel sécurité grands comptes",
    secondary: ["gardiennage contrat cadre", "reporting sécurité grand compte"],
    h1: "Grands comptes sécurité — reporting & multi-sites",
    metaTitle: "Sécurité grands comptes multi-sites | PROGESTI",
    metaDesc: "Contrats cadres, nombreux sites, reporting exigeant. Planning et preuves. Essai gratuit.",
    sections: ["Hero", "Exigences GC", "Reporting", "Scale", "FAQ", "CTA"],
    angle: "Grands comptes / contrats cadres.",
    ctas: ["Essai gratuit", "Contacter"],
    differentiator: "Grands comptes — vs PME / TPE sécu.",
    heroLead: "Grands comptes sécurité",
    heroH1: "tenir le cadre contractuel sur tous les sites",
    heroSub: "Volume, exigences, audits : structurez vacations et preuves à l’échelle.",
    empathyH2: "Le grand compte ne tolère pas l’opacité",
    empathyBody: "Il faut du reporting et de la constance. L’outil doit suivre.",
    showcaseTitle: "Pilotage multi-sites exigeant",
    showcaseSub: "Vision direction + exploitation.",
    faq: [
      { q: "Reporting ?", a: "Historiques et activité." },
      { q: "Nombreux sites ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Accompagnement ?", a: "Possible via démo/contact." },
    ],
  },
  {
    id: "SEC-23",
    vertical: "sec",
    slug: "contrats-cadres",
    path: "/securite/contrats-cadres",
    type: "process",
    primary: "contrat cadre gardiennage suivi",
    secondary: ["exécution contrat sécurité", "renouvellement gardiennage"],
    h1: "Contrats cadres gardiennage — suivre l’exécution",
    metaTitle: "Suivi contrats cadres gardiennage | PROGESTI",
    metaDesc: "Exécutez et documentez vos contrats cadres : vacations, preuves, facturation. Essai gratuit.",
    sections: ["Hero", "Promesse vs réalisé", "Renouvellement", "Marge", "FAQ", "CTA"],
    angle: "Contrats cadres process.",
    ctas: ["Essai gratuit", "Facturation"],
    differentiator: "Contrats cadres sécu — parallel EV contrats annuels.",
    heroLead: "Contrats cadres",
    heroH1: "l’exécution fait le renouvellement",
    heroSub: "Planifiez les vacations dues, prouvez-les, facturez juste — tout le long du contrat.",
    empathyH2: "Un contrat mal exécuté ne se renouvelle pas",
    empathyBody: "Le commercial signe ; l’ops doit délivrer. Alignez les deux.",
    showcaseTitle: "Exécution visible",
    showcaseSub: "Vacations et factures liées.",
    faq: [
      { q: "Suivi d’exécution ?", a: "Planning + pointages." },
      { q: "Facturation cadre ?", a: "Oui." },
      { q: "Preuves renouvellement ?", a: "Historique." },
      { q: "Essai ?", a: "Sans CB." },
    ],
  },
  {
    id: "SEC-24",
    vertical: "sec",
    slug: "petites-societes",
    path: "/securite/petites-societes",
    type: "audience",
    primary: "logiciel gardiennage TPE",
    secondary: ["logiciel petite société sécurité", "démarrer société gardiennage outil"],
    h1: "Logiciel gardiennage pour petites sociétés",
    metaTitle: "Logiciel gardiennage TPE | PROGESTI",
    metaDesc: "Simple et tout inclus dès 29,99 € HT/mois pour petites sociétés de sécurité. Essai gratuit.",
    sections: ["Hero", "Simplicité", "Prix", "Essentiel modules", "FAQ", "CTA"],
    angle: "TPE sécurité.",
    ctas: ["Essai gratuit", "Tarifs"],
    differentiator: "TPE sécu — vs grands comptes.",
    heroLead: "Petites sociétés de sécurité",
    heroH1: "structurer sans se noyer",
    heroSub: "Planning, pointage, factures — l’essentiel pour professionnaliser une petite équipe.",
    empathyH2: "Vous n’avez pas une armée administrative",
    empathyBody: "Il faut un outil simple qui règle le quotidien. C’est le brief.",
    showcaseTitle: "Essentiel tout inclus",
    showcaseSub: "Prix public dès 29,99 € HT/mois.",
    faq: [
      { q: "Trop gros pour une TPE ?", a: "Non — prise en main rapide." },
      { q: "Modules extra ?", a: "Non, tout inclus." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Support ?", a: "FR." },
    ],
  },
  {
    id: "SEC-25",
    vertical: "sec",
    slug: "controle-acces-consignes",
    path: "/securite/controle-acces-consignes",
    type: "process",
    primary: "consignes accès agents sécurité",
    secondary: ["fiche site gardiennage", "consignes vacation logiciel"],
    h1: "Consignes & accès sites — une fiche pour le terrain",
    metaTitle: "Consignes et accès sites sécurité | PROGESTI",
    metaDesc: "Centralisez consignes, codes et infos d’accès pour vos agents. Essai gratuit.",
    sections: ["Hero", "Info perdue = risque", "Fiche site", "Mobile", "FAQ", "CTA"],
    angle: "Process consignes/accès (pas contrôle d’accès hardware).",
    ctas: ["Essai gratuit", "Démo"],
    differentiator: "Consignes/accès info — not hardware access control; unique ops angle.",
    heroLead: "Consignes & accès",
    heroH1: "l’info au bon agent, au bon moment",
    heroSub: "Codes, contacts, consignes particulières : sur la fiche site, visibles sur mobile — plus dans un carnet perdu.",
    empathyH2: "Une consigne mal transmise, c’est un incident",
    empathyBody: "WhatsApp n’est pas une GED. Centralisez ce que le terrain doit savoir.",
    showcaseTitle: "Fiche site opérationnelle",
    showcaseSub: "Bureau → mobile.",
    faq: [
      { q: "C’est un contrôle d’accès physique ?", a: "Non — on parle d’organisation des consignes et infos d’accès pour vos agents." },
      { q: "Visible mobile ?", a: "Oui." },
      { q: "Essai ?", a: "Sans CB." },
      { q: "Prix ?", a: "Dès 29,99 € HT/mois." },
    ],
  },
];

const all = [...ev, ...sec];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function toTsFaq(faq) {
  return faq
    .map((f) => `    { q: ${JSON.stringify(f.q)}, a: ${JSON.stringify(f.a)} }`)
    .join(",\n");
}

function pageToConfigBlock(p, hubPath, siblingLinks) {
  const isHub = p.type === "hub";
  const isPillar = p.type === "pilier";
  const crumbs = isPillar
    ? `[
      { label: "Accueil", href: "/" },
      { label: ${JSON.stringify(p.h1.split("—")[0].trim())}, href: ${JSON.stringify(p.path)} },
    ]`
    : isHub
      ? `[
      { label: "Accueil", href: "/" },
      { label: ${JSON.stringify(p.vertical === "ev" ? "Espaces verts" : "Sécurité")}, href: ${JSON.stringify(hubPath)} },
    ]`
      : `[
      { label: "Accueil", href: "/" },
      { label: ${JSON.stringify(p.vertical === "ev" ? "Espaces verts" : "Sécurité")}, href: ${JSON.stringify(hubPath)} },
      { label: ${JSON.stringify(p.metaTitle.split("|")[0].trim())}, href: ${JSON.stringify(p.path)} },
    ]`;

  const gridItems = siblingLinks
    .map(
      (l) => `{
      title: ${JSON.stringify(l.title)},
      text: ${JSON.stringify(l.text)},
      href: ${JSON.stringify(l.href)},
    }`,
    )
    .join(",\n    ");

  return `  ${JSON.stringify(p.slug)}: {
    id: ${JSON.stringify(p.id)},
    path: ${JSON.stringify(p.path)},
    type: ${JSON.stringify(p.type)},
    primaryKw: ${JSON.stringify(p.primary)},
    config: mergeIndustryConfig(defaultIndustryConfig, {
      slug: ${JSON.stringify(p.slug === "hub" ? (p.vertical === "ev" ? "espace-vert" : "securite") : p.slug)},
      seo: {
        title: ${JSON.stringify(p.metaTitle.replace(" | PROGESTI", ""))},
        description: ${JSON.stringify(p.metaDesc)},
        path: ${JSON.stringify(p.path)},
      },
      breadcrumbs: ${crumbs},
      hero: {
        h1Lead: ${JSON.stringify(p.heroLead)},
        h1: ${JSON.stringify(p.heroH1)},
        sub: ${JSON.stringify(p.heroSub)},
        claimBefore: "Du terrain à la",
        claimHighlight: "facture",
        claimSub: ${JSON.stringify(p.primary)},
        trustLeft: ${JSON.stringify(p.vertical === "ev" ? "Verticale espaces verts PROGESTI" : "Verticale sécurité PROGESTI")},
        productStripLabel: ${JSON.stringify(p.vertical === "ev" ? "Espaces verts · planning · preuves" : "Sécurité · vacations · preuves")},
      },
      empathy: {
        h2: ${JSON.stringify(p.empathyH2)},
        body: ${JSON.stringify(p.empathyBody)},
      },
      showcase: {
        title: ${JSON.stringify(p.showcaseTitle)},
        sub: ${JSON.stringify(p.showcaseSub)},
        image: "/hero-planning.png",
        imageAlt: ${JSON.stringify(p.showcaseTitle + " — PROGESTI")},
        badgeLeft: { title: ${JSON.stringify(p.vertical === "ev" ? "Sites EV" : "Posts / sites")}, sub: "Planning à jour" },
        badgeRight: "Preuve OK ✓",
      },
      grid: {
        h2Lead: "Dans la même",
        h2Highlight: "verticale",
        lead: "Pages sœurs pour approfondir sans cannibaliser — maillage interne contrôlé.",
        items: [
    ${gridItems},
          {
            title: "Tarifs",
            text: "Prix public, tout inclus.",
            href: "/tarifs",
          },
          {
            title: "Essai gratuit",
            text: "Testez sur vos vrais sites.",
            href: "/essai-gratuit",
          },
        ],
      },
      faq: [
${toTsFaq(p.faq)},
      ],
    }),
  }`;
}

function siblingFor(list, p, n = 3) {
  const others = list.filter((x) => x.id !== p.id && x.type !== "hub");
  const picks = [];
  // diversify: one service-ish, one audience/process, one other
  for (const t of ["service", "audience", "process", "probleme", "guide", "pilier", "local", "saisonnier", "faq"]) {
    const hit = others.find((o) => o.type === t && !picks.includes(o));
    if (hit) picks.push(hit);
    if (picks.length >= n) break;
  }
  while (picks.length < n && others.length) {
    const o = others[(picks.length * 7) % others.length];
    if (!picks.includes(o)) picks.push(o);
    else break;
  }
  return picks.slice(0, n).map((o) => ({
    title: o.heroLead,
    text: o.differentiator.slice(0, 110),
    href: o.path,
  }));
}

function buildTsFile(vertical, list, hubPath, exportName) {
  const blocks = list
    .map((p) => pageToConfigBlock(p, hubPath, siblingFor(list, p)))
    .join(",\n");
  return `/* eslint-disable */
/**
 * Pages marketing ${vertical} — générées pour validation Simon.
 * Ne pas fusionner avec /solutions (propreté).
 */
import { defaultIndustryConfig, mergeIndustryConfig } from "@/lib/industry";
import type { IndustryPageConfig } from "@/lib/industry/types";

export type MarketingPageEntry = {
  id: string;
  path: string;
  type: string;
  primaryKw: string;
  config: IndustryPageConfig;
};

export const ${exportName} = {
${blocks},
} as const satisfies Record<string, MarketingPageEntry>;

export type ${exportName}Slug = keyof typeof ${exportName};

export function get${exportName}(slug: string): MarketingPageEntry | null {
  if (slug in ${exportName}) return ${exportName}[slug as ${exportName}Slug];
  return null;
}

export function list${exportName}Slugs(): ${exportName}Slug[] {
  return Object.keys(${exportName}) as ${exportName}Slug[];
}

export function list${exportName}Paths(): string[] {
  return Object.values(${exportName}).map((p) => p.path);
}
`;
}

function buildPromptsMd() {
  let md = `# Super prompts marketing — Espaces verts (25) + Sécurité (25)

> **Repo :** Progesti \`web-seo-tech-p0\`  
> **Règle d’or :** NE RIEN FUSIONNER entre EV, Sécurité et Propreté.  
> **Exécution :** pages data-driven via \`IndustryLanding\` + configs dans \`src/lib/marketing/\`.  
> **Validation :** \`docs/pages-a-valider.md\` — Simon valide page par page.  
> **Commit :** uniquement sur demande explicite.

## Architecture SEO proposée

\`\`\`
/logiciel-espace-vert          ← pilier EV (money)
/espace-vert                   ← hub EV
/espace-vert/{slug}            ← 23 pages filles EV

/logiciel-securite-gardiennage ← pilier Sécurité (money)
/securite                      ← hub Sécurité
/securite/{slug}               ← 23 pages filles Sécurité
\`\`\`

- **Intent mapping 1 page = 1 angle** (service / audience / process / problème / saison / local / FAQ / guide)
- **Maillage** : fille → hub + pilier + 2–3 sœurs + \`/tarifs\` + \`/essai-gratuit\`
- **Schema** : SoftwareApplication + FAQPage + canonical via \`pageMeta\`
- **Sitemap** : URLs ajoutées côté organique (pas de \`/lp/**\`)

${sharedConstraints}

---

## PARTIE A — ESPACE VERT (25)

`;

  for (const p of ev) {
    md += `### ${p.id} — ${p.h1}

| Champ | Valeur |
|------|--------|
| **Slug / URL** | \`${p.path}\` |
| **Type** | ${p.type} |
| **Mot-clé principal** | ${p.primary} |
| **Secondaires** | ${p.secondary.join(" · ")} |
| **H1** | ${p.h1} |
| **Meta title** | ${p.metaTitle} |
| **Meta description** | ${p.metaDesc} |
| **Différenciation** | ${p.differentiator} |

**Architecture sections (ordre)**  
${p.sections.map((s, i) => `${i + 1}. ${s}`).join(" · ")}

**Angle / ton**  
${p.angle}

**CTAs**  
${p.ctas.join(" · ")} → \`/essai-gratuit\` · \`/demo\`

**Contraintes**  
${sharedConstraints.split("\n").slice(0, 3).join(" ")} Canonical \`${p.path}\`. Maillage hub \`/espace-vert\` + pilier \`/logiciel-espace-vert\`.

---

`;
  }

  md += `## PARTIE B — SÉCURITÉ (25)

`;

  for (const p of sec) {
    md += `### ${p.id} — ${p.h1}

| Champ | Valeur |
|------|--------|
| **Slug / URL** | \`${p.path}\` |
| **Type** | ${p.type} |
| **Mot-clé principal** | ${p.primary} |
| **Secondaires** | ${p.secondary.join(" · ")} |
| **H1** | ${p.h1} |
| **Meta title** | ${p.metaTitle} |
| **Meta description** | ${p.metaDesc} |
| **Différenciation** | ${p.differentiator} |

**Architecture sections (ordre)**  
${p.sections.map((s, i) => `${i + 1}. ${s}`).join(" · ")}

**Angle / ton**  
${p.angle}

**CTAs**  
${p.ctas.join(" · ")} → \`/essai-gratuit\` · \`/demo\`

**Contraintes**  
Canonical \`${p.path}\`. Maillage hub \`/securite\` + pilier \`/logiciel-securite-gardiennage\`. Pas de fusion avec EV ni propreté.

---

`;
  }

  md += `## Checklist exécution agent

1. Configs TS générées (\`espace-vert-pages.ts\`, \`securite-pages.ts\`)
2. Routes hub + \`[slug]\` + piliers
3. Sitemap organique mis à jour
4. Suivi \`docs/pages-a-valider.md\`
5. **Pas de commit** sans demande Simon
`;

  return md;
}

function buildValidationMd() {
  const rows = all
    .map(
      (p) =>
        `| ${p.id} | \`${p.path}\` | \`src/app${p.path === "/espace-vert" || p.path === "/securite" ? p.path + "/page.tsx" : p.path.startsWith("/logiciel") ? p.path + "/page.tsx" : p.path.replace(/\/[^/]+$/, "") + "/[slug]/page.tsx"}\` | ${p.id} | à valider |`,
    )
    .join("\n");

  return `# Pages à valider — Espaces verts & Sécurité

> Simon valide **chaque** page avant suite (nav, ads, merge, etc.).  
> Statuts : \`à valider\` · \`validée\` · \`à corriger\` · \`rejetée\`  
> **Pas de merge / fusion des verticales.**

## Comment valider

1. Ouvrir l’URL en local (\`npm run dev\`)
2. Vérifier H1, meta, ton humain, CTAs, maillage, charte
3. Mettre à jour la colonne **Statut** + note courte si besoin

## Inventaire (50)

| ID | URL | Fichier route | Prompt | Statut |
|----|-----|---------------|--------|--------|
${rows}

## Notes

- Piliers money : \`/logiciel-espace-vert\`, \`/logiciel-securite-gardiennage\`
- Hubs : \`/espace-vert\`, \`/securite\`
- Filles : \`/espace-vert/[slug]\`, \`/securite/[slug]\`
- Configs : \`src/lib/marketing/espace-vert-pages.ts\`, \`src/lib/marketing/securite-pages.ts\`
`;
}

// Write files
const docsPrompts = path.join(root, "docs", "prompts-marketing-espace-vert-securite.md");
const docsVal = path.join(root, "docs", "pages-a-valider.md");
const evTs = path.join(root, "src", "lib", "marketing", "espace-vert-pages.ts");
const secTs = path.join(root, "src", "lib", "marketing", "securite-pages.ts");
const indexTs = path.join(root, "src", "lib", "marketing", "index.ts");

fs.writeFileSync(docsPrompts, buildPromptsMd(), "utf8");
fs.writeFileSync(docsVal, buildValidationMd(), "utf8");
fs.writeFileSync(evTs, buildTsFile("espaces verts", ev, "/espace-vert", "espaceVertPages"), "utf8");
fs.writeFileSync(secTs, buildTsFile("sécurité", sec, "/securite", "securitePages"), "utf8");
fs.writeFileSync(
  indexTs,
  `export {
  espaceVertPages,
  getespaceVertPages as getEspaceVertPage,
  listespaceVertPagesSlugs as listEspaceVertSlugs,
  listespaceVertPagesPaths as listEspaceVertPaths,
  type espaceVertPagesSlug as EspaceVertSlug,
  type MarketingPageEntry,
} from "./espace-vert-pages";

export {
  securitePages,
  getsecuritePages as getSecuritePage,
  listsecuritePagesSlugs as listSecuriteSlugs,
  listsecuritePagesPaths as listSecuritePaths,
  type securitePagesSlug as SecuriteSlug,
} from "./securite-pages";
`,
  "utf8",
);

console.log("OK", {
  prompts: docsPrompts,
  validation: docsVal,
  evPages: Object.keys(ev).length || ev.length,
  secPages: sec.length,
  evTs,
  secTs,
});
