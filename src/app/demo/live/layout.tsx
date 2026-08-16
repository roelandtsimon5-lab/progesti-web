import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démo Live",
  robots: { index: false, follow: false },
};

export default function DemoLiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
