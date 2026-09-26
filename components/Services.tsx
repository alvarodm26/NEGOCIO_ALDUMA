"use client";

import { motion } from "motion/react";
import {
  Palette,
  Code2,
  Search,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Diseño UX/UI",
    description:
      "Diseñamos interfaces intuitivas enfocadas en ofrecer una experiencia de usuario clara, moderna y efectiva.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Construimos sitios web rápidos, escalables y adaptados a las necesidades de cada proyecto.",
  },
  {
    number: "03",
    icon: Search,
    title: "Optimización y SEO",
    description:
      "Mejoramos la visibilidad de tu negocio para facilitar que nuevos clientes encuentren tus servicios.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#050505] py-20 lg:py-24"
    >
      {/* ==================================================
          FONDO BASE
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#050505]" />

      {/* ==================================================
          GRID PRINCIPAL
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 18%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 18%, transparent 82%)",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px",
            "36px 36px",
            "0px 72px",
            "-36px 36px",
            "0px 0px",
          ],
          opacity: [0.18, 0.38, 0.22, 0.34, 0.18],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          GRID SECUNDARIO
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",
          maskImage:
            "radial-gradient(ellipse at center, black 5%, transparent 74%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 5%, transparent 74%)",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px",
            "-70px 70px",
            "0px 140px",
            "70px 70px",
            "0px 0px",
          ],
          opacity: [0.1, 0.24, 0.12, 0.22, 0.1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ==================================================
          AURORA VIOLETA CENTRAL
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute left-[-35%] top-[8%] -z-30 h-[45%] w-[170%] rotate-[-7deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 4%, rgba(255,255,255,0.015) 15%, rgba(124,58,237,0.06) 30%, rgba(139,92,246,0.13) 44%, rgba(124,58,237,0.10) 58%, rgba(167,139,250,0.06) 72%, rgba(124,58,237,0.025) 85%, transparent 97%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["-10%", "10%", "-6%", "8%", "-10%"],
          y: [0, 30, -15, 20, 0],
          rotate: [-7, -3, -9, -4, -7],
          scaleY: [0.85, 1.15, 0.9, 1.1, 0.85],
          opacity: [0.35, 0.75, 0.45, 0.7, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          AURORA INFERIOR
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute right-[-40%] bottom-[-5%] -z-30 h-[50%] w-[180%] rotate-[8deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 3%, rgba(76,29,149,0.025) 18%, rgba(124,58,237,0.07) 32%, rgba(139,92,246,0.12) 47%, rgba(167,139,250,0.06) 61%, rgba(124,58,237,0.10) 76%, rgba(139,92,246,0.025) 90%, transparent 98%)",
          filter: "blur(65px)",
        }}
        animate={{
          x: ["10%", "-10%", "5%", "-8%", "10%"],
          y: [0, -30, 15, -20, 0],
          rotate: [8, 3, 10, 4, 8],
          scaleY: [1, 0.78, 1.12, 0.9, 1],
          opacity: [0.3, 0.65, 0.4, 0.7, 0.3],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          GLOW CENTRAL
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-30 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.09) 0%, rgba(139,92,246,0.05) 28%, rgba(76,29,149,0.04) 48%, transparent 72%)",
          filter: "blur(85px)",
        }}
        animate={{
          scale: [0.8, 1.18, 0.9, 1.12, 0.8],
          x: ["-5%", "6%", "-3%", "5%", "-5%"],
          y: ["2%", "-4%", "4%", "-3%", "2%"],
          opacity: [0.3, 0.65, 0.38, 0.6, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          ONDA SUPERIOR
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[25%] top-[12%] -z-20 h-[130px] w-[150%] rounded-[50%]"
        style={{
          borderTop: "1px solid rgba(139,92,246,0.12)",
          borderBottom: "1px solid rgba(124,58,237,0.06)",
          boxShadow:
            "0 -15px 55px rgba(124,58,237,0.04), 0 10px 35px rgba(139,92,246,0.025)",
        }}
        animate={{
          x: ["-5%", "6%", "-4%", "5%", "-5%"],
          y: [0, -20, 10, -14, 0],
          scaleY: [1, 1.28, 0.86, 1.18, 1],
          rotate: [-5, -1, -7, -2, -5],
          opacity: [0.2, 0.6, 0.28, 0.55, 0.2],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          ONDA INFERIOR
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[25%] bottom-[10%] -z-20 h-[140px] w-[150%] rounded-[50%]"
        style={{
          borderTop: "1px solid rgba(167,139,250,0.08)",
          borderBottom: "1px solid rgba(124,58,237,0.07)",
          boxShadow:
            "0 15px 55px rgba(76,29,149,0.04), 0 -10px 35px rgba(139,92,246,0.025)",
        }}
        animate={{
          x: ["5%", "-6%", "4%", "-5%", "5%"],
          y: [0, 22, -12, 16, 0],
          scaleY: [1, 0.8, 1.2, 0.88, 1],
          rotate: [5, 1, 7, 2, 5],
          opacity: [0.18, 0.55, 0.25, 0.5, 0.18],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          LÍNEAS DE LUZ
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute left-[-30%] top-[34%] -z-10 h-px w-[160%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.02), rgba(167,139,250,0.18), rgba(124,58,237,0.12), rgba(196,181,253,0.10), transparent)",
          boxShadow:
            "0 0 25px rgba(124,58,237,0.06), 0 0 70px rgba(139,92,246,0.04)",
        }}
        animate={{
          x: ["-12%", "12%", "-12%"],
          opacity: [0.08, 0.55, 0.08],
          scaleX: [0.8, 1.12, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-[-30%] top-[70%] -z-10 h-px w-[160%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.02), rgba(139,92,246,0.14), rgba(167,139,250,0.10), transparent)",
          boxShadow: "0 0 40px rgba(124,58,237,0.05)",
        }}
        animate={{
          x: ["12%", "-10%", "12%"],
          opacity: [0.06, 0.45, 0.06],
          scaleX: [0.85, 1.1, 0.85],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          GLOW IZQUIERDO
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[180px] top-1/2 -z-20 h-[420px] w-[420px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(76,29,149,0.04) 35%, transparent 72%)",
          filter: "blur(75px)",
        }}
        animate={{
          x: [0, 90, 20, -35, 0],
          y: [0, 35, -25, 15, 0],
          scale: [0.9, 1.18, 0.95, 1.1, 0.9],
          opacity: [0.25, 0.65, 0.3, 0.55, 0.25],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          GLOW DERECHO
      ================================================== */}

      <motion.div
        className="pointer-events-none absolute -right-[180px] top-1/2 -z-20 h-[450px] w-[450px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(76,29,149,0.035) 38%, transparent 72%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -85, -20, -50, 0],
          y: [0, -30, 25, -15, 0],
          scale: [1, 0.86, 1.18, 0.95, 1],
          opacity: [0.25, 0.6, 0.32, 0.55, 0.25],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          PARTÍCULAS
      ================================================== */}

      {[
        {
          left: "10%",
          top: "20%",
          opacity: 0.45,
          shadow: "0 0 14px rgba(167,139,250,0.5)",
          duration: 6,
          delay: 0,
        },
        {
          left: "24%",
          top: "70%",
          opacity: 0.3,
          shadow: "0 0 14px rgba(139,92,246,0.45)",
          duration: 8,
          delay: 1,
        },
        {
          left: "42%",
          top: "25%",
          opacity: 0.4,
          shadow: "0 0 14px rgba(196,181,253,0.5)",
          duration: 7,
          delay: 2,
        },
        {
          left: "58%",
          top: "76%",
          opacity: 0.3,
          shadow: "0 0 14px rgba(167,139,250,0.45)",
          duration: 9,
          delay: 1.5,
        },
        {
          left: "74%",
          top: "18%",
          opacity: 0.4,
          shadow: "0 0 14px rgba(139,92,246,0.5)",
          duration: 7,
          delay: 3,
        },
        {
          left: "88%",
          top: "68%",
          opacity: 0.3,
          shadow: "0 0 14px rgba(196,181,253,0.45)",
          duration: 10,
          delay: 2.5,
        },
      ].map((particle, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute -z-10 h-1 w-1 rounded-full bg-white"
          style={{
            left: particle.left,
            top: particle.top,
            opacity: particle.opacity,
            boxShadow: particle.shadow,
          }}
          animate={{
            x: [0, 25, -10, 0],
            y: [0, -30, 15, 0],
            opacity: [0.04, particle.opacity, 0.08, 0.04],
            scale: [1, 1.8, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* ==================================================
          CONTENIDO
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* ETIQUETA */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 28,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="h-px bg-violet-500/60"
            />

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              Servicios
            </p>

            <motion.span
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 28,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="h-px bg-violet-500/60"
            />
          </motion.div>

          {/* TÍTULO */}

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
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl"
          >
            Todo lo necesario para construir una presencia digital sólida.
          </motion.h2>

          {/* DESCRIPCIÓN */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-zinc-400"
          >
            Combinamos estrategia, diseño y tecnología para crear experiencias
            digitales que generan resultados.
          </motion.p>
        </motion.div>

        {/* ==================================================
            TARJETAS
        ================================================== */}

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.96,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + index * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group relative rounded-[1.5rem]"
              >
                {/* =================================================
                    BORDE VIOLETA INDIVIDUAL
                ================================================== */}

                <div className="pointer-events-none absolute inset-0 z-30 rounded-[1.5rem] border border-violet-400/[0.16] shadow-[0_0_12px_rgba(124,58,237,0.05),0_0_30px_rgba(124,58,237,0.025),inset_0_0_12px_rgba(124,58,237,0.02)]" />

                {/* =================================================
                    TARJETA INTERNA
                ================================================== */}

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0D0D0F]/80 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-[#7C3AED]/30 group-hover:bg-[#111114]/90 lg:p-7">
                  {/* LED VIOLETA ANIMADO */}

                  <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(124,58,237,0.04) 280deg, rgba(124,58,237,0.7) 315deg, rgba(124,58,237,0.04) 350deg, transparent 360deg)",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* BORDE INTERNO */}

                  <div className="pointer-events-none absolute inset-px rounded-[23px] bg-[#0D0D0F]/95 transition-colors duration-500 group-hover:bg-[#101013]/95" />

                  {/* GLOW VIOLETA */}

                  <motion.div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/[0.04] blur-[70px]"
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 5,
                      delay: index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* =================================================
                      CONTENIDO
                  ================================================== */}

                  <div className="relative z-10">
                    {/* ICONO + NÚMERO */}

                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 2,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/[0.08]"
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                          className="text-[#7C3AED]"
                        />
                      </motion.div>

                      <motion.span
                        initial={{
                          opacity: 0,
                          x: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.35 + index * 0.14,
                        }}
                        className="text-xs font-medium tracking-[0.15em] text-[#52525B]"
                      >
                        {service.number}
                      </motion.span>
                    </div>

                    {/* TÍTULO */}

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.45 + index * 0.14,
                      }}
                      className="mt-12 text-xl font-semibold tracking-[-0.03em] text-white"
                    >
                      {service.title}
                    </motion.h3>

                    {/* DESCRIPCIÓN */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.55 + index * 0.14,
                      }}
                      className="mt-3 text-[15px] leading-6 text-[#A1A1AA]"
                    >
                      {service.description}
                    </motion.p>

                    {/* LINK */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.65 + index * 0.14,
                      }}
                      className="mt-8 flex items-center gap-2 text-sm font-medium text-[#71717A] transition-colors duration-300 group-hover:text-white"
                    >
                      <span>Conocer más</span>

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </motion.div>
                  </div>

                  {/* LÍNEA INFERIOR */}

                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "100%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.1,
                      delay: 0.7 + index * 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}