const variants = {
  // Quiet utility surface — hints, resource links. Not a default content
  // wrapper; most content should NOT be in a card at all in this design.
  default: "bg-surface/60 border border-border",
  // Reserved for the one dominant panel per screen (today's build, the
  // submission stage). Large radius, glow, gradient-tinted edge.
  featured:
    "bg-gradient-to-br from-surface to-surface-soft border border-accent/25 shadow-glow-accent",
  raised: "bg-surface/60 border border-secondary/25",
};

export default function Card({ variant = "default", className = "", children, ...props }) {
  return (
    <div className={`rounded-lg p-4 ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
