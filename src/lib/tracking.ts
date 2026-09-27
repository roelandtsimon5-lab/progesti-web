import { getChannel, getStoredAttribution } from "@/lib/attribution";

export type TrackEvent =
  | "cta_click"
  | "form_submit"
  | "signup_start"
  | "demo_view"
  | "rdv_click"
  | "trial_start"
  | "page_view";

/** Form types for distinguishing demo, contact, and trial in analytics. */
export type FormType = "demo" | "contact" | "trial" | "callback" | "switch" | "onboarding" | "rdv";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Push événement dataLayer pour GTM / GA4 / Google Ads. */
export function track(event: TrackEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const channel = getChannel();
  const attr = getStoredAttribution();

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    event_name: event,
    page_path: window.location.pathname,
    page_location: window.location.href,
    channel,
    // Include attribution for richer analytics
    ...(attr?.utmSource ? { utm_source: attr.utmSource } : {}),
    ...(attr?.utmMedium ? { utm_medium: attr.utmMedium } : {}),
    ...(attr?.utmCampaign ? { utm_campaign: attr.utmCampaign } : {}),
    ...(attr?.gclid ? { gclid: attr.gclid } : {}),
    ...payload,
  });
}

/**
 * Track form submission with form_type for distinguishing demo/contact/trial in GA4.
 */
export function trackFormSubmit(formType: FormType, payload: Record<string, unknown> = {}) {
  track("form_submit", { form_type: formType, ...payload });
}
