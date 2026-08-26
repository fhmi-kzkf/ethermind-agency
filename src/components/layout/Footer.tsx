"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GhostLink from "@/components/ui/GhostLink";
import Image from "next/image";
import { Globe, Mail, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerVideos = [
  "/videos/Liquid_glass_merging_into_pillar_202608171435.mp4",
  "/videos/Carbon_fiber_ribbons_undulating_202608171437.mp4",
];

export default function Footer() {
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on footer background video container
      if (videoContainerRef.current && ctaSectionRef.current) {
        gsap.to(videoContainerRef.current, {
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleVideoEnded = (index: number) => {
    const nextIndex = (index + 1) % footerVideos.length;
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

  return (
    <footer className="relative bg-void text-ice-cyan border-t border-ice-cyan/10 overflow-hidden">
      {/* 1. Full-Bleed Video Background CTA Panel */}
      <div
        ref={ctaSectionRef}
        className="relative min-h-[520px] flex items-center justify-center overflow-hidden border-b border-ice-cyan/10"
        data-cursor="play"
      >
        {/* Background Videos with Seamless Crossfade */}
        <div ref={videoContainerRef} className="absolute inset-0 z-0">
          {footerVideos.map((videoSrc, index) => (
            <video
              key={videoSrc}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              className={`absolute inset-0 w-full h-full object-cover scale-110 opacity-45 transition-opacity duration-1000 ${
                index === currentVideoIndex ? "opacity-45 z-10" : "opacity-0 z-0"
              }`}
              src={videoSrc}
              autoPlay={index === 0}
              muted
              playsInline
              preload="auto"
              onEnded={() => handleVideoEnded(index)}
            />
          ))}
        </div>

        {/* Translucent Glass & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/60 z-20 pointer-events-none" />

        {/* CTA Content */}
        <div className="relative z-30 section-gutter w-full py-20 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-ice-cyan/50 mb-6 border border-ice-cyan/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Ready to Partner With Us?
          </span>

          <h2
            className="font-light text-ice-cyan max-w-4xl mb-8 leading-none"
            style={{ fontSize: "clamp(48px, 9vw, 110px)", lineHeight: 0.95 }}
          >
            Let&apos;s build.
          </h2>

          <p className="text-base md:text-lg text-ice-cyan/70 font-light max-w-lg mb-10 leading-relaxed">
            You have found us. Now let&apos;s turn your vision into intelligent, high-converting software.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <GhostLink
              href="/book"
              className="text-base inline-flex items-center gap-2"
              data-cursor="link"
            >
              Start a project proposal <ArrowUpRight size={18} />
            </GhostLink>

            <a
              href="mailto:hello@ethermind.agency"
              className="ghost-link text-sm text-ice-cyan/60 hover:text-ice-cyan inline-flex items-center gap-2"
              data-cursor="link"
            >
              <Mail size={14} /> hello@ethermind.agency
            </a>
          </div>
        </div>
      </div>

      {/* 2. Structured Transparent Footer Navigation */}
      <div className="section-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Column (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo ethermind.jpeg"
                alt="Ethermind"
                width={36}
                height={36}
                style={{ width: "36px", height: "36px" }}
                className="rounded-lg mix-blend-screen"
              />
              <span className="text-ice-cyan font-light text-xl tracking-wide">
                Ethermind
              </span>
            </div>

            <p className="text-sm text-ice-cyan/50 max-w-sm leading-relaxed">
              A boutique tech & design agency. Specializing in AI systems, fast-launch MVPs, custom tools, and conversion-focused UI/UX.
            </p>

            <div className="flex items-center gap-2 text-xs text-ice-cyan/40 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Q3/Q4 Projects</span>
            </div>
          </div>

          {/* Navigation Column (3 Cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <GhostLink href="/portfolio" className="text-sm" data-cursor="link">Work & Case Studies</GhostLink>
              <GhostLink href="#services" className="text-sm" data-cursor="link">Services & Capabilities</GhostLink>
              <GhostLink href="#pricing" className="text-sm" data-cursor="link">Custom Pricing & Scope</GhostLink>
              <GhostLink href="#team" className="text-sm" data-cursor="link">The Team</GhostLink>
              <GhostLink href="/book" className="text-sm" data-cursor="link">Book Consultation</GhostLink>
            </div>
          </div>

          {/* Social & Contact Column (4 Cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-6">
              Connect & Reach Out
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/ethermind.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-link text-sm inline-flex items-center gap-2"
                data-cursor="link"
              >
                <Globe size={14} strokeWidth={1.5} />
                Instagram (@ethermind.agency)
              </a>
              <a
                href="mailto:hello@ethermind.agency"
                className="ghost-link text-sm inline-flex items-center gap-2"
                data-cursor="link"
              >
                <Mail size={14} strokeWidth={1.5} />
                hello@ethermind.agency
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Sub-footer */}
        <div className="pt-16 mt-16 border-t border-ice-cyan/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ice-cyan/40">
          <p>© {new Date().getFullYear()} Ethermind Tech & Design Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <GhostLink href="#top" className="text-xs" data-cursor="link">Back to top ↑</GhostLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
