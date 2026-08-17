export interface ServiceUseCase {
  title: string;
  description: string;
}

export interface ServicePillar {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverables: string[];
  useCases: ServiceUseCase[];
  techStack: string[];
}
