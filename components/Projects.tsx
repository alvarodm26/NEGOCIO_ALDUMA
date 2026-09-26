
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  MousePointer2,
} from "lucide-react";

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
    category: "Contenido",
    title: "Blog Editorial",
    description:
      "Plataforma editorial enfocada en contenido, legibilidad y una experiencia de navegación fluida.",
    tags: ["React", "Node.js", "PostgreSQL"],
    url: "#",
  },
  {
    number: "03",
    category: "Corporativo",
    title: "Portal Corporativo",
    description:
      "Presencia digital profesional diseñada para comunicar servicios y fortalecer la marca.",
    tags: ["Next.js", "TypeScript", "CMS"],
    url: "#",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const project = projects[current];

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openProject = () => {
    if (project.url !== "#") {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="proyectos"
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#050B16] py-20 lg:py-24"
    >
      {/* =========================================================
          FONDO BASE — AZUL NOCHE
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
          AURORA DIAGONAL PRINCIPAL
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
          ONDA DE LUZ 1
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
          ONDA DE LUZ 2
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
          GLOW CYAN IZQUIERDO
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
          GLOW AZUL DERECHO
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
          FLUJOS VERTICALES
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute left-[12%] top-[-10%] -z-20 h-[120%] w-[2px] origin-top"
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
          PARTÍCULAS
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute left-[18%] top-[22%] -z-10 h-1 w-1 rounded-full bg-cyan-300/60 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
        animate={{
          y: [0, -45, 0],
          x: [0, 20, 0],
          opacity: [0.1, 0.9, 0.1],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-[76%] top-[25%] -z-10 h-1 w-1 rounded-full bg-blue-300/60 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
        animate={{
          y: [0, 55, 0],
          x: [0, -25, 0],
          opacity: [0.1, 0.8, 0.1],
          scale: [1, 1.7, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-[84%] top-[70%] -z-10 h-1 w-1 rounded-full bg-indigo-300/50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          opacity: [0.1, 0.75, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-[28%] top-[76%] -z-10 h-1 w-1 rounded-full bg-cyan-300/40 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
        animate={{
          x: [0, 45, 0],
          y: [0, -25, 0],
          opacity: [0.1, 0.7, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
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
            PROJECT
        ========================================================== */}

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#09111F]/80 backdrop-blur-sm lg:mt-14">

          <AnimatePresence mode="wait">

            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="grid min-h-[500px] lg:grid-cols-[0.85fr_1.15fr]"
            >

              {/* =====================================================
                  INFO
              ====================================================== */}

              <div className="flex flex-col justify-between border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-9">

                <div>

                  <div className="mb-8 flex items-center justify-between">

                    <span className="text-sm font-medium text-zinc-500">
                      {project.number}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                      {project.category}
                    </span>

                  </div>

                  <h3 className="max-w-md text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-md text-[16px] leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                {/* BOTÓN */}

                <button
                  onClick={openProject}
                  disabled={project.url === "#"}
                  className="group mt-10 flex w-fit items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan-300 disabled:cursor-default disabled:hover:text-white"
                >
                  Ver proyecto

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>

              </div>

              {/* =====================================================
                  WEBSITE PREVIEW
              ====================================================== */}

              <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#07101D] p-5 sm:p-6 lg:p-10">

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.16), transparent 58%)",
                  }}
                />

                {/* MOCKUP */}

                <motion.div
                  initial={{ scale: 0.97, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                  }}
                  onClick={openProject}
                  className="group relative w-full max-w-2xl cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
                >

                  {/* BROWSER BAR */}

                  <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-[#172033] px-3">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

                    <div className="mx-auto flex h-5 w-[58%] items-center rounded-md border border-white/5 bg-white/[0.035] px-3">

                      <span className="truncate text-[9px] text-zinc-500">
                        negocio-fanny.vercel.app
                      </span>

                    </div>

                    <ExternalLink className="h-3 w-3 text-zinc-600" />

                  </div>

                  {/* PÁGINA REAL */}

                  <div className="relative aspect-[16/10] overflow-hidden bg-white">

                    {project.url !== "#" ? (
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
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#0D1726]">

                        <div className="text-center">

                          <div className="mx-auto mb-3 h-8 w-8 rounded-full border border-white/10 bg-white/5" />

                          <p className="text-sm text-zinc-500">
                            Próximamente
                          </p>

                        </div>

                      </div>
                    )}

                    {/* HOVER */}

                    {project.url !== "#" && (
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">

                        <div className="translate-y-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                          <div className="flex items-center gap-2 text-xs font-medium text-white">

                            <ExternalLink className="h-3.5 w-3.5" />

                            Abrir proyecto

                          </div>

                        </div>

                      </div>
                    )}

                  </div>

                </motion.div>

                {/* =====================================================
                    CTA PROFESIONAL
                ====================================================== */}

                <button
                  onClick={openProject}
                  disabled={project.url === "#"}
                  className="group relative z-10 mt-5 flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-cyan-300 disabled:cursor-default disabled:hover:text-zinc-500"
                >

                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5">
                    <MousePointer2 className="h-3 w-3" />
                  </span>

                  <span>
                    Explora este proyecto ·{" "}
                    <span className="text-zinc-400 group-hover:text-cyan-300">
                      haz clic para visitar el sitio
                    </span>
                  </span>

                  <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                </button>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* =========================================================
              CONTROLES
          ========================================================== */}

          <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 lg:px-9">

            {/* INDICADORES */}

            <div className="flex items-center gap-2">

              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Ir al proyecto ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-cyan-400"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}

            </div>

            {/* FLECHAS */}

            <div className="flex items-center gap-2">

              <button
                onClick={previousProject}
                aria-label="Proyecto anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                onClick={nextProject}
                aria-label="Siguiente proyecto"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
