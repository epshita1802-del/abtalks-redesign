import { dayStatuses } from "../data/mockData.js";

/**
 * Signature progress element for the dashboard.
 *
 * Deliberately not a percentage or a circular "68% complete" ring — those
 * are abstract and, per the brief, demotivating. Instead this renders all
 * 60 days as a grid of small segments, so a student can see their actual
 * rhythm at a glance: a run of completed days, one missed day, more
 * completed days after it. The missed day is visually present but neutral
 * (same muted tone as an upcoming day) — never red, never flagged as an
 * error. This is Idea A made visible, not just described.
 */
export default function ProgressStrip({ totalDays = 60 }) {
  const statusByDay = Object.fromEntries(
    dayStatuses.map((d) => [d.day, d.status])
  );

  const days = Array.from({ length: totalDays }, (_, i) => {
    const day = i + 1;
    return { day, status: statusByDay[day] ?? "upcoming" };
  });

  const segmentClass = {
    completed: "bg-positive",
    today: "bg-accent",
    missed: "bg-border ring-1 ring-inset ring-ink-faint/40",
    upcoming: "bg-border-soft",
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-1.5" role="img" aria-label={`Progress: ${dayStatuses.filter(d => d.status === "completed").length} of ${totalDays} days completed`}>
        {days.map(({ day, status }) => (
          <div
            key={day}
            className={`aspect-square rounded-sm ${segmentClass[status]} ${
              status === "today" ? "scale-110" : ""
            }`}
            title={`Day ${day}: ${status}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-4 mt-3 text-xs text-ink-faint font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-positive inline-block" /> Completed
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-accent inline-block" /> Today
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-border ring-1 ring-inset ring-ink-faint/40 inline-block" /> Missed
        </span>
      </div>
    </div>
  );
}
