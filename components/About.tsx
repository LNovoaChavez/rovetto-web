
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1788999002/IMG_0429_Original.jpg",
    alt: "Jessica Rovetto",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1788999000/CD-42_Original.jpg",
    alt: "Jessica Rovetto",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1788999000/2fd21761-010b-4fc8-818d-26e90c899631_Original.jpg",
    alt: "Jessica Rovetto",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1788999001/Copia_de_IMG_5895_Original.jpg",
    alt: "Jessica Rovetto",
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
              Soy cordobesa, mamá de dos niños y defensora de la libertad de cada vecino de nuestra ciudad. Comprometida de corazón con el futuro de nuestras familias, creo firmemente que una Córdoba liberal es posible.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
              h
            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-[#FFD05A]" />
          </div>

        </div>
      </div>
    </section>
  );
}
