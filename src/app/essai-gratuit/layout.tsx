import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Essai gratuit 2 mois",
  description:
    "Testez PROGESTI gratuitement pendant 2 mois. Sans carte bancaire, tous modules inclus.",
  path: "/essai-gratuit",
});

export default function EssaiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
