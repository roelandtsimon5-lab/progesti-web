"use client";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: readonly Item[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-[3px] border border-blue-mist/80 bg-white open:border-blue-royal/30 open:shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-4 font-display text-[0.95rem] font-bold text-blue-deep marker:content-none">
            <span className="flex items-start justify-between gap-4">
              <span>{item.q}</span>
              <span className="mt-0.5 text-blue-royal transition group-open:rotate-45" aria-hidden>
                +
              </span>
            </span>
          </summary>
          <p className="border-t border-blue-mist/70 px-5 py-4 text-sm leading-relaxed text-slate">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
