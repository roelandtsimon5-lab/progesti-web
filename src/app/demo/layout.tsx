import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Démo",
  description:
    "Découvrez PROGESTI en démo : planning, pointage terrain et facturation pour entreprises de nettoyage.",
  path: "/demo",
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
