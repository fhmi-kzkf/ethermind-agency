"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/components/ui/ProjectCard";
import GhostLink from "@/components/ui/GhostLink";
import { caseStudies } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const headerRef = useRef<HTMLDivElement>(null);

  // Pick 1 project from each of our 4 core pillars
  const aiProject = caseStudies.find((p) => p.category === "AI") || caseStudies[0];
  const mvpProject = caseStudies.find((p) => p.category === "MVP") || caseStudies[3];
  const toolsProject = caseStudies.find((p) => p.category === "Tools") || caseStudies[5];
  const uiuxProject = caseStudies.find((p) => p.category === "UI/UX") || caseStudies[6];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header reveal
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="py-[120px]">
      {/* Section header */}
      <div
        ref={headerRef}
        className="flex items-baseline justify-between section-gutter mb-[60px]"
      >
        <div>
          <span className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-2 block">
            4 Core Capability Showcase
          </span>
          <h2
            className="font-light text-ice-cyan"
            style={{ fontSize: "40px", lineHeight: "1.17" }}
          >
            Selected work
          </h2>
        </div>
        <GhostLink href="/portfolio" className="text-sm hidden md:inline" data-cursor="link">
          All 7 projects & activity log →
        </GhostLink>
      </div>

      {/* Project grid — 4 Pillar Editorial Layout */}
      <div className="section-gutter space-y-5">
        {/* Row 1 — Pillar 1: AI Automation (Large Card) */}
        <div>
          <ProjectCard project={aiProject} index={0} size="large" />
        </div>

        {/* Row 2 — Pillar 2: MVP Website & Pillar 3: Custom Tools (Two Medium Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProjectCard project={mvpProject} index={1} size="medium" />
          <ProjectCard project={toolsProject} index={2} size="medium" />
        </div>

        {/* Row 3 — Pillar 4: UI/UX Design (Large Card) */}
        <div>
          <ProjectCard project={uiuxProject} index={3} size="large" />
        </div>
      </div>
    </section>
  );
}
