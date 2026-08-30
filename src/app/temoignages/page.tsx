import type { Metadata } from "next";
import Link from "next/link";
import { TestimonialCard } from "@/components/conversion/TestimonialsSection";
import { FinalPush } from "@/components/conversion/FinalPush";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { cta, ctaLabels } from "@/lib/cta";
import { ReviewsLd } from "@/components/seo/ReviewsLd";
import { socialProofStats, testimonials } from "@/lib/testimonials";

export const metadata: Metadata = pageMeta({
  title: "Avis clients — entreprises de nettoyage",
  description:
    "Retours d'entreprises de propreté sur PROGESTI : planning, pointage terrain, facturation. Support 4,8/5 · essai 7 jours.",
  path: "/temoignages",
});

export default function TemoignagesPage() {
  return (
    <>
      <ReviewsLd />
      <IndustryPageHero
        eyebrow="Avis clients"
        title="La preuve par le terrain"
        lead={`Des ${socialProofStats.headline.toLowerCase()} ${socialProofStats.headlineSub} structurent planning, pointage et facturation avec PROGESTI.`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Témoignages" },
        ]}
        trialEvent="temoignages_trial"
        demoEvent="temoignages_demo"
      />
      <section className="border-b border-line bg-white py-8">
        <div className="container">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <li>
              <p className="font-display text-3xl font-extrabold text-brand-navy">
                {socialProofStats.headline}
              </p>
              <p className="text-sm text-slate">{socialProofStats.headlineSub}</p>
            </li>
            <li>
              <p className="font-display text-3xl font-extrabold text-brand-navy">
                {socialProofStats.rating}
                <span className="text-xl text-lime-cta">/5</span>
              </p>
              <p className="text-sm text-slate">{socialProofStats.ratingLabel}</p>
            </li>
            <li>
              <p className="font-display text-3xl font-extrabold text-brand-navy">
                {socialProofStats.modules}
              </p>
              <p className="text-sm text-slate">{socialProofStats.modulesLabel}</p>
            </li>
          </ul>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-line pt-8">
            {testimonials.map((t) => (
              <li key={t.id} className="flex items-center gap-2 rounded-[2px] border border-line bg-paper px-3 py-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.logo} alt="" width={32} height={32} className="h-8 w-8 rounded-[2px]" aria-hidden />
                <span className="font-display text-xs font-extrabold text-brand-navy/75">{t.company}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section bg-warm-light pb-28 lg:pb-16">
        <div className="container">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.id} delayMs={i * 40} className="h-full">
                <li className="h-full list-none">
                  <TestimonialCard item={item} />
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14 max-w-xl border-t border-blue-mist pt-8">
            <p className="text-anthracite">
              Vous utilisez PROGESTI et souhaitez partager votre retour ?
            </p>
            <a
              className="mt-3 inline-block font-bold text-blue-royal hover:underline"
              href={`mailto:${site.email}?subject=Témoignage%20PROGESTI`}
            >
              Envoyer un témoignage →
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trial}
                variant="trial"
                event="trial_start"
                eventPayload={{ cta: "temoignages_trial" }}
              >
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "temoignages_demo" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
              <Link href="/faq" className="inline-flex items-center text-sm font-bold text-blue-royal hover:underline">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FinalPush title="Rejoignez les entreprises qui nous font confiance" />
      <MobileCtaBar />
    </>
  );
}
