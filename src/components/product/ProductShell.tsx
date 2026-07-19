"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cta } from "@/lib/cta";
import { track } from "@/lib/tracking";

type Mode = "trial" | "demo";

type Props = {
  mode: Mode;
};

type SiteRow = {
  name: string;
  agent: string;
  status: "En cours" | "Planifié" | "Terminé";
  heure: string;
  city: string;
};

const DEMO_SITES: SiteRow[] = [
  {
    name: "Résidence Les Lilas",
    agent: "Amina B.",
    status: "En cours",
    heure: "08:00–10:00",
    city: "Toulouse",
  },
  {
    name: "Bureau TechPlus",
    agent: "Karim L.",
    status: "Planifié",
    heure: "10:30–12:00",
    city: "Blagnac",
  },
  {
    name: "Clinique Saint-Michel",
    agent: "Sofia R.",
    status: "Terminé",
    heure: "06:30–08:00",
    city: "Tournefeuille",
  },
  {
    name: "Immeuble Horizon",
    agent: "Amina B.",
    status: "Planifié",
    heure: "14:00–16:30",
    city: "Colomiers",
  },
];

const NAV = ["Tableau de bord", "Planning", "Sites", "Agents", "Facturation", "Pointages"] as const;

const ONBOARDING = [
  {
    title: "Bienvenue dans PROGESTI",
    text: "Vous êtes dans un espace prêt à l’emploi avec des données métier réalistes.",
  },
  {
    title: "Explorez le planning",
    text: "Ouvrez l’onglet Planning pour voir comment les agents sont affectés aux sites.",
  },
  {
    title: "Regardez la facturation",
    text: "Le lien terrain → facture est le cœur du gain de temps. Testez l’onglet Facturation.",
  },
];

function readUser(mode: Mode) {
  if (typeof window === "undefined") return { name: "Utilisateur", email: "" };
  const keys =
    mode === "demo"
      ? ["progesti_demo", "progesti_trial", "progesti_session"]
      : ["progesti_trial", "progesti_session", "progesti_demo"];
  for (const key of keys) {
    try {
      const raw = sessionStorage.getItem(key);
      if (!raw) continue;
      const parsed = JSON.parse(raw) as { name?: string; email?: string };
      return {
        name: parsed.name || parsed.email?.split("@")[0] || "Utilisateur",
        email: parsed.email || "",
      };
    } catch {
      /* ignore */
    }
  }
  return { name: "Utilisateur", email: "" };
}

export function ProductShell({ mode }: Props) {
  const [tab, setTab] = useState<(typeof NAV)[number]>("Tableau de bord");
  const [selected, setSelected] = useState<SiteRow | null>(null);
  const [step, setStep] = useState<number | null>(null);
  const user = useMemo(() => readUser(mode), [mode]);

  useEffect(() => {
    const key = `progesti_onboarded_${mode}`;
    if (!sessionStorage.getItem(key)) setStep(0);
  }, [mode]);

  function finishOnboarding() {
    sessionStorage.setItem(`progesti_onboarded_${mode}`, "1");
    setStep(null);
    track("cta_click", { cta: "onboarding_done", mode });
  }

  return (
    <div className="product-shell">
      {step !== null ? (
        <div className="fixed inset-0 z-[120] flex items-end justify-center bg-ink/45 p-4 sm:items-center">
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="onboard-title"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-dark">
              Étape {step + 1} / 3
            </p>
            <h2 id="onboard-title" className="mt-2 text-2xl font-extrabold text-ink">
              {ONBOARDING[step].title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{ONBOARDING[step].text}</p>
            <div className="mt-6 flex gap-2">
              {step < 2 ? (
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-emerald py-3 font-display text-sm font-extrabold text-navy"
                  onClick={() => setStep(step + 1)}
                >
                  Continuer
                </button>
              ) : (
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-emerald py-3 font-display text-sm font-extrabold text-navy"
                  onClick={finishOnboarding}
                >
                  Entrer dans l’app
                </button>
              )}
              <button
                type="button"
                className="rounded-xl border border-line px-4 py-3 text-sm font-bold text-anthracite"
                onClick={finishOnboarding}
              >
                Passer
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <aside className="product-side hidden md:flex">
        <div className="mb-4 px-2">
          <p className="font-display text-lg font-extrabold tracking-tight">PROGESTI</p>
          <p className="mt-1 text-xs text-white/55">
            {mode === "demo" ? "Démo interactive" : "Essai 2 mois"}
          </p>
        </div>
        {NAV.map((item) => (
          <button
            key={item}
            type="button"
            className={tab === item ? "active" : ""}
            onClick={() => {
              setTab(item);
              setSelected(null);
            }}
          >
            {item}
          </button>
        ))}
        <div className="mt-auto space-y-2 px-1 pt-6">
          <p className="px-2 text-xs text-white/45">{user.email || "session locale"}</p>
          <Link
            href="/"
            className="block"
            onClick={() => track("cta_click", { cta: "leave_product", mode })}
          >
            ← Retour au site
          </Link>
        </div>
      </aside>

      <div className="flex min-h-0 flex-col overflow-auto">
        <header className="flex items-center justify-between border-b border-line bg-white px-4 py-3 md:px-6">
          <div>
            <p className="font-display text-sm font-bold text-ink md:text-base">
              Bonjour {user.name.split(" ")[0] || "vous"}
            </p>
            <p className="text-xs text-muted md:text-sm">
              {mode === "demo"
                ? "Données fictives — cliquez pour explorer"
                : "Essai actif — explorez librement votre espace"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={cta.trialApp}
              onClick={() => track("trial_start", { source: `product_shell_${mode}` })}
              className="rounded-xl bg-emerald px-3 py-2 text-xs font-extrabold text-navy transition hover:bg-emerald-dark hover:text-white sm:px-4 sm:text-sm"
            >
              Créer mon essai réel
            </a>
            <span className="hidden rounded-full bg-emerald/15 px-3 py-1 text-xs font-bold text-emerald-dark sm:inline">
              {mode === "demo" ? "Mode démo" : "Essai gratuit"}
            </span>
            <Link
              href="/"
              className="rounded-md border border-line px-3 py-2 text-xs font-bold text-ink md:hidden"
            >
              Site
            </Link>
          </div>
        </header>

        <div className="flex gap-2 overflow-x-auto border-b border-line bg-white px-3 py-2 md:hidden">
          {NAV.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setTab(item);
                setSelected(null);
              }}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${
                tab === item ? "bg-navy text-white" : "bg-fog-2 text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <main className="flex-1 p-4 md:p-6">
          {tab === "Tableau de bord" ? (
            <DashboardView
              onOpenSite={(row) => {
                setSelected(row);
                setTab("Sites");
              }}
            />
          ) : null}
          {tab === "Planning" ? <PlanningView /> : null}
          {tab === "Sites" ? (
            <SitesView selected={selected} onSelect={setSelected} />
          ) : null}
          {tab === "Agents" || tab === "Facturation" || tab === "Pointages" ? (
            <ListView title={tab} />
          ) : null}
        </main>
      </div>
    </div>
  );
}

function DashboardView({ onOpenSite }: { onOpenSite: (row: SiteRow) => void }) {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Chiffre d’affaires", "12 480 €", "+8% vs semaine"],
          ["Sites actifs", "18", "3 nouveaux"],
          ["Heures pointées", "236 h", "Cette semaine"],
          ["Factures à émettre", "5", "Priorité haute"],
        ].map(([label, value, hint]) => (
          <div key={label} className="kpi">
            <span>{label}</span>
            <strong className="mt-1">{value}</strong>
            <span className="mt-1 block text-emerald-dark">{hint}</span>
          </div>
        ))}
      </div>
      <div className="panel p-4 md:p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-ink">Interventions du jour</h2>
          <p className="text-xs text-muted">Cliquez une ligne pour ouvrir le site</p>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-muted">
              <tr>
                <th className="pb-2 font-semibold">Site</th>
                <th className="pb-2 font-semibold">Agent</th>
                <th className="pb-2 font-semibold">Créneau</th>
                <th className="pb-2 font-semibold">Statut</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_SITES.map((row) => (
                <tr
                  key={row.name}
                  className="cursor-pointer border-t border-line transition hover:bg-fog"
                  onClick={() => onOpenSite(row)}
                >
                  <td className="py-3 font-medium text-ink">{row.name}</td>
                  <td className="py-3 text-anthracite">{row.agent}</td>
                  <td className="py-3 text-anthracite">{row.heure}</td>
                  <td className="py-3">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PlanningView() {
  const [active, setActive] = useState<string | null>("Lun-Amina");
  const blocks = [
    { day: "Lun", label: "Amina · Les Lilas", id: "Lun-Amina", left: 8, width: 28, color: "bg-emerald" },
    { day: "Lun", label: "Karim · TechPlus", id: "Lun-Karim", left: 48, width: 22, color: "bg-navy" },
    { day: "Mar", label: "Sofia · Saint-Michel", id: "Mar-Sofia", left: 6, width: 24, color: "bg-emerald" },
    { day: "Mer", label: "Amina · Horizon", id: "Mer-Amina", left: 30, width: 26, color: "bg-navy" },
    { day: "Jeu", label: "Karim · TechPlus", id: "Jeu-Karim", left: 12, width: 20, color: "bg-emerald" },
    { day: "Ven", label: "Sofia · Les Lilas", id: "Ven-Sofia", left: 40, width: 30, color: "bg-navy" },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="panel p-4 md:p-5">
        <h2 className="text-lg font-bold text-ink">Planning semaine</h2>
        <p className="mt-1 text-sm text-muted">Cliquez un créneau pour voir le détail</p>
        <div className="mt-5 space-y-3">
          {["Lun", "Mar", "Mer", "Jeu", "Ven"].map((day) => (
            <div key={day} className="grid grid-cols-[44px_1fr] items-center gap-3">
              <span className="text-xs font-bold text-muted">{day}</span>
              <div className="relative h-11 rounded-lg bg-fog-2">
                {blocks
                  .filter((b) => b.day === day)
                  .map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      title={b.label}
                      onClick={() => setActive(b.id)}
                      className={`absolute top-1.5 bottom-1.5 rounded-md ${b.color} text-[10px] font-bold text-white transition hover:brightness-110 ${
                        active === b.id ? "ring-2 ring-offset-1 ring-emerald" : ""
                      }`}
                      style={{ left: `${b.left}%`, width: `${b.width}%` }}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="panel p-4 md:p-5">
        <h3 className="font-bold text-ink">Détail du créneau</h3>
        {active ? (
          <div className="mt-4 space-y-2 text-sm text-anthracite">
            <p>
              <strong className="text-ink">Mission :</strong>{" "}
              {blocks.find((b) => b.id === active)?.label}
            </p>
            <p>
              <strong className="text-ink">Type :</strong> Entretien courant
            </p>
            <p>
              <strong className="text-ink">Matériel :</strong> Chariot + produits écologiques
            </p>
            <p>
              <strong className="text-ink">Statut :</strong> Confirmé
            </p>
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted">Sélectionnez un créneau.</p>
        )}
      </div>
    </div>
  );
}

function SitesView({
  selected,
  onSelect,
}: {
  selected: SiteRow | null;
  onSelect: (row: SiteRow | null) => void;
}) {
  const current = selected ?? DEMO_SITES[0];
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
      <div className="panel p-4 md:p-5">
        <h2 className="text-lg font-bold text-ink">Sites clients</h2>
        <ul className="mt-4 divide-y divide-line">
          {DEMO_SITES.map((site) => (
            <li key={site.name}>
              <button
                type="button"
                onClick={() => onSelect(site)}
                className={`flex w-full items-center justify-between py-3 text-left text-sm transition hover:bg-fog ${
                  current.name === site.name ? "bg-fog" : ""
                }`}
              >
                <span>
                  <span className="block font-semibold text-ink">{site.name}</span>
                  <span className="text-muted">{site.city}</span>
                </span>
                <StatusBadge status={site.status} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="panel p-4 md:p-5">
        <h3 className="text-lg font-bold text-ink">{current.name}</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-4 border-b border-line pb-2">
            <dt className="text-muted">Ville</dt>
            <dd className="font-semibold text-ink">{current.city}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-line pb-2">
            <dt className="text-muted">Agent</dt>
            <dd className="font-semibold text-ink">{current.agent}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-line pb-2">
            <dt className="text-muted">Créneau</dt>
            <dd className="font-semibold text-ink">{current.heure}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Fréquence</dt>
            <dd className="font-semibold text-ink">3 passages / semaine</dd>
          </div>
        </dl>
        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-navy py-3 text-sm font-bold text-white"
          onClick={() => {
            track("cta_click", { cta: "demo_create_bon", site: current.name });
            window.alert(`Bon d’intervention simulé créé pour « ${current.name} ».`);
          }}
        >
          Créer un bon d’intervention
        </button>
      </div>
    </div>
  );
}

function ListView({ title }: { title: string }) {
  const [picked, setPicked] = useState(0);
  const rows =
    title === "Facturation"
      ? [
          ["FAC-2401", "Résidence Les Lilas", "1 240 €", "À envoyer"],
          ["FAC-2402", "Bureau TechPlus", "890 €", "Payée"],
          ["FAC-2403", "Clinique Saint-Michel", "2 100 €", "Brouillon"],
        ]
      : title === "Agents"
        ? [
            ["Amina B.", "Temps plein", "4 sites", "Disponible"],
            ["Karim L.", "Temps partiel", "2 sites", "En mission"],
            ["Sofia R.", "Temps plein", "3 sites", "Disponible"],
          ]
        : [
            ["Amina B.", "Les Lilas", "08:01", "Validé"],
            ["Karim L.", "TechPlus", "10:28", "En cours"],
            ["Sofia R.", "Saint-Michel", "06:27", "Validé"],
          ];

  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="panel p-4 md:p-5">
        <h2 className="text-lg font-bold text-ink">{title}</h2>
        <ul className="mt-4 divide-y divide-line">
          {rows.map((row, idx) => (
            <li key={row.join("-")}>
              <button
                type="button"
                onClick={() => setPicked(idx)}
                className={`grid w-full grid-cols-2 gap-2 py-3 text-left text-sm md:grid-cols-4 ${
                  picked === idx ? "bg-fog" : "hover:bg-fog/70"
                }`}
              >
                {row.map((cell, i) => (
                  <span key={cell} className={i === 0 ? "font-semibold text-ink" : "text-anthracite"}>
                    {cell}
                  </span>
                ))}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="panel p-4 md:p-5">
        <h3 className="font-bold text-ink">Fiche sélectionnée</h3>
        <p className="mt-3 text-sm text-anthracite">
          {rows[picked].join(" · ")}
        </p>
        <p className="mt-4 text-sm text-muted">
          {title === "Facturation"
            ? "En production, vous pourrez envoyer la facture et suivre le paiement."
            : title === "Agents"
              ? "Disponibilité, sites affectés et absences sont centralisés ici."
              : "Les pointages mobile alimentent la prépaie et la facturation."}
        </p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "Terminé" || status === "Validé" || status === "Payée" || status === "Disponible"
      ? "bg-emerald/15 text-emerald-dark"
      : status === "En cours" || status === "En mission"
        ? "bg-amber-100 text-amber-900"
        : "bg-fog-2 text-ink";
  return <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${tone}`}>{status}</span>;
}
