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
    <div className="debit__chart">
      <ComposedChart
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
        <XAxis dataKey="name" tick={{ fontSize: 10 }} orientation="bottom" />
        <YAxis
          type="number"
          domain={[0, 100]}
          tick={{ fontSize: 10 }}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: "green" }}
          wrapperStyle={{ border: "none !important" }}
          labelStyle={{ color: "#000", fontSize: "10px" }}
          itemStyle={{ color: "#000", fontSize: "10px" }}
          formatter={function (value, name) {
            return `${value}`;
          }}
        />
        <Legend verticalAlign="bottom" />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Total Assets" fill="#3A9FF6" radius={5} barSize={18} />
        <Bar dataKey="Debt to Assets" fill="#02EFBA" radius={5} barSize={18} />
        <Line
          type="natural"
          dataKey="Total Debt"
          stroke=" #FF7A49"
          strokeWidth={2}
          dot={false}
        />
      </ComposedChart>
    </div>
  );
};

export default DebtAssets;
