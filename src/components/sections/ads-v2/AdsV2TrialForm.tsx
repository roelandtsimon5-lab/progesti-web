"use client";

import { useState } from "react";
import { appUrl } from "@/lib/env";
import { track } from "@/lib/tracking";

type Props = {
  campaign: string;
  submitLabel?: string;
};

export function AdsV2TrialForm({
  campaign,
  submitLabel = "Créer mon essai et ouvrir l’app",
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const website = String(data.website || "");
    if (website) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent: "trial", campaign, ...data }),
      });
      if (!res.ok) throw new Error("fail");

      sessionStorage.setItem(
        "progesti_trial",
        JSON.stringify({
          name: String(data.name || ""),
          email: String(data.email || ""),
          company: String(data.company || ""),
          campaign,
          createdAt: Date.now(),
        }),
      );

      track("form_submit", { intent: "trial", campaign });
      track("signup_start", { source: "ads_v2_essai", campaign });
      track("trial_start", { source: "ads_v2_essai", campaign });

      window.location.href = appUrl("/creer-mon-espace");
    } catch {
      setError("Une erreur est survenue. Réessayez ou écrivez à contact@progesti.fr");
      setLoading(false);
    }
  }

  const field =
    "min-h-12 w-full rounded-xl border-2 border-[#D1D5DB] bg-white px-4 text-base font-semibold text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#12B76A] focus:ring-4 focus:ring-[#12B76A]/25";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <div>
        <label htmlFor={`trial-company-${campaign}`} className="mb-1.5 block text-sm font-bold text-[#111827]">
          Entreprise *
        </label>
        <input
          id={`trial-company-${campaign}`}
          name="company"
          required
          placeholder="Nom de votre société"
          className={field}
        />
      </div>
      <div>
        <label htmlFor={`trial-name-${campaign}`} className="mb-1.5 block text-sm font-bold text-[#111827]">
          Votre nom *
        </label>
        <input id={`trial-name-${campaign}`} name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor={`trial-email-${campaign}`} className="mb-1.5 block text-sm font-bold text-[#111827]">
          Email professionnel *
        </label>
        <input
          id={`trial-email-${campaign}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="vous@entreprise.fr"
          className={field}
        />
      </div>
      <div>
        <label htmlFor={`trial-phone-${campaign}`} className="mb-1.5 block text-sm font-bold text-[#111827]">
          Téléphone <span className="font-medium text-[#6B7280]">(optionnel)</span>
        </label>
        <input
          id={`trial-phone-${campaign}`}
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="06 12 34 56 78"
          className={field}
        />
      </div>
      {error ? (
        <p className="text-sm font-bold text-[#B42318]" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="flex min-h-14 w-full items-center justify-center rounded-xl bg-[#12B76A] font-display text-base font-extrabold text-[#0F1F33] transition hover:bg-[#0E9F5A] hover:text-white disabled:opacity-70"
      >
        {loading ? "Création du compte…" : submitLabel}
      </button>
      <p className="text-center text-xs font-medium leading-relaxed text-[#6B7280]">
        Sans carte bancaire · Tous modules · Accès immédiat à l’application
      </p>
    </form>
  );
}
