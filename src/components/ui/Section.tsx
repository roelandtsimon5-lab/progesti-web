import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tight?: boolean;
  atmosphere?: boolean;
  dark?: boolean;
  id?: string;
};

export function Section({
  children,
  className = "",
  tight = false,
  atmosphere = false,
  dark = false,
  id,
}: SectionProps) {
  const pad = tight ? "section-tight" : "section";
  const surface = dark ? "surface-dark" : atmosphere ? "surface-atmosphere" : "";
  return (
    <section id={id} className={`${pad} ${surface} ${className}`.trim()}>
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
