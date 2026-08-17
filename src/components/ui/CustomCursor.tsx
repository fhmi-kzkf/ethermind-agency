"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    const labelEl = cursorLabelRef.current;
    if (!cursor || !dot || !labelEl) return;

    // Set initial visibility
    setIsVisible(true);
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest(
        "[data-cursor]"
      ) as HTMLElement | null;

      if (interactiveEl) {
        const cursorType = interactiveEl.dataset.cursor;

        if (cursorType === "view") {
          gsap.to(cursor, {
            width: 80,
            height: 80,
            borderColor: "#d7f3f5",
            duration: 0.3,
            ease: "power2.out",
          });
          setLabel("View");
        } else if (cursorType === "link") {
          gsap.to(cursor, {
            width: 48,
            height: 48,
            borderColor: "#d7f3f5",
            duration: 0.3,
            ease: "power2.out",
          });
          setLabel("");
        } else if (cursorType === "action") {
          gsap.to(cursor, {
            width: 96,
            height: 96,
            borderColor: "#d7f3f5",
            duration: 0.3,
            ease: "power2.out",
          });
          setLabel("Explore");
        } else if (cursorType === "play") {
          gsap.to(cursor, {
            width: 80,
            height: 80,
            borderColor: "#d7f3f5",
            duration: 0.3,
            ease: "power2.out",
          });
          setLabel("Play");
        }

        gsap.to(dot, { scale: 0, duration: 0.2 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor]");

      if (interactiveEl) {
        gsap.to(cursor, {
          width: 24,
          height: 24,
          borderColor: "#d7f3f540",
          duration: 0.3,
          ease: "power2.out",
        });
        setLabel("");
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
      gsap.to(dot, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          width: 24,
          height: 24,
          border: "1px solid #d7f3f540",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      >
        {/* Label */}
        <div
          ref={cursorLabelRef}
          className="text-ice-cyan text-[10px] uppercase tracking-widest font-light whitespace-nowrap"
        >
          {label}
        </div>
      </div>

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 4,
          height: 4,
          backgroundColor: "#d7f3f5",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Hide default cursor on interactive elements */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
