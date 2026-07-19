"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";

export function MobileCtaBar() {
  return (
    <div className="mobile-cta lg:hidden">
      <ButtonLink
        href="/essai-gratuit"
        className="flex-1 !py-3.5"
        event="trial_start"
        eventPayload={{ cta: "mobile_sticky" }}
      >
        Essai gratuit
      </ButtonLink>
      <ButtonLink
        href="/demo"
        variant="secondary"
        className="flex-1 !py-3.5"
        eventPayload={{ cta: "mobile_sticky_demo" }}
      >
        Démo
      </ButtonLink>
    </div>
  );
}
