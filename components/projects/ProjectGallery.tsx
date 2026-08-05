"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface Props {
  title: string;
  hero: string;
  gallery: string[];
}

export default function ProjectGallery({
  title,
  hero,
  gallery,
}: Props) {
  const images = useMemo(
    () => [
      {
        src: hero,
        alt: `${title} Cover`,
      },
      ...gallery.map((img, index) => ({
        src: img,
        alt: `${title} Screenshot ${index + 1}`,
      })),
    ],
    [hero, gallery, title]
  );

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % images.length;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + images.length) % images.length;
    });
  };

  return (
    <>
      <section className="mt-20">
        <h2 className="mb-8 font-display text-3xl text-black">
          Project Gallery
        </h2>

        {/* Hero */}

        <motion.button
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.25 }}
          onClick={() => openImage(0)}
          className="group relative mb-8 block aspect-video w-full overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-lg"
        >
          <Image
            src={hero}
            alt={`${title} Cover`}
            fill
            priority
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
        </motion.button>

        {/* Thumbnails */}

        {gallery.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {gallery.map((img, index) => (
              <motion.button
                key={img}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => openImage(index + 1)}
                className="group relative aspect-video overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm"
              >
                <Image
                  src={img}
                  alt={`${title} Screenshot ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </motion.button>
            ))}
          </div>
        )}
      </section>

      <ImageLightbox
        images={images}
        currentIndex={currentIndex}
        onClose={closeImage}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}