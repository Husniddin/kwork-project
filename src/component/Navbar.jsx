import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import BaseButton from "./BaseButton";
const Navbar = () => {
  const handler = () => {
    alert("Hi");
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
              <a
                href="/market"
                className="text-base text-black font-medium leading-[19px]"
              >
                Markets
              </a>
            </li>
            <li>
              <a
                href="/screen"
                className="text-base text-black font-medium leading-[19px]"
              >
                Screener
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="text-base text-black font-medium leading-[19px]"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/pro"
                className="text-base text-black font-medium leading-[19px]"
              >
                Pro
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-[15px]">
            <BaseButton context="Sign in" onClick="handler" />
            <BaseButton context="Sign up" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
