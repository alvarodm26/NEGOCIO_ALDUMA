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
    setIsOpen(false);

    setTimeout(() => {
      setStep(1);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí posteriormente puedes conectar Formspree,
    // Resend, EmailJS, tu API, etc.

    console.log("Solicitud:", form);
  };

  return (
    <>
      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        id="contacto"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] py-32 md:py-40"
      >
        {/* GRID */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* GLOW CENTRAL */}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[140px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
          {/* BADGE */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl"
          >
            <Sparkles
              size={15}
              className="text-violet-400"
            />

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
            className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl"
          >
            ¿Tienes un proyecto
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600 bg-clip-text text-transparent">
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
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            Cuéntanos qué necesitas y conversemos sobre cómo podemos
            convertir tu idea en una experiencia digital moderna.
          </motion.p>

          {/* BOTÓN */}

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
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 0 70px rgba(124,58,237,0.28)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(124,58,237,0.15)]"
            >
              Empecemos tu proyecto

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.button>
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
            className="mx-auto mt-20 h-px max-w-md bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
          />
        </div>
      </section>

      {/* =====================================================
          MODAL
      ===================================================== */}

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
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#0a0a0a] shadow-2xl shadow-black/50"
            >
              {/* TOP GLOW */}

              <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[80px]" />

              {/* CLOSE */}

              <button
                onClick={closeModal}
                className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-zinc-500 transition-all hover:bg-white/[0.08] hover:text-white"
              >
                <X size={17} />
              </button>

              <div className="relative p-7 sm:p-10">
                {/* HEADER */}

                <div className="mb-10">
                  <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />

                    {step === 3
                      ? "Resumen"
                      : `Paso 0${step} de 02`}
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
                          Cuéntanos qué tipo de experiencia tienes
                          en mente.
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
                          Unos datos y podremos entender mejor lo
                          que necesitas.
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
                          Todo listo. Comprueba que los datos sean
                          correctos antes de enviarlos.
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
                        className="h-full bg-violet-500"
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
                  {/* ==========================================
                      STEP 1
                  ========================================== */}

                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -30,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="space-y-3"
                    >
                      {projectTypes.map((project) => {
                        const Icon = project.icon;
                        const selected =
                          form.type === project.id;

                        return (
                          <motion.button
                            key={project.id}
                            type="button"
                            onClick={() =>
                              updateForm(
                                "type",
                                project.id
                              )
                            }
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.99 }}
                            className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                              selected
                                ? "border-violet-500/40 bg-violet-500/[0.08]"
                                : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]"
                            }`}
                          >
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all ${
                                selected
                                  ? "border-violet-500/30 bg-violet-500/10 text-violet-400"
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
                                  ? "border-violet-500 bg-violet-500 text-white"
                                  : "border-white/[0.12]"
                              }`}
                            >
                              {selected && (
                                <Check size={12} />
                              )}
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
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-medium text-black transition-all disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        Continuar

                        <ChevronRight size={17} />
                      </motion.button>
                    </motion.div>
                  )}

                  {/* ==========================================
                      STEP 2
                  ========================================== */}

                  {step === 2 && (
                    <motion.form
                      key="step2"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setStep(3);
                      }}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -30,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="space-y-5"
                    >
                      {/* NAME */}

                      <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
                          Nombre
                        </label>

                        <input
                          required
                          value={form.name}
                          onChange={(e) =>
                            updateForm(
                              "name",
                              e.target.value
                            )
                          }
                          placeholder="Tu nombre"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-violet-500/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500/20"
                        />
                      </div>

                      {/* EMAIL */}

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
                              updateForm(
                                "email",
                                e.target.value
                              )
                            }
                            placeholder="tu@email.com"
                            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-violet-500/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500/20"
                          />
                        </div>
                      </div>

                      {/* MESSAGE */}

                      <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
                          Cuéntanos un poco más
                        </label>

                        <textarea
                          required
                          value={form.message}
                          onChange={(e) =>
                            updateForm(
                              "message",
                              e.target.value
                            )
                          }
                          rows={4}
                          placeholder="¿Qué tienes en mente? No necesitas tenerlo todo definido."
                          className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-zinc-700 focus:border-violet-500/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500/20"
                        />
                      </div>

                      {/* BUTTONS */}

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
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-medium text-black transition-all hover:bg-zinc-200"
                        >
                          Revisar solicitud
                          <ChevronRight size={17} />
                        </button>
                      </div>
                    </motion.form>
                  )}

                  {/* ==========================================
                      STEP 3
                  ========================================== */}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -30,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {/* SUCCESS ICON */}

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
                        className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10"
                      >
                        <Check
                          size={28}
                          className="text-violet-400"
                        />
                      </motion.div>

                      {/* SUMMARY */}

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

                      {/* FINAL ACTION */}

                      <motion.button
                        type="button"
                        onClick={handleSubmit}
                        whileHover={{
                          scale: 1.01,
                          boxShadow:
                            "0 0 40px rgba(124,58,237,0.2)",
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-4 text-sm font-medium text-white"
                      >
                        Enviar solicitud

                        <ArrowUpRight size={17} />
                      </motion.button>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="mt-4 flex w-full items-center justify-center gap-2 text-xs text-zinc-600 transition-colors hover:text-zinc-300"
                      >
                        <ArrowLeft size={14} />
                        Modificar información
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}