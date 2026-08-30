"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";
import { site } from "@/lib/site";
import type { TrackEvent } from "@/lib/tracking";

export type MobileCtaAction = {
  href: string;
  label: string;
  variant?: "trial" | "secondary" | "outline-white" | "primary";
  event?: TrackEvent;
  eventPayload?: Record<string, unknown>;
  /** Lien ancre interne (#…) — rendu en <a> natif pour le scroll */
  anchor?: boolean;
  className?: string;
};

type Props = {
  primary?: MobileCtaAction;
  secondary?: MobileCtaAction;
};

const defaultPrimary: MobileCtaAction = {
  href: cta.trial,
  label: `Essai ${site.trialDays} jours`,
  variant: "trial",
  event: "trial_start",
  eventPayload: { cta: "mobile_sticky_trial" },
};

const defaultSecondary: MobileCtaAction = {
  href: cta.demo,
  label: "Démo",
  variant: "outline-white",
  eventPayload: { cta: "mobile_sticky_demo" },
};

function AnchorCta({ action, flex }: { action: MobileCtaAction; flex?: boolean }) {
  return (
    <a
      href={action.href}
      className={
        action.className ??
        `flex ${flex ? "flex-1" : ""} items-center justify-center rounded-[2px] bg-lime-cta py-3.5 font-display text-sm font-bold text-brand-navy transition hover:bg-lime-cta-hover`
      }
    >
      {action.label}
    </a>
  );
}

function ButtonCta({ action, flex }: { action: MobileCtaAction; flex?: boolean }) {
  return (
    <ButtonLink
      href={action.href}
      variant={action.variant ?? "primary"}
      className={`${flex ? "flex-1" : ""} !py-3.5 ${action.variant === "outline-white" ? "!rounded-[3px]" : ""} ${action.className ?? ""}`}
      event={action.event}
      eventPayload={action.eventPayload}
    >
      {action.label}
    </ButtonLink>
  );
}

export function MobileCtaBar({ primary = defaultPrimary, secondary = defaultSecondary }: Props) {
  return (
    <>
      <div className="h-20 lg:hidden" aria-hidden />
      <div className="mobile-cta lg:hidden">
        {primary.anchor ? (
          <AnchorCta action={primary} flex />
        ) : (
          <ButtonCta action={primary} flex />
        )}
        {secondary.anchor ? (
          <AnchorCta action={secondary} flex />
        ) : (
          <ButtonCta action={secondary} flex />
        )}
      </div>
    </>
  );
}
