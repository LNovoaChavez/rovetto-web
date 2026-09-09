import Link from "next/link";

export default function ClaimCTA() {
  return (
    <section
      id="haz-tu-reclamo"
      className="px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#074173] px-8 py-16 md:px-12 lg:px-16">
          
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FFD05A]/20" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#004173]/50" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#FFD05A]">
                Tu voz importa
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                ¿Tenés algún reclamo o queja que quieras consultar?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/75 md:text-lg">
                Podés contarnos tu situación y hacer llegar tu reclamo de
                manera directa.
              </p>
            </div>

            <Link
              href="/reclamos"
              className="shrink-0 rounded-full bg-[#FFD05A] px-7 py-4 text-sm font-semibold text-[#074173] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
            >
              Hacé tu reclamo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}