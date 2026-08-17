import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "All Projects & Work Showcase — Ethermind",
  description:
    "Explore our full portfolio and latest project updates across AI Automation, MVP Development, Custom Tools, and UI/UX Design.",
  openGraph: {
    title: "All Projects & Work Showcase — Ethermind",
    description:
      "Explore our full portfolio and latest project updates across AI Automation, MVP Development, Custom Tools, and UI/UX Design.",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
