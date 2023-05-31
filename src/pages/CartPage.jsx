import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function CartPage() {
  return (
    <div className="cartpage">
      <Header />
      <p>
        This is Cart Page
      </p>
      <br />
      <Link to={"/"} className="homelink">Click Here to Go Home page</Link>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default CartPage;