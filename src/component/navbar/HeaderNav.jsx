import { useState } from "react";
import "../../styles/stock-nav.css";
const HeaderNav = () => {
  const [number, setNumber] = useState(1);
  const handleClick = (e) => {
    let id = e.target.dataset.num;
    setNumber(id);
  };
  return (
    <ul className="flex items-center gap-[30px] ">
      <li>
        <a
          href="#"
          className={number == 1 ? "stock__nav active__nav" : "stock__nav"}
          data-num="1"
          onClick={(e) => handleClick(e)}
        >
          News
        </a>
      </li>
      <li>
        <a
          href="#"
          className={number == 2 ? "stock__nav active__nav" : "stock__nav"}
          data-num="2"
          onClick={(e) => handleClick(e)}
        >
          Chart
        </a>
      </li>
      <li>
        <a
          href="#"
          className={number == 3 ? "stock__nav active__nav" : "stock__nav"}
          data-num="3"
          onClick={(e) => handleClick(e)}
        >
          Financials
        </a>
      </li>
      <li>
        <a
          href="#"
          className={number == 4 ? "stock__nav active__nav" : "stock__nav"}
          data-num="4"
          onClick={(e) => handleClick(e)}
        >
          Dividends
        </a>
      </li>
      <li>
        <a
          href="#"
          className={number == 5 ? "stock__nav active__nav" : "stock__nav"}
          data-num="5"
          onClick={(e) => handleClick(e)}
        >
          Forecast
        </a>
      </li>
      <li>
        <a
          href="#"
          className={number == 6 ? "stock__nav active__nav" : "stock__nav"}
          data-num="6"
          onClick={(e) => handleClick(e)}
        >
          Ownership
        </a>
      </li>
      <li>
        <a
          href="#"
          className={number == 7 ? "stock__nav active__nav" : "stock__nav"}
          data-num="7"
          onClick={(e) => handleClick(e)}
        >
          Profile
        </a>
      </li>
    </ul>
  );
};
export default HeaderNav;
