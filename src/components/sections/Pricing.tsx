"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GhostLink from "@/components/ui/GhostLink";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Tier presets for the interactive scope selector
const engagementTiers = [
  {
    id: "mvp",
    name: "MVP Sprint",
    tagline: "From concept to live product in weeks",
    duration: "2 – 4 Weeks",
    idealFor: "Startups & founders validating new ideas fast",
    deliverables: [
      "Full-stack Next.js web app",
      "Authentication & database setup",
      "Core user flow & payment integration",
      "Deployment & CI/CD pipeline",
    ],
  },
  {
    id: "ai",
    name: "AI & Automation Engine",
    tagline: "Custom AI workflows that run 24/7",
    duration: "3 – 6 Weeks",
    idealFor: "Businesses automating repetitive operations & data tasks",
    deliverables: [
      "Custom LLM / OpenAI API integration",
      "Autonomous AI agent workflows",
      "Data ingestion & vector search RAG",
      "Dashboard & analytics interface",
    ],
  },
  {
    id: "tools",
    name: "Custom DevTools & Systems",
    tagline: "Bespoke software for unique operational needs",
    duration: "4 – 8 Weeks",
    idealFor: "Growing teams needing tailored internal software",
    deliverables: [
      "Custom internal admin dashboard",
      "API development & multi-service integration",
      "Data pipeline & automated reporting",
      "Role-based access control & security",
    ],
  },
  {
    id: "design",
    name: "UI/UX & Design System",
    tagline: "Conversion-focused interfaces and brand identity",
    duration: "2 – 3 Weeks",
    idealFor: "Products needing a world-class visual makeover",
    deliverables: [
      "Complete Figma design system & UI kit",
      "Interactive high-fidelity prototypes",
      "User research & UX flow optimization",
      "Developer-ready design tokens & assets",
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [selectedTier, setSelectedTier] = useState(engagementTiers[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
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

      // Factor cards reveal
      const cards = sectionRef.current?.querySelectorAll(".pricing-card");
      cards?.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
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

      // Interactive tier box reveal
      const tierBox = sectionRef.current?.querySelector(".tier-box");
      if (tierBox) {
        gsap.from(tierBox, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tierBox,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-[120px]">
      {/* Section header */}
      <div
        ref={headerRef}
        className="flex items-baseline justify-between section-gutter mb-[60px]"
      >
        <div>
          <span className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-3 block">
            Transparent Investment
          </span>
          <h2
            className="font-light text-ice-cyan"
            style={{ fontSize: "40px", lineHeight: "1.17" }}
          >
            Custom pricing & Scope
          </h2>
        </div>
        <GhostLink href="/book" className="text-sm hidden md:inline" data-cursor="link">
          Start a conversation
        </GhostLink>
      </div>

      <div className="section-gutter">
        {/* Intro Banner */}
        <div className="max-w-3xl mb-16">
          <p className="text-lg text-ice-cyan/70 font-light leading-relaxed mb-6">
            We don&apos;t believe in static rate cards. Every project is engineered to your exact operational targets — you pay for outcome and precision, nothing more.
          </p>
          
          <div className="inline-flex items-center gap-3 bg-carbon/80 border border-ice-cyan/15 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-ice-cyan animate-pulse" />
            <span className="text-xs text-ice-cyan/80 font-light tracking-wide">
              Itemized Proposal Delivered Within 48 Hours
            </span>
          </div>
        </div>

        {/* 3 Pricing Factor Cards with Custom SVG Visual Graphics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Card 1 — Scale */}
          <div
            className="pricing-card bg-carbon border border-ice-cyan/10 hover:border-ice-cyan/30 p-8 rounded-2xl transition-all duration-500 group relative overflow-hidden"
            data-cursor="action"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-ice-cyan/5 rounded-full blur-2xl group-hover:bg-ice-cyan/10 transition-colors duration-500" />
            
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] uppercase tracking-widest text-ice-cyan/40 border border-ice-cyan/15 px-2.5 py-1 rounded">
                01 / Scope
              </span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-ice-cyan/60 group-hover:text-ice-cyan transition-colors">
                <rect x="6" y="8" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="6" y="14" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                <rect x="6" y="20" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
              </svg>
            </div>

            <h3 className="font-light text-ice-cyan text-2xl mb-3">
              Project Scale
            </h3>

            <p className="text-sm text-ice-cyan/50 leading-relaxed mb-8">
              From a targeted single-page product launch to a multi-role enterprise ecosystem. Scale defines the volume of views, data states, and user journeys.
            </p>

            {/* Scope Meter */}
            <div className="pt-4 border-t border-ice-cyan/10 space-y-2">
              <div className="flex justify-between text-xs text-ice-cyan/40">
                <span>Landing Page</span>
                <span className="text-ice-cyan">Enterprise Platform</span>
              </div>
              <div className="w-full h-1 bg-ice-cyan/10 rounded-full overflow-hidden">
                <div className="h-full bg-ice-cyan/60 group-hover:bg-ice-cyan transition-all duration-500 w-3/4" />
              </div>
            </div>
          </div>

          {/* Card 2 — Complexity */}
          <div
            className="pricing-card bg-carbon border border-ice-cyan/10 hover:border-ice-cyan/30 p-8 rounded-2xl transition-all duration-500 group relative overflow-hidden"
            data-cursor="action"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-ice-cyan/5 rounded-full blur-2xl group-hover:bg-ice-cyan/10 transition-colors duration-500" />

            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] uppercase tracking-widest text-ice-cyan/40 border border-ice-cyan/15 px-2.5 py-1 rounded">
                02 / Engineering
              </span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-ice-cyan/60 group-hover:text-ice-cyan transition-colors">
                <rect x="8" y="8" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
                <line x1="16" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
                <line x1="16" y1="24" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5" />
                <line x1="4" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
                <line x1="24" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>

            <h3 className="font-light text-ice-cyan text-2xl mb-3">
              Technical Complexity
            </h3>

            <p className="text-sm text-ice-cyan/50 leading-relaxed mb-8">
              Not all code is equal. Custom AI pipelines, real-time sync, WebGL interactions, and complex API integrations require deeper engineering cycles.
            </p>

            {/* Tech Level Meter */}
            <div className="pt-4 border-t border-ice-cyan/10 space-y-2">
              <div className="flex justify-between text-xs text-ice-cyan/40">
                <span>Standard Web</span>
                <span className="text-ice-cyan">AI & Autonomous Engine</span>
              </div>
              <div className="w-full h-1 bg-ice-cyan/10 rounded-full overflow-hidden">
                <div className="h-full bg-ice-cyan/60 group-hover:bg-ice-cyan transition-all duration-500 w-5/6" />
              </div>
            </div>
          </div>

          {/* Card 3 — Velocity */}
          <div
            className="pricing-card bg-carbon border border-ice-cyan/10 hover:border-ice-cyan/30 p-8 rounded-2xl transition-all duration-500 group relative overflow-hidden"
            data-cursor="action"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-ice-cyan/5 rounded-full blur-2xl group-hover:bg-ice-cyan/10 transition-colors duration-500" />

            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] uppercase tracking-widest text-ice-cyan/40 border border-ice-cyan/15 px-2.5 py-1 rounded">
                03 / Velocity
              </span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-ice-cyan/60 group-hover:text-ice-cyan transition-colors">
                <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 10 V16 L20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <h3 className="font-light text-ice-cyan text-2xl mb-3">
              Delivery Velocity
            </h3>

            <p className="text-sm text-ice-cyan/50 leading-relaxed mb-8">
              Speed costs focus. Urgent 2-week launch sprints allocate dedicated senior engineers full-time, while standard 6-week timelines allow methodical iteration.
            </p>

            {/* Timeline Meter */}
            <div className="pt-4 border-t border-ice-cyan/10 space-y-2">
              <div className="flex justify-between text-xs text-ice-cyan/40">
                <span>Standard Schedule</span>
                <span className="text-ice-cyan">Express Rapid Sprint</span>
              </div>
              <div className="w-full h-1 bg-ice-cyan/10 rounded-full overflow-hidden">
                <div className="h-full bg-ice-cyan/60 group-hover:bg-ice-cyan transition-all duration-500 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scope & Preset Explorer Widget */}
        <div className="tier-box bg-carbon border border-ice-cyan/15 p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-2 block">
              Interactive Scope Selector
            </span>
            <h3 className="text-2xl font-light text-ice-cyan">
              Explore Common Engagement Packages
            </h3>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-3 mb-10 border-b border-ice-cyan/10 pb-8">
            {engagementTiers.map((tier) => {
              const isSelected = selectedTier.id === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`text-sm px-5 py-2.5 rounded-lg border transition-all duration-300 ${
                    isSelected
                      ? "border-ice-cyan bg-ice-cyan/10 text-ice-cyan"
                      : "border-ice-cyan/15 text-ice-cyan/50 hover:text-ice-cyan hover:border-ice-cyan/30"
                  }`}
                  data-cursor="link"
                >
                  {tier.name}
                </button>
              );
            })}
          </div>

          {/* Selected Tier Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h4 className="text-2xl font-light text-ice-cyan">
                    {selectedTier.name}
                  </h4>
                  <span className="text-xs text-ice-cyan/70 border border-ice-cyan/20 px-3 py-1 rounded-full">
                    {selectedTier.duration}
                  </span>
                </div>
                <p className="text-sm text-ice-cyan/50">{selectedTier.tagline}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-ice-cyan/30 mb-3">
                  Ideal For
                </p>
                <p className="text-sm text-ice-cyan/70">{selectedTier.idealFor}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-ice-cyan/30 mb-3">
                  Key Scope Deliverables
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedTier.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-ice-cyan/70">
                      <CheckCircle2 size={16} className="text-ice-cyan/60 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Box for Selected Tier */}
            <div className="lg:col-span-5 bg-void p-8 rounded-xl border border-ice-cyan/10 text-center flex flex-col justify-center items-center">
              <span className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-2">
                Estimated Timeline
              </span>
              <div className="text-3xl font-light text-ice-cyan mb-4">
                {selectedTier.duration}
              </div>
              <p className="text-xs text-ice-cyan/50 mb-8 max-w-xs">
                Get a custom itemized breakdown for {selectedTier.name.toLowerCase()} within 48 hours.
              </p>
              
              <GhostLink
                href={`/book?type=${selectedTier.id.toUpperCase()}`}
                className="text-sm inline-flex items-center gap-2"
                data-cursor="link"
              >
                Request proposal for {selectedTier.name} <ArrowUpRight size={14} />
              </GhostLink>
            </div>
          </div>
        </div>

        {/* Global CTA Footer */}
        <div className="mt-16 text-center">
          <p className="text-base text-ice-cyan/50 mb-6">
            Have a custom requirement or non-standard architecture?
          </p>
          <GhostLink href="/book" className="text-sm" data-cursor="link">
            Schedule a 30-min discovery call
          </GhostLink>
        </div>
      </div>
    </section>
  );
}
