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

function toneClasses(tone?: IndustryDemoTone, status?: string) {
  const inferred: IndustryDemoTone =
    tone ??
    (status === "alert" || status === "danger" || /trou|manquant|indispo|litige|rouge/i.test(status ?? "")
      ? "danger"
      : status === "warn" || /attention|backup|brouillon|pending/i.test(status ?? "")
        ? "warn"
        : status === "info" || /info|escalade|dispatch/i.test(status ?? "")
          ? "info"
          : status
            ? "ok"
            : "neutral");

  switch (inferred) {
    case "danger":
      return "bg-[#F87171]/20 text-[#FCA5A5]";
    case "warn":
      return "bg-[#FBBF24]/18 text-[#FCD34D]";
    case "info":
      return "bg-[#38BDF8]/18 text-[#7DD3FC]";
    case "ok":
      return "bg-[#A8E300]/15 text-[#A8E300]";
    default:
      return "bg-white/10 text-white/70";
  }
}

function statusLabel(status?: string) {
  if (!status) return null;
  if (status === "ok") return "OK";
  if (status === "alert") return "Alerte";
  if (status === "warn") return "Attention";
  if (status === "info") return "Info";
  return status;
}

function StatusChip({ row }: { row: IndustryDemoRow }) {
  const label = statusLabel(row.status);
  if (!label) return null;
  return (
    <span className={`shrink-0 rounded-[2px] px-2 py-1 text-[11px] font-bold ${toneClasses(row.tone, row.status)}`}>
      {label}
    </span>
  );
}

function RowBlock({ row }: { row: IndustryDemoRow }) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-semibold text-white">{row.left}</p>
        <StatusChip row={row} />
      </div>
      <p className="mt-0.5 text-xs leading-relaxed text-white/55">{row.right}</p>
      {row.meta ? <p className="mt-1 font-mono text-[10px] tracking-wide text-[#A8E300]/80">{row.meta}</p> : null}
    </div>
  );
}

function SecMockBody({ demo, variant }: { demo: IndustryDemo; variant: IndustryDemoVariant }) {
  if (variant === "board") {
    return (
      <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2">
        {demo.uiRows.map((row) => (
          <div
            key={`${row.left}-${row.right}`}
            className="rounded-[2px] border border-white/10 bg-white/[0.04] p-3"
          >
            <RowBlock row={row} />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "timeline") {
    return (
      <ul className="relative space-y-0 px-4 py-2">
        {demo.uiRows.map((row, i) => (
          <li key={`${row.left}-${row.right}`} className="relative flex gap-3 py-3 pl-2">
            <span
              className={`mt-1 flex h-2.5 w-2.5 shrink-0 rounded-full ${
                row.tone === "danger" || row.status === "alert" ? "bg-[#F87171]" : "bg-[#A8E300]"
              }`}
              aria-hidden
            />
            {i < demo.uiRows.length - 1 ? (
              <span className="absolute left-[13px] top-6 bottom-0 w-px bg-white/15" aria-hidden />
            ) : null}
            <RowBlock row={row} />
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
            row.status === "ok" ||
            /ok|valid|confirm|couvert|tenu|prêt|lue|fait/i.test(row.status ?? "");
          return (
            <li key={`${row.left}-${row.right}`} className="flex items-start gap-3 px-4 py-3.5">
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] border text-[10px] font-bold ${
                  done
                    ? "border-[#A8E300]/50 bg-[#A8E300]/15 text-[#A8E300]"
                    : "border-white/25 text-white/40"
                }`}
                aria-hidden
              >
                {done ? "✓" : ""}
              </span>
              <RowBlock row={row} />
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
    const [leftLabel, rightLabel] = demo.uiSplitLabels ?? ["Terrain", "Bureau"];
    return (
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
        <div className="border-b border-white/10 sm:border-b-0 sm:border-r">
          <p className="border-b border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
            {leftLabel}
          </p>
          <ul className="divide-y divide-white/8">
            {left.map((row) => (
              <li key={`${row.left}-${row.right}`} className="px-4 py-3">
                <RowBlock row={row} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="border-b border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
            {rightLabel}
          </p>
          <ul className="divide-y divide-white/8">
            {right.map((row) => (
              <li key={`${row.left}-${row.right}`} className="px-4 py-3">
                <RowBlock row={row} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-white/8">
      {demo.uiColumns?.length ? (
        <li className="grid grid-cols-[1.2fr_1fr_auto] gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">
          <span>{demo.uiColumns[0]}</span>
          <span>{demo.uiColumns[1]}</span>
          <span>{demo.uiColumns[2] ?? "Statut"}</span>
        </li>
      ) : null}
      {demo.uiRows.map((row) => (
        <li key={`${row.left}-${row.right}`} className="flex items-start justify-between gap-3 px-4 py-3.5">
          <RowBlock row={row} />
        </li>
      ))}
    </ul>
  );
}

function SecChrome({
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
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A8E300] opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A8E300]" />
          </span>
          <p className="truncate text-xs font-bold uppercase tracking-[0.12em] text-[#A8E300]">{uiLabel}</p>
        </div>
        <span className="shrink-0 rounded-[2px] bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/70">
          PROGESTI · Sécurité
        </span>
      </div>
      {toolbar ? (
        <div className="border-b border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-medium text-white/60">
          {toolbar}
        </div>
      ) : null}
      {alert ? (
        <div className="border-b border-[#F87171]/30 bg-[#F87171]/10 px-4 py-2 text-[11px] font-semibold leading-relaxed text-[#FCA5A5]">
          {alert}
        </div>
      ) : null}
      {children}
      {hint ? (
        <div className="border-t border-white/10 px-4 py-2 text-[10px] leading-relaxed text-white/40">{hint}</div>
      ) : null}
    </div>
  );
}

/**
 * Démo produit dédiée verticale Sécurité / Gardiennage.
 * Mock UI navy/lime — vacations, rondes, main courante, alertes couverture.
 * Ne pas réutiliser pour EV / propreté.
 */
export function MarketingSecuriteDemo({ demo, eventSlug }: Props) {
  const variant: IndustryDemoVariant = demo.variant ?? "list";

  return (
    <section
      className="industry-anchor border-y border-line bg-[linear-gradient(180deg,#F6F8F9_0%,#FFFFFF_55%)] py-14 md:py-20"
      id="demo-produit"
      aria-labelledby="securite-demo-title"
    >
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#012939]">{demo.eyebrow}</p>
            <h2
              id="securite-demo-title"
              className="mt-3 font-display text-2xl font-extrabold text-ink md:text-3xl"
            >
              {demo.h2}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate md:text-[1.05rem]">{demo.lead}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
          <Reveal delayMs={60}>
            <div className="rounded-[2px] border border-line bg-white p-5 shadow-[0_18px_50px_rgba(1,41,57,0.06)] md:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#5C6B73]">
                Scénario terrain · gardiennage
              </p>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink">{demo.scenario}</p>
              <ol className="mt-6 space-y-4">
                {demo.steps.map((step, i) => (
                  <li key={step.label} className="flex gap-3">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] bg-[#012939] text-xs font-bold text-[#A8E300]"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-ink">{step.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate">{step.detail}</p>
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
            <SecChrome
              uiLabel={demo.uiLabel}
              toolbar={demo.uiToolbar}
              alert={demo.uiAlert}
              hint={demo.uiHint}
            >
              <SecMockBody demo={demo} variant={variant} />
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
                    {demo.secondaryCtaLabel ?? "Voir une démo terrain"}
                  </Link>
                </div>
              </div>
            </SecChrome>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
