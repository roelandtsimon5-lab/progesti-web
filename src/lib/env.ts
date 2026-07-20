const DEFAULT_AUTH_URL = "https://app.progesti.fr";

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://progesti.fr",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  googleCalendarUrl: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL || "",
  leadWebhookUrl: process.env.LEAD_WEBHOOK_URL || "",
  resendApiKey: process.env.RESEND_API_KEY || "",
  leadNotifyEmail: process.env.LEAD_NOTIFY_EMAIL || "contact@progesti.fr",
  /** URL du logiciel SaaS (app.progesti.fr). */
  authUrl: (
    process.env.NEXT_PUBLIC_AUTH_URL?.trim() || DEFAULT_AUTH_URL
  ).replace(/\/$/, ""),
};

/** Construit une URL absolue vers l’app (login, essai, etc.). */
export function appUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${env.authUrl}${normalized}`;
}

export function hasGtm() {
  return Boolean(env.gtmId);
}

export function hasCalendar() {
  return Boolean(env.googleCalendarUrl);
}
