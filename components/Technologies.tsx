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
    <section className="relative isolate overflow-hidden border-y border-blue-400/[0.08] bg-[#050B16] py-16 lg:py-20">
      {/* ==================================================
          FONDO BASE
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#050B16]" />

      {/* ==================================================
          GRID AZUL — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 82%)",
          opacity: 0.55,
        }}
      />

      {/* ==================================================
          GRID SECUNDARIO — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",
          maskImage:
            "radial-gradient(ellipse at center, black 5%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 5%, transparent 72%)",
          opacity: 0.35,
        }}
      />

      {/* ==================================================
          AURORA AZUL CENTRAL — ESTÁTICA
      ================================================== */}

      <div
        className="pointer-events-none absolute left-[-35%] top-[10%] -z-30 h-[45%] w-[170%] rotate-[-7deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 4%, rgba(6,182,212,0.025) 15%, rgba(14,165,233,0.12) 30%, rgba(37,99,235,0.20) 44%, rgba(99,102,241,0.18) 58%, rgba(34,211,238,0.11) 72%, rgba(59,130,246,0.05) 85%, transparent 97%)",
          filter: "blur(55px)",
          opacity: 0.8,
        }}
      />

      {/* ==================================================
          AURORA INFERIOR — ESTÁTICA
      ================================================== */}

      <div
        className="pointer-events-none absolute right-[-40%] bottom-[-5%] -z-30 h-[50%] w-[180%] rotate-[8deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 3%, rgba(79,70,229,0.04) 18%, rgba(37,99,235,0.14) 32%, rgba(59,130,246,0.20) 47%, rgba(34,211,238,0.12) 61%, rgba(99,102,241,0.18) 76%, rgba(37,99,235,0.06) 90%, transparent 98%)",
          filter: "blur(60px)",
          opacity: 0.75,
        }}
      />

      {/* ==================================================
          GLOW CENTRAL — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-30 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, rgba(34,211,238,0.08) 28%, rgba(79,70,229,0.07) 48%, transparent 72%)",
          filter: "blur(75px)",
          opacity: 0.75,
        }}
      />

      {/* ==================================================
          ONDA SUPERIOR — ESTÁTICA
      ================================================== */}

      <div
        className="pointer-events-none absolute -left-[25%] top-[12%] -z-20 h-[130px] w-[150%] rounded-[50%]"
        style={{
          borderTop: "1px solid rgba(34,211,238,0.20)",
          borderBottom: "1px solid rgba(59,130,246,0.10)",
          boxShadow:
            "0 -15px 55px rgba(34,211,238,0.08), 0 10px 35px rgba(37,99,235,0.05)",
          opacity: 0.75,
        }}
      />

      {/* ==================================================
          ONDA INFERIOR — ESTÁTICA
      ================================================== */}

      <div
        className="pointer-events-none absolute -left-[25%] bottom-[10%] -z-20 h-[140px] w-[150%] rounded-[50%]"
        style={{
          borderTop: "1px solid rgba(99,102,241,0.15)",
          borderBottom: "1px solid rgba(34,211,238,0.12)",
          boxShadow:
            "0 15px 55px rgba(79,70,229,0.07), 0 -10px 35px rgba(34,211,238,0.04)",
          opacity: 0.7,
        }}
      />

      {/* ==================================================
          LÍNEAS DE LUZ — ESTÁTICAS
      ================================================== */}

      <div
        className="pointer-events-none absolute left-[-30%] top-[34%] -z-10 h-px w-[160%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,0.05), rgba(56,189,248,0.40), rgba(96,165,250,0.20), rgba(129,140,248,0.30), transparent)",
          boxShadow:
            "0 0 25px rgba(34,211,238,0.14), 0 0 70px rgba(37,99,235,0.10)",
          opacity: 0.65,
        }}
      />

      <div
        className="pointer-events-none absolute left-[-30%] top-[70%] -z-10 h-px w-[160%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.06), rgba(37,99,235,0.30), rgba(34,211,238,0.22), transparent)",
          boxShadow: "0 0 40px rgba(37,99,235,0.10)",
          opacity: 0.6,
        }}
      />

      {/* ==================================================
          GLOW IZQUIERDO — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute -left-[180px] top-1/2 -z-20 h-[420px] w-[420px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.16) 0%, rgba(14,116,144,0.07) 35%, transparent 72%)",
          filter: "blur(65px)",
          opacity: 0.7,
        }}
      />

      {/* ==================================================
          GLOW DERECHO — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute -right-[180px] top-1/2 -z-20 h-[450px] w-[450px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(79,70,229,0.08) 38%, transparent 72%)",
          filter: "blur(70px)",
          opacity: 0.75,
        }}
      />

      {/* ==================================================
          PARTÍCULAS — ESTÁTICAS
      ================================================== */}

      {[
        {
          left: "10%",
          top: "20%",
          color: "bg-cyan-300",
          shadow: "0 0 14px rgba(34,211,238,0.8)",
        },
        {
          left: "24%",
          top: "70%",
          color: "bg-blue-300",
          shadow: "0 0 14px rgba(59,130,246,0.8)",
        },
        {
          left: "42%",
          top: "25%",
          color: "bg-indigo-300",
          shadow: "0 0 14px rgba(129,140,248,0.8)",
        },
        {
          left: "58%",
          top: "76%",
          color: "bg-cyan-200",
          shadow: "0 0 14px rgba(34,211,238,0.8)",
        },
        {
          left: "74%",
          top: "18%",
          color: "bg-blue-300",
          shadow: "0 0 14px rgba(59,130,246,0.8)",
        },
        {
          left: "88%",
          top: "68%",
          color: "bg-indigo-300",
          shadow: "0 0 14px rgba(129,140,248,0.8)",
        },
      ].map((particle, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute -z-10 h-1 w-1 rounded-full ${particle.color}`}
          style={{
            left: particle.left,
            top: particle.top,
            boxShadow: particle.shadow,
            opacity: 0.5,
          }}
        />
      ))}

      {/* ==================================================
          CONTENIDO
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* TÍTULO */}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/70"
        >
          Tecnologías con las que trabajamos
        </motion.p>

        {/* MARQUEE */}

        <div className="relative overflow-hidden">
          {/* FADE IZQUIERDO */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#050B16] via-[#050B16]/85 to-transparent lg:w-32" />

          {/* FADE DERECHO */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#050B16] via-[#050B16]/85 to-transparent lg:w-32" />

          {/* LÍNEA SUPERIOR ESTÁTICA */}

          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          {/* LÍNEA INFERIOR ESTÁTICA */}

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

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
                    y: -5,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 22,
                  }}
                  className="group relative flex h-[64px] items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#09111F]/90 px-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-[#0D1726]"
                >
                  {/* GLOW INTERNO */}

                  <motion.div
                    className="pointer-events-none absolute -inset-8 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{
                      backgroundColor: technology.color,
                    }}
                  />

                  {/* ICONO */}

                  <div
                    className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl"
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

                  <span className="relative z-10 whitespace-nowrap text-[15px] font-medium tracking-[-0.01em] text-[#A1A1AA] transition-colors duration-300 group-hover:text-white">
                    {technology.name}
                  </span>

                  {/* BORDE INFERIOR */}

                  <motion.div
                    className="pointer-events-none absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-cyan-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "50%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}