import { Reveal } from "@/components/ui/Reveal";
import type { IndustryBodySection } from "@/lib/industry/types";

type Props = {
  sections: readonly IndustryBodySection[];
};

/** Copy longue indexable — H2/H3 différenciés par page. */
export function MarketingBodySections({ sections }: Props) {
  if (!sections.length) return null;

  return (
    <section className="industry-anchor bg-white py-14 md:py-16" id="metier-detail">
      <div className="container max-w-3xl">
        {sections.map((section, idx) => (
          <Reveal key={section.h2} delayMs={idx * 40}>
            <article className={idx === 0 ? "" : "mt-12 border-t border-line pt-12"}>
              {idx === 0 ? (
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#012939]/55">
                  Cas terrain
                </p>
              ) : null}
              <h2 className="font-display text-xl font-extrabold text-ink md:text-2xl">
                {section.h2}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-slate">{section.body}</p>
              {section.bullets?.length ? (
                <ul className="mt-5 space-y-2.5 rounded-[2px] border border-line bg-[#F7F9F8] px-4 py-4">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8E300]" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.h3?.length ? (
                <div className="mt-6 space-y-4">
                  {section.h3.map((block) => (
                    <div
                      key={block.title}
                      className="border-l-2 border-[#A8E300] pl-4"
                    >
                      <h3 className="text-base font-bold text-ink">{block.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{block.body}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
