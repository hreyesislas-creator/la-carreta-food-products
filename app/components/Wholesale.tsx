"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Flourish, ClayOlla, CornEar, Molcajete } from "./Ornaments";
import { WHOLESALE_PHOTO } from "./photos";

const ease = [0.22, 1, 0.36, 1] as const;

const audience = [
  {
    icon: ClayOlla,
    spanish: "Tiendas y mercados",
    title: "Grocery & Markets",
    body:
      "Stock authentic Mexican staples that customers return for week after week — refrigerated, fresh, and consistently crafted.",
  },
  {
    icon: CornEar,
    spanish: "Tiendas especializadas",
    title: "Specialty Retailers",
    body:
      "Premium artisan positioning that complements curated food halls, gourmet markets, and Latin specialty grocers.",
  },
  {
    icon: Molcajete,
    spanish: "Restaurantes",
    title: "Restaurants & Hotels",
    body:
      "Chef-grade tortillas, fresh masa and tamales delivered weekly. Customizable formats and standing weekly orders.",
  },
];

export function Wholesale() {
  return (
    <section id="wholesale" className="relative bg-aged-paper py-32 md:py-40 overflow-hidden">
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Side visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden vignette border border-line/60 shadow-[0_30px_60px_-25px_rgba(40,18,6,0.4)]">
              <Image
                src={WHOLESALE_PHOTO.src}
                alt={WHOLESALE_PHOTO.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                style={{ objectFit: "cover", objectPosition: WHOLESALE_PHOTO.position }}
              />
              {/* Warm color grade */}
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-multiply opacity-30"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(214,178,122,0) 25%, rgba(58,31,12,0.65) 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-soft-light opacity-55"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 28%, rgba(255,222,170,0.5), transparent 65%)",
                }}
              />
              {/* Aged paper grain */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.40) 0.7px, transparent 1.2px)",
                  backgroundSize: "22px 22px",
                }}
              />

              {/* engraved frame */}
              <div className="absolute inset-3 border border-paper/30 pointer-events-none" />
              <div className="absolute inset-5 border border-gold/40 pointer-events-none" />

              {/* Top stamp */}
              <div className="absolute top-7 left-7 right-7 flex items-center justify-between">
                <span className="flex items-center gap-2 bg-paper/90 backdrop-blur-sm px-3 py-1.5">
                  <span className="h-px w-4 bg-gold-deep" />
                  <span className="text-[0.58rem] uppercase tracking-[0.36em] text-gold-deep">
                    Cocina Familiar
                  </span>
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.32em] text-paper">
                  No. 04
                </span>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-7 left-0 right-0 flex justify-center">
                <div className="flex items-center gap-3 bg-paper/92 backdrop-blur-sm px-4 py-2">
                  <span className="h-px w-5 bg-gold-deep" />
                  <span className="font-display italic text-base text-foreground">
                    At home on every shelf
                  </span>
                  <span className="h-px w-5 bg-gold-deep" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gold/70" />
              <span className="eyebrow">Capítulo III — Mayoreo</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              className="mt-8 font-serif text-[2.4rem] md:text-[3.5rem] leading-[1.04] tracking-[-0.018em]"
            >
              Carry the soul of <br />
              Mexican cooking
              <span className="font-display italic font-light text-gold-deep">
                {" "}
                in your aisles.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease, delay: 0.2 }}
              className="mt-8 max-w-xl font-display text-[1.15rem] italic text-muted leading-relaxed"
            >
              We partner with grocers, specialty retailers and restaurants that
              share a commitment to authentic, well-made food. Offer your
              customers traditional Mexican products made with simple
              ingredients and no artificial preservatives — the same care given
              to every tortilla, since 1939.
            </motion.p>

            <div className="mt-12 space-y-6">
              {audience.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease, delay: 0.15 + i * 0.1 }}
                  className="grid grid-cols-[auto_1fr] gap-5 pt-6 border-t border-gold/40"
                >
                  <a.icon className="w-12 h-auto mt-1 opacity-80" tone="#7a4f1c" />
                  <div>
                    <div className="font-display italic text-[1.4rem] text-gold-deep leading-tight">
                      {a.spanish}
                    </div>
                    <div className="smallcaps text-[0.95rem] text-foreground mt-0.5">
                      {a.title}
                    </div>
                    <p className="mt-3 text-[0.98rem] text-muted leading-relaxed">
                      {a.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-line"
            >
              <div className="flex flex-wrap items-center gap-x-10 gap-y-5 text-[0.7rem] uppercase tracking-[0.34em] text-subtle">
                {[
                  "SQF Certified",
                  "Non-GMO sourcing",
                  "No artificial preservatives",
                  "Family owned · 85+ years",
                  "Weekly delivery",
                  "Original recipes",
                ].map((c) => (
                  <span key={c} className="flex items-center gap-3">
                    <span aria-hidden className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease, delay: 0.6 }}
              className="mt-10 flex items-center gap-6"
            >
              <Link
                href="#partner"
                className="group inline-flex items-center gap-3 rounded-full bg-clay-dark px-7 py-4 text-[0.74rem] uppercase tracking-[0.3em] text-paper hover:bg-gold-deep transition-all duration-500"
              >
                Request a wholesale catalog
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <span className="font-display italic text-muted">
                or send us a letter
              </span>
            </motion.div>
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <Flourish className="w-80 h-6" tone="#a87431" />
        </div>
      </div>
    </section>
  );
}

