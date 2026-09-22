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