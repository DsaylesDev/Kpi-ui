import { useMemo, useState } from "react";
import KpiCard from "../components/KpiCard";
import { KPI_DEFINITIONS, type KpiParams } from "../kpis/definitions";

function isoHoursAgo(hours: number) {
  return new Date(Date.now() - hours * 60 * 60 * 1000).toISOString();
}

export default function KpiExplorer() {
  const [siteId, setSiteId] = useState("PHL1");
  const [from, setFrom] = useState(isoHoursAgo(4));
  const [to, setTo] = useState(new Date().toISOString());

  const params: KpiParams = useMemo(() => ({ siteId, from, to }), [siteId, from, to]);

  return (
    <div>
      <h3 style={{ marginTop: 0 }}>KPI Explorer</h3>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "end" }}>
        <label style={{ display: "grid", gap: 6 }}>
          <span>Site</span>
          <input value={siteId} onChange={(e) => setSiteId(e.target.value)} />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>From (ISO)</span>
          <input value={from} onChange={(e) => setFrom(e.target.value)} style={{ width: 360 }} />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>To (ISO)</span>
          <input value={to} onChange={(e) => setTo(e.target.value)} style={{ width: 360 }} />
        </label>

        <button
          onClick={() => {
            setFrom(isoHoursAgo(4));
            setTo(new Date().toISOString());
          }}
        >
          Last 4 hours
        </button>
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {KPI_DEFINITIONS.map((def) => (
          <KpiCard key={def.id} def={def} params={params} />
        ))}
      </div>
    </div>
  );
}
