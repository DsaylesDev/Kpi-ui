// /kpis/event-type-breakdown  -> List<DonutSliceDTO>
export type DonutDatum = { label: string; value: number };

// /kpis/events-per-hour -> List<HourlyCountDTO>
export type HourlyCountDatum = { hour: string; count: number };

// /kpis/success-rate -> SuccessRateDTO
export type SuccessRateDatum = { successRate: number };

// /kpis/leaderboard/top-actors -> List<LeaderboardEntryDTO>
export type LeaderboardEntryDatum = { name: string; value: number };

// ----- KPI registry types -----

export type KpiKind = "donut" | "bar" | "number" | "leaderboard";

export type KpiDefinition = {
  id: string;
  title: string;
  kind: KpiKind;
  // build the full URL using baseUrl + query params
  buildUrl: (baseUrl: string, params: KpiParams) => string;
};

export type KpiParams = {
  siteId?: string; // make optional since your backend allows it
  from: string; // ISO string
  to: string; // ISO string
  limit?: number; // for leaderboard
};

const qp = (v: unknown) => encodeURIComponent(String(v ?? ""));

// ----- KPI definitions -----

export const KPI_DEFINITIONS: KpiDefinition[] = [
  {
    id: "event_type_breakdown",
    title: "Event Type Breakdown",
    kind: "donut",
    buildUrl: (baseUrl, p) =>
      `${baseUrl}/kpis/event-type-breakdown?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
  },
  {
    id: "events_per_hour",
    title: "Events Per Hour",
    kind: "bar",
    buildUrl: (baseUrl, p) =>
      `${baseUrl}/kpis/events-per-hour?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
  },
  {
    id: "success_rate",
    title: "Success Rate",
    kind: "number",
    buildUrl: (baseUrl, p) =>
      `${baseUrl}/kpis/success-rate?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
  },
  {
    id: "top_actors",
    title: "Top Actors",
    kind: "leaderboard",
    buildUrl: (baseUrl, p) =>
      `${baseUrl}/kpis/leaderboard/top-actors?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}&limit=${qp(p.limit ?? 10)}`,
  },
];
