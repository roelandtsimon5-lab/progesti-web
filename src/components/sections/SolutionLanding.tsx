import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow, Lead, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { cta } from "@/lib/cta";
import { modules, site } from "@/lib/site";

export type SolutionContent = {
  slug: string;
  title: string;
  headline: string;
  lead: string;
  pains: { title: string; text: string }[];
  responses: { moduleSlug: string; text: string }[];
  day: { time: string; text: string }[];
  faq: { q: string; a: string }[];
  seoDescription: string;
};

export function SolutionLanding({ content }: { content: SolutionContent }) {
  const relatedModules = content.responses
    .map((r) => modules.find((m) => m.slug === r.moduleSlug))
    .filter(Boolean);

  return (
    <>
      <section className="surface-atmosphere border-b border-line">
        <div className="container section !pb-16 !pt-14">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-petrol">
            {site.name} · Solutions
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            {content.headline}
          </h1>
          <Lead className="mt-5">{content.lead}</Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              event="trial_start"
              eventPayload={{ cta: `v2_solution_${content.slug}_hero` }}
            >
              Essai gratuit 2 mois
            </ButtonLink>
            <ButtonLink
              href={cta.demo}
              size="lg"
              variant="secondary"
              eventPayload={{ cta: `v2_solution_${content.slug}_demo` }}
            >
              Voir la démo
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <div className="container">
          <Reveal>
            <Eyebrow>Douleurs métier</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Ce qui freine au quotidien</h2>
          </Reveal>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {content.pains.map((p, i) => (
              <Reveal key={p.title} delayMs={i * 50}>
                <li className="border-t border-line pt-5">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section atmosphere>
        <div className="container">
          <Reveal>
            <Eyebrow>Comment PROGESTI répond</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Modules liés à ce métier</h2>
          </Reveal>
          <ul className="mt-10 space-y-6">
            {content.responses.map((r) => {
              const mod = modules.find((m) => m.slug === r.moduleSlug);
              return (
                <li key={r.moduleSlug} className="border-t border-line pt-5 md:flex md:gap-10">
                  <Link
                    href={`/fonctionnalites/${r.moduleSlug}`}
                    className="shrink-0 font-display text-lg font-bold text-emerald-dark hover:underline"
                  >
                    {mod?.title ?? r.moduleSlug}
                  </Link>
                  <p className="mt-2 text-muted md:mt-0">{r.text}</p>
                </li>
              );
            })}
          </ul>
          {relatedModules.length ? (
            <p className="mt-8 text-sm text-muted">
              Voir aussi :{" "}
              {relatedModules.map((m, i) =>
                m ? (
                  <span key={m.slug}>
                    {i > 0 ? " · " : null}
                    <Link href={`/fonctionnalites/${m.slug}`} className="font-semibold text-ink hover:underline">
                      {m.title}
                    </Link>
                  </span>
                ) : null,
              )}
            </p>
          ) : null}
        </div>
      </Section>

      <Section>
        <div className="container max-w-3xl">
          <Reveal>
            <Eyebrow>Journée type</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Un fil de journée avec PROGESTI</h2>
          </Reveal>
          <ol className="mt-10 space-y-6">
            {content.day.map((d) => (
              <li key={d.time} className="grid gap-2 border-l-2 border-emerald pl-5 sm:grid-cols-[6rem_1fr]">
                <span className="font-display text-sm font-bold text-petrol">{d.time}</span>
                <p className="text-anthracite">{d.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section atmosphere>
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold">FAQ — {content.title}</h2>
          <div className="mt-8">
            <FaqAccordion items={content.faq} />
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Testez sur vos propres sites
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/75">
            Essai 2 mois sans CB · tous modules inclus · dès 29,99 € HT/mois
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              event="trial_start"
              eventPayload={{ cta: `v2_solution_${content.slug}_final` }}
            >
              Commencer l’essai
            </ButtonLink>
            <ButtonLink href="/tarifs" size="lg" variant="white" eventPayload={{ cta: `v2_solution_${content.slug}_tarifs` }}>
              Voir les tarifs
            </ButtonLink>
          </div>
        </div>
      </Section>

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}

export function solutionMetadata(content: SolutionContent): Metadata {
  return {
    title: `${content.title} — logiciel nettoyage`,
    description: content.seoDescription,
    openGraph: {
      title: `${content.title} | ${site.name}`,
      description: content.seoDescription,
    },
  };
}
