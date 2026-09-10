"use client";

import { motion } from "motion/react";
import {
  Zap,
  Smartphone,
  Code2,
  Sparkles,
} from "lucide-react";

const strengths = [
  {
    number: "01",
    icon: Zap,
    title: "Rendimiento",
    description:
      "Construimos sitios rápidos y optimizados para ofrecer una experiencia fluida desde el primer segundo.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Responsive",
    description:
      "Cada experiencia se adapta cuidadosamente a móviles, tablets y escritorio.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Tecnología moderna",
    description:
      "Utilizamos herramientas actuales para crear productos mantenibles, escalables y preparados para crecer.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Atención al detalle",
    description:
      "Cuidamos tipografía, espaciado, interacción y movimiento para conseguir una experiencia consistente.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-[#2A2A2E]/60 py-32">
      
      {/* GLOW */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            El enfoque ALDUMA
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
            No solo hacemos sitios web.
            <br />
            Creamos experiencias.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
            Cada decisión de diseño y desarrollo tiene un propósito:
            conseguir una experiencia digital clara, rápida y memorable.
          </p>
        </motion.div>

        {/* STRENGTHS */}
        <div className="mt-20 grid overflow-hidden rounded-[2rem] border border-[#2A2A2E] bg-[#2A2A2E] sm:grid-cols-2 lg:grid-cols-4">

          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <motion.article
                key={strength.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  backgroundColor: "#18181B",
                }}
                className="group bg-[#0A0A0A] p-8 transition-colors duration-300 md:p-10"
              >

                {/* TOP */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A2A2E] bg-[#18181B]"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#7C3AED]"
                    />
                  </motion.div>

                  <span className="text-xs tracking-wider text-[#52525B]">
                    {strength.number}
                  </span>
                </div>

                {/* CONTENT */}
                <h3 className="mt-14 text-xl font-semibold">
                  {strength.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#A1A1AA]">
                  {strength.description}
                </p>

                {/* LINE */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + 0.3,
                  }}
                  className="mt-8 h-px bg-[#7C3AED]/40"
                />

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}