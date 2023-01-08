const industryData = {
  series: [
    {
      name: "Revenue growth",
      data: [320, 250, 160, 270],
      type: "bar",
      color: "#3A9FF6",
    },

    {
      name: "EPS growth",
      data: [300, 150, 290, 170],
      type: "bar",
      color: "#02EFBA",
    },
    {
      name: "Industry (R)",
      data: [60, 100, 198, 170],
      type: "line",
      color: "#FF7A49",
    },
    {
      name: "Industry (E)",
      data: [100, 220, 158, 130],
      type: "line",
      color: "#FFCA2D",
    },
  ],
  options: {
    dataLabels: {
      enabled: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },

    stroke: {
      colors: ["transparent"],
      width: [5, 5, 3, 3],
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "40%",
      },
    },
    xaxis: {
      categories: ["09.29.2019", "09.29.2020", "09.29.2021", "09.29.2021"],
      labels: {
        show: true,
        trim: true,
        style: {
          colors: [],
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
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
            return `${val / 70}`;
          },
          style: {
            colors: "#8D9092",
          },
        },

        tooltip: {
          enabled: false,
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
export default industryData;
