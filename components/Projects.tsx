"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "E-commerce",
    title: "E-commerce Premium",
    description:
      "Una experiencia de compra moderna diseñada para presentar productos, generar confianza y facilitar la conversión.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    number: "02",
    category: "Editorial",
    title: "Blog Editorial",
    description:
      "Una plataforma de contenido limpia y rápida, pensada para destacar publicaciones y mejorar la lectura.",
    technologies: ["Next.js", "CMS", "SEO"],
    featured: false,
  },
  {
    number: "03",
    category: "Corporativo",
    title: "Portal Corporativo",
    description:
      "Una presencia digital profesional para comunicar servicios, generar confianza y captar oportunidades.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-2xl font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            Proyectos
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:whitespace-nowrap md:text-5xl">
  Diseño que convierte ideas en experiencias digitales.
</h2>

<p className="mt-6 text-lg leading-8 text-[#A1A1AA] md:whitespace-nowrap">
  Creamos productos digitales con una combinación de diseño, tecnología y atención al detalle.
</p>
        </motion.div>

        {/* PROJECTS */}
        <div className="mt-20 space-y-6">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[2rem] border border-[#2A2A2E] bg-[#111113] ${
                project.featured ? "min-h-[520px]" : "min-h-[360px]"
              }`}
            >

              {/* GLOW */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/10 blur-[100px] transition-opacity duration-700 group-hover:bg-violet-600/20" />

              <div className="relative grid h-full lg:grid-cols-2">

                {/* INFO */}
                <div className="flex flex-col justify-between p-8 md:p-12">

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#52525B]">
                        {project.number}
                      </span>

                      <span className="rounded-full border border-[#2A2A2E] px-3 py-1 text-xs text-[#71717A]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-16 max-w-md text-3xl font-semibold tracking-tight md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-md leading-7 text-[#A1A1AA]">
                      {project.description}
                    </p>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="mt-10 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#18181B] px-3 py-1.5 text-xs text-[#A1A1AA]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>

                {/* VISUAL */}
                <div className="relative flex items-center justify-center p-8 md:p-12">

                  <motion.div
                    whileHover={{
                      scale: 1.025,
                      rotateY: -3,
                      rotateX: 2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 20,
                    }}
                    className="relative w-full max-w-xl"
                  >

                    {/* WINDOW */}
                    <div className="overflow-hidden rounded-2xl border border-[#2A2A2E] bg-[#0A0A0A] shadow-2xl">

                      {/* BROWSER BAR */}
                      <div className="flex items-center gap-2 border-b border-[#2A2A2E] px-5 py-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

                        <div className="mx-auto h-5 w-32 rounded-full bg-[#18181B]" />
                      </div>

                      {/* WEBSITE MOCKUP */}
                      <div className="p-6 md:p-8">

                        <div className="flex items-center justify-between">
                          <div className="h-3 w-20 rounded bg-[#2A2A2E]" />

                          <div className="flex gap-2">
                            <div className="h-2 w-8 rounded bg-[#18181B]" />
                            <div className="h-2 w-8 rounded bg-[#18181B]" />
                            <div className="h-2 w-8 rounded bg-[#18181B]" />
                          </div>
                        </div>

                        <div className="mt-12 grid gap-4 md:grid-cols-2">

                          <div>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "90%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              className="h-7 rounded-lg bg-[#2A2A2E]"
                            />

                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "65%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.7, delay: 0.5 }}
                              className="mt-3 h-7 rounded-lg bg-[#18181B]"
                            />

                            <div className="mt-5 h-3 w-full rounded bg-[#18181B]" />
                            <div className="mt-2 h-3 w-4/5 rounded bg-[#18181B]" />

                            <div className="mt-7 h-9 w-28 rounded-full bg-[#7C3AED]" />
                          </div>

                          <motion.div
                            animate={{
                              y: [-5, 5, -5],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="hidden rounded-2xl border border-violet-500/20 bg-violet-500/10 md:block"
                          />
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-3">
                          <div className="h-20 rounded-xl bg-[#18181B]" />
                          <div className="h-20 rounded-xl bg-[#18181B]" />

                          <motion.div
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                            className="h-20 rounded-xl bg-violet-500/10"
                          />
                        </div>

                      </div>
                    </div>

                    {/* FLOATING ARROW */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                      }}
                      className="absolute -bottom-5 -right-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#2A2A2E] bg-[#18181B] shadow-xl"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>

                  </motion.div>
                </div>

              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}