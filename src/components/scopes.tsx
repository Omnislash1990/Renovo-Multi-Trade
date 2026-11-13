import { scopes } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Scopes() {
  return (
    <section id="scopes" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Representative scopes"
            title="The shape of work we are asked to own."
            lede="These are typical instructions, written so you can see the edges of a Renovo appointment. They are not claimed completions, and they are not a menu of fixed prices."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {scopes.map((scope, index) => (
            <Reveal key={scope.title} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 sm:p-8">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-copper-deep uppercase">
                  {scope.sector}
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-tight text-ink">{scope.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{scope.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {scope.trades.map((trade) => (
                    <li
                      key={trade}
                      className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink-soft"
                    >
                      {trade}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
