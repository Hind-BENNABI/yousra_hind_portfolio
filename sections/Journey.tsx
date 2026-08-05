"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { creativeCategories } from "@/data/creative";
import { staggerContainer, cardReveal } from "@/lib/animations";
import { cn } from "@/lib/cn";

const bgMap = {
  pink: "bg-pink-light",
  blue: "bg-blue-soft",
  green: "bg-green-light",
  yellow: "bg-yellow-light",
};

export function Journey() {
  return (
    <section id="journey" className="relative py-28">
      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16">
        <SectionTitle eyebrow="Journey" title="Beyond The Code" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
          >
          {creativeCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardReveal}
              whileHover={{ y: -8 }}
              className={cn(
                "flex flex-col gap-4 rounded-4xl px-8 py-10",
                bgMap[cat.bg]
              )}
            >
              <span className="text-4xl" aria-hidden="true">
                {cat.emoji}
              </span>
              <h3 className="font-display text-2xl text-black">{cat.title}</h3>
              <p className="font-body text-base leading-relaxed text-ink">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Button href="/creative" icon={<ArrowRight size={18} />}>
            All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
