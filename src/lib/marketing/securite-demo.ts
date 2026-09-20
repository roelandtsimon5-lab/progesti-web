/**
 * Démos produit uniques — verticale Sécurité / Gardiennage uniquement.
 * Ne pas réutiliser pour EV / propreté.
 */

export type SecuriteDemoVariant =
  | "pilier-flux"
  | "hub-parcours"
  | "planning-vacations"
  | "rondes-qr"
  | "effectif-agents"
  | "fiche-site-consignes"
  | "industriel-tracabilite"
  | "retail-multi-postes"
  | "event-staffing"
  | "copro-reporting-syndic"
  | "pointage-presence"
  | "preuves-audit"
  | "multi-sites-portfolio"
  | "facturation-realise"
  | "excel-migration"
  | "faq-parcours"
  | "guide-vacations"
  | "local-toulouse"
  | "astreinte-nuit"
  | "pme-site"
  | "grands-comptes"
  | "contrats-cadres"
  | "tpe-lean"
  | "main-courante"
  | "ssiap-postes"
  | "sites-sensibles"
  | "btp-chantiers"
  | "pc-securite-remote"
  | "remplacement-urgence"
  | "vacation-non-pourvue"
  | "reporting-client"
  | "week-end-jours-feries"
  | "heures-contestees"
  | "chef-exploitation";

export type SecuriteDemoConfig = {
  variant: SecuriteDemoVariant;
  eyebrow: string;
  title: string;
  lead: string;
  /** Lignes / étapes visibles dans le mock (terrain, pas jargon SaaS) */
  rows: readonly { label: string; meta: string; status: string }[];
  footnote: string;
};

/** Contenu démo par variante — une identité visuelle/narrative par page. */
export const securiteDemoCatalog: Record<SecuriteDemoVariant, Omit<SecuriteDemoConfig, "variant">> = {
  "pilier-flux": {
    eyebrow: "Démo produit · flux société de sécurité",
    title: "Du planning de vacation à la facture du réalisé",
    lead: "Affectation → présence / ronde → historique → facturation. Une seule chaîne pour le bureau et le terrain.",
    rows: [
      { label: "Usine Nord — poste entrée", meta: "22h–6h · Agent M. Dupont", status: "Confirmée" },
      { label: "Ronde parking + locaux tech", meta: "3 passages · QR validés", status: "Preuves OK" },
      { label: "Facture mars — contrat cadre", meta: "Heures pointées = heures facturées", status: "Prête" },
    ],
    footnote: "Illustration du flux PROGESTI — pas un engagement de résultat juridique ou CNAPS.",
  },
  "hub-parcours": {
    eyebrow: "Démo produit · orienter le besoin",
    title: "Trois intentions, trois parcours — sans mélanger les pages",
    lead: "Gardiennage poste fixe, rondes prouvées, ou event one-shot : chaque besoin a sa page et sa démo.",
    rows: [
      { label: "Poste fixe / vacation", meta: "→ /securite/gardiennage", status: "Service" },
      { label: "Rondes & preuves", meta: "→ /securite/rondes-surveillance", status: "Service" },
      { label: "Event / one-shot", meta: "→ /securite/evenementiel", status: "Audience" },
    ],
    footnote: "Hub de navigation SEO — pas une page « fourre-tout » qui cannibalise les filles.",
  },
  "planning-vacations": {
    eyebrow: "Démo produit · planning vacations",
    title: "Semaine type : posts couverts, backups visibles",
    lead: "Titulaire, backup, trou rouge. Le chef d’exploitation voit la faille avant le client à l’entrée.",
    rows: [
      { label: "Lun 22h — Entrepôt A", meta: "Titulaire OK · Backup prêt", status: "Couvert" },
      { label: "Mar 6h — Entrepôt A", meta: "Absence signalée 4h avant", status: "Backup affecté" },
      { label: "Mer 22h — Entrepôt B", meta: "Aucun agent assigné", status: "Trou · à pourvoir" },
    ],
    footnote: "Planning illustratif — remplacements gérés dans le même outil que les vacations.",
  },
  "rondes-qr": {
    eyebrow: "Démo produit · rondes & passages",
    title: "Ronde de nuit : points de passage horodatés",
    lead: "Ce n’est plus « on a fait le tour ». C’est qui, où, à quelle heure — exploitable en audit client.",
    rows: [
      { label: "Point A — portail camions", meta: "00:12 · agent en vacation", status: "Validé" },
      { label: "Point B — local TGBT", meta: "00:28 · photo optionnelle", status: "Validé" },
      { label: "Point C — parking VL", meta: "Non scanné · alerte exploitation", status: "Manquant" },
    ],
    footnote: "Preuves de passage via pointage mobile / historique — pas un boîtier hardware vendu ici.",
  },
  "effectif-agents": {
    eyebrow: "Démo produit · effectif agents",
    title: "Qui peut tenir quel poste cette nuit ?",
    lead: "Disponibilité, vacation déjà prise, compétence site : le bon agent, pas le premier numéro WhatsApp.",
    rows: [
      { label: "A. Benali", meta: "Dispo · déjà briefé site Usine", status: "Prioritaire" },
      { label: "L. Moreau", meta: "Vacation autre site 22h–6h", status: "Indispo" },
      { label: "K. Rossi", meta: "Dispo · 1re fois sur ce site", status: "Briefing requis" },
    ],
    footnote: "Gestion d’effectif liée au planning — pas un SIRH complet ni un outil CNAPS.",
  },
  "fiche-site-consignes": {
    eyebrow: "Démo produit · fiche site",
    title: "Consignes site : ce que l’agent doit savoir avant d’entrer",
    lead: "Contacts, accès, particularités, chaîne d’alerte. Sur mobile, pas dans un classeur au bureau.",
    rows: [
      { label: "Accès", meta: "Badge + code digicode · horaires livraison", status: "À jour" },
      { label: "Consignes sûreté", meta: "Zones interdites · rondes obligatoires", status: "Lues" },
      { label: "Escalade", meta: "Chef de poste → responsable site client", status: "Visible" },
    ],
    footnote: "Organisation des infos d’accès — pas un contrôle d’accès physique / badgeuse hardware.",
  },
  "industriel-tracabilite": {
    eyebrow: "Démo produit · site industriel",
    title: "Usine / entrepôt : vacation + ronde + historique audit",
    lead: "Accès stricts, horaires atypiques, demandes de preuve : le flou ne passe pas un audit donneur d’ordre.",
    rows: [
      { label: "Poste entrée poids lourds", meta: "Vacation 18h–6h · pointage OK", status: "Tenue" },
      { label: "Ronde quais + locaux tech", meta: "6 points · 2 tours/nuit", status: "Historisé" },
      { label: "Export client mars", meta: "Présences + passages", status: "Prêt audit" },
    ],
    footnote: "Traçabilité opérationnelle pour contrats industriels — claims réalistes, sans « conformité certifiée » abusive.",
  },
  "retail-multi-postes": {
    eyebrow: "Démo produit · retail / centre commercial",
    title: "Samedi après-midi : multi-postes sous pression fréquentation",
    lead: "Entrée, parking, galerie, stock : plusieurs postes, un planning lisible, des remplacements rapides.",
    rows: [
      { label: "Entrée principale", meta: "2 agents · pic 14h–18h", status: "Renforcé" },
      { label: "Parking niveau -1", meta: "1 agent · rondes horaires", status: "OK" },
      { label: "Livraisons arrière", meta: "Créneau 7h–11h · vacation courte", status: "Couvert" },
    ],
    footnote: "Organisation multi-postes retail — distinct du gardiennage industriel ou résidentiel.",
  },
  "event-staffing": {
    eyebrow: "Démo produit · événementiel",
    title: "J-1 concert : postes, briefings, vacation one-shot",
    lead: "Pas de contrat mensuel flou. Devis → affectation → présence → facture rapide après l’événement.",
    rows: [
      { label: "Contrôle accès fosse", meta: "18h–00h · 4 agents", status: "Confirmés" },
      { label: "Périmètre parking", meta: "17h–01h · 2 agents", status: "Confirmés" },
      { label: "Facturation event #4821", meta: "Heures réalisées agrégées", status: "Brouillon" },
    ],
    footnote: "Staffing one-shot — angle distinct des contrats sites récurrents.",
  },
  "copro-reporting-syndic": {
    eyebrow: "Démo produit · copropriété",
    title: "Ce que le syndic peut recevoir sans reconstruction Excel",
    lead: "Présence agent, passages, incidents notés : un reporting lisible pour l’AG ou le conseil syndical.",
    rows: [
      { label: "Résidence Les Pins", meta: "Vacation soir · 20h–0h", status: "Pointée" },
      { label: "Tour parking + halls", meta: "Passages 21h / 23h", status: "Historisé" },
      { label: "Synthèse mois", meta: "Export pour syndic", status: "Disponible" },
    ],
    footnote: "Angle sécurité résidentielle — distinct des pages EV syndics / propreté syndics.",
  },
  "pointage-presence": {
    eyebrow: "Démo produit · pointage vacation",
    title: "Arrivée / départ : la présence réelle en poste",
    lead: "Finie la discussion « j’étais là ». Horodatage mobile = base saine pour paie et facturation.",
    rows: [
      { label: "Arrivée poste entrée", meta: "21:58 · mobile agent", status: "Horodatée" },
      { label: "Départ", meta: "06:02 · fin vacation", status: "Horodatée" },
      { label: "Écart vs planning", meta: "+4 min · dans tolérance", status: "OK" },
    ],
    footnote: "Pointage présence poste — complémentaire aux preuves de ronde (autre page).",
  },
  "preuves-audit": {
    eyebrow: "Démo produit · preuves & audits",
    title: "Le client demande le rapport : vous l’avez déjà",
    lead: "Vacations tenues, passages, historique. Répondre en minutes, pas en reconstruction WhatsApp.",
    rows: [
      { label: "Demande client — semaine 12", meta: "Présences + rondes", status: "Exportable" },
      { label: "Incident noté 14/03", meta: "Main courante liée", status: "Archivé" },
      { label: "Litige heures agent", meta: "Pointages vs planning", status: "Comparable" },
    ],
    footnote: "Preuves opérationnelles — pas un label « audit certifié » ni un conseil juridique.",
  },
  "multi-sites-portfolio": {
    eyebrow: "Démo produit · portefeuille multi-sites",
    title: "42 sites, une vision : où ça tient, où ça fuit",
    lead: "Quand le carnet grossit, Excel devient dangereux. Vue portefeuille : postes, trous, priorités.",
    rows: [
      { label: "Sites verts (OK)", meta: "38 / 42 · vacations couvertes", status: "Stable" },
      { label: "Sites orange", meta: "3 · backup faible cette nuit", status: "Attention" },
      { label: "Sites rouges", meta: "1 · vacation non pourvue", status: "Urgent" },
    ],
    footnote: "Scalabilité opérationnelle — parallèle EV multi-sites mais lexique vacations / postes.",
  },
  "facturation-realise": {
    eyebrow: "Démo produit · facturation gardiennage",
    title: "Heures vendues vs heures faites : aligner la facture",
    lead: "Le réalisé terrain alimente la facture. Moins d’écarts, moins de négociations de fin de mois.",
    rows: [
      { label: "Contrat Usine Nord", meta: "176 h planifiées · 174 h pointées", status: "Facturable" },
      { label: "Heures supp. event", meta: "12 h · hors forfait", status: "Ligne ajoutée" },
      { label: "Facture n°…", meta: "Brouillon → envoi", status: "Prête" },
    ],
    footnote: "Facturation du réalisé — pas une promesse de recouvrement automatique à 100 %.",
  },
  "excel-migration": {
    eyebrow: "Démo produit · sortir d’Excel",
    title: "Avant / après : le même week-end, deux mondes",
    lead: "Tableur + WhatsApp vs planning, pointage, historique. Moins de charge mentale, plus de preuves.",
    rows: [
      { label: "Avant", meta: "Fichier « planning_v17_FINAL.xlsx »", status: "Fragile" },
      { label: "Avant", meta: "Groupe WhatsApp 48 agents", status: "Bruyant" },
      { label: "Après", meta: "Vacation + preuve + facture liées", status: "Traçable" },
    ],
    footnote: "Comparatif organisationnel — sans dénigrement concurrentiel de logiciels tiers.",
  },
  "faq-parcours": {
    eyebrow: "Démo produit · questions fréquentes",
    title: "De la question au bon module, sans tourner en rond",
    lead: "« Comment prouver une ronde ? » « Comment facturer une vacation event ? » → pages et écrans ciblés.",
    rows: [
      { label: "Preuve de ronde", meta: "→ rondes + pointage", status: "Réponse" },
      { label: "Trou de vacation", meta: "→ planning + remplacements", status: "Réponse" },
      { label: "Prix / essai", meta: "→ tarifs publics + essai sans CB", status: "Réponse" },
    ],
    footnote: "FAQ indexable — réponses courtes, maillage vers pages deep pour le détail.",
  },
  "guide-vacations": {
    eyebrow: "Démo produit · guide organiser vacations",
    title: "Méthode terrain : construire une semaine sans trou",
    lead: "Inventaire postes → titulaires → backups → alertes. Un process, pas un espoir.",
    rows: [
      { label: "Étape 1", meta: "Lister postes & contraintes horaires", status: "Guide" },
      { label: "Étape 2", meta: "Affecter + nommer un backup", status: "Guide" },
      { label: "Étape 3", meta: "Relire les rouges 24h avant", status: "Guide" },
    ],
    footnote: "Contenu pédagogique — complementary aux pages process planning / pointage.",
  },
  "local-toulouse": {
    eyebrow: "Démo produit · Toulouse / Occitanie",
    title: "Société locale : sites Toulouse + périphérie sur un planning",
    lead: "Logistique courte, remplacements plus réalistes, support FR basé en Occitanie (Tournefeuille).",
    rows: [
      { label: "Site Labège", meta: "Vacation nuit · agent local", status: "Couvert" },
      { label: "Site Blagnac", meta: "Poste jour · retail", status: "Couvert" },
      { label: "Support PROGESTI", meta: "FR · Tournefeuille (31)", status: "Joignable" },
    ],
    footnote: "Angle local SEO — produit national, ancrage Occitanie sans faux « exclusivité régionale ».",
  },
  "astreinte-nuit": {
    eyebrow: "Démo produit · nuit / astreinte",
    title: "Vacation nuit : qui tient, qui backup, qui alerter",
    lead: "La nuit, le trou se voit moins… jusqu’au matin où le client appelle. Anticipez.",
    rows: [
      { label: "Nuit 22h–6h", meta: "Poste entrée · titulaire", status: "Confirmé" },
      { label: "Backup nuit", meta: "Agent listé · rayon 30 min", status: "Prêt" },
      { label: "Escalade 2h", meta: "Chef d’exploitation joignable", status: "Consigné" },
    ],
    footnote: "Organisation nuit — distinct du pointage générique et du PC sécurité remote.",
  },
  "pme-site": {
    eyebrow: "Démo produit · PME / site entreprise",
    title: "Un ou deux postes chez le client PME : rester simple",
    lead: "Pas besoin d’usine à gaz. Planning clair, présence prouvée, facture mensuelle propre.",
    rows: [
      { label: "PME client — accueil", meta: "7h–19h · 1 agent", status: "Récurrent" },
      { label: "Pointage mois", meta: "Jours ouvrés tenus", status: "OK" },
      { label: "Facture forfait + extras", meta: "Lignes claires", status: "Simple" },
    ],
    footnote: "Audience PME donneurs d’ordre / prestataires sur petits volumes — vs grands comptes.",
  },
  "grands-comptes": {
    eyebrow: "Démo produit · grands comptes",
    title: "Plusieurs régions, un reporting donneur d’ordre",
    lead: "Le grand compte veut de la lisibilité. Portefeuille, preuves, facturation alignée sur le réalisé.",
    rows: [
      { label: "Périmètre national", meta: "Sites groupés par région", status: "Vue DO" },
      { label: "SLA présence", meta: "Historique exploitable", status: "Reportable" },
      { label: "Facturation consolidée", meta: "Par entité / site", status: "Structurée" },
    ],
    footnote: "Angle grands comptes — sans promesse SLA contractuelle non maîtrisée par le logiciel seul.",
  },
  "contrats-cadres": {
    eyebrow: "Démo produit · contrats cadres",
    title: "Cadre commercial vs exécution terrain : coller les deux",
    lead: "Le contrat dit X heures. Le terrain fait Y. PROGESTI aide à voir l’écart avant la facture conflictuelle.",
    rows: [
      { label: "Cadre annuel", meta: "Volume heures / sites", status: "Référencé" },
      { label: "Réalisé mois M", meta: "Pointages agrégés", status: "Mesuré" },
      { label: "Écart", meta: "Visible avant envoi facture", status: "Pilotable" },
    ],
    footnote: "Pilotage d’exécution — pas un outil juridique de rédaction de marchés publics.",
  },
  "tpe-lean": {
    eyebrow: "Démo produit · petites sociétés",
    title: "5–15 agents : un outil qui ne mange pas la journée",
    lead: "Le gérant fait encore le planning. Il lui faut simple, mobile, prix public — pas un ERP bunker.",
    rows: [
      { label: "Planning semaine", meta: "Vue claire · 12 agents", status: "Léger" },
      { label: "Pointage mobile", meta: "Sans formation interminable", status: "Terrain" },
      { label: "Prix public", meta: "Dès offre Starter · tout inclus", status: "Transparent" },
    ],
    footnote: "Positionnement TPE sécurité — complementary à la page grands comptes (anti-cannibalisation).",
  },
  "main-courante": {
    eyebrow: "Démo produit · main courante",
    title: "Incident 02:14 : noter, horodater, retrouver",
    lead: "Main courante numérique liée au site et à la vacation. Moins de carnets perdus, plus de mémoire.",
    rows: [
      { label: "02:14 — Intrusion tentée parking", meta: "Agent en vacation · site Usine", status: "Noté" },
      { label: "02:22 — Appel responsable client", meta: "Consigné dans la fiche", status: "Suivi" },
      { label: "Recherche « parking » mois", meta: "Historique filtrable", status: "Retrouvé" },
    ],
    footnote: "Outil d’organisation / historique — pas un substitut aux obligations légales de déclaration.",
  },
  "ssiap-postes": {
    eyebrow: "Démo produit · postes SSIAP",
    title: "Postes incendie / SSIAP : vacation, consignes, relève",
    lead: "Le poste a ses règles. Planning de vacation, consignes site, relève claire — sans mélanger avec le gardiennage « classique » SEO.",
    rows: [
      { label: "Poste SSIAP — tour A", meta: "Vacation 6h–14h", status: "Affectée" },
      { label: "Consignes incendie site", meta: "Sur fiche · mobile", status: "Accessibles" },
      { label: "Relève 14h", meta: "Agent suivant confirmé", status: "Prête" },
    ],
    footnote: "Organisation de postes — info générale, pas un conseil SSIAP / formation / habilitation.",
  },
  "sites-sensibles": {
    eyebrow: "Démo produit · sites à enjeux",
    title: "Sites à enjeux : consignes resserrées, preuves plus exigeantes",
    lead: "Plus le site est sensible, plus le flou coûte cher. Fiches, vacations, historique — exigence opérationnelle.",
    rows: [
      { label: "Niveau consignes", meta: "Accès restreint · briefing obligatoire", status: "Renforcé" },
      { label: "Vacation double check", meta: "Titulaire + backup nommés", status: "Exigé" },
      { label: "Preuves", meta: "Pointage + historique exportable", status: "Disponible" },
    ],
    footnote: "Angle opérationnel « sites à enjeux » — pas de claim sécurité nationale / secret défense.",
  },
  "btp-chantiers": {
    eyebrow: "Démo produit · gardiennage BTP",
    title: "Chantier : horaires glissants, accès engins, vacation variable",
    lead: "Le BTP bouge chaque semaine. Planning adapté, consignes d’accès, preuves pour le maître d’ouvrage.",
    rows: [
      { label: "Chantier lotissement Est", meta: "Vacation 18h–7h · clôture", status: "Active" },
      { label: "Accès engins", meta: "Consignes maj · fiche site", status: "MàJ" },
      { label: "Fin de phase", meta: "Vacation réduite week-end", status: "Ajustée" },
    ],
    footnote: "Audience BTP — distinct industriel permanent et event one-shot.",
  },
  "pc-securite-remote": {
    eyebrow: "Démo produit · PC / supervision",
    title: "Vue exploitation : plusieurs sites, alertes, qui est en poste",
    lead: "Le bureau (ou PC sécurité) voit l’état des vacations et peut réagir sans appeler 15 personnes.",
    rows: [
      { label: "Vue live poste", meta: "12 sites · 11 couverts", status: "Supervision" },
      { label: "Alerte trou", meta: "Site #7 · 22h sans agent", status: "Action" },
      { label: "Dispatch backup", meta: "Affectation depuis le même écran", status: "Fait" },
    ],
    footnote: "Supervision organisationnelle — pas une télésurveillance vidéo / centre de remote monitoring alarmes.",
  },
  "remplacement-urgence": {
    eyebrow: "Démo produit · remplacement urgence",
    title: "17:40 — l’agent se désiste : couvrir avant 22h",
    lead: "Le scénario classique. Backup listé, site avec consignes, confirmation mobile — tout au même endroit.",
    rows: [
      { label: "Désistement", meta: "Agent titulaire · SMS 17:40", status: "Reçu" },
      { label: "Candidats backup", meta: "3 dispo · 1 déjà briefé site", status: "Proposés" },
      { label: "Vacation reprise", meta: "Nouveau titulaire confirmé 18:05", status: "Sauvé" },
    ],
    footnote: "Process remplacement — complementary planning ; page dédiée pour intent « urgence / backup ».",
  },
  "vacation-non-pourvue": {
    eyebrow: "Démo produit · vacation non pourvue",
    title: "Le rouge avant le scandale client",
    lead: "Détecter le trou, prioriser, pourvoir. La page parle du problème ; le planning exécute.",
    rows: [
      { label: "Détection", meta: "Créneau sans agent · J-1", status: "Alerte" },
      { label: "Priorité", meta: "Site critique client A", status: "P1" },
      { label: "Pourvoi", meta: "Backup affecté · notifié", status: "Résolu" },
    ],
    footnote: "Angle problème « non pourvue » — anti-cannibalisation vs planning-agents (process) et remplacement-urgence (scénario).",
  },
  "reporting-client": {
    eyebrow: "Démo produit · reporting donneur d’ordre",
    title: "Synthèse hebdo : présences, rondes, incidents",
    lead: "Cadence client sans reconstruction WhatsApp du dimanche soir.",
    rows: [
      { label: "Vacations S12", meta: "7/7 tenues · 1 remplacement", status: "OK" },
      { label: "Rondes", meta: "Points validés", status: "Historisé" },
      { label: "Envoi DO", meta: "Facility · 08h52", status: "Envoyé" },
    ],
    footnote: "Reporting récurrent — distinct du dossier preuves sur audit ciblé.",
  },
  "week-end-jours-feries": {
    eyebrow: "Démo produit · week-end / fériés",
    title: "Pont férié : P1 verrouillés avant vendredi 18h",
    lead: "Pool dédié, backups nommés, désistement samedi absorbé.",
    rows: [
      { label: "P1 industriels", meta: "Titulaire + backup J-2", status: "Verrouillé" },
      { label: "Désistement samedi", meta: "Backup intégré 11 min", status: "Sauvé" },
      { label: "Rouges P1", meta: "0 restant", status: "OK" },
    ],
    footnote: "Angle WE/fériés — complementary planning (process semaine).",
  },
  "heures-contestees": {
    eyebrow: "Démo produit · heures contestées",
    title: "Litige −45 min : comparer planning et pointage",
    lead: "Horodatages vs déclaratif — décision tracée.",
    rows: [
      { label: "Planning", meta: "22h00 → 06h00", status: "Réf" },
      { label: "Pointage", meta: "22h18 → 06h04", status: "Horodaté" },
      { label: "Décision", meta: "Tolérance 15 · 3 min retenues", status: "Tranché" },
    ],
    footnote: "Artefacts ops — pas un conseil prud’homal / juridique.",
  },
  "chef-exploitation": {
    eyebrow: "Démo produit · chef d’exploitation",
    title: "17h → 19h : passer de 2 rouges à 0",
    lead: "Scan couverture, dispatch backup, recheck avant la nuit.",
    rows: [
      { label: "17h05 Scan", meta: "2 rouges · 1 orange", status: "Alerte" },
      { label: "17h22 P1", meta: "Entrepôt B couvert", status: "OK" },
      { label: "18h40 Recheck", meta: "0 rouge", status: "Sous contrôle" },
    ],
    footnote: "Persona / journée type — ≠ PC live ni page planning seule.",
  },
};
