"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { cta, ctaLabels, demoAppUrl } from "@/lib/cta";
import { HeroSocialProof } from "@/components/conversion/TestimonialsSection";
import { modules, site } from "@/lib/site";
import { track } from "@/lib/tracking";

const benefits = [
  {
    title: "Planning métier",
    text: "Sites, fréquences, agents et backups — lisible en un coup d’œil.",
  },
  {
    title: "Pointage terrain",
    text: "Mobile Android & iOS, bons d’intervention, preuves centralisées.",
  },
  {
    title: "Facturation liée",
    text: "Du réalisé à la facture sans ressaisie Excel.",
  },
];

export default function DemoPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  function clearInvalid(key: string) {
    if (invalidFields.has(key)) {
      setInvalidFields((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setInvalidFields(new Set());
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (String(data.website || "").trim()) {
      setLoading(false);
      return;
    }

    const firstName = String(data.firstName || "").trim();
    const company = String(data.company || "").trim();
    const email = String(data.email || "").trim();
    const phoneRaw = String(data.phone || "").trim();
    const phoneDigits = phoneRaw.replace(/\D/g, "");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Indiquez une adresse e-mail professionnelle valide.");
      setInvalidFields(new Set(["email"]));
      setLoading(false);
      return;
    }

    if (!company) {
      setError("Indiquez le nom de votre entreprise.");
      setInvalidFields(new Set(["company"]));
      setLoading(false);
      return;
    }

    if (!firstName || firstName.length < 2) {
      setError("Indiquez votre prénom.");
      setInvalidFields(new Set(["firstName"]));
      setLoading(false);
      return;
    }

    if (phoneDigits.length < 8) {
      setError("Indiquez un numéro de téléphone valide.");
      setInvalidFields(new Set(["phone"]));
      setLoading(false);
      return;
    }

    const name = firstName;
    const phone = phoneRaw;

    const redirectUrl = demoAppUrl({
      company,
      name,
      email,
      phone,
      source: "demo",
    });

    // Lead en best-effort : ne bloque pas l'ouverture de la démo (sauf rate limit).
    const controller = new AbortController();
    const leadTimeout = window.setTimeout(() => controller.abort(), 4000);
    let leadTimedOut = false;
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "demo",
          name,
          email,
          phone,
          company,
        }),
        signal: controller.signal,
      });
      if (res.status === 429) {
        setError("Trop de tentatives. Réessayez dans une minute.");
        setLoading(false);
        return;
      }
    } catch (fetchErr) {
      leadTimedOut =
        fetchErr instanceof DOMException && fetchErr.name === "AbortError";
    } finally {
      window.clearTimeout(leadTimeout);
    }

    sessionStorage.setItem(
      "progesti_demo",
      JSON.stringify({ name, email, phone, company, createdAt: Date.now() }),
    );
    track("form_submit", {
      intent: "demo",
      source: "demo_page_hero",
      ...(leadTimedOut ? { lead_timeout: true } : {}),
    });
    track("demo_view", { source: "demo_gate" });
    track("signup_start", { source: "demo_gate" });
    window.location.href = redirectUrl;
  }

  const field =
    "w-full rounded-[2px] border border-blue-mist bg-white px-4 py-3.5 text-sm font-medium text-ink outline-none transition placeholder:text-muted/80 focus:border-brand-navy focus:ring-4 focus:ring-lime-cta/25";

  return (
    <>
      {/* Hero conversion — form above the fold (mobile first) */}
      <section className="industry-hero-bg relative overflow-hidden">
        <div className="container relative grid items-start gap-10 pb-28 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pb-20 lg:pt-14">
          {/* Formulaire — order 1 mobile */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <form
              id="demo-form"
              onSubmit={onSubmit}
              className="rounded-[2px] border border-white/10 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:p-8"
              noValidate
              aria-busy={loading}
              aria-describedby={error ? "demo-form-error" : undefined}
            >
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-lime-cta">
                Démonstration
              </p>
              <p className="mt-2 text-2xl font-extrabold text-brand-navy">
                {ctaLabels.demoEnter}
              </p>
              <p className="mt-2 text-sm text-slate">
                E-mail, entreprise, prénom et téléphone — accès immédiat à la vraie application
                PROGESTI.
              </p>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
                aria-hidden
              />

              <div className="mt-6 space-y-3">
                <div>
                  <label htmlFor="demo-email" className="mb-1.5 block text-sm font-bold text-blue-deep">
                    Email professionnel *
                  </label>
                  <input
                    ref={emailRef}
                    id="demo-email"
                    className={field}
                    name="email"
                    type="email"
                    placeholder="vous@entreprise.fr"
                    required
                    autoComplete="email"
                    aria-invalid={invalidFields.has("email") ? true : undefined}
                    onChange={() => clearInvalid("email")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="demo-company"
                    className="mb-1.5 block text-sm font-bold text-blue-deep"
                  >
                    Nom de l&apos;entreprise *
                  </label>
                  <input
                    id="demo-company"
                    className={field}
                    name="company"
                    placeholder="Société de nettoyage"
                    required
                    autoComplete="organization"
                    aria-invalid={invalidFields.has("company") ? true : undefined}
                    onChange={() => clearInvalid("company")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="demo-firstname"
                    className="mb-1.5 block text-sm font-bold text-blue-deep"
                  >
                    Prénom *
                  </label>
                  <input
                    id="demo-firstname"
                    className={field}
                    name="firstName"
                    placeholder="Prénom"
                    required
                    autoComplete="given-name"
                    aria-invalid={invalidFields.has("firstName") ? true : undefined}
                    onChange={() => clearInvalid("firstName")}
                  />
                </div>
                <div>
                  <label htmlFor="demo-phone" className="mb-1.5 block text-sm font-bold text-blue-deep">
                    Téléphone *
                  </label>
                  <input
                    id="demo-phone"
                    className={field}
                    name="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={invalidFields.has("phone") ? true : undefined}
                    onChange={() => clearInvalid("phone")}
                  />
                </div>

                {error ? (
                  <p id="demo-form-error" className="text-sm font-semibold text-danger" role="alert">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-[2px] bg-lime-cta py-4 font-display text-base font-extrabold text-brand-navy shadow-[0_10px_28px_rgba(168,227,0,0.28)] transition hover:bg-lime-cta-hover disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span
                        className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-brand-navy/30 border-t-brand-navy motion-reduce:animate-none"
                        aria-hidden
                      />
                      Ouverture de l&apos;application…
                    </>
                  ) : (
                    ctaLabels.demoEnter
                  )}
                </button>
              </div>

              <ul className="mt-5 space-y-1.5 text-xs font-medium text-slate">
                <li>✓ Aucune carte bancaire</li>
                <li>✓ Aucun rendez-vous obligatoire</li>
                <li>✓ Accès à la vraie application</li>
              </ul>

              <p className="mt-4 text-center text-xs text-slate">
                Vous préférez tester directement ?{" "}
                <Link
                  href={cta.trial}
                  className="font-bold text-blue-royal underline-offset-2 hover:underline"
                  onClick={() => track("cta_click", { cta: "v3_demo_hero_trial_link" })}
                >
                  Essai {site.trialDays} jours gratuit
                </Link>
              </p>
            </form>
          </div>

          {/* Copy — order 2 mobile */}
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">
              Démonstration interactive
            </p>
            <h1 className="font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-white md:text-[3rem]">
              Voyez PROGESTI sur un cas métier réel
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
              Bureaux, syndics, locaux pros ou fin de chantier — ouvrez la vraie application PROGESTI
              pour explorer planning, pointage et facturation.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Accès immédiat après le formulaire",
                "Vraie application — pas une maquette",
                "Données démo préchargées · sans rendez-vous",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-white">
                  <span className="text-lime-cta" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <HeroSocialProof />

            <p className="mt-4 text-sm text-white/60 lg:hidden">
              <a href="#demo-form" className="font-bold text-white underline-offset-2 hover:underline">
                ↑ Remplir le formulaire
              </a>
            </p>
          </div>
        </div>
        <div className="industry-hero-wave" aria-hidden />
      </section>

      {/* Proof */}
      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
            {[
              ["30 s", "pour entrer dans la démo"],
              ["0 €", "carte bancaire"],
              [String(modules.length), "modules visibles"],
              ["24 h", "si vous voulez un échange"],
            ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-2xl font-extrabold text-blue-deep">{v}</p>
              <p className="mt-1 text-sm font-medium text-slate">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bénéfices courts */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="max-w-xl text-3xl font-extrabold text-blue-deep">
            Ce que vous voyez dans la démo
          </h2>
          <p className="lead mt-4">
            Une vue concrète du logiciel — pas une vidéo commerciale.
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <li
                key={b.title}
                className="rounded-[2px] border border-line bg-paper p-6"
              >
                <h3 className="font-display text-lg font-bold text-brand-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{b.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a
              href="#demo-form"
              className="inline-flex min-h-12 items-center justify-center rounded-[2px] bg-lime-cta px-7 py-3.5 font-display text-base font-bold text-brand-navy shadow-[0_10px_28px_rgba(168,227,0,0.28)] transition hover:bg-lime-cta-hover"
            >
              Remplir le formulaire →
            </a>
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section className="section bg-paper">
        <div className="container grid max-w-4xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Sans friction</p>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-navy">
              Conçu pour décider vite
            </h2>
            <p className="mt-4 text-slate">
              Pas de rendez-vous obligatoire. Vous explorez librement, puis vous passez à l&apos;essai{" "}
              {site.trialDays} jours si le produit matche votre organisation.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Votre vrai espace — configuré avec vous si besoin",
              "Parcours bureaux / syndics / chantiers compréhensible",
              "Support FR si vous avez une question après la démo",
            ].map((t) => (
              <li
                key={t}
                className="flex gap-3 rounded-[2px] border border-line bg-white px-4 py-3 text-sm font-medium text-brand-navy"
              >
                <span className="text-lime-cta" aria-hidden>
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MobileCtaBar
        primary={{
          href: "#demo-form",
          label: ctaLabels.demoEnter,
          anchor: true,
        }}
        secondary={{
          href: cta.trial,
          label: `Essai ${site.trialDays} jours`,
          variant: "outline-white",
          event: "trial_start",
          eventPayload: { cta: "v3_demo_mobile_trial" },
        }}
      />
    </>
  );
}
