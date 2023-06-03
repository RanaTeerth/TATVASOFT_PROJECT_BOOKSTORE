import React from "react";

import tatvasoft from "../assets/tatvasoft.jpg";
function Footer() {
  return (
    <>
    <div className="bg-slate-400 py-5 flex-row justify-between">
      <p className="font-sans font-bold text-2xl text-black text-left inline-block">
        TatvaSoft Book-Store Project Footer
      </p>
    <div className="flex bg-[#efefef] py-7 items-center justify-center mt-5">
    <img src={tatvasoft} alt="TatvaSoft_Logo" className="h-24 ml-40 w-44" />
    </div>
    </div>
    </>
  );
}
export default Footer;