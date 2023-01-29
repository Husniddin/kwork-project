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
      "Revenue growth": 220,
      "EPS growth": 320,
      "Industry (R)": 100,
      "Industry (E)": 280,
    },
    {
      name: "09.29.2020",
      "Revenue growth": 280,
      "EPS growth": 170,
      "Industry (R)": 200,
      "Industry (E)": 60,
    },
    {
      name: "09.29.2021",
      "Revenue growth": 270,
      "EPS growth": 300,
      "Industry (R)": 200,
      "Industry (E)": 300,
    },
    {
      name: "09.29.2021",
      "Revenue growth": 400,
      "EPS growth": 380,
      "Industry (R)": 230,
      "Industry (E)": 290,
    },
  ];
  return (
    <div className="industry__chart ">
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
          domain={[0, 500]}
          tickCount={20}
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
