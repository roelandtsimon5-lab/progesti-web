import type { Metadata } from "next";
import type { ReactNode } from "react";

/** Archive V1 — hors index. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V1ArchiveLayout({ children }: { children: ReactNode }) {
  return children;
}
