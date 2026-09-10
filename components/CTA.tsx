"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-32 md:py-40"
    >
      {/* GLOW CENTRAL */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px]"
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

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2A2A2E] bg-[#18181B]/70 px-4 py-2 text-sm text-[#A1A1AA] backdrop-blur-xl"
        >
          <Sparkles
            size={15}
            className="text-[#7C3AED]"
          />

          Hablemos de tu proyecto
        </motion.div>

        {/* TITULO */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl"
        >
          ¿Tienes un proyecto
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600 bg-clip-text text-transparent">
            en mente?
          </span>
        </motion.h2>

        {/* DESCRIPCION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#A1A1AA]"
        >
          Cuéntanos qué necesitas y conversemos sobre cómo podemos
          convertir tu idea en una experiencia digital moderna.
        </motion.p>

        {/* BOTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-10"
        >
          <motion.a
            href="#"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 60px rgba(124,58,237,0.35)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group inline-flex items-center gap-3 rounded-full bg-[#7C3AED] px-8 py-4 text-sm font-medium shadow-[0_0_35px_rgba(124,58,237,0.15)]"
          >
            Empecemos tu proyecto

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </motion.div>

        {/* LINEA INFERIOR */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{
            width: "100%",
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mx-auto mt-20 h-px max-w-md bg-gradient-to-r from-transparent via-[#2A2A2E] to-transparent"
        />

      </div>
    </section>
  );
}