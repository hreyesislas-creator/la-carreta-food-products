"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const BULLETS = [
  { text: "Made with original recipes", icon: "🌽" },
  { text: "No artificial preservatives", icon: "✓" },
  { text: "No chemicals to extend shelf life", icon: "✓" },
  { text: "Fresh traditional preparation", icon: "🫓" },
  { text: "Natural ingredients only", icon: "✓" },
];

export function Ingredients() {
  return (
    <section id="ingredients" className="relative bg-white py-16 md:py-20 overflow-hidden">
      {/* Large muted "NATURAL" watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6 select-none"
      >
        <span
          className="text-[10rem] md:text-[13rem] font-black uppercase leading-none tracking-tighter text-green-700/[0.04]"
        >
          NATURAL
        </span>
      </div>

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: headline block ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-[0.64rem] uppercase tracking-[0.2em] font-semibold text-red-700">
              Natural Ingredients
            </span>

            <h2 className="mt-6 text-[1.9rem] md:text-[2.6rem] lg:text-[3rem] leading-[1.1] tracking-[-0.022em] font-bold">
              No Preservatives.{" "}
              <span className="text-red-700">No Chemicals.</span>
              <br />
              Just Real Ingredients.
            </h2>

            <p className="mt-5 max-w-md text-[1rem] text-muted leading-[1.7]">
              Every product we make uses the same simple ingredients our family
              has trusted since 1939. Nothing added to extend shelf life.
              Nothing that doesn&rsquo;t belong.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <div className="h-[3px] w-12 rounded-full bg-green-700" />
              <span className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-green-700">
                La Carreta Mexican Food · Est. 1939
              </span>
            </div>
          </motion.div>

          {/* ── Right: checklist ── */}
          <motion.ul
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="flex flex-col gap-3"
          >
            {BULLETS.map((item, index) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease, delay: 0.12 + index * 0.06 }}
                className="flex items-center gap-4 rounded-2xl border border-line-soft bg-[#f9fafb] px-5 py-4 hover:border-green-200 hover:bg-green-50/50 transition-colors"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700 text-white text-sm font-bold shadow-sm shadow-green-900/20">
                  ✓
                </span>
                <span className="text-[0.95rem] font-medium text-foreground">{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  );
}
