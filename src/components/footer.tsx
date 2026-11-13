import { nav, site } from "@/lib/site";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
        <div>
          <span className="inline-flex rounded-lg bg-white px-3 py-2">
            <Logo className="h-16 w-auto sm:h-20" />
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Commercial multi-trade contracting for property, project and facilities
            teams. One order. A named lead. A written handover.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-brass uppercase">On this page</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-cream/80 hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#enquire" className="text-cream/80 hover:text-cream">
                Request a survey
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-brass uppercase">Estimating desk</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="text-cream/80 hover:text-cream">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-cream/80 hover:text-cream">
                {site.email}
              </a>
            </li>
            <li className="text-cream/60">Instructions taken across the UK.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs leading-relaxed text-cream/50 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}</p>
          <p>Proposals are issued after survey and are the basis of any appointment.</p>
        </div>
      </div>
    </footer>
  );
}
