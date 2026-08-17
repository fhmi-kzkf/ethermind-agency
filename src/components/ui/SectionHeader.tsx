"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import GhostLink from "./GhostLink";

interface SectionHeaderProps {
  title: string;
  action?: {
    label: string;
    href: string;
  };
}

export default function SectionHeader({ title, action }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="flex items-baseline justify-between section-gutter mb-[80px]"
    >
      <h2
        className="font-light text-ice-cyan"
        style={{ fontSize: "40px", lineHeight: "1.17" }}
      >
        {title}
      </h2>
      {action && (
        <GhostLink href={action.href} className="text-sm hidden md:inline">
          {action.label}
        </GhostLink>
      )}
    </motion.div>
  );
}
