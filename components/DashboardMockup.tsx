"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  FileText,
  Home,
  Layers,
  Settings,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { EASE } from "@/lib/motion";

const nav = [
  { label: "Overview", icon: Home, active: true },
  { label: "People", icon: Users },
  { label: "Processes", icon: Workflow },
  { label: "Performance", icon: BarChart3 },
  { label: "Reports", icon: FileText },
  { label: "Settings", icon: Settings },
];

const kpis = [
  { label: "Processes active", value: "21", delta: "+2 today", icon: Workflow },
  { label: "Pending approvals", value: "11", delta: "4 marked urgent", icon: CheckCircle2 },
  { label: "Modules live", value: "25+", delta: "People · Process · Perf.", icon: Layers },
  { label: "Onboarding", value: "3x", delta: "faster vs legacy HRIS", icon: Zap },
];

const health = [
  { label: "People", value: 92 },
  { label: "Process", value: 87 },
  { label: "Performance", value: 74 },
];

const board = [
  {
    title: "In review",
    count: 4,
    dot: "bg-amber-400",
    items: ["Leave · Lagos", "#A-0412 · Onboarding", "Contract · Legal"],
  },
  {
    title: "In progress",
    count: 12,
    dot: "bg-sky-500",
    items: ["Hiring plan · People", "Q3 release · Product", "Vendor audit · Ops"],
  },
  {
    title: "Live",
    count: 7,
    dot: "bg-emerald-500",
    items: ["Payout flow · Finance", "Support SLA · Success", "Comp review · People"],
  },
];

const avatars = [
  { initials: "EY", from: "from-brand-500", to: "to-brand-800" },
  { initials: "AO", from: "from-sky-400", to: "to-brand-700" },
  { initials: "MK", from: "from-violet-400", to: "to-brand-700" },
  { initials: "JO", from: "from-emerald-400", to: "to-brand-700" },
  { initials: "TS", from: "from-amber-400", to: "to-brand-700" },
];

function LogoBlock() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo-white.png"
        alt="Praxis"
        width={822}
        height={303}
        className="h-7 w-auto"
      />
    </div>
  );
}

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.45, ease: EASE }}
      className="relative mx-auto mt-16 w-[86%] max-w-[300px] sm:mt-20 sm:w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl lg:px-8"
    >
      <div
        aria-hidden
        className="absolute -inset-x-6 -top-10 bottom-8 rounded-[48px] bg-gradient-to-tr from-brand-500/25 via-sky-400/15 to-transparent blur-3xl"
      />

      <div className="relative max-h-[430px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-glow backdrop-blur-xl sm:max-h-[560px] md:max-h-[640px] lg:max-h-none lg:overflow-visible">
        <div className="flex overflow-hidden rounded-xl bg-[#fbfbf9] font-sans">
          <aside className="hidden w-40 shrink-0 flex-col bg-[#1c1a17] p-3 pt-4 sm:flex lg:w-44">
            <LogoBlock />
            <div className="mt-5 space-y-1">
              {nav.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium ${
                    item.active
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <item.icon size={14} />
                  {item.label}
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-[10px] font-bold text-white">
                EY
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-white">Eyimofe</p>
                <p className="truncate text-[10px] text-slate-500">Operations Lead</p>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1 space-y-4 p-4 lg:p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[15px] font-semibold tracking-tight text-slate-900">
                  Good morning, Eyimofe
                </p>
                <p className="text-[11px] text-slate-500">
                  Here&apos;s what&apos;s moving across your organization today.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-500">
                  Last 30 days
                </span>
                <span className="rounded-full bg-brand-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-md shadow-brand-700/30">
                  New process
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      {kpi.label}
                    </p>
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <kpi.icon size={13} />
                    </span>
                  </div>
                  <p className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                    {kpi.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-emerald-600">
                    {kpi.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-5">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:col-span-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold text-slate-900">Performance</p>
                  <div className="flex gap-1">
                    {["D", "W", "M"].map((p, i) => (
                      <span
                        key={p}
                        className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${
                          i === 2
                            ? "bg-brand-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <svg
                  viewBox="0 0 400 120"
                  className="h-24 w-full sm:h-28"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="areaFillL" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1d3a6e" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#1d3a6e" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGradL" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1d3a6e" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  {[30, 60, 90].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      x2="400"
                      y1={y}
                      y2={y}
                      stroke="#1d3a6e"
                      strokeOpacity="0.07"
                    />
                  ))}
                  <path
                    d="M0,96 C40,90 70,58 110,60 C150,62 170,38 210,40 C250,42 280,18 320,22 C350,25 380,14 400,12 L400,120 L0,120 Z"
                    fill="url(#areaFillL)"
                  />
                  <path
                    d="M0,96 C40,90 70,58 110,60 C150,62 170,38 210,40 C250,42 280,18 320,22 C350,25 380,14 400,12"
                    fill="none"
                    stroke="url(#lineGradL)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,108 C50,104 90,96 140,92 C190,88 240,84 290,84 C330,84 370,80 400,76"
                    fill="none"
                    stroke="#7dd3fc"
                    strokeOpacity="0.7"
                    strokeWidth="2"
                    strokeDasharray="4 5"
                  />
                  <circle cx="400" cy="76" r="3" fill="#7dd3fc" />
                  <circle cx="400" cy="12" r="3.5" fill="#93c5fd">
                    <animate
                      attributeName="opacity"
                      values="1;0.35;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
                <div className="mt-1 flex justify-between text-[10px] font-medium text-slate-400">
                  {["Sep 1", "Sep 8", "Sep 15", "Sep 22", "Sep 29"].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 lg:col-span-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <p className="mb-3 text-xs font-semibold text-slate-900">Module health</p>
                  <div className="space-y-3">
                    {health.map((h) => (
                      <div key={h.label}>
                        <div className="mb-1 flex items-center justify-between text-[11px]">
                          <span className="font-medium text-slate-500">{h.label}</span>
                          <span className="font-semibold text-slate-900">{h.value}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-brand-600 to-sky-400"
                            style={{ width: `${h.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <p className="mb-3 text-xs font-semibold text-slate-900">Active now</p>
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {avatars.map((a) => (
                        <span
                          key={a.initials}
                          className={`grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br ${a.from} ${a.to} text-[9px] font-bold text-white ring-2 ring-white`}
                        >
                          {a.initials}
                        </span>
                      ))}
                    </div>
                    <div className="ml-3 flex items-center gap-1.5 text-[11px] text-slate-500">
                      <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-500" />
                      25 people in flow
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {board.map((col) => (
                <div
                  key={col.title}
                  className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[11px] font-semibold text-slate-700">{col.title}</p>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                      {col.count}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {col.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-2"
                      >
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${col.dot}`} />
                        <span className="truncate text-[11px] text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 rounded-b-2xl bg-gradient-to-t from-white via-white/70 to-transparent lg:hidden"
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-20 z-20 hidden rounded-2xl border border-white/10 bg-[#0b1222]/90 p-3.5 shadow-2xl backdrop-blur lg:block xl:-left-8"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
            <CheckCircle2 size={18} />
          </span>
          <div>
            <p className="text-xs font-semibold text-white">Process approved</p>
            <p className="text-[11px] text-slate-400">Invoice #2841 · just now</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-2 bottom-24 z-20 hidden rounded-2xl border border-white/10 bg-[#0b1222]/90 p-3.5 shadow-2xl backdrop-blur lg:block xl:-right-8"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sky-500/15 text-sky-400">
            <TrendingUp size={18} />
          </span>
          <div>
            <p className="text-xs font-semibold text-white">
              Team velocity <span className="text-emerald-400">+24%</span>
            </p>
            <svg viewBox="0 0 80 24" className="mt-1 h-5 w-20" aria-hidden>
              <path
                d="M0,20 C12,18 20,10 30,12 C40,14 48,6 58,7 C66,8 74,3 80,2"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}