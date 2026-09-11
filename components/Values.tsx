export default function Values() {
  const values = [
    {
      title: "Libertad",
      description:
        "Defiendo la libertad de cada cordobés como motor del progreso. Lucho contra las regulaciones absurdas y la burocracia que frenan a quienes emprenden, trabajan y sacan adelante a sus familias.",
    },
    {
      title: "Orden y Seguridad",
      description:
        "Sin orden no hay libertad posible. Defiendo el derecho de las familias cordobesas a vivir, circular y trabajar en paz, sin miedo.",
    },
    {
      title: "Austeridad",
      description:
        "Defiendo una administración municipal responsable, austera y transparente, que termine con el despilfarro y utilice los recursos para resolver los problemas de los cordobeses.",
    },
  ];

  return (
    <section
      id="valores"
      className="bg-white px-6 pt-16 pb-28 md:pt-20 md:pb-32 lg:px-10 lg:pb-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#074173]">
            Valores
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Mis valores
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD05A] hover:shadow-md lg:min-h-[340px] lg:p-9"
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFD05A] text-sm font-semibold text-[#074173]">
                  0{index + 1}
                </span>

                <div className="h-px flex-1 bg-gray-200 transition-colors duration-300 group-hover:bg-[#FFD05A]" />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-[#074173] lg:text-3xl">
                {value.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}