"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { trialAppUrl } from "@/lib/cta";
import { site } from "@/lib/site";
import { track } from "@/lib/tracking";

export type AdsKillerContent = {
  campaign: string;
  badge: string;
  formEyebrow: string;
  formTitle: string;
  formLead: string;
  ctaLabel: string;
  /** demo = /demo/live · trial = app essai */
  next: "demo" | "trial";
  headline: string;
  subhead: string;
  bullets: string[];
  monthStrip: string;
  pains: string[];
  before: string[];
  after: string[];
  productTitle: string;
  productSteps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  finalLine: string;
};

function formatFrPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 10);
  const parts = [];
  for (let i = 0; i < d.length; i += 2) parts.push(d.slice(i, i + 2));
  return parts.join(" ");
}

function KillerForm({
  c,
  nameRef,
}: {
  c: AdsKillerContent;
  nameRef: React.RefObject<HTMLInputElement | null>;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.name || "").trim();
    const website = String(data.website || "");

    if (website) {
      setLoading(false);
      return;
    }
    if (name.length < 2) {
      setError("Indiquez votre prénom.");
      setLoading(false);
      return;
    }
    if (phone.replace(/\D/g, "").length < 8) {
      setError("Indiquez un numéro valide.");
      setLoading(false);
      return;
    }

    const digits = phone.replace(/\D/g, "");
    const email = `${digits}@lead.progesti.fr`;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: c.next === "trial" ? "trial" : "ads_v4",
          campaign: c.campaign,
          name,
          phone,
          email,
          company: "Lead Google Ads V4",
        }),
      });
      if (!res.ok) throw new Error("fail");

      track("form_submit", { intent: "ads_v4", campaign: c.campaign });

      if (c.next === "trial") {
        sessionStorage.setItem(
          "progesti_trial",
          JSON.stringify({ name, email, phone, campaign: c.campaign, createdAt: Date.now() }),
        );
        track("trial_start", { source: "ads_v4", campaign: c.campaign });
        track("signup_start", { source: "ads_v4", campaign: c.campaign });
        window.location.href = trialAppUrl({
          name,
          email,
          source: `ads:${c.campaign}`,
        });
        return;
      }

      sessionStorage.setItem(
        "progesti_demo",
        JSON.stringify({ name, phone, email: "", campaign: c.campaign, createdAt: Date.now() }),
      );
      track("demo_view", { source: "ads_v4", campaign: c.campaign });
      router.push("/demo/live");
    } catch {
      setError("Une erreur est survenue. Réessayez.");
      setLoading(false);
    }
  }

  const field =
    "min-h-14 w-full rounded-xl border-2 border-[#D1D5DB] bg-white px-4 text-base font-semibold text-[#0F2438] outline-none placeholder:text-[#9CA3AF] focus:border-[#1FA86B] focus:ring-4 focus:ring-[#1FA86B]/25";

  return (
    <div
      id="acces"
      className="scroll-mt-4 rounded-3xl border border-[#B8CFE4] bg-white p-6 shadow-[0_20px_60px_rgba(11,61,110,0.12)] sm:p-8"
    >
      <div className="mb-3 h-1.5 w-14 rounded-full bg-[#1FA86B]" />
      <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#157A4E]">
        {c.formEyebrow}
      </p>
      <h2 className="mt-2 text-[1.55rem] font-extrabold leading-tight text-[#0B3D6E] sm:text-[1.75rem]">
        {c.formTitle}
      </h2>
      <p className="mt-2 text-sm font-medium text-[#4A6178]">{c.formLead}</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden
        />
        <div>
          <label htmlFor={`v4-name-${c.campaign}`} className="mb-1.5 block text-sm font-bold text-[#0F2438]">
            Prénom *
          </label>
          <input
            ref={nameRef}
            id={`v4-name-${c.campaign}`}
            name="name"
            required
            autoComplete="given-name"
            placeholder="Ex. Simon"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`v4-phone-${c.campaign}`} className="mb-1.5 block text-sm font-bold text-[#0F2438]">
            Téléphone *
          </label>
          <input
            id={`v4-phone-${c.campaign}`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(formatFrPhone(e.target.value))}
            placeholder="06 12 34 56 78"
            className={field}
          />
        </div>
        {error ? (
          <p className="text-sm font-bold text-[#C53D32]" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={loading}
          onClick={() => track("cta_click", { cta: "v4_hero_primary", campaign: c.campaign })}
          className="flex min-h-14 w-full items-center justify-center rounded-xl bg-[#1FA86B] font-display text-base font-extrabold text-white transition hover:bg-[#157A4E] disabled:opacity-70"
        >
          {loading ? "Ouverture…" : c.ctaLabel}
        </button>
      </form>

      <p className="mt-4 text-center text-xs font-medium leading-relaxed text-[#5A6876]">
        Sans carte bancaire · Pas d’engagement · Accès immédiat
      </p>
      <p className="mt-3 text-center text-sm font-semibold text-[#0B3D6E]">
        Ou appelez{" "}
        <a
          href={`tel:${site.phoneTel}`}
          className="text-[#157A4E] underline underline-offset-2 hover:text-[#0B3D6E]"
          onClick={() => track("cta_click", { cta: "v4_phone", campaign: c.campaign })}
        >
          {site.phone}
        </a>
      </p>
    </div>
  );
}

export function AdsKillerLanding(c: AdsKillerContent) {
  const nameRef = useRef<HTMLInputElement>(null);
  const formAnchorRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    const el = formAnchorRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="ads-lp min-h-screen bg-[#E8F2FA] text-[#0F2438]">
      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-6 sm:px-8 sm:pt-8">
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-opt.webp" alt="" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-xl font-extrabold tracking-tight text-[#0B3D6E]">
              PROGESTI
            </span>
          </div>
          <p className="rounded-full bg-[#1FA86B]/15 px-3.5 py-2 text-xs font-bold text-[#157A4E] sm:text-sm">
            {c.badge}
          </p>
        </header>

        {/* Hero: form first on mobile, split on desktop */}
        <div className="mt-8 grid items-start gap-10 lg:mt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="order-2 space-y-6 lg:order-1">
            <div>
              <p className="text-sm font-bold text-[#157A4E]">{c.monthStrip}</p>
              <h1 className="mt-3 max-w-xl text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-[#0B3D6E] sm:text-[2.4rem] md:text-[2.65rem]">
                {c.headline}
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#4A6178] sm:text-lg">
                {c.subhead}
              </p>
            </div>
            <ul className="space-y-2.5">
              {c.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm font-semibold text-[#0F2438] sm:text-base">
                  <span className="text-[#1FA86B]" aria-hidden>
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="hidden overflow-hidden rounded-2xl border border-[#B8CFE4] bg-white shadow-[0_16px_50px_rgba(11,61,110,0.1)] lg:block">
              <div className="flex items-center gap-2 border-b border-[#B8CFE4] bg-[#F5F8FB] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#B8CFE4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#B8CFE4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#B8CFE4]" />
                <span className="ml-2 text-xs font-semibold text-[#5A6876]">Aperçu PROGESTI</span>
              </div>
              <Image
                src="/dashboard-mockup-opt.webp"
                alt="Aperçu PROGESTI"
                width={900}
                height={640}
                priority
                className="w-full"
              />
            </div>
          </div>

          <div ref={formAnchorRef} className="order-1 lg:order-2 lg:sticky lg:top-6">
            <KillerForm c={c} nameRef={nameRef} />
          </div>
        </div>

        {/* Sous le fold — max 4 blocs */}
        <section className="mt-14 sm:mt-16">
          <h2 className="text-center text-xl font-extrabold text-[#0B3D6E] sm:text-2xl">
            Ce qui vous coûte cher chaque semaine
          </h2>
          <ul className="mt-6 space-y-3">
            {c.pains.map((p) => (
              <li
                key={p}
                className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm font-semibold text-[#7F1D1D]"
              >
                {p}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#B8CFE4] bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-[#5A6876]">Avant</p>
            <ul className="mt-3 space-y-2">
              {c.before.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-[#4A6178]">
                  <span className="text-[#C53D32]" aria-hidden>
                    ✕
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#1FA86B]/40 bg-[#1FA86B]/10 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-[#157A4E]">Avec PROGESTI</p>
            <ul className="mt-3 space-y-2">
              {c.after.map((a) => (
                <li key={a} className="flex gap-2 text-sm font-semibold text-[#157A4E]">
                  <span className="text-[#1FA86B]" aria-hidden>
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-extrabold text-[#0B3D6E] sm:text-2xl">{c.productTitle}</h2>
          <ol className="mt-6 space-y-4">
            {c.productSteps.map((s, i) => (
              <li key={s.title} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1FA86B] text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-[#0B3D6E]">{s.title}</p>
                  <p className="mt-0.5 text-sm text-[#4A6178]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#B8CFE4] bg-white lg:hidden">
            <Image
              src="/dashboard-mockup-opt.webp"
              alt="Aperçu PROGESTI"
              width={900}
              height={640}
              className="w-full"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-extrabold text-[#0B3D6E] sm:text-2xl">3 questions rapides</h2>
          <div className="mt-5 space-y-3">
            {c.faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-[#B8CFE4] bg-white open:border-[#1FA86B]/50"
              >
                <summary className="cursor-pointer list-none px-4 py-3.5 font-display text-sm font-bold text-[#0B3D6E] marker:content-none sm:text-base">
                  <span className="flex items-start justify-between gap-3">
                    {f.q}
                    <span className="text-[#1FA86B] transition group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-[#E2EAF2] px-4 py-3 text-sm text-[#4A6178]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-[#0B3D6E] p-6 text-center text-white sm:p-8">
          <p className="font-display text-xl font-extrabold sm:text-2xl">{c.finalLine}</p>
          <a
            href="#acces"
            onClick={() => track("cta_click", { cta: "v4_final", campaign: c.campaign })}
            className="mt-6 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-xl bg-[#1FA86B] px-6 font-display text-base font-extrabold text-white transition hover:bg-[#157A4E]"
          >
            {c.ctaLabel}
          </a>
        </section>
      </div>

      {showSticky ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#B8CFE4] bg-white/95 p-3 backdrop-blur lg:hidden">
          <a
            href="#acces"
            onClick={() => track("cta_click", { cta: "v4_sticky", campaign: c.campaign })}
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#1FA86B] font-display text-sm font-extrabold text-white"
          >
            {c.ctaLabel}
          </a>
        </div>
      ) : null}
    </div>
  );
}
