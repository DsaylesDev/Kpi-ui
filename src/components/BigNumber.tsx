import type { SuccessRateDatum } from "../kpis/definitions";

export default function BigNumber({ data }: { data: SuccessRateDatum }) {
  const pct = data?.successRate ?? 0;

  return (
    <div style={{ height: 240, display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 52, fontWeight: 700 }}>{pct.toFixed(1)}%</div>
        <div style={{ opacity: 0.7, marginTop: 6, fontSize: 12 }}>Success Rate</div>
      </div>
    </div>
  );
}
