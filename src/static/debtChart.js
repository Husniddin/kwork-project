const money = {
  series: [
    {
      name: "Total Assets",
      type: "column",
      data: [740, 426, 613, 415],
      color: "#3A9FF6",
      marginLeft: "10px",
    },
    {
      name: "Debt to Assets",
      type: "column",
      data: [934, 740, 421, 240],
      color: "#02EFBA",
    },
    {
      name: "Total Debt",
      type: "line",
      data: [0.5, 1, 1.5, 2],
      color: "#FF7A49",
    },
  ],
  options: {
    chart: {
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0.02, 0.03, 2],
    },
    title: {
      text: "",
      align: "left",
      offsetX: 0,
    },
    xaxis: {
      categories: ["09.29.2019", "09.29.2020", "09.29.2021", "09.29.2021"],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#3A9FF6",
        },
        labels: {
          style: {
            colors: "#02EFBA",
          },
        },
        title: {
          text: "",
          style: {
            color: "#008FFB",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: "Total Assets",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#00E396",
        },
        labels: {
          style: {
            colors: "#00E396",
          },
        },
        title: {
          text: "",
          style: {
            color: "#00E396",
          },
        },
      },
      {
        seriesName: "Total Debt",
        opposite: true,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
          color: "#FF7A49",
        },
        labels: {
          style: {
            colors: "#fff",
          },
        },
        title: {
          text: "",
          style: {
            color: "#FF7A49",
          },
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  },
};

export default money;
