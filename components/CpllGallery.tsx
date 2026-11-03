
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CpllGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const images = [
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668865/IMG_20241207_103705171_AE.jpg",
    alt: "Cordobeses por la libertad - Imagen 1",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668867/IMG_8695.jpg",
    alt: "Cordobeses por la libertad - Imagen 2",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668866/IMG_8649.jpg",
    alt: "Cordobeses por la libertad - Imagen 3",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668867/Untitled_design.png",
    alt: "Cordobeses por la libertad - Imagen 4",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668867/IMG_8718.jpg",
    alt: "Cordobeses por la libertad - Imagen 5",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668865/Copia_de_IMG_7424.jpg",
    alt: "Cordobeses por la libertad - Imagen 6",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668865/IMG-20241213-WA0213.jpg",
    alt: "Cordobeses por la libertad - Imagen 7",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668866/IMG_8662.jpg",
    alt: "Cordobeses por la libertad - Imagen 8",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668866/IMG_8675.jpg",
    alt: "Cordobeses por la libertad - Imagen 9",
  },
  {
    src: "https://res.cloudinary.com/g6rgllhp/image/upload/v1793668865/IMG_20241207_124031419_HDR_AE.jpg",
    alt: "Cordobeses por la libertad - Imagen 10",
  }
];

export default function CpllGallery({
  isOpen,
  onClose,
}: CpllGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

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

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentImage(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galería de Cordobeses por la libertad"
    >
      {/* Botón cerrar */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar galería"
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X size={24} />
      </button>

      <div
        className="relative flex w-full max-w-6xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Imagen principal */}
        <div className="relative flex h-[65vh] w-full items-center justify-center md:h-[72vh]">
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="max-h-full max-w-full rounded-lg object-contain"
          />

          {/* Anterior */}
          <button
            type="button"
            onClick={previousImage}
            aria-label="Imagen anterior"
            className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition hover:scale-105 hover:bg-white md:left-3"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Siguiente */}
          <button
            type="button"
            onClick={nextImage}
            aria-label="Imagen siguiente"
            className="absolute right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition hover:scale-105 hover:bg-white md:right-3"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Contador */}
        <p className="mt-4 text-sm font-medium text-white/80">
          {currentImage + 1} / {images.length}
        </p>

        {/* Miniaturas */}
        <div className="mt-5 flex max-w-full gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`Ver imagen ${index + 1}`}
              aria-current={index === currentImage}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition md:h-16 md:w-24 ${
                index === currentImage
                  ? "border-[#FFD05A] opacity-100"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
