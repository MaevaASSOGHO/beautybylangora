"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const all = [
  "/images/intro/1.jpg",
  "/images/intro/2.jpg",
  "/images/intro/3.jpg",
  "/images/intro/4.jpg",
  "/images/intro/5.jpg",
  "/images/intro/6.jpg",
  "/images/intro/7.jpg",
  "/images/intro/8.jpg",
  "/images/intro/9.jpg",
];

export default function Portfolio() {
  const [count, setCount] = useState(6);
  const visible = useMemo(() => all.slice(0, count), [count]);

  return (
    <section
      id="portfolio"
      className="lux-section mt-20 md:mt-28"
    >
      <div className="lux-container">
        {/* Head cohérent */}
        <div className="max-w-2xl md:pl-8">
          <div className="flex items-center gap-3">
            <span className="lux-badge">Portfolio</span>
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-60" />
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-black">
            Looks récents, détails <span className="accent">impeccables</span>.
          </h2>
        </div>

        {/* Grille avec marges haut / bas */}
        <div className="mt-14 mb-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {visible.map((src) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden soft-shadow bg-white"
            >
              <Image
                src={src}
                alt="Photo portfolio"
                fill
                className="object-cover transition duration-500 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition" />
            </div>
          ))}
        </div>

        {/* Bouton */}
        <div className="flex justify-center">
          {count < all.length ? (
            <button
              className="lux-btn"
              onClick={() => setCount((c) => Math.min(c + 3, all.length))}
            >
              Voir plus
            </button>
          ) : (
            <button className="lux-btn" onClick={() => setCount(6)}>
              Réduire
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
