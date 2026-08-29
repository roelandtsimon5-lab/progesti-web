"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { cta, ctaLabels, trialAppUrl } from "@/lib/cta";
import { track } from "@/lib/tracking";
import { site } from "@/lib/site";
import { ClientLogoStrip } from "@/components/conversion/ClientLogoStrip";
import { TrustStrip } from "@/components/conversion/TrustStrip";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function EssaiGratuitPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const [showOptional, setShowOptional] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setErrorMessage("");
    setInvalidFields(new Set());
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (String(data.website || "").trim()) {
      setLoading(false);
      return;
    }

    const invalid = new Set<string>();
    const email = String(data.email || "").trim();
    const company = String(data.company || "").trim();
    if (!company) invalid.add("company");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) invalid.add("email");

    if (invalid.size > 0) {
      setInvalidFields(invalid);
      setError(true);
      setLoading(false);
      return;
    }

    const name = String(data.name || "").trim() || company;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "trial",
          email,
          company,
          name,
          phone: String(data.phone || "").trim() || undefined,
        }),
      });
      if (!res.ok) throw new Error("lead_failed");
    } catch {
      setError(true);
      setErrorMessage("");
      setLoading(false);
      return;
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
    "w-full rounded-[2px] border border-blue-mist bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-brand-navy focus:ring-4 focus:ring-lime-cta/25";

  function clearInvalid(key: string) {
    if (invalidFields.has(key)) {
      setInvalidFields((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
      if (invalidFields.size <= 1) setError(false);
    }
  }

  return (
    <>
      <section className="industry-hero-bg relative overflow-hidden">
        <div className="container relative max-w-5xl py-12 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">
            Essai gratuit · {site.trialDays} jours
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Activez PROGESTI — sans carte bancaire
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Bureaux, syndics, locaux pros ou fin de chantier : créez votre compte et entrez dans
            l&apos;application en quelques minutes.
          </p>
        </div>
        <div className="industry-hero-wave" aria-hidden />
      </section>

      <TrustStrip />

      <section className="section bg-warm-light pb-28 lg:pb-16">
        <div className="container grid max-w-5xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-brand-navy">Ce que vous obtenez</h2>
            <ul className="mt-6 space-y-3 text-slate">
              {[
                `${site.trialDays} jours gratuits sans engagement`,
                "Tous les modules ouverts (planning, pointage, facture…)",
                "Données de démo pour démarrer vite",
                "149 € HT/mois · Mise en place offerte",
              ].map((item) => (
                <li key={item} className="flex gap-3 font-medium">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[2px] bg-lime-cta/20 text-brand-navy">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={cta.demo} variant="secondary" className="!rounded-[2px]" eventPayload={{ cta: "v3_essai_demo_alt" }}>
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
            id="trial-form"
            onSubmit={onSubmit}
            noValidate
            className="rounded-[2px] border border-line bg-white p-7 shadow-[0_24px_70px_rgba(1,41,57,0.1)] md:p-8"
            aria-busy={loading}
            aria-describedby={error ? "trial-form-error" : undefined}
          >
            <h2 className="text-2xl font-extrabold text-brand-navy">Commencer maintenant</h2>
            <p className="mt-1 text-sm text-slate">E-mail + entreprise — accès immédiat à l&apos;app.</p>
            <div className="mt-6 space-y-3">
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
                <label htmlFor="trial-website">Site web</label>
                <input id="trial-website" tabIndex={-1} autoComplete="off" name="website" />
              </div>
              <div>
                <label htmlFor="trial-email" className="mb-1.5 block text-sm font-bold text-blue-deep">
                  Email professionnel *
                </label>
                <input
                  ref={emailRef}
                  id="trial-email"
                  className={field}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="vous@entreprise.fr"
                  aria-invalid={invalidFields.has("email") ? true : undefined}
                  onChange={() => clearInvalid("email")}
                />
              </div>
              <div>
                <label htmlFor="trial-company" className="mb-1.5 block text-sm font-bold text-blue-deep">
                  Entreprise *
                </label>
                <input
                  id="trial-company"
                  className={field}
                  name="company"
                  required
                  autoComplete="organization"
                  placeholder="Société de nettoyage"
                  aria-invalid={invalidFields.has("company") ? true : undefined}
                  onChange={() => clearInvalid("company")}
                />
              </div>

              {!showOptional ? (
                <button
                  type="button"
                  onClick={() => setShowOptional(true)}
                  className="text-xs font-semibold text-blue-royal underline-offset-2 hover:underline"
                >
                  + Nom ou téléphone (optionnel)
                </button>
              ) : (
                <div className="space-y-3 rounded-[2px] border border-blue-mist/80 bg-paper p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-navy/80">
                    Optionnel — pour vous accompagner
                  </p>
                  <div>
                    <label htmlFor="trial-name" className="mb-1.5 block text-sm font-bold text-blue-deep">
                      Votre nom
                    </label>
                    <input
                      id="trial-name"
                      className={field}
                      name="name"
                      autoComplete="name"
                      placeholder="Prénom Nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="trial-phone" className="mb-1.5 block text-sm font-bold text-blue-deep">
                      Téléphone
                    </label>
                    <input
                      id="trial-phone"
                      className={field}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="flex w-full items-center justify-center gap-2 rounded-[2px] bg-lime-cta py-4 font-display text-sm font-extrabold text-brand-navy transition hover:bg-lime-cta-hover disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span
                      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-blue-deep/30 border-t-blue-deep motion-reduce:animate-none"
                      aria-hidden
                    />
                    Ouverture de l&apos;app…
                  </>
                ) : (
                  "Créer mon essai et ouvrir l'app"
                )}
              </button>
            </div>
            {error ? (
              <p id="trial-form-error" className="mt-3 text-sm font-semibold text-danger" role="alert">
                {invalidFields.size > 0
                  ? "Vérifiez les champs en rouge."
                  : errorMessage || (
                    <>
                      Envoi impossible. Réessayez ou appelez le{" "}
                      <a href={`tel:${site.phoneTel}`} className="underline">
                        {site.phone}
                      </a>
                      .
                    </>
                  )}
              </p>
            ) : null}
            <p className="mt-4 text-xs leading-relaxed text-slate">
              En créant votre essai, vous acceptez d&apos;être recontacté pour l&apos;activation. Aucune carte
              bancaire n&apos;est demandée.
            </p>
          </form>
        </div>
      </section>
      <ClientLogoStrip />
      <MobileCtaBar
        primary={{
          href: "#trial-form",
          label: ctaLabels.trialShort,
          variant: "trial",
          anchor: true,
          className:
            "flex flex-1 items-center justify-center rounded-[2px] bg-lime-cta py-3.5 font-display text-sm font-bold text-blue-deep transition hover:bg-lime-cta-hover",
        }}
        secondary={{
          href: cta.demo,
          label: "Démo",
          variant: "outline-white",
          eventPayload: { cta: "essai_mobile_demo" },
        }}
      />
    </>
  );
}
