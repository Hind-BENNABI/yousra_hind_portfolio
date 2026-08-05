import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Explore every project by Yousra Hind Bennabi, spanning AI, machine learning, full-stack development, and UI/UX design.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-40 pb-28">
      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-base text-ink transition hover:text-primary"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <div className="mt-8">
          <SectionTitle
            eyebrow="PORTFOLIO"
            title="All Projects"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}