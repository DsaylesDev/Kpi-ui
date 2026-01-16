import { Link, Route, Routes } from "react-router-dom";
import KpiExplorer from "./pages/KpiExplorer";

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <header style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>KPI UI</h2>
        <nav style={{ display: "flex", gap: 10 }}>
          <Link to="/kpis">KPIs</Link>
        </nav>
      </header>

      <hr />

      <Routes>
        <Route path="/kpis" element={<KpiExplorer />} />
        <Route path="*" element={<KpiExplorer />} />
      </Routes>
    </div>
  );
}
