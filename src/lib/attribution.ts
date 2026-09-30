/**
 * Origine des visiteurs (first-touch) — SANS cookie, SANS stockage navigateur, SANS identifiant.
 *
 * Conforme à la position CNIL : rien n'est écrit ni lu dans le terminal de l'utilisateur
 * (ni cookie, ni localStorage, ni sessionStorage). L'origine est gardée UNIQUEMENT en mémoire
 * de l'onglet (variable JS) et disparaît au rechargement complet ou à la fermeture de l'onglet.
 *
 * Données conservées : domaine du referrer, chemin de la page d'entrée (sans paramètres),
 * UTM (étiquettes de campagne), canal déduit. Jamais : identifiant de clic (gclid), URL complète
 * du referrer, IP, e-mail, identifiant d'appareil.
 */

export type Attribution = {
  /** Referrer domain only (e.g. "google.com"). */
  referrerDomain: string;
  /** Landing page path. */
  landing: string;
  /** UTM source. */
  utmSource: string;
  /** UTM medium. */
  utmMedium: string;
  /** UTM campaign. */
  utmCampaign: string;
  /** UTM content. */
  utmContent: string;
  /** UTM term. */
  utmTerm: string;
  /** Derived channel: seo-google, ads-google, seo-bing, seo-chatgpt, seo-perplexity, referral, direct. */
  channel: string;
  /** Timestamp when captured. */
  capturedAt: number;
};

/** Recognized search engines and AI tools for channel derivation. */
const SEARCH_DOMAINS: Record<string, string> = {
  "google.com": "google",
  "google.fr": "google",
  "google.be": "google",
  "google.ch": "google",
  "google.ca": "google",
  "google.co.uk": "google",
  "google.de": "google",
  "bing.com": "bing",
  "chatgpt.com": "chatgpt",
  "chat.openai.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "duckduckgo.com": "duckduckgo",
  "ecosia.org": "ecosia",
  "yahoo.com": "yahoo",
  "qwant.com": "qwant",
};

function extractDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    return hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function normalizeSearchDomain(domain: string): string | null {
  if (!domain) return null;
  for (const [pattern, engine] of Object.entries(SEARCH_DOMAINS)) {
    if (domain === pattern || domain.endsWith(`.${pattern}`)) {
      return engine;
    }
  }
  return null;
}

function deriveChannel(
  referrerDomain: string,
  utmSource: string,
  utmMedium: string,
  hasGclid: boolean,
): string {
  const lowerSource = utmSource.toLowerCase();
  const lowerMedium = utmMedium.toLowerCase();

  // Google Ads: gclid present OR utm_source=google with paid medium
  if (hasGclid) return "ads-google";
  if (
    (lowerSource === "google" || lowerSource === "adwords" || lowerSource === "googleads") &&
    (lowerMedium === "cpc" || lowerMedium === "ppc" || lowerMedium === "paid" || lowerMedium === "ads")
  ) {
    return "ads-google";
  }

  // Bing Ads
  if (
    (lowerSource === "bing" || lowerSource === "bingads" || lowerSource === "msn") &&
    (lowerMedium === "cpc" || lowerMedium === "ppc" || lowerMedium === "paid" || lowerMedium === "ads")
  ) {
    return "ads-bing";
  }

  // If UTM source is set but not paid, treat as referral/campaign
  if (utmSource && utmMedium) {
    const searchEngine = normalizeSearchDomain(lowerSource);
    if (searchEngine) {
      return `seo-${searchEngine}`;
    }
    return "referral";
  }

  // Organic from recognized search engine
  const searchEngine = normalizeSearchDomain(referrerDomain);
  if (searchEngine) {
    return `seo-${searchEngine}`;
  }

  // Other referrer
  if (referrerDomain) {
    return "referral";
  }

  // No referrer
  return "direct";
}

function getUrlParam(params: URLSearchParams, key: string): string {
  return params.get(key)?.trim() || "";
}

export function captureAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const referrer = document.referrer || "";
  const referrerDomain = extractDomain(referrer);
  const landing = window.location.pathname; // chemin seul, sans paramètres

  const utmSource = getUrlParam(params, "utm_source");
  const utmMedium = getUrlParam(params, "utm_medium");
  const utmCampaign = getUrlParam(params, "utm_campaign");
  const utmContent = getUrlParam(params, "utm_content");
  const utmTerm = getUrlParam(params, "utm_term");
  // Présence d'un identifiant de clic Google Ads : sert UNIQUEMENT à déduire le canal.
  // La valeur n'est ni conservée, ni transmise.
  const hasGclid = Boolean(getUrlParam(params, "gclid"));

  const channel = deriveChannel(referrerDomain, utmSource, utmMedium, hasGclid);

  return {
    referrerDomain,
    landing,
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmTerm,
    channel,
    capturedAt: Date.now(),
  };
}

/** Mémoire de l'onglet uniquement (aucune écriture dans le navigateur). */
let memoryAttribution: Attribution | null = null;

export function getStoredAttribution(): Attribution | null {
  return memoryAttribution;
}

/**
 * Capture l'origine à la première page vue de l'onglet uniquement (mémoire, pas de stockage).
 * Sans effet si déjà capturée.
 */
export function captureFirstTouchAttribution(): Attribution | null {
  if (memoryAttribution) return memoryAttribution;
  memoryAttribution = captureAttribution();
  return memoryAttribution;
}

/**
 * Build query params object for passing attribution to the app.
 * Only includes non-empty values.
 */
export function getAttributionParams(): Record<string, string> {
  const attr = getStoredAttribution();
  if (!attr) return {};

  const params: Record<string, string> = {};
  if (attr.utmSource) params.utm_source = attr.utmSource;
  if (attr.utmMedium) params.utm_medium = attr.utmMedium;
  if (attr.utmCampaign) params.utm_campaign = attr.utmCampaign;
  if (attr.utmContent) params.utm_content = attr.utmContent;
  if (attr.utmTerm) params.utm_term = attr.utmTerm;
  if (attr.landing) params.landing = attr.landing;
  if (attr.referrerDomain) params.referrer = attr.referrerDomain;
  if (attr.channel) params.channel = attr.channel;

  return params;
}

/**
 * Get attribution for including in API payloads (e.g. /api/lead).
 */
export function getAttributionPayload(): Record<string, string | undefined> {
  const attr = getStoredAttribution();
  if (!attr) return {};

  return {
    utm_source: attr.utmSource || undefined,
    utm_medium: attr.utmMedium || undefined,
    utm_campaign: attr.utmCampaign || undefined,
    utm_content: attr.utmContent || undefined,
    utm_term: attr.utmTerm || undefined,
    landing: attr.landing || undefined,
    referrer: attr.referrerDomain || undefined,
    channel: attr.channel || undefined,
  };
}

/** Get the derived channel for the current visitor. */
export function getChannel(): string {
  const attr = getStoredAttribution();
  return attr?.channel || "unknown";
}
