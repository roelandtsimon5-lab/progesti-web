"use client";

import { useState } from "react";
import { track } from "@/lib/tracking";

type Props = {
  intent: "contact" | "demo" | "callback" | "switch" | "onboarding" | "rdv" | "trial";
  submitLabel?: string;
  compact?: boolean;
  id?: string;
};

type FieldKey = "company" | "name" | "email" | "phone";

function collectInvalidFields(form: HTMLFormElement, intent: Props["intent"]): Set<FieldKey> {
  const invalid = new Set<FieldKey>();
  const company = String(new FormData(form).get("company") || "").trim();
  const name = String(new FormData(form).get("name") || "").trim();
  const email = String(new FormData(form).get("email") || "").trim();
  const phone = String(new FormData(form).get("phone") || "").replace(/\D/g, "");

  if (intent !== "demo" && !company) invalid.add("company");
  if (!name) invalid.add("name");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) invalid.add("email");
  if (phone.length < 8) invalid.add("phone");

  return invalid;
}

export function LeadForm({ intent, submitLabel = "Envoyer", compact = false, id }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const [invalidFields, setInvalidFields] = useState<Set<FieldKey>>(new Set());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (String(data.website || "").trim()) return;

    const invalid = collectInvalidFields(form, intent);
    setInvalidFields(invalid);
    if (invalid.size > 0) {
      setStatus("error");
      setMessage("Vérifiez les champs en rouge.");
      return;
    }

    setStatus("loading");
    setMessage("");

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
      setInvalidFields(new Set());
      form.reset();
    } catch {
      setStatus("error");
      setMessage((prev) => prev || "Envoi impossible. Écrivez-nous à contact@progesti.fr");
    }
  }

  const field =
    "w-full rounded-[2px] border border-blue-mist bg-white px-3.5 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-blue-royal focus:ring-4 focus:ring-blue-royal/15";

  const errorId = `${intent}-form-error`;

  const fieldProps = (key: FieldKey) => ({
    "aria-invalid": invalidFields.has(key) ? true : undefined,
    onChange: () => {
      if (invalidFields.has(key)) {
        setInvalidFields((prev) => {
          const next = new Set(prev);
          next.delete(key);
          return next;
        });
      }
    },
  });

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="space-y-3"
      noValidate
      aria-busy={status === "loading"}
      aria-describedby={status === "error" ? errorId : undefined}
    >
      <input type="hidden" name="intent" value={intent} />
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
          <label className="mb-1 block text-xs font-bold text-blue-deep" htmlFor={`${intent}-company`}>
            Entreprise
          </label>
          <input
            id={`${intent}-company`}
            className={field}
            name="company"
            required={intent !== "demo"}
            placeholder={intent === "demo" ? "Entreprise (optionnel)" : "Entreprise *"}
            {...fieldProps("company")}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-blue-deep" htmlFor={`${intent}-name`}>
            Nom *
          </label>
          <input id={`${intent}-name`} className={field} name="name" required {...fieldProps("name")} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-blue-deep" htmlFor={`${intent}-email`}>
            Email *
          </label>
          <input
            id={`${intent}-email`}
            className={field}
            name="email"
            type="email"
            required
            {...fieldProps("email")}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-blue-deep" htmlFor={`${intent}-phone`}>
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
            {...fieldProps("phone")}
          />
        </div>
        {!compact ? (
          <>
            <div>
              <label className="mb-1 block text-xs font-bold text-blue-deep" htmlFor={`${intent}-size`}>
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
              <label className="mb-1 block text-xs font-bold text-blue-deep" htmlFor={`${intent}-soft`}>
                Logiciel actuel
              </label>
              <input id={`${intent}-soft`} className={field} name="currentSoftware" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-bold text-blue-deep" htmlFor={`${intent}-need`}>
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
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[2px] bg-lime-cta px-5 py-3 font-display text-sm font-extrabold text-brand-navy transition hover:bg-lime-cta-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-brand-navy/30 border-t-brand-navy motion-reduce:animate-none" aria-hidden />
            Envoi…
          </>
        ) : (
          submitLabel
        )}
      </button>

      {status === "ok" ? (
        <p className="text-sm font-semibold text-green-deep" role="status">
          Merci — nous vous recontactons sous 24h ouvrées.
        </p>
      ) : null}
      {status === "error" ? (
        <p id={errorId} className="text-sm font-semibold text-danger" role="alert">
          {message || "Envoi impossible. Écrivez-nous à contact@progesti.fr"}
        </p>
      ) : null}
    </form>
  );
}
