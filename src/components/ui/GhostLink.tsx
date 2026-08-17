"use client";

import Link from "next/link";

interface GhostLinkProps {
  href: string;
  children: React.ReactNode;
  inverted?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function GhostLink({
  href,
  children,
  inverted = false,
  className = "",
  onClick,
}: GhostLinkProps) {
  const baseClass = inverted ? "ghost-link-inverted" : "ghost-link";

  if (href.startsWith("#")) {
    return (
      <a href={href} className={`${baseClass} ${className}`} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClass} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}
