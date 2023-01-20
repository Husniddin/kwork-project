import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/chart-style/mixen-chart.css";
const MixenChart = (props) => {
  const data = [
    {
      name: "09.29.2019",
      Revenue: 590,
      "Net income": 800,
      area: 10,
    },
    {
      name: "09.29.2020",
      Revenue: 868,
      "Net income": 967,
      area: 703,
    },
    {
      name: "09.29.2021",
      Revenue: 1397,
      "Net income": 1098,
      area: 700,
    },
    {
      name: "09.29.2021",
      Revenue: 1480,
      "Net income": 1200,
      area: 1000,
    },
  ];
  return (
    <div className="mixen__chart">
      <ResponsiveContainer width={props.width} height={props.height}>
        <ComposedChart
          width={props.width}
          height={props.height}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: -30,
          }}
        >
          <CartesianGrid stroke="#C9CBCD" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis
            type="number"
            tick={{ fontSize: 10 }}
            tickCount={6}
            tickLine={false}
            axisLine={true}
            padding={{ left: -40 }}
          />
          <Legend />
          <Bar dataKey="Revenue" barSize={18} fill="#3A9FF6" radius={3.41} />
          <Bar dataKey="Net income" barSize={18} fill="#02EFBA" radius={3.41} />
          <Area
            type="monotone"
            dataKey="area"
            fill="rgba(231, 231, 231, 0.4)"
            stroke="#FF7A49"
            strokeWidth={2}
            offset={0}
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
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
export default MixenChart;
