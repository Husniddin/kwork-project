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
      data: [0.1, 0.4, 0.9, 0.7],
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
      width: [5, 5, 2],
      colors: "transparent",
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "50%",
      },
    },
    xaxis: {
      categories: ["9.29.2019", "9.29.2020", "9.29.2021", "9.29.2021"],
      labels: {
        show: true,
        trim: false,
        style: {
          colors: ["#8D9092", "#8D9092", "#8D9092", "#8D9092", "#8D9092"],
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          lineHeight: "7.26px",
          cssClass: "apexcharts-xaxis-label",
        },
      },
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
            colors: "#8D9092",
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
        width: 8,
        height: 18,
        radius: 5,
      },
      itemMargin: {
        horizontal: 20,
        vertical: 8,
      },
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
  },
};

export default rotioData;
