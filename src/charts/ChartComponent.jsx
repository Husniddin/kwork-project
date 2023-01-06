import ReactApexChart from "react-apexcharts";
const ChartComponent = (props) => {
  console.log(props);
  return (
    <div>
      <ReactApexChart
        options={props?.options}
        series={props?.series}
        type={props.type}
        width={props.width}
        fill={props.fill}
      />
    </div>
  );
};
export default ChartComponent;
