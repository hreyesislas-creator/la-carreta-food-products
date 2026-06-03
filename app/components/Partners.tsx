"use client";

import { motion } from "motion/react";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const PARTNERS = [
  {
    name: "Stater Bros.",
    subtitle: "Markets",
    logo: "/partners/stater-bros.svg",
  },
  {
    name: "Northgate",
    subtitle: "Market",
    logo: "/partners/northgate.svg",
  },
  {
    name: "Vallarta",
    subtitle: "Supermarkets",
    logo: "/partners/vallarta.svg",
  },
  {
    name: "Cárdenas",
    subtitle: "Markets",
    logo: "/partners/cardenas.svg",
  },
  {
    name: "Food 4 Less",
    subtitle: "Grocery",
    logo: "/partners/food4less.svg",
  },
  {
    name: "& More",
    subtitle: "Coming soon",
    logo: null,
  },
];

export function Partners() {
  return (
    <section id="where-to-buy" className="relative bg-[#f9fafb] border-y border-line-soft py-14 md:py-16">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex rounded-full bg-green-50 border border-green-200 text-green-700 px-4 py-1.5 text-[0.64rem] uppercase tracking-[0.2em] font-semibold"
            >
              Trusted By
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease, delay: 0.07 }}
              className="mt-3 text-[1.6rem] md:text-[2rem] leading-[1.1] tracking-[-0.016em] font-bold"
            >
              Available at Major Retailers
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            className="text-[0.88rem] text-muted max-w-xs sm:text-right leading-relaxed"
          >
            Found across California and the Southwest in your neighborhood grocery store.
          </motion.p>
        </div>

        {/* Retailer logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: index * 0.05 }}
              className={`group flex flex-col items-center justify-center gap-0 rounded-2xl border bg-white px-3 py-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 min-h-[88px] ${
                partner.logo === null
                  ? "border-dashed border-line-soft"
                  : "border-line-soft hover:border-green-200"
              }`}
            >
              {partner.logo ? (
                /* SVG wordmark logo */
                <div className="relative w-full" style={{ height: 52 }}>
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="200px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ) : (
                /* "& More" placeholder tile */
                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-[1.1rem] font-black text-muted/40 leading-none">+</span>
                  <span className="text-[0.72rem] font-semibold text-muted leading-snug">
                    {partner.name}
                  </span>
                  <span className="text-[0.62rem] text-muted/60 leading-none">
                    {partner.subtitle}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-6 text-center text-[0.8rem] text-muted"
        >
          Want to carry La Carreta at your store?{" "}
          <a href="#wholesale" className="font-semibold text-green-700 hover:text-red-700 underline underline-offset-2 transition-colors">
            Contact our wholesale team →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
