import Image from "next/image";
import { RhProductVisual } from "@/components/features/RhProductVisual";
import { getMockContext } from "@/lib/industry/mock-context";
import type { MockKind } from "@/lib/industry/types";

type Props = {
  kind: MockKind;
  label: string;
  /** Slug solution pour contextualiser sites / clients dans les mocks */
  context?: string;
};

function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2px] border border-line bg-white shadow-[0_24px_64px_rgba(1,41,57,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}

function Toast({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="rounded-[2px] border border-line bg-white px-3 py-2 shadow-[0_14px_36px_rgba(1,41,57,0.12)]">
      <p className="text-xs font-bold text-brand-navy">{title}</p>
      <p className="text-[11px] text-slate">{meta}</p>
    </div>
  );
}

function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate min-h-[320px] overflow-hidden rounded-[2px] bg-[radial-gradient(circle_at_28%_35%,rgba(168,227,0,0.12)_0%,transparent_52%),radial-gradient(circle_at_78%_68%,rgba(1,41,57,0.06)_0%,#fafafa_58%)] shadow-[inset_0_0_0_1px_rgba(1,41,57,0.06)] md:min-h-[440px]">
      {children}
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-1/2 top-1/2 w-[46%] max-w-[220px] -translate-x-1/2 -translate-y-1/2">
      <div className="rounded-[18px] border-[6px] border-brand-navy bg-brand-navy p-1 shadow-[0_24px_60px_rgba(1,41,57,0.35)]">
        <div className="overflow-hidden rounded-[12px] bg-white">{children}</div>
      </div>
    </div>
  );
}

export function FeatureMock({ kind, label, context }: Props) {
  const ctx = getMockContext(context);

  switch (kind) {
    case "planning-map":
      return (
        <Stage>
          <div className="absolute inset-3 overflow-hidden rounded-[2px] opacity-90 md:inset-4">
            <Image
              src="/hero-planning.webp"
              alt=""
              fill
              className="object-cover object-left-top opacity-40"
              sizes="640px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#e8f2fa]/90 via-[#eef4f8]/75 to-transparent" />
          </div>
          <svg className="absolute inset-4 opacity-50 md:inset-8" viewBox="0 0 420 240" aria-hidden>
            <path
              d="M36 168 C96 48, 168 210, 228 96 S336 42, 388 128"
              fill="none"
              stroke="#1565a8"
              strokeWidth="3"
              strokeDasharray="7 7"
            />
            <circle cx="58" cy="148" r="9" fill="#1fa86b" />
            <circle cx="188" cy="124" r="9" fill="#012939" />
            <circle cx="312" cy="74" r="9" fill="#1fa86b" />
            <circle cx="58" cy="148" r="18" fill="#1fa86b" opacity="0.18" />
          </svg>
          <Frame className="absolute left-3 top-5 w-[84%] max-w-md md:left-6 md:top-8">
            <div className="flex items-center justify-between border-b border-line/60 bg-paper/50 px-4 py-2.5">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-navy-soft">
                Passages du jour
              </p>
              <span className="rounded-[2px] bg-lime-cta px-2 py-0.5 text-[10px] font-extrabold text-brand-navy">
                LIVE
              </span>
            </div>
            <ul className="divide-y divide-line/50 text-sm">
              {ctx.planningRows.map(([time, siteName, status]) => (
                <li key={siteName + time} className="flex items-center justify-between gap-3 px-4 py-3">
                  <div>
                    <p className="font-semibold text-brand-navy">{siteName}</p>
                    <p className="text-xs text-slate">{time}</p>
                  </div>
                  <span
                    className={`rounded-[2px] px-2 py-1 text-[11px] font-bold ${
                      status === "OK"
                        ? "bg-green-action/15 text-green-deep"
                        : status === "En cours"
                          ? "bg-lime-cta/35 text-brand-navy"
                          : "bg-paper text-brand-navy-soft"
                    }`}
                  >
                    {status}
                  </span>
                </li>
              ))}
            </ul>
          </Frame>
          <div className="absolute bottom-4 right-3 md:bottom-7 md:right-6">
            <Toast title={ctx.planningSummary} meta={label} />
          </div>
        </Stage>
      );

    case "telegestion":
      return (
        <Stage>
          <Frame className="absolute inset-x-4 top-6 md:inset-x-8 md:top-8">
            <Image
              src="/screen-telegestion.webp"
              alt="Télégestion PROGESTI — pointages terrain"
              width={1682}
              height={826}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </Frame>
          <div className="absolute bottom-5 left-4 rotate-[-2deg] md:bottom-8 md:left-8">
            <Toast title="Pointage validé" meta="Arrivée · géoloc OK" />
          </div>
          <div className="absolute right-4 top-4 rotate-[2deg] md:right-8 md:top-6">
            <div className="rounded-[2px] bg-brand-navy px-3 py-2 text-xs font-bold text-white shadow-lg">
              {ctx.telegestionSite}
            </div>
          </div>
        </Stage>
      );

    case "mobile-app":
      return (
        <Stage>
          <PhoneFrame>
            <div className="bg-brand-navy px-3 py-2 text-center text-[10px] font-bold text-white">
              PROGESTI · Mon planning
            </div>
            <div className="space-y-2 p-3">
              {ctx.planningRows.slice(0, 2).map(([time, siteName, status]) => (
                <div
                  key={siteName}
                  className="rounded-[2px] border border-line/60 bg-paper/40 px-2.5 py-2"
                >
                  <p className="text-[11px] font-bold text-brand-navy">{siteName}</p>
                  <p className="text-[10px] text-slate">{time}</p>
                  <span className="mt-1 inline-block rounded-[2px] bg-lime-cta/40 px-1.5 py-0.5 text-[9px] font-bold text-brand-navy">
                    {status}
                  </span>
                </div>
              ))}
              <button
                type="button"
                className="w-full rounded-[2px] bg-green-action py-2 text-[11px] font-bold text-white"
              >
                Pointer arrivée
              </button>
            </div>
          </PhoneFrame>
          <div className="absolute bottom-5 left-4 md:bottom-8 md:left-8">
            <Toast title="App agents" meta="Planning · pointage · consignes" />
          </div>
          <div className="absolute right-4 top-4 md:right-8 md:top-6">
            <div className="rounded-[2px] bg-white/90 px-3 py-2 text-xs font-bold text-brand-navy shadow-md">
              Android · iOS
            </div>
          </div>
        </Stage>
      );

    case "passages":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-5 rotate-[-0.5deg] md:inset-x-6 md:top-7">
            <Image
              src="/screen-passages.webp"
              alt="Passages PROGESTI — suivi des interventions"
              width={1600}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </Frame>
          <div className="absolute bottom-5 right-4 rotate-[1.5deg] md:bottom-8 md:right-7">
            <Toast title={ctx.proofSite} meta="Passage validé" />
          </div>
          <div className="absolute left-4 top-4 md:left-7 md:top-5">
            <div className="rounded-[2px] bg-lime-cta px-3 py-1.5 text-xs font-extrabold text-brand-navy shadow-md">
              Preuve OK ✓
            </div>
          </div>
        </Stage>
      );

    case "historique-timeline":
      return (
        <Stage>
          <Frame className="absolute inset-x-4 top-6 p-5 md:inset-x-8 md:top-10 md:p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-navy-soft">
              Historique · {ctx.clientName}
            </p>
            <ul className="mt-5 space-y-0">
              {ctx.timelineEntries.map(([date, site, agent], i) => (
                <li key={date + site} className="relative flex gap-4 pb-5 last:pb-0">
                  {i < ctx.timelineEntries.length - 1 ? (
                    <span className="absolute left-[7px] top-4 h-full w-0.5 bg-line" aria-hidden />
                  ) : null}
                  <span className="relative z-10 mt-0.5 h-4 w-4 shrink-0 rounded-full bg-lime-cta ring-2 ring-white" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-brand-navy">{site}</p>
                    <p className="text-xs text-slate">
                      {date} · {agent}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Frame>
          <div className="absolute bottom-5 right-4 md:bottom-8 md:right-7">
            <Toast title="Mémoire contrat" meta="Litiges · renouvellements" />
          </div>
        </Stage>
      );

    case "preuves-report":
      return (
        <Stage>
          <Frame className="absolute inset-x-4 top-6 p-5 md:inset-x-10 md:top-10 md:p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-navy-soft">
              Rapport donneur d’ordre
            </p>
            <p className="mt-2 font-display text-xl font-extrabold text-brand-navy">{ctx.clientName}</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {ctx.reportStats.map(([statLabel, value]) => (
                <div key={statLabel} className="rounded-[2px] bg-paper/60 px-2 py-3">
                  <p className="font-display text-lg font-extrabold text-brand-navy">{value}</p>
                  <p className="text-[10px] text-slate">{statLabel}</p>
                </div>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {ctx.clientSites.slice(0, 3).map((s) => (
                <li key={s} className="flex items-center justify-between rounded-[2px] bg-white px-3 py-2 shadow-sm">
                  <span className="font-medium text-brand-navy">{s}</span>
                  <span className="text-[11px] font-bold text-green-deep">✓ Tenu</span>
                </li>
              ))}
            </ul>
          </Frame>
          <div className="absolute bottom-5 left-4 md:bottom-8 md:left-7">
            <Toast title="Export prêt" meta="Syndic · facility manager" />
          </div>
        </Stage>
      );

    case "rh":
    case "rh-stack":
      return (
        <Stage>
          <div className="absolute inset-2 md:inset-3">
            <RhProductVisual label={label} context={context} variant="hero" />
          </div>
        </Stage>
      );

    case "rh-payroll":
      return (
        <Stage>
          <div className="absolute inset-3 md:inset-4">
            <RhProductVisual label={label} context={context} variant="payroll" />
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <Toast title="Variables prêtes" meta="Expert paie · zéro Excel" />
          </div>
        </Stage>
      );
    case "devis":
      return (
        <Stage>
          <Frame className="absolute inset-x-4 top-6 w-[84%] max-w-md rotate-[-1deg] md:inset-x-8 md:top-10">
            <div className="flex items-center justify-between border-b border-line bg-paper/60 px-4 py-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">
                  Devis n° 2024-084
                </p>
                <p className="mt-0.5 text-sm font-bold text-brand-navy">{ctx.clientName}</p>
              </div>
              <span className="rounded-[2px] bg-lime-cta px-2 py-1 text-[10px] font-extrabold text-brand-navy">
                Accepté ✓
              </span>
            </div>
            <ul className="divide-y divide-line/50 text-sm">
              {[
                ["Entretien parties communes", "4 sites", "2 480 €"],
                ["Vitres trimestrielles", "2 sites", "640 €"],
                ["Consommables inclus", "Forfait", "120 €"],
              ].map(([label, meta, amount]) => (
                <li key={label} className="flex items-center justify-between gap-3 px-4 py-3">
                  <div>
                    <p className="font-semibold text-brand-navy">{label}</p>
                    <p className="text-xs text-slate">{meta}</p>
                  </div>
                  <span className="font-bold text-brand-navy">{amount}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-line bg-paper/40 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-navy-soft">Total HT</p>
              <p className="font-display text-lg font-extrabold text-brand-navy">3 240 €</p>
            </div>
          </Frame>
          <Frame className="absolute bottom-5 right-4 w-[46%] max-w-[210px] rotate-[2deg] p-3 md:bottom-8 md:right-7">
            <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">Suite</p>
            <p className="mt-1 text-sm font-bold text-brand-navy">Sites créés</p>
            <p className="text-[11px] text-slate">Planning prêt · zéro ressaisie</p>
          </Frame>
          <div className="absolute left-4 top-4 md:left-7 md:top-5">
            <Toast title="Devis signé en ligne" meta="Commercial → ops" />
          </div>
        </Stage>
      );

    case "flux-pipeline":
      return (
        <Stage>
          <div className="absolute left-[2.35rem] top-[22%] bottom-[22%] w-px bg-line md:left-[3.35rem]" aria-hidden />
          <div className="absolute inset-x-6 top-1/2 flex -translate-y-1/2 flex-col gap-3 md:inset-x-12">
            {[
              { step: "Devis", done: true, sub: "Accepté en ligne" },
              { step: "Planning", done: true, sub: "Passages créés" },
              { step: "Pointage", done: true, sub: "Terrain validé" },
              { step: "Facture", done: false, sub: "Prête à émettre" },
            ].map((item, i) => (
              <div key={item.step} className="relative flex items-center gap-3">
                <span
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ring-4 ring-[#fafafa] ${
                    item.done ? "bg-lime-cta text-brand-navy" : "bg-line text-brand-navy-soft"
                  }`}
                >
                  {i + 1}
                </span>
                <Frame className="flex-1 px-4 py-3">
                  <p className="text-sm font-bold text-brand-navy">{item.step}</p>
                  <p className="text-xs text-slate">{item.sub}</p>
                </Frame>
              </div>
            ))}
          </div>
          <div className="absolute bottom-5 left-4 md:bottom-8 md:left-7">
            <Toast title="Zéro ressaisie" meta="Commercial → ops → facture" />
          </div>
        </Stage>
      );

    case "factures-stack":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-5 rotate-[0.6deg] md:inset-x-6 md:top-7">
            <Image
              src="/screen-factures.webp"
              alt="Factures PROGESTI"
              width={1682}
              height={828}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </Frame>
          <div className="absolute bottom-5 left-4 rotate-[-1deg] md:bottom-8 md:left-7">
            <Toast title="Facture générée" meta="Alignée sur le réalisé" />
          </div>
          <Frame className="absolute bottom-4 right-3 w-[42%] max-w-[190px] rotate-[2deg] p-3 md:bottom-7 md:right-6">
            <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">Ce mois</p>
            <p className="mt-1 font-display text-lg font-extrabold text-brand-navy">Facturé</p>
            <p className="text-xs text-slate">Sans double saisie</p>
          </Frame>
        </Stage>
      );

    case "impayes":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-8 w-[78%] max-w-md md:left-6 md:top-10">
            <div className="border-b border-line/60 bg-paper/50 px-4 py-2.5">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-navy-soft">Impayés</p>
            </div>
            <ul className="divide-y divide-line/50 text-sm">
              {ctx.unpaidRows.map(([client, amount, days]) => (
                <li key={client} className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="font-semibold text-brand-navy">{client}</p>
                    <p className="text-xs text-slate">Retard {days} j</p>
                  </div>
                  <span className="font-bold text-brand-navy">{amount}</span>
                </li>
              ))}
            </ul>
          </Frame>
          <Frame className="absolute bottom-6 right-3 w-[48%] max-w-[220px] rotate-[1.5deg] md:bottom-10 md:right-6">
            <div className="border-b border-line bg-paper px-4 py-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">Relance J+7</p>
            </div>
            <div className="p-4 text-sm">
              <p className="font-semibold text-brand-navy">{ctx.unpaidRows[0]?.[0] ?? "Client"}</p>
              <p className="mt-1 text-xs text-slate">Email + historique tracé</p>
            </div>
          </Frame>
          <div className="absolute left-4 top-4 md:left-7 md:top-5">
            <Toast title="2 factures à relancer" meta="Suivi trésorerie" />
          </div>
        </Stage>
      );

    case "dashboard-stack":
      return (
        <Stage>
          <div className="absolute inset-x-5 top-6 grid grid-cols-3 gap-2 md:inset-x-10 md:top-8 md:gap-3">
            {[
              ["Marge moy.", "18,4 %", "lime"],
              ["CA mensuel", "42,8 k€", "navy"],
              ["Heures fact.", "1 240 h", "navy"],
            ].map(([label, value, tone]) => (
              <Frame key={label} className="p-3 md:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">
                  {label}
                </p>
                <p
                  className={`mt-1 font-display text-lg font-extrabold md:text-xl ${
                    tone === "lime" ? "text-green-action" : "text-brand-navy"
                  }`}
                >
                  {value}
                </p>
              </Frame>
            ))}
          </div>
          <Frame className="absolute inset-x-4 bottom-6 top-[9.5rem] md:inset-x-8 md:bottom-8 md:top-[10.5rem]">
            <div className="border-b border-line bg-paper/50 px-4 py-2.5">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-navy-soft">
                Rentabilité par site
              </p>
            </div>
            <ul className="divide-y divide-line/50 text-sm">
              {ctx.dashboardSites.split(" · ").map((siteName, i) => (
                <li key={siteName} className="flex items-center gap-3 px-4 py-3">
                  <span className="min-w-0 flex-1 font-semibold text-brand-navy">{siteName}</span>
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-paper md:w-32">
                    <div
                      className="h-full rounded-full bg-green-action"
                      style={{ width: `${88 - i * 14}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-xs font-bold text-brand-navy">
                    {22 - i * 3}%
                  </span>
                </li>
              ))}
            </ul>
          </Frame>
          <div className="absolute left-4 top-4 md:left-7 md:top-5">
            <Toast title="Marge lisible" meta="Décisions sur chiffres" />
          </div>
        </Stage>
      );

    case "clients":
      return (
        <Stage>
          <Frame className="absolute inset-x-4 top-8 p-5 md:inset-x-10 md:top-12 md:p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-navy-soft">Fiche client</p>
            <p className="mt-2 font-display text-2xl font-extrabold text-brand-navy">{ctx.clientName}</p>
            <p className="text-sm text-slate">{ctx.clientMeta}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {ctx.clientSites.map((s) => (
                <div
                  key={s}
                  className="rounded-[2px] bg-paper/70 px-3 py-2.5 text-sm font-medium text-brand-navy"
                >
                  {s}
                </div>
              ))}
            </div>
          </Frame>
          <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8">
            <Toast title="Historique unifié" meta="Accès · passages · factures" />
          </div>
        </Stage>
      );

    case "multi-sites":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-5 md:inset-x-6 md:top-7">
            <Image
              src="/hero-planning.webp"
              alt="Planning multi-sites PROGESTI"
              width={1305}
              height={833}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </Frame>
          <div className="absolute bottom-5 left-4 flex flex-wrap gap-2 md:bottom-8 md:left-7">
            {ctx.clientSites.slice(0, 3).map((s) => (
              <span
                key={s}
                className="rounded-[2px] bg-brand-navy px-2.5 py-1 text-[11px] font-bold text-white shadow-md"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="absolute right-4 top-4 md:right-7 md:top-5">
            <Toast title="Vue multi-sites" meta="Toute l’entreprise d’un coup d’œil" />
          </div>
        </Stage>
      );

    case "photo-overlay":
      return (
        <Stage>
          <div className="absolute inset-0">
            <Image
              src="/screen-telegestion.webp"
              alt=""
              fill
              className="object-cover object-[center_30%]"
              sizes="640px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-transparent" />
          </div>
          <div className="absolute left-4 top-4 rotate-[-2deg] md:left-7 md:top-6">
            <Toast title="Passage terminé" meta={ctx.proofSite} />
          </div>
          <div className="absolute bottom-6 right-4 rotate-[1.5deg] md:bottom-10 md:right-7">
            <div className="rounded-[2px] bg-lime-cta px-4 py-2.5 text-sm font-extrabold text-brand-navy shadow-lg">
              Qualité terrain ✓
            </div>
          </div>
        </Stage>
      );

    case "support":
      return (
        <Stage>
          <div className="absolute inset-0">
            <Image
              src="/screen-telegestion.webp"
              alt=""
              fill
              className="object-cover object-[center_30%] opacity-35"
              sizes="640px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 via-transparent to-paper/40" />
          </div>
          <Frame className="absolute inset-x-6 top-1/2 w-auto -translate-y-1/2 p-6 text-center md:inset-x-12 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-deep">
              Support métier FR
            </p>
            <p className="mt-3 font-display text-2xl font-extrabold text-brand-navy">
              On parle planning, agents, contrats.
            </p>
            <p className="mt-3 text-sm text-slate">
              Pas un ticket anonyme — une équipe qui connaît la propreté.
            </p>
            <p className="mt-5 font-display text-lg font-bold text-brand-navy-soft">05 82 95 09 19</p>
          </Frame>
        </Stage>
      );

    case "hub":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-5 md:inset-x-6 md:top-7">
            <Image
              src="/screen-telegestion.webp"
              alt="PROGESTI — un seul outil"
              width={1400}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </Frame>
          <div className="absolute bottom-5 left-1/2 flex w-[90%] -translate-x-1/2 justify-center gap-2 md:bottom-8">
            <Toast title="Excel" meta="remplacé" />
            <Toast title="WhatsApp" meta="allégé" />
          </div>
        </Stage>
      );

    default:
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-5 md:inset-x-6 md:top-7">
            <Image
              src="/screen-telegestion.webp"
              alt="PROGESTI"
              width={1400}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </Frame>
        </Stage>
      );
  }
}
