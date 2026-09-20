"use client";

import Link from "next/link";
import { Fragment, useMemo, useState } from "react";

export type SeoStatus = "ok" | "watch" | "fix";

export type DashboardPageRow = {
  id: string;
  path: string;
  type: string;
  primaryKw: string;
  title: string;
  vertical: "espace-vert" | "securite";
  /** SEO audit fields */
  h1: string;
  metaDescription: string;
  canonical: string;
  robots: string;
  inSitemap: boolean;
  faqCount: number;
  h2Count: number;
  outboundCount: number;
  parentPath: string | null;
  sisterSample: string[];
  seoStatus: SeoStatus;
  seoNotes: string[];
};

type VerticalFilter = "all" | "espace-vert" | "securite";
type StatusFilter = "all" | SeoStatus;

const TYPE_LABELS: Record<string, string> = {
  pilier: "Pilier",
  hub: "Hub",
  service: "Service",
  audience: "Audience",
  process: "Process",
  saisonnier: "Saisonnier",
  probleme: "Problème",
  local: "Local",
  faq: "FAQ",
  guide: "Guide",
};

function typeLabel(type: string) {
  return TYPE_LABELS[type] ?? type;
}

function TypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    pilier: "bg-[#012939] text-white",
    hub: "bg-[#0a7c6c] text-white",
    service: "bg-[#023448]/12 text-[#012939]",
    audience: "bg-[#E8F4F1] text-[#065f52]",
    process: "bg-[#EEF3F7] text-[#023448]",
    saisonnier: "bg-[#FEF3C7] text-[#92400E]",
    probleme: "bg-[#FEE2E2] text-[#991B1B]",
    local: "bg-[#DBEAFE] text-[#1E40AF]",
    faq: "bg-[#F3E8FF] text-[#6B21A8]",
    guide: "bg-[#FFEDD5] text-[#9A3412]",
  };
  return (
    <span
      className={`inline-flex rounded px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${styles[type] ?? "bg-[#E8EEF4] text-[#4A6178]"}`}
    >
      {typeLabel(type)}
    </span>
  );
}

function StatusBadge({ status }: { status: SeoStatus }) {
  const styles: Record<SeoStatus, string> = {
    ok: "bg-[#D1FAE5] text-[#065F46]",
    watch: "bg-[#FEF3C7] text-[#92400E]",
    fix: "bg-[#FEE2E2] text-[#991B1B]",
  };
  const labels: Record<SeoStatus, string> = {
    ok: "OK",
    watch: "À surveiller",
    fix: "À corriger",
  };
  return (
    <span
      className={`inline-flex rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

function PageTable({
  rows,
  accent,
  expandedId,
  onToggle,
}: {
  rows: DashboardPageRow[];
  accent: "ev" | "sec";
  expandedId: string | null;
  onToggle: (id: string) => void;
}) {
  if (rows.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-[#B8CFE4] bg-white/60 px-4 py-8 text-center text-sm text-[#4A6178]">
        Aucune page ne correspond aux filtres.
      </p>
    );
  }

  const linkClass =
    accent === "ev"
      ? "font-semibold text-[#065f52] underline-offset-2 hover:underline"
      : "font-semibold text-[#012939] underline-offset-2 hover:underline";

  return (
    <div className="overflow-x-auto rounded-lg border border-[#B8CFE4] bg-white shadow-sm">
      <table className="w-full min-w-[980px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[#B8CFE4] bg-[#F5F8FB] text-[11px] uppercase tracking-[0.08em] text-[#4A6178]">
            <th className="px-3 py-3 font-bold">ID</th>
            <th className="px-3 py-3 font-bold">Titre / H1</th>
            <th className="px-3 py-3 font-bold">URL</th>
            <th className="px-3 py-3 font-bold">Type</th>
            <th className="px-3 py-3 font-bold">Mot-clé</th>
            <th className="px-3 py-3 font-bold">SEO</th>
            <th className="px-3 py-3 font-bold">Ouvrir</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const key = `${row.vertical}-${row.id}`;
            const open = expandedId === key;
            return (
              <Fragment key={key}>
                <tr className="border-b border-[#E8EEF4] last:border-0 hover:bg-[#F8FBFD]">
                  <td className="whitespace-nowrap px-3 py-3 font-mono text-xs font-bold text-[#012939]">
                    <button
                      type="button"
                      onClick={() => onToggle(key)}
                      className="text-left underline-offset-2 hover:underline"
                      aria-expanded={open}
                    >
                      {row.id}
                    </button>
                  </td>
                  <td className="max-w-[280px] px-3 py-3">
                    <p className="font-medium text-[#0F2438]">{row.title}</p>
                    <p className="mt-0.5 line-clamp-1 text-xs text-[#4A6178]">H1 · {row.h1}</p>
                  </td>
                  <td className="px-3 py-3">
                    <Link href={row.path} className={linkClass} target="_blank" rel="noreferrer">
                      {row.path}
                    </Link>
                  </td>
                  <td className="px-3 py-3">
                    <TypeBadge type={row.type} />
                  </td>
                  <td className="max-w-[180px] px-3 py-3 text-[#4A6178]">{row.primaryKw}</td>
                  <td className="px-3 py-3">
                    <StatusBadge status={row.seoStatus} />
                  </td>
                  <td className="px-3 py-3">
                    <Link
                      href={row.path}
                      className="inline-flex rounded bg-[#012939] px-2.5 py-1 text-xs font-semibold text-white transition hover:bg-[#023448]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir →
                    </Link>
                  </td>
                </tr>
                {open ? (
                  <tr className="border-b border-[#E8EEF4] bg-[#F8FBFD]">
                    <td colSpan={7} className="px-4 py-4">
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#4A6178]">
                            Identité
                          </p>
                          <ul className="mt-2 space-y-1 text-xs text-[#0F2438]">
                            <li>
                              <span className="text-[#4A6178]">Verticale · </span>
                              {row.vertical}
                            </li>
                            <li>
                              <span className="text-[#4A6178]">Type · </span>
                              {typeLabel(row.type)}
                            </li>
                            <li>
                              <span className="text-[#4A6178]">Parent · </span>
                              {row.parentPath ?? "—"}
                            </li>
                            <li>
                              <span className="text-[#4A6178]">Sœurs · </span>
                              {row.sisterSample.join(", ") || "—"}
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#4A6178]">
                            SEO technique
                          </p>
                          <ul className="mt-2 space-y-1 text-xs text-[#0F2438]">
                            <li>
                              <span className="text-[#4A6178]">Title · </span>
                              {row.title}
                            </li>
                            <li>
                              <span className="text-[#4A6178]">Meta · </span>
                              {row.metaDescription}
                            </li>
                            <li>
                              <span className="text-[#4A6178]">Canonical · </span>
                              {row.canonical}
                            </li>
                            <li>
                              <span className="text-[#4A6178]">Robots · </span>
                              {row.robots}
                            </li>
                            <li>
                              <span className="text-[#4A6178]">Sitemap · </span>
                              {row.inSitemap ? "oui" : "non"}
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#4A6178]">
                            Contenu & maillage
                          </p>
                          <ul className="mt-2 space-y-1 text-xs text-[#0F2438]">
                            <li>
                              <span className="text-[#4A6178]">H2 éditoriaux · </span>
                              {row.h2Count}
                            </li>
                            <li>
                              <span className="text-[#4A6178]">FAQ · </span>
                              {row.faqCount}
                            </li>
                            <li>
                              <span className="text-[#4A6178]">Liens sortants grille · </span>
                              {row.outboundCount}
                            </li>
                          </ul>
                          {row.seoNotes.length > 0 ? (
                            <ul className="mt-3 space-y-1 text-xs text-[#92400E]">
                              {row.seoNotes.map((n) => (
                                <li key={n}>• {n}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="mt-3 text-xs text-[#065F46]">Aucun signal bloquant.</p>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function DashboardValidationClient({
  espaceVert,
  securite,
}: {
  espaceVert: DashboardPageRow[];
  securite: DashboardPageRow[];
}) {
  const [query, setQuery] = useState("");
  const [vertical, setVertical] = useState<VerticalFilter>("all");
  const [type, setType] = useState<string>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const allTypes = useMemo(() => {
    const set = new Set<string>();
    for (const row of [...espaceVert, ...securite]) set.add(row.type);
    return Array.from(set).sort();
  }, [espaceVert, securite]);

  const matches = (row: DashboardPageRow) => {
    if (type !== "all" && row.type !== type) return false;
    if (status !== "all" && row.seoStatus !== status) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      row.id.toLowerCase().includes(q) ||
      row.title.toLowerCase().includes(q) ||
      row.h1.toLowerCase().includes(q) ||
      row.path.toLowerCase().includes(q) ||
      row.primaryKw.toLowerCase().includes(q) ||
      row.type.toLowerCase().includes(q) ||
      row.metaDescription.toLowerCase().includes(q)
    );
  };

  const evFiltered = useMemo(
    () => espaceVert.filter(matches),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [espaceVert, query, type, status],
  );
  const secFiltered = useMemo(
    () => securite.filter(matches),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [securite, query, type, status],
  );

  const showEv = vertical === "all" || vertical === "espace-vert";
  const showSec = vertical === "all" || vertical === "securite";

  const visibleCount =
    (showEv ? evFiltered.length : 0) + (showSec ? secFiltered.length : 0);

  const statusCounts = useMemo(() => {
    const all = [...espaceVert, ...securite];
    return {
      ok: all.filter((r) => r.seoStatus === "ok").length,
      watch: all.filter((r) => r.seoStatus === "watch").length,
      fix: all.filter((r) => r.seoStatus === "fix").length,
    };
  }, [espaceVert, securite]);

  return (
    <div className="min-h-screen bg-[linear-gradient(165deg,#F5F8FB_0%,#E8EEF4_45%,#EEF6F3_100%)] text-[#0F2438]">
      <div className="border-b border-[#B8CFE4] bg-[#012939] text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9AD4C8]">
            Interne · validation SEO
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Dashboard pages marketing
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/75">
            {espaceVert.length} Espace Vert + {securite.length} Sécurité ={" "}
            {espaceVert.length + securite.length} pages — configs live, silos séparés,
            mode audit SEO (title, meta, H1, canonical, sitemap, maillage).
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">Total</p>
              <p className="text-xl font-extrabold">{espaceVert.length + securite.length}</p>
            </div>
            <div className="rounded-lg bg-[#0a7c6c]/30 px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                Espace Vert
              </p>
              <p className="text-xl font-extrabold">{espaceVert.length}</p>
            </div>
            <div className="rounded-lg bg-white/10 px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                Sécurité
              </p>
              <p className="text-xl font-extrabold">{securite.length}</p>
            </div>
            <div className="rounded-lg bg-[#1FA86B]/25 px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">OK</p>
              <p className="text-xl font-extrabold">{statusCounts.ok}</p>
            </div>
            <div className="rounded-lg bg-[#F59E0B]/25 px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                À surveiller
              </p>
              <p className="text-xl font-extrabold">{statusCounts.watch}</p>
            </div>
            <div className="rounded-lg bg-[#EF4444]/25 px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                À corriger
              </p>
              <p className="text-xl font-extrabold">{statusCounts.fix}</p>
            </div>
            <div className="rounded-lg bg-white/10 px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                Affichées
              </p>
              <p className="text-xl font-extrabold">{visibleCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-[#B8CFE4] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:px-6">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Rechercher</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher titre, H1, URL, ID, mot-clé, meta…"
              className="w-full rounded-lg border border-[#B8CFE4] bg-[#F5F8FB] px-3 py-2 text-sm outline-none ring-[#0a7c6c] focus:ring-2"
            />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="whitespace-nowrap font-semibold text-[#4A6178]">Verticale</span>
            <select
              value={vertical}
              onChange={(e) => setVertical(e.target.value as VerticalFilter)}
              className="rounded-lg border border-[#B8CFE4] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0a7c6c]"
            >
              <option value="all">Toutes</option>
              <option value="espace-vert">Espace Vert</option>
              <option value="securite">Sécurité</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="whitespace-nowrap font-semibold text-[#4A6178]">Type</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-lg border border-[#B8CFE4] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0a7c6c]"
            >
              <option value="all">Tous</option>
              {allTypes.map((t) => (
                <option key={t} value={t}>
                  {typeLabel(t)}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="whitespace-nowrap font-semibold text-[#4A6178]">Statut SEO</span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as StatusFilter)}
              className="rounded-lg border border-[#B8CFE4] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0a7c6c]"
            >
              <option value="all">Tous</option>
              <option value="ok">OK</option>
              <option value="watch">À surveiller</option>
              <option value="fix">À corriger</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-8 sm:px-6">
        {showEv ? (
          <section>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0a7c6c]">
                  Verticale
                </p>
                <h2 className="text-xl font-extrabold text-[#012939]">Espace Vert</h2>
              </div>
              <p className="rounded-full bg-[#0a7c6c]/12 px-3 py-1 text-sm font-bold text-[#065f52]">
                {evFiltered.length} / {espaceVert.length}
              </p>
            </div>
            <PageTable
              rows={evFiltered}
              accent="ev"
              expandedId={expandedId}
              onToggle={(id) => setExpandedId((cur) => (cur === id ? null : id))}
            />
          </section>
        ) : null}

        {showSec ? (
          <section>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#012939]">
                  Verticale
                </p>
                <h2 className="text-xl font-extrabold text-[#012939]">Sécurité</h2>
              </div>
              <p className="rounded-full bg-[#012939]/10 px-3 py-1 text-sm font-bold text-[#012939]">
                {secFiltered.length} / {securite.length}
              </p>
            </div>
            <PageTable
              rows={secFiltered}
              accent="sec"
              expandedId={expandedId}
              onToggle={(id) => setExpandedId((cur) => (cur === id ? null : id))}
            />
          </section>
        ) : null}
      </div>
    </div>
  );
}
