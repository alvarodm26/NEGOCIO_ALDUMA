
"use client";

import { motion } from "motion/react";
import {
  Gauge,
  Smartphone,
  Cpu,
  Sparkles,
} from "lucide-react";

const strengths = [
  {
    number: "01",
    title: "Rendimiento",
    description:
      "Interfaces rápidas, optimizadas y pensadas para ofrecer una experiencia fluida en cualquier dispositivo.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Responsive",
    description:
      "Diseños adaptables que mantienen una experiencia consistente desde móviles hasta pantallas grandes.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Tecnología moderna",
    description:
      "Arquitecturas actuales y herramientas modernas para construir soluciones escalables y mantenibles.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Atención al detalle",
    description:
      "Cada interacción, espacio y elemento visual está pensado para transmitir calidad y profesionalismo.",
    icon: Sparkles,
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#050B16] py-28">
      {/* ============================================================
          FONDO AURORA
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Glow superior izquierdo */}
        <motion.div
          className="absolute -left-[15%] top-[5%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.07] blur-[140px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow superior derecho */}
        <motion.div
          className="absolute -right-[15%] top-[10%] h-[650px] w-[650px] rounded-full bg-indigo-500/[0.08] blur-[150px]"
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow central */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-[130px]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow lateral izquierdo */}
        <motion.div
          className="absolute left-[-10%] top-[55%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.06] blur-[120px]"
          animate={{
            y: [0, -70, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow lateral derecho */}
        <motion.div
          className="absolute right-[-10%] top-[60%] h-[450px] w-[450px] rounded-full bg-violet-500/[0.05] blur-[120px]"
          animate={{
            y: [0, 70, 0],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================================================
            AURORAS HORIZONTALES
        ============================================================ */}

        <motion.div
          className="absolute left-[-15%] top-[20%] h-[180px] w-[130%] -rotate-[7deg] rounded-[50%] border-y border-cyan-400/[0.06] bg-gradient-to-r from-transparent via-cyan-400/[0.035] to-transparent blur-[1px]"
          animate={{
            x: ["-5%", "5%", "-5%"],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[-15%] top-[46%] h-[160px] w-[130%] rotate-[5deg] rounded-[50%] border-y border-blue-400/[0.055] bg-gradient-to-r from-transparent via-blue-400/[0.035] to-transparent blur-[1px]"
          animate={{
            x: ["5%", "-5%", "5%"],
            opacity: [0.4, 0.75, 0.4],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[-15%] top-[70%] h-[180px] w-[130%] -rotate-[4deg] rounded-[50%] border-y border-indigo-400/[0.05] bg-gradient-to-r from-transparent via-indigo-400/[0.03] to-transparent blur-[1px]"
          animate={{
            x: ["-4%", "4%", "-4%"],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Líneas horizontales de luz */}
        <motion.div
          className="absolute left-0 right-0 top-[31%] h-px bg-gradient-to-r from-transparent via-cyan-400/[0.12] to-transparent"
          animate={{
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-0 right-0 top-[67%] h-px bg-gradient-to-r from-transparent via-indigo-400/[0.1] to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================================================
            PARTÍCULAS
        ============================================================ */}

        {Array.from({ length: 22 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300/30"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 4 + (index % 5),
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ============================================================
          CONTENIDO
      ============================================================ */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/70"
          >
            <span className="h-px w-6 bg-cyan-400/40" />
            Nuestra forma de trabajar
            <span className="h-px w-6 bg-cyan-400/40" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl"
          >
            Tecnología con propósito.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400"
          >
            Construimos experiencias digitales donde el diseño, el
            rendimiento y la tecnología trabajan juntos.
          </motion.p>
        </div>

        {/* ============================================================
            BLOQUE DE 4 CARDS
        ============================================================ */}

        <div className="relative mt-12">
          {/* ==========================================================
              LED AZUL ESTÁTICO — UN SOLO PERÍMETRO
          =========================================================== */}

          <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl border-2 border-cyan-400/[0.30] shadow-[0_0_12px_rgba(34,211,238,0.16),0_0_30px_rgba(14,165,233,0.06),inset_0_0_12px_rgba(14,165,233,0.04)]" />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-cyan-300/[0.08] bg-cyan-200/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="group relative min-h-[290px] overflow-hidden bg-[#07101D]/90 p-7 transition-colors duration-500 hover:bg-[#091522]"
                >
                  {/* Glow interno */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.04] blur-3xl transition-all duration-700 group-hover:bg-cyan-400/[0.09]" />

                  {/* Número */}
                  <div className="relative flex items-start justify-between">
                    <span className="text-[11px] font-medium tracking-[0.2em] text-cyan-400/45">
                      {item.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-cyan-300/60 transition-all duration-500 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.05] group-hover:text-cyan-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="relative mt-16">
                    <h3 className="text-lg font-medium tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Línea inferior */}
                  <div className="absolute bottom-0 left-7 right-7 h-px overflow-hidden bg-white/[0.05]">
                    <motion.div
                      className="h-full w-0 bg-gradient-to-r from-cyan-400/60 via-blue-400/50 to-transparent"
                      whileInView={{ width: "42%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.4 + index * 0.1,
                      }}
                    />
                  </div>

                  {/* Hover border */}
                  <div className="pointer-events-none absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-cyan-400/[0.12]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
