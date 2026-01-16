import { useEffect, useMemo, useState } from "react";
import type { DonutDatum, KpiDefinition, KpiParams } from "./definitions";

type KpiState =
  | { status: "idle" | "loading"; data?: undefined; error?: undefined }
  | { status: "success"; data: DonutDatum[]; error?: undefined }
  | { status: "error"; data?: undefined; error: string };

export function useKpi(def: KpiDefinition, params: KpiParams) {
  const baseUrl = import.meta.env.VITE_KPI_API_BASE_URL as string;

  const url = useMemo(() => def.buildUrl(baseUrl, params), [baseUrl, def, params]);

  const [state, setState] = useState<KpiState>({ status: "idle" });

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setState({ status: "loading" });
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as DonutDatum[];

        if (!cancelled) setState({ status: "success", data: json });
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Unknown error";
        if (!cancelled) setState({ status: "error", error: msg });
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return { url, state };
}
