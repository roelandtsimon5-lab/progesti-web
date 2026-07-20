"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { track } from "@/lib/tracking";

type Props = {
  campaign: string;
  submitLabel: string;
  /** Where to send the visitor after a successful lead capture */
  nextHref?: "/demo/live" | "/essai-gratuit";
};

function formatFrPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 10);
  const parts = [];
  for (let i = 0; i < d.length; i += 2) parts.push(d.slice(i, i + 2));
  return parts.join(" ");
}

export function AdsV2LeadForm({
  campaign,
  submitLabel,
  nextHref = "/demo/live",
}: Props) {
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
    const email = String(data.email || "").trim();
    const company = String(data.company || "").trim();
    const companySize = String(data.companySize || "");
    const website = String(data.website || "");

    if (website) {
      setLoading(false);
      return;
    }
    if (name.length < 2) {
      setError("Indiquez votre prénom ou nom.");
      setLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Indiquez un email professionnel valide.");
      setLoading(false);
      return;
    }
    if (phone.replace(/\D/g, "").length < 8) {
      setError("Indiquez un numéro de téléphone valide.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "ads_v2",
          campaign,
          name,
          email,
          phone,
          company: company || "Lead Google Ads v2",
          companySize: companySize || undefined,
        }),
      });
      if (!res.ok) throw new Error("fail");

      sessionStorage.setItem(
        "progesti_demo",
        JSON.stringify({ name, phone, email, campaign, createdAt: Date.now() }),
      );
      track("form_submit", { intent: "ads_v2", campaign });
      if (nextHref === "/demo/live") {
        track("demo_view", { source: "ads_v2", campaign });
      } else {
        track("trial_start", { source: "ads_v2", campaign });
      }
      router.push(nextHref);
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
        <label htmlFor={`v2-name-${campaign}`} className="mb-1.5 block text-sm font-bold text-[#111827]">
          Prénom / Nom *
        </label>
        <input
          id={`v2-name-${campaign}`}
          name="name"
          required
          autoComplete="name"
          placeholder="Ex. Simon Dupont"
          className={field}
        />
      </div>
      <div>
        <label htmlFor={`v2-email-${campaign}`} className="mb-1.5 block text-sm font-bold text-[#111827]">
          Email professionnel *
        </label>
        <input
          id={`v2-email-${campaign}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="vous@entreprise.fr"
          className={field}
        />
      </div>
      <div>
        <label htmlFor={`v2-phone-${campaign}`} className="mb-1.5 block text-sm font-bold text-[#111827]">
          Téléphone *
        </label>
        <input
          id={`v2-phone-${campaign}`}
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
      <div>
        <label htmlFor={`v2-size-${campaign}`} className="mb-1.5 block text-sm font-bold text-[#111827]">
          Taille de l’équipe
        </label>
        <select id={`v2-size-${campaign}`} name="companySize" defaultValue="" className={field}>
          <option value="" disabled>
            Sélectionner…
          </option>
          <option>Seul / AE</option>
          <option>2–5 agents</option>
          <option>6–15 agents</option>
          <option>16+ agents</option>
        </select>
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
        {loading ? "Ouverture…" : submitLabel}
      </button>
      <p className="text-center text-xs font-medium leading-relaxed text-[#6B7280]">
        Sans carte bancaire · Pas d’engagement · Réponse sous 24h si besoin d’aide
      </p>
      <p className="text-center text-sm font-semibold text-[#111827]">
        Ou appelez{" "}
        <a
          href={`tel:${site.phoneTel}`}
          className="text-[#067647] underline underline-offset-2 hover:text-[#111827]"
          onClick={() => track("cta_click", { cta: "v2_phone", campaign })}
        >
          {site.phone}
        </a>
      </p>
    </form>
  );
}
