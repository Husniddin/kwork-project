const ChartWrapper = (props) => {
  return (
    <div className=" bg-white rounded-lg py-[30px] px-[25px] border w-max ">
      {props.children}
    </div>
  );
};

export default ChartWrapper;
