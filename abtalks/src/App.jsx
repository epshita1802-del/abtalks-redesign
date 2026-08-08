import { Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import ChallengeDay from "./routes/ChallengeDay.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/day/:dayId" element={<ChallengeDay />} />
    </Routes>
  );
}
