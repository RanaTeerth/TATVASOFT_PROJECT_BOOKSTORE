import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Searchbar from "../Components/Searchbar";
function CartPage() {
  return (
    <>
    <div className="cartpage">
      <br /><br /><br /><br />
      <center>
      <p className="cart">
      
        This is Cart Page
      </p>
      </center>
      <br />
      <br />
      <Link to={"/"}>
        Click Here To Go Home
      </Link>
      <br />
      <br />
      
      <Footer />
    </div>
    </>
  );
}

export default CartPage;