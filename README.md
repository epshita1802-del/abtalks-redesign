[README.md](https://github.com/user-attachments/files/30874802/README.md)
# ABTalks — 60-Day Build Journey

A redesign of ABTalks, a 60-day coding challenge platform for Indian college
students. Built for a hackathon submission, mobile-first at 390px.

## What this is

Students pick a track, build something small every day for 60 days, and
submit proof of work (GitHub commit, LinkedIn post, optional live
deployment). The product's job is to make that daily habit feel achievable
and to make a missed day recoverable rather than a reason to quit.

**Core product philosophy: consistency over perfection.**

- **Streak recovery** — total days completed always leads; a missed day is
  shown neutrally, never as an error or a broken streak.
- **One clear next action** — today's build is always the single most
  visually dominant thing on the dashboard.

## Visual concept

The interface is built around one recurring visual system — a connected
**journey trail** of day-nodes — instead of a stack of generic cards.
Completed days are filled green nodes, today is a large glowing lime node,
a missed day is a neutral hollow ring, and upcoming days are quiet dots.
This trail appears at different scales across all three screens: as a
milestone path in the landing hero, as a "you are here" cluster on the
dashboard, and as a compact breadcrumb on the challenge day.

## Routes

| Route | Screen |
|---|---|
| `/` | Landing page |
| `/dashboard` | Student dashboard |
| `/day/:dayId` | Challenge day (only day 12 has mocked content) |

## Tech stack

- React + Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- React Router
- Mocked local data (`src/data/mockData.js`) — no backend, no auth

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL, or resize your browser to ~390px width to
match the hackathon's evaluation viewport.

```bash
npm run build     # production build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/       # shared, reusable UI (Button, Card, JourneyTrail, ...)
├── data/              # mocked student, day, and activity data
├── hooks/             # useReveal — scroll-triggered reveal animation
├── routes/            # the three screens
├── styles/            # global CSS, design tokens, keyframes
├── App.jsx            # route definitions
└── main.jsx           # app entry point
```

## Design system

Defined in `tailwind.config.js` and `src/styles/index.css`:

- **Primary (lime)** — today, the primary CTA, active progress
- **Secondary (coral)** — achievements, milestones, supporting info
- **Success (green)** — completed days/steps
- **Warning (red-orange)** — real problems only (invalid input) — never
  applied to a missed day

## AI-assisted development

This project was built with Claude as a design/development partner, not
an autonomous builder. `prompt.md` documents what was actually asked for,
what AI suggested, and what was accepted, changed, or rejected at each
stage — including product decisions, visual-direction changes, and bug
fixes.
