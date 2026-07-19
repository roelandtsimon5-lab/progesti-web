"use client";

import { ProductShell } from "@/components/product/ProductShell";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoLivePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("progesti_demo")) {
      router.replace("/demo");
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-fog">
        <p className="font-display font-bold text-navy">Préparation de la démo…</p>
      </div>
    );
  }

  return <ProductShell mode="demo" />;
}
