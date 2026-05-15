"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

const links = [
  { href: "#heritage", label: "Herencia", en: "Heritage" },
  { href: "#manifesto", label: "Casa", en: "House" },
  { href: "#products", label: "Productos", en: "Products" },
  { href: "#wholesale", label: "Mayoreo", en: "Wholesale" },
  { href: "#partners", label: "Familia", en: "Partners" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(243,230,200,0.92)] backdrop-blur-md shadow-[0_1px_0_var(--color-line-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <div className="flex items-center justify-between py-5">
          <Link href="/" aria-label="La Carreta home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex flex-col items-center text-center"
              >
                <span className="font-display italic text-[1.05rem] text-foreground group-hover:text-gold-deep transition-colors duration-300">
                  {l.label}
                </span>
                <span className="text-[0.55rem] uppercase tracking-[0.32em] text-subtle mt-0.5">
                  {l.en}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#partner"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-clay-dark px-5 py-3 text-[0.7rem] uppercase tracking-[0.3em] text-paper hover:bg-gold-deep transition-all duration-500"
            >
              Sea un Socio
              <span aria-hidden>→</span>
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper/50 backdrop-blur"
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5">
                <span className="block h-px w-5 bg-foreground" />
                <span className="block h-px w-5 bg-foreground" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-line-soft"
          >
            <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 py-2"
                >
                  <span className="font-display italic text-2xl text-foreground">
                    {l.label}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.3em] text-subtle">
                    {l.en}
                  </span>
                </Link>
              ))}
              <Link
                href="#partner"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-clay-dark px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.3em] text-paper"
              >
                Sea un Socio · Become a Partner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
