import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import "../styles/chart-style/base-chart.css";

const BaseLineChart = (props) => {
  return (
    <div className="base__line__chart  ">
      <LineChart
        width={props.width}
        height={props.height}
        data={props.data}
        margin={{ top: 0, right: 0, left: -10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 0" vertical={false} />
        <XAxis dataKey="name" tickLine={false} tick={{ fontSize: 10 }} />
        <YAxis
          type="number"
          domain={[0, 200]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          tickCount={23}
        />

        <Legend />
        <Line
          type="linear"
          dataKey="Gross margin"
          stroke="#3A9FF6"
          dot={false}
          strokeWidth={2}
        />
        <Line
          type="linear"
          dataKey="Operating margin"
          stroke="#02EFBA"
          dot={false}
          strokeWidth={2}
        />
        <Line
          type="linear"
          dataKey="Net margin"
          stroke="#FF7A49"
          dot={false}
          strokeWidth={2}
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
      </LineChart>
    </div>
  );
};

export default BaseLineChart;
