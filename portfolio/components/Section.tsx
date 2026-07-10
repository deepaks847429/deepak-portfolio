"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: Props) {
  return (
    <section id={id} className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-3xl"
        >
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent-soft" />
            {eyebrow}
          </span>
          <h2 className="h-section mt-4 text-balance">{title}</h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
