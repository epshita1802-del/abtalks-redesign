const variants = {
  // Default — plain surface, used for most content. Not every card needs
  // to compete for attention.
  default: "bg-surface border border-border",
  // Featured — reserved for the single most important card on a screen
  // (e.g. today's task). Gradient-tinted border + soft glow instead of a
  // plain hairline, so it's unmistakably the focal point.
  featured:
    "bg-surface border-2 border-accent/40 shadow-glow-accent",
  // Raised — for secondary-but-notable content (achievements, milestones),
  // using the secondary color instead of primary so it doesn't compete
  // with the one truly primary element on the page.
  raised: "bg-surface border border-secondary/30 shadow-subtle",
};

/**
 * Generic surface for a discrete unit of content. Three variants map
 * directly to the color hierarchy (primary/secondary/neutral) rather than
 * being purely decorative choices.
 */
export default function Card({ variant = "default", className = "", children, ...props }) {
  return (
    <div
      className={`rounded-lg p-4 transition-shadow duration-200 hover:shadow-subtle ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
