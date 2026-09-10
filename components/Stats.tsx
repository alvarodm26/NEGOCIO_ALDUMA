
"use client";

import { motion } from "motion/react";
import {
  Zap,
  Smartphone,
  Code2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const strengths = [
  {
    number: "01",
    icon: Zap,
    title: "Rendimiento",
    description:
      "Construimos sitios rápidos y optimizados para ofrecer una experiencia fluida desde el primer segundo.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Responsive",
    description:
      "Cada experiencia se adapta cuidadosamente a móviles, tablets y escritorio.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Tecnología moderna",
    description:
      "Utilizamos herramientas actuales para crear productos mantenibles, escalables y preparados para crecer.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Atención al detalle",
    description:
      "Cuidamos tipografía, espaciado, interacción y movimiento para conseguir una experiencia consistente.",
  },
];

export default function Stats() {
  return (
    <section
      id="enfoque"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] py-32 md:py-40"
    >
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* CENTER GLOW */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[140px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* DECORATIVE ORBS */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-500/[0.04] blur-[100px]"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-fuchsia-500/[0.04] blur-[100px]"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* EYEBROW */}
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-violet-500/60" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">
              El enfoque ALDUMA
            </p>

            <span className="h-px w-8 bg-violet-500/60" />
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            No solo hacemos sitios web.
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              Creamos experiencias.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
            Cada decisión de diseño y desarrollo tiene un propósito:
            conseguir una experiencia digital clara, rápida y memorable.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <motion.article
                key={strength.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[360px] overflow-hidden bg-[#090909] p-8 transition-all duration-500 md:p-10"
              >
                {/* HOVER GLOW */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/0 blur-[80px] transition-all duration-700 group-hover:bg-violet-600/20" />

                {/* HOVER BORDER */}
                <div className="pointer-events-none absolute inset-0 rounded-none border border-transparent transition-all duration-500 group-hover:border-violet-500/20" />

                {/* LARGE BACKGROUND NUMBER */}
                <motion.span
                  className="pointer-events-none absolute -bottom-8 -right-2 text-[130px] font-bold leading-none tracking-[-0.08em] text-white/[0.025] transition-all duration-700 group-hover:text-violet-500/[0.07]"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  {strength.number}
                </motion.span>

                {/* TOP */}
                <div className="relative z-10 flex items-center justify-between">
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 15,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] shadow-lg shadow-black/20 transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-violet-500/10"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-zinc-400 transition-colors duration-500 group-hover:text-violet-400"
                    />
                  </motion.div>

                  {/* NUMBER */}
                  <span className="font-mono text-xs tracking-[0.2em] text-zinc-600 transition-colors duration-500 group-hover:text-violet-400/60">
                    / {strength.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-16">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white transition-transform duration-500 group-hover:translate-x-1">
                    {strength.title}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                    {strength.description}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between md:bottom-10 md:left-10 md:right-10">
                  {/* LINE */}
                  <div className="relative h-px flex-1 overflow-hidden bg-white/[0.08]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "35%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: index * 0.1 + 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute inset-y-0 left-0 bg-violet-500/70 transition-all duration-700 group-hover:w-full"
                    />
                  </div>

                  {/* ARROW */}
                  <motion.div
                    initial={{
                      opacity: 0.25,
                      x: -4,
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                    className="ml-4 text-zinc-600 transition-colors duration-500 group-hover:text-violet-400"
                  >
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-7 sm:flex-row"
        >
          <p className="text-sm text-zinc-600">
            Diseño. Desarrollo. Experiencia.
          </p>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
            Construido para crecer
          </div>
        </motion.div>
      </div>
    </section>
  );
}

