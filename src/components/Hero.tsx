import Image from "next/image";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[78vh] flex items-end">
      <Image
        src="/images/bio4.jpg"
        alt="Beauty by Langora"
        fill
        priority
        className="object-cover hero-zoom-loop"
      />
    <div className="lux-container relative pb-14 md:pb-20 ml-4 md:ml-8">
        <div className="max-w-2xl">
          <p className="lux-badge gold-ring">
            Prestations maquillage • Abidjan
          </p>
          <h1 className="mt-4 brand-font text-4xl md:text-6xl leading-[1.02]">
            Beauty <span className="accent">by Langora</span>
          </h1>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          <p className="mt-4 text-sm md:text-base text-black/60 leading-relaxed">
            Une vision du maquillage où l’élégance rencontre l’excellence.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#reservation" className="lux-btn">Réserver</a>
            <a href="#prestations" className="lux-btn-outline">Voir les prestations</a>
          </div>
          {/* <p className="mt-4 text-xs text-black/50">
            * Pour toute réservation, un acompte de <span className="gold font-medium">50%</span> est requis.
          </p> */}
        </div>
      </div>
    </section>
  );
}
