"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Flourish, CornEar, ClayOlla, Molcajete, TortillaBundle, StarMark } from "./Ornaments";
import { HERITAGE_MASA, HERITAGE_COMAL } from "./photos";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    n: "I",
    icon: CornEar,
    title: "El maíz",
    en: "Heirloom corn",
    body:
      "Native blue, white and yellow maize from small farms in Jalisco and Oaxaca. The same kernels our great-grandmothers planted, sun-dried, and prayed over before the harvest.",
  },
  {
    n: "II",
    icon: ClayOlla,
    title: "La nixtamalización",
    en: "The nixtamal ritual",
    body:
      "Slow-cooked overnight with cal and spring water in clay ollas. The hydrated lime softens the kernel and gently keeps the masa — the only preservative our recipes have ever needed.",
  },
  {
    n: "III",
    icon: Molcajete,
    title: "A mano",
    en: "Pressed by hand",
    body:
      "Every tortilla is shaped, comaled, and finished by our cooks. We measure success in aroma, in the puff of steam, in the silence that follows the first bite.",
  },
];

export function Heritage() {
  return (
    <section id="heritage" className="relative bg-aged-paper py-32 md:py-40 overflow-hidden">
      {/* faint side ornaments */}
      <div className="absolute -left-12 top-32 opacity-20 hidden lg:block">
        <CornEar className="w-24 h-auto" tone="#a87431" />
      </div>
      <div className="absolute -right-8 top-1/2 opacity-15 hidden lg:block">
        <TortillaBundle className="w-56 h-auto" tone="#a87431" />
      </div>

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        {/* Section header — editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gold/70" />
              <span className="eyebrow">Capítulo I — Herencia</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              className="mt-8 font-serif text-[2.4rem] md:text-[3.6rem] leading-[1.02] tracking-[-0.018em]"
            >
              From a horse-drawn carreta
              <br />
              to{" "}
              <span className="font-display italic font-light text-gold-deep">
                generaciones de tradición.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <p className="drop-cap font-display text-[1.2rem] md:text-[1.32rem] italic leading-[1.7] text-muted">
              Known throughout the community as{" "}
              <span className="text-foreground">La Carreta Tortilleria</span>,
              the family began in 1939 making tortillas in a small garage,
              placing them into a galvanized tub, and carrying them through the
              neighborhood on a horse-drawn carreta until every last one was
              sold. That same commitment to freshness, simplicity, and honest
              ingredients still guides everything La Carreta Mexican Food makes
              today.
            </p>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-muted">
              Using original family recipes, La Carreta continues to make corn
              tortillas, hand-stretched flour tortillas, handmade tamales, and
              masa prepared with the care of a traditional Mexican kitchen —
              with simple ingredients, traditional methods, and no artificial
              preservatives.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <StarMark className="w-3 h-3" tone="#a87431" />
              <span className="font-display italic text-foreground">
                — Family legacy continued by Carmen Cervantes &amp; Beatriz Cervantes Guillén
              </span>
            </div>
          </motion.div>
        </div>

        {/* Editorial visual band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease }}
          className="relative grid grid-cols-1 md:grid-cols-12 gap-6 mb-24"
        >
          <ImagePanel
            className="md:col-span-5 aspect-[4/5]"
            variant="masa"
            caption="Masa fresca · pressed by hand"
            tag="Maíz nativo"
          />
          <ImagePanel
            className="md:col-span-7 aspect-[4/3] md:mt-16"
            variant="comal"
            caption="The comal · 6 a.m."
            tag="Hecho a mano"
          />
        </motion.div>

        {/* Ornamental divider */}
        <div className="flex justify-center mb-20">
          <Flourish className="w-72 h-6" tone="#a87431" />
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease, delay: i * 0.15 }}
              className="relative bg-paper/60 backdrop-blur-sm border border-line-soft rounded-sm p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-display italic text-[2.2rem] leading-none text-gold-deep">
                  Cap. {p.n}
                </span>
                <p.icon className="w-12 h-auto opacity-80" tone="#7a4f1c" />
              </div>
              <div className="h-px w-14 bg-gold" />
              <div className="mt-5">
                <div className="text-[0.62rem] uppercase tracking-[0.36em] text-subtle mb-1.5">
                  {p.en}
                </div>
                <h3 className="font-serif text-[1.6rem] leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-[0.98rem] text-muted leading-relaxed">
                  {p.body}
                </p>
              </div>
              {/* Bottom tile motif */}
              <div className="mt-7 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.36em] text-subtle">
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
                <span>Paso {p.n.toLowerCase()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImagePanel({
  className = "",
  variant,
  caption,
  tag,
}: {
  className?: string;
  variant: "masa" | "comal";
  caption: string;
  tag: string;
}) {
  const photo = variant === "masa" ? HERITAGE_MASA : HERITAGE_COMAL;
  return (
    <div className={`relative overflow-hidden rounded-sm vignette border border-line/60 ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover", objectPosition: photo.position }}
      />

      {/* Warm color grade pulling the photo toward the brand palette */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply opacity-25"
        style={{
          background:
            "linear-gradient(180deg, rgba(214,178,122,0) 30%, rgba(58,31,12,0.6) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-soft-light opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,220,170,0.55), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.40) 0.7px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Ornamental inner frame */}
      <div className="absolute inset-3 border border-paper/30 rounded-sm pointer-events-none" />
      <div className="absolute inset-5 border border-gold/40 rounded-sm pointer-events-none" />

      {/* Top corner stamp */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-paper/90 backdrop-blur-sm border border-line">
        <span className="h-px w-4 bg-gold-deep" />
        <span className="text-[0.58rem] uppercase tracking-[0.32em] text-gold-deep">
          {tag}
        </span>
      </div>

      {/* Bottom caption ribbon */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="font-display italic text-base text-paper drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          {caption}
        </span>
        <span className="text-[0.6rem] uppercase tracking-[0.32em] text-paper/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          Jalisco · MX
        </span>
      </div>
    </div>
  );
}

