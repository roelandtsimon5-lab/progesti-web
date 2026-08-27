import { redirect } from "next/navigation";

/** Ancienne route « Clients » → hub cas clients (noindex). */
export default function ClientsPage() {
  redirect("/cas-clients");
}
