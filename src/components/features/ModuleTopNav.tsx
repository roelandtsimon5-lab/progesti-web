"use client";

import Link from "next/link";
import { ModuleIcon } from "@/components/features/ModuleIcon";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";
import type { NavMenuItem } from "@/lib/navigation";
import { site } from "@/lib/site";
import { useEffect, useState } from "react";

type Section = { id: string; label: string };

type Props = {
  pillarTitle: string;
  pillarItems: readonly NavMenuItem[];
  activeSlug: string;
  sections: readonly Section[];
};

export function ModuleTopNav({ pillarTitle, pillarItems, activeSlug, sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.15, 0.35] },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const link = document.querySelector(`[data-section-nav="${active}"]`);
    link?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [active]);

  return (
    <div className="sticky top-[4.25rem] z-40 border-b border-line bg-white/95 backdrop-blur-md md:top-[4.5rem]">
      <div className="container py-2.5">
        <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          {pillarItems.length ? (
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">{pillarTitle}</p>
              <div className="mt-1.5 flex gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {pillarItems.map((item) => {
                  const slug = item.href.split("/").pop() ?? "";
                  const isActive = slug === activeSlug;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex shrink-0 items-center gap-1.5 rounded-[2px] px-2.5 py-1.5 text-xs font-bold transition sm:text-sm ${
                        isActive
                          ? "bg-brand-navy text-white"
                          : "bg-paper text-brand-navy hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      {item.icon ? (
                        <ModuleIcon
                          icon={item.icon}
                          className={`h-3.5 w-3.5 ${isActive ? "text-lime-cta" : "text-brand-navy-soft"}`}
                        />
                      ) : null}
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="relative flex items-center gap-2 lg:shrink-0">
            {sections.length >= 2 ? (
              <>
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-white/95 to-transparent lg:hidden"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-16 z-10 w-4 bg-gradient-to-l from-white/95 to-transparent lg:hidden"
                  aria-hidden
                />
                <nav
                  aria-label="Sections du module"
                  className="flex min-w-0 flex-1 gap-0.5 overflow-x-auto border-t border-line pt-2.5 lg:flex-initial lg:border-t-0 lg:pt-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {sections.map((s) => {
                    const isActive = active === s.id;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        data-section-nav={s.id}
                        aria-current={isActive ? "true" : undefined}
                      className={`relative shrink-0 px-3 py-1.5 text-xs font-bold sm:text-sm ${
                        isActive ? "text-brand-navy" : "text-slate hover:text-brand-navy"
                      }`}
                    >
                      {s.label}
                      {isActive ? (
                        <span
                          className="absolute inset-x-1 -bottom-2.5 h-0.5 rounded-full bg-lime-cta"
                          aria-hidden
                        />
                      ) : null}
                    </a>
                  );
                })}
                </nav>
              </>
            ) : null}

            <ButtonLink
              href={cta.trial}
              variant="trial"
              size="md"
              className="hidden shrink-0 !rounded-[2px] !px-4 !py-2 !text-xs !font-bold lg:inline-flex"
              event="trial_start"
              eventPayload={{ cta: "module_nav_trial", module: activeSlug }}
            >
              Essai {site.trialDays}j
            </ButtonLink>
          </div>
        </div>
      </div>
      <div
        className="h-0.5 origin-left bg-lime-cta transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
    </div>
  );
}
