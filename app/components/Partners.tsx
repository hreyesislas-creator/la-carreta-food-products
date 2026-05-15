"use client";

import { motion } from "motion/react";
import { Flourish, StarMark, TileMotif } from "./Ornaments";

const ease = [0.22, 1, 0.36, 1] as const;

const partners = [
  { name: "Stater Bros.", style: "serif", since: "Since 2003" },
  { name: "Northgate", subtitle: "Market", style: "sans", since: "Since 2007" },
  { name: "Vallarta", subtitle: "Supermarkets", style: "italic", since: "Since 2009" },
  { name: "Cárdenas", subtitle: "Markets", style: "serif", since: "Since 2011" },
  { name: "El Super", style: "sans", since: "Since 2013" },
  { name: "Bristol Farms", style: "italic", since: "Since 2015" },
  { name: "Gelson's", style: "serif", since: "Since 2017" },
  { name: "Mother's Market", style: "sans", since: "Since 2019" },
];

const testimonials = [
  {
    quote:
      "La Carreta tortillas are the difference between a meal and a memory. We have not changed brands in eleven years.",
    author: "Eduardo Núñez",
    role: "Head Chef · La Floresta",
    location: "Los Angeles, CA",
  },
  {
    quote:
      "Our customers ask for La Carreta by name. The product moves itself off the shelf — beautiful, fresh, and unmistakably authentic.",
    author: "Marisol Rivera",
    role: "Category Buyer",
    location: "Specialty Grocer · Pasadena",
  },
];

export function Partners() {
  return (
    <section id="partners" className="relative bg-linen py-32 md:py-40 overflow-hidden">
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-gold/70" />
            <span className="eyebrow">Capítulo IV — La Familia</span>
            <span className="h-px w-12 bg-gold/70" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="mt-8 font-serif text-[2.6rem] md:text-[3.6rem] leading-[1.04] tracking-[-0.018em]"
          >
            On the shelves of
            <br />
            <span className="font-display italic font-light text-gold-deep">
              la familia.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="mt-6 font-display italic text-[1.15rem] text-muted leading-relaxed"
          >
            Carried by trusted grocers and chains across the Southwest — each a
            partnership built on quality, consistency, and the same answer when
            customers ask: yes, it is the real thing.
          </motion.p>
        </div>

        {/* Medallion grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/30">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease, delay: i * 0.06 }}
              className="group relative aspect-[5/3] bg-paper hover:bg-paper-deep transition-colors duration-500 flex flex-col items-center justify-center"
            >
              {/* corner ticks */}
              <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-gold/40" />
              <span className="absolute top-2 right-2 w-3 h-3 border-r border-t border-gold/40" />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-gold/40" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-gold/40" />

              <TileMotif className="w-4 h-4 mb-3 opacity-50" tone="#7a4f1c" />
              <div
                className={`text-foreground text-center px-4 leading-tight ${
                  p.style === "serif"
                    ? "font-serif text-xl md:text-2xl tracking-tight"
                    : p.style === "italic"
                      ? "font-display italic text-xl md:text-2xl"
                      : "font-sans uppercase tracking-[0.2em] text-[0.95rem]"
                }`}
              >
                {p.name}
                {p.subtitle && (
                  <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-subtle mt-1.5">
                    {p.subtitle}
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.32em] text-subtle">
                <span className="h-px w-3 bg-gold/60" />
                {p.since}
                <span className="h-px w-3 bg-gold/60" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 font-display italic text-muted"
        >
          <span className="flex items-center gap-3">
            <StarMark className="w-3 h-3" tone="#a87431" />
            180+ retail locations
          </span>
          <span className="hidden md:block h-px w-12 bg-gold/40" />
          <span className="flex items-center gap-3">
            <StarMark className="w-3 h-3" tone="#a87431" />
            12 grocery chains
          </span>
          <span className="hidden md:block h-px w-12 bg-gold/40" />
          <span className="flex items-center gap-3">
            <StarMark className="w-3 h-3" tone="#a87431" />
            From California to Texas
          </span>
        </motion.div>

        {/* Ornament */}
        <div className="mt-24 flex justify-center">
          <Flourish className="w-80 h-6" tone="#a87431" />
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease, delay: i * 0.15 }}
              className="relative bg-paper border border-line/60 p-10 md:p-12 shadow-[0_24px_50px_-30px_rgba(40,18,6,0.3)]"
            >
              {/* inner frame */}
              <div className="absolute inset-3 border border-gold/30 pointer-events-none" />

              <span
                aria-hidden
                className="absolute top-4 left-8 font-display text-[7rem] italic text-gold/60 leading-none select-none"
              >
                &ldquo;
              </span>
              <blockquote className="relative font-display italic text-[1.35rem] md:text-[1.5rem] leading-[1.55] text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 relative">
                <span className="block h-px w-12 bg-gold" />
                <div>
                  <div className="font-serif text-base text-foreground tracking-tight">
                    {t.author}
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.32em] text-subtle mt-1">
                    {t.role}
                  </div>
                  <div className="text-[0.62rem] uppercase tracking-[0.32em] text-subtle mt-0.5">
                    {t.location}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
