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
      className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#0A0A0A] py-20 lg:py-24"
    >
      {/* FONDO — MISMO FORMATO VISUAL QUE HERO / PROJECTS */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/images/fondo.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0A0A0A]/80" />

      {/* INTEGRACIÓN DEL FONDO */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0A0A]/20 via-transparent to-[#0A0A0A]" />

      {/* GRID SUTIL */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* CENTER GLOW */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.07] blur-[130px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* DECORATIVE GLOWS */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-64 w-64 rounded-full bg-violet-500/[0.04] blur-[100px]"
        animate={{ y: [0, 25, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-64 w-64 rounded-full bg-fuchsia-500/[0.035] blur-[100px]"
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}
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
          {/* EYEBROW */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-violet-500/60" />

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              El enfoque ALDUMA
            </p>

            <span className="h-px w-7 bg-violet-500/60" />
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            No solo hacemos sitios web.
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              Creamos experiencias.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-zinc-400">
            Cada decisión de diseño y desarrollo tiene un propósito:
            conseguir una experiencia digital clara, rápida y memorable.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <motion.article
                key={strength.number}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative min-h-[290px] overflow-hidden bg-[#090909]/90 p-6 backdrop-blur-sm transition-all duration-500 lg:p-7"
              >
                {/* HOVER GLOW */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/0 blur-[70px] transition-all duration-700 group-hover:bg-violet-600/15" />

                {/* HOVER BORDER */}
                <div className="pointer-events-none absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-violet-500/20" />

                {/* LARGE NUMBER */}
                <span className="pointer-events-none absolute -bottom-5 -right-1 text-[100px] font-bold leading-none tracking-[-0.08em] text-white/[0.025] transition-all duration-700 group-hover:text-violet-500/[0.06]">
                  {strength.number}
                </span>

                {/* TOP */}
                <div className="relative z-10 flex items-center justify-between">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 15,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-violet-500/10"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                      className="text-zinc-400 transition-colors duration-500 group-hover:text-violet-400"
                    />
                  </motion.div>

                  <span className="font-mono text-xs tracking-[0.16em] text-zinc-600 transition-colors duration-500 group-hover:text-violet-400/60">
                    / {strength.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-10">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white transition-transform duration-500 group-hover:translate-x-1">
                    {strength.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                    {strength.description}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between lg:left-7 lg:right-7">
                  <div className="relative h-px flex-1 overflow-hidden bg-white/[0.08]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "35%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.08 + 0.25,
                        ease: "easeOut",
                      }}
                      className="absolute inset-y-0 left-0 bg-violet-500/70 transition-all duration-700 group-hover:w-full"
                    />
                  </div>

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
                      size={16}
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
            y: 20,
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
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row"
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