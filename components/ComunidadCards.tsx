
"use client";

import { useState } from "react";
import Link from "next/link";
import CpllGallery from "./CpllGallery";

export default function ComunidadCards() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section
      className="py-16 px-4 max-w-6xl mx-auto w-full"
      id="comunidad"
    >
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Comunidad y Participación
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Trabajamos todos los días para construir una Córdoba más inclusiva,
          escuchando a los vecinos y apostando por el futuro.
        </p>
      </div>

      {/* Contenedor de las Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">

        {/* Card 1: Territorio */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-md flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="h-56 bg-gray-200 relative">
            <img
              src="https://res.cloudinary.com/g6rgllhp/image/upload/v1788881982/WhatsApp_Image_2026-08-31_at_09.10.34.jpg"
              alt="Trabajo en Territorio en Córdoba"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 flex flex-col flex-grow items-center text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Territorio
            </h3>

            <p className="text-gray-600 mb-8 flex-grow">
              Recorremos cada barrio de nuestra ciudad para escuchar de primera mano
              a los vecinos, entender sus realidades y transformar esas necesidades en proyectos concretos.
            </p>

            <Link
              href="/comunidad#territorio"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 w-auto"
            >
              Saber más
            </Link>
          </div>
        </div>

        {/* Card 2: Cordobeses por la libertad */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-md flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="h-56 bg-gray-200 relative">
            <img
              src="/images/cpll.jpeg"
              alt="Cordobeses por la libertad"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 flex flex-col flex-grow items-center text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Cordobeses por la libertad
            </h3>

            <p className="text-gray-600 mb-8 flex-grow">
              Somos un grupo de cordobeses comprometidos con el cambio y la defensa de las ideas de la libertad en Córdoba. Creemos en una sociedad más libre y con más oportunidades. Únete a nuestra comunidad y logremos una Córdoba Liberal.
            </p>

            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="bg-secondary hover:bg-yellow-500 text-primary-dark font-bold py-3 px-8 rounded-full transition-colors duration-300 w-auto"
            >
              Ver más
            </button>
          </div>
        </div>

      </div>

      {/* Galería modal */}
      <CpllGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
}
