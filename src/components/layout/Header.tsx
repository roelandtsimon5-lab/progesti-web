"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { MegaMenuPanel, MegaMenuTrigger } from "@/components/navigation/MegaMenu";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, ctaLabels } from "@/lib/cta";
import {
  isIndustryDarkPath,
  productMegaMenu,
  resourcesMegaMenu,
  solutionsMegaMenu,
} from "@/lib/navigation";
import { site, solutions } from "@/lib/site";

type OpenMenu = "product" | "solutions" | "resources" | null;

const megaMenuById = {
  product: productMegaMenu,
  solutions: solutionsMegaMenu,
  resources: resourcesMegaMenu,
} as const;

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5.5 4h3l1.5 5.5-2 1.2a12 12 0 0 0 5.8 5.8l1.2-2L21 15.5V18.5a1.5 1.5 0 0 1-1.5 1.5C9.8 20 4 14.2 4 6A1.5 1.5 0 0 1 5.5 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeaderPhoneLink({ dark, className = "" }: { dark: boolean; className?: string }) {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className={`group inline-flex shrink-0 items-center gap-2 rounded-[2px] px-2 py-2 outline-none transition focus-visible:ring-2 focus-visible:ring-lime-cta focus-visible:ring-offset-2 ${
        dark
          ? "hover:bg-white/8 focus-visible:ring-offset-brand-navy"
          : "hover:bg-paper focus-visible:ring-offset-white"
      } ${className}`}
      aria-label={`Appeler le support PROGESTI au ${site.phone}`}
    >
      <PhoneIcon
        className={`h-4 w-4 shrink-0 transition ${dark ? "text-lime-cta" : "text-brand-navy"}`}
      />
      <span className="flex flex-col leading-tight">
        <span
          className={`hidden text-[10px] font-bold uppercase tracking-[0.12em] xl:block ${
            dark ? "text-white/40" : "text-muted"
          }`}
        >
          Support
        </span>
        <span
          className={`whitespace-nowrap text-sm font-bold tabular-nums tracking-tight ${
            dark ? "text-white" : "text-brand-navy"
          }`}
        >
          {site.phone}
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const pathname = usePathname();
  const dark = isIndustryDarkPath(pathname);
  const megaMenuPanelId = useId();
  const barRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [panelTop, setPanelTop] = useState<number | null>(null);

  const closeMenus = useCallback(() => setOpenMenu(null), []);

  const syncPanelTop = useCallback(() => {
    const bottom = barRef.current?.getBoundingClientRect().bottom;
    if (bottom != null) setPanelTop(bottom);
  }, []);

  const cancelCloseMenus = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleCloseMenus = useCallback(() => {
    cancelCloseMenus();
    closeTimerRef.current = setTimeout(closeMenus, 140);
  }, [cancelCloseMenus, closeMenus]);

  const openMegaMenu = useCallback(
    (id: OpenMenu) => {
      cancelCloseMenus();
      const bottom = barRef.current?.getBoundingClientRect().bottom;
      if (bottom != null) setPanelTop(bottom);
      setOpenMenu(id);
    },
    [cancelCloseMenus],
  );

  useEffect(() => {
    closeMenus();
    setOpen(false);
  }, [pathname, closeMenus]);

  useLayoutEffect(() => {
    syncPanelTop();
    window.addEventListener("resize", syncPanelTop);
    window.addEventListener("scroll", syncPanelTop, { passive: true });
    return () => {
      window.removeEventListener("resize", syncPanelTop);
      window.removeEventListener("scroll", syncPanelTop);
    };
  }, [syncPanelTop, pathname, openMenu]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (open) {
        setOpen(false);
        return;
      }
      closeMenus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenus, open]);

  const menuProps = (id: OpenMenu) => ({
    open: openMenu === id,
    onOpen: () => openMegaMenu(id),
    onToggle: () => {
      cancelCloseMenus();
      if (openMenu === id) {
        setOpenMenu(null);
        return;
      }
      openMegaMenu(id);
    },
    dark,
    activePath: pathname,
  });

  return (
    <header
      className={`relative sticky top-0 z-50 ${
        dark
          ? "border-b border-white/10 bg-brand-navy/95 backdrop-blur-md"
          : "border-b border-line bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(1,41,57,0.06)]"
      } ${openMenu ? "lg:shadow-none" : ""}`}
      onMouseLeave={(e) => {
        if (!openMenu) return;
        const next = e.relatedTarget as Node | null;
        if (next && e.currentTarget.contains(next)) return;
        scheduleCloseMenus();
      }}
    >
      <div
        ref={barRef}
        className="container flex h-[4.25rem] items-center justify-between gap-4 md:h-[4.5rem]"
      >
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className={`whitespace-nowrap font-display text-lg font-extrabold tracking-tight sm:text-xl ${
              dark ? "text-lime-cta" : "text-brand-navy"
            }`}
          >
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation principale">
          <MegaMenuTrigger menu={productMegaMenu} panelId={megaMenuPanelId} {...menuProps("product")} />
          <MegaMenuTrigger menu={solutionsMegaMenu} panelId={megaMenuPanelId} {...menuProps("solutions")} />
          <Link
            href="/tarifs"
            className={
              dark
                ? `rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-white/10 ${
                    pathname === "/tarifs" ? "bg-white/15 text-white" : "text-white/80 hover:text-white"
                  }`
                : `rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-blue-sky ${
                    pathname === "/tarifs" ? "bg-blue-sky text-blue-deep" : "text-slate hover:text-blue-deep"
                  }`
            }
          >
            Tarifs
          </Link>
          <MegaMenuTrigger menu={resourcesMegaMenu} panelId={megaMenuPanelId} {...menuProps("resources")} />
          <Link
            href="/faq"
            className={
              dark
                ? `rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-white/10 ${
                    pathname === "/faq" ? "text-white" : "text-white/80 hover:text-white"
                  }`
                : `rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-blue-sky ${
                    pathname === "/faq" ? "text-blue-deep" : "text-slate hover:text-blue-deep"
                  }`
            }
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className={
              dark
                ? `rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-white/10 ${
                    pathname === "/contact" ? "text-white" : "text-white/80 hover:text-white"
                  }`
                : `rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-blue-sky ${
                    pathname === "/contact" ? "text-blue-deep" : "text-slate hover:text-blue-deep"
                  }`
            }
          >
            Contact
          </Link>
        </nav>

        <div
          className={`hidden items-center gap-2.5 border-l pl-3 lg:flex xl:gap-3 xl:pl-4 ${
            dark ? "border-white/15" : "border-line"
          }`}
        >
          <HeaderPhoneLink dark={dark} className="mr-0.5" />
          <ButtonLink
            href={cta.login}
            variant={dark ? "ghost-light" : "ghost"}
            className="hidden 2xl:inline-flex"
            eventPayload={{ cta: "header_login" }}
          >
            Se connecter
          </ButtonLink>
          <ButtonLink
            href={cta.demo}
            variant={dark ? "outline-white" : "secondary"}
            size="md"
            className="!min-h-10 !px-4 !py-2 !text-sm"
            eventPayload={{ cta: "header_demo" }}
          >
            {ctaLabels.demoGate}
          </ButtonLink>
          <ButtonLink
            href={cta.trial}
            variant="trial"
            event="trial_start"
            eventPayload={{ cta: "header_trial" }}
          >
            {ctaLabels.trialShort}
          </ButtonLink>
        </div>

        <button
          type="button"
          className={
            dark
              ? "inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 text-white lg:hidden"
              : "inline-flex h-11 w-11 items-center justify-center rounded-lg border border-blue-mist text-blue-deep lg:hidden"
          }
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-display text-lg" aria-hidden>
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>

      {openMenu && panelTop != null ? (
        <div
          className="fixed inset-x-0 z-[60] hidden lg:block"
          style={{ top: panelTop }}
          onMouseEnter={cancelCloseMenus}
          onMouseLeave={scheduleCloseMenus}
        >
          <MegaMenuPanel
            menu={megaMenuById[openMenu]}
            open
            onClose={closeMenus}
            dark={dark}
            panelId={megaMenuPanelId}
          />
        </div>
      ) : null}

      {open ? (
        <div
          id="mobile-nav"
          className={
            dark ? "border-t border-white/10 bg-blue-deep lg:hidden" : "border-t border-blue-mist bg-white lg:hidden"
          }
        >
          <div className="container flex max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-y-auto py-4">
            <MobileNavSection title="Fonctionnalités" dark={dark}>
              {productMegaMenu.columns.flatMap((c) => c.items).map((item) => (
                <MobileNavLink key={item.href + item.label} href={item.href} dark={dark} onNavigate={() => setOpen(false)}>
                  {item.label}
                </MobileNavLink>
              ))}
              <MobileNavLink href="/fonctionnalites" dark={dark} onNavigate={() => setOpen(false)}>
                Toutes les fonctionnalités →
              </MobileNavLink>
            </MobileNavSection>

            <MobileNavSection title="Solutions" dark={dark}>
              {solutions.map((s) => (
                <MobileNavLink
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  dark={dark}
                  onNavigate={() => setOpen(false)}
                >
                  {s.title}
                </MobileNavLink>
              ))}
              <MobileNavLink href="/logiciel-entreprise-nettoyage" dark={dark} onNavigate={() => setOpen(false)}>
                Logiciel entreprise de nettoyage
              </MobileNavLink>
            </MobileNavSection>

            <MobileNavSection title="Ressources" dark={dark}>
              {resourcesMegaMenu.columns.flatMap((c) => c.items).map((item) => (
                <MobileNavLink key={item.href + item.label} href={item.href} dark={dark} onNavigate={() => setOpen(false)}>
                  {item.label}
                </MobileNavLink>
              ))}
            </MobileNavSection>

            <MobileNavLink href="/tarifs" dark={dark} onNavigate={() => setOpen(false)}>
              Tarifs
            </MobileNavLink>
            <MobileNavLink href="/faq" dark={dark} onNavigate={() => setOpen(false)}>
              FAQ
            </MobileNavLink>
            <MobileNavLink href="/contact" dark={dark} onNavigate={() => setOpen(false)}>
              Contact
            </MobileNavLink>
            <a
              href={`tel:${site.phoneTel}`}
              className={`mt-2 flex items-center gap-3 rounded-[2px] border px-3 py-3 outline-none transition focus-visible:ring-2 focus-visible:ring-lime-cta focus-visible:ring-offset-2 ${
                dark
                  ? "border-white/15 bg-white/5 hover:border-white/25 hover:bg-white/8 focus-visible:ring-offset-brand-navy"
                  : "border-line bg-paper hover:bg-white focus-visible:ring-offset-white"
              }`}
              aria-label={`Appeler le support PROGESTI au ${site.phone}`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] ${
                  dark ? "bg-lime-cta/15 text-lime-cta" : "bg-lime-cta/20 text-brand-navy"
                }`}
              >
                <PhoneIcon className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className={`text-[10px] font-bold uppercase tracking-[0.14em] ${dark ? "text-white/45" : "text-muted"}`}>
                  Support FR — réponse rapide
                </span>
                <span className={`text-base font-bold tabular-nums tracking-tight ${dark ? "text-white" : "text-brand-navy"}`}>
                  {site.phone}
                </span>
              </span>
            </a>

            <div className="mt-3 flex flex-col gap-2 border-t border-blue-mist/50 pt-4">
              <ButtonLink
                href={cta.trial}
                variant="trial"
                event="trial_start"
                eventPayload={{ cta: "mobile_trial" }}
              >
                {ctaLabels.trial}
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                variant={dark ? "outline-white" : "secondary"}
                eventPayload={{ cta: "mobile_demo" }}
              >
                {ctaLabels.demoGate}
              </ButtonLink>
              <ButtonLink
                href={cta.login}
                variant={dark ? "ghost-light" : "ghost"}
                eventPayload={{ cta: "mobile_login" }}
              >
                Se connecter
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MobileNavSection({
  title,
  dark,
  children,
}: {
  title: string;
  dark: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`mb-2 border-b pb-3 ${dark ? "border-white/15" : "border-blue-mist"}`}>
      <p
        className={`px-1 py-2 text-xs font-bold uppercase tracking-wider ${
          dark ? "text-green-action" : "text-blue-royal"
        }`}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function MobileNavLink({
  href,
  dark,
  children,
  onNavigate,
}: {
  href: string;
  dark: boolean;
  children: ReactNode;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-lg px-1 py-2 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-blue-royal focus-visible:ring-offset-2 ${dark ? "text-white" : "text-blue-deep"}`}
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}
