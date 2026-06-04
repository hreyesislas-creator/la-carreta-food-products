"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CompareSlider } from "./CompareSlider";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Image sources ────────────────────────────────────────────────────────
 * Local SVG placeholders that render reliably. Swap to real artwork only
 * once the files actually exist in /public:
 *
 *   IMG.tortillaBad  → /comparison/tortilla-chemical.svg
 *   IMG.tortillaGood → /comparison/tortilla-natural.svg
 *   IMG.mascot       → /illustrations/corn-mascot.svg
 * ─────────────────────────────────────────────────────────────────────── */
const IMG = {
  tortillaBad:  "/comparison/tortilla-chemical.svg",
  tortillaGood: "/comparison/tortilla-natural.svg",
  mascot:       "/illustrations/corn-mascot.svg",
};

/* ── Benefits data ───────────────────────────────────────────────────────── */
const BENEFITS = [
  {
    label: "No Artificial Preservatives",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    label: "No Chemicals to Extend Shelf Life",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10"/>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
  },
  {
    label: "Original Recipes Since 1939",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   ProductionStory — benefits strip + corn-mascot tortilla comparison
═══════════════════════════════════════════════════════════════════════════ */

export function ProductionStory() {
  return (
    <section className="relative bg-white" aria-label="Una tortilla de maíz real">

      {/* ── Benefits strip — directly below the hero ── */}
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12 pt-8 lg:pt-10">
        <div className="rounded-2xl border border-line-soft bg-[#f9fafb]">
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-line-soft">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease, delay: i * 0.07 }}
                className="flex flex-1 items-center justify-center gap-3 px-5 lg:px-8 py-4"
              >
                <span className="text-green-700 shrink-0">{b.icon}</span>
                <span className="text-[0.68rem] sm:text-[0.66rem] lg:text-[0.7rem] uppercase tracking-[0.2em] font-bold text-foreground leading-tight">
                  {b.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tortilla comparison: mascot + copy (left) | slider (right) ── */}
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[36fr_64fr] gap-12 lg:gap-16 items-center">

          {/* ── LEFT: corn mascot + headline + copy (one unified block) ── */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease }}
            className="relative flex flex-col items-start"
          >
            {/* Soft green campaign glow behind the mascot + text */}
            <div
              aria-hidden
              className="pointer-events-none absolute -z-10 -left-12 -top-10 h-[380px] w-[380px] rounded-full"
              style={{
                background: "radial-gradient(closest-side, rgba(31,95,59,0.13), transparent 75%)",
                filter: "blur(10px)",
              }}
            />

            {/* Corn mascot — large, transparent, soft glow (no white box) */}
            <Image
              src={IMG.mascot}
              alt=""
              aria-hidden
              width={208}
              height={347}
              unoptimized
              className="w-[150px] sm:w-[176px] lg:w-[210px] h-auto object-contain drop-shadow-[0_20px_34px_rgba(31,95,59,0.30)]"
            />

            {/* Premium badge */}
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-[0.6rem] sm:text-[0.64rem] uppercase tracking-[0.24em] font-bold text-green-700">
              Lo que hace diferente a La Carreta
            </span>

            {/* Headline */}
            <h2 className="mt-4 text-[1.9rem] sm:text-[2.25rem] lg:text-[2.65rem] leading-[0.98] tracking-[-0.028em] font-black uppercase text-balance">
              <span className="block text-green-700">Una Tortilla de Maíz Real,</span>
              <span className="block" style={{ color: "#D32F2F" }}>Se Ve Así.</span>
            </h2>

            {/* Copy */}
            <p className="mt-5 text-[0.92rem] sm:text-[0.96rem] text-muted leading-[1.7] max-w-[34ch]">
              Maíz. Agua. Cal. Sin conservadores artificiales ni químicos para
              extender la vida de anaquel.
            </p>
          </motion.div>

          {/* ── RIGHT: real before/after tortilla slider (medium height) ── */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease, delay: 0.08 }}
          >
            <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[1.75rem] ring-1 ring-black/[0.05] shadow-[0_34px_80px_-30px_rgba(0,0,0,0.34)] h-[320px] sm:h-[420px] lg:h-[500px]">
              <CompareSlider
                beforeSrc={IMG.tortillaBad}
                beforeAlt=""
                beforeLabel="Con Conservadores"
                afterSrc={IMG.tortillaGood}
                afterAlt=""
                afterLabel="La Carreta"
                initialPosition={50}
                className="absolute inset-0 h-full w-full"
              />
            </div>

            {/* Captions under each side of the slider */}
            <div className="mt-5 grid grid-cols-2 gap-4 md:gap-6">
              <div className="border-l-2 pl-3.5" style={{ borderColor: "#D32F2F" }}>
                <p className="text-[0.84rem] font-bold leading-snug" style={{ color: "#D32F2F" }}>
                  Seca y quebradiza
                </p>
                <p className="mt-1 text-[0.75rem] text-muted leading-relaxed">
                  Hecha con químicos y conservadores
                </p>
              </div>
              <div className="border-l-2 border-green-600 pl-3.5">
                <p className="text-[0.84rem] font-bold leading-snug text-green-700">
                  Suave, flexible y fresca
                </p>
                <p className="mt-1 text-[0.75rem] text-muted leading-relaxed">
                  Hecha con ingredientes 100% naturales
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
