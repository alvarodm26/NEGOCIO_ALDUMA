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
    <section className="relative overflow-hidden bg-[#050B16] py-20 lg:py-24">
      {/* ============================================================
          FONDO TECHNOLOGIES — MOVIMIENTO INTENSO
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* GRID PRINCIPAL */}
        <motion.div
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
          }}
          animate={{
            backgroundPosition: [
              "0px 0px",
              "72px 72px",
              "144px 0px",
              "72px -72px",
              "0px 0px",
            ],
            opacity: [0.45, 0.9, 0.55, 0.85, 0.45],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* GRID SECUNDARIO */}
        <motion.div
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
          }}
          animate={{
            backgroundPosition: [
              "0px 0px",
              "-140px 70px",
              "-280px 0px",
              "-140px -70px",
              "0px 0px",
            ],
            opacity: [0.3, 0.65, 0.35, 0.6, 0.3],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* GRID DIAGONAL */}
        <motion.div
          className="absolute inset-[-30%] opacity-40"
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
          }}
          animate={{
            backgroundPosition: [
              "0px 0px",
              "160px -160px",
              "320px 0px",
              "160px 160px",
              "0px 0px",
            ],
            opacity: [0.2, 0.55, 0.25, 0.5, 0.2],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ============================================================
            AURORA SUPERIOR
        ============================================================ */}

        <motion.div
          className="absolute left-[-20%] top-[-5%] h-[260px] w-[140%] rounded-[50%] bg-gradient-to-r from-transparent via-cyan-400/[0.10] to-transparent blur-[55px]"
          animate={{
            x: ["-8%", "8%", "-4%", "8%", "-8%"],
            y: [0, 35, -20, 45, 0],
            rotate: [-5, -1, -7, 1, -5],
            scaleY: [1, 1.25, 0.9, 1.3, 1],
            opacity: [0.35, 0.8, 0.45, 0.75, 0.35],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* AURORA INFERIOR */}
        <motion.div
          className="absolute bottom-[-8%] left-[-20%] h-[280px] w-[140%] rounded-[50%] bg-gradient-to-r from-transparent via-blue-500/[0.09] to-transparent blur-[60px]"
          animate={{
            x: ["8%", "-8%", "5%", "-6%", "8%"],
            y: [0, -40, 25, -35, 0],
            rotate: [5, 1, 7, -1, 5],
            scaleY: [1, 1.3, 0.85, 1.25, 1],
            opacity: [0.3, 0.75, 0.4, 0.7, 0.3],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================================================
            GLOW CENTRAL
        ============================================================ */}

        <motion.div
          className="absolute left-1/2 top-1/2 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.11),rgba(59,130,246,0.045)_40%,transparent_72%)] blur-[75px]"
          animate={{
            scale: [0.9, 1.18, 0.95, 1.12, 0.9],
            x: ["-50%", "-47%", "-53%", "-48%", "-50%"],
            y: ["-50%", "-47%", "-52%", "-48%", "-50%"],
            opacity: [0.35, 0.8, 0.45, 0.75, 0.35],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================================================
            ONDA SUPERIOR
        ============================================================ */}

        <motion.div
          className="absolute left-1/2 top-[18%] h-[230px] w-[850px] -translate-x-1/2 rounded-[50%] border border-cyan-400/[0.10] shadow-[0_0_35px_rgba(34,211,238,0.06)]"
          animate={{
            x: ["-50%", "-47%", "-53%", "-48%", "-50%"],
            y: [0, -18, 12, -10, 0],
            rotate: [-2, 1, -3, 2, -2],
            scale: [1, 1.08, 0.96, 1.05, 1],
            opacity: [0.25, 0.75, 0.35, 0.7, 0.25],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-[22%] h-[140px] w-[600px] -translate-x-1/2 rounded-[50%] border border-cyan-300/[0.12]"
          animate={{
            x: ["-50%", "-46%", "-54%", "-48%", "-50%"],
            y: [0, 15, -10, 12, 0],
            scale: [1, 1.12, 0.92, 1.08, 1],
            opacity: [0.2, 0.7, 0.3, 0.65, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================================================
            ONDA INFERIOR
        ============================================================ */}

        <motion.div
          className="absolute left-1/2 bottom-[15%] h-[210px] w-[820px] -translate-x-1/2 rounded-[50%] border border-blue-400/[0.09] shadow-[0_0_40px_rgba(59,130,246,0.05)]"
          animate={{
            x: ["-50%", "-54%", "-46%", "-52%", "-50%"],
            y: [0, 18, -15, 12, 0],
            rotate: [2, -2, 3, -1, 2],
            scale: [1, 1.1, 0.94, 1.06, 1],
            opacity: [0.2, 0.7, 0.3, 0.65, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-1/2 bottom-[20%] h-[120px] w-[580px] -translate-x-1/2 rounded-[50%] border border-cyan-300/[0.10]"
          animate={{
            x: ["-50%", "-45%", "-55%", "-48%", "-50%"],
            y: [0, -12, 10, -8, 0],
            scale: [1, 1.1, 0.94, 1.08, 1],
            opacity: [0.15, 0.6, 0.25, 0.55, 0.15],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================================================
            LÍNEAS HORIZONTALES DE LUZ
        ============================================================ */}

        <motion.div
          className="absolute left-0 right-0 top-[28%] h-px bg-gradient-to-r from-transparent via-cyan-400/[0.25] to-transparent"
          animate={{
            x: ["-8%", "8%", "-8%"],
            opacity: [0.15, 0.8, 0.15],
            scaleX: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-0 right-0 top-[72%] h-px bg-gradient-to-r from-transparent via-blue-400/[0.22] to-transparent"
          animate={{
            x: ["8%", "-8%", "8%"],
            opacity: [0.12, 0.7, 0.12],
            scaleX: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-0 right-0 top-[48%] h-px bg-gradient-to-r from-transparent via-cyan-300/[0.08] to-transparent"
          animate={{
            x: ["-12%", "12%", "-12%"],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================================================
            GLOWS LATERALES
        ============================================================ */}

        <motion.div
          className="absolute left-[-12%] top-[42%] h-[500px] w-[300px] rounded-full bg-cyan-500/[0.08] blur-[140px]"
          animate={{
            x: [0, 90, -20, 70, 0],
            y: [0, -60, 40, -30, 0],
            scale: [1, 1.25, 0.9, 1.2, 1],
            opacity: [0.25, 0.7, 0.35, 0.65, 0.25],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[-12%] top-[38%] h-[520px] w-[320px] rounded-full bg-blue-600/[0.08] blur-[145px]"
          animate={{
            x: [0, -100, 20, -70, 0],
            y: [0, 50, -45, 35, 0],
            scale: [1, 1.2, 0.88, 1.18, 1],
            opacity: [0.25, 0.7, 0.35, 0.65, 0.25],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================================================
            LÍNEAS VERTICALES
        ============================================================ */}

        <motion.div
          className="absolute left-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/[0.07] to-transparent"
          animate={{
            x: [0, 40, -20, 30, 0],
            opacity: [0.2, 0.7, 0.25, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/[0.07] to-transparent"
          animate={{
            x: [0, -40, 20, -30, 0],
            opacity: [0.2, 0.65, 0.25, 0.6, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================================================
            PARTÍCULAS
        ============================================================ */}

        {Array.from({ length: 30 }).map((_, index) => (
          <motion.span
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
            }}
            animate={{
              x: [
                0,
                (index % 2 === 0 ? 1 : -1) * (10 + (index % 5) * 8),
                0,
              ],
              y: [
                0,
                -(15 + (index % 6) * 7),
                5,
                0,
              ],
              opacity: [0.08, 0.65, 0.18, 0.08],
              scale: [0.7, 1.5, 0.9, 0.7],
            }}
            transition={{
              duration: 4 + (index % 6),
              delay: index * 0.15,
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
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl"
          >
            Tecnología con propósito.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-5 max-w-xl text-[17px] leading-7 text-zinc-400"
          >
            Construimos experiencias digitales donde el diseño, el
            rendimiento y la tecnología trabajan juntos.
          </motion.p>
        </div>

        {/* ============================================================
            CARDS
        ============================================================ */}

        <div className="relative mt-12">
          {/* PERÍMETRO LED */}

          <motion.div
            className="pointer-events-none absolute inset-0 z-30 rounded-2xl border-2 border-cyan-400/[0.30] shadow-[0_0_12px_rgba(34,211,238,0.18),0_0_35px_rgba(14,165,233,0.08),inset_0_0_14px_rgba(14,165,233,0.05)]"
            animate={{
              opacity: [0.55, 1, 0.6, 0.9, 0.55],
              boxShadow: [
                "0 0 12px rgba(34,211,238,0.16), 0 0 30px rgba(14,165,233,0.05), inset 0 0 12px rgba(14,165,233,0.04)",
                "0 0 18px rgba(34,211,238,0.28), 0 0 45px rgba(14,165,233,0.10), inset 0 0 18px rgba(14,165,233,0.07)",
                "0 0 12px rgba(34,211,238,0.16), 0 0 30px rgba(14,165,233,0.05), inset 0 0 12px rgba(14,165,233,0.04)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

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

                  <motion.div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.04] blur-3xl"
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.35, 0.75, 0.35],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                  />

                  {/* Número */}

                  <div className="relative flex items-start justify-between">
                    <span className="text-[11px] font-medium tracking-[0.2em] text-cyan-400/45">
                      {item.number}
                    </span>

                    <motion.div
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-cyan-300/60"
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

                  {/* CONTENIDO */}

                  <div className="relative mt-16">
                    <h3 className="text-lg font-medium tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                  {/* LÍNEA INFERIOR */}

                  <div className="absolute bottom-0 left-7 right-7 h-px overflow-hidden bg-white/[0.05]">
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