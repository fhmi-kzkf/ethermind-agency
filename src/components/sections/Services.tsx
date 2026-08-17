"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GhostLink from "@/components/ui/GhostLink";
import { services } from "@/data/services";
import {
  AiVisualPreview,
  MvpVisualPreview,
  ToolsVisualPreview,
  UiUxVisualPreview,
} from "@/components/icons/ServiceVisuals";
import {
  Bot,
  Zap,
  Wrench,
  Palette,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const iconComponents = [Bot, Zap, Wrench, Palette];
const serviceVisualPreviews = [
  AiVisualPreview,
  MvpVisualPreview,
  ToolsVisualPreview,
  UiUxVisualPreview,
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
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

      // 2. Service block reveal & line draw
      const blocks = sectionRef.current?.querySelectorAll(".service-block");
      if (blocks) {
        blocks.forEach((block) => {
          // Line draw
          const border = block.querySelector(".service-border");
          if (border) {
            gsap.fromTo(
              border,
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: block,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }

          // Parallax & scale on the visual card — Desktop only (width >= 768) to prevent mobile overlap
          const visualCard = block.querySelector(".service-visual");
          if (visualCard && window.innerWidth >= 768) {
            gsap.to(visualCard, {
              y: -20,
              scale: 1.02,
              ease: "none",
              scrollTrigger: {
                trigger: block,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-[120px]">
      {/* Section header */}
      <div
        ref={headerRef}
        className="flex items-baseline justify-between section-gutter mb-[80px]"
      >
        <h2
          className="font-light text-ice-cyan"
          style={{ fontSize: "40px", lineHeight: "1.17" }}
        >
          What we can do for you
        </h2>
        <GhostLink href="/book" className="text-sm hidden md:inline" data-cursor="link">
          Start a project
        </GhostLink>
      </div>

      {/* Service blocks — one per category */}
      <div className="section-gutter space-y-0">
        {services.map((service, i) => {
          const Icon = iconComponents[i];
          const VisualPreview = serviceVisualPreviews[i];

          return (
            <div
              key={service.id}
              className="service-block relative py-12 md:py-16 group"
              data-cursor="action"
            >
              {/* Animated top border line */}
              <div className="service-border absolute top-0 left-0 right-0 h-[1px] bg-ice-cyan/20 origin-left" />

              <GhostLink
                href={`/services/${service.slug}`}
                className="block border-0 hover:opacity-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  {/* Number + Icon */}
                  <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                    <span className="text-xs text-ice-cyan/30 font-light font-mono">
                      0{i + 1}
                    </span>
                    <div className="service-icon">
                      <Icon size={32} className="text-ice-cyan/40 group-hover:text-ice-cyan transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="md:col-span-3">
                    <h3
                      className="font-light text-ice-cyan group-hover:opacity-90 transition-opacity"
                      style={{ fontSize: "clamp(26px, 2.5vw, 36px)", lineHeight: 1.17 }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-ice-cyan/40 mt-2 font-light">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Capabilities list */}
                  <div className="md:col-span-3">
                    <div className="space-y-2">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="text-sm text-ice-cyan/60 flex items-center gap-2 font-light"
                        >
                          <span className="text-ice-cyan/30 text-xs">—</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-widest text-ice-cyan/30 mb-3 font-mono">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-ice-cyan/50 border border-ice-cyan/15 px-2.5 py-1 rounded bg-carbon/40 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual Preview Graphic Card (With mt-6 md:mt-0 to prevent mobile overlap) */}
                  <div className="md:col-span-3 service-visual mt-6 md:mt-0 pt-2 md:pt-0">
                    {VisualPreview && <VisualPreview />}
                  </div>
                </div>
              </GhostLink>
            </div>
          );
        })}

        {/* Bottom border line */}
        <div className="h-[1px] bg-ice-cyan/20" />
      </div>
    </section>
  );
}
