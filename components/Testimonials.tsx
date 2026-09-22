"use client";

import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const quotes = [
  {
    quote:
      "Praxis gave us back a week a month. For the first time, our people, processes and performance live in the same place.",
    name: "Amara Okafor",
    role: "Chief Operating Officer",
    org: "Unboxie",
    initials: "AO",
    gradient: "from-sky-400 to-brand-700",
  },
  {
    quote: "We shut down five tools and stopped exporting spreadsheets. Our Friday operations meeting is ten minutes now.",
    name: "Wale Adeyemi",
    role: "VP Operations",
    org: "Tegence",
    initials: "WA",
    gradient: "from-violet-400 to-brand-700",
  },
  {
    quote: "Onboarding went from six weeks to six days. Praxis is the first system our whole company actually loves.",
    name: "Chiamaka Eze",
    role: "Head of People",
    org: "Synaxis",
    initials: "CE",
    gradient: "from-emerald-400 to-brand-700",
  },
];

export default function Testimonials() {
  return (
    <section
      id="customers"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-brand-50 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
            Customer stories
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Loved by the operators{" "}
            <span className="font-serif italic text-gradient-navy">who run things.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Across Africa, operations leaders rely on Praxis to see clearly
            and act faster.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.12}>
              <figure className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${q.gradient} text-xs font-bold text-white shadow-md`}
                  >
                    {q.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{q.name}</p>
                    <p className="text-[13px] text-slate-500">
                      {q.role} · {q.org}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}