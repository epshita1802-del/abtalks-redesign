# AI-Assisted Development Log

## Project

ABTalks 60-Day Challenge Redesign

## My Role

I defined the product problem, set the constraints (mobile-first at 390px,
no over-engineering, no generic AI-dashboard look), made the core UX and
product decisions, reviewed every AI suggestion before accepting it, and
made the final call on what got built. AI was not left to design or build
anything unsupervised — each step was proposed, reviewed, and approved (or
changed) before moving on.

## AI Role

AI (Claude) was used for:

- Brainstorming UX directions and explaining trade-offs between them
- UX critique against the hackathon brief and judging context
- Implementation assistance (project scaffolding, component code)
- Design system / token proposals, explained and justified against the
  "avoid generic AI dashboard" constraint
- Ongoing code review and structure suggestions as the project grows

## Prompt Log

### Planning (Step 1)

**My goal:** Get a clear plan — user, journeys, information architecture,
visual direction — before any code was written, and get a shortlist of
thoughtful UX ideas to choose from rather than one AI-picked default.

**Prompt given to AI:** The full project brief (product context, required
screens, mobile-first requirement, visual direction constraints, and an
explicit instruction to propose 2–3 UX ideas without implementing any of
them).

**What AI suggested:** A primary-user framing (late-night, low-energy,
phone-first student), three user journeys mapped to the three routes, a
flat information architecture matching the required routes, a typography-led
visual direction, and three UX ideas: (A) reframe a missed day as
"recoverable" rather than "broken," (B) make today's task the single
strongest visual focus on the dashboard, (C) turn the challenge-day
submission into a short guided checklist instead of a flat form.

**What I accepted:** Ideas A and B, combined as the core product philosophy:
**"Consistency over perfection."** I asked AI which combination it thought
would land best specifically for hackathon judging (not just for the
student), since demo time is short — AI recommended A+B as the headline
differentiator (visible in the dashboard's structure within seconds) and C
as a smaller, secondary polish item rather than the main idea.

**What I changed/rejected:** I decided C should not be a core differentiator
— only used later, and only if it fits naturally into the Challenge Day
screen without adding complexity. I also required that A+B be reflected in
the actual information hierarchy of the dashboard, not just described in
this document — this constrains how Step 5 gets built.

**Why:** A missed-day "streak broken" pattern is a common reason students
abandon habit-tracking apps. Making "what do I do right now" the dashboard's
obvious focal point matches how a tired student actually uses the app late
at night, and gives the project a clear, memorable thesis for judges rather
than a generic stats dashboard.

### Project Setup (Step 2)

**My goal:** Get a working React + Vite + Tailwind + React Router project
scaffolded, with realistic mocked data and the approved visual direction
turned into concrete design tokens — without building the full UI yet.

**Prompt given to AI:** Set up the project with the four required routes,
a clean folder structure, mocked data, and global design tokens based on
the Step 1 visual direction; explicitly told not to build complete screens.

**What AI suggested:**
- A color system built around a soft warm-white background, near-black
  "ink" text, and a single muted amber/gold accent reserved for
  streak/progress/CTAs — deliberately avoiding both the common
  cream-and-terracotta and near-black-and-neon AI-generated defaults.
- A three-typeface system: Space Grotesk for headings, Inter for body text,
  and JetBrains Mono for numeric/data elements (day counts, streak numbers)
  — tying the visual language back to "this is a coding platform" without
  a generic dark hacker-theme.
- Mocked data that separates `totalDaysCompleted` from `currentStreak` and
  includes a real missed day (day 8), so the A+B hierarchy has real data to
  render against in Step 5, not just a happy-path streak.
- A dynamic route (`/day/:dayId`) instead of a hardcoded `/day/12` route,
  so any challenge day can be reached the same way a real product would
  need.

**What I accepted:** [fill in after your review]

**What I changed/rejected:** [fill in after your review]

**Why:** [fill in after your review]

### Dashboard

_Not started yet._

### Challenge Day

_Not started yet._

### Edge Cases

_Not started yet._

### Final Polish

_Not started yet._
