"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GhostLink from "@/components/ui/GhostLink";

const navLinks = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/book" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-void/90 backdrop-blur-md border-b border-ice-cyan/15 shadow-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="section-gutter flex items-center justify-between" style={{ height: "80px" }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" data-cursor="link">
          <Image
            src="/images/logo ethermind.jpeg"
            alt="Ethermind"
            width={36}
            height={36}
            style={{ width: "36px", height: "36px" }}
            className="rounded-sm opacity-90 group-hover:opacity-100 transition-opacity mix-blend-screen"
          />
          <span className="text-ice-cyan font-light text-lg tracking-wide hidden sm:block">
            Ethermind
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <GhostLink key={link.label} href={link.href} className="text-sm" data-cursor="link">
              {link.label}
            </GhostLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-ice-cyan bg-transparent border-0 cursor-pointer p-2"
          aria-label="Toggle menu"
          data-cursor="link"
        >
          {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-void border-t border-ice-cyan/10 overflow-hidden"
          >
            <div className="section-gutter py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <GhostLink
                  key={link.label}
                  href={link.href}
                  className="text-lg"
                  onClick={() => setIsMenuOpen(false)}
                  data-cursor="link"
                >
                  {link.label}
                </GhostLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
