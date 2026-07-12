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
          Engineer across{" "}
          <span className="gradient-text">platform, DevOps, SRE & AIOps</span>.
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
            I&apos;m a Platform / DevOps / SRE engineer who designs secure,
            self-healing cloud infrastructure — Kubernetes, GitOps delivery,
            observability, and AI-driven operations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
            Over the last 3 years I&apos;ve run production systems in{" "}
            <span className="text-white">healthcare</span> and{" "}
            <span className="text-white">fintech</span> — provisioning
            infrastructure with <span className="text-white">Terraform</span>,
            shipping through <span className="text-white">CI/CD &amp; ArgoCD</span>,
            hardening pipelines with <span className="text-white">DevSecOps</span>,
            and carrying the pager.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
            Lately I&apos;m most excited about{" "}
            <span className="text-white">AIOps</span> — using LLMs and agentic
            workflows for root-cause analysis and safe incident
            auto-remediation, so reliability scales without scaling headcount.
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
              Platform / DevOps / SRE Engineer
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
              Kubernetes, GitOps, DevSecOps, observability, AIOps
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
