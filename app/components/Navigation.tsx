"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

const links = [
  { href: "#products", label: "Products" },
  { href: "#story", label: "Our Story" },
  { href: "#wholesale", label: "Wholesale" },
  { href: "#where-to-buy", label: "Where to Buy" },
  { href: "#contact", label: "Contact" },
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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.08)]"
          : "bg-white"
      }`}
    >
      {/* Mexican flag accent stripe — top 3px */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg, #1f5f3b 33.33%, #ffffff 33.33% 66.66%, #9b1c1c 66.66%)",
        }}
      />

      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
          <Link href="/" aria-label="La Carreta Mexican Food home" className="shrink-0">
            <Logo preload />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.75rem] uppercase tracking-[0.18em] font-semibold text-foreground/70 hover:text-green-700 transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#wholesale"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-white hover:bg-red-700 transition-colors duration-300 shadow-sm"
            >
              Become a Retail Partner
              <span aria-hidden className="text-[0.8rem]">→</span>
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-soft bg-white"
            >
              <span className="sr-only">{open ? "Close" : "Menu"}</span>
              <span className="flex flex-col gap-[5px] items-center">
                <span
                  className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
                    open ? "rotate-45 translate-y-[6.5px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
                    open ? "-rotate-45 -translate-y-[6.5px]" : ""
                  }`}
                />
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
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white border-t border-line-soft shadow-lg"
          >
            <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[0.78rem] uppercase tracking-[0.18em] font-semibold text-foreground/70 hover:text-green-700 transition-colors py-2.5 border-b border-line-soft/60 last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#wholesale"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3.5 text-[0.68rem] uppercase tracking-[0.22em] font-semibold text-white"
              >
                Become a Retail Partner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
