"use client";

import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;
const R = "155,28,28"; // #9b1c1c — brand red

const TRUST = [
  { value: "85+",  label: "Years in Business" },
  { value: "1939", label: "Established" },
  { value: "0",    label: "Artificial Preservatives" },
  { value: "100%", label: "Natural Ingredients" },
];

export function Wholesale() {
  return (
    <section id="wholesale" className="relative bg-green-700 py-16 md:py-20 overflow-hidden">
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Red accent glow — bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-[30rem] w-[30rem] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(${R},0.4), transparent 65%)` }}
      />
      {/* White glow — top left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-[22rem] w-[22rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.11), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-flex items-center rounded-full bg-white/20 border border-white/30 px-4 py-1.5 text-[0.64rem] uppercase tracking-[0.2em] font-semibold text-white">
              Wholesale / Retail Partner
            </span>

            <h2 className="mt-6 text-[1.9rem] md:text-[2.55rem] lg:text-[2.9rem] leading-[1.1] tracking-[-0.02em] font-bold text-white">
              Bring La Carreta Products to Your Store or Restaurant
            </h2>

            <p className="mt-5 max-w-lg text-[1.02rem] text-white/80 leading-[1.7]">
              Offer your customers authentic tortillas, masa, tamales, and
              spices made with natural ingredients and trusted family recipes
              since 1939.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] font-bold text-green-800 hover:bg-red-700 hover:text-white transition-colors shadow-md"
              >
                Request Wholesale Information
                <span aria-hidden>→</span>
              </Link>
              <a
                href="mailto:wholesale@lacarreta.com"
                className="inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-white/70 hover:text-white transition-colors"
              >
                or email us directly →
              </a>
            </div>
          </motion.div>

          {/* ── Right: trust stat grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {TRUST.map((t, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-5"
              >
                <span className="text-[2.2rem] font-black leading-none text-white tracking-tight">
                  {t.value}
                </span>
                <span className="mt-2 text-[0.68rem] uppercase tracking-[0.15em] font-semibold text-white/70 leading-snug">
                  {t.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
