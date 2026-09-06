import type { Metadata } from "next";
import type { ReactNode } from "react";

/** Toutes les LPs `/lp/**` restent noindex (ads + templates). */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LpLayout({ children }: { children: ReactNode }) {
  return children;
}
