import Link from "next/link";

export default function ComunidadCards() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto w-full" id="comunidad">
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

      {/* Contenedor de las Cards (Flexbox para responsividad) */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        
        {/* Card 1: Territorio */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-md flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          {/* Contenedor de Imagen */}
          <div className="h-56 bg-gray-200 relative">
            <img 
              src="https://res.cloudinary.com/g6rgllhp/image/upload/v1788881982/WhatsApp_Image_2026-08-31_at_09.10.34.jpg" 
              alt="Trabajo en Territorio en Córdoba" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Contenido de la Card */}
          <div className="p-8 flex flex-col flex-grow items-center text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Territorio</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              Recorremos cada barrio de nuestra ciudad para escuchar de primera mano 
              a los vecinos, entender sus realidades y transformar esas necesidades en proyectos concretos.
            </p>
            
            {/* Botón centrado */}
            <Link 
              href="/comunidad#territorio"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 w-auto"
            >
              Saber más
            </Link>
          </div>
        </div>

        {/* Card 2: Juventud */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-md flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="h-56 bg-gray-200 relative">
            <img 
              src="https://res.cloudinary.com/g6rgllhp/image/upload/v1788881982/WhatsApp_Image_2026-08-31_at_09.10.34.jpg" 
              alt="Iniciativas para la Juventud" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Contenido de la Card */}
          <div className="p-8 flex flex-col flex-grow items-center text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Juventud</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              Impulsamos espacios de diálogo, educación y oportunidades de desarrollo. 
              Creemos en los jóvenes como el verdadero motor de cambio para nuestra provincia.
            </p>
            
            {/* Botón centrado */}
            <Link 
              href="/comunidad#juventud"
              className="bg-secondary hover:bg-yellow-500 text-primary-dark font-bold py-3 px-8 rounded-full transition-colors duration-300 w-auto"
            >
              Más información
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}