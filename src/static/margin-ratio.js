const marginRatio = {
  chart: {
    height: 500,
    width: "100%",
  },
  series: [
    {
      name: "Estimate",
      data: [150, 130, 110, 170, 152, 133, 130, 190],
      type: "bar",
      color: "#3A9FF6",
    },

    {
      name: "Actual",
      data: [180, 150, 138, 170, 145, 140, 0, 0],
      type: "bar",
      color: "#02EFBA",
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
      width: 8,
    },
    xaxis: {
      categories: [
        "Q1 Q21",
        "Q2 Q21",
        "Q3 Q21",
        "Q4 Q21",
        "Q1 Q22",
        "Q2 Q22",
        "Q3 Q22",
        "Q4 Q22",
      ],
      labels: {
        show: true,
        trim: false,
        style: {
          colors: [],
          fontSize: "8px",
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
            return `${val / 10}`;
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
      horizontalAlign: "center",
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
export default marginRatio;
