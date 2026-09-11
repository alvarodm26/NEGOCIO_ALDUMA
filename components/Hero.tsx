
"use client";

import { motion } from "motion/react";
import { ArrowDownRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#0A0A0A] pt-20">
      {/* ================= FONDO DE TOROS ================= */}

      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/fondo.png')",
        }}
      />

      {/* CAPA OSCURA */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0A0A0A]/65" />

      {/* DEGRADADO PARA FUNDIR CON EL RESTO DE LA PÁGINA */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0A0A]/10 via-transparent to-[#0A0A0A]" />

      {/* ================= GLOW DE FONDO ================= */}

      <motion.div
        className="pointer-events-none absolute left-[65%] top-[20%] -z-10 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[140px]"
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

      {/* ================= GRID / CONTENIDO ================= */}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-16">
        
        {/* ================= CONTENIDO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* BADGE */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2A2A2E] bg-[#18181B]/80 px-3.5 py-1.5 text-xs text-[#A1A1AA] backdrop-blur-xl"
          >
            <Sparkles
              size={14}
              className="text-[#7C3AED]"
            />

            Desarrollo web para empresas
          </motion.div>

          {/* TITULO */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[56px]"
          >
            Diseñamos sitios web que{" "}

            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              transforman visitantes en clientes.
            </span>
          </motion.h1>

          {/* DESCRIPCIÓN */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            className="mt-6 max-w-xl text-[17px] leading-7 text-[#A1A1AA]"
          >
            Creamos experiencias digitales modernas, rápidas y optimizadas
            para ayudar a empresas a fortalecer su presencia digital y
            generar nuevas oportunidades de negocio.
          </motion.p>

          {/* BOTONES */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#contacto"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(124,58,237,0.3)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-6 py-3 text-center text-sm font-medium"
            >
              Solicitar propuesta

              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </motion.a>

            <motion.a
              href="#proyectos"
              whileHover={{
                scale: 1.02,
                borderColor: "#52525B",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center justify-center rounded-full border border-[#2A2A2E] bg-[#0A0A0A]/40 px-6 py-3 text-center text-sm font-medium backdrop-blur-sm transition-colors hover:bg-[#18181B]/80"
            >
              Ver proyectos
            </motion.a>
          </motion.div>

          {/* MINI TEXTO */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.8,
            }}
            className="mt-8 flex items-center gap-3 text-xs text-[#71717A]"
          >
            <span className="h-px w-8 bg-[#2A2A2E]" />

            Diseño · Desarrollo · Optimización
          </motion.div>
        </motion.div>

        {/* ================= MOCKUP ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* GLOW DEL MOCKUP */}

          <motion.div
            className="absolute -inset-10 -z-10 rounded-full bg-violet-600/10 blur-[90px]"
            animate={{
              opacity: [0.35, 0.6, 0.35],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* MOCKUP FLOTANTE */}

          <motion.div
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              whileHover={{
                rotateX: 2,
                rotateY: -2,
                scale: 1.015,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="relative rounded-[1.75rem] border border-[#2A2A2E] bg-[#18181B]/80 p-2 shadow-2xl backdrop-blur-xl"
            >
              <div className="overflow-hidden rounded-[1.35rem] border border-[#2A2A2E] bg-[#0A0A0A]">

                {/* BARRA DEL NAVEGADOR */}

                <div className="flex items-center gap-2 border-b border-[#2A2A2E] px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />

                  <div className="mx-auto h-4 w-32 rounded-full bg-[#18181B]" />
                </div>

                {/* CONTENIDO */}

                <div className="p-6">

                  {/* TOP */}

                  <div className="flex items-center justify-between">
                    <div className="h-3.5 w-20 rounded bg-[#2A2A2E]" />

                    <motion.div
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="h-7 w-7 rounded-full bg-violet-500/20"
                    />
                  </div>

                  {/* HERO MOCKUP */}

                  <div className="mt-10 max-w-sm">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        delay: 0.8,
                        duration: 0.8,
                      }}
                      className="h-7 rounded-lg bg-[#2A2A2E]"
                    />

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{
                        delay: 1,
                        duration: 0.7,
                      }}
                      className="mt-2.5 h-7 rounded-lg bg-[#18181B]"
                    />

                    <div className="mt-4 h-2.5 w-full rounded bg-[#18181B]" />

                    <div className="mt-2 h-2.5 w-4/5 rounded bg-[#18181B]" />

                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="mt-6 h-9 w-28 rounded-full bg-[#7C3AED]"
                    />
                  </div>

                  {/* CARDS */}

                  <div className="mt-10 grid grid-cols-3 gap-3">

                    <motion.div
                      whileHover={{
                        y: -5,
                      }}
                      className="h-24 rounded-xl border border-[#2A2A2E] bg-[#18181B]"
                    />

                    <motion.div
                      whileHover={{
                        y: -5,
                      }}
                      className="h-24 rounded-xl border border-[#2A2A2E] bg-[#18181B]"
                    />

                    <motion.div
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.03,
                      }}
                      className="h-24 rounded-xl border border-violet-500/20 bg-violet-500/10"
                    />

                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
