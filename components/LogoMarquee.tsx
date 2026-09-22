"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white py-14">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-100/60 blur-[100px]"
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500"
        >
          Trusted by
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-4 flex items-center justify-center gap-3 text-3xl font-bold tracking-[0.18em] text-slate-900 transition-colors hover:text-brand-700 sm:text-4xl"
        >
          <span className="hidden h-8 w-8 sm:block">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 2 20 7V17L12 22 4 17V7L12 2Z"
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="1.5"
              />
              <path
                d="M8.5 12 11 14.5 15.5 9.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          TEGENCE
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="mt-3 text-sm font-medium text-slate-500"
        >
          Running its people, process and performance on Praxis Enterprise Edition
        </motion.p>
      </div>
    </section>
  );
}