import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function ProductPage() {
  return (
    <div className="text-center">
      <Header />
      <p className="font-sans text-center font-bold text-2xl text-yellow-900">
        Product Page
      </p>
      <br />
      <Link to={"/cart-page" }  className="cartpagelink">Click Here To Go Cart Page</Link>
      <br />
      <br />
      <Link to={"/" } className="homelink">Click Here to go Home page</Link>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ProductPage;