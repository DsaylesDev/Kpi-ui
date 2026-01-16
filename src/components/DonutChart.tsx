import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

type Props = {
  data: { label: string; value: number }[];
};

export default function DonutChart({ data }: Props) {
  return (
    <div style={{ width: "100%", height: 240 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            innerRadius="55%"
            outerRadius="80%"
            paddingAngle={2}
          >
            {data.map((_, idx) => (
              <Cell key={idx} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
