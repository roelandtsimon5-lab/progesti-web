import type { Metadata } from "next";
import type { ReactNode } from "react";

/** Archive V3 validée — hors index. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V3ValideArchiveLayout({ children }: { children: ReactNode }) {
  return children;
}
