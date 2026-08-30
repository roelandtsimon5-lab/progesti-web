import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";

import type { IndustryPageConfig } from "@/lib/industry/types";



function HandMark({ className = "" }: { className?: string }) {

  return (

    <svg className={`text-lime-cta ${className}`} viewBox="0 0 180 12" fill="none" aria-hidden>

      <path

        d="M2 8C28 2 52 10 78 5C104 1 132 9 158 4C166 3 174 5 178 7"

        stroke="currentColor"

        strokeWidth="3"

        strokeLinecap="round"

      />

    </svg>

  );

}



type GridIcon = "planning" | "pointage" | "passages" | "facturation" | "clients" | "support";



const iconByHref: Record<string, GridIcon> = {

  "/logiciel-planning-nettoyage": "planning",

  "/fonctionnalites/pointage": "pointage",

  "/fonctionnalites/planification": "planning",

  "/logiciel-facturation-proprete": "facturation",

  "/fonctionnalites/clients": "clients",

  "/contact": "support",

};



function GridIconSvg({ kind }: { kind: GridIcon }) {

  const cls = "h-5 w-5 text-ink";

  switch (kind) {

    case "planning":

      return (

        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>

          <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" />

          <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

        </svg>

      );

    case "pointage":

      return (

        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>

          <path d="M12 21s6-4.5 6-10a6 6 0 1 0-12 0c0 5.5 6 10 6 10Z" stroke="currentColor" strokeWidth="1.8" />

          <circle cx="12" cy="11" r="2" fill="currentColor" />

        </svg>

      );

    case "passages":

      return (

        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>

          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />

        </svg>

      );

    case "facturation":

      return (

        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>

          <rect x="4" y="6" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />

          <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

        </svg>

      );

    case "clients":

      return (

        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>

          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />

          <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

        </svg>

      );

    case "support":

      return (

        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>

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



function resolveIcon(href: string): GridIcon {

  if (iconByHref[href]) return iconByHref[href]!;

  if (href.includes("planning") || href.includes("planification")) return "planning";

  if (href.includes("pointage")) return "pointage";

  if (href.includes("factur")) return "facturation";

  if (href.includes("client")) return "clients";

  return "passages";

}



type Props = {

  grid: IndustryPageConfig["grid"];

};



export function IndustryFeatureGrid({ grid }: Props) {

  return (

    <section className="section border-y border-line bg-white industry-anchor" id="fonctionnalites">

      <div className="container">

        <Reveal>

          <p className="eyebrow">Modules inclus</p>

          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold md:text-4xl">

            {grid.h2Lead}{" "}

            <span className="relative inline-block">

              {grid.h2Highlight}

              <HandMark className="absolute -bottom-2 left-0 h-2.5 w-full" />

            </span>

          </h2>

          <p className="mt-5 max-w-xl text-slate">{grid.lead}</p>

        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {grid.items.map((item, i) => (

            <Reveal key={item.title} delayMs={i * 40}>

              <div className="industry-card-lift group h-full rounded-[2px] border border-line bg-paper p-6">

                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center bg-lime-cta transition-transform duration-200 group-hover:scale-105 motion-reduce:transition-none">

                  <GridIconSvg kind={resolveIcon(item.href)} />

                </div>

                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>

                <Link href={item.href} className="link-accent mt-3 inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2">

                  Voir la fonctionnalité

                  <span aria-hidden>→</span>

                </Link>

              </div>

            </Reveal>

          ))}

        </div>

        <Reveal delayMs={200}>

          <div className="mt-14 flex justify-center">

            <Link

              href="/fonctionnalites"

              className="inline-flex items-center justify-center rounded-[2px] border-2 border-line px-8 py-3.5 text-sm font-bold text-ink transition hover:border-lime-cta hover:bg-paper"

            >

              Voir toutes les fonctionnalités

            </Link>

          </div>

        </Reveal>

      </div>

    </section>

  );

}


