import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { challengeDays } from "../data/mockData.js";
import Button from "../components/Button.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import JourneyTrail from "../components/JourneyTrail.jsx";

function isValidUrl(value, mustContain) {
  if (!value.trim()) return false;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return false;
    if (mustContain && !url.hostname.includes(mustContain)) return false;
    return true;
  } catch {
    return false;
  }
}

function StepRow({ n, title, complete, active, children }) {
  return (
    <div className="relative pl-9">
      <div
        className={`absolute left-0 top-0.5 w-6 h-6 rounded-full flex items-center justify-center font-mono text-[11px] transition-colors duration-300 ${
          complete
            ? "bg-positive text-ink-inverse"
            : active
            ? "border-2 border-secondary text-secondary"
            : "border border-white/15 text-ink-faint"
        }`}
      >
        {complete ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          n
        )}
      </div>
      <p className="text-sm font-medium text-ink mb-2">{title}</p>
      {children}
    </div>
  );
}

export default function ChallengeDay() {
  const { dayId } = useParams();
  const day = challengeDays[dayId];

  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [deployUrl, setDeployUrl] = useState("");
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);

  if (!day) {
    return (
      <main className="min-h-screen px-4 pt-6 pb-12 max-w-md mx-auto">
        <p className="font-mono text-sm text-accent mb-2">/day/{dayId}</p>
        <h1 className="font-display text-xl font-semibold mb-2">
          No challenge found for day {dayId}
        </h1>
        <p className="text-ink-soft text-sm mb-6">
          This build only has content wired up for day 12 as a working example.
        </p>
        <Button as={Link} to="/dashboard" variant="secondary">
          Back to dashboard
        </Button>
      </main>
    );
  }

  const githubValid = isValidUrl(github, "github.com");
  const linkedinValid = isValidUrl(linkedin, "linkedin.com");
  const deployValid = deployUrl.trim() === "" || isValidUrl(deployUrl);
  const deployComplete = deployUrl.trim() !== "" && deployValid;
  const canSubmit = githubValid && linkedinValid && deployValid;
  const completedCount = [githubValid, linkedinValid, deployComplete].filter(Boolean).length;

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ github: true, linkedin: true, deploy: true });
    if (canSubmit) setSubmitted(true);
  }

  if (submitted) {
    const completionNodes = [
      { day: day.day - 2, status: "completed" },
      { day: day.day - 1, status: "completed" },
      { day: day.day, status: "completed" },
      { day: day.day + 1, status: "today" },
      { day: day.day + 2, status: "upcoming" },
    ];
    return (
      <main className="min-h-screen px-4 pt-6 pb-12 max-w-md mx-auto flex flex-col items-center text-center">
        <div className="w-full mt-10 animate-pop-in">
          <div className="w-16 h-16 rounded-full bg-positive-soft flex items-center justify-center mx-auto mb-6 shadow-glow-positive">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#5FD68C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-check-draw" />
            </svg>
          </div>
          <p className="font-mono text-xs tracking-widest text-positive mb-2">DAY {day.day} COMPLETE</p>
          <h1 className="font-display text-display-lg font-bold mb-3">Nice work.</h1>
          <p className="text-ink-soft text-sm leading-relaxed mb-8 max-w-[30ch] mx-auto">
            Your GitHub commit and LinkedIn post are linked to today's build.
            It'll show up in your recent activity on the dashboard.
          </p>
          <JourneyTrail nodes={completionNodes} size="md" />
          <Button as={Link} to="/dashboard" variant="primary" className="w-full mt-10">
            Back to dashboard
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-16">
      {/* Breadcrumb — compact, not a repeated full trail element */}
      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="flex items-center justify-between mb-2">
          <p className="font-mono text-xs text-ink-faint">DAY {day.day} OF 60</p>
          <p className="font-mono text-xs text-ink-faint">{day.track}</p>
        </div>
        <ProgressBar current={day.day} total={60} />
      </div>

      {/* BUILD stage */}
      <div className="max-w-md mx-auto px-4 pt-8">
        <p className="font-mono text-xs tracking-widest text-accent mb-2">BUILD</p>
        <h1 className="font-display text-display-lg font-bold mb-3 leading-snug">
          {day.title}
        </h1>
        <p className="text-ink-soft text-sm leading-relaxed mb-5 break-words">
          {day.summary}
        </p>

        <div className="border-l-2 border-accent/30 pl-4 space-y-2.5 mb-2">
          {day.requirements.map((req, i) => (
            <p key={i} className="text-sm text-ink-soft leading-relaxed break-words">
              {req}
            </p>
          ))}
        </div>
        <p className="text-xs text-ink-faint font-mono mb-6">{day.estimatedTime}</p>

        <button
          type="button"
          onClick={() => setHintsOpen((o) => !o)}
          className="tap-target flex items-center gap-1.5 text-sm text-secondary font-medium"
        >
          Hints & resources
          <span className={`text-xs transition-transform ${hintsOpen ? "rotate-180" : ""}`}>▾</span>
        </button>
        {hintsOpen && (
          <div className="mt-3 pl-4 border-l-2 border-secondary/30 space-y-2 animate-pop-in">
            {day.hints.map((hint, i) => (
              <p key={i} className="text-sm text-ink-soft leading-relaxed break-words">{hint}</p>
            ))}
            <div className="pt-2 space-y-1.5">
              {day.resources.map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="block text-sm text-secondary underline underline-offset-2 break-words">
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PROVE stage — visually distinct panel, coral-tinted, so it reads
          as a different mode from BUILD above, not another card in a stack.
          Single flat tint (not stacked alphas) to keep the color clean. */}
      <div className="mt-10 bg-secondary/[0.06] border-t border-b border-secondary/15 py-8">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-xs tracking-widest text-secondary">PROVE</p>
            <p className="font-mono text-xs text-ink-soft">{completedCount}/3 complete</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <StepRow n="01" title="GitHub commit or repo" complete={githubValid} active={!githubValid}>
              <input
                type="url"
                placeholder="https://github.com/you/repo"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, github: true }))}
                className={`tap-target w-full rounded border px-3.5 text-[15px] bg-white/[0.03] text-ink placeholder:text-ink-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  touched.github && github && !githubValid ? "border-caution" : "border-white/10"
                }`}
              />
              {touched.github && github && !githubValid && (
                <p className="text-xs text-caution mt-1.5">Enter a valid github.com link</p>
              )}
            </StepRow>

            <StepRow n="02" title="LinkedIn post" complete={linkedinValid} active={githubValid && !linkedinValid}>
              <input
                type="url"
                placeholder="https://linkedin.com/posts/..."
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, linkedin: true }))}
                className={`tap-target w-full rounded border px-3.5 text-[15px] bg-white/[0.03] text-ink placeholder:text-ink-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  touched.linkedin && linkedin && !linkedinValid ? "border-caution" : "border-white/10"
                }`}
              />
              {touched.linkedin && linkedin && !linkedinValid && (
                <p className="text-xs text-caution mt-1.5">Enter a valid linkedin.com link</p>
              )}
            </StepRow>

            <StepRow n="03" title="Live deployment (optional)" complete={deployComplete} active={githubValid && linkedinValid && !deployComplete}>
              <input
                type="url"
                placeholder="https://your-project.vercel.app"
                value={deployUrl}
                onChange={(e) => setDeployUrl(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, deploy: true }))}
                className={`tap-target w-full rounded border px-3.5 text-[15px] bg-white/[0.03] text-ink placeholder:text-ink-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  touched.deploy && deployUrl && !deployValid ? "border-caution" : "border-white/10"
                }`}
              />
              {touched.deploy && deployUrl && !deployValid && (
                <p className="text-xs text-caution mt-1.5">Enter a valid URL</p>
              )}
            </StepRow>

            <Button type="submit" variant="primary" className="w-full mt-2">
              Submit day {day.day}
            </Button>
            {!canSubmit && (touched.github || touched.linkedin) && (
              <p className="text-xs text-ink-faint text-center -mt-2">
                GitHub and LinkedIn links are required to submit.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
