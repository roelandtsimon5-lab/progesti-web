import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";

import { ClientLogo, ClientLogoMark } from "@/components/conversion/ClientLogo";

import {

  featuredTestimonials,

  socialProofStats,

  type Testimonial,

} from "@/lib/testimonials";



function Stars({ className = "" }: { className?: string }) {

  return (

    <span className={`inline-flex gap-0.5 text-lime-cta ${className}`} aria-label="5 sur 5">

      {"★★★★★".split("").map((star, i) => (

        <span key={i} aria-hidden>

          {star}

        </span>

      ))}

    </span>

  );

}



function TestimonialCard({ item }: { item: Testimonial }) {

  return (

    <article className="industry-card-lift flex h-full flex-col rounded-[2px] border border-line bg-white p-6 shadow-[0_1px_0_rgba(15,36,56,0.04)]">

      <div className="flex items-start justify-between gap-3">

        <ClientLogo src={item.logo} alt={item.logoAlt} company={item.company} className="min-w-0 flex-1" />

        {item.result ? (

          <span className="shrink-0 rounded-[2px] bg-[var(--ink)] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-lime-cta">

            {item.result}

          </span>

        ) : null}

      </div>

      <div className="mt-3">

        <Stars />

      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-anthracite md:text-[15px]">

        « {item.quote} »

      </blockquote>

      <footer className="mt-5 flex items-center gap-3 border-t border-line pt-4">

        <ClientLogoMark src={item.logo} alt={item.logoAlt} className="!h-9 !w-9" />

        <div className="min-w-0 flex-1">

          <p className="font-display text-sm font-extrabold text-ink">{item.author}</p>

          <p className="text-xs text-slate">

            {item.role} · {item.company}

          </p>

          <p className="text-xs text-muted">

            {item.city} · Client depuis {item.since}

          </p>

        </div>

      </footer>

      <Link href={item.segmentHref} className="link-accent mt-3 text-xs font-bold">

        {item.segment} →

      </Link>

    </article>

  );

}



type Props = {

  title?: string;

  lead?: string;

  limit?: number;

  showStats?: boolean;

  showAllLink?: boolean;

  className?: string;

};



export function TestimonialsSection({

  title = "Ils ont structuré leur activité avec PROGESTI",

  lead = "Entreprises de propreté en France — retours terrain sur planning, pointage et facturation.",

  limit = 4,

  showStats = true,

  showAllLink = true,

  className = "",

}: Props) {

  const items = featuredTestimonials(limit);



  return (

    <section className={`section bg-paper industry-anchor ${className}`.trim()} id="avis">

      <div className="container">

        <Reveal>

          <div className="mx-auto max-w-2xl text-center">

            <p className="eyebrow">Avis clients</p>

            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">{title}</h2>

            <p className="mt-4 text-slate">{lead}</p>

          </div>

        </Reveal>



        {showStats ? (

          <Reveal delayMs={40}>

            <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">

              <li>

                <p className="font-display text-2xl font-extrabold text-ink">{socialProofStats.headline}</p>

                <p className="text-xs font-semibold text-slate">{socialProofStats.headlineSub}</p>

              </li>

              <li>

                <p className="font-display text-2xl font-extrabold text-ink">

                  {socialProofStats.rating}

                  <span className="text-lg text-lime-cta">/5</span>

                </p>

                <p className="text-xs font-semibold text-slate">{socialProofStats.ratingLabel}</p>

              </li>

              <li>

                <p className="font-display text-2xl font-extrabold text-ink">{socialProofStats.modules}</p>

                <p className="text-xs font-semibold text-slate">{socialProofStats.modulesLabel}</p>

              </li>

            </ul>

          </Reveal>

        ) : null}



        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">

          {items.map((item, i) => (

            <Reveal key={item.id} delayMs={i * 60} className="h-full">

              <li className="h-full list-none">

                <TestimonialCard item={item} />

              </li>

            </Reveal>

          ))}

        </ul>



        {showAllLink ? (

          <p className="mt-10 text-center">

            <Link href="/temoignages" className="link-accent text-sm font-bold">

              Voir tous les avis clients →

            </Link>

          </p>

        ) : null}

      </div>

    </section>

  );

}



export function HeroSocialProof() {

  const faces = featuredTestimonials(3);



  return (

    <div className="mt-6 flex flex-wrap items-center gap-3">

      <div className="flex -space-x-2" aria-hidden>

        {faces.map((t) => (

          <span

            key={t.id}

            className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-[2px] border-2 border-white/25 bg-white/10"

          >

            <ClientLogoMark src={t.logo} alt={t.logoAlt} className="!h-full !w-full !border-0" />

          </span>

        ))}

      </div>

      <div className="text-sm text-white/85">

        <Stars className="text-sm" />

        <p className="mt-0.5 font-semibold">

          <span className="text-white">{socialProofStats.headline}</span> {socialProofStats.headlineSub}

        </p>

      </div>

    </div>

  );

}



export { TestimonialCard };


