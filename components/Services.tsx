"use client";

import { motion } from "motion/react";
import {
  Palette,
  Code2,
  Search,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Diseño UX/UI",
    description:
      "Diseñamos interfaces intuitivas enfocadas en ofrecer una experiencia de usuario clara, moderna y efectiva.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Construimos sitios web rápidos, escalables y adaptados a las necesidades de cada proyecto.",
  },
  {
    number: "03",
    icon: Search,
    title: "Optimización y SEO",
    description:
      "Mejoramos la visibilidad de tu negocio para facilitar que nuevos clientes encuentren tus servicios.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative isolate overflow-hidden border-y border-[#27272A]/70 bg-[#080808] py-20 lg:py-24"
    >
      {/* FONDO */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 49.5%, #ffffff 50%, transparent 50.5%)",
          backgroundSize: "140px 140px",
        }}
      />

      {/* GLOW IZQUIERDO */}

      <motion.div
        className="pointer-events-none absolute -left-[180px] top-[15%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[150px]"
        animate={{
          x: [0, 140, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.12, 0.96, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GLOW DERECHO */}

      <motion.div
        className="pointer-events-none absolute -right-[200px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-violet-500/[0.05] blur-[140px]"
        animate={{
          x: [0, -100, -30, 0],
          y: [0, -70, 50, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* LÍNEA CENTRAL */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#7C3AED]/10 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CONTENIDO */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER — MISMO FORMATO QUE STATS */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-violet-500/60" />

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              Servicios
            </p>

            <span className="h-px w-7 bg-violet-500/60" />
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Todo lo necesario para construir una presencia digital sólida.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-zinc-400">
            Combinamos estrategia, diseño y tecnología para crear experiencias
            digitales que generan resultados.
          </p>
        </motion.div>

        {/* TARJETAS */}

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0D0D0F]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#7C3AED]/30 hover:bg-[#111114]/90 lg:p-7"
              >
                {/* LED DEL BORDE */}

                <motion.div
                  className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(124,58,237,0.04) 280deg, rgba(124,58,237,0.7) 315deg, rgba(124,58,237,0.04) 350deg, transparent 360deg)",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* BORDE INTERNO */}

                <div className="pointer-events-none absolute inset-px rounded-[23px] bg-[#0D0D0F]/95 transition-colors duration-500 group-hover:bg-[#101013]/95" />

                {/* GLOW */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/[0.04] blur-[70px] transition-all duration-700 group-hover:bg-violet-600/[0.12]" />

                {/* CONTENIDO */}

                <div className="relative z-10">
                  {/* ICONO + NÚMERO */}

                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/[0.08]"
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.5}
                        className="text-[#7C3AED]"
                      />
                    </motion.div>

                    <span className="text-xs font-medium tracking-[0.15em] text-[#52525B]">
                      {service.number}
                    </span>
                  </div>

                  {/* TÍTULO */}

                  <h3 className="mt-12 text-xl font-semibold tracking-[-0.03em] text-white">
                    {service.title}
                  </h3>

                  {/* DESCRIPCIÓN */}

                  <p className="mt-3 text-[15px] leading-6 text-[#A1A1AA]">
                    {service.description}
                  </p>

                  {/* LINK */}

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#71717A] transition-colors duration-300 group-hover:text-white">
                    <span>Conocer más</span>

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* LÍNEA INFERIOR */}

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}