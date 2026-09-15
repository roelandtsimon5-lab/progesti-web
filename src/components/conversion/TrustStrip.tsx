import { trialCopy } from "@/lib/site";

export const trustPoints = [
  "Gratuit pour indépendants · Pro/Premium pour équipes",
  `${trialCopy.label} sans engagement`,
  "Support FR à Toulouse",
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
