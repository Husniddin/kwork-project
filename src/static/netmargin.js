const marginData = {
  series: [
    {
      name: "Revenue",
      data: [520, 750, 670, 770],
      type: "bar",
      color: "#3A9FF6",
    },

    {
      name: "Net income",
      data: [900, 600, 800, 520],
      type: "bar",
      color: "#02EFBA",
    },
    {
      name: "Net margin",
      data: [160, 140, 198, 170],
      type: "line",
      color: "#FF7A49",
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
      categories: ["9.29.2019", "9.29.2020", "9.29.2021", "9.29.2021"],
      labels: {
        show: true,
        trim: true,
        style: {
          colors: ["#8D9092", "#8D9092", "#8D9092", "#8D9092"],
          fontSize: "10px",
          horizontalAlign: "center",
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
        width: 8,
        height: 18,
        radius: 5,
      },
      itemMargin: {
        horizontal: 20,
        vertical: 8,
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
export default marginData;
