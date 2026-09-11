
"use client";

import { motion } from "motion/react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiPython,
} from "react-icons/si";

const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
];

const items = [...technologies, ...technologies];

export default function Technologies() {
  return (
    <section
      className="relative isolate overflow-hidden border-y border-[#27272A]/70 bg-[#080808] py-16 lg:py-20"
    >
      {/* ================================================== */}
      {/* GRID DE FONDO */}
      {/* ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ================================================== */}
      {/* LÍNEAS DIAGONALES */}
      {/* ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 49.5%, #ffffff 50%, transparent 50.5%)",
          backgroundSize: "140px 140px",
        }}
      />

      {/* ================================================== */}
      {/* GLOW CENTRAL */}
      {/* ================================================== */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.07] blur-[140px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================================================== */}
      {/* GLOW IZQUIERDO */}
      {/* ================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-40 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-violet-600/[0.04] blur-[120px]"
        animate={{
          x: [0, 80, 0],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================================================== */}
      {/* GLOW DERECHO */}
      {/* ================================================== */}

      <motion.div
        className="pointer-events-none absolute -right-40 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-violet-600/[0.04] blur-[120px]"
        animate={{
          x: [0, -80, 0],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================================================== */}
      {/* CONTENIDO */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* TÍTULO */}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-[#71717A]"
        >
          Tecnologías con las que trabajamos
        </motion.p>

        {/* MARQUEE */}

        <div className="relative overflow-hidden">

          {/* FADE IZQUIERDO */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent lg:w-32" />

          {/* FADE DERECHO */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent lg:w-32" />

          {/* LÍNEA SUPERIOR */}

          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2A2A2E] to-transparent" />

          {/* LÍNEA INFERIOR */}

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A2E] to-transparent" />

          {/* CONTENEDOR MARQUEE */}

          <motion.div
            className="flex w-max items-center gap-4 py-5"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {items.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <motion.div
                  key={`${technology.name}-${index}`}
                  whileHover={{
                    y: -4,
                    scale: 1.025,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 22,
                  }}
                  className="group relative flex h-[64px] items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#0D0D0F]/90 px-5 backdrop-blur-xl transition-all duration-300 hover:border-[#7C3AED]/25 hover:bg-[#111114]"
                >
                  {/* ICONO */}

                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${technology.color}10`,
                    }}
                  >
                    <Icon
                      size={22}
                      style={{
                        color: technology.color,
                      }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* NOMBRE */}

                  <span className="whitespace-nowrap text-[15px] font-medium tracking-[-0.01em] text-[#A1A1AA] transition-colors duration-300 group-hover:text-white">
                    {technology.name}
                  </span>

                  {/* GLOW */}

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-[0.08]"
                    style={{
                      backgroundColor: technology.color,
                    }}
                  />

                  {/* BORDE INFERIOR */}

                  <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#7C3AED] transition-all duration-500 group-hover:w-1/2" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

