import { site } from "@/lib/site";

type Vertical = "proprete" | "espace-vert" | "securite";

const STRIP: Record<Vertical, { lead: string; accent: string }> = {
  proprete: {
    accent: "Fait par des gens du nettoyage",
    lead: " — pas une usine à logiciels généraliste",
  },
  "espace-vert": {
    accent: "Pensé pour les entreprises d’espaces verts",
    lead: " — tournées, fréquences, engins, pas un soft générique",
  },
  securite: {
    accent: "Pensé pour le gardiennage & la sécurité privée",
    lead: " — vacations, rondes, preuves, pas un soft générique",
  },
};

type Props = {
  vertical?: Vertical;
};

export function IndustryMetierStrip({ vertical = "proprete" }: Props) {
  const copy = STRIP[vertical];
  return (
    <div className="relative border-b border-line bg-[var(--ink)] text-white">
      <span className="absolute inset-y-0 left-0 w-1 bg-lime-cta" aria-hidden />
      <div className="container flex flex-col items-center justify-between gap-3 py-3.5 pl-4 text-center md:flex-row md:text-left md:pl-5">
        <p className="font-display text-xs font-extrabold tracking-tight sm:text-sm md:text-base">
          <span className="text-lime-cta">★</span> {copy.accent}
          <span className="text-white/90">{copy.lead}</span>
        </p>
        <p className="text-[11px] text-white/70 sm:text-xs md:text-sm">
          {site.company.city} · MSNE SAS · Support {site.phone}
        </p>
      </div>
    </div>
  );
}
