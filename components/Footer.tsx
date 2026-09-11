"use client";

import { motion } from "motion/react";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const navigation = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  { label: "Diseño UX/UI", href: "#servicios" },
  { label: "Desarrollo Web", href: "#servicios" },
  { label: "Optimización y SEO", href: "#servicios" },
];

export default function Footer() {
  return (
    <footer
  className="relative overflow-hidden border-t border-[#27272A]"
  style={{
    backgroundImage: "url('/images/fondo.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      {/* ================================================== */}
      {/* BACKGROUND */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-orange-600/[0.025] blur-[160px]" />

      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/[0.02] blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* ================================================== */}
        {/* CONTENIDO PRINCIPAL */}
        {/* ================================================== */}

        <div className="grid gap-14 py-20 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr] lg:py-24">

          {/* ================================================== */}
          {/* ALDUMA */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <a
              href="#"
              className="group inline-flex items-center gap-3"
            >

              {/* LOGO */}

              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#C2410C]">

                <span className="absolute h-4 w-4 rounded-full border-[2px] border-white/90" />

                <span className="absolute h-7 w-7 rounded-full border border-white/20" />

              </span>

              <span className="text-2xl font-semibold tracking-[-0.05em] text-white">
                ALDUMA
              </span>

            </a>


            <p className="mt-7 max-w-sm text-[15px] leading-7 text-[#71717A]">
              Estudio digital especializado en diseño y
              desarrollo web. Creamos productos digitales
              modernos, funcionales y orientados a resultados.
            </p>


            <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#52525B]">

              <span>Perú</span>

              <span className="h-1 w-1 rounded-full bg-[#3F3F46]" />

              <span>Remoto</span>

            </div>

          </motion.div>


          {/* ================================================== */}
          {/* NAVEGACIÓN */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >

            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Explorar
            </p>

            <div className="flex flex-col gap-4">

              {navigation.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-[15px] text-[#71717A] transition-all duration-300 hover:translate-x-1 hover:text-white"
                >

                  <span>
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />

                </a>

              ))}

            </div>

          </motion.div>


          {/* ================================================== */}
          {/* SERVICIOS */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >

            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Servicios
            </p>

            <div className="flex flex-col gap-4">

              {services.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-[15px] text-[#71717A] transition-all duration-300 hover:translate-x-1 hover:text-white"
                >

                  <span>
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />

                </a>

              ))}

            </div>

          </motion.div>


          {/* ================================================== */}
          {/* CONTACTO */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >

            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contacto
            </p>

            <div className="flex flex-col gap-5">

              {/* EMAIL */}

              <a
                href="mailto:contacto@alduma.dev"
                className="group flex items-center gap-3 text-[15px] text-[#71717A] transition-colors duration-300 hover:text-white"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#27272A] bg-[#111113] transition-colors duration-300 group-hover:border-[#C2410C]/40 group-hover:text-[#C2410C]">
                  <Mail size={15} />
                </span>

                <span>
                  contacto@alduma.dev
                </span>

              </a>


              {/* UBICACIÓN */}

              <div className="flex items-center gap-3 text-[15px] text-[#71717A]">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#27272A] bg-[#111113]">
                  <MapPin size={15} />
                </span>

                <span>
                  Arequipa, Perú
                </span>

              </div>


              {/* REDES */}

              <div className="mt-2 flex gap-3">

                {/* LINKEDIN */}

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#27272A] text-[#71717A] transition-all duration-300 hover:border-[#C2410C]/50 hover:bg-[#C2410C]/10 hover:text-white"
                >

                  

                </a>


                {/* GITHUB */}

                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#27272A] text-[#71717A] transition-all duration-300 hover:border-[#C2410C]/50 hover:bg-[#C2410C]/10 hover:text-white"
                >

                  <FaGithub size={17} />

                </a>

              </div>

            </div>

          </motion.div>

        </div>


        {/* ================================================== */}
        {/* BOTTOM */}
        {/* ================================================== */}

        <div className="border-t border-[#27272A]">

          <div className="flex min-h-[100px] flex-col justify-between gap-5 py-7 sm:flex-row sm:items-center">

            {/* COPYRIGHT */}

            <p className="text-xs text-[#52525B]">
              © {new Date().getFullYear()} ALDUMA. Todos los derechos reservados.
            </p>


            {/* INFO */}

            <div className="flex items-center gap-3 text-xs text-[#52525B]">

              <span>
                Diseño & Desarrollo Web
              </span>

              <span className="h-1 w-1 rounded-full bg-[#3F3F46]" />

              <span>
                Perú
              </span>

            </div>


            {/* VOLVER ARRIBA */}

            <motion.a
              href="#"
              whileHover={{
                y: -4,
                borderColor: "rgba(194,65,12,0.5)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#27272A] text-[#71717A] transition-colors duration-300 hover:text-white"
              aria-label="Volver arriba"
            >

              <ArrowUp size={17} />

            </motion.a>

          </div>

        </div>

      </div>

    </footer>
  );
}