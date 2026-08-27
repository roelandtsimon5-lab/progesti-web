export type PlanningRow = readonly [time: string, siteName: string, status: string];
export type TimelineRow = readonly [date: string, site: string, agent: string];
export type ReportStat = readonly [label: string, value: string];
export type UnpaidRow = readonly [client: string, amount: string, days: string];

export type RhTeamMember = {
  name: string;
  initials: string;
  contract: string;
  hours: string;
  hoursNum: number;
  hoursMax: number;
  status: "active" | "absent" | "warning";
  sites: string;
};

export type RhAbsenceRow = {
  agent: string;
  reason: string;
  replacement: string;
  sites: string;
  status: "covered" | "pending";
};

export type RhPayrollSummary = {
  period: string;
  totalHours: string;
  overtime: string;
  agentCount: string;
  exportLabel: string;
};

export type MockContext = {
  planningRows: PlanningRow[];
  planningSummary: string;
  clientName: string;
  clientMeta: string;
  clientSites: readonly string[];
  rhEntries: readonly [name: string, type: string, note: string][];
  rhTeam: readonly RhTeamMember[];
  rhAbsences: readonly RhAbsenceRow[];
  rhPayroll: RhPayrollSummary;
  rhWeekChart: readonly number[];
  dashboardSites: string;
  telegestionSite: string;
  proofSite: string;
  timelineEntries: TimelineRow[];
  reportStats: ReportStat[];
  unpaidRows: UnpaidRow[];
};

const defaultContext: MockContext = {
  planningRows: [
    ["08:00–10:00", "Immeuble Wilson", "OK"],
    ["10:30–12:00", "Cabinets Pasteur", "En cours"],
    ["14:00–16:30", "Syndic Les Lilas", "À venir"],
  ],
  planningSummary: "3 sites · 2 agents",
  clientName: "Syndic Horizon",
  clientMeta: "4 sites · Contrat annuel · Net 30",
  clientSites: ["Hall A", "Hall B", "Locaux tech.", "Parking"],
  rhEntries: [
    ["Sara M.", "Congé", "Remplacée · Site Wilson"],
    ["Karim B.", "Maladie", "Créneau 6h → Julie"],
    ["Équipe B", "Formation", "Planning ajusté"],
  ],
  rhTeam: [
    {
      name: "Sara Martin",
      initials: "SM",
      contract: "CDI 35h",
      hours: "142 h",
      hoursNum: 142,
      hoursMax: 151,
      status: "active",
      sites: "Wilson · Lilas · Pasteur",
    },
    {
      name: "Karim Benali",
      initials: "KB",
      contract: "CDI 35h",
      hours: "156 h",
      hoursNum: 156,
      hoursMax: 151,
      status: "warning",
      sites: "Syndics · parties communes",
    },
    {
      name: "Julie Rousseau",
      initials: "JR",
      contract: "CDD renfort",
      hours: "88 h",
      hoursNum: 88,
      hoursMax: 120,
      status: "active",
      sites: "Backup · bureaux matin",
    },
    {
      name: "Marc Dupont",
      initials: "MD",
      contract: "CDI 30h",
      hours: "0 h",
      hoursNum: 0,
      hoursMax: 130,
      status: "absent",
      sites: "Titulaire Haussmann",
    },
  ],
  rhAbsences: [
    {
      agent: "Marc Dupont",
      reason: "Maladie",
      replacement: "Julie Rousseau",
      sites: "Open space · Haussmann",
      status: "covered",
    },
    {
      agent: "Sara Martin",
      reason: "Congé",
      replacement: "Karim Benali",
      sites: "Immeuble Wilson",
      status: "covered",
    },
    {
      agent: "Équipe nuit",
      reason: "Formation",
      replacement: "Planning ajusté",
      sites: "3 sites reportés",
      status: "covered",
    },
  ],
  rhPayroll: {
    period: "Août 2026 · clôture J-3",
    totalHours: "1 248 h",
    overtime: "34 h",
    agentCount: "12",
    exportLabel: "Export prépaie prêt",
  },
  rhWeekChart: [28, 32, 30, 36, 38, 34, 22],
  dashboardSites: "Wilson · Pasteur · Lilas",
  telegestionSite: "2 agents sur site",
  proofSite: "Passage prouvé",
  timelineEntries: [
    ["Lun 12/08", "Hall Wilson", "Sara M."],
    ["Mar 13/08", "Cabinets Pasteur", "Karim B."],
    ["Mer 14/08", "Syndic Lilas", "Julie R."],
    ["Jeu 15/08", "Hall Wilson", "Sara M."],
  ],
  reportStats: [
    ["Passages", "48"],
    ["Taux OK", "98%"],
    ["Sites", "4"],
  ],
  unpaidRows: [
    ["Facility Corp", "2 840 €", "18"],
    ["Syndic Lilas", "1 120 €", "7"],
    ["Cabinet Pasteur", "680 €", "32"],
  ],
};

export const mockContextBySlug: Record<string, MockContext> = {
  default: defaultContext,
  bureaux: {
    ...defaultContext,
    planningRows: [
      ["06:30–08:00", "Open space R+2", "OK"],
      ["06:30–08:00", "Étage R+4", "En cours"],
      ["19:00–21:00", "Immeuble Haussmann", "À venir"],
    ],
    planningSummary: "3 étages · 2 agents",
    clientName: "Facility Corp Tertiaire",
    clientMeta: "6 étages · Créneaux tôt / soir",
    clientSites: ["R+2 Open space", "R+4 Bureaux", "RDC Accueil", "Parking"],
    rhEntries: [
      ["Julie R.", "Congé", "Backup · Open space"],
      ["Marc D.", "Retard", "Alarme déverrouillée 06:28"],
      ["Équipe nuit", "OK", "3 sites avant 8h"],
    ],
    rhTeam: [
      {
        name: "Julie Rousseau",
        initials: "JR",
        contract: "CDI 35h",
        hours: "148 h",
        hoursNum: 148,
        hoursMax: 151,
        status: "warning",
        sites: "Open space · Haussmann matin",
      },
      {
        name: "Marc Dupont",
        initials: "MD",
        contract: "CDI 35h",
        hours: "132 h",
        hoursNum: 132,
        hoursMax: 151,
        status: "active",
        sites: "R+4 · Cowork Central",
      },
      {
        name: "Équipe nuit",
        initials: "EN",
        contract: "Forfait soir",
        hours: "96 h",
        hoursNum: 96,
        hoursMax: 120,
        status: "active",
        sites: "3 sites · 19h–21h",
      },
    ],
    rhAbsences: [
      {
        agent: "Julie Rousseau",
        reason: "Congé",
        replacement: "Marc Dupont",
        sites: "Open space 06:30",
        status: "covered",
      },
      {
        agent: "Marc Dupont",
        reason: "Retard",
        replacement: "Arrivée 06:28",
        sites: "Accès déverrouillé",
        status: "covered",
      },
    ],
    rhPayroll: {
      period: "Août 2026 · créneaux décalés",
      totalHours: "892 h",
      overtime: "18 h",
      agentCount: "8",
      exportLabel: "Heures matin/soir OK",
    },
    dashboardSites: "Haussmann · Open space · Cowork",
    telegestionSite: "Pointage 06:31 · Open space",
    proofSite: "Passage tertiaire OK",
    timelineEntries: [
      ["Lun 06:32", "Open space R+2", "Julie R."],
      ["Mar 06:28", "Étage R+4", "Marc D."],
      ["Mer 19:05", "Haussmann", "Équipe nuit"],
    ],
    reportStats: [
      ["Étages", "6"],
      ["Taux OK", "99%"],
      ["Créneaux", "12"],
    ],
    unpaidRows: [
      ["Facility Corp", "4 200 €", "12"],
      ["Cowork Central", "890 €", "21"],
      ["Immeuble Haussmann", "1 560 €", "5"],
    ],
  },
  syndics: {
    ...defaultContext,
    planningRows: [
      ["08:00–09:30", "Résidence Les Lilas", "OK"],
      ["09:45–11:00", "Immeuble Wilson", "En cours"],
      ["14:00–16:00", "Cage B · Hall C", "À venir"],
    ],
    planningSummary: "4 immeubles · 3 agents",
    clientName: "Syndic Les Lilas",
    clientMeta: "12 immeubles · Parties communes",
    clientSites: ["Hall principal", "Cage B", "Local vélo", "Local tech."],
    rhEntries: [
      ["Nadia K.", "Absence", "Backup · Wilson"],
      ["Équipe A", "OK", "Halls matin terminés"],
      ["Contrôle", "—", "Preuves prêtes syndic"],
    ],
    rhTeam: [
      {
        name: "Nadia Khelifi",
        initials: "NK",
        contract: "CDI 35h",
        hours: "138 h",
        hoursNum: 138,
        hoursMax: 151,
        status: "active",
        sites: "Lilas · Wilson · Cage B",
      },
      {
        name: "Karim Benali",
        initials: "KB",
        contract: "CDI 35h",
        hours: "145 h",
        hoursNum: 145,
        hoursMax: 151,
        status: "active",
        sites: "Titulaire · parties communes",
      },
      {
        name: "Julie Rousseau",
        initials: "JR",
        contract: "Backup syndic",
        hours: "62 h",
        hoursNum: 62,
        hoursMax: 90,
        status: "active",
        sites: "Remplacements immeubles",
      },
    ],
    rhAbsences: [
      {
        agent: "Nadia Khelifi",
        reason: "Absence",
        replacement: "Julie Rousseau",
        sites: "Hall Les Lilas",
        status: "covered",
      },
      {
        agent: "Équipe A",
        reason: "—",
        replacement: "Tournée matin OK",
        sites: "4 immeubles",
        status: "covered",
      },
    ],
    rhPayroll: {
      period: "Août 2026 · parc syndic",
      totalHours: "1 104 h",
      overtime: "22 h",
      agentCount: "14",
      exportLabel: "Titulaires & backups tracés",
    },
    dashboardSites: "Lilas · Wilson · Pasteur",
    telegestionSite: "Hall validé · géoloc OK",
    proofSite: "Preuve syndic archivée",
    timelineEntries: [
      ["Lun 08:12", "Hall Les Lilas", "Nadia K."],
      ["Mar 09:05", "Cage B Wilson", "Karim B."],
      ["Mer 14:22", "Local tech. Lilas", "Julie R."],
    ],
    reportStats: [
      ["Immeubles", "12"],
      ["Passages", "96"],
      ["Preuves", "100%"],
    ],
    unpaidRows: [
      ["Syndic Les Lilas", "3 400 €", "14"],
      ["Syndic Horizon", "2 100 €", "28"],
      ["Gestion Immo 31", "760 €", "9"],
    ],
  },
  professionnels: {
    ...defaultContext,
    planningRows: [
      ["07:00–08:00", "Cabinet Pasteur", "OK"],
      ["12:30–13:30", "Restaurant Le Central", "En cours"],
      ["18:30–19:30", "Pharmacie Durand", "À venir"],
    ],
    planningSummary: "3 locaux pros · 2 agents",
    clientName: "Cabinet Pasteur",
    clientMeta: "Accès digicode · Créneaux serrés",
    clientSites: ["Cabinet médical", "Salle attente", "Sanitaires"],
    rhEntries: [
      ["Léa P.", "OK", "Arrivée 06:58 · accès OK"],
      ["Backup", "—", "Restaurant si retard"],
      ["Consigne", "—", "Code mis à jour"],
    ],
    dashboardSites: "Pasteur · Central · Durand",
    telegestionSite: "Cabinet · arrivée OK",
    proofSite: "Intervention pro validée",
    timelineEntries: [
      ["Lun 07:02", "Cabinet Pasteur", "Léa P."],
      ["Mar 12:35", "Restaurant Central", "Marc D."],
      ["Mer 18:40", "Pharmacie Durand", "Julie R."],
    ],
    reportStats: [
      ["Locaux", "3"],
      ["Ponctualité", "97%"],
      ["Accès OK", "100%"],
    ],
    unpaidRows: [
      ["Cabinet Pasteur", "540 €", "11"],
      ["Restaurant Central", "320 €", "19"],
      ["Pharmacie Durand", "180 €", "6"],
    ],
  },
  "fin-de-chantier": {
    ...defaultContext,
    planningRows: [
      ["07:00–12:00", "Chantier Rivoli", "En cours"],
      ["13:00–17:00", "Remise état B2", "À venir"],
      ["17:30–18:00", "Contrôle photos", "Planifié"],
    ],
    planningSummary: "2 chantiers · 4 agents",
    clientName: "Promoteur Rivoli",
    clientMeta: "Prestation ponctuelle · Livraison J+0",
    clientSites: ["Chantier Rivoli", "Remise état B2"],
    rhEntries: [
      ["Équipe A", "Mobilisée", "8 agents · matin"],
      ["Photos", "—", "Preuves livraison"],
      ["Facture", "—", "Prête post-pointage"],
    ],
    dashboardSites: "Rivoli · B2 · Livraison",
    telegestionSite: "Chantier · 4 agents",
    proofSite: "Livraison photo OK",
    timelineEntries: [
      ["J-0 07:15", "Chantier Rivoli", "Équipe A"],
      ["J-0 13:30", "Remise état B2", "Équipe B"],
      ["J-0 17:45", "Contrôle photos", "Chef équipe"],
    ],
    reportStats: [
      ["Chantiers", "2"],
      ["Agents", "8"],
      ["Livraison", "J+0"],
    ],
    unpaidRows: [
      ["Promoteur Rivoli", "8 400 €", "3"],
      ["BTP Lyon Est", "2 200 €", "15"],
    ],
  },
  "auto-entrepreneurs": {
    ...defaultContext,
    planningRows: [
      ["08:00–10:00", "Bureaux client A", "OK"],
      ["11:00–12:00", "Copropriété B", "En cours"],
      ["15:00–16:00", "Commerce C", "À venir"],
    ],
    planningSummary: "3 clients · 1 équipe",
    clientName: "Mon activité propreté",
    clientMeta: "3 clients · TPE · Tout inclus 149 €",
    clientSites: ["Client A", "Client B", "Client C"],
    rhEntries: [
      ["Moi", "Titulaire", "Planning du jour"],
      ["—", "—", "Pas de double saisie"],
      ["Essai", "7 j", "Sans carte bancaire"],
    ],
    dashboardSites: "Client A · B · C",
    telegestionSite: "Pointage mobile OK",
    proofSite: "Facture prête",
    timelineEntries: [
      ["Lun 08:05", "Client A", "Moi"],
      ["Mar 11:10", "Client B", "Moi"],
      ["Mer 15:02", "Client C", "Moi"],
    ],
    reportStats: [
      ["Clients", "3"],
      ["Prix", "149 €"],
      ["Users", "5 max"],
    ],
    unpaidRows: [
      ["Client A", "420 €", "8"],
      ["Client B", "280 €", "22"],
    ],
  },
};

export function getMockContext(slug?: string): MockContext {
  if (!slug || slug === "default") return defaultContext;
  return mockContextBySlug[slug] ?? defaultContext;
}
