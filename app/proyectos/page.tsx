import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/proyectos";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/projects/projects-hero.jpg"
          alt="Proyectos destacados"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay verdoso */}
        <div className="absolute inset-0 bg-[#074173]/70" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-secondary">
              Trabajo legislativo
            </p>

            <h1 className="font-sans text-5xl font-semibold tracking-tight md:text-6xl">
              Proyectos destacados
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              Conocé algunas de las iniciativas y proyectos que forman parte
              del trabajo legislativo de Jessi.
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Iniciativas
          </p>

          <h2 className="mt-3 font-sans text-3xl font-semibold text-gray-900 md:text-4xl">
            Conocé nuestros proyectos
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}