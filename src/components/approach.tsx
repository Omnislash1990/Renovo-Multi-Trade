import { standards, steps } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Approach"
            title="From survey to a fileable handover."
            lede="The commercial shape is simple on purpose. You always know what is included, who is leading, and what done looks like."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute top-5 right-[8%] left-[8%] hidden h-px bg-line md:block"
          />
          <ol className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.number} as="li" delay={index * 0.06} className="relative">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-line bg-paper font-serif text-sm text-copper-deep">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-2xl tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-16 rounded-3xl border border-line bg-white p-6 sm:p-8">
          <h3 className="font-serif text-3xl tracking-tight text-ink">On every appointment</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {standards.map((item) => (
              <li key={item.title} className="border-t border-line pt-4">
                <p className="font-medium text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
