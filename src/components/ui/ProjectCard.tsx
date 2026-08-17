"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/types/portfolio";
import { categoryIcons } from "@/components/icons/ServiceIcons";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: CaseStudy;
  index?: number;
  size?: "large" | "medium";
}

export default function ProjectCard({
  project,
  index = 0,
  size = "medium",
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance reveal animation
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      // Parallax scale on background icon during scroll
      if (iconRef.current) {
        gsap.to(iconRef.current, {
          scale: 1.2,
          rotate: 8,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const IconComponent = categoryIcons[project.category];
  const isLarge = size === "large";

  return (
    <div ref={cardRef} data-cursor="view" className="will-change-transform">
      <Link href={`/portfolio/${project.id}`} className="block group">
        <div
          className={`bg-carbon overflow-hidden relative border border-ice-cyan/15 group-hover:border-ice-cyan/40 transition-all duration-500 shadow-xl ${
            isLarge ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
          style={{ borderRadius: "15px" }}
        >
          {/* Screenshot Image: Grayscale by default, Full Authentic Color on Hover */}
          {project.thumbnailUrl && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover object-top filter grayscale contrast-[1.05] opacity-45 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}

          {/* Gradient overlay for contrast and legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/70 to-transparent z-10 opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Background icon — subtle watermark */}
          <div ref={iconRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            {IconComponent && (
              <IconComponent
                size={isLarge ? 220 : 160}
                className="text-ice-cyan opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700"
              />
            )}
          </div>

          {/* Category tag */}
          <div className="absolute top-6 left-6 flex gap-2 z-20">
            <span
              className="text-[10px] uppercase tracking-widest text-ice-cyan/90 border border-ice-cyan/25 px-3 py-1 backdrop-blur-md bg-carbon/70 font-mono"
              style={{ borderRadius: "4px" }}
            >
              {project.category}
            </span>
          </div>

          {/* Content overlay — bottom aligned */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
            {/* Client name */}
            <span className="text-xs uppercase tracking-widest text-ice-cyan/50 mb-2 block font-mono">
              {project.clientName}
            </span>

            {/* Project title */}
            <h3
              className="font-light text-ice-cyan mb-3 group-hover:text-white transition-colors duration-300 drop-shadow-md"
              style={{
                fontSize: isLarge ? "clamp(26px, 3.5vw, 36px)" : "clamp(20px, 2.5vw, 26px)",
                lineHeight: 1.15,
              }}
            >
              {project.title.split("—")[0].trim()}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm text-ice-cyan/70 mb-5 max-w-md line-clamp-2 font-light drop-shadow">
              {project.title.split("—")[1]?.trim() || project.solution.slice(0, 90)}
            </p>

            {/* Impact metrics */}
            <div className="flex gap-6 mb-5">
              {project.impactMetrics.slice(0, isLarge ? 4 : 2).map((metric) => (
                <div key={metric.label}>
                  <div className="text-base md:text-lg font-light text-ice-cyan drop-shadow-sm">
                    {metric.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-ice-cyan/40 mt-0.5 font-mono">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="flex items-center gap-2">
              <span className="ghost-link text-xs inline-flex items-center gap-1.5 font-mono text-ice-cyan group-hover:underline">
                View case study <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
