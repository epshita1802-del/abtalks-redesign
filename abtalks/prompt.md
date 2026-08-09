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

**What I accepted:** Approved as presented — moved straight to Step 3 with no
changes requested.

**What I changed/rejected:** Nothing changed at this step.

**Why:** N/A.

### Design System (Step 3)

**My goal:** Turn the Step 1 visual direction into a small, real component
set (buttons, cards, status indicators, a progress element, form fields)
that Step 4–6 screens can be built from, without inventing components the
project doesn't actually need.

**Prompt given to AI:** Create the design system — colors, typography,
spacing, radius, shadows, buttons, cards, badges, progress indicators, form
elements — kept consistent, no unnecessary components.

**What AI suggested:**
- Five components total: `Button` (primary/secondary/ghost), `Card`,
  `StatusPill` (completed/today/missed/upcoming), `ProgressStrip`, and
  `FormField` — deliberately not building a full generic UI kit.
- `ProgressStrip` as the signature visual element: all 60 days rendered as
  a grid of small segments instead of a percentage or circular stat, so a
  student sees their actual rhythm (a run of completed days, one missed
  day, more completed days) at a glance.
- `StatusPill`'s color mapping treats "missed" and "upcoming" as the same
  neutral tone — a missed day is never shown in a warning or error color.
  This is Idea A expressed directly in a reusable component, not just
  written in this log.
- Wired the new components into the `/dashboard` placeholder (still not
  the real dashboard layout — Step 5) so they could be reviewed rendered
  in context rather than as isolated files.

**What I accepted:** [fill in after your review]

**What I changed/rejected:** [fill in after your review]

**Why:** [fill in after your review]

### Landing Page (Step 4)

**My goal:** Build `/` so a first-time visitor understands what ABTalks is,
what the daily loop looks like, how the streak philosophy works, and what
"proof of work" means — clearly enough to decide to start, without a generic
SaaS hero.

**Prompt given to AI:** Build only `/`, focused on first impression, clear
explanation, challenge structure, motivation, and trust, tested at 390px.

**What AI suggested:**
- No traditional hero visual (gradient/illustration) — instead an
  illustrative, clearly-labeled example progress strip using the same
  visual language as the dashboard's signature element, so the "consistency
  over perfection" philosophy is visible before a student even signs up,
  not just explained after.
- The illustrative strip is intentionally NOT built from the real student
  mock data — a separate, obviously-labeled "example" pattern — so it can
  never be mistaken for a visitor's own (nonexistent) progress.
- A dedicated "missing a day doesn't reset your progress" section placed
  before the final CTA, treating the streak-recovery idea as a genuine
  selling point rather than only a dashboard detail.
- A numbered 4-step "what you actually do each day" list — used deliberately
  here because the daily loop (read → build → commit → post) is a real,
  literal sequence, not decoration.
- Single primary CTA ("Start day 1") repeated at the top and bottom of the
  page, linking to `/dashboard`, since there's no auth step in this build.

**What I accepted:** [fill in after your review]

**What I changed/rejected:** [fill in after your review]

**Why:** [fill in after your review]

**Process note:** After Step 4, I asked AI to build the remaining screens
(dashboard, challenge day, edge cases, polish) in one pass instead of
continuing to stop after every step. The step structure below (5–9) still
reflects the original plan, but they were implemented together rather than
reviewed one at a time before moving on.

### Dashboard (Step 5)

**My goal:** Build the real `/dashboard`, with Idea A (total progress over
current streak) and Idea B (today's task as the strongest visual element)
actually expressed in the layout hierarchy, plus the three required edge
cases handled by the same component rather than three separate dashboards.

**What AI did:**
- Today's challenge is the first and largest card, bordered in the accent
  color, with the single primary action on the page.
- The progress card leads with **total days completed** as the large
  number; current streak is shown smaller, to its right, in neutral ink
  color rather than the accent — it's informational, not the headline stat.
- When a day was recently missed, a small neutral note appears
  ("Day 8 was missed — that's fine...") instead of any warning styling.
- Edge cases handled via data-driven conditionals in the same component:
  `isFirstDay` (changes hero copy to "Start day 1"), empty `recentActivity`
  (shows a plain empty-state line instead of an empty list), and a missing
  or unset student name (falls back to "there" / "?" initials) for the
  empty-profile case.

### Challenge Day (Step 6)

**My goal:** Build `/day/12` so a student clearly understands what to build,
then what to submit, then how — with GitHub, LinkedIn, and deploy URL
feeling like one flow, not three unrelated fields.

**What AI did:**
- Order on the page follows your required sequence: what to build →
  requirements → collapsed hints/resources → submission.
- Submission section uses the lighter version of Idea C: a small
  "x/2 required" counter above the fields (GitHub + LinkedIn required, live
  URL optional) instead of a full step-by-step wizard — enough structure to
  show progress without adding a multi-step state machine.
- Real inline validation: GitHub field checks for a `github.com` link,
  LinkedIn checks for `linkedin.com`, deploy URL checks for any valid URL
  if filled in. Errors only appear after a field is touched and left
  invalid — never on an empty untouched field.
- Submit shows a confirmation state in place of the form (no real backend,
  so this is the honest mocked equivalent of a successful submission).

### Edge Cases (Step 7)

Checked against the required list:
- **First day / missed day / empty profile** — handled in Dashboard via
  data-driven conditionals (see above), not separate screens.
- **Invalid URL / incomplete submission** — handled in Challenge Day's
  validation; submit is blocked and explained until both required links
  are valid.
- **Long text** — requirement, hint, and activity text all use `break-words`
  so a long line can't force horizontal scroll on a 390px screen.
- **Empty activity state** — Dashboard shows a plain sentence instead of an
  empty list if `recentActivity` is ever empty.
- **No challenge content for a given day** — Challenge Day shows a plain
  "no challenge found" state instead of crashing, since only day 12 has
  mocked content in this build.

### Final Polish & QA (Steps 8–9)

- Hints/resources are collapsed by default on Challenge Day so they don't
  compete visually with the requirements list.
- `npm run build` was run after every file change in this pass and passes
  clean with no errors.
- Not yet done: a manual click-through on an actual phone or browser
  devtools at 390px — that's on you to verify (see checklist in my reply).

### Motion Pass

**My goal:** After seeing the first full build, I felt the UI had no
personality or "wow" factor for a hackathon — too flat, nothing that would
stand out to judges. I asked AI to add real polish, while being aware this
was in tension with the brief's own "avoid excessive animations" constraint.

**Prompt given to AI:** Add effects/animation so the UI feels special,
"like a winner site" — current version felt like it had nothing interesting.

**What AI suggested:** Rather than global animation, five specific,
purposeful moments: the progress strip's 60 segments stagger-fill on
mount; the two dashboard stats count up from zero; landing page sections
fade/slide in on scroll; buttons and cards get tactile hover/press
feedback; and the challenge-day success screen gets a drawn-checkmark and
pop-in moment. All of it respects `prefers-reduced-motion`. AI was explicit
that this is meant to be a small, deliberate set of "signature moments,"
not a general animation pass on every element.

**What I accepted:** [fill in after your review]

**What I changed/rejected:** [fill in after your review]

**Why:** [fill in after your review]

### Visual Direction Change — Phase 1: Design System

**My goal (yours, restated):** After seeing the working build, the UI felt
too flat/generic for a hackathon — you wanted a more premium, energetic,
technical visual identity, giving a detailed brief and referencing an
(unattached) existing site only for "level of polish," not literal colors
or layout. You were explicit that functionality and IA should not be
rebuilt — only the design system and existing components improved — and
asked for a short plan before coding, then Phase 1 only.

**Prompt given to AI:** A full redesign brief — color hierarchy (primary /
secondary / success / warning), visual depth (gradients, glow, layered
surfaces, no excessive glassmorphism), expressive typography, purposeful
animation, phased implementation starting with the global design system.

**Flagged tension (raised by AI, for me to resolve):** The brief's color
hierarchy listed "missed days" under WARNING, but the Streak Recovery
section (and our own Idea A) explicitly says a missed day should not read
as an error. AI's resolution: keep warning color reserved for real
problems only (invalid input, incomplete submission) and keep missed-day
segments neutral, per Streak Recovery — flagged for me to override if I
actually wanted a warning tint on missed days.

**What AI did (Phase 1 only, design system):**
- Added a **secondary** teal color (achievements/milestones) as a cool
  complement to the existing warm amber **primary**, instead of a second
  warm tone that would compete with it.
- Enriched the primary into a two-stop gradient used only on the primary
  button, plus colored glow shadows reserved for the single most important
  element per screen (primary CTA, today's task card).
- Added a `Card` variant system (`default` / `featured` / `raised`) tied to
  the color hierarchy, replacing one-off manual border classes — and
  rewired the existing "today's task" card on the dashboard to use
  `variant="featured"` so the system is actually in use, not just defined.
- Added a `canvas` dark-surface token and expressive `display-2xl/xl/lg`
  type scale for the hero/milestone treatments planned in later phases —
  not yet applied anywhere.
- Did not touch Landing, Dashboard, or Challenge Day layout/content beyond
  that one line — everything else is `Button`/`Card`/token changes only.

**What I accepted:** [fill in after your review]

**What I changed/rejected:** [fill in after your review]

**Why:** [fill in after your review]
