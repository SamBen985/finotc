import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <>
      <div className="bg-gray-500 w-full h-[60vh] border-top">
        <div className="w-[60vw] m-auto flex justify-between">
          <div className="flex flex-col">
            <h6 className="text-white pt-5 mb-4">
              <strong>Locations</strong>
            </h6>
            <h6 className="text-white">
              <strong>Australia</strong>
            </h6>
            <h6 className="font-thin text-white">ACN 164 874597</h6>
            <h6 className="text-white mt-4">
              <strong>Melbourne</strong>
            </h6>
            <h6 className="font-thin text-white w-[250px]">
              Level 6, 412 St Kilda Road Melbourne, VIC 3004
            </h6>
            <h6 className="text-white mt-4">
              <strong>Sydney</strong>
            </h6>
            <h6 className="font-thin text-white w-[250px]">
              Level 16, 1 Martin Place Sydney, NSW 2000
            </h6>
          </div>
          <div className="flex flex-col">
            <h6 className="text-white pt-5 mb-4">
              <NavLink to="/">Home</NavLink>
            </h6>
            <h6 className="text-white mb-4">
              <NavLink to="/crypto">Crypto</NavLink>
            </h6>
            <h6 className="text-white mb-4">
              <NavLink to="/about">About</NavLink>
            </h6>
            <h6 className="text-white mb-4">
              <NavLink to="/requirements">Requirements</NavLink>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
