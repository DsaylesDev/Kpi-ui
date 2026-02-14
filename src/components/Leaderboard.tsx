import type { LeaderboardEntryDatum } from "../kpis/definitions";

export default function Leaderboard({ data }: { data: LeaderboardEntryDatum[] }) {
  const safe = Array.isArray(data) ? data : [];

  if (safe.length === 0) {
    return <div style={{ height: 240, display: "grid", placeItems: "center" }}>No data</div>;
  }

  return (
    <div style={{ height: 240, overflow: "auto" }}>
      <ol style={{ margin: 0, paddingLeft: 18 }}>
        {safe.map((row, idx) => (
          <li key={`${row.name}-${idx}`} style={{ marginBottom: 6 }}>
            <strong>{row.name}</strong> <span style={{ opacity: 0.7 }}>— {row.value}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
