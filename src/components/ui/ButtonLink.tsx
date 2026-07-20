"use client";

import Link from "next/link";
import { track, type TrackEvent } from "@/lib/tracking";

type Variant = "primary" | "secondary" | "ghost" | "white" | "outline-white";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-green-action !text-white hover:bg-green-deep shadow-[0_10px_28px_rgba(31,168,107,0.35)] active:translate-y-px",
  secondary:
    "bg-transparent text-blue-deep border-2 border-blue-royal hover:bg-blue-royal hover:text-white active:translate-y-px",
  ghost: "bg-transparent text-slate hover:text-ink hover:bg-blue-sky/80",
  white:
    "bg-white text-blue-deep hover:bg-blue-sky border border-white/90 shadow-[0_10px_28px_rgba(11,61,110,0.18)] active:translate-y-px",
  "outline-white":
    "bg-transparent !text-white border-2 border-white/75 hover:bg-white/12 active:translate-y-px",
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
  const classNames = `inline-flex items-center justify-center gap-2 rounded-lg font-display font-bold tracking-tight transition duration-200 ${variants[variant]} ${sizes[size]} ${className}`;
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
