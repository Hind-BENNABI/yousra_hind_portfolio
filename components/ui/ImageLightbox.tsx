
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

interface ImageItem {
  src: string;
  alt: string;
}

interface Props {
  images: ImageItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: Props) {
  /* ---------------- Keyboard Navigation ---------------- */

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  /* ---------------- Prevent Body Scroll ---------------- */

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [currentIndex]);

  if (currentIndex === null) return null;

  const image = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-50 rounded-full bg-white/80 p-3 text-black shadow-xl backdrop-blur transition hover:bg-white"
        >
          <X size={22} />
        </button>

        {/* Previous */}

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/80 p-3 text-black shadow-xl backdrop-blur transition hover:bg-white"
          >
            <ChevronLeft size={30} />
          </button>
        )}

        {/* Next */}

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/80 p-3 text-black shadow-xl backdrop-blur transition hover:bg-white"
          >
            <ChevronRight size={30} />
          </button>
        )}

        {/* Counter */}

        <div className="absolute bottom-8 rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-black shadow-lg backdrop-blur">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Keyboard Hint */}

        <div className="absolute bottom-20 hidden text-sm text-white/70 md:block">
          ← → Navigate &nbsp;&nbsp; • &nbsp;&nbsp; ESC Close
        </div>

        {/* Image */}

        <motion.div
          key={image.src}
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.94,
          }}
          transition={{
            duration: 0.25,
          }}
          className="relative h-[90vh] w-full max-w-7xl px-6"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}