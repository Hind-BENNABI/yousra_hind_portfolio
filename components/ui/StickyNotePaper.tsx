"use client";

import { AnimatePresence, motion } from "framer-motion";
import StickyMessage from "./StickyNoteMessage";

interface Props {
  opened: boolean;
  onSend: () => void;
}

export default function StickyNotePaper({
  opened,
  onSend,
}: Props) {
  return (
    <motion.div
      animate={{
        rotateX: opened ? -18 : 0,
        scale: opened ? 1.05 : 1,
        height: opened ? 450 : 190,
      }}
      transition={{
        duration: 0.45,
      }}
      className="relative w-[300px] overflow-hidden rounded-2xl"
      style={{
        transformOrigin: "top center",
        background: "#FFF6B8",
        boxShadow: "0 24px 50px rgba(0,0,0,.16)",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.15),rgba(255,255,255,0))",
      }}
    >
      {/* Folded corner */}

      <div
        className="absolute right-0 top-0 h-6 w-6 z-20"
        style={{
          clipPath: "polygon(0 0,100% 0,100% 100%)",
          background: "#FFE97A",
        }}
      />

      <AnimatePresence mode="wait">

        {!opened ? (

          <motion.div
            key="closed"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
              pointerEvents: "none",
            }}

            transition={{
              duration: 0.25,
            }}

            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <span className="text-5xl">
              💌
            </span>

            <h3 className="mt-5 font-[Caveat] text-4xl">
              For You ♡
            </h3>

          </motion.div>

        ) : (

          <motion.div
            key="opened"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
              pointerEvents: "none",
            }}

            transition={{
              duration: 0.25,
            }}

            className="absolute inset-0 p-8"
          >
            <StickyMessage
              onSuccess={onSend}
            />
          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  );
}