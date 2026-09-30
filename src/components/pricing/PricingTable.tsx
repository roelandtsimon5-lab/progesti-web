"use client";

import { cta } from "@/lib/cta";
import { formatEuro, planInclusions, plans } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function PricingTable() {
  return (
    <div>
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = plan.monthly;
          return (
            <article
              key={plan.id}
              className={`relative flex flex-col border bg-white p-7 ${
                plan.highlight ? "border-green-action border-2" : "border-blue-mist"
              }`}
            >
              {plan.highlight ? (
                <span className="absolute -top-3 left-6 bg-green-action px-3 py-1 font-display text-xs font-extrabold tracking-wide text-white">
                  Le plus populaire
                </span>
              ) : null}

              <h3 className="font-display text-2xl font-extrabold text-ink">Offre {plan.name}</h3>
              <p className="mt-1 text-sm font-medium text-muted">{plan.users}</p>

              <div className="mt-6">
                <p className="font-display text-[2.75rem] font-extrabold leading-none text-ink">
                  {formatEuro(price)}
                </p>
                <p className="mt-2 text-sm font-semibold text-anthracite">
                  HT / mois
                </p>
                {plan.perUserHint ? (
                  <p className="mt-1 text-xs text-muted">{plan.perUserHint}</p>
                ) : null}
              </div>

              <ul className="mt-7 flex-1 space-y-2.5">
                {planInclusions.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-anthracite">
                    <span className="mt-0.5 font-bold text-green-deep" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <ButtonLink
                  href={cta.trialApp}
                  className="w-full !py-3.5"
                  variant={plan.highlight ? "primary" : "secondary"}
                  event="trial_start"
                  eventPayload={{ plan: plan.id, cta: "v3_pricing" }}
                >
                  Essai Gratuit
                </ButtonLink>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
