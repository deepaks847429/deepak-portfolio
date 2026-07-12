"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={
        <>
          A few systems I&apos;ve{" "}
          <span className="gradient-text">designed & shipped</span>.
        </>
      }
      description="Production-grade platform, DevSecOps, SRE, and AIOps work — cloud-native and built to scale."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br ${p.accent} p-[1px]`}
          >
            <div className="relative h-full rounded-2xl bg-ink-900/90 p-6 md:p-7">
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-accent-soft">
                    <Sparkles size={12} /> Project {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-xl font-medium text-white md:text-2xl">
                    {p.title}
                  </h3>
                </div>
                <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:text-white">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                {p.description}
              </p>

              <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm text-zinc-300">
                <span className="text-accent-soft">Impact ·</span> {p.impact}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
