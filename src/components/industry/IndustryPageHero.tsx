import Link from "next/link";
import { Breadcrumb, type BreadcrumbItem } from "@/components/navigation/Breadcrumb";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, ctaLabels } from "@/lib/cta";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  breadcrumbs: readonly BreadcrumbItem[];
  trialEvent?: string;
  demoEvent?: string;
  showCtas?: boolean;
};

export function IndustryPageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  trialEvent = "hub_trial",
  demoEvent = "hub_demo",
  showCtas = true,
}: Props) {
  return (
    <section className="industry-hero-bg relative overflow-hidden">
      <div className="container relative max-w-3xl py-14 md:py-16">
        <Breadcrumb items={breadcrumbs} dark />
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[2.2rem] font-extrabold leading-[1.08] text-white md:text-[3rem]">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-white/80">{lead}</p>
        {showCtas ? (
          <>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="trial"
                className="!rounded-[2px]"
                event="trial_start"
                eventPayload={{ cta: trialEvent }}
              >
                {ctaLabels.trialShort}
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                size="lg"
                variant="outline-white"
                className="!rounded-[2px]"
                eventPayload={{ cta: demoEvent }}
              >
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-white/55">
              149 € HT/mois · sans CB ·{" "}
              <Link href="/tarifs" className="font-semibold text-white/80 underline-offset-4 hover:underline">
                tarif public
              </Link>
            </p>
          </>
        ) : null}
      </div>
      <div className="industry-hero-wave" aria-hidden />
    </section>
  );
}
