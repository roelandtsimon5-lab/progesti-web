"use client";

import { ProductShell } from "@/components/product/ProductShell";
import { cta } from "@/lib/cta";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AppPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"trial" | "demo" | null>(null);

  useEffect(() => {
    const trial = sessionStorage.getItem("progesti_trial");
    const demo = sessionStorage.getItem("progesti_demo");
    const session = sessionStorage.getItem("progesti_session");

    if (trial || session) {
      setMode("trial");
      return;
    }
    if (demo) {
      setMode("demo");
      return;
    }
    window.location.href = cta.trialApp;
  }, [router]);

  if (!mode) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-fog">
        <p className="font-display font-bold text-navy">Ouverture de votre espace…</p>
      </div>
    );
  }

  return <ProductShell mode={mode} />;
}
