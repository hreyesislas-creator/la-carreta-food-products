"use client";

import { motion } from "motion/react";
import {
  Flourish,
  StarMark,
  CornEar,
  ClayOlla,
  Molcajete,
  TileMotif,
  TortillaBundle,
} from "./Ornaments";

const ease = [0.22, 1, 0.36, 1] as const;

const INGREDIENTS = [
  {
    icon: CornEar,
    spanish: "Maíz nativo",
    english: "Heirloom corn",
    body:
      "White, yellow, and blue corn from trusted mills — soaked overnight in the traditional way.",
  },
  {
    icon: ClayOlla,
    spanish: "Cal natural",
    english: "Hydrated lime",
    body:
      "The traditional nixtamal aid — softens the kernel, deepens the flavor, and naturally extends its life.",
  },
  {
    icon: Molcajete,
    spanish: "Manteca cultivada",
    english: "Cultured lard",
    body:
      "Slow-folded into our flour tortillas for the supple chew of a Northern Mexican kitchen.",
  },
  {
    icon: TileMotif,
    spanish: "Harina sin blanquear",
    english: "Unbleached flour",
    body: "Plain, honest wheat flour — never bleached, never bromated.",
  },
  {
    icon: StarMark,
    spanish: "Sal de mar",
    english: "Sea salt",
    body:
      "Hand-harvested Colima sea salt — only where the recipe quietly asks for it.",
  },
  {
    icon: TortillaBundle,
    spanish: "Agua y tiempo",
    english: "Water & time",
    body:
      "Spring water, an overnight soak, and the patience of a comal at sunrise.",
  },
];

const ABSENCES = [
  "No artificial preservatives.",
  "No dough conditioners.",
  "No bleaching agents.",
  "No artificial colors or flavors.",
  "No mystery shelf-life extenders.",
  "No unnecessary additives.",
];

export function Ingredients() {
  return (
    <section
      id="ingredientes"
      className="relative bg-linen py-32 md:py-40 overflow-hidden"
    >
      {/* Faint side ornaments — same quiet treatment as Heritage */}
      <div className="absolute -left-10 top-40 opacity-15 hidden lg:block">
        <CornEar className="w-20 h-auto" tone="#a87431" />
      </div>
      <div className="absolute -right-6 bottom-32 opacity-15 hidden lg:block">
        <TortillaBundle className="w-48 h-auto" tone="#a87431" />
      </div>

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        {/* Editorial header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gold/70" />
            <span className="eyebrow">Recetario familiar — An honest ledger</span>
            <span className="h-px w-12 bg-gold/70" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="mt-8 font-serif text-[2.4rem] md:text-[3.6rem] leading-[1.04] tracking-[-0.018em]"
          >
            Ingredientes simples,
            <br />
            <span className="font-display italic font-light text-gold-deep">
              métodos tradicionales.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="mt-7 font-display italic text-[1.15rem] text-muted leading-relaxed"
          >
            For generations, La Carreta has trusted what our grandparents
            trusted — heirloom corn, hydrated lime, a slow nixtamal, and the
            patience of a hot comal. The freshness in every tortilla is guided
            by tradition, not by additives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="mt-8"
          >
            <Flourish className="w-56 h-5" tone="#a87431" />
          </motion.div>
        </div>

        {/* The ledger — two facing pages */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gold/30 border border-gold/30 shadow-[0_30px_60px_-30px_rgba(40,18,6,0.35)]"
        >
          {/* Lo que sí — affirmative ingredients */}
          <div className="relative bg-paper p-10 md:p-12">
            <div className="pointer-events-none absolute inset-3 border border-gold/25" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold-deep" />
                <span className="text-[0.6rem] uppercase tracking-[0.4em] text-gold-deep">
                  Lo que sí · What goes in
                </span>
              </div>

              <h3 className="mt-5 font-display italic text-[2rem] md:text-[2.2rem] leading-tight text-foreground">
                Six honest ingredients.
              </h3>

              <ul className="mt-9 space-y-7">
                {INGREDIENTS.map((it, i) => (
                  <motion.li
                    key={it.spanish}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease, delay: i * 0.06 }}
                    className="grid grid-cols-[auto_1fr] gap-5 pt-5 first:pt-0 border-t border-line-soft first:border-t-0"
                  >
                    <it.icon
                      className="w-10 h-auto mt-1 opacity-80"
                      tone="#7a4f1c"
                    />
                    <div>
                      <div className="font-display italic text-[1.3rem] text-gold-deep leading-tight">
                        {it.spanish}
                      </div>
                      <div className="smallcaps text-[0.82rem] text-foreground mt-0.5">
                        {it.english}
                      </div>
                      <p className="mt-2 text-[0.96rem] text-muted leading-relaxed">
                        {it.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lo que no — quiet absences */}
          <div className="relative bg-paper-deep/70 p-10 md:p-12">
            <div className="pointer-events-none absolute inset-3 border border-gold/25" />

            {/* Subtle paper grain for the right page */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.10) 1px, transparent 1.6px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold-deep" />
                <span className="text-[0.6rem] uppercase tracking-[0.4em] text-gold-deep">
                  Lo que no · What we leave out
                </span>
              </div>

              <h3 className="mt-5 font-display italic text-[2rem] md:text-[2.2rem] leading-tight text-foreground">
                Nothing that doesn&rsquo;t belong.
              </h3>

              <p className="mt-6 text-[0.98rem] text-muted leading-relaxed max-w-md">
                Our masa keeps because we treat it like our grandparents did
                — with cal, with care, and with the next sunrise in mind.
                Anything more would be unnecessary.
              </p>

              <ul className="mt-9 space-y-5">
                {ABSENCES.map((line, i) => (
                  <motion.li
                    key={line}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease, delay: i * 0.05 }}
                    className="flex items-baseline gap-4 pt-4 border-t border-line-soft first:border-t-0 first:pt-0"
                  >
                    <span
                      aria-hidden
                      className="inline-block h-1.5 w-1.5 rotate-45 bg-gold mt-2 shrink-0"
                    />
                    <span className="font-display italic text-[1.12rem] md:text-[1.18rem] text-foreground leading-snug">
                      {line}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-gold/30 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.36em] text-gold-deep">
                <StarMark className="w-3 h-3" tone="#a87431" />
                Naturally preserved · since 1939
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing pull-line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease }}
          className="mt-20 flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <Flourish className="w-56 h-5" tone="#a87431" />
          <p className="mt-6 font-display italic text-[1.4rem] md:text-[1.65rem] leading-snug text-foreground">
            &ldquo;Made the way tortillas were always meant to be made — with
            time, with care, and with nothing to hide.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.4em] text-subtle">
            <span className="h-px w-8 bg-gold/70" />
            La Familia Cervantes · Tradición desde 1939
            <span className="h-px w-8 bg-gold/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
