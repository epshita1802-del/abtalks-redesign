import { Link } from "react-router-dom";
import { student, recentActivity, challengeDays } from "../data/mockData.js";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import ProgressStrip from "../components/ProgressStrip.jsx";
import CountUp from "../components/CountUp.jsx";

// Defensive fallbacks — the dashboard must not break if profile data is
// incomplete (empty-profile edge case) or if a student hasn't started yet
// (first-day edge case, currentStreak === totalDaysCompleted === 0).
const displayName = student.name?.trim() ? student.name.split(" ")[0] : "there";
const initials = student.name?.trim()
  ? student.name.trim().split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase()
  : "?";
const isFirstDay = student.totalDaysCompleted === 0 && student.currentDay <= 1;
const recentlyMissed =
  student.lastMissedDay != null && student.currentDay - student.lastMissedDay <= 4;

const todayChallenge = challengeDays[student.currentDay];

export default function Dashboard() {
  return (
    <main className="min-h-screen px-4 pt-6 pb-12 max-w-md mx-auto">
      {/* Header — small, identity-only. Not competing with today's task. */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-accent-soft text-accent-strong flex items-center justify-center font-mono text-sm font-medium shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-sm text-ink-soft">
            {isFirstDay ? "Welcome," : "Welcome back,"}
          </p>
          <h1 className="font-display text-lg font-semibold leading-tight">
            {displayName}
          </h1>
        </div>
      </div>

      {/* IDEA B — today's task is the single strongest visual element on
          the page: largest card, first thing after the header, accent-bordered.
          The soft pulsing ring is the one ambient animation in the app —
          reserved for the single most important thing on the screen. */}
      <Card variant="featured" className="mb-4 animate-today-pulse">
        <p className="font-mono text-xs text-accent mb-2">
          {isFirstDay ? "Day 1 of " + student.totalDaysInChallenge : `Day ${student.currentDay} of ${student.totalDaysInChallenge}`}
        </p>
        <h2 className="font-display text-xl font-semibold mb-2 leading-snug">
          {todayChallenge ? todayChallenge.title : "Today's challenge"}
        </h2>
        {todayChallenge && (
          <p className="text-ink-soft text-sm leading-relaxed mb-4">
            {todayChallenge.summary}
          </p>
        )}
        <Button as={Link} to={`/day/${student.currentDay}`} variant="primary" className="w-full">
          {isFirstDay ? "Start day 1" : "Continue today's challenge"}
        </Button>
      </Card>

      {/* IDEA A — total days completed leads; current streak is secondary
          and never shown with alarming color, even when it's low or reset. */}
      <Card className="mb-4">
        <div className="flex items-end justify-between mb-1">
          <div>
            <p className="font-mono text-2xl font-semibold text-ink">
              <CountUp value={student.totalDaysCompleted} />
              <span className="text-ink-faint text-base font-normal">
                /{student.totalDaysInChallenge}
              </span>
            </p>
            <p className="text-xs text-ink-soft">days completed</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-lg text-ink-soft">
              <CountUp value={student.currentStreak} />
            </p>
            <p className="text-xs text-ink-faint">day streak</p>
          </div>
        </div>

        {recentlyMissed && (
          <p className="text-xs text-ink-soft bg-border-soft rounded-sm px-2.5 py-1.5 mt-3 mb-3">
            Day {student.lastMissedDay} was missed — that's fine, it doesn't
            erase what you've already built.
          </p>
        )}

        <div className="mt-3">
          <ProgressStrip />
        </div>
      </Card>

      {/* Standing — kept small and factual, not a leaderboard or badge wall. */}
      <Card className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-mono text-lg text-ink">{student.longestStreak}</p>
            <p className="text-xs text-ink-soft">longest streak</p>
          </div>
          <div>
            <p className="text-sm text-ink truncate">{student.track}</p>
            <p className="text-xs text-ink-soft">track</p>
          </div>
        </div>
      </Card>

      {/* Recent proof of work */}
      <Card>
        <p className="text-sm font-medium text-ink mb-3">Recent activity</p>
        {recentActivity.length === 0 ? (
          <p className="text-sm text-ink-faint">
            Nothing submitted yet — day 1 will show up here once you finish it.
          </p>
        ) : (
          <ul className="space-y-3">
            {recentActivity.slice(0, 3).map((entry) => (
              <li key={entry.day} className="border-t border-border-soft pt-3 first:border-t-0 first:pt-0">
                <p className="font-mono text-xs text-accent mb-0.5">Day {entry.day}</p>
                <p className="text-sm text-ink mb-1.5 leading-snug break-words">{entry.title}</p>
                <div className="flex gap-3 text-xs">
                  <a href={entry.githubUrl} className="text-ink-soft underline underline-offset-2" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={entry.linkedinUrl} className="text-ink-soft underline underline-offset-2" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </main>
  );
}
