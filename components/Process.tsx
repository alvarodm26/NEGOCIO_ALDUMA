"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Layers3,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, objetivos y necesidades para definir qué debe lograr tu sitio web.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creamos una experiencia visual moderna, clara y alineada con la identidad de tu empresa.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Convertimos el diseño en una web rápida, responsive y construida con tecnologías modernas.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Lanzamiento",
    description:
      "Probamos, optimizamos y dejamos tu sitio preparado para ofrecer una experiencia sólida.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="nosotros"
      className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#0A0A0A] py-20 lg:py-24"
    >
      {/* FONDO — MISMO FORMATO QUE STATS */}
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
          {/* EYEBROW */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-violet-500/60" />

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              Nuestro proceso
            </p>

            <span className="h-px w-7 bg-violet-500/60" />
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            De una idea a una
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              experiencia digital.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-zinc-400">
            Trabajamos de forma estructurada para convertir objetivos de
            negocio en productos digitales claros, rápidos y efectivos.
          </p>
        </motion.div>

        {/* PROCESS */}
        <div className="relative mt-12">
          {/* TIMELINE */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "top" }}
            className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/50 via-white/[0.08] to-transparent md:block"
          />

          <div className="space-y-4 md:space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090909]/90 transition-all duration-500 group-hover:border-violet-500/20 group-hover:bg-[#0b0b0b]">
                    {/* HOVER GLOW */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-600/0 blur-[90px] transition-all duration-700 group-hover:bg-violet-600/[0.12]" />

                    {/* NUMBER */}
                    <span className="pointer-events-none absolute -bottom-7 right-3 text-[100px] font-bold leading-none tracking-[-0.08em] text-white/[0.02] transition-all duration-700 group-hover:text-violet-500/[0.055]">
                      {step.number}
                    </span>

                    <div className="relative grid md:grid-cols-[64px_1fr_220px]">
                      {/* NODE */}
                      <div className="relative hidden items-start justify-center pt-7 md:flex">
                        <motion.div
                          whileHover={{ scale: 1.12 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                          }}
                          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-[#090909] transition-all duration-500 group-hover:border-violet-500/50 group-hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]"
                        >
                          <motion.div
                            className="h-1.5 w-1.5 rounded-full bg-violet-500"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: index * 0.35,
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-6 md:p-7">
                        <div className="mb-4 flex items-center gap-3">
                          <motion.div
                            whileHover={{
                              rotate: 5,
                              scale: 1.08,
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-400 transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-violet-400"
                          >
                            <Icon size={18} strokeWidth={1.6} />
                          </motion.div>

                          <span className="font-mono text-xs tracking-[0.16em] text-zinc-600">
                            STEP {step.number}
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-white transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
                          {step.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                          {step.description}
                        </p>

                        <div className="mt-5 h-px w-full overflow-hidden bg-white/[0.06]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "30%" }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.1 + 0.25,
                            }}
                            className="h-full bg-violet-500/60 transition-all duration-700 group-hover:w-full"
                          />
                        </div>
                      </div>

                      {/* VISUAL */}
                      <div className="relative hidden min-h-[180px] overflow-hidden border-l border-white/[0.06] bg-white/[0.015] md:block">
                        {index === 0 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{
                                scale: [1, 1.08, 1],
                                rotate: [0, 2, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 shadow-[0_0_35px_rgba(124,58,237,0.12)]"
                            >
                              <Compass
                                size={22}
                                className="text-violet-400"
                              />
                            </motion.div>

                            {[0, 1, 2, 3].map((node) => (
                              <motion.div
                                key={node}
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: node * 0.35,
                                }}
                                className="absolute h-2.5 w-2.5 rounded-full bg-violet-400/60"
                                style={{
                                  transform: `rotate(${node * 90}deg) translateY(-52px)`,
                                }}
                              />
                            ))}
                          </div>
                        )}

                        {index === 1 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ y: [0, -4, 0] }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="relative h-32 w-44 rounded-xl border border-white/[0.1] bg-[#0d0d0d] p-3 shadow-2xl"
                            >
                              <div className="flex gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                              </div>

                              <div className="mt-3 flex gap-2">
                                <div className="h-20 w-12 rounded-lg bg-violet-500/15" />

                                <div className="flex flex-1 flex-col gap-2">
                                  <div className="h-2 w-4/5 rounded-full bg-white/10" />
                                  <div className="h-2 w-3/5 rounded-full bg-white/[0.06]" />

                                  <motion.div
                                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                    }}
                                    className="mt-1 h-9 rounded-lg border border-violet-500/20 bg-violet-500/[0.05]"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        )}

                        {index === 2 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-44 rounded-xl border border-white/[0.08] bg-[#0b0b0b] p-4 font-mono text-[9px] leading-4 text-zinc-600 shadow-2xl">
                              <div className="mb-2 flex gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                              </div>

                              <motion.div
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                }}
                                className="space-y-0.5"
                              >
                                <p>
                                  <span className="text-violet-400/70">
                                    const
                                  </span>{" "}
                                  website =
                                </p>
                                <p className="pl-2">
                                  {"{"} modern: true,
                                </p>
                                <p className="pl-2">
                                  responsive: true,
                                </p>
                                <p className="pl-2">
                                  optimized: true
                                </p>
                                <p>{"}"}</p>
                              </motion.div>

                              <div className="mt-3 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
                                <span className="text-zinc-700">
                                  compiling...
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {index === 3 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                              <motion.div
                                animate={{
                                  scale: [1, 1.35],
                                  opacity: [0.4, 0],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                }}
                                className="absolute inset-0 rounded-full border border-violet-500/30"
                              />

                              <motion.div
                                animate={{
                                  scale: [1, 1.2],
                                  opacity: [0.3, 0],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                                className="absolute inset-0 rounded-full border border-violet-500/20"
                              />

                              <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="relative flex h-16 w-16 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 shadow-[0_0_40px_rgba(124,58,237,0.12)]"
                              >
                                <Rocket
                                  size={24}
                                  className="text-violet-400"
                                />
                              </motion.div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* MOBILE */}
                    <div className="flex items-center justify-between border-t border-white/[0.06] px-6 py-4 md:hidden">
                      <span className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                        {index === 0 && "Analizamos"}
                        {index === 1 && "Diseñamos"}
                        {index === 2 && "Construimos"}
                        {index === 3 && "Publicamos"}
                      </span>

                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="text-zinc-600"
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>
                  </div>

                  {/* CHECKPOINT */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.4,
                      }}
                      className="hidden h-5 items-center justify-center md:flex"
                    >
                      <div className="flex h-4 w-4 items-center justify-center rounded-full border border-white/[0.06] bg-[#0A0A0A]">
                        <Check size={9} className="text-zinc-700" />
                      </div>
                    </motion.div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row"
        >
          <p className="text-sm text-zinc-600">
            Un proceso claro. Un resultado sólido.
          </p>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
            De la idea al lanzamiento
          </div>
        </motion.div>
      </div>
    </section>
  );
}