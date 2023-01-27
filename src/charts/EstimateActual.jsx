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

const data = [
  {
    name: "Q1 Q21",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Q2 Q21 ",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Q3 Q21",
    uv: 2000,
    pv: 6000,
  },
  {
    name: "Q4 Q21",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Q1 Q22",
    uv: 1890,
    pv: 2800,
  },
  {
    name: "Q2 Q22",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Q3 Q22",
    uv: 3490,
    pv: 0,
  },
  {
    name: "Q4 Q22",
    uv: 3490,
    pv: 0,
  },
  {
    name: "Q1 Q23",
    uv: 4490,
    pv: 10,
  },
  {
    name: "Q2 Q23",
    uv: 3490,
    pv: 0,
  },
];

const EstimateActual = () => {
  return (
    <div className="estimate__chart">
      <BarChart
        width={390}
        height={390}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 0" vertical={false} />
        <XAxis dataKey="name" fontSize={10} />
        <YAxis fontSize={10} tickLine={false} tickCount={15} />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Legend />
        <Bar dataKey="uv" fill="#3A9FF6" barSize={6} />
        <Bar dataKey="pv" fill="#02EFBA" barSize={6} />
      </BarChart>
    </div>
  );
};

export default EstimateActual;
