const styles = {
  completed: "bg-positive-soft text-positive",
  today: "bg-accent-soft text-accent",
  missed: "bg-white/[0.06] text-ink-faint",
  upcoming: "bg-white/[0.06] text-ink-faint",
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
