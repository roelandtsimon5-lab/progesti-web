import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExpandableText } from "@/components/ui/ExpandableText";
import { Reveal } from "@/components/ui/Reveal";
import { cta } from "@/lib/cta";
import { site, solutions } from "@/lib/site";

type Props = {
  moduleTitle: string;
  slug: string;
  pain: string;
  problemBody: string;
  solutionBullets: readonly string[];
  excelRows: readonly { aspect: string; excel: string; progesti: string }[];
};

export function ModuleWhySection({
  moduleTitle,
  slug,
  pain,
  problemBody,
  solutionBullets,
  excelRows,
}: Props) {
  const topRows = excelRows.slice(0, 4);

  return (
    <section id="pourquoi" className="scroll-mt-36 border-y border-line bg-paper py-14 md:py-16">
      <div className="container max-w-5xl">
        <Reveal>
          <p className="eyebrow">Pourquoi PROGESTI</p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-brand-navy">
            {moduleTitle} vs Excel & WhatsApp
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2px] border border-line bg-white p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Aujourd&apos;hui</p>
              <p className="mt-2 font-sans text-xl font-extrabold text-brand-navy">{pain}</p>
              <ExpandableText
                text={problemBody}
                className="mt-3 text-[15px] leading-relaxed text-slate"
              />
              <ul className="mt-6 flex flex-wrap gap-2">
                {solutions.slice(0, 4).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/solutions/${s.slug}`}
                      className="inline-flex rounded-[2px] border border-line bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy hover:border-brand-navy-soft"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={50}>
            <div className="rounded-[2px] border-2 border-lime-cta/35 bg-white p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-navy-soft">
                Avec {moduleTitle}
              </p>
              <ul className="mt-4 space-y-2.5">
                {solutionBullets.slice(0, 5).map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm text-slate">
                    <span className="font-bold text-lime-cta" aria-hidden>
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={cta.trial}
                variant="trial"
                className="mt-6 !rounded-[2px]"
                event="trial_start"
                eventPayload={{ cta: "module_why_trial", module: slug }}
              >
                Essai {site.trialDays} jours
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div id="excel" className="mt-12 scroll-mt-36">
          <h3 className="font-sans text-lg font-extrabold text-brand-navy">Comparatif détaillé</h3>
          <div className="mt-5 space-y-2 md:hidden">
            {topRows.map((row) => (
              <div key={row.aspect} className="rounded-[2px] border border-line bg-white p-4">
                <p className="text-xs font-bold uppercase text-muted">{row.aspect}</p>
                <div className="mt-2 grid gap-2 text-sm">
                  <p className="text-slate">
                    <span className="font-semibold text-muted">Excel · </span>
                    {row.excel}
                  </p>
                  <p className="font-medium text-brand-navy">
                    <span className="font-semibold text-lime-cta">PROGESTI · </span>
                    {row.progesti}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 hidden overflow-hidden rounded-[2px] border border-line bg-white md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-paper">
                  <th className="px-4 py-3 font-bold text-muted">Aspect</th>
                  <th className="px-4 py-3 font-bold text-muted">Excel / WhatsApp</th>
                  <th className="bg-lime-cta/10 px-4 py-3 font-bold text-brand-navy">PROGESTI</th>
                </tr>
              </thead>
              <tbody>
                {topRows.map((row) => (
                  <tr key={row.aspect} className="border-b border-line last:border-0">
                    <th className="px-4 py-3 font-semibold text-brand-navy">{row.aspect}</th>
                    <td className="px-4 py-3 text-slate">{row.excel}</td>
                    <td className="bg-lime-cta/5 px-4 py-3 font-medium text-brand-navy">{row.progesti}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {excelRows.length > 4 ? (
            <details className="mt-4 rounded-[2px] border border-line bg-white p-4">
              <summary className="cursor-pointer text-sm font-bold text-brand-navy-soft">
                Voir les {excelRows.length - 4} autres critères
              </summary>
              <div className="mt-4 space-y-2 md:hidden">
                {excelRows.slice(4).map((row) => (
                  <div key={row.aspect} className="border-t border-line pt-3 text-sm">
                    <p className="font-bold text-brand-navy">{row.aspect}</p>
                    <p className="mt-1 text-slate">{row.excel}</p>
                    <p className="mt-1 font-medium text-brand-navy">{row.progesti}</p>
                  </div>
                ))}
              </div>
              <table className="mt-4 hidden w-full text-left text-sm md:table">
                <tbody>
                  {excelRows.slice(4).map((row) => (
                    <tr key={row.aspect} className="border-t border-line">
                      <th className="px-4 py-3 font-semibold text-brand-navy">{row.aspect}</th>
                      <td className="px-4 py-3 text-slate">{row.excel}</td>
                      <td className="bg-lime-cta/5 px-4 py-3 font-medium text-brand-navy">{row.progesti}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          ) : null}
        </div>
      </div>
    </section>
  );
}
