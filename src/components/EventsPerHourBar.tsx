import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { HourlyCountDatum } from "../kpis/definitions";

export default function EventsPerHourBar({ data }: { data: HourlyCountDatum[] }) {
  const safe = Array.isArray(data) ? data : [];

  if (safe.length === 0) {
    return <div style={{ height: 240, display: "grid", placeItems: "center" }}>No data</div>;
  }

  return (
    <div style={{ width: "100%", height: 240 }}>
      <ResponsiveContainer>
        <BarChart data={safe}>
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
