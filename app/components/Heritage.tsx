"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Heritage() {
  return (
    <section id="story" className="relative bg-white py-16 md:py-20 overflow-hidden">
      {/* Large year watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6 select-none"
      >
        <span className="text-[9rem] md:text-[13rem] font-black leading-none text-green-700/[0.05] tracking-tighter">
          1939
        </span>
      </div>

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left: label + big year callout */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-[0.64rem] uppercase tracking-[0.2em] font-semibold text-green-700">
              Our Story
            </span>

            <h2 className="mt-5 text-[1.9rem] md:text-[2.55rem] lg:text-[2.9rem] leading-[1.1] tracking-[-0.022em] font-bold">
              From La Carreta{" "}
              <span className="text-green-700">Tortilleria</span>
              <br className="hidden md:block" />
              {" "}to La Carreta Mexican Food
            </h2>

            {/* Year badge */}
            <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-line-soft bg-[#f9fafb] px-5 py-3">
              <span className="text-[2.2rem] font-black text-red-700 leading-none">1939</span>
              <div className="flex flex-col">
                <span className="text-[0.7rem] uppercase tracking-[0.16em] font-bold text-foreground">Established</span>
                <span className="text-[0.78rem] text-muted">Montclair, California</span>
              </div>
            </div>
          </div>

          {/* Right: story body */}
          <div>
            <p className="text-[1.02rem] text-muted leading-[1.75] max-w-xl">
              La Carreta began in 1939 making tortillas in a family garage and selling
              them from a horse-drawn carreta through the neighborhood. Known locally
              as{" "}
              <strong className="font-semibold text-foreground">La Carreta Tortilleria</strong>,
              the business continues today with original family recipes, natural
              ingredients, and a commitment to authentic Mexican food products.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-[3px] w-10 rounded-full bg-red-700" />
              <span className="text-[0.72rem] uppercase tracking-[0.16em] font-semibold text-red-700">
                Original recipes · No artificial preservatives
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
