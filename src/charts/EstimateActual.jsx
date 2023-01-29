import "../styles/chart-style/base-chart.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Q1 Q21",
    Estimate: 200,
    Actual: 190,
  },
  {
    name: "Q2 Q21 ",
    Estimate: 140,
    Actual: 90,
  },
  {
    name: "Q3 Q21",
    Estimate: 300,
    Actual: 150,
  },
  {
    name: "Q4 Q21",
    Estimate: 290,
    Actual: 100,
  },
  {
    name: "Q1 Q22",
    Estimate: 130,
    Actual: 320,
  },
  {
    name: "Q2 Q22",
    Estimate: 140,
    Actual: 290,
  },
  {
    name: "Q3 Q22",
    Estimate: 280,
    Actual: 0,
  },
  {
    name: "Q4 Q22",
    Estimate: 200,
    Actual: 0,
  },
  {
    name: "Q1 Q23",
    Estimate: 180,
    Actual: 0,
  },
  {
    name: "Q2 Q23",
    Estimate: 350,
    Actual: 0,
  },
];

const EstimateActual = () => {
  return (
    <div className="estimate__chart">
      <BarChart
        width={390}
        height={338}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 0" vertical={false} />
        <XAxis dataKey="name" fontSize={10} />
        <YAxis
          fontSize={10}
          tickLine={false}
          tickCount={20}
          domain={[0, 400]}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          wrapperStyle={{ border: "none !important", borderRadius: "8px" }}
          labelStyle={{ color: "#000", fontSize: "10px" }}
          itemStyle={{ color: "#000", fontSize: "10px" }}
          formatter={function (value, name) {
            return `${value}`;
          }}
        />
        <Legend />
        <Bar dataKey="Estimate" fill="#3A9FF6" barSize={7} radius={2} />
        <Bar dataKey="Actual" fill="#02EFBA" barSize={7} radius={2} />
      </BarChart>
    </div>
  );
};

export default EstimateActual;
