import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { challengeDays } from "../data/mockData.js";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import FormField from "../components/FormField.jsx";

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

export default function ChallengeDay() {
  const { dayId } = useParams();
  const day = challengeDays[dayId];

  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [deployUrl, setDeployUrl] = useState("");
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Edge case: day has no mocked content yet.
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
  const canSubmit = githubValid && linkedinValid && deployValid;

  const stepsComplete = [githubValid, linkedinValid, deployUrl.trim() !== "" ? deployValid : null];
  const completedCount = [githubValid, linkedinValid].filter(Boolean).length;

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ github: true, linkedin: true, deploy: true });
    if (canSubmit) setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen px-4 pt-6 pb-12 max-w-md mx-auto flex flex-col">
        <p className="font-mono text-sm text-accent mb-2">/day/{day.day}</p>
        <Card className="mt-4 animate-pop-in">
          <div className="w-12 h-12 rounded-full bg-positive-soft flex items-center justify-center mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="#6B8F71"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-check-draw"
              />
            </svg>
          </div>
          <p className="font-mono text-xs text-positive mb-2">Submitted</p>
          <h1 className="font-display text-xl font-semibold mb-2">
            Day {day.day} is logged
          </h1>
          <p className="text-ink-soft text-sm leading-relaxed mb-5">
            Your GitHub commit and LinkedIn post are linked to today's
            challenge. This will show up in your recent activity on the
            dashboard.
          </p>
          <Button as={Link} to="/dashboard" variant="primary" className="w-full">
            Back to dashboard
          </Button>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 pt-6 pb-12 max-w-md mx-auto">
      <p className="font-mono text-sm text-accent mb-1">Day {day.day} of 60</p>
      <h1 className="font-display text-xl font-semibold mb-1 leading-snug">
        {day.title}
      </h1>
      <p className="text-ink-faint text-xs font-mono mb-5">
        {day.track} · {day.estimatedTime}
      </p>

      {/* What to build */}
      <Card className="mb-4">
        <p className="text-sm font-medium text-ink mb-2">What to build</p>
        <p className="text-ink-soft text-sm leading-relaxed mb-4 break-words">
          {day.summary}
        </p>
        <ul className="space-y-2">
          {day.requirements.map((req, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
              <span className="text-accent shrink-0">·</span>
              <span className="break-words">{req}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Hints — collapsed by default so they don't compete with requirements */}
      <details className="mb-4 group">
        <summary className="tap-target flex items-center justify-between cursor-pointer text-sm font-medium text-ink py-2 px-1 list-none">
          Hints & resources
          <span className="text-ink-faint text-xs group-open:rotate-180 transition-transform">▾</span>
        </summary>
        <Card className="mt-2">
          <ul className="space-y-2 mb-4">
            {day.hints.map((hint, i) => (
              <li key={i} className="text-sm text-ink-soft leading-relaxed break-words">
                {hint}
              </li>
            ))}
          </ul>
          <div className="space-y-1.5 border-t border-border-soft pt-3">
            {day.resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-accent underline underline-offset-2 break-words"
              >
                {r.label}
              </a>
            ))}
          </div>
        </Card>
      </details>

      {/* Submission — guided checklist framing (Idea C), not a flat form. */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-ink">Submit your proof</p>
          <span className="font-mono text-xs text-ink-soft">{completedCount}/2 required</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <FormField
            id="github-url"
            label="GitHub commit or repo"
            type="url"
            placeholder="https://github.com/you/repo"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, github: true }))}
            error={touched.github && github && !githubValid ? "Enter a valid github.com link" : touched.github && !github ? "Required" : undefined}
          />
          <FormField
            id="linkedin-url"
            label="LinkedIn post"
            type="url"
            placeholder="https://linkedin.com/posts/..."
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, linkedin: true }))}
            error={touched.linkedin && linkedin && !linkedinValid ? "Enter a valid linkedin.com link" : touched.linkedin && !linkedin ? "Required" : undefined}
          />
          <FormField
            id="deploy-url"
            label="Live deployment"
            helperText={!deployUrl ? "Optional — add it if you deployed today's build" : undefined}
            type="url"
            placeholder="https://your-project.vercel.app"
            value={deployUrl}
            onChange={(e) => setDeployUrl(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, deploy: true }))}
            error={touched.deploy && deployUrl && !deployValid ? "Enter a valid URL" : undefined}
          />

          <Button type="submit" variant="primary" className="w-full mt-2" disabled={false}>
            Submit day {day.day}
          </Button>
          {!canSubmit && (touched.github || touched.linkedin) && (
            <p className="text-xs text-ink-faint text-center -mt-2">
              GitHub and LinkedIn links are required to submit.
            </p>
          )}
        </form>
      </Card>
    </main>
  );
}
