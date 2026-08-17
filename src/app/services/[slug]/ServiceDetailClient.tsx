"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GhostLink from "@/components/ui/GhostLink";
import { ServicePillar } from "@/types/service";
import {
  AiVisualPreview,
  MvpVisualPreview,
  ToolsVisualPreview,
  UiUxVisualPreview,
} from "@/components/icons/ServiceVisuals";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const visualMap: Record<string, React.FC> = {
  "ai-automation": AiVisualPreview,
  "mvp-website": MvpVisualPreview,
  "custom-tools": ToolsVisualPreview,
  "ui-ux-design": UiUxVisualPreview,
};

const executionPhases = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "We analyze your exact technical requirements, map data flows, and establish system architecture specs.",
  },
  {
    step: "02",
    title: "Agile Development Sprint",
    desc: "Fast iteration cycles building core modules, AI integrations, or custom interfaces with continuous feedback.",
  },
  {
    step: "03",
    title: "QA & Performance Tuning",
    desc: "Rigorous testing across edge cases, latency benchmarks, security audits, and UI responsiveness.",
  },
  {
    step: "04",
    title: "Deployment & Scaling",
    desc: "Seamless launch with CI/CD automation, monitoring pipelines, and full documentation handoff.",
  },
];

export default function ServiceDetailClient({
  service,
}: {
  service: ServicePillar;
}) {
  const VisualComponent = visualMap[service.slug] || AiVisualPreview;
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header entrance reveal
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      // 2. Execution phase cards reveal on scroll
      const phaseCards = containerRef.current?.querySelectorAll(".phase-card");
      phaseCards?.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.7,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // 3. Deliverable cards reveal on scroll
      const deliverableCards = containerRef.current?.querySelectorAll(".deliverable-card");
      deliverableCards?.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: i % 2 === 0 ? -30 : 30,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // 4. Use case cards scale reveal on scroll
      const useCaseCards = containerRef.current?.querySelectorAll(".usecase-card");
      useCaseCards?.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          scale: 0.96,
          duration: 0.7,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-[140px] pb-[120px] bg-void text-ice-cyan min-h-screen">
      {/* Back link */}
      <div className="section-gutter mb-12">
        <GhostLink href="/#services" className="text-sm inline-flex items-center gap-2" data-cursor="link">
          <ArrowLeft size={14} /> Back to all services
        </GhostLink>
      </div>

      {/* Hero Header — Two-column split with Visual Preview */}
      <div ref={headerRef} className="section-gutter mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title & Subtitle */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ice-cyan/70 border border-ice-cyan/20 px-3 py-1 rounded-full bg-carbon/50 backdrop-blur-sm">
              <Zap size={12} className="text-ice-cyan" />
              <span>Capability Architecture Specification</span>
            </div>

            <h1
              className="font-light text-ice-cyan leading-none"
              style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.05 }}
            >
              {service.title}
            </h1>

            <p className="text-lg md:text-xl text-ice-cyan/70 font-light leading-relaxed max-w-xl">
              {service.subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <GhostLink
                href={`/book?type=${service.slug.toUpperCase()}`}
                className="text-sm inline-flex items-center gap-2"
                data-cursor="link"
              >
                Request proposal for {service.title} <ArrowUpRight size={14} />
              </GhostLink>

              <span className="text-xs text-ice-cyan/40 font-light">
                Itemized estimate in 48 hrs
              </span>
            </div>
          </div>

          {/* Right Column: Interactive SVG Visual Card */}
          <div className="lg:col-span-5" data-cursor="action">
            <div className="bg-carbon border border-ice-cyan/15 p-4 rounded-2xl relative overflow-hidden shadow-2xl">
              <VisualComponent />
            </div>
          </div>
        </div>
      </div>

      {/* Overview & Tech Stack Grid */}
      <div className="section-gutter mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Overview */}
          <div className="lg:col-span-7 bg-carbon border border-ice-cyan/10 p-8 md:p-10 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-ice-cyan/40 mb-2">
              <Layers size={14} />
              <span>Overview</span>
            </div>
            <h2 className="text-2xl font-light text-ice-cyan">
              What we solve
            </h2>
            <p className="text-base text-ice-cyan/70 leading-relaxed font-light">
              {service.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-5 bg-carbon border border-ice-cyan/10 p-8 md:p-10 rounded-2xl space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-ice-cyan/40">
              <Cpu size={14} />
              <span>Production Stack</span>
            </div>
            <h2 className="text-2xl font-light text-ice-cyan">
              Engineered with modern tools
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-ice-cyan/70 bg-void border border-ice-cyan/15 px-4 py-2 rounded-lg transition-all duration-300 hover:border-ice-cyan/40 hover:text-ice-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4-Step Execution Process Section */}
      <div className="section-gutter mb-24 border-t border-ice-cyan/10 pt-20">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-3 block">
            Execution Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-ice-cyan">
            How we bring {service.title.toLowerCase()} to life
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executionPhases.map((phase) => (
            <div
              key={phase.step}
              className="phase-card bg-carbon border border-ice-cyan/10 p-8 rounded-2xl space-y-4 hover:border-ice-cyan/30 transition-all duration-300 group"
              data-cursor="action"
            >
              <span className="text-xs font-mono text-ice-cyan/40 group-hover:text-ice-cyan transition-colors">
                {phase.step}
              </span>
              <h3 className="text-lg font-light text-ice-cyan">
                {phase.title}
              </h3>
              <p className="text-sm text-ice-cyan/50 leading-relaxed font-light">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables Section */}
      <div className="section-gutter mb-24 border-t border-ice-cyan/10 pt-20">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-3 block">
            Scope & Outputs
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-ice-cyan">
            Concrete deliverables you receive
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.deliverables.map((item) => (
            <div
              key={item}
              className="deliverable-card bg-carbon border border-ice-cyan/10 hover:border-ice-cyan/30 p-6 rounded-xl flex items-center gap-4 transition-all duration-300 group"
            >
              <CheckCircle2 size={20} className="text-ice-cyan/60 group-hover:text-ice-cyan shrink-0 transition-colors" />
              <span className="text-base text-ice-cyan/80 font-light">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="section-gutter mb-24 border-t border-ice-cyan/10 pt-20">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-3 block">
            Practical Applications
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-ice-cyan">
            Target use cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.useCases.map((uc) => (
            <div
              key={uc.title}
              className="usecase-card bg-carbon border border-ice-cyan/10 hover:border-ice-cyan/30 p-8 rounded-2xl space-y-4 transition-all duration-300"
              data-cursor="action"
            >
              <div className="w-8 h-8 rounded-lg bg-ice-cyan/10 border border-ice-cyan/20 flex items-center justify-center text-ice-cyan text-xs">
                <Sparkles size={16} />
              </div>
              <h3 className="text-xl font-light text-ice-cyan">
                {uc.title}
              </h3>
              <p className="text-sm text-ice-cyan/50 leading-relaxed font-light">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="section-gutter text-center pt-8">
        <div className="bg-carbon border border-ice-cyan/15 p-12 md:p-16 rounded-2xl max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-4xl font-light text-ice-cyan">
            Ready to build your {service.title.toLowerCase()} solution?
          </h3>
          <p className="text-base text-ice-cyan/60 max-w-md mx-auto font-light">
            Share your project requirements and receive a transparent, itemized proposal within 48 hours.
          </p>
          <div className="pt-4 flex justify-center">
            <GhostLink
              href={`/book?type=${service.slug.toUpperCase()}`}
              className="text-base inline-flex items-center gap-2"
              data-cursor="link"
            >
              Schedule consultation for {service.title} <ArrowUpRight size={16} />
            </GhostLink>
          </div>
        </div>
      </div>
    </div>
  );
}
