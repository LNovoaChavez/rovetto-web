
"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { barrios } from "@/utils/barrios";
import BarrioCard from "./BarrioCard";
import BarrioGallery from "./BarrioGallery";

export default function Territorio() {
  const [selectedBarrio, setSelectedBarrio] = useState<
    (typeof barrios)[number] | null
  >(null);

  return (
    <>
      <section
        id="territorio"
        className="scroll-mt-28 bg-gray-50"
      >
        {/* Encabezado azul */}
        <div className="relative overflow-hidden bg-[#074173] px-4 py-20 md:px-8 md:py-28">
          {/* Detalles decorativos */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-35px border-white/5" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5" />

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full border border-[#FFD05A]/50 bg-[#FFD05A]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD05A]">
              Comunidad y participación
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Trabajo en territorio
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#FFD05A]" />

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              Recorremos los barrios de Córdoba, compartiendo actividades,
              encuentros y momentos junto a los vecinos de nuestra ciudad.
            </p>
          </div>
        </div>

        {/* Barrios */}
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#074173]/10">
                <MapPin size={22} className="text-[#074173]" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Nuestros recorridos
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Conocé las actividades realizadas en cada barrio.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {barrios.map((barrio) => (
              <BarrioCard
                key={barrio.id}
                barrio={barrio}
                onClick={() => setSelectedBarrio(barrio)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <BarrioGallery
        barrio={selectedBarrio}
        onClose={() => setSelectedBarrio(null)}
      />
    </>
  );
}
