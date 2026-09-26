
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
    <footer className="relative overflow-hidden border-t border-white/[0.10] bg-black">

      {/* ================================================== */}
      {/* VIDEO DE FONDO */}
      {/* ================================================== */}

      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover brightness-[0.9] contrast-[1.05]"
        src="/images/video_presentacion2.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay principal:
          suficientemente oscuro para leer el texto,
          pero sin ocultar el video */}
      <div className="pointer-events-none absolute inset-0 bg-black/35" />

      {/* Degradado superior */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/70" />

      {/* Degradado lateral para centrar la atención */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/55" />


      {/* ================================================== */}
      {/* CONTENIDO */}
      {/* ================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* ================================================== */}
        {/* CONTENIDO PRINCIPAL */}
        {/* ================================================== */}

        <div className="grid gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.15fr] lg:gap-16 lg:py-20">

          {/* ================================================== */}
          {/* ALDUMA */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-3"
            >
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/[0.18] bg-black/30 backdrop-blur-sm transition-all duration-500 group-hover:border-white/40">

                <span className="absolute h-[15px] w-[15px] rounded-full border-[1.5px] border-white" />

                <span className="absolute h-[28px] w-[28px] rounded-full border border-white/[0.20]" />

                <span className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
              </span>

              <span className="text-[21px] font-semibold tracking-[-0.055em] text-white">
                ALDUMA
              </span>
            </a>

            <p className="mt-5 max-w-[290px] text-[13px] leading-6 text-white/75">
              Diseño y desarrollo web para marcas que quieren crecer.
            </p>

            <a
              href="#contacto"
              className="group mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-white transition-colors duration-300 hover:text-white/70"
            >
              Hablemos de tu proyecto

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>


          {/* ================================================== */}
          {/* NAVEGACIÓN */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
              Explorar
            </p>

            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-[13px] text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={11}
                    className="translate-y-0.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </motion.div>


          {/* ================================================== */}
          {/* SERVICIOS */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14 }}
          >
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
              Servicios
            </p>

            <div className="flex flex-col gap-3">
              {services.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-[13px] text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={11}
                    className="translate-y-0.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </motion.div>


          {/* ================================================== */}
          {/* CONTACTO */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
              Contacto
            </p>

            <div className="flex flex-col gap-4">

              {/* EMAIL */}

              <a
                href="mailto:contacto@alduma.dev"
                className="group flex items-center gap-3 text-[13px] text-white/70 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.15] bg-black/25 backdrop-blur-sm transition-all duration-300 group-hover:border-white/30">
                  <Mail
                    size={14}
                    className="text-white/60 transition-colors duration-300 group-hover:text-white"
                  />
                </span>

                <span>contacto@alduma.dev</span>
              </a>


              {/* UBICACIÓN */}

              <div className="flex items-center gap-3 text-[13px] text-white/70">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.15] bg-black/25 backdrop-blur-sm">
                  <MapPin
                    size={14}
                    className="text-white/60"
                  />
                </span>

                <span>Arequipa, Perú</span>
              </div>


              {/* GITHUB */}

              <a
                href="#"
                aria-label="GitHub"
                className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.15] bg-black/25 text-white/65 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-black/40 hover:text-white"
              >
                <FaGithub size={14} />
              </a>

            </div>
          </motion.div>

        </div>


        {/* ================================================== */}
        {/* BOTTOM */}
        {/* ================================================== */}

        <div className="border-t border-white/[0.15]">

          <div className="flex min-h-[72px] flex-col justify-between gap-4 py-5 sm:flex-row sm:items-center">

            <div className="flex flex-col gap-1">
              <p className="text-[11px] text-white/50">
                © {new Date().getFullYear()} ALDUMA
              </p>

              <p className="text-[10px] text-white/30">
                Diseño · Desarrollo · Tecnología
              </p>
            </div>


            <p className="hidden text-[10px] uppercase tracking-[0.2em] text-white/35 md:block">
              Arequipa · Perú
            </p>


            <motion.a
              href="#"
              whileHover={{
                y: -3,
                borderColor: "rgba(255,255,255,0.45)",
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.18] bg-black/25 text-white/70 backdrop-blur-sm transition-colors duration-300 hover:text-white"
              aria-label="Volver arriba"
            >
              <ArrowUp size={14} />
            </motion.a>

          </div>

        </div>

      </div>
    </footer>
  );
}
