"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Mail, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeInUp, fadeIn, floatAnimation, staggerContainer } from "@/lib/animations";

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/hind-bennabi",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/Hind-BENNABI",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=yousra.hind.bennabi@ensia.edu.dz",
    label: "Email",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={fadeInUp}
            className="font-body text-2xl text-primary"
          >
            Hello I&rsquo;m
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-script text-4xl leading-tight text-black sm:text-5xl md:text-6xl"
          >
            BENNABI <span className="text-primary">Yousra Hind</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-body text-xl text-black sm:text-2xl"
          >
            Artificial Intelligence Student
          </motion.p>

          <motion.span
            variants={fadeInUp}
            className="h-px w-11 bg-ink/40"
            aria-hidden="true"
          />

          <motion.p
            variants={fadeInUp}
            className="max-w-xl font-body text-lg leading-relaxed text-muted sm:text-xl"
          >
            I enjoy building machine learning projects, exploring optimization
            algorithms, and creating digital experiences, but you&rsquo;ll also
            find me crocheting, designing planners, organizing my workspace,
            making aesthetic content, and constantly learning something new.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-4 flex flex-wrap items-center gap-4"
          >
            <Button href="/#projects" icon={<ArrowRight size={18} />}>
              Explore Projects
            </Button>
            <Button href="/images/projects/resume_cv.pdf" variant="outline">
              Download resume
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3">
            <span className="font-body text-lg text-muted">find me online</span>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-[45px] items-center justify-center rounded-full border border-primary bg-white text-ink transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>


      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center"
      >
        <motion.div animate={floatAnimation}>
          <Image
            src="/images/projects/blob.webp"
            alt="Hind"
            width={2500}
            height={2500}
            priority
            className="object-contain"
          />
        </motion.div>
      </motion.div>


      </div>
    </section>
  );
}
