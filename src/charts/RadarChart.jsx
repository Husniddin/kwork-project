import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OctagonChart = () => {
  const data = [
    {
      name: "Financial strength",
      x: 10,
      y: 0,
      z: 0,
      m: 0,
      k: 0,
      n: 0,
      i: 0,
      l: 0,
    },
    { name: "Profitability", x: 9, y: 10, z: 0, m: 0, k: 0, n: 0, i: 0, l: 0 },
    { name: "Effectiveness", x: 0, y: 0, z: 10, m: 0, k: 0, n: 0, i: 0, l: 0 },
    { name: "Growth", x: 0, y: 0, z: 0, m: 0, k: 7, n: 0, i: 0, l: 0 },
    { name: "Forecast", x: 5, y: 0, z: 0, m: 0, k: 0, n: 0, i: 0, l: 0 },
    { name: "Valuation", x: 0, y: 7, z: 0, m: 0, k: 0, n: 0, i: 0, l: 0 },
    { name: "Dividend", x: 0, y: 0, z: 8, m: 0, k: 0, n: 0, i: 0, l: 0 },
    { name: "Economic moat", x: 0, y: 0, z: 0, m: 0, k: 6, n: 0, i: 0, l: 0 },
  ];

  return (
    <div className="octagon__view">
      <ResponsiveContainer width={380} height={380}>
        <RadarChart
          height={300}
          width={300}
          outerRadius="70%"
          margin={{ top: 15, right: 0, left: 0, bottom: 5 }}
          padding={{ left: 10 }}
          cx="50%"
          cy="50%"
          data={data}
        >
          <PolarGrid gridType="circle" color="red" />
          <PolarAngleAxis dataKey="name" fontSize={10} color="#000" />
          <PolarRadiusAxis angle={30} color="red" tickCount={10} />
          <Radar
            dataKey="x"
            stroke="#40906E"
            fill="#006B3D"
            fillOpacity={0.75}
            dot={true}
            legendType="square"
            startAngle={45}
          />
          <Radar
            dataKey="y"
            stroke="#40906E"
            fill="#006B3D"
            fillOpacity={0.75}
            dot={true}
          />
          <Radar
            dataKey="z"
            stroke="#40906E"
            fill="#006B3D"
            fillOpacity={0.75}
            dot={true}
          />
          <Radar
            dataKey="m"
            stroke="#FFD762"
            fill="#FFCA2D"
            fillOpacity={0.75}
            dot={true}
          />
          <Radar
            dataKey="k"
            stroke="#3CDA73"
            fill="#FFCA2D"
            fillOpacity={0.75}
            dot={true}
          />

          <Tooltip
            wrapperStyle={{ border: "none !important" }}
            labelStyle={{ color: "#000", fontSize: "10px" }}
            itemStyle={{ color: "#000", fontSize: "10px" }}
            formatter={function (value, name) {
              return `${value}`;
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default OctagonChart;
