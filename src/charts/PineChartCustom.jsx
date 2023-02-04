import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import "../styles/chart-style/base-chart.css";

const data = [
  { name: "Equipment and services ", value: 500 },
  { name: "Licensing", value: 200 },
  { name: "Interest income", value: 50 },
];
let sum = 0;
data.forEach((item) => {
  sum += item.value;
});
const PineChartCustom = () => {
  const COLORS = ["#3A9FF6", "#00FBC3", "#FF7A49"];
  return (
    <div className="donought_chart">
      <ResponsiveContainer width={380} height={340}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            fill="#8884d8"
            dataKey="value"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
            }) => {
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  fill="#8884d8"
                  fontSize={12}
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {((value * 100) / sum).toFixed(1)}%
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip
            wrapperStyle={{ border: "none !important" }}
            labelStyle={{ color: "#000", fontSize: "10px" }}
            itemStyle={{ color: "#000", fontSize: "10px" }}
            formatter={function (value, name) {
              return `${value}`;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PineChartCustom;
