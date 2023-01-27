import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import "../styles/chart-style/base-chart.css";
const RateIndustry = (props) => {
  const data = [
    {
      name: "09.29.2019",
      "Revenue growth": 590,
      "EPS growth": 700,
      "Industry (R)": 130,
      "Industry (E)": 600,
    },
    {
      name: "09.29.2020",
      "Revenue growth": 600,
      "EPS growth": 600,
      "Industry (R)": 403,
      "Industry (E)": 300,
    },
    {
      name: "09.29.2021",
      "Revenue growth": 370,
      "EPS growth": 750,
      "Industry (R)": 700,
      "Industry (E)": 600,
    },
    {
      name: "09.29.2021",
      "Revenue growth": 480,
      "EPS growth": 600,
      "Industry (R)": 500,
      "Industry (E)": 700,
    },
  ];
  return (
    <div className="industry__chart">
      <ComposedChart
        width={props.width}
        height={props.height}
        data={data}
        margin={{
          top: 0,
          right: 0,
          bottom: 20,
          left: -10,
        }}
      >
        <CartesianGrid stroke="#C9CBCD" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        <YAxis
          type="number"
          tick={{ fontSize: 10 }}
          domain={[0, 100]}
          tickCount={10}
          tickLine={false}
          axisLine={true}
        />
        <Legend />
        <Bar
          dataKey="Revenue growth"
          barSize={18}
          fill="#3A9FF6"
          radius={3.41}
        />
        <Bar dataKey="EPS growth" barSize={18} fill="#02EFBA" radius={3.41} />
        <Line
          dataKey="Industry (R)"
          dot={false}
          strokeWidth={2}
          stroke="#FF7A49"
        />
        <Line
          dataKey="Industry (E)"
          dot={false}
          strokeWidth={2}
          stroke="#FFCA2D"
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
    </div>
  );
};
export default RateIndustry;
