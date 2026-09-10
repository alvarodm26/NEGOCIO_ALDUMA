import {
  Palette,
  Code2,
  Search,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Diseño UX/UI",
    description:
      "Diseñamos interfaces intuitivas enfocadas en ofrecer una experiencia de usuario clara, moderna y efectiva.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Construimos sitios web rápidos, escalables y adaptados a las necesidades de cada proyecto.",
  },
  {
    number: "03",
    icon: Search,
    title: "Optimización y SEO",
    description:
      "Mejoramos la visibilidad de tu negocio para facilitar que nuevos clientes encuentren tus servicios.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            Servicios
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Todo lo necesario para construir una presencia digital sólida.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
            Combinamos estrategia, diseño y tecnología para crear experiencias
            digitales que generan resultados.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#2A2A2E] bg-[#2A2A2E] md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group bg-[#0A0A0A] p-8 transition-colors hover:bg-[#18181B] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#7C3AED]"
                  />

                  <span className="text-sm text-[#52525B]">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-16 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#A1A1AA]">
                  {service.description}
                </p>

                <div className="mt-8 h-px w-0 bg-[#7C3AED] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}