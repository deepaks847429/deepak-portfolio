"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Results-driven engineer across{" "}
          <span className="gradient-text">full-stack, backend & cloud</span>.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-6 md:col-span-2"
        >
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            I&apos;m a results-driven Software Engineer with experience across
            full-stack development, backend architecture, cloud infrastructure,
            and DevOps.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
            Over the last 3 years, I&apos;ve worked on production systems in{" "}
            <span className="text-white">healthcare</span> and{" "}
            <span className="text-white">prop trading</span> domains — handling
            everything from feature development to end-to-end deployment
            pipelines.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
            I enjoy solving real engineering problems involving scale,
            automation, system reliability, and business logic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass flex flex-col gap-6 p-6"
        >
          <div>
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Currently
            </div>
            <div className="mt-1 text-zinc-200">
              Mid-Level Product Engineer with DevOps edge
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Open To
            </div>
            <div className="mt-1 text-zinc-200">
              International remote roles & relocation
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Focus Areas
            </div>
            <div className="mt-1 text-zinc-200">
              Scalable backend systems, cloud-native infra, automation
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
