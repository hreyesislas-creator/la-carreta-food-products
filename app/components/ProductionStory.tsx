"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CompareSlider } from "./CompareSlider";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Image sources ────────────────────────────────────────────────────────
 * Currently using SVG placeholders that render reliably.
 * When real photography is ready, swap each constant below:
 *
 *   IMG.historyBefore → /comparison/history.jpg        (2400 × 1600)
 *   IMG.historyAfter  → /comparison/today.jpg          (2400 × 1600)
 *   IMG.tortillaBad   → /comparison/tortilla-chemical.jpg  (1600 × 1200)
 *   IMG.tortillaGood  → /comparison/tortilla-natural.jpg   (1600 × 1200)
 *   IMG.mascot        → /illustrations/corn-mascot.png     (480 × 686)
 * ─────────────────────────────────────────────────────────────────────── */
const IMG = {
  historyBefore: "/comparison/history.svg",
  historyAfter:  "/comparison/today.svg",
  tortillaBad:   "/comparison/tortilla-chemical.svg",
  tortillaGood:  "/comparison/tortilla-natural.svg",
  mascot:        "/illustrations/corn-mascot.svg",
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
   ProductionStory — unified A → B → C section
═══════════════════════════════════════════════════════════════════════════ */

export function ProductionStory() {
  return (
    <section className="relative bg-white" aria-label="La Carreta heritage and natural ingredients">

      {/* ── A: Heritage comparison card ─────────────────────────────────── */}
      <SectionA />

      {/* ── B: Benefits strip ───────────────────────────────────────────── */}
      <SectionB />

      {/* ── C: Tortilla comparison row ──────────────────────────────────── */}
      <SectionC />

    </section>
  );
}

/* ── A: Full-width heritage comparison card ────────────────────────────── */

function SectionA() {
  return (
    <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease }}
        /* outer wrapper provides rounding + shadow + overflow clipping */
        className="relative overflow-hidden rounded-3xl border border-line-soft shadow-[0_20px_56px_-24px_rgba(0,0,0,0.2)]"
      >
        {/* The slider itself fills the parent — no built-in aspect ratio */}
        <CompareSlider
          beforeSrc={IMG.historyBefore}
          beforeAlt="Historical photo of La Carreta Tortilleria, Montclair CA, 1939"
          beforeLabel="ANTES"
          afterSrc={IMG.historyAfter}
          afterAlt="Modern La Carreta Mexican Food products"
          afterLabel="DESPUÉS"
          aspectRatio="16/7"
          initialPosition={44}
          /* no rounding here — the outer wrapper clips it */
          className="w-full"
        />

        {/* Overlay text — "before" side, desktop only */}
        <div
          aria-hidden
          className="absolute bottom-10 left-7 md:left-10 z-10 pointer-events-none hidden sm:block"
          style={{ maxWidth: "40%" }}
        >
          <p
            className="text-white font-bold leading-snug text-[0.95rem] md:text-[1.2rem] lg:text-[1.4rem]"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
          >
            Tradición que<br />comenzó en 1939.
          </p>
          <p
            className="mt-1.5 text-white/80 text-[0.74rem] md:text-[0.82rem]"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
          >
            Misma receta. Mejoramos todo lo demás.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ── B: Three-benefit horizontal strip ─────────────────────────────────── */

function SectionB() {
  return (
    <div className="mt-0 border-b border-line-soft bg-[#f9fafb]">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
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
  );
}

/* ── C: Tortilla comparison row ─────────────────────────────────────────── */

function SectionC() {
  return (
    <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12 py-12 pb-14">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">

        {/* ── Left: mascot + headline ── */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="flex items-center gap-5 md:gap-8"
        >
          {/* Corn mascot */}
          <div className="shrink-0">
            <Image
              src={IMG.mascot}
              alt=""
              aria-hidden
              width={120}
              height={172}
              unoptimized
              className="w-[90px] md:w-[118px] lg:w-[136px] h-auto drop-shadow-[0_10px_22px_rgba(31,95,59,0.2)]"
            />
          </div>

          {/* Headline block */}
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] font-bold text-muted/60 mb-2">
              Lo que hace diferente a La Carreta
            </p>
            <h2 className="text-[1.65rem] md:text-[2.1rem] lg:text-[2.5rem] leading-[1.02] tracking-[-0.024em] font-black uppercase text-green-700">
              Una Tortilla<br />de Maíz Real,
            </h2>
            <h2 className="text-[1.65rem] md:text-[2.1rem] lg:text-[2.5rem] leading-[1.02] tracking-[-0.024em] font-black uppercase text-red-700">
              Se Ve Así.
            </h2>
            <p className="mt-3 text-[0.85rem] text-muted leading-relaxed max-w-[26ch]">
              Maíz. Agua. Cal. Sin conservadores artificiales ni químicos para extender la vida de anaquel.
            </p>
          </div>
        </motion.div>

        {/* ── Right: static two-image comparison ── */}
        <motion.div
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease, delay: 0.08 }}
          className="grid grid-cols-2 gap-3 md:gap-4"
        >
          {/* Left tile: with preservatives */}
          <TortillaCard
            src={IMG.tortillaBad}
            alt="Tortilla hecha con conservadores artificiales — seca y quebradiza"
            badgeText="Con Conservadores"
            badgeColor="red"
            headline="Seca y quebradiza"
            body="Hecha con químicos y conservadores"
          />

          {/* Right tile: La Carreta */}
          <TortillaCard
            src={IMG.tortillaGood}
            alt="Tortilla La Carreta — suave, flexible y fresca"
            badgeText="La Carreta"
            badgeColor="green"
            headline="Suave, flexible y fresca"
            body="Hecha con ingredientes 100% naturales"
          />
        </motion.div>

      </div>
    </div>
  );
}

/* ── Tortilla image card (Section C helper) ─────────────────────────────── */

type TortillaCardProps = {
  src: string;
  alt: string;
  badgeText: string;
  badgeColor: "red" | "green";
  headline: string;
  body: string;
};

function TortillaCard({ src, alt, badgeText, badgeColor, headline, body }: TortillaCardProps) {
  const isGreen = badgeColor === "green";
  return (
    <div className="flex flex-col">
      <div
        className={`relative overflow-hidden rounded-xl border ${
          isGreen ? "border-green-200 ring-1 ring-green-200/50" : "border-line-soft"
        }`}
        style={{ aspectRatio: "4/3" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span
            className={`inline-flex rounded-md px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.16em] font-bold text-white leading-none ${
              isGreen ? "bg-green-700" : "bg-red-700"
            }`}
          >
            {badgeText}
          </span>
        </div>
      </div>
      {/* Description below image */}
      <div className="mt-2.5 px-0.5">
        <p className={`text-[0.8rem] font-bold leading-snug ${isGreen ? "text-green-700" : "text-red-700"}`}>
          {headline}
        </p>
        <p className="mt-0.5 text-[0.73rem] text-muted leading-snug">{body}</p>
      </div>
    </div>
  );
}
