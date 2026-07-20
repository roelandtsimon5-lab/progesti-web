export type TrackEvent =
  | "cta_click"
  | "form_submit"
  | "signup_start"
  | "demo_view"
  | "rdv_click"
  | "trial_start"
  | "page_view";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Push événement dataLayer pour GTM / GA4 / Google Ads. */
export function track(event: TrackEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    event_name: event,
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...payload,
  });
}
