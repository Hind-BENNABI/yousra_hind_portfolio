"use client";

import { useRef, useState } from "react";
import ImageLightbox from "@/components/ui/ImageLightbox";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { CreativeCategory } from "@/types";
import { cn } from "@/lib/cn";

interface Props {
  category: CreativeCategory;
}

const bgMap = {
  pink: "bg-pink-light",
  blue: "bg-blue-soft",
  green: "bg-green-light",
  yellow: "bg-yellow-light",
};

export default function CreativeSection({ category }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={cn(
        "rounded-[40px] p-10",
        bgMap[category.bg]
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-4xl text-black">
            {category.title}
          </h2>

          <p className="mt-4 max-w-3xl font-body text-lg leading-relaxed text-ink">
            {category.description}
          </p>
        </div>

        <div className="hidden gap-3 md:flex">
          <button
            onClick={scrollLeft}
            className="rounded-full bg-white p-3 shadow transition hover:scale-110"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            className="rounded-full bg-white p-3 shadow transition hover:scale-110"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar mt-10 flex gap-6 overflow-x-auto scroll-smooth pb-3"
      >
        {category.images.map((image,index) => (
            <motion.div
            key={image.src}
            whileHover={{ y: -8 }}
            whileTap={{ scale: .98 }}
            onClick={() => setCurrentIndex(index)}
            className="relative h-[320px] min-w-[260px] cursor-pointer overflow-hidden rounded-[30px] bg-white shadow-lg"
            >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
      <ImageLightbox
        images={category.images}
        currentIndex={currentIndex}
        onClose={() => setCurrentIndex(null)}
        onNext={() =>
            setCurrentIndex((prev) =>
            prev === null
                ? 0
                : (prev + 1) % category.images.length
            )
        }
        onPrev={() =>
            setCurrentIndex((prev) =>
            prev === null
                ? 0
                : (prev - 1 + category.images.length) %
                category.images.length
            )
        }
        />
    </section>
  );
}