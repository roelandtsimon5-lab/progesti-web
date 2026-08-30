"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, ctaLabels } from "@/lib/cta";
import { site } from "@/lib/site";

/** Rail d'aide — charte PROGESTI navy/lime. */
export function IndustryHelpRail() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-30 hidden lg:bottom-[4.75rem] lg:block xl:right-6">
      {open ? (
        <div className="mb-3 w-64 overflow-hidden rounded-[2px] border border-line bg-white shadow-[0_18px_48px_rgba(1,41,57,0.18)]">
          <div className="border-b border-line bg-brand-navy px-4 py-3">
            <p className="font-sans text-sm font-extrabold text-white">On vous aide à choisir</p>
            <p className="mt-0.5 text-xs text-white/65">Équipe FR · métier propreté</p>
          </div>
          <div className="space-y-2 p-4">
            <ButtonLink
              href={cta.trial}
              variant="trial"
              size="md"
              className="w-full !rounded-[2px] !py-2.5 !text-sm"
              event="trial_start"
              eventPayload={{ cta: "help_rail_trial" }}
            >
              {ctaLabels.trialShort}
            </ButtonLink>
            <ButtonLink
              href={cta.demo}
              variant="secondary"
              size="md"
              className="w-full !rounded-[2px] !py-2.5 !text-sm"
              eventPayload={{ cta: "help_rail_demo" }}
            >
              {ctaLabels.demoGate}
            </ButtonLink>
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center justify-center gap-2 rounded-[2px] border border-line py-2.5 text-sm font-bold text-brand-navy hover:bg-paper"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="block text-center text-xs font-semibold text-brand-navy-soft hover:underline"
            >
              Formulaire contact →
            </Link>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-[2px] border border-line bg-white py-2.5 pl-4 pr-5 shadow-[0_12px_36px_rgba(1,41,57,0.15)] transition hover:border-lime-cta hover:shadow-[0_16px_44px_rgba(1,41,57,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-cta"
        aria-label={open ? "Fermer l'aide" : "Besoin d'aide ?"}
        aria-expanded={open}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-lime-cta text-sm font-extrabold text-brand-navy">
          ?
        </span>
        <span className="text-sm font-bold text-brand-navy">{open ? "Fermer" : "Besoin d'aide ?"}</span>
      </button>
    </div>
  );
}
