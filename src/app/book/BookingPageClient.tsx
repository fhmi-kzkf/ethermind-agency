"use client";

import { motion } from "framer-motion";
import { slideInLeft } from "@/lib/animations";
import GhostLink from "@/components/ui/GhostLink";
import BookingForm from "@/components/ui/BookingForm";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BookingContent() {
  const searchParams = useSearchParams();
  const projectType = searchParams.get("type") || undefined;

  return (
    <div className="pt-[120px] pb-[120px]">
      {/* Back link */}
      <div className="section-gutter mb-16">
        <GhostLink href="/" className="text-sm inline-flex items-center gap-2">
          <ArrowLeft size={14} />
          Back to home
        </GhostLink>
      </div>

      <div className="section-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — copy */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <h1
              className="font-light text-ice-cyan mb-8"
              style={{ fontSize: "clamp(36px, 5vw, 50px)", lineHeight: 1.06 }}
            >
              Let&apos;s talk about your project
            </h1>
            <div className="space-y-4 mb-12">
              <p className="text-base text-ice-cyan/70">
                Fill out the form and we&apos;ll get back to you within 24 hours with
                a custom proposal tailored to your needs.
              </p>
              <p className="text-base text-ice-cyan/70">
                No commitment. No hidden costs. Just a conversation about how we
                can help you build something great.
              </p>
            </div>

            {/* What to expect */}
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-widest text-ice-cyan/40">
                What to expect
              </h2>
              {[
                {
                  step: "01",
                  title: "You share your vision",
                  desc: "Tell us about your project, timeline, and goals.",
                },
                {
                  step: "02",
                  title: "We review & respond",
                  desc: "Within 24 hours, we'll reach out with initial thoughts.",
                },
                {
                  step: "03",
                  title: "Discovery call",
                  desc: "A 30-minute video call to align on scope and approach.",
                },
                {
                  step: "04",
                  title: "Custom proposal",
                  desc: "A transparent, itemized proposal with clear deliverables.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-sm text-ice-cyan/30 font-light">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm text-ice-cyan mb-1">{item.title}</p>
                    <p className="text-sm text-ice-cyan/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <div>
            <BookingForm defaultProjectType={projectType} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPageClient() {
  return (
    <Suspense>
      <BookingContent />
    </Suspense>
  );
}
