
"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center gap-8 rounded-[25px] border border-black/10 px-8 py-20 text-center sm:px-16"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #f5fff9 0%, #c1f8ef 36.5%, #b3f6ff 43.3%, #ffd9f1 100%)",
          }}
        >
          <span className="rounded-full border border-primary/30 bg-white/60 px-5 py-2 font-body text-sm text-primary">
            🔗 OPEN TO OPPORTUNITIES
          </span>

          <h2 className="font-display text-4xl leading-tight text-black sm:text-5xl">
            Let&rsquo;s Build Something{" "}
            <span className="text-pink-accent">Meaningful</span>
          </h2>

          <p className="max-w-xl font-body text-lg text-black/60 sm:text-xl">
            Whether it&rsquo;s an AI project, a design collaboration, a
            creative idea, or simply a conversation about technology and
            creativity, I&rsquo;d love to hear from you.
          </p>

        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yousra.hind.bennabi@ensia.edu.dz"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-2 inline-flex items-center gap-3 rounded-full border border-primary bg-white px-7 py-3 font-body text-lg text-muted transition-colors hover:bg-primary/10"
        >
          <Mail size={20} />
          Email me
        </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
