import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SolutionLanding,
  solutionMetadata,
} from "@/components/sections/SolutionLanding";
import { solutionPages, solutionSlugs } from "@/lib/solutions-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = solutionPages[slug];
  if (!content) return {};
  return solutionMetadata(content);
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const content = solutionPages[slug];
  if (!content) notFound();
  return <SolutionLanding content={content} />;
}
