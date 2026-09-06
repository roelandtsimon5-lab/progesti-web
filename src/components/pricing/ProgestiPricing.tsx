"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { productMegaMenu } from "@/lib/navigation";
import { cta, ctaLabels } from "@/lib/cta";
import {
  formatEuro,
  modules,
  planInclusions,
  plans,
  pricingCopy,
  site,
  type BillingPeriod,
} from "@/lib/site";

export function ProgestiPricing() {
  const [period, setPeriod] = useState<BillingPeriod>("month");
  const tabListId = useId();
  const monthTabId = `${tabListId}-month`;
  const yearTabId = `${tabListId}-year`;
  const panelId = `${tabListId}-panel`;

  return (
    <>
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div
          className="inline-flex rounded-[2px] border border-blue-mist bg-white p-1"
          role="tablist"
          aria-label="Période de facturation"
        >
          {(
            [
              ["month", "Mensuel", monthTabId] as const,
              ["year", "Annuel", yearTabId] as const,
            ] as const
          ).map(([value, label, id]) => (
            <button
              key={value}
              id={id}
              type="button"
              role="tab"
              aria-selected={period === value}
              aria-controls={panelId}
              tabIndex={period === value ? 0 : -1}
              onClick={() => setPeriod(value)}
              className={`rounded-[2px] px-5 py-2.5 text-sm font-bold outline-none transition focus-visible:ring-2 focus-visible:ring-blue-royal focus-visible:ring-offset-2 ${
                period === value ? "bg-blue-deep text-white" : "text-slate hover:text-blue-deep"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {period === "year" ? (
          <span className="rounded-[2px] bg-lime-cta/30 px-3 py-1.5 text-xs font-bold text-blue-deep">
            2 mois offerts sur l&apos;annuel
          </span>
        ) : null}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={period === "month" ? monthTabId : yearTabId}
        className="grid items-stretch gap-6 lg:grid-cols-3"
      >
        {plans.map((plan) => {
          const price = period === "month" ? plan.monthly : plan.yearly;
          const strike = period === "year" ? plan.yearlyStrike : null;
          return (
            <article
              key={plan.id}
              className={`relative flex flex-col overflow-hidden rounded-[2px] border bg-white p-7 shadow-[0_16px_48px_rgba(11,61,110,0.08)] ${
                plan.highlight ? "border-2 border-lime-cta/60" : "border-blue-mist"
              }`}
            >
              {plan.highlight ? (
                <span className="absolute right-4 top-4 rounded-[2px] bg-lime-cta px-2.5 py-1 text-[11px] font-extrabold uppercase text-blue-deep">
                  Le plus populaire
                </span>
              ) : null}

              <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-blue-royal">
                Offre {plan.name}
              </p>
              <p className="mt-2 text-sm font-medium text-slate">{plan.users}</p>

              <div className="mt-5">
                {strike ? (
                  <p className="text-sm font-medium text-slate line-through">{formatEuro(strike)} HT</p>
                ) : null}
                <p className="font-display text-4xl font-extrabold tracking-tight text-blue-deep md:text-5xl">
                  {formatEuro(price)}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate">
                  HT {period === "month" ? "/ mois" : "/ an"}
                </p>
                {plan.perUserHint && period === "month" ? (
                  <p className="mt-1 text-xs text-slate">{plan.perUserHint}</p>
                ) : null}
              </div>

              <ul className="mt-7 flex-1 space-y-2.5 border-t border-blue-mist pt-6">
                {planInclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate">
                    <span className="font-bold text-lime-cta">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink
                  href={cta.trial}
                  variant={plan.highlight ? "trial" : "secondary"}
                  size="lg"
                  className="!w-full !rounded-[2px]"
                  event="trial_start"
                  eventPayload={{ plan: plan.id, period, cta: "tarifs_card_trial" }}
                >
                  Essai Gratuit
                </ButtonLink>
                <ButtonLink
                  href={cta.demo}
                  size="lg"
                  variant="secondary"
                  className="!w-full !rounded-[2px]"
                  eventPayload={{ plan: plan.id, period, cta: "tarifs_card_demo" }}
                >
                  {ctaLabels.demoGate}
                </ButtonLink>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-slate">
        {pricingCopy.plansSummary} · sans carte bancaire pour démarrer
      </p>

      <section className="mt-16">
        <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
          Tous les modules inclus
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate">
          Chaque offre inclut l&apos;ensemble des modules — Planification, RH, Facturation, Contrats,
          Stock, Prépaie, Tableaux de bord, Géolocalisation, Pointage, Bon d&apos;intervention,
          Supervision, etc.
        </p>
        <div className="mx-auto mt-10 max-w-4xl">
          {productMegaMenu.columns.map((col) => (
            <div key={col.title} className="mb-8 last:mb-0">
              {col.title ? (
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-blue-royal">
                  {col.title}
                </p>
              ) : null}
              <ul className="grid gap-2 sm:grid-cols-2">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between gap-3 rounded-[2px] border border-blue-mist/80 bg-white px-4 py-3 text-sm transition hover:border-blue-royal hover:shadow-sm"
                    >
                      <span className="font-semibold text-blue-deep">{item.label}</span>
                      <span className="shrink-0 font-bold text-lime-cta">✓</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link href="/fonctionnalites" className="text-sm font-bold text-blue-royal hover:underline">
            Voir le détail de chaque module →
          </Link>
        </p>
      </section>

      <p className="mt-6 text-center text-xs text-muted">
        {modules.length} modules · {site.phone} · MSNE SAS, Toulouse (31)
      </p>
    </>
  );
}
