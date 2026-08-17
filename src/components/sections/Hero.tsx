"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GhostLink from "@/components/ui/GhostLink";

gsap.registerPlugin(ScrollTrigger);

const heroVideos = [
  "/videos/Geometric_shapes_locking_together_1080p_202608171402.mp4",
  "/videos/Hand_touching_glowing_glass_orb_202608171409.mp4",
  "/videos/Chrome_sculpture_on_dark_pedestal_202608171418.mp4",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentBoxRef = useRef<HTMLDivElement>(null);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Entrance Animations
      gsap.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out",
      });

      const headline = headlineRef.current;
      if (headline) {
        const words = headline.querySelectorAll(".hero-word");
        gsap.from(words, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.06,
          delay: 0.4,
          ease: "power3.out",
        });
      }

      gsap.from(subtextRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: 1.0,
        ease: "power3.out",
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1.3,
        ease: "power3.out",
      });

      // 2. Advanced ScrollTrigger Effects
      
      // Video scale zoom & parallax push on scroll
      gsap.to(videoContainerRef.current, {
        y: 120,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content Box scale-down & fade-out as user scrolls past hero
      gsap.to(contentBoxRef.current, {
        scale: 0.92,
        opacity: 0.2,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // Dark Overlay darkens progressively on scroll
      gsap.to(overlayRef.current, {
        opacity: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleVideoEnded = (index: number) => {
    const nextIndex = (index + 1) % heroVideos.length;
    setCurrentVideoIndex(nextIndex);
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }
  };

  useEffect(() => {
    const activeVideo = videoRefs.current[currentVideoIndex];
    if (activeVideo) {
      activeVideo.play().catch(() => {});
    }
  }, [currentVideoIndex]);

  const headlineText =
    "We build intelligent systems, ship products, and design interfaces that convert.";
  const words = headlineText.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      data-cursor="play"
    >
      {/* Full-bleed video background */}
      <div ref={videoContainerRef} className="absolute inset-0 z-0">
        {heroVideos.map((videoSrc, index) => (
          <video
            key={videoSrc}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            src={videoSrc}
            autoPlay={index === 0}
            muted
            playsInline
            preload="auto"
            onEnded={() => handleVideoEnded(index)}
          />
        ))}

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-void/70 z-20 pointer-events-none"
        />
      </div>

      {/* Content — positioned on top of video */}
      <div ref={contentBoxRef} className="relative z-30 section-gutter w-full pt-[80px]">
        <div className="max-w-4xl">
          <p
            ref={labelRef}
            className="text-xs uppercase tracking-widest text-ice-cyan/50 mb-8"
          >
            Boutique Tech & Design Agency
          </p>

          <h1
            ref={headlineRef}
            className="font-light text-ice-cyan mb-10"
            style={{
              fontSize: "clamp(36px, 5.5vw, 64px)",
              lineHeight: 1.06,
            }}
          >
            {words.map((word, i) => {
              const linkWords: Record<string, string> = {
                intelligent: "#services",
                systems: "#services",
                products: "#work",
                interfaces: "#services",
              };
              const cleanWord = word.replace(/[,.]/, "");
              const punct = word.replace(cleanWord, "");

              if (linkWords[cleanWord]) {
                return (
                  <span key={i} className="hero-word inline-block mr-[0.3em]">
                    <GhostLink href={linkWords[cleanWord]}>{cleanWord}</GhostLink>
                    {punct}
                  </span>
                );
              }
              return (
                <span key={i} className="hero-word inline-block mr-[0.3em]">
                  {word}
                </span>
              );
            })}
          </h1>

          <div
            ref={subtextRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl"
          >
            <p className="text-base text-ice-cyan/60 font-light">
              A 4-person special ops team specializing in AI automation, MVP
              development, custom tools, and UI/UX design.
            </p>
            <p className="text-base text-ice-cyan/60 font-light">
              Agile. Affordable. Obsessively detail-oriented. We partner with
              startups and growing businesses who refuse to compromise on
              quality.
            </p>
          </div>

          <div ref={ctaRef} className="flex items-center gap-6">
            <GhostLink href="/book" className="text-sm" data-cursor="link">
              Book a free consultation
            </GhostLink>

            {/* Video progress indicator dots */}
            <div className="flex items-center gap-2 ml-4">
              {heroVideos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVideoIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentVideoIndex
                      ? "bg-ice-cyan w-6"
                      : "bg-ice-cyan/30 hover:bg-ice-cyan/50"
                  }`}
                  aria-label={`Go to video ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-widest text-ice-cyan/30">
            Scroll
          </span>
          <div className="w-px h-10 bg-ice-cyan/20 relative overflow-hidden">
            <div className="absolute top-0 w-full h-4 bg-ice-cyan/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
