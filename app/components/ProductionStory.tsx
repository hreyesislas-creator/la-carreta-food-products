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
   ProductionStory — single unified tortilla comparison section
═══════════════════════════════════════════════════════════════════════════ */

export function ProductionStory() {
  return (
    <section className="relative bg-white" aria-label="Una tortilla de maíz real">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12 py-12 lg:py-16">

        {/* ── Main row: left copy (~35%) + right slider (~65%) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-10 lg:gap-14 items-center">

          {/* ── LEFT: mascot + headline + copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease }}
            className="flex items-start gap-5 md:gap-6"
          >
            {/* Corn mascot */}
            <div className="shrink-0">
              <Image
                src={IMG.mascot}
                alt=""
                aria-hidden
                width={136}
                height={195}
                unoptimized
                className="w-[84px] md:w-[112px] lg:w-[128px] h-auto drop-shadow-[0_10px_22px_rgba(31,95,59,0.2)]"
              />
            </div>

            {/* Headline block */}
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.22em] font-bold text-muted/60 mb-2">
                Lo que hace diferente a La Carreta
              </p>
              <h2 className="text-[1.6rem] md:text-[2rem] lg:text-[2.35rem] leading-[1.02] tracking-[-0.024em] font-black uppercase text-green-700">
                Una Tortilla<br />de Maíz Real,
              </h2>
              <h2 className="text-[1.6rem] md:text-[2rem] lg:text-[2.35rem] leading-[1.02] tracking-[-0.024em] font-black uppercase text-red-700">
                Se Ve Así.
              </h2>
              <p className="mt-3 text-[0.85rem] text-muted leading-relaxed max-w-[28ch]">
                Maíz. Agua. Cal. Sin conservadores artificiales ni químicos para extender la vida de anaquel.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: single before/after comparison slider ── */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease, delay: 0.08 }}
          >
            {/* Slider: wide but not tall — height capped 360 → 560px */}
            <div className="relative overflow-hidden rounded-3xl border border-line-soft shadow-[0_20px_56px_-24px_rgba(0,0,0,0.2)] h-[340px] sm:h-[440px] lg:h-[540px]">
              <CompareSlider
                beforeSrc={IMG.tortillaBad}
                beforeAlt="Tortilla hecha con conservadores artificiales — seca y quebradiza"
                beforeLabel="Con Conservadores"
                afterSrc={IMG.tortillaGood}
                afterAlt="Tortilla La Carreta — suave, flexible y fresca"
                afterLabel="La Carreta"
                initialPosition={50}
                className="w-full h-full"
              />
            </div>

            {/* Captions under each side of the slider */}
            <div className="mt-3 grid grid-cols-2 gap-3 md:gap-4">
              <div>
                <p className="text-[0.8rem] font-bold leading-snug text-red-700">
                  Seca y quebradiza
                </p>
                <p className="mt-0.5 text-[0.73rem] text-muted leading-snug">
                  Hecha con químicos y conservadores
                </p>
              </div>
              <div>
                <p className="text-[0.8rem] font-bold leading-snug text-green-700">
                  Suave, flexible y fresca
                </p>
                <p className="mt-0.5 text-[0.73rem] text-muted leading-snug">
                  Hecha con ingredientes 100% naturales
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Benefits strip — compact, inside the same section ── */}
        <div className="mt-10 lg:mt-12 rounded-2xl border border-line-soft bg-[#f9fafb]">
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
    </section>
  );
}
