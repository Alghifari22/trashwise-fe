import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Organik",
    value: 35,
  },
  {
    name: "Plastik",
    value: 40,
  },
  {
    name: "Elektronik",
    value: 15,
  },
  {
    name: "B3",
    value: 10,
  },
];

const COLORS = [
  "#10b981",
  "#06b6d4",
  "#f59e0b",
  "#ef4444",
];

function WasteCategoryChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={4}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WasteCategoryChart;