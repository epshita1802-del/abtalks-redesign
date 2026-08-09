/**
 * Slim full-width progress indicator giving overall "day X of 60" context.
 * Paired with JourneyTrail (which zooms into the days around today) —
 * this one answers "how far along the whole journey am I," not "what's
 * happening right now."
 */
export default function ProgressBar({ current, total }) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-primary transition-[width] duration-700 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
