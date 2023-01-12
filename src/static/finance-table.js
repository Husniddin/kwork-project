import trend from "../assets/trend.svg";

const tableBody = {
  table_head: ["Name", "Ratio", "Industry", "5y trend", "Score"],
  table_body: [
    {
      name: "Current ratio",
      ratio: "1.61",
      industry: "2.42",
      trend: trend,
      score: "9",
    },
    {
      name: "Quick ratio",
      ratio: "1.15",
      industry: "2.13",
      trend: trend,
      score: "9",
    },
    {
      name: "Debt to Equity",
      ratio: "0.97",
      industry: "1.71",
      trend: trend,
      score: "7",
    },
    {
      name: "Debt to Assets",
      ratio: "0.23",
      industry: "0.54",
      trend: trend,
      score: "10",
    },
    {
      name: "Interest coverage",
      ratio: "59.99",
      industry: "43.44",
      trend: trend,
      score: "8",
    },
  ],
  table_footer: {
    allScore: "9.8",
    title: "Weighted average score",
  },
};

export default tableBody;
