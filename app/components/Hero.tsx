"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { HERO_PHOTO } from "./photos";

const ease = [0.22, 1, 0.36, 1] as const;

// Brand colors used in inline styles
const G = "31,95,59";   // #1f5f3b — brand green
const R = "155,28,28";  // #9b1c1c — brand red

const STATS = [
  { value: "85+",  label: "Years in Business" },
  { value: "100%", label: "Natural Ingredients" },
  { value: "0",    label: "Artificial Preservatives" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-24 md:pt-28 pb-14 md:pb-20">
      {/* Green glow — top left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 -z-10 h-[32rem] w-[32rem] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(${G},0.09) 0%, transparent 70%)` }}
      />
      {/* Red glow — bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-[28rem] w-[28rem] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(${R},0.09) 0%, transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div className="flex flex-col">
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-[0.66rem] uppercase tracking-[0.22em] font-semibold text-red-700">
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: `linear-gradient(135deg, #1f5f3b, #9b1c1c)` }}
                />
                La Carreta Mexican Food · Est. 1939
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.06 }}
              className="mt-6 text-[2.2rem] sm:text-[2.85rem] lg:text-[3.4rem] xl:text-[3.8rem] leading-[1.05] tracking-[-0.022em] font-bold text-foreground"
            >
              Authentic Mexican Food Products{" "}
              <span className="text-green-700">Since&nbsp;1939</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.14 }}
              className="mt-5 max-w-lg text-[1.02rem] text-muted leading-[1.7]"
            >
              Tortillas, masa, tamales, and spices made with natural ingredients,
              original recipes, and no artificial preservatives.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.22 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <Link
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-white hover:bg-green-800 transition-colors shadow-md shadow-green-900/20"
              >
                Explore Products
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#wholesale"
                className="inline-flex items-center gap-2 rounded-full border-2 border-red-700 px-7 py-[0.8rem] text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-red-700 hover:bg-red-700 hover:text-white transition-colors"
              >
                Become a Retail Partner
                <span aria-hidden>→</span>
              </Link>
            </motion.div>

            {/* Stat row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.38 }}
              className="mt-10 flex items-center gap-8 md:gap-10"
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${i > 0 ? "pl-8 md:pl-10 border-l border-line-soft" : ""}`}
                >
                  <span className="text-[1.8rem] md:text-[2.1rem] font-bold leading-none tracking-tight text-foreground">
                    {s.value}
                  </span>
                  <span className="mt-1.5 text-[0.68rem] uppercase tracking-[0.14em] text-muted font-medium leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: hero image ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="relative"
          >
            <HeroImage />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <div className="relative">
      {/* Shadow backdrop */}
      <div
        aria-hidden
        className="absolute inset-x-6 -bottom-4 top-8 rounded-3xl"
        style={{
          background: `linear-gradient(135deg, rgba(${G},0.18), rgba(${R},0.14))`,
          filter: "blur(20px)",
        }}
      />

      {/* Main photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_56px_-20px_rgba(0,0,0,0.28)] border border-white/60">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={HERO_PHOTO.src}
            alt={HERO_PHOTO.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: HERO_PHOTO.position }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: `linear-gradient(200deg, rgba(${G},0.06), transparent 45%, rgba(${R},0.09))`,
            }}
          />
        </div>
      </div>

      {/* Badge: No Preservatives */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.55 }}
        className="absolute -left-5 md:-left-8 top-1/3 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-line-soft"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700 text-white text-sm font-bold">
          ✓
        </span>
        <div className="leading-tight">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-foreground">No Preservatives</p>
          <p className="text-[0.6rem] text-muted">100% natural ingredients</p>
        </div>
      </motion.div>

      {/* Badge: Since 1939 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.7 }}
        className="absolute -right-4 md:-right-7 bottom-1/4 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-line-soft"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-700 text-white text-[0.62rem] font-bold leading-tight text-center">
          1939
        </span>
        <div className="leading-tight">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-foreground">Family Recipe</p>
          <p className="text-[0.6rem] text-muted">Original since 1939</p>
        </div>
      </motion.div>
    </div>
  );
}
