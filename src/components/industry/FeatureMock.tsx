import Image from "next/image";
import { RhProductVisual } from "@/components/features/RhProductVisual";
import { getMockContext } from "@/lib/industry/mock-context";
import type { MockKind } from "@/lib/industry/types";
import { site } from "@/lib/site";

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
    <div className="absolute left-1/2 top-1/2 w-[62%] max-w-[300px] -translate-x-1/2 -translate-y-1/2 md:w-[58%] md:max-w-[320px]">
      <div className="rounded-[22px] border-[7px] border-brand-navy bg-brand-navy p-1.5 shadow-[0_28px_70px_rgba(1,41,57,0.4)]">
        <div className="overflow-hidden rounded-[14px] bg-white">{children}</div>
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
              src="/hero-planning.png"
              alt=""
              fill
              className="object-cover object-left-top opacity-40"
              sizes="640px"
              quality={95}

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
            <div className="bg-brand-navy px-3.5 py-2.5 text-center text-[11px] font-bold tracking-wide text-white">
              PROGESTI · Mon planning
            </div>
            <div className="space-y-2.5 p-3.5">
              {ctx.planningRows.slice(0, 3).map(([time, siteName, status]) => (
                <div
                  key={siteName}
                  className="rounded-[2px] border border-line/60 bg-paper/40 px-3 py-2.5"
                >
                  <p className="text-[12px] font-bold text-brand-navy">{siteName}</p>
                  <p className="mt-0.5 text-[11px] text-slate">{time}</p>
                  <span className="mt-1.5 inline-block rounded-[2px] bg-lime-cta/40 px-1.5 py-0.5 text-[10px] font-bold text-brand-navy">
                    {status}
                  </span>
                </div>
              ))}
              <button
                type="button"
                className="w-full rounded-[2px] bg-lime-cta py-2.5 text-[12px] font-bold text-brand-navy"
              >
                Pointer arrivée
              </button>
            </div>
          </PhoneFrame>
          <div className="absolute bottom-5 left-3 z-10 md:bottom-8 md:left-6">
            <Toast title="App agents" meta="Planning · pointage · consignes" />
          </div>
          <div className="absolute right-3 top-4 z-10 md:right-6 md:top-6">
            <div className="rounded-[2px] bg-white/95 px-3 py-2 text-xs font-bold text-brand-navy shadow-md">
              Android · iOS
            </div>
          </div>
        </Stage>
      );

    case "passages":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-5 md:inset-x-6 md:top-7">
            <Image
              src="/screen-passages.webp"
              alt="Preuve de passage PROGESTI — pointage télégestion validé"
              width={1440}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </Frame>
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
          {/* Document devis — rendu type PDF professionnel */}
          <Frame className="absolute inset-x-3 top-4 max-h-[92%] overflow-hidden md:inset-x-5 md:top-5 md:left-5 md:right-[28%]">
            <div className="border-b border-line bg-brand-navy px-4 py-3 text-white md:px-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-lime-cta">
                    Devis
                  </p>
                  <p className="mt-1 font-display text-base font-extrabold md:text-lg">
                    D-2026-084
                  </p>
                </div>
                <div className="text-right text-[10px] leading-relaxed text-white/75">
                  <p className="font-bold text-white">Votre société de propreté</p>
                  <p>31000 Toulouse</p>
                  <p>SIRET 106 177 116 00014</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 border-b border-line bg-paper/70 px-4 py-2.5 md:px-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">
                  Client
                </p>
                <p className="text-sm font-bold text-brand-navy">{ctx.clientName}</p>
                <p className="text-[11px] text-slate">{ctx.clientMeta}</p>
              </div>
              <span className="shrink-0 rounded-[2px] bg-lime-cta px-2.5 py-1 text-[10px] font-extrabold text-brand-navy">
                Signé en ligne ✓
              </span>
            </div>
            <div className="hidden border-b border-line/60 bg-paper/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft sm:grid sm:grid-cols-[1fr_auto_auto_auto] sm:gap-3 md:px-5">
              <span>Désignation</span>
              <span>Qté</span>
              <span>P.U. HT</span>
              <span className="text-right">Total</span>
            </div>
            <ul className="divide-y divide-line/50 text-sm">
              {[
                ["Entretien parties communes", "4 sites", "620 €", "2 480 €"],
                ["Vitres trimestrielles", "2 sites", "320 €", "640 €"],
                ["Consommables inclus", "1", "120 €", "120 €"],
              ].map(([label, qty, unit, total]) => (
                <li
                  key={label}
                  className="grid grid-cols-1 gap-1 px-4 py-2.5 sm:grid-cols-[1fr_auto_auto_auto] sm:items-center sm:gap-3 md:px-5"
                >
                  <p className="font-semibold text-brand-navy">{label}</p>
                  <p className="text-xs text-slate sm:text-center sm:text-sm sm:text-brand-navy">{qty}</p>
                  <p className="hidden text-sm text-slate sm:block">{unit}</p>
                  <p className="text-right font-bold text-brand-navy">{total}</p>
                </li>
              ))}
            </ul>
            <div className="space-y-1 border-t border-line bg-paper/50 px-4 py-3 md:px-5">
              <div className="flex justify-between text-xs text-slate">
                <span>Total HT</span>
                <span className="font-semibold text-brand-navy">3 240 €</span>
              </div>
              <div className="flex justify-between text-xs text-slate">
                <span>TVA 20 %</span>
                <span className="font-semibold text-brand-navy">648 €</span>
              </div>
              <div className="flex items-center justify-between border-t border-line/60 pt-2">
                <span className="text-xs font-bold uppercase tracking-wide text-brand-navy-soft">
                  Total TTC
                </span>
                <span className="font-display text-xl font-extrabold text-brand-navy">3 888 €</span>
              </div>
            </div>
          </Frame>
          <Frame className="absolute bottom-4 right-3 hidden w-[26%] max-w-[160px] rotate-[2deg] p-3 md:bottom-6 md:right-5 md:block">
            <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">
              Auto
            </p>
            <p className="mt-1 text-sm font-bold text-brand-navy">4 sites créés</p>
            <p className="mt-1 text-[11px] leading-snug text-slate">
              Planning prêt · zéro ressaisie
            </p>
          </Frame>
          <div className="absolute left-3 top-3 z-10 md:left-4 md:top-3">
            <Toast title="Devis professionnel" meta="Envoyé · signé · transformé" />
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
          <Frame className="absolute inset-x-3 top-4 md:inset-x-5 md:top-5">
            <Image
              src="/screen-factures.webp"
              alt="Factures PROGESTI"
              width={1440}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 720px"
              quality={95}
              priority={false}
            />
          </Frame>
          <div className="absolute bottom-4 left-3 z-10 md:bottom-6 md:left-5">
            <Toast title="Facture générée" meta="Alignée sur le réalisé" />
          </div>
          <Frame className="absolute bottom-3 right-3 z-10 w-[40%] max-w-[180px] rotate-[1.5deg] bg-white/95 p-3 md:bottom-5 md:right-5">
            <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">Ce mois</p>
            <p className="mt-1 font-display text-lg font-extrabold text-brand-navy">Facturé</p>
            <p className="text-xs text-slate">Sans double saisie</p>
          </Frame>
        </Stage>
      );

    case "impayes":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-4 md:inset-x-5 md:top-5 md:right-[32%]">
            <div className="flex items-end justify-between gap-3 border-b border-line bg-brand-navy px-4 py-3 text-white md:px-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-lime-cta">
                  Trésorerie
                </p>
                <p className="mt-1 text-xs text-white/70">Factures en retard</p>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl font-extrabold tracking-tight">
                  {ctx.unpaidRows
                    .reduce((sum, [, amount]) => {
                      const n = Number(String(amount).replace(/[^\d]/g, ""));
                      return sum + (Number.isFinite(n) ? n : 0);
                    }, 0)
                    .toLocaleString("fr-FR")}{" "}
                  €
                </p>
                <p className="text-[11px] text-white/65">{ctx.unpaidRows.length} à relancer</p>
              </div>
            </div>
            <ul className="divide-y divide-line/50">
              {ctx.unpaidRows.map(([client, amount, days], i) => {
                const d = Number(days);
                const urgent = d >= 21;
                return (
                  <li key={client} className="flex items-center gap-3 px-4 py-3 md:px-5">
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                        urgent ? "bg-red-500" : d >= 10 ? "bg-amber-400" : "bg-lime-cta"
                      }`}
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-brand-navy">{client}</p>
                      <p className="text-[11px] text-slate">
                        Retard {days} j
                        {urgent ? " · prioritaire" : ""}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-extrabold text-brand-navy">{amount}</p>
                      {i === 0 ? (
                        <span className="mt-0.5 inline-block rounded-[2px] bg-brand-navy px-1.5 py-0.5 text-[9px] font-bold text-white">
                          Relancer
                        </span>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-line bg-paper/60 px-4 py-2.5 text-[11px] text-slate md:px-5">
              Relances J+7 · historique client tracé · sans tableur
            </div>
          </Frame>
          <Frame className="absolute bottom-4 right-3 w-[30%] max-w-[180px] rotate-[2deg] p-3 md:bottom-6 md:right-5">
            <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">
              Prochaine action
            </p>
            <p className="mt-1 text-sm font-bold text-brand-navy">
              {ctx.unpaidRows[0]?.[0] ?? "Client"}
            </p>
            <p className="mt-1 text-[11px] leading-snug text-slate">
              Email de relance prêt · pièce jointe facture
            </p>
            <div className="mt-2 rounded-[2px] bg-lime-cta px-2 py-1.5 text-center text-[10px] font-extrabold text-brand-navy">
              Envoyer la relance
            </div>
          </Frame>
        </Stage>
      );

    case "dashboard-stack":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-5 md:inset-x-6 md:top-7">
            <Image
              src="/screen-rentabilite.webp"
              alt="Rentabilité PROGESTI — chiffre d'affaires réalisé et prévision"
              width={1440}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 720px"
              quality={95}
            />
          </Frame>
          <div className="absolute left-4 top-4 md:left-7 md:top-5">
            <Toast title="Marge lisible" meta="Décisions sur chiffres" />
          </div>
        </Stage>
      );

    case "clients":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-5 md:inset-x-6 md:top-7">
            <Image
              src="/screen-clients.webp"
              alt="Clients PROGESTI — fiches clients et sites"
              width={1440}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 720px"
              quality={95}
            />
          </Frame>
          <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8">
            <Toast title="Historique unifié" meta="Accès · passages · factures" />
          </div>
        </Stage>
      );

    case "multi-sites":
      return (
        <Stage>
          <Frame className="absolute inset-x-3 top-4 md:inset-x-5 md:top-5">
            <Image
              src="/screen-sites.webp"
              alt="Sites clients PROGESTI — multi-adresses"
              width={1440}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 720px"
              quality={95}
            />
          </Frame>
          <div className="absolute bottom-4 left-3 z-10 flex flex-wrap gap-2 md:bottom-6 md:left-5">
            {ctx.clientSites.slice(0, 3).map((s) => (
              <span
                key={s}
                className="rounded-[2px] bg-brand-navy px-2.5 py-1 text-[11px] font-bold text-white shadow-md"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="absolute right-3 top-3 z-10 md:right-5 md:top-4">
            <Toast title="Vue multi-sites" meta="Toute l’entreprise d’un coup d’œil" />
          </div>
        </Stage>
      );

    case "support":
      return (
        <Stage>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(168,227,0,0.16),transparent_42%),radial-gradient(circle_at_82%_72%,rgba(1,41,57,0.08),transparent_50%)]" />
          <Frame className="absolute inset-x-4 top-6 overflow-hidden md:inset-x-10 md:top-10 md:right-[28%]">
            <div className="border-b border-line bg-brand-navy px-5 py-4 text-white md:px-6 md:py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-lime-cta">
                Support métier FR
              </p>
              <p className="mt-1 font-display text-xl font-extrabold md:text-2xl">
                Une équipe qui parle propreté
              </p>
              <p className="mt-1 text-sm text-white/70">
                {site.company.legalName} · {site.company.city.replace(/^\d+\s*/, "")} (31)
              </p>
            </div>
            <div className="bg-white px-5 py-5 md:px-6 md:py-6">
              <p className="text-[10px] font-bold uppercase tracking-wide text-brand-navy-soft">
                Ligne directe
              </p>
              <p className="mt-1 font-display text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
                {site.phone}
              </p>
              <p className="mt-2 text-sm text-slate">Lun–Ven · 9h–18h · réponse humaine</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {["Planning", "Agents", "Contrats", "Facturation"].map((topic) => (
                  <li
                    key={topic}
                    className="rounded-[2px] bg-paper px-2.5 py-1.5 text-[11px] font-bold text-brand-navy"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </Frame>
          <div className="absolute bottom-5 right-4 z-10 md:bottom-8 md:right-7">
            <Toast title="Pas de ticket anonyme" meta="Accompagnement métier FR" />
          </div>
          <div className="absolute right-4 top-4 z-10 md:right-8 md:top-6">
            <div className="rounded-[2px] bg-lime-cta px-3 py-1.5 text-xs font-extrabold text-brand-navy shadow-md">
              Support FR inclus
            </div>
          </div>
        </Stage>
      );

    case "hub":
      return (
        <Stage>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,227,0,0.12),transparent_45%),radial-gradient(circle_at_75%_65%,rgba(1,41,57,0.07),transparent_50%)]" />
          <div className="absolute inset-x-4 top-5 grid grid-cols-[0.9fr_auto_1.15fr] items-center gap-2 md:inset-x-7 md:top-8 md:gap-4">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy-soft">
                Avant
              </p>
              {[
                ["Excel", "Plannings qui divergent"],
                ["WhatsApp", "Consignes perdues"],
                ["Mails / PDF", "Factures à retaper"],
              ].map(([title, meta]) => (
                <Frame key={title} className="relative px-3 py-2.5 opacity-80">
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                    ×
                  </span>
                  <p className="text-sm font-bold text-brand-navy line-through decoration-red-400/80">
                    {title}
                  </p>
                  <p className="text-[11px] text-slate">{meta}</p>
                </Frame>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="rounded-full bg-lime-cta px-2.5 py-1 text-[11px] font-extrabold text-brand-navy shadow-md">
                →
              </span>
            </div>
            <Frame className="overflow-hidden">
              <div className="border-b border-line bg-brand-navy px-4 py-3 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-lime-cta">
                  Après
                </p>
                <p className="mt-0.5 font-display text-lg font-extrabold">PROGESTI</p>
                <p className="text-[11px] text-white/70">Un seul outil · une seule vérité</p>
              </div>
              <ul className="grid grid-cols-2 gap-px bg-line/60">
                {[
                  ["Planning", "Multi-sites"],
                  ["Pointage", "Temps réel"],
                  ["Factures", "Sans ressaisie"],
                  ["RH", "Absences"],
                ].map(([title, meta]) => (
                  <li key={title} className="bg-white px-3 py-3">
                    <p className="text-sm font-bold text-brand-navy">{title}</p>
                    <p className="text-[11px] text-slate">{meta}</p>
                  </li>
                ))}
              </ul>
            </Frame>
          </div>
          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-7">
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
