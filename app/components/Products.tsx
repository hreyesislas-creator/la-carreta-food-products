"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_PHOTOS } from "./photos";

const ease = [0.22, 1, 0.36, 1] as const;

type Category = {
  title: string;
  description: string;
  photoKey: string;
  accent: string;
  accentText: string;
  tag: string;
  /** Hero products use a taller image ratio and get a "Bestseller" badge */
  featured?: boolean;
};

const CATEGORIES: Category[] = [
  {
    title: "Corn Tortillas",
    description: "Fresh corn tortillas made with natural ingredients and original family methods. Our signature product since 1939.",
    photoKey: "corn",
    accent: "bg-green-700",
    accentText: "text-white",
    tag: "Corn",
    featured: true,
  },
  {
    title: "Flour Tortillas",
    description: "Soft, pliable flour tortillas crafted for everyday meals and foodservice use. Hand-stretched for consistent texture.",
    photoKey: "flour",
    accent: "bg-yellow-600",
    accentText: "text-white",
    tag: "Flour",
    featured: true,
  },
  {
    title: "Fresh Masa",
    description: "Traditional masa prepared fresh for tortillas, tamales, and authentic cooking.",
    photoKey: "masa",
    accent: "bg-amber-700",
    accentText: "text-white",
    tag: "Masa",
  },
  {
    title: "Tamales",
    description: "Classic tamales made with trusted ingredients and time-honored family recipes.",
    photoKey: "tamal",
    accent: "bg-red-700",
    accentText: "text-white",
    tag: "Tamales",
  },
  {
    title: "Mexican Spices",
    description: "House spices and blends that bring authentic flavor to every table.",
    photoKey: "spices",
    accent: "bg-orange-700",
    accentText: "text-white",
    tag: "Spices",
  },
];

export function Products() {
  return (
    <section id="products" className="relative bg-[#f9fafb] py-16 md:py-20">
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHeader />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease }}
        className="inline-flex rounded-full bg-green-50 border border-green-200 text-green-700 px-4 py-1.5 text-[0.64rem] uppercase tracking-[0.2em] font-semibold"
      >
        Product Categories
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease, delay: 0.07 }}
        className="mt-4 text-[1.85rem] md:text-[2.45rem] leading-[1.1] tracking-[-0.018em] font-bold"
      >
        Explore Our Core Products
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease, delay: 0.14 }}
        className="mt-3 text-[0.97rem] text-muted leading-relaxed"
      >
        Corn tortillas, flour tortillas, fresh masa, tamales, and Mexican spices — made for retail shelves and wholesale partners.
      </motion.p>
    </div>
  );
}

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const photo = PRODUCT_PHOTOS[category.photoKey];
  const featured = !!category.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease, delay: index * 0.06 }}
      className={`group flex flex-col rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-[0_12px_28px_-16px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 ${
        featured ? "border-green-200 ring-1 ring-green-200/60" : "border-line-soft"
      }`}
    >
      {/* Photo */}
      {photo && (
        <div className={`relative overflow-hidden shrink-0 ${featured ? "aspect-[3/2]" : "aspect-[4/3]"}`}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            style={{ objectFit: "cover", objectPosition: photo.position }}
            className="transition-transform duration-500 group-hover:scale-[1.06]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.44) 100%)" }}
          />
          {/* Category tag */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] font-bold ${category.accent} ${category.accentText}`}>
              {category.tag}
            </span>
            {featured && (
              <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.16em] font-bold text-green-700">
                Bestseller
              </span>
            )}
          </div>
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        <div className={`h-[3px] w-10 rounded-full mb-3.5 ${category.accent}`} />
        <h3 className={`font-bold text-foreground leading-snug ${featured ? "text-[1.05rem]" : "text-[0.98rem]"}`}>
          {category.title}
        </h3>
        <p className="mt-2 text-[0.85rem] text-muted leading-relaxed flex-1">{category.description}</p>

        <Link
          href="#wholesale"
          className="mt-4 inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.18em] font-bold text-green-700 hover:text-red-700 transition-colors group/link"
        >
          View Products
          <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
