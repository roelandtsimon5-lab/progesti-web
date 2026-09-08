/**
 * @deprecated This module re-exports from use-cases.ts for backward compatibility.
 * Import directly from "@/lib/use-cases" for new code.
 */

import { useCases, productFacts, type UseCase } from "./use-cases";

export type Testimonial = UseCase;

export const socialProofStats = productFacts;

export const testimonials = useCases;

export function featuredTestimonials(limit = 4): UseCase[] {
  return useCases.slice(0, limit);
}

export function logoWordmark(_logo: string): string {
  return "";
}

export function initials(name: string): string {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
