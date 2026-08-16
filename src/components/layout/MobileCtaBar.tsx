"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";

export function MobileCtaBar() {
  return (
    <div className="mobile-cta lg:hidden">
      <ButtonLink
        href={cta.demo}
        className="flex-1 !py-3.5"
        eventPayload={{ cta: "mobile_sticky_demo" }}
      >
        Demander une demo
      </ButtonLink>
      <ButtonLink
        href={cta.trial}
        variant="outline-white"
        className="flex-1 !py-3.5"
        eventPayload={{ cta: "mobile_sticky_trial" }}
      >
        Essai 7 jours
      </ButtonLink>
    </div>
  );
}
