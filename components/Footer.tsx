import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/jessirovetto/",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    href: "#",
    icon: FaTiktok,
  },
  {
    name: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
];

const pageLinks = [
  { name: "Inicio", href: "/" },
  { name: "Quién soy", href: "/#quien-soy" },
  { name: "Trabajo legislativo", href: "/#trabajo-legislativo" },
  { name: "Comunidad", href: "/#comunidad" },
  { name: "Valores", href: "/#valores" },
  { name: "Haz tu reclamo", href: "/#haz-tu-reclamo" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#074173] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Izquierda */}
          <div className="flex flex-col justify-between">
            <div>
              <a
                href="/"
                className="inline-block text-2xl font-semibold tracking-tight text-white"
              >
                Jessica Rovetto
              </a>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                Una ciudad que avanza se construye con participación,
                compromiso y trabajo conjunto.
              </p>
            </div>

            {/* Contacto */}
            <div className="mt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#FFD05A]">
                Contacto
              </p>

              <div className="flex flex-col gap-1.5 text-sm text-white/80">
                <a
                  href="tel:+543510000000"
                  className="w-fit transition-colors hover:text-[#FFD05A]"
                >
                  +54 351 000 0000
                </a>

                <a
                  href="mailto:contacto@jessicarovetto.com"
                  className="w-fit transition-colors hover:text-[#FFD05A]"
                >
                  contacto@jessicarovetto.com
                </a>
              </div>
            </div>

            {/* Redes */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#FFD05A] hover:text-[#074173]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Derecha */}
          <div className="lg:pl-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#FFD05A]">
              Navegación
            </p>

            <nav className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {pageLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-[#FFD05A]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/15 pt-5">
          <div className="flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Jessica Rovetto. Todos los derechos
              reservados.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Términos
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}