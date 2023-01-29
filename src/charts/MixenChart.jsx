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
      Revenue: 240,
      "Net income": 300,
      area: 10,
    },
    {
      name: "09.29.2020",
      Revenue: 268,
      "Net income": 367,
      area: 203,
    },
    {
      name: "09.29.2021",
      Revenue: 347,
      "Net income": 398,
      area: 200,
    },
    {
      name: "09.29.2021",
      Revenue: 400,
      "Net income": 430,
      area: 380,
    },
  ];
  return (
    <div className="mixen__chart ">
      <ResponsiveContainer width={props.width} height={props.height}>
        <ComposedChart
          width={props.width}
          height={props.height}
          data={data}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: -20,
          }}
        >
          <CartesianGrid stroke="#C9CBCD" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis
            type="number"
            tick={{ fontSize: 10 }}
            tickCount={10}
            tickLine={false}
            axisLine={true}
            domain={[0, 500]}
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
