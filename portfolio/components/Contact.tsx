"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Have a role, project, or idea?{" "}
          <span className="gradient-text">Let&apos;s talk.</span>
        </>
      }
      description={profile.location + "."}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent/15 via-ink-900 to-ink-950 p-8 md:p-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Reach out — I reply within a day.
            </h3>
            <p className="mt-3 max-w-md text-zinc-400">
              Whether it&apos;s an engineering role, a freelance build, or
              cloud / DevOps consulting — drop a line.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary mt-6"
            >
              Email me <ArrowRight size={16} />
            </a>
          </div>

          <ul className="grid gap-3">
            <ContactRow
              icon={<Mail size={16} />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactRow
              icon={<Github size={16} />}
              label="GitHub"
              value="github.com/deepaks847429"
              href={profile.github}
            />
            <ContactRow
              icon={<Linkedin size={16} />}
              label="LinkedIn"
              value="linkedin.com/in/ambitioushustler"
              href={profile.linkedin}
            />
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.06]"
      >
        <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-soft">
          {icon}
        </span>
        <span className="flex flex-1 flex-col">
          <span className="text-xs uppercase tracking-wider text-zinc-500">
            {label}
          </span>
          <span className="text-sm text-zinc-200 group-hover:text-white">
            {value}
          </span>
        </span>
        <ArrowRight
          size={16}
          className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
        />
      </a>
    </li>
  );
}
