import { Link } from "react-router-dom";
import { student, recentActivity, challengeDays, dayStatuses } from "../data/mockData.js";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import JourneyTrail from "../components/JourneyTrail.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import CountUp from "../components/CountUp.jsx";

const displayName = student.name?.trim() ? student.name.split(" ")[0] : "there";
const initials = student.name?.trim()
  ? student.name.trim().split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase()
  : "?";
const isFirstDay = student.totalDaysCompleted === 0 && student.currentDay <= 1;
const recentlyMissed =
  student.lastMissedDay != null && student.currentDay - student.lastMissedDay <= 4;

const todayChallenge = challengeDays[student.currentDay];

// Build a zoomed-in window of nodes around today, instead of dumping all
// 60 days on screen — "you are here," not a full grid.
const statusByDay = Object.fromEntries(dayStatuses.map((d) => [d.day, d.status]));
const windowStart = Math.max(1, student.currentDay - 4);
const windowEnd = Math.min(student.totalDaysInChallenge, windowStart + 8);
const clusterNodes = Array.from({ length: windowEnd - windowStart + 1 }, (_, i) => {
  const day = windowStart + i;
  return { day, status: statusByDay[day] ?? "upcoming" };
});

export default function Dashboard() {
  return (
    <main className="min-h-screen pb-14">
      {/* Header identity — small, not competing with "where am I" */}
      <div className="max-w-md mx-auto px-4 pt-6 flex items-center gap-3 mb-1">
        <div className="w-9 h-9 rounded-full bg-secondary-soft text-secondary flex items-center justify-center font-mono text-xs font-medium shrink-0">
          {initials}
        </div>
        <p className="text-sm text-ink-soft">
          {isFirstDay ? "Welcome," : "Welcome back,"} {displayName}
        </p>
      </div>

      {/* "WHERE AM I" — the first thing answered, in the largest type on
          the page. This is the command-center header, not a stat card. */}
      <div className="bg-atmosphere pt-4 pb-8">
        <div className="max-w-md mx-auto px-4">
          <p className="font-display text-display-2xl font-bold text-ink leading-none mb-2">
            Day <CountUp value={student.currentDay} />
            <span className="text-ink-faint text-2xl font-normal">/{student.totalDaysInChallenge}</span>
          </p>
          <p className="text-ink-soft text-sm mb-4">
            <CountUp value={student.totalDaysCompleted} /> days built. Keep going.
          </p>
          <ProgressBar current={student.currentDay} total={student.totalDaysInChallenge} />

          {recentlyMissed && (
            <div className="mt-5">
              <p className="font-mono text-xs tracking-wide text-positive mb-1">
                YOU'RE STILL BUILDING
              </p>
              <p className="text-ink-soft text-sm">
                Day {student.lastMissedDay} was missed. Today is still yours.
              </p>
            </div>
          )}

          <div className="mt-6">
            <JourneyTrail nodes={clusterNodes} size="sm" />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4">
        {/* TODAY'S BUILD — the one dominant panel on the screen. Visually
            unmistakable as the single most important thing here. */}
        <Card variant="featured" className="mt-6 p-5 animate-today-glow">
          <p className="font-mono text-xs tracking-widest text-accent mb-2">
            TODAY'S BUILD
          </p>
          <h2 className="font-display text-display-lg font-semibold mb-2 leading-snug">
            {todayChallenge ? todayChallenge.title : "Today's challenge"}
          </h2>
          {todayChallenge && (
            <p className="text-ink-soft text-sm leading-relaxed mb-5">
              {todayChallenge.summary}
            </p>
          )}
          <Button as={Link} to={`/day/${student.currentDay}`} variant="primary" className="w-full">
            {isFirstDay ? "Start day 1" : "Continue today's challenge"}
          </Button>
        </Card>

        {/* Secondary info — deliberately quiet: no borders competing with
            the panel above, just typographic stats with dividers. */}
        <div className="flex items-stretch mt-6 divide-x divide-white/10">
          <div className="flex-1 pr-4">
            <p className="font-mono text-xl font-semibold text-ink">
              <CountUp value={student.currentStreak} />
            </p>
            <p className="text-xs text-ink-faint">day streak</p>
          </div>
          <div className="flex-1 px-4">
            <p className="font-mono text-xl font-semibold text-ink">{student.longestStreak}</p>
            <p className="text-xs text-ink-faint">longest streak</p>
          </div>
          <div className="flex-1 pl-4">
            <p className="text-sm text-ink truncate">{student.track}</p>
            <p className="text-xs text-ink-faint">track</p>
          </div>
        </div>

        {/* Recent activity — quiet list, not another card */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm font-medium text-ink mb-4">Recent activity</p>
          {recentActivity.length === 0 ? (
            <p className="text-sm text-ink-faint">
              Nothing submitted yet — day 1 will show up here once you finish it.
            </p>
          ) : (
            <ul className="space-y-4">
              {recentActivity.slice(0, 3).map((entry) => (
                <li key={entry.day} className="flex gap-3">
                  <span className="font-mono text-xs text-positive shrink-0 pt-0.5">
                    {String(entry.day).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-ink mb-1 leading-snug break-words">{entry.title}</p>
                    <div className="flex gap-3 text-xs">
                      <a href={entry.githubUrl} className="text-ink-faint underline underline-offset-2" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                      <a href={entry.linkedinUrl} className="text-ink-faint underline underline-offset-2" target="_blank" rel="noreferrer">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
