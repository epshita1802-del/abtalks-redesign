import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import { useReveal } from "../hooks/useReveal.js";

function Reveal({ as: Component = "div", children, className = "" }) {
  const [ref, isVisible] = useReveal();
  return (
    <Component ref={ref} className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </Component>
  );
}

// Illustrative-only progress pattern for the hero and streak sections.
// Deliberately not imported from mockData/student — a first-time visitor
// hasn't started yet, so this must read as "an example," never as "your data."
const previewDays = [
  "c", "c", "c", "c", "c", "c", "c", // 1-7 completed
  "m",                                // 8 missed
  "c", "c", "c",                      // 9-11 completed
  "t",                                // 12 today
  "u", "u", "u", "u", "u", "u",       // upcoming
];

const previewCellClass = {
  c: "bg-positive",
  t: "bg-accent",
  m: "bg-border ring-1 ring-inset ring-ink-faint/40",
  u: "bg-border-soft",
};

const dailyLoop = [
  {
    n: "01",
    title: "Read today's challenge",
    body: "One focused build, explained clearly — no syllabus to dig through.",
  },
  {
    n: "02",
    title: "Build it",
    body: "Usually 60–90 minutes of focused work, sized for a weeknight.",
  },
  {
    n: "03",
    title: "Commit to GitHub",
    body: "Push your code — this becomes part of your public track record.",
  },
  {
    n: "04",
    title: "Post it on LinkedIn",
    body: "A short post on what you built, visible to anyone checking your work.",
  },
];

function PreviewStrip() {
  return (
    <div
      className="grid grid-cols-12 gap-1"
      role="img"
      aria-label="Example progress: a mostly-completed run of days with one missed day, treated the same as an upcoming day"
    >
      {previewDays.map((status, i) => (
        <div
          key={i}
          className={`aspect-square rounded-sm ${previewCellClass[status]}`}
        />
      ))}
    </div>
  );
}

export default function Landing() {
  return (
    <main className="min-h-screen">
      {/* Wordmark only — no nav links. This is a single-purpose landing page. */}
      <div className="max-w-md mx-auto px-5 pt-6">
        <span className="font-display font-semibold text-lg">ABTalks</span>
      </div>

      {/* Hero — thesis first: the daily build habit, made visible. */}
      <section className="max-w-md mx-auto px-5 pt-10 pb-12">
        <p className="font-mono text-sm text-accent mb-3">60-day coding challenge</p>
        <h1 className="font-display text-[28px] leading-tight font-semibold mb-4">
          Show up daily. Build daily. Let your work speak for itself.
        </h1>
        <p className="text-ink-soft text-[15px] leading-relaxed mb-6">
          ABTalks is a 60-day coding challenge for Indian college students who
          want to build consistency, not just credentials — one small project
          a day, tracked in public, visible to recruiters.
        </p>
        <Button as={Link} to="/dashboard" variant="primary" className="w-full mb-8">
          Start day 1
        </Button>
        <PreviewStrip />
        <p className="text-xs text-ink-faint font-mono mt-2">
          Example: day 12 of 60
        </p>
      </section>

      {/* What ABTalks is */}
      <Reveal as="section" className="max-w-md mx-auto px-5 py-10 border-t border-border-soft">
        <h2 className="font-display text-xl font-semibold mb-3">
          A daily coding habit, not another course
        </h2>
        <p className="text-ink-soft text-[15px] leading-relaxed">
          Pick a track, then build one small project every day for 60 days.
          There's no syllabus to finish and no lectures to sit through — just
          a new, focused challenge each day and a public record that you
          showed up and did the work.
        </p>
      </Reveal>

      {/* Daily loop — a genuine sequence, so numbering earns its place here. */}
      <Reveal as="section" className="max-w-md mx-auto px-5 py-10 border-t border-border-soft">
        <h2 className="font-display text-xl font-semibold mb-5">
          What you actually do each day
        </h2>
        <div className="space-y-5">
          {dailyLoop.map((step) => (
            <div key={step.n} className="flex gap-4">
              <span className="font-mono text-sm text-accent pt-0.5 shrink-0">
                {step.n}
              </span>
              <div>
                <p className="font-medium text-[15px] mb-0.5">{step.title}</p>
                <p className="text-ink-soft text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Streak philosophy — the core differentiator, made visible before signup. */}
      <Reveal as="section" className="max-w-md mx-auto px-5 py-10 border-t border-border-soft">
        <h2 className="font-display text-xl font-semibold mb-3">
          Missing a day doesn't reset your progress
        </h2>
        <p className="text-ink-soft text-[15px] leading-relaxed mb-5">
          Most streak trackers erase everything the moment you slip. ABTalks
          doesn't. Your total days completed stay counted forever — a missed
          day is just a missed day, shown the same as a day you haven't
          reached yet, not a reason to start over.
        </p>
        <PreviewStrip />
        <p className="text-xs text-ink-faint font-mono mt-2">
          Day 8 was missed — days 9 onward count the same as always
        </p>
      </Reveal>

      {/* Proof of work */}
      <Reveal as="section" className="max-w-md mx-auto px-5 py-10 border-t border-border-soft">
        <h2 className="font-display text-xl font-semibold mb-3">
          Proof of work recruiters can actually check
        </h2>
        <p className="text-ink-soft text-[15px] leading-relaxed">
          Every submission links your GitHub commit, your LinkedIn post, and
          a live deployment if you have one. By day 60, you have 60 real,
          dated, public examples of you building things — not just a line on
          your resume.
        </p>
      </Reveal>

      {/* Final CTA */}
      <Reveal as="section" className="max-w-md mx-auto px-5 py-12 border-t border-border-soft text-center">
        <h2 className="font-display text-xl font-semibold mb-2">Ready to start?</h2>
        <p className="text-ink-soft text-[15px] mb-6">
          Day 1 takes less time to start than it does to decide not to.
        </p>
        <Button as={Link} to="/dashboard" variant="primary" className="w-full">
          Start day 1
        </Button>
      </Reveal>

      <footer className="max-w-md mx-auto px-5 pb-10 pt-2">
        <p className="text-xs text-ink-faint font-mono">
          ABTalks — consistency over perfection.
        </p>
      </footer>
    </main>
  );
}
