
"use client";

import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import type { Barrio } from "@/utils/barrios";

type BarrioGalleryProps = {
  barrio: Barrio | null;
  onClose: () => void;
};

export default function BarrioGallery({
  barrio,
  onClose,
}: BarrioGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!barrio) return;

    setCurrentImage(0);
  }, [barrio]);

  useEffect(() => {
    if (!barrio) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") {
        setCurrentImage((current) =>
          (current + 1) % barrio.imagenes.length
        );
      }

      if (event.key === "ArrowLeft") {
        setCurrentImage((current) =>
          (current - 1 + barrio.imagenes.length) %
          barrio.imagenes.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [barrio, onClose]);

  if (!barrio) return null;

  const previousImage = () => {
    setCurrentImage((current) =>
      (current - 1 + barrio.imagenes.length) %
      barrio.imagenes.length
    );
  };

  const nextImage = () => {
    setCurrentImage((current) =>
      (current + 1) % barrio.imagenes.length
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${barrio.nombre}`}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-[#074173]" />
            <h2 className="text-lg font-bold text-[#074173]">
              {barrio.nombre}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar galería"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Imagen principal */}
        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-gray-950 p-3">
          <img
            src={barrio.imagenes[currentImage]}
            alt={`Actividad en ${barrio.nombre}, fotografía ${currentImage + 1}`}
            className="max-h-[58vh] max-w-full rounded-lg object-contain"
          />

          {barrio.imagenes.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Fotografía anterior"
                className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#074173] shadow-lg transition hover:scale-105 hover:bg-white"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Fotografía siguiente"
                className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#074173] shadow-lg transition hover:scale-105 hover:bg-white"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Miniaturas e indicador */}
        <div className="flex flex-col gap-3 bg-white px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              Fotografías del barrio
            </span>

            <span className="text-sm font-semibold text-[#074173]">
              {currentImage + 1} / {barrio.imagenes.length}
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1">
            {barrio.imagenes.map((image, index) => (
              <button
                key={`${barrio.id}-${index}`}
                type="button"
                onClick={() => setCurrentImage(index)}
                aria-label={`Ver fotografía ${index + 1}`}
                aria-current={currentImage === index}
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  currentImage === index
                    ? "border-[#074173] opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
