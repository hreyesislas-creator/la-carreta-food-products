import Link from "next/link";
import { Logo } from "./Logo";
import { Flourish, MexicoSeal, CornEar } from "./Ornaments";

export function Footer() {
  return (
    <footer className="relative bg-clay-dark text-paper overflow-hidden">
      {/* warm sweep */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[26rem] w-[26rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(214,178,122,0.20), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,220,170,0.22) 0.6px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* faint corn ear in margin */}
      <div className="absolute -right-4 top-1/3 opacity-20 hidden lg:block">
        <CornEar className="w-20 h-auto" tone="#d6b27a" />
      </div>

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12 pt-24 pb-12">
        {/* Top ornament */}
        <div className="flex justify-center mb-16">
          <Flourish className="w-96 h-6 opacity-90" tone="#d6b27a" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-7 max-w-sm font-display text-[1.15rem] leading-relaxed text-gold-soft italic">
              &ldquo;A wooden cart, a clay comal, and recipes passed down
              through four generations of family hands.&rdquo;
            </p>
            <div className="mt-7 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.4em] text-gold-soft">
              <span className="inline-block h-px w-10 bg-gold-soft/70" />
              Hecho en México · Crafted in California
              <span className="inline-block h-px w-10 bg-gold-soft/70" />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <MexicoSeal className="w-20 h-20 opacity-90" tone="#d6b27a" />
              <div>
                <div className="font-display italic text-base text-paper">
                  Casa Vargas
                </div>
                <div className="text-[0.62rem] uppercase tracking-[0.36em] text-gold-soft mt-1">
                  Tradición desde 1978
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-gold-soft">Explore</h4>
            <ul className="mt-5 space-y-3 text-[0.98rem]">
              {[
                ["#heritage", "Herencia", "Heritage"],
                ["#manifesto", "Nuestra promesa", "Our promise"],
                ["#products", "Productos", "Products"],
                ["#wholesale", "Mayoreo", "Wholesale"],
                ["#partners", "La Familia", "Retail partners"],
              ].map(([href, es, en]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-baseline gap-2 hover:text-gold-soft transition-colors"
                  >
                    <span className="font-display italic">{es}</span>
                    <span className="text-[0.58rem] uppercase tracking-[0.32em] text-gold-soft/70">
                      {en}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="eyebrow text-gold-soft">La Casa</h4>
            <address className="not-italic mt-5 space-y-2 text-[0.98rem] text-paper/80 leading-relaxed">
              <p>La Carreta Food Products</p>
              <p>4218 Mission Boulevard</p>
              <p>Montclair, California 91763</p>
              <p className="pt-3">
                <a
                  href="mailto:wholesale@lacarreta.com"
                  className="text-paper hover:text-gold-soft transition-colors"
                >
                  wholesale@lacarreta.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+19095550178"
                  className="text-paper hover:text-gold-soft transition-colors"
                >
                  +1 (909) 555-0178
                </a>
              </p>
            </address>

            <div className="mt-7 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.36em] text-gold-soft">
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold-soft" />
              Lunes a Sábado · Mon — Sat
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gold-soft/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[0.62rem] uppercase tracking-[0.34em] text-gold-soft">
          <p>© {new Date().getFullYear()} La Carreta Food Products · All rights reserved</p>
          <p className="flex items-center gap-4">
            <Link href="#" className="hover:text-paper transition-colors">Privacy</Link>
            <span aria-hidden>·</span>
            <Link href="#" className="hover:text-paper transition-colors">Terms</Link>
            <span aria-hidden>·</span>
            <Link href="#" className="hover:text-paper transition-colors">Trade Inquiries</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
