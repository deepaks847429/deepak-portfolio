"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          The stack I use to ship{" "}
          <span className="gradient-text">production systems</span>.
        </>
      }
      description="From the browser to the Kubernetes cluster — these are the tools I reach for daily."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="glass group relative overflow-hidden p-6"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">{g.title}</h3>
              <span className="font-mono text-xs text-zinc-500">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
