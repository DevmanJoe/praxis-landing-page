"use client";

import {
  ArrowUpRight,
  BarChart3,
  LineChart,
  Lock,
  Plug,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    icon: Users,
    title: "People",
    color: "from-sky-500 to-brand-700",
    copy: "Roles, skills, workload and availability — all live and in one place.",
    points: ["Org-wide directory", "Skill & capacity maps", "Real-time availability"],
    visual: "people",
  },
  {
    icon: Workflow,
    title: "Processes",
    color: "from-brand-500 to-brand-800",
    copy: "Turn implicit processes — the ones in people's heads and WhatsApp chats — into visible, automated infrastructure.",
    points: ["Visual process builder", "Auto approvals & handoffs", "Bottleneck alerts"],
    visual: "process",
  },
  {
    icon: BarChart3,
    title: "Performance",
    color: "from-violet-500 to-brand-800",
    copy: "Live metrics across every module, so performance is measured and managed — not guessed at.",
    points: ["Live dashboards", "Custom reporting", "25+ shared modules"],
    visual: "data",
  },
];

const mini = [
  { icon: Plug, title: "Integrations", copy: "Connect the tools you already use" },
  { icon: Lock, title: "Enterprise security", copy: "SSO, SCIM & granular roles" },
  { icon: Zap, title: "Automations", copy: "Remove repetitive busywork" },
  { icon: LineChart, title: "Reporting", copy: "Board-ready insights, auto-built" },
];

function PeopleVisual() {
  const people = [
    { i: "AR", c: "from-sky-400 to-brand-600" },
    { i: "MK", c: "from-violet-400 to-brand-700" },
    { i: "JO", c: "from-emerald-400 to-brand-600" },
    { i: "PN", c: "from-amber-400 to-brand-700" },
    { i: "TS", c: "from-brand-400 to-brand-800" },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="flex -space-x-2.5">
        {people.map((p) => (
          <span
            key={p.i}
            className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${p.c} text-[10px] font-bold text-white ring-2 ring-white`}
          >
            {p.i}
          </span>
        ))}
      </div>
      <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600">
        <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-500" />
        432 online
      </span>
    </div>
  );
}

function ProcessVisual() {
  const steps = ["Request", "Approval", "Automated"];
  return (
    <div className="flex items-center gap-1.5">
      {steps.map((s, i) => (
        <div key={s} className="flex flex-1 items-center gap-1.5">
          <span
            className={`flex-1 truncate rounded-lg border px-2 py-1.5 text-center text-[11px] font-semibold ${
              i === 1
                ? "border-brand-200 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-500"
            }`}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <ArrowUpRight size={14} className="shrink-0 -rotate-90 text-brand-300" />
          )}
        </div>
      ))}
    </div>
  );
}

function DataVisual() {
  const bars = [42, 68, 55, 84, 62, 96, 78, 90];
  return (
    <div className="flex h-12 items-end gap-1.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-brand-600 to-sky-400"
          style={{ height: `${h}%`, opacity: 0.45 + (i % 4) * 0.14 }}
        />
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand-100/60 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-100/50 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
            The modules
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            From implicit processes to{" "}
            <span className="text-gradient-navy">visible infrastructure.</span>
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            25+ modules across people, process & performance. Praxis
            replaces the sprawl of disconnected tools with one living operating
            layer your whole team can actually see and act on.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover">
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-[0.08] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.16]`}
                />
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-white shadow-lg shadow-brand-900/20`}
                >
                  <p.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.copy}</p>
                <ul className="mt-4 space-y-2">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
                          <path d="M2 5.2 4.2 7.4 8 2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  {p.visual === "people" && <PeopleVisual />}
                  {p.visual === "process" && <ProcessVisual />}
                  {p.visual === "data" && <DataVisual />}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mini.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/60 p-5 transition-all duration-300 hover:border-brand-200 hover:bg-white">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600/10 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <m.icon size={18} strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{m.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{m.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}