import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { useCases, type UseCase } from "@/lib/use-cases";

type Props = {
  useCase: UseCase;
  moduleTitle: string;
};

export function ModuleProofBanner({ useCase, moduleTitle }: Props) {
  return (
    <section id="preuve" className="scroll-mt-36 border-y border-line bg-brand-navy py-10 md:py-12">
      <div className="container max-w-4xl">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-cta/90">
              Cas d&apos;usage · {moduleTitle}
            </p>
            <h3 className="mt-4 font-sans text-xl font-extrabold leading-snug text-white md:text-2xl">
              {useCase.title}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              {useCase.solution}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-[2px] bg-lime-cta px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-navy">
                {useCase.benefit}
              </span>
              <span className="text-sm text-white/65">
                {useCase.segment}
              </span>
            </div>
            <Link
              href="/cas-usage"
              className="mt-6 inline-block text-sm font-bold text-white/75 underline-offset-4 hover:text-white hover:underline"
            >
              Voir tous les cas d&apos;usage →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function getModuleUseCase(id: string): UseCase | undefined {
  return useCases.find((u) => u.id === id);
}

export function getModuleTestimonial(id: string): UseCase | undefined {
  return getModuleUseCase(id);
}
