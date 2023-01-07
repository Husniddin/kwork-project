const rotioData = {
  series: [
    {
      name: "Current assets",
      type: "column",
      data: [740, 426, 613, 415],
      color: "#3A9FF6",
    },
    {
      name: "Current lliabilities",
      type: "column",
      data: [934, 740, 421, 240],
      color: "#02EFBA",
    },
    {
      name: "Current ratio",
      type: "line",
      data: [0.1, 0.4, 0.9, 0.98],
      color: "#FF7A49",
    },
  ],
  options: {
    chart: {
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0.02, 0.03, 2],
    },

    xaxis: {
      categories: ["09.29.2019", "09.29.2020", "09.29.2021", "09.29.2021"],
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },

        labels: {
          formatter: (val) => {
            return `${val / 100}`;
          },
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
          enabled: false,
        },
      },
      {
        seriesName: "Total Assets",
        opposite: true,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          formatter: (val) => {
            return `${""}`;
          },
        },
      },
      {
        seriesName: "Total Debt",
        opposite: true,
        axisTicks: {
          show: false,
        },

        labels: {
          formatter: (val) => {
            return `${""}`;
          },
          style: {
            colors: "#fff",
          },
        },
      },
    ],
    tooltip: {
      x: { show: false },
      fixed: {
        enabled: false,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },

    legend: {
      show: true,
      showForZeroSeries: false,
      position: "bottom",
      horizontalAlign: "",
      floating: false,
      fontSize: "10px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      labels: {
        colors: "#000",
      },
      markers: {
        width: 9,
        height: 20,
        radius: 5,
      },
      itemMargin: {
        horizontal: 20,
        vertical: 10,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },
  },
};

export default rotioData;
