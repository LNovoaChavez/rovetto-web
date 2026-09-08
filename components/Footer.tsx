import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    href: "#",
    icon: FaTiktok,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
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
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Propuestas", href: "#propuestas" },
  { name: "Trabajo legislativo", href: "#trabajo-legislativo" },
  { name: "Noticias", href: "#noticias" },
  { name: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f3] text-[#202020] mt-30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          
          <div className="flex flex-col justify-between">
            
            <div>
              <a
                href="#inicio"
                className="inline-block text-xl font-bold tracking-tight"
              >
                NOMBRE<span className="font-normal">.</span>
              </a>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#626262]">
                Una ciudad que avanza se construye con participación,
                compromiso y trabajo conjunto.
              </p>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#888]">
                Contacto
              </p>

              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="tel:+543510000000"
                  className="w-fit transition-colors hover:text-[#666]"
                >
                  +54 351 000 0000
                </a>

                <a
                  href="mailto:contacto@nombre.com"
                  className="w-fit transition-colors hover:text-[#666]"
                >
                  contacto@nombre.com
                </a>
              </div>
            </div>

            {/* Redes */}
            <div className="mt-10 flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5d5d2] bg-white text-[#202020] transition-all duration-200 hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Derecha */}
          <div className="lg:pl-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#888]">
              Navegación
            </p>

            <nav className="grid grid-cols-2 gap-x-10 gap-y-4">
              {pageLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#383838] transition-colors hover:text-[#888]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 border-t border-[#d2d2cf] pt-6">
          <div className="flex flex-col gap-4 text-xs text-[#777] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Nombre Apellido. Todos los
              derechos reservados.
            </p>

            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-[#222]">
                Términos
              </a>

              <a href="#" className="transition-colors hover:text-[#222]">
                Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}