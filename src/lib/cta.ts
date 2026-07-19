import { appUrl } from "@/lib/env";

/** Destinations marketing → produit (une seule source de vérité). */
export const cta = {
  /** Démo interactive (gate + cockpit fictif). */
  demo: "/demo",
  /** Funnel lead puis redirection vers l'app. */
  trial: "/essai-gratuit",
  /** Inscription self-serve sur le logiciel Railway. */
  trialApp: appUrl("/creer-mon-espace"),
  /** Connexion logiciel. */
  login: appUrl("/login"),
} as const;

/** Construit l'URL d'inscription avec préremplissage optionnel. */
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
