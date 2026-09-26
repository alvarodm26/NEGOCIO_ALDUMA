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
      className="relative isolate overflow-hidden border-y border-[#3D321C]/70 bg-[#080705] py-20 lg:py-24"
    >
      {/* ========================================================= */}
      {/* FONDO BASE                                                 */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#080705]" />

      {/* ========================================================= */}
      {/* GRID PRINCIPAL ANIMADO                                    */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,158,48,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(217,158,48,0.16) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 88%)",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px",
            "36px 36px",
            "0px 72px",
            "-36px 36px",
            "0px 0px",
          ],
          opacity: [0.25, 0.65, 0.35, 0.7, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================= */}
      {/* GRID SECUNDARIO                                           */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,183,65,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(245,183,65,0.10) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 15%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 15%, transparent 82%)",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px",
            "-70px 70px",
            "-140px 0px",
            "-70px -70px",
            "0px 0px",
          ],
          opacity: [0.15, 0.4, 0.2, 0.45, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ========================================================= */}
      {/* LÍNEAS DIAGONALES                                        */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 49.5%, rgba(217,158,48,0.13) 50%, transparent 50.5%)",
          backgroundSize: "160px 160px",
          maskImage:
            "radial-gradient(ellipse 85% 80% at 50% 50%, black 15%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 80% at 50% 50%, black 15%, transparent 85%)",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px",
            "160px 160px",
            "0px 320px",
          ],
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ========================================================= */}
      {/* AURORA SUPERIOR                                          */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[-22%] -z-30 h-[540px] w-[1100px] -translate-x-1/2 rotate-[-8deg] rounded-full blur-[55px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(120,78,15,0.20) 12%, rgba(180,120,25,0.38) 28%, rgba(245,183,65,0.28) 45%, rgba(217,158,48,0.40) 58%, rgba(150,95,15,0.25) 76%, transparent 100%)",
        }}
        animate={{
          x: ["-12%", "10%", "-5%", "12%", "-12%"],
          y: [0, 55, -30, 35, 0],
          rotate: [-8, -2, -12, -4, -8],
          scaleX: [1, 1.12, 0.92, 1.08, 1],
          scaleY: [1, 1.18, 0.9, 1.12, 1],
          opacity: [0.55, 0.95, 0.65, 1, 0.55],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================= */}
      {/* AURORA INFERIOR                                          */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute bottom-[-28%] left-1/2 -z-30 h-[500px] w-[1000px] -translate-x-1/2 rounded-full blur-[60px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(120,78,15,0.18) 15%, rgba(180,120,25,0.32) 32%, rgba(245,183,65,0.24) 50%, rgba(170,105,18,0.36) 68%, rgba(90,55,10,0.20) 85%, transparent 100%)",
        }}
        animate={{
          x: ["10%", "-12%", "7%", "-5%", "10%"],
          y: [0, -55, 30, -35, 0],
          rotate: [4, -7, 9, -4, 4],
          scaleX: [1, 1.15, 0.9, 1.12, 1],
          scaleY: [1, 0.88, 1.16, 0.92, 1],
          opacity: [0.45, 0.9, 0.55, 0.85, 0.45],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================= */}
      {/* GLOW CENTRAL                                             */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-30 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,183,65,0.30) 0%, rgba(217,158,48,0.20) 25%, rgba(160,100,20,0.14) 45%, rgba(90,55,10,0.08) 60%, transparent 75%)",
        }}
        animate={{
          scale: [0.75, 1.2, 0.85, 1.15, 0.75],
          x: [0, 70, -50, 35, 0],
          y: [0, -45, 40, -20, 0],
          opacity: [0.35, 0.85, 0.45, 0.75, 0.35],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================= */}
      {/* ONDA SUPERIOR                                             */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[5%] -z-30 h-[230px] w-[850px] -translate-x-1/2 rounded-[50%] border border-[#D99E30]/20 shadow-[0_0_70px_rgba(217,158,48,0.10),inset_0_0_50px_rgba(217,158,48,0.05)]"
        animate={{
          rotate: [0, 4, -3, 2, 0],
          scaleX: [1, 1.12, 0.92, 1.08, 1],
          scaleY: [1, 0.9, 1.12, 0.95, 1],
          y: [0, 25, -18, 12, 0],
          opacity: [0.35, 0.8, 0.4, 0.75, 0.35],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ONDA SUPERIOR INTERNA */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[11%] -z-30 h-[140px] w-[600px] -translate-x-1/2 rounded-[50%] border border-[#F5B741]/10"
        animate={{
          rotate: [0, -3, 3, 0],
          scaleX: [1, 0.88, 1.1, 1],
          y: [0, -15, 18, 0],
          opacity: [0.2, 0.6, 0.25, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================= */}
      {/* ONDA INFERIOR                                             */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute bottom-[4%] left-1/2 -z-30 h-[210px] w-[820px] -translate-x-1/2 rounded-[50%] border border-[#B87918]/20 shadow-[0_0_70px_rgba(180,120,25,0.08),inset_0_0_50px_rgba(217,158,48,0.04)]"
        animate={{
          rotate: [0, -4, 3, -2, 0],
          scaleX: [1, 0.9, 1.13, 0.94, 1],
          scaleY: [1, 1.12, 0.9, 1.08, 1],
          y: [0, -25, 20, -10, 0],
          opacity: [0.25, 0.7, 0.35, 0.65, 0.25],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ONDA INFERIOR INTERNA */}

      <motion.div
        className="pointer-events-none absolute bottom-[10%] left-1/2 -z-30 h-[120px] w-[580px] -translate-x-1/2 rounded-[50%] border border-[#F5B741]/10"
        animate={{
          rotate: [0, 3, -3, 0],
          scaleX: [1, 1.12, 0.9, 1],
          y: [0, 15, -18, 0],
          opacity: [0.15, 0.55, 0.2, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================= */}
      {/* LÍNEAS DE LUZ                                            */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[28%] -z-20 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F5B741]/40 to-transparent shadow-[0_0_12px_rgba(245,183,65,0.25)]"
        animate={{
          scaleX: [0.5, 1, 0.7, 1, 0.5],
          opacity: [0.15, 0.8, 0.25, 0.65, 0.15],
          y: [0, 8, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[27%] left-1/2 -z-20 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D99E30]/35 to-transparent shadow-[0_0_12px_rgba(217,158,48,0.20)]"
        animate={{
          scaleX: [0.6, 1, 0.45, 0.9, 0.6],
          opacity: [0.1, 0.7, 0.2, 0.6, 0.1],
          y: [0, -7, 5, -4, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================= */}
      {/* GLOW IZQUIERDO                                           */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute -left-[220px] top-[18%] -z-20 h-[520px] w-[520px] rounded-full bg-[#C68A20]/[0.16] blur-[140px]"
        animate={{
          x: [0, 160, 60, -30, 0],
          y: [0, 90, -55, 40, 0],
          scale: [1, 1.2, 0.9, 1.12, 1],
          opacity: [0.4, 0.9, 0.5, 0.8, 0.4],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================= */}
      {/* GLOW DERECHO                                             */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute -right-[220px] bottom-[8%] -z-20 h-[500px] w-[500px] rounded-full bg-[#9A6414]/[0.17] blur-[140px]"
        animate={{
          x: [0, -150, -45, -100, 0],
          y: [0, -90, 55, -35, 0],
          scale: [1, 0.88, 1.18, 0.94, 1],
          opacity: [0.35, 0.85, 0.5, 0.75, 0.35],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================= */}
      {/* LÍNEAS VERTICALES                                        */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute left-[12%] top-[-10%] -z-20 h-[120%] w-px bg-gradient-to-b from-transparent via-[#D99E30]/25 to-transparent"
        animate={{
          opacity: [0.15, 0.65, 0.15],
          x: [0, 14, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute right-[14%] top-[-10%] -z-20 h-[120%] w-px bg-gradient-to-b from-transparent via-[#F5B741]/20 to-transparent"
        animate={{
          opacity: [0.1, 0.55, 0.1],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* ========================================================= */}
      {/* PARTÍCULAS                                               */}
      {/* ========================================================= */}

      {[
        { left: "8%", top: "18%", size: 3, duration: 4, delay: 0 },
        { left: "15%", top: "70%", size: 2, duration: 6, delay: 1 },
        { left: "27%", top: "30%", size: 2, duration: 5, delay: 2 },
        { left: "36%", top: "78%", size: 3, duration: 7, delay: 0.5 },
        { left: "46%", top: "17%", size: 2, duration: 5, delay: 1.5 },
        { left: "53%", top: "68%", size: 2, duration: 6, delay: 2 },
        { left: "64%", top: "27%", size: 3, duration: 4, delay: 0.5 },
        { left: "72%", top: "80%", size: 2, duration: 7, delay: 1 },
        { left: "83%", top: "20%", size: 3, duration: 5, delay: 2.5 },
        { left: "91%", top: "60%", size: 2, duration: 6, delay: 1 },
        { left: "76%", top: "45%", size: 1.5, duration: 5, delay: 3 },
        { left: "20%", top: "45%", size: 1.5, duration: 8, delay: 1.5 },
      ].map((particle, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute -z-10 rounded-full bg-[#F5C35B]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow:
              "0 0 8px rgba(245,195,91,0.9), 0 0 18px rgba(217,158,48,0.5)",
          }}
          animate={{
            y: [0, -35, 15, -20, 0],
            x: [0, 15, -12, 8, 0],
            opacity: [0.15, 1, 0.3, 0.85, 0.15],
            scale: [1, 1.8, 0.7, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ========================================================= */}
      {/* CONTENIDO                                                */}
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
          {/* TIMELINE */}

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "top",
            }}
            className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#D99E30]/60 via-white/[0.08] to-transparent md:block"
          />

          <div className="space-y-4 md:space-y-5">
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
                  <div className="relative rounded-2xl">
                    {/* BORDE LED */}

                    <motion.div
                      className="pointer-events-none absolute inset-0 z-30 rounded-2xl border-2 border-[#D99E30]/25 shadow-[0_0_14px_rgba(217,158,48,0.10),0_0_35px_rgba(180,120,25,0.05),inset_0_0_14px_rgba(217,158,48,0.04)]"
                      animate={{
                        opacity: [0.5, 0.9, 0.5],
                      }}
                      transition={{
                        duration: 4,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090807]/90 transition-all duration-500 group-hover:border-[#D99E30]/30 group-hover:bg-[#0D0B08]">
                      {/* GLOW DE TARJETA */}

                      <motion.div
                        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#D99E30]/[0.05] blur-[90px]"
                        animate={{
                          scale: [1, 1.2, 0.9, 1],
                          opacity: [0.4, 0.8, 0.45, 0.4],
                        }}
                        transition={{
                          duration: 6,
                          delay: index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* BORDE GIRATORIO */}

                      <motion.div
                        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(217,158,48,0.03) 280deg, rgba(217,158,48,0.65) 315deg, rgba(217,158,48,0.03) 350deg, transparent 360deg)",
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <div className="pointer-events-none absolute inset-px rounded-[15px] bg-[#090807]/95 transition-colors duration-500 group-hover:bg-[#0C0A07]/95" />

                      {/* NUMBER */}

                      <span className="pointer-events-none absolute -bottom-7 right-3 text-[100px] font-bold leading-none tracking-[-0.08em] text-white/[0.02] transition-all duration-700 group-hover:text-[#D99E30]/[0.055]">
                        {step.number}
                      </span>

                      <div className="relative grid md:grid-cols-[64px_1fr_220px]">
                        {/* NODE */}

                        <div className="relative hidden items-start justify-center pt-7 md:flex">
                          <motion.div
                            whileHover={{
                              scale: 1.12,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 18,
                            }}
                            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-[#090807] transition-all duration-500 group-hover:border-[#D99E30]/50 group-hover:shadow-[0_0_25px_rgba(217,158,48,0.15)]"
                          >
                            <motion.div
                              className="h-1.5 w-1.5 rounded-full bg-[#D99E30]"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.4, 1, 0.4],
                                boxShadow: [
                                  "0 0 0 rgba(217,158,48,0)",
                                  "0 0 12px rgba(217,158,48,0.8)",
                                  "0 0 0 rgba(217,158,48,0)",
                                ],
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
                              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D99E30]/20 bg-[#D99E30]/[0.07] text-zinc-400 transition-all duration-500 group-hover:border-[#D99E30]/40 group-hover:bg-[#D99E30]/10 group-hover:text-[#E2AC3B]"
                            >
                              <Icon
                                size={18}
                                strokeWidth={1.6}
                              />
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

                          {/* BARRA */}

                          <div className="mt-5 h-px w-full overflow-hidden bg-white/[0.06]">
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

                        {/* VISUAL */}

                        <div className="relative hidden min-h-[180px] overflow-hidden border-l border-white/[0.06] bg-[#D99E30]/[0.015] md:block">
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
                                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D99E30]/30 bg-[#D99E30]/10 shadow-[0_0_35px_rgba(217,158,48,0.14)]"
                              >
                                <Compass
                                  size={22}
                                  className="text-[#E2AC3B]"
                                />
                              </motion.div>

                              {[0, 1, 2, 3].map((node) => (
                                <motion.div
                                  key={node}
                                  animate={{
                                    scale: [1, 1.4, 1],
                                    opacity: [0.25, 1, 0.25],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: node * 0.35,
                                  }}
                                  className="absolute h-2.5 w-2.5 rounded-full bg-[#D99E30]/70"
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
                                animate={{
                                  y: [0, -4, 0],
                                  rotate: [0, 0.5, 0],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="relative h-32 w-44 rounded-xl border border-white/[0.1] bg-[#0D0B08] p-3 shadow-2xl"
                              >
                                <div className="flex gap-1">
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                                </div>

                                <div className="mt-3 flex gap-2">
                                  <motion.div
                                    animate={{
                                      opacity: [0.4, 0.8, 0.4],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                    }}
                                    className="h-20 w-12 rounded-lg bg-[#D99E30]/15"
                                  />

                                  <div className="flex flex-1 flex-col gap-2">
                                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                                    <div className="h-2 w-3/5 rounded-full bg-white/[0.06]" />

                                    <motion.div
                                      animate={{
                                        opacity: [0.25, 0.85, 0.25],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                      }}
                                      className="mt-1 h-9 rounded-lg border border-[#D99E30]/20 bg-[#D99E30]/[0.06]"
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          )}

                          {index === 2 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-44 rounded-xl border border-white/[0.08] bg-[#0B0A08] p-4 font-mono text-[9px] leading-4 text-zinc-600 shadow-2xl">
                                <div className="mb-2 flex gap-1">
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
                                  className="space-y-0.5"
                                >
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
                                </motion.div>

                                <div className="mt-3 flex items-center gap-2">
                                  <motion.span
                                    animate={{
                                      opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                    }}
                                    className="h-1.5 w-1.5 rounded-full bg-[#D99E30]"
                                  />

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
                                    scale: [1, 1.4],
                                    opacity: [0.45, 0],
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                  }}
                                  className="absolute inset-0 rounded-full border border-[#D99E30]/35"
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
                                  className="absolute inset-0 rounded-full border border-[#F5B741]/20"
                                />

                                <motion.div
                                  animate={{
                                    y: [0, -6, 0],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                  className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#D99E30]/35 bg-[#D99E30]/10 shadow-[0_0_40px_rgba(217,158,48,0.14)]"
                                >
                                  <Rocket
                                    size={24}
                                    className="text-[#E2AC3B]"
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
                          animate={{
                            x: [0, 4, 0],
                          }}
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
                  </div>

                  {/* CHECKPOINT */}

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
                        delay: index * 0.1 + 0.4,
                      }}
                      className="hidden h-5 items-center justify-center md:flex"
                    >
                      <div className="flex h-4 w-4 items-center justify-center rounded-full border border-[#D99E30]/10 bg-[#0A0907]">
                        <Check
                          size={9}
                          className="text-[#80601F]"
                        />
                      </div>
                    </motion.div>
                  )}
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
            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#D99E30]"
            />

            De la idea al lanzamiento
          </div>
        </motion.div>
      </div>
    </section>
  );
}