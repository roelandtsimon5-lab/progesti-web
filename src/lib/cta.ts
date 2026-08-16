import { appUrl } from "@/lib/env";

/** Destinations marketing -> produit (une seule source de verite). */
export const cta = {
  /** Gate demo (formulaire lead) -> ensuite app reelle via demoAppUrl. */
  demo: "/demo",
  /** Funnel lead puis redirection vers l'app. */
  trial: "/essai-gratuit",
  /** Inscription self-serve sur l'app (app.progesti.fr) - essai 7 jours. */
  trialApp: appUrl("/creer-mon-espace"),
  /** Cockpit demo pre-rempli (session guest, donnees Pro Nettoyage). */
  demoApp: appUrl("/api/public/demo-session"),
  /** Connexion logiciel. */
  login: appUrl("/login"),
} as const;

/** Construit l'URL d'inscription avec preremplissage optionnel. */
export function trialAppUrl(prefill?: {
  company?: string;
  name?: string;
  email?: string;
  source?: string;
}): string {
  const url = new URL(cta.trialApp);
  if (prefill?.company) url.searchParams.set("company", prefill.company);
  if (prefill?.name) url.searchParams.set("name", prefill.name);
  if (prefill?.email) url.searchParams.set("email", prefill.email);
  if (prefill?.source) url.searchParams.set("source", prefill.source);
  return url.toString();
}

/** Entree demo publique : cookie session sur tenant demo -> /demo-mvp. */
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
  url.searchParams.set("next", prefill?.next || "/demo-mvp");
  return url.toString();
}
