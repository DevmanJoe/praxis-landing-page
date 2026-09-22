"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";
import { EASE, fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/50 to-white" />
        <div className="bg-grid-light mask-radial-fade absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-100/70 blur-[140px]" />
        <div className="absolute top-40 -left-40 h-96 w-96 rounded-full bg-sky-100/60 blur-[120px]" />
        <div className="absolute right-0 top-72 h-80 w-80 rounded-full bg-brand-50/90 blur-[120px]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl px-5 text-center lg:px-8"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/80 px-4 py-1.5 text-xs font-medium text-slate-600 backdrop-blur">
            <Sparkles size={13} className="text-brand-600" />
            Praxis · Enterprise Edition
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
            <span className="hidden text-slate-500 sm:block">25+ modules</span>
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          Your organization has an
          <br className="hidden sm:block" /> operating system.
          <span className="mt-2 block">
            Now you can{" "}
            <span className="inline-block pr-1.5 font-serif italic text-gradient-navy">see</span>{" "}
            it.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          The operating system behind your people, processes, and performance.
          Designed for organizations that outgrow their tools.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#pricing"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-2xl shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto"
          >
            Start free trial
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#platform"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 sm:w-auto"
          >
            Book a demo
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-[13px] text-slate-500"
        >
          No credit card required · Set up in minutes · Cancel anytime
        </motion.p>
      </motion.div>

      <DashboardMockup />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 -z-0 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}