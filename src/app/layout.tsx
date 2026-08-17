import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import ChatbotWidget from "@/components/ui/ChatbotWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ethermind — Boutique Tech & Design Agency",
    template: "%s | Ethermind",
  },
  description:
    "A boutique 4-person agency specializing in AI Automation, MVP Development, Custom Tools, and UI/UX Design. Agile, affordable, obsessively detail-oriented.",
  keywords: [
    "AI automation",
    "MVP development",
    "custom tools",
    "UI/UX design",
    "boutique agency",
    "web development",
    "startup",
  ],
  openGraph: {
    title: "Ethermind — Boutique Tech & Design Agency",
    description:
      "We build intelligent systems, ship products, and design interfaces that convert.",
    type: "website",
    locale: "en_US",
    siteName: "Ethermind",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethermind — Boutique Tech & Design Agency",
    description:
      "We build intelligent systems, ship products, and design interfaces that convert.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} antialiased`}>
      <head>
        {/* Suppress client-side console output for clean user experience */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if (typeof window !== 'undefined' && window.location.hostname !== 'localhost_debug') { console.log = function(){}; console.info = function(){}; console.debug = function(){}; }`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollProgressBar />
        <CustomCursor />
        <Navigation />
        <main className="flex-1">{children}</main>
        <ChatbotWidget />
        <Footer />
      </body>
    </html>
  );
}
