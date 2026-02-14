# KPI Dashboard UI

A definition-driven KPI dashboard UI built with **React, TypeScript, Vite, and Recharts**, inspired by enterprise analytics tools (e.g. Power BI–style layouts).

This project is designed to consume **multiple backend services** through a common KPI contract, making it easy to visualize operational metrics such as event breakdowns, rates, time-based counts, and leaderboards.

---

## Features

- 📊 Definition-driven KPI registry (add KPIs without rewriting UI logic)
- 🧩 Supports multiple KPI types:
  - Donut charts
  - Bar / time-series charts
  - Numeric KPIs (rates, totals)
  - Leaderboards
- 🎛 Power BI–style dashboard layout (cards + grid + filters)
- 🔌 Backend-agnostic (works with multiple Spring Boot services)
- ⚡ Fast local dev with Vite
- 🧪 Easy to extend with mock data or new services

---

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Recharts**
- **Material UI (MUI)** for layout and theming
- **Fetch API** for backend integration

---

## Project Structure


---

## Supported Backend Endpoints

This UI currently supports the following KPI endpoints:

| Endpoint | Visualization |
|--------|---------------|
| `/kpis/event-type-breakdown` | Donut |
| `/kpis/events-per-hour` | Bar / Time Series |
| `/kpis/success-rate` | Numeric KPI |
| `/kpis/leaderboard/top-actors` | Leaderboard |

Each KPI is registered in `definitions.ts` and rendered dynamically.

---

## Local Development

### 1. Install dependencies
```bash
npm install
VITE_KPI_API_BASE_URL=http://localhost:8080
npm run dev
http://localhost:5173
