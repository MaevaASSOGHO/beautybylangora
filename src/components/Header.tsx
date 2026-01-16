"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#prestations", label: "Prestations" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#reservation", label: "Réservation" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
        className={[
            "sticky top-0 z-50 transition mb-6",
            scrolled
            ? "bg-[hsl(var(--rose-header))] shadow-sm"
            : "bg-[hsl(var(--rose-header))]"
        ].join(" ")}
    >
      <div className="lux-container h-16 flex items-center justify-between">
        <a href="#accueil" className="flex items-baseline gap-2 ml-4">
            <span className="brand-font text-xl md:text-2xl leading-none">
                Beauty
            </span>
            <span className="brand-font text-xl md:text-2xl leading-none accent">
                by Langora
            </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-black/70 hover:text-black transition">
              {l.label}
            </a>
          ))}
          <a href="#reservation" className="lux-btn-outline">
            Réserver
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/15 hover:ring-white/30 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/85 backdrop-blur">
          <div className="lux-container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-white/80 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a href="#reservation" onClick={() => setOpen(false)} className="lux-btn mt-2">
              Réserver
            </a>
          </div>
        </div>
      )}
        <div className="h-px w-full bg-white from-transparent via-[hsl(var(--white))] to-transparent opacity-40" />
    </header>
  );
}
