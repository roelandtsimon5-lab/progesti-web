export type { MockKind, IndustryFeature, IndustryPillar } from "@/lib/industry/types";

import { defaultIndustryConfig } from "@/lib/industry/default";

export const industryHero = defaultIndustryConfig.hero;
export const industryEmpathy = defaultIndustryConfig.empathy;
export const industryPillars = defaultIndustryConfig.pillars;
export const industryProof = defaultIndustryConfig.proof;
export const industryGrid = {
  h2: `${defaultIndustryConfig.grid.h2Lead} ${defaultIndustryConfig.grid.h2Highlight}`,
  lead: defaultIndustryConfig.grid.lead,
  items: defaultIndustryConfig.grid.items,
};
export const industryFaq = defaultIndustryConfig.faq;
