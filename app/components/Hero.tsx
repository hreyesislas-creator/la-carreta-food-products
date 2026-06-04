"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Hero background image ─────────────────────────────────────────────────
 * Static campaign hero — the modern La Carreta product image only.
 * Swap to real photography once it exists:
 *   HERO_IMG → /comparison/today.jpg   (modern La Carreta retail, ~2400×1050)
 * ─────────────────────────────────────────────────────────────────────── */
const HERO_IMG = "/comparison/today.svg";

/* ═══════════════════════════════════════════════════════════════════════════
   Hero — static national-brand campaign card (no slider)
═══════════════════════════════════════════════════════════════════════════ */

export function Hero() {
  return (
    <section
      className="relative bg-white pt-24 md:pt-28"
      aria-label="Tradición que comenzó en 1939"
    >
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.045 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.25, ease }}
          className="relative overflow-hidden rounded-[1.75rem] lg:rounded-[2.5rem] ring-1 ring-black/[0.06] shadow-[0_40px_90px_-34px_rgba(0,0,0,0.42)] h-[clamp(480px,72vh,800px)]"
        >
          {/* Background product image — fills the full panel, subtle ken-burns */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.06] }}
            transition={{ duration: 16, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src={HERO_IMG}
              alt=""
              fill
              priority
              unoptimized
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center right",
                /* Deeper exposure + punchier contrast; mute competing colors and
                   soften secondary detail to fake a shallow depth of field */
                filter: "brightness(0.48) saturate(0.86) contrast(1.16) blur(1.4px)",
              }}
            />
          </motion.div>

          {/* ── Cinematic dark grade + overlay copy (left) ── */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
            {/* Left→right cinematic gradient — rich near-black, carves a reading zone */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(4,9,6,0.97) 0%, rgba(4,9,6,0.86) 24%, rgba(4,9,6,0.46) 50%, rgba(4,9,6,0.08) 72%, transparent 100%)",
              }}
            />
            {/* Vignette — deepens edges, holds a pool of light on the product */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(140% 130% at 73% 45%, transparent 0%, transparent 28%, rgba(0,0,0,0.62) 100%)",
              }}
            />
            {/* Warm key-light lifting the tortillas (focal point + F/G separation) */}
            <div
              className="absolute inset-0 mix-blend-screen"
              style={{
                background:
                  "radial-gradient(38% 54% at 74% 47%, rgba(255,206,128,0.24) 0%, transparent 62%)",
              }}
            />
            {/* Grounding shadow along the bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-2/5"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
            />
            {/* Subtle film grain — premium campaign texture */}
            <div
              className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: "180px 180px",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.25 }}
              className="absolute left-6 sm:left-12 lg:left-20 top-1/2 -translate-y-1/2 max-w-[84%] sm:max-w-[58%]"
            >
              {/* Soft glow seating the text block */}
              <div
                aria-hidden
                className="absolute -inset-x-10 -inset-y-12 -z-10"
                style={{
                  background:
                    "radial-gradient(60% 60% at 30% 50%, rgba(0,0,0,0.45) 0%, transparent 72%)",
                  filter: "blur(8px)",
                }}
              />

              <span
                className="inline-block mb-5 lg:mb-7 text-[0.68rem] sm:text-[0.74rem] uppercase tracking-[0.42em] font-semibold"
                style={{ color: "#D32F2F", textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}
              >
                La Carreta · Est. 1939
              </span>

              {/* Lead-in lines — lighter weight, lets the date dominate */}
              <h1
                className="font-bold uppercase leading-[1.02] tracking-[0.01em] text-[1.45rem] sm:text-[2rem] lg:text-[2.55rem]"
                style={{ color: "#f7f1e3", textShadow: "0 1px 3px rgba(0,0,0,0.55), 0 2px 16px rgba(0,0,0,0.45)" }}
              >
                Tradición que
                <br />
                comenzó en
              </h1>

              {/* The anchor — oversized, clean premium red with a soft glow */}
              <div
                className="font-black leading-[0.86] tracking-[-0.03em] text-[4.5rem] sm:text-[6.25rem] lg:text-[8rem] mt-1 lg:mt-2"
                style={{
                  color: "#D32F2F",
                  textShadow:
                    "0 10px 50px rgba(211,47,47,0.42), 0 4px 12px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.4)",
                }}
              >
                1939.
              </div>

              <p
                className="mt-5 lg:mt-7 font-medium leading-[1.22] text-[1.05rem] sm:text-[1.35rem] lg:text-[1.6rem]"
                style={{ color: "rgba(247,241,227,0.9)", textShadow: "0 1px 3px rgba(0,0,0,0.55), 0 2px 18px rgba(0,0,0,0.45)" }}
              >
                Misma receta.
                <br />
                <span className="font-bold" style={{ color: "#7fc79e" }}>Mejoramos todo lo demás.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
