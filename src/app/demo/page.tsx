"use client";

import { cta } from "@/lib/cta";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { track } from "@/lib/tracking";

export default function DemoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot
    if (String(data.website || "").trim()) {
      setLoading(false);
      return;
    }

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const company = String(data.company || "").trim() || "Démo interactive";

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "demo",
          name,
          email,
          phone: phone || undefined,
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
        JSON.stringify({
          name,
          email,
          phone: phone || null,
          company,
          createdAt: Date.now(),
        }),
      );
      track("form_submit", { intent: "demo" });
      track("demo_view", { source: "demo_gate" });
      router.push("/demo/live");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Envoi impossible. Réessayez.");
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-ink outline-none focus:border-emerald focus:ring-4 focus:ring-emerald/15";

  return (
    <section className="section bg-white">
      <div className="container grid max-w-4xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Démonstration</p>
          <h1 className="mt-3 text-4xl font-extrabold text-ink md:text-5xl">
            Testez PROGESTI en moins de 30 secondes
          </h1>
          <p className="mt-5 text-lg text-muted">
            Laissez vos coordonnées — vous entrez immédiatement dans une démo interactive avec des
            données fictives réalistes. Nous vous recontactons uniquement si vous le souhaitez.
          </p>
          <ul className="mt-6 space-y-2 text-sm font-medium text-anthracite">
            <li>✓ Aucune carte bancaire</li>
            <li>✓ Aucun rendez-vous obligatoire</li>
            <li>✓ Exploration libre du cockpit</li>
          </ul>
          <p className="mt-8 text-sm text-muted">
            Vous préférez un essai complet 2 mois ?{" "}
            <Link href={cta.trialApp} className="font-bold text-emerald-dark hover:underline">
              Créer un compte
            </Link>
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-fog p-7 md:p-8">
          <h2 className="text-xl font-extrabold text-ink">Accéder à la démo</h2>
          <p className="mt-1 text-sm text-muted">Vos coordonnées sont enregistrées avant l’ouverture.</p>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden
          />
          <div className="mt-5 space-y-3">
            <input className={field} name="name" placeholder="Nom *" required autoComplete="name" />
            <input
              className={field}
              name="email"
              type="email"
              placeholder="Email *"
              required
              autoComplete="email"
            />
            <input
              className={field}
              name="phone"
              type="tel"
              placeholder="Téléphone"
              autoComplete="tel"
            />
            <input
              className={field}
              name="company"
              placeholder="Entreprise"
              autoComplete="organization"
            />
            {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald py-4 font-display text-sm font-extrabold text-navy hover:bg-emerald-dark hover:text-white disabled:opacity-70"
            >
              {loading ? "Ouverture…" : "Lancer la démonstration"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
