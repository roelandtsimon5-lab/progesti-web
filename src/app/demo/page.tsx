"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, demoAppUrl } from "@/lib/cta";
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
  const nameRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Sur mobile le formulaire est en premier : focus utile pour conversion
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches) {
      nameRef.current?.focus();
    }
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (String(data.website || "").trim()) {
      setLoading(false);
      return;
    }

    const firstName = String(data.firstName || "").trim();
    const lastName = String(data.lastName || "").trim();
    const name = [firstName, lastName].filter(Boolean).join(" ").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const company = String(data.company || "").trim();
    const phoneDigits = phone.replace(/\D/g, "");

    if (name.length < 2) {
      setError("Indiquez votre prénom et votre nom.");
      setLoading(false);
      return;
    }

    if (!company) {
      setError("Indiquez le nom de votre entreprise.");
      setLoading(false);
      return;
    }

    if (phoneDigits.length < 8) {
      setError("Indiquez un numéro de téléphone valide.");
      setLoading(false);
      return;
    }

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
      });
      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("Trop de tentatives. Réessayez dans une minute.");
        }
        throw new Error("Envoi impossible. Réessayez ou écrivez-nous à contact@progesti.fr");
      }

      sessionStorage.setItem(
        "progesti_demo",
        JSON.stringify({ name, email, phone: phone || null, company, createdAt: Date.now() }),
      );
      track("form_submit", { intent: "demo", source: "demo_page_hero" });
      track("demo_view", { source: "demo_gate" });
      track("signup_start", { source: "demo_gate" });
      window.location.href = demoAppUrl({
        company,
        name,
        email,
        phone: phone || undefined,
        source: "demo",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Envoi impossible. Réessayez.");
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-xl border-2 border-blue-mist bg-white px-4 py-3.5 text-sm font-medium text-ink outline-none transition placeholder:text-muted/80 focus:border-blue-royal focus:ring-4 focus:ring-blue-royal/15";

  return (
    <>
      {/* Hero conversion — form above the fold (mobile first) */}
      <section className="relative overflow-hidden bg-[#F5F8FB]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(31,168,107,0.12),transparent)]"
          aria-hidden
        />
        <div className="container relative grid items-start gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-14">
          {/* Formulaire — order 1 mobile */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <form
              id="demo-form"
              onSubmit={onSubmit}
              className="rounded-2xl border border-blue-mist bg-white p-6 shadow-[0_24px_70px_rgba(11,61,110,0.12)] md:p-8"
              noValidate
            >
              <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-green-deep">
                Démonstration
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-blue-deep">
                Demander une démonstration
              </h2>
              <p className="mt-2 text-sm text-slate">
                Quelques informations — puis accès à la vraie application PROGESTI.
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
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="demo-firstname"
                      className="mb-1.5 block text-sm font-bold text-blue-deep"
                    >
                      Prénom *
                    </label>
                    <input
                      ref={nameRef}
                      id="demo-firstname"
                      className={field}
                      name="firstName"
                      placeholder="Prénom"
                      required
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="demo-lastname"
                      className="mb-1.5 block text-sm font-bold text-blue-deep"
                    >
                      Nom *
                    </label>
                    <input
                      id="demo-lastname"
                      className={field}
                      name="lastName"
                      placeholder="Nom"
                      required
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="demo-email" className="mb-1.5 block text-sm font-bold text-blue-deep">
                    Email professionnel *
                  </label>
                  <input
                    id="demo-email"
                    className={field}
                    name="email"
                    type="email"
                    placeholder="vous@entreprise.fr"
                    required
                    autoComplete="email"
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
                  />
                </div>
                <div>
                  <label
                    htmlFor="demo-company"
                    className="mb-1.5 block text-sm font-bold text-blue-deep"
                  >
                    Nom de l’entreprise *
                  </label>
                  <input
                    id="demo-company"
                    className={field}
                    name="company"
                    placeholder="Société de nettoyage"
                    required
                    autoComplete="organization"
                  />
                </div>

                {error ? (
                  <p className="text-sm font-semibold text-danger" role="alert">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-green-action py-4 font-display text-base font-extrabold text-white shadow-[0_10px_28px_rgba(31,168,107,0.35)] transition hover:bg-green-deep disabled:opacity-70"
                >
                  {loading ? "Ouverture de l’application…" : "Demander une démonstration"}
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
                  href={cta.trialApp}
                  className="font-bold text-blue-royal underline-offset-2 hover:underline"
                  onClick={() => track("cta_click", { cta: "v3_demo_hero_trial_link" })}
                >
                  Créer un compte
                </Link>
              </p>
            </form>
          </div>

          {/* Copy — order 2 mobile */}
          <div className="order-2 lg:order-1">
            <p className="inline-flex rounded-full border border-green-action/25 bg-green-action/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-deep">
              Démonstration interactive
            </p>
            <h1 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-blue-deep md:text-[3rem]">
              Voyez PROGESTI sur un cas métier réel
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate">
              Bureaux, syndics, locaux pros ou fin de chantier — ouvrez la vraie application PROGESTI
              pour explorer planning, pointage et facturation.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Accès immédiat après le formulaire",
                "Vraie application — pas une maquette",
                "Essai 7 jours gratuit",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-blue-deep">
                  <span className="text-green-deep" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-blue-mist bg-white shadow-[0_16px_48px_rgba(11,61,110,0.1)]">
              <Image
                src="/dashboard-mockup-opt.webp"
                alt="Aperçu du cockpit PROGESTI — planning nettoyage"
                width={720}
                height={432}
                priority
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>

            <p className="mt-4 text-sm text-slate lg:hidden">
              <a href="#demo-form" className="font-bold text-blue-royal underline-offset-2 hover:underline">
                ↑ Remplir le formulaire
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            ["30 s", "pour entrer dans la démo"],
            ["0 €", "carte bancaire"],
            ["11", "modules visibles"],
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
                className="rounded-xl border border-blue-mist bg-[#F5F8FB] p-6"
              >
                <h3 className="font-display text-lg font-bold text-blue-deep">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{b.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a
              href="#demo-form"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green-action px-7 py-3.5 font-display text-base font-bold text-white shadow-[0_10px_28px_rgba(31,168,107,0.35)] transition hover:bg-green-deep"
            >
              Remplir le formulaire →
            </a>
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section className="section bg-[#F5F8FB]">
        <div className="container grid max-w-4xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Sans friction</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep">
              Conçu pour décider vite
            </h2>
            <p className="mt-4 text-slate">
              Pas de rendez-vous obligatoire. Vous explorez librement, puis vous passez à l’essai 2
              mois si le produit matche votre organisation.
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
                className="flex gap-3 rounded-xl border border-blue-mist bg-white px-4 py-3 text-sm font-medium text-blue-deep"
              >
                <span className="text-green-deep" aria-hidden>
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConversionBlock variant="demo" />

      <div className="h-20 lg:hidden" aria-hidden />
      <div className="mobile-cta lg:hidden">
        <a
          href="#demo-form"
          className="flex flex-1 items-center justify-center rounded-lg bg-green-action py-3.5 font-display text-sm font-bold text-white"
        >
          Demander la démo
        </a>
        <ButtonLink
          href={cta.trialApp}
          variant="outline-white"
          className="flex-1 !py-3.5"
          event="trial_start"
          eventPayload={{ cta: "v3_demo_mobile_trial" }}
        >
          Essai 7 jours
        </ButtonLink>
      </div>
    </>
  );
}
