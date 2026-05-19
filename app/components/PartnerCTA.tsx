"use client";

import { motion } from "motion/react";
import { Flourish, MexicoSeal, CornEar } from "./Ornaments";

const ease = [0.22, 1, 0.36, 1] as const;

export function PartnerCTA() {
  return (
    <section id="partner" className="relative isolate overflow-hidden bg-clay-wash">
      {/* paper grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.16) 1px, transparent 1.6px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* faint side ornament */}
      <div className="absolute -left-4 bottom-10 opacity-20 hidden lg:block">
        <CornEar className="w-28 h-auto" tone="#3a1f0c" />
      </div>

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12 py-32 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* ─── Editorial copy ─── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gold-deep" />
              <span className="eyebrow">Capítulo V — Una Invitación</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease, delay: 0.1 }}
              className="mt-8 font-serif text-[2.6rem] sm:text-5xl md:text-[4.6rem] leading-[1.02] tracking-[-0.022em] text-foreground"
            >
              Offer your customers
              <br />
              <span className="font-display italic font-light text-gold-deep">
                el verdadero México.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease, delay: 0.2 }}
              className="mt-8 max-w-xl font-display text-[1.2rem] italic text-muted leading-relaxed"
            >
              We are selective about who carries our products — and we hope
              your store is a good fit. Offer your customers authentic Mexican
              food made with simple ingredients and no artificial preservatives.
              Reach out for samples, sell sheets, and the conversation that
              begins every lasting partnership.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease, delay: 0.3 }}
              className="mt-10 flex items-center gap-5"
            >
              <MexicoSeal className="w-24 h-24" tone="#3a1f0c" />
              <div>
                <div className="font-display italic text-lg text-foreground">
                  Saludos cordiales,
                </div>
                <div className="font-serif text-[1.6rem] text-foreground -mt-1">
                  la Familia Cervantes
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.36em] text-subtle mt-1.5">
                  Family legacy · Since 1939
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── Letter / postcard form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Postcard rotation accent */}
            <div
              aria-hidden
              className="absolute -inset-3 bg-paper-deep -rotate-2 shadow-[0_30px_60px_-30px_rgba(40,18,6,0.45)]"
            />
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative bg-paper border border-line p-9 md:p-10 shadow-[0_40px_80px_-30px_rgba(40,18,6,0.35)]"
            >
              {/* inner frame */}
              <div className="pointer-events-none absolute inset-3 border border-gold/40" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="flex items-center gap-3">
                    <span className="h-px w-10 bg-gold-deep" />
                    <span className="text-[0.6rem] uppercase tracking-[0.4em] text-gold-deep">
                      Consulta de Mayoreo
                    </span>
                  </span>
                  <Flourish className="w-12 h-3" tone="#7a4f1c" />
                </div>

                <h3 className="font-display italic text-2xl text-foreground leading-tight">
                  Estimada familia La Carreta,
                </h3>
                <p className="mt-2 text-[0.92rem] text-muted">
                  We would like to carry your products. Please tell us more.
                </p>

                <div className="mt-7 space-y-5">
                  <Field label="Su nombre · Your name" placeholder="María González" />
                  <Field label="Negocio · Store or business" placeholder="Mercado del Sol" />
                  <Field label="Correo · Email" placeholder="maria@mercado.com" type="email" />
                  <div>
                    <label className="block text-[0.6rem] uppercase tracking-[0.36em] text-subtle mb-2">
                      Interés · Interested in
                    </label>
                    <select
                      className="w-full bg-transparent border-b border-line py-3 text-foreground focus:outline-none focus:border-gold transition-colors font-display italic"
                      defaultValue=""
                    >
                      <option value="" disabled>Select an option</option>
                      <option>Carry products in-store</option>
                      <option>Restaurant supply</option>
                      <option>Distribution partnership</option>
                      <option>Press & media</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-10 w-full inline-flex items-center justify-center gap-3 rounded-full bg-clay-dark px-7 py-4 text-[0.74rem] uppercase tracking-[0.32em] text-paper hover:bg-gold-deep transition-colors duration-500"
                >
                  Send us a letter
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <div className="mt-6 flex items-center justify-center gap-3 text-[0.62rem] uppercase tracking-[0.36em] text-subtle">
                  <span className="h-px w-6 bg-gold/60" />
                  o escríbanos a wholesale@lacarreta.com
                  <span className="h-px w-6 bg-gold/60" />
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[0.6rem] uppercase tracking-[0.36em] text-subtle mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-line py-3 text-foreground placeholder:text-subtle/60 placeholder:italic placeholder:font-display focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
