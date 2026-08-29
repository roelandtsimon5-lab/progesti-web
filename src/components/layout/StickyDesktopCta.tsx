"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, ctaLabels } from "@/lib/cta";
import { modules, site } from "@/lib/site";

const SHOW_ON = [
  /^\/$/,
  /^\/demo$/,
  /^\/essai-gratuit$/,
  /^\/tarifs$/,
  /^\/temoignages$/,
  /^\/solutions(\/|$)/,
  /^\/fonctionnalites(\/|$)/,
  /^\/logiciel-/,
  /^\/alternative-propret$/,
  /^\/comparatifs$/,
  /^\/contact$/,
  /^\/rendez-vous$/,
  /^\/blog(\/|$)/,
  /^\/faq$/,
  /^\/a-propos$/,
  /^\/glossaire(\/|$)/,
  /^\/integrations$/,
  /^\/ressources$/,
  /^\/guides$/,
];

function shouldShow(pathname: string) {
  return SHOW_ON.some((re) => re.test(pathname));
}

export function StickyDesktopCta() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (!shouldShow(pathname)) {
      setScrolled(false);
      setBlocked(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = [
      ...document.querySelectorAll("[data-cta-sticky-safe]"),
      document.querySelector("footer"),
    ].filter(Boolean) as Element[];

    const io =
      targets.length > 0
        ? new IntersectionObserver(
            (entries) => {
              setBlocked(entries.some((e) => e.isIntersecting));
            },
            {
              // Hide sticky when safe zones enter the bottom sticky band
              root: null,
              rootMargin: "0px 0px -72px 0px",
              threshold: 0,
            },
          )
        : null;

    targets.forEach((el) => io?.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [pathname]);

  const visible = shouldShow(pathname) && scrolled && !blocked;

  if (!shouldShow(pathname)) return null;

  const moduleSlug = pathname.match(/^\/fonctionnalites\/([^/]+)$/)?.[1];
  const activeModule = moduleSlug
    ? modules.find((m) => m.slug === moduleSlug)
    : undefined;

  return (
    <>
      {/* Reserve scroll room so last content clears the bar when it is shown */}
      <div
        className={`pointer-events-none hidden lg:block ${visible ? "h-[4.75rem]" : "h-0"}`}
        aria-hidden
      />
      {visible ? (
        <div
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden translate-y-0 lg:block"
          role="region"
          aria-label="Actions rapides"
        >
          <div className="pointer-events-auto border-t border-line bg-white/95 shadow-[0_-8px_32px_rgba(15,36,56,0.08)] backdrop-blur-md">
            <div className="container flex items-center justify-between gap-4 py-3">
              <p className="text-sm font-semibold text-ink">
                {activeModule ? (
                  <>
                    <span className="font-extrabold text-brand-navy">{activeModule.title}</span>
                    <span className="mx-2 text-line">·</span>
                    <span className="text-slate">
                      149 € HT/mois · essai {site.trialDays} j
                    </span>
                  </>
                ) : (
                  <>
                    <span className="font-extrabold">149 € HT/mois</span>
                    <span className="mx-2 text-line">·</span>
                    <span className="text-slate">5 utilisateurs · tout inclus</span>
                  </>
                )}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="text-sm font-bold text-ink underline-offset-2 hover:underline"
                >
                  {site.phone}
                </a>
                <ButtonLink
                  href={cta.demo}
                  size="md"
                  variant="secondary"
                  className="!min-h-10 !rounded-[2px] !px-5 !text-sm"
                  eventPayload={{ cta: "sticky_desktop_demo" }}
                >
                  {ctaLabels.demoGate}
                </ButtonLink>
                <ButtonLink
                  href={cta.trial}
                  size="md"
                  variant="trial"
                  className="!min-h-10 !rounded-[2px] !px-6 !text-sm"
                  event="trial_start"
                  eventPayload={{
                    cta: "sticky_desktop_trial",
                    module: activeModule?.slug,
                  }}
                >
                  {ctaLabels.trialShort}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
