import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const DividentPayment = () => {
  const data = [
    {
      name: "Q1",
      Estimate: 200,
    },
    {
      name: "Q2 ",
      Estimate: 140,
    },
    {
      name: "Q3",
      Estimate: 300,
    },
    {
      name: "Q4",
      Estimate: 290,
    },
    {
      name: "Q1",
      Estimate: 130,
    },
    {
      name: "Q2",
      Estimate: 140,
    },
    {
      name: "Q3",
      Estimate: 280,
    },
    {
      name: "Q4",
      Estimate: 200,
    },
    {
      name: "Q1",
      Estimate: 180,
    },
    {
      name: "Q2",
      Estimate: 350,
    },
    {
      name: "Q3",
      Estimate: 150,
    },
    {
      name: "Q4",
      Estimate: 300,
    },
  ];
  return (
    <div>
      <BarChart
        width={390}
        height={338}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: -10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 0" vertical={false} />
        <XAxis dataKey="name" fontSize={8} tickLine={false} />
        <YAxis
          fontSize={10}
          tickLine={false}
          axisLine={false}
          tickCount={20}
          domain={[0, 400]}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          wrapperStyle={{ border: "none !important", borderRadius: "8px" }}
          labelStyle={{ color: "#000", fontSize: "10px" }}
          itemStyle={{ color: "#000", fontSize: "10px" }}
          formatter={function (value, name) {
            return `${value}`;
          }}
        />
        {/* <Legend /> */}
        <Bar dataKey="Estimate" fill="#3A9FF6" barSize={17} radius={2} />
      </BarChart>
    </div>
  );
};
export default DividentPayment;
