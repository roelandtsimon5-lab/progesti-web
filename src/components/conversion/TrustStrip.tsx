const items = [
  "2 mois sans carte bancaire",
  "Dès 29,99 € HT/mois",
  "Tous les modules inclus",
  "Mise en place offerte",
];

export function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`border-y border-blue-mist/60 bg-blue-sky/80 ${className}`.trim()}
      role="list"
      aria-label="Garanties PROGESTI"
    >
      <div className="container flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 text-center text-sm font-semibold text-blue-deep">
        {items.map((item) => (
          <span key={item} role="listitem" className="inline-flex items-center gap-2">
            <span className="text-green-deep" aria-hidden>
              ✓
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
