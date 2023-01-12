const estimedData = {
  series: [
    {
      name: "Strong sell",
      data: [400, 390, 290, 430],
      color: "#006B3D",
    },
    {
      name: "Sell",
      data: [440, 320, 250, 270],
      color: "#3CDA73",
    },
    {
      name: "Hold",
      data: [180, 220, 230, 330],
      color: "#FFCA2D",
    },
    {
      name: "Buy",
      data: [100, 150, 90, 120],
      color: "#FF7A49",
    },
    {
      name: "Strong buy",
      data: [100, 130, 200, 60],
      color: "#D3212C",
    },
  ],
  options: {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        // borderRadius: 10,
        columnWidth: 45,
        clipPath: "inset(0% 0% -2px 0% round 2px)",
      },
    },
    xaxis: {
      categories: ["Sep 22", "Oct 22", "Now 22", "Dec 22"],
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
        labels: {
          formatter: (val) => {
            return `${(val * 2) / 100}`;
          },
          style: {
            colors: "#8D9092",
          },
        },
      },
    ],
    legend: {
      show: true,
      showForZeroSeries: false,
      position: "bottom",
      horizontalAlign: "center",
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
        horizontal: 16,
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

export default estimedData;
