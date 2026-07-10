"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Section from "./Section";
import { reasons } from "@/lib/data";

export default function WhyHireMe() {
  return (
    <Section
      id="why"
      eyebrow="Why Hire Me"
      title={
        <>
          A mid-level engineer with a{" "}
          <span className="gradient-text">DevOps edge</span>.
        </>
      }
      description="Stronger experience than a typical 3-year developer — packaged for the work you actually need done."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, idx) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-accent/30 hover:bg-white/[0.04]"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent-soft">
              <Check size={16} />
            </span>
            <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
              {r}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
