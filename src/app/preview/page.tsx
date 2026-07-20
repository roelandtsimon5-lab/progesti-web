import type { Metadata } from "next";
import { PreviewHubClient } from "@/components/preview/PreviewHubClient";

export const metadata: Metadata = {
  title: "Preview — homes & landings",
  robots: { index: false, follow: false },
};

export default function PreviewHubPage() {
  return <PreviewHubClient />;
}
