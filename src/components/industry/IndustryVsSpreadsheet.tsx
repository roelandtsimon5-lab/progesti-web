import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";

import { ButtonLink } from "@/components/ui/ButtonLink";

import { cta } from "@/lib/cta";

import { mainPlan, modules, site } from "@/lib/site";



const rows = [

  {

    label: "Prix affiché",

    chaos: "Devis sur demande · modules en plus",

    progesti: "149 € HT/mois · public",

  },

  {

    label: "Outils",

    chaos: "Excel + WhatsApp + facture Word",

    progesti: `1 logiciel · ${modules.length} modules inclus`,

  },

  {

    label: "Terrain → facture",

    chaos: "Double saisie · oublis fréquents",

    progesti: "Pointage alimente la facturation",

  },

  {

    label: "Support",

    chaos: "Ticket générique · délais",

    progesti: `FR · ${site.phone} · métier`,

  },

  {

    label: "Essai",

    chaos: "CB souvent exigée",

    progesti: `${site.trialDays} jours · sans CB`,

  },

] as const;



export function IndustryVsSpreadsheet() {

  return (

    <section className="border-y border-line bg-paper py-14 md:py-16" id="comparatif">

      <div className="container">

        <Reveal>

          <p className="eyebrow">Pourquoi pas Excel ?</p>

          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold md:text-4xl">

            PROGESTI vs le chaos quotidien

          </h2>

          <p className="mt-4 max-w-xl text-slate">

            Pensé pour la propreté en France — prix public, modules métier, support local au {site.phone}.

          </p>

        </Reveal>

        <div className="mt-10 md:hidden">

          <ul className="space-y-3">

            {rows.map((row) => (

              <li key={row.label} className="rounded-[2px] border border-line bg-white p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-muted">{row.label}</p>

                <p className="mt-2 text-sm text-slate">{row.chaos}</p>

                <p className="mt-2 border-t border-line pt-2 text-sm font-semibold text-ink">

                  PROGESTI : {row.progesti}

                </p>

              </li>

            ))}

          </ul>

        </div>

        <div className="mt-10 hidden overflow-x-auto md:block">

          <table className="w-full min-w-[640px] border-collapse text-left text-sm">

            <thead>

              <tr className="border-b border-line">

                <th className="py-3 pr-4 font-display text-xs font-bold uppercase tracking-wide text-muted">

                  Critère

                </th>

                <th className="py-3 px-4 font-display text-xs font-bold uppercase tracking-wide text-muted">

                  Excel / WhatsApp

                </th>

                <th className="bg-lime-cta/15 py-3 pl-4 font-display text-xs font-bold uppercase tracking-wide text-ink">

                  PROGESTI

                </th>

              </tr>

            </thead>

            <tbody>

              {rows.map((row) => (

                <tr key={row.label} className="border-b border-line/80">

                  <td className="py-4 pr-4 font-semibold text-ink">{row.label}</td>

                  <td className="py-4 px-4 text-slate">{row.chaos}</td>

                  <td className="bg-lime-cta/10 py-4 pl-4 font-semibold text-ink">{row.progesti}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

          <ButtonLink

            href={cta.trial}

            variant="trial"

            event="trial_start"

            eventPayload={{ cta: "comparatif_trial" }}

          >

            Essai {site.trialDays} jours gratuit

          </ButtonLink>

          <Link href="/comparatifs" className="link-accent text-sm font-bold">

            Voir tous les comparatifs →

          </Link>

        </div>

        <p className="mt-6 text-center text-sm text-slate">

          Économie annuelle vs mensuel :{" "}

          <span className="font-bold text-ink">{mainPlan.yearlyStrike - mainPlan.yearly} € HT</span> (2 mois offerts ·{" "}

          {mainPlan.yearly} €/an)

        </p>

      </div>

    </section>

  );

}


