const estimedData = {
  series: [
    {
      name: "Strong sell",
      data: [100, 90, 90, 30],
      color: "#006B3D",
    },
    {
      name: "Sell",
      data: [140, 120, 150, 70],
      color: "#3CDA73",
    },
    {
      name: "Hold",
      data: [80, 120, 130, 130],
      color: "#FFCA2D",
    },
    {
      name: "Buy",
      data: [0, 50, 30, 20],
      color: "#FF7A49",
    },
    {
      name: "Strong buy",
      data: [0, 30, 10, 0],
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
        borderRadius: 3,
        columnWidth: 50,
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
        horizontal: 18,
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

export default estimedData;
