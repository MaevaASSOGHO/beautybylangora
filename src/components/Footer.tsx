export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--rose-header))]">
      {/* ligne dorée (comme header) */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-70" />

      <div className="lux-container py-14">
        {/* Top row: Brand + Nav + CTA */}
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Brand */}
          <div className="md:col-span-5 ml-4">
            {/* ✅ même écriture que ton header : brand-font si tu l’utilises */}
            <div className="brand-font text-2xl md:text-3xl leading-none tracking-tight text-black">
              Beauty <span className="brand-font text-xl md:text-2xl leading-none accent">by Langora</span>
            </div>

            <p className="mt-3 text-sm text-black/65 max-w-md leading-relaxed">
              Makeup Artist • Maquillage • Shooting • Glow naturel.
            </p>

            {/* mini info / acompte */}
            <p className="mt-2 text-xs text-black/50">
              Mise en beauté élégante, lumineuse et sur-mesure.
            </p>
          </div>

          {/* Nav */}
          <nav className="md:col-span-5">
            <div className="text-[11px] tracking-[0.22em] uppercase text-black/45">
              Navigation
            </div>

            <div className="mt-4 grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
              <a className="text-black/70 hover:text-black transition" href="#home">
                Accueil
              </a>
              <a className="text-black/70 hover:text-black transition" href="#apropos">
                À propos
              </a>
              <a className="text-black/70 hover:text-black transition" href="#prestations">
                Prestations
              </a>
              <a className="text-black/70 hover:text-black transition" href="#portfolio">
                Portfolio
              </a>
              <a className="text-black/70 hover:text-black transition" href="#reservation">
                Réservations
              </a>
              <a className="text-black/70 hover:text-black transition" href="#contact">
                Contact
              </a>
            </div>
          </nav>

          {/* CTA */}
          <div className="md:col-span-2 md:justify-self-end">


            {/* petite ligne dorée décorative */}
            <div className="mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-60 md:ml-auto" />
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-8 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ml-4">
          <p className="text-sm text-black/55">
            © MEEZUS {year} — Tous droits réservés
          </p>

          {/* micro liens (optionnels, cohérents) */}
          <div className="text-sm text-black/55 flex items-center gap-5 mr-4">
            <a href="https://www.instagram.com/beautybylangora_?igsh=MTdpc2FjYm02MGEwZQ==" className="hover:text-black transition">
              Instagram
            </a>
            <a href="https://wa.me/2250749637267" className="hover:text-black transition">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
