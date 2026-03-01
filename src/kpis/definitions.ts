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
  topN?: number; // for "events per hour by type"
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
  {
  id: "events_per_hour_by_type",
  title: "Events Per Hour by Type",
  kind: "bar",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/events-per-hour-by-type?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}&topN=${qp(p.topN ?? 5)}`,
},
{
  id: "error_rate_per_hour",
  title: "Error Rate Per Hour",
  kind: "bar",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/error-rate-per-hour?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "duration_stats_per_hour",
  title: "Duration Stats Per Hour",
  kind: "bar",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/duration-stats-per-hour?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "site_volume_and_success",
  title: "Site Volume & Success",
  kind: "number",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/site-volume-and-success?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "unique_actors_per_hour",
  title: "Unique Actors Per Hour",
  kind: "bar",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/unique-actors-per-hour?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "unique_sessions_per_hour",
  title: "Unique Sessions Per Hour",
  kind: "bar",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/unique-sessions-per-hour?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "success_rate_by_event_type",
  title: "Success Rate by Event Type",
  kind: "leaderboard",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/success-rate-by-event-type?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "duration_stats_by_event_type",
  title: "Duration Stats by Event Type",
  kind: "leaderboard",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/duration-stats-by-event-type?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "top_sessions_by_event_count",
  title: "Top Sessions by Event Count",
  kind: "leaderboard",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/leaderboard/top-sessions-by-event-count?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}&limit=${qp(p.limit ?? 10)}`,
},
{
  id: "top_event_types",
  title: "Top Event Types",
  kind: "leaderboard",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/leaderboard/top-event-types?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}&limit=${qp(p.limit ?? 10)}`,
},
{
  id: "throughput_per_minute",
  title: "Throughput Per Minute",
  kind: "bar",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/throughput-per-minute?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "error_types_breakdown",
  title: "Error Types Breakdown",
  kind: "donut",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/error-types-breakdown?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "actor_activity_summary",
  title: "Actor Activity Summary",
  kind: "leaderboard",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/actor-activity-summary?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}`,
},
{
  id: "top_longest_events",
  title: "Top Longest Events",
  kind: "leaderboard",
  buildUrl: (baseUrl, p) =>
    `${baseUrl}/kpis/leaderboard/top-longest-events?from=${qp(p.from)}&to=${qp(p.to)}&siteId=${qp(p.siteId)}&limit=${qp(p.limit ?? 10)}`,
},
];
