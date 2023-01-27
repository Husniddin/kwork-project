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
import "../styles/chart-style/base-chart.css";

const data = [
  {
    name: "Sep 22",
    "Strong buy": 300,
    Buy: 200,
    Hold: 200,
    Sell: 0,
    "Strong sell": 0,
  },
  {
    name: "Oct 22",
    "Strong buy": 250,
    Buy: 138,
    Hold: 221,
    Sell: 70,
    "Strong sell": 50,
  },
  {
    name: "Now 22",
    "Strong buy": 200,
    Buy: 250,
    Hold: 229,
    Sell: 60,
    "Strong sell": 50,
  },
  {
    name: "Dec 22",
    "Strong buy": 278,
    Buy: 250,
    Hold: 150,
    Sell: 70,
    "Strong sell": 0,
  },
];

const StackedChart = () => {
  return (
    <div className="stacked__chart">
      <BarChart
        width={390}
        height={390}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: -10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 0" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tick={{ fontSize: 10, color: "#8D9092" }}
        />
        <YAxis
          tickCount={11}
          tickLine={false}
          axisLine={true}
          tick={{ fontSize: 10 }}
          domain={[0, 10]}
        />

        <Tooltip
          cursor={{ fill: "transparent" }}
          wrapperStyle={{ border: "none !important" }}
          labelStyle={{ color: "#000", fontSize: "10px" }}
          itemStyle={{ color: "#000", fontSize: "10px" }}
          formatter={function (value, name) {
            return `${value}`;
          }}
        />
        <Legend />
        <Bar
          dataKey="Strong buy"
          stackId="a"
          fill="#006B3D"
          radius={[3, 3, 0, 0]}
          label={{ position: "insideTop", fill: "#fff", fontSize: "10px" }}
          barSize={49}
        />
        <Bar
          dataKey="Buy"
          stackId="a"
          fill="#3CDA73"
          radius={[3, 3, 0, 0]}
          label={{ position: "insideTop", fill: "#fff", fontSize: "10px" }}
          barSize={49}
        />
        <Bar
          dataKey="Hold"
          stackId="a"
          fill="#FFCA2D"
          radius={[3, 3, 0, 0]}
          label={{ position: "insideTop", fill: "#fff", fontSize: "10px" }}
          barSize={49}
        />
        <Bar
          dataKey="Sell"
          stackId="a"
          fill="#FF7A49"
          radius={[3, 3, 0, 0]}
          label={{ position: "insideTop", fill: "#fff", fontSize: "10px" }}
          barSize={49}
        />
        <Bar
          dataKey="Strong sell"
          stackId="a"
          fill="#D3212C"
          radius={[3, 3, 0, 0]}
          label={{ position: "insideTop", fill: "#fff", fontSize: "10px" }}
          barSize={49}
        />
      </BarChart>
    </div>
  );
};
export default StackedChart;
