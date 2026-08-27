"use client";

import { useId, useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { FeatureMock } from "./FeatureMock";
import type { IndustryPillar } from "@/lib/industry/types";
import { defaultPillars } from "@/lib/industry/default";

function PillarIcon({ icon }: { icon: IndustryPillar["icon"] }) {
  const common = "h-5 w-5 text-lime-cta";
  switch (icon) {
    case "clipboard":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 4h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "margin":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M8 15v-3M12 15V8M16 15v-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "contracts":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M14 3v4h4M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "quality":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3 14.5 8.5 20.5 9.3 16 13.4 17.2 19.4 12 16.6 6.8 19.4 8 13.4 3.5 9.3 9.5 8.5 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function HandUnderline() {
  return (
    <svg
      className="pointer-events-none absolute -bottom-1 left-0 h-2 w-full text-lime-cta"
      viewBox="0 0 120 8"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M2 5 C30 1, 55 7, 80 3 S110 2, 118 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

type Props = {
  pillars?: readonly IndustryPillar[];
  mockContext?: string;
};

export function IndustryProductExplorer({ pillars = defaultPillars, mockContext }: Props) {
  const baseId = useId();
  const [pillarIndex, setPillarIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interacted = useRef(false);
  const canHover = useRef(false);

  const pillar = pillars[pillarIndex]!;
  const feature = pillar.features[featureIndex]!;

  useEffect(() => {
    canHover.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  const fadeTo = useCallback((nextPillar: number, nextFeature: number) => {
    interacted.current = true;
    if (timer.current) clearTimeout(timer.current);
    setVisible(false);
    timer.current = setTimeout(() => {
      setPillarIndex(nextPillar);
      setFeatureIndex(nextFeature);
      setVisible(true);
    }, 180);
  }, []);

  const selectPillar = (index: number) => {
    if (index === pillarIndex) return;
    fadeTo(index, 0);
  };

  const fadeFeature = (nextFeature: number) => {
    if (nextFeature === featureIndex) return;
    fadeTo(pillarIndex, nextFeature);
  };

  const previewFeature = (nextFeature: number) => {
    if (nextFeature === featureIndex) return;
    interacted.current = true;
    setFeatureIndex(nextFeature);
    setVisible(true);
  };

  const onExplorerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      fadeFeature(Math.min(featureIndex + 1, pillar.features.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      fadeFeature(Math.max(featureIndex - 1, 0));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      selectPillar(Math.min(pillarIndex + 1, pillars.length - 1));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      selectPillar(Math.max(pillarIndex - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      fadeTo(0, 0);
    } else if (e.key === "End") {
      e.preventDefault();
      fadeTo(pillars.length - 1, pillars[pillars.length - 1]!.features.length - 1);
    }
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      if (interacted.current) return;
      setVisible(false);
      window.setTimeout(() => {
        setFeatureIndex((fi) => {
          const next = fi + 1;
          if (next < 4) return next;
          setPillarIndex((pi) => (pi + 1) % pillars.length);
          return 0;
        });
        setVisible(true);
      }, 180);
    }, 5000);

    return () => window.clearInterval(id);
  }, [pillars.length]);

  return (
    <div
      className="grid items-start gap-8 lg:grid-cols-[minmax(300px,0.82fr)_minmax(0,1.28fr)] lg:gap-14"
      onKeyDown={onExplorerKeyDown}
      onMouseEnter={() => {
        interacted.current = true;
      }}
    >
      <p className="order-0 col-span-full text-center text-xs font-semibold text-slate lg:hidden">
        Touchez un module pour voir l&apos;aperçu · {pillar.features.length} fonctions par pilier
      </p>
      <div
        className="order-2 space-y-2.5 lg:order-1 lg:sticky lg:top-[7.5rem]"
        role="tablist"
        aria-label="Piliers produit PROGESTI"
      >
        {pillars.map((p, pi) => {
          const open = pi === pillarIndex;
          const panelId = `${baseId}-panel-${p.id}`;
          const buttonId = `${baseId}-tab-${p.id}`;

          return (
            <div
              key={p.id}
              className={`overflow-hidden rounded-[3px] text-white transition ${
                open
                  ? "bg-blue-deep shadow-[0_12px_40px_rgba(11,61,110,0.35)] ring-1 ring-[#A8E300]/40"
                  : "bg-brand-navy shadow-[0_8px_28px_rgba(1,41,57,0.14)] hover:bg-brand-navy-soft"
              }`}
            >
              <button
                id={buttonId}
                type="button"
                role="tab"
                aria-selected={open}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => selectPillar(pi)}
                className="flex w-full items-center gap-3.5 px-5 py-4 text-left transition outline-none focus-visible:ring-2 focus-visible:ring-[#A8E300] focus-visible:ring-offset-2 focus-visible:ring-offset-blue-deep md:min-h-[64px] md:px-6"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] ${
                    open ? "bg-lime-cta/18" : "bg-white/10"
                  }`}
                >
                  <PillarIcon icon={p.icon} />
                </span>
                <span className="relative font-display text-[1.05rem] font-extrabold tracking-tight md:text-lg">
                  {p.label}
                  {open ? <HandUnderline /> : null}
                </span>
                <span className="ml-auto text-white/70" aria-hidden>
                  {open ? "▴" : "▾"}
                </span>
              </button>

              <div
                id={panelId}
                role="tabpanel"
                aria-labelledby={buttonId}
                hidden={!open}
                className={open ? "border-t border-white/10 px-4 pb-3 pt-1 md:px-5" : undefined}
              >
                {open ? (
                  <ul className="space-y-0.5" role="list">
                    {p.features.map((f, fi) => {
                      const active = fi === featureIndex;
                      return (
                        <li key={f.id}>
                          <button
                            type="button"
                            aria-current={active ? "true" : undefined}
                            onClick={() => fadeFeature(fi)}
                            onMouseEnter={() => {
                              if (canHover.current) previewFeature(fi);
                            }}
                            className={`flex w-full items-center gap-2 rounded px-2 py-2.5 text-left text-[15px] transition outline-none focus-visible:bg-white/10 focus-visible:ring-1 focus-visible:ring-[#A8E300] md:text-base ${
                              active
                                ? "font-bold text-white"
                                : "font-semibold text-white/75 hover:text-white"
                            }`}
                          >
                            <span className={`text-lime-cta ${active ? "translate-x-0.5" : ""}`} aria-hidden>
                              →
                            </span>
                            <span className="relative inline-block pb-1">
                              {f.label}
                              {active ? <HandUnderline /> : null}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="order-1 min-w-0 outline-none focus-visible:rounded-[3px] focus-visible:ring-2 focus-visible:ring-blue-royal focus-visible:ring-offset-2 lg:order-2"
        tabIndex={0}
        aria-label="Aperçu produit — flèches pour naviguer"
      >
        <div
          className={`transition-all duration-300 ease-out motion-reduce:transition-none ${
            visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.99] opacity-0"
          }`}
        >
          <FeatureMock kind={feature.mock} label={feature.label} context={mockContext} />
          <div className="mt-4 flex items-center gap-2" aria-hidden>
            {pillar.features.map((f, fi) => (
              <span
                key={f.id}
                className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
                  fi === featureIndex ? "bg-lime-cta" : fi < featureIndex ? "bg-blue-royal/35" : "bg-blue-mist/70"
                }`}
              />
            ))}
          </div>
          <div className="mt-6 md:mt-8" aria-live="polite" aria-atomic="true">
            <h2 className="font-display text-[1.65rem] font-extrabold tracking-tight text-blue-deep md:text-[2.05rem] md:leading-[1.15]">
              {feature.panelTitle}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate md:text-[1.05rem] md:leading-relaxed">
              {feature.panelBody}
            </p>
            <Link
              href={feature.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-deep underline-offset-4 hover:text-green-deep hover:underline"
            >
              Voir la fonctionnalité
              <span className="text-lime-cta" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
        <p className="mt-4 hidden text-xs text-slate/80 lg:block">
          Survol ou ↑ ↓ pour explorer · ← → pour changer de pilier.
        </p>
      </div>
    </div>
  );
}
