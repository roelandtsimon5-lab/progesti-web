import Image from "next/image";
import Link from "next/link";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { cta, ctaLabels } from "@/lib/cta";
import { site } from "@/lib/site";

type Bullet = { title: string; text: string };

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  h2: string;
  body: string;
  bullets: readonly string[];
  cards: readonly Bullet[];
  image: string;
  imageAlt: string;
  links: readonly { href: string; label: string }[];
  trialEvent: string;
  demoEvent: string;
};

export function IndustryPillarPage({
  eyebrow,
  title,
  lead,
  h2,
  body,
  bullets,
  cards,
  image,
  imageAlt,
  links,
  trialEvent,
  demoEvent,
}: Props) {
  return (
    <>
      <IndustryPageHero
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: title },
        ]}
        trialEvent={trialEvent}
        demoEvent={demoEvent}
      />

      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">{h2}</h2>
            <p className="mt-4 text-slate">{body}</p>
            <ul className="mt-6 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-slate md:text-base">
                  <span className="font-bold text-lime-cta" aria-hidden>
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate">
              {links.map((l, i) => (
                <span key={l.href}>
                  {i > 0 ? " · " : "Voir aussi : "}
                  <Link href={l.href} className="font-semibold text-blue-royal hover:underline">
                    {l.label}
                  </Link>
                </span>
              ))}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={cta.trial} variant="trial" event="trial_start" eventPayload={{ cta: trialEvent }}>
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: demoEvent }}>
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="overflow-hidden rounded-[3px] border border-blue-mist/60 shadow-[0_20px_56px_rgba(11,61,110,0.12)]">
              <Image
                src={image}
                alt={imageAlt}
                width={800}
                height={500}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14 pb-28 lg:pb-16">
        <div className="container">
          <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep">
            Inclus dans PROGESTI
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} delayMs={i * 50}>
                <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                  <h3 className="font-display font-extrabold text-blue-deep">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{c.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalPush />
      <MobileCtaBar />
    </>
  );
}
