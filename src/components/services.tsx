import {
  Droplets,
  Fan,
  Hammer,
  Paintbrush,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons: Record<(typeof services)[number]["id"], LucideIcon> = {
  electrical: Zap,
  mechanical: Fan,
  plumbing: Droplets,
  fitout: Hammer,
  finishes: Paintbrush,
  maintenance: Wrench,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Services"
            title="The trades, held on one programme."
            lede="Appoint the packages you need. Renovo sequences them so ceilings, services and finishes are not fighting each other for the same room."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <Reveal key={service.id} delay={index * 0.05} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 hover:border-copper/45 hover:shadow-[0_24px_50px_-32px_rgba(18,25,22,0.55)] motion-safe:hover:-translate-y-1">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-cream text-copper-deep transition group-hover:bg-ink group-hover:text-cream">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl tracking-tight text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.summary}</p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-4 text-sm text-ink">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-copper" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
