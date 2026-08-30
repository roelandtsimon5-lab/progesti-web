import type { IndustryPageConfig, IndustrySlug } from "./types";
import { defaultIndustryConfig } from "./default";
import { industryConfigs } from "./solutions";
import { pillarsForSlug } from "./pillars-overrides";

export function getIndustryConfig(slug?: string): IndustryPageConfig {
  if (!slug || slug === "default") {
    return defaultIndustryConfig;
  }
  const key = slug as keyof typeof industryConfigs;
  const base = industryConfigs[key];
  if (!base) return defaultIndustryConfig;
  return { ...base, pillars: pillarsForSlug(slug) };
}

export function getIndustrySlugs(): IndustrySlug[] {
  return ["bureaux", "syndics", "professionnels", "fin-de-chantier", "auto-entrepreneurs"];
}

export { defaultIndustryConfig, mergeIndustryConfig } from "./default";
export { industryConfigs } from "./solutions";
export type { IndustryPageConfig, IndustryPillar, IndustryFeature, MockKind } from "./types";
export { defaultPillars } from "./default";
