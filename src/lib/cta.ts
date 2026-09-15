import { appUrl } from "@/lib/env";
import { site, trialCopy } from "@/lib/site";

const demoAppPath = appUrl("/api/public/demo-session");

/** Destinations marketing -> produit (une seule source de verite). */
export const cta = {
  /**
   * « Demander une démo » / « Démo » : page marketing `/demo` (formulaire).
   * Ne jamais pointer les CTAs site vers demo-session (atterrit sur login ILICO).
   */
  demo: "/demo",
  /** Alias explicite page gate formulaire (SEO / accès direct URL). */
  demoPage: "/demo",
  /** Funnel lead puis redirection vers l'app. */
  trial: "/essai-gratuit",
  /** Inscription self-serve sur l'app (app.progesti.fr) - essai 15 jours. */
  trialApp: appUrl("/creer-mon-espace"),
  /** Session guest app — uniquement après lead / entrée depuis /demo. */
  demoApp: demoAppPath,
  /** Connexion logiciel. */
  login: appUrl("/login"),
} as const;

/** Libellés CTA — une seule voix sur tout le site public. */
export const ctaLabels = {
  /** Lien vers la page marketing /demo. */
  demoGate: "Demander une démo",
  /** Bouton submit sur /demo uniquement. */
  demoEnter: "Entrer dans la démo",
  trial: trialCopy.free,
  trialShort: `Essai ${site.trialDays} jours`,
  trialCreate: "Créer mon essai",
} as const;

/** Construit l'URL d'inscription avec preremplissage optionnel. */
export function trialAppUrl(prefill?: {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
}): string {
  const url = new URL(cta.trialApp);
  if (prefill?.company) url.searchParams.set("company", prefill.company);
  if (prefill?.name) url.searchParams.set("name", prefill.name);
  if (prefill?.email) url.searchParams.set("email", prefill.email);
  if (prefill?.phone) url.searchParams.set("phone", prefill.phone);
  if (prefill?.source) url.searchParams.set("source", prefill.source);
  return url.toString();
}

/** Entree demo publique : cookie session sur tenant demo -> /demo-mvp (après lead). */
export function demoAppUrl(prefill?: {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
  next?: string;
}): string {
  const url = new URL(cta.demoApp);
  if (prefill?.company) url.searchParams.set("company", prefill.company);
  if (prefill?.name) url.searchParams.set("name", prefill.name);
  if (prefill?.email) url.searchParams.set("email", prefill.email);
  if (prefill?.phone) url.searchParams.set("phone", prefill.phone);
  if (prefill?.source) url.searchParams.set("source", prefill.source);
  else url.searchParams.set("source", "site_demo");
  url.searchParams.set("next", prefill?.next || "/demo-mvp");
  return url.toString();
}
