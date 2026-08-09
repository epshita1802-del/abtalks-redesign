/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Deep navy-charcoal, not true black — reads as technical/premium
        // without matching a generic "dark mode" default.
        bg: "#0E1420",
        surface: "#161D2C",
        "surface-soft": "#1C2436",

        ink: {
          DEFAULT: "#F3F5F0",
          soft: "#9AA3B8",
          faint: "#6B7385",
          // Dark text for use ON bright accent surfaces (lime/green buttons).
          inverse: "#0E1420",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.10)",
          soft: "rgba(255,255,255,0.06)",
        },

        // PRIMARY — electric lime. Reserved for TODAY, the primary CTA,
        // and the active point on the journey trail. Nothing else uses it.
        accent: {
          DEFAULT: "#C6FF3D",
          soft: "rgba(198,255,61,0.12)",
          strong: "#A3D929",
        },
        // SECONDARY — coral. Achievements, milestones, supporting accents.
        // A warm complement to the cool-bright primary.
        secondary: {
          DEFAULT: "#FF7A50",
          soft: "rgba(255,122,80,0.12)",
          strong: "#E85C34",
        },
        // SUCCESS — completed days/steps. Distinct from primary lime so
        // "completed" and "today" never read as the same thing.
        positive: {
          DEFAULT: "#5FD68C",
          soft: "rgba(95,214,140,0.14)",
        },
        // WARNING — real problems only (invalid input). Never a missed day.
        caution: {
          DEFAULT: "#FF5C5C",
          soft: "rgba(255,92,92,0.14)",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-3xl": ["4.5rem", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-2xl": ["2.75rem", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-xl": ["2.1rem", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-lg": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.2)",
        raised: "0 8px 24px rgba(0,0,0,0.35)",
        "glow-accent": "0 0 32px rgba(198,255,61,0.28)",
        "glow-secondary": "0 0 32px rgba(255,122,80,0.24)",
        "glow-positive": "0 0 24px rgba(95,214,140,0.28)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #C6FF3D 0%, #E8FF8C 100%)",
        "gradient-secondary": "linear-gradient(135deg, #FF7A50 0%, #FFA075 100%)",
        "glow-radial": "radial-gradient(circle, rgba(198,255,61,0.16) 0%, rgba(198,255,61,0) 70%)",
        "glow-radial-coral": "radial-gradient(circle, rgba(255,122,80,0.14) 0%, rgba(255,122,80,0) 70%)",
      },
    },
  },
  plugins: [],
};
