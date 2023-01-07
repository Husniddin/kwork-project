const info = {
  options: {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "09.29.2019",
        "09.29.2020",
        "09.29.2021",
        "09.29.2021",
        "09.29.2022",
      ],
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
  series: [
    {
      name: "Gross margin",
      data: [210, 240, 245, 250, 149],
      color: "#3A9FF6",
    },
    {
      name: "Operating margin",
      data: [30, 50, 15, 60, 600],
      color: "#02EFBA",
    },
    {
      name: "Net margin",
      data: [300, 150, 390, 300, 191],
      color: "#FF7A49",
    },
  ],
  type: "line",
};
export default info;
