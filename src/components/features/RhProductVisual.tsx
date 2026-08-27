import { getMockContext } from "@/lib/industry/mock-context";

type Variant = "hero" | "compact" | "payroll";

type Props = {
  label?: string;
  context?: string;
  variant?: Variant;
};

function AgentAvatar({ initials, tone }: { initials: string; tone: "lime" | "navy" | "warn" }) {
  const bg =
    tone === "lime"
      ? "bg-lime-cta/25 text-brand-navy"
      : tone === "warn"
        ? "bg-amber-100 text-amber-900"
        : "bg-brand-navy/10 text-brand-navy";
  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold ${bg}`}
    >
      {initials}
    </span>
  );
}

function HoursBar({ value, max }: { value: number; max: number }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const tone = pct >= 95 ? "bg-amber-500" : pct >= 80 ? "bg-green-action" : "bg-brand-navy/70";
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper">
        <div className={`h-full rounded-full ${tone}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-8 text-right text-[10px] font-bold tabular-nums text-brand-navy-soft">{value}h</span>
    </div>
  );
}

function WindowChrome({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[2px] border border-line bg-white shadow-[0_32px_90px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-line bg-brand-navy px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-cta/80" />
        </span>
        <p className="ml-1 truncate text-[11px] font-bold text-white/90">{title}</p>
      </div>
      {children}
    </div>
  );
}

export function RhProductVisual({ label = "Module RH", context, variant = "hero" }: Props) {
  const ctx = getMockContext(context);
  const { rhTeam, rhAbsences, rhPayroll, rhWeekChart } = ctx;

  if (variant === "payroll") {
    return (
      <div className="relative isolate min-h-[280px] overflow-hidden rounded-[2px] bg-[radial-gradient(circle_at_20%_20%,rgba(168,227,0,0.14)_0%,transparent_45%),#f5f7f9] p-4 md:min-h-[320px] md:p-5">
        <div className="overflow-hidden rounded-[2px] border border-line bg-white shadow-[0_20px_50px_rgba(1,41,57,0.12)]">
          <div className="border-b border-line bg-paper/70 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy-soft">
              Export variables de paie
            </p>
            <p className="mt-0.5 font-display text-lg font-extrabold text-brand-navy">{rhPayroll.period}</p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-line border-b border-line text-center">
            {[
              ["Heures", rhPayroll.totalHours],
              ["Heures sup.", rhPayroll.overtime],
              ["Agents", rhPayroll.agentCount],
            ].map(([k, v]) => (
              <div key={k} className="px-3 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">{k}</p>
                <p className="mt-1 font-display text-base font-extrabold text-brand-navy">{v}</p>
              </div>
            ))}
          </div>
          <ul className="divide-y divide-line/60 text-sm">
            {rhTeam.slice(0, 4).map((agent) => (
              <li key={agent.name} className="flex items-center justify-between gap-3 px-4 py-2.5">
                <div className="flex min-w-0 items-center gap-2">
                  <AgentAvatar initials={agent.initials} tone="navy" />
                  <span className="truncate font-semibold text-brand-navy">{agent.name}</span>
                </div>
                <span className="shrink-0 font-bold tabular-nums text-brand-navy">{agent.hours}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between gap-3 border-t border-line bg-lime-cta/15 px-4 py-3">
            <div>
              <p className="text-xs font-bold text-brand-navy">Prêt pour expert paie</p>
              <p className="text-[11px] text-slate">CSV · Silae · compatible</p>
            </div>
            <span className="rounded-[2px] bg-lime-cta px-2.5 py-1 text-[10px] font-extrabold uppercase text-brand-navy">
              Exporter
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 rotate-[1.5deg] rounded-[2px] border border-line bg-white px-3 py-2 shadow-lg">
          <p className="text-xs font-bold text-brand-navy">0 oubli d&apos;heures sup.</p>
          <p className="text-[11px] text-slate">Pointages → variables</p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <WindowChrome title="PROGESTI · Absences du jour">
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-navy-soft">Couverture</p>
            <span className="rounded-[2px] bg-green-action/15 px-2 py-0.5 text-[10px] font-extrabold text-green-deep">
              {rhAbsences.filter((a) => a.status === "covered").length}/{rhAbsences.length} OK
            </span>
          </div>
          <ul className="mt-3 space-y-2">
            {rhAbsences.map((row) => (
              <li
                key={row.agent + row.reason}
                className="flex items-start justify-between gap-2 rounded-[2px] bg-paper/60 px-3 py-2"
              >
                <div className="min-w-0">
                  <p className="text-sm font-bold text-brand-navy">{row.agent}</p>
                  <p className="text-[11px] text-slate">
                    {row.reason} → {row.replacement}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-[2px] px-2 py-0.5 text-[10px] font-bold ${
                    row.status === "covered"
                      ? "bg-green-action/15 text-green-deep"
                      : "bg-amber-100 text-amber-900"
                  }`}
                >
                  {row.status === "covered" ? "Couvert" : "En cours"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </WindowChrome>
    );
  }

  // hero — full dashboard composition
  return (
    <div className="relative isolate h-full w-full overflow-hidden rounded-[2px] bg-[radial-gradient(circle_at_75%_15%,rgba(168,227,0,0.18)_0%,transparent_42%),linear-gradient(145deg,#041e38_0%,#012939_55%,#062840_100%)]">
      <WindowChrome title="PROGESTI · Équipes & RH">
        <div className="grid md:grid-cols-[1fr_11.5rem]">
          <div className="border-r border-line/60">
            <div className="flex items-center justify-between gap-2 border-b border-line/60 bg-paper/40 px-3 py-2">
              <div className="flex gap-1">
                {["Équipe", "Absences", "Heures"].map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-[2px] px-2 py-1 text-[10px] font-bold ${
                      i === 0 ? "bg-brand-navy text-white" : "text-brand-navy-soft"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <span className="hidden text-[10px] font-bold text-brand-navy-soft sm:inline">
                Août 2026
              </span>
            </div>
            <ul className="divide-y divide-line/50">
              {rhTeam.map((agent) => (
                <li key={agent.name} className="flex items-center gap-3 px-3 py-2.5">
                  <AgentAvatar
                    initials={agent.initials}
                    tone={agent.status === "absent" ? "warn" : agent.status === "warning" ? "warn" : "lime"}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-bold text-brand-navy">{agent.name}</p>
                      <span className="shrink-0 text-[10px] font-semibold text-brand-navy-soft">
                        {agent.contract}
                      </span>
                    </div>
                    <p className="truncate text-[11px] text-slate">{agent.sites}</p>
                    <HoursBar value={agent.hoursNum} max={agent.hoursMax} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden bg-paper/30 p-3 md:block">
            <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">
              Aujourd&apos;hui
            </p>
            <ul className="mt-2 space-y-2">
              {rhAbsences.slice(0, 3).map((row) => (
                <li key={row.agent} className="rounded-[2px] bg-white px-2.5 py-2 shadow-sm">
                  <p className="text-[11px] font-bold text-brand-navy">{row.agent}</p>
                  <p className="text-[10px] text-slate">{row.reason}</p>
                  <p className="mt-1 text-[10px] font-semibold text-green-deep">→ {row.replacement}</p>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-[2px] border border-line bg-white p-2">
              <p className="text-[9px] font-bold uppercase tracking-wide text-brand-navy-soft">
                Semaine · heures
              </p>
              <div className="mt-2 flex items-end gap-1" style={{ height: 44 }}>
                {rhWeekChart.map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col justify-end gap-0.5">
                    <div
                      className={`w-full rounded-[1px] ${i === rhWeekChart.length - 1 ? "bg-lime-cta" : "bg-brand-navy/25"}`}
                      style={{ height: `${(h / 40) * 100}%`, minHeight: 4 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WindowChrome>

      {/* Floating cards */}
      <div className="absolute bottom-[4.5rem] right-3 z-10 hidden w-[46%] max-w-[210px] rotate-[2deg] sm:block md:bottom-[5.5rem] md:right-5">
        <div className="overflow-hidden rounded-[2px] border border-white/20 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          <div className="border-b border-line bg-paper/60 px-3 py-2">
            <p className="text-[9px] font-bold uppercase tracking-wide text-brand-navy-soft">Mobile</p>
          </div>
          <div className="px-3 py-2.5">
            <p className="text-xs font-bold text-brand-navy">Backup affecté</p>
            <p className="text-[11px] text-slate">Julie R. · Wilson 08:00</p>
            <span className="mt-1.5 inline-block rounded-[2px] bg-green-action/15 px-1.5 py-0.5 text-[9px] font-bold text-green-deep">
              Notifié ✓
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-3 top-3 z-10 rotate-[-2deg] md:left-5 md:top-4">
        <div className="rounded-[2px] border border-line bg-white px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
          <p className="text-xs font-bold text-brand-navy">{rhPayroll.exportLabel}</p>
          <p className="text-[11px] text-slate">{label}</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/15 to-transparent" />
    </div>
  );
}
