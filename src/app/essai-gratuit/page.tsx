"use client";

import { useState } from "react";
import { cta, trialAppUrl } from "@/lib/cta";
import { track } from "@/lib/tracking";
import { TrustStrip } from "@/components/conversion/TrustStrip";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";

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
      setError(true);
    }

    sessionStorage.setItem(
      "progesti_trial",
      JSON.stringify({ name, email, company, createdAt: Date.now() }),
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
    "w-full rounded-xl border border-blue-mist bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-blue-royal focus:ring-4 focus:ring-blue-royal/15";

  return (
    <>
      <section className="bg-blue-deep py-12 text-white md:py-16">
        <div className="container max-w-5xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-green-action">
            Essai gratuit · 2 mois
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Activez PROGESTI — sans carte bancaire
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Bureaux, syndics, locaux pros ou fin de chantier : créez votre compte et entrez dans
            l’application en quelques minutes.
          </p>
        </div>
      </section>

      <TrustStrip />

      <section className="section bg-warm-light">
        <div className="container grid max-w-5xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-blue-deep">Ce que vous obtenez</h2>
            <ul className="mt-6 space-y-3 text-slate">
              {[
                "Sans carte bancaire — 2 mois complets",
                "Tous les modules ouverts (planning, pointage, facture…)",
                "Données de démo pour démarrer vite",
                "Mise en place offerte · Résiliable à tout moment",
              ].map((item) => (
                <li key={item} className="flex gap-3 font-medium">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-action/15 text-green-deep">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.demo}
                variant="secondary"
                eventPayload={{ cta: "v3_essai_demo_alt" }}
              >
                Préférer une démo
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost" eventPayload={{ cta: "v3_essai_contact" }}>
                Nous contacter
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm text-slate">
              Déjà un compte ?{" "}
              <a href={cta.login} className="font-bold text-blue-royal hover:underline">
                Se connecter
              </a>
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-blue-mist bg-white p-7 shadow-[0_24px_70px_rgba(11,61,110,0.1)] md:p-8"
          >
            <h2 className="text-2xl font-extrabold text-blue-deep">Commencer maintenant</h2>
            <p className="mt-1 text-sm text-slate">4 champs — accès immédiat à l’app.</p>
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
              <input
                className={field}
                name="phone"
                type="tel"
                placeholder="Téléphone *"
                required
                autoComplete="tel"
                inputMode="tel"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-green-action py-4 font-display text-sm font-extrabold text-white transition hover:bg-green-deep disabled:opacity-70"
              >
                {loading ? "Ouverture de l’app…" : "Créer mon essai et ouvrir l’app"}
              </button>
            </div>
            {error ? (
              <p className="mt-3 text-sm font-semibold text-amber-700">
                Lead non enregistré, redirection vers l’inscription en cours…
              </p>
            ) : null}
            <p className="mt-4 text-xs leading-relaxed text-slate">
              En créant votre essai, vous acceptez d’être recontacté pour l’activation. Aucune carte
              bancaire n’est demandée.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
