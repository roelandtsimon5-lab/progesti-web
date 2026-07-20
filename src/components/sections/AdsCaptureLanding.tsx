"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/tracking";

type Props = {
  campaign: string;
  headline: string;
  subhead: string;
  bullets?: string[];
  ctaLabel?: string;
};

function formatFrPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 10);
  const parts = [];
  for (let i = 0; i < d.length; i += 2) parts.push(d.slice(i, i + 2));
  return parts.join(" ");
}

export function AdsCaptureLanding({
  campaign,
  headline,
  subhead,
  bullets,
  ctaLabel = "Voir la plateforme →",
}: Props) {
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

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

    try {
      const digits = phone.replace(/\D/g, "");
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "ads_quick",
          campaign,
          name,
          phone,
          email: `${digits}@lead.progesti.fr`,
          company: "Lead Google Ads",
        }),
      });
      if (!res.ok) throw new Error("fail");

      sessionStorage.setItem(
        "progesti_demo",
        JSON.stringify({ name, phone, email: "", campaign, createdAt: Date.now() }),
      );
      track("form_submit", { intent: "ads_quick", campaign });
      track("demo_view", { source: "ads_capture", campaign });
      router.push("/demo/live");
    } catch {
      setError("Une erreur est survenue. Réessayez.");
      setLoading(false);
    }
  }

  return (
    <div className="ads-lp min-h-screen bg-[#F5F8FB] text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-20 pt-7 sm:px-8 sm:pt-10 md:px-12 md:pb-24 md:pt-14">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-opt.webp" alt="" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-xl font-extrabold tracking-tight text-blue-deep">
              PROGESTI
            </span>
          </div>
          <p className="rounded-full border border-green-action/25 bg-green-action/10 px-3.5 py-2 text-xs font-bold text-green-deep sm:text-sm">
            Essai 2 mois · Sans CB
          </p>
        </header>

        <div className="grid flex-1 items-start gap-12 pt-12 sm:gap-14 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:pt-16">
          <div className="order-2 space-y-8 lg:order-1 lg:space-y-10">
            <div className="space-y-5">
              <h1 className="max-w-xl text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-blue-deep sm:text-[2.35rem] md:text-[2.75rem]">
                {headline}
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-slate sm:text-lg">{subhead}</p>
            </div>

            {bullets?.length ? (
              <ul className="space-y-3.5">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[0.95rem] font-semibold leading-snug text-blue-deep sm:text-base"
                  >
                    <span className="mt-0.5 shrink-0 text-green-deep" aria-hidden>
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="overflow-hidden rounded-2xl border border-blue-mist bg-white shadow-[0_16px_50px_rgba(11,61,110,0.1)]">
              <div className="flex items-center gap-2 border-b border-blue-mist bg-[#F5F8FB] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-mist" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-mist" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-mist" />
                <span className="ml-2 text-xs font-semibold text-slate">Aperçu plateforme</span>
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

          <div className="order-1 lg:order-2 lg:sticky lg:top-10">
            <div className="rounded-2xl border border-blue-mist bg-white p-7 shadow-[0_20px_60px_rgba(11,61,110,0.12)] sm:p-9 md:p-10">
              <div className="mb-3 h-1.5 w-14 rounded-full bg-green-action" />
              <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-green-deep">
                Accès immédiat
              </p>
              <h2 className="mt-3 text-[1.65rem] font-extrabold leading-tight text-blue-deep sm:text-3xl">
                Voir la plateforme
              </h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate sm:text-[0.95rem]">
                Prénom + téléphone → accès direct. Dès 29,99 € HT/mois après l’essai.
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden
                />
                <div>
                  <label
                    htmlFor={`ads-name-${campaign}`}
                    className="mb-2 block text-sm font-bold text-blue-deep"
                  >
                    Prénom *
                  </label>
                  <input
                    ref={nameRef}
                    id={`ads-name-${campaign}`}
                    name="name"
                    required
                    autoComplete="given-name"
                    placeholder="Ex. Simon"
                    className="min-h-14 w-full rounded-xl border-2 border-blue-mist bg-white px-4 text-base font-semibold text-ink outline-none placeholder:text-muted focus:border-blue-royal focus:ring-4 focus:ring-blue-royal/15"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`ads-phone-${campaign}`}
                    className="mb-2 block text-sm font-bold text-blue-deep"
                  >
                    Téléphone *
                  </label>
                  <input
                    id={`ads-phone-${campaign}`}
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(formatFrPhone(e.target.value))}
                    placeholder="06 12 34 56 78"
                    className="min-h-14 w-full rounded-xl border-2 border-blue-mist bg-white px-4 text-base font-semibold text-ink outline-none placeholder:text-muted focus:border-blue-royal focus:ring-4 focus:ring-blue-royal/15"
                  />
                </div>
                {error ? (
                  <p className="text-sm font-bold text-danger" role="alert">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-h-14 w-full items-center justify-center rounded-xl bg-green-action font-display text-base font-extrabold text-white transition hover:bg-green-deep disabled:opacity-70"
                >
                  {loading ? "Ouverture…" : ctaLabel}
                </button>
              </form>

              <p className="mt-6 text-center text-xs font-medium leading-relaxed text-slate sm:text-[0.8rem]">
                Sans carte bancaire · Pas d’engagement · On peut vous rappeler
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
