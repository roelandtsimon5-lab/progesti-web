"use client";

import { useState } from "react";
import { track } from "@/lib/tracking";

type Props = {
  intent: "contact" | "demo" | "callback" | "switch" | "onboarding" | "rdv" | "trial";
  submitLabel?: string;
  compact?: boolean;
};

export function LeadForm({ intent, submitLabel = "Envoyer", compact = false }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent, ...data }),
      });
      if (!res.ok) {
        const err =
          res.status === 429
            ? "Trop de tentatives. Réessayez dans une minute."
            : "Envoi impossible. Écrivez-nous à contact@progesti.fr";
        setMessage(err);
        throw new Error("fail");
      }
      track("form_submit", { intent });
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setMessage((prev) => prev || "Envoi impossible. Écrivez-nous à contact@progesti.fr");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-3.5 py-3 text-sm text-ink outline-none transition focus:border-emerald focus:ring-4 focus:ring-emerald/15";

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <input type="hidden" name="intent" value={intent} />
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <div>
          <label className="mb-1 block text-xs font-bold text-ink" htmlFor={`${intent}-company`}>
            Entreprise
          </label>
          <input
            id={`${intent}-company`}
            className={field}
            name="company"
            required={intent !== "demo"}
            placeholder={intent === "demo" ? "Entreprise (optionnel)" : "Entreprise *"}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-ink" htmlFor={`${intent}-name`}>
            Nom *
          </label>
          <input id={`${intent}-name`} className={field} name="name" required />
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-ink" htmlFor={`${intent}-email`}>
            Email *
          </label>
          <input id={`${intent}-email`} className={field} name="email" type="email" required />
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-ink" htmlFor={`${intent}-phone`}>
            Téléphone *
          </label>
          <input
            id={`${intent}-phone`}
            className={field}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="06 12 34 56 78"
          />
        </div>
        {!compact ? (
          <>
            <div>
              <label className="mb-1 block text-xs font-bold text-ink" htmlFor={`${intent}-size`}>
                Taille
              </label>
              <select id={`${intent}-size`} className={field} name="companySize" defaultValue="">
                <option value="" disabled>
                  Taille de l’entreprise
                </option>
                <option>Auto-entrepreneur</option>
                <option>2–5 salariés</option>
                <option>6–20 salariés</option>
                <option>20+ salariés</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold text-ink" htmlFor={`${intent}-soft`}>
                Logiciel actuel
              </label>
              <input id={`${intent}-soft`} className={field} name="currentSoftware" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-bold text-ink" htmlFor={`${intent}-need`}>
                Besoin
              </label>
              <textarea id={`${intent}-need`} className={`${field} min-h-24`} name="need" />
            </div>
          </>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-emerald px-5 py-3 font-display text-sm font-extrabold text-navy transition hover:bg-emerald-dark hover:text-white disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Envoi…" : submitLabel}
      </button>

      {status === "ok" ? (
        <p className="text-sm font-semibold text-emerald-dark" role="status">
          Merci — nous vous recontactons rapidement.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-semibold text-danger" role="alert">
          {message || "Envoi impossible. Écrivez-nous à contact@progesti.fr"}
        </p>
      ) : null}
    </form>
  );
}
