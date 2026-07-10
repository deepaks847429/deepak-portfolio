import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
        <div>
          © {new Date().getFullYear()} {profile.name}. Crafted with Next.js,
          Tailwind & Framer Motion.
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
