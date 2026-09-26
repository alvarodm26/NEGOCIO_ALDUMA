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
      className="relative isolate overflow-hidden border-y border-[#3D321C]/70 bg-[#080705] py-20 lg:py-24"
    >
      {/* ========================================================= */}
      {/* FONDO BASE                                                 */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-[#080705]" />

      {/* ========================================================= */}
      {/* GRID PRINCIPAL ANIMADO                                    */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute inset-0"
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
        className="pointer-events-none absolute inset-0"
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
      {/* AURORA SUPERIOR                                          */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[-22%] h-[540px] w-[1100px] -translate-x-1/2 rotate-[-8deg] rounded-full blur-[55px]"
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
      {/* AURORA INFERIOR                                           */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute bottom-[-28%] left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full blur-[60px]"
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
      {/* GLOW CENTRAL                                              */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px]"
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
        className="pointer-events-none absolute left-1/2 top-[5%] h-[230px] w-[850px] -translate-x-1/2 rounded-[50%] border border-[#D99E30]/20 shadow-[0_0_70px_rgba(217,158,48,0.10),inset_0_0_50px_rgba(217,158,48,0.05)]"
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
        className="pointer-events-none absolute left-1/2 top-[11%] h-[140px] w-[600px] -translate-x-1/2 rounded-[50%] border border-[#F5B741]/10"
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
        className="pointer-events-none absolute bottom-[4%] left-1/2 h-[210px] w-[820px] -translate-x-1/2 rounded-[50%] border border-[#B87918]/20 shadow-[0_0_70px_rgba(180,120,25,0.08),inset_0_0_50px_rgba(217,158,48,0.04)]"
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
        className="pointer-events-none absolute bottom-[10%] left-1/2 h-[120px] w-[580px] -translate-x-1/2 rounded-[50%] border border-[#F5B741]/10"
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
        className="pointer-events-none absolute left-1/2 top-[28%] h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F5B741]/40 to-transparent shadow-[0_0_12px_rgba(245,183,65,0.25)]"
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
        className="pointer-events-none absolute bottom-[27%] left-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D99E30]/35 to-transparent shadow-[0_0_12px_rgba(217,158,48,0.20)]"
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
      {/* GLOW IZQUIERDO                                            */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute -left-[220px] top-[18%] h-[520px] w-[520px] rounded-full bg-[#C68A20]/[0.16] blur-[140px]"
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
      {/* GLOW DERECHO                                              */}
      {/* ========================================================= */}

      <motion.div
        className="pointer-events-none absolute -right-[220px] bottom-[8%] h-[500px] w-[500px] rounded-full bg-[#9A6414]/[0.17] blur-[140px]"
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
      {/* PARTÍCULAS                                                */}
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
          className="pointer-events-none absolute rounded-full bg-[#F5C35B]"
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
              Servicios
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
            Todo lo necesario para construir una presencia digital sólida.
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
            Combinamos estrategia, diseño y tecnología para crear experiencias
            digitales que generan resultados.
          </motion.p>
        </motion.div>

        {/* TARJETAS */}
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
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[1.5rem] border-2 border-cyan-400/[0.30] shadow-[0_0_12px_rgba(34,211,238,0.16),0_0_30px_rgba(14,165,233,0.06),inset_0_0_12px_rgba(14,165,233,0.04)]" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0D0D0F]/80 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-[#D99E30]/30 group-hover:bg-[#11100D]/90 lg:p-7">
                  <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(217,158,48,0.04) 280deg, rgba(217,158,48,0.75) 315deg, rgba(217,158,48,0.04) 350deg, transparent 360deg)",
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

                  <div className="pointer-events-none absolute inset-px rounded-[23px] bg-[#0D0D0F]/95 transition-colors duration-500 group-hover:bg-[#11100D]/95" />

                  <motion.div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D99E30]/[0.07] blur-[70px]"
                    animate={{
                      scale: [1, 1.18, 0.92, 1],
                      opacity: [0.4, 0.9, 0.5, 0.4],
                    }}
                    transition={{
                      duration: 5,
                      delay: index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 2,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D99E30]/25 bg-[#D99E30]/[0.09]"
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                          className="text-[#D99E30]"
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

                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#D99E30] to-transparent shadow-[0_0_8px_rgba(217,158,48,0.5)]"
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