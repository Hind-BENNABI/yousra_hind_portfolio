"use client";

import { motion } from "framer-motion";
import { Palette, PenTool, Camera } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillCard } from "@/components/cards/SkillCard";
import { marqueeSkills } from "@/data/skills";
import { fadeInUp, staggerContainer, cardReveal } from "@/lib/animations";
import { cn } from "@/lib/cn";

const stats = [
  {
    label: "builder",
    sub: "Software • AI • Robotics",
    bg: "bg-blue-light",
    text: "text-primary-dark",
    icon: PenTool,
  },
  {
    label: "Creator",
    sub: "Design • Crafts • Content",
    bg: "bg-yellow-light",
    text: "text-yellow-dark",
    icon: Palette,
  },
  {
    label: "Explorer",
    sub: "33+ hobbies and counting",
    bg: "bg-green-light",
    text: "text-green-dark",
    icon: Camera,
  },
  {
    label: "Curious",
    sub: "Always learning something new",
    bg: "bg-pink-light",
    text: "text-pink-dark",
    icon: Palette,
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      {/* skills marquee */}
      <div className="relative mb-24 overflow-hidden py-2">
        <div className="flex w-max animate-marquee gap-4">
          {marqueeSkills.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16">
        <SectionTitle eyebrow="ABOUT ME" title="Creating With Code & Craft" />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-10 max-w-4xl text-center font-body text-lg leading-relaxed text-muted sm:text-xl"
        >
          To me, technology and creativity aren&rsquo;t separate worlds—they
          complement each other. I enjoy approaching problems analytically
          while designing solutions that are intuitive, thoughtful, visually
          appealing, and ultimately practical to use. That&rsquo;s why I find
          just as much satisfaction in refining an algorithm as I do in
          perfecting the details of a handmade creation. In both, I&rsquo;m
          driven by the desire to create work that is meaningful,
          well-crafted, and enjoyable to use.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4"
        >
          {stats.map(({ label, sub, bg, text, icon: Icon }) => (
            <motion.div
              key={label}
              variants={cardReveal}
              whileHover={{ y: -8 }}
              className={cn(
                "flex flex-col items-center gap-4 rounded-5xl px-6 py-10 text-center",
                bg
              )}
            >
              <Icon className={text} size={40} strokeWidth={1.5} />
              <span className={cn("font-body text-3xl", text)}>{label}</span>
              <span className="font-body text-base text-ink">{sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
