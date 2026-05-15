"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Flourish, StarMark, TileMotif } from "./Ornaments";
import { PRODUCT_PHOTOS } from "./photos";

const ease = [0.22, 1, 0.36, 1] as const;

const products = [
  {
    spanish: "Tortillas de Maíz",
    name: "Stone-ground Corn Tortillas",
    description:
      "Heirloom yellow and blue corn, nixtamalized overnight in clay ollas and pressed by hand at sunrise.",
    detail: "12 ct · 6 in · Maíz nativo",
    badge: "La señora",
    art: "corn",
  },
  {
    spanish: "Tortillas de Harina",
    name: "Hand-folded Flour Tortillas",
    description:
      "Slow-folded with cultured lard and unbleached flour for a soft chew that holds the comal's warmth.",
    detail: "10 ct · 8 in · A mano",
    badge: "Casa",
    art: "flour",
  },
  {
    spanish: "Tamales Tradicionales",
    name: "Tamales, wrapped the old way",
    description:
      "Wrapped in corn husks tied with a single knot. Pork verde, chicken mole, rajas con queso, piña dulce.",
    detail: "6 ct · vapor · receta familiar",
    badge: "Edición",
    art: "tamal",
  },
  {
    spanish: "Masa Fresca",
    name: "Daily-milled Masa",
    description:
      "Soft, fragrant masa ground at dawn and delivered the same day. The beginning of every great Mexican meal.",
    detail: "2 lb · refrigerado · diaria",
    badge: "Diario",
    art: "masa",
  },
  {
    spanish: "Totopos Artesanales",
    name: "Small-batch Tortilla Chips",
    description:
      "Triangle-cut from our own tortillas, kettle-toasted, finished with sea salt from Colima.",
    detail: "9 oz · sal de mar · small batch",
    badge: "Nuevo",
    art: "chips",
  },
  {
    spanish: "Chilaquiles Rojos",
    name: "Heritage Chilaquiles",
    description:
      "Yesterday's tortillas, today's most loved breakfast — bathed in a guajillo and tomato salsa from doña Elena's book.",
    detail: "Recetario · home pack",
    badge: "Próximamente",
    art: "chilaquiles",
  },
];

export function Products() {
  return (
    <section id="products" className="relative bg-talavera py-32 md:py-40 overflow-hidden">
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gold/70" />
            <span className="eyebrow">Capítulo II — La Cosecha</span>
            <span className="h-px w-12 bg-gold/70" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="mt-8 font-serif text-[2.6rem] md:text-[3.8rem] leading-[1.04] tracking-[-0.018em]"
          >
            Nuestra cosecha
            <br />
            <span className="font-display italic font-light text-gold-deep">
              The everyday table.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="mt-6 font-display italic text-[1.15rem] text-muted leading-relaxed"
          >
            Six staples of the Mexican kitchen — each one made the same way our family
            has made them for nearly half a century.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <StarMark className="w-4 h-4" tone="#a87431" />
          <Link
            href="#partner"
            className="group inline-flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.32em] text-foreground"
          >
            <span className="border-b border-gold/70 pb-2 group-hover:border-clay-dark transition-colors">
              Request our wholesale catalog
            </span>
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease, delay: (index % 3) * 0.1 }}
      className="group relative flex flex-col overflow-hidden bg-paper border border-line/60 hover:border-gold/60 transition-all duration-500 shadow-[0_2px_0_var(--color-line-soft),0_24px_50px_-30px_rgba(40,18,6,0.25)]"
    >
      {/* Inner engraved frame */}
      <div className="pointer-events-none absolute inset-3 border border-line-soft z-10" />
      <div className="pointer-events-none absolute inset-4 border border-gold/30 z-10" />

      <div className="relative aspect-[4/5] overflow-hidden vignette">
        <ProductArt variant={product.art} />

        {/* Corner badges */}
        <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
          <TileMotif className="w-3.5 h-3.5" tone="#7a4f1c" />
          <span className="text-[0.58rem] uppercase tracking-[0.4em] text-gold-deep bg-paper/85 px-2.5 py-1 backdrop-blur-sm">
            {product.badge}
          </span>
        </div>
        <div className="absolute top-5 right-5 z-20 font-display italic text-[0.85rem] text-paper drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
          № 0{index + 1}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-7 pt-8 relative z-20">
        <div className="font-display italic text-[1.65rem] leading-tight text-gold-deep">
          {product.spanish}
        </div>
        <div className="mt-1 smallcaps text-[0.95rem] text-foreground">
          {product.name}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-px w-8 bg-gold" />
          <StarMark className="w-2.5 h-2.5" tone="#a87431" />
          <span className="h-px w-8 bg-gold" />
        </div>

        <p className="mt-4 text-[0.96rem] text-muted leading-relaxed flex-1">
          {product.description}
        </p>

        <div className="mt-6 pt-5 border-t border-line-soft flex items-center justify-between gap-3">
          <span className="text-[0.65rem] uppercase tracking-[0.34em] text-subtle">
            {product.detail}
          </span>
          <Link
            href="#partner"
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-foreground hover:text-gold-deep transition-colors"
          >
            Stock
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function ProductArt({ variant }: { variant: string }) {
  const photo = PRODUCT_PHOTOS[variant];
  if (!photo) return null;
  return (
    <>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: "cover", objectPosition: photo.position }}
      />
      {/* Warm color grade to match brand palette */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply opacity-25"
        style={{
          background:
            "linear-gradient(180deg, rgba(214,178,122,0) 30%, rgba(58,31,12,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-soft-light opacity-55"
        style={{
          background:
            "radial-gradient(ellipse at 50% 28%, rgba(255,222,170,0.55), transparent 65%)",
        }}
      />
      {/* Aged paper grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.40) 0.7px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />
    </>
  );
}
