import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import BaseButton from "../base-buttons/BaseButton";
import { useState } from "react";
const Navbar = () => {
  const [num, setNum] = useState(1);
  const handler = () => {
    setNum(1);
  };
  const handlerTwo = () => {
    setNum(2);
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
            <BaseButton context="Sign in" handlerClick={handler} />
            <BaseButton context="Sign up" handlerClick={handlerTwo} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
