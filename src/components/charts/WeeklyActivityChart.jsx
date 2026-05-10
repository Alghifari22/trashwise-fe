import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", waste: 12 },
  { day: "Tue", waste: 18 },
  { day: "Wed", waste: 10 },
  { day: "Thu", waste: 22 },
  { day: "Fri", waste: 15 },
  { day: "Sat", waste: 28 },
  { day: "Sun", waste: 20 },
];

function WeeklyActivityChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="waste"
            radius={[12, 12, 0, 0]}
            fill="#10b981"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyActivityChart;