/**
 * Generic surface for a discrete unit of content (a day, a submission,
 * an achievement). Not used as a default wrapper for everything —
 * plain sections are fine when there's nothing to visually separate.
 */
export default function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`bg-surface border border-border rounded-lg p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
