"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { track } from "@/lib/tracking";

export default function DemoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        intent: "demo",
        name: data.name,
        email: data.email,
        company: "Démo interactive",
      }),
    }).catch(() => null);

    sessionStorage.setItem(
      "progesti_demo",
      JSON.stringify({ name: String(data.name), email: String(data.email), createdAt: Date.now() }),
    );
    track("demo_view", { source: "demo_gate" });
    await new Promise((r) => setTimeout(r, 400));
    router.push("/demo/live");
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
            Indiquez votre nom et votre email — vous entrez immédiatement dans une démo interactive
            avec des données fictives réalistes.
          </p>
          <ul className="mt-6 space-y-2 text-sm font-medium text-anthracite">
            <li>✓ Aucune carte bancaire</li>
            <li>✓ Aucun rendez-vous obligatoire</li>
            <li>✓ Exploration libre du cockpit</li>
          </ul>
          <p className="mt-8 text-sm text-muted">
            Vous préférez un essai complet 2 mois ?{" "}
            <Link href="/essai-gratuit" className="font-bold text-emerald-dark hover:underline">
              Créer un compte
            </Link>
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-fog p-7 md:p-8">
          <h2 className="text-xl font-extrabold text-ink">Accéder à la démo</h2>
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
