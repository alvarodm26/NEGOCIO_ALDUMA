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
      {/* FONDO BASE ESTÁTICO                                      */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-[#080705]" />

      {/* ========================================================= */}
      {/* GRID PRINCIPAL - ESTÁTICO                                 */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
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
      {/* GRID SECUNDARIO - ESTÁTICO                                */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,183,65,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,183,65,0.06) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 15%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 15%, transparent 82%)",
        }}
      />

      {/* ========================================================= */}
      {/* GLOW SUPERIOR - ESTÁTICO                                  */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[480px] w-[1000px] -translate-x-1/2 rotate-[-8deg] rounded-full blur-[80px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(120,78,15,0.14) 15%, rgba(180,120,25,0.24) 32%, rgba(245,183,65,0.18) 50%, rgba(217,158,48,0.24) 65%, rgba(150,95,15,0.14) 82%, transparent 100%)",
        }}
      />

      {/* ========================================================= */}
      {/* GLOW INFERIOR - ESTÁTICO                                  */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute bottom-[-25%] left-1/2 h-[450px] w-[950px] -translate-x-1/2 rounded-full blur-[90px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(120,78,15,0.12) 15%, rgba(180,120,25,0.20) 32%, rgba(245,183,65,0.14) 50%, rgba(170,105,18,0.22) 68%, rgba(90,55,10,0.12) 85%, transparent 100%)",
        }}
      />

      {/* ========================================================= */}
      {/* GLOW CENTRAL - ESTÁTICO                                   */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,183,65,0.16) 0%, rgba(217,158,48,0.10) 28%, rgba(160,100,20,0.06) 48%, transparent 72%)",
        }}
      />

      {/* ========================================================= */}
      {/* ONDA SUPERIOR - ESTÁTICA                                  */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[5%] h-[230px] w-[850px] -translate-x-1/2 rounded-[50%] border border-[#D99E30]/15 shadow-[0_0_60px_rgba(217,158,48,0.06),inset_0_0_40px_rgba(217,158,48,0.03)]" />

      <div className="pointer-events-none absolute left-1/2 top-[11%] h-[140px] w-[600px] -translate-x-1/2 rounded-[50%] border border-[#F5B741]/[0.08]" />

      {/* ========================================================= */}
      {/* ONDA INFERIOR - ESTÁTICA                                  */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute bottom-[4%] left-1/2 h-[210px] w-[820px] -translate-x-1/2 rounded-[50%] border border-[#B87918]/15 shadow-[0_0_60px_rgba(180,120,25,0.05),inset_0_0_40px_rgba(217,158,48,0.03)]" />

      <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-[120px] w-[580px] -translate-x-1/2 rounded-[50%] border border-[#F5B741]/[0.07]" />

      {/* ========================================================= */}
      {/* LÍNEAS DE LUZ - ESTÁTICAS                                 */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[28%] h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F5B741]/25 to-transparent" />

      <div className="pointer-events-none absolute bottom-[27%] left-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D99E30]/20 to-transparent" />

      {/* ========================================================= */}
      {/* GLOW IZQUIERDO - ESTÁTICO                                 */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute -left-[220px] top-[18%] h-[500px] w-[500px] rounded-full bg-[#C68A20]/[0.10] blur-[150px]" />

      {/* ========================================================= */}
      {/* GLOW DERECHO - ESTÁTICO                                   */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute -right-[220px] bottom-[8%] h-[480px] w-[480px] rounded-full bg-[#9A6414]/[0.11] blur-[150px]" />

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

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0D0D0F]/90 p-6 transition-all duration-300 group-hover:border-[#D99E30]/30 group-hover:bg-[#11100D]/95 lg:p-7">
                  {/* GLOW DE TARJETA - ESTÁTICO */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D99E30]/[0.06] blur-[70px]" />

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

                  {/* LÍNEA INFERIOR */}
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