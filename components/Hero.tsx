export default function Hero() {
  return (
    <section className="relative min-h-[650px] w-full overflow-hidden md:min-h-[720px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="https://res.cloudinary.com/g6rgllhp/video/upload/v1789087229/copy_0D314FF2-29EF-47CC-A487-4C82BFE7BB05.mov" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute inset-0 bg-[#074173]/65" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24 md:min-h-[720px] lg:px-10">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD05A] md:text-base">
            Concejal de Córdoba
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Hola, soy Jessica.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 md:text-lg md:leading-8">
            Un espacio para conocer mi historia, mi trabajo legislativo y
            las iniciativas que impulsamos para construir una Córdoba mejor.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#quien-soy"
              className="rounded-full bg-[#FFD05A] px-7 py-3.5 text-sm font-semibold text-[#074173] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
            >
              Conoceme
            </a>

            <a
              href="#trabajo-legislativo"
              className="rounded-full border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-[#074173]"
            >
              Mi trabajo legislativo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}