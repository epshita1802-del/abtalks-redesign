import { useParams } from "react-router-dom";
import { challengeDays } from "../data/mockData.js";

// Placeholder — full submission flow is built in Step 6.
// Exists now only to prove dynamic routing (/day/:dayId) + mocked data work.
export default function ChallengeDay() {
  const { dayId } = useParams();
  const day = challengeDays[dayId];

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-accent mb-2">/day/{dayId}</p>
        <h1 className="font-display text-2xl font-semibold">
          {day ? day.title : "No content for this day yet"}
        </h1>
        <p className="text-ink-soft mt-1">Step 2 scaffold — built in Step 6</p>
      </div>
    </main>
  );
}
