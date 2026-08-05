# Yousra Hind Bennabi — Portfolio

Production Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion
portfolio, built from a Figma design (file key `AtBG4sezFb8A2UqjxHrxMk`) using
the Figma MCP connector for exact colors, typography, spacing, and layout.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

> **Note on fonts:** `app/layout.tsx` loads DM Serif Display, Inder, Noto Sans,
> Flamenco, and Playwrite US Modern via `next/font/google`, which fetches font
> files from Google Fonts **at build time**. This requires normal internet
> access (works out of the box locally and on Vercel/Netlify/etc.). It was the
> only thing that couldn't be verified inside the sandboxed environment this
> was built in — everything else (types, routes, static generation) was
> confirmed to build and generate all 16 routes successfully.

## Project structure

```
app/                  → routes, layout, metadata, robots.ts, sitemap.ts
  page.tsx            → home page (composes all sections)
  projects/page.tsx   → all-projects listing
  projects/[slug]/    → individual project detail pages
components/
  ui/                 → Button, Badge, Tag, SectionTitle
  layout/             → Navbar, Footer
  cards/              → ProjectCard, SkillCard, TimelineCard
sections/             → Hero, About, Projects, Experience, Creative, Contact
data/                 → projects.ts, skills.ts, experience.ts, creative.ts
types/                → shared TypeScript interfaces
hooks/                → useScrollPosition
lib/                  → cn() class helper, framer-motion animation variants
public/images/        → placeholder project images (SVG) + OG image + favicon
```

## Design tokens (from Figma)

| Token | Value |
|---|---|
| `primary` | `#7cb7e8` |
| `ink` (body text) | `#2e3a59` |
| `muted` | `#6d7d93` |
| `pink` | `#ea9aa9` / accent `#ff84c0` |
| `yellow` | `#eed1a1` |
| `green` | `#7cc98a` |
| Display font | DM Serif Display |
| Script accent font | Playwrite US Modern |
| Nav font | Inder |
| Body font | Noto Sans (substituted for the original Droid Sans, which Google Fonts no longer serves) |
| Footer signature font | Flamenco |

## Things to swap in before shipping

1. **Project images** — `public/images/projects/*.svg` are generated
   placeholders. Replace with real screenshots/mockups (`.png`/`.jpg`/`.webp`)
   and update the `image` path in `data/projects.ts`.
2. **Resume** — add a real `resume.pdf` to `/public` (the Hero "Download
   resume" button links to `/resume.pdf`).
3. **Social links** — update the LinkedIn/GitHub/email URLs in
   `sections/Hero.tsx`.
4. **Contact email** — update `mailto:hello@yousrahind.dev` in
   `sections/Hero.tsx` and `sections/Contact.tsx`.
5. **Domain** — replace `https://yousrahindbennabi.com` in
   `app/layout.tsx` and `app/sitemap.ts` with your real domain.
6. **OG image** — `public/og-image.png` is a placeholder; swap for a designed
   1200×630 social preview image.

## Responsive breakpoints

Tailwind defaults are used (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px),
matching the desktop-first flow requested: 1440 → 1280 → 1024 → 768 → 480 → 375.

## Accessibility & performance

- Semantic headings, `aria-label`s on icon-only links, visible focus rings
- `prefers-reduced-motion` respected globally
- Images served through `next/image` with responsive `sizes`
- Metadata, OpenGraph, Twitter cards, `robots.ts`, and `sitemap.ts` included
