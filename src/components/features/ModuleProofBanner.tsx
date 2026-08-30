import Link from "next/link";
import { ClientLogo } from "@/components/conversion/ClientLogo";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import { excerptSentences } from "@/lib/text-utils";

type Props = {
  testimonial: Testimonial;
  moduleTitle: string;
};

export function ModuleProofBanner({ testimonial, moduleTitle }: Props) {
  const quote = excerptSentences(testimonial.quote, 2);

  return (
    <section id="preuve" className="scroll-mt-36 border-y border-line bg-brand-navy py-10 md:py-12">
      <div className="container max-w-4xl">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-cta/90">
              Retour terrain · {moduleTitle}
            </p>
            <blockquote className="mt-4 font-sans text-xl font-extrabold leading-snug text-white md:text-2xl">
              « {quote} »
            </blockquote>
            <footer className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ClientLogo
                src={testimonial.logo}
                alt={testimonial.logoAlt}
                company={testimonial.company}
                onDark
                className="!justify-center"
                iconClassName="!border-white/20"
              />
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-white">{testimonial.author}</p>
                <p className="text-xs text-white/65">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
              {testimonial.result ? (
                <span className="rounded-[2px] bg-lime-cta px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">
                  {testimonial.result}
                </span>
              ) : null}
            </footer>
            <Link
              href="/temoignages"
              className="mt-6 inline-block text-sm font-bold text-white/75 underline-offset-4 hover:text-white hover:underline"
            >
              Voir tous les avis →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function getModuleTestimonial(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}
