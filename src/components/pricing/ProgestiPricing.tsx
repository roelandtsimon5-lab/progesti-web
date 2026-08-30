"use client";



import { useId, useState } from "react";

import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";

import { productMegaMenu } from "@/lib/navigation";

import { cta, ctaLabels } from "@/lib/cta";

import { mainPlan, modules, planInclusions, site } from "@/lib/site";



type Period = "month" | "year";



export function ProgestiPricing() {

  const [period, setPeriod] = useState<Period>("month");

  const tabListId = useId();

  const monthTabId = `${tabListId}-month`;

  const yearTabId = `${tabListId}-year`;

  const panelId = `${tabListId}-panel`;

  const price = period === "month" ? mainPlan.monthly : mainPlan.yearly;

  const suffix = period === "month" ? "HT / mois" : "HT / an";

  const yearlyNote =

    period === "year"

      ? `Équivaut à ${Math.round(mainPlan.yearly / 12)} € HT/mois · facturation annuelle`

      : null;



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



      <div id={panelId} role="tabpanel" aria-labelledby={period === "month" ? monthTabId : yearTabId} className="mx-auto max-w-lg">

        <article className="relative overflow-hidden rounded-[2px] border-2 border-lime-cta/50 bg-white p-8 shadow-[0_24px_64px_rgba(11,61,110,0.12)]">

          <span className="absolute right-4 top-4 rounded-[2px] bg-lime-cta px-2.5 py-1 text-[11px] font-extrabold uppercase text-blue-deep">

            Tout inclus

          </span>

          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-blue-royal">

            {mainPlan.name}

          </p>

          <p className="mt-4 font-display text-5xl font-extrabold tracking-tight text-blue-deep md:text-6xl">

            {price} €

            <span className="ml-2 text-xl font-bold text-slate">{suffix}</span>

          </p>

          {yearlyNote ? <p className="mt-2 text-sm text-slate">{yearlyNote}</p> : null}

          <p className="mt-3 text-lg text-slate">{mainPlan.users}</p>

          <p className="mt-1 text-sm text-slate">

            Tous les modules · clients & sites illimités · support FR

          </p>



          <ul className="mt-8 space-y-2.5 border-t border-blue-mist pt-8">

            {mainPlan.features.map((feature) => (

              <li key={feature} className="flex items-start gap-2.5 text-sm text-slate">

                <span className="font-bold text-lime-cta">✓</span>

                {feature}

              </li>

            ))}

          </ul>



          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <ButtonLink

              href={cta.trial}

              variant="trial"

              size="lg"

              className="!flex-1 !rounded-[2px]"

              event="trial_start"

              eventPayload={{ cta: "tarifs_card_trial" }}

            >

              {ctaLabels.trialShort}

            </ButtonLink>

            <ButtonLink

              href={cta.demo}

              size="lg"

              variant="secondary"

              className="!flex-1 !rounded-[2px]"

              eventPayload={{ cta: "tarifs_card_demo" }}

            >

              {ctaLabels.demoGate}

            </ButtonLink>

          </div>

          <p className="mt-4 text-center text-xs text-slate">Sans carte bancaire · pas de module payant en plus</p>

        </article>

      </div>



      <section className="mt-16">

        <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep md:text-3xl">

          Tous les modules inclus

        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate">

          Pas de tier caché — comparez avec les offres à modules payants ailleurs.

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



      <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate">

        {planInclusions.map((item) => (

          <li key={item} className="flex items-center gap-2">

            <span className="font-bold text-lime-cta">✓</span>

            {item}

          </li>

        ))}

      </ul>



      <p className="mt-6 text-center text-xs text-muted">

        {modules.length} modules · {site.phone} · MSNE SAS, Toulouse (31)

      </p>

    </>

  );

}


