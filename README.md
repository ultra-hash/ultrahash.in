# ultrahash.in (v3)

Personal portfolio website for **Veerabhadra Swamy Uppu** — an engineer focused on designing, automating, integrating, deploying, and operating enterprise systems, with hands-on experience across Product Lifecycle Management (PLM), Windchill, CI/CD, and full-stack development.

## Overview

This is the **v3** rewrite built with **Next.js** (App Router), **React**, and **TypeScript**. It replaces the legacy static HTML/CSS/JS portfolio (v2). Earlier versions live on the `v1` and `v2` git branches.

### What's in v3

- **ABOUT / BACKGROUND** — professional profile and focus areas.
- **EXPERIENCE** — career timeline (Datafrond PLM roles + freelance), with per-role responsibilities and skill tags.
- **SKILLS** — categorized into Language, Frameworks, Databases, Tools, and Windchill (Customization & Administration).
- **FEATURED & OTHER PROJECTS** — data-driven project cards with feature lists, live URLs, and GitHub links.
- **BADGES** — Credly certification badges.
- **React-based light/dark theme toggle** — a `useState` + `useEffect` client component that persists the choice to `localStorage` and respects `prefers-color-scheme`.
- **Data-driven content** — all projects, skills, experience, badges, and social links are defined in `lib/data.ts`.

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Poppins font (`next/font/google`)
- Bootstrap Icons (CDN)
- Credly badge embeds

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
ultrahash.in/
├── app/
│   ├── layout.tsx        # Root layout + global metadata & Poppins font
│   ├── page.tsx          # Home page (background, experience, skills, projects, badges, footer)
│   └── globals.css       # Global styles, dark theme via html.dark class
├── components/
│   └── theme-toggle.tsx  # Client component: light/dark toggle (localStorage)
├── lib/
│   └── data.ts           # Data source: projects, skills, experience, badges, social links
└── public/               # Static assets (favicon, etc.)
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build

## Contact

- Email: `veerabhadraswamy97@gmail.com`
- GitHub: [ultra-hash](https://github.com/ultra-hash/)
- CodePen: [ultrahash](https://codepen.io/ultrahash/)
- LinkedIn: [veerabhadra-swamy-uppu](https://www.linkedin.com/in/veerabhadra-swamy-uppu/)