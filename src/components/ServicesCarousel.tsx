"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "../lib/services";

function scrollToBooking(serviceTitle: string) {
  const el = document.getElementById("reservation");
  if (!el) return;

  const input = document.querySelector<HTMLInputElement>('input[name="service"]');
  if (input) input.value = serviceTitle;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ServicesCarousel() {
  return (
    // ✅ scroll-mt = évite que le menu "coupe" le titre au scroll
    <section id="prestations" className="lux-section mt-16 scroll-mt-24 md:scroll-mt-28">
      <div className="lux-container">
        {/* Head — cohérent avec Bio */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="md:pl-8">
            <div className="flex items-center gap-3">
              <span className="lux-badge">Prestations</span>
              <span className="h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-60" />
            </div>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-black">
              Des formules claires, un rendu <span className="accent">premium</span>.
            </h2>

            <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed max-w-xl">
              Pour toute réservation, un acompte de 50% est requis. Abidjan : tarifs ci-dessous.
              Hors Abidjan : tarifs ajustés + logement à la charge de la cliente.
            </p>
          </div>

          {/* ✅ Conseil (boucle + uniquement visible) */}
          <div className="md:pl-8">
            <motion.div
              className="relative max-w-md rounded-2xl overflow-hidden soft-shadow ring-1 ring-black/5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.65, once: false }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* ✅ Fond rose plein (comme IntroGallery) */}
              <div className="absolute inset-0 bg-[hsl(var(--rose-header))]" />

              {/* ✅ Shine premium */}
              <motion.div
                className="absolute -inset-[45%] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 32%, rgba(255,255,255,0.70) 50%, transparent 68%)",
                  filter: "blur(10px)",
                }}
                initial={{ x: "-120%", opacity: 0 }}
                whileInView={{ x: ["-120%", "120%"], opacity: [0, 1, 0] }}
                viewport={{ amount: 0.65, once: false }}
                transition={{
                  duration: 4.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />

              {/* ✅ Float (plus visible) */}
              <motion.div
                className="relative px-6 py-5"
                initial={{ y: 0 }}
                whileInView={{ y: [0, -5, 0] }}
                viewport={{ amount: 0.65, once: false }}
                transition={{
                  duration: 2.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                <div className="text-[11px] tracking-[0.22em] uppercase text-black/45">
                  Conseil
                </div>

                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  Choisis une prestation, puis clique sur <b>Réserver</b> pour pré-remplir le formulaire.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Carousel */}
        <motion.div className="mt-12 overflow-x-auto no-scrollbar" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="flex gap-5 md:gap-6 pb-3"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
          >
            {services.map((s) => (
              <article
                key={s.id}
                // ✅ tailles responsive (mobile moins énorme)
                className="shrink-0 w-[88vw] sm:w-[520px] md:w-[640px] bg-[hsl(var(--rose-header))] soft-shadow overflow-hidden"
              >
                {/* Image (grande) */}
                <div className="relative aspect-[3/2]">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />

                  {/* adoucir les bords */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10
                    bg-[radial-gradient(closest-side,transparent_68%,rgba(0,0,0,0.10)_100%)]"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none z-10
                    bg-gradient-to-t from-black/10 via-transparent to-transparent"
                  />

                  {/* Tag catégorie */}
                  {s.tag && (
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium
                        bg-white/80 backdrop-blur-md shadow-sm ring-1 ring-black/10 text-black/75"
                      >
                        <span className="h-2 w-2 rounded-full bg-[hsl(var(--rose-accent))]" />
                        {s.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div className="service-meta">
                  {/* ✅ layout responsive: sur mobile on empile, sur desktop on aligne */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-black leading-snug">
                        {s.title}
                      </h3>

                      {/* ✅ description stable (pas de “case énorme”) */}
                      <p
                        className="mt-2 text-sm md:text-base text-black/65 leading-relaxed"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {s.description}
                      </p>
                    </div>

                    {/* Prix stylé (pill) */}
                    <div className="shrink-0 text-right">
                      <div className="inline-flex flex-col items-end rounded-2xl bg-white/70 ring-1 ring-black/10 px-4 py-3">
                        <span className="mt-1 text-base md:text-lg font-semibold text-black/80">
                          {s.priceLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-5 flex justify-end">
                    <button className="lux-btn" onClick={() => scrollToBooking(s.title)}>
                      Réserver
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
