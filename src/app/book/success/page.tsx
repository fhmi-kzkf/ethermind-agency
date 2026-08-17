"use client";

import { motion } from "framer-motion";
import GhostLink from "@/components/ui/GhostLink";
import { CheckCircle2 } from "lucide-react";

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center section-gutter max-w-lg"
      >
        <CheckCircle2
          size={64}
          className="text-ice-cyan mx-auto mb-8"
          strokeWidth={1}
        />
        <h1
          className="font-light text-ice-cyan mb-6"
          style={{ fontSize: "40px", lineHeight: "1.17" }}
        >
          Message sent
        </h1>
        <p className="text-base text-ice-cyan/60 mb-4">
          Thank you for reaching out. We&apos;ve received your project details and
          will get back to you within 24 hours.
        </p>
        <p className="text-base text-ice-cyan/60 mb-12">
          In the meantime, feel free to explore our work or learn more about our
          services.
        </p>
        <div className="flex items-center justify-center gap-8">
          <GhostLink href="/#work" className="text-sm">
            View our work
          </GhostLink>
          <GhostLink href="/" className="text-sm">
            Back to home
          </GhostLink>
        </div>
      </motion.div>
    </div>
  );
}
