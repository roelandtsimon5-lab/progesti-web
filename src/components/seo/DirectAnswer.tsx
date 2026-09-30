import { Reveal } from "@/components/ui/Reveal";

type Props = {
  /** Réponse directe (40-60 mots), affichée juste sous le H1 / hero. */
  children: string;
};

/** Bloc « réponse directe » (AEO) : court, autonome, extractible. */
export function DirectAnswer({ children }: Props) {
  return (
    <section className="bg-white pt-10" aria-label="Réponse directe">
      <div className="container max-w-4xl">
        <Reveal>
          <p
            data-direct-answer
            className="rounded-[3px] border-l-4 border-lime-cta bg-blue-sky/20 p-5 text-base leading-relaxed text-ink md:text-lg"
          >
            {children}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
