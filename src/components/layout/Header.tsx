"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cta } from "@/lib/cta";
import { navLinks, site, solutions } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-mist/70 bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(11,61,110,0.06)]">
      <div className="container flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo-opt.webp"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain"
            priority
          />
          <span className="truncate font-display text-lg font-extrabold tracking-tight text-blue-deep sm:text-xl">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => {
            if (link.href === "/solutions") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate transition hover:bg-blue-sky hover:text-blue-deep"
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                    onClick={() => setSolutionsOpen((v) => !v)}
                  >
                    {link.label}
                  </button>
                  {solutionsOpen ? (
                    <div className="absolute left-0 top-full z-50 min-w-[22rem] pt-2">
                      <div className="overflow-hidden rounded-xl border border-blue-mist bg-white shadow-[0_20px_50px_rgba(11,61,110,0.14)]">
                        <div className="bg-gradient-to-r from-blue-deep to-blue-royal px-4 py-3">
                          <p className="font-display text-xs font-bold uppercase tracking-wider text-white/90">
                            Nettoyage professionnel
                          </p>
                          <p className="text-sm text-white/75">Choisissez votre univers métier</p>
                        </div>
                        <ul className="p-2">
                          {solutions.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/solutions/${s.slug}`}
                                className="block rounded-lg px-3 py-2.5 transition hover:bg-blue-sky"
                                onClick={() => setSolutionsOpen(false)}
                              >
                                <span className="block font-display text-sm font-bold text-blue-deep">
                                  {s.title}
                                </span>
                                <span className="mt-0.5 block text-xs text-slate">{s.navHint}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="border-t border-blue-mist bg-blue-sky/50 px-4 py-3">
                          <Link
                            href={cta.demo}
                            className="text-sm font-bold text-blue-royal hover:underline"
                            onClick={() => setSolutionsOpen(false)}
                          >
                            Pas sûr ? Demandez une démo →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate transition hover:bg-blue-sky hover:text-blue-deep"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={cta.login} variant="ghost" eventPayload={{ cta: "v3_header_login" }}>
            Connexion
          </ButtonLink>
          <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "v3_header_demo" }}>
            Démo
          </ButtonLink>
          <ButtonLink href={cta.trialApp} event="trial_start" eventPayload={{ cta: "v3_header_trial" }}>
            Essai gratuit
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-blue-mist text-blue-deep lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-display text-lg" aria-hidden>
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-blue-mist bg-white lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              if (link.href === "/solutions") {
                return (
                  <div key={link.href} className="mb-2 border-b border-blue-mist pb-3">
                    <p className="px-1 py-2 text-xs font-bold uppercase tracking-wider text-blue-royal">
                      Solutions
                    </p>
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}`}
                        className="block rounded-lg px-1 py-2 font-semibold text-blue-deep"
                        onClick={() => setOpen(false)}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-1 py-2 font-semibold text-blue-deep"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-2">
              <ButtonLink href={cta.trialApp} event="trial_start" eventPayload={{ cta: "v3_mobile_trial" }}>
                Essai gratuit — 2 mois
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "v3_mobile_demo" }}>
                Voir une démonstration
              </ButtonLink>
              <ButtonLink href={cta.login} variant="ghost" eventPayload={{ cta: "v3_mobile_login" }}>
                Connexion
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
