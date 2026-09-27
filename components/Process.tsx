"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Compass,
  Layers3,
  Code2,
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
      className="relative isolate overflow-hidden border-y border-[#3D321C]/70 bg-[#080705] py-20 lg:py-24"
    >
      {/* ========================================================= */}
      {/* FONDO BASE                                                */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#080705]" />

      {/* ========================================================= */}
      {/* GRID PRINCIPAL ESTÁTICO                                   */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,158,48,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(217,158,48,0.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 88%)",
        }}
      />

      {/* ========================================================= */}
      {/* GRID SECUNDARIO ESTÁTICO                                  */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,183,65,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(245,183,65,0.055) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 15%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 15%, transparent 82%)",
        }}
      />

      {/* ========================================================= */}
      {/* LÍNEAS DIAGONALES ESTÁTICAS                               */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 49.5%, rgba(217,158,48,0.08) 50%, transparent 50.5%)",
          backgroundSize: "160px 160px",
          maskImage:
            "radial-gradient(ellipse 85% 80% at 50% 50%, black 15%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 80% at 50% 50%, black 15%, transparent 85%)",
        }}
      />

      {/* ========================================================= */}
      {/* GLOW SUPERIOR ESTÁTICO                                    */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-[-22%] -z-30 h-[500px] w-[1050px] -translate-x-1/2 rotate-[-8deg] rounded-full blur-[90px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(120,78,15,0.12) 15%, rgba(180,120,25,0.22) 30%, rgba(245,183,65,0.16) 48%, rgba(217,158,48,0.22) 62%, rgba(150,95,15,0.12) 78%, transparent 100%)",
        }}
      />

      {/* ========================================================= */}
      {/* GLOW INFERIOR ESTÁTICO                                    */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute bottom-[-28%] left-1/2 -z-30 h-[460px] w-[950px] -translate-x-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(120,78,15,0.10) 15%, rgba(180,120,25,0.18) 32%, rgba(245,183,65,0.12) 50%, rgba(170,105,18,0.20) 68%, rgba(90,55,10,0.10) 85%, transparent 100%)",
        }}
      />

      {/* ========================================================= */}
      {/* GLOW CENTRAL ESTÁTICO                                     */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-30 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,183,65,0.14) 0%, rgba(217,158,48,0.09) 28%, rgba(160,100,20,0.05) 48%, transparent 72%)",
        }}
      />

      {/* ========================================================= */}
      {/* ONDAS ESTÁTICAS                                           */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[5%] -z-30 h-[230px] w-[850px] -translate-x-1/2 rounded-[50%] border border-[#D99E30]/15 shadow-[0_0_55px_rgba(217,158,48,0.05),inset_0_0_40px_rgba(217,158,48,0.025)]" />

      <div className="pointer-events-none absolute left-1/2 top-[11%] -z-30 h-[140px] w-[600px] -translate-x-1/2 rounded-[50%] border border-[#F5B741]/[0.07]" />

      <div className="pointer-events-none absolute bottom-[4%] left-1/2 -z-30 h-[210px] w-[820px] -translate-x-1/2 rounded-[50%] border border-[#B87918]/15 shadow-[0_0_55px_rgba(180,120,25,0.04),inset_0_0_40px_rgba(217,158,48,0.025)]" />

      <div className="pointer-events-none absolute bottom-[10%] left-1/2 -z-30 h-[120px] w-[580px] -translate-x-1/2 rounded-[50%] border border-[#F5B741]/[0.06]" />

      {/* ========================================================= */}
      {/* LÍNEAS DE LUZ ESTÁTICAS                                   */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[28%] -z-20 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F5B741]/25 to-transparent" />

      <div className="pointer-events-none absolute bottom-[27%] left-1/2 -z-20 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D99E30]/20 to-transparent" />

      {/* ========================================================= */}
      {/* GLOWS LATERALES ESTÁTICOS                                 */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute -left-[220px] top-[18%] -z-20 h-[500px] w-[500px] rounded-full bg-[#C68A20]/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute -right-[220px] bottom-[8%] -z-20 h-[480px] w-[480px] rounded-full bg-[#9A6414]/[0.09] blur-[160px]" />

      {/* ========================================================= */}
      {/* LÍNEAS VERTICALES ESTÁTICAS                               */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-[12%] top-[-10%] -z-20 h-[120%] w-px bg-gradient-to-b from-transparent via-[#D99E30]/15 to-transparent" />

      <div className="pointer-events-none absolute right-[14%] top-[-10%] -z-20 h-[120%] w-px bg-gradient-to-b from-transparent via-[#F5B741]/12 to-transparent" />

      {/* ========================================================= */}
      {/* CONTENIDO                                                 */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 28, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="h-px bg-[#D99E30]/70"
            />

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#E2AC3B]">
              Nuestro proceso
            </p>

            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 28, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="h-px bg-[#D99E30]/70"
            />
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 22,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl"
          >
            De una idea a una
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              experiencia digital.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-zinc-400"
          >
            Trabajamos de forma estructurada para convertir objetivos de
            negocio en productos digitales claros, rápidos y efectivos.
          </motion.p>
        </motion.div>

        {/* ========================================================= */}
        {/* PROCESS                                                  */}
        {/* ========================================================= */}

        <div className="relative mt-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                    filter: "blur(6px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
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
                  className="group relative"
                >
                  <div className="relative h-full rounded-2xl">
                    {/* BORDE */}

                    <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl border-2 border-[#D99E30]/25 shadow-[0_0_14px_rgba(217,158,48,0.08),0_0_35px_rgba(180,120,25,0.04),inset_0_0_14px_rgba(217,158,48,0.03)] transition-all duration-500 group-hover:border-[#D99E30]/40 group-hover:shadow-[0_0_20px_rgba(217,158,48,0.12)]" />

                    <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090807]/90 transition-all duration-500 group-hover:border-[#D99E30]/30 group-hover:bg-[#0D0B08]">
                      {/* GLOW ESTÁTICO DE TARJETA */}

                      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#D99E30]/[0.045] blur-[90px]" />

                      {/* EFECTO DE LUZ EN HOVER */}

                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(circle at 85% 15%, rgba(217,158,48,0.07), transparent 30%)",
                        }}
                      />

                      {/* NUMBER */}

                      <span className="pointer-events-none absolute -bottom-7 right-3 text-[100px] font-bold leading-none tracking-[-0.08em] text-white/[0.02] transition-all duration-700 group-hover:text-[#D99E30]/[0.055]">
                        {step.number}
                      </span>

                      <div className="relative flex h-full flex-col">
                        {/* CONTENT */}

                        <div className="flex flex-1 flex-col p-6 md:p-7">
                          <div className="mb-5 flex items-center gap-3">
                            <motion.div
                              whileHover={{
                                rotate: 5,
                                scale: 1.08,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D99E30]/20 bg-[#D99E30]/[0.07] text-zinc-400 transition-all duration-500 group-hover:border-[#D99E30]/40 group-hover:bg-[#D99E30]/10 group-hover:text-[#E2AC3B]"
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

                          {/* VISUAL */}

                          <div className="mt-6 flex flex-1 items-center justify-center">
                            {index === 0 && (
                              <div className="relative flex h-20 w-20 items-center justify-center">
                                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D99E30]/30 bg-[#D99E30]/10 shadow-[0_0_35px_rgba(217,158,48,0.10)]">
                                  <Compass
                                    size={22}
                                    className="text-[#E2AC3B]"
                                  />
                                </div>

                                {[0, 1, 2, 3].map((node) => (
                                  <div
                                    key={node}
                                    className="absolute h-2.5 w-2.5 rounded-full bg-[#D99E30]/50"
                                    style={{
                                      transform: `rotate(${node * 90}deg) translateY(-38px)`,
                                    }}
                                  />
                                ))}
                              </div>
                            )}

                            {index === 1 && (
                              <div className="relative h-28 w-40 rounded-xl border border-white/[0.1] bg-[#0D0B08] p-3 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                                <div className="flex gap-1">
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                </div>

                                <div className="mt-3 flex gap-2">
                                  <div className="h-16 w-10 rounded-lg bg-[#D99E30]/15" />

                                  <div className="flex flex-1 flex-col gap-2">
                                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                                    <div className="h-2 w-3/5 rounded-full bg-white/[0.06]" />

                                    <div className="mt-1 h-8 rounded-lg border border-[#D99E30]/20 bg-[#D99E30]/[0.06]" />
                                  </div>
                                </div>
                              </div>
                            )}

                            {index === 2 && (
                              <div className="w-40 rounded-xl border border-white/[0.08] bg-[#0B0A08] p-4 font-mono text-[9px] leading-4 text-zinc-600 shadow-2xl">
                                <div className="mb-2 flex gap-1">
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                </div>

                                <div className="space-y-0.5">
                                  <p>
                                    <span className="text-[#D99E30]/80">
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
                                </div>

                                <div className="mt-3 flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#D99E30]" />

                                  <span className="text-zinc-700">
                                    ready.
                                  </span>
                                </div>
                              </div>
                            )}

                            {index === 3 && (
                              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D99E30]/35 bg-[#D99E30]/10 shadow-[0_0_40px_rgba(217,158,48,0.10)] transition-transform duration-500 group-hover:-translate-y-1">
                                <Rocket
                                  size={24}
                                  className="text-[#E2AC3B]"
                                />
                              </div>
                            )}
                          </div>

                          {/* BARRA */}

                          <div className="mt-6 h-px w-full overflow-hidden bg-white/[0.06]">
                            <motion.div
                              initial={{
                                width: 0,
                              }}
                              whileInView={{
                                width: "30%",
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.8,
                                delay: index * 0.1 + 0.25,
                              }}
                              className="h-full bg-gradient-to-r from-[#8A5A12] via-[#D99E30] to-[#F5C35B] transition-all duration-700 group-hover:w-full"
                            />
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

                          <ArrowUpRight
                            size={16}
                            className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM                                                   */}
        {/* ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
          }}
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row"
        >
          <p className="text-sm text-zinc-600">
            Un proceso claro. Un resultado sólido.
          </p>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D99E30] shadow-[0_0_7px_rgba(217,158,48,0.45)]" />

            De la idea al lanzamiento
          </div>
        </motion.div>
      </div>
    </section>
  );
}