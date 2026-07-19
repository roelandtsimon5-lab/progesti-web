"use client";

import Link from "next/link";
import { track, type TrackEvent } from "@/lib/tracking";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald text-navy hover:bg-emerald-dark hover:text-white shadow-[0_12px_28px_rgba(18,183,106,0.28)] active:translate-y-px",
  secondary:
    "bg-white text-ink border-2 border-ink/90 hover:bg-ink hover:text-white active:translate-y-px",
  ghost: "bg-transparent text-anthracite hover:text-ink hover:bg-fog-2",
  white:
    "bg-white text-navy hover:bg-fog border border-white shadow-[0_12px_28px_rgba(0,0,0,0.14)] active:translate-y-px",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-7 py-3.5 text-base",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  event?: TrackEvent;
  eventPayload?: Record<string, unknown>;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  event = "cta_click",
  eventPayload,
}: Props) {
  const classNames = `inline-flex items-center justify-center gap-2 rounded-xl font-display font-extrabold transition duration-200 ${variants[variant]} ${sizes[size]} ${className}`;
  const onClick = () => track(event, { href, ...eventPayload });
  const external = /^https?:\/\//i.test(href);

  if (external) {
    return (
      <a href={href} onClick={onClick} className={classNames} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classNames}>
      {children}
    </Link>
  );
}
