"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInUp,
  slideInLeft,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import GhostLink from "@/components/ui/GhostLink";
import ProjectCard from "@/components/ui/ProjectCard";
import { CaseStudy } from "@/types/portfolio";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyDetailClient({
  study,
  relatedStudies,
}: {
  study: CaseStudy;
  relatedStudies: CaseStudy[];
}) {
  return (
    <div className="pt-[120px] pb-[120px]">
      {/* Back link */}
      <div className="section-gutter mb-16">
        <GhostLink href="/portfolio" className="text-sm inline-flex items-center gap-2">
          <ArrowLeft size={14} />
          All projects
        </GhostLink>
      </div>

      {/* Header */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        className="section-gutter mb-[60px]"
      >
        <span className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-4 block">
          {study.clientName} · {study.category}
        </span>
        <h1
          className="font-light text-ice-cyan mb-6 max-w-4xl"
          style={{ fontSize: "clamp(32px, 5vw, 50px)", lineHeight: 1.06 }}
        >
          {study.title}
        </h1>
      </motion.div>

      {/* Project Hero Screenshot Frame */}
      {study.thumbnailUrl && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="section-gutter mb-[80px]"
        >
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-ice-cyan/20 bg-carbon shadow-2xl">
            <Image
              src={study.thumbnailUrl}
              alt={study.title}
              fill
              className="object-cover object-top filter contrast-[1.03]"
              sizes="100vw"
              priority
            />
          </div>
        </motion.div>
      )}

      {/* Impact metrics — Fluid responsive cells with overflow protection */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-gutter mb-[120px]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {study.impactMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={fadeInUp}
              className="bg-carbon p-5 sm:p-6 text-center border border-ice-cyan/10 flex flex-col justify-center items-center overflow-hidden min-w-0"
              style={{ borderRadius: "15px" }}
            >
              <div
                className="font-light text-ice-cyan mb-2 text-lg sm:text-2xl md:text-3xl tracking-tight leading-tight w-full truncate"
                title={metric.value}
              >
                {metric.value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-ice-cyan/40 font-mono w-full truncate">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Problem & Solution */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="section-gutter mb-[120px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-carbon border border-ice-cyan/10 p-8 md:p-10 rounded-2xl">
            <h2
              className="font-light text-ice-cyan mb-8"
              style={{ fontSize: "36px", lineHeight: "1.17" }}
            >
              The challenge
            </h2>
            <p className="text-base text-ice-cyan/70 leading-relaxed font-light">
              {study.problem}
            </p>
          </div>
          <div className="bg-carbon border border-ice-cyan/10 p-8 md:p-10 rounded-2xl">
            <h2
              className="font-light text-ice-cyan mb-8"
              style={{ fontSize: "36px", lineHeight: "1.17" }}
            >
              The engineering solution
            </h2>
            <p className="text-base text-ice-cyan/70 leading-relaxed font-light">
              {study.solution}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="section-gutter mb-[120px]"
      >
        <h2
          className="font-light text-ice-cyan mb-8"
          style={{ fontSize: "40px", lineHeight: "1.17" }}
        >
          Tech stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {study.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm text-ice-cyan/70 bg-carbon border border-ice-cyan/15 px-4 py-2"
              style={{ borderRadius: "8px" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="section-gutter text-center mb-[120px]"
      >
        <div className="bg-carbon border border-ice-cyan/15 p-12 rounded-2xl max-w-3xl mx-auto space-y-6">
          <p className="text-2xl font-light text-ice-cyan">
            Want to build a system like {study.title.split("—")[0].trim()}?
          </p>
          <p className="text-sm text-ice-cyan/60 max-w-md mx-auto">
            Receive a transparent, itemized proposal within 48 hours.
          </p>
          <GhostLink href="/book" className="text-sm">
            Start a conversation →
          </GhostLink>
        </div>
      </motion.div>

      {/* Related projects */}
      {relatedStudies.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="section-gutter"
        >
          <h2
            className="font-light text-ice-cyan mb-12"
            style={{ fontSize: "40px", lineHeight: "1.17" }}
          >
            Related work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {relatedStudies.map((rs, i) => (
              <ProjectCard key={rs.id} project={rs} index={i} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
