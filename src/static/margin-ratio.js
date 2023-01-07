const marginRatio = {
  chart: {
    height: 500,
    width: "100%",
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 415, 222, 33],
      type: "line",
    },
    {
      name: "Series 1",
      data: [45, 2, 38, 45, 19, 33],
      type: "line",
    },
    {
      name: "Series 1",
      data: [45, 552, 38, 45, 19, 33],
      type: "line",
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
            return `${val / 1}`;
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
export default marginRatio;
