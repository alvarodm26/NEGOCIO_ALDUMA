"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
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
  },
  {
    number: "02",
    category: "Restaurante",
    title: "Jamil's Food",
    description:
      "Sitio web gastronómico para Jamil's Food en Arequipa, con carta digital, presentación de platos, reservas y una experiencia moderna para sus clientes.",
    tags: ["Next.js", "React", "TypeScript"],
    url: "https://jamilsfood.vercel.app/",
  },
  {
    number: "03",
    category: "Restaurante",
    title: "Casa San Lázaro",
    description:
      "Sitio web gastronómico diseñado para presentar la propuesta culinaria, carta, ambiente y experiencia del restaurante.",
    tags: ["Next.js", "TypeScript", "Restaurante"],
    url: "https://casonasanlazaro.netlify.app/",
  },
];

export default function Projects() {
  const visibleProjects = projects.slice(0, 4);

  return (
    <section
      id="proyectos"
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#050B16] py-20 lg:py-24"
    >
      {/* =========================================================
          FONDO BASE
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-40 bg-[#050B16]" />

      <div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 80% at 50% 100%,
              rgba(30,64,175,0.22),
              transparent 65%
            ),
            radial-gradient(
              ellipse 80% 60% at 0% 0%,
              rgba(14,116,144,0.10),
              transparent 65%
            )
          `,
        }}
      />

      {/* =========================================================
          AURORA DIAGONAL
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[25%] top-[18%] -z-30 h-[420px] w-[150%] rotate-[-12deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.02) 15%, rgba(59,130,246,0.18) 35%, rgba(34,211,238,0.13) 50%, rgba(79,70,229,0.16) 68%, transparent 88%)",
          filter: "blur(45px)",
        }}
        animate={{
          x: ["-8%", "8%", "-8%"],
          y: [0, 80, 0],
          rotate: [-12, -8, -12],
          scaleY: [0.85, 1.1, 0.85],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          SEGUNDA AURORA
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute -right-[30%] top-[42%] -z-30 h-[360px] w-[150%] rotate-[10deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(79,70,229,0.05) 25%, rgba(59,130,246,0.15) 42%, rgba(37,99,235,0.09) 57%, rgba(34,211,238,0.11) 72%, transparent 92%)",
          filter: "blur(55px)",
        }}
        animate={{
          x: ["8%", "-8%", "8%"],
          y: [0, -70, 0],
          rotate: [10, 5, 10],
          scaleY: [1, 0.82, 1],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          BANDA LUMINOSA
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[30%] top-[48%] -z-20 h-px w-[160%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,0.05), rgba(96,165,250,0.55), rgba(129,140,248,0.35), transparent)",
          boxShadow:
            "0 0 30px rgba(34,211,238,0.16), 0 0 90px rgba(59,130,246,0.08)",
        }}
        animate={{
          x: ["-10%", "10%", "-10%"],
          opacity: [0.3, 0.85, 0.3],
          scaleX: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          ONDA 1
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[25%] top-[30%] -z-20 h-[180px] w-[150%] rounded-[50%]"
        style={{
          borderTop: "1px solid rgba(56,189,248,0.18)",
          borderBottom: "1px solid rgba(79,70,229,0.08)",
          transform: "rotate(-8deg)",
          boxShadow:
            "0 -15px 60px rgba(37,99,235,0.08), 0 20px 70px rgba(34,211,238,0.05)",
        }}
        animate={{
          x: ["-4%", "4%", "-4%"],
          y: [0, -25, 0],
          scaleY: [1, 1.18, 1],
          rotate: [-8, -4, -8],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          ONDA 2
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[25%] top-[60%] -z-20 h-[240px] w-[150%] rounded-[50%]"
        style={{
          borderTop: "1px solid rgba(99,102,241,0.12)",
          borderBottom: "1px solid rgba(34,211,238,0.07)",
          transform: "rotate(7deg)",
          boxShadow:
            "0 -20px 80px rgba(79,70,229,0.05), 0 20px 80px rgba(37,99,235,0.06)",
        }}
        animate={{
          x: ["4%", "-4%", "4%"],
          y: [0, 30, 0],
          scaleY: [1, 0.88, 1],
          rotate: [7, 3, 7],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          GLOW IZQUIERDO
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[220px] top-[5%] -z-20 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(14,116,144,0.06) 35%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 130, 50, 0],
          y: [0, 100, -30, 0],
          scale: [1, 1.18, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          GLOW DERECHO
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute -right-[240px] bottom-0 -z-20 h-[650px] w-[650px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.16) 0%, rgba(79,70,229,0.07) 38%, transparent 72%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -120, -40, 0],
          y: [0, -80, 40, 0],
          scale: [1, 0.88, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          GLOW CENTRAL
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, rgba(34,211,238,0.025) 35%, transparent 70%)",
          filter: "blur(65px)",
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.5, 0.8, 0.55, 0.5],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          LÍNEAS VERTICALES
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute left-[12%] top-[-10%] -z-20 h-[120%] w-[2px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(34,211,238,0.18), transparent)",
          filter: "blur(1px)",
        }}
        animate={{
          y: ["-4%", "4%", "-4%"],
          opacity: [0.15, 0.55, 0.15],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute right-[15%] top-[-10%] -z-20 h-[120%] w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(99,102,241,0.16), transparent)",
        }}
        animate={{
          y: ["4%", "-4%", "4%"],
          opacity: [0.1, 0.45, 0.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* =========================================================
          CONTENIDO
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}

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
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-cyan-400/60" />

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Proyectos
            </p>

            <span className="h-px w-7 bg-cyan-400/60" />
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Experiencias digitales
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              hechas para destacar.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-zinc-400">
            Algunos ejemplos de cómo combinamos diseño, tecnología y estrategia
            para crear productos digitales de alto nivel.
          </p>
        </motion.div>

        {/* =========================================================
            PROYECTOS — 2 POR FILA
        ========================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.number}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#09111F]/80 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/20"
            >
              {/* GLOW */}

              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 80% 10%, rgba(34,211,238,0.07), transparent 35%)",
                }}
              />

              {/* ===================================================
                  PREVIEW
              ==================================================== */}

              <div className="relative overflow-hidden bg-[#07101D] p-4 sm:p-5">

                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                  {/* BROWSER BAR */}

                  <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-[#172033] px-3">

                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />

                    <div className="mx-auto flex h-4.5 w-[55%] items-center rounded-md border border-white/5 bg-white/[0.035] px-2">

                      <span className="truncate text-[8px] text-zinc-500">
                        {project.url.replace("https://", "")}
                      </span>

                    </div>

                    <ExternalLink className="h-3 w-3 text-zinc-600" />

                  </div>

                  {/* WEBSITE */}

                  <div
                    onClick={() =>
                      window.open(
                        project.url,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="group/preview relative aspect-[16/10] cursor-pointer overflow-hidden bg-white"
                  >

                    <iframe
                      src={project.url}
                      title={`Vista previa de ${project.title}`}
                      className="absolute left-0 top-0 h-[200%] w-[200%] origin-top-left border-0"
                      style={{
                        transform: "scale(0.5)",
                      }}
                      loading="lazy"
                      scrolling="no"
                    />

                    {/* HOVER */}

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/preview:bg-black/20">

                      <div className="translate-y-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 opacity-0 backdrop-blur-md transition-all duration-300 group-hover/preview:translate-y-0 group-hover/preview:opacity-100">

                        <div className="flex items-center gap-2 text-xs font-medium text-white">

                          <ExternalLink className="h-3.5 w-3.5" />

                          Abrir proyecto

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              </div>

              {/* ===================================================
                  INFO
              ==================================================== */}

              <div className="relative p-6">

                <div className="mb-5 flex items-center justify-between">

                  <span className="font-mono text-xs tracking-[0.16em] text-zinc-600">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                    {project.category}
                  </span>

                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white transition-transform duration-500 group-hover:translate-x-1">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                  {project.description}
                </p>

                {/* TAGS */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* BARRA */}

                <div className="mt-6 h-px w-full overflow-hidden bg-white/[0.06]">

                  <div className="h-full w-[30%] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 transition-all duration-700 group-hover:w-full" />

                </div>

                {/* BOTÓN */}

                <button
                  onClick={() =>
                    window.open(
                      project.url,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="group/button mt-5 flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan-300"
                >
                  Ver proyecto

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                </button>

                {/* CTA */}

                <div className="mt-4 flex items-center gap-2 text-xs text-zinc-600">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.025]">

                    <MousePointer2 className="h-3 w-3" />

                  </span>

                  <span>
                    Haz clic para visitar el sitio
                  </span>

                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* =========================================================
            VER TODOS
        ========================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/proyectos"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-white"
          >
            Ver todos los proyectos

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}