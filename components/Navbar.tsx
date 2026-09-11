"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-10 lg:pt-6">
        <motion.nav
          animate={{
            backgroundColor: scrolled
              ? "rgba(10,10,10,0.88)"
              : "rgba(10,10,10,0.48)",
            borderColor: scrolled
              ? "rgba(255,255,255,0.11)"
              : "rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 20px 55px rgba(0,0,0,0.32)"
              : "0 12px 40px rgba(0,0,0,0.12)",
          }}
          transition={{ duration: 0.4 }}
          className="relative flex h-[74px] items-center rounded-full border px-6 backdrop-blur-2xl sm:px-7"
        >
          {/* ===================================================== */}
          {/* LED AMARILLO — RECORRE TODO EL PERÍMETRO */}
          {/* ===================================================== */}

          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full">
            {/* Superior */}
            <motion.div
              animate={{
                left: ["-18%", "118%"],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 h-[2px] w-[18%] rounded-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-[0_0_8px_#FACC15,0_0_18px_rgba(250,204,21,0.85)]"
            />

            {/* Derecha */}
            <motion.div
              animate={{
                top: ["-18%", "118%"],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "linear",
                delay: 0.95,
              }}
              className="absolute right-0 h-[18%] w-[2px] rounded-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent shadow-[0_0_8px_#FACC15,0_0_18px_rgba(250,204,21,0.85)]"
            />

            {/* Inferior */}
            <motion.div
              animate={{
                right: ["-18%", "118%"],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "linear",
                delay: 1.9,
              }}
              className="absolute bottom-0 h-[2px] w-[18%] rounded-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-[0_0_8px_#FACC15,0_0_18px_rgba(250,204,21,0.85)]"
            />

            {/* Izquierda */}
            <motion.div
              animate={{
                bottom: ["-18%", "118%"],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "linear",
                delay: 2.85,
              }}
              className="absolute left-0 h-[18%] w-[2px] rounded-full bg-gradient-to-t from-transparent via-yellow-300 to-transparent shadow-[0_0_8px_#FACC15,0_0_18px_rgba(250,204,21,0.85)]"
            />
          </div>

          {/* ===================================================== */}
          {/* LOGO */}
          {/* ===================================================== */}

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group relative z-10 flex shrink-0 items-center gap-3"
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-violet-600 shadow-[0_0_28px_rgba(124,58,237,0.20)]">
              <span className="absolute h-[17px] w-[17px] rounded-full border-[2px] border-white/90" />

              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-8 w-8 rounded-full border border-white/20"
              />

              <span className="absolute h-1.5 w-1.5 rounded-full bg-white" />
            </span>

            <span className="text-[19px] font-semibold tracking-[-0.045em] text-white">
              ALDUMA
            </span>
          </motion.a>

          {/* ===================================================== */}
          {/* DESKTOP */}
          {/* ===================================================== */}

          <div className="ml-auto hidden items-center lg:flex">

            {/* NAVIGATION */}
            <div className="mr-14 flex items-center gap-5">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -1 }}
                  className="group relative rounded-full px-5 py-3 text-[16px] font-medium tracking-[0.005em] text-zinc-400 transition-colors duration-300 hover:text-white"
                >
                  {item.label}

                  <span className="absolute bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 rounded-full bg-violet-400 opacity-0 transition-all duration-300 group-hover:w-7 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            {/* BOTÓN */}
            <motion.a
              href="#contacto"
              whileHover={{
                scale: 1.035,
                boxShadow:
                  "0 0 40px rgba(124,58,237,0.34)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group mr-2 inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-[14px] font-medium text-white shadow-[0_0_28px_rgba(124,58,237,0.12)] transition-colors duration-300 hover:bg-violet-500"
            >
              Hablemos

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </div>

          {/* ===================================================== */}
          {/* MOBILE BUTTON */}
          {/* ===================================================== */}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-10 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <AnimateIcon open={menuOpen} />
          </motion.button>

          {/* ===================================================== */}
          {/* MOBILE MENU */}
          {/* ===================================================== */}

          <motion.div
            initial={false}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : -10,
              scale: menuOpen ? 1 : 0.98,
              pointerEvents: menuOpen ? "auto" : "none",
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-[calc(100%+12px)] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0A0A0A]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: menuOpen ? 1 : 0,
                    x: menuOpen ? 0 : -10,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: menuOpen ? index * 0.05 : 0,
                  }}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={16}
                    className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400"
                  />
                </motion.a>
              ))}

              <div className="my-2 h-px bg-white/[0.06]" />

              <motion.a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-violet-500"
              >
                Hablemos de tu proyecto

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.nav>
      </div>
    </motion.header>
  );
}

function AnimateIcon({ open }: { open: boolean }) {
  return (
    <motion.div
      animate={{ rotate: open ? 90 : 0 }}
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {open ? <X size={19} /> : <Menu size={19} />}
    </motion.div>
  );
}