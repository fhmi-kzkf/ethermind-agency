import type { Metadata } from "next";
import BookingPageClient from "./BookingPageClient";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Tell us about your project and we'll get back to you within 24 hours with a custom proposal.",
};

export default function BookPage() {
  return <BookingPageClient />;
}
