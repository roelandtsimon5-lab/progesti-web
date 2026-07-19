import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essai gratuit 2 mois",
  description:
    "Testez PROGESTI gratuitement pendant 2 mois. Sans carte bancaire, tous modules inclus.",
};

export default function EssaiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
