import { PricingFactor } from "@/types/pricing";

export const pricingFactors: PricingFactor[] = [
  {
    id: "1",
    factorName: "Project Scale",
    description:
      "We scope every project based on its breadth — a single-page landing page, a multi-feature MVP, or a full-scale enterprise platform. The scale determines the number of screens, integrations, and the depth of functionality required.",
    icon: "Layers",
  },
  {
    id: "2",
    factorName: "Complexity",
    description:
      "Not all features are created equal. AI model training, real-time collaboration, payment processing, and third-party API integrations each carry different levels of technical complexity that influence the engineering effort.",
    icon: "Cpu",
  },
  {
    id: "3",
    factorName: "Timeline",
    description:
      "Speed costs. A 12-week delivery allows for a methodical, iterative process. A 4-week sprint requires a dedicated, focused team. We are transparent about how timeline compression affects pricing and scope.",
    icon: "Clock",
  },
];

export const budgetRanges = [
  "< $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];
