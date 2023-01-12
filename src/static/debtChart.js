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
      data: [2, 49, 10, 2],
      color: "#FF7A49",
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      colors: "transparent",
      width: [5, 5, 2.15],
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
        position: "topLeft",
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
        vertical: 10,
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

export default money;
