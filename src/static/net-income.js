const data = {
  datasets: [
    {
      label: "React",
      data: [23, 45, 67, 65, 90],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "Js",
      data: [323, 345, 267, 365, 190],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "TypeScript",
      data: [63, 75, 167, 265, 90],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
  ],
};

const netIcom = {
  labels: [
    "01/01/2003",
    "02/01/2003",
    "03/01/2003",
    "04/01/2003",
    "04/01/2003",
    "04/01/2003",
  ],
  data,
  options: {},
};
export default netIcom;
/*
 series: [
    {
      name: "TEAM C",
      type: "area",
      data: [30, 25, 36, 30, 45, 35],
    },
    {
      name: "TEAM A",
      type: "column",
      data: [0, 11, 22, 27, 13, 22],
    },
    {
      name: "TEAM B",
      type: "column",
      data: [0, 55, 41, 67, 22, 43],
    },
  ],
  options: {
    // chart: {
    //   height: 350,
    //   type: "line",
    //   stacked: false,
    // },
    stroke: {
      width: [3, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    fill: {
      opacity: [0.25, 1, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.25,
        opacityTo: 0.55,
        stops: [0, 10, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "04/01/2003",
      "04/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  },

*/
