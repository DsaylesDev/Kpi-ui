import type { KpiDefinition, KpiParams } from "../kpis/definitions";
import { useKpi } from "../kpis/useKpi";
import DonutChart from "./DonutChart";

export default function KpiCard({ def, params }: { def: KpiDefinition; params: KpiParams }) {
  const { url, state } = useKpi(def, params);

  return (
    <div
      style={{
        border: "1px solid #2a2a2a",
        borderRadius: 10,
        padding: 12,
        minWidth: 320,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <strong>{def.title}</strong>
        <a href={url} target="_blank" rel="noreferrer" style={{ fontSize: 12 }}>
          open
        </a>
      </div>

      <div style={{ marginTop: 10 }}>
        {state.status === "loading" && <div>Loading…</div>}
        {state.status === "error" && (
          <div style={{ color: "tomato" }}>Error: {state.error}</div>
        )}
        {state.status === "success" && def.kind === "donut" && (
          <DonutChart data={state.data} />
        )}
      </div>
    </div>
  );
}
