"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  AiIcon,
  MvpIcon,
  ToolsIcon,
  UiUxIcon,
} from "@/components/icons/ServiceIcons";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const iconComponents: Record<string, React.FC<{ className?: string; size?: number }>> = {
  Brain: AiIcon,
  Rocket: MvpIcon,
  Wrench: ToolsIcon,
  Palette: UiUxIcon,
};

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: string;
  slug: string;
  deliverables: string[];
  index?: number;
}

export default function ServiceCard({
  title,
  subtitle,
  icon,
  slug,
  deliverables,
  index = 0,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        delay: index * 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const Icon = iconComponents[icon] || AiIcon;

  return (
    <div ref={cardRef} data-cursor="action">
      <Link href={`/services/${slug}`} className="block group">
        <div
          className="bg-carbon p-8 h-full transition-all duration-500 group-hover:bg-carbon/80"
          style={{ borderRadius: "15px" }}
        >
          <div className="mb-6">
            <Icon
              size={32}
              className="text-ice-cyan opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <h3
            className="font-light text-ice-cyan mb-3"
            style={{ fontSize: "30px", lineHeight: "1.22" }}
          >
            {title}
          </h3>

          <p className="text-sm text-ice-cyan/60 mb-6">{subtitle}</p>

          <ul className="space-y-2">
            {deliverables.slice(0, 3).map((item) => (
              <li
                key={item}
                className="text-sm text-ice-cyan/40 flex items-start gap-2"
              >
                <span className="text-ice-cyan/20 mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-4 border-t border-ice-cyan/10">
            <span className="ghost-link text-sm">Explore service</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
