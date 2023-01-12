function BaseButton(props) {
  return (
    <button
      className="border border-lightBlue rounded-[18.5px] outline-none flex items-center justify-center py-[9px]"
      onClick={props.handlerClick}
      style={{ padding: `9px ${props.style}` }}
    >
      <span className="text-base font-medium text-lightBlue leading-[19px]">
        {props.context}
      </span>
    </button>
  );
}

export default BaseButton;
