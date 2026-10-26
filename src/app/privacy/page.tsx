import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { privacyPolicy } from "@/data/legal";

const description =
  "How Ethermind collects, uses, and protects personal data submitted through our website, booking form, and AI assistant.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy | Ethermind", description },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      document={privacyPolicy}
      related={{ label: "Terms of Service", href: "/terms" }}
    />
  );
}
