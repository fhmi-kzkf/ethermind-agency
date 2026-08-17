export interface ImpactMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  thumbnailUrl: string;
  problem: string;
  solution: string;
  impactMetrics: ImpactMetric[];
  techStack: string[];
  category: "AI" | "MVP" | "Tools" | "UI/UX";
}
