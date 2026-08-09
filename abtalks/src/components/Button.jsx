const variants = {
  primary:
    "bg-gradient-primary text-ink-inverse shadow-glow-accent hover:brightness-105",
  secondary:
    "bg-white/[0.04] text-ink border border-white/10 hover:border-accent/40 hover:bg-white/[0.07]",
  ghost: "bg-transparent text-ink-soft hover:text-ink",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`tap-target inline-flex items-center justify-center gap-2 rounded font-sans font-semibold text-[15px] px-5 transition-all duration-200 hover:scale-[1.015] active:scale-[0.97] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
