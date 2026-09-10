"use client";

import { motion } from "motion/react";
import { ArrowDownRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-24">
      {/* GLOW DE FONDO */}
      <motion.div
        className="pointer-events-none absolute left-[65%] top-[20%] -z-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GRID / CONTENIDO */}
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10">
        
        {/* ================= CONTENIDO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
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
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#2A2A2E] bg-[#18181B]/70 px-4 py-2 text-sm text-[#A1A1AA] backdrop-blur-xl"
          >
            <Sparkles
              size={15}
              className="text-[#7C3AED]"
            />

            Desarrollo web para empresas
          </motion.div>

          {/* TITULO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
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
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-[#A1A1AA]"
          >
            Creamos experiencias digitales modernas, rápidas y optimizadas
            para ayudar a empresas a fortalecer su presencia digital y
            generar nuevas oportunidades de negocio.
          </motion.p>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#contacto"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 45px rgba(124,58,237,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-7 py-3.5 text-center text-sm font-medium"
            >
              Solicitar propuesta

              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </motion.a>

            <motion.a
              href="#proyectos"
              whileHover={{
                scale: 1.03,
                borderColor: "#52525B",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full border border-[#2A2A2E] px-7 py-3.5 text-center text-sm font-medium transition-colors hover:bg-[#18181B]"
            >
              Ver proyectos
            </motion.a>
          </motion.div>

          {/* MINI TEXTO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-12 flex items-center gap-4 text-sm text-[#71717A]"
          >
            <span className="h-px w-10 bg-[#2A2A2E]" />

            Diseño · Desarrollo · Optimización
          </motion.div>
        </motion.div>


        {/* ================= MOCKUP ================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.95,
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
          {/* GLOW */}
          <motion.div
            className="absolute -inset-10 -z-10 rounded-full bg-violet-600/10 blur-[90px]"
            animate={{
              opacity: [0.4, 0.7, 0.4],
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
              y: [-8, 8, -8],
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
              className="relative rounded-[2rem] border border-[#2A2A2E] bg-[#18181B]/80 p-2 shadow-2xl backdrop-blur-xl"
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-[#2A2A2E] bg-[#0A0A0A]">
                
                {/* BARRA DEL NAVEGADOR */}
                <div className="flex items-center gap-2 border-b border-[#2A2A2E] px-5 py-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

                  <div className="mx-auto h-5 w-40 rounded-full bg-[#18181B]" />
                </div>

                {/* CONTENIDO */}
                <div className="p-8">

                  {/* TOP */}
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-20 rounded bg-[#2A2A2E]" />

                    <motion.div
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="h-8 w-8 rounded-full bg-violet-500/20"
                    />
                  </div>

                  {/* HERO MOCKUP */}
                  <div className="mt-14 max-w-sm">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        delay: 0.8,
                        duration: 0.8,
                      }}
                      className="h-8 rounded-lg bg-[#2A2A2E]"
                    />

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{
                        delay: 1,
                        duration: 0.7,
                      }}
                      className="mt-3 h-8 rounded-lg bg-[#18181B]"
                    />

                    <div className="mt-5 h-3 w-full rounded bg-[#18181B]" />

                    <div className="mt-2 h-3 w-4/5 rounded bg-[#18181B]" />

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-7 h-10 w-32 rounded-full bg-[#7C3AED]"
                    />
                  </div>

                  {/* CARDS */}
                  <div className="mt-14 grid grid-cols-3 gap-3">

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="h-28 rounded-xl border border-[#2A2A2E] bg-[#18181B]"
                    />

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="h-28 rounded-xl border border-[#2A2A2E] bg-[#18181B]"
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
                      className="h-28 rounded-xl border border-violet-500/20 bg-violet-500/10"
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