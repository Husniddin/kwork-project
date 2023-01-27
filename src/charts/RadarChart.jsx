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
    { name: "Financial strength", x: 34, y: 0, z: 0, m: 0, k: 0 },
    { name: "Profitability", x: 45, y: 45, z: 0, m: 0, k: 0 },
    { name: "Effectiveness", x: 0, y: 80, z: 0, m: 0, k: 0 },
    { name: "Growth", x: 0, y: 80, z: 0, m: 0, k: 0 },
    { name: "Forecast", x: 0, y: 50, z: 0, m: 0, k: 50 },
    { name: "Valuation", x: 0, y: 0, z: 0, m: 45, k: 45 },
    { name: "Dividend", x: 0, y: 0, z: 0, m: 30, k: 0 },
    { name: "Economic moat", x: 0, y: 0, z: 45, m: 45, k: 0 },
  ];

  return (
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
        <PolarRadiusAxis angle={30} tickCount={9} />
        <Radar
          dataKey="x"
          stroke="#F9D461"
          fill="#FFCA2D"
          fillOpacity={0.75}
          dot={true}
          legendType="square"
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
          stroke="#67E096"
          fill="#3CDA73"
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
          stroke="#6DE396"
          fill="#3CDA73"
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
  );
};
export default OctagonChart;
