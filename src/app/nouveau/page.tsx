import { redirect } from "next/navigation";

/** Redirection — la nouvelle landing est sur `/`. */
export default function NouveauRedirectPage() {
  redirect("/");
}
