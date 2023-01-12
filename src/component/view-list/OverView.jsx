//
const OverView = (props) => {
  return (
    <div className="flex items-center w-full border-b-[1px] border-b-[#E8EFFF] pb-[5px] justify-between mb-4 overwiew__wrapper">
      <p className="text-sm font-medium leading-[14px] text-darkBlue ">
        {props.text}
      </p>
      <span
        className="text-sm leading-[14px] text-black font-light block  text-left"
        style={{ width: `${props.context_width}` }}
      >
        {props.quantity}
      </span>
    </div>
  );
};
export default OverView;
