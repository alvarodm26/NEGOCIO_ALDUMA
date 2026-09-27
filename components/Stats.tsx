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
    <section className="relative overflow-hidden bg-[#050B16] py-14 lg:py-18">
      {/* ============================================================
          FONDO TECHNOLOGIES — ESTÁTICO
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* GRID PRINCIPAL */}

        <div
          className="absolute inset-[-20%]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 78%)",
            opacity: 0.55,
          }}
        />

        {/* GRID SECUNDARIO */}

        <div
          className="absolute inset-[-25%]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.11) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.11) 1px, transparent 1px)
            `,
            backgroundSize: "140px 140px",
            maskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 72%)",
            opacity: 0.4,
          }}
        />

        {/* GRID DIAGONAL */}

        <div
          className="absolute inset-[-30%]"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(34,211,238,0.08) 1px, transparent 1px),
              linear-gradient(315deg, rgba(59,130,246,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "160px 160px",
            maskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 75%)",
            opacity: 0.4,
          }}
        />

        {/* ============================================================
            AURORA SUPERIOR — ESTÁTICA
        ============================================================ */}

        <div className="absolute left-[-20%] top-[-5%] h-[260px] w-[140%] rounded-[50%] bg-gradient-to-r from-transparent via-cyan-400/[0.10] to-transparent blur-[55px]" />

        {/* AURORA INFERIOR */}

        <div className="absolute bottom-[-8%] left-[-20%] h-[280px] w-[140%] rounded-[50%] bg-gradient-to-r from-transparent via-blue-500/[0.09] to-transparent blur-[60px]" />

        {/* ============================================================
            GLOW CENTRAL
        ============================================================ */}

        <div className="absolute left-1/2 top-1/2 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.11),rgba(59,130,246,0.045)_40%,transparent_72%)] blur-[75px]" />

        {/* ============================================================
            ONDA SUPERIOR
        ============================================================ */}

        <div className="absolute left-1/2 top-[18%] h-[230px] w-[850px] -translate-x-1/2 rounded-[50%] border border-cyan-400/[0.10] shadow-[0_0_35px_rgba(34,211,238,0.06)]" />

        <div className="absolute left-1/2 top-[22%] h-[140px] w-[600px] -translate-x-1/2 rounded-[50%] border border-cyan-300/[0.12]" />

        {/* ============================================================
            ONDA INFERIOR
        ============================================================ */}

        <div className="absolute left-1/2 bottom-[15%] h-[210px] w-[820px] -translate-x-1/2 rounded-[50%] border border-blue-400/[0.09] shadow-[0_0_40px_rgba(59,130,246,0.05)]" />

        <div className="absolute left-1/2 bottom-[20%] h-[120px] w-[580px] -translate-x-1/2 rounded-[50%] border border-cyan-300/[0.10]" />

        {/* ============================================================
            LÍNEAS HORIZONTALES DE LUZ
        ============================================================ */}

        <div className="absolute left-0 right-0 top-[28%] h-px bg-gradient-to-r from-transparent via-cyan-400/[0.25] to-transparent" />

        <div className="absolute left-0 right-0 top-[72%] h-px bg-gradient-to-r from-transparent via-blue-400/[0.22] to-transparent" />

        <div className="absolute left-0 right-0 top-[48%] h-px bg-gradient-to-r from-transparent via-cyan-300/[0.08] to-transparent" />

        {/* ============================================================
            GLOWS LATERALES
        ============================================================ */}

        <div className="absolute left-[-12%] top-[42%] h-[500px] w-[300px] rounded-full bg-cyan-500/[0.08] blur-[140px]" />

        <div className="absolute right-[-12%] top-[38%] h-[520px] w-[320px] rounded-full bg-blue-600/[0.08] blur-[145px]" />

        {/* ============================================================
            LÍNEAS VERTICALES
        ============================================================ */}

        <div className="absolute left-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/[0.07] to-transparent" />

        <div className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/[0.07] to-transparent" />

        {/* ============================================================
            PARTÍCULAS — ESTÁTICAS
        ============================================================ */}

        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-cyan-300/40"
            style={{
              width: index % 5 === 0 ? "3px" : "2px",
              height: index % 5 === 0 ? "3px" : "2px",
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
              boxShadow:
                index % 5 === 0
                  ? "0 0 8px rgba(34,211,238,0.5)"
                  : "none",
              opacity: index % 3 === 0 ? 0.5 : 0.25,
            }}
          />
        ))}
      </div>

      {/* ============================================================
          CONTENIDO
      ============================================================ */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* ENCABEZADO */}

        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/70"
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
            className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl"
          >
            Tecnología con propósito.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-4 max-w-xl text-[17px] leading-7 text-zinc-400"
          >
            Construimos experiencias digitales donde el diseño, el
            rendimiento y la tecnología trabajan juntos.
          </motion.p>
        </div>

        {/* ============================================================
            CARDS
        ============================================================ */}

        <div className="relative mt-9">
          {/* PERÍMETRO LED ESTÁTICO */}

          <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl border-2 border-cyan-400/[0.30] shadow-[0_0_12px_rgba(34,211,238,0.18),0_0_35px_rgba(14,165,233,0.08),inset_0_0_14px_rgba(14,165,233,0.05)]" />

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
                  className="group relative min-h-[225px] overflow-hidden bg-[#07101D]/90 p-6 transition-colors duration-500 hover:bg-[#091522]"
                >
                  {/* Glow interno */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.04] blur-3xl" />

                  {/* TÍTULO + NÚMERO + ICONO */}

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-medium tracking-[0.2em] text-cyan-400/45">
                        {item.number}
                      </span>

                      <h3 className="text-lg font-medium tracking-tight text-white">
                        {item.title}
                      </h3>
                    </div>

                    <motion.div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-cyan-300/60"
                      animate={{
                        y: [0, -3, 0],
                        opacity: [0.65, 1, 0.65],
                      }}
                      transition={{
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                  </div>

                  {/* DESCRIPCIÓN */}

                  <div className="relative mt-5">
                    <p className="text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                  {/* LÍNEA INFERIOR */}

                  <div className="absolute bottom-0 left-6 right-6 h-px overflow-hidden bg-white/[0.05]">
                    <motion.div
                      className="h-full w-0 bg-gradient-to-r from-cyan-400/70 via-blue-400/50 to-transparent"
                      whileInView={{ width: "55%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.4 + index * 0.1,
                      }}
                    />
                  </div>

                  {/* BORDE HOVER */}

                  <motion.div
                    className="pointer-events-none absolute inset-0 border border-cyan-400/[0.0]"
                    whileHover={{
                      borderColor: "rgba(34,211,238,0.16)",
                      boxShadow:
                        "inset 0 0 30px rgba(34,211,238,0.025)",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}