import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 80, color: "#006B3D" },
  { name: "B", value: 55, color: "#3CDA73" },
  { name: "C", value: 95, color: "#FFCA2D" },
  { name: "C", value: 35, color: "#FF7A49" },
  { name: "C", value: 45, color: "#FF2A3A" },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;
  console.log(total, "val");

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="start"
        style={{ position: "absolute", top: "0px", left: "0px" }}
        fill="#999"
      >
        {(total / 3).toFixed(1)}'$'
      </text>
    </g>,
    <path
      d={`M${xba},${yba}L${xbb},${ybb},L${xp},${yp},L${xba},${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

export default class Example extends PureComponent {
  render() {
    return (
      <div className="relative border border-red-500">
        <PieChart width={390} height={345}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
            radius={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, "#d0d000")}
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}
