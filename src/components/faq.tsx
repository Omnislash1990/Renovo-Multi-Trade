import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Questions"
            title="Before you send the brief."
            lede="Straight answers for the person who has to recommend a contractor, not a brochure of claims."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border-t border-line">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium text-ink sm:text-lg">
                  {item.q}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-mist transition duration-300 group-open:rotate-180"
                    strokeWidth={1.75}
                  />
                </summary>
                <p className="max-w-2xl pb-5 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
