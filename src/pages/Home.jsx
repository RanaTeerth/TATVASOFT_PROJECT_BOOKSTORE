import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { addIcon } from "../assets/images";
function Home() {
  return (
    <div className="home">
      <Header />
      <p >
        Welcome to Home Page
      </p>
      <br />
      <img src={addIcon}/>
      <br /><br />
      <Link to={"/login"}className="loginlink">Click Here To Login</Link>
      <br />
      <br />
      <Link to={"/register" }>Click Here To Register</Link>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;