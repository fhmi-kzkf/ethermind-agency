import { notFound } from "next/navigation";
import { caseStudies } from "@/data/portfolio";
import CaseStudyDetailClient from "./CaseStudyDetailClient";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies.find((c) => c.id === id);
  if (!study) return {};

  return {
    title: `${study.title.split("—")[0].trim()} — Ethermind`,
    description: study.problem.slice(0, 160),
    openGraph: {
      title: study.title,
      description: study.solution.slice(0, 160),
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const study = caseStudies.find((c) => c.id === id);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies.filter(
    (c) => c.category === study.category && c.id !== study.id
  );

  return (
    <CaseStudyDetailClient study={study} relatedStudies={relatedStudies} />
  );
}
