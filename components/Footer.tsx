"use client";

import { motion } from "motion/react";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import LedContour from "@/components/LedContour";

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
    <footer className="relative isolate overflow-hidden border-t border-[#27272A] bg-[#080808]">

      {/* ================================================== */}
      {/* FONDO ORIGINAL + ANIMACIÓN LED */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">

        <LedContour
          src="/images/toros-misti.png"
          duration={30000}
        />

      </div>

      {/* ================================================== */}
      {/* CAPAS DE OSCURECIMIENTO */}
      {/* ================================================== */}

      {/* Oscurece ligeramente el dibujo para que el contenido
          del footer siga teniendo prioridad visual */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#080808]/55" />

      {/* Degradado superior */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#080808]/95 via-[#080808]/35 to-[#080808]/80" />

      {/* Degradado inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[45%] bg-gradient-to-t from-[#080808] via-[#080808]/45 to-transparent" />

      {/* Glow violeta muy sutil para integrarlo con ALDUMA */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-[2] h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#7C3AED]/[0.035] blur-[150px]" />

      {/* ================================================== */}
      {/* CONTENIDO */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* ================================================== */}
        {/* CONTENIDO PRINCIPAL */}
        {/* ================================================== */}

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.15fr] lg:gap-12 lg:py-20">

          {/* ================================================== */}
          {/* ALDUMA */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-3"
            >
              <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-[#7C3AED]">

                <span className="absolute h-4 w-4 rounded-full border-[2px] border-white/90" />

                <span className="absolute h-7 w-7 rounded-full border border-white/20" />

              </span>

              <span className="text-xl font-semibold tracking-[-0.04em] text-white">
                ALDUMA
              </span>
            </a>

            <p className="mt-4 max-w-sm text-[14px] leading-6 text-[#A1A1AA]">
              Estudio digital especializado en diseño y
              desarrollo web. Creamos experiencias digitales
              modernas y orientadas a resultados.
            </p>
          </motion.div>

          {/* ================================================== */}
          {/* NAVEGACIÓN */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Explorar
            </p>

            <div className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex w-fit items-center gap-1.5 text-[14px] text-[#A1A1AA] transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={12}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Servicios
            </p>

            <div className="flex flex-col gap-2.5">
              {services.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex w-fit items-center gap-1.5 text-[14px] text-[#A1A1AA] transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={12}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contacto
            </p>

            <div className="flex flex-col gap-3">

              {/* EMAIL */}

              <a
                href="mailto:contacto@alduma.dev"
                className="group flex items-center gap-2.5 text-[14px] text-[#A1A1AA] transition-colors duration-300 hover:text-white"
              >
                <Mail
                  size={15}
                  className="text-[#71717A] transition-colors group-hover:text-[#7C3AED]"
                />

                <span>
                  contacto@alduma.dev
                </span>
              </a>

              {/* UBICACIÓN */}

              <div className="flex items-center gap-2.5 text-[14px] text-[#A1A1AA]">
                <MapPin
                  size={15}
                  className="text-[#71717A]"
                />

                <span>
                  Arequipa, Perú
                </span>
              </div>

              {/* GITHUB */}

              <div className="mt-1">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.10] bg-black/20 text-[#A1A1AA] transition-all duration-300 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 hover:text-white"
                >
                  <FaGithub size={15} />
                </a>
              </div>

            </div>
          </motion.div>
        </div>

        {/* ================================================== */}
        {/* BOTTOM */}
        {/* ================================================== */}

        <div className="border-t border-white/[0.10]">

          <div className="flex min-h-[64px] flex-col justify-between gap-3 py-4 sm:flex-row sm:items-center">

            {/* COPYRIGHT */}

            <p className="text-xs text-[#71717A]">
              © {new Date().getFullYear()} ALDUMA. Todos los derechos reservados.
            </p>

            {/* VOLVER ARRIBA */}

            <motion.a
              href="#"
              whileHover={{
                y: -3,
                borderColor: "rgba(124,58,237,0.5)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.10] bg-black/20 text-[#A1A1AA] transition-colors duration-300 hover:text-white"
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