"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/about/jessi-1.jpg",
    alt: "Jessica Rovetto",
  },
  {
    src: "/images/about/jessi-2.jpg",
    alt: "Jessica Rovetto",
  },
  {
    src: "/images/about/jessi-3.jpg",
    alt: "Jessica Rovetto",
  },
  {
    src: "/images/about/jessi-4.jpg",
    alt: "Jessica Rovetto",
  },
];

const timelineItems = [
  {
    title: "Formación",
    description: "Formación académica y profesional.",
  },
  {
    title: "Primeros pasos",
    description: "Sus primeros pasos en el ámbito público.",
  },
  {
    title: "Trabajo comunitario",
    description: "Experiencias y trabajo junto a la comunidad.",
  },
  {
    title: "Trabajo legislativo",
    description: "Su recorrido y experiencia en el ámbito legislativo.",
  },
  {
    title: "Hoy",
    description: "Su compromiso actual con los cordobeses.",
  },
];

export default function AboutMe() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => {
    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  // ================= AUTOPLAY =================
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImage((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="quien-soy"
      className="scroll-mt-32 bg-white px-6 py-20 md:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#074173]">
            Quién soy
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Conocé a Jessica
          </h2>
        </div>

        {/* Imagen + información */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          {/* ================= CARRUSEL ================= */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-sm">
              {images.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Botón anterior */}
              <button
                type="button"
                onClick={previousImage}
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#074173] shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-white"
              >
                <ChevronLeft size={21} />
              </button>

              {/* Botón siguiente */}
              <button
                type="button"
                onClick={nextImage}
                aria-label="Imagen siguiente"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#074173] shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-white"
              >
                <ChevronRight size={21} />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-sm">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Ver imagen ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "w-7 bg-[#FFD05A]"
                        : "w-2.5 bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= TEXTO ================= */}
          <div>
            <p className="text-base leading-8 text-gray-600 md:text-lg">
              Soy Jessica Rovetto y trabajo para representar las necesidades
              de los vecinos de Córdoba. Creo en una política cercana, donde
              escuchar, recorrer los barrios y estar presente sean parte
              fundamental del trabajo.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
              Desde mi lugar, busco impulsar iniciativas que generen
              soluciones concretas y acompañen a quienes todos los días hacen
              crecer nuestra ciudad.
            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-[#FFD05A]" />
          </div>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="mt-20 md:mt-24">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#074173]">
            Mi recorrido
          </p>

          <div className="mt-12 w-full">
            {/* ================= DESKTOP / TABLET ================= */}
            <div className="relative mx-auto hidden w-full max-w-5xl justify-between md:flex">
              {/* Línea horizontal */}
              <div className="absolute left-0 right-0 top-[5.5rem] h-[2px] bg-gray-200" />

              {timelineItems.map((item) => (
                <div
                  key={item.title}
                  className="relative z-10 flex w-1/5 flex-col items-center px-2 text-center"
                >
                  {/* Título */}
                  <div className="flex min-h-16 items-end justify-center">
                    <span className="text-sm font-semibold text-gray-800 md:text-base">
                      {item.title}
                    </span>
                  </div>

                  {/* Punto */}
                  <div className="my-6 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#074173] shadow-md ring-4 ring-[#FFD05A]/30">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Descripción */}
                  <span className="max-w-[150px] text-xs leading-5 text-gray-500 md:text-sm">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>

            {/* ================= MOBILE ================= */}
            <div className="relative mx-auto flex max-w-md flex-col md:hidden">
              {/* Línea vertical */}
              <div className="absolute bottom-0 left-[10px] top-0 w-[2px] bg-gray-200" />

              {timelineItems.map((item, index) => (
                <div
                  key={item.title}
                  className="relative z-10 flex gap-6 pb-10 last:pb-0"
                >
                  {/* Punto */}
                  <div className="relative z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#074173] shadow-md ring-4 ring-[#FFD05A]/30">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 text-left">
                    <h3 className="text-base font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}