
"use client";

import { MapPin, Images } from "lucide-react";
import type { Barrio } from "@/utils/barrios";

type BarrioCardProps = {
  barrio: Barrio;
  onClick: () => void;
};

export default function BarrioCard({
  barrio,
  onClick,
}: BarrioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={barrio.imagenes[0]}
          alt={`Actividades en ${barrio.nombre}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          <Images size={14} />
          {barrio.imagenes.length} fotos
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 p-5">
        <div className="flex items-center gap-2">
          <MapPin size={19} className="shrink-0 text-[#074173]" />
          <h3 className="font-semibold text-gray-800">
            {barrio.nombre}
          </h3>
        </div>

        <span className="shrink-0 text-sm font-semibold text-[#074173] transition-transform group-hover:translate-x-1">
          Ver fotos →
        </span>
      </div>
    </button>
  );
}
