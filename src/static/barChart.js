const info = {
  series: [
    {
      name: "Gross margin",
      data: [810, 940, 745, 950, 949],
      color: "#3A9FF6",
    },
    {
      name: "Operating margin",
      data: [510, 750, 615, 660, 600],
      color: "#02EFBA",
    },
    {
      name: "Net margin",
      data: [1300, 1250, 1090, 1000, 1201],
      color: "#FF7A49",
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
    },
    xaxis: {
      categories: [
        "9.29.2019",
        "9.29.2020",
        "9.29.2021",
        "9.29.2021",
        "9.29.2022",
      ],
      labels: {
        show: true,
        trim: false,
        style: {
          colors: ["#8D9092", "#8D9092", "#8D9092", "#8D9092", "#8D9092"],
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          lineHeight: "",
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
  type: "line",
};
export default info;
