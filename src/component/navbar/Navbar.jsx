import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import BaseButton from "../base-buttons/BaseButton";
import { useState } from "react";
import "../../styles/navbar.css";
const Navbar = () => {
  const [check, setCheck] = useState(2);
  const handleClick = (e) => {
    let id = e.target.dataset.num;
    setCheck(id);
  };
  return (
    <nav className="py-[30px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="nav__logo max-w-[162px] max-h-[37.56px]">
            <img src={logo} alt="nav-logo" className="w-full h-full" />
          </div>
          <ul className="flex items-center gap-[85px]">
            <li>
              <NavLink
                to="/market"
                className="text-base text-black font-medium leading-[19px]"
              >
                Markets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/screen"
                className="text-base text-black font-medium leading-[19px]"
              >
                Screener
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="text-base text-black font-medium leading-[19px]"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pro"
                className="text-base text-black font-medium leading-[19px]"
              >
                Pro
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-[15px]">
            <button
              className={
                check == "1"
                  ? "registration__btn py-[9px] px-[18px] registration__btn__active"
                  : "registration__btn py-[9px] px-[18px]"
              }
              data-num="1"
              onClick={(e) => handleClick(e)}
            >
              Sign in
            </button>
            <button
              className={
                check == "2"
                  ? "registration__btn py-[9px] px-[26px] registration__btn__active"
                  : "registration__btn py-[9px] px-[26px]"
              }
              data-num="2"
              onClick={(e) => handleClick(e)}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
