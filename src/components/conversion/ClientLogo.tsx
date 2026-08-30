type Props = {
  src: string;
  alt: string;
  company: string;
  className?: string;
  iconClassName?: string;
  /** Dark surfaces (navy banners) — light company name */
  onDark?: boolean;
};

/** Logo client — icône + nom entreprise */
export function ClientLogo({
  src,
  alt,
  company,
  className = "",
  iconClassName = "",
  onDark = false,
}: Props) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={40}
        height={40}
        className={`h-10 w-10 shrink-0 rounded-[2px] border border-line/60 ${iconClassName}`.trim()}
      />
      <span
        className={`font-display text-sm font-extrabold leading-tight ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {company}
      </span>
    </div>
  );
}

/** Marque compacte — icône seule */
export function ClientLogoMark({
  src,
  alt,
  className = "",
}: Pick<Props, "src" | "alt" | "className">) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={40}
      height={40}
      className={`h-10 w-10 shrink-0 rounded-[2px] border border-line ${className}`.trim()}
    />
  );
}
