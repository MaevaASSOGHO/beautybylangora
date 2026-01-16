import Image from "next/image";

const imgs = [
  "/images/intro/1.jpg",
  "/images/intro/3.jpg",
  "/images/intro/2.jpg",
  "/images/intro/4.jpg",
  "/images/intro/5.jpg",
  "/images/intro/6.jpg",
];

export default function IntroGallery() {
  return (
    <section className="lux-section pt-24 md:pt-28">
      <div className="lux-container">
        {/* Head (centered) */}
        <div className="text-center flex flex-col items-center gap-5">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            La beauté, version <span className="accent">haute précision</span>.
          </h2>

          {/* paragraph with colored background */}
          <div className="max-w-2xl">
            <div>
              <div className="px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-[hsl(var(--rose-header))] ring-1 ring-black/5 soft-shadow">
                <p className="text-sm md:text-base text-black/75 leading-relaxed text-center">
                    Des looks modernes et luxueux, où chaque détail sublime ton éclat.
                </p>
                </div>
            </div>
          </div>

        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {imgs.map((src, i) => (
            <div key={src} className="group relative overflow-hidden bg-white ring-1 ring-black/5 soft-shadow">
              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={`Mise en beauté ${i + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                {/* overlay ultra subtil pour “polish” (pas floutant) */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* <p className="mt-7 text-center text-xs text-black/50 max-w-2xl mx-auto">
          Chaque mise en beauté est personnalisée selon ton visage, ton teint et l’occasion.
        </p> */}
      </div>
    </section>
  );
}
