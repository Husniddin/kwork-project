const cashFlow = {
  series: [
    {
      data: [34, 35, 41, 64],
      color: "#3A9FF6",
      type: "column",
    },
    {
      data: [53, 52, 33, 52],
      color: "#02EFBA",
      type: "column",
    },
    {
      data: [53, 32, 33, 52],
      color: "#FFCA2D",
      type: "column",
    },
    {
      data: [33, 32, 53, 82],
      color: "#FF7A49",
      type: "column",
    },
    {
      data: [33, 32, 53, 82],
      color: "red",
      type: "column",
    },
  ],
  options: {
    chart: {
      height: 830,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
      },
    },
    dataLabels: {
      enabled: false,
      offsetX: 10,
    },
    stroke: {
      show: true,
      width: 1,
      colors: "transparent",
      offsetX: 100,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: ["09.29.2019", "09.29.2020", "09.29.2021", "09.29.2021"],
    },
  },
};
export default cashFlow;
/** 
 series: [
    {
      name: "Operating Cash Flow",
      type: "column",
      data: [-740, 426, 613, 415],
      color: "#3A9FF6",
    },
    {
      name: "Free Cash Flow",
      type: "column",
      data: [634, 740, 421, 240],
      color: "#02EFBA",
    },
    {
      name: "Financing Cash Flow",
      type: "column",
      data: [-232, -649, -410, -902],
      color: "#FFCA2D",
    },
    {
      name: "Investing Cash Flow",
      type: "column",
      data: [253, 549, 190, 112],
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
      width: [3, 5, 5, 5],
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "60%",
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
        width: 8,
        height: 18,
        radius: 5,
      },
      itemMargin: {
        horizontal: 12,
        vertical: 10,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
  },

**/
