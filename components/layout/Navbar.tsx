"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/cn";

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Journey", href: "/#journey" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const scrolled = useScrollPosition();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(46,58,89,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="font-display text-2xl text-black sm:text-3xl"
          aria-label="Hind. — home"
        >
          Hind.
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-nav text-lg text-black transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile: simple link list, no JS menu needed given small link count */}
        <ul className="flex items-center gap-4 md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-nav text-sm text-black transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
