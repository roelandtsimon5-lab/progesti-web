/**
 * First-touch marketing attribution — captures referrer, UTM, gclid, landing on first visit.
 * Stored in localStorage (first-party, ~90-day lifetime). Works regardless of analytics consent.
 */

const STORAGE_KEY = "progesti_attribution";
const TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days

export type Attribution = {
  /** Raw document.referrer on first landing. */
  referrer: string;
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
  /** Google Click ID. */
  gclid: string;
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
  gclid: string,
): string {
  const lowerSource = utmSource.toLowerCase();
  const lowerMedium = utmMedium.toLowerCase();

  // Google Ads: gclid present OR utm_source=google with paid medium
  if (gclid) return "ads-google";
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
  const landing = window.location.pathname;

  const utmSource = getUrlParam(params, "utm_source");
  const utmMedium = getUrlParam(params, "utm_medium");
  const utmCampaign = getUrlParam(params, "utm_campaign");
  const utmContent = getUrlParam(params, "utm_content");
  const utmTerm = getUrlParam(params, "utm_term");
  const gclid = getUrlParam(params, "gclid");

  const channel = deriveChannel(referrerDomain, utmSource, utmMedium, gclid);

  return {
    referrer,
    referrerDomain,
    landing,
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmTerm,
    gclid,
    channel,
    capturedAt: Date.now(),
  };
}

export function storeAttribution(attr: Attribution): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attr));
  } catch {
    // localStorage unavailable or full
  }
}

export function getStoredAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const attr = JSON.parse(raw) as Attribution;
    // Expire after TTL
    if (Date.now() - attr.capturedAt > TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return attr;
  } catch {
    return null;
  }
}

export function hasStoredAttribution(): boolean {
  return getStoredAttribution() !== null;
}

/**
 * Capture attribution on first landing only.
 * Call this on every page load — it no-ops if attribution already stored.
 */
export function captureFirstTouchAttribution(): Attribution | null {
  if (hasStoredAttribution()) {
    return getStoredAttribution();
  }
  const attr = captureAttribution();
  if (attr) {
    storeAttribution(attr);
  }
  return attr;
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
  if (attr.gclid) params.gclid = attr.gclid;
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
    gclid: attr.gclid || undefined,
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
