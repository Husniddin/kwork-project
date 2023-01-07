function BaseButton(props) {
  return (
    <button className="border border-lightBlue rounded-[18.5px] outline-none flex items-center justify-center py-[9px] px-[26px]">
      <span className="text-base font-medium text-lightBlue leading-[19px]">
        {props.context}
      </span>
    </button>
  );
}

export default BaseButton;
