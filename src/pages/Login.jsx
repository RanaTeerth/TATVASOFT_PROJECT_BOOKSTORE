import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {Button} from "@mui/material";

function Login() {
  const name = "Teerth";
  return (
    <div className="login">
      <Header />
      <p >
        Here is The Login Page
      </p>
      <p>Welcome {name}</p>  {/* How to add js in html */}
      <br />
      <Link to={"/"} className="homelink">Click Here to Go Home page</Link>
      <br />
      <br />
      <Link to={"/product-page"} className="productpagelink">
        Click Here to Go Product page
      </Link>
      <br />
      <br />

      <Link to={"/cart-page"} className="cartpagelink">Click Here To Go Cart Page</Link>
      <br />
      <br />
      <br />

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>      
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Login;