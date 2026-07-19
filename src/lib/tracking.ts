export type TrackEvent =
  | "cta_click"
  | "form_submit"
  | "signup_start"
  | "demo_view"
  | "rdv_click"
  | "trial_start";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: TrackEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}
