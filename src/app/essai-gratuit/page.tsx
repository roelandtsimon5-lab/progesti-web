"use client";

import { useState } from "react";
import { cta, trialAppUrl } from "@/lib/cta";
import { track } from "@/lib/tracking";

export default function EssaiGratuitPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const company = String(data.company || "");
    const name = String(data.name || "");
    const email = String(data.email || "");

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent: "trial", ...data }),
      });
    } catch {
      // On continue vers l'app même si le lead échoue
      setError(true);
    }

    sessionStorage.setItem(
      "progesti_trial",
      JSON.stringify({
        name,
        email,
        company,
        createdAt: Date.now(),
      }),
    );

    track("signup_start", { source: "essai-gratuit" });
    track("trial_start", { source: "essai-gratuit" });

    window.location.href = trialAppUrl({
      company,
      name,
      email,
      source: "essai-gratuit",
    });
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-emerald focus:ring-4 focus:ring-emerald/15";

  return (
    <section className="section bg-fog">
      <div className="container grid max-w-5xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="eyebrow">Essai gratuit · 2 mois</p>
          <h1 className="mt-3 text-4xl font-extrabold text-ink md:text-5xl">
            Créez votre compte et entrez dans l’application
          </h1>
          <p className="mt-5 text-lg text-muted">
            Pas d’attente commerciale. Vous validez → compte créé → accès immédiat à l’application.
          </p>
          <ul className="mt-8 space-y-3 text-anthracite">
            {[
              "Sans carte bancaire",
              "Tous les modules ouverts",
              "Données de démo pour démarrer vite",
              "Résiliable après l’essai",
            ].map((item) => (
              <li key={item} className="flex gap-2 font-medium">
                <span className="text-emerald-dark">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Déjà un compte ?{" "}
            <a href={cta.login} className="font-bold text-emerald-dark hover:underline">
              Se connecter
            </a>
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-line bg-white p-7 shadow-[0_24px_70px_rgba(11,21,36,0.08)] md:p-8"
        >
          <h2 className="text-2xl font-extrabold text-ink">Commencer maintenant</h2>
          <div className="mt-6 space-y-3">
            <input className={field} name="company" placeholder="Entreprise *" required />
            <input className={field} name="name" placeholder="Votre nom *" required />
            <input
              className={field}
              name="email"
              type="email"
              placeholder="Email professionnel *"
              required
            />
            <input className={field} name="phone" type="tel" placeholder="Téléphone (optionnel)" />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald py-4 font-display text-sm font-extrabold text-navy transition hover:bg-emerald-dark hover:text-white disabled:opacity-70"
            >
              {loading ? "Ouverture de l’app…" : "Créer mon essai et ouvrir l’app"}
            </button>
          </div>
          {error ? (
            <p className="mt-3 text-sm font-semibold text-amber-700">
              Lead non enregistré, redirection vers l’inscription en cours…
            </p>
          ) : null}
          <p className="mt-4 text-xs leading-relaxed text-muted">
            En créant votre essai, vous acceptez d’être recontacté pour l’activation définitive de
            votre espace. Aucune carte bancaire n’est demandée.
          </p>
          <p className="mt-3 text-center text-xs text-muted">
            Ou{" "}
            <a href={cta.trialApp} className="font-bold text-emerald-dark hover:underline">
              ouvrir directement l’inscription
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
