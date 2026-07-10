"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { profile, heroStats } from "@/lib/data";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* background layers */}
      <div className="absolute inset-0 -z-20 bg-radial-glow" />
      <div className="absolute inset-0 -z-10 [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-grid-faint opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-x relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          custom={0}
          className="eyebrow mb-6"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fade}
          custom={1}
          className="h-display max-w-4xl text-balance"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Deepak Kumar.</span>
          <br />
          <span className="text-zinc-400">A Software Engineer</span>{" "}
          <span className="text-zinc-200">building production systems.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fade}
          custom={2}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          3 years of experience shipping full-stack products, backend
          architecture, AWS infrastructure, and Kubernetes deployments. I
          specialize in <span className="text-white">MERN</span>,{" "}
          <span className="text-white">AWS</span>,{" "}
          <span className="text-white">DevOps</span>, and{" "}
          <span className="text-white">scalable product engineering</span>.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          custom={3}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-ghost">
            Contact Me
          </a>
          <a href={profile.resumeUrl} className="btn-ghost" download>
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          custom={4}
          className="mt-8 flex flex-wrap items-center gap-5 text-sm text-zinc-500"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-accent-soft" />
            {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          custom={5}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="bg-ink-950 p-5 text-center sm:text-left"
            >
              <div className="font-mono text-2xl font-medium text-white md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
