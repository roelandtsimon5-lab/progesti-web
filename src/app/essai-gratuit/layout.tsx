import type { Metadata } from "next";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Essai gratuit 7 jours",
  description:
    "Testez PROGESTI gratuitement pendant 7 jours. Sans engagement, tous modules inclus. 149 € HT/mois.",
  path: "/essai-gratuit",
});

export default function EssaiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SoftwareApplicationLd />
      {children}
    </>
  );
}
