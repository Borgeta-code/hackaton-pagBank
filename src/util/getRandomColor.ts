export function getRandomColor() {
  const colors = [
    "#f87171", "#fca5a5", "#f9a8d4", "#f472b6", "#ec4899", "#e879f9",
    "#d946ef", "#c084fc", "#a855f7", "#8b5cf6", "#6366f1", "#60a5fa",
    "#38bdf8", "#22d3ee", "#34d399", "#4ade80", "#a3e635", "#facc15",
    "#fb923c", "#f97316", "#fbbf24", "#fde047", "#bef264", "#86efac",
    "#6ee7b7", "#5eead4", "#67e8f9", "#7dd3fc", "#93c5fd", "#a5b4fc",
    "#c4b5fd", "#e9d5ff", "#fbcfe8", "#fecdd3", "#fde68a", "#fef3c7",
    "#fef08a", "#d1fae5", "#bbf7d0", "#bbf7d0", "#a7f3d0", "#6b7280",
    "#f3f4f6", "#d1d5db", "#e5e7eb", "#e2e8f0", "#f1f5f9", "#fef9c3"
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
