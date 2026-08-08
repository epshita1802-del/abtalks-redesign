import { student } from "../data/mockData.js";

// Placeholder — full dashboard (with A+B hierarchy) is built in Step 5.
// Exists now only to prove routing + mocked data are wired correctly.
export default function Dashboard() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-accent mb-2">/dashboard</p>
        <h1 className="font-display text-2xl font-semibold">
          Hi, {student.name.split(" ")[0]}
        </h1>
        <p className="text-ink-soft mt-1">Step 2 scaffold — built in Step 5</p>
      </div>
    </main>
  );
}
