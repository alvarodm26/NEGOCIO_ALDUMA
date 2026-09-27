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

const visibleProjects = projects.slice(0, 4);

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-[#050B16] py-24 sm:py-28"
    >
      {/* Aurora diagonal */}
      <motion.div
        className="pointer-events-none absolute -left-[20%] top-[15%] h-[45%] w-[80%] rotate-[-20deg] rounded-full bg-blue-500/10 blur-[120px]"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Segunda aurora */}
      <motion.div
        className="pointer-events-none absolute -right-[25%] top-[35%] h-[40%] w-[70%] rotate-[25deg] rounded-full bg-cyan-400/10 blur-[130px]"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Banda luminosa */}
      <motion.div
        className="pointer-events-none absolute left-[-10%] top-[45%] h-40 w-[120%] rotate-[-8deg] bg-gradient-to-r from-transparent via-blue-500/[0.04] to-transparent blur-3xl"
        animate={{
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Onda 1 */}
      <motion.div
        className="pointer-events-none absolute left-[-15%] top-[8%] h-[500px] w-[500px] rounded-full border border-blue-400/[0.035]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Onda 2 */}
      <motion.div
        className="pointer-events-none absolute right-[-10%] bottom-[5%] h-[600px] w-[600px] rounded-full border border-cyan-400/[0.03]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow izquierdo */}
      <motion.div
        className="pointer-events-none absolute left-[5%] top-[55%] h-72 w-72 rounded-full bg-blue-600/[0.05] blur-[100px]"
        animate={{
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow derecho */}
      <motion.div
        className="pointer-events-none absolute right-[5%] top-[25%] h-80 w-80 rounded-full bg-indigo-500/[0.05] blur-[110px]"
        animate={{
          y: [30, -30, 30],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow central */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[60%] h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[130px]"
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Líneas verticales */}
      <div className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.025] to-transparent" />
      <div className="pointer-events-none absolute right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.025] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              Proyectos
            </span>
          </div>

          <h2 className="text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Experiencias digitales
            <br />
            <span className="text-white/40">hechas para destacar.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Diseñamos y desarrollamos sitios web modernos, rápidos y
            orientados a generar resultados reales para cada negocio.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm"
            >
              {/* Browser preview */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-[#0A101C]">
                {/* Browser bar */}
                <div className="absolute left-0 top-0 z-20 flex h-9 w-full items-center border-b border-black/10 bg-[#111827]/95 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>

                  <div className="mx-auto flex h-5 max-w-[65%] flex-1 items-center justify-center rounded-md bg-white/[0.06] px-3">
                    <span className="truncate text-[9px] text-white/25">
                      {project.url.replace("https://", "").replace("/", "")}
                    </span>
                  </div>

                  <div className="w-[44px]" />
                </div>

                {/* Real website — scripts disabled */}
                <div className="absolute left-0 top-9 h-[calc(100%-36px)] w-full overflow-hidden">
                  <iframe
                    src={project.url}
                    title={`Vista previa de ${project.title}`}
                    sandbox="allow-same-origin"
                    className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left border-0"
                    style={{
                      transform: "scale(0.5)",
                    }}
                    loading="lazy"
                    scrolling="no"
                  />

                  {/* Prevent any interaction with the preview */}
                  <div className="absolute inset-0 z-10 cursor-default" />
                </div>

                {/* Preview overlay */}
                <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-[#050B16]/20 via-transparent to-transparent" />

                {/* Number */}
                <div className="pointer-events-none absolute bottom-4 left-4 z-30">
                  <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                    {project.number}
                  </span>
                </div>

                {/* Category */}
                <div className="pointer-events-none absolute bottom-4 right-4 z-30">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/50 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-white/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="my-6 h-px w-full bg-white/[0.07]" />

                {/* CTA */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  Ver proyecto
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center lg:mt-14"
        >
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <MousePointer2 className="h-4 w-4" />

            Ver todos los proyectos

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}