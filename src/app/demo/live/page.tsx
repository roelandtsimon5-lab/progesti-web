"use client";

import { demoAppUrl } from "@/lib/cta";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Ancienne maquette produit — redirige vers la vraie app (tenant démo).
 * Conservée pour les bookmarks / Ads qui pointaient encore ici.
 */
export default function DemoLivePage() {
  const router = useRouter();

  useEffect(() => {
    const raw = sessionStorage.getItem("progesti_demo");
    let name = "";
    let email = "";
    let company = "";
    let phone = "";
    if (raw) {
      try {
        const data = JSON.parse(raw) as {
          name?: string;
          email?: string;
          company?: string;
          phone?: string | null;
        };
        name = data.name || "";
        email = data.email || "";
        company = data.company || "";
        phone = data.phone || "";
      } catch {
        /* ignore */
      }
    } else {
      router.replace("/demo");
      return;
    }

    window.location.href = demoAppUrl({
      name: name || undefined,
      email: email || undefined,
      company: company || undefined,
      phone: phone || undefined,
      source: "demo-live-redirect",
    });
  }, [router]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-fog">
      <p className="font-display font-bold text-navy">Ouverture de votre espace PROGESTI…</p>
    </div>
  );
}
