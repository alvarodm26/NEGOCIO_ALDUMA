"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "E-commerce",
    title: "E-commerce Premium",
    description:
      "Experiencia de compra moderna, rápida y optimizada para convertir visitas en ventas.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    number: "02",
    category: "Contenido",
    title: "Blog Editorial",
    description:
      "Plataforma editorial enfocada en contenido, legibilidad y una experiencia de navegación fluida.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    number: "03",
    category: "Corporativo",
    title: "Portal Corporativo",
    description:
      "Presencia digital profesional diseñada para comunicar servicios y fortalecer la marca.",
    tags: ["Next.js", "TypeScript", "CMS"],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const project = projects[current];

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="proyectos"
      className="relative isolate overflow-hidden bg-[#0A0A0A] py-20 lg:py-24"
    >
      {/* FONDO */}

      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/images/fondo.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* OSCURECER FONDO */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0A0A0A]/65" />

      {/* INTEGRACIÓN CON LA SECCIÓN */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0A0A]/10 via-transparent to-[#0A0A0A]" />

      {/* GLOW IZQUIERDO */}

      <motion.div
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[140px]"
        animate={{
          opacity: [0.35, 0.55, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GLOW DERECHO */}

      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[140px]"
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER — MISMO FORMATO QUE STATS */}

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
            <span className="h-px w-7 bg-violet-500/60" />

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              Proyectos
            </p>

            <span className="h-px w-7 bg-violet-500/60" />
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

        {/* PROJECT */}

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111113]/80 backdrop-blur-sm lg:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid min-h-[500px] lg:grid-cols-[0.85fr_1.15fr]"
            >
              {/* INFO */}

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

                <button className="mt-10 flex w-fit items-center gap-2 text-sm font-medium text-white transition-colors hover:text-violet-400">
                  Ver proyecto
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              {/* WEBSITE PREVIEW */}

              <div className="relative flex items-center justify-center overflow-hidden bg-[#0D0D0F] p-6 lg:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.12),transparent_55%)]" />

                <motion.div
                  initial={{ scale: 0.97 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#18181B] shadow-2xl"
                >
                  {/* BROWSER BAR */}

                  <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-[#202023] px-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

                    <div className="mx-auto h-5 w-2/3 rounded-md border border-white/5 bg-white/[0.03]" />
                  </div>

                  {/* WEBSITE */}

                  <div className="relative aspect-[16/10] overflow-hidden bg-[#111113]">
                    <div className="absolute left-6 right-6 top-5 flex items-center justify-between">
                      <div className="h-3 w-20 rounded bg-white/20" />

                      <div className="flex gap-3">
                        <div className="h-2 w-10 rounded bg-white/10" />
                        <div className="h-2 w-10 rounded bg-white/10" />
                        <div className="h-2 w-10 rounded bg-white/10" />
                      </div>
                    </div>

                    <div className="absolute left-6 top-[28%] max-w-[55%]">
                      <div className="h-3 w-16 rounded bg-violet-500/60" />

                      <div className="mt-4 h-5 w-44 rounded bg-white/20" />
                      <div className="mt-2 h-5 w-32 rounded bg-white/10" />

                      <div className="mt-5 h-8 w-24 rounded-lg bg-violet-600/70" />
                    </div>

                    <motion.div
                      className="absolute bottom-6 right-6 h-32 w-32 rounded-2xl border border-violet-400/20 bg-violet-500/10 blur-[1px]"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 3, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="absolute bottom-8 left-6 right-6 flex gap-3">
                      <div className="h-16 flex-1 rounded-xl border border-white/5 bg-white/[0.025]" />
                      <div className="h-16 flex-1 rounded-xl border border-white/5 bg-white/[0.025]" />
                      <div className="h-16 flex-1 rounded-xl border border-white/5 bg-white/[0.025]" />
                    </div>
                  </div>
                </motion.div>

                <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#111113]/90 px-3 py-2 backdrop-blur-md">
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
                  <span className="text-xs text-zinc-500">Preview</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLES */}

          <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 lg:px-9">
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Ir al proyecto ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-violet-500"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={previousProject}
                aria-label="Proyecto anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                onClick={nextProject}
                aria-label="Siguiente proyecto"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
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