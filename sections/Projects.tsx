"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/Button";
import { featuredProjects } from "@/data/projects";
import { staggerContainer } from "@/lib/animations";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16">
        <SectionTitle eyebrow="PORTFOLIO" title="Projects I&rsquo;ve Built" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Button href="/projects" icon={<ArrowRight size={18} />}>
            All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
