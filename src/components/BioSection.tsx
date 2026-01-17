import Image from "next/image";

export default function BioSection() {
  return (
    <section
      id="apropos"
      className="mt-24 md:mt-28 bg-[hsl(var(--rose-header))] py-16 md:py-20"
    >
      <div className="lux-container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* TEXT */}
          <div className="md:pl-8">
            {/* “À propos” tout en haut */}
            <div className="flex items-center gap-3">
              <span className="lux-badge">À propos</span>
              <span className="h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-60" />
            </div>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-black">
              Une artiste au service de ton{" "}
              <span className="accent">éclat</span>.
            </h2>

            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/70 max-w-xl">
              Je suis <strong>✨ Audrey Koffi ✨</strong>, maquilleuse professionnelle basée à Abidjan, spécialisée dans le maquillage événementiel et artistique.
            </p>

            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/70 max-w-xl">
              Chaque visage raconte une histoire. Mon rôle est de la révéler avec subtilité, maîtrise et raffinement.
            </p>

            <p className="mt-6 text-sm md:text-base leading-relaxed text-black/70 max-w-xl">
              À travers <strong>Beauty by Langora</strong>, je propose bien plus qu'un maquillage : <strong>une expérience beauté haut de gamme</strong>, personnalisée, confidentielle et soignée dans les moindres détails.
            </p>

            {/* TAGS (plus visibles) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Mariage", "Anniversaire", "Émission", "Shooting", "Glow Naturel", "Clips vidéos"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full px-4 py-2 text-xs md:text-sm font-medium
                             bg-white/70 ring-1 ring-black/10 shadow-sm text-black/75"
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[hsl(var(--rose-accent))]" />
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a className="lux-btn" href="#reservation">
                Demander un devis
              </a>
            </div>
          </div>

          {/* PHOTO avec gradient ton-sur-ton */}
            <div className="md:pl-8">
                {/* "cadre" coloré visible autour */}
                <div className="bg-[hsl(var(--rose-header))] p-6 md:p-8">
                    {/* boîte photo plus petite */}
                    <div className="relative mx-auto w-[86%] md:w-[78%] aspect-[9/14] overflow-hidden ring-1 ring-black/10 soft-shadow">
                        <Image
                            src="/images/intro/boss.jpg"
                            alt="La make-up artiste"
                            fill
                            className="object-cover bio-kenburns"
                        />

                        {/* VIGNETTE INTERNE : couleur sur les bords, centre intact */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                            background:
                                "radial-gradient(closest-side, rgba(0,0,0,0) 62%, hsl(var(--rose-header) / 0.22) 100%)",
                            }}
                        />

                        {/* Optionnel : léger voile bas pour l’ancrage (très subtil) */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[hsl(var(--rose-header))/0.10] via-transparent to-transparent" />
                        </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
