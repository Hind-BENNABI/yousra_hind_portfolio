"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-body text-base transition-colors duration-300",
    variant === "primary" &&
      "bg-ink text-white hover:bg-ink/90",
    variant === "outline" &&
      "border border-primary bg-white text-ink hover:bg-primary/10",
    className
  );

  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={styles}
    >
      {children}
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={typeof children === "string" ? children : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  );
}
