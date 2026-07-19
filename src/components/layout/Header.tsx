"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { appUrl } from "@/lib/env";
import { navLinks, site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const loginHref = appUrl("/login");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
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

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-anthracite transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={loginHref} variant="ghost" eventPayload={{ cta: "header_login" }}>
            Connexion
          </ButtonLink>
          <ButtonLink href="/demo" variant="secondary" eventPayload={{ cta: "header_demo" }}>
            Démo
          </ButtonLink>
          <ButtonLink href="/essai-gratuit" eventPayload={{ cta: "header_trial" }}>
            Essai gratuit
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-display text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-1 py-2 font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/essai-gratuit" eventPayload={{ cta: "mobile_trial" }}>
              Commencez gratuitement
            </ButtonLink>
            <ButtonLink href="/demo" variant="secondary" eventPayload={{ cta: "mobile_demo" }}>
              Voir une démonstration
            </ButtonLink>
            <ButtonLink href={loginHref} variant="ghost" eventPayload={{ cta: "mobile_login" }}>
              Connexion
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
