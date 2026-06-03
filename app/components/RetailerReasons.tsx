"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const REASONS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" fill="currentColor"/>
      </svg>
    ),
    title: "Family Recipes Since 1939",
    body: "Trusted original recipes unchanged for over 85 years. Consistent, authentic Mexican flavor your customers recognize.",
    accent: "bg-green-700",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" fill="currentColor"/>
      </svg>
    ),
    title: "No Artificial Preservatives",
    body: "Clean label products your customers trust. Zero artificial preservatives, zero chemicals to extend shelf life.",
    accent: "bg-red-700",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
      </svg>
    ),
    title: "Trusted by Major Retailers",
    body: "Available at Stater Bros., Northgate, Cardenas, Vallarta, Food 4 Less and more across California and the Southwest.",
    accent: "bg-green-700",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
      </svg>
    ),
    title: "Authentic Mexican Products",
    body: "Tortillas, masa, tamales, and spices made the traditional way — products that perform on the shelf and at the table.",
    accent: "bg-red-700",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" fill="currentColor"/>
      </svg>
    ),
    title: "Consistent Quality & Freshness",
    body: "Reliable delivery schedules, consistent batch quality, and fresh dating that keeps your customers coming back.",
    accent: "bg-green-700",
  },
];

export function RetailerReasons() {
  return (
    <section className="relative bg-white py-14 md:py-16">
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-[0.64rem] uppercase tracking-[0.2em] font-semibold text-green-700"
            >
              For Retailers &amp; Buyers
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease, delay: 0.07 }}
              className="mt-3 text-[1.6rem] md:text-[2rem] leading-[1.1] tracking-[-0.016em] font-bold"
            >
              Why Retailers Choose La Carreta
            </motion.h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-line-soft bg-[#f9fafb] p-5 hover:border-green-200 hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              {/* Icon bubble */}
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shrink-0 ${r.accent}`}>
                {r.icon}
              </div>

              <h3 className="mt-4 text-[0.92rem] font-bold text-foreground leading-snug">
                {r.title}
              </h3>
              <p className="mt-2 text-[0.82rem] text-muted leading-relaxed flex-1">
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
