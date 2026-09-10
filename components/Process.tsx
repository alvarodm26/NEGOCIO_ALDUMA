"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, objetivos y necesidades para definir qué debe lograr tu sitio web.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creamos una experiencia visual moderna, clara y alineada con la identidad de tu empresa.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Convertimos el diseño en una web rápida, responsive y construida con tecnologías modernas.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description:
      "Probamos, optimizamos y dejamos tu sitio preparado para ofrecer una experiencia sólida.",
  },
];

export default function Process() {
  return (
    <section id="nosotros" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
              Nuestro proceso
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              De una idea a una experiencia digital.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-lg text-lg leading-8 text-[#A1A1AA]">
              Trabajamos de forma estructurada para convertir objetivos de
              negocio en productos digitales claros, rápidos y efectivos.
            </p>
          </div>
        </motion.div>

        {/* PROCESS */}
        <div className="relative mt-24">

          {/* LINEA */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[#2A2A2E] md:block" />

          <div className="space-y-16 md:space-y-20">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative grid gap-8 md:grid-cols-[40px_120px_1fr] md:items-start md:gap-10"
              >

                {/* PUNTO */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#2A2A2E] bg-[#0A0A0A] transition-colors duration-300 group-hover:border-[#7C3AED]">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-[#7C3AED]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.25,
                      type: "spring",
                      stiffness: 300,
                    }}
                  />
                </div>

                {/* NUMERO */}
                <span className="text-sm font-medium tracking-wider text-[#52525B] md:pt-2">
                  {step.number}
                </span>

                {/* CONTENIDO */}
                <div className="border-b border-[#2A2A2E] pb-16 md:pb-20">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 max-w-2xl leading-7 text-[#A1A1AA]">
                        {step.description}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{
                        x: 4,
                        y: 4,
                      }}
                      className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2A2A2E] text-[#71717A] transition-colors group-hover:border-[#7C3AED]/40 group-hover:text-white sm:flex"
                    >
                      <ArrowDown size={17} />
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}