export type DonutDatum = { label: string; value: number };

export type KpiKind = "donut";

export type KpiDefinition = {
  id: string;
  title: string;
  kind: KpiKind;
  // build the full URL using baseUrl + query params
  buildUrl: (baseUrl: string, params: KpiParams) => string;
};

export type KpiParams = {
  siteId: string;
  from: string; // ISO string
  to: string;   // ISO string
};

export const KPI_DEFINITIONS: KpiDefinition[] = [
  {
    id: "event_type_counts",
    title: "Event Type Breakdown",
    kind: "donut",
    buildUrl: (baseUrl, p) =>
      `${baseUrl}/kpis/event-type-breakdown?from=${encodeURIComponent(p.from)}&to=${encodeURIComponent(p.to)}&siteId=${encodeURIComponent(p.siteId)}`,
  },
];
