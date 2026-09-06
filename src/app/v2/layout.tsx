import type { Metadata } from "next";

/** Archive V2 — hors index. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V2ArchiveLayout({ children }: { children: React.ReactNode }) {
  return <div data-design="v2">{children}</div>;
}
