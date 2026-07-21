const DEFAULT_AUTH_URL = "https://app.progesti.fr";

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://progesti.fr",
  /** Conteneur GTM PROGESTI — override possible via env hébergeur. */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() || "GTM-K65MM8Q4",
  googleCalendarUrl: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL || "",
  /** Meta verification Google Search Console (token fourni par GSC). */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || "",
  leadWebhookUrl: process.env.LEAD_WEBHOOK_URL || "",
  resendApiKey: process.env.RESEND_API_KEY || "",
  leadNotifyEmail: process.env.LEAD_NOTIFY_EMAIL || "contact@progesti.fr",
  /** Expéditeur Resend (domaine vérifié recommandé : contact@progesti.fr). */
  leadFromEmail:
    process.env.LEAD_FROM_EMAIL?.trim() || "PROGESTI <onboarding@resend.dev>",
  /** Portable Simon affiché au prospect (E.164, ex. +336…). */
  simonMobile: process.env.SIMON_MOBILE?.trim() || "",
  /** Affichage FR du portable Simon (ex. 06 XX XX XX XX). */
  simonMobileDisplay: process.env.SIMON_MOBILE_DISPLAY?.trim() || "",
  /** Où Simon reçoit les SMS d’alerte (souvent = SIMON_MOBILE). */
  leadNotifyPhone: process.env.LEAD_NOTIFY_PHONE?.trim() || "",
  /** Brevo — SMS transactionnels (crédits prépayés). */
  brevoApiKey: process.env.BREVO_API_KEY?.trim() || "",
  brevoSmsSender: process.env.BREVO_SMS_SENDER?.trim() || "PROGESTI",
  /** Free Mobile — alertes Simon gratuites (espace abonné → Notifications SMS). */
  freeMobileUser: process.env.FREE_MOBILE_USER?.trim() || "",
  freeMobilePass: process.env.FREE_MOBILE_PASS?.trim() || "",
  essaiUrl: (
    process.env.LEAD_ESSAI_URL?.trim() ||
    `${process.env.NEXT_PUBLIC_SITE_URL || "https://progesti.fr"}/essai-gratuit`
  ).replace(/\/$/, ""),
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
