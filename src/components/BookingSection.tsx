"use client";

import Image from "next/image";
import { useState } from "react";

export default function BookingSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section
      id="reservation"
      className="mt-20 md:mt-28 bg-[hsl(var(--rose-header))] py-16 md:py-24"
    >
      <div className="lux-container">
        {/* Titre / badge */}
        <div className="max-w-2xl md:pl-8">
          <div className="flex items-center gap-3">
            <span className="lux-badge">Réservations</span>
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-60" />
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-black">
            Dis-moi ce que tu veux, je te réponds <span className="accent">rapidement</span>.
          </h2>
        </div>

        {/* CONTENU — image + formulaire côte à côte */}
        <div className="mt-12 grid md:grid-cols-2 gap-0 bg-[hsl(var(--rose-header))]">
          {/* IMAGE */}
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <Image
              src="/images/bio3.jpg"
              alt="Réservation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* FORMULAIRE */}
          <div className="bg-white px-6 py-10 md:px-12 md:py-12">
            {sent ? (
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Message envoyé ✨
                </h3>
                <p className="mt-2 text-sm text-black/70">
                  Merci ! Tu recevras une réponse dès que possible.
                </p>
                <button
                  className="lux-btn mt-6"
                  onClick={() => setSent(false)}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-black/70">
                      Prénom
                    </label>
                    <input
                      required
                      name="firstname"
                      placeholder="Ex: Aïcha"
                      className="mt-1 w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none focus:ring-black/30"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-black/70">
                      Nom
                    </label>
                    <input
                      required
                      name="lastname"
                      placeholder="Ex: Koné"
                      className="mt-1 w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none focus:ring-black/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-black/70">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="ex: nom@email.com"
                    className="mt-1 w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none focus:ring-black/30"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-black/70">Date</label>
                    <input
                      required
                      type="date"
                      name="date"
                      className="mt-1 w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none focus:ring-black/30"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-black/70">
                      Heure souhaitée
                    </label>
                    <input
                      type="time"
                      name="time"
                      className="mt-1 w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none focus:ring-black/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-black/70">
                    Prestation
                  </label>
                  <input
                    name="service"
                    placeholder="Ex: Maquillage Soirée"
                    className="mt-1 w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none focus:ring-black/30"
                  />
                </div>

                <div>
                  <label className="text-xs text-black/70">
                    Détails / Adresse / Références
                  </label>
                  <textarea
                    required
                    name="details"
                    placeholder="Lieu, type d’événement, nombre de personnes…"
                    className="mt-1 w-full min-h-[120px] rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none focus:ring-black/30"
                  />
                </div>

                <div>
                  <label className="text-xs text-black/70">
                    Photo d’inspiration (optionnel)
                  </label>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    name="file"
                    className="mt-1 w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none focus:ring-black/30"
                  />
                </div>

                <button
                  type="submit"
                  className="lux-btn w-full"
                >
                  Envoyer la demande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
