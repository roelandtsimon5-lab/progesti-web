import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tight?: boolean;
  atmosphere?: boolean;
  blue?: boolean;
  dark?: boolean;
  pattern?: boolean;
  id?: string;
};

export function Section({
  children,
  className = "",
  tight = false,
  atmosphere = false,
  blue = false,
  dark = false,
  pattern = false,
  id,
}: SectionProps) {
  const pad = tight ? "section-tight" : "section";
  const surface = dark
    ? "surface-dark"
    : blue
      ? "surface-blue"
      : atmosphere
        ? "surface-atmosphere"
        : "";
  const grid = pattern ? "pattern-grid" : "";
  return (
    <section id={id} className={`${pad} ${surface} ${grid} ${className}`.trim()}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`.trim()}>{children}</p>;
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`lead ${className}`.trim()}>{children}</p>;
}

export function SurfaceAtmosphere({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`surface-atmosphere ${className}`.trim()}>{children}</div>;
}
