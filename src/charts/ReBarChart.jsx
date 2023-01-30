import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import "../styles/chart-style/base-chart.css";
const BaseBarChart = (props) => {
  return (
    <div className="base__bar__chart ">
      <BarChart
        width={props.width}
        height={props.height}
        data={props.data}
        margin={{
          top: 5,
          right: 10,
          left: -15,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 0"
          horizontal={true}
          vertical={false}
          color="#000"
        />
        <XAxis dataKey="name" tick={{ fontSize: 10 }} tickLine={false} />
        <YAxis
          type="number"
          domain={[0, 300]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          tickCount={20}
        />
        <Tooltip
          cursor={{ fill: `${props.hover ? props.hover : "transparent"}` }}
          wrapperStyle={{ border: "none !important" }}
          labelStyle={{ color: "#000", fontSize: "10px" }}
          itemStyle={{ color: "#000", fontSize: "10px" }}
          formatter={function (value, name) {
            return `${value}`;
          }}
        />
        <Legend verticalAlign="bottom" />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Operating Cash Flow" fill="#3A9FF6" radius={2.6} />
        <Bar dataKey="Free Cash Flow" fill="#02EFBA" radius={2.6} />
        <Bar dataKey="Financing Cash Flow" fill="#FFCA2D" radius={2.6} />
        <Bar dataKey="Investing Cash Flow" fill="#FF7A49" radius={2.6} />
      </BarChart>
    </div>
  );
};

export default BaseBarChart;
