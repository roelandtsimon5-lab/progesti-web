import type { Metadata } from "next";
import Link from "next/link";
import { HomeValidated } from "@/components/home/HomeValidated";

export const metadata: Metadata = {
  title: "V3 validée — Archive (juil. 2026)",
  robots: { index: false, follow: false },
};

export default function V3ValidePage() {
  return (
    <>
      <div className="bg-[#B8F5D4] px-4 py-2 text-center text-sm font-bold text-blue-deep">
        Version validée (contraste corrigé) —{" "}
        <Link href="/preview" className="underline underline-offset-2">
          Comparer d’autres styles
        </Link>
      </div>
      <HomeValidated />
    </>
  );
}
