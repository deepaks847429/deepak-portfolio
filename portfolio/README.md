# Deepak Kumar — Portfolio

Premium, animated personal portfolio. Dark theme with blue accent. Built to position you as a **mid-level Software Engineer with full-stack + cloud + DevOps experience** for international hiring.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- TypeScript

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import on [vercel.com/new](https://vercel.com/new).
3. Default settings — no env vars required.

## Customizing Content

All copy lives in [lib/data.ts](lib/data.ts):

- `profile` — name, role, email, links, resume URL
- `skillGroups` — skill chip groups
- `experiences` — timeline entries
- `projects` — featured project cards
- `reasons` — "why hire me" bullets

## Resume

Drop your PDF at `public/resume.pdf` so the **Resume** button in the hero works.

## Sections

1. Hero — headline, tagline, CTAs, stats
2. About — positioning paragraph + side card
3. Skills — Frontend / Backend / Databases / Cloud-DevOps / Tools
4. Experience — Healthcare + Prop Firm timeline
5. Projects — Payout Risk Engine, Healthcare Cloud, Internal Dashboard
6. Why Hire Me — six selling points
7. Contact — email, GitHub, LinkedIn

## Theme

- Background: near-black (`#050505`)
- Text: off-white
- Accent: blue (`#3b82f6` / `#60a5fa`)
- Smooth Framer Motion enter animations on scroll
