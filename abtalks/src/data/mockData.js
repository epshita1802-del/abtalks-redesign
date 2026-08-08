// Mocked data standing in for a real backend/database.
// Shapes are deliberately close to what a real API response would look like,
// so swapping this for a fetch() call later is a small change, not a rewrite.

// A single student. `currentStreak` and `totalDaysCompleted` are tracked
// separately on purpose — this is what makes the "streak recovery" (Idea A)
// hierarchy possible: total progress persists even when a streak resets.
export const student = {
  name: "Ananya Sharma",
  track: "Frontend Development",
  collegeYear: "3rd Year, B.Tech CSE",
  // Empty-profile edge case: avatar intentionally omitted for some students.
  avatarUrl: null,
  startDate: "2026-07-28",
  currentDay: 12,
  totalDaysInChallenge: 60,
  totalDaysCompleted: 9,
  currentStreak: 2,
  longestStreak: 6,
  lastMissedDay: 8, // day 8 was missed, days 9-11 resumed the (new) streak
};

// Per-day status feeds the 60-segment day-strip (the signature progress
// element). "missed" is a real, non-punitive state — not an error state.
export const dayStatuses = [
  { day: 1, status: "completed" },
  { day: 2, status: "completed" },
  { day: 3, status: "completed" },
  { day: 4, status: "completed" },
  { day: 5, status: "completed" },
  { day: 6, status: "completed" },
  { day: 7, status: "completed" },
  { day: 8, status: "missed" },
  { day: 9, status: "completed" },
  { day: 10, status: "completed" },
  { day: 11, status: "completed" },
  { day: 12, status: "today" },
  // days 13-60 default to "upcoming" and are generated at render time.
];

// Recent proof-of-work activity, most recent first.
export const recentActivity = [
  {
    day: 11,
    title: "Responsive navbar with active-link state",
    submittedAt: "2026-08-07T23:42:00+05:30",
    githubUrl: "https://github.com/ananya-dev/abtalks-day11",
    linkedinUrl: "https://linkedin.com/posts/ananya-sharma-day11",
  },
  {
    day: 10,
    title: "Reusable button component with variants",
    submittedAt: "2026-08-06T22:58:00+05:30",
    githubUrl: "https://github.com/ananya-dev/abtalks-day10",
    linkedinUrl: "https://linkedin.com/posts/ananya-sharma-day10",
  },
  {
    day: 9,
    title: "Form validation with vanilla JS",
    submittedAt: "2026-08-05T23:10:00+05:30",
    githubUrl: "https://github.com/ananya-dev/abtalks-day9",
    linkedinUrl: "https://linkedin.com/posts/ananya-sharma-day9",
  },
];

// Challenge content for /day/12. Keyed by day number so the route can
// look up any day; only day 12 has full content for now.
export const challengeDays = {
  12: {
    day: 12,
    title: "Build a Filterable Project Card Grid",
    track: "Frontend Development",
    summary:
      "Build a grid of project cards that can be filtered by category using only client-side state.",
    requirements: [
      "Display at least 6 project cards in a responsive grid",
      "Each card shows a title, category tag, and short description",
      "Add filter buttons that show/hide cards by category",
      "No page reload on filter — handle it with state",
    ],
    hints: [
      "You don't need a library for this — array.filter() is enough",
      "Think about what happens when a filter has zero matching cards",
      "Reuse a Card component instead of duplicating markup",
    ],
    resources: [
      { label: "MDN: Array.prototype.filter()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" },
      { label: "React docs: Conditional rendering", url: "https://react.dev/learn/conditional-rendering" },
    ],
    estimatedTime: "60–90 minutes",
  },
};
