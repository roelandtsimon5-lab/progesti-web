"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

/** Bandeau visible uniquement quand on ouvre une LP depuis /preview (?from=preview) */
export function PreviewBackBar() {
  const params = useSearchParams();
  if (params.get("from") !== "preview") return null;

  return (
    <div className="sticky top-0 z-[80] border-b border-[#FCD34D] bg-[#FBBF24] px-4 py-2 text-center text-sm font-bold text-[#0F2438]">
      Mode preview ·{" "}
      <Link href="/preview" className="underline underline-offset-2">
        ← Retour au hub numéroté
      </Link>
    </div>
  );
}
