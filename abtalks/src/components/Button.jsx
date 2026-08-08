const variants = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  secondary: "bg-surface text-ink border border-border hover:border-ink-faint",
  ghost: "bg-transparent text-ink-soft hover:text-ink",
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
      className={`tap-target inline-flex items-center justify-center gap-2 rounded font-sans font-medium text-[15px] px-5 transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
