import { site } from "@/lib/site";

export function IndustryMetierStrip() {
  return (
    <div className="relative border-b border-line bg-[var(--ink)] text-white">
      <span
        className="absolute inset-y-0 left-0 w-1 bg-lime-cta"
        aria-hidden
      />
      <div className="container flex flex-col items-center justify-between gap-3 py-3.5 pl-4 text-center md:flex-row md:text-left md:pl-5">
        <p className="font-display text-xs font-extrabold tracking-tight sm:text-sm md:text-base">
          <span className="text-lime-cta">★</span> Fait par des gens du nettoyage — pas une usine à logiciels
          généraliste
        </p>
        <p className="text-[11px] text-white/70 sm:text-xs md:text-sm">
          {site.company.city} · MSNE SAS · Support {site.phone}
        </p>
      </div>
    </div>
  );
}
