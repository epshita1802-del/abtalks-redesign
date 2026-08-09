/**
 * The product's signature visual: a connected trail of day-nodes.
 * This is the one visual system that recurs across all three screens
 * (landing hero, dashboard, challenge day) in different scales, instead
 * of each screen inventing its own container language.
 *
 * status per node: "completed" | "today" | "missed" | "upcoming"
 * - completed → filled, success green
 * - today     → large, glowing lime — the one node that pulses
 * - missed    → hollow ring, neutral — never red, never an error
 * - upcoming  → small, quiet dot
 */
const nodeFill = {
  completed: "fill-positive",
  today: "fill-accent",
  missed: "fill-transparent stroke-ink-faint",
  upcoming: "fill-ink-faint/30",
};

export default function JourneyTrail({ nodes, size = "md", showLabels = true }) {
  const spacing = 100 / (nodes.length - 1 || 1);
  const radii = { sm: 3.5, md: 5, lg: 7 };
  const todayRadius = { sm: 6, md: 9, lg: 13 };

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className="w-full h-6 overflow-visible"
      >
        {/* connecting line, drawn in on mount */}
        <line
          x1="0"
          y1="10"
          x2="100"
          y2="10"
          stroke="currentColor"
          className="text-ink-faint/25"
          strokeWidth="0.6"
          style={{ "--trail-length": 100 }}
          vectorEffect="non-scaling-stroke"
        />
        {nodes.map((n, i) => {
          const isToday = n.status === "today";
          const r = isToday ? todayRadius[size] / 10 : radii[size] / 10;
          return (
            <circle
              key={n.day}
              cx={i * spacing}
              cy="10"
              r={r}
              className={`animate-node-pop ${nodeFill[n.status]}`}
              style={{
                animationDelay: `${i * 60}ms`,
                strokeWidth: n.status === "missed" ? 0.8 : 0,
              }}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* today's glow ring — HTML overlay, positioned to match the SVG node */}
      {nodes.map((n, i) =>
        n.status === "today" ? (
          <div
            key={`glow-${n.day}`}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full animate-today-glow pointer-events-none"
            style={{ left: `${i * spacing}%` }}
          />
        ) : null
      )}

      {showLabels && (
        <div className="flex justify-between mt-2">
          {nodes.map((n) => (
            <span
              key={n.day}
              className={`font-mono text-[10px] ${
                n.status === "today" ? "text-accent font-semibold" : "text-ink-faint"
              }`}
            >
              {n.day}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
