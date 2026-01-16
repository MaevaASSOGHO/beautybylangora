import Image from "next/image";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[78vh] flex items-end overflow-hidden">
      <Image
        src="/images/bio4.jpg"
        alt="Beauty by Langora"
        fill
        priority
        className="object-cover hero-zoom-loop object-[60%_30%] md:object-left"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />

      <div className="lux-container relative pb-14 md:pb-20 ml-4 md:ml-8">
        <div className="max-w-2xl">
          <p className="lux-badge gold-ring bg-white/80 text-black/70">
            Prestations maquillage • Abidjan
          </p>

          <h1 className="mt-4 brand-font text-4xl md:text-6xl leading-[1.02] text-white">
            Beauty <span className="accent">by Langora</span>
          </h1>

          <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">
            Une vision du maquillage où l’élégance rencontre l’excellence.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#reservation" className="lux-btn">Réserver</a>
            <a href="#prestations" className="lux-btn-outline">Voir les prestations</a>
          </div>
        </div>
      </div>
    </section>
  );
}
