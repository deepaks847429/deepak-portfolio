"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Section from "./Section";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          3 years across{" "}
          <span className="gradient-text">healthcare & fintech</span>{" "}
          production systems.
        </>
      }
    >
      <div className="relative">
        {/* timeline line */}
        <div className="absolute left-[11px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent md:block" />

        <div className="space-y-10">
          {experiences.map((e, idx) => (
            <motion.div
              key={e.domain}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative md:pl-10"
            >
              {/* dot */}
              <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center md:flex">
                <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
              </div>

              <div className="glass p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-medium text-white">
                    {e.role}{" "}
                    <span className="text-zinc-500">— {e.domain}</span>
                  </h3>
                  <span className="font-mono text-xs text-accent-soft">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-accent-soft"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
