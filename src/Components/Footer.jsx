import React from "react";
import logo from "../assets/tatvasoft.jpg";
function Footer() {
  return (
    <div className="flex bg-[#efefef] py-7 items-center justify-center mt-5">
      <img src={logo} alt="TatvaSoft_Logo" className="h-24 ml-40 w-44" />
      <img src={logo} alt="TatvaSoft_Logo" className="h-24  w-44" />
    </div>
  );
}
export default Footer;