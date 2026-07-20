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
    <header className="sticky top-0 z-50 border-b border-line/80 bg-air/90 backdrop-blur-md">
      <div className="container flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/logo-opt.webp"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 shrink-0 object-contain"
            priority
          />
          <span className="truncate font-display text-base font-extrabold tracking-tight text-ink sm:text-lg">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
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
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-anthracite transition hover:bg-fog-2 hover:text-ink"
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                    onClick={() => setSolutionsOpen((v) => !v)}
                  >
                    {link.label}
                  </button>
                  {solutionsOpen ? (
                    <div className="absolute left-0 top-full z-50 min-w-[18rem] pt-2">
                      <div className="border border-line bg-white p-3 shadow-[0_16px_40px_rgba(21,34,48,0.1)]">
                        <ul className="space-y-0.5">
                          {solutions.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/solutions/${s.slug}`}
                                className="block rounded-md px-3 py-2.5 transition hover:bg-fog"
                                onClick={() => setSolutionsOpen(false)}
                              >
                                <span className="block font-display text-sm font-bold text-ink">
                                  {s.title}
                                </span>
                                <span className="mt-0.5 block text-xs text-muted">{s.navHint}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
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
                className="rounded-lg px-3 py-2 text-sm font-semibold text-anthracite transition hover:bg-fog-2 hover:text-ink"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={cta.login} variant="ghost" eventPayload={{ cta: "v2_header_login" }}>
            Connexion
          </ButtonLink>
          <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "v2_header_demo" }}>
            Démo
          </ButtonLink>
          <ButtonLink href={cta.trialApp} eventPayload={{ cta: "v2_header_trial" }}>
            Essai gratuit
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
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
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              if (link.href === "/solutions") {
                return (
                  <div key={link.href} className="border-b border-line pb-3 mb-2">
                    <p className="px-1 py-2 text-xs font-bold uppercase tracking-wider text-muted">
                      Solutions
                    </p>
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}`}
                        className="block rounded-lg px-1 py-2 font-semibold text-ink"
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
                  className="rounded-lg px-1 py-2 font-semibold text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-2">
              <ButtonLink href={cta.trialApp} eventPayload={{ cta: "v2_mobile_trial" }}>
                Essai gratuit — 2 mois
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "v2_mobile_demo" }}>
                Voir une démonstration
              </ButtonLink>
              <ButtonLink href={cta.login} variant="ghost" eventPayload={{ cta: "v2_mobile_login" }}>
                Connexion
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
