"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

/** FAQ : accordion une seule ouverture, panels masqués du DOM quand fermés (a11y). */
export function IndustryFaq({ items }: { items: readonly Item[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-blue-mist/80 border-y border-blue-mist/80">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-faq-${i}`;
        const buttonId = `${baseId}-faq-btn-${i}`;

        return (
          <div key={item.q} className="py-1">
            <button
              id={buttonId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full cursor-pointer items-start justify-between gap-4 rounded-[2px] py-4 text-left font-display text-[0.98rem] font-bold text-blue-deep outline-none focus-visible:ring-2 focus-visible:ring-blue-royal focus-visible:ring-offset-2 md:text-lg"
            >
              <span>{item.q}</span>
              <span
                className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-sky/80 text-green-deep transition-transform duration-200 motion-reduce:transition-none ${
                  open ? "rotate-180 bg-lime-cta/35" : ""
                }`}
                aria-hidden
              >
                ▾
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={open ? "pb-1" : undefined}
            >
              <p className="pb-5 pr-8 text-sm leading-relaxed text-slate md:text-[15px]">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
