
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
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] py-32 md:py-40"
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* CENTRAL GLOW */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[140px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 lg:grid-cols-2"
        >
          <div>

            {/* EYEBROW */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-500/60" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">
                Nuestro proceso
              </p>
            </div>

            {/* TITLE */}

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              De una idea a una
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                experiencia digital.
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}

          <div className="flex items-end lg:justify-end">
            <p className="max-w-lg text-base leading-7 text-zinc-500 md:text-lg md:leading-8">
              Trabajamos de forma estructurada para convertir objetivos de
              negocio en productos digitales claros, rápidos y efectivos.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <div className="relative mt-24 md:mt-32">

          {/* TIMELINE LINE */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "top",
            }}
            className="absolute left-[24px] top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/50 via-white/[0.08] to-transparent md:block"
          />

          <div className="space-y-6 md:space-y-8">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#090909] transition-all duration-500 group-hover:border-violet-500/20 group-hover:bg-[#0b0b0b]">

                    {/* HOVER GLOW */}

                    <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-violet-600/0 blur-[100px] transition-all duration-700 group-hover:bg-violet-600/[0.12]" />

                    {/* BACKGROUND NUMBER */}

                    <span className="pointer-events-none absolute -bottom-12 right-5 text-[150px] font-bold leading-none tracking-[-0.09em] text-white/[0.02] transition-all duration-700 group-hover:text-violet-500/[0.055]">
                      {step.number}
                    </span>

                    <div className="relative grid md:grid-cols-[80px_1fr_280px]">

                      {/* =================================================
                          NUMBER / TIMELINE
                      ================================================= */}

                      <div className="relative hidden items-start justify-center pt-10 md:flex">

                        {/* NODE */}

                        <motion.div
                          whileHover={{
                            scale: 1.12,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                          }}
                          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-[#090909] transition-all duration-500 group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
                        >
                          <motion.div
                            className="h-2 w-2 rounded-full bg-violet-500"
                            animate={{
                              scale: [1, 1.25, 1],
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: index * 0.4,
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* =================================================
                          MAIN CONTENT
                      ================================================= */}

                      <div className="p-7 md:p-10">

                        {/* MOBILE NUMBER */}

                        <div className="mb-6 flex items-center gap-3 md:hidden">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-medium text-violet-400">
                            {step.number}
                          </span>

                          <span className="h-px flex-1 bg-white/[0.06]" />
                        </div>

                        {/* ICON + LABEL */}

                        <div className="mb-7 flex items-center gap-4">

                          <motion.div
                            whileHover={{
                              rotate: 5,
                              scale: 1.08,
                            }}
                            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] text-zinc-400 transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-violet-400"
                          >
                            <Icon
                              size={20}
                              strokeWidth={1.6}
                            />
                          </motion.div>

                          <span className="font-mono text-xs tracking-[0.2em] text-zinc-600">
                            STEP {step.number}
                          </span>
                        </div>

                        {/* TITLE */}

                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                          {step.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400 md:text-base">
                          {step.description}
                        </p>

                        {/* BOTTOM LINE */}

                        <div className="mt-8 h-px w-full overflow-hidden bg-white/[0.06]">
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: "35%",
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1,
                              delay: index * 0.15 + 0.4,
                            }}
                            className="h-full bg-violet-500/60 transition-all duration-700 group-hover:w-full"
                          />
                        </div>
                      </div>

                      {/* =================================================
                          VISUAL
                      ================================================= */}

                      <div className="relative hidden min-h-[270px] overflow-hidden border-l border-white/[0.06] bg-white/[0.015] md:block">

                        {/* =============================================
                            DISCOVERY
                        ============================================= */}

                        {index === 0 && (
                          <div className="absolute inset-0 flex items-center justify-center">

                            {/* CONNECTIONS */}

                            <div className="absolute h-px w-36 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent rotate-45" />

                            <div className="absolute h-px w-36 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent -rotate-45" />

                            <div className="absolute h-px w-36 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

                            {/* CENTER */}

                            <motion.div
                              animate={{
                                scale: [1, 1.08, 1],
                                boxShadow: [
                                  "0 0 0 rgba(124,58,237,0)",
                                  "0 0 35px rgba(124,58,237,0.18)",
                                  "0 0 0 rgba(124,58,237,0)",
                                ],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                              }}
                              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10"
                            >
                              <Compass
                                size={24}
                                className="text-violet-400"
                              />
                            </motion.div>

                            {/* NODES */}

                            {[0, 1, 2, 3].map((node) => (
                              <motion.div
                                key={node}
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: node * 0.35,
                                }}
                                className="absolute h-3 w-3 rounded-full bg-violet-400/60"
                                style={{
                                  transform: `rotate(${node * 90}deg) translateY(-70px)`,
                                }}
                              />
                            ))}
                          </div>
                        )}

                        {/* =============================================
                            DESIGN
                        ============================================= */}

                        {index === 1 && (
                          <div className="absolute inset-0 flex items-center justify-center">

                            <motion.div
                              animate={{
                                y: [0, -4, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="relative h-40 w-52 rounded-xl border border-white/[0.1] bg-[#0d0d0d] p-3 shadow-2xl"
                            >
                              {/* HEADER */}

                              <div className="flex gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                              </div>

                              {/* CONTENT */}

                              <div className="mt-4 flex gap-2">

                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "35%" }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    delay: 0.3,
                                  }}
                                  className="h-24 rounded-lg bg-violet-500/15"
                                />

                                <div className="flex flex-1 flex-col gap-2">
                                  <div className="h-2 w-4/5 rounded-full bg-white/10" />
                                  <div className="h-2 w-3/5 rounded-full bg-white/[0.06]" />

                                  <motion.div
                                    animate={{
                                      opacity: [0.3, 0.8, 0.3],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                    }}
                                    className="mt-3 h-12 rounded-lg border border-violet-500/20 bg-violet-500/[0.05]"
                                  />
                                </div>
                              </div>

                              {/* SCAN */}

                              <motion.div
                                animate={{
                                  x: [0, 185, 0],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="absolute left-2 top-8 h-px w-8 bg-violet-400/70"
                              />
                            </motion.div>
                          </div>
                        )}

                        {/* =============================================
                            DEVELOPMENT
                        ============================================= */}

                        {index === 2 && (
                          <div className="absolute inset-0 flex items-center justify-center">

                            <div className="w-52 rounded-xl border border-white/[0.08] bg-[#0b0b0b] p-5 font-mono text-[10px] leading-5 text-zinc-600 shadow-2xl">

                              <div className="mb-3 flex gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                              </div>

                              <motion.div
                                animate={{
                                  opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                }}
                                className="space-y-1"
                              >
                                <p>
                                  <span className="text-violet-400/70">
                                    const
                                  </span>{" "}
                                  website =
                                </p>

                                <p className="pl-3">
                                  {"{"} modern: true,
                                </p>

                                <p className="pl-3">
                                  responsive: true,
                                </p>

                                <p className="pl-3">
                                  optimized: true
                                </p>

                                <p>{"}"}</p>
                              </motion.div>

                              <div className="mt-4 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />

                                <span className="text-zinc-700">
                                  compiling...
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* =============================================
                            LAUNCH
                        ============================================= */}

                        {index === 3 && (
                          <div className="absolute inset-0 flex items-center justify-center">

                            <div className="relative">

                              {/* RINGS */}

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

                              {/* ICON */}

                              <motion.div
                                animate={{
                                  y: [0, -7, 0],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="relative flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 shadow-[0_0_50px_rgba(124,58,237,0.12)]"
                              >
                                <Rocket
                                  size={28}
                                  className="text-violet-400"
                                />
                              </motion.div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* =================================================
                        MOBILE VISUAL
                    ================================================= */}

                    <div className="border-t border-white/[0.06] px-7 py-6 md:hidden">

                      <div className="flex items-center justify-between">

                        <span className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                          {index === 0 && "Analizamos"}
                          {index === 1 && "Diseñamos"}
                          {index === 2 && "Construimos"}
                          {index === 3 && "Publicamos"}
                        </span>

                        <motion.div
                          animate={{
                            x: [0, 4, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="text-zinc-600"
                        >
                          <ArrowUpRight size={17} />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      CHECKPOINT
                  ================================================= */}

                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.15 + 0.5,
                      }}
                      className="hidden h-8 items-center justify-center md:flex"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/[0.06] bg-[#050505]">
                        <Check
                          size={10}
                          className="text-zinc-700"
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

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
          }}
          className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-7 sm:flex-row"
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

