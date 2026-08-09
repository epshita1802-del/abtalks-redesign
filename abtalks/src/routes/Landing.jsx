import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import JourneyTrail from "../components/JourneyTrail.jsx";
import { useReveal } from "../hooks/useReveal.js";

function Reveal({ as: Component = "div", children, className = "" }) {
  const [ref, isVisible] = useReveal();
  return (
    <Component ref={ref} className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </Component>
  );
}

// Illustrative-only — a first-time visitor hasn't started yet, so this is
// clearly an example pattern, never mistaken for the visitor's own data.
const milestoneNodes = [
  { day: 1, status: "completed" },
  { day: 15, status: "completed" },
  { day: 30, status: "today" },
  { day: 45, status: "upcoming" },
  { day: 60, status: "upcoming" },
];

const recoveryNodes = [
  { day: 6, status: "completed" },
  { day: 7, status: "completed" },
  { day: 8, status: "missed" },
  { day: 9, status: "completed" },
  { day: 10, status: "completed" },
  { day: 11, status: "completed" },
  { day: 12, status: "today" },
];

const dailyLoop = [
  { n: "01", title: "Read today's challenge", body: "One focused build, explained clearly — no syllabus to dig through." },
  { n: "02", title: "Build it", body: "Usually 60–90 minutes of focused work, sized for a weeknight." },
  { n: "03", title: "Commit to GitHub", body: "Push your code — this becomes part of your public track record." },
  { n: "04", title: "Post it on LinkedIn", body: "A short post on what you built, visible to anyone checking your work." },
];

export default function Landing() {
  return (
    <main className="min-h-screen">
      <div className="max-w-md mx-auto px-5 pt-6 pb-2">
        <span className="font-display font-bold text-sm tracking-widest text-secondary">
          ABTALKS
        </span>
      </div>

      {/* HERO — "60" as the dominant visual element, not a headline/text/
          button/card stack. The milestone trail IS the hero visual. */}
      <section className="bg-atmosphere pt-8 pb-14">
        <div className="max-w-md mx-auto px-5">
          <p className="font-mono text-xs tracking-widest text-secondary mb-2">
            60-DAY BUILD JOURNEY
          </p>
          <h1 className="font-display text-display-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
            60
          </h1>
          <p className="font-display text-display-lg font-semibold text-ink mb-4 leading-tight">
            Build every day.<br />Show your work.
          </p>
          <p className="text-ink-soft text-[15px] leading-relaxed mb-7 max-w-[32ch]">
            A 60-day coding challenge for Indian college students who want
            consistency, not just credentials — tracked in public, visible
            to recruiters.
          </p>
          <Button as={Link} to="/dashboard" variant="primary" className="w-full mb-10">
            Start day 1
          </Button>

          <JourneyTrail nodes={milestoneNodes} size="lg" />
        </div>
      </section>

      {/* What ABTalks is — editorial block with a colored rail, not a card */}
      <Reveal as="section" className="max-w-md mx-auto px-5 py-12">
        <div className="border-l-2 border-secondary/50 pl-4">
          <h2 className="font-display text-display-lg font-semibold mb-3">
            A daily habit, not another course
          </h2>
          <p className="text-ink-soft text-[15px] leading-relaxed">
            Pick a track, then build one small project every day for 60 days.
            No syllabus to finish, no lectures to sit through — just a new,
            focused challenge each day and a public record that you showed up.
          </p>
        </div>
      </Reveal>

      {/* Daily loop — connected sequence, echoing the trail visual language
          at a smaller scale, vertically. */}
      <Reveal as="section" className="max-w-md mx-auto px-5 py-12">
        <h2 className="font-display text-display-lg font-semibold mb-6">
          What you do each day
        </h2>
        <div className="relative pl-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />
          <div className="space-y-7">
            {dailyLoop.map((step) => (
              <div key={step.n} className="relative">
                <div className="absolute -left-8 top-0.5 w-[22px] h-[22px] rounded-full bg-surface border border-accent/40 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <p className="font-mono text-xs text-accent mb-1">{step.n}</p>
                <p className="font-medium text-[15px] text-ink mb-1">{step.title}</p>
                <p className="text-ink-soft text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Streak recovery — the core differentiator, shown as a beautiful
          recovery state using the trail itself, not described in prose. */}
      <Reveal as="section" className="bg-atmosphere py-12">
        <div className="max-w-md mx-auto px-5">
          <p className="font-mono text-xs tracking-widest text-positive mb-3">
            CONSISTENCY OVER PERFECTION
          </p>
          <h2 className="font-display text-display-lg font-semibold mb-2 leading-tight">
            You're still building.
          </h2>
          <p className="text-ink-soft text-[15px] leading-relaxed mb-6 max-w-[34ch]">
            Most trackers erase everything the moment you slip. We don't.
            A missed day is just a missed day — never a reason to start over.
          </p>
          <JourneyTrail nodes={recoveryNodes} size="md" />
          <p className="text-xs text-ink-faint font-mono mt-3">
            example: day 8 missed — day 12 continues like normal
          </p>
        </div>
      </Reveal>

      {/* Proof of work */}
      <Reveal as="section" className="max-w-md mx-auto px-5 py-12">
        <div className="border-l-2 border-secondary/50 pl-4">
          <h2 className="font-display text-display-lg font-semibold mb-3">
            Proof recruiters can check
          </h2>
          <p className="text-ink-soft text-[15px] leading-relaxed">
            Every submission links your GitHub commit, LinkedIn post, and a
            live deployment if you have one. By day 60, that's 60 real,
            dated, public examples of you building things.
          </p>
        </div>
      </Reveal>

      {/* Final CTA */}
      <Reveal as="section" className="max-w-md mx-auto px-5 pt-6 pb-16 text-center">
        <h2 className="font-display text-display-xl font-bold mb-3">
          Ready for day 1?
        </h2>
        <p className="text-ink-soft text-[15px] mb-7">
          It takes less time to start than to decide not to.
        </p>
        <Button as={Link} to="/dashboard" variant="primary" className="w-full">
          Start day 1
        </Button>
      </Reveal>

      <footer className="max-w-md mx-auto px-5 pb-10">
        <p className="text-xs text-ink-faint font-mono">
          ABTalks — consistency over perfection.
        </p>
      </footer>
    </main>
  );
}
