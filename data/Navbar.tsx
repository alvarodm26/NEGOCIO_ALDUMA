export default function Navbar() {
  return (
    <header className="border-b border-[#2A2A2E]/60">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        <a
          href="#"
          className="text-xl font-semibold tracking-tight"
        >
          ALDUMA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#servicios"
            className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
          >
            Servicios
          </a>

          <a
            href="#proyectos"
            className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
          >
            Proyectos
          </a>

          <a
            href="#nosotros"
            className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
          >
            Nosotros
          </a>

          <a
            href="#contacto"
            className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
          >
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-medium transition-all hover:bg-[#6D28D9]"
        >
          Solicitar propuesta
        </a>

      </nav>
    </header>
  );
}