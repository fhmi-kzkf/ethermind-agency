"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionDividerProps {
  index: string;
  label: string;
}

export default function SectionDivider({ index, label }: SectionDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Line draw animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Badge & Dot fade slide-in
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (dotRef.current) {
        gsap.fromTo(
          dotRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="section-gutter py-8 relative">
      <div className="flex items-center gap-4 mb-3">
        {/* Pulsing Node Dot */}
        <div
          ref={dotRef}
          className="w-2 h-2 rounded-full bg-ice-cyan shadow-[0_0_8px_rgba(215,243,245,0.8)] shrink-0"
        />

        {/* Section Badge Index */}
        <div
          ref={badgeRef}
          className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-ice-cyan/50"
        >
          <span className="text-ice-cyan/80 font-semibold">{index}</span>
          <span className="text-ice-cyan/30">//</span>
          <span className="tracking-widest">{label}</span>
        </div>
      </div>

      {/* Hairline Line Draw */}
      <div className="relative w-full h-[1px] bg-ice-cyan/10 overflow-hidden">
        <div
          ref={lineRef}
          className="absolute inset-0 bg-gradient-to-r from-ice-cyan/70 via-ice-cyan/40 to-transparent origin-left transform scale-x-0"
        />
      </div>
    </div>
  );
}
