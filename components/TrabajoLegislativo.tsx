import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LegislativeWork() {
  return (
    <section
      id="trabajo-legislativo"
      className="w-full scroll-mt-28 bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#074173]">
              Trabajo legislativo
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#074173] md:text-5xl lg:text-6xl">
              Trabajar por una Córdoba mejor.
            </h2>
          </div>

          {/* Contenido */}
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[#074173]/80 md:text-lg">
              Desde el Concejo Deliberante, acompaño y desarrollo iniciativas
              que buscan dar respuesta a las necesidades de los vecinos de
              Córdoba. El trabajo legislativo es una herramienta para
              transformar las ideas en propuestas y generar soluciones
              concretas para nuestra ciudad.
            </p>

            <p className="mt-5 text-base leading-8 text-[#074173]/80 md:text-lg">
              En esta sección podés conocer algunas de las iniciativas que
              forman parte de mi trabajo y los proyectos que considero
              importantes para seguir construyendo una ciudad con más
              oportunidades.
            </p>

            {/* Link principal */}
            <Link
              href="/proyectos"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#074173] px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004173] hover:shadow-lg"
            >
              Ver proyectos

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFD05A] text-[#074173] transition-transform duration-200 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        {/* Línea inferior decorativa */}
        <div className="mt-16 h-px w-full bg-[#074173]/20 md:mt-20" />
      </div>
    </section>
  );
}