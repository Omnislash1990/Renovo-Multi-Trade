type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  light?: boolean;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${light ? "text-brass" : "text-copper-deep"}`}
      >
        {index}
        <span className={light ? "text-cream/40" : "text-stone"}> / </span>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-balance font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl ${light ? "text-cream" : "text-ink"}`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-4 max-w-xl text-pretty text-base leading-relaxed sm:text-lg ${light ? "text-cream/75" : "text-ink-soft"}`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
