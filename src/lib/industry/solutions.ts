import { site, trialCopy } from "@/lib/site";
import { defaultIndustryConfig, mergeIndustryConfig } from "./default";

export const bureauxConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "bureaux",
  extraNotes: [
    { before: 'Côté commercial : un ', href: '/logiciel-devis-nettoyage', anchor: 'devis pour une société de nettoyage de bureaux', after: ' reste relié au client, à ses sites et au planning.' },
  ],
  seo: {
    title: "Logiciel nettoyage bureaux : planning, factures",
    description:
      `Planning multi-sites, pointage et facturation pour le nettoyage de bureaux. Gratuit pour indépendants, Pro 49,99 € HT/mois. ${trialCopy.noCard}.`,
    path: "/solutions/bureaux",
  },
  hero: {
    h1Lead: "Logiciel nettoyage de bureaux",
    h1: "pour organiser open spaces et multi-étages",
    sub: "Fréquences, accès et équipes tôt le matin ou en soirée — du planning à la facture, sans tableur ni WhatsApp.",
    claimBefore: "Du créneau à la",
    claimHighlight: "facture",
    claimSub: "Tertiaire, coworking, immeubles de bureaux",
    trustLeft: "Pensé pour le nettoyage tertiaire français",
    productStripLabel: "Planning bureaux · fréquences visibles",
  },
  empathy: {
    h2: "Faites tourner le tertiaire sans perdre le fil",
    body: "Hebdo, bihebdo, open spaces oubliés, badges et alarmes mal communiqués : une info perdue coûte une vacation. PROGESTI structure vos sites, vos créneaux et votre facturation pour que chaque étage soit couvert — et prouvé.",
  },
  showcase: {
    title: "Planning qui suit vos immeubles",
    sub: "Fréquences, agents titulaires et backups — une semaine lisible pour le tertiaire.",
    image: "/hero-planning.png",
    imageAlt: "Planning PROGESTI — passages bureaux et open spaces",
    badgeLeft: { title: "3 étages · 1 agent", sub: "Open space 06:30–08:00" },
    badgeRight: "Passage OK ✓",
  },
  directAnswer: "Pour une entreprise de nettoyage de bureaux, PROGESTI réunit le planning par site et par étage, le pointage mobile et la facturation du réalisé. Les passages avant ouverture ou en soirée sont horodatés, les remplacements se gèrent avec les fréquences, et la facture reprend ce qui a été fait. Gratuit pour indépendants, essai 15 jours sans carte bancaire.",
  scenarios: {
    h2: "Trois situations typiques en nettoyage de bureaux",
    intro: "Ce que vit un gérant qui entretient des plateaux, des open spaces et des immeubles tertiaires.",
    items: [
      { title: "Le passage de 6 h 30, personne sur place", text: "Vous intervenez avant l'ouverture : le donneur d'ordre n'est pas là pour constater. L'agent pointe son arrivée et son départ sur le site, et vous répondez à une réclamation avec une heure, pas avec un souvenir." },
      { title: "Un titulaire absent le lundi matin", text: "Vous affectez un remplaçant depuis le planning, au même endroit que les fréquences du site. L'agent remplaçant reçoit le passage sur son mobile, avec les consignes d'accès de l'immeuble." },
      { title: "Open space tous les jours, vitrerie une fois par mois", text: "Plusieurs prestations aux rythmes différents sur un même site : vous les programmez une fois, chacune garde sa fréquence, et la facture de la période reprend ce qui a été réalisé." },
    ],
  },
  proof: {
    h2: "Ce qui compte pour un contrat de bureaux",
    quote: "Un étage oublié se voit avant que le client ne l'écrive.",
    items: [
      { title: "Une fréquence par prestation", text: "Open space, sanitaires, vitrerie : chaque prestation d'un site garde son propre rythme." },
      { title: "Des passages datés", text: "Heure d'arrivée et de départ par agent et par site, pour répondre à un facility manager." },
      { title: "Prix public", text: "Gratuit pour indépendants, Pro 49,99 € HT/mois (5 utilisateurs), Premium 99,99 € HT/mois (20 utilisateurs)." },
    ],
  },
  grid: {
    h2Lead: "Aussi rigoureux que",
    h2Highlight: "vos contrats tertiaires",
    lead: "Ce que le bureau et le terrain partagent quand le client est un plateau de bureaux.",
    items: [
      { title: "Planning par étage", text: "Fréquences par zone, titulaires et backups : la semaine reste lisible.", href: "/logiciel-planning-nettoyage" },
      { title: "Pointage avant ouverture", text: "Arrivée et départ horodatés sur mobile, même quand personne n'est là.", href: "/fonctionnalites/pointage" },
      { title: "Historique des passages", text: "Par site et par agent, pour répondre vite à un relevé.", href: "/fonctionnalites/pointage" },
      { title: "Facture du réalisé", text: "Les heures du site alimentent la facture, sans les retaper.", href: "/logiciel-facturation-proprete" },
      { title: "Fiches sites", text: "Accès, consignes et interlocuteur sur place au même endroit.", href: "/fonctionnalites/clients" },
      { title: "Support FR", text: "Une équipe à Toulouse, joignable quand un site bloque.", href: "/contact" },
    ],
  },
  vsTitle: "Pourquoi pas Excel pour vos sites de bureaux ?",
  faq: [
    {
      q: "PROGESTI convient-il aux entreprises multi-étages ?",
      a: "Oui. Vous structurez sites et zones (étages, parties communes) avec fréquences et agents dédiés.",
    },
    {
      q: "Peut-on gérer des équipes de nuit ou tôt le matin ?",
      a: "Oui. Les créneaux et affectations sont libres : tôt le matin, soirée ou nuit selon vos contrats.",
    },
    {
      q: "Le pointage est-il utile pour les clients tertiaires ?",
      a: "Oui. Arrivée et départ horodatés — utile en cas de litige ou pour justifier la facturation.",
    },
    {
      q: "Combien coûte PROGESTI pour une TPE bureaux ?",
      a: `Gratuit pour indépendants (1 admin, tous modules). Pro et Premium pour les équipes. ${trialCopy.noCard}.`,
    },
    {
      q: "Peut-on remplacer Excel progressivement ?",
      a: "Oui. Beaucoup démarrent par le planning + pointage, puis branchent la facturation.",
    },
    {
      q: "Les modules sont-ils payants en plus ?",
      a: "Non. Tous les modules sont inclus, même dans l'offre Gratuit pour indépendants.",
    },
    {
      q: "Peut-on gérer plusieurs prestations aux fréquences différentes sur un même site ?",
      a: "Oui. Un site peut porter plusieurs prestations, chacune avec sa fréquence : par exemple open space chaque jour, sanitaires chaque semaine, vitrerie chaque mois.",
    },
    {
      q: "Comment répondre à un facility manager qui conteste un passage ?",
      a: "Vous ouvrez l'historique du site : jour, heure d'arrivée et de départ, agent. La réponse repose sur des heures pointées, et la facture de la période reprend ce qui a été réalisé.",
    },
  ],
});

export const syndicsConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "syndics",
  extraNotes: [
    { before: "Pour chiffrer un contrat d'immeuble, voir le ", href: '/logiciel-devis-nettoyage', anchor: 'devis pour un syndic ou une copropriété', after: ', rattaché au client et à ses sites.' },
  ],
  seo: {
    title: "Logiciel nettoyage syndics & parties communes",
    description:
      `Multi-immeubles, passages récurrents, preuves terrain pour syndics. PROGESTI gratuit pour indépendants. ${trialCopy.label}.`,
    path: "/solutions/syndics",
  },
  hero: {
    h1Lead: "Logiciel nettoyage syndics",
    h1: "pour parties communes et multi-immeubles",
    sub: "Halls, cages d’escalier, locaux techniques : planning, preuves et historique pour vos interlocuteurs immobiliers.",
    claimBefore: "Du hall à la",
    claimHighlight: "preuve",
    claimSub: "Reporting syndic sans dossier papier",
    trustLeft: "Adapté aux prestataires syndic et immobilier",
    productStripLabel: "Multi-immeubles · passages tracés",
  },
  empathy: {
    h2: "Tenir vos contrats syndic sans improvisation",
    body: "Portefeuille d’immeubles, demandes de preuves, accès locaux techniques : le syndic veut des faits, pas des promesses. PROGESTI centralise planning, pointages et historique pour répondre vite — et facturer ce qui est réellement fait.",
  },
  showcase: {
    title: "Preuves prêtes pour le syndic",
    sub: "Passages validés, historique et remontées terrain — sans photos éparpillées.",
    image: "/screen-passages.webp",
    imageAlt: "Preuves de passages PROGESTI — parties communes",
    badgeLeft: { title: "Immeuble Les Lilas", sub: "Hall · cage · local tech" },
    badgeRight: "Preuve archivée ✓",
  },
  directAnswer: "Pour les contrats de syndics et de copropriétés, PROGESTI traite chaque immeuble comme un site avec ses fréquences, ses agents et son historique de passages. Le pointage mobile horodate les interventions, les photos de preuve se rattachent au passage, et vous répondez à une réclamation avec des faits. Gratuit pour indépendants, essai 15 jours sans carte bancaire pour les équipes.",
  scenarios: {
    h2: "Trois situations typiques avec un syndic",
    intro: "Ce qui revient dans la gestion des parties communes, des halls et des cages d'escalier.",
    items: [
      { title: "Un copropriétaire dit que le hall n'a pas été fait", text: "Vous ouvrez l'historique du site : jour, heure d'arrivée, heure de départ, agent. Si une photo a été prise pendant le passage, elle est rattachée à l'intervention. Le syndic reçoit une réponse précise." },
      { title: "Trente immeubles, plusieurs syndics", text: "Clients et sites sont séparés : chaque syndic a ses immeubles, ses fréquences et ses interlocuteurs. Un portefeuille ne se mélange pas avec un autre." },
      { title: "Les codes, les clés, le local technique", text: "Les consignes d'accès sont sur la fiche du site et visibles depuis le mobile de l'agent, y compris le remplaçant du jour. Plus de code d'entrée perdu dans un fil de messages." },
    ],
  },
  proof: {
    h2: "Ce que demande un syndic à son prestataire",
    quote: "Le syndic veut des faits, pas des promesses.",
    items: [
      { title: "Un site par immeuble", text: "Halls, cages, locaux techniques : chaque immeuble garde ses fréquences et son historique." },
      { title: "Des passages prouvables", text: "Pointage horodaté et photos de preuve rattachées à l'intervention." },
      { title: "Prix public", text: "Gratuit pour indépendants, Pro 49,99 € HT/mois, Premium 99,99 € HT/mois. Essai 15 jours sans carte bancaire." },
    ],
  },
  grid: {
    h2Lead: "Aussi carré que",
    h2Highlight: "vos engagements syndic",
    lead: "De quoi répondre à un syndic sans fouiller dans les messages et les dossiers.",
    items: [
      { title: "Immeubles et fréquences", text: "Quotidien, hebdomadaire, mensuel : programmés une fois par immeuble.", href: "/logiciel-planning-nettoyage" },
      { title: "Pointage par immeuble", text: "Chaque passage est horodaté et rattaché au bon site.", href: "/fonctionnalites/pointage" },
      { title: "Preuves de passage", text: "Historique et photos pour répondre à une réclamation.", href: "/fonctionnalites/pointage" },
      { title: "Facturation par contrat", text: "Ce qui a été fait sur chaque immeuble alimente la facture du syndic.", href: "/logiciel-facturation-proprete" },
      { title: "Portefeuilles syndic", text: "Un client par syndic, des sites par immeuble, des contrats lisibles.", href: "/fonctionnalites/clients" },
      { title: "Support FR", text: "Une équipe à Toulouse qui répond quand un hall pose problème.", href: "/contact" },
    ],
  },
  vsTitle: "Pourquoi pas Excel pour vos immeubles en syndic ?",
  faq: [
    {
      q: "PROGESTI gère-t-il plusieurs immeubles ?",
      a: "Oui. Chaque immeuble est un site avec fréquences, agents et historique de passages.",
    },
    {
      q: "Peut-on prouver les passages aux syndics ?",
      a: "Oui. Pointages, historique et preuves conservés pour répondre aux contrôles et litiges.",
    },
    {
      q: "Est-ce adapté aux parties communes récurrentes ?",
      a: "Oui. Quotidien, hebdo, mensuel — les récurrences se programment une fois.",
    },
    {
      q: "Combien coûte PROGESTI ?",
      a: "Gratuit pour indépendants, Pro ou Premium pour les équipes. Tous modules inclus.",
    },
    {
      q: "Le support comprend-il le métier syndic ?",
      a: `Oui. Équipe FR joignable au ${site.phone}, basée à Toulouse (31).`,
    },
    {
      q: "Comment démarrer l’essai ?",
      a: `Essai ${site.trialDays} jours gratuit, sans carte bancaire.`,
    },
    {
      q: "Peut-on retrouver un passage de il y a plusieurs semaines ?",
      a: "Oui. L'historique se filtre par site, agent et période : vous retrouvez le jour, les heures d'arrivée et de départ, et les éléments rattachés au passage.",
    },
    {
      q: "Que peut-on transmettre à un syndic après une réclamation ?",
      a: "Vous partez de l'historique du site : jour, heures d'arrivée et de départ, agent, et les photos rattachées au passage. Vous gardez la main sur ce que vous envoyez.",
    },
  ],
});

export const professionnelsConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "professionnels",
  seo: {
    title: "Logiciel nettoyage commerces & cabinets",
    description:
      `Cabinets médicaux, commerces, restaurants : horaires serrés, accès sensibles, preuves. PROGESTI gratuit pour indépendants. ${trialCopy.label}.`,
    path: "/solutions/professionnels",
  },
  hero: {
    h1Lead: "Logiciel nettoyage professionnels",
    h1: "pour commerces et locaux à accès sensibles",
    sub: "Créneaux serrés, codes d’accès, exigences d’hygiène — planning et pointage sans chaos WhatsApp.",
    claimBefore: "De l’accès à la",
    claimHighlight: "preuve",
    claimSub: "Cabinets, commerces, restaurants",
    trustLeft: "Locaux pros avec contraintes d’horaires",
    productStripLabel: "Créneaux serrés · statuts live",
  },
  empathy: {
    h2: "Des locaux pros qui ne tolèrent pas l’approximation",
    body: "Fermeture à 19 h, passage avant ouverture, cabinet médical stérile : une équipe en retard ou un accès mal transmis casse la relation client. PROGESTI aligne planning, consignes d’accès et preuves pour des interventions carrées.",
  },
  showcase: {
    title: "Créneaux respectés, preuves à l’appui",
    sub: "Pointage horodaté et détails d’intervention — le client pro rassuré, le bureau serein.",
    image: "/screen-telegestion.webp",
    imageAlt: "Pointage PROGESTI — intervention locaux professionnels",
    badgeLeft: { title: "Cabinet Pasteur", sub: "10:30–12:00 · accès OK" },
    badgeRight: "Intervention validée ✓",
  },
  directAnswer: "Pour le nettoyage de cabinets, commerces et restaurants, PROGESTI gère des créneaux courts site par site, centralise les consignes d'accès sur la fiche du site et horodate chaque passage depuis le mobile de l'agent. Le réalisé alimente ensuite la facture. Gratuit pour indépendants, Pro 49,99 € HT/mois, Premium 99,99 € HT/mois, essai de 15 jours sans carte bancaire.",
  scenarios: {
    h2: "Trois situations typiques en locaux professionnels",
    intro: "Cabinets, boutiques, restaurants : des horaires courts et des accès sensibles.",
    items: [
      { title: "Un cabinet fermé à 19 h, à nettoyer à 19 h 15", text: "Le créneau est court et ne bouge pas. L'agent voit son passage du jour sur son mobile, avec l'adresse et les consignes du site, et son arrivée est horodatée." },
      { title: "Le code d'alarme circule encore par SMS", text: "Codes, clés et consignes particulières sont sur la fiche du site. Quand l'agent habituel est absent, le remplaçant retrouve la même information." },
      { title: "Le commerçant conteste le passage de mardi", text: "Vous sortez l'historique : jour, heures d'arrivée et de départ, agent. La discussion porte sur des heures, pas sur des impressions." },
    ],
  },
  proof: {
    h2: "Ce que demande un local professionnel",
    quote: "Une équipe en retard ou un accès mal transmis, et la relation client en pâtit.",
    items: [
      { title: "Créneaux site par site", text: "Chaque local a ses horaires et son rythme de passage." },
      { title: "Accès centralisés", text: "Codes, clés et consignes sur la fiche du site, visibles sur mobile." },
      { title: "Prix public", text: "Gratuit pour indépendants, Pro 49,99 € HT/mois, Premium 99,99 € HT/mois. Essai 15 jours sans carte bancaire." },
    ],
  },
  grid: {
    h2Lead: "Aussi précis que",
    h2Highlight: "vos horaires de fermeture",
    lead: "Pour des locaux où le moindre écart d'horaire ou d'accès se remarque.",
    items: [
      { title: "Créneaux courts", text: "Un planning par site, avec les horaires propres à chaque local.", href: "/logiciel-planning-nettoyage" },
      { title: "Pointage à l'arrivée", text: "Arrivée et départ horodatés depuis le mobile de l'agent.", href: "/fonctionnalites/pointage" },
      { title: "Historique du local", text: "Chaque passage reste consultable en cas de contestation.", href: "/fonctionnalites/pointage" },
      { title: "Facture du réalisé", text: "Les passages effectués alimentent la facture du client pro.", href: "/logiciel-facturation-proprete" },
      { title: "Consignes d'accès", text: "Codes, clés et particularités du local sur la fiche site.", href: "/fonctionnalites/clients" },
      { title: "Support FR", text: "Une équipe à Toulouse, joignable quand un accès pose problème.", href: "/contact" },
    ],
  },
  vsTitle: "Pourquoi pas Excel pour vos locaux professionnels ?",
  faq: [
    {
      q: "Peut-on gérer des créneaux très courts ?",
      a: "Oui. Les plages horaires et affectations sont configurables site par site.",
    },
    {
      q: "Les infos d’accès sont-elles centralisées ?",
      a: "Oui. Codes, clés et consignes sur la fiche site — visibles sur mobile.",
    },
    {
      q: "Est-ce adapté aux cabinets médicaux ?",
      a: "Oui. Passages planifiés, pointés et historisés — utile pour l’hygiène et la relation client.",
    },
    {
      q: "Prix et essai ?",
      a: `Gratuit (0 € HT/mois) pour indépendants ; Pro 49,99 € HT/mois ; Premium 99,99 € HT/mois · ${trialCopy.noCard.toLowerCase()}.`,
    },
    {
      q: "Facturation depuis le terrain ?",
      a: "Oui. Le réalisé alimente la facturation sans ressaisie.",
    },
    {
      q: "Support en France ?",
      a: `Oui — ${site.phone}.`,
    },
    {
      q: "Peut-on noter des consignes propres à un local (alarme, clés, zone sensible) ?",
      a: "Oui. Les consignes d'accès et les particularités du local se renseignent sur la fiche du site et sont consultables depuis le mobile.",
    },
    {
      q: "Comment prouver un passage à un cabinet ou à un commerçant ?",
      a: "Le pointage horodate l'arrivée et le départ de l'agent sur le site ; l'historique se consulte par site, agent et période.",
    },
  ],
});

export const finDeChantierConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "fin-de-chantier",
  extraNotes: [
    { before: 'Avant le chantier, le ', href: '/logiciel-devis-nettoyage', anchor: 'devis de fin de chantier', after: ' est rattaché au client et au site, puis converti en contrat.' },
  ],
  seo: {
    title: "Logiciel fin de chantier : remise en état, photos",
    description:
      `Remise en état après travaux : planning serré, preuves photos, facturation rapide. Gratuit pour indépendants. ${trialCopy.noCard}.`,
    path: "/solutions/fin-de-chantier",
  },
  hero: {
    h1Lead: "Logiciel fin de chantier",
    h1: "pour remise en état et prestations ponctuelles",
    sub: "Organisez les équipes, capturez les preuves et facturez dès la livraison — sans double saisie.",
    claimBefore: "Du chantier à la",
    claimHighlight: "facture",
    claimSub: "Prestations ponctuelles, délais serrés",
    trustLeft: "Remise en état et nettoyage post-travaux",
    productStripLabel: "Devis · exécution · facture",
  },
  empathy: {
    h2: "Enchaîner les remises en état sans perdre la marge",
    body: "Planning serré, équipes à mobiliser vite, photos de livraison et facturation immédiate : la fin de chantier ne pardonne pas le flou. PROGESTI relie devis, exécution terrain et facture dans un seul flux.",
  },
  showcase: {
    title: "Devis signé → équipe → facture",
    sub: "Enchaînez commercial et ops sans retaper les heures dans un second outil.",
    image: "/screen-factures.webp",
    imageAlt: "Facturation PROGESTI — fin de chantier",
    badgeLeft: { title: "Chantier livré", sub: "Preuve photo · heures OK" },
    badgeRight: "Facture prête ✓",
  },
  directAnswer: "Pour une remise en état après travaux, PROGESTI relie le devis, les passages ponctuels, les heures pointées et la facture dans un même dossier client. Vous planifiez l'équipe sur des créneaux courts, conservez les photos de livraison avec l'intervention et facturez le réalisé. Gratuit pour indépendants, essai 15 jours sans carte bancaire pour les équipes.",
  scenarios: {
    h2: "Trois situations typiques en fin de chantier",
    intro: "Des interventions ponctuelles, des délais serrés et un conducteur de travaux à rassurer.",
    items: [
      { title: "Livraison dans 48 heures", text: "Le devis est accepté, il faut mobiliser du monde vite. Vous créez les passages ponctuels liés au devis, vous affectez les agents disponibles et chacun voit son passage sur son mobile." },
      { title: "Le conducteur de travaux veut une preuve avant de valider", text: "Les photos prises pendant l'intervention et les heures pointées restent rattachées au passage. Vous transmettez un dossier clair plutôt qu'un lot de messages." },
      { title: "Le chantier s'est prolongé d'une journée", text: "Les heures réellement pointées sont dans le dossier. Si votre devis le prévoit au temps passé, vous facturez le réalisé et pas une estimation." },
    ],
  },
  proof: {
    h2: "Ce que demande une fin de chantier",
    quote: "La fin de chantier ne pardonne pas le flou.",
    items: [
      { title: "Un dossier par chantier", text: "Devis, passages, pointages, photos et facture restent liés au même client et au même site." },
      { title: "Des passages ponctuels", text: "Pas besoin de contrat récurrent : vous planifiez une intervention isolée liée au devis accepté." },
      { title: "Prix public", text: "Gratuit pour indépendants, Pro 49,99 € HT/mois, Premium 99,99 € HT/mois. Essai 15 jours sans carte bancaire." },
    ],
  },
  grid: {
    h2Lead: "Aussi réactif que",
    h2Highlight: "vos livraisons de chantier",
    lead: "Du devis accepté à la facture finale, sans changer d'outil.",
    items: [
      { title: "Passages ponctuels", text: "Une intervention isolée, liée au devis accepté, sur le créneau demandé.", href: "/logiciel-planning-nettoyage" },
      { title: "Heures de chantier", text: "Chaque équipe pointe son arrivée et son départ sur le site.", href: "/fonctionnalites/pointage" },
      { title: "Photos et historique", text: "Les éléments de livraison restent rattachés au passage.", href: "/fonctionnalites/pointage" },
      { title: "Devis puis facture", text: "Le devis accepté et le réalisé se retrouvent dans la facture finale.", href: "/logiciel-facturation-proprete" },
      { title: "Dossier chantier", text: "Client, site, contact du conducteur de travaux au même endroit.", href: "/fonctionnalites/clients" },
      { title: "Support FR", text: "Une équipe à Toulouse pour vous aider à lancer un premier chantier.", href: "/contact" },
    ],
  },
  vsTitle: "Pourquoi pas Excel pour vos remises en état ?",
  faq: [
    {
      q: "PROGESTI convient-il aux prestations ponctuelles ?",
      a: "Oui. Devis, planning one-shot et facturation dans le même outil.",
    },
    {
      q: "Peut-on joindre des preuves photos ?",
      a: "Oui. Preuves et historique conservés avec les interventions.",
    },
    {
      q: "Facturation rapide après livraison ?",
      a: "Oui. Le pointage et le réalisé alimentent la facture.",
    },
    {
      q: "Prix ?",
      a: "Gratuit pour indépendants, Pro 49,99 €, Premium 99,99 € HT/mois.",
    },
    {
      q: "Essai gratuit ?",
      a: `Oui — ${site.trialDays} jours, sans carte bancaire.`,
    },
    {
      q: "Migration depuis Excel ?",
      a: "Accompagnement possible pour reprendre clients et chantiers.",
    },
    {
      q: "Peut-on facturer un chantier au temps passé ?",
      a: "Oui si votre devis le prévoit : les lignes du devis sont à l'heure ou au forfait, et les heures pointées servent de base pour la facture au réalisé.",
    },
    {
      q: "Comment garder une preuve de livraison ?",
      a: "Les photos prises pendant l'intervention se rattachent au passage, avec l'heure d'arrivée et de départ de l'équipe.",
    },
  ],
});

export const autoEntrepreneursConfig = mergeIndustryConfig(defaultIndustryConfig, {
  slug: "auto-entrepreneurs",
  seo: {
    title: "Logiciel nettoyage auto-entrepreneur : 0 €/mois",
    description:
      `Indépendants, micro et auto-entrepreneurs du nettoyage : offre Gratuit à 0 € HT/mois, tous modules inclus (planning, pointage, factures).`,
    path: "/solutions/auto-entrepreneurs",
  },
  hero: {
    h1Lead: "Logiciel nettoyage TPE",
    h1: "pour démarrer sans usine à gaz",
    sub: "Facturation, suivi client, planning et pointage — Gratuit pour indépendants, tous modules inclus.",
    claimBefore: "D’Excel à la",
    claimHighlight: "facture",
    claimSub: "Simple, tout inclus, prix public",
    trustLeft: "Pensé pour les petites équipes propreté",
    productStripLabel: "Gratuit · tous modules inclus",
  },
  empathy: {
    h2: "Professionnaliser sans vous noyer",
    body: "Vous jonglez entre Excel, WhatsApp et factures Word : une heure oubliée, un site en double, une facture en retard. PROGESTI regroupe l’essentiel pour une TPE propre — sans module surprise ni devis opaque. Notre logiciel de nettoyage gratuit vous donne accès à la facturation, au planning et au pointage dès maintenant — 0 € par mois pour les indépendants.",
  },
  showcase: {
    title: "Tout inclus, prix affiché",
    sub: "Planning, pointage, devis, factures, RH — Gratuit pour indépendants.",
    image: "/screen-telegestion.webp",
    imageAlt: "Tableau de bord PROGESTI — vue activité TPE",
    badgeLeft: { title: "Gratuit · Pro · Premium", sub: "Tous modules inclus" },
    badgeRight: "Gratuit pour indépendants",
  },
  directAnswer: "Si vous êtes indépendant, micro-entrepreneur ou auto-entrepreneur du nettoyage, l'offre Gratuit de PROGESTI coûte 0 € HT par mois, avec un administrateur et tous les modules : clients, planning, pointage, devis, facturation. Quand vous embauchez, l'offre Pro passe à 49,99 € HT/mois pour 5 utilisateurs, avec 15 jours d'essai sans carte bancaire.",
  scenarios: {
    h2: "Trois situations typiques quand on travaille seul ou à deux",
    intro: "Pour un indépendant du nettoyage qui veut arrêter de jongler entre Word, Excel et WhatsApp.",
    items: [
      { title: "Vos devis et vos factures sont encore dans Word", text: "Vous créez le devis depuis la fiche client, le client le signe en ligne, puis la facture reprend ce qui a été fait. En cas d'erreur sur une facture envoyée, un avoir la corrige." },
      { title: "Huit clients répartis sur trois jours", text: "Vous programmez chaque client avec sa fréquence : la semaine se construit sans refaire un tableau chaque dimanche soir." },
      { title: "Vous embauchez votre premier salarié", text: "L'offre Gratuit comprend un administrateur. Pour ajouter des utilisateurs, vous passez sur Pro : 5 utilisateurs à 49,99 € HT/mois. Votre agent peut alors pointer depuis son mobile." },
    ],
  },
  proof: {
    h2: "Pour démarrer sans usine à gaz",
    quote: "Un prix affiché, tous les modules, et personne ne vous facture une option en plus.",
    items: [
      { title: "0 € HT/mois pour un indépendant", text: "1 administrateur et tous les modules, réservé aux indépendants, micro-entreprises et auto-entrepreneurs." },
      { title: "Une montée en gamme claire", text: "Pro à 49,99 € HT/mois (5 utilisateurs), Premium à 99,99 € HT/mois (20 utilisateurs)." },
      { title: "Essai sans carte", text: "15 jours pour tester les offres payantes sans carte bancaire." },
    ],
  },
  grid: {
    h2Lead: "Aussi simple que",
    h2Highlight: "votre quotidien d'indépendant",
    lead: "L'essentiel d'une petite activité de propreté, sans module en plus à payer.",
    items: [
      { title: "Planning de vos clients", text: "Chaque client avec sa fréquence, sans refaire la semaine à la main.", href: "/logiciel-planning-nettoyage" },
      { title: "Pointage mobile", text: "Utile dès que vous travaillez à deux ou avec un salarié.", href: "/fonctionnalites/pointage" },
      { title: "Historique client", text: "Vos passages restent consultables si un client conteste.", href: "/fonctionnalites/pointage" },
      { title: "Devis et factures", text: "Du devis signé en ligne à la facture, avec avoir en cas de correction.", href: "/logiciel-facturation-proprete" },
      { title: "Fiches clients", text: "Adresses, accès et contacts au même endroit.", href: "/fonctionnalites/clients" },
      { title: "Support FR", text: "Une équipe à Toulouse qui répond quand vous démarrez.", href: "/contact" },
    ],
  },
  vsTitle: "Pourquoi pas Excel et Word pour une petite activité ?",
  faq: [
    {
      q: "PROGESTI est-il adapté aux auto-entrepreneurs ?",
      a: "Oui. Prise en main rapide, prix unique, pas de module payant en plus.",
    },
    {
      q: "Combien ça coûte vraiment ?",
      a: "Gratuit pour indépendants (1 admin), Pro 49,99 € HT/mois (5 utilisateurs), Premium 99,99 € HT/mois (20 utilisateurs).",
    },
    {
      q: "Faut-il une carte bancaire pour l’essai ?",
      a: `Non. Essai ${site.trialDays} jours gratuit.`,
    },
    {
      q: "Puis-je remplacer WhatsApp pour le planning ?",
      a: "Oui. Planning et pointage mobile centralisés — une seule vérité.",
    },
    {
      q: "Combien de temps pour démarrer ?",
      a: "Quelques minutes pour créer le compte et ajouter vos premiers sites.",
    },
    {
      q: "Support disponible ?",
      a: `Oui — ${site.phone}, équipe FR à Toulouse.`,
    },
    {
      q: "Où trouver plus d'infos sur l'offre gratuite ?",
      a: "Consultez notre page logiciel nettoyage gratuit pour tout savoir : fonctionnalités incluses, différences avec Pro/Premium, et comment démarrer.",
    },
    {
      q: "L'offre Gratuit est-elle limitée en modules ?",
      a: "Non : l'offre Gratuit (0 € HT/mois) donne accès à tous les modules, avec 1 administrateur. Elle est réservée aux indépendants, micro-entreprises et auto-entrepreneurs.",
    },
    {
      q: "Que se passe-t-il quand j'embauche ?",
      a: "Pour ajouter des utilisateurs, vous passez sur l'offre Pro (5 utilisateurs, 49,99 € HT/mois) ou Premium (20 utilisateurs, 99,99 € HT/mois), avec 15 jours d'essai sans carte bancaire.",
    },
  ],
});

export const industryConfigs = {
  default: defaultIndustryConfig,
  bureaux: bureauxConfig,
  syndics: syndicsConfig,
  professionnels: professionnelsConfig,
  "fin-de-chantier": finDeChantierConfig,
  "auto-entrepreneurs": autoEntrepreneursConfig,
} as const;
