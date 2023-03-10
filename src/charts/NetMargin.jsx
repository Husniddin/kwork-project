import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ComposedChart,
  Line,
} from "recharts";
import "../styles/chart-style/base-chart.css";
const NetMargin = (props) => {
  return (
    <div className="net__bar__chart ">
      <ComposedChart
        width={props.width}
        height={props.height}
        data={props.data}
        margin={{
          top: 4,
          right: 0,
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
          yAxisId="left"
          orientation="left"
          domain={[0, 500]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          tickCount={20}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0, 500]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          tickCount={20}
          axisLine={false}
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
        <Bar
          yAxisId="left"
          dataKey="Revenue"
          fill="#3A9FF6"
          radius={3.6}
          barSize={19}
        />
        <Bar
          yAxisId="right"
          dataKey="Net income"
          fill="#02EFBA"
          radius={3.6}
          barSize={19}
        />
        <Line
          yAxisId="right"
          dataKey="Net margin"
          stroke="#FF7A49"
          dot={false}
          strokeWidth={2}
        />
      </ComposedChart>

      {/* <ComposedChart
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
          domain={[0, 500]}
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
        <Bar dataKey="Revenue" fill="#3A9FF6" radius={3.6} barSize={19} />
        <Bar dataKey="Net income" fill="#02EFBA" radius={3.6} barSize={19} />
        <Line
          dataKey="Net margin"
          stroke="#FF7A49"
          dot={false}
          strokeWidth={2}
        />
      </ComposedChart> */}
      <span className="net_bar_chart_last_hover"></span>
    </div>
  );
};

export default NetMargin;
