"use client";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-xl border border-line bg-white open:border-emerald/40 open:shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-4 font-display text-[0.95rem] font-bold text-ink marker:content-none">
            <span className="flex items-start justify-between gap-4">
              <span>{item.q}</span>
              <span className="mt-0.5 text-emerald-dark transition group-open:rotate-45" aria-hidden>
                +
              </span>
            </span>
          </summary>
          <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
