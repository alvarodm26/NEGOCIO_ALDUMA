"use client";

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
      className="relative isolate overflow-hidden border-y border-blue-400/[0.08] bg-[#050B16] py-20 lg:py-24"
    >
      {/* ==================================================
          FONDO BASE
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#050B16]" />

      {/* ==================================================
          GRID AZUL — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 82%)",
          opacity: 0.55,
        }}
      />

      {/* ==================================================
          GRID SECUNDARIO — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",
          maskImage:
            "radial-gradient(ellipse at center, black 5%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 5%, transparent 72%)",
          opacity: 0.35,
        }}
      />

      {/* ==================================================
          AURORA AZUL CENTRAL — ESTÁTICA
      ================================================== */}

      <div
        className="pointer-events-none absolute left-[-35%] top-[10%] -z-30 h-[45%] w-[170%] rotate-[-7deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 4%, rgba(6,182,212,0.025) 15%, rgba(14,165,233,0.12) 30%, rgba(37,99,235,0.20) 44%, rgba(99,102,241,0.18) 58%, rgba(34,211,238,0.11) 72%, rgba(59,130,246,0.05) 85%, transparent 97%)",
          filter: "blur(55px)",
          opacity: 0.8,
        }}
      />

      {/* ==================================================
          AURORA INFERIOR — ESTÁTICA
      ================================================== */}

      <div
        className="pointer-events-none absolute right-[-40%] bottom-[-5%] -z-30 h-[50%] w-[180%] rotate-[8deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 3%, rgba(79,70,229,0.04) 18%, rgba(37,99,235,0.14) 32%, rgba(59,130,246,0.20) 47%, rgba(34,211,238,0.12) 61%, rgba(99,102,241,0.18) 76%, rgba(37,99,235,0.06) 90%, transparent 98%)",
          filter: "blur(60px)",
          opacity: 0.75,
        }}
      />

      {/* ==================================================
          GLOW CENTRAL — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-30 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, rgba(34,211,238,0.08) 28%, rgba(79,70,229,0.07) 48%, transparent 72%)",
          filter: "blur(75px)",
          opacity: 0.75,
        }}
      />

      {/* ==================================================
          ONDA SUPERIOR — ESTÁTICA
      ================================================== */}

      <div
        className="pointer-events-none absolute -left-[25%] top-[12%] -z-20 h-[130px] w-[150%] rounded-[50%]"
        style={{
          borderTop: "1px solid rgba(34,211,238,0.20)",
          borderBottom: "1px solid rgba(59,130,246,0.10)",
          boxShadow:
            "0 -15px 55px rgba(34,211,238,0.08), 0 10px 35px rgba(37,99,235,0.05)",
          opacity: 0.75,
        }}
      />

      {/* ==================================================
          ONDA INFERIOR — ESTÁTICA
      ================================================== */}

      <div
        className="pointer-events-none absolute -left-[25%] bottom-[10%] -z-20 h-[140px] w-[150%] rounded-[50%]"
        style={{
          borderTop: "1px solid rgba(99,102,241,0.15)",
          borderBottom: "1px solid rgba(34,211,238,0.12)",
          boxShadow:
            "0 15px 55px rgba(79,70,229,0.07), 0 -10px 35px rgba(34,211,238,0.04)",
          opacity: 0.7,
        }}
      />

      {/* ==================================================
          LÍNEAS DE LUZ — ESTÁTICAS
      ================================================== */}

      <div
        className="pointer-events-none absolute left-[-30%] top-[34%] -z-10 h-px w-[160%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,0.05), rgba(56,189,248,0.40), rgba(96,165,250,0.20), rgba(129,140,248,0.30), transparent)",
          boxShadow:
            "0 0 25px rgba(34,211,238,0.14), 0 0 70px rgba(37,99,235,0.10)",
          opacity: 0.65,
        }}
      />

      <div
        className="pointer-events-none absolute left-[-30%] top-[70%] -z-10 h-px w-[160%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.06), rgba(37,99,235,0.30), rgba(34,211,238,0.22), transparent)",
          boxShadow: "0 0 40px rgba(37,99,235,0.10)",
          opacity: 0.6,
        }}
      />

      {/* ==================================================
          GLOW IZQUIERDO — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute -left-[180px] top-1/2 -z-20 h-[420px] w-[420px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.16) 0%, rgba(14,116,144,0.07) 35%, transparent 72%)",
          filter: "blur(65px)",
          opacity: 0.7,
        }}
      />

      {/* ==================================================
          GLOW DERECHO — ESTÁTICO
      ================================================== */}

      <div
        className="pointer-events-none absolute -right-[180px] top-1/2 -z-20 h-[450px] w-[450px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(79,70,229,0.08) 38%, transparent 72%)",
          filter: "blur(70px)",
          opacity: 0.75,
        }}
      />

      {/* ==================================================
          PARTÍCULAS — ESTÁTICAS
      ================================================== */}

      {[
        {
          left: "10%",
          top: "20%",
          color: "bg-cyan-300",
          shadow: "0 0 14px rgba(34,211,238,0.8)",
        },
        {
          left: "24%",
          top: "70%",
          color: "bg-blue-300",
          shadow: "0 0 14px rgba(59,130,246,0.8)",
        },
        {
          left: "42%",
          top: "25%",
          color: "bg-indigo-300",
          shadow: "0 0 14px rgba(129,140,248,0.8)",
        },
        {
          left: "58%",
          top: "76%",
          color: "bg-cyan-200",
          shadow: "0 0 14px rgba(34,211,238,0.8)",
        },
        {
          left: "74%",
          top: "18%",
          color: "bg-blue-300",
          shadow: "0 0 14px rgba(59,130,246,0.8)",
        },
        {
          left: "88%",
          top: "68%",
          color: "bg-indigo-300",
          shadow: "0 0 14px rgba(129,140,248,0.8)",
        },
      ].map((particle, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute -z-10 h-1 w-1 rounded-full ${particle.color}`}
          style={{
            left: particle.left,
            top: particle.top,
            boxShadow: particle.shadow,
            opacity: 0.5,
          }}
        />
      ))}

      {/* ==================================================
          CONTENIDO
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}

        <div className="max-w-3xl">
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
        </div>

        {/* ==================================================
            PROYECTOS
        ================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14">
          {visibleProjects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm"
            >
              {/* PREVIEW */}

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

                <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-[#050B16]/20 via-transparent to-transparent" />

                {/* NUMBER */}

                <div className="pointer-events-none absolute bottom-4 left-4 z-30">
                  <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                    {project.number}
                  </span>
                </div>

                {/* CATEGORY */}

                <div className="pointer-events-none absolute bottom-4 right-4 z-30">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/50 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* INFO */}

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

                {/* TAGS */}

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

                {/* LINE */}

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
            </article>
          ))}
        </div>

        {/* ==================================================
            BOTÓN FINAL
        ================================================== */}

        <div className="mt-12 flex justify-center lg:mt-14">
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <MousePointer2 className="h-4 w-4" />

            Ver todos los proyectos

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}