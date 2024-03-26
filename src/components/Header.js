import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../styles/navbar.css";

function Header() {
  return (
    <>
      <nav
        className="w-full bg-gray-400  h-[100px] flex justify-end items-center 
       "
      >
        <Logo />

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `w-[10vw] text-base text-center font-nunito m-2.5 ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
            } border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/crypto"
          end
          className={({ isActive }) =>
            `w-[10vw] text-base text-center font-nunito m-2.5 ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
            } border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          Crypto
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `w-[10vw] text-base text-center font-nunito m-2.5 ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
            } border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/requirements"
          className={({ isActive }) =>
            `w-[10vw] text-base text-center font-nunito m-2.5 ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
            } border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          Requirements
        </NavLink>
        <NavLink
          to="/conversion"
          className={({ isActive }) =>
            `w-[10vw] text-base text-center font-nunito m-2.5 ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
            } border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          Conversion
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
