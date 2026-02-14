import { useMemo, useState, useEffect } from "react";
import KpiCard from "../components/KpiCard";
import { KPI_DEFINITIONS, type KpiParams } from "../kpis/definitions";

function isoHoursAgo(hours: number) {
  return new Date(Date.now() - hours * 60 * 60 * 1000).toISOString();
}

export default function KpiExplorer() {
  const [siteId, setSiteId] = useState("PHL1");
  const [from, setFrom] = useState(isoHoursAgo(4));
  const [to, setTo] = useState(new Date().toISOString());

  // 🔥 NEW: auto refresh state
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [intervalMs, setIntervalMs] = useState(30000);
  const [refreshKey, setRefreshKey] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const params: KpiParams = useMemo(
    () => ({ siteId, from, to }),
    [siteId, from, to]
  );

  // 🔥 NEW: interval effect
  useEffect(() => {
    if (!autoRefresh) return;

    const id = setInterval(() => {
      setRefreshKey((k) => k + 1);
      setLastUpdated(new Date());
    }, intervalMs);

    return () => clearInterval(id);
  }, [autoRefresh, intervalMs]);

  return (
    <div>
      <h3 style={{ marginTop: 0 }}>KPI Explorer</h3>

      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "end",
        }}
      >
        <label style={{ display: "grid", gap: 6 }}>
          <span>Site</span>
          <input
            value={siteId}
            onChange={(e) => setSiteId(e.target.value)}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>From (ISO)</span>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            style={{ width: 360 }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>To (ISO)</span>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={{ width: 360 }}
          />
        </label>

        <button
          onClick={() => {
            setFrom(isoHoursAgo(4));
            setTo(new Date().toISOString());
            setRefreshKey((k) => k + 1);
            setLastUpdated(new Date());
          }}
        >
          Last 4 hours
        </button>

        {/* 🔥 NEW: Auto Refresh Controls */}
        <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={(e) => setAutoRefresh(e.target.checked)}
          />
          Auto Refresh
        </label>

        <select
          value={intervalMs}
          onChange={(e) => setIntervalMs(Number(e.target.value))}
        >
          <option value={15000}>15s</option>
          <option value={30000}>30s</option>
          <option value={60000}>60s</option>
        </select>

        {lastUpdated && (
          <span style={{ fontSize: 12, opacity: 0.7 }}>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        )}
      </div>

      <div
        style={{
          marginTop: 16,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {KPI_DEFINITIONS.map((def) => (
          <KpiCard key={def.id} def={def} params={params} refreshKey={refreshKey} />
        ))}
      </div>
    </div>
  );
}
