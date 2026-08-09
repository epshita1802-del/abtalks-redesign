const variants = {
  // Gradient fill + colored glow on hover — the one element on most
  // screens that should read as "premium" and unmistakably primary.
  primary:
    "bg-gradient-primary text-white shadow-subtle hover:shadow-glow-accent",
  secondary:
    "bg-surface text-ink border border-border hover:border-accent/50 hover:bg-accent-soft/40",
  ghost: "bg-transparent text-ink-soft hover:text-ink hover:bg-border-soft",
};

/**
 * Base action element. Three variants only — primary (one per screen,
 * reserved for the single most important action), secondary, and ghost.
 * Not adding more variants than the product actually needs.
 */
export default function Button({
  as: Component = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`tap-target inline-flex items-center justify-center gap-2 rounded font-sans font-medium text-[15px] px-5 transition-all duration-200 hover:scale-[1.015] active:scale-[0.97] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
