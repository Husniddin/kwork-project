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
          type="number"
          domain={[0, 300]}
          tick={{ fontSize: 10 }}
          tickLine={false}
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
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Total Assets" fill="#3A9FF6" radius={3.6} barSize={18} />
        <Bar
          dataKey="Debt to Assets"
          fill="#02EFBA"
          radius={3.6}
          barSize={18}
        />
        <Line
          type="linear"
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
