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
    setScrolled(latest > 30);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto max-w-[1320px] px-5 pt-6 sm:px-6 lg:px-8">
        <motion.nav
          animate={{
            backgroundColor: scrolled
              ? "rgba(10, 10, 10, 0.88)"
              : "rgba(10, 10, 10, 0.55)",
            borderColor: scrolled
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.07)",
            boxShadow: scrolled
              ? "0 20px 60px rgba(0,0,0,0.35)"
              : "0 10px 40px rgba(0,0,0,0.12)",
          }}
          transition={{ duration: 0.35 }}
          className="relative flex h-[72px] items-center rounded-full border px-5 backdrop-blur-2xl sm:px-6"
        >
          {/* LOGO */}

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group flex shrink-0 items-center gap-3"
          >
            {/* MARK */}

            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#7C3AED]">
              <span className="absolute h-4 w-4 rounded-full border-[2px] border-white/90" />

              <motion.span
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-7 w-7 rounded-full border border-white/20"
              />
            </span>

            <span className="text-[19px] font-semibold tracking-[-0.045em] text-white">
              ALDUMA
            </span>
          </motion.a>

          {/* DESKTOP NAV */}

          <div className="ml-auto hidden items-center lg:flex">
            <div className="mr-25 flex items-center gap-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -1 }}
className="group relative rounded-full px-4 py-2.5 text-[18px] font-medium text-[#C2410C] transition-colors duration-300 hover:text-white"                >
                  {item.label}

                  <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#7C3AED] opacity-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            {/* STATUS */}

            <div className="mr-5 hidden items-center gap-2 xl:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7C3AED]" />
              </span>

              <span className="text-xs text-[#71717A]">
                Disponible para proyectos
              </span>
            </div>

            {/* CTA */}

            <motion.a
              href="#contacto"
              whileHover={{
                scale: 1.035,
                boxShadow:
                  "0 0 35px rgba(124,58,237,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-black transition-colors hover:bg-[#F4F4F5]"
            >
              Hablemos

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </div>

          {/* MOBILE BUTTON */}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#2A2A2E] bg-[#18181B] text-[#A1A1AA] lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>

          {/* MOBILE MENU */}

          <motion.div
            initial={false}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : -10,
              pointerEvents: menuOpen ? "auto" : "none",
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-[calc(100%+12px)] overflow-hidden rounded-[24px] border border-[#2A2A2E] bg-[#111113]/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
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
                  className="flex items-center justify-between rounded-xl px-5 py-4 text-[16px] text-[#A1A1AA] hover:bg-[#18181B] hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight size={17} />
                </motion.a>
              ))}

              <div className="my-2 h-px bg-[#2A2A2E]" />

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#7C3AED] px-5 py-4 text-[16px] font-medium text-white"
              >
                Hablemos de tu proyecto
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </motion.nav>
      </div>
    </motion.header>
  );
}