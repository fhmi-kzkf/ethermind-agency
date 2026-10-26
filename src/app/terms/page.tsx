import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { termsOfService } from "@/data/legal";

const description =
  "The terms that govern your use of the Ethermind website, consultations, proposals, and our AI assistant.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of Service | Ethermind", description },
};

export default function TermsPage() {
  return (
    <LegalPage
      document={termsOfService}
      related={{ label: "Privacy Policy", href: "/privacy" }}
    />
  );
}
