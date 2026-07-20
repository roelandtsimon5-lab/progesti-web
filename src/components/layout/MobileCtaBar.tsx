"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";

export function MobileCtaBar() {
  return (
    <div className="mobile-cta lg:hidden">
      <ButtonLink
        href={cta.trialApp}
        className="flex-1 !py-3.5"
        event="trial_start"
        eventPayload={{ cta: "v3_mobile_sticky" }}
      >
        Essai gratuit
      </ButtonLink>
      <ButtonLink
        href={cta.demo}
        variant="outline-white"
        className="flex-1 !py-3.5"
        eventPayload={{ cta: "v3_mobile_sticky_demo" }}
      >
        Démo
      </ButtonLink>
    </div>
  );
}
