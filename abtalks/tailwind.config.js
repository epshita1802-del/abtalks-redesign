/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Base surfaces — soft warm-white, not cream. Calm, low eye-strain for late-night use.
        bg: "#FAFAF8",
        surface: "#FFFFFF",
        // Text — near-black navy-ink rather than pure black (softer on the eyes at night).
        ink: {
          DEFAULT: "#14181F",
          soft: "#5B6472",
          faint: "#8A93A3",
        },
        border: {
          DEFAULT: "#E4E1DA",
          soft: "#EDEBE5",
        },
        // Accent — muted amber/gold. Used only for streak, progress, and primary CTAs.
        accent: {
          DEFAULT: "#B8862F",
          soft: "#F3E6CC",
          strong: "#96691F",
        },
        // Used sparingly for "on track" / positive states — muted sage, not a bright SaaS green.
        positive: {
          DEFAULT: "#6B8F71",
          soft: "#E4EBE3",
        },
        // Used only for genuine problems (invalid form input), never for a missed day.
        caution: {
          DEFAULT: "#B4573F",
          soft: "#F3E1DB",
        },
      },
      fontFamily: {
        // Display face — headlines and section titles only, used with restraint.
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        // Body face — everything else, tuned for small-screen readability.
        sans: ["Inter", "system-ui", "sans-serif"],
        // Utility/mono face — day numbers, streak counts, code references.
        // Ties the visual language back to "this is a coding platform" without a hacker-theme cliché.
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "14px",
      },
      boxShadow: {
        // Hairline-first design — shadow reserved for one or two elevated elements (e.g. sticky CTA).
        subtle: "0 1px 2px rgba(20, 24, 31, 0.04)",
        raised: "0 4px 16px rgba(20, 24, 31, 0.08)",
      },
    },
  },
  plugins: [],
};
