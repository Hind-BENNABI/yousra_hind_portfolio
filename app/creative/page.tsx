import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { creativeCategories } from "@/data/creative";
import CreativeSection from "@/components/creative/CreativeSection";

export default function CreativePage() {
  return (
    <main className="pt-40 pb-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-base text-ink transition hover:text-primary"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="font-body text-lg uppercase tracking-[0.35em] text-primary">
            Beyond The Code
          </p>

          <h1 className="mt-4 font-display text-5xl leading-tight text-black sm:text-6xl">
            Creativity Shapes
            <br />
            Everything I Build
          </h1>

          <p className="mt-8 font-body text-xl leading-relaxed text-muted">
            Programming is only one side of my journey.
            Outside of AI, I enjoy creating with my hands,
            exploring new hobbies, documenting moments,
            and constantly learning new skills.
            This page is a collection of everything
            that inspires me beyond technology.
          </p>
        </div>

        <div className="mt-24 space-y-20">
          {creativeCategories.map((category) => (
            <CreativeSection
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}