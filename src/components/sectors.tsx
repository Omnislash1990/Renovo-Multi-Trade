import {
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";
import { sectors } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons: Record<(typeof sectors)[number]["id"], LucideIcon> = {
  offices: Building2,
  retail: Store,
  development: Landmark,
  public: HeartPulse,
  industrial: Factory,
  agents: Users,
};

export function Sectors() {
  return (
    <section id="sectors" className="scroll-mt-24 border-y border-line bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Sectors"
            title="Bought by the people who own the building, not the toolbox."
            lede="The brief changes by sector. The appointment does not: one lead, a written scope, and trades that arrive in an order the building can tolerate."
          />
        </Reveal>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => {
            const Icon = icons[sector.id];
            return (
              <Reveal key={sector.id} as="li" delay={index * 0.04} className="h-full bg-white p-6">
                <Icon aria-hidden="true" className="size-5 text-copper-deep" strokeWidth={1.75} />
                <h3 className="mt-4 font-serif text-2xl tracking-tight text-ink">{sector.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{sector.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
