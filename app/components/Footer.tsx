import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { href: "#products", label: "Products" },
  { href: "#story", label: "Our Story" },
  { href: "#wholesale", label: "Wholesale" },
  { href: "#where-to-buy", label: "Where to Buy" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-white border-t border-line-soft">
      {/* Mexican flag accent — top 3px, same as nav */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg, #1f5f3b 33.33%, #e5e7eb 33.33% 66.66%, #9b1c1c 66.66%)",
        }}
      />

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-[0.88rem] font-semibold text-foreground">La Carreta Mexican Food</p>
            <p className="text-[0.82rem] text-muted">Known locally as La Carreta Tortilleria</p>

            {/* Trust pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.14em] font-semibold text-green-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                Est. 1939
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.14em] font-semibold text-red-700">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                No Preservatives
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line-soft bg-[#f9fafb] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.14em] font-semibold text-muted">
                100% Natural
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[0.68rem] uppercase tracking-[0.2em] font-bold text-green-700 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.9rem] text-muted hover:text-green-700 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.68rem] uppercase tracking-[0.2em] font-bold text-red-700 mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-2 text-[0.9rem] text-muted leading-relaxed">
              <p>4218 Mission Boulevard</p>
              <p>Montclair, CA 91763</p>
              <p className="pt-1">
                <a
                  href="mailto:wholesale@lacarreta.com"
                  className="hover:text-red-700 transition-colors font-medium"
                >
                  wholesale@lacarreta.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+19095550178"
                  className="hover:text-red-700 transition-colors"
                >
                  +1 (909) 555-0178
                </a>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-line-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            © {new Date().getFullYear()} La Carreta Mexican Food · All rights reserved
          </p>
          <div className="flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <span aria-hidden className="text-line-soft">·</span>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <span aria-hidden className="text-line-soft">·</span>
            <Link href="#wholesale" className="hover:text-green-700 transition-colors font-semibold">Trade Inquiries</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
