"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Mail,
  MessageCircle,
  MessageSquare,
  Monitor,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

const projectTypes = [
  {
    id: "web",
    title: "Sitio web",
    description: "Landing, corporativa o institucional",
    icon: Monitor,
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Tienda online y soluciones de venta",
    icon: ShoppingBag,
  },
  {
    id: "app",
    title: "Aplicación web",
    description: "Plataformas y sistemas personalizados",
    icon: Code2,
  },
  {
    id: "other",
    title: "Otro proyecto",
    description: "Cuéntanos qué tienes en mente",
    icon: MessageSquare,
  },
];

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [form, setForm] = useState({
    type: "",
    name: "",
    email: "",
    message: "",
  });

  const selectedProject = projectTypes.find(
    (project) => project.id === form.type
  );

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const closeModal = () => {
    if (isSending) return;

    setIsOpen(false);

    setTimeout(() => {
      setStep(1);
      setIsSent(false);
    }, 300);
  };

  const handleSubmit = async () => {
    if (isSending) return;

    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xyeyvlev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          project_type: selectedProject?.title || form.type,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "No se pudo enviar la solicitud.");
      }

      setIsSent(true);

      setForm({
        type: "",
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      alert("No se pudo enviar la solicitud. Inténtalo nuevamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section
        id="contacto"
        className="relative isolate overflow-hidden border-y border-[#3D321C]/70 bg-[#080705] py-20 lg:py-24"
      >
        {/* =========================================================
            FONDO ANIMADO — MISMO ESTILO QUE PROCESS / TECHNOLOGIES
        ========================================================== */}

        {/* GRID PRINCIPAL */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(217,158,48,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(217,158,48,0.16) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 90% 100% at 50% 50%, black 15%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 100% at 50% 50%, black 15%, transparent 85%)",
          }}
          animate={{
            backgroundPosition: [
              "0px 0px",
              "36px 36px",
              "0px 72px",
              "-36px 36px",
              "0px 0px",
            ],
            opacity: [0.35, 0.75, 0.45, 0.8, 0.35],
          }}
          transition={{
            backgroundPosition: {
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* GRID SECUNDARIO */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,183,65,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(245,183,65,0.10) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
            maskImage:
              "radial-gradient(ellipse 80% 100% at 50% 50%, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 100% at 50% 50%, black, transparent 80%)",
          }}
          animate={{
            backgroundPosition: [
              "0px 0px",
              "-70px 70px",
              "0px 140px",
              "70px 70px",
              "0px 0px",
            ],
            opacity: [0.18, 0.45, 0.22, 0.5, 0.18],
          }}
          transition={{
            backgroundPosition: {
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* GRID DIAGONAL */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(217,158,48,0.13) 1px, transparent 1px)",
            backgroundSize: "160px 160px",
            maskImage:
              "radial-gradient(ellipse 75% 100% at 50% 50%, black 10%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 100% at 50% 50%, black 10%, transparent 82%)",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px", "160px 0px", "0px 0px"],
            opacity: [0.12, 0.3, 0.16, 0.12],
          }}
          transition={{
            backgroundPosition: {
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* AURORA SUPERIOR */}
        <motion.div
          className="pointer-events-none absolute left-[-30%] top-[16%] h-[190px] w-[160%] -rotate-[5deg] rounded-[50%]"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(120,78,15,0.04) 20%, rgba(217,158,48,0.13) 38%, rgba(245,183,65,0.22) 50%, rgba(217,158,48,0.12) 64%, transparent 95%)",
            filter: "blur(55px)",
          }}
          animate={{
            x: ["-8%", "8%", "-5%", "7%", "-8%"],
            y: [0, 28, -18, 20, 0],
            rotate: [-5, -2, -7, -3, -5],
            scaleY: [0.8, 1.2, 0.9, 1.12, 0.8],
            opacity: [0.35, 0.85, 0.45, 0.75, 0.35],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* AURORA INFERIOR */}
        <motion.div
          className="pointer-events-none absolute left-[-30%] bottom-[10%] h-[180px] w-[160%] rotate-[5deg] rounded-[50%]"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(120,78,15,0.05) 20%, rgba(184,121,24,0.15) 40%, rgba(245,183,65,0.13) 55%, rgba(217,158,48,0.18) 70%, transparent 95%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: ["7%", "-8%", "5%", "-6%", "7%"],
            y: [0, -25, 16, -20, 0],
            rotate: [5, 2, 7, 3, 5],
            scaleY: [1, 0.8, 1.18, 0.9, 1],
            opacity: [0.3, 0.75, 0.4, 0.7, 0.3],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* GLOW CENTRAL */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,183,65,0.16) 0%, rgba(217,158,48,0.09) 32%, transparent 70%)",
            filter: "blur(75px)",
          }}
          animate={{
            scale: [1, 1.18, 0.9, 1.12, 1],
            x: ["-50%", "-47%", "-53%", "-48%", "-50%"],
            y: ["-50%", "-54%", "-47%", "-52%", "-50%"],
            opacity: [0.35, 0.75, 0.45, 0.7, 0.35],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ONDA SUPERIOR */}
        <motion.div
          className="pointer-events-none absolute -left-[25%] top-[13%] h-[230px] w-[150%] rounded-[50%]"
          style={{
            border: "1px solid rgba(217,158,48,0.22)",
            boxShadow:
              "0 -15px 60px rgba(217,158,48,0.10), 0 10px 40px rgba(245,183,65,0.04)",
          }}
          animate={{
            x: ["-4%", "5%", "-3%", "4%", "-4%"],
            y: [0, -18, 10, -12, 0],
            scaleY: [1, 1.22, 0.9, 1.15, 1],
            rotate: [-4, -1, -6, -2, -4],
            opacity: [0.25, 0.75, 0.35, 0.65, 0.25],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ONDA SUPERIOR INTERNA */}
        <motion.div
          className="pointer-events-none absolute -left-[18%] top-[18%] h-[140px] w-[135%] rounded-[50%]"
          style={{
            border: "1px solid rgba(245,183,65,0.28)",
            boxShadow: "0 0 45px rgba(245,183,65,0.08)",
          }}
          animate={{
            x: ["4%", "-5%", "3%", "-4%", "4%"],
            y: [0, 14, -8, 10, 0],
            scaleY: [1, 0.82, 1.18, 0.9, 1],
            rotate: [3, 6, 1, 5, 3],
            opacity: [0.2, 0.65, 0.3, 0.55, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ONDA INFERIOR */}
        <motion.div
          className="pointer-events-none absolute -left-[25%] bottom-[10%] h-[210px] w-[150%] rounded-[50%]"
          style={{
            border: "1px solid rgba(184,121,24,0.24)",
            boxShadow:
              "0 15px 60px rgba(184,121,24,0.10), 0 -10px 40px rgba(245,183,65,0.04)",
          }}
          animate={{
            x: ["4%", "-5%", "3%", "-4%", "4%"],
            y: [0, 20, -12, 14, 0],
            scaleY: [1, 0.82, 1.18, 0.9, 1],
            rotate: [4, 1, 6, 2, 4],
            opacity: [0.22, 0.7, 0.32, 0.6, 0.22],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ONDA INFERIOR INTERNA */}
        <motion.div
          className="pointer-events-none absolute -left-[18%] bottom-[16%] h-[120px] w-[135%] rounded-[50%]"
          style={{
            border: "1px solid rgba(245,183,65,0.24)",
            boxShadow: "0 0 45px rgba(245,183,65,0.07)",
          }}
          animate={{
            x: ["-3%", "5%", "-4%", "4%", "-3%"],
            y: [0, -14, 8, -10, 0],
            scaleY: [1, 1.16, 0.88, 1.12, 1],
            rotate: [-3, -6, -1, -5, -3],
            opacity: [0.18, 0.6, 0.28, 0.5, 0.18],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* LÍNEA DE LUZ SUPERIOR */}
        <motion.div
          className="pointer-events-none absolute left-[-25%] top-[24%] h-px w-[150%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(245,183,65,0.06), rgba(245,183,65,0.42), rgba(255,224,153,0.14), transparent)",
            boxShadow:
              "0 0 30px rgba(245,183,65,0.13), 0 0 70px rgba(217,158,48,0.08)",
          }}
          animate={{
            x: ["-10%", "10%", "-10%"],
            opacity: [0.2, 0.9, 0.2],
            scaleX: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* LÍNEA DE LUZ CENTRAL */}
        <motion.div
          className="pointer-events-none absolute left-[-25%] top-[50%] h-px w-[150%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(245,183,65,0.04), rgba(217,158,48,0.36), rgba(255,224,153,0.12), transparent)",
            boxShadow: "0 0 35px rgba(217,158,48,0.11)",
          }}
          animate={{
            x: ["8%", "-8%", "8%"],
            opacity: [0.16, 0.75, 0.16],
            scaleX: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* LÍNEA DE LUZ INFERIOR */}
        <motion.div
          className="pointer-events-none absolute left-[-25%] top-[78%] h-px w-[150%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(184,121,24,0.04), rgba(245,183,65,0.32), rgba(255,224,153,0.1), transparent)",
            boxShadow: "0 0 35px rgba(245,183,65,0.09)",
          }}
          animate={{
            x: ["-8%", "8%", "-8%"],
            opacity: [0.15, 0.7, 0.15],
            scaleX: [0.85, 1.12, 0.85],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* GLOW IZQUIERDO */}
        <motion.div
          className="pointer-events-none absolute -left-[180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.025) 0%, rgba(217,158,48,0.09) 35%, transparent 72%)",
            filter: "blur(65px)",
          }}
          animate={{
            x: [0, 75, 20, -25, 0],
            y: [0, 30, -20, 15, 0],
            scale: [0.9, 1.18, 0.95, 1.1, 0.9],
            opacity: [0.3, 0.75, 0.4, 0.65, 0.3],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* GLOW DERECHO */}
        <motion.div
          className="pointer-events-none absolute -right-[180px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(184,121,24,0.10) 38%, transparent 72%)",
            filter: "blur(70px)",
          }}
          animate={{
            x: [0, -80, -20, -45, 0],
            y: [0, -25, 22, -15, 0],
            scale: [1, 0.88, 1.18, 0.96, 1],
            opacity: [0.3, 0.7, 0.4, 0.65, 0.3],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* LÍNEAS VERTICALES */}
        <motion.div
          className="pointer-events-none absolute left-[12%] top-0 h-full w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(217,158,48,0.16), transparent)",
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scaleY: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute right-[14%] top-0 h-full w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(245,183,65,0.14), transparent)",
          }}
          animate={{
            opacity: [0.15, 0.65, 0.15],
            scaleY: [1, 0.72, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* PARTÍCULAS */}
        {[
          ["12%", "20%", 6],
          ["24%", "72%", 8],
          ["35%", "28%", 7],
          ["47%", "82%", 9],
          ["58%", "18%", 6],
          ["69%", "68%", 8],
          ["76%", "30%", 7],
          ["88%", "76%", 9],
          ["92%", "22%", 6],
          ["18%", "46%", 8],
          ["82%", "50%", 7],
          ["63%", "88%", 10],
        ].map(([left, top, duration], index) => (
          <motion.div
            key={index}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#F5C35B]"
            style={{
              left,
              top,
              boxShadow:
                "0 0 12px rgba(245,195,91,0.7), 0 0 24px rgba(217,158,48,0.3)",
            }}
            animate={{
              x: [0, index % 2 === 0 ? 20 : -25, index % 3 === 0 ? -8 : 10, 0],
              y: [0, index % 2 === 0 ? -30 : 22, index % 3 === 0 ? 15 : -12, 0],
              opacity: [0.12, 0.9, 0.2, 0.12],
              scale: [1, 1.8, 1.1, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.55,
            }}
          />
        ))}

        {/* =========================================================
            CONTENIDO
        ========================================================== */}

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-10">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D99E30]/20 bg-[#D99E30]/[0.05] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl"
          >
            <Sparkles size={15} className="text-[#F5B741]" />
            Hablemos de tu proyecto
          </motion.div>

          {/* TITULO */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl"
          >
            ¿Tienes un proyecto
            <br />
            <span className="bg-gradient-to-r from-[#B87918] via-[#F5B741] to-[#D99E30] bg-clip-text text-transparent">
              en mente?
            </span>
          </motion.h2>

          {/* DESCRIPCIÓN */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mx-auto mt-6 max-w-2xl text-[17px] leading-7 text-zinc-400"
          >
            Cuéntanos qué necesitas y conversemos sobre cómo podemos
            convertir tu idea en una experiencia digital moderna.
          </motion.p>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* EMPECEMOS TU PROYECTO */}
            <motion.button
              type="button"
              onClick={() => {
                setIsOpen(true);
                setIsSent(false);
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 70px rgba(217,158,48,0.30)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#B87918] via-[#D99E30] to-[#F5B741] px-8 py-4 text-sm font-medium text-[#080705] shadow-[0_0_35px_rgba(217,158,48,0.16)]"
            >
              Empecemos tu proyecto

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.button>

            {/* CONTACTANOS */}
            <motion.a
              href={`https://wa.me/51958032002?text=${encodeURIComponent(
                "Hola, vi su página web y me gustaría solicitar información sobre un proyecto. Quisiera contarles mi idea y recibir orientación. ¡Gracias!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 70px rgba(37,211,102,0.25)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(37,211,102,0.15)] transition-colors hover:bg-[#20bd5a]"
            >
              <MessageCircle
                size={19}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span>Contáctanos</span>
            </motion.a>
          </motion.div>

          {/* LINEA */}
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
            className="mx-auto mt-9 h-px max-w-md bg-gradient-to-r from-transparent via-[#D99E30]/20 to-transparent"
          />
        </div>
      </section>

      {/* =========================================================
          MODAL
      ========================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* PANEL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-[#D99E30]/20 bg-[#0a0907] shadow-2xl shadow-black/50"
            >
              {/* TOP GLOW */}
              <motion.div
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#D99E30]/15 blur-[80px]"
                animate={{
                  scale: [1, 1.2, 0.9, 1],
                  opacity: [0.5, 0.8, 0.45, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* CLOSE */}
              <button
                onClick={closeModal}
                disabled={isSending}
                className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-zinc-500 transition-all hover:bg-white/[0.08] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <X size={17} />
              </button>

              <div className="relative p-7 sm:p-10">
                {/* SUCCESS */}
                {isSent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-10 text-center"
                  >
                    <motion.div
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 15,
                      }}
                      className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#D99E30]/25 bg-[#D99E30]/10"
                    >
                      <Check size={34} className="text-[#F5B741]" />
                    </motion.div>

                    <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                      Solicitud enviada.
                    </h3>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-500">
                      Gracias por contactarnos. Hemos recibido tu solicitud y
                      nos pondremos en contacto contigo pronto.
                    </p>

                    <motion.button
                      type="button"
                      onClick={closeModal}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-8 rounded-xl bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                    >
                      Cerrar
                    </motion.button>
                  </motion.div>
                ) : (
                  <>
                    {/* HEADER */}
                    <div className="mb-10">
                      <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#F5B741]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D99E30]" />
                        {step === 3 ? "Resumen" : `Paso 0${step} de 02`}
                      </div>

                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="header-1"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                          >
                            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                              ¿Qué podemos crear?
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-500">
                              Cuéntanos qué tipo de experiencia tienes en mente.
                            </p>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="header-2"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                          >
                            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                              Hablemos del proyecto.
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-500">
                              Unos datos y podremos entender mejor lo que
                              necesitas.
                            </p>
                          </motion.div>
                        )}

                        {step === 3 && (
                          <motion.div
                            key="header-3"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                          >
                            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                              Revisa tu solicitud.
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-500">
                              Todo listo. Comprueba que los datos sean correctos
                              antes de enviarlos.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* PROGRESS */}
                    <div className="mb-8 flex gap-2">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]"
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#B87918] via-[#D99E30] to-[#F5B741]"
                            animate={{
                              width: step >= item ? "100%" : "0%",
                            }}
                            transition={{
                              duration: 0.4,
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* CONTENT */}
                    <AnimatePresence mode="wait">
                      {/* STEP 1 */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          {projectTypes.map((project) => {
                            const Icon = project.icon;
                            const selected = form.type === project.id;

                            return (
                              <motion.button
                                key={project.id}
                                type="button"
                                onClick={() =>
                                  updateForm("type", project.id)
                                }
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.99 }}
                                className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                                  selected
                                    ? "border-[#D99E30]/45 bg-[#D99E30]/[0.08]"
                                    : "border-white/[0.07] bg-white/[0.02] hover:border-[#D99E30]/20 hover:bg-white/[0.04]"
                                }`}
                              >
                                <div
                                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all ${
                                    selected
                                      ? "border-[#D99E30]/35 bg-[#D99E30]/10 text-[#F5B741]"
                                      : "border-white/[0.07] bg-white/[0.03] text-zinc-500 group-hover:text-zinc-300"
                                  }`}
                                >
                                  <Icon size={20} strokeWidth={1.6} />
                                </div>

                                <div className="flex-1">
                                  <p className="font-medium text-white">
                                    {project.title}
                                  </p>

                                  <p className="mt-1 text-xs text-zinc-500">
                                    {project.description}
                                  </p>
                                </div>

                                <div
                                  className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                                    selected
                                      ? "border-[#D99E30] bg-[#D99E30] text-[#080705]"
                                      : "border-white/[0.12]"
                                  }`}
                                >
                                  {selected && <Check size={12} />}
                                </div>
                              </motion.button>
                            );
                          })}

                          <motion.button
                            type="button"
                            disabled={!form.type}
                            onClick={() => setStep(2)}
                            whileHover={{
                              scale: form.type ? 1.01 : 1,
                            }}
                            whileTap={{
                              scale: form.type ? 0.98 : 1,
                            }}
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B87918] via-[#D99E30] to-[#F5B741] py-3.5 text-sm font-medium text-[#080705] transition-all disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            Continuar
                            <ChevronRight size={17} />
                          </motion.button>
                        </motion.div>
                      )}

                      {/* STEP 2 */}
                      {step === 2 && (
                        <motion.form
                          key="step2"
                          onSubmit={(e) => {
                            e.preventDefault();
                            setStep(3);
                          }}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-5"
                        >
                          <div>
                            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
                              Nombre
                            </label>

                            <input
                              required
                              value={form.name}
                              onChange={(e) =>
                                updateForm("name", e.target.value)
                              }
                              placeholder="Tu nombre"
                              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-[#D99E30]/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-[#D99E30]/20"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
                              Email
                            </label>

                            <div className="relative">
                              <Mail
                                size={16}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                              />

                              <input
                                required
                                type="email"
                                value={form.email}
                                onChange={(e) =>
                                  updateForm("email", e.target.value)
                                }
                                placeholder="tu@email.com"
                                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-[#D99E30]/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-[#D99E30]/20"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
                              Cuéntanos un poco más
                            </label>

                            <textarea
                              required
                              value={form.message}
                              onChange={(e) =>
                                updateForm("message", e.target.value)
                              }
                              rows={4}
                              placeholder="¿Qué tienes en mente? No necesitas tenerlo todo definido."
                              className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-zinc-700 focus:border-[#D99E30]/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-[#D99E30]/20"
                            />
                          </div>

                          <div className="flex gap-3 pt-2">
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] px-5 py-3.5 text-sm text-zinc-400 transition-all hover:bg-white/[0.04] hover:text-white"
                            >
                              <ArrowLeft size={16} />
                              Atrás
                            </button>

                            <button
                              type="submit"
                              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B87918] via-[#D99E30] to-[#F5B741] py-3.5 text-sm font-medium text-[#080705] transition-all hover:brightness-110"
                            >
                              Revisar solicitud
                              <ChevronRight size={17} />
                            </button>
                          </div>
                        </motion.form>
                      )}

                      {/* STEP 3 */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            initial={{
                              scale: 0,
                              opacity: 0,
                            }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 250,
                              damping: 15,
                              delay: 0.1,
                            }}
                            className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#D99E30]/25 bg-[#D99E30]/10"
                          >
                            <Check
                              size={28}
                              className="text-[#F5B741]"
                            />
                          </motion.div>

                          <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                            <div className="border-b border-white/[0.07] p-5">
                              <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                                Tipo de proyecto
                              </p>

                              <p className="mt-2 text-sm font-medium text-white">
                                {selectedProject?.title}
                              </p>
                            </div>

                            <div className="grid sm:grid-cols-2">
                              <div className="border-b border-white/[0.07] p-5 sm:border-r">
                                <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                                  Nombre
                                </p>

                                <p className="mt-2 text-sm text-zinc-300">
                                  {form.name}
                                </p>
                              </div>

                              <div className="border-b border-white/[0.07] p-5">
                                <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                                  Email
                                </p>

                                <p className="mt-2 break-all text-sm text-zinc-300">
                                  {form.email}
                                </p>
                              </div>
                            </div>

                            <div className="p-5">
                              <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                                Proyecto
                              </p>

                              <p className="mt-2 text-sm leading-6 text-zinc-300">
                                {form.message}
                              </p>
                            </div>
                          </div>

                          <motion.button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSending}
                            whileHover={{
                              scale: isSending ? 1 : 1.01,
                              boxShadow: isSending
                                ? "none"
                                : "0 0 45px rgba(217,158,48,0.24)",
                            }}
                            whileTap={{
                              scale: isSending ? 1 : 0.98,
                            }}
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B87918] via-[#D99E30] to-[#F5B741] py-4 text-sm font-medium text-[#080705] transition-all disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {isSending ? (
                              <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                                Enviando...
                              </>
                            ) : (
                              <>
                                Enviar solicitud
                                <ArrowUpRight size={17} />
                              </>
                            )}
                          </motion.button>

                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            disabled={isSending}
                            className="mt-4 flex w-full items-center justify-center gap-2 text-xs text-zinc-600 transition-colors hover:text-zinc-300 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <ArrowLeft size={14} />
                            Modificar información
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}