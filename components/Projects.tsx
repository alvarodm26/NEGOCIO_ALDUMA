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
      className="relative overflow-hidden bg-[#050B16] py-14 lg:py-18"
    >
      {/* ============================================================
          FONDO DE STATS — ESTÁTICO
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

        {/* PARTÍCULAS ESTÁTICAS */}

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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-6 bg-cyan-400/50" />

            <span className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/70">
              Proyectos
            </span>

            <div className="h-px w-6 bg-cyan-400/50" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Experiencias digitales.
            <br />
            <span className="text-white/40">Hechas para destacar.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-[17px] leading-7 text-zinc-400">
            Diseñamos y desarrollamos sitios web modernos, rápidos y
            orientados a generar resultados reales para cada negocio.
          </p>
        </motion.div>

        {/* ============================================================
            PROYECTOS
        ============================================================ */}

        <div className="relative mt-10">
          {/* PERÍMETRO LED */}

          <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl border-2 border-cyan-400/[0.20] shadow-[0_0_12px_rgba(34,211,238,0.12),0_0_35px_rgba(14,165,233,0.06),inset_0_0_14px_rgba(14,165,233,0.04)]" />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-cyan-300/[0.08] bg-cyan-200/[0.06] md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden bg-[#07101D]/90 transition-colors duration-500 hover:bg-[#091522]"
              >
                {/* PREVIEW */}

                <div className="relative aspect-[16/10] overflow-hidden border-b border-cyan-300/[0.06] bg-[#07101D]">
                  {/* Browser bar */}

                  <div className="absolute left-0 top-0 z-20 flex h-9 w-full items-center border-b border-black/10 bg-[#111827]/95 px-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                    </div>

                    <div className="mx-auto flex h-5 max-w-[65%] flex-1 items-center justify-center rounded-md bg-white/[0.06] px-3">
                      <span className="truncate text-[9px] text-white/25">
                        {project.url
                          .replace("https://", "")
                          .replace("/", "")}
                      </span>
                    </div>

                    <div className="w-[44px]" />
                  </div>

                  {/* REAL WEBSITE */}

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

                    <div className="absolute inset-0 z-10 cursor-default" />
                  </div>

                  {/* OVERLAY */}

                  <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-[#050B16]/30 via-transparent to-transparent" />

                  {/* NUMBER */}

                  <div className="pointer-events-none absolute bottom-4 left-4 z-30">
                    <span className="text-xs font-medium tracking-[0.2em] text-cyan-300/45">
                      {project.number}
                    </span>
                  </div>

                  {/* CATEGORY */}

                  <div className="pointer-events-none absolute bottom-4 right-4 z-30">
                    <span className="rounded-full border border-cyan-300/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/50 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* INFO */}

                <div className="relative p-6 sm:p-7">
                  {/* Glow interno */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.04] blur-3xl" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-cyan-300/60 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.04] group-hover:text-cyan-300">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>

                  {/* TAGS */}

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LINE */}

                  <div className="my-6 h-px w-full bg-white/[0.05]" />

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
        </div>

        {/* ============================================================
            BOTÓN FINAL
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-3 rounded-full border border-cyan-300/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-400/[0.04] hover:text-white"
          >
            <MousePointer2 className="h-4 w-4 text-cyan-300/60" />

            Ver todos los proyectos

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}