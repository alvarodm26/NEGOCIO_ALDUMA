"use client";

import { motion } from "motion/react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiPython,
} from "react-icons/si";

const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
];

const items = [...technologies, ...technologies];

export default function Technologies() {
  return (
    <section className="relative overflow-hidden border-y border-[#2A2A2E]/60 bg-[#0A0A0A] py-16">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* TITLE */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#71717A]"
        >
          Tecnologías con las que trabajamos
        </motion.p>

        <div className="relative overflow-hidden">

          {/* FADE LEFT */}

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />

          {/* FADE RIGHT */}

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />

          {/* MARQUEE */}

          <motion.div
            className="flex w-max items-center gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {items.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <motion.div
                  key={`${technology.name}-${index}`}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  className="group relative flex h-[72px] items-center gap-4 rounded-2xl border border-[#27272A] bg-[#111113] px-7 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-[#3F3F46] hover:bg-[#18181B]"
                >

                  {/* ICON */}

                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300"
                    style={{
                      backgroundColor: `${technology.color}12`,
                    }}
                  >
                    <Icon
                      size={25}
                      style={{
                        color: technology.color,
                      }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* NAME */}

                  <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.01em] text-[#A1A1AA] transition-colors duration-300 group-hover:text-white">
                    {technology.name}
                  </span>

                  {/* GLOW */}

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10"
                    style={{
                      backgroundColor: technology.color,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}