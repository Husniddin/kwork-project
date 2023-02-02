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
import "../styles/chart-style/debit-chart.css";
const DebtAssets = (props) => {
  return (
    <div className="debit__chart ">
      <ComposedChart
        width={props.width}
        height={props.height}
        data={props.data}
        margin={{
          top: 0,
          right: 0,
          left: -10,
          bottom: 5,
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
          orientation="bottom"
          tickLine={false}
          tick={{ fontSize: 10 }}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#8D9092"
          tick={{ fontSize: 10 }}
          tickLine={false}
          domain={[0, 300]}
          tickCount={20}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#8D9092"
          tick={{ fontSize: 10 }}
          tickLine={false}
          domain={[0, 300]}
          tickCount={20}
          axisLine={false}
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
          dataKey="Total Assets"
          fill="#3A9FF6"
          radius={3.6}
          barSize={18}
        />
        <Bar
          yAxisId="right"
          dataKey="Debt to Assets"
          fill="#02EFBA"
          radius={3.6}
          barSize={18}
        />
        <Line
          yAxisId="right"
          dataKey="Total Debt"
          stroke=" #FF7A49"
          strokeWidth={2}
          dot={false}
        />
      </ComposedChart>

      <span className="last_hover_effect"></span>
    </div>
  );
};

export default DebtAssets;
