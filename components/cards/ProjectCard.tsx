"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { cardReveal } from "@/lib/animations";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={cardReveal}>
      <Link href={`/projects/${project.slug}`} className="group block">
        <motion.article
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="flex h-full flex-col overflow-hidden rounded-4xl border border-ink/22 bg-[#fcfdff] shadow-sm transition-shadow duration-300 hover:shadow-xl"
        >
          <div className="relative h-[235px] w-full overflow-hidden bg-blue-light">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
          </div>

          <div className="flex flex-1 flex-col gap-4 border-t border-ink/10 px-7 py-6">
            <h3 className="font-body text-xl text-black">{project.shortTitle}</h3>
            <p className="font-body text-base leading-relaxed text-ink line-clamp-3">
              {project.description}
            </p>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
