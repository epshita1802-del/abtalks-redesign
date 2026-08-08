// Color mapping is a direct expression of the "consistency over perfection"
// philosophy: "missed" uses the same neutral tone as "upcoming" — a missed
// day is treated as simply not-yet-done, never as an error or a warning.
const styles = {
  completed: "bg-positive-soft text-positive",
  today: "bg-accent-soft text-accent-strong",
  missed: "bg-border-soft text-ink-soft",
  upcoming: "bg-border-soft text-ink-faint",
};

const labels = {
  completed: "Completed",
  today: "Today",
  missed: "Missed",
  upcoming: "Upcoming",
};

export default function StatusPill({ status, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-mono ${styles[status]} ${className}`}
    >
      {labels[status]}
    </span>
  );
}
