import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
function Home() {
  return (
    <div className="">
      <ToastContainer />
      
      <hr />
      <p className="font-sans  font-bold text-2xl text-blue-300 text-center my-7">
        Welcome to Home Page
      </p>
      <Footer />
    </div>
  );
}
export default Home;