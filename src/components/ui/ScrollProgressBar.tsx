"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const ctx = gsap.context(() => {
      gsap.to(bar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-ice-cyan/10">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-ice-cyan/40 via-ice-cyan to-white origin-left transform scale-x-0 shadow-[0_0_12px_rgba(215,243,245,0.8)]"
      />
    </div>
  );
}
