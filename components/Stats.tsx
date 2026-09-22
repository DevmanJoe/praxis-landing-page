"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";

function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

const stats = [
  {
    to: 25,
    suffix: "+",
    label: "Modules across people, process & performance",
    detail: "One connected operating system",
  },
  {
    to: 40,
    suffix: "+",
    label: "Organizations across West & East Africa",
    detail: "From startups to enterprise groups",
  },
  {
    to: 3,
    suffix: "x",
    label: "Faster onboarding vs. legacy HRIS platforms",
    detail: "From weeks to working days",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div aria-hidden className="absolute inset-0 -z-0">
        <div className="bg-grid-light mask-radial-fade absolute inset-0" />
        <div className="absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-100/60 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sky-100/50 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 sm:grid-cols-3 lg:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="text-center">
              <p className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <div className="mx-auto mt-4 h-px w-10 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
              <p className="mt-4 text-sm font-medium text-slate-700">{s.label}</p>
              <p className="mt-1 text-[13px] text-slate-500">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}