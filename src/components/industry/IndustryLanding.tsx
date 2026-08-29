import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ClientLogoStrip } from "@/components/conversion/ClientLogoStrip";
import { FinalPush } from "@/components/conversion/FinalPush";
import { HeroSocialProof, TestimonialsSection } from "@/components/conversion/TestimonialsSection";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { cta, ctaLabels } from "@/lib/cta";
import { homeCreative } from "@/lib/creative-assets";
import { defaultIndustryConfig, type IndustryPageConfig } from "@/lib/industry";
import { modules, site, solutions } from "@/lib/site";
import { Breadcrumb, solutionBreadcrumb } from "@/components/navigation/Breadcrumb";
import { IndustryProductExplorer } from "./IndustryProductExplorer";
import { IndustryFaq } from "./IndustryFaq";
import { IndustryFeatureGrid } from "./IndustryFeatureGrid";
import { IndustrySectionNav } from "./IndustrySectionNav";
import { IndustryMetierStrip } from "./IndustryMetierStrip";
import { IndustryVsSpreadsheet } from "./IndustryVsSpreadsheet";
import { IndustryHelpRail } from "./IndustryHelpRail";

function HandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-lime-cta ${className}`} viewBox="0 0 180 12" fill="none" aria-hidden>
      <path
        d="M2 8C28 2 52 10 78 5C104 1 132 9 158 4C166 3 174 5 178 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

type Props = {
  config?: IndustryPageConfig;
};

export function IndustryLanding({ config = defaultIndustryConfig }: Props) {
  const { hero, empathy, pillars, showcase, proof, grid, faq } = config;
  const ctaSlug = config.slug === "default" ? "industry" : `solution_${config.slug}`;
  const solutionMeta = solutions.find((s) => s.slug === config.slug);
  const breadcrumbs =
    config.breadcrumbs ??
    (config.slug !== "default" && solutionMeta
      ? solutionBreadcrumb(solutionMeta.title, config.slug)
      : null);

  return (
    <>
      <section className="industry-hero-bg relative overflow-hidden">
        <div className="container relative grid items-center gap-8 pb-9 pt-7 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-10 lg:pb-11 lg:pt-6">
          <div className="industry-hero-rise relative z-10">
            {breadcrumbs ? <Breadcrumb items={breadcrumbs} dark /> : null}
            {!solutionMeta ? (
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">
                Logiciel propreté · France · prix public
              </p>
            ) : null}
            {solutionMeta ? (
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55">
                Solution · {solutionMeta.navHint}
              </p>
            ) : null}
            <h1 className="font-sans text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-white md:text-[2.25rem] lg:text-[2.4rem]">
              <span className="block text-balance">{hero.h1Lead}</span>
              <span className="mt-2 block max-w-[22ch] text-[1.05rem] font-semibold leading-snug tracking-normal text-white/75 md:text-[1.2rem] lg:text-[1.3rem]">
                {hero.h1}
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 md:text-[1.05rem]">
              {hero.sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="trial"
                className="!rounded-[2px] !px-8 !py-3.5 !text-[1.05rem] !font-bold sm:w-auto"
                event="trial_start"
                eventPayload={{ cta: `${ctaSlug}_hero_trial` }}
              >
                Essai {site.trialDays} jours gratuit
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                size="lg"
                variant="outline-white"
                className="!rounded-[2px] !border-white/40 !px-8 !py-3.5 !text-[1.05rem] !font-bold sm:w-auto"
                eventPayload={{ cta: `${ctaSlug}_hero_demo` }}
              >
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-white/55">
              Sans carte bancaire · 149 € HT/mois tout inclus · jusqu&apos;à 5 utilisateurs
            </p>
            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Points de confiance"
            >
              {[
                `${modules.length} modules inclus`,
                `Essai ${site.trialDays} j · sans CB`,
                "Prix public · pas de devis",
                `Support FR · ${site.company.city}`,
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
          </div>

          <div className="industry-hero-rise industry-hero-rise-delay relative">
            <Link
              href={cta.demo}
              className="group relative block overflow-hidden rounded-[2px] shadow-[0_32px_90px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8E300]"
              aria-label="Voir une démo PROGESTI"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={hero.mediaPhoto ?? "/screen-telegestion.webp"}
                  alt={hero.mediaPhotoAlt ?? "Équipe d’entreprise de nettoyage"}
                  fill
                  priority
                  className="object-cover object-[center_22%] transition duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 680px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/45 to-transparent" />

                <span className="industry-play absolute left-1/2 top-[38%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 md:top-[40%]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[2px] bg-lime-cta text-brand-navy shadow-[0_14px_44px_rgba(0,0,0,0.45)] transition group-hover:scale-105 md:h-16 md:w-16">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-7 w-7 fill-current" aria-hidden>
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  </span>
                  <span className="rounded-[2px] bg-brand-navy/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white md:text-xs">
                    Voir l&apos;application
                  </span>
                </span>

                <div className="absolute inset-x-5 bottom-4 sm:inset-x-7 sm:bottom-5">
                  <p className="max-w-lg font-sans text-[1.5rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-[1.9rem] md:text-[2.25rem]">
                    <span className="text-lime-cta">«</span> {hero.claimBefore}{" "}
                    <span className="text-lime-cta">{hero.claimHighlight}</span>{" "}
                    <span className="text-lime-cta">»</span>
                  </p>
                  <p className="mt-1 text-sm text-white/85">{hero.claimSub}</p>
                </div>
              </div>

              <div className="relative h-[4.5rem] overflow-hidden border-t border-white/10 bg-brand-navy/95 sm:h-[5.25rem]">
                <Image
                  src={homeCreative.showcase.primary.src}
                  alt=""
                  fill
                  className="object-cover object-[center_12%] opacity-90"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/50 to-transparent" />
                <p className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-xs font-bold text-white sm:left-5 sm:text-sm">
                  {hero.productStripLabel ?? homeCreative.productStrip.label}
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="container flex flex-col gap-3.5 py-3.5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <p className="text-sm font-semibold text-white md:text-[0.95rem]">
              <span className="text-lime-cta">PROGESTI</span>
              <span className="text-white/35"> — </span>
              {hero.trustLeft}
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-white/70">
              {hero.trust.map((item) => (
                <li key={`${item.label}-${item.value}`} className="font-bold text-lime-cta">
                  {item.value ? `${item.label} ${item.value}` : item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="industry-hero-wave -mt-px bg-[var(--warm-light)]" aria-hidden />

      <IndustryMetierStrip />
      <IndustrySectionNav />

      <section className="section relative bg-white industry-anchor" id="produit">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Explorer produit</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[3.1rem] md:leading-[1.05]">
                {empathy.h2}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate md:text-lg md:leading-relaxed">
                {empathy.body}
              </p>
            </div>
          </Reveal>
          <div className="mt-12 md:mt-16">
            <IndustryProductExplorer pillars={pillars} mockContext={config.slug} />
          </div>
          <Reveal>
            <div className="mt-12 flex flex-col items-center gap-3 text-center md:mt-14">
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="trial"
                className="!rounded-[2px] !px-8"
                event="trial_start"
                eventPayload={{ cta: `${ctaSlug}_explorer_trial` }}
              >
                Essai {site.trialDays} jours gratuit
              </ButtonLink>
              <p className="text-sm text-slate">Sans carte bancaire · 149 € HT/mois tout inclus</p>
            </div>
          </Reveal>
        </div>
      </section>

      <IndustryVsSpreadsheet />

      <section className="overflow-hidden bg-white py-14 md:py-20 industry-anchor" id="showcase">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-extrabold md:text-3xl">
                {showcase.title}
              </h2>
              <p className="mt-3 text-slate">{showcase.sub}</p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="relative mx-auto mt-12 max-w-5xl">
              <div className="absolute -inset-6 rounded-[2px] bg-[radial-gradient(circle_at_30%_40%,rgba(184,240,0,0.08)_0%,transparent_55%),radial-gradient(circle_at_80%_70%,rgba(15,36,56,0.04)_0%,transparent_50%)] opacity-90" />
              <div className="relative overflow-hidden rounded-[2px] border border-line shadow-[0_28px_80px_rgba(1,41,57,0.08)]">
                <Image
                  src={showcase.image}
                  alt={showcase.imageAlt}
                  width={1682}
                  height={826}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
                {showcase.stackImage ? (
                  <div className="absolute -bottom-4 -right-3 z-10 w-[42%] max-w-[280px] rotate-[2deg] overflow-hidden rounded-[2px] border border-line bg-white shadow-[0_20px_50px_rgba(1,41,57,0.15)] md:-right-6 md:-bottom-6">
                    <Image
                      src={showcase.stackImage}
                      alt={showcase.stackImageAlt ?? "PROGESTI"}
                      width={640}
                      height={400}
                      className="h-auto w-full"
                      sizes="280px"
                    />
                  </div>
                ) : null}
              </div>
              {showcase.badgeLeft ? (
                <div className="absolute -bottom-3 left-3 z-10 rotate-[-2deg] transition-transform duration-300 hover:rotate-0 md:-bottom-4 md:left-8">
                  <div className="rounded-[2px] border border-line bg-white px-3 py-2 shadow-[0_14px_36px_rgba(15,36,56,0.08)] md:px-4 md:py-2.5">
                    <p className="text-xs font-bold text-ink md:text-sm">{showcase.badgeLeft.title}</p>
                    <p className="text-[11px] text-slate">{showcase.badgeLeft.sub}</p>
                  </div>
                </div>
              ) : null}
              {showcase.badgeRight ? (
                <div className="absolute bottom-8 right-4 z-10 rounded-[2px] bg-lime-cta px-3 py-1.5 text-xs font-extrabold text-ink shadow-md md:bottom-12 md:right-6 md:text-sm">
                  {showcase.badgeRight}
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-10">
        <div className="container">
          <p className="eyebrow text-center">Univers métier</p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className={`font-display text-base font-bold underline-offset-4 hover:text-green-deep hover:underline ${
                    s.slug === config.slug ? "text-green-deep underline" : "text-ink/80"
                  }`}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TestimonialsSection limit={4} />
      <ClientLogoStrip />

      <section className="section bg-white industry-anchor" id="preuve">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">
              {proof.h2}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center font-display text-xl italic leading-snug text-ink/90 md:text-2xl">
              « {proof.quote} »
            </p>
            <div className="mx-auto mt-2 flex justify-center">
              <HandMark className="h-3 w-44" />
            </div>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-5">
            {proof.items.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 70}>
                <div className="industry-card-lift h-full rounded-[2px] border border-line bg-paper p-6 text-center md:text-left">
                  <p className="font-display text-xl font-extrabold text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate md:text-[15px]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-8">
        <div className="container">
          <p className="eyebrow text-center">Intégrations & écosystème</p>
          <ul className="mx-auto mt-4 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {[
              "Android",
              "iOS",
              "Export compta",
              "Google Agenda",
              "Webhook leads",
              "Télégestion",
            ].map((item) => (
              <li
                key={item}
                className="rounded-[2px] border border-line bg-white px-3 py-1.5 text-xs font-bold text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate">
            PROGESTI s&apos;interface avec vos outils comptables et métier —{" "}
            <Link href="/integrations" className="link-accent font-bold">
              voir les intégrations
            </Link>
            .
          </p>
        </div>
      </section>

      <IndustryFeatureGrid grid={grid} />

      <section className="border-y border-line bg-paper py-16 md:py-20">
        <div className="container relative max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Support humain</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Vous avez le terrain.{" "}
              <span className="relative inline-block">
                On a votre dos.
                <HandMark className="absolute -bottom-1 left-0 h-2.5 w-full" />
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate">
              Support FR inclus — joignable au{" "}
              <a href={`tel:${site.phoneTel}`} className="font-bold text-ink underline-offset-4 hover:underline">
                {site.phone}
              </a>
              .
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="trial"
                className="!px-8"
                event="trial_start"
                eventPayload={{ cta: `${ctaSlug}_support_trial` }}
              >
                Essai {site.trialDays} jours gratuit
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                size="lg"
                variant="secondary"
                className="!rounded-[2px]"
                eventPayload={{ cta: `${ctaSlug}_support_demo` }}
              >
                Parler à l&apos;équipe
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white industry-anchor" id="tarifs">
        <div className="container max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Tarif unique · tout inclus</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              <span>149 €</span>
              <span className="ml-2 text-2xl font-bold text-slate md:text-3xl">HT / mois</span>
            </h2>
            <p className="mt-3 text-lg text-slate">5 utilisateurs · Tous les modules · Pas de surprise</p>
            <p className="mt-2 text-sm text-slate">
              Économie annuelle :{" "}
              <Link href="/tarifs" className="link-accent font-bold">
                1 490 € HT/an
              </Link>{" "}
              (2 mois offerts sur facturation annuelle)
            </p>
            <ul className="mx-auto mt-8 max-w-md space-y-2 text-left text-sm text-slate">
              {[
                "Planning, pointage, devis, facturation, impayés, RH",
                "Clients & sites illimités",
                `Essai ${site.trialDays} jours sans carte bancaire`,
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="font-bold text-lime-cta" aria-hidden>
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="trial"
                className="!px-8"
                event="trial_start"
                eventPayload={{ cta: `${ctaSlug}_pricing_trial` }}
              >
                Essai {site.trialDays} jours gratuit
              </ButtonLink>
              <ButtonLink
                href="/tarifs"
                size="lg"
                variant="secondary"
                className="!rounded-[3px]"
                eventPayload={{ cta: `${ctaSlug}_pricing_detail` }}
              >
                Détail des tarifs
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white pb-28 industry-anchor lg:pb-16" id="faq" data-cta-sticky-safe>
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold">FAQ</h2>
          <p className="mt-3 text-slate">
            Une autre question ?{" "}
            <Link href="/contact" className="font-semibold text-green-deep hover:underline">
              Contactez-nous
            </Link>
            {" · "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-green-deep hover:underline">
              {site.phone}
            </a>
          </p>
          <div className="mt-8">
            <IndustryFaq items={faq} />
          </div>
        </div>
      </section>

      <FinalPush />

      <IndustryHelpRail />
      <MobileCtaBar />
    </>
  );
}
