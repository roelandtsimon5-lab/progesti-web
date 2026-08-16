export const trustPoints = [
  "149 € HT/mois, tout inclus",
  "Essai 7 jours sans engagement",
  "Support FR à Tournefeuille",
] as const;

export function TrustStrip() {
  return (
    <p className="text-sm font-medium text-slate">
      {trustPoints.map((point, i) => (
        <span key={point}>
          <span className="text-green-deep">✓</span> {point}
          {i < trustPoints.length - 1 ? <span className="mx-2 text-blue-mist">·</span> : null}
        </span>
      ))}
    </p>
  );
}
