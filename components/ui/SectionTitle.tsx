"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  accent?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  accent,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="font-body text-lg text-primary tracking-wide sm:text-xl">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl leading-tight text-black sm:text-5xl">
        {title}
        {accent && <span className="text-pink-accent">{accent}</span>}
      </h2>
    </motion.div>
  );
}
