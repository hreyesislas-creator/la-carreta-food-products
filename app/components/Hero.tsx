"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Flourish, CornEar, MexicoSeal, TileMotif } from "./Ornaments";
import { HERO_PHOTO } from "./photos";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-aged-paper">
      {/* Warm sun glow from top */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 -z-10 h-[44rem] w-[44rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,222,170,0.55), rgba(255,222,170,0) 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-60 -right-40 -z-10 h-[44rem] w-[44rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(173,72,38,0.18), transparent 70%)",
        }}
      />

      {/* Top hairline ornament */}
      <div className="relative pt-32 md:pt-36 pb-2 flex justify-center">
        <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.6em] text-gold-deep">
          <span className="h-px w-12 bg-gold/70" />
          Casa Artesanal — Tradición desde 1978
          <span className="h-px w-12 bg-gold/70" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12 pt-10 pb-32 md:pt-14 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ──── Editorial copy ──── */}
          <div className="lg:col-span-6 max-w-2xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease, delay: 0.4 }}
              className="hidden lg:block absolute -left-24 top-4 opacity-50"
            >
              <CornEar className="w-14 h-auto" tone="#a87431" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease, delay: 0.05 }}
              className="font-serif leading-[0.96] tracking-[-0.025em] text-foreground"
            >
              <span className="block text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem]">
                El alma de
              </span>
              <span className="block font-display italic font-light text-[3rem] sm:text-[3.8rem] lg:text-[5.4rem] text-gold-deep -mt-1">
                la cocina mexicana,
              </span>
              <span className="block text-[2.2rem] sm:text-[2.7rem] lg:text-[3.4rem] mt-2 text-foreground/85">
                wrapped in&nbsp;every&nbsp;tortilla.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.25 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-gold" />
              <span className="font-display italic text-base text-muted">
                Cinco generaciones · Four generations of family hands
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.35 }}
              className="mt-10 max-w-xl font-display text-[1.18rem] md:text-[1.28rem] leading-[1.65] text-muted"
            >
              From heirloom corn milled at dawn to masa shaped by hand, La
              Carreta keeps the slow rituals of the Mexican kitchen alive —
              made for the tables of grocers, restaurants, and families who
              know the difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Link
                href="#partner"
                className="group inline-flex items-center gap-3 rounded-full bg-clay-dark px-8 py-4 text-[0.74rem] uppercase tracking-[0.32em] text-paper transition-all duration-500 hover:bg-gold-deep"
              >
                Become a Retail Partner
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="#products"
                className="group inline-flex items-center gap-3 text-[0.74rem] uppercase tracking-[0.32em] text-foreground"
              >
                <span className="border-b border-gold/70 pb-1.5 group-hover:border-clay-dark transition-colors">
                  Explore La Cosecha
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-x-6 gap-y-2 max-w-md"
            >
              {[
                { k: "47", l: "Años de\ntradición" },
                { k: "180+", l: "Tiendas y\nrestaurantes" },
                { k: "1978", l: "Casa fundada\nen Jalisco" },
              ].map((s, i) => (
                <div key={i} className="relative pl-4 border-l border-gold/50">
                  <div className="font-serif text-[2.1rem] leading-none text-foreground">
                    {s.k}
                  </div>
                  <div className="mt-3 font-display italic text-[0.95rem] text-subtle whitespace-pre-line leading-snug">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ──── Editorial photo frame ──── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease, delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            <StillLife />
          </motion.div>
        </div>

        {/* Bottom ornament rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 1.0 }}
          className="mt-20 flex flex-col items-center"
        >
          <Flourish className="w-72 h-6 text-gold-deep" tone="#a87431" />
          <p className="mt-4 font-display italic text-muted text-center">
            <span className="text-foreground">Maíz nativo</span> · stone-ground ·{" "}
            <span className="text-foreground">nixtamal nocturno</span> · pressed by hand
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Cinematic photographic frame ────────────────────────────── */

function StillLife() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-[34rem] mx-auto">
      <div className="absolute inset-0 rounded-[2px] overflow-hidden vignette">
        {/* Real photograph */}
        <Image
          src={HERO_PHOTO.src}
          alt={HERO_PHOTO.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: HERO_PHOTO.position }}
        />

        {/* Warm color grade — gently pushes the photo toward the editorial palette */}
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-multiply opacity-30"
          style={{
            background:
              "linear-gradient(180deg, rgba(214,178,122,0.0) 0%, rgba(122,79,28,0.55) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-soft-light opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 25%, rgba(255,220,170,0.55), transparent 60%)",
          }}
        />

        {/* Aged paper grain over the photo */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.40) 0.7px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Engraved frame border */}
        <div className="absolute inset-3 border border-[#fbf3df]/40 rounded-[2px] pointer-events-none" />
        <div className="absolute inset-5 border border-[#fbf3df]/60 rounded-[2px] pointer-events-none" />

        {/* Top label */}
        <div className="absolute top-7 left-0 right-0 flex justify-center pointer-events-none">
          <div className="flex items-center gap-3 px-3 py-1.5 bg-[rgba(251,243,223,0.92)] backdrop-blur-sm">
            <span className="h-px w-6 bg-[#7a4f1c]" />
            <span className="font-serif italic text-[0.85rem] text-[#3a1f0c]">
              La Cocina de Doña Elena
            </span>
            <span className="h-px w-6 bg-[#7a4f1c]" />
          </div>
        </div>

        {/* Mexico Seal — top right */}
        <div className="absolute top-9 right-7 w-20 h-20 opacity-95 pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-paper/85 backdrop-blur-sm" />
          <MexicoSeal className="relative w-full h-full" tone="#3a1f0c" />
        </div>

        {/* Bottom ribbon caption */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
          <div className="flex items-center gap-3 px-4 py-2 bg-[rgba(251,243,223,0.95)] backdrop-blur-sm">
            <TileMotif className="w-3.5 h-3.5" tone="#7a4f1c" />
            <span className="font-display italic text-[0.95rem] text-[#3a1f0c]">
              Tortillas hechas a mano — Jalisco · 1978
            </span>
            <TileMotif className="w-3.5 h-3.5" tone="#7a4f1c" />
          </div>
        </div>
      </div>

      {/* Floating credential cards */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 1.2 }}
        className="absolute -left-3 top-1/3 hidden md:block"
      >
        <div className="rounded-full bg-paper/90 backdrop-blur border border-line px-4 py-2 text-[0.62rem] uppercase tracking-[0.32em] text-foreground shadow-[0_8px_20px_rgba(40,18,6,0.18)]">
          Nixtamal nocturno
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 1.4 }}
        className="absolute -right-4 bottom-1/3 hidden md:block"
      >
        <div className="rounded-full bg-paper/90 backdrop-blur border border-line px-4 py-2 text-[0.62rem] uppercase tracking-[0.32em] text-foreground shadow-[0_8px_20px_rgba(40,18,6,0.18)]">
          Hecho a mano
        </div>
      </motion.div>
    </div>
  );
}
