import Image from "next/image";
import Link from "next/link";
import { FeatureMock } from "@/components/industry/FeatureMock";
import { RhProductVisual } from "@/components/features/RhProductVisual";
import { Breadcrumb, moduleBreadcrumb } from "@/components/navigation/Breadcrumb";
import type { MockKind } from "@/lib/industry/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroSocialProof } from "@/components/conversion/TestimonialsSection";
import { cta, ctaLabels } from "@/lib/cta";
import { pillarHubHref } from "@/lib/navigation";
import { modules, site } from "@/lib/site";

type Props = {
  title: string;
  slug: string;
  pillar: string;
  lead: string;
  image: string;
  imageAlt: string;
  showcaseImage?: string;
  showcaseAlt?: string;
  heroQuote: string;
  stats?: readonly [string, string][];
  heroMock?: MockKind;
  showcaseMock?: MockKind;
};

export function ModuleHero({
  title,
  slug,
  pillar,
  lead,
  image,
  imageAlt,
  showcaseImage,
  showcaseAlt,
  heroQuote,
  stats,
  heroMock,
  showcaseMock,
}: Props) {
  const showStack = showcaseMock
    ? true
    : showcaseImage && showcaseImage !== image;
  return (
    <section className="industry-hero-bg relative overflow-hidden">
      <div className="container relative grid items-center gap-8 pb-8 pt-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-12 lg:pb-10 lg:pt-10">
        <div className="industry-hero-rise relative z-10 max-lg:order-2">
          <Breadcrumb items={moduleBreadcrumb(title)} dark />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-lime-cta/90">
            <Link
              href={pillarHubHref(pillar)}
              className="underline-offset-4 hover:text-lime-cta hover:underline"
            >
              {pillar}
            </Link>
            {" · "}Module inclus
          </p>
          <h1 className="mt-3 font-sans text-[1.85rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[2.5rem] lg:text-[2.75rem]">
            {title}
            <span className="mt-1 block text-[0.62em] font-bold leading-snug text-white/72">
              pour entreprises de nettoyage
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/78 md:text-[1.05rem]">
            {lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={cta.trial}
              size="lg"
              variant="trial"
              className="!rounded-[2px] !px-8 !py-3.5 !text-base !font-bold"
              event="trial_start"
              eventPayload={{ cta: "module_hero_trial", module: slug }}
            >
              Essai {site.trialDays} jours gratuit
            </ButtonLink>
            <ButtonLink
              href={cta.demo}
              size="lg"
              variant="outline-white"
              className="!rounded-[2px] !border-white/40 !px-8 !py-3.5 !text-base !font-bold"
            >
              {ctaLabels.demoGate}
            </ButtonLink>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Points de confiance">
            {[
              `${modules.length} modules inclus`,
              `Essai ${site.trialDays} j · sans CB`,
              "149 € HT/mois public",
            ].map((item) => (
              <li
                key={item}
                className="rounded-[2px] border border-white/15 bg-white/8 px-2.5 py-1 text-[11px] font-bold text-white/90 sm:text-xs"
              >
                {item}
              </li>
            ))}
          </ul>
          <HeroSocialProof />
          <p className="mt-6 hidden lg:block">
            <a
              href="#produit"
              className="text-sm font-bold text-white/60 underline-offset-4 hover:text-lime-cta hover:underline"
            >
              Découvrir le module ↓
            </a>
          </p>
        </div>

        <div className="industry-hero-rise industry-hero-rise-delay relative max-lg:order-1 max-lg:-mx-4 max-lg:w-[calc(100%+2rem)]">
          <Link
            href={cta.demo}
            className="group relative block overflow-hidden rounded-[2px] shadow-[0_32px_90px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-cta max-lg:rounded-none"
            aria-label={`Voir ${title} en démo PROGESTI`}
          >
            <div className="relative aspect-[16/10] max-lg:aspect-[2/1]">
              {heroMock ? (
                <RhProductVisual label={title} variant="hero" />
              ) : (
                <>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 680px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/25 to-transparent" />
                </>
              )}

              {showStack ? (
                <div className="absolute bottom-[4.5rem] right-3 z-10 hidden w-[52%] max-w-[280px] rotate-[2deg] overflow-hidden rounded-[2px] border border-white/20 bg-white shadow-[0_28px_70px_rgba(0,0,0,0.5)] transition duration-500 group-hover:rotate-[1deg] group-hover:scale-[1.02] sm:block md:bottom-20 md:right-5">
                  {showcaseMock === "rh-payroll" ? (
                    <RhProductVisual label={title} variant="payroll" />
                  ) : showcaseMock ? (
                    <div className="max-h-[180px] overflow-hidden">
                      <FeatureMock kind={showcaseMock} label={title} />
                    </div>
                  ) : (
                    <Image
                      src={showcaseImage!}
                      alt={showcaseAlt ?? `${title} — autre vue PROGESTI`}
                      width={640}
                      height={400}
                      className="h-auto w-full"
                      sizes="280px"
                    />
                  )}
                </div>
              ) : null}

              <div className="absolute inset-x-5 bottom-5 z-10 sm:inset-x-7 sm:bottom-6">
                <p className="max-w-sm font-sans text-lg font-extrabold leading-tight text-white sm:text-xl">
                  <span className="text-lime-cta">«</span> {heroQuote}{" "}
                  <span className="text-lime-cta">»</span>
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {heroMock ? "Interface PROGESTI · " : "Vue réelle PROGESTI · "}
                  {title}
                </p>
              </div>
              <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-[2px] bg-lime-cta px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-brand-navy shadow-md sm:text-xs">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
                Démo
              </span>
            </div>
          </Link>
        </div>
      </div>

      {stats?.length ? (
        <div className="relative z-10 border-t border-white/10">
          <div className="container grid grid-cols-2 gap-x-8 gap-y-4 py-5 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label}>
                <p className="font-sans text-xl font-extrabold text-lime-cta md:text-2xl">{value}</p>
                <p className="mt-0.5 text-xs font-medium text-white/65 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="industry-hero-wave" aria-hidden />
    </section>
  );
}
