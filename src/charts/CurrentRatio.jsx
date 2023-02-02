import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Line,
  ComposedChart,
} from "recharts";
import "../styles/chart-style/base-chart.css";
const CurrentRatio = (props) => {
  const data = [
    {
      name: "09.29.2019",
      "Current Assets": 220,
      "Current lliabilities": 280,
      "Current ratio": 100,
    },
    {
      name: "09.29.2020",
      "Current Assets": 260,
      "Current lliabilities": 200,
      "Current ratio": 60,
    },
    {
      name: "09.29.2021",
      "Current Assets": 130,
      "Current lliabilities": 260,
      "Current ratio": 200,
    },
    {
      name: "09.29.2021",
      "Current Assets": 230,
      "Current lliabilities": 90,
      "Current ratio": 50,
    },
  ];
  return (
    <div className="current-ratio__chart ">
      <ComposedChart
        width={props.width}
        height={props.height}
        data={data}
        margin={{
          top: 4,
          right: 0,
          left: -10,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 0"
          horizontal={true}
          vertical={false}
          color="#000"
        />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 10 }}
          orientation="bottom"
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          domain={[0, 300]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          tickCount={20}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0, 300]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          tickCount={20}
        />
        <Tooltip
          cursor={{ fill: `${props.hover ? props.hover : "#DCDBFC75"}` }}
          labelStyle={{ color: "#000", fontSize: "10px" }}
          itemStyle={{ color: "#000", fontSize: "10px" }}
          formatter={function (value, name) {
            return `${value}`;
          }}
        />
        <Legend verticalAlign="bottom" />
        <Bar
          yAxisId="left"
          dataKey="Current Assets"
          fill="#3A9FF6"
          radius={3.6}
          barSize={18}
        />
        <Bar
          yAxisId="right"
          dataKey="Current lliabilities"
          fill="#02EFBA"
          radius={3.6}
          barSize={18}
        />
        <Line
          yAxisId="right"
          type="linear"
          dataKey="Current ratio"
          stroke=" #FF7A49"
          strokeWidth={2}
          dot={false}
        />
      </ComposedChart>
      <span className="ratio_last_hover_effect"></span>
    </div>
  );
};

export default CurrentRatio;
