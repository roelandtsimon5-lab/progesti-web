"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModuleIcon } from "@/components/features/ModuleIcon";
import { Reveal } from "@/components/ui/Reveal";
import { getModuleCreativeAssets } from "@/lib/creative-assets";
import { getModuleContent } from "@/lib/modules-content";
import type { NavMenuColumn } from "@/lib/navigation";
import { pillarHash } from "@/lib/navigation";
import { modules as siteModules } from "@/lib/site";

type Props = {
  columns: readonly NavMenuColumn[];
};

export function FeaturesHubModules({ columns }: Props) {
  const pillars = columns.filter((col) => col.title);
  const [active, setActive] = useState(0);
  const current = pillars[active] ?? pillars[0];

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const idx = pillars.findIndex((col) => pillarHash(col.title) === hash);
      if (idx >= 0) setActive(idx);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [pillars]);

  const selectPillar = (index: number) => {
    setActive(index);
    const hash = pillarHash(pillars[index]?.title);
    if (hash) {
      window.history.replaceState(null, "", `#${hash}`);
    }
  };

  if (!current) return null;

  const items = current.items.filter((i) => i.href.startsWith("/fonctionnalites/"));

  return (
    <section id="modules" className="section scroll-mt-36 bg-white pb-28 lg:pb-16">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Les {siteModules.length} modules</p>
          <h2 className="mt-3 max-w-2xl font-sans text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
            Explorez par domaine métier
          </h2>
        </Reveal>

        <div
          className="mt-8 flex gap-2 overflow-x-auto border-b border-line pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Domaines PROGESTI"
        >
          {pillars.map((col, i) => {
            const count = col.items.filter((item) =>
              item.href.startsWith("/fonctionnalites/"),
            ).length;
            return (
              <button
                key={col.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => selectPillar(i)}
                className={`shrink-0 border-b-2 px-4 py-3 text-sm font-bold transition ${
                  i === active
                    ? "border-lime-cta text-brand-navy"
                    : "border-transparent text-slate hover:text-brand-navy"
                }`}
              >
                {col.title}
                <span className="ml-1.5 text-xs font-semibold text-muted">({count})</span>
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const mod = siteModules.find((m) => item.href.endsWith(`/${m.slug}`));
            const assets = mod ? getModuleCreativeAssets(mod.slug) : undefined;
            const content = mod ? getModuleContent(mod.slug) : undefined;
            const thumb = assets?.hero ?? (content ? { src: content.image, alt: content.imageAlt } : undefined);
            return (
              <li key={item.href}>
                <Reveal delayMs={index * 40}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col overflow-hidden rounded-[2px] border border-line bg-paper transition hover:border-brand-navy-soft hover:bg-white hover:shadow-[0_16px_48px_rgba(1,41,57,0.1)]"
                  >
                    {thumb ? (
                      <div className="relative h-36 overflow-hidden border-b border-line bg-brand-navy">
                        <Image
                          src={thumb.src}
                          alt={thumb.alt}
                          fill
                          className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, 320px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                        {item.icon ? (
                          <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-[2px] bg-white/95 shadow-sm">
                            <ModuleIcon icon={item.icon} />
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-sans text-lg font-bold text-brand-navy">{item.label}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                        {mod?.short ?? item.hint}
                      </p>
                      {mod?.pain ? (
                        <p className="mt-3 text-xs text-muted">
                          <span className="font-bold uppercase tracking-wide text-brand-navy-soft">
                            Sans PROGESTI ·{" "}
                          </span>
                          {mod.pain}
                        </p>
                      ) : null}
                      <span className="mt-4 text-sm font-bold text-brand-navy-soft group-hover:underline">
                        Voir le module →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
