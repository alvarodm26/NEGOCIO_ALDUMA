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
    <section className="relative overflow-hidden bg-[#050B16] py-12 lg:py-16">
      {/* ============================================================
          FONDO ESTÁTICO
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 75%)",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.045),rgba(59,130,246,0.02)_45%,transparent_72%)] blur-[70px]" />

        <div className="absolute left-[-10%] top-[35%] h-[350px] w-[250px] rounded-full bg-cyan-500/[0.025] blur-[120px]" />

        <div className="absolute right-[-10%] top-[35%] h-[350px] w-[250px] rounded-full bg-blue-600/[0.025] blur-[120px]" />
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

          <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl border border-cyan-400/[0.22] shadow-[0_0_18px_rgba(34,211,238,0.08),inset_0_0_14px_rgba(14,165,233,0.03)]" />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-cyan-300/[0.08] bg-cyan-200/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="group relative min-h-[225px] overflow-hidden bg-[#07101D]/90 p-6 transition-colors duration-500 hover:bg-[#091522]"
                >
                  {/* Glow interno estático */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.035] blur-3xl" />

                  {/* Número + Icono */}

                  <div className="relative flex items-start justify-between">
                    <span className="text-[11px] font-medium tracking-[0.2em] text-cyan-400/45">
                      {item.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-cyan-300/60">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* CONTENIDO */}

                  <div className="relative mt-9">
                    <h3 className="text-lg font-medium tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
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
                        duration: 0.8,
                        delay: 0.3 + index * 0.08,
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
                      duration: 0.3,
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