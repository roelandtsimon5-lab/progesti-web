import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { cta } from "@/lib/cta";
import type {
  IndustryDemo,
  IndustryDemoRow,
  IndustryDemoTone,
  IndustryDemoVariant,
} from "@/lib/industry/types";
import { site } from "@/lib/site";

type Props = {
  demo: IndustryDemo;
  eventSlug: string;
};

function toneClasses(tone?: IndustryDemoTone, status?: string): string {
  const inferred =
    tone ??
    (status
      ? /report|retard|conflit|refus|alerte|orage|bloqu/i.test(status)
        ? "warn"
        : /danger|litige|panne|manquant|critique/i.test(status)
          ? "danger"
          : /ok|fait|prouvé|clos|valid|livré|reçu/i.test(status)
            ? "ok"
            : /info|priorit|affect|planif|en cours/i.test(status)
              ? "info"
              : "neutral"
      : "neutral");

  switch (inferred) {
    case "ok":
      return "bg-[#A8E300]/18 text-[#A8E300] border-[#A8E300]/35";
    case "warn":
      return "bg-amber-400/15 text-amber-200 border-amber-300/30";
    case "danger":
      return "bg-rose-400/15 text-rose-200 border-rose-300/30";
    case "info":
      return "bg-sky-400/15 text-sky-200 border-sky-300/30";
    default:
      return "bg-white/10 text-white/70 border-white/15";
  }
}

function MockChrome({
  uiLabel,
  toolbar,
  alert,
  hint,
  children,
}: {
  uiLabel: string;
  toolbar?: string;
  alert?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[2px] border border-[#012939]/15 bg-[#011B25] shadow-[0_24px_60px_rgba(1,27,37,0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A8E300] opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A8E300]" />
          </span>
          <p className="truncate text-xs font-bold uppercase tracking-[0.12em] text-[#A8E300]">
            {uiLabel}
          </p>
        </div>
        <span className="shrink-0 rounded-[2px] bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/70">
          PROGESTI · Espaces verts
        </span>
      </div>
      {toolbar ? (
        <div className="flex flex-wrap items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-2.5">
          {toolbar.split("·").map((chunk) => (
            <span
              key={chunk.trim()}
              className="rounded-[2px] border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-semibold tracking-wide text-white/65"
            >
              {chunk.trim()}
            </span>
          ))}
        </div>
      ) : null}
      {alert ? (
        <div className="border-b border-amber-300/20 bg-amber-400/10 px-4 py-2.5 text-[12px] font-medium leading-snug text-amber-100">
          {alert}
        </div>
      ) : null}
      {children}
      {hint ? (
        <p className="border-t border-white/8 px-4 py-2.5 text-[11px] leading-relaxed text-white/45">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

function StatusPill({ row }: { row: IndustryDemoRow }) {
  if (!row.status) return null;
  return (
    <span
      className={`shrink-0 rounded-[2px] border px-2 py-1 text-[11px] font-bold ${toneClasses(row.tone, row.status)}`}
    >
      {row.status}
    </span>
  );
}

function RowMeta({ meta }: { meta?: string }) {
  if (!meta) return null;
  return <p className="mt-1 text-[11px] text-white/40">{meta}</p>;
}

function MockBody({
  demo,
  variant,
}: {
  demo: IndustryDemo;
  variant: IndustryDemoVariant;
}) {
  if (variant === "board") {
    return (
      <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2">
        {demo.uiRows.map((row) => (
          <div
            key={`${row.left}-${row.right}-${row.status ?? ""}`}
            className="rounded-[2px] border border-white/10 bg-white/[0.04] p-3"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-white">{row.left}</p>
              <StatusPill row={row} />
            </div>
            <p className="mt-1 text-xs text-white/55">{row.right}</p>
            <RowMeta meta={row.meta} />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "timeline") {
    return (
      <ul className="relative space-y-0 px-4 py-2">
        {demo.uiRows.map((row, i) => (
          <li
            key={`${row.left}-${row.right}-${row.status ?? ""}`}
            className="relative flex gap-3 py-3 pl-2"
          >
            <span
              className={`mt-1 flex h-2.5 w-2.5 shrink-0 rounded-full ${
                row.tone === "warn" || /report|retard/i.test(row.status ?? "")
                  ? "bg-amber-300"
                  : row.tone === "danger"
                    ? "bg-rose-300"
                    : "bg-[#A8E300]"
              }`}
              aria-hidden
            />
            {i < demo.uiRows.length - 1 ? (
              <span
                className="absolute bottom-0 left-[13px] top-6 w-px bg-white/15"
                aria-hidden
              />
            ) : null}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-white">{row.left}</p>
                <StatusPill row={row} />
              </div>
              <p className="mt-0.5 text-xs text-white/55">{row.right}</p>
              <RowMeta meta={row.meta} />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  if (variant === "checklist") {
    return (
      <ul className="divide-y divide-white/8">
        {demo.uiRows.map((row) => {
          const done =
            row.tone === "ok" ||
            /ok|fait|prouvé|clos|valid/i.test(row.status ?? "");
          return (
            <li
              key={`${row.left}-${row.right}-${row.status ?? ""}`}
              className="flex items-start gap-3 px-4 py-3.5"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] border text-[10px] font-bold ${
                  done
                    ? "border-[#A8E300] bg-[#A8E300]/20 text-[#A8E300]"
                    : "border-white/25 text-white/40"
                }`}
                aria-hidden
              >
                {done ? "✓" : ""}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-white">{row.left}</p>
                  <StatusPill row={row} />
                </div>
                <p className="mt-0.5 text-xs text-white/55">{row.right}</p>
                <RowMeta meta={row.meta} />
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  if (variant === "split") {
    const mid = Math.ceil(demo.uiRows.length / 2);
    const left = demo.uiRows.slice(0, mid);
    const right = demo.uiRows.slice(mid);
    const labels = demo.uiSplitLabels ?? ["Bureau", "Terrain"];
    return (
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:divide-x sm:divide-white/10">
        {[left, right].map((col, ci) => (
          <div key={ci}>
            <p className="border-b border-white/8 bg-white/[0.03] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
              {labels[ci] ?? (ci === 0 ? "Gauche" : "Droite")}
            </p>
            <ul className="divide-y divide-white/8">
              {col.map((row) => (
                <li
                  key={`${row.left}-${row.right}-${row.status ?? ""}`}
                  className="px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-white">{row.left}</p>
                    <StatusPill row={row} />
                  </div>
                  <p className="mt-0.5 text-xs text-white/55">{row.right}</p>
                  <RowMeta meta={row.meta} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  const cols = demo.uiColumns;
  return (
    <div>
      {cols && cols.length > 0 ? (
        <div
          className="hidden grid-cols-[1.4fr_1fr_auto] gap-2 border-b border-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35 sm:grid"
          style={{
            gridTemplateColumns: `minmax(0,1.4fr) minmax(0,1fr) auto`,
          }}
        >
          {cols.slice(0, 3).map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      ) : null}
      <ul className="divide-y divide-white/8">
        {demo.uiRows.map((row) => (
          <li
            key={`${row.left}-${row.right}-${row.status ?? ""}`}
            className="flex items-start justify-between gap-3 px-4 py-3.5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {row.left}
              </p>
              <p className="mt-0.5 text-xs text-white/55">{row.right}</p>
              <RowMeta meta={row.meta} />
            </div>
            <StatusPill row={row} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Walkthrough + mock UI — unique par page marketing verticale. */
export function MarketingDemoSection({ demo, eventSlug }: Props) {
  const variant: IndustryDemoVariant = demo.variant ?? "list";

  return (
    <section
      className="industry-anchor border-y border-line bg-[linear-gradient(180deg,#F6F8F9_0%,#FFFFFF_55%)] py-14 md:py-20"
      id="demo"
    >
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0a7c6c]">
              {demo.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-ink md:text-3xl">
              {demo.h2}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate md:text-[1.05rem]">
              {demo.lead}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
          <Reveal delayMs={60}>
            <div className="rounded-[2px] border border-line bg-white p-5 shadow-[0_18px_50px_rgba(1,41,57,0.06)] md:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#5C6B73]">
                Cas client · journée type
              </p>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink">
                {demo.scenario}
              </p>
              <ol className="mt-6 space-y-4">
                {demo.steps.map((step, i) => (
                  <li key={step.label} className="flex gap-3">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] bg-[#012939] text-xs font-bold text-white"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-ink">{step.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-5 text-sm font-medium leading-relaxed text-[#023448]">
                {demo.takeaway}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <MockChrome
              uiLabel={demo.uiLabel}
              toolbar={demo.uiToolbar}
              alert={demo.uiAlert}
              hint={demo.uiHint}
            >
              <MockBody demo={demo} variant={variant} />
              <div className="border-t border-white/10 px-4 py-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <ButtonLink
                    href={cta.trial}
                    size="md"
                    variant="trial"
                    className="!rounded-[2px] !px-5"
                    event="trial_start"
                    eventPayload={{ cta: `${eventSlug}_demo_trial` }}
                  >
                    {demo.primaryCtaLabel ?? `Essai ${site.trialDays} jours`}
                  </ButtonLink>
                  <Link
                    href={cta.demo}
                    className="text-center text-sm font-semibold text-white/75 underline-offset-2 hover:text-white hover:underline sm:text-left"
                  >
                    {demo.secondaryCtaLabel ?? "Voir une démo guidée"}
                  </Link>
                </div>
              </div>
            </MockChrome>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
