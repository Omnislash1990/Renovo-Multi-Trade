import { ClipboardCheck, MessagesSquare, Route } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const points = [
  {
    icon: ClipboardCheck,
    title: "One instruction",
    text: "You raise one order. We break it into trades, materials and access, and we carry the coordination that usually sits with your team.",
  },
  {
    icon: Route,
    title: "One programme",
    text: "Power, ceilings, finishes and making good are sequenced. The room is opened once, protected, and handed back in a known order.",
  },
  {
    icon: MessagesSquare,
    title: "One report",
    text: "Progress, risks and variations come from the contract lead. You are not refereeing four subcontractors after the fact.",
  },
];

export function Model() {
  return (
    <section className="bg-pine text-cream">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            light
            index="02"
            eyebrow="Why teams switch"
            title="The cost of a fragmented supply chain is the management."
            lede="Five contractors means five programmes, five sets of excuses and a building that stays open longer than the work deserves. Renovo is appointed to remove that layer."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-cream/10 bg-ink/35 p-6">
                  <Icon aria-hidden="true" className="size-5 text-brass" strokeWidth={1.75} />
                  <h3 className="mt-4 font-serif text-2xl tracking-tight">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">{point.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
