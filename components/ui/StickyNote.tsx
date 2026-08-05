"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import StickyNotePaper from "./StickyNotePaper";
import StickyNotePin from "./StickyNotePin";

export default function StickyNote() {
const controls = useAnimation();

const swingEnabled = useRef(true);

const [opened, setOpened] = useState(false);

const [visible, setVisible] = useState(false);
  /*
  ---------------------------------------
  Show after page loads
  ---------------------------------------
  */

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  /*
  ---------------------------------------
  Swing animation
  ---------------------------------------
  */

useEffect(() => {
  if (!visible) return;

  swingEnabled.current = !opened;

  let mounted = true;

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const swing = async () => {
    while (mounted) {
      if (!swingEnabled.current) {
        await sleep(100);
        continue;
      }

      await controls.start({
        rotate: -4,
        transition: {
          duration: 2.8,
          ease: "easeInOut",
        },
      });

      if (!mounted) break;
      if (!swingEnabled.current) continue;

      await controls.start({
        rotate: 4,
        transition: {
          duration: 2.8,
          ease: "easeInOut",
        },
      });

      if (!mounted) break;
      if (!swingEnabled.current) continue;

      await controls.start({
        rotate: 0,
        transition: {
          duration: 2.8,
          ease: "easeInOut",
        },
      });
    }
  };

  swing();

  return () => {
    mounted = false;
  };
}, [visible, opened, controls]);

  /*
  ---------------------------------------
  Open note
  ---------------------------------------
  */

async function openNote() {
  if (opened) return;

  console.log("OPEN");

  swingEnabled.current = false;

  await controls.start({
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  });

  setOpened(true);
}

  /*
  ---------------------------------------
  Close note
  ---------------------------------------
  */

async function closeNote() {
  console.log("CLOSE");

  swingEnabled.current = true;

  setOpened(false);
}

  /*
  ---------------------------------------
  After successful feedback
  ---------------------------------------
  */

  async function handleSuccess() {
    // Optional success animation

    await controls.start({
      scale: 1.03,
      transition: {
        duration: 0.25,
      },
    });

    // Give the visitor a moment to see success

    setTimeout(async () => {
      await closeNote();
    }, 1200);
  }

  if (!visible) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 120,
        rotate: -8,
      }}
      animate={{
        opacity: 1,
        x: 0,
        rotate: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed bottom-10 right-10 z-[999]"
    >
      <motion.div
        animate={controls}
        whileHover={
          !opened
            ? {
                rotate: -8,
                y: -6,
                scale: 1.04,
              }
            : {}
        }
        onClick={openNote}
        className="origin-top cursor-pointer"
      >
        <StickyNotePin />

        <div className="pt-4">
          <StickyNotePaper
            opened={opened}
            onSend={handleSuccess}
          />
        </div>
      </motion.div>

      {opened && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeNote();
          }}
          className="absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
        >
          ✕
        </button>
      )}
    </motion.div>
  );
}