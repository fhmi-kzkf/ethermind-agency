import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} — Ethermind`,
    description: service.subtitle,
    openGraph: {
      title: `${service.title} — Ethermind`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
