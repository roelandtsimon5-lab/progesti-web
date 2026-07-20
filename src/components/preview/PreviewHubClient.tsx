"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Status = "keep" | "priority" | "archive" | "reject";

type Item = {
  n?: number;
  href: string;
  title: string;
  tag: string;
  desc: string;
  status: Status;
  group: "site" | "home" | "landing";
};

const statusLabel: Record<Status, string> = {
  keep: "À garder",
  priority: "Prioritaire ads",
  archive: "Archive",
  reject: "Rejeté",
};

const statusClass: Record<Status, string> = {
  keep: "bg-[#1FA86B]/15 text-[#157A4E]",
  priority: "bg-[#0B3D6E] text-white",
  archive: "bg-[#E8EEF4] text-[#4A6178]",
  reject: "bg-[#FEE2E2] text-[#B91C1C]",
};

/** Tri fait d’après feedback : home validée OK · previews terrain/ads/minimal nulles · V4 ads en tête. */
const items: Item[] = [
  // —— Site (post sprints) ——
  {
    href: "/",
    title: "Home validée (live)",
    tag: "Référence",
    desc: "Gold standard — produit + prix + essai 2 mois.",
    status: "keep",
    group: "site",
  },
  {
    href: "/solutions",
    title: "Solutions (hub)",
    tag: "Site",
    desc: "Aligné home validée.",
    status: "keep",
    group: "site",
  },
  {
    href: "/solutions/bureaux",
    title: "Solution — Bureaux",
    tag: "Site",
    desc: "Verticale tertiaire.",
    status: "keep",
    group: "site",
  },
  {
    href: "/fonctionnalites",
    title: "Fonctionnalités",
    tag: "Site",
    desc: "11 modules.",
    status: "keep",
    group: "site",
  },
  {
    href: "/tarifs",
    title: "Tarifs",
    tag: "Site",
    desc: "Pricing + essai.",
    status: "keep",
    group: "site",
  },
  {
    href: "/blog",
    title: "Blog",
    tag: "Site",
    desc: "Hub éditorial + CTA.",
    status: "keep",
    group: "site",
  },
  {
    href: "/essai-gratuit",
    title: "Essai gratuit",
    tag: "Conversion",
    desc: "Tunnel essai.",
    status: "keep",
    group: "site",
  },
  {
    href: "/demo",
    title: "Démo",
    tag: "Conversion",
    desc: "Gate démo interactive.",
    status: "keep",
    group: "site",
  },

  // —— Homes archives / rejet ——
  {
    href: "/v3-valide",
    title: "Snapshot home validée",
    tag: "Archive",
    desc: "Copie figée noindex.",
    status: "archive",
    group: "home",
  },
  {
    href: "/v2",
    title: "Archive V2",
    tag: "Archive",
    desc: "Ancienne home trop vide.",
    status: "archive",
    group: "home",
  },
  {
    href: "/v1",
    title: "Archive V1",
    tag: "Archive",
    desc: "Très ancienne home.",
    status: "archive",
    group: "home",
  },
  {
    href: "/preview/terrain",
    title: "Preview terrain",
    tag: "Rejeté",
    desc: "Faux wow photo — ne pas reproduire.",
    status: "reject",
    group: "home",
  },
  {
    href: "/preview/ads",
    title: "Preview ads agressive",
    tag: "Rejeté",
    desc: "Cheap ads 2018 — ne pas reproduire.",
    status: "reject",
    group: "home",
  },
  {
    href: "/preview/minimal",
    title: "Preview minimal",
    tag: "Rejeté",
    desc: "Site vide — ne pas reproduire.",
    status: "reject",
    group: "home",
  },

  // —— Ads V4 prioritaire ——
  {
    n: 1,
    href: "/lp/ads/v4/acces",
    title: "V4 — Accès immédiat",
    tag: "V4",
    desc: "Form-first · prénom+tél · catch-all Search.",
    status: "priority",
    group: "landing",
  },
  {
    n: 2,
    href: "/lp/ads/v4/essai",
    title: "V4 — Essai 2 mois",
    tag: "V4",
    desc: "2 mois sans CB · ouverture app.",
    status: "priority",
    group: "landing",
  },
  {
    n: 3,
    href: "/lp/ads/v4/excel",
    title: "V4 — Stop Excel",
    tag: "V4",
    desc: "Planning vs Excel/WhatsApp.",
    status: "priority",
    group: "landing",
  },
  {
    n: 4,
    href: "/lp/ads/v4/prix",
    title: "V4 — Prix / Tarifs",
    tag: "V4",
    desc: "Dès 29,99 € HT · tarifs publics.",
    status: "priority",
    group: "landing",
  },
  {
    n: 5,
    href: "/lp/ads/v4/propret",
    title: "V4 — vs Propret",
    tag: "V4",
    desc: "Concurrent · form-first.",
    status: "priority",
    group: "landing",
  },

  // —— Ads V3 retarget ——
  {
    n: 6,
    href: "/lp/ads/v3/roi",
    title: "V3 — ROI / Prix",
    tag: "V3",
    desc: "Long-form timeline mois.",
    status: "keep",
    group: "landing",
  },
  {
    n: 7,
    href: "/lp/ads/v3/planning",
    title: "V3 — Planning",
    tag: "V3",
    desc: "Long-form Excel / 15 min.",
    status: "keep",
    group: "landing",
  },
  {
    n: 8,
    href: "/lp/ads/v3/syndic",
    title: "V3 — Syndic",
    tag: "V3",
    desc: "Parties communes.",
    status: "keep",
    group: "landing",
  },

  // —— LP marketing ——
  {
    n: 9,
    href: "/lp/essai-2-mois",
    title: "LP — Essai 2 mois",
    tag: "LP",
    desc: "Offre essai longue.",
    status: "keep",
    group: "landing",
  },
  {
    n: 10,
    href: "/lp/simplifier",
    title: "LP — Simplifier",
    tag: "LP",
    desc: "Angle simplification.",
    status: "keep",
    group: "landing",
  },
  {
    n: 11,
    href: "/lp/alternative",
    title: "LP — Alternative",
    tag: "LP",
    desc: "Switch concurrent.",
    status: "keep",
    group: "landing",
  },
  {
    n: 12,
    href: "/lp/integration",
    title: "LP — Intégration",
    tag: "LP",
    desc: "Mise en place.",
    status: "keep",
    group: "landing",
  },

  // —— Archives ads ——
  {
    n: 13,
    href: "/lp/ads/v2/essai",
    title: "V2 — Essai compte",
    tag: "Archive ads",
    desc: "Gén. précédente.",
    status: "archive",
    group: "landing",
  },
  {
    n: 14,
    href: "/lp/ads/v2/temps",
    title: "V2 — Temps admin",
    tag: "Archive ads",
    desc: "Gén. précédente.",
    status: "archive",
    group: "landing",
  },
  {
    n: 15,
    href: "/lp/ads/v2/excel",
    title: "V2 — Stop Excel",
    tag: "Archive ads",
    desc: "Gén. précédente.",
    status: "archive",
    group: "landing",
  },
  {
    n: 16,
    href: "/lp/ads/essai",
    title: "V1 — Essai",
    tag: "Legacy",
    desc: "Première génération.",
    status: "archive",
    group: "landing",
  },
  {
    n: 17,
    href: "/lp/ads/logiciel",
    title: "V1 — Logiciel",
    tag: "Legacy",
    desc: "Intention logiciel.",
    status: "archive",
    group: "landing",
  },
  {
    n: 18,
    href: "/lp/ads/probleme",
    title: "V1 — Problème",
    tag: "Legacy",
    desc: "Angle douleur.",
    status: "archive",
    group: "landing",
  },
  {
    n: 19,
    href: "/lp/ads/concurrent",
    title: "V1 — Concurrent",
    tag: "Legacy",
    desc: "Alternative Propret.",
    status: "archive",
    group: "landing",
  },
];

type Tab = "all" | "priority" | "keep" | "site" | "archive" | "reject";
type Mode = "desktop" | "mobile";

export function PreviewHubClient() {
  const [tab, setTab] = useState<Tab>("priority");
  const [mode, setMode] = useState<Mode>("mobile");
  const [selected, setSelected] = useState<Item>(
    () => items.find((i) => i.status === "priority") ?? items[0],
  );

  const list = useMemo(() => {
    if (tab === "all") return items;
    if (tab === "site") return items.filter((i) => i.group === "site");
    return items.filter((i) => i.status === tab);
  }, [tab]);

  const counts = useMemo(
    () => ({
      all: items.length,
      priority: items.filter((i) => i.status === "priority").length,
      keep: items.filter((i) => i.status === "keep").length,
      site: items.filter((i) => i.group === "site").length,
      archive: items.filter((i) => i.status === "archive").length,
      reject: items.filter((i) => i.status === "reject").length,
    }),
    [],
  );

  const frameSrc = useMemo(() => `${selected.href}?from=preview`, [selected.href]);

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "priority", label: "Prioritaire", count: counts.priority },
    { id: "site", label: "Site", count: counts.site },
    { id: "keep", label: "À garder", count: counts.keep },
    { id: "archive", label: "Archives", count: counts.archive },
    { id: "reject", label: "Rejetés", count: counts.reject },
    { id: "all", label: "Tout", count: counts.all },
  ];

  return (
    <div className="min-h-screen bg-[#E8EEF4] text-[#0F2438]">
      <header className="sticky top-0 z-50 border-b border-[#B8CFE4] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#157A4E]">
              Interface preview · tri
            </p>
            <h1 className="font-display text-lg font-extrabold sm:text-xl">
              À garder · Prioritaire · Archives · Rejetés
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-lg border border-[#B8CFE4] bg-[#F5F8FB] p-1">
              <button
                type="button"
                onClick={() => setMode("mobile")}
                className={`rounded-md px-3 py-1.5 text-sm font-bold ${
                  mode === "mobile" ? "bg-[#1FA86B] text-white" : "text-[#4A6178]"
                }`}
              >
                Mobile
              </button>
              <button
                type="button"
                onClick={() => setMode("desktop")}
                className={`rounded-md px-3 py-1.5 text-sm font-bold ${
                  mode === "desktop" ? "bg-[#1FA86B] text-white" : "text-[#4A6178]"
                }`}
              >
                Desktop
              </button>
            </div>
            <Link
              href={selected.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#0B3D6E] px-3 py-2 text-sm font-bold text-white"
            >
              Ouvrir ↗
            </Link>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1400px] gap-1 overflow-x-auto px-4 pb-3 sm:px-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setTab(t.id);
                const first =
                  t.id === "all"
                    ? items[0]
                    : t.id === "site"
                      ? items.find((i) => i.group === "site")
                      : items.find((i) => i.status === t.id);
                if (first) setSelected(first);
              }}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${
                tab === t.id
                  ? "bg-[#0B3D6E] text-white"
                  : "bg-white text-[#4A6178] ring-1 ring-[#B8CFE4]"
              }`}
            >
              {t.label} ({t.count})
            </button>
          ))}
        </div>
      </header>

      <div className="mx-auto grid max-w-[1400px] gap-0 lg:grid-cols-[340px_1fr]">
        <aside className="max-h-[calc(100vh-7rem)] overflow-y-auto border-r border-[#B8CFE4] bg-white">
          {list.length === 0 ? (
            <p className="p-6 text-sm text-[#4A6178]">Rien dans ce filtre.</p>
          ) : (
            <ul className="divide-y divide-[#E2EAF2]">
              {list.map((item) => {
                const active = item.href === selected.href;
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => setSelected(item)}
                      className={`flex w-full items-start gap-3 px-4 py-3.5 text-left transition ${
                        active ? "bg-[#E8F2FA]" : "hover:bg-[#F5F8FB]"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-sm font-extrabold ${
                          active ? "bg-[#0B3D6E] text-white" : "bg-[#E8EEF4] text-[#0B3D6E]"
                        }`}
                      >
                        {item.n != null ? String(item.n).padStart(2, "0") : item.group === "site" ? "S" : "H"}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${statusClass[item.status]}`}
                        >
                          {statusLabel[item.status]}
                        </span>
                        <span className="mt-1 block font-display text-sm font-bold leading-snug text-[#0F2438]">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-[#4A6178]">
                          {item.desc}
                        </span>
                        <span className="mt-1 block font-mono text-[10px] text-[#1565A8]">
                          {item.href}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </aside>

        <main className="flex min-h-[calc(100vh-7rem)] flex-col bg-[#D5E2EE] p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className={`inline-block rounded px-2 py-0.5 text-xs font-bold ${statusClass[selected.status]}`}>
                {statusLabel[selected.status]}
              </p>
              <h2 className="mt-1 font-display text-xl font-extrabold">{selected.title}</h2>
            </div>
            <p className="text-xs text-[#4A6178]">
              Aperçu {mode === "mobile" ? "390×844" : "desktop"} · iframe
            </p>
          </div>

          {selected.status === "reject" ? (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              <strong>Rejeté</strong> — ne pas s’en inspirer. Conservé uniquement pour comparaison.
            </div>
          ) : null}

          <div className="flex flex-1 justify-center">
            <div
              className={`overflow-hidden rounded-2xl border border-[#9BB4C9] bg-white shadow-[0_20px_60px_rgba(11,61,110,0.2)] ${
                mode === "mobile"
                  ? "h-[min(844px,calc(100vh-12rem))] w-[390px] max-w-full"
                  : "h-[min(900px,calc(100vh-12rem))] w-full max-w-5xl"
              }`}
            >
              <iframe
                key={frameSrc + mode}
                src={frameSrc}
                title={selected.title}
                className="h-full w-full bg-white"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
