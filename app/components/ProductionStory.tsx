"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CompareSlider } from "./CompareSlider";

const ease = [0.22, 1, 0.36, 1] as const;

// ── Image sources ──────────────────────────────────────────────────────────
// Currently pointing to branded SVG placeholders.
// Swap each src with the production photo path listed in the comment:
const HERITAGE_BEFORE = "/comparison/history.svg";      // → /comparison/history.jpg        2400×1600
const HERITAGE_AFTER  = "/comparison/today.svg";        // → /comparison/today.jpg           2400×1600
const TORTILLA_WITH   = "/comparison/tortilla-chemical.svg"; // → /comparison/tortilla-chemical.jpg 1600×700
const TORTILLA_LA     = "/comparison/tortilla-natural.svg";  // → /comparison/tortilla-natural.jpg  1600×700
const CORN_MASCOT     = "/illustrations/corn-mascot.svg";

export function ProductionStory() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Soft background glow — adds depth without distraction */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-40"
        style={{ background: "radial-gradient(ellipse, rgba(31,95,59,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERITAGE COMPARISON
        ═══════════════════════════════════════════════════════════════ */}
        <HeritageSection />

        {/* Section separator */}
        <div className="my-16 md:my-20">
          <div
            className="h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(31,95,59,0.18) 20%, rgba(155,28,28,0.14) 80%, transparent)" }}
          />
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — TORTILLA COMPARISON
        ═══════════════════════════════════════════════════════════════ */}
        <TortillaSection />

      </div>
    </section>
  );
}

/* ── Section 1: Heritage slider ─────────────────────────────────────────── */

function HeritageSection() {
  return (
    <div>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 text-green-700 px-4 py-1.5 text-[0.64rem] uppercase tracking-[0.2em] font-semibold"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green-600" />
          85+ Years of Tradition
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease, delay: 0.07 }}
          className="mt-4 text-[1.9rem] md:text-[2.7rem] leading-[1.1] tracking-[-0.02em] font-bold"
        >
          Tradition That Started in 1939.{" "}
          <span className="text-green-700">Same Recipe.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease, delay: 0.14 }}
          className="mt-3 text-[0.97rem] text-muted leading-relaxed"
        >
          From a family garage in Montclair to retail shelves across the Southwest — the recipe never changed.
          Drag the slider to see the journey.
        </motion.p>
      </div>

      {/* Comparison slider */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.95, ease, delay: 0.1 }}
      >
        <CompareSlider
          beforeSrc={HERITAGE_BEFORE}
          beforeAlt="Historical black and white photo of La Carreta Tortilleria in Montclair, California, circa 1939"
          beforeLabel="BEFORE · 1939"
          afterSrc={HERITAGE_AFTER}
          afterAlt="Modern La Carreta Mexican Food products on a clean white surface"
          afterLabel="TODAY"
          aspectRatio="16/7"
          initialPosition={44}
          className="shadow-[0_24px_64px_-24px_rgba(0,0,0,0.22)] border border-line-soft"
        />
      </motion.div>

      {/* Below-slider legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease, delay: 0.25 }}
        className="mt-5 grid grid-cols-2 gap-4 max-w-xl mx-auto text-center"
      >
        <div>
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-muted/60">Before · 1939</p>
          <p className="mt-1 text-[0.85rem] text-muted leading-snug">Horse-drawn carreta. Family garage. Original recipes.</p>
        </div>
        <div>
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-green-700">Today</p>
          <p className="mt-1 text-[0.85rem] text-muted leading-snug">Retail shelves. Same recipe. Better presentation.</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Section 2: Tortilla comparison ─────────────────────────────────────── */

function TortillaSection() {
  return (
    <div>

      {/* Header: mascot + headline side by side */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-14 items-center mb-12">

        {/* Corn mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src={CORN_MASCOT}
            alt="Friendly corn mascot representing La Carreta's commitment to natural ingredients"
            width={200}
            height={286}
            unoptimized
            className="w-[160px] md:w-[200px] lg:w-[240px] h-auto drop-shadow-[0_16px_32px_rgba(31,95,59,0.22)]"
          />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease, delay: 0.08 }}
        >
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 text-red-700 px-4 py-1.5 text-[0.64rem] uppercase tracking-[0.2em] font-semibold">
            What Makes La Carreta Different
          </span>

          <h2 className="mt-5 text-[2.5rem] md:text-[3.4rem] lg:text-[4.2rem] leading-[1.02] tracking-[-0.03em] font-black uppercase text-green-700">
            A Real Corn Tortilla...
          </h2>
          <h2 className="text-[2.5rem] md:text-[3.4rem] lg:text-[4.2rem] leading-[1.02] tracking-[-0.03em] font-black uppercase text-red-700">
            Looks Like This.
          </h2>

          <p className="mt-5 max-w-md text-[0.97rem] text-muted leading-[1.72]">
            Corn. Water. Lime. That&rsquo;s it. No artificial preservatives.
            No chemicals added to extend shelf life. Just what a tortilla
            has always been.
          </p>

          {/* Ingredient pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {["Corn", "Water", "Lime", "No Preservatives"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] font-semibold text-green-700"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green-600" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tortilla comparison slider */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.95, ease, delay: 0.05 }}
      >
        <CompareSlider
          beforeSrc={TORTILLA_WITH}
          beforeAlt="Tortilla made with artificial preservatives — pale, dry, and brittle in appearance"
          beforeLabel="WITH PRESERVATIVES"
          afterSrc={TORTILLA_LA}
          afterAlt="La Carreta natural corn tortilla — warm golden, soft, and fresh"
          afterLabel="LA CARRETA"
          aspectRatio="16/7"
          initialPosition={50}
          className="shadow-[0_24px_64px_-24px_rgba(0,0,0,0.22)] border border-line-soft"
        />
      </motion.div>

      {/* Two copy blocks */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease, delay: 0.14 }}
        className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {/* Left: with preservatives */}
        <div className="group flex flex-col rounded-2xl border border-line-soft bg-[#fafaf8] px-6 py-5 transition-colors hover:border-red-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-700 text-base font-black leading-none">
              ✕
            </span>
            <h3 className="text-[0.98rem] font-bold text-foreground">Dry and brittle</h3>
          </div>
          <p className="text-[0.88rem] text-muted leading-relaxed">
            Made with preservatives and chemicals designed to extend shelf life — trading texture, flexibility, and natural flavor for longer-looking freshness.
          </p>
        </div>

        {/* Right: La Carreta */}
        <div className="group flex flex-col rounded-2xl border border-green-200 bg-green-50/40 px-6 py-5 transition-colors hover:bg-green-50">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700 text-white text-base font-bold leading-none shadow-sm shadow-green-900/20">
              ✓
            </span>
            <h3 className="text-[0.98rem] font-bold text-foreground">Soft. Flexible. Fresh.</h3>
          </div>
          <p className="text-[0.88rem] text-muted leading-relaxed">
            Made with simple ingredients and traditional preparation trusted since 1939. Nothing added. Nothing artificial. Just a real corn tortilla.
          </p>
        </div>
      </motion.div>

      {/* Disclaimer / tone-setter */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        className="mt-6 text-center text-[0.75rem] text-muted/50 max-w-lg mx-auto leading-relaxed"
      >
        La Carreta products are made with natural ingredients and traditional recipes.
        No medical claims are made. Results shown represent product characteristics
        from traditional vs. preservative-extended production methods.
      </motion.p>

    </div>
  );
}
