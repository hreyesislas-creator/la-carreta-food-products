"use client";

import { motion } from "motion/react";
import { CornEar, Agave, Flourish, StarMark } from "./Ornaments";

const ease = [0.22, 1, 0.36, 1] as const;

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative isolate overflow-hidden bg-hearth py-32 md:py-44 text-paper"
    >
      {/* warm light from above */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,200,130,0.35), rgba(255,200,130,0) 65%)",
        }}
      />
      {/* paper noise */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,220,170,0.45) 0.6px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease }}
          className="flex justify-center mb-10"
        >
          <Flourish className="w-64 h-6" tone="#d6b27a" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease, delay: 0.05 }}
          className="block text-[0.65rem] uppercase tracking-[0.55em] text-gold-soft"
        >
          · Nuestra promesa · Our promise
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
          className="mt-10 font-display italic text-[1.9rem] sm:text-[2.4rem] md:text-[3rem] leading-[1.25] tracking-tight text-paper"
        >
          &ldquo;Donde hay maíz, hay México —{" "}
          <span className="text-gold-soft">
            and where there is masa, there is family.
          </span>
          <br />
          Every tortilla we make carries the memory of stone mills, of
          smoke-darkened comales, and of grandmothers who could read the
          masa with the tips of their fingers.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-gold-soft" />
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold-soft">
            Gilberto y Celia Cervantes · Founders, 1939
          </span>
          <span className="h-px w-10 bg-gold-soft" />
        </motion.div>

        {/* Decorative side ornaments */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease, delay: 0.3 }}
          className="absolute -left-4 md:left-2 top-1/2 -translate-y-1/2"
        >
          <CornEar className="w-12 md:w-16 h-auto" tone="#d6b27a" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 0.35, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease, delay: 0.4 }}
          className="absolute -right-2 md:right-4 top-1/2 -translate-y-1/2"
        >
          <Agave className="w-24 md:w-32 h-auto" tone="#d6b27a" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="mt-14 flex justify-center items-center gap-4 text-gold-soft"
        >
          <StarMark className="w-3 h-3" tone="#d6b27a" />
          <span className="font-display italic text-base">
            Original family recipes. Handcrafted since 1939.
          </span>
          <StarMark className="w-3 h-3" tone="#d6b27a" />
        </motion.div>
      </div>
    </section>
  );
}
