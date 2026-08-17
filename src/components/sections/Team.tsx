"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GhostLink from "@/components/ui/GhostLink";
import Image from "next/image";
import { team } from "@/data/team";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const members = sectionRef.current?.querySelectorAll(".team-member");
      members?.forEach((member, i) => {
        gsap.from(member, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: member,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Image parallax
        const img = member.querySelector(".team-img");
        if (img) {
          gsap.to(img, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: member,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-[120px]">
      <div
        ref={headerRef}
        className="flex items-baseline justify-between section-gutter mb-[80px]"
      >
        <h2
          className="font-light text-ice-cyan"
          style={{ fontSize: "40px", lineHeight: "1.17" }}
        >
          The team
        </h2>
        <GhostLink href="#team" className="text-sm hidden md:inline" data-cursor="link">
          More about us
        </GhostLink>
      </div>

      <div className="section-gutter">
        <div className="max-w-2xl mb-16">
          <p className="text-base text-ice-cyan/70">
            We&apos;re a small, dedicated crew — not a faceless corporation. Every project
            gets our full attention, every line of code gets our personal stamp. When you
            work with Ethermind, you work directly with the people building your product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <div key={member.id} className="team-member group">
              <div
                className="bg-carbon overflow-hidden mb-5 relative"
                style={{ borderRadius: "15px" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="team-img object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <h3
                className="font-light text-ice-cyan mb-1"
                style={{ fontSize: "30px", lineHeight: "1.22" }}
              >
                {member.name}
              </h3>
              <p className="text-sm text-ice-cyan/50 mb-3">{member.role}</p>
              <p className="text-sm text-ice-cyan/40">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
