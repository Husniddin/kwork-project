import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, Legend, Tooltip } from "recharts";
import "../styles/chart-style/base-chart.css";
const data = [
  { name: "Equipment and services ", value: 500 },
  { name: "Licensing", value: 200 },
  { name: "Interest income", value: 50 },
];
const COLORS = ["#3A9FF6", "#00FBC3", "#FF7A49"];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 23) * cos;
  const my = cy + (outerRadius + 23) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 20;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={0}
        outerRadius={0}
        fill="transparent"
        display="none"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={0}
        textAnchor={textAnchor}
        fill={fill}
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div className="donought_chart">
        <PieChart width={380} height={340}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip
            wrapperStyle={{ border: "none !important" }}
            labelStyle={{ color: "#000", fontSize: "10px" }}
            itemStyle={{ color: "#000", fontSize: "10px" }}
            formatter={function (value, name) {
              return `${value}`;
            }}
          />
        </PieChart>
      </div>
    );
  }
}
