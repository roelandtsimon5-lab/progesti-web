import Link from "next/link";

type Props = {
  variant: "classic" | "nouveau";
};

/** Bandeau discret pour comparer homepage classique ↔ landing Jobber. */
export function ComparisonSwitchBanner({ variant }: Props) {
  if (variant === "classic") {
    return (
      <div className="border-b border-lime-cta/40 bg-[#B8F5D4] px-4 py-2.5 text-center text-sm font-bold text-blue-deep">
        Homepage actuelle (V3 validée) —{" "}
        <Link href="/nouveau" className="underline underline-offset-2 hover:text-blue-royal">
          Voir la nouvelle landing
        </Link>
      </div>
    );
  }

  return (
    <div className="border-b border-lime-cta/30 bg-[#062840] px-4 py-2.5 text-center text-sm font-bold text-white">
      Preview · nouvelle landing (style Jobber) —{" "}
      <Link href="/" className="text-lime-cta underline underline-offset-2 hover:text-white">
        Retour à la homepage actuelle
      </Link>
    </div>
  );
}
