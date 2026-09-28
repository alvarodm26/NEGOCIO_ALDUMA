"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  ArrowRight,
  MousePointer2,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "E-commerce",
    title: "Nuestra Granja",
    description:
      "Experiencia digital para una granja familiar de Arequipa, enfocada en presentar sus productos y facilitar el contacto con clientes.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://negocio-fanny.vercel.app/",
    image: "/images/pagina1.png",
    animation: {
      scale: [1, 1.08, 1.04, 1],
      y: ["0%", "-7%", "-3%", "0%"],
      x: ["0%", "0%", "1%", "0%"],
    },
  },
  {
    number: "02",
    category: "Restaurante",
    title: "Jamil's Food",
    description:
      "Sitio web gastronómico para Jamil's Food en Arequipa, con carta digital, presentación de platos, reservas y una experiencia moderna para sus clientes.",
    tags: ["Next.js", "React", "TypeScript"],
    url: "https://jamilsfood.vercel.app/",
    image: "/images/pagina2.png",
    animation: {
      scale: [1, 1.07, 1.04, 1],
      y: ["0%", "-4%", "-8%", "0%"],
      x: ["0%", "-1%", "1%", "0%"],
    },
  },
  {
    number: "03",
    category: "Restaurante",
    title: "Casa San Lázaro",
    description:
      "Sitio web gastronómico diseñado para presentar la propuesta culinaria, carta, ambiente y experiencia del restaurante.",
    tags: ["Next.js", "TypeScript", "Restaurante"],
    url: "https://casonasanlazaro.netlify.app/",
    image: "/images/pagina3.png",
    animation: {
      scale: [1, 1.09, 1.05, 1],
      y: ["0%", "-8%", "-3%", "0%"],
      x: ["0%", "1%", "-1%", "0%"],
    },
  },
  {
    number: "04",
    category: "Restaurante",
    title: "Casa San Lázaro",
    description:
      "Sitio web gastronómico diseñado para presentar la propuesta culinaria, carta, ambiente y experiencia del restaurante.",
    tags: ["Next.js", "TypeScript", "Restaurante"],
    url: "https://casonasanlazaro.netlify.app/",
    image: "/images/pagina4.png",
    animation: {
      scale: [1, 1.09, 1.05, 1],
      y: ["0%", "-8%", "-3%", "0%"],
      x: ["0%", "1%", "-1%", "0%"],
    },
  },
];

const visibleProjects = projects.slice(0, 4);

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-[#050B16] py-14 lg:py-18"
    >
      {/* ============================================================
          FONDO
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* GRID PRINCIPAL */}
        <div
          className="absolute inset-[-20%]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 78%)",
            opacity: 0.55,
          }}
        />

        {/* GRID SECUNDARIO */}
        <div
          className="absolute inset-[-25%]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.11) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.11) 1px, transparent 1px)
            `,
            backgroundSize: "140px 140px",
            maskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 72%)",
            opacity: 0.4,
          }}
        />

        {/* GRID DIAGONAL */}
        <div
          className="absolute inset-[-30%]"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(34,211,238,0.08) 1px, transparent 1px),
              linear-gradient(315deg, rgba(59,130,246,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "160px 160px",
            maskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 75%)",
            opacity: 0.4,
          }}
        />

        {/* AURORA SUPERIOR */}
        <div className="absolute left-[-20%] top-[-5%] h-[260px] w-[140%] rounded-[50%] bg-gradient-to-r from-transparent via-cyan-400/[0.10] to-transparent blur-[55px]" />

        {/* AURORA INFERIOR */}
        <div className="absolute bottom-[-8%] left-[-20%] h-[280px] w-[140%] rounded-[50%] bg-gradient-to-r from-transparent via-blue-500/[0.09] to-transparent blur-[60px]" />

        {/* GLOW CENTRAL */}
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.11),rgba(59,130,246,0.045)_40%,transparent_72%)] blur-[75px]" />

        {/* ONDA SUPERIOR */}
        <div className="absolute left-1/2 top-[18%] h-[230px] w-[850px] -translate-x-1/2 rounded-[50%] border border-cyan-400/[0.10] shadow-[0_0_35px_rgba(34,211,238,0.06)]" />

        <div className="absolute left-1/2 top-[22%] h-[140px] w-[600px] -translate-x-1/2 rounded-[50%] border border-cyan-300/[0.12]" />

        {/* ONDA INFERIOR */}
        <div className="absolute bottom-[15%] left-1/2 h-[210px] w-[820px] -translate-x-1/2 rounded-[50%] border border-blue-400/[0.09] shadow-[0_0_40px_rgba(59,130,246,0.05)]" />

        <div className="absolute bottom-[20%] left-1/2 h-[120px] w-[580px] -translate-x-1/2 rounded-[50%] border border-cyan-300/[0.10]" />

        {/* LÍNEAS HORIZONTALES */}
        <div className="absolute left-0 right-0 top-[28%] h-px bg-gradient-to-r from-transparent via-cyan-400/[0.25] to-transparent" />

        <div className="absolute left-0 right-0 top-[72%] h-px bg-gradient-to-r from-transparent via-blue-400/[0.22] to-transparent" />

        <div className="absolute left-0 right-0 top-[48%] h-px bg-gradient-to-r from-transparent via-cyan-300/[0.08] to-transparent" />

        {/* GLOW IZQUIERDO */}
        <div className="absolute left-[-12%] top-[42%] h-[500px] w-[300px] rounded-full bg-cyan-500/[0.08] blur-[140px]" />

        {/* GLOW DERECHO */}
        <div className="absolute right-[-12%] top-[38%] h-[520px] w-[320px] rounded-full bg-blue-600/[0.08] blur-[145px]" />

        {/* LÍNEAS VERTICALES */}
        <div className="absolute left-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/[0.07] to-transparent" />

        <div className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/[0.07] to-transparent" />

        {/* PARTÍCULAS */}
        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-cyan-300/40"
            style={{
              width: index % 5 === 0 ? "3px" : "2px",
              height: index % 5 === 0 ? "3px" : "2px",
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
              boxShadow:
                index % 5 === 0
                  ? "0 0 8px rgba(34,211,238,0.5)"
                  : "none",
              opacity: index % 3 === 0 ? 0.5 : 0.25,
            }}
          />
        ))}
      </div>

      {/* ============================================================
          CONTENIDO
      ============================================================ */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                },
              },
            }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-px bg-cyan-400/50"
            />

            <span className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/70">
              Proyectos
            </span>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-px bg-cyan-400/50"
            />
          </motion.div>

          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                filter: "blur(8px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            Experiencias digitales.
            <br />
            <span className="text-white/40">Hechas para destacar.</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                },
              },
            }}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-zinc-400"
          >
            Diseñamos y desarrollamos sitios web modernos, rápidos y
            orientados a generar resultados reales para cada negocio.
          </motion.p>
        </motion.div>

        {/* ============================================================
            PROYECTOS
        ============================================================ */}

        <div className="relative mt-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group overflow-hidden rounded-2xl border border-cyan-300/[0.10] bg-[#07101D]/95 shadow-[0_0_30px_rgba(0,0,0,0.20)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/[0.22] hover:bg-[#091522] hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)]"
              >
                {/* ====================================================
                    PREVIEW ANIMADO
                ==================================================== */}

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${project.title}`}
                  className="block"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#07101D] p-4">
                    {/* GLOW */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.08] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.30)]">
                      {/* IMAGEN EN MOVIMIENTO */}

                      <motion.img
                        src={project.image}
                        alt={`Vista previa de ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        initial={{
                          scale: 1,
                          y: "0%",
                          x: "0%",
                        }}
                        whileInView={{
                          scale: project.animation.scale,
                          y: project.animation.y,
                          x: project.animation.x,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 9,
                          delay: 0.45 + index * 0.2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                        className="h-full w-full object-cover object-top will-change-transform"
                      />

                      {/* OVERLAY */}

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5 + index * 0.15,
                        }}
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050B16]/45 via-transparent to-transparent"
                      />

                      {/* REFLEJO */}

                      <motion.div
                        initial={{
                          x: "-120%",
                          opacity: 0,
                        }}
                        whileInView={{
                          x: "120%",
                          opacity: [0, 0.12, 0],
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.6,
                          delay: 0.9 + index * 0.25,
                          ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white to-transparent blur-xl"
                      />

                      {/* BORDE */}

                      <div className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-300/0 transition-all duration-700 group-hover:border-cyan-300/20 group-hover:shadow-[inset_0_0_30px_rgba(34,211,238,0.08)]" />

                      {/* ICONO */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                          rotate: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 1 + index * 0.15,
                        }}
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/10 group-hover:text-cyan-200"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.div>

                      {/* NUMERO */}

                      <div className="pointer-events-none absolute bottom-3 left-3">
                        <span className="text-xs font-medium tracking-[0.2em] text-cyan-300/70">
                          {project.number}
                        </span>
                      </div>

                      {/* CATEGORIA */}

                      <div className="pointer-events-none absolute bottom-3 right-3">
                        <span className="rounded-full border border-cyan-300/10 bg-black/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/60 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* SCAN LINE */}

                    <motion.div
                      initial={{
                        top: "-10%",
                        opacity: 0,
                      }}
                      whileInView={{
                        top: "110%",
                        opacity: [0, 0.5, 0],
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 2.2,
                        delay: 0.8 + index * 0.2,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute left-4 right-4 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                    />
                  </div>
                </a>

                {/* ====================================================
                    INFO
                ==================================================== */}

                <div className="relative bg-gradient-to-br from-[#3A220F] via-[#462A13] to-[#2D1A0B] p-6 sm:p-7">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-400/[0.06] blur-3xl" />

                  <div className="relative flex flex-col items-center text-center">
                    {/* TITULO */}

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.25 + index * 0.12,
                      }}
                      className="text-2xl font-medium tracking-[-0.03em] text-white"
                    >
                      {project.title}
                    </motion.h3>

                    {/* DESCRIPCION */}

                    <p className="mt-3 max-w-xl text-sm leading-6 text-orange-100/65">
                      {project.description}
                    </p>
                  </div>

                  {/* ====================================================
                      TAGS
                  ==================================================== */}

                  <div className="relative mt-5 flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag, tagIndex) => {
                      const tagStyles: Record<string, string> = {
                        "Next.js":
                          "bg-black/60 text-white border-white/15 shadow-[0_0_15px_rgba(0,0,0,0.15)]",

                        React:
                          "bg-[#087EA4]/25 text-[#61DAFB] border-[#61DAFB]/25 shadow-[0_0_15px_rgba(97,218,251,0.08)]",

                        TypeScript:
                          "bg-[#3178C6]/25 text-[#6FA8FF] border-[#3178C6]/35 shadow-[0_0_15px_rgba(49,120,198,0.10)]",

                        Tailwind:
                          "bg-[#06B6D4]/20 text-[#67E8F9] border-[#06B6D4]/30 shadow-[0_0_15px_rgba(6,182,212,0.08)]",

                        Restaurante:
                          "bg-[#F97316]/20 text-[#FDBA74] border-[#F97316]/30 shadow-[0_0_15px_rgba(249,115,22,0.08)]",
                      };

                      return (
                        <motion.span
                          key={tag}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay:
                              0.45 +
                              index * 0.12 +
                              tagIndex * 0.08,
                          }}
                          className={`rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] transition-all duration-300 ${tagStyles[tag] || "bg-white/5 text-zinc-300 border-white/10"}`}
                        >
                          {tag}
                        </motion.span>
                      );
                    })}
                  </div>

                  {/* LINE */}

                  <div className="my-6 h-px w-full bg-orange-200/[0.10]" />

                  {/* CTA */}

                  <div className="flex justify-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-5 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/[0.14] hover:text-white"
                    >
                      Ver proyecto

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ============================================================
            BOTÓN FINAL
        ============================================================ */}

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
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-3 rounded-full border border-cyan-300/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-400/[0.04] hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]"
          >
            <MousePointer2 className="h-4 w-4 text-cyan-300/60 transition-transform duration-300 group-hover:rotate-12" />

            Ver todos los proyectos

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}