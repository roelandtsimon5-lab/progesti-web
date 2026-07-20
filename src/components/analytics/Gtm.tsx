"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { env } from "@/lib/env";

const GTM_ID = env.gtmId;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsent(state: "granted" | "denied") {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    consent: state,
  });
  const payload = {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  };
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", payload);
  } else {
    // Fallback avant hydratation complète du snippet gtag
    window.dataLayer.push({
      event: "gtag.consent_update",
      ...payload,
    });
  }
}

/** Applique le consentement stocké ou une valeur forcée (ex. LP ads). */
export function applyStoredOrForcedConsent(forced?: "granted" | "denied") {
  if (typeof window === "undefined") return;
  let state: "granted" | "denied" = "denied";
  if (forced) {
    state = forced;
  } else {
    try {
      const v = localStorage.getItem("progesti_cookie_consent");
      if (v === "accepted") state = "granted";
      if (v === "rejected") state = "denied";
    } catch {
      /* ignore */
    }
  }
  pushConsent(state);
}

/** Consent Mode default + GTM — toujours chargé si ID présent. */
export function GtmHead() {
  if (!GTM_ID) return null;

  return (
    <>
      <Script id="gtm-consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){window.dataLayer.push(arguments);};
        window.gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'granted',
          security_storage: 'granted',
          wait_for_update: 500
        });
        window.gtag('set', 'ads_data_redaction', true);
        window.gtag('set', 'url_passthrough', true);
      `}</Script>
      <Script id="gtm" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}</Script>
    </>
  );
}

/** Fallback noscript — juste après <body> */
export function GtmNoscript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm"
      />
    </noscript>
  );
}

/** Restaure le consentement cookie après hydratation (site hors ads). */
export function GtmConsentBootstrap() {
  useEffect(() => {
    applyStoredOrForcedConsent();
    function onConsent(e: Event) {
      const detail = (e as CustomEvent).detail;
      if (detail === "accepted") applyStoredOrForcedConsent("granted");
      if (detail === "rejected") applyStoredOrForcedConsent("denied");
    }
    window.addEventListener("progesti-consent", onConsent);
    return () => window.removeEventListener("progesti-consent", onConsent);
  }, []);
  return null;
}

/**
 * Sur les LP Google Ads le bandeau cookies est masqué (CRO).
 * Active la mesure campagne pour attribuer les conversions Ads.
 */
export function AdsGtmConsent() {
  useEffect(() => {
    try {
      localStorage.setItem("progesti_cookie_consent", "accepted");
    } catch {
      /* ignore */
    }
    applyStoredOrForcedConsent("granted");
    window.dispatchEvent(new CustomEvent("progesti-consent", { detail: "accepted" }));
  }, []);
  return null;
}

function PageviewInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GTM_ID || typeof window === "undefined") return;
    const qs = searchParams?.toString();
    const page_path = qs ? `${pathname}?${qs}` : pathname;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

/** Virtual pageviews pour App Router (SPA). */
export function GtmPageviews() {
  if (!GTM_ID) return null;
  return (
    <Suspense fallback={null}>
      <PageviewInner />
    </Suspense>
  );
}
