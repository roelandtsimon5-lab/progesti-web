"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const verticalPitches: Record<string, { tagline: string; description: string }> = {
  "/securite": {
    tagline: "Le logiciel des sociétés de sécurité.",
    description:
      "Logiciel de gestion pour sociétés de sécurité et gardiennage. Planifiez vos vacations, pointez les prises de poste et facturez — sites sensibles, événementiel, gardiennage.",
  },
};

const defaultPitch = {
  tagline: site.tagline,
  description: site.description,
};

export function FooterPitch() {
  const pathname = usePathname();
  const pitch = verticalPitches[pathname] ?? defaultPitch;

  return (
    <>
      <p className="text-sm uppercase tracking-[0.14em] text-[#B8F5D4]">{pitch.tagline}</p>
      <p className="mt-4 max-w-sm text-sm text-white/90">{pitch.description}</p>
    </>
  );
}

export function FooterHeroPitch() {
  const pathname = usePathname();
  const isSecurityPage = pathname === "/securite";

  return (
    <p className="mt-2 text-sm text-white/90">
      {isSecurityPage
        ? "Planifiez vacations, pointez les prises de poste et facturez — du terrain à la facture."
        : "Organisez bureaux, syndics, locaux pros et fin de chantier — du planning à la facture."}
    </p>
  );
}
