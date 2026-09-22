"use client";

import { motion } from "framer-motion";
import { Activity, ChevronRight, Link2, Rocket, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: Link2,
    num: "01",
    title: "Connect",
    copy: "Bring your people, payroll and tools in minutes. Built for mobile-first teams across West & East Africa.",
  },
  {
    icon: Workflow,
    num: "02",
    title: "Visualize",
    copy: "Map every process, owner and dependency in real time — even the ones that only ever lived in someone's head.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Operate",
    copy: "Automate handoffs and approvals with role-based access and audit trails your board actually trusts.",
  },
];

const capabilityPills = [
  "Mobile-first",
  "Auto approvals",
  "Process canvas",
  "Live alerts",
  "Role-based access",
  "Audit logs",
  "25+ modules",
];

function ProcessCanvas() {
  const nodes = ["Start", "Approval", "Automation", "Done"];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-900">Process canvas</p>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
          Live
        </span>
      </div>
      <div className="flex items-center">
        {nodes.map((n, i) => (
          <div key={n} className="flex flex-1 items-center">
            <span
              className={`flex-1 rounded-xl border px-2 py-2.5 text-center text-[11px] font-semibold sm:text-xs ${
                i === 2
                  ? "border-brand-300 bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                  : i === 3
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 bg-slate-50 text-slate-600"
              }`}
            >
              {n}
            </span>
            {i < nodes.length - 1 && (
              <ChevronRight size={14} className="mx-1 shrink-0 text-slate-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LiveMetric() {
  const rows = [
    { label: "Approval speed", value: "94%", w: "94%" },
    { label: "On-time handoffs", value: "88%", w: "88%" },
    { label: "Data freshness", value: "99.9%", w: "99.9%" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <Activity size={15} className="text-brand-600" />
          Live signals
        </p>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-500" />
          Streaming
        </span>
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-1 flex items-center justify-between text-[11px]">
              <span className="font-medium text-slate-600">{r.label}</span>
              <span className="font-semibold text-slate-900">{r.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: r.w }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-brand-600 to-sky-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="platform" className="relative scroll-mt-24 overflow-hidden bg-slate-50 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid-light mask-radial-fade absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-0 h-64 w-[720px] -translate-x-1/2 rounded-full bg-brand-100/50 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-brand-100 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
              How it works
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Built for how African companies{" "}
              <span className="text-gradient-navy">actually operate.</span>
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              The operating system behind your people, processes, and
              performance. Designed for organizations that outgrow their tools.
            </p>
          </Reveal>

          <div className="mt-10 space-y-0">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.12}>
                <div className="group relative flex gap-5 pb-9 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white text-brand-700 shadow-sm transition-all duration-300 group-hover:border-brand-300 group-hover:bg-brand-600 group-hover:text-white">
                      <s.icon size={20} strokeWidth={1.9} />
                    </span>
                    {i < steps.length - 1 && (
                      <span className="mt-2 w-px flex-1 bg-gradient-to-b from-slate-300 to-slate-200" />
                    )}
                  </div>
                  <div className="pt-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-300">
                      Step {s.num}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-2">
              {capabilityPills.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-gradient-to-tr from-brand-100 to-transparent blur-2xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <ProcessCanvas />
            <div className="relative z-10 mt-6 w-full sm:mt-8 sm:ml-8 sm:w-[94%]">
              <LiveMetric />
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-7 -right-3 z-20 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-card-hover sm:block"
            >
              <p className="text-[11px] font-medium text-slate-500">Onboarding speed</p>
              <p className="text-lg font-bold text-slate-900">
                3x faster{" "}
                <span className="text-[11px] font-semibold text-emerald-600">vs. legacy HRIS</span>
              </p>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}