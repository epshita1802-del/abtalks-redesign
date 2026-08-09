/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Base surfaces — soft warm-white, not cream. Calm, low eye-strain for late-night use.
        bg: "#FAFAF8",
        surface: "#FFFFFF",
        // A deep, warm-neutral surface for high-contrast bands (hero, milestone
        // strip) — used sparingly, not as the default page background.
        canvas: {
          DEFAULT: "#171A21",
          soft: "#22262F",
        },
        // Text — near-black navy-ink rather than pure black (softer on the eyes at night).
        ink: {
          DEFAULT: "#14181F",
          soft: "#5B6472",
          faint: "#8A93A3",
          // For text placed on the dark `canvas` surface.
          inverse: "#F4F2ED",
          "inverse-soft": "#B7BAC2",
        },
        border: {
          DEFAULT: "#E4E1DA",
          soft: "#EDEBE5",
        },
        // PRIMARY — warm amber/orange. Main CTA, active progress, current
        // challenge. The one color that means "this is the important thing."
        accent: {
          DEFAULT: "#C97A2E",
          light: "#E2A662",
          soft: "#F3E6CC",
          strong: "#96691F",
        },
        // SECONDARY — cool teal. Achievements, milestones, supporting
        // information. Deliberately a cool complement to the warm primary,
        // not another warm tone competing for the same attention.
        secondary: {
          DEFAULT: "#2B8A82",
          light: "#5FB3AB",
          soft: "#DCEEEC",
          strong: "#1F6A63",
        },
        // SUCCESS — completed days, successful submissions.
        positive: {
          DEFAULT: "#5F9A66",
          soft: "#E4EBE3",
        },
        // WARNING — reserved for real problems (invalid input, incomplete
        // submission) only. Never applied to a missed day — see prompt.md.
        caution: {
          DEFAULT: "#B4573F",
          soft: "#F3E1DB",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Expressive display sizes for the landing hero / section headers
        // that genuinely warrant emphasis. Not used for every heading.
        "display-2xl": ["2.75rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["2.1rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-lg": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "14px",
        xl: "20px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(20, 24, 31, 0.04)",
        raised: "0 4px 16px rgba(20, 24, 31, 0.08)",
        // Colored glows — used strategically (primary CTA, today's task
        // card, milestone markers), not on every element with that color.
        "glow-accent": "0 8px 24px -4px rgba(201, 122, 46, 0.35)",
        "glow-secondary": "0 8px 24px -4px rgba(43, 138, 130, 0.3)",
      },
      backgroundImage: {
        // Gradient utilities for the handful of elements that earn one:
        // primary CTA, active progress fill, hero glow.
        "gradient-primary": "linear-gradient(135deg, #C97A2E 0%, #DB9A4A 100%)",
        "gradient-secondary": "linear-gradient(135deg, #2B8A82 0%, #4CA79E 100%)",
        "glow-radial": "radial-gradient(circle, rgba(201, 122, 46, 0.25) 0%, rgba(201, 122, 46, 0) 70%)",
      },
    },
  },
  plugins: [],
};
