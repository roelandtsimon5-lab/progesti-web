"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "produit", label: "Produit" },
  { id: "showcase", label: "Terrain" },
  { id: "avis", label: "Avis" },
  { id: "preuve", label: "Métier" },
  { id: "fonctionnalites", label: "Modules" },
  { id: "tarifs", label: "Tarifs" },
  { id: "faq", label: "FAQ" },
] as const;

export function IndustrySectionNav() {
  const [active, setActive] = useState<string>("produit");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-22% 0px -52% 0px", threshold: [0, 0.15, 0.35, 0.55] },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections de la page"
      className="sticky top-[4.25rem] z-40 border-b border-blue-mist/70 bg-white/95 backdrop-blur-md md:top-[4.5rem]"
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white/95 to-transparent md:hidden"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white/95 to-transparent md:hidden"
          aria-hidden
        />
        <div className="container flex items-center gap-1 overflow-x-auto py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative shrink-0 rounded-[2px] px-3 py-2 text-sm font-bold transition md:px-3.5 ${
                  isActive
                  ? "bg-ink text-white shadow-sm"
                  : "text-slate hover:bg-paper hover:text-ink"
                }`}
              >
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
