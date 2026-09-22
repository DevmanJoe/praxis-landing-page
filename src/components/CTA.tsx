"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-[#f6f8fd] py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-0">
        <div className="bg-grid-light mask-radial-fade absolute inset-0" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-100/70 blur-[140px]" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-sky-100/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-medium text-slate-600">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-500" />
            40+ organizations across West & East Africa
          </span>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Run your organization with{" "}
            <span className="font-serif italic text-gradient-navy">clarity.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg">
            Your organization has an operating system. Now you can see it.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubmitted(true);
            }}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              className="w-full rounded-full border border-slate-300 bg-white px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  You&apos;re in
                </>
              ) : (
                <>
                  Start free trial
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
          <p className="mt-4 text-[13px] text-slate-500">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
}