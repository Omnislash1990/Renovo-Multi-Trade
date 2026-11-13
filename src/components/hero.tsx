"use client";

import { ArrowRight, Clock3 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const sheetRows = [
  ["Site", "Occupied commercial floors"],
  ["Access", "Nights and weekends"],
  ["Order", "One, supply and fix"],
  ["Lead", "Named for the whole job"],
];

const sheetTrades = ["Electrical", "HVAC", "Joinery", "Decoration"];

export function Hero() {
  const reduce = useReducedMotion();
  const duration = reduce ? 0 : 0.7;

  return (
    <section className="relative -mt-[4.5rem] overflow-hidden bg-ink text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(246,241,232,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,241,232,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 75% 30%, black 10%, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-20 size-[28rem] rounded-full bg-copper/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 size-[24rem] rounded-full bg-moss/25 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pt-36 pb-20 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:pt-40 lg:pb-24">
        <div>
          <motion.p
            className="text-[11px] font-semibold tracking-[0.22em] text-brass uppercase"
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease }}
          >
            Commercial multi-trade contracting
          </motion.p>
          <motion.h1
            className="mt-4 max-w-xl text-balance font-serif text-[2.7rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.15rem]"
            initial={{ y: reduce ? 0 : 14 }}
            animate={{ y: 0 }}
            transition={{ duration, delay: reduce ? 0 : 0.05, ease }}
          >
            Every trade.
            <span className="block text-brass italic">One accountable</span>
            contractor.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-cream/78 sm:text-lg"
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: reduce ? 0 : 0.12, ease }}
          >
            Property managers, developers and main contractors appoint Renovo when a
            building needs electrical, mechanical, plumbing and finishes — and one
            company has to own the result.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: reduce ? 0 : 0.18, ease }}
          >
            <a
              href="#enquire"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-copper-deep px-6 text-sm font-semibold text-white transition hover:bg-copper-ink"
            >
              Request a survey
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-cream/25 px-6 text-sm font-semibold text-cream transition hover:border-cream/60 hover:bg-white/5"
            >
              View the trades
            </a>
          </motion.div>
          <motion.p
            className="mt-5 flex items-center gap-2 text-sm text-cream/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration, delay: reduce ? 0 : 0.28, ease }}
          >
            <Clock3 aria-hidden="true" className="size-4 text-brass" />
            {site.response}
          </motion.p>
        </div>

        <motion.aside
          aria-label="Illustrative instruction"
          className="motion-rise rounded-3xl border border-cream/15 bg-pine/80 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-7"
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.15, ease }}
        >
          <div className="flex items-start justify-between gap-4 border-b border-cream/10 pb-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-brass uppercase">
                Instruction sheet
              </p>
              <p className="mt-1 font-serif text-2xl text-cream">How a job is held</p>
            </div>
            <p className="rounded-full border border-cream/15 px-3 py-1 text-[11px] font-medium tracking-wider text-cream/70 uppercase">
              Illustrative
            </p>
          </div>

          <ol className="mt-5 grid grid-cols-2 gap-2">
            {sheetTrades.map((trade, index) => (
              <li
                key={trade}
                className="flex items-center gap-2 rounded-xl bg-ink/50 px-3 py-2.5 text-sm text-cream"
              >
                <span className="font-serif text-brass">0{index + 1}</span>
                {trade}
              </li>
            ))}
          </ol>

          <dl className="mt-5 divide-y divide-cream/10">
            {sheetRows.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                <dt className="text-cream/55">{label}</dt>
                <dd className="text-right font-medium text-cream">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-cream/75">
            A typical multi-trade instruction. Not a live job, and not a promise of a
            specific programme until the survey is written.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
