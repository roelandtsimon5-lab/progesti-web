import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureMock } from "@/components/industry/FeatureMock";
import { RhProductVisual } from "@/components/features/RhProductVisual";
import type { UseCaseTab } from "@/components/features/FeatureUseCaseTabs";
import type { MockKind } from "@/lib/industry/types";
type Benefit = { title: string; text: string };
type WorkflowStep = { step: string; text: string };

type Props = {
  moduleTitle: string;
  heroImage: string;
  showcaseImage: string;
  showcaseImageAlt: string;
  benefits: readonly Benefit[];
  workflow: readonly WorkflowStep[];
  useCase?: UseCaseTab;
  showcaseMock?: MockKind;
  primaryMock?: MockKind;
};

export function ModuleProductSection({
  moduleTitle,
  heroImage,
  showcaseImage,
  showcaseImageAlt,
  benefits,
  workflow,
  useCase,
  showcaseMock,
  primaryMock,
}: Props) {
  const showSecondShot = showcaseMock ? true : showcaseImage !== heroImage;
  const hasVisual = showSecondShot || !!useCase || !!primaryMock;

  return (
    <section id="produit" className="section scroll-mt-36 bg-white">
      <div className="container">
        <div
          className={`grid items-start gap-10 ${hasVisual ? "lg:grid-cols-2 lg:gap-14" : "max-w-3xl"}`}
        >
          <Reveal>
            <p className="eyebrow">Ce module fait quoi ?</p>
            <h2 className="mt-3 font-sans text-2xl font-extrabold tracking-tight text-brand-navy md:text-3xl">
              {moduleTitle} pensé pour le quotidien des équipes propreté
            </h2>
            <ul className="mt-8 space-y-5">
              {benefits.map((b, i) => (
                <li key={b.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] bg-lime-cta/20 font-sans text-xs font-extrabold text-brand-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-sans font-extrabold text-brand-navy">{b.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {showcaseMock || primaryMock ? (
            <Reveal delayMs={60}>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-[2px] bg-[radial-gradient(circle_at_40%_30%,rgba(168,227,0,0.14)_0%,transparent_60%)]"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[2px] border border-line shadow-[0_24px_64px_rgba(1,41,57,0.12)]">
                  {primaryMock ? (
                    <FeatureMock kind={primaryMock} label={moduleTitle} />
                  ) : showcaseMock === "rh-payroll" ? (
                    <RhProductVisual label={moduleTitle} variant="payroll" />
                  ) : showcaseMock ? (
                    <FeatureMock kind={showcaseMock} label={moduleTitle} />
                  ) : null}
                  {showcaseMock && primaryMock ? (
                    <div className="absolute -bottom-4 -left-3 z-10 w-[42%] max-w-[200px] rotate-[-2deg] overflow-hidden rounded-[2px] border border-line bg-white shadow-[0_20px_50px_rgba(1,41,57,0.15)] md:-bottom-5 md:-left-5">
                      {showcaseMock === "rh-payroll" ? (
                        <RhProductVisual label={moduleTitle} variant="payroll" />
                      ) : (
                        <FeatureMock kind={showcaseMock} label={moduleTitle} />
                      )}
                    </div>
                  ) : null}
                  <span className="absolute right-3 top-3 rounded-[2px] bg-lime-cta px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-brand-navy shadow-md">
                    Interface métier
                  </span>
                </div>
                <p className="mt-3 text-center text-xs font-medium text-muted sm:text-left">
                  Module {moduleTitle} · équipes, absences & export paie
                </p>
              </div>
            </Reveal>
          ) : showSecondShot ? (
            <Reveal delayMs={60}>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-[2px] bg-[radial-gradient(circle_at_40%_30%,rgba(168,227,0,0.14)_0%,transparent_60%)]"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[2px] border border-line shadow-[0_24px_64px_rgba(1,41,57,0.12)]">
                  <Image
                    src={showcaseImage}
                    alt={showcaseImageAlt}
                    width={960}
                    height={600}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute -bottom-4 -left-3 z-10 w-[38%] max-w-[200px] rotate-[-2deg] overflow-hidden rounded-[2px] border border-line bg-white shadow-[0_20px_50px_rgba(1,41,57,0.15)] md:-bottom-5 md:-left-5">
                    <Image
                      src={heroImage}
                      alt=""
                      width={400}
                      height={250}
                      className="h-auto w-full"
                      sizes="200px"
                      aria-hidden
                    />
                  </div>
                  <span className="absolute right-3 top-3 rounded-[2px] bg-lime-cta px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-brand-navy shadow-md">
                    Vue complémentaire
                  </span>
                </div>
                <p className="mt-3 text-center text-xs font-medium text-muted sm:text-left">
                  Capture réelle PROGESTI · {moduleTitle}
                </p>
              </div>
            </Reveal>
          ) : useCase ? (
            <Reveal delayMs={60}>
              <div className="overflow-hidden rounded-[2px] border border-line bg-paper p-4 shadow-[0_16px_48px_rgba(1,41,57,0.08)]">
                <FeatureMock
                  kind={useCase.mock}
                  label={useCase.label}
                  context={useCase.context}
                />
              </div>
            </Reveal>
          ) : null}
        </div>

        <Reveal delayMs={80}>
          <div className="mt-14 rounded-[2px] border border-line bg-paper p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
              En 4 étapes
            </p>
            <ol className="relative mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-line lg:block"
                aria-hidden
              />
              {workflow.map((w, i) => (
                <li key={w.step} className="relative rounded-[2px] bg-white p-4">
                  <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-[2px] bg-lime-cta/25 font-sans text-sm font-extrabold text-brand-navy">
                    {w.step}
                  </span>
                  <p className="relative z-10 mt-2 text-sm leading-snug text-slate">{w.text}</p>
                  {i < workflow.length - 1 ? (
                    <span className="absolute -right-2 top-8 hidden text-muted lg:inline" aria-hidden>
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
