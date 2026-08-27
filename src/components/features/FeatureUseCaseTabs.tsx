"use client";

import { useCallback, useId, useState } from "react";
import { FeatureMock } from "@/components/industry/FeatureMock";
import { ExpandableText } from "@/components/ui/ExpandableText";
import type { MockKind } from "@/lib/industry/types";

export type UseCaseTab = {
  id: string;
  label: string;
  title: string;
  body: string;
  mock: MockKind;
  context: string;
};

type Props = {
  useCases: readonly UseCaseTab[];
  moduleTitle?: string;
};

export function FeatureUseCaseTabs({ useCases, moduleTitle }: Props) {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const current = useCases[active]!;

  const selectTab = useCallback(
    (index: number) => {
      if (index === active) return;
      setVisible(false);
      window.setTimeout(() => {
        setActive(index);
        setVisible(true);
      }, 160);
    },
    [active],
  );

  return (
    <section id="cas-usage" className="section scroll-mt-36 border-t border-line bg-paper">
      <div className="container max-w-5xl">
        <p className="eyebrow">
          Cas d&apos;usage · {useCases.length} scénarios
        </p>
        <h2 className="mt-3 font-sans text-2xl font-extrabold tracking-tight text-brand-navy md:text-3xl">
          {moduleTitle ?? "Ce module"} en situation réelle
        </h2>

        <div
          className="mt-8 flex gap-1 overflow-x-auto border-b border-line [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Cas d'usage par métier"
        >
          {useCases.map((uc, i) => {
            const selected = i === active;
            return (
              <button
                key={uc.id}
                id={`${baseId}-tab-${uc.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${uc.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(i)}
                className={`shrink-0 border-b-2 px-4 py-3 text-sm font-bold transition ${
                  selected
                    ? "border-lime-cta text-brand-navy"
                    : "border-transparent text-slate hover:text-brand-navy"
                }`}
              >
                {uc.label}
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${current.id}`}
          className={`mt-8 grid items-center gap-8 transition-opacity duration-200 lg:grid-cols-2 lg:gap-10 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="order-2 lg:order-1">
            <h3 className="font-sans text-xl font-extrabold text-brand-navy md:text-2xl">{current.title}</h3>
            <ExpandableText
              key={current.id}
              text={current.body}
              className="text-[15px] leading-relaxed text-slate"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[2px] border border-line bg-white p-3 shadow-[0_16px_48px_rgba(1,41,57,0.08)]">
              <FeatureMock kind={current.mock} label={current.label} context={current.context} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
