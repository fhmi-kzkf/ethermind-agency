"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GhostLink from "@/components/ui/GhostLink";
import ProjectCard from "@/components/ui/ProjectCard";
import { caseStudies } from "@/data/portfolio";
import { projectUpdates, ProjectUpdate } from "@/data/projectUpdates";
import { ArrowLeft, ArrowUpRight, Sparkles, Clock, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: "ALL", label: "All Projects" },
  { id: "AI", label: "AI Automation" },
  { id: "MVP", label: "MVP Web" },
  { id: "Tools", label: "Custom Tools" },
  { id: "UI/UX", label: "UI/UX Design" },
];

export default function PortfolioPageClient() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "ALL"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeCategory);

  const filteredUpdates =
    activeCategory === "ALL"
      ? projectUpdates
      : projectUpdates.filter((update) => update.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-[140px] pb-[120px] bg-void min-h-screen text-ice-cyan">
      {/* Top back navigation */}
      <div className="section-gutter mb-12">
        <GhostLink href="/" className="text-sm inline-flex items-center gap-2" data-cursor="link">
          <ArrowLeft size={14} /> Back to home
        </GhostLink>
      </div>

      {/* Hero Header */}
      <div ref={headerRef} className="section-gutter mb-16">
        <span className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-4 block">
          Portfolio Archive & Activity Log
        </span>
        <h1
          className="font-light text-ice-cyan mb-6 max-w-4xl"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.06 }}
        >
          Shipped products, intelligent systems & design case studies.
        </h1>
        <p className="text-base md:text-lg text-ice-cyan/60 font-light max-w-2xl leading-relaxed">
          Filter through our work by category or explore our chronological project update log for real-time feature releases and technical milestones.
        </p>
      </div>

      {/* Category Filter Tabs Bar */}
      <div className="section-gutter mb-16">
        <div className="flex flex-wrap items-center gap-3 border-b border-ice-cyan/10 pb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "border-ice-cyan bg-ice-cyan/10 text-ice-cyan font-normal"
                    : "border-ice-cyan/15 text-ice-cyan/50 hover:text-ice-cyan hover:border-ice-cyan/30"
                }`}
                data-cursor="link"
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid Section */}
      <div ref={gridRef} className="section-gutter mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs uppercase tracking-widest text-ice-cyan/40">
            Case Studies ({filteredProjects.length})
          </h2>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                size={i === 0 && activeCategory === "ALL" ? "large" : "medium"}
              />
            ))}
          </div>
        ) : (
          <div className="bg-carbon p-12 rounded-2xl text-center border border-ice-cyan/10">
            <p className="text-base text-ice-cyan/50 mb-4">
              No case studies found for this category yet.
            </p>
            <GhostLink href="/book" className="text-sm">
              Commission a project in this category →
            </GhostLink>
          </div>
        )}
      </div>

      {/* Project Updates & Milestone Timeline Log */}
      <div className="section-gutter border-t border-ice-cyan/10 pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ice-cyan/40 mb-3">
              <Sparkles size={14} className="text-ice-cyan/60" />
              <span>Project Updates Log</span>
            </div>
            <h2 className="text-3xl font-light text-ice-cyan">
              Latest Shipped Features & Milestones
            </h2>
          </div>
          <p className="text-xs text-ice-cyan/40">
            Showing updates for: <span className="text-ice-cyan">{activeCategory}</span>
          </p>
        </div>

        <div className="space-y-4">
          {filteredUpdates.map((update: ProjectUpdate) => (
            <div
              key={update.id}
              className="bg-carbon border border-ice-cyan/10 hover:border-ice-cyan/30 p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              data-cursor="action"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-ice-cyan/80 bg-ice-cyan/10 border border-ice-cyan/20 px-2.5 py-0.5 rounded">
                    {update.badge || update.category}
                  </span>
                  <span className="text-xs text-ice-cyan/40 flex items-center gap-1">
                    <Clock size={12} /> {update.date}
                  </span>
                </div>
                <h3 className="text-xl font-light text-ice-cyan">
                  {update.projectName} — <span className="text-ice-cyan/80">{update.title}</span>
                </h3>
                <p className="text-sm text-ice-cyan/50 leading-relaxed">
                  {update.description}
                </p>
              </div>

              {update.metrics && (
                <div className="shrink-0 bg-void border border-ice-cyan/10 px-6 py-4 rounded-xl text-center min-w-[140px]">
                  <div className="text-2xl font-light text-ice-cyan">
                    {update.metrics.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-ice-cyan/40 mt-1">
                    {update.metrics.label}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="section-gutter mt-24 text-center">
        <div className="bg-carbon border border-ice-cyan/15 p-12 rounded-2xl max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl md:text-3xl font-light text-ice-cyan">
            Have a new product or system to build?
          </h3>
          <p className="text-sm text-ice-cyan/60 max-w-md mx-auto">
            Tell us about your requirements and receive a transparent, itemized proposal within 48 hours.
          </p>
          <GhostLink href="/book" className="text-sm inline-flex items-center gap-2" data-cursor="link">
            Start a project proposal <ArrowUpRight size={14} />
          </GhostLink>
        </div>
      </div>
    </div>
  );
}
