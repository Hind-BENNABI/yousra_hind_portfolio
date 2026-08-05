import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { Tag } from "@/components/ui/Tag";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.shortTitle,
    description: project.description,
    openGraph: {
      title: project.shortTitle,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="pt-40 pb-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        {/* Back */}

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-body text-base text-ink transition hover:text-primary"
        >
          <ArrowLeft size={18} />
          Back To Projects
        </Link>

        {/* Title */}

        <h1 className="mt-8 font-display text-4xl leading-tight text-black sm:text-5xl">
          {project.shortTitle}
        </h1>

        {/* Description */}

        <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-ink sm:text-xl">
          {project.longDescription ?? project.description}
        </p>

        {/* Stack */}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {/* Features */}

        {project.features && project.features.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-8 font-display text-3xl text-black">
              Key Features
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <p className="font-body text-base leading-relaxed text-ink">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}

        <ProjectGallery
          title={project.shortTitle}
          hero={project.image}
          gallery={project.gallery ?? []}
        />
      </div>
    </article>
  );
}